import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import Carousel from "../Carousel";
import { dark, light } from "../../styles/Themes";
import useIntersectionObserver from "../IntersectionObserver";
import { useInView, InView } from "react-intersection-observer";
import MyComponent from "./MyComponent";

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */
  min-height: 120vh;
  display: flex;
  justify-content: left;
  align-items: center;
  /* background: transparent; */
background-color: ${props => `rgba(${props.theme.bodyRgba} ,1)`};
/* backdrop-filter: blur(2px); */

  @media (max-width: 70em) {
    width: 85%;
    justify-content: center;
  align-items: center;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > *:last-child {
      width: 80%;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

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
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* background-color: ${(props) => props.theme.text}; */
  /* color: ${(props) => props.theme.body}; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .show {
    /* opacity: 0; */
    transition: all 1.5s;
    transform: translateX(0);
    /* filter: blur(5px); */
  }
  .hidden {
    opacity: 0;
    transition: none;
    filter: blur(5px);
    transform: translateX(-100%);
  }
  .show:nth-child(1) {
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
  }

  @media (prefers-reduced-motion) {
    .show {
      transition: none;
    }
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 90%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  margin: 0 auto;
  /* text-shadow: 0 0 5px #74a3c8, 0 0 8px #FFF, 0 0 10px #FFF;  */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  left: 5%;
  z-index: 5;
  /* text-shadow: 0 0 5px #74a3c8, 0 0 8px #FFF, 0 0 10px #FFF; */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.text}, 0.6)`};
  align-self: flex-start;
  width: 90%;
  margin: 1rem auto;
  font-weight: 400;
  /* text-shadow: 0 0 5px #74a3c8, 0 0 8px #FFF, 0 0 10px #FFF; */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;
const Image = styled.img`

position: relative;
    right: -1.95em;
    width: 100%;
    max-width: none;
    margin-top: -8.6em;
    margin-right: 1px;
    margin-bottom: -4.5em;
    padding-top: 0px;
    padding-bottom: 0px;
   
    object-fit: fixed;
    
    object-position: 0% 100%;


@media (max-width: 64em) {
  width: 43vw;
}

 @media (max-width: 40em) {
  width:40vw;
  
  
 }



`;

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    // rootMargin: '0px 0px ',
    threshold: 0,
  });

  return (
    <Section id="about">
      <Container>
        {/* <Box
          ref={ref}
          className={`transition-opacity ${inView ? "show" : "hidden"}`}
        > */}
          {/* {" "}
          <Carousel /> */}
          {/* <Image
            src="https://uploads-ssl.webflow.com/62753f446b05b65b4329712c/62cf3483f9449c61044ad426_Banner-RgenesisCollection-07-13.png"
            // loading="lazy"
            // style="opacity: 1;"
            srcset="https://uploads-ssl.webflow.com/62753f446b05b65b4329712c/62cf3483f9449c61044ad426_Banner-RgenesisCollection-07-13-p-500.png 500w, https://uploads-ssl.webflow.com/62753f446b05b65b4329712c/62cf3483f9449c61044ad426_Banner-RgenesisCollection-07-13-p-800.png 800w, https://uploads-ssl.webflow.com/62753f446b05b65b4329712c/62cf3483f9449c61044ad426_Banner-RgenesisCollection-07-13.png 1204w"
            // sizes="(max-width: 767px) 100vw, (max-width: 991px) 63vw, 50vw"
            alt=""
            // class="collection__decor-img"
          ></Image> */}
        {/* </Box> */}
        {/* <MyComponent />  */}
        
        <Box>
          
          <Title
            ref={ref}
            className={`transition-opacity ${inView ? "show" : "hidden"}`}
          >
            Welcome To The <br /> NFT Club
          </Title>

          <SubText
            ref={ref}
            className={`transition-opacity ${inView ? "show" : "hidden"}`}
          >
            The NFT CLub is a private collection of NFTs—unique digital
            collectibles. The Weirdos are stored as ERC-721 tokens on the
            Ethereum blockchain and hosted on IPFS.
          </SubText>
          <SubTextLight
            ref={ref}
            className={`transition-opacity ${inView ? "show" : "hidden"}`}
          >
            With more than 200+ hand drawn traits, each NFT is unique and comes
            with a membership to an exclusive group of successful investors.
            Join an ambitious ever-growing community with multiple benefits and
            utilities.
          </SubTextLight>
          <ButtonContainer
            ref={ref}
            className={`transition-opacity ${inView ? "show" : "hidden"}`}
          >
            <ThemeProvider theme={light}>
              <Button text="JOIN OUR DISCORD" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
