import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
  const prevProps = useRef();
  
  useEffect(() => {
    if(props.location !== prevProps.location) {
      window.scrollTo({
        top: '0',
        behavior: 'smooth',
      });
    }
  });
  
  return props.children;
}

export default withRouter(ScrollToTop);
