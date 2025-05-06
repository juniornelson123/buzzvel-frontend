import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 bg-gray-900 text-white flex w-full mx-auto justify-center items-center flex-col lg:h-[420px]">
      <div className="flex w-full container border-b border-gray-700 py-8 justify-between flex-col lg:flex-row">
        <div>
          <Image src="/logo-footer.png" alt="logo" width={175} height={35} />
        </div>
        <ul className="gap-4 flex flex-col mt-8 lg:mt-0">
          <li><Link href="/" className="font-bold">Product</Link></li>
          <li><Link href="/">Pricing</Link></li>
          <li><Link href="/">Overview</Link></li>
          <li><Link href="/">Browse</Link></li>
          <li><Link href="/">Accessibility<span className="ml-2 text-xs bg-purple-100 text-purple-600 rounded py-1 px-2">BETA</span></Link></li>
        </ul>
        <ul className="gap-4 flex flex-col mt-8 lg:mt-0">
          <li><Link href="/" className="font-bold">Solutions</Link></li>
          <li><Link href="/">Brainstorming</Link></li>
          <li><Link href="/">Ideation</Link></li>
          <li><Link href="/">Wireframing</Link></li>
          <li><Link href="/">Research</Link></li>
        </ul>
        <ul className="gap-4 flex flex-col mt-8 lg:mt-0">
          <li><Link href="/" className="font-bold">Resources</Link></li>
          <li><Link href="/">Help Center</Link></li>
          <li><Link href="/">Blog</Link></li>
          <li><Link href="/">Tutorials</Link></li>
          <li><Link href="/">FAQs</Link></li>
        </ul>
        <ul className="gap-4 flex flex-col mt-8 lg:mt-0">
          <li><Link href="/" className="font-bold">Support</Link></li>
          <li><Link href="/">Contact Us</Link></li>
          <li><Link href="/">Developers</Link></li>
          <li><Link href="/">Documentation</Link></li>
          <li><Link href="/">Integrations</Link></li>
        </ul>
        <ul className="gap-4 flex flex-col mt-8 lg:mt-0">
          <li><Link href="/" className="font-bold">Company</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Press</Link></li>
          <li><Link href="/">Events</Link></li>
          <li className="flex items-center">
            <Link href="/">
              Request Demo
            </Link>
            <span className="ml-2">
              <Image src="/arrow_right_white.svg" alt="arrow_right_white" width={16} height={16} />
            </span>
          </li>
        </ul>
      </div>
      <div className="container flex justify-between w-full py-4 mt-4 flex-col lg:flex-row">
        <div>
          <p>uteach @ 2023. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-8 lg:mt-0">
          <Link href="/">Terms</Link>
          <Link href="/" className="hidden lg:block">Privacy</Link>
          <Link href="/">Contact</Link>
          <div className="flex">
            <Image src="/world.svg" alt="world" width={24} height={24} className="mr-1" />EN
          </div>
          <div className="flex">
            <Image src="/euro.svg" alt="euro" width={24} height={24} className="mr-1" />EUR
          </div>
          <Image src="/accessibility.svg" alt="accessibility" width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}
