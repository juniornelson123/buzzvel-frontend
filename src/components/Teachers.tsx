import Image from 'next/image'
import Link from 'next/link';
import {useMemo} from 'react';
import { motion } from 'framer-motion';

interface MasonryItem {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  items: MasonryItem[];
}

const MasonryGallery = ({ items = [] }: MasonryGalleryProps) => {
  const columnCounts = [2, 3, 3, 2];
  const columns = columnCounts.map((count, colIndex) => {
    const start = columnCounts.slice(0, colIndex).reduce((a, b) => a + b, 0);
    return items.slice(start, start + count);
  });

  return (
    <div className="flex space-x-4 items-center">
      {columns.map((colItems, colIdx) => (
        <div key={colIdx} className="space-y-4">
          {colItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
                style={{ aspectRatio: 'auto 1 / 1.5' }}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}


const items = [
  { src: '/imageexample1.jpg', alt: 'Paisagem com montanhas' },
  { src: '/imageexample2.jpg', alt: 'Pôr do sol na praia' },
  { src: '/imageexample3.jpg', alt: 'Floresta verde' },
  { src: '/imageexample.jpg', alt: 'Cidade à noite' },
  { src: '/imageexample5.jpg', alt: 'Campo de flores' },
  { src: '/imageexample6.jpg', alt: 'Lago refletindo montanhas' },
  { src: '/imageexample7.jpg', alt: 'Tronco de árvore com musgo' },
  { src: '/imageexample8.jpg', alt: 'Estrada rural ao entardecer' },
  { src: '/imageexample9.jpg', alt: 'Lago refletindo montanhas' },
  { src: '/imageexample10.jpg', alt: 'Tronco de árvore com musgo' },
];


const columns = 4
const gutter = 4
const maxRowSpan = 2
const maxColSpan = 2

export default function About() {
  return (
    <div className="mt-4 flex-col-reverse lg:flex-row container mx-auto px-4 py-4 flex h-[700px] items-center">
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col relative h-full items-center">
        <MasonryGallery items={items} />
      </div>
      <div className="lg:py-4 lg:px-8 lg:ml-4 flex flex-col w-full lg:w-1/2 relative h-full justify-center">
        <img src="plane-departure.svg" alt="conteúdo" className="w-8 lg:w-16 top-0 lg:top-35 right-40 absolute" />
        <h2 className="text-2xl lg:text-5xl text-gray-900 font-extrabold">
          <span>Meet international students & teachers</span>
        </h2>
        <p className="mt-4 lg:mt-8">Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.</p>
        <Link href="/login" className="mt-4 lg:mt-8 py-2 items-center border-0 border-black text-blue-600 font-semibold rounded-lg flex">
          Explore teachers and students <span className="ml-1"><Image src="/arrow_right.svg" alt="arrow_right" width={12} height={12} /></span>
        </Link>
      </div>
    </div>
  );
}
