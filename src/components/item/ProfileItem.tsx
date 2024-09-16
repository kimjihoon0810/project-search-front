import Link from "next/link";
import styles from "./ProfileItem.module.scss";
import classNames from "classnames/bind";
import { ProfileData } from "@/types";
import Image from "next/image";

const cx = classNames.bind(styles);

export default function ProfileItem({
  id,
  profile_image,
  nickname,
  role,
  skills,
  introduce,
}: ProfileData) {
  return (
    <Link href={`/mates/${id}`} className={cx("container")}>
      <Image src={profile_image} alt={nickname} width={100} height={120} />
      <div className={cx("info")}>
        <span className={cx("name")}>
          {nickname} <span>({role})</span>
        </span>
      </div>
    </Link>
  );
}
