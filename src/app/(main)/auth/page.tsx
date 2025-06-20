'use client'

import AuthButton from '@/components/auth/AuthButton'
import ModalSignIn from '@/components/modal/SignInModal'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { z } from 'zod'

function AuthPage() {
  const [signInModalOpen, setSignInModalOpen] = useState<boolean>(false)

  const handleOpenCreateAccountModal = () => {
    console.log('after like')
  }

  const handleOpenSignInModal = () => {
    console.log('after like')
    setSignInModalOpen(true)
  }

  return (
    <main className="min-h-screen overflow-hidden flex flex-col md:flex-row px-6">
      {/* Left: Logo */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-40 md:w-150 aspect-[2/1] my-8">
          <Image
            src="/images/logo.png"
            alt="ITZY logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="text-center space-y-5">
          <h1 className="text-5xl md:text-8xl font-extrabold">
            All <span className="text-dalla">in</span> us!
          </h1>

          <p className="text-xl md:text-3xl font-medium">Hello, we are ITZY!</p>

          <AuthButton
            onClick={handleOpenCreateAccountModal}
            content="Create account"
          />

          <div className="space-y-2">
            <p className="text-base md:text-lg font-semibold">
              Already have an account?
            </p>
            <AuthButton onClick={handleOpenSignInModal} content="Sign in" />
          </div>

          <Link href="/home" passHref>
            <div className="text-sm md:text-base font-bold underline hover:text-dalla transition">
              Visit us
            </div>
          </Link>
        </div>
      </div>

      <ModalSignIn
        onClose={() => setSignInModalOpen(false)}
        isOpen={signInModalOpen}
      />
    </main>
  )
}

export default AuthPage
