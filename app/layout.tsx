'use client'

import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from '@/components/ui/footer'

import { ContextProvider } from './context/application.context'

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

  return (
    <html lang="en">
      <head>
        <script src="localforage/dist/localforage.js"></script>
      </head>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <ContextProvider>
            <Header />
            {children}
            <Banner />
            <Footer />
          </ContextProvider>
       </div>
      </body>
    </html>
  )
}

