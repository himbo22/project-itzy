import React from 'react'

export function OrderList() {
    const [open, setOpen] = React.useState(true)

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setOpen(o => !o)}
                className="flex items-center justify-between w-full p-4"
            >
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center">🛒</span>
                    <h2 className="text-lg font-semibold">Order List</h2>
                </div>
                <span className="text-2xl">{open ? '▾' : '▸'}</span>
            </button>

            {open && (
                <div className="p-4 space-y-3">
                    <p className="text-sm text-gray-600">
                        <i className="fas fa-info-circle" /> Depending on the product release schedule, shipping may occur separately.
                    </p>
                    <div className="bg-gray-100 rounded px-3 py-1 inline-block text-sm font-semibold">
                        Delivery1
                    </div>
                    <div className="flex items-start gap-4 mt-2">
                        <img
                            src="/girls_will_be_girls.jpg"
                            alt="ITZY Album"
                            className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="text-sm">
                            <div className="text-xs text-gray-500">ITZY</div>
                            <div className="font-semibold text-gray-800">
                                ITZY [Girls Will Be Girls] (SPECIAL EDITION)
                            </div>
                            <div className="text-gray-600 mt-1">
                                Option : 2 versions (Random)<br />
                                2 versions (Random)<br />
                                Quantity : 1
                            </div>
                            <div className="mt-2 font-semibold">$10.40</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}