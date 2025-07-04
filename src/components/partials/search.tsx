import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

interface props {
  isOpen: boolean
  onClose: () => void
}

const SearchOverlay = ({ isOpen, onClose }: props) => {
  const [searchQuery, setSearchQuery] = useState('')

  // Mock recommended searches data
  const recommendedSearches = [
    'ATEEZ',
    'TRENDZ',
    'JO YURI',
    'ALLDAY PROJECT',
    'Various Artists',
    'STAYC',
    'Yoon Sanha',
    'JUST B',
    'BTS',
    'NouerA',
    'fromis_9',
  ]

  // Handle close
  const handleClose = () => {
    onClose()
    setSearchQuery('')
  }

  // Handle overlay click (close search)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
      setSearchQuery('')
    }
  }

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [isOpen])

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Don't render if not open
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-[#D1D5DB80] z-50 flex items-start justify-center pt-1"
      onClick={handleOverlayClick}
    >
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-xl">
        {/* Search Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Search</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="text-gray-500 hover:text-gray-700">Cancel</span>
          </button>
        </div>

        {/* Search Input */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Enter a keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Recommended Searches */}
        <div className="p-4 pt-0">
          <h3 className="text-sm text-gray-500 mb-4">Recommended searches</h3>
          <div className="flex flex-wrap gap-2">
            {recommendedSearches.map((search, index) => (
              <button
                key={index}
                className="px-3 py-2 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100 transition-colors"
              >
                #{search}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Area */}
        {searchQuery && (
          <div className="p-4 pt-0">
            <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
              Search results for "{searchQuery}" would appear here...
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchOverlay
