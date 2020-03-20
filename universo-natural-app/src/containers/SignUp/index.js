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
  width: 120px;
  height:50px
`
const TypographyStyled = styled(Typography)`
  @media (max-width: 1024px) and (min-width:768px)  {
    font-weight: bold;
    font-size: 16px; 
}
`

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
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

  handleFieldChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log("mudei@")
  }

  onSubmitSignup = async (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((res) => {
    console.log(res)
    }).catch((e) => console.log('erro: ', e))
  }

  onClickSignUp = () => {
    if(this.state.isLoggedIn === true) {
      this.props.goToFeedPage()
    }
  }

  render() {
    const {name, email, password } = this.state;

    return (
      <div>
        <Header />
        <FormStyled onSubmit={this.onSubmitSignup}>
          <TextField
              required
              onChange={this.handleFieldChange}
              name="name"
              type="name"
              label="Name"
              value={name}
              variant="outlined"
            />
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
              type="subimit"
              onClick={this.onClickSignUp}
              >
              <TypographyStyled color="textSecondary">Cadastrar</TypographyStyled>
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
    goToFeedPage: () => dispatch(push(routes.feed))

  };
}


export default connect(
  null,
  mapDispatchToProps
)(SignUp);


