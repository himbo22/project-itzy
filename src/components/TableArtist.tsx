"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TableArtist = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/artist") {
    return null;
  }

  const [data, setData] = useState([
    { id: "ITZY 001", customer: "Yeji", state: "", date: "Rapper", status: "JYP Entertainment" },
    { id: "ITZY 002", customer: "Lia", state: "", date: "Main Vocalist", status: "JYP Entertainment" },
    { id: "ITZY 003", customer: "Ryujin", state: "", date: "Lead Dancer", status: "JYP Entertainment" },
    { id: "ITZY 004", customer: "Yuna", state: "", date: "Lead Dancer", status: "JYP Entertainment" },
    { id: "ITZY 005", customer: "Chae-ryeong", state: "", date: "Main Dancer", status: "JYP Entertainment" },
  ]);

  const handleUpdate = (id: string) => {
    alert(`Bạn vừa bấm Edit với ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    alert(`Bạn vừa bấm Delete với ID: ${id}`);
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
        <h2 className="text-2xl font-bold mb-6 text-center">ARTISTS</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Image</th>
              <th className="border p-3 text-center">Member</th>
              <th className="border p-3 text-center">Company</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.customer}</td>
                <td className="border p-3 text-center">{order.state}</td>
                <td className="border p-3 text-center">{order.date}</td>
                <td className="border p-3 text-center">{order.status}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableArtist;
