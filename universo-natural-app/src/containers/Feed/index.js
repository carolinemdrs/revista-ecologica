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

const ContainerGeral = styled.div`
  display:grid;
  grid-template-rows: 10vh 50vh 80fr 10fr;
  grid-template-column:1fr;
  width:100%;
  gap:5vh;
  align-self: center;
  padding-left: 20vh;
  padding-rigth: 0vh;
`
const HeaderLogOut = styled.div`
  display:grid;
  grid-template-areas: "Header Button"
`

const BigCardStyled = styled(BigCard)`
  display:grid;
  margin-left:50vh;
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
            <Menu />
            <BigCardStyled/>
            <CardsContainer />               
            <Footer/>
        </ContainerGeral>
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