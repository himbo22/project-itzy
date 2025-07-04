'use client'

import HomeButton from '@/components/home/HomeButton'
import SearchOverlay from '@/components/partials/search'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoIosSearch } from 'react-icons/io'
import { IoBagOutline } from 'react-icons/io5'

interface props {
  section: 'home' | 'shop'
  onSectionChange: (section: 'home' | 'shop') => void
}

export function Header({ section, onSectionChange }: props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const openSearchBox = () => {
    setIsSearchOpen(true)
  }

  const closeSearchBox = () => {
    setIsSearchOpen(false)
  }

  return (
    <header className="flex justify-between bg-white w-full h-15 fixed shadow top-0 left-0 right-0 z-50">
      <div className="flex w-1/2 justify-start items-center">
        <Link href={'/'}>
          <Image src="/images/itzy.png" alt="logo" width={100} height={60} />
        </Link>
        <HomeButton
          content="Home"
          onClick={() => onSectionChange('home')}
          isSelected={section === 'home'}
        />
        <HomeButton
          content="Shop"
          onClick={() => onSectionChange('shop')}
          isSelected={section === 'shop'}
        />
      </div>
      <div className="flex w-1/2 justify-end items-center mx-2 gap-1.5">
        <button
          onClick={openSearchBox}
          className="p-2 text-gray-900 rounded-full hover:bg-[#D1D5DB80] transition-colors"
        >
          <IoIosSearch size={23} />
        </button>
        <Link
          href={'/notification'}
          className="p-2 text-gray-900  rounded-full hover:bg-[#D1D5DB80] transition-colors"
        >
          <IoIosNotificationsOutline size={23} />
        </Link>
        <Link
          href={'/cart'}
          className="p-2 text-gray-900  rounded-full hover:bg-[#D1D5DB80] transition-colors"
        >
          <IoBagOutline size={21} />
        </Link>
        <Link
          href={'/profile'}
          className="p-2 rounded-full hover:bg-[#D1D5DB80] transition-colors"
        >
          <div className="w-[23px] h-[23px] relative rounded-full overflow-hidden">
            <Image
              src="/images/itzy.png"
              alt="avatar"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
      <SearchOverlay isOpen={isSearchOpen} onClose={closeSearchBox} />
    </header>
  )
}
