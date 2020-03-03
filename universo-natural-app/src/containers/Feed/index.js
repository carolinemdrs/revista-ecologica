import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Cards from "../../components/cards";
import BigCard from "../../components/bigCard";

const MenuContainer = styled.div`
  margin-top: 7%;
`
/*
const MainContainer = styled.div`
  display:grid;
  heigh: 100vh;
  width:100%;
` */

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
  gap: 5px;
  margin-left:10vh;
  margin-top:10vh;
` 

const BigCardStyled = styled.div`
  display: flex;
  margin-left:40vh;
  margin-top:5vh;
`

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
          <Header />
          <MenuContainer>
              <Menu />
              <BigCardStyled >
                <BigCard/>
              </BigCardStyled>
              <CardContainer>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </CardContainer>
          </MenuContainer>
      </div>
    )
  }
}



export default Feed