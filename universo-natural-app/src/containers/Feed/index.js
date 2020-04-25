import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Button from '@material-ui/core/Button';
import * as firebase from "firebase/app";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import CardsContainer from "../../components/CardContainer";
import Footer from "../../components/Footer";
import DropDownMenu from "../../components/DropDownMenu";
import {ContainerGeral, 
        HeaderLogOut, 
        BigCardStyled, 
        DropDownMenuStyled} from "./style.js";




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
            <BigCardStyled />
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

function mapStateToProps (state) {
  return{
    cardList: state.cardList,
  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Feed)