import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';

export default function Content(props) {
  const pages = props.pages.filter(page => !page.brand && page.url !== "/");
  console.log(pages);

  return (
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
    </Switch>
  );
}
