'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Card } from './utils/Card'

const FeaturesContent = () => (
  <div className="py-4 flex flex-col w-full lg:w-1/2">
    <h2 className="text-2xl lg:text-5xl text-gray-900 font-extrabold relative">
      <span>All the cool features</span>
      <Image
        src="/underlineabout.svg"
        alt="conteúdo"
        width={192}
        height={32}
        className="block w-32 lg:w-48 right-20 lg:top-10 lg:right-75 absolute"
      />
    </h2>
    <p className="mt-8 lg:w-3/4">
      Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
    </p>
    <Link href="/#">
      <div className="text-sm lg:text-base mt-8 py-2 items-center border-0 border-black text-blue-600 font-semibold rounded-lg flex cursor-pointer transition-all duration-300">
        View all the features
        <span className="ml-1">
          <Image src="/arrow_right.svg" alt="arrow_right" width={12} height={12} />
        </span>
      </div>
    </Link>
  </div>
);

const FeatureImages = () => (
  <div className="w-full lg:w-1/2 lg:px-4 py-4 flex flex-col relative h-full items-center">
    <Image
      src="/blogfeatures.svg"
      alt="conteúdo"
      width={600}
      height={522}
      className="z-1 absolute left-0 top-5 lg:top-30 bg-no-repeat transition-all duration-500 transform hover:scale-110"
    />
    <Image
      src="/iconfeatures.svg"
      alt="conteúdo"
      width={288}
      height={554}
      className="z-3 block top-20 right-70 absolute transition-all duration-500 transform hover:scale-110"
    />
    <div className="z-10 absolute bottom-3 lg:bottom-10 lg:left-5 flex flex-wrap">
      <div className="flex items-end relative">
        <Card 
          tag="Popular"
          color="text-blue-800"
          bgColor="bg-blue-100"
          size="w-[225px]"
          title="Design for how people think"
          description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
          link="/"
        />
        <Image
          src="/featureimage1.jpg"
          alt="conteúdo"
          width={186}
          height={158}
          className="right-[-95%] absolute ml-4 w-[186px] h-[158px] rounded-lg border-5 border-white object-cover transition-all duration-300 transform hover:scale-105"
        />
      </div>
      <div className="flex items-end mt-8">
        <Image
          src="/featureimage2.jpg"
          alt="conteúdo"
          width={304}
          height={179}
          className="ml-4 w-[304px] h-[179px] rounded-lg border-5 border-white object-cover transition-all duration-300 transform hover:scale-105"
        />
        <Image
          src="/featureimage3.jpg"
          alt="conteúdo"
          width={232}
          height={179}
          className="ml-4 w-[232px] h-[179px] rounded-lg border-5 border-white object-cover transition-all duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex h-[813px] h-[700px] items-center flex-col lg:flex-row">
      <FeaturesContent />
      <FeatureImages />
    </div>
  );
};

export default Features;
