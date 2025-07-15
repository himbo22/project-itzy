"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TableShipping = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/shipping") {
    return null;
  }

  const [data, setData] = useState([
    { id: "SP001", address: "T-Shirt", customer: "Free Shipping", state: "3", date: "Da Nang" },
    { id: "SP002", address: "LightStick", customer: "Express Shipping", state: "5", date: "Da Nang" },
    { id: "SP003", address: "Photobooth", customer: "Express Shipping", state: "1", date: "Ha Noi" },
    { id: "SP004", address: "DVD", customer: "Free Shipping", state: "3", date: "Ho Chi Minh" },
  ]);

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
        <Button>+ Create</Button>
      </div>

      {/* Bảng */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">SHIPPING METHOD</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Item Type</th>
              <th className="border p-3 text-center">Delivery Options</th>
              <th className="border p-3 text-center">Quantity</th>
              <th className="border p-3 text-center">Address</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.address}</td>
                <td className="border p-3 text-center">{order.customer}</td>
                <td className="border p-3 text-center">{order.state}</td>
                <td className="border p-3 text-center">{order.date}</td>
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

export default TableShipping;
