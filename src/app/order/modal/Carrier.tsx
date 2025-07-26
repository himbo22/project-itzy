import React from 'react'
import { CarrierProps } from '@/app/order/types'

export function Carrier({ shippingMethod, onChange }: CarrierProps) {
    const [open, setOpen] = React.useState(true)

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button className="flex items-center justify-between w-full p-4" onClick={() => setOpen(o => !o)}>
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">🚚</span>
                    <h2 className="text-lg font-semibold">Select Carrier</h2>
                </div>
                <span className="text-2xl">{open ? '▾' : '▸'}</span>
            </button>
            {open && (
                <div className="p-4">
                    <label className="block text-sm font-medium mb-1">Shipping Method *</label>
                    <select name="shippingMethod" value={shippingMethod} onChange={onChange} className="w-full border rounded px-3 py-2">
                        <option value="">Select option</option>
                        <option value="standard">Standard</option>
                        <option value="express">Express</option>
                        <option value="pickup">Pickup</option>
                    </select>
                </div>
            )}
        </div>
    )
}   