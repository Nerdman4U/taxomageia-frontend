'use client'

import './css/style.css'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { appUrl } from '@/config'
import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from '@/components/ui/footer'

import pkg from '../package.json' assert { type: "json" }

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

// export const metadata = {
//   title: 'Taxomageia',
//   description: 'Taxomageia ( or Biomagical Classification )',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const clientVersion = pkg.version
  const [serverVersion, setServerVersion] = useState("0.0.0")

  useEffect(() => {
    axios.get(appUrl, {params: {q: 'version'}}).then((response): void => {
      console.log(`connected to server at ${appUrl}`, response.data)
      if (!response.data) return
      if (!response.data.version) return
      setServerVersion(response.data.version)
    })    
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header client={clientVersion} server={serverVersion}/>
          {children}
          <Banner />
          <Footer />
       </div>
      </body>
    </html>
  )
}
 
