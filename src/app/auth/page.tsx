'use client'

import AuthButton from '@/components/auth/AuthButton'
import ModalSignIn from '@/components/modal/LoginModal'
import ModalRegister from '@/components/modal/RegisterModal'
import Image from 'next/image'
import { useState } from 'react'

function AuthPage() {
  const [openSignIn, setOpenSignIn] = useState<boolean>(false)
  const [openRegister, setOpenRegister] = useState<boolean>(false)

  return (
    <main className="min-h-screen overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-40 md:w-120 aspect-[2/1] my-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill={true}
            className="m-auto"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-8xl font-bold">All in us!</h1>
          <h1 className="text-3xl mt-5">Hello, we are ITZY!</h1>
          <AuthButton
            onClick={() => setOpenRegister(true)}
            content="Create account"
          ></AuthButton>
          <h1 className="text-1xl font-bold mt-5">Already have an account?</h1>
          <AuthButton
            onClick={() => setOpenSignIn(true)}
            content="Sign in"
          ></AuthButton>
          <ModalSignIn
            onClose={() => {
              setOpenSignIn(false)
            }}
            isOpen={openSignIn}
          />
          <ModalRegister
            onClose={() => {
              setOpenRegister(false)
            }}
            isOpen={openRegister}
          />
        </div>
      </div>
    </main>
  )
}

export default AuthPage
