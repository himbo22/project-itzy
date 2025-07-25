import React, { ChangeEvent } from 'react'
import { countries } from '@/app/order/countries'

interface CountryModalProps {
    open: boolean
    selected: string
    onClose: () => void
    onSelect: (name: string, code: string) => void
}

export function CountryModal({ open, selected, onClose, onSelect }: CountryModalProps) {
    const [search, setSearch] = React.useState('')
    const filtered = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()),
    )

    if (!open) return null
    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-16">
            <div className="bg-white w-full max-w-md rounded-xl overflow-auto shadow-lg" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">Search Country/Region</h2>
                    <button onClick={onClose} className="text-gray-500 text-2xl leading-none">✕</button>
                </div>
                <div className="p-4">
                    <input
                        type="text"
                        placeholder="Search for Country/Region"
                        value={search}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
                    />
                    <ul className="space-y-1 max-h-60 overflow-auto">
                        {filtered.map(c => (
                            <li
                                key={c.name}
                                onClick={() => { onSelect(c.name, c.dial_code); onClose() }}
                                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded cursor-pointer"
                            >
                                <input type="radio" checked={selected === c.name} readOnly />
                                <span className="flex-1">{c.name} <span className="text-gray-500">({c.dial_code})</span></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}