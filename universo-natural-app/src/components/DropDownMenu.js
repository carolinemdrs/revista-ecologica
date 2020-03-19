import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";


const DropDownMenuStyle = styled(DropDownMenu)`
  display: none;
`

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DropDownMenuStyle>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Open Menu
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
        <MenuItem onClick={handleClose}>Astronomia</MenuItem>
      </Menu>
    </DropDownMenuStyle>
  );
}