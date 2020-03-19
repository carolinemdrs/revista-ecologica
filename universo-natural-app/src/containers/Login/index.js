import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as firebase from "firebase/app";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import Footer from "../../components/Footer";

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;

  @media (max-width: 1024px) and (min-width:768px)  {
    
  }

`

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) and (min-width:768px)  {
    display: flex;
    justify-content: center;
  }

`

const ButtonStyled = styled(Button)`
 width: 100px;
`
const TextFieldStyled = styled(TextField)`
  width: 30vh;
`

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
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


  onClickLogin = () => {
    if(this.state.isLoggedIn === true) {
      this.props.goToFeedPage()
    }
  }

  render() {
    const { email, password } = this.state;
    console.log('login', this.state.isLoggedIn)

    return (
      <div>
        <Header />
        <FormStyled onSubmit={this.onSubimitLogin}>
          <TextFieldStyled
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
            variant="outlined"
          />

          <TextFieldStyled
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
              onClick={this.onClickLogin}
              >
              <Typography color="textSecondary">Entrar</Typography>
            </ButtonStyled>
            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              onClick={this.props.goToChangePassword}
              >
              <Typography color="textSecondary">Trocar Senha</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
        <Footer/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
  goToFeedPage: () => dispatch(push(routes.feed)),
  goToChangePassword: () => dispatch(push(routes.changepw))
  };
}

export default connect( null,mapDispatchToProps)(Login);


