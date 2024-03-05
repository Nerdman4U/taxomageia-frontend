import { beforeEach, expect, describe, it } from 'vitest'
import CoreModel from './editable.js'
import { building_up } from '@/lib/interfaces/taxomageia.interface.js'
import deepfreeze from 'deep-freeze'
import * as metadata from '@/lib/features/studio/metadata/__mocks__/metadata'
//import * as util from 'util'

describe('Editable', () => {

  let obj: any
  let values: any
  beforeEach(async () => {
    values = {
      identifier: 'taxomageia_12123',
      created_at: new Date,
      updated_at: new Date,
      name_fi: "testi",
      name_en: "test",
      taxons: [{
        identifier: 'taxon_123123',
        name_fi: "testi",
        name_en: "testi",
        taxon_rank: "domain",
        taxon_parent: "test2",
        existences: [{
          identifier: "testi",
          type: "physical",
          name_fi: "testi",
          name_en: "testi",
        }]
      }]
    } as building_up
    deepfreeze(values)
    obj = CoreModel.new(values, 'taxomageia', metadata.metadata)
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
  })

  it('has a random identifier', () => {
    expect(obj.identifier).toBeDefined()
  })

  it('finds has_many', () => {
    const taxons = obj.findHasManyObjects('taxons')
    expect(taxons).toBeDefined()
    //console.log('taxons: ', taxons.map(t => t.data))
    expect(taxons[0].identifier).toBeDefined()
    expect(taxons[0].identifier.match(/^taxon_[0-9]+$/)).toBeTruthy()
  })

  it('gets metadata', () => {
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
    expect(obj.associated_objects.taxons.length).toBe(1)
    expect(obj.associated_objects.taxons[0].name_fi).toBe('testi')
    obj.addHasMany('taxons', { identifier: 'TaxonModel_123456' })
    expect(obj.associated_objects.taxons.length).toBe(2)
    obj.addHasMany('taxons', { identifier: 'TaxonModel_1234567', 'name_fi': "testiä taas" })
    expect(obj.associated_objects.taxons.length).toBe(3)
  })

  it('returns associations', () => {
    expect(obj.associations).toBeDefined()
    expect(obj.associations.length).toBe(1)
    expect(obj.associations[0].identifier).toBe('taxons')
  })

  it('finds objects', () => {
    expect(obj.associated_objects.taxons.length).toBe(1)
    expect(obj.associated_objects.taxons[0].associated_objects.existences).toBeDefined()
    expect(obj.associated_objects.taxons[0].associated_objects.existences.length).toBe(1)
    const id = obj.associated_objects.taxons[0].identifier
    const existence_id = obj.associated_objects.taxons[0].associated_objects.existences[0].identifier
    expect(id).toBeDefined()
    expect(existence_id).toBeDefined()
    expect(obj.find()).toEqual(obj)

    let bc = [{name: "Taxomageia", identifier: obj.identifier}]
    expect(obj.find(bc)).toEqual(obj)

    bc = [
      {name: "taxomageia", identifier: obj.identifier},
      {name: "taxon", association:'taxons', identifier:id}
    ] as any[]
    expect(obj.find(bc)).toBeDefined()

    bc = [
      { name: "taxomageia", identifier: obj.identifier },
      { name: "taxon", association: 'taxons', identifier: id },
      { name: "existence", association: 'existences', identifier: existence_id }
    ] as any[]
    const found = obj.find(bc)
    expect(found).toBeDefined()
    expect(found.data).toBeDefined()
    expect(found.data.identifier).toBe('testi')
    expect(found.data.type).toBe('physical')
    expect(found.data.name_fi).toBe('testi')
    expect(found.data.name_en).toBe('testi')

    obj.addHasMany('taxons', { identifier: 'TaxonModel_123456' })
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:id}])).toBeDefined()
    expect(obj.find([{name: "Taxons", association:'taxons', identifier:'TaxonModel_123456'}])).toBeDefined()
  })

  it('exports', () => {
    let e
    e = obj.export()
    //console.log('exported:', util.inspect(e, false, 20))
    expect(values).toBeDefined()
    expect(e.name_fi).toBe(values.name_fi)
    expect(e.taxons).toBeDefined()
    expect(e.taxons.length).toBe(1)
    expect(e.taxons[0].name_fi).toBe(values.taxons[0].name_fi)

    const tax = obj.associated_objects.taxons[0]
    tax.setValue('name_fi', 'testi123')
    expect(tax.name_fi).toBe('testi123')
    e = obj.export()
    expect(e.taxons[0].name_fi).toBe('testi123')
  })
})


