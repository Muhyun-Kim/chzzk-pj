"use client";

import { Flex, Grid, Link, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchLOLStreamerList, LiveStream } from "./actions";

export default function LiveList() {
  const [liveStreams, setLiveStreams] = useState<LiveStream[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchLOLStreamerList();
      if (res) {
        setLiveStreams(res);
      }
    };
    fetchData();
  }, []);
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      {liveStreams.map((stream, index) => (
        <Flex
          direction="column"
          align="start"
          key={index}
          border="1px solid"
          borderRadius={8}
          borderColor="gray.200"
        >
          <Link color="black" href={stream.link} target="_blank" width={"100%"}>
            <Image
              src={stream.imgSrc}
              alt={stream.name}
              width="100%"
              height="200px"
              objectFit="cover"
              borderTopRadius={8}
            />
          </Link>

          <Text color={"black"}>{stream.name}</Text>
          <Text color={"black"}>{stream.viewers}</Text>
          <Link color="black" href={stream.link} target="_blank">
            {stream.title}
          </Link>
        </Flex>
      ))}
    </Grid>
  );
}
