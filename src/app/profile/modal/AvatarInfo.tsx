'use client';

import Image from 'next/image';
import { FaPen } from 'react-icons/fa';

export default function AvatarInfo() {
    return (
        <div className="flex items-center gap-5 mb-6">
            <div className="relative w-20 h-20 group cursor-pointer transition-transform duration-300 hover:scale-105">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image src="/avatar.png" alt="Avatar" width={80} height={80} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border">
                    <FaPen className="text-gray-600 text-[11px]" />
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">vubulon111@gmail.com</p>
                <p className="text-base text-gray-500">vubulon111@gmail.com</p>
            </div>
        </div>
    );
}