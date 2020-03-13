import React from "react";
import styled from "styled-components";
import Cards from "../components/cards";

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

  @media screen and (max-width: 900px) {
    div {

    }
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