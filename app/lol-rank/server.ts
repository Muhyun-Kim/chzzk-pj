"use server";

const baseUrl = process.env.BACK_END_URL;

interface GetRankWithStreamer {
  id: number;
  streamer: string;
  tier: string;
  leaguePoints: number;
}

export async function getRankWithStreamer(): Promise<GetRankWithStreamer[]> {
  const url = `${baseUrl}/streamer/lol-rank`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
