import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../components/Header"
import TextField from '@material-ui/core/TextField';
import * as firebase from "firebase/app";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import * as admin from "firebase-admin"

//const admin = require("firebase-admin");

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`

const BtnWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`

const TextFieldStyle = styled(TextField)`
width: 150%;
display: flex;
`

class Contato extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
           email: "",
           name: "",
           text: "",
    };
  }
  
  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitContact = () => {
    let data = {
      email:this.state.email,
      name: this.state.name,
      text: this.state.text
  }
  let addData = admin.firestore().collection('contactForm').add(data)
  console.log(data)
  return addData.then(res => {
    console.log('add: ', res);
  }); 
}
  render() {
      const {name, email, text} = this.state;
    return (

      <div>
        <Header/>
        <FormStyled onSubmit={this.onSubmitContact}>
            <TextFieldStyle
                required
                name="email"
                type="email"
                label="E-mail"
                value={email}
                variant="outlined"
                onChange={this.handleFieldChange}
              />
            <TextFieldStyle
                required
                name="name"
                type="name"
                label="Nome"
                value={name}
                variant="outlined"
                onChange={this.handleFieldChange}
             />
            <TextFieldStyle
                name="text"
                type="text"
                label="Texto"
                multiline
                rows="5"
                value={text}
                variant="outlined"
                onChange={this.handleFieldChange}
            />
            <BtnWrapper>
                <Button
                variant="contained"
                color="primary"
                type="submit"
                >
                <Typography>Enviar</Typography>
                </Button>
            </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}

export default Contato