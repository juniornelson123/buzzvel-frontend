import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Join() {
  return (
    <motion.div
      className="w-full mx-auto px-4 py-4 flex h-[779px] justify-center items-center bg-yellow-400 flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center text-2xl lg:text-5xl text-gray-900 font-bold lg:font-extrabold relative">Join a world of learning</h2>
      <p className="text-center mt-8 lg:w-1/4">Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Risus elit et fringilla habitant ut facilisi.</p>
      <Link href="/#" className="mt-8 px-8 py-3 items-center border-2 border-orange-600 bg-orange-600 text-white font-semibold rounded-lg hover:border-2 hover:bg-transparent hover:text-orange-600 text-lg">
        Sign Up Now
      </Link>

      {/* Animação nas imagens */}
      {[...Array(14)].map((_, index) => (
        <motion.img
          key={index}
          src={`joinimage${index + 1}.jpg`}
          alt="conteúdo"
          className={`z-3 absolute w-[37px] h-[37px] lg:w-[48px] lg:h-[48px] rounded-full object-cover ${getImagePositionClass(index)} hover:scale-105 hover:shadow-xl transition-all duration-300`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 * index, duration: 0.8 }}
        />
      ))}
      
      {/* Animação nos ícones */}
      {['bold', 'codepen', 'lighticon', 'chaticon', 'pause-window', 'cash', 'cloud-sync', 'bell-notification', 'password-cursor', 'walleticon', 'cart'].map((icon, index) => (
        <motion.img
          key={icon}
          src={`${icon}.svg`}
          alt="conteúdo"
          className={`z-3 absolute w-[37px] h-[37px] lg:w-[48px] lg:h-[48px] object-cover ${getIconPositionClass(index)} hover:scale-105 transition-all duration-300`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.6 }}
        />
      ))}
    </motion.div>
  );
}

// Funções para retornar as classes baseadas no índice
const getImagePositionClass = (index: number) => {
  const positions = [
    'bottom-140 lg:bottom-60 lg:left-40',
    'left-8 top-50 lg:top-90 lg:left-[-2%]',
    'left-20 top-20 lg:top-40 lg:left-10',
    'left-25 bottom-150 lg:bottom-10 lg:left-5',
    'left-50 top-8 lg:top-70 lg:left-70',
    'left-70 top-30 lg:top-90 lg:left-100',
    'left-80 bottom-130 lg:bottom-20 lg:left-110',
    'left-80 top-6 lg:top-20 lg:left-110',
    'top-140 right-85 lg:top-40 lg:right-90',
    'bottom-10 right-80 lg:bottom-20 lg:right-90',
    'top-160 right-40 lg:top-90 lg:right-50',
    'top-135 right-20 lg:top-30 lg:right-10',
    'bottom-20 right-10 lg:bottom-50 lg:right-[-3%]',
    'bottom-10 right-10 lg:bottom-10 lg:right-10'
  ];
  return positions[index] || '';
};

const getIconPositionClass = (index: number) => {
  const iconPositions = [
    'top-10 left-5 lg:top-10 lg:left-5',
    'top-20 left-40 lg:top-30 lg:left-50',
    'top-40 left-10 lg:top-80 lg:left-30',
    'top-15 left-65 lg:top-50 lg:left-100',
    'bottom-140 left-75 lg:bottom-50 lg:left-100',
    'bottom-130 left-30 lg:bottom-50 lg:left-5',
    'top-140 right-50 lg:top-60 lg:right-60',
    'top-160 right-30 lg:top-90 lg:right-10',
    'top-150 right-70 lg:top-90 lg:right-90',
    'bottom-10 right-30 lg:bottom-50 lg:right-50',
    'bottom-20 right-60 lg:bottom-10 lg:right-50'
  ];
  return iconPositions[index] || '';
};
