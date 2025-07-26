'use client';
import Footer from '@/components/partials/footer';
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
                    <AvatarInfo
                        email="nguyen1@gmail.com"
                        avatarUrl="https://mystarroom-public-cdn.makestar.com/public/image/profile/Gs67icKaEAAIoNl.jpg_2025-06-09_085853429669_thumb.jpeg" />

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
            <Footer />
        </div>
    );
}