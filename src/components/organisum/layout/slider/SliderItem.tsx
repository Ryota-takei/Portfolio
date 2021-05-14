import { VFC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import comingSoon from "../../../../images/comingSoon.jpg";
import portfolio from "../../../../images/portfolio.png";
import Weather_App from "../../../../images/Weather_app.png";
import my_blog from "../../../../images/my_blog.png";
import styles from "./SliderItem.module.css";
import { WorksCard } from "../../worksCard/WorksCard";

export const SliderItem: VFC = () => {
  return (
    <div className={styles.container}>
      <Slider {...settings} >
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={my_blog}
            workName="Programming Blog"
            description="学んだことをアウトプットするためのブログサイトを作成しました。"
            worksUrl="https://www.ryota-programming-blog.com/"
            github="https://github.com/Ryota-takei/my-blog"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={Weather_App}
            workName="Weather App"
            description="現在地もしくは検索した地域の天気情報を取得して表示するアプリです。React, TypeScript,Redux toolkit,外部APIに慣れる一環で作成しました。"
            worksUrl="https://main.d3ie72edj5o6du.amplifyapp.com/"
            github="https://github.com/Ryota-takei/weather_app"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={portfolio}
            workName="My portfolio"
            description="React＋Amplifyを用いて作成した本サイトになります。React hooks,React context, カスタムフック、アトミックデザインを意識した設計となっています。"
            worksUrl="https://www.ryota-portfolio.com/"
            github="https://github.com/Ryota-takei/Portfolio"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={comingSoon}
            workName="COMING SOON"
            description="COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON"
            worksUrl="/"
            github="/"
          />
        </div>
        <div className={styles.card_wrapper}>
          <WorksCard
            imageUrl={comingSoon}
            workName="COMING SOON"
            description="COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON"
            worksUrl="/"
            github="/"
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
