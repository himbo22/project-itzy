'use client'

import ArtistGrid from '@/components/home/ArtistGrid'
import HomeCart from '@/components/home/HomeCard'
import HomeCarousel from '@/components/home/HomeCarousel'
import HomeShop from '@/components/home/Shop'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [section, setSection] = useState<'home' | 'shop'>('home')

  return (
    <div>
      <Header section={section} onSectionChange={setSection} />
      {section === 'home' ? (
        <div>
          <HomeCarousel />
          <ArtistGrid />
          <HomeCart />
        </div>
      ) : (
        <div>
          <HomeShop />
        </div>
      )}
      <Footer />
    </div>
  )
}
