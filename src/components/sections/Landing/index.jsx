import React from "react";
import css from "./styles.module.scss";
import { useAppState } from "../../../reducers/AppReducer";

const getBgUrl = (images) => `url(${images["green-bg"]?.src || ""})`;

export default function Landing() {
  const { images } = useAppState();

  return (
    <section className={css.container} style={{ background: getBgUrl(images) }}>
      <h1>Dmytro Khyzhniak</h1>
      <h2>Software Engineer</h2>
    </section>
  );
}
