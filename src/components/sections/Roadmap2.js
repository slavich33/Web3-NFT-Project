// import { PropTween } from 'gsap/gsap-core'
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import DrawSvg from "../DrawSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import MyComponent from "./MyComponent";

const Section = styled.section`
  padding-bottom: 100px;
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  margin: 0 auto;
  background: radial-gradient(ellipse at -36% -36%, pink, slateblue);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .show {
    /* opacity: 0; */
    transition: all 1.5s;
    transform: translateX(10);
    /* filter: blur(5px); */
    /* animation: slam-animation 1s ease ; */
  }
  .hidden {
    opacity: 0;
    transition: none;
    filter: blur(2px);
    transition: all 1.5s;
    /* transform: translate(5%); */
  }
  @keyframes slam-animation {
    0% {
      opacity: 0;
      -webkit-transform: scale(3);
      transform: scale(3);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  /* .show:nth-child(1) {
    transition-delay: 200ms;
  }
  .show:nth-child(2) {
    transition-delay: 300ms;
  }
  .show:nth-child(3) {
    transition-delay: 500ms;
  }
  .show:nth-child(4) {
    transition-delay: 700ms;
  } */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  /* position: absolute;
top: 1rem;
left: 5%;
z-index: 5; */

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;

  overflow: hidden;

  /* height: 220vh; */
  top: 0.1px;
  /* width: 70%; */

  /* @media (max-width: 64em) {
  width: 80%;

}
@media (max-width: 48em) {
  width: 90%;

}  */
`;

const SvgContainer = styled.div`
  /* display: flex; */
  /* justify-content: flex-start; */
  /* align-items: top; */

  /* transform: scale(-1, 1); */
  /* -webkit-transform-origin: center center; */
  /* transform-origin: center center; */
  /* transform: scale(-1, 1); */
  /* rotate: 90deg; */
  /* margin-top: -20rem; */
  display: flex;
justify-content: center;
align-items: center;
`;
// const Items = styled.ul`
// list-style: none;
// width: 100%;
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// /* background-color: lightblue; */

// @media (max-width: 48em) {
//   width: 90%;
// }

// &>*:nth-of-type(2n+1){
//   justify-content: start;

//   @media (max-width: 48em) {
//     justify-content: center;
//   }

//   div{
//     border-radius: 50px 0 50px 0;
//     text-align: right;

//     @media (max-width: 48em) {
//         border-radius: 0 50px 0 50px;
//         text-align: left;
//     p{
//       border-radius: 0 40px 0 40px;
//   }
//       }
//   }
//   p{
//     border-radius: 40px 0 40px 0;
//   }
// }
// &>*:nth-of-type(2n){
//   justify-content: end;

//       @media (max-width: 48em) {
//         justify-content: center;
//       }

//   div{
//     border-radius: 0 50px 0 50px;
//     text-align: left;

//   }
//   p{
//     border-radius: 0 40px 0 40px;
//   }
// }
// `
// const Items = styled.ul`
// position: absolute;
//  left: 30%;

// position: absolute;
// list-style: none;
// left: 5%;
// width: 65%;
// padding-left: 30%;
// min-height: 100vh;
// display: flex;
// flex-direction: ;
// justify-content: flex-start;
// align-items: center;
// background-color: lightblue;

// @media (max-width: 48em) {
//   width: 90%;
// }

// &>*:nth-of-type(2n+1){
//   justify-content: start;

//   @media (max-width: 48em) {
//     justify-content: center;
//   }

//   div{
//     border-radius: 50px 0 50px 0;
//     text-align: right;

//     @media (max-width: 48em) {
//         border-radius: 0 50px 0 50px;
//         text-align: left;
//     p{
//       border-radius: 0 40px 0 40px;
//   }
//       }
//   }
//   p{
//     border-radius: 40px 0 40px 0;
//   }
// }
// &>*:nth-of-type(2n){
//   justify-content: end;

//       @media (max-width: 48em) {
//         justify-content: center;
//       }

//   div{
//     border-radius: 0 50px 0 50px;
//     margin: 0 20rem;
//     text-align: left;

//   }
//   p{
//     border-radius: 0 40px 0 40px;
//   }
// }
// `

const Left = styled.div`
  min-width: 65%;
  background-color: gainsboro;
  min-height: 100vh;
  z-index: 5;

  display: flex-start;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    display: flex-start;
    min-width: 100%;
  }

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;
const Right = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 48em) {
    padding-left: 0%;
    left: 25%;
  }
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Item = styled(motion.div)`
  /* position: absolute; */
  /* left: 35%; */
  min-height: 100vh;
  width: 100%;
  height: 100%;
  /* display: inline-block; */
  display: flex;
  padding: 0 8rem;
  /* margin-right: 5rem; */
  justify-content: flex-start;
  align-items: center;

  /* /* position: absolute; */
  min-height: 100vh;
  @media (max-width: 48em) {
    /* left: 35%; */
    /* width: 20rem; 
height: 100%; 
margin-right: 20rem; */

  padding: 0 0rem;
  }

  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .element-wrapper {
  }

  /* @media (max-width: 48em) {
  justify-content: flex-end !important;
} */
`;
const ItemContainer = styled.div`
  width: 100%;  
  /* height: fit-content; */
  position: relative;
justify-content: center;
  align-items: center; 
  padding: 5rem;
  /* height: 100%; */
  /* border: 1px solid ${(props) => props.theme.text}; */
  /* border-radius: 40% 60% 73% 30% / 40% 50% 60% 50%; */
  /* border-radius: 52% 60% 70% 80%  /  55% 75% 57% 60%; */
  /* animation: morph 3s linear infinite; */
  /* filter: drop-shadow(0 0 0.03vmin Thistle) ; */
  /* drop-shadow:(0.02vmin -0.09vmin 0.04vmin hotpink); */
  /* border-radius: ${(props) => props.radius}; */
  display: flex;

  :hover {
    /* animation: ${rotate} 6s linear infinite reverse; */
  }

  @media (max-width: 48em) {
    width: 30%;
  }
`;

const Box = styled(motion.div)`
  /* height: fit-content; */
  /* background-color: ${(props) => props.theme.carouselColor}; */
  color: ${(props) => props.theme.text};
  /* padding: 4.5rem; */
  position: relative;
 
   width: 20rem; 
  /* height: 20rem;  */
  /* overflow: visible; */
  /* height: 100%; */
  /* border: transparent; */
  /* display: flex; */
  align-items: center; 
  /* justify-content: space-around;  */
  /* border-radius: ${(props) => props.radius}; */
  content: "";
  /* background: radial-gradient(circle at -16% -16%, lightblue, slateblue); */

  /* animation: ${(props) => props.animation}; */

  :hover {
    /* background: radial-gradient(circle at -16% -16%, pink, slateblue); */
    content: "";
  }

  @media (max-width: 48em) {
    /* padding: 4rem; */
    width: 25rem; 
  }

  @keyframes morph {
    0%,
    100% {
      border-radius: 52% 60% 70% 80% / 55% 75% 57% 60%;
    }
    10% {
      border-radius: 30% 50% 45% 60% / 45% 50% 60% 75%;
    }
    34% {
      border-radius: 40% 53% 55% 55% / 45% 45% 50% 50%;
    }
    48% {
      border-radius: 55% 53% 60% 60% / 60% 70% 70% 60%;
    }
    57% {
      border-radius: 60% 65% 65% 65% / 85% 70% 60% 60%;
    }
    /* 50% {
        transform:scale(1) translate(0,0);
  }
  75%{    
    transform:scale(0.5) translate(50%,50%);
  } */
    70% {
      border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
    }
    80% {
      border-radius: 70% 50% 53% 67% / 56% 69% 51% 74%;
    }
    88% {
      border-radius: 85% 73% 80% 80% / 60% 70% 70% 60%;
    }
    100% {
      border-radius: 52% 60% 70% 80% / 55% 75% 57% 60%;
    }
  }

  @keyframes morph1 {
    0%,
    100% {
      border-radius: 50% 50% 46% 70% / 45% 55% 48% 63%;
    }
    15% {
      border-radius: 40% 46% 40% 60% / 45% 60% 45% 65%;
    }
    34% {
      border-radius: 50% 60% 50% 50% / 45% 45% 50% 50%;
      /* box-shadow: 0 -0.05vmin 0.03vmin hotpink inset; */
      /* -0.1vmin -0.2vmin 0.4vmin MediumPurple inset; */
    }
    48% {
      border-radius: 55% 53% 60% 60% / 50% 70% 70% 60%;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
    }
    57% {
      border-radius: 70% 65% 65% 65% / 85% 70% 60% 60%;
      /* box-shadow: 0 4vmin 16vmin hotpink inset, 0 2vmin 5vmin LightPink inset, 0 4vmin 4vmin MediumPurple inset,
			0 6vmin 8vmin purple inset; */
    }

    80% {
      border-radius: 50% 50% 53% 47% / 46% 69% 51% 74%;
    }
    88% {
      border-radius: 85% 73% 80% 80% / 50% 70% 70% 60%;
      box-shadow: 0.1vmin 0.1vmin 0.21vmin MediumPurple inset;
      /* 0.2vmin -0.2vmin 0.3vmin MediumPurple inset ;*/
    }
    100% {
      /* box-shadow: 0 -2vmin 4vmin LightPink inset, 0 -4vmin 4vmin MediumPurple inset,
			0 -2vmin 7vmin purple inset; */
    }
  }

  @keyframes morph2 {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
    }

    10% {
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }

    20% {
      border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    30% {
      border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
    }

    40% {
      border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
    }

    50% {
      border-radius: 100%;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
    }

    90% {
      border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
    }
  }

  @keyframes morph3 {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 33% 52% 48% 70%;
    }

    10% {
      border-radius: 50% 50% 30% 50% / 45% 50% 30% 75%;
    }

    20% {
      border-radius: 67% 33% 47% 53% / 37% 30% 80% 63%;
    }

    30% {
      border-radius: 49% 61% 47% 53% / 47% 40% 60% 63%;
    }

    40% {
      border-radius: 49% 61% 52% 38% / 54% 40% 60% 26%;
    }

    50% {
      border-radius: 100%;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 52% 69% 41% 38%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 36% 32% 58% 74%;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 46% 69% 41% 74%;
    }

    90% {
      border-radius: 30% 80% 30% 80% / 40% 80% 40% 80%;
    }
  }

  @keyframes morph4 {
    0%,
    100% {
      border-radius: 48% 57% 45% 60% / 43% 52% 38% 60%;
    }

    10% {
      border-radius: 50% 45% 40% 50% / 45% 55% 39% 65%;
    }

    20% {
      border-radius: 67% 43% 57% 48% / 57% 50% 70% 63%;
    }

    30% {
      border-radius: 49% 61% 47% 53% / 47% 40% 60% 63%;
    }

    40% {
      border-radius: 49% 61% 52% 38% / 54% 40% 60% 26%;
    }

    50% {
      border-radius: 80%;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 52% 69% 41% 38%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 36% 32% 58% 74%;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 46% 69% 41% 74%;
    }

    90% {
      border-radius: 30% 80% 30% 80% / 40% 80% 40% 80%;
    }
  }
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef, radius, animation }) => {
  // * Part with a motion * //
  // const boxVariant = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  //   hidden: { opacity: 0, scale: 0 }
  // };

  // const control = useAnimation();
  // const [ref, inView] = useInView(
  //   {
  //       triggerOnce: false,
  //       rootMargin: '50px 0px',
  //       threshold: 0,
  //     }
  // );

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);
  // * Part with a motion * //

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-30%",
    threshold: 0,
  });
  return (
    <Item ref={addToRef} className="panel">
      <ItemContainer
        ref={ref}
        // radius={radius}
        // animate={control}
        // variants={boxVariant}
        className={` ${inView ? "show " : "hidden "} `}
      >
        <Box
          radius={radius}
          animation={animation}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Blobs = styled.div`
  .blobs {
    /* filter:url('#goo'); */
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  $dist-x: 50%;
  $dist-y: 50%;
  @keyframes blob-left-top-anim {
    0% {
      transform: scale(1) translate(0, 0);
    }
    25% {
      transform: scale(0.5) translate(-$dist-x, -$dist-y);
    }
    50% {
      transform: scale(1) translate(0, 0);
    }
    75% {
      transform: scale(0.5) translate($dist-x, $dist-y);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes blob-right-top-anim {
    0% {
      transform: scale(1) translate(0, 0);
    }
    35% {
      transform: scale(0.5) translate(0, -$dist-y);
    }
    50% {
      transform: scale(1) translate(0, 0);
    }
    85% {
      transform: scale(0.5) translate(0, $dist-y);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }
  @keyframes blob-left-bottom-anim {
    0% {
      transform: scale(1) translate(0, 0);
    }
    25% {
      transform: scale(0.5) translate(-$dist-x, 0);
    }
    50% {
      transform: scale(1) translate(0, 0);
    }
    75% {
      transform: scale(0.5) translate($dist-x, 0);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes blob-right-bottom-anim {
    0% {
      transform: scale(1) translate(0, 0);
    }
    25% {
      transform: scale(0.5) translate($dist-x, -$dist-y);
    }
    50% {
      transform: scale(1) translate(0, 0);
    }
    75% {
      transform: scale(0.5) translate(-$dist-x, $dist-y);
    }
    100% {
      transform: scale(1) translate(0, 0);
    }
  }
  .blob {
    position: absolute;
    background: #e97b7a;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 200px;
    line-height: 1;
    text-align: center;
    color: white;
    font-size: 40px;
    border-radius: 100%;
    margin-top: -50px;
    margin-left: -50px;
    animation: blob-left-top-anim cubic-bezier(0.77, 0, 0.175, 1) 3s infinite;
    &:nth-child(2) {
      animation-name: blob-right-top-anim;
    }
    &:nth-child(3) {
      animation-name: blob-left-bottom-anim;
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-name: blob-right-bottom-anim;
      animation-delay: 0.4s;
    }
    &:nth-child(5) {
      animation: none;
      font-size: 26px;
      position: relative;
      &:before {
        content: "Content goes here";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -65%);
      }
    }
  }
`;

const Roadmap = () => {
  
  const revealRefs = useRef([]);
  revealRefs.current = [];
  // gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if(el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  }

  // useEffect(() => {

  // var windowWidth = window.innerWidth;

  // var horLength = document.querySelector(".element-wrapper").scrollWidth;

  // var distFromTop = document.querySelector(".horizontal-section").offsetTop;

  // var scrollDistance = distFromTop + horLength - windowWidth;

  // document.querySelector(".horizontal-section").style.height = horLength + "px";

  // window.onscroll = function(){
  //   var scrollTop = window.scrollY;

  //   if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
  //     document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
  //   }

  // }

  // });

  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  //   rootMargin: '-150px ',
  //   threshold: 0,
  // });

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let sections = gsap.utils.toArray(".panel");

  //   gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       start: "top top",
  //       pin: "#roadmap",
  //       scrub: 1,
  //       pinSpacing: true,
  //       end: 'bottom top',
  //       // end: ".panel2",
  //       // snap: 1 / (sections.length - 1),
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       // end: "+=3000",
  //       markers: true,
  //     },
      
  //   });

  //     //  ScrollTrigger.kill()
  //   // ScrollTrigger.refresh()
  // });

  useLayoutEffect(() => {
    
    let sections = gsap.utils.toArray(".panel");
    let duration = 10,
        sectionIncrement = duration / (sections.length - 1),
        t1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".container",
            start: "top top",
            pin: "#roadmap",
            scrub: 1,
            pinSpacing: true,
            end: 'bottom',
            // end: ".panel2",
            // snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            // end: "+=3000",
            markers: true,
          },
        });

        t1.to(sections, {
          xPercent: -100 * (sections.length - 1),
          duration: duration,
          ease: "none"
        });
    
    
    // revealRefs.current.forEach((el, index) => {
  
    //   t1.fromTo(
    //     el.childNodes[0],
    //     {
    //       y: '-10%'
    //     }, 
    //     {
    //       y:'-30%',
  
    //       scrollTrigger:{
    //         id: `section-${index + 1}`,
    //         trigger: el,
    //         // start: 'top center+=200px',
    //         // end:'bottom center',
    //         start: () => "top -" + window.innerHeight * index,
    //         end: () => "+=" + window.innerHeight,
    //         scrub:true,
    //         markers:true,
    //       }
    //     }
    //   )
  
    // })
  
  
    return () => {
      
    };
  }, [])

  return (
    <Section id="roadmap" className=" container ">
      <Container className="">
        {/* <Left className="panel">
          <Title>Roadmap</Title>
          <p>
            Tempor esse velit dolore culpa enim sunt mollit fugiat incididunt
            exercitation. Esse officia nisi nostrud et aliquip culpa irure sint.
            Veniam labore exercitation proident exercitation quis ex enim dolor
            magna est. Dolor dolore exercitation eu excepteur do anim elit anim
            non. Irure exercitation eiusmod labore exercitation consequat
            consequat proident. Anim nulla amet mollit est. Nisi velit anim
            Lorem amet duis deserunt fugiat consequat nostrud.
          </p>
        </Left> */}
        {/* <SvgContainer className="">
          <DrawSvg />
        </SvgContainer> */}
        <Right className="">
        
        {/* <SvgContainer className="">
          <DrawSvg className=""/>
        </SvgContainer> */}
          
          {/* <Items > */}
          <Item>&nbsp;</Item>
          {/* <MyComponent className="panel"/> */}
          <RoadMapItem
          addToRef={addToRefs}
            radius="48% 57% 45% 60% / 43% 52% 38% 60%"
            animation={"morph4 7s  infinite"}
            // addToRef={ref}
            title="Great Benefits"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
          addToRef={addToRefs}
            radius="52% 60% 70% 80%  /  55% 75% 57% 60%"
            animation={"morph 8s  infinite"}
            // addToRef={ref}
            title="Grand Opening"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />
          <RoadMapItem
          addToRef={addToRefs}
            radius="40% 60% 70% 30% / 40% 40% 60% 50%"
            animation={"morph1 10s infinite"}
            // addToRef={""}
            title="Early Access"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />

          <RoadMapItem
          addToRef={addToRefs}
            radius="30% 70% 70% 30% / 30% 52% 48% 70%"
            animation={"morph2 12s infinite"}
            // addToRef={ref}
            title="New Merch"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />

          <RoadMapItem
          addToRef={addToRefs}
            radius="30% 70% 70% 30% / 33% 52% 48% 70%"
            animation={"morph3 12s infinite"}
            // addToRef={ref}
            title="New Merch"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          />

          {/* <RoadMapItem
          addToRef={addToRefs}
            radius="48% 57% 45% 60% / 43% 52% 38% 60%"
            animation={"morph4 14s infinite"}
            // addToRef={ref}
            title="New Holder"
            subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat."
          /> */}

          {/* </Items> */}
        </Right>
      </Container>
    </Section>
  );
};

export default Roadmap;
