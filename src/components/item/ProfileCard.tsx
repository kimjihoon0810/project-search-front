import { ProfileData } from "@/types";
import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";

const cx = classNames.bind(styles);

export default function ProfileCard({
  id,
  profile_image,
  nickname,
  role,
  skills,
  introduce,
}: ProfileData) {
  return (
    <Link
      href={`/profile/${id}`}
      className={cx("container")}
      style={{ backgroundImage: `url(${profile_image})` }}
    ></Link>
  );
}
