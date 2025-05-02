import Image from 'next/image'
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-8 justify-center items-center">
          <Image src="/logo.png" width={103} height={35} />
          <Link href="/products" className="font-medium text-gray-900 hover:text-orange-600 transition">Products</Link>
          <Link href="/solutions" className="font-medium text-gray-900 hover:text-orange-600 transition">Solutions</Link>
          <Link href="/pricing" className="font-medium text-gray-900 hover:text-orange-600 transition">Pricing</Link>
          <div className="relative group">
            <Link href="/resources" className="font-medium text-gray-900 hover:text-orange-600 transition flex items-center">
              Resources <span className="ml-1"><Image src="/chevron-down.svg" width={24} height={24} /></span>
            </Link>
          </div>
        </nav>
        <div className="">
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
