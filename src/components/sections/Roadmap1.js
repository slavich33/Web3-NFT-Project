// import { PropTween } from 'gsap/gsap-core'
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import DrawSvg from '../DrawSvg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {motion} from 'framer-motion';



const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
margin: 0 auto;

overflow: hidden;
display: flex;
justify-content: flex-start;
align-items: flex-start;

`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: capitalize;
color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;

position: absolute;
top: 1rem;
left: 5%;
z-index: 5;

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
/* width: 50%;
height: 80vh;
background-color: ${(props) => props.theme.body};
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
position: relative;


@media (max-width: 64em) {
  width: 80%;

}
@media (max-width: 48em) {
  width: 90%;

} */
`

const SvgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
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
const Items = styled.ul`
/* position: absolute; */
 /* left: 30%;  */

/* position: absolute; */
/* list-style: none; */
/* left: 5%; */
/* width: 65%; */
/* padding-left: 30%; */
/* min-height: 100vh; */
/* display: flex; */
/* flex-direction: ; */
/* justify-content: flex-start; */
/* align-items: center; */
/* background-color: lightblue; */

/* @media (max-width: 48em) {
  width: 90%;
}

&>*:nth-of-type(2n+1){
  justify-content: start;

  @media (max-width: 48em) {
    justify-content: center;
  }

  div{
    border-radius: 50px 0 50px 0;
    text-align: right;

    @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;
    p{
      border-radius: 0 40px 0 40px;
  }
      }
  }
  p{
    border-radius: 40px 0 40px 0;
  }
}
&>*:nth-of-type(2n){
  justify-content: end;

      @media (max-width: 48em) {
        justify-content: center;
      }

  div{
    border-radius: 0 50px 0 50px;
    margin: 0 20rem;
    text-align: left;

    

  }
  p{
    border-radius: 0 40px 0 40px;
  }
} */
`

const Left = styled.div`
width: 35%;
background-color: gainsboro;
min-height: 100vh;
z-index: 5;

position: fixed;
left: 0;
display: flex;
justify-content: center;
align-items: center;

p{
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
}
`
const Right = styled.div`
position: absolute;
left: 35%;
min-height: 100vh;
padding-left: 30%;
/* width: 65%; */
display: flex;
justify-content: flex-start;
align-items: center;


`
const Item = styled(motion.div)`
/* position: absolute; */
/* left: 35%; */
/* min-height: 100vh; */
width: 20rem; 
/* height: 100%;  */
display: inline-block;
padding: 0 2rem;
margin-right: 6rem;
/* justify-content: flex-start; */
/* align-items: center; */

/* position: absolute;
left: 35%;
/* min-height: 100vh; */

/* width: 65%;
display: flex;
justify-content: flex-start;
align-items: center;  */

@media (max-width: 48em) {
  justify-content: flex-end !important;
}
`
const ItemContainer = styled.div`
 /* width: 40%;   */
/* height: fit-content; */
/* align-items: center;  */
/* padding: 1rem; */
border: 3px solid ${props => props.theme.text};

@media (max-width: 48em) {
  width: 70%;
} 

`

const Box = styled(motion.div)`
height: fit-content;
background-color: ${props => props.theme.carouselColor};
color: ${props => props.theme.text};
padding: 1rem;
position: relative;
border: 1px solid ${props => props.theme.text};


`

const SubTitle = styled.span`
display: block;
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
color: ${props => props.theme.text};

@media (max-width: 48em) {
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
}
`
const Text = styled.span`
display: block;
font-size: ${props => props.theme.fontsm};
text-transform: capitalize;
color: ${props => props.theme.text};

font-weight: 400;
margin: 0.5rem 0;

@media (max-width: 40em) {
  font-size: ${props => props.theme.fontxs};
  
}
`

const RoadMapItem = ({title, subtext, addToRef}) => {
  return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        
        >
          <SubTitle>{title}</SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  )
}

const Roadmap = () => {

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() =>{
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top top',
            end: pinWrapWidth,
            scroller: '.App', //locomotive element
            scrub: true,
            pin: true,
            markers: true,
          },
      // we have to increase scrolling height of this section same as the scrolling element width
      height: `${scrollingElement.scrollWidth}px`,
      ease: 'none',
        })

        // horizontal Scrolling
        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: 'top top',
            end: pinWrapWidth,
            scroller: '.App', //locomotive element
            scrub: true,
            
            markers: true,
          },
      // we have to increase scrolling height of this section same as the scrolling element width
      x: -pinWrapWidth,
      ease: 'none',
        })

ScrollTrigger.refresh()
    }, 1000);
  
    return () => {
      
    };
  }, [])

// const revealRefs = useRef([]);
// revealRefs.current = [];
// gsap.registerPlugin(ScrollTrigger);

// const addToRefs = (el) => {
//   if(el && !revealRefs.current.includes(el)) {
//     revealRefs.current.push(el);
//   }
// }

// useLayoutEffect(() => {
  
//   let t1 = gsap.timeline();
  
//   revealRefs.current.forEach((el, index) => {

//     t1.fromTo(
//       el.childNodes[0],
//       {
//         y: '0'
//       }, {
//         y:'-30%',

//         scrollTrigger:{
//           id: `section-${index + 1}`,
//           trigger: el,
//           start: 'top center+=200px',
//           end:'bottom center',
//           scrub:true,
//           // markers:true,
//         }
//       }
//     )

//   })


//   return () => {
    
//   };
// }, [])

  return (
    <Section id="roadmap" ref={ref}>
       <Left>
      <Title 
      data-scroll data-scroll-speed="-1"
      >Roadmap</Title>
      <p>
        Tempor esse velit dolore culpa enim sunt mollit fugiat incididunt exercitation. Esse officia nisi nostrud et aliquip culpa irure sint. Veniam labore exercitation proident exercitation quis ex enim dolor magna est. Dolor dolore exercitation eu excepteur do anim elit anim non. Irure exercitation eiusmod labore exercitation consequat consequat proident. Anim nulla amet mollit est. Nisi velit anim Lorem amet duis deserunt fugiat consequat nostrud.
      </p>
      </Left>
      <Right ref={horizontalRef}
      
      >
      {/* <Container> */}
        {/* <SvgContainer>
          <DrawSvg />
        </SvgContainer> */}
        {/* <Items > */}
          {/* <Item>&nbsp;</Item> */}
          
        <RoadMapItem 
        // addToRef={addToRefs} 
        title="Great Benefits" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        <RoadMapItem 
        // addToRef={addToRefs} 
        title="Grand Opening" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        <RoadMapItem 
        // addToRef={addToRefs} 
        title="Early Access" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        <RoadMapItem 
        // addToRef={addToRefs} 
        title="New Merch" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
         <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
         <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
         <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
         <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
         <RoadMapItem 
        // addToRef={addToRefs} 
        title="Holders Ranking" subtext="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        
        {/* </Items> */}
      {/* </Container> */}
      </Right>
    </Section>
  )
}

export default Roadmap