import { FaBox, FaTruck } from 'react-icons/fa';

export default function OrderDeliverySection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Order/Delivery</h3>
            <ul className="space-y-3">
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaBox className="text-gray-600 text-lg" />
                        <span className="font-semibold">Order History</span>
                    </div>
                    <span className="text-xl">{'>'}</span>
                </li>
                <li className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-md">
                    <div className="flex items-center gap-4">
                        <FaTruck className="text-gray-600 text-lg" />
                        <span className="font-semibold">Manage Delivery Address</span>
                    </div>
                    <span className="text-sm text-gray-400">0 addresses</span>
                </li>
            </ul>
        </div>
    );
}