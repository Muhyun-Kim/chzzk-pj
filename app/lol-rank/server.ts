"use server";

export async function getAccountByRiotId(gameName: string, tagLine: string) {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(
    gameName
  )}/${encodeURIComponent(tagLine)}`;

  console.log(RIOT_API_KEY);

  if (!RIOT_API_KEY) {
    console.log("apiKey is not defined");
    return;
  }

  const response = await fetch(url, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch Riot account: ${response.status} ${response.statusText}\n${errorText}`
    );
  }

  return response.json();
}

const apiEndpoint = {
  puuid: "/riot/account/v1/accounts/by-riot-id",
  rank: "/lol/league/v4/entries/by-puuid",
};
