import React from "react";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import "./App.css";

import RenderHeaderSection from "./components/header.js";
import RenderHeroSection from "./components/hero.js";
import RenderSection3 from "./components/section3.js";
import RenderSection4 from "./components/section4.js";
import RenderSection5 from "./components/section5.js";
import RenderSection6 from "./components/section6.js";
import RenderFooterSection from "./components/footer.js";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    // <Router hashType="noslash" basename={process.env.BASE_PATH}>
    //   <Switch>
    //     <Route exact path="/PortfolioWebsite" component={PortfolioWebsite} />
    //     <Redirect from="/" to="/PortfolioWebsite" />
    //   </Switch>
    // </Router>
    <div>
      <motion.div className="cursor" variants={variants} animate="default" />
      <RenderHeaderSection />
      <RenderHeroSection />
      <RenderSection3 />
      <RenderSection4 />
      <RenderSection5 />
      <RenderSection6 />
      <RenderFooterSection />
    </div>
  );
}

export default App;
