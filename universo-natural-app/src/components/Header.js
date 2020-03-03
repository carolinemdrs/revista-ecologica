import React from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../img/logo.png";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 80px;
`

const TypographyStyled = styled(Typography)`
  color: white;
  display: flex;
`

const H2 = styled.h2`
  margin:5px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
`

const LogoImg = styled.img`
  width:30%;
  margin-top:6%;
  display: flex;
`
class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<AppBar>
				<ToolbarStyled>
					<LogoImg
					src={logo}
					/>
					<TypographyStyled >
						<H2>Contato |</H2>
						<H2> Sobre |</H2>
						<H2> Logout</H2>
					</TypographyStyled>
				</ToolbarStyled>
		  </AppBar>
		)
	}
}


export default Header