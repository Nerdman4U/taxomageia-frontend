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
      "model_metadatum_id": 8,
      "showAtWidgetList": false
    },
    {
      "id": 140,
      "identifier": "identifier",
      "name": "Identifier",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 8,
      "showAtWidgetList": false
    },
    {
      "id": 141,
      "identifier": "name_en",
      "name": "Name (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8,
      "showAtWidgetList": true
    },
    {
      "id": 142,
      "identifier": "name_fi",
      "name": "Name (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8,
      "showAtWidgetList": false
    },
    {
      "id": 143,
      "identifier": "description_en",
      "name": "Description (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8,
      "showAtWidgetList": false
    },
    {
      "id": 144,
      "identifier": "description_fi",
      "name": "Description (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8,
      "showAtWidgetList": false
    },
    {
      "id": 145,
      "identifier": "taxons",
      "name": "Taxons",
      "type": "has_many",
      "widget": "model",
      "description": null,
      "editable": true,
      "model_metadatum_id": 8,
      "showAtWidgetList": false
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
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 147,
      "identifier": "identifier",
      "name": "Identifier",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": false,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 148,
      "identifier": "taxon_rank",
      "name": "Taxon rank",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": true
    },
    {
      "id": 149,
      "identifier": "taxon_parent",
      "name": "Taxon parent",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 150,
      "identifier": "properties",
      "name": "Properties",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 151,
      "identifier": "abilities",
      "name": "Abilities",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 152,
      "identifier": "name_en",
      "name": "Name (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": true
    },
    {
      "id": 153,
      "identifier": "name_fi",
      "name": "Name (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 154,
      "identifier": "description_en",
      "name": "Description (en)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 155,
      "identifier": "description_fi",
      "name": "Description (fi)",
      "type": "string",
      "widget": "string",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    },
    {
      "id": 156,
      "identifier": "existences",
      "name": "Existences",
      "type": "has_many",
      "widget": "model",
      "description": null,
      "editable": true,
      "model_metadatum_id": 9,
      "showAtWidgetList": false
    }
  ]
}

export {
  taxomageia,
  taxon
}