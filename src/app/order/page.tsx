"use client"

import React, { useState, ChangeEvent } from 'react'
import { Header } from '@/components/partials/header'
import { DeliveryAddress } from './modal/DeliveryAddress'
import { Carrier } from './modal/Carrier'
import { Payment } from './modal/Payment'
import { OrderList } from './modal/OrderList'
import type { CheckoutForm } from './types'

export default function CheckoutPage() {
  const [form, setForm] = useState<CheckoutForm>({
    addressType: 'Direct input', addressName: '', country: '', recipient: '',
    searchAddress: '', detailedAddress: '', city: '', region: '', postalCode: '',
    phoneCode: '', phoneNumber: '', requests: '', saveAddress: false,
    shippingMethod: '', paymentMethod: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-[80px] container mx-auto px-4 py-6 space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
        <div className="w-full lg:w-2/3 space-y-6">
          <OrderList />
          <DeliveryAddress
            data={form}
            onChange={handleChange}
            onApply={() => alert('Applied')}
            onCountrySelect={(name, code) => setForm(p => ({ ...p, country: name, phoneCode: code }))}
          />
          <Carrier shippingMethod={form.shippingMethod} onChange={handleChange} />
          <Payment paymentMethod={form.paymentMethod} onChange={handleChange} />
        </div>
        <aside className="w-full lg:w-1/3">
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total Product Amount</span>
              <span>$10.31</span>
            </div>
            <div className="mt-2 border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total Product Price</span>
              <span>$10.31</span>
            </div>
            <button
              disabled={!form.shippingMethod || !form.paymentMethod}
              className={`w-full mt-4 py-2 rounded-lg font-medium transition-colors ${form.shippingMethod && form.paymentMethod
                  ? 'bg-pink-500 hover:bg-pink-400 text-white cursor-pointer'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
            >
              $10.31 Proceed to Payment
            </button>
          </div>
        </aside>
      </div>
    </div>
  )
}