import { VFC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import comingSoon from "../../../../images/comingSoon.jpg"
import styles from "./SliderItem.module.css";
import { WorksCard } from "../../worksCard/WorksCard";

export const SliderItem: VFC = () => {
  return (
    <div className={styles.container}>
      <Slider {...settings}>
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
        <div className={styles.card_wrapper}>
          <h3>3</h3>
        </div>
        <div className={styles.card_wrapper}>
          <h3>4</h3>
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
  slidesToShow: 2,
  slidesToScroll: 2,
  speed: 500,
  lazyLoad: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
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
