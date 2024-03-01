'use client'

import { useSelector } from 'react-redux'
import { TState } from '@/lib/store'

import * as editor from "./editor"
import { TaxomageiaModel, TaxonModel } from "./editable"
import * as metadata from '@/lib/config/metadata'

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
const EditorContainer = () => {
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)

  TaxomageiaModel.metadata = metadata.taxomageia
  TaxonModel.metadata = metadata.taxon
  const taxomageia = TaxomageiaModel.new(taxomageia_data)

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
  console.log('14 EditorContainer() taxomageia_data:', taxomageia_data)
  let url_name = "taxomageias"
  switch (model) {
    case TaxonModel:
      url_name = "taxons"
      break
  }

  // DEPRECATED
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault
    const targetElement = e.target as HTMLInputElement
    console.log('handleChange() targetElement:', targetElement, taxomageia_data)
    // next: find correct model from taxomageia object using breadcrumbs.
    // old:
    // const taxomageia = TaxomageiaModel.new(taxomageia_data)
    // let obj = taxomageia.find(breadcrumbs)
    // console.log('40 EditorContainer.handleChange() obj:', obj, 'e.target:', e.target, 'breadcrumbs:', breadcrumbs, 'taxomageia:', taxomageia)
    // if (!obj) obj = taxomageia
    // obj.data[targetElement.name] = targetElement.value
    // console.log('42 EditorContainer.handleChange() obj.data:', obj.data)
    // const elem = e.target.parentElement
    // if (elem) elem.className = 'text-sm text-black'
    // window.localStorage.setItem(studio_config.LOCALSTORAGE_KEY, JSON.stringify(taxomageia.data))
  }

  const object = taxomageia.find(breadcrumbs) 
  console.log('50 EditorContainer() object:', object)

  switch (model) {
    case TaxomageiaModel:
      return <editor.TaxomageiaEditor object={object} />
    case TaxonModel:
      return <editor.TaxonEditor object={object} />
  }
}
    

export default EditorContainer

