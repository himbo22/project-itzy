"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
const ReviewProductView = () => {
  const [data, setData] = useState([
    { id: "SP001", address: "ITZY T-Shirt", customer: "$20", state: "5", status: "CT001" },
    { id: "SP002", address: "	ITZY Album", customer: "$25", state: "10", status: "CT002" },
    { id: "SP003", address: "LigthStick", customer: "$60", state: "20", status: "CT003" },
    { id: "SP004", address: "Photobooth", customer: "$30", state: "29", status: "CT004" },
    { id: "SP005", address: "Cap", customer: "$40", state: "51", status: "CT005" },
  ]);

  const handleUpdate = (id: string) => {
    alert(`Bạn vừa bấm Edit với ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    alert(`Bạn vừa bấm Delete với ID: ${id}`);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/*Create */}
      <div className="w-full max-w-6xl flex justify-between items-center p-4 border-b bg-white rounded-lg shadow-md mb-4">
        <div className="text-lg font-semibold"></div>
        <Button>+ Create</Button>
      </div>

      {/* Bảng */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">PRODUCT</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">New_price</th>
              <th className="border p-3 text-center">Quanlity</th>
              <th className="border p-3 text-center">Id_Category</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.address}</td>
                <td className="border p-3 text-center">{order.customer}</td>
                <td className="border p-3 text-center">{order.state}</td>
                <td className="border p-3 text-center">{order.status}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(order.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Activate
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Deactivate
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

export default ReviewProductView