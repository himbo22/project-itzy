import prisma from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const artist = await prisma.artist.findUnique({
    where: { id },
  })
  return NextResponse.json(artist, { status: 200 })
}
