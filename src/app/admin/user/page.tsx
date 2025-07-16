"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
const UserManagement = () => {
  const [data, setData] = useState([
    { id: "US001", customer: "Tran Xuan Dinh", state: "Lia@gmail.com", date: "Admin", status: "	2025-01-01", address: "Online" },
    { id: "US002", customer: "Nguyen Quoc Hoang", state: "yeji22@gmail.com", date: "Admin ", status: "2025-04-10", address: "Online" },
    { id: "US003", customer: "Ngo Binh Phuong Nguyen", state: "chae@gmail.com", date: "User", status: "2025-07-10", address: " Temporarily Disabled" },
    { id: "US004", customer: "Do Quoc Huy", state: "ryujin@gmail.com", date: "User", status: "2025-07-11", address: "Offline" },
    { id: "US005", customer: "Phan Gia Dat", state: "yuna@gmail.com", date: "User", status: "2025-07-10", address: "Online" },
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
        <h2 className="text-2xl font-bold mb-6 text-center">USER MANAGEMENT</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">	Name</th>
              <th className="border p-3 text-center">	Email</th>
              <th className="border p-3 text-center">Role</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">Date Joined</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.customer}</td>
                <td className="border p-3 text-center">{order.state}</td>
                <td className="border p-3 text-center">{order.date}</td>
                <td className="border p-3 text-center">{order.address}</td>
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
            {data.length === 0 && (
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
  );
};

export default UserManagement