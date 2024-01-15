'use client'

import React from 'react';
import { createContext, useEffect, useState  } from 'react';
import pkg from '../../package.json' assert { type: "json" }
import axios from 'axios'
import { appUrl } from '@/config'

export type VersionInfoType = {
  version?: string
  next_en?: string[]
  next_fi?: string[]
  features_en?: string[]
  features_fi?: string[]
  problems_en?: string[]
  problems_fi?: string[]
}

export type AppContextType = {
  clientVersion?: string
  clientVersionStr?: string
  serverVersion?: string
  serverVersionStr?: string
  versionInfo?: any[]
}

const AppContext = React.createContext([0,0]);

export const ContextProvider = ({children}: {children: React.ReactNode}) => {
  // const clientVersion = pkg.version
  // const [serverVersion, setServerVersion] = useState("0.0.0")
  // const [versionInfo, setVersionInfo] = useState([])

  // useEffect(() => {
  //   axios.get(appUrl, {params: {q: 'version'}}).then((response): void => {
  //     console.log(`connected to server at ${appUrl}`, response.data)
  //     if (!response.data) return
  //     if (!response.data.current) return
  //     console.log(response.data)
  //     setServerVersion(response.data.current)
  //     if (!response.data.info) return
  //     setVersionInfo(response.data.info)
  //   })    
  // }, [])

  // let serverStr = ""
  // let clientStr = ""
  // if (serverVersion) { serverStr = `Server: v${serverVersion}` } 
  // if (clientVersion) { clientStr = `Client: v${clientVersion}` }

  // const value = {
  //   clientVersion: clientVersion || "0.0.0",
  //   clientVersionStr: clientStr || "Client: v0.0.0",
  //   serverVersion: serverVersion || "0.0.0",
  //   serverVersionStr: serverStr || "Server: v0.0.0",
  //   versionInfo: versionInfo || [],
  // }
  // console.log('value:', value)

  const test1 = 1
  const test2 = 2

  return (
    <AppContext.Provider value={[test1, test2]}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext

