'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, fadeInAbout } from './utils/Card'

const MotionImage = motion(Image);

const items = [
  {
    tag: "Featured", 
    color: "text-purple-800", 
    bgColor: "bg-purple-100", 
    size: "w-[160px] lg:w-[200px]", 
    title: "The map of mathematics",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.", 
    link: "/" 
  },
  {
    tag: "Popular", 
    color: "text-blue-800", 
    bgColor: "bg-blue-100", 
    size: "w-[160px] lg:w-[200px]", 
    title: "Design for how people think",
    description: "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.", 
    link: "/" 
  },
  {
    tag: "New", 
    color: "text-green-800", 
    bgColor: "bg-green-100", 
    size: "w-[160px] lg:w-[200px]", 
    title: "International & commercial law",
    description: "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.", 
    link: "/" 
  },
]
export default function About() {
  return (
    <div className="container mx-auto py-4 flex h-[1000px] lg:h-[700px] items-center flex-col lg:flex-row">
      <div className="px-4 py-4 flex flex-col w-full lg:w-1/2 lg:h-full justify-center">
        <motion.h2
          className="text-xl lg:text-5xl text-gray-900 font-extrabold relative"
          {...fadeInAbout}
        >
          <span>An all-in-one app that makes it easier</span>
          <MotionImage
            src="/underlineabout.svg"
            alt="conteúdo"
            width={100}
            height={24}
            className="top-5 left-8 w-24 lg:top-10 lg:left-15 absolute"
          />
        </motion.h2>

        <motion.p
          className="block lg:hidden mt-6"
          {...fadeInAbout}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem
          mauris. Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
        </motion.p>

        <motion.ul className="mt-6 lg:mt-12 gap-4 flex flex-col" {...fadeInAbout} transition={{ delay: 0.2 }}>
          {[
            'Est et in pharetra magna adipiscing ornare aliquam.',
            'Tellus arcu sed consequat ac velit ut eu blandit.',
            'Ullamcorper ornare in et egestas dolor orci.',
          ].map((text, i) => (
            <li key={i} className="flex">
              <Image src="/check.svg" alt="Check" width={24} height={24} className="mr-1" />
              {text}
            </li>
          ))}
        </motion.ul>

        <motion.div className="mt-8" {...fadeInAbout} transition={{ delay: 0.3 }}>
          <Link
            href="/#"
            className="text-sm lg:text-base py-2 items-center border-0 border-black text-blue-600 font-semibold rounded-lg flex"
          >
            Find more about the app
            <span className="ml-1">
              <Image src="/arrow_right.svg" alt="arrow_right" width={12} height={12} />
            </span>
          </Link>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 px-0 lg:px-4 py-4 flex flex-col relative lg:h-full h-1/2 items-center">
        <MotionImage
          src="/blobabout.svg"
          alt="blob"
          width={600}
          height={448}
          className="z-1 absolute top-0 left-[-20%] lg:top-30 w-full lg:h-[448px]"
          {...fadeInAbout}
        />
        <MotionImage
          src="/desktopabout.svg"
          alt="desktop"
          width={500}
          height={300}
          className="z-3 absolute top-0 lg:top-10 min-h-[235px]"
          {...fadeInAbout}
          transition={{ delay: 0.1 }}
        />
        <MotionImage
          src="/abouticons.svg"
          alt="icons"
          width={200}
          height={300}
          className="z-2 block top-0 left-0 bottom-0 w-42 h-100 lg:h-full absolute"
          {...fadeInAbout}
          transition={{ delay: 0.2 }}
        />

        <div className="z-10 absolute bottom-0 left-5 flex justify-between gap-4">
          {items.map((item) => (
            <Card key={item.tag} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
