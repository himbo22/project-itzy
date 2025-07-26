'use client'

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Header } from '@/components/partials/header';

interface NoticeItem {
    id: number;
    title: string;
    date: string;
    type: 'notice' | 'notification';
    important?: boolean;
}

const dummyData: NoticeItem[] = [
    { id: 122850, title: "[Event] 1% instant discount for Bank Transfer Payments", date: '30/04/2025', type: 'notice', important: true },
    { id: 186515, title: '[July 2025] Credit Card (South Korea) Interest Free Installment Offers', date: '30/06/2025', type: 'notice' },
    { id: 108461, title: 'Improving the ability to enter a shipping address and guiding requests to re-register an...', date: '23/04/2025', type: 'notice' },
    { id: 103844, title: '[BILLBOARD ARTIST: PLAVE EDITION] Sales Schedule Change Notice', date: '22/04/2025', type: 'notice' },
    { id: 777001, title: 'Winners of (G)I-DLE 7th Mini Album [I SWAY] VIDEO CALL EVENT are being announced.', date: '13/01/2025', type: 'notification' },
    { id: 777002, title: 'Winners of Billlie the fifth mini album MEET&CALL EVENT PART.4 are being announced.', date: '10/01/2025', type: 'notification' },
    { id: 777003, title: "Winners of A.C.E 2025 SEASON'S GREETINGS PRE-ORDER SPECIAL MEET&CALL EVENT are being announced.", date: '10/01/2025', type: 'notification' },
    { id: 777004, title: 'Winners of ONEW 4TH EP [CONNECTION] PRE-ORDER MEET&CALL EVENT are being announced.', date: '10/01/2025', type: 'notification' },
];

const NotificationPage: React.FC = () => {
    const [tab, setTab] = useState<'notice' | 'notification'>('notice');
    const [search, setSearch] = useState('');
    const [items, setItems] = useState<NoticeItem[]>([]);

    useEffect(() => {
        setItems(dummyData);
    }, []);

    const filtered = items.filter(item => {
        const matchesTab = item.type === tab;
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-4xl mx-auto px-6 pt-32">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-6">
                        <button
                            className={`font-semibold text-lg ${tab === 'notice' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
                            onClick={() => setTab('notice')}
                        >
                            Notice
                        </button>
                        <button
                            className={`font-semibold text-lg ${tab === 'notification' ? 'text-black border-b-2 border-black' : 'text-gray-400'}`}
                            onClick={() => setTab('notification')}
                        >
                            Notification
                        </button>
                    </div>
                    <div className="relative w-64">
                        <input
                            type="text"
                            placeholder="search"
                            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none"
                            value={search}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
                    </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 w-24">No</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3 w-40">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item, index) => (
                                <tr key={item.id} className={`${index % 2 === 1 ? 'bg-gray-100' : 'bg-white'} border-t`}>
                                    <td className="px-4 py-3">{item.id}</td>
                                    <td className="px-4 py-3">
                                        {item.important && <span className="text-white bg-pink-500 text-xs px-2 py-1 rounded mr-2">Important</span>}
                                        {item.title}
                                    </td>
                                    <td className="px-4 py-3">{item.date}</td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={3} className="text-center py-6 text-gray-500">No results found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default NotificationPage;
