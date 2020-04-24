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

const styles = {
  card: {
    width: 345,
    '@media (max-width: 1024)' : { 
      width: '80%'
    }
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

const CardStyled = styled(CardMedia) `

@media (max-width: 1024){
  display:grid;
  margin-bottom:5vh;
  margin-left:8vh;
}
`


class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } =  this.props;
    return (
      <CardStyled>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt= {this.props.cardTitle}
              className={classes.media}
              height="140"
              image={this.props.cardImage}
              title= {this.props.cardTitle}
              media="screen and  (max-width: 1024){
                height=200
              }"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                 {this.props.cardTitle}
              </Typography>
              <Typography component="p">
                  {this.props.cardText}
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
Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps (dispatch) {
  return{
    goToTextDetails: () => dispatch(push(routes.text))
  }
}

export default connect  (null, mapDispatchToProps) (withStyles(styles)(Cards))