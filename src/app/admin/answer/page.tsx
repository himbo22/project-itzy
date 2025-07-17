"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
const AnswerProductQuestion = () => {
  const [data, setData] = useState([
    { id: "QA001", address: "What is the release date of this MV?", date: "The MV was released on July 8, 2025", customer: "Le Hee Ri", status: "SP001", state: "2023-7-15" },
    { id: "QA002", address: "How long is this vlog?", date: "The vlog is approximately 12 minutes long", customer: "Nguyen Quoc Hoang", status: "SP002", state: "2024-8-10" },
    { id: "QA003", address: "Is this livestream available for replay?", date: "Yes, it is available for replay on YouTube", customer: "Brad Pitt", status: "SP003", state: "2024-9-12" },
    { id: "QA004", address: "	Which members appeared on this talkshow?", date: "All ITZY members appeared on the talkshow", customer: "Max Verstappen", status: "SP004", state: "2025-5-19" },
    { id: "QA005", address: "	Can I purchase photos from this album?", date: "Yes, you can buy them from our website", customer: "Charles Leclerc", status: "SP005", state: "2025-7-19" },
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

      {/* Table */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">ASKS</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Question Content</th>
              <th className="border p-3 text-center">Answer</th>
              <th className="border p-3 text-center">Customer Name</th>
              <th className="border p-3 text-center">Product ID</th>
              <th className="border p-3 text-center">Aks_Date</th>
              <th className="border p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.address}</td>
                <td className="border p-3 text-center">{order.date}</td>
                <td className="border p-3 text-center">{order.customer}</td>
                <td className="border p-3 text-center">{order.status}</td>
                <td className="border p-3 text-center">{order.state}</td>
                <td className="border p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(order.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Reply
                    </button>
                    <button
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Clear
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




export default AnswerProductQuestion