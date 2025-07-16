'use client'
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
const category = () => {
  const [data, setData] = useState([


    { id: "CT001", category: "Stage Outfits", date: "2025-07-16", status: "Active", address: "Seoul, Korea" },
    { id: "CT002", category: "Airport Fashion", date: "2025-07-16", status: "Active", address: "Incheon Airport, Korea" },
    { id: "CT003", category: "MV Costumes", date: "2025-07-16", status: "Active", address: "JYP Entertainment, Seoul" },
    { id: "CT004", category: "Photoshoot Outfits", date: "2025-07-16", status: "Active", address: "Studio ITZY, Korea" },
    { id: "CT005", category: "Fanmeeting Fashion", date: "2025-07-16", status: "Active", address: "Olympic Hall, Seoul" },
  ]);
  const handleUpdate = (id: string) => {
    alert(`Bạn đang sửa: ${id}`);
    const newName = prompt("Nhập tên mới:");
    if (newName) {
      setData((prev) =>
        prev.map((item) => (item.id === id ? { ...item, customer: newName } : item))
      );
    }
  };

  const handleDelete = (id: string) => {
    if (confirm(`Xác nhận xoá ${id}?`)) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Thanh tiêu đề và nút Create */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Bảng dữ liệu */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <div className="text-2xl font-bold mb-6 text-center">CATEGORY</div>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Category</th>
              <th className="border p-3 text-center">Date</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">Address</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.category}</td>
                <td className="border p-3 text-center">{order.date}</td>
                <td className="border p-3 text-center">{order.status}</td>
                <td className="border p-3 text-center">{order.address}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(order.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={3} className="border p-3 text-center">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default category