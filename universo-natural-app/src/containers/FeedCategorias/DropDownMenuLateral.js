import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';

 function DropDownMenuLateral(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          SubCategorias
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={props.goToPhotosPage}>Fotos</MenuItem>
          <MenuItem onClick={handleClose}>Luas</MenuItem>
          <MenuItem onClick={handleClose} >Satélites</MenuItem>
        </Menu>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    goToPhotosPage: () => dispatch(push(routes.astropic)),
 }
} 

export default connect( null, mapDispatchToProps)(DropDownMenuLateral)