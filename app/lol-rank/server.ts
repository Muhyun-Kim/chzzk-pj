"use server";

const baseUrl = "https://asia.api.riotgames.com";

const apiEndpoint = {
  puuid: "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id",
  rank: "https://kr.api.riotgames.com/lol/league/v4/entries/by-puuid",
};

interface PuuidRes {
  puuid: string;
  gameName: string;
  tagLine: string;
}

function getRiotApiKey() {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  if (!RIOT_API_KEY) {
    throw new Error("apiKey is not defined");
  }
  return RIOT_API_KEY;
}

async function getAccountByRiotId(
  gameName: string,
  tagLine: string
): Promise<PuuidRes> {
  const RIOT_API_KEY = getRiotApiKey();
  const url = `${apiEndpoint.puuid}/${encodeURIComponent(
    gameName
  )}/${encodeURIComponent(tagLine)}`;

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

  const data = (await response.json()) as PuuidRes;

  return data;
}

interface RankRes {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  puuid: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export async function getRank(): Promise<RankRes> {
  const RIOT_API_KEY = getRiotApiKey();
  const puuid = (await getAccountByRiotId("고수달", "KR1")).puuid;
  const url = `${apiEndpoint.rank}/${puuid}`;
  const response = await fetch(url, {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  });
  const data = (await response.json()) as RankRes[];
  return data[0];
}
