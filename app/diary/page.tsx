
const Diary = () => {
  return ( 
    <section id="diary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Diary</h1>
            <p className="text-xl text-gray-400">I will add "daily" developer notes here.</p>
          </div>

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">16.2.2024</h3>
            <div>    
              <p className="mb-3">
                I am still working for major update to let everybody be able to create own Taxomageias. There is a lots of progress but also lots of things to be done. This is amazing because i am really enjoying it. Programming is a lot of fun.                
              </p>
              <p className="mb-3">I changed Jest to Vitest and in my experience it works better with Typescript and ts-node. It may also be that there would have been some configuration option i did not see. Anyway. Vitest seems to work nice. I learned to use mocks so Vitests which uses separate workers is blazing fast. Also, supertest is working. There was weird problem but i found a solution, though i dont remember anymore what it was. I dont remember what was the problem either :) It works. At my programming course i have learned to use Cypress and do e2e-tests so i will add them next.</p>
              <p className="mb-3">Adding, removing and editing Taxomageias works. I need to add user accounts and authentication. I will do that. Then, after some other work, i can publish it. In the meantime, i hope you have a great day.</p>
            </div>  
          </div>

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">29.1.2024</h3>
            <div>    
              <p className="mb-3">
                Added first unit tests to the frontend. This means, every time user interface is updated tests are also ran and they must pass before new version can be deployed. Having good test coverage means better working programs :)  
              </p>
            </div>  
          </div>

          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">25.1.2024</h3>
            <div>    
              <p className="mb-3">
                I continue now with my progamming course. After i finish next lesson i will do some refactoring on the server side. 
                This work will be also a start to have user accounts and open access to create own Taxomageias (from templates, no need to worry about that).                
              </p>
              <p className="mb-3">
                Also, i am already thinking to add feature for notocord and vertebrae - they will be inherited from chordata and vertebrata and are profundus body parts in all creatures and monsters having either of those taxons in parent taxons. To make all this work easier, i also will do some refactoring on the server side. This is great because <span className="text-green-400">I feel</span> much better now than when i started.
              </p>
            </div>  
          </div>

        </div>
      </div>
    </section>
  )

}

export default Diary

