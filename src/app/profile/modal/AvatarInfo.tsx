'use client';

import Image from 'next/image';
import { FaPen } from 'react-icons/fa';

interface AvatarInfoProps {
    email: string;
    avatarUrl: string;
}

export default function AvatarInfo({ email, avatarUrl }: AvatarInfoProps) {
    return (
        <div className="flex items-center gap-5 mb-6">
            <div className="relative w-20 h-20 group cursor-pointer transition-transform duration-300 hover:scale-105">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image
                        src={avatarUrl}
                        alt="Avatar"
                        width={80}
                        height={80}
                        className="object-cover"
                        unoptimized // bỏ tối ưu hóa nếu chưa cấu hình domain
                    />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border">
                    <FaPen className="text-gray-600 text-[11px]" />
                </div>
            </div>
            <div>
                <p className="font-semibold text-lg">{email}</p>
                <p className="text-base text-gray-500">{email}</p>
            </div>
        </div>
    );
}