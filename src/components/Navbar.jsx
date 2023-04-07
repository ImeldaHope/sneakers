import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useStyles from './Styles';

const Navbar = () => {
    const classes = useStyles();
   
  
    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography component={Link} to="/" className={classes.title}>
                        SNEAKERS || Ke                   
                    </Typography>
                    <Link to="/" className={classes.navLink}>
                        Home                    
                    </Link>
                    <Link to="/" className={classes.navLink}>
                        Shop                   
                    </Link>
                    <Link to="/" className={classes.navLink}>
                        About                    
                    </Link>
                    <IconButton>
                        <Badge>
                            <ShoppingCart className={classes.shopCart}/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            
      <br />
{/* Figure out how to provide space between main section content and footer grid without the line-break. No space available. */}
            
        </>
        )
}

export default Navbar

