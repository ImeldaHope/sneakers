import React from 'react';
import {Typography} from '@material-ui/core';

import {Link} from 'react-router-dom';
import useStyles from './Styles';

const Products = () => {
    const classes = useStyles();
   
  
    return (
        <>
            <div class="container">
                <div class="row align-items-start">
                    <div class="col">
                        1 of three columns
                    </div>
                    <div class="col">
                        2 of three columns
                    </div>
                    <div class="col">
                        3 of three columns
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col">
                        One of three columns
                    </div>
                    <div class="col">
                        Two of three columns
                    </div>
                    <div class="col">
                        Three of three columns
                    </div>
                </div>
                <div class="row align-items-end">
                    <div class="col">
                        1 of three columns
                    </div>
                    <div class="col">
                        Two of three columns
                    </div>
                    <div class="col">
                        3 of three columns
                    </div>
                </div>
            </div>
        </>
        )
}

export default Products

