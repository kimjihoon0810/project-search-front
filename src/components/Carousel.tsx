"use client";

import Image from "next/image";
import styles from "./Carousel.module.scss";
import classNames from "classnames/bind";
import React from "react";

const cx = classNames.bind(styles);

interface NavigationProps {
  list: string[];
  currIndex: number;
  onChangeIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Navigation({ list = [], currIndex, onChangeIndex }: NavigationProps) {
  return (
    <div className={cx("navigation")}>
      <div className={cx("dots")}>
        {list.map((v, i) => {
          const active = i === currIndex - 1;
          return (
            <div
              key={v}
              className={cx("dot", { active })}
              onClick={() => {
                onChangeIndex(i + 1);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

interface CarouselProps {
  list: string[];
  showNavigation?: boolean;
  containerStyle?: React.CSSProperties;
}

export default function Carousel({
  list,
  showNavigation = true,
  containerStyle,
}: CarouselProps) {
  const carouselRef = React.useRef<HTMLUListElement>(null);

  const [currentList, setCurrentList] = React.useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(1);

  React.useEffect(() => {
    if (list.length !== 0) {
      setCurrentList([list[list.length - 1], ...list, list[0]]);
    }
  }, [list]);

  React.useEffect(() => {
    if (carouselRef.current != null) {
      carouselRef.current.style.transform = `translateX(-${currentIndex}00%)`;
    }
  }, [currentIndex]);

  return (
    <div className={cx("container")} style={containerStyle}>
      <div className={cx("wrapper")}>
        {showNavigation && (
          <Navigation
            list={list}
            currIndex={currentIndex}
            onChangeIndex={setCurrentIndex}
          />
        )}

        <ul className={cx("carousel")} ref={carouselRef}>
          {currentList.map((v, i) => {
            return (
              <li key={`SLIDE_${v}_${i}`}>
                <Image src={v} alt={v} width={768} height={300} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
