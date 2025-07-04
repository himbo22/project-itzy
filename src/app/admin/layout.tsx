import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import { FaShopify } from "react-icons/fa";

export default function AdminLayout({


  children,
}: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
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

      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">

        {children}
      </div>
    </div>
  );
}
