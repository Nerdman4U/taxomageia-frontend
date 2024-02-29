import { useSelector, useDispatch } from 'react-redux'
import { TState } from '@/lib/store'

const EditorTextItem = ({item, value, handleInputChange}: {item: any, value: any, handleInputChange: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className="text-left pr-3">{item.name}</td><td><input type="text" name={item.identifier} defaultValue={value} onChange={handleInputChange}/></td>
  </tr>)
}
const EditorNumberItem = ({item}: {item: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className='text-left pr-3'>{item.name}</td><td><input type="text" defaultValue={item?.name} /></td>
  </tr>)
}

/**
 * 
 * @param item metadata
 * @param value object
 * @returns 
 */
const EditorHasManyWidget = ({item, value, handleNewClick}: {item: any, value: any, handleNewClick: any}) => {
  console.log('EditorModelWidget() value:', value, 'item:', item)
  const dispatch = useDispatch()
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)

  // TODO: find correct object using breadcrumbs

  if (!item.editable) return <></>
  return (<tr>
    <td className='text-left pr-3 align-top'>{item.name}</td>
    <td>
      {(value) ? value.map((v: any) => <div key={v.identifier}>{v.identifier}</div>) : <></>}

      {/* <table className="w-full">
        <tbody>
          <tr>
            <td className="text-left">Name</td>
          </tr>
          <tr>  
            <td className="text-left">Taxon 1</td>
          </tr>
        </tbody>
      </table> */}
      <div><a role="button" onClick={handleNewClick}>Add new</a></div>
    </td>
  </tr>)
}

export {
  EditorTextItem,
  EditorNumberItem,
  EditorHasManyWidget
}