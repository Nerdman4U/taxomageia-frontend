import * as types from './editor.types'

export interface editable {
  data: any
  metadata: []
  meta_name: string
  items: []
}

class CoreModel {
  #data: any
  #metadata: any
  constructor(metadata: any, data: any) {
    this.#data = data
    this.#metadata = metadata
  }
  get data() { return this.#data }
  set data(value: any) { this.#data = value }
  get metadata() { return this.#metadata || [] }
  get meta_name() { 
    return this.#metadata.name
  }
}

class TaxomageiaModel extends CoreModel implements editable {
  constructor(data: any, metadata: any) {
    super(data, metadata)
  }
  get items() {
    return this.metadata.attribute_metadata
  }


}

export {
  TaxomageiaModel
}

