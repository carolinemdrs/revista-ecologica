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

const MenuContainer = styled.div`
  display:flex;
  width: 40vh;
  background-color: #F5F5F5;
  margin:0;
  height: 40vh;
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
  const { classes } = props;

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.icon}>
            <AddAPhotoIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Fotos " />
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

export default withStyles(styles)(SubCategorias);

