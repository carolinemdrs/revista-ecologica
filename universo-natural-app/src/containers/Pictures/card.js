import React from "react";

const AstroCard = (props) => {
    return(
        <div>
            <h2> {props.data.title} </h2>
            <img src={props.data.hdurl}/>
            <h4>Sobre a linda foto de hoje, {props.data.date} : {props.data.explanation} </h4>
            <h6>copyright : {props.data.copyright}</h6>
        </div>
    )   
}


export default AstroCard;