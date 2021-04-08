import { VFC } from "react";
import styles from "./Profile.module.css";
import myProfilePicture from "../../../images/myProfilePicture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Profile: VFC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <h2>My profile</h2>
        <div className={styles.profile_wrapper}>
          <div className={styles.image_wrapper}>
            <img
              src={myProfilePicture}
              alt="プロフィール写真"
              className={styles.image}
            />
          </div>
          <div className={styles.profile_message}>
            <h3>
              武井　遼太
              <br /> Takei Ryota
            </h3>
            <p>1995年11月30日生まれ（現 25歳）</p>
            <div className={styles.sns}>
              <a href="https://twitter.com/takeinnn">
                <span>
                  <FontAwesomeIcon icon={faTwitter} />
                &nbsp;Twitter&nbsp;
                </span>
              </a>
              <a href="https://github.com/Ryota-takei">
                &nbsp;/&nbsp;&nbsp;
                <span>
                  <FontAwesomeIcon
                    className={styles.logo_icon}
                    icon={faGithub}
                  />
                &nbsp;Github&nbsp;
                </span>
              </a>

              <a href="https://qiita.com/takeiin">
                /
                <span>
                &nbsp;Qiita
                  </span>
              </a>
            </div>
           
            <p>
              便利なサービスを自らの手で生み出して、
              <br />
              人々の生活を豊かにしたいという思いからエンジニアを目指しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
