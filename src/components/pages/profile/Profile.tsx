import React, { VFC } from "react";
import styles from "./Profile.module.css";
import myProfilePicture from "../../../images/myProfilePicture.jpg";

export const Profile: VFC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <h2>My profile</h2>
        <div className={styles.profile_wrapper}>
          <div className={styles.profile_message}>
            <h3>
              武井　遼太
              <br /> Takei Ryota
            </h3>
            <p>1995年11月30日生まれ（現 25歳）</p>
            <p>
              便利なサービスを自らの手で生み出して、
              <br />
              人々の生活を豊かにしたいという思いからエンジニアを目指しています。
            </p>
          </div>
          <p></p>
          <div className={styles.image_wrapper}>
            <img
              src={myProfilePicture}
              alt="プロフィール写真"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
