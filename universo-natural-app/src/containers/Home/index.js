import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Header from "../../components/Header"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Footer from "../../components/Footer";

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

  @media (max-width: 1024px) and (min-width:768px)  {
    display: flex;
    justify-content: space-between;
    height:100px
  }
`
const Text = styled.p`
  @media (max-width: 1024px) and (min-width:768px)  {
   font-size: 26px;
  }
`
const FooterStyled = styled(Footer)`
  @media (max-width: 1024px) and (min-width:768px)  {
   height:80px
  }
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
            <Text>Cadastrar</Text>
            </Button >

            <Button  
              variant="contained" 
              size="large"
              onClick={this.props.goToLoginPage}
            >
              <Text>Acessar</Text>
            </Button >
          </ChooseButton>
          
        </MainContent>
        <FooterStyled/>
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