import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-8 bg-gray-900 text-white flex w-full mx-auto justify-center items-center flex-col lg:h-[420px]">
      <div className="flex w-full container border-b border-gray-700 py-8 justify-between flex-col lg:flex-row">
        <div>
          <Image src="/logo-footer.png" alt="logo" width={175} height={35} />
        </div>
        {
          [1, 2, 3, 4, 5].map(item => (
            <ul className="gap-4 flex flex-col mt-8 lg:mt-0" key={item}>
              <li><Link href="/" className="font-bold">Product</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/">Browse</Link></li>
              <li><Link href="/">Accessibility<span className="ml-2 text-xs bg-purple-100 text-purple-600 rounded py-1 px-2">BETA</span></Link></li>
            </ul>
          ))
        }
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
