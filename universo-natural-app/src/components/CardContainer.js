import React from "react";
import styled from "styled-components";
import Cards from "../components/cards";
import {device} from "./../../src/device";

const CardContainer = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-row: 1fr 1fr 1fr ;

  @media ${device.mobileM} {
    display:grid;
    grid-template-columns: 1fr;
    grid-template-row: 1fr ;
  }

  @media (max-width: 1024px) and (min-width:768px)  {
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-row: 1fr 1fr 1fr ;
    justify-content: center;    
}
` 
const CardsItem = styled(Cards) `

`
class CardsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <CardContainer>
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
            <CardsItem />
      </CardContainer>
    );
  }
}

export default CardsContainer