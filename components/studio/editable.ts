import * as types from './editor.types'

export interface editable {
  data: any
  metadata: []
  meta_name: string
  attribute_metadata: []
  getMetadata(): any
  setMetadata(): void
}

  /**
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
  class TaxomageiaModel {
  #data: any
  #metadata: any
  constructor(data: any) {
    this.#data = data
    this.#metadata = {}
  }
  get data() { return this.#data }
  set data(value: any) { this.#data = value }
  get metadata() { return this.#metadata }
  set metadata(value: any) { this.#metadata = value }

  get meta_name() { return this.#metadata.name }
  get meta_description() { return this.#metadata.description }

  getMetadata(key: string) { return this.#metadata[key] }
  setMetadata(key: string, value: any) { this.#metadata[key] = value }
}

export {
  TaxomageiaModel
}

