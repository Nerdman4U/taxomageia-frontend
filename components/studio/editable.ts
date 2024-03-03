import * as types from './editor.types'
import { breadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumb.type'
import * as taxon from '@/lib/interfaces/taxon.interface'
import * as taxomageia from '@/lib/interfaces/taxomageia.interface'
import { random_number, random_identifier } from '@/lib/utils/functions'

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
class CoreModel {
  #data: any
  #model_metadata: types.model_metadata
  static #metadata: Record<string, types.model_metadata> = {} // metadata for all models

  /**
   * When creating a new model its class is known and metadata can be passed.
   *
   *
   * @param data
   * @param metadata
   */
  constructor(data: any, metadata: any) {
    if (!data) throw new Error('data is missing')
    this.#data = structuredClone(data)
    this.#model_metadata = structuredClone(metadata) // clone?
  }

  // TODO: not indempotent
  get identifier() {
    // if (this.data.identifier) return this.data.identifier
    // this.data.identifier = random_identifier(this.className)
    return this.data.identifier
  }
  get created_at() { return this.data.created_at }
  get updated_at() { return this.data.updated_at }
  get data() { return this.#data }
  set data(value: any) {
    if (!value) throw new Error('data is missing')
    this.#data = value
  }
  get name_fi() { return this.data.name_fi }
  get name_en() { return this.data.name_en }
  setValue(key:string, value:string) { this.data[key] = value }
  get model_metadata() { return this.#model_metadata }
  get className() { return this.model_metadata.name }
  get attribute_metadata() { return this.#model_metadata.attribute_metadata }

  /**
   *
   * @param data
   * @param {key: string, value: types.model_metadata} meta all metadata
   * @returns
   */
  static new (data: any, model_metadatum_name: string, metadata?: any) {
    console.log('10 CoreModel.new() data:', data, 'model_metadatum_name:', model_metadatum_name, 'metadata:', metadata, 'this.metadata:', this.#metadata)
    if (!metadata && !this.#metadata) return null
    console.log('20 CoreModel.new()')
    if (metadata) this.#metadata = metadata
    const metadatum = this.#metadata[model_metadatum_name]
    if (!metadatum) return null
    console.log('30 CoreModel.new()')
    if (!metadatum.attribute_metadata) return null
    console.log('40 CoreModel.new()')
    if (!data.identifier) throw new Error(`data has no identifier`)
    const obj = new CoreModel(data, metadatum)
    console.log('40 CoreModel.new() identifier:', obj.identifier)
    obj.updateAssociations()
    return obj
  }

  addHasMany(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    if (!this.data[association]) this.data[association] = []
    if (!data.identifier) throw new Error(`data has no identifier`)
    console.log('10 CoreModel.addHasMany() data:', data)
    this.data[association].push(data) // add new json data to model.data[] array
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
    console.log('10 editable.find() path:', path)
    if (!path) return this
    const path_item = path.splice(0, 1)[0]
    console.log('20 editable.find() path_item:', path_item)
    if (!path_item) return this
    if (!path_item.association) {
      // first taxomageia model
      console.log('22 editable.find() path:', path)
      return this.find(path)
    }
    let objs = this[path_item.association]
    if (!objs) return null
    objs = objs.filter((o: any) => o.identifier)
    if (objs.length === 0) throw new Error ('No objects in ' + path_item.association)
    console.log('30 editable.find() objs:', objs.map((o:any) => o.identifier))

    // has_one
    if (objs instanceof Array === false) objs = [objs]
    const obj = objs.find((o: any) => o.identifier === path_item.identifier)
    console.log('40 editable.find() obj.data:', obj.data, 'objs:', objs.map(o => o.identifier), 'path_item:', path_item.identifier)
    if (!obj) throw new Error('Wooops! Where is the object?') // found associations but not the object
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
    if (!this.identifier) throw new Error ('identifier not defined')
    this.attribute_metadata.forEach((a:any) => {
      // console.log('10 editable.export() am:', a)
      if (a.type === 'has_many') {
        if (!this[a.identifier]) return
        // console.log('20 editable.export() a.identifier:', a.identifier, 'identifiers:', this[a.identifier].map((o:any) => o.identifier))
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
   * TODO: rename => createAssociatedObjectsFromJSON
   *
   * 1) find associations from attribute metadata
   * 2) check if identifier is already created
   * 3) create new object
   *
   */
  updateAssociations() {
    this.associations.map((a:any) => {
      const json_data = this.data[a.identifier]
      console.log('10 updateAssociations() json_data:', json_data, 'a.identifier:', a.identifier)
      if (!json_data) return
      if (json_data.length === 0) return

      // json data of associated objects
      let objs = json_data.map((o:any) => {
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
        if (!CoreModel.#metadata) throw new Error('CoreModel.#metadata not defined')

        console.log('20 updateAssociations() attribute_metadata:', a, 'object.identifier:', o.identifier)
        const obj = CoreModel.new(o, a.model)
        if (!obj) throw new Error('obj not defined')
        return obj
      })

      switch (a.type) {
        case 'has_many':
          if (!objs) objs = []
          this[a.identifier] = objs.filter((o:any) => o)
          break
        case 'has_one':
          const obj = objs[0]
          if (!obj) throw new Error('obj not defined')
          this[a.identifier] = obj
          break
      }
    })
  }
}

export default CoreModel

