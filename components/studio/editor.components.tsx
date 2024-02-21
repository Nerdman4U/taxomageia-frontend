const EditorTextItem = ({item, value, onChangeHandler}: {item: any, value: any, onChangeHandler: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className="text-left pr-3">{item.name}</td><td><input type="text" name={item.identifier} defaultValue={value} onChange={onChangeHandler}/></td>
  </tr>)
}
const EditorNumberItem = ({item}: {item: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className='text-left pr-3'>{item.name}</td><td><input type="text" defaultValue={item?.name} /></td>
  </tr>)
}
const EditorModelWidget = ({item}: {item: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className='text-left pr-3'>{item.name}</td>
    <td>
      ModelWidget
    </td>
  </tr>)
}

export {
  EditorTextItem,
  EditorNumberItem,
  EditorModelWidget
}