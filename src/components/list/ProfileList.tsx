"use client";

import { PROFILES } from "@/dummy";
import { ProfileData } from "@/types";
import React from "react";
import ProfileItem from "../item/ProfileItem";
import styles from "./ProfileList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ProfileList() {
  const profileList: ProfileData[] = PROFILES;

  return (
    <div className={cx("container")}>
      {profileList.map((v, i) => {
        return <ProfileItem key={`PROFILE_${v.id}`} {...v} />;
      })}
    </div>
  );
}
