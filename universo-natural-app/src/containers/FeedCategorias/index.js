import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Cards from "../../components/cards";
import SubCategorias from "../../components/MenuLateral";
import Footer from "../../components/Footer";
import CardsContainer from "../../components/CardContainer";

const ContainerGeral = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 
  gap: 5px;
  background-color:pink;

  @media screen and (min-width: 375px) {
    div {
      display:grid;
      grid-template-row: 1fr 1fr 1fr 1fr ;
      grid-template-columns: 1fr 
      gap: 5px;
    }
` 

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 30vh 1fr 
  grid-template-row: 1fr 
  gap: 5px

  @media screen and (min-width: 375px) {
    div {
      
      background-color:blue;
    }
  }
  
` 

class FeedByCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ContainerGeral>
          <Header />
          <Menu />
          <MainContainer>
            <SubCategorias/>
            <CardsContainer />
          </MainContainer> 
          <Footer />
      </ContainerGeral>
    )
  }
}

export default FeedByCategory