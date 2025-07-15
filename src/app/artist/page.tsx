'use client'

import { ArtistDTO } from '@/types/artist'
import { useQuery } from '@tanstack/react-query'
import { ArrowLeft, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

async function fetchArtist(): Promise<ArtistDTO[]> {
  const res = await fetch('http://localhost:3000/api/artists')
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export default function ArtistShowcase() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const { data, error, isLoading } = useQuery({
    queryKey: ['artists'],
    queryFn: fetchArtist,
  })
  const [filteredData, setFilteredData] = useState(data ?? [])

  useEffect(() => {
    if (!data) return

    const handler = setTimeout(() => {
      const lower = searchQuery.toLowerCase()
      const filtered = data.filter((artist) =>
        artist.name.toLowerCase().includes(lower)
      )
      setFilteredData(filtered)
    }, 300) // debounce 300ms

    return () => clearTimeout(handler)
  }, [searchQuery, data])

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
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {filteredData?.map((artist, key) => (
            <Link
              href={`/artist/${artist.id}`}
              key={key}
              prefetch={true}
              className="flex flex-col items-center hover:scale-115 transition-transform duration-200  py-1"
            >
              <div className="relative w-60 h-60">
                <Image
                  src={artist.image}
                  fill={true}
                  sizes="3"
                  alt="img"
                  className="m-auto rounded-2xl border-2"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p>{artist.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
