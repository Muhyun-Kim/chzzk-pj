"use client";

import { Box, Flex, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navbarBtns = [
    { url: "/lol-rank", text: "롤 순위" },
    { url: "/lol", text: "리그오브레전드 라이브" },
    { url: "/eternal-return", text: "이터널리턴 라이브" },
  ];
  return (
    <Box bg="#2f3541" px={4} position={"sticky"} top={0} zIndex={1000}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Button variant="ghost" fontSize="xl" fontWeight="bold">
            Logo
          </Button>
        </Link>
        <HStack display={{ base: "none", md: "flex" }}>
          {navbarBtns.map((btn, index) => (
            <NavbarBtn key={index} urlString={btn.url} text={btn.text} />
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}

interface NavbarBtnProps {
  urlString: string;
  text: string;
}

function NavbarBtn({ urlString, text }: NavbarBtnProps) {
  const pathname = usePathname();
  return (
    <Link href={urlString} passHref>
      <Button variant="ghost" bg={pathname == urlString ? "#131927" : ""} p={4}>
        {text}
      </Button>
    </Link>
  );
}
