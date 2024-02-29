import { configureStore } from '@reduxjs/toolkit'
import breadcrumbsReducer from './features/studio/breadcrumbs/breadcrumbReducer'
import taxomageiaReducer from './features/studio/editor/taxomageiaReducer'

const makeStore = () => {
 return configureStore({
   reducer: {
    breadcrumbs: breadcrumbsReducer,
    taxomageia: taxomageiaReducer
   }
 })
}

type TStore = ReturnType<typeof makeStore>
type TState = ReturnType<TStore['getState']>
type TDispatch = TStore['dispatch']

export type {
  TStore,
  TState,
  TDispatch
}
export { makeStore }


