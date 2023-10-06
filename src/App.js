import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import About1 from "./components/sections/About1";
import Roadmap from "./components/sections/Roadmap";
import Roadmap1 from "./components/sections/Roadmap1";
import Roadmap2 from "./components/sections/Roadmap2";

import Showcase from "./components/sections/Showcase";
import Team from "./components/sections/Team";
import Team2 from "./components/sections/Team2";
import Faq from "./components/sections/Faq";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { AnimatePresence} from "framer-motion"
import Background from "./components/sections/Background";
// import Test from "./components/sections/test";
import MyBackground from "./components/sections/Background-image";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
     
             
              
              
        {/* <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
          <main className ="App" data-scroll-container ref={containerRef}>
          <Navigation />
              <Home />
              <About1 />
              <Roadmap1 />
              <Showcase />
              <Team />
              <Faq />
              <Footer /> 
               <ScrollToTop />
           
           
          </main>
          </AnimatePresence>
        </LocomotiveScrollProvider> */}
        {/* <ScrollTriggerProxy /> */}
       <MyBackground />
        {/* <Navigation /> */}
        {/* <Background /> */}
              {/* <Home /> */}
              {/* <Test /> */}
              <About />
              <Roadmap2 />
              <Showcase />
              <Team2 />
              <Faq />
              <Footer />
              <ScrollToTop />
              
      </ThemeProvider>
    </>
  );
}

export default App;
