'use client'

import { useSelector } from 'react-redux'
import { TState } from '@/lib/store'

import TaxomageiaEditor from "./editor"
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
  const metadata = useSelector((state: any) => state.metadata)
  if (!metadata) return <></> // has not yet been loaded
  const taxomageia = CoreModel.new(taxomageia_data, 'taxomageia', metadata)
  if (!taxomageia) return <></>
  const current = breadcrumbs[breadcrumbs.length - 1]
  const object = taxomageia.find(breadcrumbs)
  //console.log('50 EditorContainer() object:', object, 'breadcrumbs.current:', current)
  if (!current) {
    console.error('No breadcrumbs')
    return <></>
  }
  return <TaxomageiaEditor object={object} />
}


export default EditorContainer

