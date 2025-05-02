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

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <Teachers />
      <Numbers />
      <Carousel />
      <Features />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}
