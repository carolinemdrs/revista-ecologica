import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100vh
  display: flex;
  justify-content: center;
  margin-left:50vh
`

const AstroCard = (props) => {
    return(
        <div>
            <h2> {props.data.title} </h2>
            <Img src={props.data.hdurl}/>
            <h4>Sobre a linda foto de hoje, {props.data.date} : {props.data.explanation} </h4>
            <h6>copyright : {props.data.copyright}</h6>
        </div>
    )   
}


export default AstroCard;