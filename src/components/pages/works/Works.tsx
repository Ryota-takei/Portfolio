import { VFC } from "react";

import { SliderItem } from "../../organisum/layout/slider/SliderItem";
import styles from "./Works.module.css";

export const Works: VFC = () => {
  return (
    <div className={styles.works}>
      <div className={styles.container}>
        <h2>Works</h2>
        <div className={styles.slider_wrapper}>
          <SliderItem />
        </div>
      </div>
    </div>
  );
};
