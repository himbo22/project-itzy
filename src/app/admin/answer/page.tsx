'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const AnswerProductQuestion = () => {
  const [questions, setQuestions] = useState([
    {
      id: 'QA001',
      address: 'What is the release date of this MV?',
      date: 'The MV was released on July 8, 2025',
      customer: 'Le Hee Ri',
      status: 'SP001',
      state: '2023-07-15',
    },
    {
      id: 'QA002',
      address: 'How long is this vlog?',
      date: 'The vlog is approximately 12 minutes long',
      customer: 'Nguyen Quoc Hoang',
      status: 'SP002',
      state: '2024-08-10',
    },
    {
      id: 'QA003',
      address: 'Is this livestream available for replay?',
      date: 'Yes, it is available for replay on YouTube',
      customer: 'Brad Pitt',
      status: 'SP003',
      state: '2024-09-12',
    },
    {
      id: 'QA004',
      address: 'Which members appeared on this talkshow?',
      date: 'All ITZY members appeared on the talkshow',
      customer: 'Max Verstappen',
      status: 'SP004',
      state: '2025-05-19',
    },
    {
      id: 'QA005',
      address: 'Can I purchase photos from this album?',
      date: 'Yes, you can buy them from our website',
      customer: 'Charles Leclerc',
      status: 'SP005',
      state: '2025-07-19',
    },
  ])

  const handleUpdate = (id: string) => {
    alert(`You clicked Reply on ID: ${id}`)
  }

  const handleDelete = (id: string) => {
    alert(`You clicked Clear on ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Create */}
      <div className="w-full max-w-6xl flex justify-end items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <Button>+ Create</Button>
      </div>

      {/* Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Product Questions
        </h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Question</th>
              <th className="border p-3 text-center">Answer</th>
              <th className="border p-3 text-center">Customer</th>
              <th className="border p-3 text-center">Product ID</th>
              <th className="border p-3 text-center">Date</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((q) => (
                <tr key={q.id}>
                  <td className="border p-3 text-center">{q.id}</td>
                  <td className="border p-3 text-center">{q.address}</td>
                  <td className="border p-3 text-center">{q.date}</td>
                  <td className="border p-3 text-center">{q.customer}</td>
                  <td className="border p-3 text-center">{q.status}</td>
                  <td className="border p-3 text-center">{q.state}</td>
                  <td className="border p-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleUpdate(q.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Reply
                      </button>
                      <button
                        onClick={() => handleDelete(q.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Clear
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="border p-3 text-center text-gray-500"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AnswerProductQuestion
