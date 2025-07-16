'use client'
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Menucc from "@/components/Menu";
import AdminHeader from "@/components/AdminHeader";
import LogOut from "@/components/LogOut";
export default function MainLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      {/* Navbar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-gray-100">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/images/logo.png"
            alt="logo"
            className="m-auto"
            width={70}
            height={50}
          />
        </Link>
        <Menucc />
      </div>
      {/* Header */}
      <AdminHeader />
      {/* Contents */}
      <div className="mt-25 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-y-scroll relative">
        {/* Navbar ở trên cùng */}
        {/* Calendar dưới Navbar */}
        {/*<LogOut />*/}
        {children}
      </div>
    </div>
  );
}