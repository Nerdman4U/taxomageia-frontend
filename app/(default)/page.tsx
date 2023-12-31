'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { ranksUrl, inheritedRanksUrl } from '../../config'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

import rank from '../../interfaces/rank.interface'

const Home = () => {
  const [ranks, setRanks] = useState<rank[]>([])

  useEffect(() => {
    axios.get(ranksUrl).then((response) => {
      console.log('connected to server at {server}')
      setRanks(response.data)
    })     
  }, [])

  return (
    <>
      <Hero />
      <Features ranks={ranks}/>
      <Zigzag ranks={ranks}/>
      <Testimonials />
      <Newsletter />
    </>
  )
}

export default Home