'use client'

import EditorContainer from "@/components/studio/editor.container"
import { useState, useEffect } from "react"
import { TaxomageiaModel } from "@/components/studio/editable"
import * as types from "@/components/studio/editor.types"

const KEY = 'taxomageia'
/**
 * 
 * @returns 
 */
function Studio() {
  const [ taxomageia_data, setTaxomageiaData ] = useState({} as types.taxomageia )
  const [ taxomageia, setTaxomageia ] = useState({} as TaxomageiaModel)
  const [ model_name, setModelName ] = useState('taxomageia')
  const [ breadcrumbs, setBreadcrumbs ] = useState(['taxomageia'] as string[])

  useEffect(() => {
    const from_storage = JSON.parse(window.localStorage.getItem(KEY) || '{}')
    const ta = new TaxomageiaModel(from_storage)
    setTaxomageiaData(from_storage)
    setTaxomageia(ta)
    global.taxomageia = ta
  }, [])

  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault
    console.log('addNewHandler()', e.target)
    /**
     * model_name = e.target...
     * useEffect -> fetch(model_name)
     * taxomageia.setMetadata(model_name)
     */
    setBreadcrumbs([...breadcrumbs, 'taxon'])
    setModelName('taxon')
  }

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    e.preventDefault
    console.log('handleBreadcrumbClick()', e.target)
  }

  return (
    <EditorContainer model_name={model_name} breadcrumbs={breadcrumbs} handleNewClick={handleNewClick} handleBreadcrumbClick={handleBreadcrumbClick} />
  )

}

export default Studio


