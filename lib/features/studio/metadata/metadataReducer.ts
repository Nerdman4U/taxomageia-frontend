import { createSlice } from "@reduxjs/toolkit";
import * as types from "./metadata.type";

const initialState = <Record<string, types.model_metadata>>{};

const modelMetadataSlice = createSlice({
  name: "modelMetadata",
  initialState,
  reducers: {
    setModelMetadata(state, action) {
      for (const act of action.payload) {
        state[act.identifier] = act;
      }
      return state;
    },
    setModelMetadatum(state, action) {
      state[action.payload.identifier] = action.payload;
      return state;
    },
  },
});

export default modelMetadataSlice.reducer;
export const { setModelMetadata, setModelMetadatum } =
  modelMetadataSlice.actions;
