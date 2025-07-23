import { Redis } from '@upstash/redis'
import { NextRequest } from 'next/server'

const redis = Redis.fromEnv()

export async function POST(request: NextRequest) {}
