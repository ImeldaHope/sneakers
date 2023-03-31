import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './Styles';

const Navbar = () => {
    const classes = useStyles();
 
  
    return (
        <>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <Badge>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            
           

        </>
        )
}

export default Navbar

