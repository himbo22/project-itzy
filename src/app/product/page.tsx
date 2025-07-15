import Shop from '@/components/home/Shop'
import Footer from '@/components/partials/footer'
import { Header } from '@/components/partials/header'
import { Suspense } from 'react'

export default function ProductPage() {
  return (
    <div>
      <Header />
      <div className="mt-5">
        <Suspense>
          <Shop headerText="ITZY'S PRODUCTS" />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}
