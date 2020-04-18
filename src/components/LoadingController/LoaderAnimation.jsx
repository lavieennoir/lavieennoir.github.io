import React, { memo } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import css from "./style.module.scss";

function LoaderAnimation({ isLongLoading }) {
  return (
    <div className="loader--fullpage">
      <CSSTransition
        in={isLongLoading}
        timeout={500}
        classNames="loader__message"
        unmountOnExit
      >
        <div className={css["loader__message"]}>
          <p>It seems like loading takes longer than usual.</p>
          <p>Please wait a little while.</p>
        </div>
      </CSSTransition>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 52 12"
        enableBackground="new 0 0 0 0"
        xmlSpace="preserve"
      >
        <circle fill="#fff" stroke="none" cx="6" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.1"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="26" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.2"
          />
        </circle>
        <circle fill="#fff" stroke="none" cx="46" cy="6" r="6">
          <animate
            attributeName="opacity"
            dur="1s"
            values="0;1;0"
            repeatCount="indefinite"
            begin="0.3"
          />
        </circle>
      </svg>
    </div>
  );
}

LoaderAnimation.propTypes = {
  isLongLoading: PropTypes.bool,
};

LoaderAnimation.defaultProps = {
  isLongLoading: false,
};

export default memo(LoaderAnimation);
