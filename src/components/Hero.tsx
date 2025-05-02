import Image from 'next/image'
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-4 flex h-[700px] items-center relative">
      <div className="py-4 flex flex-col w-1/2">
        <h1 className="text-7xl text-gray-900 font-extrabold relative">
          <span>Teach students worldwide</span>
          <img src="underline.svg" alt="conteúdo" class="block top-15 left-0 w-56 absolute" />
        </h1>
        <p className="mt-6 mr-48">Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
        <div className="flex items-center mt-6">
          <Link href="/sign-up" className="mr-2 px-8 py-2 border-2 border-orange-600 text-white font-semibold rounded-lg bg-orange-600 hover:bg-transparent hover:text-orange-600">
            Sign Up Now
          </Link>
          <Link href="/login" className="px-8 py-2 border-0 border-black text-blue-600 font-semibold rounded-lg hover:border-2 hover:border-blue-600 flex">
            <span className="mr-1"><Image src="/play-circle.svg" width={24} height={24} /></span>View Demo
          </Link>
        </div>
        <div className="flex pr-8 mt-16">
          <div className="w-48 text-base text-gray-600">Trusted by leading companies</div>
          <div className="flex justify-between pr-8 w-100">
            {
              [1, 2, 3, 4, 5].map(item => <Image key={item} src={`/hero${item}.svg`} width={24} height={24} />)
            }
          </div>
        </div>
      </div>
      <div className="w-1/2 px-4 py-4 flex flex-col">
        <div
          class="
            z-10
            absolute
            bottom-10
            w-[271.2517395019531px]
            h-[340px]
            transform
            bg-no-repeat
            [background-image:url('/maskheroimage1.svg')]
          "
        >
          <img src="heroimage1.svg" alt="conteúdo" class="block w-full h-full" />
          <img src="iconheroimage1.svg" alt="conteúdo" class="block top-0 left-32 w-42 h-full absolute" />
        </div>
        <div
          class="
            z-10
            absolute
            top-20
            right-[100px]
            w-[238.694px]
            h-[336px]
            transform
            bg-no-repeat
            [background-image:url('/mask2hero.svg')]
          "
        >
          <img src="heroimage2.svg" alt="conteúdo" class="block w-full h-full" />
          <img src="iconhero2.svg" alt="conteúdo" class="block top-0 right-8 w-56 h-full absolute" />
        </div>
        <div className="z-20 absolute top-35 right-70">
          <div class="mt-4 z-20 shadow-md bg-white w-48 h-11 gap-2.5 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
            Nunc, at libero neque 
          </div>
          <div class="mt-4 z-20 shadow-md bg-white w-32 h-11 gap-2.5 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
            Viverra sed 
          </div>
          <div class="mt-4 z-20 shadow-md w-56 h-11 gap-2.5 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
            Turpis platea nunc mattis
          </div>
          <div class="mt-4 z-20 shadow-md w-46 h-11 gap-2.5 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
            Vitae viverra ut non
          </div>
        </div>

      </div>
    </div>
  );
}
