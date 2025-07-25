import React from 'react'
import { DeliveryAddressProps } from '../types'
import { CountryModal } from './Country'

export function DeliveryAddress({ data, onChange, onApply, onCountrySelect }: DeliveryAddressProps) {
    const [open, setOpen] = React.useState(true)
    const [countryModal, setCountryModal] = React.useState(false)

    const isAddressValid = Boolean(
        data.addressName &&
        data.country &&
        data.recipient &&
        data.searchAddress &&
        data.city &&
        data.region &&
        data.postalCode &&
        data.phoneCode &&
        data.phoneNumber
    )

    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
                className="flex items-center justify-between w-full p-4"
                onClick={() => setOpen(o => !o)}
            >
                <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">📍</span>
                    <h2 className="text-lg font-semibold">Delivery Address</h2>
                </div>
                <span className="text-2xl">{open ? '▾' : '▸'}</span>
            </button>

            {open && (
                <div className="p-4 space-y-4">
                    <select
                        name="addressType"
                        value={data.addressType}
                        onChange={onChange}
                        className="w-full bg-gray-100 border rounded px-3 py-2"
                    >
                        <option value="Direct input">Direct input</option>
                    </select>

                    <div>
                        <label className="block text-sm font-medium">Address Name *</label>
                        <input
                            type="text"
                            name="addressName"
                            value={data.addressName}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Shipping Country/Region *</label>
                        <div
                            onClick={() => setCountryModal(true)}
                            className="mt-1 w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-pointer"
                        >
                            {data.country || 'Select Shipping Country/Region'}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Recipient *</label>
                        <input
                            type="text"
                            name="recipient"
                            value={data.recipient}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Search Address *</label>
                        <input
                            type="text"
                            name="searchAddress"
                            value={data.searchAddress}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">City *</label>
                        <input
                            type="text"
                            name="city"
                            value={data.city}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Region/State *</label>
                        <input
                            type="text"
                            name="region"
                            value={data.region}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Postal Code *</label>
                        <input
                            type="text"
                            name="postalCode"
                            value={data.postalCode}
                            onChange={onChange}
                            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Contact Number *</label>
                        <div className="flex gap-2 mt-1">
                            <input
                                type="text"
                                name="phoneCode"
                                value={data.phoneCode}
                                onChange={onChange}
                                placeholder="Country Code"
                                className="w-1/3 border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={data.phoneNumber}
                                onChange={onChange}
                                placeholder="Phone Number"
                                className="flex-1 border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                    </div>

                    <button
                        onClick={onApply}
                        disabled={!isAddressValid}
                        className={`mt-4 w-full py-2 rounded text-white font-medium transition-colors ${isAddressValid
                                ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
                                : 'bg-gray-300 cursor-not-allowed'
                            }`}
                    >
                        APPLY
                    </button>
                </div>
            )}

            <CountryModal
                open={countryModal}
                selected={data.country}
                onClose={() => setCountryModal(false)}
                onSelect={(n, c) => {
                    onCountrySelect(n, c)
                    setCountryModal(false)
                }}
            />
        </div>
    )
}