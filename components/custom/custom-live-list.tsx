"use client";

import { LiveData } from "@/lib/service/chzzk";
import {
  Flex,
  Grid,
  Link,
  Image,
  Skeleton,
  Stack,
  VStack,
} from "@chakra-ui/react";

interface LiveListProps {
  liveList: LiveData[];
}

export default function CustomLiveList({ liveList }: LiveListProps) {
  if (liveList.length == 0) return <LiveSkeleton />;
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
            href={`https://chzzk.naver.com/live/${live.channelId}`}
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

const LiveSkeleton = () => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} p={4}>
      {Array.from({ length: 20 }).map((_, index) => (
        <Flex
          direction="column"
          align="start"
          key={index}
          border="1px solid"
          borderRadius={8}
          borderColor="gray.200"
          width="100%"
        >
          <Skeleton height="200px" width="100%" borderTopRadius={8} />
          <Stack mt={2} px={2} gap={2} width="100%">
            <Skeleton height="16px" width="80%" />
          </Stack>
        </Flex>
      ))}
    </Grid>
  );
};
