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
import CommunityInput from '@/components/artist/CommunityInput'
import CommunityInputModal from '@/components/modal/CommunityInputModal'

interface props {
  headerText: string
  attribute?: string
  productId: string
}

interface FilterState {
  page: number
}

const initialFilter: FilterState = {
  page: 1,
}

async function fetchProducts(
  page: number
): Promise<ApiResponse<ResponseWithPaging<ProductDTO[]>>> {
  const res = await fetch(`http://localhost:3000/api/products?page=${page}`)
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  return res.json()
}

export default function AskSpace({ headerText, attribute, productId }: props) {
  const [page, setPage] = useState(1)
  const [isOpenInput, setIsOpenInput] = useState(false)
  const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['products', page],
      queryFn: () => fetchProducts(page),
      placeholderData: keepPreviousData,
    })

  const asks = [
    {
      id: 1,
      question: 'What is the return policy?',
      answer: 'You can return items within 30 days of purchase.',
      askDate: '2025-10-01',
      user: {
        id: '1',
        username: 'anti mage',
        avatar:
          'https://th.bing.com/th/id/R.89c86c8b4c1bdd0093738e35ea2f625f?rik=kxJ5U%2bGwHomnEg&pid=ImgRaw&r=0',
      },
    },
    {
      id: 2,
      question: 'How do I track my order?',
      answer:
        'You can track your order using the tracking link sent to your email.',
      askDate: '2025-10-02',
      user: {
        id: '2',
        username: 'injoker',
        avatar:
          'https://tse3.mm.bing.net/th/id/OIP.p22Nw3T-e0_Zs2QQb5ZFlQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
      },
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer: null,
      askDate: '2025-10-03',
      user: {
        id: '3',
        username: 'bristleback',
        avatar:
          'https://quotesbae.com/wp-content/uploads/2018/01/Dota-2-Meme-Funny-Image-Photo-Joke-07.jpg',
      },
    },
  ]

  if (isLoading) {
    return <div className="mt-20">standing by...</div>
  }

  if (error) {
    return <div className="mt-20">error...</div>
  }

  if (!data?.results.data) {
    return <div className="mt-20">error...</div>
  }

  const pagination = {
    page: page,
    totalPage: 4,
    total: 36,
  }

  return (
    <div className={`max-w-7xl mx-auto ${attribute ?? ''}`}>
      <CommunityInput
        text="Write a question"
        onClick={() => setIsOpenInput(true)}
      />

      {/* asks */}
      <div className="min-h-36 flex flex-col mt-5">
        {asks.length > 0 ? (
          asks.map((ask) => (
            <div key={ask.id}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300 max-w-4xl mb-3">
                {/* User Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={ask.user.avatar}
                    alt="avatar"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {ask.user.username}
                    </h3>
                    <p className="text-sm text-gray-500">12 hours ago</p>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-gray-800 leading-relaxed">{ask.question}</p>

                {/* answer */}
                {ask.answer && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Answer:</h4>
                    <p className="text-gray-700">{ask.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="m-auto">No comments yet.</p>
        )}
      </div>
      {/* pagination */}
      <Pagination className="space-x-2 mt-4">
        {pagination.page && pagination.page > 1 && (
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => {
              setPage(pagination.page - 1)
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
                    onClick={() => setPage(item as number)}
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
        </PaginationContent>
        {pagination && pagination.page < pagination.totalPage && (
          <PaginationNext
            className="cursor-pointer"
            onClick={() => setPage(pagination.page + 1)}
          />
        )}
      </Pagination>
      {isOpenInput && (
        <CommunityInputModal
          onClose={() => setIsOpenInput(false)}
          isOpen={isOpenInput}
          onOpenGallery={() => {
            console.log('cac')
          }}
          text="Write a question"
        />
      )}
    </div>
  )
}
