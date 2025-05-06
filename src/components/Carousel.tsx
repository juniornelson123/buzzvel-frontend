'use client'

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { CardCarousel } from './utils/CardCarousel';

interface CarouselNavigationProps {
  prevEnabled: boolean;
  nextEnabled: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ prevEnabled, nextEnabled, scrollPrev, scrollNext }) => (
  <div>
    {prevEnabled && (
      <button onClick={scrollPrev} className="p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12">
        <Image src="arrow-left.svg" alt="arrow-left" width={24} height={24} />
      </button>
    )}
    {nextEnabled && (
      <button onClick={scrollNext} disabled={!nextEnabled} className="ml-4 p-2 cursor-pointer w-12 border-2 border-orange-600 rounded-full h-12">
        <Image src="arrow-right.svg" alt="arrow-right" width={24} height={24} />
      </button>
    )}
  </div>
);

const CarouselData = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(true);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

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
            className="flex-[0_0_40%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
          >
            <div className="py-4 flex flex-row gap-4 mt-8">
              <Card />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  { image: '/testimage1.jpg', description: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", author: "Hellen Jummy", role: "Financial Counselor" },
  { image: '/testimage2.jpg', description: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", author: "Hellen Jummy", role: "Financial Counselor" },
  { image: '/testimage3.jpg', description: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", author: "Hellen Jummy", role: "Financial Counselor" },
  { image: '/testimage4.jpg', description: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", author: "Hellen Jummy", role: "Financial Counselor" },
  { image: '/testimage5.jpg', description: "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.", author: "Hellen Jummy", role: "Financial Counselor" },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(true);
  const [nextEnabled, setNextEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="container mx-auto px-4 py-4 flex mt-4 lg:mt-8">
      <div className="py-4 flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-2xl lg:text-5xl text-gray-900 font-bold lg:font-extrabold relative">What everyone says</h2>
          <CarouselNavigation
            prevEnabled={prevEnabled}
            nextEnabled={nextEnabled}
            scrollPrev={scrollPrev}
            scrollNext={scrollNext}
          />
        </div>
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_40%] sm:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-2"
              >
                <div className="py-4 flex flex-row gap-4 lg:mt-8">
                  <CardCarousel {...item}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
