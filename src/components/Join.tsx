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

export default function Join() {
  return (
    <div className="mx-auto px-4 py-4 flex h-[779px] justify-center items-center bg-yellow-400 flex-col relative">
      <h2 className="text-center text-5xl text-gray-900 font-extrabold relative">Join a world of learning</h2>
      <p className="text-center mt-8 w-1/4">Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi.</p>
      <Link href="/login" className="mt-8 px-8 py-3 items-center border-2 border-orange-600 bg-orange-600 text-white font-semibold rounded-lg hover:border-2 hover:bg-transparent hover:text-orange-600 text-lg">
        Sign Up Now
      </Link>
      <img src="joinimage1.jpg" alt="conteúdo" class="z-3 bottom-60 left-40 absolute w-[128px] h-[128px] rounded-full object-cover" />
      <img src="joinimage2.jpg" alt="conteúdo" class="z-3 top-90 left-[-2%] absolute w-[96px] h-[96px] rounded-full object-cover" />
      <img src="joinimage3.jpg" alt="conteúdo" class="z-3 top-40 left-10 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="joinimage4.jpg" alt="conteúdo" class="z-3 bottom-10 left-5 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="joinimage5.jpg" alt="conteúdo" class="z-3 top-70 left-70 absolute w-[64px] h-[64px] rounded-full object-cover" />
      <img src="joinimage6.jpg" alt="conteúdo" class="z-3 top-90 left-100 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="joinimage7.jpg" alt="conteúdo" class="z-3 bottom-20 left-110 absolute w-[32px] h-[32px] rounded-full object-cover" />
      <img src="joinimage8.jpg" alt="conteúdo" class="z-3 top-20 left-110 absolute w-[64px] h-[64px] rounded-full object-cover" />
      
      <img src="joinimage9.jpg" alt="conteúdo" class="z-3 top-40 right-90 absolute w-[56px] h-[56px] rounded-full object-cover" />
      <img src="joinimage10.jpg" alt="conteúdo" class="z-3 bottom-20 right-90 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="joinimage11.jpg" alt="conteúdo" class="z-3 top-90 right-50 absolute w-[64px] h-[64px] rounded-full object-cover" />
      <img src="joinimage12.jpg" alt="conteúdo" class="z-3 top-30 right-10 absolute w-[96px] h-[96px] rounded-full object-cover" />
      <img src="joinimage13.jpg" alt="conteúdo" class="z-3 bottom-50 right-[-3%] absolute w-[128px] h-[128px] rounded-full object-cover" />
      <img src="joinimage14.jpg" alt="conteúdo" class="z-3 bottom-10 right-10 absolute w-[32px] h-[32px] rounded-full object-cover" />
      
      <img src="bold.svg" alt="conteúdo" class="z-3 top-10 left-5 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="codepen.svg" alt="conteúdo" class="z-3 top-30 left-50 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="lighticon.svg" alt="conteúdo" class="z-3 top-80 left-30 absolute w-[32px] h-[32px] rounded-full object-cover" />
      <img src="chaticon.svg" alt="conteúdo" class="z-3 top-50 left-100 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="pause-window.svg" alt="conteúdo" class="z-3 bottom-50 left-100 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="cash.svg" alt="conteúdo" class="z-3 bottom-50 left-5 absolute w-[48px] h-[48px] rounded-full object-cover" />
      
      <img src="cloud-sync.svg" alt="conteúdo" class="z-3 top-60 right-60 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="bell-notification.svg" alt="conteúdo" class="z-3 top-90 right-10 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="password-cursor.svg" alt="conteúdo" class="z-3 top-90 right-90 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="walleticon.svg" alt="conteúdo" class="z-3 bottom-50 right-50 absolute w-[48px] h-[48px] rounded-full object-cover" />
      <img src="cart.svg" alt="conteúdo" class="z-3 bottom-10 right-50 absolute w-[32px] h-[32px] rounded-full object-cover" />
    </div>
  );
}
