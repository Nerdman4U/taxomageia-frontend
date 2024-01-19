import { useContext} from "react"
import AppContext from '@/app/context/application.context'
import { AppContextType, VersionInfoType } from "@/app/context/application.context"
import serverVersions from "../../app/versions/server.json" assert { type: "json" }
import clientVersions from "../../app/versions/client.json" assert { type: "json" }
import dataVersions from "../../app/versions/data.json" assert { type: "json" }

const VersionItems = ({items, topic}: {topic: string, items: string[]}) => {
  if (items.length === 0) {
    return null
  }
  return (
    <>
      <h3>{topic}</h3>
      <ul>
        { items.map((item) => <li>{item}</li>) }
      </ul>
    </>
  )
}

const Version = ({info}: {info: VersionInfoType}) => {
  const next = info.next_en || []
  const features = info.features_en || []
  const problems = info.problems_en || []
  const notes = info.notes_en || []
  return (
    <div className="max-w-3xl mx-auto md:pb-16">
      <h3 className="h3 mb-3 text-gray-400">{info.version}</h3>
      <div>    
        <VersionItems topic="Features" items={features}/>
        <VersionItems topic="Known problems" items={problems} />
        <VersionItems topic="Next" items={next} />
        <VersionItems topic="Notes" items={notes} />
      </div>
    </div>  
  )
}

const VersionsList = ({versions, topic}: {topic: string, versions: VersionInfoType[]}) => {
  return (
    <section id="serverVersions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">{topic}</h1>
          </div>
    
          {/* Items */}
          { versions?.map((info) => <Version key={info.version} info={info} />) }
    
        </div>
      </div>
    </section>
  )
}

const Versions = () => {
  // TODO: use context and read version info.
  // const value = useContext(AppContext)
  // const versionInfo = serverVersions
  // console.log('value:', value)
  // const clientVersion = value.clientVersion || "0.0.0"
  // const serverVersion = value.serverVersion || "0.0.0"
  // const clientVersionStr = value.clientVersionStr || "Client: v0.0.0"
  // const serverVersionStr = value.serverVersionStr || "Server: v0.0.0"
  // const versionInfo = value.versionInfo || []

  return ( 
    <>
    <VersionsList topic="Server/Backend" versions={serverVersions} />
    <VersionsList topic="Client/Frontend/UI" versions={clientVersions} />
    <VersionsList topic="Data (The First)" versions={dataVersions} />
    </>
  )
}

export default Versions