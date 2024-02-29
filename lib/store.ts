import { configureStore } from '@reduxjs/toolkit'
import breadcrumbsReducer from './features/studio/breadcrumbs/reducer'

const makeStore = () => {
 return configureStore({
   reducer: {
    breadcrumbs: breadcrumbsReducer
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


