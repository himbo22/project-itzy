import { NextRequest, NextResponse } from 'next/server'

export function GET(request: Request) {
  return NextResponse.json({message:'Hello from Next.js!'})
}