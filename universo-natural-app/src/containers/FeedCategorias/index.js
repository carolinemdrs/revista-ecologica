import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Cards from "../../components/cards";
import SubCategorias from "../../components/MenuLateral";

const MenuContainer = styled.div`
  margin-top: 7%;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr
  gap: 5px;
` 

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin-top:10vh;
  margin-rigth:10vh;
` 

class FeedByCategory extends React.Component {
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
          </MenuContainer>
          <MainContainer>
              <SubCategorias/>
              <CardContainer>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </CardContainer>
          </MainContainer>   
          
      </div>
    )
  }
}



export default FeedByCategory