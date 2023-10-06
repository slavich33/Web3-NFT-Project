import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Logo from './Logo'

import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.body};
position: relative;
color: ${(props) => props.theme.text};;

display: flex;
/* justify-content: center;
align-items: center; */
flex-direction: column;
`
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${(props) => props.theme.text};

@media (max-width:48em) {
  width: 90%;
}
h1{
  font-size: ${props => props.theme.fontxxxl };
}
`

const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width:48em) {
  width: 100%;
}
`

const IconList = styled.div`
/* display: flex;
align-items: center;
margin: 1rem auto;

&>*{
  padding-right: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
} */

display: grid;
grid-auto-flow: column;
grid-auto-columns: auto;
grid-template-columns: auto auto;
grid-template-rows: auto;
grid-column-gap: 16px;
grid-row-gap: 16px;
align-items: center;
/* margin-right: 1rem; */
transform: scale(0.8);


.post {
	display: flex;
	text-decoration: none;
	color: inherit;
	/* max-width: 120px; */
	position: relative;
	padding: 0.1rem;
	/* box-shadow: inset 0 0 0 1.8px #000, inset -1.5px -1.5px 0 3px #CCC; */
	/* background-color: transparent; */
	border-radius: 50% 50% 50% 50%;
	/* background-color: #000; */
	cursor: pointer; 
	border: 2px solid black;

	 
	&:before {
		position: absolute; 
		left: 0;
		bottom: 0;
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background-color: #000;
		border-radius: 50% 50% 50% 50%;
		/* For blur */
		/* background-color: #FFF; */

		/* transform-origin: 0 center 0; */
		transform: scaleX(0);
		
		transition: left ease-out 0.155s; 
		
	}
	
	&:hover {
		.post-title {
			fill: #FFF;
			/* For blur
			color: #000; */
		}
		.open{
			fill: #FFF;
		}
		&:before {
			transform: scaleX(1);
			/* transition:  left  ease-out;  */
		}
	}
}


.post-title {
	
	position: relative;
	font-size: ${props => props.theme.fontmd};
	/* transition:  ease; */
	display: block;
	transform: scale(0.9);
	/* fill: white; */
	/* padding-right: 0.5rem;  */

}
.open{
	/* transform: scale(1.12); */
	
}

&>*{
  transition: all 0.2s ease-in;
&:before{
	/* transition: all 0.35s ease; */
}
  
  &:hover {
    transform: scale(1.2);
  }
}
`


const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-template-rows: repeat(3,1fr);
grid-gap: 1rem;

@media (max-width:48em) {
  display: none;
}
`

const Item = styled.li`
/* width: fit-content; */
/* cursor: pointer; */

/* &::after{
	content: ' ';
	display: block;
	width: 0%;
	height: 2px;
	background: ${props => props.theme.text};
	transition:  width 0.3s ease;
}
&:hover::after{
	width: 100%;
} */

margin: 0 0.1rem;
padding: 0 0.1rem;
/* color: ${props => props.theme.text};  */
/* cursor: pointer; */

	
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	
	/* text-shadow: 0 0 3px #FFF; */
	/* Nice blur effect */
	/* backdrop-filter: blur(1px); */
	/* color: transparent;
    text-shadow: 0 0 3px #000; */
// End Codepen spesific styling

.item-box {
	display: flex;
	text-decoration: none;
	/* left: 0; */
  height: 2px;
	max-width: 120px;
	position: relative;
	padding: 0.6rem;
	/* box-shadow: inset 0 0 0 1.3px #000, inset -1.2px -1.2px 0 2px #CCC; */
	/* background-color: #FFF; */
	/* border: 2px solid   ${props => props.theme.text}; */
	/* border-radius: 1.5rem; */
	cursor: pointer; 
	
	
	
	&:before {
		position: absolute; 
		left: 0;
		bottom: 0;
    top: 0;
    right: 0;
		content: "";
		/* display: block;
		width: 100%;
		height: 100%; */
		background-color: #000;
		/* border-radius: 1.5rem; */
		/* box-shadow: inset 0 0 0 -1.3px #fff, inset -1.2px -1.2px 0 -2px #fff; */
		/* For blur */
		/* background-color: #FFF; */

		
		transform:  scaleX(0);
		transform-origin: 100% 50%; 
		transition:  .4s ease-in;
		/*  */

		/* transform: scaleX(0);
		transform-origin: 100% 50%;
		transition: .35s ease-in; */
	}
	

	
	
	&:hover {
		
		.item-title {
			color: #FFF;
			/* color: #76a5cd; */
			/* text-shadow: 0 0 3px #FFF; */
			/* For blur
			color: #000; */

		}
		
		&:before {
			transform: scale(1);
			/* transform-origin: 50% 0%; */
			transition:  all .4s ease; 
			/* transform: scale(0.9); */

		
		}
		&:after{
			/* padding: 0.3rem; */
			/* transform: scaleX(0);
			transform-origin: 100% 50%;
			transition: left .3s ease-out;  */
			/* transform: translate(-50%, -50%) scale(1); */
		}
		
	}
	

}

.item-title {
	
	position: relative;
	font-size: 0.2rem;
	font-size: ${props => props.theme.fontmd};
	font-weight: 2;
	line-height: 0.1;
	transition: .4s ease-out;
	display: block;
	/* width: 0%; */
	/* height: 2px; */
	/* border: #FFF; */
	transform: scale(0.9);
}

@media (max-width: 64em) {
 	margin: 1rem 0;

 	&::after{
 		display: none;
 	}

 }
 &>*{
  transition: all 0.2s ease-in;
&:before{
	 transition: all 0.2s ease; 
	/* transform-origin: 100% 50%; */
}
  
  &:hover {
    transform: scale(1.1);
	
  }
}
`

const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}
@media (max-width:48em) {
  flex-direction: column;
  width: 100%;

  span{
    /* margin-bottom: 1rem; */
  }
}
`

const Footer = () => {

  const scrollTo = (id) => {

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior:'smooth',
      block:'start',
      inline:'nearest'
    })
  }

  return (
    <Section>
      <Banner />
      <Container>

        <Left>
            <Logo />
            <IconList>
            <a className='post' href="http://facebook.com" target="blank" rel="noopener noreferrer" >
						<Facebook className="post-title"/>
					</a>
					<a className='post' href="http://twitter.com" target="blank" rel="noopener noreferrer" >
						<Twitter className="post-title"/>
					</a>
					<a className='post' href="http://linkedin.com" target="blank" rel="noopener noreferrer" >
					<LinkedIn className="post-title"/>
						</a>
              
            </IconList>
        </Left>
        <MenuItems>
        <Item onClick={() => scrollTo('home')}><a className='item-box'>
						<h2 className='item-title'>
						Home
						</h2>
					</a></Item>
				<Item onClick={() => scrollTo('about')}><a className='item-box'>
						<h2 className='item-title'>
						About
						</h2>
					</a></Item>
				<Item onClick={() => scrollTo('roadmap')}><a className='item-box'>
						<h2 className='item-title'>
						Roadmap
						</h2>
					</a></Item>
				<Item onClick={() => scrollTo('showcase')}><a className='item-box'>
						<h2 className='item-title'>
						Showcase
						</h2>
					</a></Item>
				<Item onClick={() => scrollTo('team')}><a className='item-box'>
						<h2 className='item-title'>
						Team
						</h2>
					</a></Item>
				<Item onClick={() => scrollTo('faq')}><a className='item-box'>
						<h2 className='item-title'>
						Faq
						</h2>
					</a></Item>
        </MenuItems>

      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} NFT Club. All rights reserved.
        </span>
        <span>
          Made with &#10084; by <a href="" target="_blank" rel="noopener noreferrer">
            Bitch
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer