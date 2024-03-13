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
  model_metadata,
  editable_item,
  editable_items
}


