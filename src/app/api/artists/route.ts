import prisma from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getTokenFromCookie, verifyToken } from '@/libs/jwt-verify'

export async function GET() {
  // const token = await getTokenFromCookie()

  // if (!token) {
  //   return NextResponse.json('Unauthorized', { status: 401 })
  // }

  // const payload = verifyToken(token)

  // if (!payload) {
  //   return NextResponse.json(
  //     { message: 'Invalid or expired token' },
  //     { status: 401 }
  //   )
  // }

  const artists = await prisma.artist.findMany()
  return NextResponse.json(artists, { status: 200 })
}

export async function POST() {
  try {
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 400 })
  }
}
