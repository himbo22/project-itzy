import prisma from '@/libs/prisma'
import { UserDTO } from '@/types/user'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { hash } from 'crypto'
import { ApiResponse } from '@/types'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function POST(request: NextRequest) {
  try {
    const body: UserDTO = await request.json()

    // if existing username
    const isExistedUsername = await prisma.user.findUnique({
      where: { username: body.username },
    })

    if (isExistedUsername) {
      return NextResponse.json(
        { message: 'Username or  already taken' },
        { status: 409 }
      )
    }

    // if existing email
    const isExistedEmail = await prisma.user.findUnique({
      where: { email: body.email },
    })
    if (isExistedEmail) {
      return NextResponse.json(
        { message: 'Email or  already taken' },
        { status: 409 }
      )
    }

    // hash password
    const hashedPassword = await bcrypt.hash(body.password, 10)

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        password: hashedPassword,
        avatar: body.avatar,
        isActive: true,
        roleId: 2,
      },
    })

    const response: ApiResponse<string> = {
      results: newUser.id,
      isSuccess: true,
      message: 'Login successful',
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 400 })
  }
}
