import React, { useState } from 'react';
import styled from 'styled-components';
import Button, {NewButton} from './Button';
import Logo from './Logo';

import Facebook from '../Icons/Facebook'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'
import OpenSea from '../Icons/OpenSea';




const Section = styled.section`
width:85vw;
height: 80px;
/* background-color: ${props => props.theme.body}; */
/* background-color: grey; */
/* justify-content: space-between; */
display: flex;
margin: 0 auto;
`

const NavBar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;



width: 100%;
height: ${props => props.theme.navHeight};
/* margin: 0 auto; */

.mobile{
	display: none;
}

@media (max-width: 64em) {
	.desktop{
		display: none;
	}
	.mobile{
	display: inline-block;
}
}
`
const Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
list-style:none;
/* margin: 0 2rem; */
/* left: 0; */
/* padding-left: 20px; */

@media (max-width: 64em) {
	/* 1024px */
	position: fixed;
	top: ${props => props.theme.navHeight};
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: ${props => `calc(100vh - ${props.theme.navHeight})`};
	z-index:50;
	background-color: ${props => `rgba(${props.theme.bodyRgba} ,0.85)`};
	backdrop-filter: blur(2px);

	transform: ${props => props.click ? `translateY(0)` : `translateY(1000%)`};
	transition: all 0.3s ease;
	flex-direction: column;
	justify-content: center;

	touch-action:none;

}
`
const NavBtn = styled(NewButton)`
margin: 0 4rem;
padding-right: 20px;
right: 0%;

 .post{
	max-width: 320px;

	&:before {
	transform-origin: 0 top 0;
	}
}

.post-title{
	/* line-height: 2em; */
	/* font-size: 5em; */
} 
`
const MenuItem = styled.li`

margin: 0 0.1rem;
/* color: ${props => props.theme.text};  */
/* cursor: pointer; */

	/* position: relative; */
	/* top: 0; */
	left: 0;
	/* right: 0; */
	/* bottom: 0; */
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.01rem;

	/* Nice blur effect */
	/* backdrop-filter: blur(1px); */
	/* color: transparent;
    text-shadow: 0 0 3px #000; */
// End Codepen spesific styling

.post {
	display: flex;
	text-decoration: none;
	/* color: inherit; */
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
		content: "";
		display: block;
		width: 100%;
		height: 100%;
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
		
		.post-title {
			color: #FFF;
			/* color: #76a5cd; */
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

.post-title {
	
	position: relative;
	font-size: 0.2rem;
	font-size: ${props => props.theme.fontmd};
	font-weight: 2;
	line-height: 0.1;
	transition: .4s ease-out;
	display: block;
	/* width: 0%; */
	height: 2px;
	border: #FFF;
	transform: scale(0.9);
}

@media (max-width: 64em) {
 	margin: 1rem 0;

 	&::after{
 		display: none;
 	}

 }
 &>*{
  /* transition: all 0.2s ease-in; */
&:before{
	 /* transition: all 0.2s ease;  */
	/* transform-origin: 100% 50%; */
}
  
  &:hover {
    /* transform: scale(1.1); */
	
  }
}

`
// const MenuItem = styled.li`
// margin: 0 1rem;
// color: ${props => props.theme.text};
// cursor: pointer;

// &::after{
// 	content: ' ';
// 	display: block;
// 	width: 0%;
// 	height: 2px;
// 	background: ${props => props.theme.text};
// 	transition:  width 0.3s ease;
// }
// &:hover::after{
// 	width: 100%;
// }


// @media (max-width: 64em) {
// 	margin: 1rem 0;

// 	&::after{
// 		display: none;
// 	}

// }
// `

const HamburgerMenu = styled.button`
position: absolute;
/* top: 5%; */
top: 2rem;
left: 50%;
/* left: 20rem; */
display: none;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

@media (max-width:64em) {
	
	display: flex;
}

&:focus {
  outline: none;
}

div {
  width: 2rem;
  /* width: ${props => props.click ? '2rem' : '1.5rem'}; */
  height: 0.25rem;
  /* background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight}; */
  background: ${props => props.theme.text};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
  

  :first-child {
	transform: ${({ click }) => click ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
	opacity: ${({ click }) => click ? '0' : '1'};
	transform: ${({ click }) => click ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
	transform: ${({ click }) => click ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`

/* const HamburgerMenu = styled..span`
 width: ${props => props.click ? '2rem' : '1.5rem'};
height:2px;
background: ${props => props.theme.text};

position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'trancslateX(-50%) rotate(0)'};

display: none;
justify-content: center;
align-items: center;

cursor: pointer;
transition: all 0.3s ease;

@media (max-width:64em) {
	
	display: flex;
}


&::after, &::before{
	content: ' ';
	width: ${props => props.click ? '1rem' : '1.5rem'};
	height: 2px;
	right: ${props => props.click ? '-2px' : '0'};
	background-color: ${props => props.theme.text};
	position: absolute;
	transition: all 0.3s ease;
}

&::after{
	top: ${props => props.click ? '0.3rem' : '0.5rem'};
	transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)' };
}
&::before{
	bottom: ${props => props.click ? '0.3rem' : '0.5rem'};
	transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)' };
} 
`*/

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 1 auto;
@media (max-width:48em) {
  width: 100%;
}
`

const IconList = styled.div`
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
		
		/* transition: left ease-out 0.155s;  */
		
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
	transform: scale(1.12);
	
}

&>*{
  /* transition: all 0.35s ease-in; */
&:before{
	/* transition: all 0.35s ease; */
}
  
  &:hover {
    /* transform: scale(1.2); */
  }
}
`


	const Navigation = () => {

		

		const [click , setClick]  = useState(false)

		const scrollTo = (id) => {

			let element = document.getElementById(id);

			element.scrollIntoView({
				behavior:'smooth',
				block:'start',
				inline:'nearest'
			})

			setClick(!click)
		}

		return (
		<Section id="navigation">
			<Logo />
		<NavBar>
			
			<HamburgerMenu  click={click} onClick={() => setClick(!click)}>
				{/* &nbsp; */}
				<div></div>
				<div></div>
				<div></div>
			</HamburgerMenu>
			<Menu click={click}>
				{/* <div className='hidden'> */}
				<MenuItem  onClick={() => scrollTo('home')}>
					<a className='post'>
						<h2 className='post-title'>
						Home
						</h2>
					</a>
				</MenuItem>
				{/* </div> */}
			
				<MenuItem onClick={() => scrollTo('about')}>
					<a className='post'>
						<h2 className='post-title'>
						About
						</h2>
					</a>
				</MenuItem>
				<MenuItem onClick={() => scrollTo('roadmap')}>
				<a className='post'>
						<h2 className='post-title'>
						Roadmap
						</h2>
					</a></MenuItem>
				<MenuItem onClick={() => scrollTo('showcase')}>
				<a className='post'>
						<h2 className='post-title'>
						Showcase
						</h2>
					</a></MenuItem>
				<MenuItem onClick={() => scrollTo('team')}>
				<a className='post'>
						<h2 className='post-title'>
						Team
						</h2>
					</a></MenuItem>
				<MenuItem onClick={() => scrollTo('faq')}>
				<a className='post'>
						<h2 className='post-title'>
						Faq
						</h2>
					</a></MenuItem> 
				 {/* <MenuItem>  */}
				<div className="mobile">
					{/* <Button text="Connect Wallet" link="https://google.com" /> */}
					<Right>
					<IconList >
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
        			</Right>
				</div>
				{/* </MenuItem> */}
				
			</Menu>
			<div className="desktop">
			<Right >
            <IconList className=''>
              <a className='post' href="http://facebook.com" target="blank" rel="noopener noreferrer" >
                <OpenSea className='post-title open'/>
              </a>
              <a className='post' href="http://twitter.com" target="blank" rel="noopener noreferrer" >
                
				<Twitter className='post-title'/>
              </a>
              <a  className='post' href="http://linkedin.com" target="blank" rel="noopener noreferrer" >
              <LinkedIn className='post-title'/>
                </a>
            </IconList>
        	</Right>
				{/* <NavBtn text="Connect Wallet" link="https://google.com" /> */}
				{/* <button className="post-title" text="" >Connect Wallet </button> */}
			</div>
			
				</NavBar>
			
		</Section>
		)
	}
	export default Navigation;