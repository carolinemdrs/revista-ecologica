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

const MenuContainer = styled.div`
  margin-top: 7%;
`
/*
const MainContainer = styled.div`
  display:grid;
  heigh: 100vh;
  width:100%;
` */

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
  gap: 5px;
  margin-left:10vh;
  margin-top:10vh;
` 

const BigCardStyled = styled.div`
  display: flex;
  margin-left:40vh;
  margin-top:5vh;
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
          <Header />
          <MenuContainer>
              <Menu />
              <BigCardStyled >
                <BigCard/>
                <Button onClick={this.onClickLogOut}>LOG OUT</Button>
              </BigCardStyled>
              <CardContainer>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </CardContainer>
          </MenuContainer>
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