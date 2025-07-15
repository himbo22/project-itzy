import prisma from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getTokenFromCookie, verifyToken } from '@/libs/jwt-verify'
import { getSearchParams } from '@/libs/utils'
import { ApiResponse, ResponseWithPaging } from '@/types'
import { id } from 'zod/v4/locales'

export const revalidate = 3600

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const productRaw = await prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      oldPrice: true,
      newPrice: true,
      image: true,
      discount: true,
      detail: true,
      quantity: true,
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
  })

  if (!productRaw) {
    const response: ApiResponse<null> = {
      isSuccess: false,
      message: 'PRODUCT NOT FOUND',
      results: null,
    }

    return NextResponse.json(response, { status: 404 })
  }

  const product: ProductDetailDTO = {
    ...productRaw,
    discount: Number(productRaw?.discount ?? 0),
    oldPrice: Number(productRaw?.oldPrice),
    newPrice: Number(productRaw?.newPrice),
  }

  const response: ApiResponse<ProductDetailDTO> = {
    isSuccess: true,
    message: 'FETCH',
    results: product,
  }

  return NextResponse.json(response, { status: 200 })
}

export async function POST() {
  try {
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 400 })
  }
}
