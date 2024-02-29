import { createSlice } from '@reduxjs/toolkit'
import { breadcrumb } from "./breadcrumb.type"
import { TaxomageiaModel } from "@/components/studio/editable"

const initialState = [{
  name: "Taxomageia",
  object_id: null,
  association: null
}]

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    create(state, action) {
      const result = {
        name: action.payload.name,
        model: JSON.stringify(action.payload.model),
        object_id: action.payload.object_id,
        association: action.payload.association
      }
      state.push(action.payload)
      return state
    },
    pop(state) {
      state.pop()
      return state      
    }
  }
})

// const breadcrumbsReducer = (state: breadcrumb[] = [], action: any) => {
//   switch (action.type) {
//     case 'SET':
//       return action.payload
//     default:
//       return state
//   }
// }
// const createBreadcrumb = (name: string, model: any, object_id?: string, association?: string) => {
//   return {
//     type: 'SET',
//     payload: [{name: name, model: model, object_id: object_id, association: association}]
//   }
// }
// export default breadcrumbsReducer
// export {
//   createBreadcrumb
// }

export const { create, pop } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
