import ParamTagList from "@/components/list/ParamTagList";
import SearchBar from "@/components/SearchBar";
import { ROLE } from "@/defines";

export default function Page() {
  return (
    <>
      <SearchBar />
      <ParamTagList data={ROLE} containerStyle={{ marginBlock: 20 }} />
    </>
  );
}
