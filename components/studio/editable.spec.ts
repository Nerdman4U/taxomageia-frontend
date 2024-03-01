import { beforeEach, expect, describe, it } from 'vitest'
import { TaxomageiaModel, TaxonModel } from './editable.js'
import { building_up } from '@/lib/interfaces/taxomageia.interface.js'
import deepfreeze from 'deep-freeze'
import * as util from 'util'

describe('Editable', () => {

  let obj: TaxomageiaModel
  let values: any
  beforeEach(async () => {
    TaxomageiaModel.metadata = {
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
        model: "TaxonModel",
        type: "has_many"
      }]
    }

    TaxonModel.metadata = {
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
        model: "ExistenceModel",
        type: "has_many"
      }]
    }

    values = {
      created_at: new Date,
      updated_at: new Date,
      name_fi: "testi",
      name_en: "test",
      taxons: [{
        name_fi: "testi",
        name_en: "testi",
        taxon_rank: "domain",
        taxon_parent: "test2"
      }]
    } as building_up
    deepfreeze(values)
    obj = TaxomageiaModel.new(values)
  })

  it('is defined', () => {
    expect(obj).toBeDefined()    
    expect(obj.data).toBeDefined()
    expect(obj.data.taxons).toBeDefined()
    expect(obj.data.taxons.length).toBe(1)
    expect(obj.taxons_json).toBeDefined()
    expect(obj.taxons_json.length).toBe(1)
    expect(obj.className).toBe('TaxomageiaModel')
    expect(TaxomageiaModel.className).toBe('TaxomageiaModel')
  })

  it('has cloned data', () => {
    expect(obj.data === values).toBe(false)
    expect(obj.data['taxons']).toBeDefined()
    expect(obj.data.taxons[0] === values.taxons[0]).toBe(false)
    console.log(util.inspect(obj.data, false, null, true))
  })

  it('has a random identifier', () => {
    console.log('identifier:', obj.identifier)
    expect(obj.identifier).toBeDefined()
  })

  it('has taxons', () => {
    expect(obj.taxons).toBeDefined()
    expect(obj.taxons[0].identifier).toBeDefined()
    expect(obj.taxons[0].identifier.match(/^TaxonModel_[0-9]+$/)).toBeTruthy()
  })

  it('sets and gets metadata with static methods', () => {
    const metadata = {
      identifier: 'taxomageia',
      name: 'Taxomageia',
      attribute_metadata: [{
        name: "id", 
        type: 'number'
      }, {
        name: "identifier",
        type: 'string',
      }, {
        name: "created_at",
        type: "date"
      }]
    }
    TaxomageiaModel.metadata = metadata
    expect(TaxomageiaModel.metadata).toBeDefined()
    expect(TaxomageiaModel.metadata.attribute_metadata).toBeDefined()
    expect(TaxomageiaModel.metadata).toBeDefined()
    expect(TaxomageiaModel.metadata).toEqual(metadata)
  })

  it('gets metadata', () => {
    expect(obj.className).toBe('TaxomageiaModel')
    expect(obj.model_metadata).toBeDefined()
    expect(obj.model_metadata.identifier).toBe('taxomageia')
    expect(obj.model_metadata.name).toBe('Taxomageia')
    expect(obj.attribute_metadata.length).toBe(7)
    expect(obj.attribute_metadata[0].identifier).toBe('id')
    expect(obj.attribute_metadata[1].identifier).toBe('identifier')
    expect(obj.attribute_metadata[2].identifier).toBe('name_fi')
  })

  it('verifies that association exists', () => {
    expect(obj.verifyAssociation('taxons')).toBeDefined()
    expect(obj.verifyAssociation('existences')).toBeUndefined()
    expect(obj.verifyAssociation('')).toBeUndefined()
  })

  it('adds new associated object', () => {
    expect(obj.taxons.length).toBe(1)
    expect(obj.taxons[0].name_fi).toBe('testi')
    obj.addAssociated('taxons', { identifier: 'TaxonModel_123456' })
    expect(obj.taxons.length).toBe(2)
    obj.addAssociated('taxons', { 'name_fi': "testiä taas" })
    expect(obj.taxons.length).toBe(3)
  })

  it('finds objects', () => {
    expect(obj.taxons.length).toBe(1)
    const id = obj.taxons[0].identifier
    expect(obj.find()).toEqual(obj)
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:id}])).toBeDefined()
    obj.addAssociated('taxons', { identifier: 'TaxonModel_123456' })
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:id}])).toBeDefined()
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:'TaxonModel_123456'}])).toBeDefined()
  })

  it.only('exports', () => {
    let e
    e = obj.export()
    expect(values).toBeDefined()
    expect(e.name_fi).toBe(values.name_fi)
    expect(e.taxons).toBeDefined()
    expect(e.taxons.length).toBe(1)
    expect(e.taxons[0].name_fi).toBe(values.taxons[0].name_fi)

    const tax = obj.taxons[0]
    tax.setValue('name_fi', 'testi123')
    expect(obj.taxons[0].name_fi).toBe('testi123')
    e = obj.export()
    expect(e.taxons[0].name_fi).toBe('testi123')
    
  })
})


