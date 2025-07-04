import Link from 'next/link'
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800 tracking-wider">
              ITZY SHOP
            </h2>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16 w-full md:w-auto justify-between">
            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/event-partnership"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Event/Partnership Inquiry
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Privacy Links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Privacy</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-800 font-semibold underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">
                Customer Service
              </h3>
              <div className="text-gray-600 space-y-2">
                <p>Weekdays 10:00 ~ 17:00 KST</p>
                <p>Closed on weekends and public holidays</p>
                <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors mt-3 font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            {/* Company Info */}
            <div className="text-sm text-gray-600 space-y-1 flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <p>
                  Business Registration NO. : 120-88-24134{' '}
                  <Link href="/business-info" className="underline">
                    Business Information
                  </Link>
                </p>
                <p>
                  Main-order-sales Registration No. : 제 2015-서울강남-01180호
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <p>
                  Address : 29, Hakdong-ro 23-gil, Gangnam-gu, Seoul, Republic
                  of Korea
                </p>
                <p>Email : makestar@makestar.com</p>
                <p>Phone : 070-5055-6068</p>
              </div>
              <p>CEO : Jae-myun Kim</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-700 font-bold text-sm">N</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <span className="text-gray-700 font-bold text-xs">KA</span>
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-sm text-gray-600">
            <p>2025 MAKESTAR Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
