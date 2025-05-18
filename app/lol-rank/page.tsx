import MainPage from "./main-page";
import { getAccountByRiotId } from "./server";

export default async function Rank() {
  const data = await getAccountByRiotId("고수달", "KR1");
  console.log(data);
  return <MainPage />;
}
