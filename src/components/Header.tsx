'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="flex space-x-8 justify-center items-center relative">
          <Image src="/logo.png" width={103} height={35} />
          <Link href="/products" className="hidden lg:block font-medium text-gray-900 hover:text-orange-600 transition">Products</Link>
          <Link href="/solutions" className="hidden lg:block font-medium text-gray-900 hover:text-orange-600 transition">Solutions</Link>
          <Link href="/pricing" className="hidden lg:block font-medium text-gray-900 hover:text-orange-600 transition">Pricing</Link>
          <div className="relative group hidden lg:block">
            <Link href="/resources" className="font-medium text-gray-900 hover:text-orange-600 transition flex items-center">
              Resources <span className="ml-1"><Image src="/chevron-down.svg" width={24} height={24} /></span>
            </Link>
          </div>
          {isOpen && (
            <div className="absolute bg-white p-8 w-screen gap-8 flex flex-col left-[-12%] top-[145%] shadow-md">
              <Link href="/products" className="font-medium text-gray-900 hover:text-orange-600 transition">Products</Link>
              <Link href="/solutions" className="font-medium text-gray-900 hover:text-orange-600 transition">Solutions</Link>
              <Link href="/pricing" className="font-medium text-gray-900 hover:text-orange-600 transition">Pricing</Link>
              <div className="relative group">
                <Link href="/resources" className="font-medium text-gray-900 hover:text-orange-600 transition flex items-center">
                  Resources <span className="ml-1"><Image src="/chevron-down.svg" width={24} height={24} /></span>
                </Link>
              </div>
            </div>
          )}
        </nav>
        <div className="block lg:hidden">
          <Image src="/menu-outline.svg" width={24} height={24} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="hidden lg:block">
          <Link href="/login" className="px-4 py-2 border-0 border-black text-black font-semibold rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white focus:border-2 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Log In
          </Link>
          <Link href="/sign-up" className="ml-2 px-4 py-2 border-2 border-black text-black font-semibold rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign Up Now
          </Link>
        </div>
      </div>
    </header>
  );
}
