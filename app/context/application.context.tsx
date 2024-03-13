'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import pkg from '../../package.json' assert { type: "json" }
import axios from 'axios'
import * as config from '@/lib/config'
import * as contextType from './context.type'

const AppContext = React.createContext({} as contextType.application);

export const ContextProvider = ({children}: {children: React.ReactNode[]}) => {
  const [releaseNotes, setReleaseNotes] = useState({} as contextType.application)

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

  return (
    <AppContext.Provider value={releaseNotes}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext

