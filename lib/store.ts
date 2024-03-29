import { configureStore } from "@reduxjs/toolkit";
import breadcrumbsReducer from "./features/studio/breadcrumbs/breadcrumbReducer";
import taxomageiaReducer from "./features/studio/editor/taxomageiaReducer";
import metadataReducer from "./features/studio/metadata/metadataReducer";
import loginReducer from "./features/login/loginReducer";
import releaseNotesReducer from "./features/releaseNotesReducer";

const makeStore = () => {
  return configureStore({
    reducer: {
      breadcrumbs: breadcrumbsReducer,
      taxomageia: taxomageiaReducer,
      metadata: metadataReducer,
      login: loginReducer,
      release_notes: releaseNotesReducer,
    },
  });
};

type TStore = ReturnType<typeof makeStore>;
type TState = ReturnType<TStore["getState"]>;
type TDispatch = TStore["dispatch"];

export type { TStore, TState, TDispatch };
export { makeStore };
