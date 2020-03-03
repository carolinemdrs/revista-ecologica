import React from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import insta from "../img/insta.svg";
import fb from "../img/fb.svg";
import yt from "../img/yt.svg";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`
const InstaImg = styled.img`
  width:5%;
  margin-top:6%;
  display: flex;
`
class Footer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<AppBar>
				<ToolbarStyled>
					<InstaImg
					src={insta}
					/>
					<InstaImg
					src={fb}
					/>
					<InstaImg
					src={yt}
					/>
				</ToolbarStyled>
		  </AppBar>
		)
	}
}


export default Footer