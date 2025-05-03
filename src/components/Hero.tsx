import Image from 'next/image'
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-4 flex lg:flex-row flex-col h-[847px] lg:h-[700px] lg:items-center relative">
      <div className="py-4 flex flex-col w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl text-gray-900 font-bold lg:font-extrabold relative">
          <span>Teach students worldwide</span>
          <img src="underline.svg" alt="conteúdo" class="block top-8 lg:top-15 lg:left-0 w-28 lg:w-56 absolute" />
        </h1>
        <p className="mt-6 lg:mr-48">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
        <div className="flex items-center mt-4 lg:mt-6">
          <Link href="/sign-up" className="mr-2 text-sm lg:text-base px-4 lg:px-8 py-2 border-2 border-orange-600 text-white font-semibold rounded-lg bg-orange-600 hover:bg-transparent hover:text-orange-600">
            Sign Up Now
          </Link>
          <Link href="/login" className="items-center px-2 text-sm lg:text-base lg:px-8 py-2 border-0 border-black text-blue-600 font-semibold rounded-lg hover:border-2 hover:border-blue-600 flex">
            <span className="mr-1"><Image src="/play-circle.svg" width={24} height={24} /></span>View Demo
          </Link>
        </div>
        <div className="flex pr-8 mt-8 lg:mt-16 flex-col lg:flex-row">
          <div className="w-full lg:w-48 text-base text-gray-600">Trusted by leading companies</div>
          <div className="mt-4 flex justify-start gap-4 lg:gap-0 lg:justify-between pr-8 w-100">
            {
              [1, 2, 3, 4, 5].map(item => <Image key={item} src={`/hero${item}.svg`} width={32} height={32} />)
            }
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col relative h-full">
        <div
          class="
            z-10
            absolute
            bottom-0
            lg:bottom-10
            left-0
            bg-contain
            w-[162]
            h-[196px]
            lg:w-[271.2517395019531px]
            lg:h-[340px]
            transform
            bg-no-repeat
            [background-image:url('/maskheroimage1.svg')]
          "
        >
          <img src="heroimage1.svg" alt="conteúdo" class="block w-full h-full" />
          <img src="iconheroimage1.svg" alt="conteúdo" class="block top-[-5%] lg:top-0 left-15 lg:left-32 w-42 h-full absolute" />
        </div>
        <div
          class="
            z-10
            absolute
            right-0
            top-0
            w-[162px]
            h-[196px]
            lg:top-20
            lg:right-[100px]
            lg:w-[238.694px]
            lg:h-[336px]
            transform
            bg-no-repeat
            bg-contain
            [background-image:url('/mask2hero.svg')]
          "
        >
          <img src="heroimage2.svg" alt="conteúdo" class="block w-full h-full" />
          <img src="iconhero2.svg" alt="conteúdo" class="block top-0 right-8 w-56 h-full absolute" />
        </div>
        <div className="z-20 absolute right-15 top-10 lg:top-35 lg:right-70">
          <div class="flex flex-col items-end">
            <div class="mt-4 z-20 shadow-md bg-white text-sm lg:text-base w-42 h-8 lg:w-48 lg:h-11 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
              Nunc, at libero neque 
            </div>
            <div class="mt-4 z-20 shadow-md bg-white text-sm lg:text-base w-28 h-8 lg:w-32 lg:h-11 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
              Viverra sed 
            </div>
          </div>
          <div>
            <div class="mt-4 z-20 shadow-md text-sm lg:text-base w-50 h-8 lg:w-56 lg:h-11 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Turpis platea nunc mattis
            </div>
            <div class="mt-4 z-20 shadow-md text-sm lg:text-base w-40 h-8 lg:w-46 lg:h-11 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Vitae viverra ut non
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
