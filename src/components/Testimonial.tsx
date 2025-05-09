'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Card = () => {
  return (
    <div className="flex w-full items-center z-10 h-full flex-col lg:flex-row">
      <div className="flex w-full lg:w-1/2">
        <div className="flex flex-col justify-center w-2/3">
          <p className="text-base lg:text-lg mb-6">
            Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.
          </p>
          <p className="text-base lg:text-lg">Marie Poirot,</p>
          <p className="text-base lg:text-lg font-bold">Bigapp</p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 lg:h-full relative">
        <div className="absolute w-[325px] h-[375px] lg:w-[495px] lg:h-[573px] right-25 lg:right-40 top-20 lg:top-[-10%] rounded-[50px] rotate-[30deg] bg-gray-900" />
        <img
          src="testimonialimage.jpg"
          alt="Depoimento"
          className="left-[-2%] top-30 lg:top-[-5%] absolute border-[5px] border-gray-900
                    w-[361px] h-[294px] lg:w-[528px] lg:h-[415px] rounded-[50px] object-cover"
        />
        <div className="left-[-2%] top-30 lg:top-[-5%] absolute border-[5px] border-gray-900 w-[361px] h-[294px] lg:w-[528px] lg:h-[415px] rounded-[50px] inset-0 bg-purple-500 mix-blend-multiply opacity-40" />
        <img src="chat-quote.svg" alt="Aspas" className="absolute top-[-20%] right-30 lg:right-20" />
        <img src="decorations.svg" alt="Decorações" className="absolute top-90 bottom-[-150%] left-0" />
      </div>
    </div>
  );
};

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevEnabled, setPrevEnabled] = useState(false);
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
      <div className="flex px-2 lg:px-4 py-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div className="min-w-full" key={i}>
            <Card />
          </div>
        ))}
      </div>

      {prevEnabled && (
        <button
          onClick={scrollPrev}
          className="hidden lg:block absolute left-[-5%] top-1/2 -translate-y-1/2 p-2 cursor-pointer"
        >
          <Image src="chevron_left.svg" alt="Voltar" width={18} height={32} />
        </button>
      )}

      {nextEnabled && (
        <button
          onClick={scrollNext}
          className="hidden lg:block absolute right-15 top-1/2 -translate-y-1/2 p-2 cursor-pointer"
        >
          <Image src="chevron_right.svg" alt="Avançar" width={18} height={32} />
        </button>
      )}

      <div className="absolute flex justify-center mt-4 space-x-2 left-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`${
              index === selectedIndex ? 'w-8 bg-gray-900' : 'w-2 bg-gray-100'
            } h-2 rounded-full transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="mx-auto px-2 py-2 lg:px-4 lg:py-4 h-[684px] lg:h-[575px] flex lg:mt-8 bg-yellow-400 justify-center">
      <div className="container flex flex-col h-full">
        <div className="flex flex-row gap-4 h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
