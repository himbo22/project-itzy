'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const ProductManager = () => {
  const [products, setProducts] = useState([
    {
      id: 'SP001',
      name: 'ITZY T-Shirt',
      price: '$20',
      discount: '5%',
      quantity: 10,
      category: 'CT001',
    },
    {
      id: 'SP002',
      name: 'ITZY Album',
      price: '$25',
      discount: '10%',
      quantity: 15,
      category: 'CT002',
    },
    {
      id: 'SP003',
      name: 'LightStick',
      price: '$60',
      discount: '20%',
      quantity: 20,
      category: 'CT003',
    },
    {
      id: 'SP004',
      name: 'Photobook',
      price: '$30',
      discount: '0%',
      quantity: 29,
      category: 'CT004',
    },
    {
      id: 'SP005',
      name: 'Cap',
      price: '$40',
      discount: '15%',
      quantity: 51,
    },
  ])

  const handleActivate = (id: string) => {
    alert(`Activating product with ID: ${id}`)
  }

  const handleDeactivate = (id: string) => {
    alert(`Deactivating product with ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header and Create Button */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Products Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">PRODUCTS</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Price</th>
              <th className="border p-3 text-center">Discount</th>
              <th className="border p-3 text-center">Quantity</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border p-3 text-center">{product.id}</td>
                <td className="border p-3 text-center">{product.name}</td>
                <td className="border p-3 text-center">{product.price}</td>
                <td className="border p-3 text-center">{product.discount}</td>
                <td className="border p-3 text-center">{product.quantity}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleActivate(product.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Activate
                    </button>
                    <button
                      onClick={() => handleDeactivate(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Deactivate
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={7} className="border p-3 text-center">
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

export default ProductManager
