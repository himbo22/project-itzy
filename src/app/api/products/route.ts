import prisma from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getTokenFromCookie, verifyToken } from '@/libs/jwt-verify'
import { getSearchParams } from '@/libs/utils'
import { ApiResponse, ResponseWithPaging } from '@/types'

export async function GET(request: NextRequest) {
  const { page, limit, category } = getSearchParams(request)

  const skip = ((page ?? 1) - 1) * (limit ?? 16)

  const where = {
    isDeleted: false,
    ...(category &&
      category !== 'All' && {
        Category: {
          name: category,
        },
      }),
  }

  const [productsRaw, total] = await Promise.all([
    prisma.product.findMany({
      where,
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        oldPrice: true,
        newPrice: true,
        image: true,
        discount: true,
        isDeleted: true,
        Artist: {
          select: {
            id: true,
            name: true,
          },
        },
        Category: {
          select: {
            name: true,
          },
        },
      },
    }),
    prisma.product.count({ where }),
  ])

  const products: ProductDTO[] = productsRaw.map((p) => ({
    ...p,
    discount: Number(p.discount ?? 0),
    oldPrice: Number(p.oldPrice),
    newPrice: Number(p.newPrice),
  }))

  const response: ApiResponse<ResponseWithPaging<ProductDTO[]>> = {
    isSuccess: true,
    message: 'FETCH',
    results: {
      data: products,
      page: page ?? 1,
      total: total,
      totalPage: Math.ceil(total / (limit ?? 16)),
    },
  }

  return NextResponse.json(response, { status: 200 })
}

export async function POST() {
  try {
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 400 })
  }
}
