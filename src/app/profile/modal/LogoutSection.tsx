'use client';

import Link from 'next/link';
import { FaSignOutAlt } from 'react-icons/fa';

export default function LogoutSection() {
    return (
        <ul>
            <li>
                <Link href="/logout" className="flex items-center gap-4 text-red-500 hover:bg-gray-100 p-3 rounded-md cursor-pointer transition">
                    <FaSignOutAlt className="text-lg" />
                    <span className="font-semibold">Logout</span>
                </Link>
            </li>
        </ul>
    );
}