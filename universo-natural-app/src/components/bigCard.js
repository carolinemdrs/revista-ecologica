import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';
import styled from "styled-components";
import {device} from "./../../src/device";

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};


const CardStyled = styled.div `
display:flex;
padding-left:30vh;
height:60vh;

@media (max-width: 1024px) and (min-width:768px) {
  display:flex;
  padding-left:0vh;
}

@media ${device.mobileM} {
  display:none;
}
`
class  BigCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } =  this.props;
    return (
      <CardStyled>
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Mata Atlântica"
            className={classes.media}
            height="200"
            image="https://cdn-cv.r4you.co/wp-content/uploads/2019/12/arvores-da-Mata_Atl%C3%A2ntica.jpg"
            title="Mata Atlântica"
          />
         
          <CardContent>
            <img src={this.props.cardImage}/>
            <Typography gutterBottom variant="h5" component="h2">
              Mata Atlântica 
            </Typography>
            <Typography component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.props.goToTextDetails}>
            Leia o Texto..
          </Button>
        </CardActions>
      </Card>
      
      </CardStyled>
    );
  }
}
BigCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps (dispatch) {
  return{
    goToTextDetails: () => dispatch(push(routes.text))
  }
}


export default connect  (null, mapDispatchToProps) (withStyles(styles)(BigCard))