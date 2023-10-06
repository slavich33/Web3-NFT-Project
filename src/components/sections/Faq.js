import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Section = styled.section`
min-height: 100vh;
width: auto;
height: 100vh;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color: ${props => props.theme.body};

/* margin: 1rem auto; */
border-bottom: 2px solid ${(props) => props.theme.body};
width: fit-content;

@media (max-width:48em) {
  font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
/* background-color: aqua; */

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width:64em) {
  width: 80%;
}
@media (max-width:48em) {
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

       margin-top: 0;
    }   

  }
}
`
const Box = styled.div`
width: 45%;

@media (max-width:64em) {
  width: 45%;
  /* align-self: center; */
}
@media (max-width:48em) {
  width: 90%;
  align-self: center;
}

`

const Faq = () => {

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end: 'bottom top',
      pin: true,
      pinSpacing: false,
      scrub:true,
      // markers:true,
    })
  
    return () => {
      ScrollTrigger.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>
      <Container>
    <Box>
      <Accordion title=" Hey birch" children="">
      Yo boy, i am not scared
        </Accordion>
        <Accordion title="WHAT IS THE FUSION PROCESS?" children="">
      Yo boy, i am not scared
        </Accordion>
        <Accordion title=" WHAT ARE THE NFT CLUB" children="">
      Yo boy, i am not scared
        </Accordion>
    </Box>
    <Box>
    <Accordion title=" Hey deeemons" children="Ya boy, it's me">
    {/* WHY DO WE NEED ROYALTIES? */}
        </Accordion>
        <Accordion title=" WHY DO WE NEED ROYALTIES?" children="Ya boy, it's me">
        </Accordion>
        <Accordion title=" HOW CAN I USE MY NFT?" children="Ya boy, it's me">
        </Accordion>
    </Box>
      </Container>
    </Section>
  )
}

export default Faq