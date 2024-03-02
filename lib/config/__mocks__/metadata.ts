import * as types from '@/components/studio/editor.types'

const metadata = [{
  identifier: 'taxomageia',
  name: 'Taxomageia',
  attribute_metadata: [{
    identifier: "id", 
    type: 'number'
  }, {
    identifier: "identifier",
    type: 'string',
  }, {
    identifier: "name_fi",
    type: 'string',
  }, {
    identifier: "name_en",
    type: 'string',
  }, {
    identifier: "created_at",
    type: "date"
  }, {
    identifier: "updated_at",
    type: "date"
  },{
    identifier: "taxons",
    model: "taxon",
    type: "has_many"
  }]
}, {
  identifier: 'taxon',
  name: 'Taxon',
  attribute_metadata: [{
    identifier: "id", 
    type: 'number'
  }, {
    identifier: "identifier",
    type: 'string',
  }, {
    identifier: "name_fi",
    type: 'string',
  }, {
    identifier: "name_en",
    type: 'string',
  }, {
    identifier: "taxon_rank",
    type: 'string',
  }, {
    identifier: "taxon_parent",
    type: 'string',
  }, {
    identifier: "existences",
    model: "existence",
    type: "has_many"
  }]
},{
  identifier: 'existence',
  name: 'Existence',
  attribute_metadata: [{
    identifier: "id", 
    type: 'number'
  },
  {
    identifier: "identifier",
    type: 'string',
  }, {
    identifier: "name_fi",
    type: 'string',
  }, {
    identifier: "name_en",
    type: 'string',
  }]
}

]

export const find = (identifier: string): types.model_metadata | undefined => {
  console.log('mock metadata.find() identifier:', identifier)
  return metadata.find((m: any) => {
    return m.identifier === identifier
  })
}
