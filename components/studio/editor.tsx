import { useDispatch } from 'react-redux'
import { create as createBreadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumbReducer'
import { EditorModelWidget, EditorNumberItem, EditorTextItem } from "./editor.components";
import { TaxomageiaModel, editable } from "./editable";
import { useState, useEffect } from 'react'
import * as types from "./editor.types"
import * as metadata from '@/lib/config/metadata'

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
      result = <EditorModelWidget item={item} value={value} handleNewClick={handleNewClick}/>
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
            const value = object?.data[item.identifier]
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

const TaxomageiaEditor = ({object, handleInputChange }: {object: any, handleInputChange: any }) => {
  const dispatch = useDispatch()
  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('TaxomageiaEditor.addNewHandler()', e.target)
    dispatch(createBreadcrumb({name: "Taxon"}))
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
    <MakeItems metadata={metadata.taxomageia} object={object} handleInputChange={handleInputChange} handleNewClick={handleNewClick}/>
  )
}

const TaxonEditor = ({object, handleInputChange}: {object: any, handleInputChange: any }) => {
  const dispatch = useDispatch()
  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log('TaxonEditor.addNewHandler()', e.target)
    dispatch(createBreadcrumb({name: "Existence"}))
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
    <MakeItems metadata={metadata.taxon} object={object} handleInputChange={handleInputChange} handleNewClick={handleNewClick}/>
  )
}

export {
  TaxomageiaEditor,
  TaxonEditor
}



