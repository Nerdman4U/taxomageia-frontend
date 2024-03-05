import * as config from '@/lib/config'

const Partner = () => {
  return (
    <section id="partner">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
      <div className="py-12 md:py-20 border-t border-gray-800">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
          <h1 className="h2 mb-4">Partner</h1>
          <p className="text-xl text-gray-400">
            Are you a Game Developer or Game Designer? Would you like to partner with Taxomageia?
            I can deliver believable creature and monster data for your game. All ideas are welcome.
          </p>
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <p>Send email to <a href={config.email}>info@taxomageia.pro</a>.</p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Partner