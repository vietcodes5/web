import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  marginApp: {
    paddingTop: "65px",
  },
}));

export default function Content(props) {
  const pages = props.pages.filter(page => !page.brand && page.url !== "/");
  console.log(pages);

  return (
    <div className={useStyles().marginApp}>
    <Switch>
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
    </Switch></div>
  );
}
