'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const UserManager = () => {
  const [users, setUsers] = useState([
    {
      id: 'US001',
      name: 'Tran Xuan Dinh',
      email: 'lia@gmail.com',
      isActive: true,
    },
    {
      id: 'US002',
      name: 'Nguyen Quoc Hoang',
      email: 'yeji22@gmail.com',
      isActive: true,
    },
    {
      id: 'US003',
      name: 'Ngo Binh Phuong Nguyen',
      email: 'chae@gmail.com',
      isActive: false,
    },
    {
      id: 'US004',
      name: 'Do Quoc Huy',
      email: 'ryujin@gmail.com',
      isActive: false,
    },
    {
      id: 'US005',
      name: 'Phan Gia Dat',
      email: 'yuna@gmail.com',
      isActive: true,
    },
  ])

  const handleSuspend = (id: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, isActive: false } : user))
    )
    alert(`Suspended user with ID: ${id}`)
  }

  const handleUnsuspend = (id: string) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === id ? { ...user, isActive: true } : user))
    )
    alert(`Unsuspended user with ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header and Create Button */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Users Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">USER MANAGEMENT</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Email</th>
              <th className="border p-3 text-center">Is Active</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border p-3 text-center">{user.id}</td>
                <td className="border p-3 text-center">{user.name}</td>
                <td className="border p-3 text-center">{user.email}</td>
                <td className="border p-3 text-center">
                  {user.isActive ? 'Active' : 'Suspended'}
                </td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleSuspend(user.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      disabled={!user.isActive}
                    >
                      Suspend
                    </button>
                    <button
                      onClick={() => handleUnsuspend(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      disabled={user.isActive}
                    >
                      Unsuspend
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
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

export default UserManager
