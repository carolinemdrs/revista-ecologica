import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import * as firebase from "firebase/app";

const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`

class Menu extends React.Component {
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
  

  render() {
    console.log ("bla",this.state.isLoggedIn)
    return (
      <Container>
          <div>
              <Button>Animais</Button>
          </div>
          <div>
              <Button>Ecoturismo</Button>
          </div>
          <div>
              <Button>Vegetação</Button>
          </div>
          <div>
            <Button>Sustentabilidade</Button>
          </div>
          <div>
            <Button>Paisagismo</Button>
          </div>
          <div>
            <Button onClick={this.props.goToFeedSpecificFeed}> Astronomia</Button>
          </div>
          <div>
            <Button>Geociência</Button>
          </div>
          <div>
            <Button>Biologia</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
  goToFeedSpecificFeed: () => dispatch(push(routes.feedcat)),  
 }
} 

export default connect( null, mapDispatchToProps)(Menu)
