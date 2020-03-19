import React from "react";
import styled from "styled-components";
import Cards from "../components/cards";
import {device} from "./../../src/device"

/*
  display: flex;
  margin-left:10vh;
  margin-right:10vh;
  margin-top:10vh;
  flex-direction:row;
  flex-wrap: wrap;
  background-color: blue;
  padding:50px;
  align-items: stretch;
  flex-grow: 1;
  width:500px
  height:500px;


  display:grid;
  grid-template-areas: "CardsItem CardsItem CardsItem" "CardsItem CardsItem CardsItem";
  grid-template-rows: 50vh 50vh
  gap:5vh
*/

const CardContainer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill, minmax(50vh, 50vh));
  gap:5vh;
  width:100%;

  @media ${device.mobileM} {
    background-color:purple;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-row: 1fr ;
  }

  @media (max-width: 1024px) and (min-width:768px)  {
    display:flex;
    justify-content:center;
    flex-direction:column;  
    padding-left:5vh;
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