'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const SalesReportsAnalytics = () => {
  const [revenueReports] = useState([
    { month: 'Jan', revenue: 5000000 },
    { month: 'Feb', revenue: 7500000 },
    { month: 'Mar', revenue: 6400000 },
    { month: 'Apr', revenue: 8200000 },
    { month: 'May', revenue: 9200000 },
  ])

  const [productReports] = useState([
    { name: 'ITZY T-Shirt', quantity: 150 },
    { name: 'ITZY Album', quantity: 120 },
    { name: 'LightStick', quantity: 80 },
    { name: 'Photobook', quantity: 60 },
    { name: 'Cap', quantity: 90 },
  ])

  return (
    <div className="w-full flex flex-col items-center">
      {/* Chart 1: Revenue Report */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          📈 Revenue Report (VND)
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `${v / 1_000_000}M`} />
            <Tooltip
              formatter={(value: number) => `${value.toLocaleString()}₫`}
            />
            <Bar dataKey="revenue" fill="#4f46e5" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Top Selling Products */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          🏆 Top Selling Products
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productReports}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#16a34a" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesReportsAnalytics
