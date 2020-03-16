import React, { memo } from "react";
import classNames from "classnames";
import css from "./style.module.scss";

function Logo() {
  return (
    <div className={css.container}>
      <div className={classNames(css.wave, css.top)}></div>
      <div className={classNames(css.wave, css.middle)}></div>
      <div className={classNames(css.wave, css.bottom)}></div>
    </div>
  );
}

export default memo(Logo);
