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
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden border">
              <img
                src={member.image}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
            <span className="mt-1 text-sm font-medium text-gray-800">
              {member.name}
            </span>
          </div>
        ))}
      </ScrollContainer>
    </div>
  )
}
