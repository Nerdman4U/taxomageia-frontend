import Image from 'next/image'
import TaxonPreviewItem from './taxon-preview-item'
import TaxonPreviewListItem from '@/components/taxon-preview-list-item'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

import rank from '../interfaces/taxon.interface'

const Zigzag = ({ taxons, handleSelectRankClick }: { taxons: rank[], handleSelectRankClick: any }) => {
  return (
    <section id="creatures">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Creatures ({ taxons.length })</h1>
            <p className="text-xl text-gray-400">Click the name of the taxon to see more</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto md:pb-16">
            {
              taxons.map((r) => { 
                const name = r.name_en || r.name_fi || r.identifier
                return <TaxonPreviewListItem name={name} taxonRank={r.taxonRank} identifier={r.identifier} key={r.identifier} handleSelectRankClick={handleSelectRankClick}/>
              })
            }
            <div className="clearfix:both"></div>
            {/* { 
              taxons.map(r => <TaxonPreviewItem key={r.identifier} rank={r} handleSelectRankClick={handleSelectRankClick} handleClearSelectRankClick={handleClearSelectRankClick} />)
            } */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Zigzag

