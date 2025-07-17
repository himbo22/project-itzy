'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const ShippingMethodManager = () => {
  const [shippingMethods, setShippingMethods] = useState([
    {
      id: 'SM001',
      name: 'Free Shipping',
      baseFee: 0,
      isActive: true,
    },
    {
      id: 'SM002',
      name: 'Standard Shipping',
      baseFee: 3,
      isActive: true,
    },
    {
      id: 'SM003',
      name: 'Express Shipping',
      baseFee: 5,
      isActive: true,
    },
    {
      id: 'SM004',
      name: 'Overnight Shipping',
      baseFee: 10,
      isActive: false,
    },
  ])

  const handleSuspend = (id: string) => {
    setShippingMethods((prev) =>
      prev.map((method) =>
        method.id === id ? { ...method, isActive: false } : method
      )
    )
    alert(`Suspended shipping method with ID: ${id}`)
  }

  const handleUnsuspend = (id: string) => {
    setShippingMethods((prev) =>
      prev.map((method) =>
        method.id === id ? { ...method, isActive: true } : method
      )
    )
    alert(`Unsuspended shipping method with ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header and Create Button */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Shipping Methods Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          SHIPPING METHODS
        </h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Base Fee</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shippingMethods.map((method) => (
              <tr key={method.id}>
                <td className="border p-3 text-center">{method.id}</td>
                <td className="border p-3 text-center">{method.name}</td>
                <td className="border p-3 text-center">${method.baseFee}</td>
                <td className="border p-3 text-center">
                  {method.isActive ? 'Active' : 'Suspended'}
                </td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleSuspend(method.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      disabled={!method.isActive}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleUnsuspend(method.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      disabled={method.isActive}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {shippingMethods.length === 0 && (
              <tr>
                <td colSpan={5} className="border p-3 text-center">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShippingMethodManager
