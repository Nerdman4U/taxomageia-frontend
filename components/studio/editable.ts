import * as types from './editor.types'
import { breadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumb.type'
import * as taxon from '@/lib/interfaces/taxon.interface'
import * as taxomageia from '@/lib/interfaces/taxomageia.interface'
import { random_number, random_identifier } from '@/lib/utils/functions'
import * as metadata from '@/lib/config/metadata'

export interface editable {
  data: any
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
class CoreModel implements editable {
  #data: any
  #model_metadata: types.model_metadata

  /**
   * When creating a new model its class is known and metadata can be passed.
   * 
   * 
   * @param data 
   * @param metadata 
   */
  constructor(data: any, metadata: any) {
    this.#data = structuredClone(data)
    this.#model_metadata = structuredClone(metadata)
  }

  get identifier() { 
    if (this.data.identifier) return this.data.identifier
    this.data.identifier = random_identifier(this.className)
    return this.data.identifier
  }
  get created_at() { return this.data.created_at }
  get updated_at() { return this.data.updated_at }
  get data() { return this.#data }
  set data(value: any) { this.#data = value }
  get name_fi() { return this.data.name_fi }
  get name_en() { return this.data.name_en }
  setValue(key:string, value:string) { this.data[key] = value }

  get model_metadata() { return this.#model_metadata }
  get className() { return this.model_metadata.name }
  get attribute_metadata() { return this.#model_metadata.attribute_metadata }
 
  addHasMany(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    if (!this.data[association]) this.data[association] = []
    this.data[association].push(data)
    this.updateAssociations()
  }
  
  addHasOne(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    this.data[association] = data
    this.updateAssociations()
  }
 
  verifyAssociation(association: string) {
    return this.attribute_metadata.find((a: any) => { 
      return a.type === 'has_many' && a.identifier === association
    })
  }

  static new (data: any, identifier: string) { 
    const meta = metadata.find(identifier)    
    if (!meta) throw new Error(`metadata for ${identifier} not found`)
    const constructor: any = this.prototype.constructor
    const obj = new constructor(data, meta)
    obj.identifier
    obj.updateAssociations()
    return obj
  }

    /**
     * 
     * Find associated object recursively based on information on breadcrumbs[object]
     * 
     * Example
     * const obj = taxomageia.find([
     *   {name:'taxomageia', id:'TaxomageiaModel_123123123'},
     *   {name:'taxon', association:'taxons', id:'TaxonModel_123123123'},
     *   {name:'existence', association:'existences', id:'ExistenceModel_123123123'},
     * ])
     *  */ 
  find(p: breadcrumb[] = []): any {
    const path = structuredClone(p)
    //console.log('10 editable.find() path:', path)
    if (!path) return this
    const path_item = path.splice(0, 1)[0]
    //console.log('20 editable.find() path_item:', path_item)
    if (!path_item) return this
    if (!path_item.association) {
      // first taxomageia model
      //console.log('22 editable.find() path:', path)
      return this.find(path)
    }
    let objs = this[path_item.association as keyof this] as any[]
    //console.log('30 editable.find() objs:', objs)
    if (!objs) return null
    // has_one
    if (objs instanceof Array === false) objs = [objs]
    const obj = objs.find((o: any) => o.identifier === path_item.identifier)
    //console.log('40 editable.find() obj:', obj)
    if (!obj) return null // found associations but not the object
    if (path.length === 0) return obj
    return obj.find(path)
  }

  find2(p: breadcrumb[] = []) {
    const path = structuredClone(p)
    console.log('10 editable.find() path:', path)
    if (!path) return this
    const path_item = path.splice(path.length - 1, 1)[0]
    console.log('20 editable.find() path_item:', path_item)
    if (!path_item) return this
    if (!path_item.association) return this
    let objs = this[path_item.association as keyof this] as any[]
    console.log('30 editable.find() objs:', objs)
    if (!objs) return null
    // has_one
    if (objs instanceof Array === false) objs = [objs]
    const obj = objs.find((o: any) => o.identifier === path_item.identifier)
    console.log('40 editable.find() obj:', obj)
    if (!obj) return null
    if (path.length === 1) return obj
    return obj.find(path)
  }

  export() {
    const exported = {} as any
    if (!this.attribute_metadata) throw new Error ('attribute_metadata not defined')
    this.attribute_metadata.forEach((a:any) => {
      if (a.type === 'has_many') {
        //console.log('editable.export() a.identifier:', a.identifier)
        if (!this[a.identifier]) return
        exported[a.identifier] = this[a.identifier].map((o:any) => o.export())
      } else {
        exported[a.identifier] = this.data[a.identifier]
      }
    })
    return exported
  }

  get associations(): any[] {
    return this.attribute_metadata.filter((a:any) => {
      return (a.type === 'has_many' || a.type === 'has_one')
    })
  }

  findAssociationMetadata(identifier: string) {
    return this.associations.find((a:any) => {
      return a.identifier === identifier
    })
  }

  // TODO: nämä palauttaa assosioidut objektit, täytyy miettiä 
  // kuinka lopulta toteutuvat. esim. kannattaako olla kahta metodia? 
  // nythän on näin että typescript saa listan ja objektin.
  findHasManyObjects(association_identifier: string): any[] {
    return this[association_identifier]
  }

  findHasOneObjects(association_identifier: string): any {
    return this[association_identifier]
  }

  /**
   * Add new associated objects if missing.
   * TODO: rename
   * 
   * 1) find associations from attribute metadata
   * 2) check if identifier is already created
   * 3) create new object 
   * 
   */
  updateAssociations() {
    this.associations.map((a:any) => {
      const json_data = this.data[a.identifier]
      if (!json_data) return
      if (json_data.length === 0) return

      // json data of associated objects
      const objs = json_data.map((o:any) => {
        let exists
        switch (a.type) {
          case 'has_many':           
            exists = this.findHasManyObjects(a.identifier)?.find((ex:any) => ex.identifier === o.identifier)
            break
          case 'has_one':
            exists = this.findHasOneObjects(a.identifier)
            break
        }
        if (exists) return exists

        console.log('updateAssociations() a', a)
        return CoreModel.new(o, a.model)        
      })

      switch (a.type) {
        case 'has_many':
          this[a.identifier] = objs
          break
        case 'has_one':
          this[a.identifier] = objs[0]
          break
      }
    })
  }
}

export default CoreModel

