import db from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  if (!code) {
    return notFound();
  }

  const accessTokenBody = JSON.stringify({
    grantType: "authorization_code",
    clientId: process.env.CHZZK_CLIENT_ID!,
    clientSecret: process.env.CHZZK_CLIENT_SECRET!,
    code,
    state: process.env.CHZZK_STATE!,
  });

  const accessTokenUrl = "https://chzzk.naver.com/auth/v1/token";
  const accessTokenResponse = await fetch(accessTokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: accessTokenBody,
  });

  const accessTokenData = await accessTokenResponse.json();

  const accessToken = accessTokenData.content?.accessToken;
  const refreshToken = accessTokenData.content?.refreshToken;

  await db.accessToken.upsert({
    where: { id: "unique_token" },
    update: { accessToken, refreshToken },
    create: { id: "unique_token", accessToken, refreshToken },
  });

  return redirect("/");
}
