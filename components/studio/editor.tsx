import { useSelector, useDispatch } from 'react-redux'
import { create as createBreadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumbReducer'
import { TState } from '@/lib/store'
import { setTaxomageia } from '@/lib/features/studio/editor/taxomageiaReducer'
import taxomageiaReducer from '@/lib/features/studio/editor/taxomageiaReducer'
import { random_number, random_identifier } from '@/lib/utils/functions'

import { EditorHasManyWidget, EditorNumberItem, EditorTextItem } from "./editor.components";
import { TaxomageiaModel, TaxonModel, editable } from "./editable";
import { useState, useEffect } from 'react'
import * as types from "./editor.types"
import * as metadata from '@/lib/config/metadata'
import Breadcrumbs from './breadcrumbs'

const MakeItem = ({item, value, handleInputChange, handleNewClick}: {item: any, value: any, handleInputChange: any, handleNewClick: any}) => {
  let result;
  switch (item.widget) {
    case 'string': 
      result = <EditorTextItem item={item} value={value} handleInputChange={handleInputChange} />
      break;
    case 'number': 
      result = <EditorNumberItem item={item} />
      break;
    case 'model':
      result = <EditorHasManyWidget item={item} value={value} handleNewClick={handleNewClick}/>
      break;
    default:
      result = <></>
  }
  return result
}

const MakeItems = ({metadata, object, handleInputChange, handleNewClick}: {metadata: types.model_metadata, object: any, handleInputChange: any, handleNewClick: any}) => {
  if (metadata && metadata.attribute_metadata) {
    return (
      <table className='m-auto'>
        <caption className="text-center text-xl font-bold">{metadata.name}</caption>
        <tbody>
        {         
          metadata?.attribute_metadata.map((item: any) => {           
            let value
            if (object) {
              value = object[item.identifier]              
            }
            return <MakeItem key={item.identifier} item={item} value={value} handleInputChange={handleInputChange} handleNewClick={handleNewClick} />
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
  else {
    return <> </>
  }
}

const TaxomageiaEditor = ({object}: {object: any}) => {
  const dispatch = useDispatch()
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)

  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('TaxomageiaEditor.addNewHandler()', e.target)
    const identifier = random_identifier('Taxon')
    dispatch(setTaxomageia({...taxomageia_data, ...{taxons:[{identifier}]}}))
    dispatch(createBreadcrumb({name: "Taxon", 'association': 'taxons', identifier}))
  }

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    const targetElement = e.target as HTMLInputElement

    TaxomageiaModel.metadata = metadata.taxomageia
    TaxonModel.metadata = metadata.taxon
    const taxomageia = TaxomageiaModel.new(taxomageia_data)

    // TODO: Find correct taxomageia ( if multiple )
    taxomageia.setValue(targetElement.name, targetElement.value)
    dispatch(setTaxomageia(taxomageia.data))
    console.log('handleChange() targetElement:', targetElement, 'result:', taxomageia.data)
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

  return (
    <MakeItems metadata={metadata.taxomageia} object={taxomageia_data} handleInputChange={handleChange} handleNewClick={handleNewClick}/>
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

    TaxomageiaModel.metadata = metadata.taxomageia
    TaxonModel.metadata = metadata.taxon
    const taxomageia = TaxomageiaModel.new(taxomageia_data)

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
    // const taxomageia = TaxomageiaModel.new(taxomageia_data

    // let taxons = taxomageia_data.taxons || []
    // console.log('10 TaxonEditor.handleChange() targetElement:', targetElement, 'taxons:', taxons, 'currentBeadcrumb:', currentBeadcrumb)
    // if (taxomageia_data.taxons && taxomageia_data.taxons.length > 0) {
    //   // find correct Taxon from taxomageia_data.
    //   console.log('20 TaxonEditor.handleChange() taxons:', taxons, currentBeadcrumb)
    //   const modifiedTaxon = taxons.find((taxon: any) => taxon.identifier === currentBeadcrumb.identifier) as any
    //   if (!modifiedTaxon) return
    //   console.log('30 TaxonEditor.handleChange() modifiedTaxon:', modifiedTaxon)
    //   const result = { ...modifiedTaxon, ...{ [targetElement.name]: targetElement.value } } as any
    //   console.log('40 TaxonEditor.handleChange() result:', result)
    //   taxons = taxons.map((taxon: any) => {
    //     if (taxon.identifier === modifiedTaxon.identifier) {
    //       return result
    //     } else {
    //       return taxon
    //     }
    //   })
    //   console.log('45 TaxonEditor.handleChange() taxons:', taxons)
    // } else {
    //   const taxon = {
    //     idenfifier: random_identifier('Taxon'),
    //   } as any
    //   taxon[targetElement.name] = targetElement.value
    //   taxons = [...taxons, taxon]
    // }

    // const final = {...taxomageia_data, ...{taxons: taxons}} as any
    // // result[targetElement.name] = targetElement.value
    // console.log('50 TaxonEditor.handleChange() final:', final)
    // dispatch(setTaxomageia(final))

    // TODO:
    // dispatch(setTaxons(taxomageia_id, taxons))
    // TAI:
    // dispatch(updateTaxon(taxomageia_id, taxon_id, taxon))
    // dispatch(addTaxon(taxomageia_id, taxon))
  }

  // const [metadata, setMetadata] = useState({identifier:"", name: "", attribute_metadata: []} as types.model_metadata)
  // useEffect(() => {
  //   fetch("/api/1/taxons/metadata")
  //     .then(response => { return response.json() })      
  //     .then(metadata => {
  //       setMetadata(metadata)
  //       console.log('20 TaxonEditor() fetch, metadata', metadata)
  //     })
  //     .catch(e => {
  //       console.error(e)
  //     })
  // }, [])

  return (
    <MakeItems metadata={metadata.taxon} object={object} handleInputChange={handleChange} handleNewClick={handleNewClick}/>
  )
}

export {
  TaxomageiaEditor,
  TaxonEditor
}



