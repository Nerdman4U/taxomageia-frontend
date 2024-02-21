'use client'
import Editor from "./editor"
import { TaxomageiaModel } from "./editable"
import { useState, useEffect } from 'react'
import * as config from '@/config'
import * as types from "./editor.types"
import { Breadcrumb } from "react-bootstrap"

const Breadcrumbs = ({breadcrumbs, handleClick}: {breadcrumbs: string[], handleClick: any}) => {
  if (!breadcrumbs) return
  //if (breadcrumbs.length < 2) return
  const result = breadcrumbs.map((breadcrumb, index) => {
    return <span><a key={index}>{breadcrumb}</a></span>
  })

  return <p>{breadcrumbs.flatMap(
    (t, i) => [(i ? [' > '] : []), <span key={i}><a href="" onClick={handleClick}>{t}</a></span>]
  )}</p>
}

/**
 * 
 * taxomageia: TaxomageiaModel, holds metadata of all models and full data.
 * taxomageia_data: loaded from localStorage
 *
 *
 * @returns 
 */
const EditorContainer = ({model_name, breadcrumbs, handleNewClick, handleBreadcrumbClick}: {model_name: string, breadcrumbs: string[], handleNewClick: any, handleBreadcrumbClick: any}) => {
  const [ taxomageia_metadata, setTaxomageiaMetadata ] = useState({} as any)
  const taxomageia = global.taxomageia

  let url_name = "taxomageias"
  switch (model_name) {
    case "taxon":
      url_name = "taxons"
      break
  }


  useEffect(() => {
    console.log('useEffect()')
    fetch(`/api/1/${url_name}/metadata`)
      .then(response => { return response.json() })      
      .then(metadata => { 
        console.log('fetch, metadata:', metadata)
        setTaxomageiaMetadata(metadata)
        const taxomageia = global.taxomageia
        taxomageia.setMetadata(model_name, metadata)
        console.log('taxomageia, metadata:', taxomageia.metadata, 'data:', taxomageia.data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [url_name])

  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    const taxomageia = global.taxomageia
    taxomageia.data[e.target.name] = e.target.value
    const elem = e.target.parentElement
    if (elem) elem.className = 'text-sm text-black'
    window.localStorage.setItem('taxomageias', JSON.stringify(taxomageia.data))
  }

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Create</h2>
            <p>Welcome to create your own Taxomageia! Data is saved to your account when you log in.</p>
            <Breadcrumbs breadcrumbs={breadcrumbs} handleClick={handleBreadcrumbClick}/>
            <div className="text-sm text-gray-400 shadow-md p-10">
              <Editor model_name={model_name} handleInputChange={handleChange} handleNewClick={handleNewClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditorContainer

