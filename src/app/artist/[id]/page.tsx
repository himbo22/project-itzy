'use client'

import NotFoundPage from '@/app/not-found'
import SectionButton from '@/components/artist/ArtistButton'
import CommunityInput from '@/components/artist/CommunityInput'
import FollowButton from '@/components/artist/FollowButton'
import MemberGrid from '@/components/artist/MemberGrid'
import Shop from '@/components/home/Shop'
import CommunityInputModal from '@/components/modal/CommunityInputModal'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import {
  ArtistDetailProps,
  ArtistDTO,
  CommunityDTO,
  MemberDTO,
} from '@/types/artist'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { use, useState } from 'react'
import { toast } from 'sonner'

async function fetchArtist(id: string): Promise<ArtistDTO> {
  const res = await fetch(`http://localhost:3000/api/artists/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export default function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [section, setSection] = useState<'shop' | 'community'>('shop')
  const [isOpenInput, setIsOpenInput] = useState(false)
  const { data, error, isLoading } = useQuery({
    queryKey: ['artist', id],
    queryFn: () => fetchArtist(id),
    enabled: !!id,
  })

  if (isLoading) {
    return <div>Standing by...</div>
  }

  if (data == null || undefined) {
    return <NotFoundPage />
  }

  const comments: CommunityDTO[] = [
    {
      id: '1',
      content: 'i like this group because i am',
      user: {
        id: '1',
        username: 'anti mage',
        avatar:
          'https://th.bing.com/th/id/R.89c86c8b4c1bdd0093738e35ea2f625f?rik=kxJ5U%2bGwHomnEg&pid=ImgRaw&r=0',
      },
      date: new Date(),
    },
    {
      id: '2',
      content: 'i had played dota 2 three months ago',
      user: {
        id: '1',
        username: 'injoker',
        avatar:
          'https://tse3.mm.bing.net/th/id/OIP.p22Nw3T-e0_Zs2QQb5ZFlQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3',
      },
      date: new Date(),
    },
  ]

  const copyPathToClipboard = async () => {
    await navigator.clipboard.writeText(window.location.href)
    toast('The share link has been copied.', {
      action: {
        label: 'Close',
        onClick: () => console.log('yes sir'),
      },
    })
  }

  return (
    <div>
      <Header />
      <div className="relative w-full flex flex-col items-center pt-17">
        {data ? (
          <>
            <div className="relative w-2/3 flex flex-col">
              <img
                src={data.image}
                alt="image"
                className="rounded-lg w-full select-none"
              />
              <div
                className="size-9 desktop:size-[56px] flex justify-center items-center rounded-full hover:bg-[rgba(0,0,0,0.2)] bg-gray-950/50 cursor-pointer absolute top-2 left-2"
                onClick={() => router.back()}
              >
                <svg
                  className="size-5 fill-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.92243 3.57742C9.24786 3.90286 9.24786 4.4305 8.92243 4.75593L4.51168 9.16668H17.4998C17.9601 9.16668 18.3332 9.53977 18.3332 10C18.3332 10.4602 17.9601 10.8333 17.4998 10.8333H4.51168L8.92243 15.2441C9.24786 15.5695 9.24786 16.0972 8.92243 16.4226C8.59699 16.748 8.06935 16.748 7.74392 16.4226L1.91058 10.5893C1.58514 10.2638 1.58514 9.73619 1.91058 9.41075L7.74392 3.57742C8.06935 3.25198 8.59699 3.25198 8.92243 3.57742Z"
                  ></path>
                </svg>
              </div>
              <div
                className="size-9 desktop:size-[56px] flex justify-center items-center rounded-full hover:bg-[rgba(0,0,0,0.2)] bg-gray-950/50 cursor-pointer absolute top-2 right-2"
                onClick={copyPathToClipboard}
              >
                <svg
                  className="size-5 fill-white"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z"></path>
                </svg>
              </div>
              <div className="mt-3 self-start flex items-center gap-5">
                <p className="self-start font-black text-5xl">{data.name}</p>
                <p className="italic font-semibold text-3xl">{data.company}</p>
              </div>

              <FollowButton isFollowed="false" />
              <MemberGrid members={data.members} />

              <div className="flex gap-3.5 mt-5">
                <SectionButton
                  text="SHOP"
                  isSelected={section === 'shop'}
                  onClick={() => setSection('shop')}
                />
                <SectionButton
                  text="COMMUNITY"
                  isSelected={section === 'community'}
                  onClick={() => setSection('community')}
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="w-2/3 flex flex-col">
              {section === 'shop' ? (
                <Shop headerText={data.name + "'s products"} attribute="mt-5" />
              ) : (
                <div className="w-2/3 mt-5">
                  <CommunityInput
                    text="Write a comment in the community"
                    onClick={() => setIsOpenInput(true)}
                  />
                  {/* comments */}
                  <div className="min-h-36 flex flex-col mt-5">
                    {comments.length > 0 ? (
                      comments.map((comment) => (
                        <div key={comment.id}>
                          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-300 max-w-4xl mb-3">
                            {/* User Info */}
                            <div className="flex items-center gap-3 mb-4">
                              <img
                                src={comment.user.avatar}
                                alt="avatar"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {comment.user.username}
                                </h3>
                                <p className="text-sm text-gray-500">
                                  12 hours ago
                                </p>
                              </div>
                            </div>

                            {/* Comment Text */}
                            <p className="text-gray-800 leading-relaxed">
                              {comment.content}
                            </p>

                            {/* Action Buttons */}
                            {/* <div className="flex items-center gap-6">
                              <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">0</span>
                              </button>

                              <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors">
                                <svg
                                  className="w-5 h-5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.126A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                                  />
                                </svg>
                                <span className="text-sm font-medium">0</span>
                              </button>
                            </div> */}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="m-auto">No comments yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <CommunityInputModal
              onClose={() => setIsOpenInput(false)}
              isOpen={isOpenInput}
              onOpenGallery={() => {
                console.log('cac')
              }}
              text="Write a comment in the community"
            />
          </>
        ) : (
          <div>standing by...</div>
        )}
      </div>
      <Footer />
    </div>
  )
}
