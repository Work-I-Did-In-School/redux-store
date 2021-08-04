import React from 'react';
import { useSelector } from 'react-redux';
// import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Renders the name of the store at the head
function Header() {
  const cartSize = useSelector(state => state.store.cart).length;

  return (
    <header>
      <ToolBar>
        <Typography variant="h6" nowrap>
          Redux Store
        </Typography>
      </ToolBar>
      <Button color="inherit">
        {`Cart (${cartSize})`}
      </Button>
    </header>
  )
}

export default Header;