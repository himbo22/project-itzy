'use client'

import React from 'react';

const Table = () => {
  const data = [
    {
      id: 'DH001',
      customer: 'Nguyễn Văn A',
      address: 'Hà Nội',
      date: '2025-07-08',
      status: 'Đang xử lý',
      state: 'Chờ xác nhận',
    },
    {
      id: 'DH002',
      customer: 'Trần Thị B',
      address: 'Đà Nẵng',
      date: '2025-07-07',
      status: 'Đã giao',
      state: 'Thành công',
    },
    {
      id: 'DH003',
      customer: 'Lê Văn C',
      address: 'TP.HCM',
      date: '2025-07-06',
      status: 'Đang vận chuyển',
      state: 'Đang giao',
    },
  ];
  return (

    <div className="w-full flex justify-center">
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Danh sách đơn hàng</h2>
        <table className="w-full border border-gray-300 border-collapse text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3">Mã đơn hàng</th>
              <th className="border p-3">Tên khách hàng</th>
              <th className="border p-3">Địa chỉ</th>
              <th className="border p-3">Ngày đặt</th>
              <th className="border p-3">Tình trạng đơn hàng</th>
              <th className="border p-3">Trạng thái</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
