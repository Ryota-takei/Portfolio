import { useContext, useEffect, VFC } from "react";
import { Link, useLocation } from "react-router-dom";
import { StateContext } from "../../../providers/StateProvider";
import styles from "./Header.module.css";

export const Header: VFC = () => {
  const { menubarColor, setMenubarColor } = useContext(StateContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMenubarColor(true);
    }
  }, []);

  return (
    <div
      className={menubarColor ? styles.none_color_Header : styles.color_Header}
    >
      <div className={styles.container}>
        <h3 className={styles.heading}>
        <Link
              to="/"
              className={styles.link}
              onClick={() => setMenubarColor(true)}
            >
          My portfolio
          </Link></h3>
        <ul className={styles.list}>
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
