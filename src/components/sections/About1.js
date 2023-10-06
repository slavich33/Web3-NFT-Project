import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Button from '../Button'
import Carousel from '../Carousel'
import {dark} from '../../styles/Themes'
import useIntersectionObserver from '../IntersectionObserver'
import { useInView, InView } from 'react-intersection-observer';
// import "../../locomotive-scroll.css"

import locomotiveScroll from "locomotive-scroll";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";


const Container = styled.div`

width: 75%;
margin: 0 auto;
min-height: 120vh;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;



@media (max-width: 70em) {
  width: 85%;
}

@media (max-width: 64em) {
  width: 100%;
flex-direction: column;

  &>*:last-child {
    width: 80%;
  }
}

@media (max-width: 40em) {
  

  &>*:last-child {
    width: 90%;
  }
}

`

const Box = styled.div`
width: 50%;
height: 100%;
min-height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 40em) {
  min-height: 50vh;
}
`

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
/* color: ${props => props.theme.body}; */
display: flex;
justify-content: center;
align-items: center;
position: relative;

/* .show{ */
    /* opacity: 0; */
    transition: all 1.5s;
    transform: translateX(0);
    /* filter: blur(5px); */
    
/* }
.hidden{
  opacity: 0;
    transition: none;
    filter: blur(5px);
    transform: translateX(-100%);
}
.show:nth-child(1){
  transition-delay: 200ms;
}
.show:nth-child(2){
  transition-delay: 300ms;
}
.show:nth-child(3){
  transition-delay: 500ms;
}
.show:nth-child(4){
  transition-delay: 700ms;
}

@media (prefers-reduced-motion) {
  .show{
    transition: none;
  }
} */
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
margin: 0 auto;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
}
@media (max-width: 40em) {
  font-size:  ${props => props.theme.fontxl};
}
@media (max-width: 30em) {
  font-size:  ${props => props.theme.fontlg};
}
`
const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;
/* left: 5%; */
z-index: 5;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size:  ${props => props.theme.fontmd};
}
@media (max-width: 40em) {
  font-size:  ${props => props.theme.fontmd};
}
@media (max-width: 30em) {
  font-size:  ${props => props.theme.fontsm};
}
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight: 400;

@media (max-width: 64em) {
  width: 100%;
  text-align: center;
  font-size:  ${props => props.theme.fontsm};
}
@media (max-width: 40em) {
  font-size:  ${props => props.theme.fontsm};
}
@media (max-width: 30em) {
  font-size:  ${props => props.theme.fontxs};
}
`
const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
display: flex;
align-self: flex-start;

@media (max-width: 64em) {
width: 100%;

  button {
    margin: 0 auto;
  }
}  
`

const About = () => {

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach( (entry) => {
  //   console.log(entry)
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //     });
  //     });
    
  //   const hiddenElements = document.querySelectorAll('.hidden');
  //   hiddenElements.forEach((el) => observer.observe(el));

  // const targets = useRef(new Set());

  // const [entries, setObservedNodes] = useIntersectionObserver({
  //   threshold: 1
  // });

  // useEffect(() => {
  //   setObservedNodes(() => ([...targets.current]));
  // }, [setObservedNodes]);

  // useEffect(() => {
  //   for (const entry of entries) {
  //     if (!entry.isIntersecting) {
  //       entry.target.classList.add('show');

  //       setObservedNodes(observedNodes => 
  //         observedNodes.filter(node => node !== entry.target)
  //       ); 
  //     } else {
        
  //               entry.target.classList.remove('show');
  //             }
  //     // }
  //   }
  // }, [entries, setObservedNodes]);

  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   // rootMargin: '0px 0px ',
  //   threshold:0,
  // });
  
  // const scrollRef = React.createRef();

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true
  //   });
  // });

  gsap.registerPlugin(ScrollTrigger)

//   const ref = useRef(null);
//   const horizontalRef = useRef(null);

//   useLayoutEffect(() => {
//     let element = ref.current;
//     let scrollingElement = horizontalRef.current;

//     let pinWrapWidth = scrollingElement.offsetWidth;

//     let t1 = gsap.timeline();

//     setTimeout(() =>{
//         t1.to(element, {
//           scrollTrigger: {
//             trigger: element,
//             start: 'top top',
//             end: pinWrapWidth,
//             scroller: '.App', //locomotive element
//             scrub: true,
//             pin: true,
//             markers: true,
//           },
//       // we have to increase scrolling height of this section same as the scrolling element width
//       height: `${scrollingElement.scrollWidth}px`,
//       ease: 'none',
//         })

//         // horizontal Scrolling
//         t1.to(scrollingElement, {
//           scrollTrigger: {
//             trigger: scrollingElement,
//             start: 'top top',
//             end: pinWrapWidth,
//             scroller: '.App', //locomotive element
//             scrub: true,
            
//             markers: true,
//           },
//       // we have to increase scrolling height of this section same as the scrolling element width
//       x: -pinWrapWidth,
//       ease: 'none',
//         })

// ScrollTrigger.refresh()
//     }, 1000);
  
//     return () => {
      
//     };
//   }, [])

  return (
    // <div data-scroll-section>
    <Section id="about"  
    // ref={scrollRef}
    
    >
        {/* <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}> */}
      <Container >
      
      <Box 
      // data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
      // className={`transition-opacity ${inView ? 'show' : 'hidden'}`}
      > 
      <Carousel /></Box>
      <Box > 
        <Title 
      // className={`transition-opacity ${inView ? 'show' : 'hidden'}`}
      >
        Welcome To The <br/> ........
        </Title>
        
   
    
        <SubText 
        // ref={}
      // className={`transition-opacity ${inView ? 'show' : 'hidden'}`}
      // data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
       >
        The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
        </SubText>
        <SubTextLight 
      // className={`transition-opacity ${inView ? 'show' : 'hidden'}`}
      >
        With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
        </SubTextLight>
      <ButtonContainer 
      // className={`transition-opacity ${inView ? 'show' : 'hidden'}`}
      >
      <ThemeProvider theme={dark}>
      <Button text="JOIN OUR DISCORD" link="#" />
      </ThemeProvider>
      </ButtonContainer>
      </Box>
      
      </Container>
      {/* </InView> */}
    </Section>
    // </div>
  )
}

export default About