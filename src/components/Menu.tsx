import Image from "next/image";
import Link from "next/link";
import { FaLayerGroup } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
const menuItems = [
  {
    title: "MENU",
    items: [

      {
        icon: <FaLayerGroup />,
        label: "Catagory",
        href: "/",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/Shipping Method",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/Shipping Method",
      },
      {
        icon: <MdOutlinePayment />,
        label: " Payment Method",
        href: "/paymet Method",
      },
      {
        icon: <IoAnalytics />,
        label: " Report & Analytic",
        href: "/report & analytic",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/Shipping Method",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/Shipping Method",
      },
      {
        icon: <FaShippingFast />,
        label: " Shipping Method",
        href: "/Shipping Method",
      },



    ]
  }
]
const Menu = () => {
  return (
    <div className=''>Menu</div>
  )
}

export default Menu