'use client'

import { useSelector } from 'react-redux'
import { TState } from '@/lib/store'

import * as editor from "./editor"
import { TaxomageiaModel, TaxonModel } from "./editable"
import { useState, useEffect } from 'react'
import * as config from '@/lib/config'
import * as types from "./editor.types"
import Breadcrumbs from "./breadcrumbs"

import * as taxomageia from '@/lib/interfaces/taxomageia.interface'
import * as taxon from '@/lib/interfaces/taxon.interface'

import * as studio_config from "@/components/studio/studio.config"

/**
 * 
 * taxomageia: TaxomageiaModel, holds metadata of all models and full data.
 * taxomageia_data: loaded from localStorage
 *
 *
 * @returns 
 */
const EditorContainer = ({
  handleNewClick, 
}: {
  handleNewClick: any
}) => {
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)
  let model = TaxomageiaModel as any
  if (breadcrumbs && breadcrumbs.length > 0) {
    const result  = breadcrumbs[breadcrumbs.length - 1].name
    switch (result) {
      case "Taxomageia":
        model = TaxomageiaModel
        break
      case "Taxon":
        model = TaxonModel
        break
    }
  }
  console.log('10 EditorContainer()')
  console.log('12 EditorContainer() breadcrumbs:', breadcrumbs)
  console.log('14 EditorContainer() taxomageia:', taxomageia)
  let url_name = "taxomageias"
  switch (model) {
    case TaxonModel:
      url_name = "taxons"
      break
  }
  
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    // const targetElement = e.target as HTMLInputElement
    // let obj = taxomageia.find(breadcrumbs)
    // console.log('40 EditorContainer.handleChange() obj:', obj, 'e.target:', e.target, 'breadcrumbs:', breadcrumbs, 'taxomageia:', taxomageia)
    // if (!obj) obj = taxomageia
    // obj.data[targetElement.name] = targetElement.value
    // console.log('42 EditorContainer.handleChange() obj.data:', obj.data)

    // const elem = e.target.parentElement
    // if (elem) elem.className = 'text-sm text-black'
    // window.localStorage.setItem(studio_config.LOCALSTORAGE_KEY, JSON.stringify(taxomageia.data))
  }

  let object
  if (taxomageia && taxomageia instanceof TaxomageiaModel) object = taxomageia.find(breadcrumbs) 
  console.log('50 EditorContainer() object:', object)

  switch (model) {
    case TaxomageiaModel:
      return <editor.TaxomageiaEditor object={object} handleInputChange={handleChange} handleNewClick={handleNewClick} />
    case TaxonModel:
      return <editor.TaxonEditor object={object} handleInputChange={handleChange} handleNewClick={handleNewClick} />
  }
}
    

export default EditorContainer

