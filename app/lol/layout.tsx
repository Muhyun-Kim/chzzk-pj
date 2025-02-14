import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LOL",
  description: "League of Legends",
};

export default function LoLRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
