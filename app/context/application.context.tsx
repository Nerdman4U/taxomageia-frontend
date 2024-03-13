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

  const value = {
    frontend: {
      current: "jipii",
      versions: [
        { version: "1.2", features: ["cool stuff"], issues: ["not cool stuff"] }
      ]
    },
    backend: {
      current: "1.5",
      versions: [
        { version: "1.5", features: ["cool stuff"], issues: ["not cool stuff"] }
      ]
    },
    data: [
      {
        name: "The First",
        current: "1.0",
        description: "A draft of the first Taxomageia, mainly for testing purposes.",
        licence: "MIT",
        versions: [
          { version: "1.0", features: ["cool stuff"], issues: ["not cool stuff"] }
        ]
      },
      {
        name: "Template 1 - Wilderness in central Mystara",
        current: "1.0",
        description: "A selected group of creatures of monsters in central Mystara.",
        licence: "MIT",
        versions: [
          { version: "1.0", features: ["cool stuff"], issues: ["not cool stuff"] }
        ]
      }
    ],
    codenames: [
      {
          name: "Lyrical Orc",
          type: "prerelease",
          date: "12.3.2024",
          backend: 1.5,
          frontend: 1.2,
          description: "This is a prerelease work to add and edit Taxomageias.",
      }
    ],
  }

  return (
    <AppContext.Provider value={releaseNotes}>
      {children}
    </AppContext.Provider>
  )
}


export default AppContext

