'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { taxonsUrl } from '../../config'

import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Taxon from '@/components/taxon'

import taxon from '@/interfaces/taxon.interface'

  const Home = () => {
    const [ taxons, setTaxons] = useState<taxon[]>([])
    const [ featured, setFeatured ] = useState<taxon[]>([])
    const [ selectedTaxon, setSelectedTaxon ] = useState<taxon | undefined>()
    const [ clicked, setClicked ] = useState(false)
  
    useEffect(() => {
      axios.get(taxonsUrl).then((response): void => {
        //console.log(`connected to server at ${taxonsUrl}`, response.data)
        const result = response.data || []
        const featIds = ['fire_elemental', 'black_dragon', 'vampire']
        const filteredFeatured = result.filter((r:taxon) => featIds.find(id => id === r.identifier))
        const filteredTaxons = result.filter((r:taxon) => featIds.find(id => id !== r.identifier))
        setFeatured(filteredFeatured)
        setTaxons(filteredTaxons)
      })
    }, [])
  
    const handleSelectRankClick = (e: React.MouseEvent) => {
      e.preventDefault
      const url = taxonsUrl + '/' + e.currentTarget.id
      //console.log('fetching url:', url)
      axios.get(url).then((response) => {
        //console.log('response.data', response.data)
        if (!response.data) return
        setSelectedTaxon(response.data as taxon)
        setClicked(true)
      })  
    }
  
    const handleClearSelectRankClick = (e: React.MouseEvent) => {
      e.preventDefault
      setSelectedTaxon(undefined)
      setClicked(true)
    }
  
    if (selectedTaxon) {     
      return (
        <>
          <Hero />
          <Taxon clicked={clicked} taxon={selectedTaxon} handleSelectRankClick={handleSelectRankClick} handleClearSelectRankClick={handleClearSelectRankClick} />
          <Testimonials featured={featured} handleSelectRankClick={handleSelectRankClick} />
          {/* <Newsletter /> */}
        </>
      )
    }
    else {
      return (
        <>
          <Hero />
          <Features ranks={taxons}/>
          <Zigzag clicked={clicked} taxons={taxons} handleSelectRankClick={handleSelectRankClick} />  
          <Testimonials featured={featured} handleSelectRankClick={handleSelectRankClick} />
          {/* <Newsletter /> */}
        </>
      )
    }
}

export default Home


