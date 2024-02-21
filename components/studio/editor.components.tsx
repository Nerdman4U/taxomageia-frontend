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
const EditorModelWidget = ({item, value, handleNewClick}: {item: any, value: any, handleNewClick: any}) => {
  if (!item.editable) return
  console.log('EditorModelWidget()', value)
  return (<tr>
    <td className='text-left pr-3 align-top'>{item.name}</td>
    <td>
      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-left">Name</td>
          </tr>
          <tr>  
            <td className="text-left">Taxon 1</td>
          </tr>
        </tbody>
      </table>
      <div><a role="button" onClick={handleNewClick}>Add new</a></div>
    </td>
  </tr>)
}

export {
  EditorTextItem,
  EditorNumberItem,
  EditorModelWidget
}