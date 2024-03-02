'use client'

import { useSelector, useDispatch } from 'react-redux'
import { create as createBreadcrumb } from '@/lib/features/studio/breadcrumbs/breadcrumbReducer'
import { TState } from '@/lib/store'
import { useEffect } from "react"

import EditorContainer from "@/components/studio/editor.container"
import Breadcrumbs from "@/components/studio/breadcrumbs"

import * as types from "@/components/studio/editor.types"
import * as taxomageia from "@/lib/interfaces/taxomageia.interface"
import * as taxon from "@/lib/interfaces/taxon.interface"
import * as studio_config from "@/components/studio/studio.config"

/**
 * 
 * @returns 
 */
function Studio() {
  const dispatch = useDispatch()
  const taxomageia_data = useSelector((state: TState) => state.taxomageia)
  const breadcrumbs = useSelector((state: TState) => state.breadcrumbs)
  console.log('Studio() breadcrumbs:', breadcrumbs)

  // Double taxomageia breadcrumb when refreshing whole page... dunno?
  let allow = true
  useEffect(() => {    
    if (allow && breadcrumbs.length === 0) {
      allow = false
      dispatch(createBreadcrumb({name: "Taxomageia", identifier: taxomageia_data.identifier}))
    }
  }, [breadcrumbs])

  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Create</h2>
            <p>Welcome to create your own Taxomageia! <i>Remember to login to save your work!</i></p>
            <Breadcrumbs/>
            <div className="text-sm text-gray-400 shadow-md p-10">
              <EditorContainer/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio


