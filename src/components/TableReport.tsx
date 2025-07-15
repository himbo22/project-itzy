"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TableReport = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/report") {
    return null;
  }

  const [data, setData] = useState([
    { id: "RP001", customer: "Shipping Method", state: "4", date: "Nationwide", status: "	Completed" },
    { id: "RP002", customer: "Total Orders", state: "4", date: "Da Nang ", status: "Processing" },
    { id: "RP003", customer: "Product Quantity", state: "5", date: "Ha Noi", status: "Completed" },
    { id: "RP004", customer: "Shipping Cost Summary", state: "1", date: "Ho Chi Minh", status: "Pending" },
    { id: "RP004", customer: "Top Delivery Cities", state: "3", date: "Da Nang", status: "Completed" },
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
        <h2 className="text-2xl font-bold mb-6 text-center">REPORT & ANALYTIC</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">	Report Type</th>
              <th className="border p-3 text-center">	Quantity</th>
              <th className="border p-3 text-center">Address</th>
              <th className="border p-3 text-center">Status</th>
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

export default TableReport;
