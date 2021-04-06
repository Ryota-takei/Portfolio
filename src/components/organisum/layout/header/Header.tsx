import { useState, VFC } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export const Header: VFC = () => {
  const [top, setTop] = useState<boolean>(false);

  return (
    <div className={top ? styles.topHeader : styles.otherHeader}>
      <div className={styles.container}>
        <h3 className={styles.heading}>My portfolio</h3>
        <ul className={styles.list}>
          <li>
            <Link to="/" className={styles.link} onClick={() => setTop(true)}>
              Top
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={styles.link}
              onClick={() => setTop(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className={styles.link}
              onClick={() => setTop(true)}
            >
              Works
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.link} onClick={() => setTop(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
