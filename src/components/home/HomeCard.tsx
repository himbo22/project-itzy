import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const items = [
  {
    id: 1,
    group: 'TRENDZ',
    title: 'TRENDZ 5th Single Album [Chameleon] (POCAALBUM)',
    event: 'MEET&CALL EVENT PART.3',
    tags: ['MEET&CALL'],
    image: '/images/logo.png',
  },
  {
    id: 2,
    group: 'NouerA',
    title: 'NouerA 2nd Mini Album [n: number of cases]',
    event: 'MEET&CALL EVENT PART.2',
    tags: ['MEET&CALL', 'LUCKYDRAW'],
    image: '/images/logo.png',
  },
  {
    id: 3,
    group: 'IVE',
    title: 'IVE The 2nd EP [I’VE MINE]',
    event: 'MEET&CALL EVENT PART.1',
    tags: ['MEET&CALL'],
    image: '/images/logo.png',
  },
  {
    id: 4,
    group: 'STAYC',
    title: 'STAYC 3rd Mini Album [TEENFRESH]',
    event: 'MEET&CALL EVENT PART.2',
    tags: ['MEET&CALL', 'LUCKYDRAW'],
    image: '/images/logo.png',
  },
  {
    id: 5,
    group: 'ILLIT',
    title: 'ILLIT 1st Mini Album [SUPER REAL ME]',
    event: 'MEET&CALL EVENT PART.1',
    tags: ['MEET&CALL'],
    image: '/images/logo.png',
  },
  {
    id: 6,
    group: 'ENHYPEN',
    title: 'ENHYPEN 5th Mini Album [ORANGE BLOOD]',
    event: 'MEET&CALL EVENT PART.4',
    tags: ['MEET&CALL', 'LUCKYDRAW'],
    image: '/images/logo.png',
  },
  {
    id: 7,
    group: 'NMIXX',
    title: "NMIXX Single Album [A Midsummer NMIXX's Dream]",
    event: 'MEET&CALL EVENT PART.2',
    tags: ['MEET&CALL'],
    image: '/images/logo.png',
  },
  {
    id: 8,
    group: 'LE SSERAFIM',
    title: 'LE SSERAFIM 2nd Mini Album [ANTIFRAGILE]',
    event: 'MEET&CALL EVENT PART.3',
    tags: ['MEET&CALL', 'LUCKYDRAW'],
    image: '/images/logo.png',
  },
]

const HomeCart = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="max-w-6xl mx-auto mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
          New Items
        </h2>
        <Link
          href="/shop"
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center gap-1 text-sm sm:text-base"
        >
          More
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {items.map((album, idx) => (
          <Link
            href={'/shop'}
            key={album.id}
            className={`rounded-xl overflow-hidden shadow-md group transition-transform duration-300 border border-gray-400 ${
              hovered === idx ? 'scale-105 z-10' : 'scale-100'
            }`}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative w-full h-56">
              <Image
                src={album.image}
                alt={album.group}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-black text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                {album.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded font-semibold ${
                      tag === 'MEET&CALL' ? 'bg-pink-500' : 'bg-green-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-sm font-bold">{album.title}</h3>
              <p className="text-xs mt-1 text-gray-300">{album.event}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeCart
