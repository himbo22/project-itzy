'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ApiResponse, ResponseWithPaging } from '@/types'
import { Button } from '@/components/ui/button'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getSmartPagination } from '@/utils/helper'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'

interface props {
  headerText: string
  attribute?: string
}

interface FilterState {
  page: number
}

const initialFilter: FilterState = {
  page: 1,
}

async function fetchProducts(
  page: number,
  category?: string
): Promise<ApiResponse<ResponseWithPaging<ProductDTO[]>>> {
  const params = new URLSearchParams({
    page: page.toString(),
    ...(category && category !== 'All' && category !== 'BEST' && { category }),
  })

  const res = await fetch(`http://localhost:3000/api/products?${params}`)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default function Shop({ headerText, attribute }: props) {
  const [activeTab, setActiveTab] = useState('All')
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1')
  const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['products', page, activeTab],
      queryFn: () => fetchProducts(page, activeTab),
      placeholderData: keepPreviousData,
    })

  if (isLoading) {
    return <div className="mt-20">standing by...</div>
  }

  if (error) {
    return <div className="mt-20">error...</div>
  }

  if (!data?.results.data) {
    return <div className="mt-20">error...</div>
  }

  const tabs = [
    'All',
    'BEST',
    'Albums',
    'Drama/Movie',
    'DVD',
    'Light Stick',
    'PHOTOBOOK',
    'MD',
  ]
  const products = data.results.data
  const pagination = data.results

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())
    router.push(`?${params.toString()}`)
  }

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', tab)
    params.set('page', '1') // Reset to first page when changing category
    router.push(`?${params.toString()}`)
    setActiveTab(tab)
  }

  return (
    <div className={`max-w-7xl lg:mx-auto mx-2 ${attribute ?? ''}`}>
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{headerText}</h2>
        <Star className="w-6 h-6 text-yellow-400 fill-current" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
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
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={true}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 relative border-1 border-gray-200"
          >
            <span className="bg-gray-100 rounded-full text-sm border-1 px-2 mb-3 text-gray-600 absolute top-2 right-2 z-50">
              {product.Category.name}
            </span>
            {/* Product Image */}
            <div className={`relative h-64 flex items-center justify-center`}>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Product Info */}
            <div className="p-4">
              <div className="text-gray-600 text-sm mb-1">
                {product.Artist.name}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 leading-tight">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                {product.discount != 0 && (
                  <span className="text-pink-500 font-bold">
                    {product.discount}%
                  </span>
                )}
                <span className="text-lg font-bold text-gray-900">
                  ${product.newPrice}
                </span>
                {product.oldPrice !== product.newPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.oldPrice}
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
          {/* <div className="text-sm text-gray-600">
            Showing{' '}
            <span className="font-medium text-gray-900">{startIndex + 1}</span>{' '}
            to{' '}
            <span className="font-medium text-gray-900">
              {Math.min(endIndex, products.length)}
            </span>{' '}
            of{' '}
            <span className="font-medium text-gray-900">{products.length}</span>{' '}
            products
          </div> */}

          {/* Pagination Controls */}
          <Pagination className="space-x-2 mt-4">
            {pagination.page && pagination.page > 1 && (
              <PaginationPrevious
                className="cursor-pointer"
                onClick={() => {
                  handlePageChange(pagination.page - 1)
                }}
              />
            )}
            <PaginationContent className="cursor-pointer">
              {getSmartPagination(pagination.page, pagination.totalPage).map(
                (item, index) => (
                  <PaginationItem key={index}>
                    {item === '...' ? (
                      <span className="px-2 text-gray-400">...</span>
                    ) : (
                      <Button
                        onClick={() => handlePageChange(item as number)}
                        className={`px-3 py-1 hover:bg-black hover:text-white ${
                          pagination.page === item
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-black'
                        }`}
                      >
                        {item}
                      </Button>
                    )}
                  </PaginationItem>
                )
              )}
              {/* {pagination.totalPage &&
                Array.from(
                  { length: pagination.totalPage },
                  (_, i) => i + 1
                ).map((page) => (
                  <PaginationItem key={page}>
                    <Button
                      onClick={() => {
                        setPage(page)
                      }}
                      variant="secondary"
                      className={`hover:bg-[#d5e0ed] text-muted-foreground ${
                        pagination.page === page && 'bg-[#d5e0ed]'
                      }`}
                    >
                      {page}
                    </Button>
                  </PaginationItem>
                ))} */}
            </PaginationContent>
            {pagination && pagination.page < pagination.totalPage && (
              <PaginationNext
                className="cursor-pointer"
                onClick={() => handlePageChange(pagination.page + 1)}
              />
            )}
          </Pagination>
        </div>
        {/* Quick Navigation */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Go to page:</span>
          <select
            value={pagination.page}
            onChange={(e) => handlePageChange(Number(e.target.value))}
            className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          >
            {Array.from({ length: pagination.totalPage }, (_, i) => i + 1).map(
              (page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              )
            )}
          </select>
        </div>
        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-pink-500 to-pink-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${(pagination.page / pagination.totalPage) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
