import 'server-only'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

export type JwtPayload = {
  id: string
  email: string
  role: string
}

export function signToken(payload: JwtPayload) {
  return jwt.sign(payload, process.env.ACCESS_SECRET!, {
    expiresIn: '36d',
  })
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.ACCESS_SECRET!) as JwtPayload
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function getTokenFromCookie(): Promise<string | null> {
  const cookieStore = await cookies() // 👈 cần await
  const token = cookieStore.get('authToken')?.value
  return token || null
}
