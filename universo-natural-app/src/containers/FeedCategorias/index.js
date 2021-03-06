import React from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import SubCategorias from "../../components/MenuLateral";
import Footer from "../../components/Footer";
import CardsContainer from "../../components/CardContainer";
import {device} from "../../../src/device";
import DropDownMenu from "../../components/DropDownMenu";
import DropDownMenuLateral from './DropDownMenuLateral';

const ContainerGeral = styled.div`
  display: grid;
  grid-template-row: 1fr 1fr 1fr ;
  grid-template-columns: 1fr; 
  gap: 5px;
 
  @media ${device.mobileM} {
    display: grid;
    grid-template-row: 1fr 1fr 1fr 1fr ;
    grid-template-columns: 1fr; 
    gap: 5px;
  }

  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
    flex-direction:column; 
    padding-left:3vh
  }
` 
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 30vh 1fr;
  grid-template-row: 1fr; 
  gap: 8vh;
  
  @media (max-width: 667px) {
    display:grid;
    grid-template-columns: 1fr;
    grid-template-row: 1fr ;
    margin:2vh
  }

  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
    flex-direction:column; 
  }
` 
const DropDownMenuStyled = styled.div`
  display:none

  @media ${device.mobileM} {
    display:flex;
  }

  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
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
      <div>
        <Header />
        <ContainerGeral>
            <DropDownMenuStyled>
              <DropDownMenu />
              <DropDownMenuLateral/>
            </DropDownMenuStyled>
            <Menu />
            <MainContainer>
              <SubCategorias/>
              <CardsContainer />
            </MainContainer> 
            <Footer />
        </ContainerGeral>
      </div>
    )
  }
}

export default FeedByCategory