import SearchBar from "@/components/SearchBar";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import Carousel from "@/components/Carousel";
import ListSection from "@/components/ListSection";
import { PROFILES } from "@/dummy";
import { ProfileData } from "@/types";
import ProfileCard from "@/components/item/ProfileCard";

const cx = classNames.bind(styles);

function ProfileList() {
  const profileList: ProfileData[] = PROFILES;

  return (
    <ListSection
      containerStyle={{ gap: 20, marginBottom: 40 }}
      gap={20}
      title={
        <>
          <b>메이트</b>를 추천합니다
        </>
      }
    >
      {profileList.map((profile) => {
        return <ProfileCard key={`PROFILE_${profile.id}`} {...profile} />;
      })}
    </ListSection>
  );
}
function ProjectList() {
  const profileList: ProfileData[] = PROFILES;

  return (
    <ListSection
      direction="vertical"
      title={
        <>
          <b>모집중인</b> 프로젝트가 있어요
        </>
      }
    ></ListSection>
  );
}

export default function Home() {
  return (
    <>
      <SearchBar containerStyle={{ marginBottom: 20 }} />
      <Carousel containerStyle={{ marginBottom: 30 }} />
      <ProfileList />
      <ProjectList />
    </>
  );
}
