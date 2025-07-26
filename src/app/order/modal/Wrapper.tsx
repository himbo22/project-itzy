
import React, { ReactNode } from "react";

interface ModalWrapperProps {
    open: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
}

export default function ModalWrapper({ open, title, onClose, children }: ModalWrapperProps) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 bg-white/40 backdrop-blur-sm flex justify-center items-start pt-16">
            <div className="bg-white w-full max-w-md rounded-xl overflow-auto shadow-lg" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 text-2xl leading-none">✕</button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}