'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { ranksUrl, inheritedRanksUrl } from '../../config'

import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Taxon from '@/components/taxon'

import taxon from '../../interfaces/taxon.interface'

  const Home = () => {
  const [ taxons, setTaxons] = useState<taxon[]>([])
  const [ selectedTaxon, setSelectedTaxon ] = useState<taxon | undefined>()

  useEffect(() => {
    axios.get(ranksUrl).then((response) => {
      console.log('connected to server at {server}')
      setTaxons(response.data)
    })     
  }, [])

  const handleSelectRankClick = (e: React.MouseEvent) => {
    e.preventDefault
    const taxon = taxons.find(taxon => { 
      return taxon.identifier === e.currentTarget.id
    })
    if (!taxon) return
    const url = inheritedRanksUrl + '/' + taxon.identifier

    axios.get(url).then((response) => {
      console.log(response.data)
      setSelectedTaxon(response.data as taxon)
    })
  }

  const handleClearSelectRankClick = (e: React.MouseEvent) => {
    e.preventDefault
    console.log('handleClearSelectRank')
    setSelectedTaxon(undefined)
  }

  console.log("selectedTaxon", selectedTaxon)
  if (selectedTaxon) {     
    return (
      <>
        <Hero />
        <Taxon taxon={selectedTaxon} handleClearSelectRankClick={handleClearSelectRankClick} />
        <Testimonials />
        <Newsletter />
      </>
    )
  }
  else {
    return (
      <>
        <Hero />
        <Features ranks={taxons}/>
        <Zigzag taxons={taxons} handleSelectRankClick={handleSelectRankClick} handleClearSelectRankClick={handleClearSelectRankClick}/>  
        <Testimonials />
        <Newsletter />
      </>
    )
  }

}

export default Home