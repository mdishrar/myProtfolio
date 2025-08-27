"use client"
import Work from "./components/Work";
import Navbar from "./components/Navbar";
import Services from "./components/Service";
import Headers from "./components/Headers";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar/>
      <Headers/>
      <About/>
      <Services/>
      <Work />
      <Contact />
      <Footer/>
    </>
  );
}
