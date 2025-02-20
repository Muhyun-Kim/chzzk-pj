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
      {/* <Button onClick={onClickTest}>이터널 리턴 홈</Button> */}
      <LiveList />
    </Box>
  );
}
