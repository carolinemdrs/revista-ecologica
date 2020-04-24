import styled from "styled-components";
import BigCard from "../../components/bigCard";
import {device} from "../../../src/device";

export const ContainerGeral = styled.div`
  display:grid;
  grid-template-rows: 10vh 50vh 80fr 1fr;
  grid-template-column:1fr;
  width:100%;
  gap:5vh;
  align-self: center;
  padding-left: 5vh;
  padding-rigth: 0vh;
  
  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
    flex-direction:column; 
    padding:2vh
    height:80%
  }

  @media ${device.mobileM} {
    display:flex;
    flex-direction:column; 
  }
`
export const HeaderLogOut = styled.div`
  display:grid;
  grid-template-areas: "Header Button"
`

export const BigCardStyled = styled(BigCard)`
  display:flex;
  padding-left:50vh;

`
export const DropDownMenuStyled = styled.div`
  display:none

  @media ${device.mobileM} {
    display:flex;
  }

  @media (max-width: 1024px) and (min-width:768px) {
    display:flex;
  }
`
