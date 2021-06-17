import { VFC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import portfolio from "../../../../images/portfolio.png";
import Weather_App from "../../../../images/Weather_app.png";
import my_blog from "../../../../images/my_blog.png";
import morecon from "../../../../images/morecon.png";
import styles from "./SliderItem.module.css";
import { WorksCard } from "../../worksCard/WorksCard";

export const SliderItem: VFC = () => {
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={morecon}
            workName="MoreCon"
            description="『実現して欲しいサービスがあると人』と『実現できる人』を結んで、もっと便利で住みやすい国にしたいと思い制作しました。"
            skill="TypeScript/React/ReduxToolkit/Amplify/GraphQL"
            worksUrl="https://www.morecon.net/"
            github="https://github.com/Ryota-takei/MoreCon"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={my_blog}
            workName="Programming Blog"
            description={`学んだことをアウトプットするためのブログサイトを作成しました。本格運用は改めて行う予定です。
            そのため一時的に管理ユーザー側も公開中です。下記のURLからE-mail『GuestUser@gggmail.com』password『12341234』でログインできます。
            ※現在は新規投稿機能や編集機能は操作いただいて大丈夫です。`}
            otherInformation="https://www.ryota-programming-blog.com/login"
            worksUrl="https://www.ryota-programming-blog.com/"
            github="https://github.com/Ryota-takei/my-blog"
            skill="TypeScript/React/ReduxToolkit/Amplify/GraphQL"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={Weather_App}
            workName="Weather App"
            description="現在地もしくは検索した地域の天気情報を取得して表示するアプリです。外部API(OpenWeatherAPI,GoogleMapAPI)に慣れる一環で作成しました。"
            worksUrl="https://main.d3ie72edj5o6du.amplifyapp.com/"
            github="https://github.com/Ryota-takei/weather_app"
            skill="TypeScript/React/ReduxToolkit/Amplify（デプロイ)"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={portfolio}
            workName="My portfolio"
            description="React＋Amplifyを用いて作成した本サイトになります。作成したポートフォリオを順次上げていきたいと思います。"
            worksUrl="https://www.ryota-portfolio.com/"
            github="https://github.com/Ryota-takei/Portfolio"
            skill="TypeScript/React/Amplify(デプロイ)"
          />
        </div>
      </Slider>
    </div>
  );
};
const NextArrow: VFC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000000",
        opacity: "0.8",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow: VFC<any> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#000000",
        opacity: "0.8",
      }}
      onClick={onClick}
    />
  );
};

const settings: any = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  lazyLoad: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
