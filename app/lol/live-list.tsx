"use client";

import { useEffect, useState } from "react";
import { getLolLive } from "./actions";
import { LiveData } from "@/lib/service/chzzk";
import CustomLiveList from "@/components/custom/custom-live-list";

export default function LiveList() {
  const [liveList, setLiveList] = useState<LiveData[]>([]);
  useEffect(() => {
    const getLiveList = async () => {
      const fetchedLiveList = await getLolLive();
      if ("content" in fetchedLiveList) {
        setLiveList(fetchedLiveList.content.data);
      }
    };
    getLiveList();
  }, []);
  return (
    <>
      <CustomLiveList liveList={liveList} />
    </>
  );
}
