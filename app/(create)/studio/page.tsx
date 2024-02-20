'use client'

import { useState, useEffect } from 'react'
import * as config from '@/config'
import axios from 'axios'

const EditorTextItem = ({item}: {item: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className="text-left pr-3">{item.name}</td><td><input type="text" defaultValue={item?.name} /></td>
  </tr>)
}
const EditorNumberItem = ({item}: {item: any}) => {
  if (!item.editable) return
  return (<tr>
    <td className='text-left pr-3'>{item.name}</td><td><input type="text" defaultValue={item?.name} /></td>
  </tr>)
}

const MakeItem = ({item}: {item: any}) => {
  let result;
  switch (item.type) {
    case 'string': 
      result = <EditorTextItem item={item} />
      break;
    case 'number': 
      result = <EditorNumberItem item={item} />
      break;
    default:
      result = <></>
  }
  return result
}

type taxomageia = {
  name: string
  attribute_metadata: any
}

const Editor = ({taxomageia}: {taxomageia: taxomageia}) => {
  if (!taxomageia) return
  const items = taxomageia.attribute_metadata || []
  return (
    <table>
        <caption className="text-center text-xl font-bold">{taxomageia.name}</caption>
      <tbody>
      { 
        items.map((i: any) => {
          return <MakeItem key={i.name} item={i} />
        })
      }
      </tbody>
    </table>
  )
}

function Studio() {
  const [ taxomageia, setTaxomageia ] = useState({} as taxomageia)

  useEffect(() => {
//    fetch("/api/1/taxomageias/metadata")
     axios.get("/api/1/taxomageias/metadata")
      .then(response => {
        return response.data
        //response.json()
      })      
      .then(data => { 
        setTaxomageia(data) 
        console.log(data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Create</h2>
            <div className="text-sm text-gray-400">
              <Editor taxomageia={taxomageia} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio


