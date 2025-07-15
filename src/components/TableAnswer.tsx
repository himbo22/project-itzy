"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TableAnswer = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/answer") {
    return null;
  }

  const [data, setData] = useState([
    { id: "QA001", address: "What is the release date of this MV?", customer: "Le Hee Ri", status: "SP001", state: "Answered" },
    { id: "QA002", address: "How long is this vlog?", customer: "Nguyen Quoc Hoang", status: "SP002", state: "Pending" },
    { id: "QA003", address: "Is this livestream available for replay?", customer: "Brad Pitt", status: "SP003", state: "Answered" },
    { id: "QA004", address: "	Which members appeared on this talkshow?", customer: "Max Verstappen", status: "SP004", state: "Pending" },
    { id: "QA005", address: "	Can I purchase photos from this album?", customer: "Charles Leclerc", status: "SP005", state: "Answered" },
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
        <h2 className="text-2xl font-bold mb-6 text-center">ANSWER PRODUCT QUESTION</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Question Content</th>
              <th className="border p-3 text-center">	Customer Name</th>
              <th className="border p-3 text-center">Product ID</th>
              <th className="border p-3 text-center">Answer Status</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => (
              <tr key={order.id}>
                <td className="border p-3 text-center">{order.id}</td>
                <td className="border p-3 text-center">{order.address}</td>
                <td className="border p-3 text-center">{order.customer}</td>
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

export default TableAnswer;
