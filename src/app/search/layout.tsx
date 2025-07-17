'use client'
import Footer from '@/components/partials/footer'
import { Suspense } from 'react'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <Suspense>{children}</Suspense>
      <Footer />
    </div>
  )
}
