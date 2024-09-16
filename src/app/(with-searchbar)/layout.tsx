import SearchBar from "@/components/SearchBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchBar containerStyle={{ marginBottom: 20 }} />
      {children}
    </>
  );
}
