import React from "react";
import styled from "styled-components";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../img/logo.png";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import * as firebase from "firebase/app";
import {device} from "./../../src/device";

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  @media ${device.mobileM} {
	display:flex;
	justify-content: flex-start;
	padding:0
  }

  @media (max-width: 1024px) and (min-width:768px)  {
	display:flex;
	flex-direction:row;
	justify-content:s start;
}
`

const TypographyStyled = styled(Typography)`
  color: white;
  display: flex;
`

const H2 = styled.h2`
  margin:5px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';

  @media (max-width: 1024px) and (min-width:768px)  {
	font-size: 28px;
  }
`

const LogoImg = styled.img`
  width:30%;
  margin-top:6%;
  display: flex;

  @media ${device.mobileM} { 
	width:60%;
	margin-top:12%;
	display: flex;
  }

  @media (max-width: 1024px) and (min-width:768px)  {
	width:60%;
	margin-top:12%;
	display: flex;
`
const Background = styled.div `
background-color: #aed581

`
class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(async (user) => {
		  if (user) {
			this.setState({isLoggedIn: true})
		  } else {
			this.setState({isLoggedIn: false})
		  }
		});
	  }
	onClickLogo = () => {
		if(this.state.isLoggedIn === true) {
		  this.props.goToFeedPage()
		}
		else {
		this.props.goToHomePage()
		}
	  }
	
	render() {
		return (
			<Background>
				<ToolbarStyled>
					<LogoImg
					src={logo}
					onClick={this.onClickLogo}
					/>
					<TypographyStyled >
						<H2 onClick={this.props.goToContactPage}>Contato |</H2>
						<H2 onClick={this.props.goToAboutPage}> Sobre </H2>
					</TypographyStyled>
				</ToolbarStyled>
		  </Background>
		)
	}
}

function mapDispatchToProps(dispatch){
	return{
		goToContactPage : () => dispatch(push(routes.contato)),
		goToAboutPage: () => dispatch(push(routes.about)),
		goToHomePage: () => dispatch(push(routes.home)),
		goToFeedPage: () => dispatch(push(routes.feed))
	}
}
export default connect(null, mapDispatchToProps) (Header);