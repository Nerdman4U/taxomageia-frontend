import { useContext} from "react"
import AppContext from '@/app/context/application.context'
import { AppContextType, VersionInfoType } from "@/app/context/application.context"
import versions from "../../app/versions/versions.json" assert { type: "json" }

const Version = ({info}: {info: VersionInfoType}) => {
  const next = info.next_en || []
  const features = info.features_en || []
  const problems = info.problems_en || []
  return (
    <div id="what-is-taxomageia" className="max-w-3xl mx-auto md:pb-16">
      <h3 className="h3 mb-3 text-gray-400">Server: {info.version}</h3>
      <div>    
        <h3>Features</h3>
        <ul>
          { features.map((item) => <li>{item}</li>) }
        </ul>
        <h3>Known problems</h3>
        <ul>
          { problems.map((item) => <li>{item}</li>) }
        </ul>
        <h3>What next?</h3>
        <ul>
          { next.map((item) => <li>{item}</li>) }
        </ul>
      </div>
    </div>  
  )
}

const Versions = () => {
  // TODO: use context and read version info.
  // const value = useContext(AppContext)
  const versionInfo = versions
  // console.log('value:', value)
  // const clientVersion = value.clientVersion || "0.0.0"
  // const serverVersion = value.serverVersion || "0.0.0"
  // const clientVersionStr = value.clientVersionStr || "Client: v0.0.0"
  // const serverVersionStr = value.serverVersionStr || "Server: v0.0.0"
  // const versionInfo = value.versionInfo || []
  console.log(versionInfo)

  return ( 
    <section id="versions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Versions</h1>
            <p className="text-xl text-gray-400">
              Versions of Taxomageia.
            </p>
          </div>
   
          {/* Items */}
          { versionInfo?.map((info) => <Version key={info.version} info={info} />) }

        </div>
      </div>
    </section>
  )
}

export default Versions