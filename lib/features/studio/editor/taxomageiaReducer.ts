import { createSlice } from '@reduxjs/toolkit'
import { TState } from '@/lib/store'
import * as taxomageia from '@/lib/interfaces/taxomageia.interface'
import { random_number, random_identifier } from '@/lib/utils/functions'

const initialState = {
  identifier: random_identifier("taxomageia")
} as taxomageia.building_up

const taxomageiaSlice = createSlice({
  name: "taxomageia",
  initialState,
  reducers: {
    setTaxomageia(state, action) {
      state = { ...state, ...action.payload }
      //console.log('taxomageiaReducer.set() state:', state)
      return state
    }
  }
})

export default taxomageiaSlice.reducer
export const { setTaxomageia } = taxomageiaSlice.actions

