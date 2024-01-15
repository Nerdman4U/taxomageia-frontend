import React from "react"
import AppContext from '@/app/context/application.context'
import { AppContextType, VersionInfoType } from "@/app/context/application.context"

const Version = ({info}: {info: VersionInfoType}) => {
  return (
    <div id="what-is-taxomageia" className="max-w-3xl mx-auto md:pb-16">
      <h3 className="h3 mb-3 text-gray-400">Server: {info.version}</h3>
      <p>    
      </p>
      <p>
      </p>
    </div>  
  )
}

const Versions = () => {
  // const { serverVersion, serverVersionStr, clientVersion, clientVersionStr, versionInfo } = React.useContext(AppContext)

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