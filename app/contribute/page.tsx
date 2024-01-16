const Contribute = () => {

  return (
    <section id="contribute">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
      <div className="py-12 md:py-20 border-t border-gray-800">
  
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
          <h1 className="h2 mb-4">Contribute</h1>
          <p className="text-xl text-gray-400">If you want to contribute, check below!</p>
        </div>
  
        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">Patreon</h3>
          <p>If you would like to support the project, please consider becoming a <a href="https://www.patreon.com/Taxomageia.pro">Patreon</a>.</p>          
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">Github</h3>
          <p>
            If you would like to help by fixing bugs, building features or writing tests thats warmly welcome! Fork and clone the <a href="http://github.com/nerdman4u/taxomageia-frontend">repository</a>. Questions and suggestions are welcome. 
          </p>
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">Forum</h3>
          <p>Share your ideas and suggestions on the forum (not yet open).
            {/* <a href="https://forum.taxomageia.com">forum</a>. */}
          </p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Contribute