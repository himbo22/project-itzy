
import Image from "next/image";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlinePreview } from "react-icons/md";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
const menuItems = [
  {
    title: "MENU",
    items: [

      {
        icon: <FaLayerGroup />,
        label: "Catagory",
        href: "/admin/category",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/admin/shipping",
      },
      {
        icon: <MdOutlinePreview />,
        label: " View Product",
        href: "/admin/review",
      },
      {
        icon: <MdOutlinePayment />,
        label: " Payment Method",
        href: "/admin/payment",
      },
      {
        icon: <IoAnalytics />,
        label: " Report & Analytic",
        href: "/admin/report",
      },
      {
        icon: <RiQuestionAnswerFill />,
        label: " Answer Product Question",
        href: "/admin/answer",
      },
      {
        icon: <FaUserSecret />,
        label: " Artist",
        href: "/admin/artist",
      },
      {
        icon: <GrUserManager />,
        label: " User Management",
        href: "/admin/user",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <CgProfile />,
        label: "Profile",
        href: "/admin/profile",
      },
      {
        icon: <IoIosSettings />,
        label: "Settings",
        href: "/admin/settings",
      },
      {
        icon: <IoIosLogOut />,
        label: "Logout",
        href: "/logout",
      },
    ],
  },
]



const Menucc = () => {
  return (
    <div className='mt-4 text-sm '>
      {menuItems.map(i =>
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden  lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map(item =>
            <Link href={item.href} key={item.label} className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2">
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Menucc