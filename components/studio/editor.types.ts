import * as taxomageia from '@/interfaces/taxomageia.interface.js'
import * as taxon from '@/interfaces/taxon.interface.js'

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

export type {
  breadcrumb,
  model_metadata
}


