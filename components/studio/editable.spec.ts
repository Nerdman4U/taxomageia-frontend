import { beforeEach, expect, describe, it, vi } from 'vitest'
import CoreModel from './editable.js'
import { building_up } from '@/lib/interfaces/taxomageia.interface.js'
import deepfreeze from 'deep-freeze'
import * as util from 'util'
import * as metadata from '@/lib/config/metadata'
import * as types from './editor.types.js'

vi.mock('@/lib/config/metadata')

describe('Editable', () => {

  let obj: CoreModel
  let values: any
  beforeEach(async () => {
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
    obj = CoreModel.new(values, 'taxomageia')
  })

  it('is defined', () => {
    expect(obj).toBeDefined()    
    expect(obj.data).toBeDefined()
    expect(obj.data.taxons).toBeDefined()
    expect(obj.data.taxons.length).toBe(1)
    expect(obj.className).toBe('Taxomageia')    
  })

  it('has cloned data', () => {
    expect(obj.data === values).toBe(false)
    expect(obj.data['taxons']).toBeDefined()
    expect(obj.data.taxons[0] === values.taxons[0]).toBe(false)
    //console.log(util.inspect(obj.data, false, null, true))
  })

  it('has a random identifier', () => {
    console.log('identifier:', obj.identifier)
    expect(obj.identifier).toBeDefined()
  })

  it('finds has_many', () => {
    let taxons = obj.findHasManyObjects('taxons')
    expect(taxons).toBeDefined()
    expect(taxons[0].identifier).toBeDefined()
    expect(taxons[0].identifier.match(/^Taxon_[0-9]+$/)).toBeTruthy()
  })

  it('gets metadata', () => {
    //expect(obj.className).toBe('TaxomageiaModel')
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

  it('returns associations', () => {
    expect(obj.associations).toBeDefined()
    expect(obj.associations.length).toBe(1)
    expect(obj.associations[0].identifier).toBe('taxons')
  })

  it('finds objects', () => {
    expect(obj.taxons.length).toBe(1)
    const id = obj.taxons[0].identifier
    expect(obj.find()).toEqual(obj)
    expect(obj.find([{name: "Taxomageia", identifier: obj.identifier}])).toEqual(obj)
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:id}])).toBeDefined()
    obj.addAssociated('taxons', { identifier: 'TaxonModel_123456' })
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:id}])).toBeDefined()
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:'TaxonModel_123456'}])).toBeDefined()
  })

  it('exports', () => {
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


