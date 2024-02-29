import credits from "./credits.json" assert { type: "json" }

type items = {
  name: string,
  url: string,
  from: string,
  for?: string
}
const Items = ({items, topic}: {items: items[], topic:string}) => {
  return (
    <div className="max-w-3xl mx-auto md:pb-16">
      <h3 className="h3 mb-3 text-gray-400">{topic}</h3>
      <div>    
        <ul className="text-gray-200">
          { 
            items.map((item) => {
              const name = (!!item.for) ? `${item.name} (${item.for})` : item.name
              return <li key={item.name}><a target="_blank" href={item.url}>{name} from {item.from}</a></li>
            }) 
          }
        </ul>
      </div>
    </div>  
  )
}

const Credits = () => {
  const templates = credits.templates as items[]
  const images = credits.images as items[]
  return ( 
    <section id="credits">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Credits</h1>
            <p className="text-xl text-gray-400">Following items have been and are used at Taxomageia. Thank you!</p>
          </div>
   
          {/* Images */}
          { <Items items={images} topic="Images" /> }

          {/* Templates */}
          { <Items items={templates} topic="Templates" /> }

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">Other</h3>
            <p className="mb-6 text-gray-400">A lots of applications, protocols and libraries (many open source) have been and/or are being used at this project or has or have had huge importance on this field of expertice. Without their work this project would not be possible. Thank you. To list few:</p>
            <div>
              <ul className="text-gray-200">
                <li>Linux, Ubuntu</li>
                <li><a href="https://tc39.es/ecma262/" target="_blank">ECMAScript</a>, <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
                <li>Node, ts-node</li>
                <li>NextJS</li>
                <li>React, React-Redux, Redux Toolkit</li>
                <li><a href="prisma.io" target="_blank">Prisma</a></li>
                <li>Vitest, Jest, Supertest, Cypress</li>
                <li><a href="https://codeium.com/" target="_blank">Codeium</a></li>
                <li>HTML, CSS</li>
            		<li>PostgreSQL, MySQL</li>
                <li><a href="https://certbot.eff.org/" target="_blank">Certbot</a></li>
                <li>Apache, Redis</li>
                <li>Visual Studio Code, Emacs</li>
                <li>Rest, Design Patterns</li>
                <li>Gimp</li>
            		<li>Wordpress, MyBB</li>
                <li>Google, Facebook, ...</li>
                <li>Chrome, Firefox</li>
                <li>Asus, Intel, Samsung, ...</li>
                <li>HTTP, SSH, DNS</li>
		            <li>IP, TCP</li>
                <li>Internet</li>
                <li><a href="https://en.wikipedia.org/wiki/Turing_machine" target="_top">Turing machine</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Plankalk%C3%BCl" target="_blank">Plankalkül</a></li>                
                <li>And lots of more ... ;)</li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </section>
  )

}

export default Credits
