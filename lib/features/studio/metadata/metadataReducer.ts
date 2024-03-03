import { createSlice } from "@reduxjs/toolkit";
import { TState } from "@/lib/store";
import * as types from "./metadata.type";

const initialState = <Record<string, types.model_metadata>>{}

const modelMetadataSlice = createSlice({
  name: "modelMetadata",
  initialState,
  reducers: {
    set(state, action) {
      for (const act of action.payload) {
        state[act.identifier] = act
      }
      return state
    },
    setModelMetadata(state, action) {
      state[action.payload.identifier] = action.payload
      return state
    }
  }
})

export default modelMetadataSlice.reducer
export const { set, setModelMetadata } = modelMetadataSlice.actions

