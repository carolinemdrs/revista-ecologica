import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: "",
      newpassword: "",
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {  oldpassword, newpassword } = this.state;

    return (
      <div>
        <Header />
        <FormStyled>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="oldpassword"
            type="oldpassword"
            label="Senha antiga"
            value={ oldpassword}
            variant="outlined"
          />

          <TextField
            required
            onChange={this.handleFieldChange}
            name="newpassword"
            type="newpassword"
            label="Nova Senha"
            value={newpassword}
            variant="outlined"
          />
          <BtnWrapper>
            <ButtonStyled
              variant="contained"
              color="primary"
              type="submit"
              >
              <Typography color="textSecondary">Atualizar</Typography>
            </ButtonStyled>
          </BtnWrapper>
        </FormStyled>
      </div>
    )
  }
}


export default ChangePassword