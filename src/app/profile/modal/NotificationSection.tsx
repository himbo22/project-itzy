'use client';

import Link from 'next/link';
import { FaBell } from 'react-icons/fa';

export default function NotificationSection() {
    return (
        <div>
            <h3 className="text-gray-400 font-medium mb-3">Notifications</h3>
            <ul className="space-y-3">
                <li>
                    <Link href="/profile/notifications" className="flex justify-between items-center hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-gray-100 rounded-md">
                                <FaBell className="text-gray-700 text-lg" />
                            </div>
                            <span className="font-semibold">Notification Settings</span>
                        </div>
                        <span className="text-xl">{'>'}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}