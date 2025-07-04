'use client'

import ArtistGrid from '@/components/home/ArtistGrid'
import HomeCarousel from '@/components/home/HomeCarousel'
import { Footer } from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [section, setSection] = useState<'home' | 'shop'>('home')

  return (
    <div className="">
      <Header section={section} onSectionChange={setSection} />
      {section === 'home' ? (
        <div>
          <HomeCarousel />
          <ArtistGrid />
        </div>
      ) : (
        <div>shop</div>
      )}
      <Footer />
    </div>
  )
}
