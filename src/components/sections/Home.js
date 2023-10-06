import React from 'react'
import styled, { keyframes } from 'styled-components'
import CoverVideo from '../CoverVideo'
import TypeWriterText from '../TypeWriterText'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'
import Back from '../../assets/back.png'



const Section = styled.section`
min-height: ${props => 'calc(100vh - ${props.theme.navHeight})' };
width: 100vw;
position: relative;
/* background-color: ${props => props.theme.body}; */
/* background-image: url(${Back}); */
`

const Container = styled.div`
width: 85vw;
min-height: 100vh;
margin: auto;
/* background-color: lightblue; */


display: flex;
justify-content: center;
/* align-items: center; */
/* top: 10px; */

@media (max-width: 64em) {
  width: 85%;
    font-size: ${props => props.theme.fontmd};
}
@media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    &>*:first-child{
      width: 100%;
      margin-top: 2rem;
    }
}
`

const Box = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: auto;

`
const RightBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: space-between; */
margin-top: 100px;
border-style: solid none solid solid;
border-width: 2px;
border-color: rgb(0,0,0);
min-height: 60vh;
width: 50%;

position: relative;
    z-index: 2;
    height: 100%;

    @media (max-width: 64em) {
  width: 65%;
    font-size: ${props => props.theme.fontmd};
}
@media (max-width: 48em) {
   min-height: auto;
}
`
const HeaderRight = styled.div`
font-size: ${props => props.theme.fontmd};
width: 50%;
display: flex;
height: 3em ;
justify-content: center;
`
const LeftBox = styled.div`
border: 2px solid bisque ;
margin-top: 100px;
min-height: 60vh;
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 64em) {
  width: 85%;
    font-size: ${props => props.theme.fontmd};
}

@media (max-width: 48em) {
   min-height: auto;
}
`

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`


const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;

img{
  width: 100%;
  height: auto;
  animation: ${rotate} 6s linear infinite reverse;
}

@media (max-width: 64em) {
  width: 4rem;
  height: 4rem;
  left: none;
  right: 2rem;
  bottom: 100%;
}

@media (max-width: 48em) {
  right: 1rem;
}
`



const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size: ${props => props.theme.fontxl};

@media (max-width: 64em) {
  width: 2rem;
  height: 2rem;
  font-size: ${props => props.theme.fontlg};
}
`

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <RightBox>
          <HeaderRight>Hey there</HeaderRight>
        <Box>  <TypeWriterText>text</TypeWriterText> </Box>
        </RightBox>
        <LeftBox>
        <Box> <CoverVideo>video</CoverVideo>  </Box>
        </LeftBox>
        {/* <Round> */}
          {/* <Circle>  */}
            {/* &#x2193;   Arrow hex code */}
          {/* </Circle> */}
          {/* <img src={RoundTextBlack} alt="NFT" /> */}
        {/* </Round> */}
      </Container>
      </Section>
  )
}

export default Home