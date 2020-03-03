import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../components/Header"
import TextField from '@material-ui/core/TextField';
import Footer from "../../components/Footer";

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
           name: "",
            email: "",
            text: "",
    };
  }

  render() {
      const {name, email, text} = this.state;
    return (

      <div>
        <Header/>
        <FormStyled >
            <TextFieldStyle
                required
                name="name"
                type="name"
                label="Nome"
                value={name}
                variant="outlined"
                />
            <TextFieldStyle
                required
                name="email"
                type="email"
                label="E-mail"
                value={email}
                variant="outlined"
             />
            <TextFieldStyle
                label="Texto"
                multiline
                rows="15"
                value={text}
                variant="outlined"
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