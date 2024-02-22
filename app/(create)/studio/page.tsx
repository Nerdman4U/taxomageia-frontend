'use client'

import EditorContainer from "@/components/studio/editor.container"
import { useState, useEffect } from "react"

import { TaxomageiaModel } from "@/components/studio/editable"
import { TaxonModel } from "@/components/studio/editable"
import Breadcrumbs from "@/components/studio/breadcrumbs"

import * as types from "@/components/studio/editor.types"

import * as taxomageia from "@/interfaces/taxomageia.interface"
import * as taxon from "@/interfaces/taxon.interface"

import * as studio_config from "@/components/studio/studio.config"


/**
 * 
 * @returns 
 */
function Studio() {
  const [ taxomageia_data, setTaxomageiaData ] = useState({} as taxomageia.building_up)
  const [ taxomageia, setTaxomageia ] = useState({} as TaxomageiaModel)
  const [ breadcrumbs, setBreadcrumbs ] = useState([{name: "Taxomageia", model: TaxomageiaModel}] as types.breadcrumb[])

  useEffect(() => {
    const from_storage = JSON.parse(localStorage.getItem(studio_config.LOCALSTORAGE_KEY) || '{}');
    console.log('Studio() from_storage:', from_storage)
    const ta: TaxomageiaModel = TaxomageiaModel.new(from_storage);
    (global as any).taxomageia = ta
  }, [])

  const handleNewClick = (e: React.MouseEvent) => {
    e.preventDefault
    console.log('addNewHandler()', e.target, 'taxomageia:', taxomageia)
    /**
     * - add new model to current data
     * - set path to new model
     *   - it will be edited next
     * 
     */
    setBreadcrumbs([...breadcrumbs, {name: "Taxon", model: TaxonModel}])
  }

  const handleBreadcrumbClick = (e: React.MouseEvent) => {
    e.preventDefault
    console.log('handleBreadcrumbClick()', e.target)
  }

  console.log('breadcrumbs:', breadcrumbs)

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
              <EditorContainer breadcrumbs={breadcrumbs} taxomageia={taxomageia} handleNewClick={handleNewClick} handleBreadcrumbClick={handleBreadcrumbClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio


