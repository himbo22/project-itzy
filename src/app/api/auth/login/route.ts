import prisma from '@/libs/prisma'
import { ApiResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
import { JwtPayload, signToken } from '@/libs/jwt-verify'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        username: true,
        password: true,
        Role: {
          select: {
            name: true,
          },
        },
      },
    })

    // Check user exists
    if (!user) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // check correct password
    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (isCorrectPassword === false) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      )
    }

    const cookieStore = await cookies()
    const payload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.Role.name,
    }
    const token = signToken(payload)

    cookieStore.set({
      name: 'authToken',
      value: token,
      httpOnly: true,
      secure: true,
    })

    const response: ApiResponse<string> = {
      results: token,
      isSuccess: true,
      message: 'Login successful',
    }

    return NextResponse.json(response, { status: 200 })
  } catch (e) {
    return NextResponse.json({ message: 'Error', e }, { status: 400 })
  }
}
