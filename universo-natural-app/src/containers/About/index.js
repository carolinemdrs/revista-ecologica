import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Typography from '@material-ui/core/Typography';

const MainContainer = styled.div`
    width: 60%;
    height: 100%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 10%;
    display: grid;
    background-color: #E7E2FC;
    padding:2%;
`

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div>
        <Header/>
            <MainContainer>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </MainContainer>
      </div>
    )
  }
}

export default About 