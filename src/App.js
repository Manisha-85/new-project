import React from "react";
import Navbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServiceSection";
import ProjectsSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <ServicesSection />
      <ProjectsSection/>
      <BlogSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
