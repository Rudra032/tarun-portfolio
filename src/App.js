import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import MyWork from "./pages/Work/MyWork";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
