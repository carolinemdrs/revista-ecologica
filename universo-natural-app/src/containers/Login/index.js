import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as firebase from "firebase/app";
import Header from "../../components/Header"

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

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubimitLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
    console.log(res)
    }).catch((e) => console.log('erro: ', e))
  };


  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Header />
        <FormStyled onSubmit={this.onSubimitLogin}>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
          />

          <TextField
            required
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              >
              <Typography color="textSecondary">Entrar</Typography>
            </ButtonStyled>
            <ButtonStyled
              variant="contained"
              color="primary">
              <Typography color="textSecondary">Cadastrar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
  

  };
}



export default connect(
  null,
  mapDispatchToProps
)(Login);


