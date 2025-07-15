"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TableCategory = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/category") {
    return null;
  }

  const [data, setData] = useState([
    {
      id: "DH001",
      customer: "Nguyễn Văn A",
      state: "",
    },
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
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.customer}</td>
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

export default TableCategory;
