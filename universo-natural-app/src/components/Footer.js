import React from "react";
import styled from "styled-components";
import insta from "../img/insta.svg";
import fb from "../img/fb.svg";
import yt from "../img/yt.svg";
import {device} from "./../../src/device";

const IconImg = styled.img`
  width:5%;
  margin:1vh;

  @media (max-width: 1024px) and (min-width:768px)  {
	width:10%;
	margin:0
} 
`
const IconContainer = styled.div`
	display:flex;
	margin-left:90vh;
	margin-top:4vh;
	height:80px

	@media ${device.mobileM} {
		display:flex;
		margin-left:15vh;
	  }
	
	@media (max-width: 1024px) and (min-width:768px)  {
		display:flex;
		margin-left:30vh;
	}
`
class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<div>
			<IconContainer>
				<IconImg
					src={insta}
				/>
				<IconImg
					src={fb}
				/>
				<IconImg
					src={yt}
				/>	
		  </IconContainer>
		  </div>
		)
	}
}


export default Footer