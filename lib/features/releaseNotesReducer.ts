import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  frontend: {
    current: "",
    versions: [],
  },
  backend: {
    current: "",
    versions: [],
  },
  codenames: [],
  data: [],
};

const releaseNotesSlice = createSlice({
  name: "releaseNotes",
  initialState,
  reducers: {
    setReleaseNotes(state, action) {
      state.frontend = action.payload.frontend;
      state.backend = action.payload.backend;
      state.codenames = action.payload.codenames;
    },
  },
});

export default releaseNotesSlice.reducer;
export const { setReleaseNotes } = releaseNotesSlice.actions;
