import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../components/Header";
import * as firebase from "firebase/app";
import Footer from "../../components/Footer";

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  @media (max-width: 1024px) and (min-width:768px)  { 
    display:grid
    height: 80vh
  }
`
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const ButtonStyled = styled(Button)`
 width: 140px;
`
const TypographyStyled = styled(Typography)`
  @media (max-width: 1024px) and (min-width:768px)  {
    font-weight: bold;
    font-size: 16px; 
}
`

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
     
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onClickRedefine = () => {   
    const auth = firebase.auth();
    const emailAddress = this.state.email
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  
  }


  render() {
    const { email} = this.state;
    return (
      <div>
        <Header />
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="Digite seu email"
            value={ email}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.onClickRedefine}
              >
              <TypographyStyled color="textSecondary">Redefinir Senha</TypographyStyled>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
        <Footer/>
      </div>
    )
  }
}


export default ChangePassword