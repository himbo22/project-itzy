'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const ArtistManager = () => {
  const [artists, setArtists] = useState([
    {
      id: 'ART001',
      name: 'Kim Chaewon',
      image: '',
      role: 'Leader, Vocalist',
      company: 'Source Music',
    },
    {
      id: 'ART002',
      name: 'Hanni',
      image: '',
      role: 'Vocalist, Rapper',
      company: 'ADOR',
    },
    {
      id: 'ART003',
      name: 'Sullyoon',
      image: '',
      role: 'Main Vocalist',
      company: 'JYP Entertainment',
    },
    {
      id: 'ART004',
      name: 'Lee Chaeryeong',
      image: '',
      role: 'Main Dancer',
      company: 'JYP Entertainment',
    },
    {
      id: 'ART005',
      name: 'Jung Ahyeon',
      image: '',
      role: 'Vocalist',
      company: 'YG Entertainment',
    },
  ])

  const handleEdit = (id: string) => {
    alert(`Editing artist with ID: ${id}`)
  }

  const handleDelete = (id: string) => {
    alert(`Deleting artist with ID: ${id}`)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header and Create Button */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Artists Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ARTISTS</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Role</th>
              <th className="border p-3 text-center">Company</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist) => (
              <tr key={artist.id}>
                <td className="border p-3 text-center">{artist.id}</td>
                <td className="border p-3 text-center">{artist.name}</td>
                <td className="border p-3 text-center">{artist.role}</td>
                <td className="border p-3 text-center">{artist.company}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(artist.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(artist.id)}
                      className="bg-red-400 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ArtistManager
