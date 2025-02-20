"use client";

import { Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getEternalReturnLive } from "./actions";
import { getLive, LiveData } from "@/lib/service/chzzk";

export default function LiveList() {
  const [liveList, setLiveList] = useState<LiveData[]>([]);
  useEffect(() => {
    const getLiveList = async () => {
      const fetchedLiveList = await getEternalReturnLive();
      if ("content" in fetchedLiveList) {
        setLiveList(fetchedLiveList.content.data);
      }
    };
    getLiveList();
  }, []);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      {liveList.map((live, index) => (
        <Flex
          direction="column"
          align="start"
          key={index}
          border="1px solid"
          borderRadius={8}
          borderColor="gray.200"
        >
          <Link
            color="black"
            href={live.liveThumbnailImageUrl}
            target="_blank"
            width={"100%"}
          >
            <Image
              src={live.liveThumbnailImageUrl}
              alt={`${live.liveId}`}
              width="100%"
              height="200px"
              objectFit="cover"
              borderTopRadius={8}
            />
          </Link>
          <Link color="black" href={"/"} target="_blank">
            {live.liveTitle}
          </Link>
        </Flex>
      ))}
    </Grid>
  );
}
