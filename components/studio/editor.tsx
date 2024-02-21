import { EditorModelWidget, EditorNumberItem, EditorTextItem } from "./editor.components";
import { TaxomageiaModel, editable } from "./editable";

const MakeItem = ({item, value, onChangeHandler}: {item: any, value: any, onChangeHandler: any}) => {
  let result;

  switch (item.type) {
    case 'string': 
      result = <EditorTextItem item={item} value={value} onChangeHandler={onChangeHandler} />
      break;
    case 'number': 
      result = <EditorNumberItem item={item} />
      break;
    case 'widget.model':
      result = <EditorModelWidget item={item} />
      break;
    default:
      result = <></>
  }
  return result
}

const Editor = ({model, onChangeHandler}: {model: editable, onChangeHandler: any}) => {
  if (!model) return
  if (!model.metadata) return
  if (model.metadata.length === 0) return

  return (
    <table>
      <caption className="text-center text-xl font-bold">{model.meta_name}</caption>
      <tbody>
      { 
        model.items.map((item: any) => {
          const value = model.data[item.identifier]
          return <MakeItem key={item.identifier} item={item} value={value} onChangeHandler={onChangeHandler} />
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

export default Editor

