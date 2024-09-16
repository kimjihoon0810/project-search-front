import React from "react";
import styles from "./ParamTagList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface Tag {
  title: string;
  value: string;
}

interface ParamTagListProps {
  data: Tag[];
  containerStyle: React.CSSProperties;
}

export default function ParamTagList({
  data,
  containerStyle,
}: ParamTagListProps) {
  return (
    <div className={cx("container")} style={containerStyle}>
      <div className={cx("wrapper")}>
        {data.map((v) => {
          return (
            <div key={`TAG_${v.title}`} className={cx("tag")}>
              <span>{v.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
