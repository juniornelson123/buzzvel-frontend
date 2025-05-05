'use client'

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Teachers from "../components/Teachers";
import Numbers from "../components/Numbers";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import Join from "../components/Join";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-roboto)] overflow-hidden bg-white text-gray-900">
      <Header />
      {[Hero, About, Testimonial, Teachers, Numbers, Carousel, Features, Join, Contact].map((Component, i) => (
        <motion.section
          key={i}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        >
          <Component />
        </motion.section>
      ))}

      <Footer />
    </div>
  );
}
