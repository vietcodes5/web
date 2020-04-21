import { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop(props) {
  const prevProps = useRef();

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    if (props.location !== prevProps.location) {
      window.scrollTo({
        top: '0',
      });
    }
  });

  return props.children;
}

export default withRouter(ScrollToTop);
