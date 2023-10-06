import React from 'react'
import styled from 'styled-components'
import download from '../../assets/Backgr.png'

import Navigation from "../../components/Navigation";
import Home from "../../components/sections/Home";
import About from "../../components/sections/About";
import About1 from "../../components/sections/About1";
import Roadmap from "../../components/sections/Roadmap";
import Roadmap1 from "../../components/sections/Roadmap1";
import Roadmap2 from "../../components/sections/Roadmap2";

import Showcase from "../../components/sections/Showcase";
import Team from "../../components/sections/Team";
import Faq from "../../components/sections/Faq";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


const Back = styled.div`


    background-attachment: fixed;
    background-image: url(${download});
    background-repeat: repeat;
    background-size: cover;
    /* font-family: Euclid; */
   
   
   /* min-height: 100vh; */
    display: flex;
    background-position: calc(40vw) 160px;
    position: relative;
    width: 100%;
    height: 100%;
`

const Background = () => {
  return (
    <Back className="back">
         <Home />
              <About />
              <Roadmap2 />
              <Showcase />
              <Team />
              <Faq />
              <Footer />
              <ScrollToTop />
    </Back>
        
   
  )
}

export default Background