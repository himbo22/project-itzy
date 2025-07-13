'use client'
import { MemberDTO } from '@/types/artist'
import Image from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'

interface props {
  members: MemberDTO[]
}

export default function MemberGrid({ members }: props) {
  return (
    <div className="w-full mx-auto mt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold text-gray-900">Members</h2>
      </div>

      {/* Members Container */}
      <ScrollContainer
        className="flex gap-4 overflow-x-auto cursor-grab"
        horizontal
      >
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center mr-5">
            <Image
              src={member.image}
              width={100}
              height={100}
              className="rounded-full object-cover w-[100px] h-[100px] border"
              alt="image"
            />
            <span className="mt-1 text-sm font-medium text-gray-800">
              {member.name}
            </span>
          </div>
        ))}
      </ScrollContainer>
    </div>
  )
}
