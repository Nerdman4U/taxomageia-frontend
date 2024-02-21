'use client'
import Editor from "./editor"
import { TaxomageiaModel } from "./editable"
import { useState, useEffect } from 'react'
import * as config from '@/config'
import * as types from "./editor.types"

const EditorContainer = ({model_name}: {model_name: string}) => {
  const [ taxomageia_metadata, setTaxomageiaMetadata ] = useState({} as any)
  const [ taxomageia_data, setTaxomageiaData ] = useState({} as types.taxomageia )
  const [ taxomageia, setTaxomageia ] = useState({} as TaxomageiaModel)

  let name = "taxomageias"
  switch (model_name) {
    case "taxon":
      name = "taxons"
      break
  }

  useEffect(() => {
    fetch(`/api/1/${name}/metadata`)
      .then(response => { return response.json() })      
      .then(metadata => { 
        setTaxomageiaMetadata(metadata)
        const from_storage = JSON.parse(window.localStorage.getItem(name) || '{}')
        setTaxomageiaData(from_storage)
        console.log('from_storage:', name, from_storage)
        const taxomageia = new TaxomageiaModel(metadata, from_storage)
        setTaxomageia(taxomageia)
        console.log(taxomageia.metadata, taxomageia.data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    taxomageia_data[e.target.name] = e.target.value
    const elem = e.target.parentElement
    if (elem) elem.className = 'text-sm text-black'
    taxomageia.data = taxomageia_data
    // Read form and save to taxomageia.
    window.localStorage.setItem(name, JSON.stringify(taxomageia.data))
    console.log('taxomageia.data:', taxomageia.data)
  }

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Create</h2>
            <p>Welcome to create your own Taxomageia! You can work anonymously. Taxomageia is saved to your account after you log in.</p>
            <div className="text-sm text-gray-400">
              <Editor model={taxomageia} onChangeHandler={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditorContainer

