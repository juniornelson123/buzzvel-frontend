import Image from 'next/image'
import Link from 'next/link';

const Card = () => {
  return (
    <div className="shadow-xl w-[225px] z-10 bg-white px-4 py-8 rounded-xl">
      <p className="py-1 px-3 bg-blue-100 text-blue-800 rounded w-fit text-sm">Popular</p>
      <p className="text-xl font-medium my-2">Design for how people think</p>
      <p className="text-gray-600 text-sm mb-6">Aliquam ut euismod condimentum elementum ultricies volutpat sit non.</p>
      <Link href="/sign-up" className="text-sm mr-2 px-8 py-3 border-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white">
        Take Lesson
      </Link>
    </div>
  )
}

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-4 flex h-[700px] items-center">
      <div className="py-4 flex flex-col w-1/2">
        <h2 className="text-5xl text-gray-900 font-extrabold relative">
          <span>All the cool features</span>
          <img src="underlineabout.svg" alt="conteúdo" class="block top-10 right-60 absolute" />
        </h2>
        <p className="mt-8 w-3/4">Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.</p>
        <Link href="/login" className="mt-8 py-2 items-center border-0 border-black text-blue-600 font-semibold rounded-lg hover:border-2 hover:border-blue-600 flex">
          Find more about the app <span className="ml-1"><Image src="/arrow_right.svg" width={12} height={12} /></span>
        </Link>
      </div>
      <div className="w-1/2 px-4 py-4 flex flex-col relative h-full items-center">
        <img src="blogfeatures.svg" alt="conteúdo" className= "
          z-1
          absolute
          left-0
          top-30
          h-[522px]

          transform
          bg-no-repeat
        "/>
        <img src="iconfeatures.svg" alt="conteúdo" class="z-3 block top-20 right-70 w-72 h-[554px] absolute" />
        <div className="z-10 absolute bottom-10 left-5 flex flex-wrap">
          <div className="flex items-end">
            <Card />
            <img src="featureimage1.jpg" alt="conteúdo" className="ml-4 w-[186px] h-[158px] rounded-lg border-5 border-white" />
          </div>
          <div className="flex items-end mt-8">
            <img src="featureimage2.jpg" alt="conteúdo" className="ml-4 w-[304px] h-[179px] rounded-lg border-5 border-white" />
            <img src="featureimage3.jpg" alt="conteúdo" className="ml-4 w-[232px] h-[179px] rounded-lg border-5 border-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
