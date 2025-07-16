import { clsx, type ClassValue } from 'clsx'
import { NextRequest } from 'next/server'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface BaseSearchParams {
  page?: number
  search?: string
  productType?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  productTypeIds?: string
  colorIds?: string
  priceRange?: string
  limit?: number
}

export interface CustomFilters {
  [key: string]: any
}

export function getSearchParams(
  request: NextRequest
): BaseSearchParams & CustomFilters {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '16')
  const category = searchParams.get('category') || ''

  let priceRange
  const priceRangeParam = searchParams.get('priceRange')
  if (priceRangeParam) {
    try {
      priceRange = JSON.parse(priceRangeParam)
    } catch (e) {
      console.error('Invalid price range format:', e)
    }
  }

  return {
    page,
    limit,
    category,
  }
}

// export function getSearchParams(
//   request: NextRequest,
//   defaultSortBy = 'name',
//   customFilters: string[] = []
// ): BaseSearchParams & CustomFilters {
//   const searchParams = request.nextUrl.searchParams
//   const page = parseInt(searchParams.get('page') || '1')
//   const limit = parseInt(searchParams.get('limit') || '15')
//   const search = searchParams.get('search') || ''
//   const sortBy = searchParams.get('sortBy') || defaultSortBy
//   const sortOrder = (searchParams.get('sortOrder') || 'desc') as 'asc' | 'desc'
//   const productType = searchParams.get('productType') || ''
//   const productTypeIds = searchParams.get('productTypeIds') || ''
//   const colorIds = searchParams.get('colorIds') || ''

//   let priceRange
//   const priceRangeParam = searchParams.get('priceRange')
//   if (priceRangeParam) {
//     try {
//       priceRange = JSON.parse(priceRangeParam)
//     } catch (e) {
//       console.error('Invalid price range format:', e)
//     }
//   }

//   const filters: CustomFilters = {}
//   customFilters.forEach((filter) => {
//     filters[filter] = searchParams.get(filter) || ''
//   })

//   return {
//     page,
//     limit,
//     search,
//     sortBy,
//     sortOrder,
//     productType,
//     productTypeIds,
//     colorIds,
//     priceRange,
//     ...filters,
//   }
// }
