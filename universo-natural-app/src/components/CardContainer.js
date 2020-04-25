import React from "react";
import styled from "styled-components";
import Cards from "../components/cards";
import {device} from "./../../src/device";
import { connect } from "react-redux";
import BigCard from "./bigCard"

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
function CardsContainer (props) {
    return (
        <CardContainer>
           {props.cardList.map(cardList => {
              return <CardsItem 
                        cardImage={cardList.cardImage} 
                        cardTitle={cardList.cardTitle}
                        cardText={cardList.cardText}
            />    
            })}
      </CardContainer>
    );
}



function mapStateToProps (state) {
  return{
    cardList: state.cardList,
  }
}


export default connect (mapStateToProps, null)(CardsContainer)
