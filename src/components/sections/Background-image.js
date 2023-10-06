import React from 'react';
import styled from 'styled-components';
// import StyledSection from './StyledSection';
import Home from './Home-copy';
import Navigation from '../Navigation';
import Back from '../../assets/back.png'


const StyledSection = styled.section`
  background-image: url(${Back});
  background-attachment: fixed;
  background-size: cover;
  /* display: flex; */
    /* background-position: calc(40vw) 160px; */
    /* position: relative; */
    width: 100%;
    height: 100%;
`;

const MyBackground = () => {
  return (
    <StyledSection>
        <Navigation />
        <Home/>
      
    </StyledSection>
  );
};

export default MyBackground
