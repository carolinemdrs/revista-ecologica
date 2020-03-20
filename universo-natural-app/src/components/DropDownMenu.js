import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

function DropDownMenu(props) {
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
          Categorias
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Animais</MenuItem>
          <MenuItem onClick={handleClose}>Ecoturismo</MenuItem>
          <MenuItem onClick={handleClose}>Vegetação</MenuItem>
          <MenuItem onClick={handleClose}>Sustentabilidade</MenuItem>
          <MenuItem onClick={handleClose}>Paisagismo</MenuItem>
          <MenuItem onClick={props.goToFeedSpecificFeed}>Astronomia</MenuItem>
        </Menu>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
  goToFeedSpecificFeed: () => dispatch(push(routes.feedcat)),  
 }
} 

export default connect( null, mapDispatchToProps)(DropDownMenu)