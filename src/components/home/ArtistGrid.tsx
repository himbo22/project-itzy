import Link from 'next/link'

const artists = [
  {
    id: 'just-b',
    name: 'JUST B',
    image: '/images/artists/just-b.jpg',
    backgroundColor: 'bg-gray-200',
    textColor: 'text-gray-800',
  },
  {
    id: 'stayc',
    name: 'STAYC',
    image: '/images/artists/stayc.jpg',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 'nouera',
    name: 'NouerA',
    image: '/images/artists/nouera.jpg',
    backgroundColor: 'bg-purple-600',
    textColor: 'text-white',
  },
  {
    id: 'yoon-sanha',
    name: 'Yoon Sanha',
    image: '/images/artists/yoon-sanha.jpg',
    backgroundColor: 'bg-gradient-to-br from-orange-400 to-red-500',
    textColor: 'text-white',
  },
  {
    id: 'close-your-eyes',
    name: 'CLOSE YOUR EYES',
    image: '/images/artists/close-your-eyes.jpg',
    backgroundColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    id: 'onew',
    name: 'ONEW',
    image: '/images/artists/onew.jpg',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 'nowz',
    name: 'NOWZ',
    image: '/images/artists/nowz.jpg',
    backgroundColor: 'bg-orange-500',
    textColor: 'text-white',
  },
  {
    id: 'fromis-9',
    name: 'fromis_9',
    image: '/images/artists/fromis-9.jpg',
    backgroundColor: 'bg-gray-100',
    textColor: 'text-gray-800',
  },
  {
    id: 'nct-dream',
    name: 'NCT DREAM',
    image: '/images/artists/nct-dream.jpg',
    backgroundColor: 'bg-green-500',
    textColor: 'text-white',
  },
  {
    id: 'bts',
    name: 'BTS',
    image: '/images/artists/bts.jpg',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
  {
    id: 'super-junior',
    name: 'Super Junior',
    image: '/images/artists/super-junior.jpg',
    backgroundColor: 'bg-blue-900',
    textColor: 'text-white',
  },
  {
    id: 'wayv',
    name: 'WayV',
    image: '/images/artists/wayv.jpg',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
]

export default function ArtistGrid() {
  return (
    <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm border border-gray-400 max-w-6xl mx-auto mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
          Meet your artist
        </h2>
        <Link
          href="/artist"
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

      {/* Artists Grid */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
        {artists.map((artist) => (
          <Link
            key={artist.id}
            href={`/artist/${artist.id}`}
            className="group flex flex-col items-center space-y-2 sm:space-y-3 hover:scale-105 transition-transform duration-200"
          >
            {/* Artist Image/Icon */}
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${artist.backgroundColor} flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-200`}
            >
              {/* Replace with actual images when available */}
              <span
                className={`text-xs sm:text-sm font-bold ${artist.textColor} text-center px-2`}
              >
                {artist.name}
              </span>
            </div>

            {/* Artist Name */}
            <span className="text-xs sm:text-sm text-gray-600 text-center font-medium group-hover:text-gray-900 transition-colors duration-200">
              {artist.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
