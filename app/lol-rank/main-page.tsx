"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import { GetRankWithStreamer } from "./server";

interface MainPageProps {
  data: GetRankWithStreamer[];
}

export default function MainPage({ data }: MainPageProps) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      alignItems={"center"}
    >
      {data.map((streamer) => (
        <Box
          key={streamer.id}
          display={"flex"}
          flexDirection={"row"}
          color={"black"}
        >
          <Text>{streamer.streamer}</Text>
          <Text>{streamer.tier}</Text>
          <Text>{streamer.leaguePoints}</Text>
        </Box>
      ))}
    </Box>
  );
}
