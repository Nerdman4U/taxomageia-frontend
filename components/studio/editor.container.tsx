'use client'

import { useSelector } from 'react-redux'
import { TState } from '@/lib/store'

import * as editor from "./editor"
import CoreModel from "./editable"

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
  const taxomageia = CoreModel.new(taxomageia_data, 'taxomageia')
  const current = breadcrumbs[breadcrumbs.length - 1]
  const object = taxomageia.find(breadcrumbs) 
  //console.log('50 EditorContainer() object:', object, 'breadcrumbs.current:', current)
  if (!current) {
    console.error('No breadcrumbs')
    return <></>
  }
  // console.log('51 EditorContainer() current.name:', current.name)
  // TODO: Generic
  switch (current.name) {
    case 'Taxomageia':
      return <editor.TaxomageiaEditor object={object} />
    case 'Taxon':
      return <editor.TaxonEditor object={object} />
  }
}
    

export default EditorContainer

