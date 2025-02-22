"use server";

import { getLive } from "@/lib/service/chzzk";

const liveCategory = "Black_Survival_Eternal_Return";

export const getEternalReturnLive = async () => {
  const res = await getLive(liveCategory);
  return res;
};
