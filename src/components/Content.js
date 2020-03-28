import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from '../pages/home';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Scrolltotop  from '../components/Scroll-to-top-function';


const useStyles = makeStyles(theme => ({
  marginApp: {
    paddingTop: "65px",
  },
}));

const Scroll = withRouter(Scrolltotop);

export default function Content(props) {
  const pages = props.pages.filter(page => !page.brand && page.url !== "/");
  console.log(pages);

  return (
    <div className={useStyles().marginApp}>
      
    <Switch  >
      { /* <Scrolltotop> */ }
      {
        pages.map(page => 
          <Route 
            path={page.url} 
            key={page.url} 
            component={page.component} />
        )
      }
      <Route 
        path="/"
        component={Home}
      />
     { /* </Scrolltotop>  */}
    </Switch></div>
  );
}
