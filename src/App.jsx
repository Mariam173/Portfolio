import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import MyServices from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <MySkills/>
      <Projects/>
     <MyServices/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App; 
