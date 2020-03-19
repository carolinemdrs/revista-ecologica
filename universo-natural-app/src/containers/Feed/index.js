import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Cards from "../../components/cards";
import BigCard from "../../components/bigCard";
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import CardsContainer from "../../components/CardContainer";
import Footer from "../../components/Footer";
import {device} from "../../../src/device";
import DropDownMenu from "../../components/DropDownMenu";


const ContainerGeral = styled.div`
  display:grid;
  grid-template-rows: 10vh 50vh 80fr 1fr;
  grid-template-column:1fr;
  width:100%;
  gap:5vh;
  align-self: center;
  padding-left: 5vh;
  padding-rigth: 0vh;
  
  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
    flex-direction:column; 
    padding:2vh
    height:80%
  }

  @media ${device.mobileM} {
    display:flex;
    flex-direction:column; 
  }
`
const HeaderLogOut = styled.div`
  display:grid;
  grid-template-areas: "Header Button"
`

const BigCardStyled = styled(BigCard)`
  display:flex;
  padding-left:50vh;
`
const DropDownMenuStyled = styled.div`
  display:none

  @media ${device.mobileM} {
    display:flex;
  }
`


class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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

  onClickLogOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
    this.props. goToLoginPage()
    console.log("logout")
  }
  
  render() {
    console.log('login', this.state.isLoggedIn)
    return (
      <div>
        <HeaderLogOut>
            <Header />
            <Button onClick={this.onClickLogOut}>SAIR</Button>  
        </HeaderLogOut>
        <ContainerGeral>
            <DropDownMenuStyled>
              <DropDownMenu />
            </DropDownMenuStyled>
            <Menu />
            <BigCardStyled/>
            <CardsContainer />       
        </ContainerGeral>
        <Footer/>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return{
    goToLoginPage: () => dispatch(push(routes.login))
  }
}

export default connect (null, mapDispatchToProps)(Feed)