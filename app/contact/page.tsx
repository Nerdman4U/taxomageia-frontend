import Image from 'next/image'
import * as config from '@/config'
import Joni01 from '@/public/images/joni-taxomageia-sininen-paita-1200-900.jpg'

const Contact = () => {
  return (
    <section id="contact">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 text-gray-400">
      <div className="py-12 md:py-20 border-t border-gray-800">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
          <h1 className="h2 mb-4">Contact</h1>
          <p className="text-xl text-gray-400">You can reach me via Facebook, LinkedIn, Forums or Email.</p>
        </div> 

        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Joni01} width={1200} height={900} priority={true} alt="Joni and Taxomageia" />

        <div className="max-w-3xl mx-auto md:pb-16 pt-10">
          <h3 className="h3 mb-3 text-gray-400">Facebook</h3>
          <p>Follow me at <a href={config.facebook}>Facebook</a></p>
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">Forum</h3>
          <p>Share your ideas and suggestions on the <a href={config.forum}>Forum</a>.</p>
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">LinkedIn</h3>
          <p>I also have an account at <a href={config.linkedin}>LinkedIn</a>.</p>
        </div>

        <div className="max-w-3xl mx-auto md:pb-16">
          <h3 className="h3 mb-3 text-gray-400">Email</h3>
          <p>For private contact, the preferred way would be to just send email to <a href={config.email}>info@taxomageia.pro</a>.</p>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Contact