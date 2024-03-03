type model_metadata = {
  id?: number
  identifier: string
  name: string
  description: string
  attribute_metadata: attribute_metadata[]
}

type attribute_metadata = {
  id?: number
  identifier: string
  name: string
  type: string
  widget: string
  model: string
  model_metadatum_name: string
  model_metadatum_id?: number
  description?: string
  editable: boolean
}

export type {
  model_metadata,
  attribute_metadata
}
