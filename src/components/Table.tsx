'use client'

import React from "react";
import { Button } from "@/components/ui/button";

const Table = () => {
  const data = [
    {
      id: "DH001",
      customer: "Nguyen Huy Hoang",
      address: "Ha Noi",
      date: "2025-07-08",
      status: "Processing",
      state: "Pending confirmation",
    },
    {
      id: "DH002",
      customer: "Le Duc Tho",
      address: "Da Nang",
      date: "2025-07-07",
      status: "Delivered",
      state: "Completed",
    },
    {
      id: "DH003",
      customer: "Lee Min Ho",
      address: "Seoul",
      date: "2025-07-06",
      status: "In transit",
      state: "Out for delivery",
    },
  ];

  const handleCreate = () => {
    alert("Bạn vừa bấm Create");
  };

  const handleUpdate = (id: string) => {
    alert(`Bạn vừa bấm Edit với ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    alert(`Bạn vừa bấm Delete với ID: ${id}`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Create */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button onClick={handleCreate}>+ Create</Button>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">LIST OF ORDERS</h2>
          <table className="w-full border border-gray-300 border-collapse text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3">ID</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">Address</th>
                <th className="border p-3">Order date</th>
                <th className="border p-3">Order status</th>
                <th className="border p-3">Status</th>
                <th className="border p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={order.id}>
                  <td className="border p-3 text-center">{order.id}</td>
                  <td className="border p-3 text-center">{order.customer}</td>
                  <td className="border p-3 text-center">{order.address}</td>
                  <td className="border p-3 text-center">{order.date}</td>
                  <td className="border p-3 text-center">{order.status}</td>
                  <td className="border p-3 text-center">{order.state}</td>
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
    </div>
  );
};

export default Table;
