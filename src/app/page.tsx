import SearchBar from "@/components/SearchBar";
import styles from "./page.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <SearchBar containerStyle={{ marginBottom: 20 }} />
    </>
  );
}
