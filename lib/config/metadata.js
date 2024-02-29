const taxomageia = {
  "id": 8,
  "identifier": "taxomageia",
  "name": "Taxomageia",
  "description": "Taxomageia",
  "attribute_metadata": [
    {
      "id": 139,
      "identifier": "id",
      "name": "Id",
      "type": "number",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 8
    },
    {
      "id": 140,
      "identifier": "identifier",
      "name": "Identifier",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 8
    },
    {
      "id": 141,
      "identifier": "name_en",
      "name": "Name (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8
    },
    {
      "id": 142,
      "identifier": "name_fi",
      "name": "Name (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8
    },
    {
      "id": 143,
      "identifier": "description_en",
      "name": "Description (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8
    },
    {
      "id": 144,
      "identifier": "description_fi",
      "name": "Description (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8
    },
    {
      "id": 145,
      "identifier": "taxons",
      "name": "Taxons",
      "type": "association",
      "widget": "model",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8
    }
  ]
}

const taxon = {
  "id": 9,
  "identifier": "taxon",
  "name": "Taxon",
  "description": "Taxon is the core model of Taxomageia. Every creature belongs to a taxon and taxons are inherited from parent taxons.",
  "attribute_metadata": [
    {
      "id": 146,
      "identifier": "id",
      "name": "Id",
      "type": "number",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 9
    },
    {
      "id": 147,
      "identifier": "identifier",
      "name": "Identifier",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 9
    },
    {
      "id": 148,
      "identifier": "taxon_rank",
      "name": "Taxon rank",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 149,
      "identifier": "taxon_parent",
      "name": "Taxon parent",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 150,
      "identifier": "properties",
      "name": "Properties",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 151,
      "identifier": "attributes",
      "name": "Attributes",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 152,
      "identifier": "name_en",
      "name": "Name (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 153,
      "identifier": "name_fi",
      "name": "Name (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 154,
      "identifier": "description_en",
      "name": "Description (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 155,
      "identifier": "description_fi",
      "name": "Description (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    },
    {
      "id": 156,
      "identifier": "existences",
      "name": "Existences",
      "type": "association",
      "widget": "model",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9
    }
  ]
}

export {
  taxomageia,
  taxon
}