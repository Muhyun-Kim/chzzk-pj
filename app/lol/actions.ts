"use server";

import { getLive } from "@/lib/service/chzzk";

const liveCategory = "League_of_Legends";

export const getLolLive = async () => {
  const res = await getLive(liveCategory);
  return res;
};
