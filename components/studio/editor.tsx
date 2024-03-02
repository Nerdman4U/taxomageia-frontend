import { useSelector, useDispatch } from 'react-redux'
import { create as createBreadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumbReducer'
import { TState } from '@/lib/store'
import { setTaxomageia } from '@/lib/features/studio/editor/taxomageiaReducer'
import { random_identifier } from '@/lib/utils/functions'

import { EditorHasManyWidget, EditorNumberItem, EditorTextItem } from "./editor.components";
import CoreModel from "./editable";
import { editable_item } from './editor.types'
import * as metadata from '@/lib/config/metadata'
import * as types from "./editor.types"

import taxomageiaReducer from '@/lib/features/studio/editor/taxomageiaReducer'
import { useState, useEffect } from 'react'
import Breadcrumbs from './breadcrumbs'

const MakeItem = ({item, handleInputChange, handleNewClick}: {item: any, handleInputChange: any, handleNewClick: any}) => {
  if (!item) return <></>
  if (!item.association_metadata) return <></>

  let result;
  switch (item.association_metadata.widget) {
    case 'string': 
      result = <EditorTextItem editable_item={item} handleInputChange={handleInputChange} />
      break;
    case 'number': 
      result = <EditorNumberItem editable_item={item}/>
      break;
    case 'model':
      result = <EditorHasManyWidget editable_items={item} handleNewClick={handleNewClick}/>
      break;
    default:
      result = <></>
  }
  return result
}

/**
 * TODO: Rename
 * 
 * Build editable form for any model.
 * 
 * @param metadata {object} model_metadata of model which is edited 
 * @param object {CoreModel} data of model
 * @returns 
 */
const MakeItems = ({model_metadata, object, handleInputChange, handleNewClick}: {model_metadata: types.model_metadata, object: any, handleInputChange: any, handleNewClick: any}) => {
  object = object || {}
  if (!model_metadata) { return <></> }
  const ams = model_metadata.attribute_metadata
  if (!ams) return <></>

  console.log('10 makeItems() object:', object, 'model_metadata:', model_metadata)
  return (
    <table className='table-auto w-full'>
      <caption className="text-center text-xl font-bold">{model_metadata.name}</caption>
      <tbody>
      {         
        ams.map((am: any) => {           
          let value
          value = object.data[am.identifier]
          let item_metadata = model_metadata
          if (am.type === 'has_many' || am.type === 'has_one') item_metadata = metadata.find(am.model) as types.model_metadata
          console.log(am.identifier)
          if (!item_metadata) throw new Error(`no metadata found for ${am.identifier}`)
          const editable_item = {
            association_metadata: am,
            item_metadata: item_metadata,
            data: value
          } as editable_item
          console.log('20 makeItems() editable_item:', editable_item)
          return <MakeItem key={am.identifier} item={editable_item} handleInputChange={handleInputChange} handleNewClick={handleNewClick} />
        })
      }
      {/* <tr>
        <td className="text-left pt-12">
          <button className="btn btn-blue bg-purple-600 hover:text-white hover:bg-purple-700">Save</button>
        </td>
      </tr> */}
      </tbody>
    </table>
  )   

}

const TaxomageiaEditor = ({object}: {object: any}) => {
  console.log('TaxomageiaEditor() object:', object)
  const dispatch = useDispatch()
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)

  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('TaxomageiaEditor.addNewHandler()', e.target)
    const identifier = random_identifier('Taxon')

    // TODO: refactor
    // const taxomageia = TaxomageiaModel.new(taxomageia_data)
    // taxomageia.add(name: model_metadata.name, association: attribute_metadata.identifier, identifier: identifier)
    let taxons = taxomageia_data.taxons || []
    taxons = taxons.concat([{identifier}])
    dispatch(setTaxomageia({...taxomageia_data, ...{ taxons }}))
    dispatch(createBreadcrumb({name: "Taxon", 'association': 'taxons', identifier}))
  }

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    const targetElement = e.target as HTMLInputElement
    const taxomageia = CoreModel.new(taxomageia_data, 'taxomageia')

    // TODO: Find correct taxomageia ( if multiple )
    taxomageia.setValue(targetElement.name, targetElement.value)
    dispatch(setTaxomageia(taxomageia.data))
    console.log('handleChange() targetElement:', targetElement, 'result:', taxomageia.data)
  }

  const meta = metadata.find('taxomageia') as types.model_metadata
  return (
    <MakeItems model_metadata={meta} object={object} handleInputChange={handleChange} handleNewClick={handleNewClick}/>
  )
}

const TaxonEditor = ({object}: {object: any}) => {
  const dispatch = useDispatch()
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)
  const currentBeadcrumb = useSelector((state: TState) => state.breadcrumbs[state.breadcrumbs.length - 1])
  console.log('TaxonEditor() currentBeadcrumb:', currentBeadcrumb)
  
  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('TaxonEditor.addNewHandler()', e.target)
    dispatch(createBreadcrumb({name: "Existence"}))
  }
  
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    const targetElement = e.target as HTMLInputElement
    const taxomageia = CoreModel.new(taxomageia_data, 'taxomageia')
    const modifiedTaxon = taxomageia.find(breadcrumbs)
    console.log('modifiedTaxon:', modifiedTaxon)
    if (!modifiedTaxon) return    
    modifiedTaxon.setValue(targetElement.name, targetElement.value)   
    const final = taxomageia.export()
    console.log('handleChange() modifiedTaxon.export:', modifiedTaxon.export())
    console.log('handleChange() taxomageia.export():', final)
    console.log('handleChange() taxons:', taxomageia.taxons[0].data)

    dispatch(setTaxomageia(final))
    console.log('handleChange() targetElement:', targetElement, 'result:', taxomageia.data)
  }

  const meta = metadata.find('taxon') as types.model_metadata
  return (
    <MakeItems model_metadata={meta} object={object} handleInputChange={handleChange} handleNewClick={handleNewClick}/>
  )
}

export {
  TaxomageiaEditor,
  TaxonEditor
}




  // const [metadata, setMetadata] = useState({identifier:"", name: "", attribute_metadata: []} as types.model_metadata)
  // useEffect(() => {
  //   fetch("/api/1/taxomageias/metadata")
  //     .then(response => { return response.json() })      
  //     .then(metadata => {
  //       setMetadata(metadata)
  //       console.log('20 TaxomageiaEditor() fetch, metadata', metadata)
  //     })
  //     .catch(e => {
  //       console.error(e)
  //     })
  // }, [])

