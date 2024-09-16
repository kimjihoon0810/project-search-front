"use client";

import ProfileItem from "@/components/item/ProfileItem";
import ParamTagList from "@/components/list/ParamTagList";
import SearchBar from "@/components/SearchBar";
import { ROLE } from "@/defines";
import { PROFILES } from "@/dummy";
import { ProfileData } from "@/types";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import ProfileList from "@/components/list/ProfileList";

const cx = classNames.bind(styles);

export default function Page() {
  return (
    <>
      <SearchBar />
      <ParamTagList data={ROLE} containerStyle={{ marginBlock: 20 }} />
      <ProfileList />
    </>
  );
}
