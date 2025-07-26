'use client';

import Link from 'next/link';
import { FaLock, FaStar, FaHeart } from 'react-icons/fa';

export default function AccountSection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Account</h3>
            <ul className="space-y-3">
                <li>
                    <Link href="/profile/change-password" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaLock className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Change Password</span>
                        </div>
                        <span className="text-xl">{'>'}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/profile/manage-events" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaStar className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Manage Event Submissions</span>
                        </div>
                        <span className="text-xl">{'>'}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/profile/follows" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaHeart className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Manage Follows</span>
                        </div>
                        <span className="text-xl">{'>'}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}