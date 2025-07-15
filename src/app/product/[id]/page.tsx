'use client'

import NotFoundPage from '@/app/not-found'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import MarkDown from '@/components/partials/markdown'
import AskSpace from '@/components/product/AskSpace'
import ReviewSpace from '@/components/product/ReviewSpace'
import { ApiResponse } from '@/types'
import { useQuery } from '@tanstack/react-query'
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

  return (
    <div>
      <Header />
      <div className="mt-15 mx-auto w-3/4 lg:flex">
        {/* detail */}
        <div className="lg:w-2/3 lg:p-0 w-full">
          <div className="px-5 max-w-full mt-3 mx-auto">
            <Image
              src="https://tse2.mm.bing.net/th/id/OIP.y1Hf572vbWwzOtyYP6h9PgHaQD?rs=1&pid=ImgDetMain&o=7&rm=3"
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
        {/* add to cart */}
        <div className="lg:w-1/3 w-full h-fit bg-amber-600 lg:sticky lg:top-18 mt-5">
          <Link href={`/artist/${product.Artist.id}`}>
            <p>{product.Artist.name}</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
