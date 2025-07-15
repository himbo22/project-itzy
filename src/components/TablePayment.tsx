"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const TablePayment = () => {
  const pathname = usePathname();

  if (pathname !== "/admin/payment") {
    return null;
  }

  const [data, setData] = useState([
    { id: "PM001", customer: "Credit", state: "Tran Xuan Dinh", date: "2025-07-08", status: "Paid", address: "Đã thanh toán" },
    { id: "PM002", customer: "Bank Transfer", state: "Nguyen Quoc Hoang", date: "2025-07-08", status: "Pending", address: "Chờ xác nhận" },
    { id: "PM003", customer: "Cash on Delivery (COD)", state: "Ngo Binh Phuong Nguyen", date: "2025-07-07", status: "Unpaid", address: "Thanh toán khi nhận" },
    { id: "PM004", customer: "E-Wallet (Momo, PayPal)", state: "Do Quoc Huy", date: "2025-06-08", status: "Paid", address: "Ví điện tử" },
    { id: "PM004", customer: "Cash on Delivery (COD)", state: "Phan Gia Dat", date: "2025-07-16", status: "Unpaid", address: "Thanh toán khi nhận" },
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
        <h2 className="text-2xl font-bold mb-6 text-center">PAYMENT METHOD</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-center">ID</th>
              <th className="border p-3 text-center">Payment Method</th>
              <th className="border p-3 text-center">Name</th>
              <th className="border p-3 text-center">Payment Date</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">Notes</th>
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

export default TablePayment;
