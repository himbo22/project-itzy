'use client'

import ArtistGrid from '@/components/home/ArtistGrid'
import HomeCart from '@/components/home/HomeCard'
import HomeCarousel from '@/components/home/HomeCarousel'
import Shop from '@/components/home/Shop'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import { useState } from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Header section={section} onSectionChange={setSection} /> 
        {section === 'home' ? (
        <div>
          <HomeCarousel />
          <ArtistGrid />
          <HomeCart />
        </div>
      
    ) : (
        <div className="mt-3">
          <Shop headerText="ITZY's products" />
        </div>
      )} */}
      <div>
        <HomeCarousel />
        <ArtistGrid />
        <HomeCart />
      </div>
      <Footer />
    </div>
  )
}
