import prisma from "@/libs/prisma";
import { ApiResponse } from "@/types";
import { ArtistDTO } from "@/types/artist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const artists = await prisma.artist.findMany()

  return NextResponse.json(artists, {status: 200})
}