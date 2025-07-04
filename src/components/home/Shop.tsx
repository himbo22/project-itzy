import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const HomeShop = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 16

  const tabs = [
    'All',
    'BEST',
    'ALBUM',
    'Drama/Movie',
    'DVD',
    'Light Stick',
    'PHOTOBOOK',
    'MD',
  ]

  const products = [
    {
      id: 1,
      title: 'ARiC 3rd Mini Album [HOPE] (PLATFORM ver.)',
      artist: 'ARiC',
      price: 9.97,
      originalPrice: 12.46,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-green-700',
    },
    {
      id: 2,
      title: 'ARiC (아릭) 3rd Mini Album [HOPE] (Hope Ver.)',
      artist: 'ARiC',
      price: 15.58,
      originalPrice: 19.48,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-gray-900',
    },
    {
      id: 3,
      title: 'Kai Single [Where In The World] (NEMO)',
      artist: 'Kai',
      price: 12.49,
      originalPrice: 15.61,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-gray-100',
    },
    {
      id: 4,
      title: 'NCT WISH [DICON VOLUME N°29 NCT WISH : TO WISH, TO WAIT]',
      artist: 'NCT WISH',
      price: 33.25,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-white',
    },
    {
      id: 5,
      title: 'ILLIT 1st Mini Album [SUPER REAL ME] (Jewel Ver.)',
      artist: 'ILLIT',
      price: 10.99,
      originalPrice: 13.74,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-pink-200',
    },
    {
      id: 6,
      title: 'LE SSERAFIM [UNFORGIVEN] (Weverse Ver.)',
      artist: 'LE SSERAFIM',
      price: 11.5,
      originalPrice: 14.38,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-red-200',
    },
    {
      id: 7,
      title: 'IVE 2nd EP [I’VE MINE] (Mine Ver.)',
      artist: 'IVE',
      price: 17.99,
      originalPrice: 22.49,
      discount: 20,
      tag: 'BEST',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-yellow-100',
    },
    {
      id: 8,
      title: 'NMIXX [Expérgo] (Limited Edition)',
      artist: 'NMIXX',
      price: 18.45,
      tag: 'BEST',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-blue-100',
    },
    {
      id: 9,
      title: 'ITZY Light Ring (Official Light Stick Ver.2)',
      artist: 'ITZY',
      price: 35.0,
      tag: 'MD',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-orange-200',
    },
    {
      id: 10,
      title: 'NCT 127 [Fact Check] (Digipack Ver.)',
      artist: 'NCT 127',
      price: 9.99,
      originalPrice: 12.49,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-green-100',
    },
    {
      id: 11,
      title: 'TWICE 5th World Tour [READY TO BE] Photobook',
      artist: 'TWICE',
      price: 27.9,
      tag: 'PHOTBOOK',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-purple-100',
    },
    {
      id: 12,
      title: 'Stray Kids [ROCK-STAR] (Limited Ver.)',
      artist: 'Stray Kids',
      price: 21.5,
      originalPrice: 26.88,
      discount: 20,
      tag: 'BEST',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-gray-200',
    },
    {
      id: 13,
      title: 'SEVENTEEN 11th Mini Album [SEVENTEENTH HEAVEN] (AM 5:26 Ver.)',
      artist: 'SEVENTEEN',
      price: 18.99,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-teal-100',
    },
    {
      id: 14,
      title: 'Red Velvet Official Keyring (Logo Ver.)',
      artist: 'Red Velvet',
      price: 12.0,
      tag: 'MD',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-pink-100',
    },
    {
      id: 15,
      title: 'aespa 2024 Season’s Greetings [MY Drama]',
      artist: 'aespa',
      price: 38.75,
      tag: 'MD',
      isNew: false,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-cyan-100',
    },
    {
      id: 16,
      title: 'TXT [The Name Chapter: FREEFALL] (Weverse Ver.)',
      artist: 'TXT',
      price: 11.25,
      originalPrice: 14.06,
      discount: 20,
      tag: 'PRE-ORDER',
      isNew: true,
      image: '/api/placeholder/300/300',
      bgColor: 'bg-indigo-100',
    },
  ]

  const totalPages = Math.ceil(products.length / productsPerPage)
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">ITZY's products</h2>
        <Star className="w-6 h-6 text-yellow-400 fill-current" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {currentProducts.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300"
          >
            {/* Product Image */}
            <div
              className={`relative h-64 ${product.bgColor} flex items-center justify-center`}
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Product Image</span>
              </div>
              {product.isNew && (
                <span className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="text-pink-500 text-xs font-medium mb-1">
                {product.tag}
              </div>
              <div className="text-gray-600 text-sm mb-1">{product.artist}</div>
              <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 leading-tight">
                {product.title}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-pink-500 font-bold">
                  {product.discount}%
                </span>
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mt-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Results Info */}
          <div className="text-sm text-gray-600">
            Showing{' '}
            <span className="font-medium text-gray-900">{startIndex + 1}</span>{' '}
            to{' '}
            <span className="font-medium text-gray-900">
              {Math.min(endIndex, products.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium text-gray-900">{products.length}</span>{' '}
            products
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25 transform scale-105'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900'
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                  : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-800'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Quick Navigation */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Go to page:</span>
          <select
            value={currentPage}
            onChange={(e) => setCurrentPage(Number(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-pink-500 to-pink-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeShop
