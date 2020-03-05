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
			<AppBar>
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
		  </AppBar>
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