import SearchBar from "@/components/SearchBar";
import styles from "./page.module.scss";
import classNames from "classnames/bind";
import Carousel from "@/components/Carousel";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <SearchBar containerStyle={{ marginBottom: 20 }} />
      <Carousel
        list={[
          "/images/sample/banner1.png",
          "/images/sample/banner2.png",
          "/images/sample/banner3.png",
          "/images/sample/banner4.png",
          "/images/sample/banner5.png",
          "/images/sample/banner6.png",
        ]}
        containerStyle={{ width: "100%", height: 300 }}
      />
    </>
  );
}
