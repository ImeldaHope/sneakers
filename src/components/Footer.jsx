import React from 'react';
import {Typography, Grid} from '@material-ui/core';

import {Link} from 'react-router-dom';
import useStyles from './Styles';

const Footer = () => {
    const classes = useStyles();
   
  
    return (
        <>
        <br/>
        {/* Figure out how to provide space between main section content and footer grid without the line-break. No space available. */}
            <footer className={classes.foot}> 
                <div className={classes.footer}>
                    <Typography component={Link} to="/" className={classes.footerTitle}>
                        SNEAKERS || Ke
                    </Typography>
                    <Link to="/" className={classes.footerLink}> Home </Link>
                    <Link to="/" className={classes.footerLink}> Shop </Link>
                    <Link to="/" className={classes.footerLink}> About</Link>
                </div>              
            </footer>

        </>
        )
}

export default Footer

