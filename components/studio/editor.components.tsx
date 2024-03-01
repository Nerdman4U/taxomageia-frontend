import { useSelector, useDispatch } from 'react-redux'
import { TState } from '@/lib/store'
import { editable_item, editable_items } from './editor.types'
import * as util from 'util'
import { create as createBreadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumbReducer'

const EditorTextItem = ({editable_item, handleInputChange}: {editable_item: editable_item, handleInputChange: any}) => {
  const item = editable_item.association_metadata
  const value = editable_item.data
  if (!item.editable) return
  return (<tr>
    <td className="text-left pr-3">{item.name}</td><td><input type="text" name={item.identifier} defaultValue={value} onChange={handleInputChange}/></td>
  </tr>)
}
const EditorNumberItem = ({editable_item}: {editable_item: editable_item}) => {
  const item = editable_item.association_metadata
  const value = editable_item.data
  if (!item.editable) return
  return (<tr>
    <td className='text-left pr-3'>{item.name}</td><td><input type="text" defaultValue={item?.name} /></td>
  </tr>)
}

/**
 * 
 * @param {object} editable_item  has association metadata, item model metadata and item data
 * @returns 
 */
const AssociatedObject = ({editable_item}: {editable_item: editable_item}) => {
  const dispatch = useDispatch()

  const handleClick = ((e: React.MouseEvent) => {
    e.preventDefault()
    console.log('AssociatedObject() editable_item:', editable_item)
    const breadcrumb = {
      name: editable_item.item_metadata.name,
      association: editable_item.association_metadata.identifier,
      identifier: editable_item.data.identifier
    }
    console.log('AssociatedObject() breadcrumb:', breadcrumb)
    dispatch(createBreadcrumb(breadcrumb))
  })

  const item = editable_item.association_metadata
  const value = editable_item.data
  const model_metadata_of_item = editable_item.item_metadata
  if (!value) return <></>
  if (!model_metadata_of_item) return <></>
  if (!model_metadata_of_item.attribute_metadata) return <></>
  const attribute_metadata_of_item = model_metadata_of_item.attribute_metadata
  return (
    <tr>
      {
        attribute_metadata_of_item.map((am:any) => {
          if (!am.showAtWidgetList) return
          console.log('AssociatedObject() am:', am.identifier, 'value:', value)
          return <td role="button" onClick={handleClick} className="flex-1 pr-5" key={am.identifier}>{value[am.identifier]}</td>
        })
      }
    </tr>
  )
}

const EditorHasManyWidget = ({editable_items, handleNewClick}: {editable_items: editable_items, handleNewClick: any}) => {
  //console.log('EditorModelWidget() editable_item:', util.inspect(editable_items, false, 20))
  if (!editable_items) return <></>
  if (!editable_items.association_metadata) return <></>
  if (!editable_items.association_metadata.editable) return <></>
  const data = editable_items.data || []

  const am = editable_items.item_metadata.attribute_metadata || []
  const headers = am.map((am:any) => {
    if (!am.showAtWidgetList) return
    return am.name
  })

  return (
    <tr>
      <td className='text-left pr-3 align-top'>{editable_items.association_metadata.name}</td>
      <td>
        <table className="table-auto text-left">
          <thead>
            <tr>
              {
                headers.map((header:any) => {
                  if (!header) return
                  return <th key={header}>{header}</th>
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((value:any) => {
                const item = {
                  association_metadata: editable_items.association_metadata,
                  item_metadata: editable_items.item_metadata,
                  data: value
                }
                return <AssociatedObject editable_item={item}/>
              })
            }
          </tbody>
        </table>
        <div><a role="button" onClick={handleNewClick}>Add new</a></div>
      </td>
    </tr>
  )
}

export {
  EditorTextItem,
  EditorNumberItem,
  EditorHasManyWidget
}