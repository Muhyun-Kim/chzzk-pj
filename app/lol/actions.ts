"use server";

import { CHZZK_LOL_LIVE_URL } from "@/lib/service/chzzk";
import puppeteer from "puppeteer";

export interface LiveStream {
  name: string;
  title: string;
  viewers: string;
  link: string;
  imgSrc: string;
}

export async function fetchLOLStreamerList() {
  try {
    console.log("Launching browser...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(CHZZK_LOL_LIVE_URL, {
      waitUntil: "networkidle2",
    });

    console.log("Page loaded, extracting data...");

    const liveStreams: LiveStream[] = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(".category_component_item__Sx3co")
      ).map((el) => {
        const name = (
          el.querySelector(".name_text__yQG50") as HTMLElement
        )?.innerText.trim();
        const title = (
          el.querySelector(".video_card_title__Amjk2") as HTMLElement
        )?.innerText
          .trim()
          .replace(/\n.*/, "");
        const viewers = (
          el.querySelector(
            ".thumbnail_badge_container__sMIz3:nth-child(2)"
          ) as HTMLElement
        )?.innerText.trim();
        const link = (
          el.querySelector(".video_card_title__Amjk2") as HTMLAnchorElement
        )?.href;

        const imgElement = el.querySelector(
          ".video_card_image__yHXqv"
        ) as HTMLImageElement;

        const imgSrc = imgElement?.getAttribute("src") ?? "/no-image.png";

        return { name, title, viewers, link, imgSrc };
      });
    });

    await browser.close();
    console.log("Scraping complete:", liveStreams, liveStreams.length);
    return liveStreams;
  } catch (error) {
    console.error("Puppeteer error:", error);
    return null;
  }
}
