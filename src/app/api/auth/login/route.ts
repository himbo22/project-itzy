import prisma from '@/libs/prisma'
import { ApiResponse } from '@/types'
import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'

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
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.Role.name },
      process.env.ACCESS_SECRET as string,
      { expiresIn: '1h' }
    )

    // cookieStore.set({
    //   name: 'token',
    //   value: token,
    //   httpOnly: true,
    //   secure: true,
    // })

    const response: ApiResponse<string> = {
      data: token,
      status: 'success',
      message: 'Login successful',
    }

    return NextResponse.json(response, { status: 200 })
  } catch (e) {
    return NextResponse.json({ message: 'Error', e }, { status: 400 })
  }
}
