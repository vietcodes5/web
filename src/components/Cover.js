import React, { useState, useEffect } from 'react';
import {
    Grid,
    Typography,
  } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'

import 'firebase/storage';

function Cover() {
    const title = 'Something here';
    const subtitle = 'Some subtitle here';
    const photoUrl = '(linkimg)';
    
// Note from Nguyen Duc: Could not be albe to make the mask functional
// This is basic code to avoid further bugs
    
    return(
      <Grid item xs={6}>
        <div>
          <div>
            <img src = {photoUrl} alt = 'IMG' className = 'PhotoUrl'></img>
            <div>
              <Typography variant = 'h5' className = 'Title'>
                {title}
              </Typography>
              <Typography variant = 'subtitle1' className = 'Subtitle'>
                {subtitle}
              </Typography>
            </div>
          </div>
        </div>
      </Grid>
    )
  }
  
  export default Cover;