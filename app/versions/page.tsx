"use client"

import { useState, useContext} from "react"
import AppContext from '@/app/context/application.context'
import { AppContextType, VersionInfoType } from "@/app/context/application.context"
import serverVersions from "../../app/versions/server.json" assert { type: "json" }
import clientVersions from "../../app/versions/client.json" assert { type: "json" }
import dataVersions from "../../app/versions/data.json" assert { type: "json" }
import Toggleable from "@/components/toggleable"

const Versions = () => {
  const [serverVisible, setServerVisible] = useState(true)
  const [clientVisible, setClientVisible] = useState(true)
  const [dataVisible, setDataVisible] = useState(true)

  const toggleServer = () => { setServerVisible(!serverVisible) }
  const toggleClient = () => { setClientVisible(!clientVisible) }
  const toggleData = () => { setDataVisible(!dataVisible) }

  const show = ({visible, topic, toggleVisibility, id, versions}: {visible: boolean, topic: string, toggleVisibility: () => void, id: string, versions: VersionInfoType[]}) => {
    return (
      <Toggleable visible={visible} topic={topic} toggleVisibility={toggleVisibility}>
        <VersionsList id={id} versions={versions} />
      </Toggleable>
    )    
  }

  return ( 
    <div className="mt-24 ml-14">
    { show({visible: serverVisible, topic: "Server (Backend)", toggleVisibility: toggleServer, id: "server", versions: serverVersions}) }
    { show({visible: clientVisible, topic: "Client (Frontend)", toggleVisibility: toggleClient, id: "client", versions: clientVersions}) }
    { show({visible: dataVisible, topic: "the First (Taxomageia)", toggleVisibility: toggleData, id: "data", versions: dataVersions}) }
    </div>
  )
}

const VersionsList = ({versions, id}: {versions: VersionInfoType[], id: string}) => {
  return (
    <section id={id}>
      <div className="max-w-3xl mx-auto px-4 sm:pb-6 text-gray-400">
        <div className="md:py-2">   
          {/* Items */}
          { versions?.map((info) => <Version key={info.version} info={info} />) }    
        </div>
      </div>
    </section>
  )
}

const Version = ({info}: {info: VersionInfoType}) => {
  const next = info.next_en || []
  const features = info.features_en || []
  const problems = info.problems_en || []
  const notes = info.notes_en || []
  return (
    <div className="">
      <h3 className="h3 mt-1 text-gray-400">{info.version}</h3>
      <div>    
        <VersionItems topic="Features" items={features}/>
        <VersionItems topic="Known problems" items={problems} />
        <VersionItems topic="Next" items={next} />
        <VersionItems topic="Notes" items={notes} />
      </div>
    </div>  
  )
}

const VersionItems = ({items, topic}: {topic: string, items: string[]}) => {
  if (items.length === 0) {
    return null
  }
  return (
    <>
      <b>{topic}</b>
      <ol>{ items.map((item) => <li key={item}>{item}</li>) }</ol>
    </>
  )
}


export default Versions