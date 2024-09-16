import { ProfileData } from "@/types";
import styles from "./ProfileCard.module.scss";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";

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
    >
      <div className={cx("info")}>
        <div className={cx("name-info")}>
          <div>
            <span className={cx("nickname")}>{nickname}</span>
            <span className={cx("role")}>{role}</span>
          </div>
          <span className={cx("hit")}>1,100</span>
        </div>

        <div className={cx("skill-info")}>
          <div className={cx("skills")}>
            {skills.map((s) => {
              return (
                <div key={`SKILL_${s}`} className={cx("skill")}>
                  <Image
                    src={`/images/lang/${s}.png`}
                    alt={s}
                    width={12}
                    height={12}
                  />
                  <span>{s}</span>
                </div>
              );
            })}
          </div>
          <div className={cx("introduce")}>
            <span>{introduce}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
