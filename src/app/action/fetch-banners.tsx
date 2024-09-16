"use server";

import { api } from ".";

const URL = "/banners";

export const getBanners = async () => {
  try {
    const response = await api({
      url: "/banners",
      params: { method: "GET", cache: "force-cache" },
    });

    if (!response.ok) {
      throw new Error("못가져옴");
    }

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
