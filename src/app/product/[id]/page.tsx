'use client'

import NotFoundPage from '@/app/not-found'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import MarkDown from '@/components/partials/markdown'
import AskSpace from '@/components/product/AskSpace'
import ReviewSpace from '@/components/product/ReviewSpace'
import { ApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
import {
  CreditCard,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { use, useState } from 'react'

async function fetchProduct(
  id: string
): Promise<ApiResponse<ProductDetailDTO>> {
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [section, setSection] = useState<'description' | 'ask' | 'review'>(
    'description'
  )
  const [amount, setAmount] = useState(1)
  const { data, error, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <div>Standing by...</div>
  }

  if (!data || !data.results) {
    return <NotFoundPage />
  }

  const product = data.results

  const handleAmountChange = (delta: number) => {
    const newAmount = amount + delta
    if (newAmount >= 1 && newAmount <= product.quantity) {
      setAmount(newAmount)
    }
  }

  const totalPrice = (product.newPrice * amount).toFixed(2)
  const savings = product.discount
    ? ((product.oldPrice - product.newPrice) * amount).toFixed(2)
    : 0

  return (
    <div>
      <Header />
      <div className="lg:mt-15 mt-17 mx-auto w-3/4 lg:flex">
        {/* detail */}
        <div className="lg:w-2/3 lg:p-0 w-full">
          <div className="px-5 max-w-full mt-3 mx-auto">
            <Image
              src={product.image}
              alt="image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto border rounded-2xl"
            />
          </div>

          {/* section */}
          <div className="flex gap-5 mx-5 px-5 py-3 cursor-pointer border-2 rounded-2xl justify-between mt-5">
            <div
              className={`w-1/3 text-center ${
                section === 'description' ? 'font-bold' : ''
              }`}
              onClick={() => setSection('description')}
            >
              Description
            </div>
            <div
              className={`w-1/3 text-center ${
                section === 'ask' ? 'font-bold' : ''
              }`}
              onClick={() => setSection('ask')}
            >
              Ask
            </div>
            <div
              className={`w-1/3 text-center mx-auto ${
                section === 'review' ? 'font-bold' : ''
              }`}
              onClick={() => setSection('review')}
            >
              Review
            </div>
          </div>
          {section === 'description' && (
            <div className="w-full px-5 mt-5">
              <MarkDown text={product.detail} />
            </div>
          )}
          {section === 'ask' && (
            <div className="w-full px-5 mt-5">
              <p>Ask section content goes here.</p>
              <AskSpace
                headerText={product.name + "'s asks"}
                attribute="mt-5"
                productId={product.id}
              />
            </div>
          )}
          {section === 'review' && (
            <div className="w-full px-5 mt-5">
              <p>Review section content goes here.</p>
              <ReviewSpace
                headerText={product.name + "'s reviews"}
                attribute="mt-5"
                productId={product.id}
              />
            </div>
          )}
        </div>
        {/* add to cart or buy */}
        <div className="lg:w-1/3 w-full lg:sticky lg:top-18">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-3 space-y-6">
            {/* Artist and Product Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <a href={`/artist/${product.Artist.id}`} className="group">
                  <p className="text-gray-600 italic hover:text-pink-500 transition-colors duration-200 group-hover:underline">
                    by {product.Artist.name}
                  </p>
                </a>
                <button
                  // onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <Heart className={'w-5 h-5 transition-colors duration-200'} />
                  {/* <Heart
                    className={`w-5 h-5 transition-colors duration-200 ${ isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`
                  }
                  /> */}
                </button>
              </div>

              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                  {product.Category.name}
                </span>
                {/* <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div> */}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  product.quantity > 10
                    ? 'bg-green-500'
                    : product.quantity > 0
                    ? 'bg-yellow-500'
                    : 'bg-red-500'
                }`}
              ></div>
              <span className="text-sm text-gray-600">
                {product.quantity > 10
                  ? 'In Stock'
                  : product.quantity > 0
                  ? `Only ${product.quantity} left`
                  : 'Out of Stock'}
              </span>
            </div>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.newPrice}
                </span>
                {Number(product.discount) > 0 && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.oldPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-medium">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div>
              {Number(savings) > 0 && (
                <p className="text-sm text-green-600 font-medium">
                  You save ${savings} on this order
                </p>
              )}
            </div>

            {!product.isDeleted ? (
              <>
                {/* Quantity Selector */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleAmountChange(-1)}
                        disabled={amount === 1}
                        className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-bold text-lg min-w-[3rem] text-center">
                        {amount}
                      </span>
                      <button
                        onClick={() => handleAmountChange(1)}
                        disabled={amount >= product.quantity}
                        className="p-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.quantity} available
                    </span>
                  </div>
                </div>

                {/* Total Price */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total Price</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-gray-900">
                        ${totalPrice}
                      </span>
                      {Number(product.discount) > 0 && (
                        <p className="text-sm text-green-600">
                          ({product.discount}% discount applied)
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>

                  <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Buy Now
                  </button>
                </div>

                {/* Security Badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 pt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Secure checkout guaranteed</span>
                </div>
              </>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <p className="text-red-700 font-medium">
                    This product is no longer available.
                  </p>
                </div>
                <p className="text-red-600 text-sm mt-1">
                  Check back later or browse similar items.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
