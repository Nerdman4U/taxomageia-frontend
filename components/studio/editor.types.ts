import * as taxomageia from '@/lib/interfaces/taxomageia.interface.js'
import * as taxon from '@/lib/interfaces/taxon.interface.js'

type breadcrumb = {
  name: string
  model: any
  object_id?: string
  association?: string
}

type model_metadata = {
  identifier: string
  name: string
  attribute_metadata: any
}

type editable_item = {
  association_metadata: any,
  item_metadata: any,
  data: any
}

type editable_items = {
  association_metadata: any,
  item_metadata: any,
  data: any[]
}

export type {
  breadcrumb,
  model_metadata,
  editable_item,
  editable_items
}


