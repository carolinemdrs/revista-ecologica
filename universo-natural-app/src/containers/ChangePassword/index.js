import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../components/Header";
import * as firebase from "firebase/app";

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const ButtonStyled = styled(Button)`
 width: 100px;
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
              <Typography color="textSecondary">Redefinir Senha</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}


export default ChangePassword