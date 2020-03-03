import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from "../../components/Header"
import Footer from "../../components/Footer";

const MainContent = styled.div `
width: 100%;
height: 100vh;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`

const ChooseButton = styled.div`
	display: flex;
	width: 400px;
	justify-content: space-between;
`
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (

      <div>
       
       <Header/>
          <MainContent>
				<ChooseButton>
					<Button variant="contained" size="large" >
						Quero Vender
        			</Button>
					<Button variant="contained" size="large" >
						Quero Comprar
        			</Button>
				</ChooseButton>
			</MainContent>
           
        
      </div>
    )
  }
}



export default Home