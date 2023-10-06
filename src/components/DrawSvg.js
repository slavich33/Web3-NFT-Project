import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Vector from '../Icons/Vector';





const VectorContainer = styled.div`
position: absolute;
top: 0.5rem;
left: 50%;
transform: translateX(-50%);
width: 100%;
height: 100%;
overflow: hidden;
display: flex;
justify-content: flex-start;

svg{
    width: 100%;
    height: 100%;
    rotate: -90deg;
}

@media (max-width: 48em) {
  left: 1rem;
  
}
`

const Bounce = keyframes`
from{  transform: translateX(-50%) scale(0.5);}
to { transform: translateX(-50%) scale(1); }
`
const Ball = styled.div`
position: absolute;
top: 0;
left:50%;
transform: translateX(-50%);
width: 1.5rem;
height: 1.5rem;
border-radius:50%;
background-color: ${props => props.theme.text};
animation: ${Bounce} 0.5s linear infinite alternate;

@media (max-width: 48em) {
  left: 1rem;
  
}
`

const DrawSvg = () => {
const ref = useRef(null);
const ballRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);

useLayoutEffect(() => {
    let element = ref.current;
        


    let svg = document.getElementsByClassName("svg-path")[0];

    const length = svg.getTotalLength();
    
    // start position of svg drawing
    svg.style.strokeDasharray = length;

    // Hide svg before scrolling start
    svg.style.strokeDashoffset = length;


    let t1 = gsap.timeline({
        scrollTrigger:{
            trigger: element,
            start:"left center",
            end:"right center",
            onUpdate: (self) => {
                const draw = length * self.progress;

                //also reverse the drawing when scroll goues up

                svg.style.strokeDashoffset = length - draw;
            },
            onToggle: self => {
                if(self.isActive) {
                    // console.log("Scrolling is Active");
                    ballRef.current.style.display = 'none';
                } else {
                    // console.log("Scrolling is not Active");
                    ballRef.current.style.display = 'inline-block';
                }
            }
        }
         
    })

    // console.log(lenght);

    return () => {
        if(t1) t1.kill();
    };
}, [])


  return (
    <>
    <Ball ref={ballRef} />
    <VectorContainer ref={ref} className="">
        <Vector />
    </VectorContainer>
    </>
  )
}

export default DrawSvg