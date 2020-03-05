import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Header from "../../components/Header"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'

const MainContent = styled.div `
width: 100%;
height: 100vh;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`
const ChooseButton = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-between;
`
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (

      <div>
        <Header/>
            <MainContent>
          <ChooseButton>
            <Button 
            variant="contained" 
            size="large" 
            onClick={this.props.goToSignUpPage}
            >
              Cadastrar
            </Button>
            <Button 
            variant="contained" 
            size="large"
            onClick={this.props.goToLoginPage}
            >
              Acessar
            </Button>
          </ChooseButton>
        </MainContent>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    goToSignUpPage: () => dispatch(push(routes.signUp)),
    goToLoginPage: () => dispatch(push(routes.login)),
   }
 };

export default connect(null, mapDispatchToProps) (Home);