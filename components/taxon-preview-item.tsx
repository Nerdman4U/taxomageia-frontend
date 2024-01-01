import Image from 'next/image'
import TaxonParentItem from './taxon-parent-item'

import rank from '../interfaces/taxon.interface'
import metamorphosis from '@/interfaces/metamorphosis.interface'

import FeatImage01 from '@/public/images/features-03-image-01.png'

const TaxonPreviewItem = ({rank, handleSelectRankClick, handleClearSelectRankClick}: {rank: rank, handleSelectRankClick: any, handleClearSelectRankClick: any}) => {
  if (!rank?.identifier) {
    return null
  }
  const identifier = rank.identifier
  const name = rank.identifier
  const taxonRank = rank.taxonRank 
  const taxonParent = rank.taxonParent
  const taxonRanks = rank.taxonRanks || []
  const description = rank.description
  // const existences = rank.ages || []  
  // const metamorphoses: metamorphosis[] = []
  // if ( existences.length > 0 ) {
  //   existences.map(age => { return age.metamorphoses })
  // }
  // const bodies = []
  // if ( metamorphoses.length > 0 ) { 
  //   metamorphoses.map(m => { return m.bodies })
  // }

  return (
    <>
    {/* 1st item */}
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
    {/* Image */}
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
      {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" /> */}
      <Image priority={true} className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
    </div>
    {/* Content */}
    <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
      <div className="md:pr-4 lg:pr-12 xl:pr-16">
        <div className="font-architects-daughter text-xl text-purple-600 mb-2">{taxonRank}</div>
        <h3 className="h3 mb-3"><a id={identifier} onClick={handleSelectRankClick}>{name}</a></h3>

        { 
          taxonRanks.map((name => {
            return <TaxonParentItem key={name} name={name}/> 
          }))
        }

        <ul className="text-lg text-gray-400 -mb-2">
          <li className="flex items-center mb-2">
            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span></span>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </>
  )

 
}

export default TaxonPreviewItem