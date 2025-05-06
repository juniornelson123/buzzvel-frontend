'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="flex space-x-8 justify-between lg:justify-center items-center relative w-full lg:w-auto">
          <Image src="/logo.png" alt="logo" width={103} height={35} />
          <div className="hidden lg:flex space-x-8">
            <Link href="/products" className="font-medium text-gray-900 hover:text-orange-600 transition">Products</Link>
            <Link href="/solutions" className="font-medium text-gray-900 hover:text-orange-600 transition">Solutions</Link>
            <Link href="/pricing" className="font-medium text-gray-900 hover:text-orange-600 transition">Pricing</Link>
            <div className="relative group">
              <Link href="/resources" className="font-medium text-gray-900 hover:text-orange-600 transition flex items-center">
                Resources <span className="ml-1"><Image src="/chevron-down.svg" alt="chevron" width={24} height={24} /></span>
              </Link>
            </div>
          </div>

          {/* Menu Toggle for Mobile */}
          <div className="block lg:hidden">
            <Image 
              src="/menu-outline.svg" 
              alt="menu" 
              width={24} 
              height={24} 
              onClick={() => setIsOpen(!isOpen)} 
            />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute bg-white p-8 w-full gap-8 flex flex-col left-0 top-full shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0'}`}
        >
          <Link href="/products" className="font-medium text-gray-900 hover:text-orange-600 transition">Products</Link>
          <Link href="/solutions" className="font-medium text-gray-900 hover:text-orange-600 transition">Solutions</Link>
          <Link href="/pricing" className="font-medium text-gray-900 hover:text-orange-600 transition">Pricing</Link>
          <div className="relative group">
            <Link href="/resources" className="font-medium text-gray-900 hover:text-orange-600 transition flex items-center">
              Resources <span className="ml-1"><Image src="/chevron-down.svg" alt="chevron" width={24} height={24} /></span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link href="/#" className="px-4 py-2 border-0 text-black font-semibold rounded-lg hover:text-orange-600">Log In</Link>
          <Link href="/sign-up" className="px-4 py-2 border-2 border-black text-black font-semibold rounded-lg hover:bg-orange-600 hover:border-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Sign Up Now
          </Link>
        </div>
      </div>
    </header>
  )
}
