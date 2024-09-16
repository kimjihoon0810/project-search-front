import React from "react";
import styles from "./ListSection.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ListSection {
  title: React.ReactNode;
  children?: React.ReactNode;
  direction?: string;
  containerStyle?: React.CSSProperties;
  gap?: number;
}

export default function ListSection({
  title,
  children,
  direction = "horizontal",
  containerStyle,
  gap,
}: ListSection) {
  return (
    <section className={cx("container")} style={containerStyle}>
      <h2>{title}</h2>
      <div
        className={cx("wrapper")}
        style={{ overflowX: direction === "horizontal" ? "scroll" : "auto" }}
      >
        <div
          className={cx("content")}
          style={{
            flexDirection: direction === "horizontal" ? "row" : "column",
            gap: gap || 0,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
