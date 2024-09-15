"use client";

import classNames from "classnames/bind";
import styles from "./SearchBar.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface SearchBarProps {
  containerStyle?: React.CSSProperties;
}

const cx = classNames.bind(styles);

export default function SearchBar({ containerStyle }: SearchBarProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  return (
    <div className={cx("container")} style={containerStyle}>
      <input placeholder={"검색어를 입력하세요"} />
      <Image
        src={"/images/icon/search.png"}
        alt={"검색어를 입력하세요"}
        width={20}
        height={20}
      />
    </div>
  );
}
