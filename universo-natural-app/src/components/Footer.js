import React from "react";
import styled from "styled-components";
import insta from "../img/insta.svg";
import fb from "../img/fb.svg";
import yt from "../img/yt.svg";

const IconImg = styled.img`
  width:5%;
`

const IconContainer = styled.div`
	display:flex;
	margin-left:70vh;
`
class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
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
		)
	}
}


export default Footer