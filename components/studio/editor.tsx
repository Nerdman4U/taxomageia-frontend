import { EditorModelWidget, EditorNumberItem, EditorTextItem } from "./editor.components";
import { TaxomageiaModel, editable } from "./editable";

const MakeItem = ({item, value, handleInputChange, handleNewClick}: {item: any, value: any, handleInputChange: any, handleNewClick: any}) => {
  let result;

  switch (item.type) {
    case 'string': 
      result = <EditorTextItem item={item} value={value} handleInputChange={handleInputChange} />
      break;
    case 'number': 
      result = <EditorNumberItem item={item} />
      break;
    case 'widget.model':
      result = <EditorModelWidget item={item} value={value} handleNewClick={handleNewClick}/>
      break;
    default:
      result = <></>
  }
  return result
}

const Editor = ({model_name, handleInputChange, handleNewClick}: {model_name: string, handleInputChange: any, handleNewClick: any}) => {
  const taxomageia = global.taxomageia
  if (!taxomageia) return <></>
  if (!taxomageia.getMetadata) return <></>
  const metadata = taxomageia.getMetadata(model_name)
  if (!metadata) return <></>

  return (
    <table className='m-auto'>
      <caption className="text-center text-xl font-bold">{metadata.name}</caption>
      <tbody>
      {         
        metadata.attribute_metadata.map((item: any) => {
          const value = taxomageia.data[item.identifier]
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

export default Editor

