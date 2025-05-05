import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-4 flex lg:flex-row flex-col h-[847px] lg:h-[700px] lg:items-center relative">
      {/* Esquerda - Texto */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
        className="py-4 flex flex-col w-full lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl text-gray-900 font-bold lg:font-extrabold relative">
          <span>Teach students worldwide</span>
          <img
            src="/underline.svg"
            alt="conteúdo"
            className="block top-8 lg:top-15 lg:left-0 w-28 lg:w-56 absolute"
          />
        </h1>

        <p className="mt-6 lg:mr-48 text-gray-600">
          Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa
          tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis
          ultricies.
        </p>

        <div className="flex items-center mt-4 lg:mt-6">
          <Link
            href="/sign-up"
            className="mr-2 text-sm lg:text-base px-4 lg:px-8 py-2 border-2 border-orange-600 text-white font-semibold rounded-lg bg-orange-600 hover:bg-transparent hover:text-orange-600 transition-colors duration-300"
          >
            Sign Up Now
          </Link>
          <Link
            href="/login"
            className="items-center px-2 text-sm lg:text-base lg:px-8 py-2 border-0 border-blue-600 text-blue-600 font-semibold rounded-lg hover:border-2 hover:border-blue-600 flex transition-all duration-300"
          >
            <span className="mr-1">
              <Image
                src="/play-circle.svg"
                alt="play-circle"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-300"
              />
            </span>
            View Demo
          </Link>
        </div>

        {/* Logos confiáveis */}
        <div className="flex pr-8 mt-8 lg:mt-16 flex-col lg:flex-row">
          <div className="w-full lg:w-48 text-base text-gray-600">
            Trusted by leading companies
          </div>
          <div className="mt-4 flex justify-start gap-4 lg:gap-0 lg:justify-between pr-8 w-100">
            {[1, 2, 3, 4, 5].map((item) => (
              <Image
                key={item}
                src={`/hero${item}.svg`}
                alt={`hero${item}`}
                width={32}
                height={32}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Direita - Ilustrações */}
      <div className="w-full lg:w-1/2 px-4 py-4 flex flex-col relative h-full">
        {/* Máscara 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 absolute bottom-0 lg:bottom-10 left-0 bg-contain w-[162px] h-[196px] lg:w-[271.25px] lg:h-[340px] transform bg-no-repeat [background-image:url('/maskheroimage1.svg')]"
        >
          <Image
            fill
            src="/heroimage1.svg"
            alt="conteúdo"
            className="block w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <Image
            fill
            src="/iconheroimage1.svg"
            alt="conteúdo"
            className="absolute top-[-5%] lg:top-0 left-15 lg:left-32 w-42 h-full transition-transform duration-300 hover:rotate-6"
            loading="eager"
            priority
          />
        </motion.div>

        {/* Máscara 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 absolute right-0 top-0 w-[162px] h-[196px] lg:top-20 lg:right-[100px] lg:w-[238.69px] lg:h-[336px] transform bg-no-repeat bg-contain [background-image:url('/mask2hero.svg')]"
        >
          <Image
            fill
            src="/heroimage2.svg"
            alt="conteúdo"
            className="block w-full h-full transition-transform duration-300 hover:scale-105"
            loading="eager"
            priority
          />
          <Image
            fill
            src="/iconhero2.svg"
            alt="conteúdo"
            className="absolute top-0 right-8 w-56 h-full transition-transform duration-300 hover:rotate-6"
            loading="eager"
            priority
          />
        </motion.div>

        {/* Balões de fala */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-20 absolute right-15 top-10 lg:top-35 lg:right-70 duration-300 hover:rotate-8"
        >
          <div className="flex flex-col items-end">
            <div className="mt-4 shadow-md bg-white text-sm lg:text-base w-42 h-8 lg:w-48 lg:h-11 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
              Nunc, at libero neque
            </div>
            <div className="mt-4 shadow-md bg-white text-sm lg:text-base w-28 h-8 lg:w-32 lg:h-11 px-4 py-2 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[3px] rounded-bl-[15px]">
              Viverra sed
            </div>
          </div>
          <div>
            <div className="mt-4 shadow-md text-sm lg:text-base w-50 h-8 lg:w-56 lg:h-11 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Turpis platea nunc mattis
            </div>
            <div className="mt-4 shadow-md text-sm lg:text-base w-40 h-8 lg:w-46 lg:h-11 px-4 py-2 text-white bg-gray-700 rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[3px]">
              Vitae viverra ut non
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
