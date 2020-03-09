import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@material-ui/core';

export default function Link(props) {
  const { 
    to, 
    children, 
    color = "inherit", 
    className,
    style
  } = props;

  console.log(className);
  return (
    <MUILink color={color} className={className} component='button'>
      <RouterLink to={to} style={{
        ...style,
        color: "inherit",
        textDecoration: "none"
      }}>
        { children }
      </RouterLink>
    </MUILink>
  )
}