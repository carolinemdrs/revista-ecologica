import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from 'axios';
import AstroCard from './card'

class AstronomyPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
    };
  }

  componentDidMount() {
  const myKey = 'fRDPc32khOdwCnlRRqcPz7VuIzTcg2aACHoQtiWm';
  const endPoint = 'https://api.nasa.gov/planetary/apod?api_key='

  axios.get(endPoint + myKey)
    .then(response => {
        this.setState({
            pictures: response.data
        })
        console.log(this.state.pictures)
    })
    .catch(error => {
        console.log(error)
    })
  }

    render() {
        const {pictures} = this.state
      return (
        <div>
          <Header />
          <h1>Imagem astronômica do dia </h1>
          <TextField />
          <AstroCard data={pictures}/>
          <Footer />
        </div>
      );
    }
  }
  export default AstronomyPic;