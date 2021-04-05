import { VFC } from "react";
import styles from "./MainVisual.module.css";

export const MainVisual: VFC = () => {
  return (
    <div className={styles.main_visual}>
      <div className={styles.heading_wrapper}>
        <h1 className={styles.heading}>
          Welcome to <br />
          my portfolio.
        </h1>
      </div>
    </div>
  );
};
