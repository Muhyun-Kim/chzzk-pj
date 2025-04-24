"use client";

import { Box, Button } from "@chakra-ui/react";
import { getEternalReturnLive } from "./actions";
import LiveList from "./live-list";

export default function EternalReturnHome() {
  const onClickTest = async () => {
    await getEternalReturnLive();
  };
  return (
    <Box>
      <LiveList />
    </Box>
  );
}
