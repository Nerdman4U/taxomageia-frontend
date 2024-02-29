import { isNullishCoalesce } from 'typescript'
import * as types from './editor.types'
import { breadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumb.type'
import * as taxon from '@/lib/interfaces/taxon.interface'
import * as taxomageia from '@/lib/interfaces/taxomageia.interface'
import { random_number, random_identifier } from '@/lib/utils/functions'

export interface editable {
  data: any
  addAssociated(association:string, data:any): void
  updateAssociations(): void
}

  /**
   * TaxomageiaModel
   * 
   * Has full data as json. Associated models are intantiated from this data.
   * 
   * Every model has its own metadata.
   * 
   * 
   * metadata:
   * {
   *   taxomageia: { name_fi: '', description_fi: '', attribute_metadata: {} },
   *   taxon: { name_fi: '', ... },
   *   existence: { ... }
   * }
   * 
   * data:
   * {
   *   name_fi, name_en, ...
   *   taxons: [{
   *     ...
   *   }]  
   * }
   */
abstract class CoreModel implements editable {
  #data: any
  static _metadata: any = {}
  constructor(data: any) {
    this.#data = data    
  }
  abstract updateAssociations(): void
  get identifier() { 
    // if (this.data.identifier) return this.data.identifier
    // this.data.identifier = random_identifier(this.className)
    return this.data.identifier
  }
  get created_at() { return this.data.created_at }
  get updated_at() { return this.data.updated_at }
  get data() { return this.#data }
  set data(value: any) { this.#data = value }
  get name_fi() { return this.data.name_fi }
  get name_en() { return this.data.name_en }
  get className() { return this.constructor.name }
  get model(): any { return this.constructor } 
  get model_metadata() { return this.model.metadata }
  get attribute_metadata() { return this.model_metadata.attribute_metadata }
 
  addAssociated(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    if (!this.data[association]) this.data[association] = []
    this.data[association].push(data)
    this.updateAssociations()
  }
 
  verifyAssociation(association: string) {
    return this.attribute_metadata.find((a: any) => { 
      return a.type === 'association' && a.identifier === association
    })
  }

  static get className() { return this.name }
  static get metadata() { return this._metadata }
  static set metadata(value: any) { this._metadata = value }

  static new (data: any) { 
    const constructor: any = this.prototype.constructor
    const obj = new constructor(data)
    obj.identifier
    obj.updateAssociations()
    return obj
  }

    /**
     * const obj = taxomageia.find([
     *   {association:'taxons', id:'TaxonModel_123123123'},
     *   {association:'existences', id:'ExistenceModel_123123123'},
     * ])
     *  */ 
  find(path: breadcrumb[] = []) {
    if (!path) return this
    const path_item = path.splice(path.length - 1, 1)[0]
    if (!path_item) return this
    if (!path_item.association) return null
    const objs = this[path_item.association as keyof this] as any[]
    if (!objs) return null
    const obj = objs.find((o: any) => o.identifier === path_item.identifier)
    if (!obj) return null
    if (path.length === 0) return obj
    return obj.find(path)
  }
}

class TaxomageiaModel extends CoreModel {
  #taxons: TaxonModel[]
  constructor(data: taxomageia.building_up) {
    super(data)
    this.#taxons = []
  }
  get taxons() { return this.#taxons }
  set taxons(value: TaxonModel[]) { this.#taxons = value }
  get taxons_json() { return this.data.taxons || [] }
  updateAssociations() {
    if (!this.taxons_json) return
    if (this.taxons_json.length === 0) return
    const taxons = this.taxons_json.map((t:any) => {
      const exists = this.taxons.find(ex => ex.identifier === t.identifier)
      if (exists) return exists
      return TaxonModel.new(t)
    })
    this.taxons = taxons
  }
}
class TaxonModel extends CoreModel {
  constructor(data: taxon.building_up) {
    super(data)
  }
  updateAssociations() {

  }
}

export {
  TaxomageiaModel,
  TaxonModel
}

