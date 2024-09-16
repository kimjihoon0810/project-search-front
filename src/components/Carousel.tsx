"use client";

import classNames from "classnames/bind";
import styles from "./Carousel.module.scss";
import { BANNERS } from "@/dummy";
import { BannerData } from "@/types";
import React from "react";
import "../app/styles/components.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

interface NavigationProps {
  auto: boolean;
  setAuto: () => void;
  dots: BannerData[];
  currIdx: number;
  handleIndex: (idx: number) => void;
}

function Navigation({
  auto,
  setAuto,
  dots,
  currIdx,
  handleIndex,
}: NavigationProps) {
  return (
    <div className={cx("navigation")}>
      <div className={cx("dots")}>
        {dots.map((dot, idx) => {
          const active = idx === currIdx;
          return (
            <button
              key={`NAV_BTN_${dot.title}`}
              className={cx("dot", { active })}
              onClick={() => handleIndex(idx)}
            ></button>
          );
        })}
      </div>

      <div className={cx("play_btn")} onClick={() => setAuto()}>
        {auto ? (
          <Image
            src={"/images/icon/pause.png"}
            width={8}
            height={12}
            alt="정지"
          />
        ) : (
          <Image
            src={"/images/icon/play.png"}
            width={12}
            height={12}
            alt="재생"
          />
        )}
      </div>
    </div>
  );
}
interface SlideProps {
  title: string;
  desc: string;
  slug: string;
  image: string;
  link: string;
  active: boolean;
}

function Slide({ title, desc, slug, image, link, active }: SlideProps) {
  return (
    <div
      className={cx("slide", { active })}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={cx("content")}>
        <p className={cx("title")}>{title}</p>
        <p className={cx("desc")}>{desc}</p>
        <button className={"white_btn"}>{slug} 바로가기</button>
      </div>
    </div>
  );
}

interface CarouselProps {
  containerStyle?: React.CSSProperties;
}

export default function Carousel({ containerStyle }: CarouselProps) {
  const slides: BannerData[] = BANNERS;
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [auto, setAuto] = React.useState<boolean>(true);

  const setAutoplay = () => {
    setAuto((prev) => !prev);
  };

  const handleIndex = (idx: number) => {
    setCurrentIdx(idx);
  };

  React.useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [auto]);

  return (
    <section className={cx("container")} style={containerStyle}>
      <Navigation
        auto={auto}
        setAuto={setAutoplay}
        dots={slides}
        currIdx={currentIdx}
        handleIndex={handleIndex}
      />

      <div className={cx("carousel")}>
        {slides.map((slide, index) => {
          const active = index === currentIdx;
          return (
            <Slide key={`SLIDE_${slide.title}`} {...slide} active={active} />
          );
        })}
      </div>
    </section>
  );
}
