
const Diary = () => {
  return ( 
    <section id="diary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
        <div className="py-12 md:py-20 border-t border-gray-800">
    
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Diary</h1>
            <p className="text-xl text-gray-400">I will add "daily" developer notes here. Just for to share with you.</p>
          </div>
   
          <div className="max-w-3xl mx-auto md:pb-16">
            <h3 className="h3 mb-3 text-gray-400">25.1.2024</h3>
            <div>    
              <p>
                I continue now with my progamming course. After i finish next lesson i will do some refactoring on the server side. 
                This work will be also a start to have user accounts and open access to create own Taxomageias (from templates, no need to worry about that).                
              </p>
              <p>
                Also, i am already thinking to add feature for notocord and vertebrae - they will be inherited from chordata and vertebrata and are 
                profundus body parts in all creatures and monsters having either of those taxons in parent taxons. To make all this work easier, i also
                will do some refactoring on the server side. This is great because <span className="text-green-400">I feel</span> much better now than when i started.
              </p>
            </div>
   
          </div>
        </div>
      </div>
    </section>
  )

}

export default Diary

