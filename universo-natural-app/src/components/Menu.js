import React from 'react';
import Button from '@material-ui/core/Button';
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;

`

class Menu extends React.Component {
  state = {
 
  };

  render() {
    return (
      <Container>
          <div>
              <Button>Animais</Button>
          </div>
          <div>
              <Button>Ecoturismo</Button>
          </div>
          <div>
              <Button>Vegetação</Button>
          </div>
          <div>
            <Button>Sustentabilidade</Button>
          </div>
          <div>
            <Button>Paisagismo</Button>
          </div>
          <div>
            <Button>Astronomia</Button>
          </div>
          <div>
            <Button>Geociência</Button>
          </div>
          <div>
            <Button>Biologia</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
          <div>
            <Button>etc</Button>
          </div>
      </Container>
    );
  }
}

export default Menu;
