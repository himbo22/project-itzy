'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const ReviewManager = () => {
  const [reviews, setReviews] = useState([
    {
      id: 'RV001',
      productName: 'ITZY T-Shirt',
      rating: 4.5,
      comment: 'Great quality and vibrant colors!',
      customer: 'Nguyen Thi An',
      status: 'Pending',
    },
    {
      id: 'RV002',
      productName: 'ITZY Album',
      rating: 5.0,
      comment: 'Love the songs and packaging!',
      customer: 'Tran Van Bao',
      status: 'Pending',
    },
    {
      id: 'RV003',
      productName: 'LightStick',
      rating: 3.5,
      comment: 'Nice design but battery life could be better.',
      customer: 'Le Minh Chau',
      status: 'Pending',
    },
    {
      id: 'RV004',
      productName: 'Photobook',
      rating: 4.0,
      comment: 'Beautiful photos, but some pages were misprinted.',
      customer: 'Pham Hoang Duc',
      status: 'Pending',
    },
    {
      id: 'RV005',
      productName: 'Cap',
      rating: 4.8,
      comment: 'Stylish and comfortable, perfect fit!',
      customer: 'Vo Thi Em',
      status: 'Pending',
    },
  ])

  const handleAccept = (id: string) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, status: 'Approved' } : review
      )
    )
    alert(`Approved review with ID: ${id}`)
  }

  const handleReject = (id: string) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, status: 'Rejected' } : review
      )
    )
    alert(`Rejected review with ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header and Create Button */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Reviews Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          REVIEW MANAGEMENT
        </h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Product Name</th>
              <th className="border p-3 text-center">Review</th>
              <th className="border p-3 text-center">Customer</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td className="border p-3 text-center">{review.id}</td>
                <td className="border p-3 text-center">{review.productName}</td>
                <td className="border p-3 text-center">{review.comment}</td>
                <td className="border p-3 text-center">{review.customer}</td>
                <td className="border p-3 text-center">{review.status}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleAccept(review.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      disabled={review.status === 'Approved'}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleReject(review.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      disabled={review.status === 'Rejected'}
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {reviews.length === 0 && (
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

export default ReviewManager
