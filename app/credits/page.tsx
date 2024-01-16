import credits from "./credits.json" assert { type: "json" }

type images = {
  name: string,
  url: string,
  from: string
}
const Images = ({images}: {images: images[]}) => {
  return (
    <div className="max-w-3xl mx-auto md:pb-16">
      <h3 className="h3 mb-3 text-gray-400">Images</h3>
      <div>    
        <ul>
          { images.map((item) => <li key={item.name}><a href={item.url}>{item.name} from {item.from}</a></li>) }
        </ul>
      </div>
    </div>  
  )
}

const Credits = () => {
  const template = credits.template
  const images = credits.images as images[]
  return ( 
    <section id="versions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Credits</h1>
            <p className="text-xl text-gray-400">Following items have been and are used at Taxomageia. Thank you!</p>
          </div>
   
          {/* Items */}
          { <Images images={images} /> }

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">Template</h3>
            <div>
              <a href={template.url}>{template.name} from {template.from}</a>
            </div>
          </div>

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">Other</h3>
            <p>A lots of applications, protocols and libraries (many open source) have been and are being used at this project. To list few:</p>
            <div>
              <ul>
                <li>Linux (Ubuntu)</li>
                <li>Apache, PostgreSQL, Redis</li>
                <li>ECMAScript, Typescript</li>
                <li>Node, TSNode</li>
                <li>NextJS</li>
                <li>React</li>                
                <li>Prisma</li>
                <li>Jest</li>
                <li>HTTP, SSH, DNS</li>
                <li>HTML, CSS</li>
                <li>Visual Studio Code, Emacs</li>
                <li>Chrome, Firefox</li>
                <li>Chromium</li>
                <li>Asus, Intel, Samsung, ...</li>
                <li>And lots of more ...</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )

}

export default Credits
