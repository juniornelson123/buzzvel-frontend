import Image from 'next/image'
import Link from 'next/link';

const Card = () => {
  return (
    <div className="shadow-xl w-[160px] lg:w-[200px] z-10 bg-white px-4 py-6 lg:py-8 rounded-xl items-center">
      <p className="py-1 px-3 bg-purple-100 text-purple-800 rounded w-fit text-sm">Featured</p>
      <p className="text-base lg:text-xl font-medium my-2">The map of mathematics</p>
      <p className="text-gray-600 text-sm mb-6">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
      <Link href="/sign-up" className="text-xs mr-2 px-4 lg:text-sm lg:px-8 py-3 border-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white">
        Take Lesson
      </Link>
    </div>
  )
}

export default function About() {
  return (
    <div className="container mx-auto py-4 flex h-[1000px] lg:h-[700px] items-center flex-col lg:flex-row">
      <div className="px-4 py-4 flex flex-col w-full lg:w-1/2 lg:h-full justify-center">
        <h2 className="text-xl lg:text-5xl text-gray-900 font-extrabold relative">
          <span>An all-in-one app that makes it easier</span>
          <img src="underlineabout.svg" alt="conteúdo" class="top-5 left-8 w-24 lg:top-10 lg:left-15 absolute" />
        </h2>
        <p className="block lg:hidden mt-6">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.</p>
        <ul className="mt-6 lg:mt-12 gap-4 flex flex-col">
          <li className="flex">
            <span className="mr-1"><Image src="/check.svg" width={24} height={24} /></span>
            Est et in pharetra magna adipiscing ornare aliquam.
          </li>
          <li className="flex">
            <span className="mr-1"><Image src="/check.svg" width={24} height={24} /></span>
            Tellus arcu sed consequat ac velit ut eu blandit.
          </li>
          <li className="flex">
            <span className="mr-1"><Image src="/check.svg" width={24} height={24} /></span>
            Ullamcorper ornare in et egestas dolor orci.
          </li>
        </ul>
        <Link href="/login" className="text-sm lg:text-base mt-8 py-2 items-center border-0 border-black text-blue-600 font-semibold rounded-lg hover:border-2 hover:border-blue-600 flex">
          Find more about the app <span className="ml-1"><Image src="/arrow_right.svg" width={12} height={12} /></span>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 px-0 lg:px-4 py-4 flex flex-col relative lg:h-full h-1/2 items-center">
        <img src="blobabout.svg" alt="conteúdo" className= "
          z-1
          absolute
          top-0
          left-[-20%]
          lg:top-30
          w-full
          lg:h-[448px]
        "/>
        <img src="desktopabout.svg" alt="conteúdo" class="z-3 absolute top-0 lg:top-10 min-h-[235px]" />
        <img src="abouticons.svg" alt="conteúdo" class="z-2 block top-0 left-0 bottom-0 w-42 h-100 lg:h-full absolute" />
        <div className="z-10 absolute bottom-0 left-5 flex justify-between gap-4">
          {[1, 2, 3].map(item => <Card />)}
        </div>
      </div>
    </div>
  );
}
