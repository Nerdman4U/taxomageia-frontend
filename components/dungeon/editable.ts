import * as types from './editor.types'
import * as metadata from '@/lib/features/studio/metadata/metadata.type'
import { breadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumb.type'

interface core {
  [key: string]: any
}
interface associated_objects {
  [key: string]: any
  taxons?: any
  existences?: any
  metamorphoses?: any
  bodies?: any
  body_segments?: any
  connections?: any
  body_parts?: any
  organs?: any
  size?: any
  mins?: any
  maxes?: any
  growths?: any
  skills?: any
}

class CoreModel implements core {
  /**
   * data:
   * {
   *   name_fi, name_en, ...
   *   taxons: [{
   *     ...
   *   }]
   * }
   */
  #data: any
  /**
   * metadata:
   * {
   *   taxomageia: { name_fi: '', description_fi: '', attribute_metadata: {} },
   *   taxon: { name_fi: '', ... },
   *   existence: { ... }
   * }

   */
  #model_metadata: types.model_metadata
  #associated_objects: associated_objects = {}
  static #metadata: Record<string, types.model_metadata> = {} // metadata for all models

  /**
   * When creating a new model its class is known and metadata can be passed.
   *
   * @param data the data for the new model. This is cloned and stored internally
   * @param metadata the metadata for the new model. This is cloned and stored internally
   */
  constructor(data: any, metadata: any) {
    if (!data) throw new Error('data is missing')
    this.#data = structuredClone(data)
    this.#model_metadata = structuredClone(metadata) // clone?
  }

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
  get associated_objects() { return this.#associated_objects }
  set associated_objects(value) { this.#associated_objects = value }

  /**
   * Creates a new instance of the model class based on metadatum name and
   * optionally new metadata.
   *
   * If metadata is given it sets the static class metadata for all instances
   * of the class and all future instances.
   *
   * @param data the data to be used for the new model
   * @param model_metadatum_name the name of the metadatum that defines the model
   * @param metadata optional metadata for the class that is used for all
   *        instances of the class and all future instances
   * @returns a new instance of the model or null if the metadata did not
   *          contain the metadatum
   */
  static new (data: any, model_metadatum_name: string, metadata?: any) {
    if (!metadata && !this.#metadata) {
      //console.error('Editable.new() No metadata')
      return null
    }
    if (metadata) this.#metadata = metadata
    const metadatum = this.#metadata[model_metadatum_name]
    if (!metadatum) {
      //console.error('Editable.new() No metadatum. metadata:', this.#metadata, model_metadatum_name)
      return null
    }
    if (!metadatum.attribute_metadata) {
      console.error('Editable.new() No attribute metadata')
      return null
    }
    if (!data.identifier) throw new Error(`data has no identifier`)
    const obj = new CoreModel(data, metadatum)
    obj.updateAssociations()
    return obj
  }

  /**
   * Adds new data to the has_many association.
   *
   * @param association the association to add data to
   * @param data the data to add to the association
   * @throws Error if the association does not exist or if the data does not
   *         have an identifier
   */
  addHasMany(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    if (!this.data[association]) this.data[association] = []
    if (!data.identifier) throw new Error(`data has no identifier`)
    console.log('10 CoreModel.addHasMany() data:', data)
    this.data[association].push(data) // add new json data to model.data[] array
    this.updateAssociations()
  }

  /**
   * Adds new data to the has_one association.
   *
   * @param association the association to add data to
   * @param data the data to add to the association
   * @throws Error if the association does not exist
   */
  addHasOne(association: string, data: any) {
    if (!this.verifyAssociation(association)) throw new Error(`association ${association} not defined`)
    this.data[association] = data
    this.updateAssociations()
  }

  /**
   * Verifies that the association exists in the model metadata.
   *
   * @param association the identifier of the association to check
   * @returns the metadata object if the association exists, otherwise undefined
   */
  verifyAssociation(association: string): any | undefined {
    return this.attribute_metadata.find((a: any) => {
      return (a.type === 'has_many' || a.type === 'has_one') && a.identifier === association
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
    let objs = this.associated_objects[path_item.association as keyof associated_objects]
    if (!objs) return null
    if (objs instanceof Array === false) objs = [objs] // has_one
    objs = objs.filter((o: any) => o.identifier)
    if (objs.length === 0) throw new Error ('No objects in ' + path_item.association)
    //console.log('30 editable.find() objs:', objs.map((o:any) => o.identifier))

    // has_one
    if (objs instanceof Array === false) objs = [objs]
    const obj = objs.find((o: any) => o.identifier === path_item.identifier)
    //console.log('40 editable.find() obj.data:', obj.data, 'objs:', objs.map(o => o.identifier), 'path_item:', path_item.identifier)
    if (!obj) throw new Error('Wooops! Where is the object?') // found associations but not the object
    if (path.length === 0) return obj
    return obj.find(path)
  }

  /**
   * Export associated objects recursively based on information on attribute_metadata
   *
   * Example
   * const exported = taxomageia.export()
   * console.log(exported)
   * {
   *   taxons: [
   *     {
   *       identifier: 'TaxonModel_123123123',
   *       name: 'Bacteria',
   *       rank: 'kingdom',
   *       existences: [
   *         {
   *           identifier: 'ExistenceModel_123123123',
   *           name: 'Bacteria (taxonomic rank)',
   *           source: 'Wikipedia'
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  export() {
    const exported = {} as any
    if (!this.attribute_metadata) throw new Error ('attribute_metadata not defined')
    if (!this.identifier) throw new Error ('identifier not defined')
    this.attribute_metadata.forEach((a:metadata.attribute_metadata) => {
      //console.log('10 editable.export() am:', a)
      if (a.type === 'has_many') {
        if (!this.associated_objects[a.identifier as keyof CoreModel]) return
        //console.log('20 editable.export() a.identifier:', a.identifier, 'identifiers:', this.associated_objects[a.identifier].map(o => o.identifier))
        exported[a.identifier] = this.associated_objects[a.identifier as keyof associated_objects].map((o:any) => o.export())
      } else if (a.type === 'has_one') {
        if (!this.associated_objects[a.identifier as keyof CoreModel]) return
        //console.log('30 editable.export() a.identifier:', a.identifier, 'identifiers:', this.associated_objects[a.identifier])
        exported[a.identifier] = this.associated_objects[a.identifier as keyof CoreModel].export()
      }
      else {
        exported[a.identifier] = this.data[a.identifier]
      }
    })
    return exported
  }

  /**
   * Get associations from the attribute metadata.
   *
   * @return {any[]} the array of associations
   */
  get associations(): any[] {
    return this.attribute_metadata.filter((a:any) => {
      return (a.type === 'has_many' || a.type === 'has_one')
    })
  }

  /**
   * Find association metadata by identifier.
   *
   * @param {string} identifier - The identifier to search for
   * @return {any} The association metadata with the specified identifier, if found
   */
  findAssociationMetadata(identifier: string) {
    return this.associations.find((a:any) => {
      return a.identifier === identifier
    })
  }

  // TODO: nämä palauttaa assosioidut objektit, täytyy miettiä
  // kuinka lopulta toteutuvat. esim. kannattaako olla kahta metodia?
  // nythän on näin että typescript saa listan ja objektin.
  findHasManyObjects(association_identifier: string): any[] {
    return this.associated_objects[association_identifier as keyof associated_objects]
  }

  findHasOneObjects(association_identifier: string): any {
    return this.associated_objects[association_identifier as keyof associated_objects]
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
    this.associations.map((a: metadata.attribute_metadata) => {
      let json_data = this.data[a.identifier]
      //console.log('10 updateAssociations() json_data:', json_data, 'a.identifier:', a.identifier)
      if (!json_data) return
      if (json_data instanceof Array === false) json_data = [json_data]
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

        //console.log('20 updateAssociations() attribute_metadata:', a, 'object.identifier:', o.identifier)
        const obj = CoreModel.new(o, a.model)
        if (!obj) throw new Error('obj not defined')
        return obj
      })

      switch (a.type) {
        case 'has_many':
          if (!objs) objs = []
          this.associated_objects[a.identifier] = objs.filter((o:any) => o)
          break

        case 'has_one':
          const obj = objs[0]
          if (!obj) throw new Error('obj not defined')
          this.associated_objects[a.identifier] = obj
          break
      }
    })
  }
}

export default CoreModel

