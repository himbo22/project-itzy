'use client'
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import { FaShopify } from "react-icons/fa";
import Menucc from "@/components/Menu";
import EventCalender from "@/components/EventCalender";
import { Table } from "lucide-react";
import AdminHeader from "@/components/AdminHeader";
import { Button } from "@/components/ui/button";
import { Carter_One } from "next/font/google";
import TableCategory from "@/components/TableCategory";
import TableArtist from "@/components/TableArtist";
import TableView from "@/components/TableView";

import TableShipping from "@/components/TableShipping";
import TablePayment from "@/components/TablePayment";
import TableReport from "@/components/TableReport";
import TableAnswer from "@/components/TableAnswer";
import TableUser from "@/components/TableUser";
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
        <TableCategory />
        <TableArtist />
        <TableView />
        <TableShipping />
        <TablePayment />
        <TableReport />
        <TableAnswer />
        <TableUser />
        {/*<LogOut />*/}
        {children}
      </div>
    </div>


  );
}