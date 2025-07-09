'use client'

import { ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ArtistShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const artists = [
    {
      id: 1,
      name: 'NouerA',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-purple-600',
      textColor: 'text-red-500',
      logo: 'NouerA',
    },
    {
      id: 2,
      name: 'BTS',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-white',
      textColor: 'text-black',
      logo: 'BTS',
      isLogo: true,
    },
    {
      id: 3,
      name: 'USPEER',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-black',
      textColor: 'text-white',
      logo: 'USPEER',
    },
    {
      id: 4,
      name: 'Yoon Sanha',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-cover',
      isPhoto: true,
    },
    {
      id: 5,
      name: 'NOWZ',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-orange-500',
      textColor: 'text-black',
      logo: 'NOWZ',
    },
    {
      id: 6,
      name: 'fromis_9',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-white',
      textColor: 'text-black',
      logo: 'fromis_9',
      isScript: true,
    },
    {
      id: 7,
      name: 'CLOSE YOUR EYES',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-blue-600',
      textColor: 'text-white',
      logo: 'CLOSE YOUR EYES',
    },
    {
      id: 8,
      name: 'WayV',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-black',
      textColor: 'text-white',
      logo: 'WayV',
    },
    {
      id: 9,
      name: 'ONEW',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-black',
      textColor: 'text-white',
      logo: 'ONEW',
    },
    {
      id: 10,
      name: 'STAYC',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-black',
      textColor: 'text-white',
      logo: 'STAYC',
    },
    {
      id: 11,
      name: 'NCT DREAM',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-lime-500',
      textColor: 'text-white',
      logo: 'NCT DREAM',
    },
    {
      id: 12,
      name: 'SHINee',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-blue-900',
      textColor: 'text-white',
      logo: 'SHINee',
    },
    {
      id: 13,
      name: 'SISTG',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-gray-200',
      textColor: 'text-black',
      logo: 'SISTG',
    },
    {
      id: 14,
      name: 'ALLDAY PROJECT',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-black',
      textColor: 'text-white',
      logo: 'ALLDAY PROJECT',
    },
    {
      id: 15,
      name: 'NCT WISH',
      image: '/api/placeholder/200/200',
      bgColor: 'bg-white',
      textColor: 'text-blue-400',
      logo: 'NCT WISH',
    },
  ]

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Artist</h1>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Find Artist"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-80 px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Artist Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <Link
              href={`/artist/${artist.id}`}
              key={artist.id}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className={`w-40 h-40 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 ${artist.bgColor}`}
              >
                {artist.isPhoto ? (
                  <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                ) : artist.isLogo && artist.name === 'BTS' ? (
                  <div className="text-black text-3xl font-bold">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-8 bg-black"></div>
                      <div className="text-2xl font-bold mt-1">BTS</div>
                    </div>
                  </div>
                ) : artist.isScript ? (
                  <div
                    className={`${artist.textColor} text-xl font-bold italic`}
                  >
                    {artist.logo}
                  </div>
                ) : artist.name === 'CLOSE YOUR EYES' ? (
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">CLOSE</div>
                    <div className="text-lg font-bold">YOUR</div>
                    <div className="text-lg font-bold">EYES</div>
                    <div className="text-yellow-400 text-xs mt-1">★ ★ ★</div>
                  </div>
                ) : artist.name === 'WayV' ? (
                  <div className="text-white text-center">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold">V</span>
                    </div>
                    <div className="text-xs mt-1">WayV</div>
                  </div>
                ) : artist.name === 'NCT DREAM' ? (
                  <div className="text-white text-center">
                    <div className="text-lg font-bold">NCT</div>
                    <div className="text-lg font-bold">DREAM</div>
                  </div>
                ) : artist.name === 'SHINee' ? (
                  <div className="text-white text-center">
                    <div className="text-lg font-bold italic">SHINee</div>
                  </div>
                ) : artist.name === 'NCT WISH' ? (
                  <div className="text-center">
                    <div className="text-blue-400 text-lg font-bold">NCT</div>
                    <div className="text-blue-400 text-lg font-bold">WISH</div>
                    <div className="text-pink-400 text-xs">★</div>
                  </div>
                ) : (
                  <div
                    className={`${artist.textColor} text-xl font-bold text-center`}
                  >
                    {artist.logo}
                  </div>
                )}
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {artist.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No artists found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArtistShowcase
