'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { ranksUrl, inheritedRanksUrl } from '../../config'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Taxon from '@/components/taxon'

import rank from '../../interfaces/rank.interface'

const Home = () => {
  const [ranks, setRanks] = useState<rank[]>([])
  const [ selectedRank, setSelectedRank ] = useState<rank | undefined>()

  useEffect(() => {
    axios.get(ranksUrl).then((response) => {
      console.log('connected to server at {server}')
      setRanks(response.data)
    })     
  }, [])

  const handleSelectRankClick = (e: React.MouseEvent) => {
    e.preventDefault
    const rank = ranks.find(rank => { 
      return rank.identifier === e.currentTarget.id
    })
    if (!rank) return
    const url = inheritedRanksUrl + '/' + rank.identifier

    console.log(url)
    axios.get(url).then((response) => {
      setSelectedRank(response.data)
    })
  }

  const handleClearSelectRankClick = (e: React.MouseEvent) => {
    e.preventDefault
    setSelectedRank
  }

  return (
    <>
      <Hero />
      <Features ranks={ranks}/>
      if ( selectedRank ) {
        <Taxon rank={selectedRank} handleClearSelectRankClick={handleClearSelectRankClick} />
      }
      else {
        <Zigzag ranks={ranks} handleSelectRankClick={handleSelectRankClick} handleClearSelectRankClick={handleClearSelectRankClick}/>
      }
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home