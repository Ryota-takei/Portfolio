import { useContext, VFC } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../../../providers/StateProvider";
import styles from "./Footer.module.css";

export const Footer: VFC = () => {
 
  const { menubarColor, setMenubarColor } = useContext(StateContext);

  return (
    <div
      className={`${styles.footer} ${
        menubarColor ? styles.none_color_Footer :styles.color_footer
      }`}
    >
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>
            <Link
              to="/"
              className={styles.link}
              onClick={() => setMenubarColor(true)}
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={styles.link}
              onClick={() => setMenubarColor(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className={styles.link}
              onClick={() => setMenubarColor(false)}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={styles.link}
              onClick={() => setMenubarColor(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
