'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Card = () => {
  return (
    <div className="flex w-full items-center z-10 h-full">
      <div className="flex w-1/2">
        <div className="flex flex-col justify-center w-2/3">
          <p className="text-lg mb-6">Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.</p>
          <p className="text-lg">Marie Poirot,</p>
          <p className="text-lg font-bold">Bigapp</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/2 h-full relative">
        <div className="absolute w-[495px] h-[573px] top-[-50%] rounded-[50px] rotate-[30deg] bg-gray-900" />
        <img src="testimonialimage.jpg" className="top-[-5%] absolute border-5 border-gray-900 w-[528px] h-[415px] rounded-[50px] object-cover" />
        <img src="chat-quote.svg" className="absolute top-[-20%] right-70" />
        <img src="decorations.svg" className="absolute bottom-[-150%] left-0" />
      </div>
    </div>
  )
}


const images = [
  { src: '/imageexample1.jpg', alt: 'Paisagem com montanhas' },
  { src: '/imageexample2.jpg', alt: 'Pôr do sol na praia' },
  { src: '/imageexample3.jpg', alt: 'Floresta verde' },
  { src: '/imageexample.jpg', alt: 'Cidade à noite' },
  { src: '/imageexample5.jpg', alt: 'Campo de flores' },
];


const Carousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative" ref={emblaRef}>
      <div className="flex px-4 py-8 ">
        {images.map((src, i) => (
          <div className="min-w-full" key={i}>
            <Card />
          </div>
        ))}
      </div>
      {
        prevEnabled && (
          <button
            onClick={scrollPrev}
            className="absolute left-[-5%] top-1/2 -translate-y-1/2 p-2 cursor-pointer"
          >
            <Image src="chevron_left.svg" width={18} height={32}/>
          </button>
        )
      }
      {
        nextEnabled && (
          <button
            onClick={scrollNext}
            disabled={!nextEnabled}
            className="absolute right-15 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
          >
            <Image src="chevron_right.svg" width={18} height={32}/>
          </button>
        )
      }

      <div className="absolute flex justify-center mt-4 space-x-2 left-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`${index === selectedIndex ? "w-8" : "w-2"} h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-gray-900' : 'bg-gray-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}


export default function Testimonial() {
  return (
    <div className="mx-auto px-4 py-4 h-[575px] flex mt-8 bg-yellow-400 justify-center">
      <div className="container py-4 flex flex-col  h-full">
        <div className="py-4 flex flex-row gap-4 mt-8  h-full">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
}
