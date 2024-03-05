import { createSlice } from '@reduxjs/toolkit'
import { breadcrumb } from "./breadcrumb.type"

const initialState = [] as breadcrumb[]

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    create(state, action) {
      state.push(action.payload)
      return state
    },

    // pop a row \o/
    pop(state, action) {
      state.splice(action.payload, state.length)
      return state
    }
  }
})

export const { create, pop } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer
