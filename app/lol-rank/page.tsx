import { getRankWithStreamer } from "./server";
import MainPage from "./main-page";

export default async function Rank() {
  const data = await getRankWithStreamer();
  return <MainPage data={data} />;
}
