'use client';

import { Header } from '@/components/partials/header';
import AvatarInfo from './modal/AvatarInfo';
import EditButton from './modal/EditButton';
import AccountSection from './modal/AccountSection';
import OrderDeliverySection from './modal/OrderDeliverySection';
import NotificationSection from './modal/NotificationSection';
import LogoutSection from './modal/LogoutSection';

export default function AccountPage() {
    return (
        <div className="min-h-screen bg-[#f7f8f9] text-[17px]">
            <Header />
            <div className="pt-28 flex justify-center">
                <div className="bg-white w-full max-w-xl rounded-xl shadow-sm p-8 mt-4">
                    <AvatarInfo />
                    <EditButton />
                    <hr className="my-6" />
                    <div className="space-y-8 text-base">
                        <AccountSection />
                        <OrderDeliverySection />
                        <NotificationSection />
                        <LogoutSection />
                    </div>
                </div>
            </div>
        </div>
    );
}