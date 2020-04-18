import React, { memo, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useAppState } from "reducers/AppReducer";
import LoaderAnimation from "./LoaderAnimation";
import { CSSTransition } from "react-transition-group";

import "./transitions.scss";

function LoadingController({ longLoadingDuration }) {
  const { isLoading } = useAppState();
  const longLoadingTimeout = useRef(null);
  const [isLongLoading, setLongLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";

    if (longLoadingTimeout.current) {
      clearTimeout(longLoadingTimeout.current);
      longLoadingTimeout.current = null;
    }

    if (isLoading) {
      longLoadingTimeout.current = setTimeout(() => {
        setLongLoading(true);
      }, longLoadingDuration);
    } else {
      setLongLoading(false);
    }
  }, [isLoading, longLoadingDuration]);

  return (
    <CSSTransition
      in={isLoading}
      timeout={400}
      classNames="loader"
      unmountOnExit
    >
      <LoaderAnimation isLongLoading={isLongLoading} />
    </CSSTransition>
  );
}

LoadingController.propTypes = {
  longLoadingDuration: PropTypes.number,
};

LoadingController.defaultProps = {
  longLoadingDuration: 5000,
};

export default memo(LoadingController);
