'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import pkg from '../../package.json' assert { type: "json" }
import axios from 'axios'
import * as config from '@/config'
import * as contextType from './context.type'
import * as editorTypes from '@/components/dungeon/editor.types'

const AppContext = React.createContext({} as contextType.application);

export const ContextProvider = ({children}: {children: React.ReactNode[]}) => {
  const [releaseNotes, setReleaseNotes] = useState({} as contextType.application)
  const [metadata, setMetadata] = useState([] as editorTypes.model_metadata[])

  useEffect(() => {
    axios.get(config.release_notes).then((response): void => {
      console.log(`connected to server at ${config.release_notes}`, 'data:', response.data)
      if (!response.data) return

      const client_version = pkg.version
      const result = {
        ...response.data,
        frontend: {
          ...response.data.frontend,
          current: client_version
        }
      }
      console.log('result:', result)
      setReleaseNotes(result)
      // console.log(response.data)
      // setServerVersion(response.data.current)
      // if (!response.data.info) return
      // setVersionInfo(response.data.info)
    })
  }, [])

  useEffect(() => {
    // if metadata has been loaded, do not fetch
    fetch(config.metadata)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log('fetched metadata: ', data)
        setMetadata(data)
        // dispatch(set(data))
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  const value = {
    ...releaseNotes,
    model_metadata: metadata
  }


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext

