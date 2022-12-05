import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useMediaQuery from "./hooks/useMediaQuery";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { motion } from "framer-motion";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

export const LineDivider = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-rainbow`} />;
};

function App() {
  const [isTop, setIsTop] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
  const isGTMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Helmet>
        <title>Jun's Portfolio</title>
      </Helmet>
      <Navbar
        isTop={isTop}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isGTMediumScreen && (
          <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        <motion.div onViewportEnter={() => setCurrentPage("home")}>
          <Home setCurrentPage={setCurrentPage} />
        </motion.div>
      </div>
      <LineDivider />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div onViewportEnter={() => setCurrentPage("skills")}>
          <Skills />
        </motion.div>
      </div>
      <LineDivider />
      <div className="w-5/6 mx-auto">
        <motion.div onViewportEnter={() => setCurrentPage("projects")}>
          <Projects />
        </motion.div>
      </div>
      <LineDivider />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div onViewportEnter={() => setCurrentPage("contact")}>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
