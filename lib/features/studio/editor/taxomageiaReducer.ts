import { createSlice } from '@reduxjs/toolkit'
import { TState } from '@/lib/store'
import * as taxomageia from '@/lib/interfaces/taxomageia.interface'

const initialState = {
  taxomageia: {}
}

const editorSlice = createSlice({
  name: "taxomageia",
  initialState,
  reducers: {
    set(state, action) {
      state.taxomageia = action.payload
    }
  }
})

export default editorSlice.reducer
export const { set } = editorSlice.actions

