export const metadata = {
  'taxomageia':
  {
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
  },
  'taxon':
  {
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
  },
  'existence':
  {
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
}
