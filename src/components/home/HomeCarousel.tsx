import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null)

  // Sample carousel data - replace with your actual data
  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
      tag: 'MEET&CALL',
      tagColor: 'bg-pink-500',
      title: '프로미스나인(fromis_9)',
      subtitle: "The 6th mini album 'From Our 20's'",
      description: 'Meet&Call Event Part.2',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=400&fit=crop',
      tag: 'LUCKYDRAW',
      tagColor: 'bg-green-500',
      title: 'NouerA 2nd Mini Album',
      subtitle: '[n: number of cases]',
      description: 'MEET&CALL EVENT PART.2',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=400&fit=crop',
      tag: 'EXCLUSIVE',
      tagColor: 'bg-purple-500',
      title: 'ATEEZ Special Album',
      subtitle: 'THE WORLD EP.FIN : WILL',
      description: 'Limited Edition Release',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
      tag: 'PREORDER',
      tagColor: 'bg-blue-500',
      title: 'STAYC 3rd Single Album',
      subtitle: 'TEENFRESH',
      description: 'Pre-order Available Now',
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div
      className="relative w-full max-w-6xl mx-auto mt-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setHoveredSlide(null)
      }}
    >
      {/* Main Carousel Container */}
      <div className="relative h-60 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl bg-gray-900">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Link
              href={'/'}
              key={slide.id}
              className={`min-w-full h-full relative group`}
              onMouseEnter={() => setHoveredSlide(index)}
              onMouseLeave={() => setHoveredSlide(null)}
              tabIndex={0}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ${
                  hoveredSlide === index ? 'scale-105 z-20' : 'scale-100'
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-30 h-full flex items-center">
                <div className="px-4 sm:px-8 md:px-16 max-w-xs sm:max-w-md md:max-w-2xl">
                  {/* Tag */}
                  <div className="mb-2 sm:mb-4">
                    <span
                      className={`inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full text-white font-bold text-xs sm:text-sm ${slide.tagColor}`}
                    >
                      {slide.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 leading-tight">
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <h3 className="text-white text-base sm:text-lg md:text-xl mb-1 sm:mb-2 opacity-90">
                    {slide.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-xs sm:text-base md:text-lg opacity-80">
                    {slide.description}
                  </p>

                  {/* Call to Action Button */}
                  <button className="mt-3 sm:mt-6 bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Arrows - only show when hovered */}
        {isHovered && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/20 backdrop-blur-sm text-white p-1 sm:p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-pink-500'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-2">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
        </button>
      </div>
    </div>
  )
}

export default HomeCarousel
