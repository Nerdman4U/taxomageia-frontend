import { createSlice } from '@reduxjs/toolkit'
import { breadcrumb } from "./breadcrumb.type"

const initialState = [{
  name: "Taxomageia",
  object_id: null,
  association: null
}] as breadcrumb[]

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    create(state, action) {
      const result = {
        name: action.payload.name,
        object_id: action.payload.object_id,
        association: action.payload.association
      } as breadcrumb
      state.push(action.payload)
      return state
    },
    pop(state) {
      state.pop()
      return state      
    }
  }
})

export const { create, pop } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
