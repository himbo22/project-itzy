'use client';

import { useState } from 'react';
import Link from 'next/link';

const Search = () => {
    const [query, setQuery] = useState('');
    const [showAllEvents, setShowAllEvents] = useState(false);

    const [products] = useState([
        {
            id: 1,
            title: 'aespa Single [Dirty Work] (Dirty Crew Ring Ver.)',
            price: 137.55,
            discount: 20,
            status: 'Pre-order',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/L700001529_%EC%8B%A0%EB%B3%B4%EC%95%88%EB%82%B4%EC%84%9C_aespa_%EC%8B%B1%EA%B8%80_Dirty_Work_Dirty_Crew_Ring_Ver.%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%95%A8%EB%B2%94_%EC%9E%90%EC%BC%93%EC%9D%B4%EB%AF%B8%EC%A7%80.jpg_2025-06-20_113600395775_thumb.jpeg'
        },
        {
            id: 2,
            title: 'aespa Single [Dirty Work] (Dirty Code Ver.)',
            price: 11.87,
            discount: 20,
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/L700001527_%EC%8B%A0%EB%B3%B4%EC%95%88%EB%82%B4%EC%84%9C_aespa_%EC%8B%B1%EA%B8%80_Dirty_Work_Dirty_Code_Ver._%EC%9E%90%EC%BC%93%EC%9D%B4%EB%AF%B8%EC%A7%80_1.jpg_2025-06-13_141625006122_thumb.jpeg'
        },
        {
            id: 3,
            title: 'aespa Single [Dirty Work] (Dirty Worker Ver.)',
            price: 16.25,
            discount: 20,
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/L700001526_aespa_%EC%8B%B1%EA%B8%80_%EC%8D%B8%EB%84%A4%EC%9D%BC_Dirty_Worker_Ver._1.jpg_2025-06-13_143508068794_thumb.jpeg'
        },
        {
            id: 4,
            title: 'aespa Single [Dirty Work] (Dirty Case Ver.)',
            price: 24.98,
            discount: 20,
            status: 'Sold Out',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/L700001525_%EC%8B%A0%EB%B3%B4%EC%95%88%EB%82%B4%EC%84%9C_aespa_%EC%8B%B1%EA%B8%80_Dirty_Work_Dirty_Case_Ver._%EC%9E%90%EC%BC%93%EC%9D%B4%EB%AF%B8%EC%A7%80_1.jpg_2025-06-13_143242239469_thumb.jpeg'
        },
        {
            id: 5,
            title: 'aespa_Photo Collect book_Whiplash',
            price: 15.82,
            discount: 20,
            status: 'Sold Out',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/%ED%8F%AC%ED%86%A0%EC%BD%9C%EB%A0%89%ED%8A%B8%EB%B6%81_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg_2025-02-28_153431036724_thumb.jpeg'
        },
        {
            id: 6,
            title: 'aespa_Buds Pouch Keyring_Whiplash',
            price: 17.4,
            discount: 20,
            status: 'Sold Out',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/%EB%B2%84%EC%A6%88-%ED%8C%8C%EC%9A%B0%EC%B9%98-%ED%82%A4%EB%A7%81_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg_2025-02-28_153340451285_thumb.jpeg'
        },
        {
            id: 7,
            title: 'aespa_AirPods Pouch Keyring_Whiplash',
            price: 17.4,
            discount: 20,
            status: 'Sold Out',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/%EC%97%90%EC%96%B4%ED%8C%9F-%ED%8C%8C%EC%9A%B0%EC%B9%98-%ED%82%A4%EB%A7%81_%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg_2025-02-28_153241619903_thumb.jpeg'
        },
        {
            id: 8,
            title: 'aespa [Whiplash_EZL Holographic Mobility Card]',
            price: 6.19,
            discount: 20,
            status: 'Sold Out',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/aespa_%EC%8D%B8%EB%84%A4%EC%9D%BC_2669_X_2669.jpg_2025-01-21_112350937285_thumb.jpeg'
        }
    ]);

    const [events] = useState([
        {
            id: 1,
            title: "aespa Single 'Dirty Work' LUCKY DRAW EVENT",
            date: '2025.05.27 ~ 07.03 KST',
            type: 'LUCKYDRAW',
            status: 'Closed',
            color: 'bg-green-400',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/P_9259_AESPA_16_Banner_Sub.jpg_2025-06-25_164423413372_thumb.jpeg'
        },
        {
            id: 2,
            title: "aespa Single 'Dirty Work' SPECIAL GIVEAWAY EVENT",
            date: '2025.06.05 ~ 06.26 KST',
            type: 'PHOTOCARD',
            status: 'Closed',
            color: 'bg-orange-500',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/AESPA_14_Banner_Sub.jpg_2025-06-05_094524852701_thumb.jpeg'
        },
        {
            id: 3,
            title: "aespa Single 'Dirty Work' FAN SIGNING EVENT",
            date: '2025.06.23 ~ 06.25 KST',
            type: 'FANSIGN',
            status: 'Closed',
            color: 'bg-purple-400',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/P_9259_AESPA_12_Banner_Sub.jpg_2025-06-23_155649006884_thumb.jpeg'
        },
        {
            id: 4,
            title: 'aespa 5th Mini Album [Whiplash] LUCKY DRAW EVENT',
            date: '2024.10.21 ~ 10.27 KST',
            type: 'LUCKYDRAW',
            status: 'Closed',
            color: 'bg-green-400',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/aespa_The_5th_Mini_Album_Whiplash_LUCKY_DRAW_EVENT__2024-12-12_073920.jpeg'
        },
        {
            id: 5,
            title: 'aespa Behind Story Sharing Event',
            date: '2024.09.01 ~ 09.10 KST',
            type: 'STORY',
            status: 'Closed',
            color: 'bg-blue-400',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/aespa_The_5th_Mini_Album_Whiplash_SPECIAL_GIVEAWAY_EVENT__2024-12-12_070230.jpeg'
        },
        {
            id: 6,
            title: 'aespa Lucky Winner Photo Event',
            date: '2025.01.15 ~ 01.20 KST',
            type: 'PHOTO',
            status: 'Closed',
            color: 'bg-yellow-400',
            image: 'https://mystarroom-public-cdn.makestar.com/public/image/product/aespa_%EB%AF%B8%EB%8B%88_5%EC%A7%91_Whiplash_FAN_SIGNING_EVENT__2024-12-12_072458.jpeg'
        }
    ]);

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );

    const visibleEvents = showAllEvents ? events : events.slice(0, 4);

    return (
        <div className="bg-white min-h-screen">
            <div className="flex items-center justify-between px-4 py-4">
                <div className="text-xl font-bold text-black">itzy</div>
                <div className="flex-1 mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            className="w-full rounded-full bg-gray-100 px-4 py-2 pl-10 text-sm text-gray-700 focus:outline-none"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                    </div>
                </div>
                <button className="text-sm text-gray-600 hover:underline">Cancel</button>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-6">
                <h1 className="text-2xl font-semibold text-gray-500 mb-4">
                    Search results<span className="text-black">·{query || 'aespa'}</span>
                </h1>

                <div className="mb-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                        Artist <span className="text-pink-600">1</span>
                    </h2>
                    <Link href="#" className="inline-block transform transition-transform duration-300 hover:scale-105">
                        <div className="aspect-square w-24 overflow-hidden rounded-full">
                            <img
                                src="https://mystarroom-public-cdn.makestar.com/public/image/profile/-q-7h3sC_400x400.jpg_2025-06-23_105544741387_thumbcrop.jpeg"
                                alt="aespa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-sm text-gray-700 mt-1">aespa</div>
                    </Link>
                </div>

                <div className="mb-8">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        Event <span className="text-pink-600">{events.length}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {visibleEvents.map((event) => (
                            <Link
                                href="#"
                                key={event.id}
                                className="border rounded overflow-hidden transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-xs text-pink-600 font-semibold mb-1">Limited time</div>
                                    <div className="text-sm font-semibold text-gray-800 leading-tight mb-1">{event.title}</div>
                                    <div className="text-xs text-gray-500 mb-2">aespa</div>
                                    <div className={`${event.color} text-white text-xs font-medium px-2 py-1 inline-block rounded-sm mb-2`}>
                                        {event.type} <span className="ml-1">{event.date}</span>
                                    </div>
                                    <div className="bg-black text-white text-xs px-2 py-0.5 inline-block rounded">{event.status}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {!showAllEvents && events.length > 4 && (
                        <div className="text-center mt-6">
                            <button
                                className="px-4 py-2 text-sm text-gray-700 border rounded-full hover:bg-gray-100"
                                onClick={() => setShowAllEvents(true)}
                            >
                                More Events
                            </button>
                        </div>
                    )}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-4">
                        Product <span className="text-pink-600">{filteredProducts.length}</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href="#"
                                className="border border-gray-200 rounded-md p-4 relative transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="aspect-square overflow-hidden mb-2">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {product.status === 'Sold Out' && (
                                    <span className="absolute top-1 left-1 bg-black text-white text-xs px-2 py-1 rounded">Sold Out</span>
                                )}
                                {product.status === 'Pre-order' && (
                                    <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-2 py-1 rounded">PRE-ORDER</span>
                                )}
                                <div className="text-sm font-medium text-gray-800 leading-tight">{product.title}</div>
                                <div className="text-sm text-red-600 font-semibold">
                                    {product.discount}% ${product.price.toFixed(2)}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
