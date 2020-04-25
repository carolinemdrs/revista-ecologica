import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import SatelliteIcon from '@material-ui/icons/Satellite';
import styled from "styled-components";
import {device} from "./../../src/device";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const MenuContainer = styled.div`
  display:flex;
  width: 30vh;
  background-color: #F5F5F5;
  margin:0;
  
  @media (max-width: 1024px) and (min-width:768px) {
    display:none;
  }
  
  @media ${device.mobileM} {
    display:none;
  }

`

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {},
  icon: {},
});



function SubCategorias(props) {
  const { classes} = props;

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AddAPhotoIcon />
          </ListItemIcon>
          <ListItemText onClick={props.goToPhotosPage}
          classes={{ primary: classes.primary }} inset primary="Fotos " />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <Brightness2Icon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Luas" />
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <SatelliteIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Satélites" />
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
  }


SubCategorias.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
  goToPhotosPage: () => dispatch(push(routes.astropic)),
  };
}

export default withStyles(styles) (connect( null,mapDispatchToProps)(SubCategorias))

//export default withStyles(styles)(SubCategorias);

