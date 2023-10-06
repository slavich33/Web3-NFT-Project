import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'

import img from "../../assets/Nfts/bighead.svg"
import img1 from "../../assets/Nfts/test1.svg"
import img2 from "../../assets/Nfts/test2.svg"
import img3 from "../../assets/Nfts/test3.svg"
import img4 from "../../assets/Nfts/test4.svg"
import img5 from "../../assets/Nfts/test5.svg"
import img6 from "../../assets/Nfts/test6.svg"
import img7 from "../../assets/Nfts/test7.svg"
import img8 from "../../assets/Nfts/test8.svg"
import img9 from "../../assets/Nfts/test9.svg"
import img10 from "../../assets/Nfts/test10.svg"
import ETH from "../../assets/icons8-ethereum-48.png"

const move = keyframes`
0%{ transform: translateX(100%)  }
100%{ transform: translateX(-100%)  }
`

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width:30em) {
    animation-duration: 15s;
  }
}

&>*:last-child{
  animation-duration: 15s;

  @media (max-width:30em) {
    animation-duration: 10s;
  }
}
`

const Row = styled.div`
/* background-color: lightblue; */
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};

`

const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width:48em) {
    width: 12rem;
  }
  @media (max-width:30em) {
    width: 10rem;
  }

img{
  width: 100%;
  height: auto;
}
`

const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};

border-bottom-left-radius:20px;
border-bottom-right-radius:20px;

span{
  font-size: ${props => props.theme.fontsm};
  color:${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight:600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight:600;
  
  @media (max-width:30em) {
    font-size: ${props => props.theme.fontsm};
  }
}
`

const Price = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

img{
  width: 1rem;
  height: auto;
}
`

const NftItem = ({img, number=0, price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
    <img src={img} alt="The Weirdos" />
    <Details>
      <div>
        <span>Win</span> <br />
        <h1>#{number}</h1>
      </div>
      <div>
       <span>Price</span>
       <Price>
        <img src={ETH} alt="ETH" />
       <h1>{Number(price).toFixed(1)}</h1>
       </Price>
       
      </div>
    </Details>
    </ImgContainer>
  )
}

const Showcase = () => {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} number={653} price={1.5} passRef = {Row1Ref} />
        <NftItem img={img2} number={234} price={1.2} passRef = {Row1Ref} />
        <NftItem img={img3} number={655} price={1.3} passRef = {Row1Ref} />
        <NftItem img={img4} number={637} price={1} passRef = {Row1Ref} />
        <NftItem img={img5} number={49} price={1.3} passRef = {Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
      <NftItem img={img6} number={23} price={1.3} passRef = {Row2Ref} />
      <NftItem img={img7} number={499} price={1.6} passRef = {Row2Ref} />
      <NftItem img={img8} number={912} price={1.2} passRef = {Row2Ref} />
      <NftItem img={img9} number={203} price={1.1} passRef = {Row2Ref} />
      <NftItem img={img10} number={333} price={1.09} passRef = {Row2Ref} />
      </Row>
      
    </Section>
  )
}

export default Showcase