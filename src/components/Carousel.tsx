'use client'

import Image from 'next/image'
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Card = () => {
  return (
    <div className="shadow-xl items-center z-10 bg-white px-4 py-8 rounded-xl">
      <p className="text-lg mb-6">Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.</p>
      <div className="flex items-center">
        <img src="testimage1.jpg" className="rounded-full w-16 h-16" />
        <div className="ml-4">
          <p className="text-sm">Hellen Jummy</p>
          <p className="text-gray-600 text-sm">Financial Counselor</p>
        </div>
      </div>
    </div>
  )
}



const CarouselData = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(true);
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
      <div className="flex">
        {images.map((src, i) => (
          <div
          key={i}
          className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
        >
            <div className="py-4 flex flex-row gap-4 mt-8">
              <Card />
            </div>
          </div>
        ))}
      </div>
      {
        prevEnabled && (
          <button
            onClick={scrollPrev}
            className="p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12"
          >
            <Image src="arrow-left.svg" width={24} height={24}/>
          </button>
        )
      }
      {
        nextEnabled && (
          <button
            onClick={scrollNext}
            disabled={!nextEnabled}
            className="ml-4 p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12"
          >
            <Image src="arrow-right.svg" width={24} height={24}/>
          </button>
        )
      }
    </div>
  );
}



const images = [
  { src: '/imageexample1.jpg', alt: 'Paisagem com montanhas' },
  { src: '/imageexample2.jpg', alt: 'Pôr do sol na praia' },
  { src: '/imageexample3.jpg', alt: 'Floresta verde' },
  { src: '/imageexample.jpg', alt: 'Cidade à noite' },
  { src: '/imageexample5.jpg', alt: 'Campo de flores' },
];


export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(true);
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
    <div className="container mx-auto px-4 py-4 flex mt-8">
      <div className="py-4 flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-5xl text-gray-900 font-extrabold relative">What everyone says</h2>
          <div>
            {
              prevEnabled && (
                <button
                  onClick={scrollPrev}
                  className="p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12"
                >
                  <Image src="arrow-left.svg" width={24} height={24}/>
                </button>
              )
            }
            {
              nextEnabled && (
                <button
                  onClick={scrollNext}
                  disabled={!nextEnabled}
                  className="ml-4 p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12"
                >
                  <Image src="arrow-right.svg" width={24} height={24}/>
                </button>
              )
            }
          </div>
        </div>
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {images.map((src, i) => (
              <div
              key={i}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
            >
                <div className="py-4 flex flex-row gap-4 mt-8">
                  <Card />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
