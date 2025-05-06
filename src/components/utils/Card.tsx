import { motion } from 'framer-motion';
import Link from 'next/link';

export const fadeInAbout = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export const Card = ( { title, description, tag, link, size, color, bgColor } ) => (
  <motion.div
    className={`flex flex-col shadow-xl ${size} z-10 bg-white px-4 py-6 lg:py-8 rounded-xl`}
    {...fadeInAbout}
  >
    <p className={`py-1 px-3 ${bgColor} ${color} rounded w-fit text-sm`}>{tag}</p>
    <p className="text-base lg:text-xl font-medium my-2">{title}</p>
    <p className="text-gray-600 text-sm mb-6">{description}</p>
    <Link href={link} className="text-center text-xs mr-2 px-4 lg:text-sm lg:px-8 py-3 border-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white">
      Take Lesson
    </Link>
  </motion.div>
);
