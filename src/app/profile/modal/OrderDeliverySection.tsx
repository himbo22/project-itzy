'use client';

import Link from 'next/link';
import { FaBox, FaTruck } from 'react-icons/fa';

export default function OrderDeliverySection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Order/Delivery</h3>
            <ul className="space-y-3">
                <li>
                    <Link href="/order/history" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaBox className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Order History</span>
                        </div>
                        <span className="text-xl">{'>'}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/order/address" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaTruck className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Manage Delivery Address</span>
                        </div>
                        <span className="text-sm text-gray-400">0 addresses</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}