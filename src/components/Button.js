import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
display: inline-block;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
outline: none;
border: none;

font-size: ${props => props.theme.fontsm};
padding: 0.9rem 2.3rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;

&:hover{
    transform: scale(0.9)
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

`
const NBtn = styled.button`
margin: 0 0.1rem;
outline: none;
border: none;
background-color:${props => props.theme.body}; ;
/* color: ${props => props.theme.text};  */
/* cursor: pointer; */

	/* position: relative; */
	/* top: 0; */
	/* left: 0; */
	right: 0;
	/* bottom: 0; */
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.1rem;

// End Codepen spesific styling

.post {
	display: flex;
	text-decoration: none;
	color: inherit;
	max-width: 220px;
	position: relative;
	padding: 0.8rem;
	box-shadow: inset 0 0 0 1.8px #000, inset -1.5px -1.5px 0 3px #CCC;
	background-color: #FFF;
	cursor: pointer; 
	
	&:before {
		position: absolute; 
		left: 0;
		bottom: 0;
		content: "";
		display: block;
    /* border-radius: 50%; */
		width: 100%;
		height: 100%;
		background-color: #000;
		transform-origin: 0 bottom 0;
		transform: scaleY(0);
		transition: .4s ease-out;
	}
	
	&:hover {
		.post-title {
			color: #FFF;
		}
		&:before {
			transform: scaleY(1);
		}
	}
}

.post-title {
	position: relative;
	font-size: 0.2rem;
	font-size: ${props => props.theme.fontmd};
	font-weight: 2;
	/* line-height: 0.1; */
	transition: .4s ease-out;
	display: inline-block;
	width: 100%;
	/* height: 2px; */
}

@media (max-width: 64em) {
 	margin: 1rem 0;

 	&::after{
 		display: none;
 	}

 }
`

const Button = ({text, link}) => {
  return (
    <Btn>
    <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
    </a>
      
    </Btn>
  )
}

const NewButton =({text, link, className}) => {
  return (
    <NBtn className={className}>
    <a className="post" href={link} aria-label={text} target="_blank" rel="noreferrer">
        <h1 className='post-title'>{text}</h1>
    </a>
    </NBtn>
  )
}

export default Button
export {NewButton}
