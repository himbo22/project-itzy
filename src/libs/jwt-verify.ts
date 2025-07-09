import 'server-only'
import jwt from 'jsonwebtoken'
import { SignJWT, jwtVerify } from 'jose'

export function signAccessToken(payload: object) {
  return jwt.sign(payload, process.env.ACCESS_SECRET!, { expiresIn: '1h' })
}

export function signRefreshToken(payload: object) {
  return jwt.sign(payload, process.env.REFRESH_SECRET!, { expiresIn: '36d' })
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, process.env.ACCESS_SECRET!)
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, process.env.REFRESH_SECRET!)
}
