'use client'

import { useSelector } from 'react-redux'
import { TState } from '@/lib/store'

import * as editor from "./editor"
import CoreModel from "./editable"

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
  console.log('50 EditorContainer() object:', object, 'breadcrumbs.current:', current)
  if (!current) {
    console.error('No breadcrumbs')
    return <></>
  }
  // console.log('51 EditorContainer() current.name:', current.name)
  // TODO: Generic
  // switch (current.name) {
  //   case 'taxomageia':
  //     return <editor.TaxomageiaEditor object={object} />
  //   case 'taxon':
  //     return <editor.TaxonEditor object={object} />
  // }
  return <editor.TaxomageiaEditor object={object} />
}
    

export default EditorContainer

