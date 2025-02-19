export function GET() {
  const baseUrl = "https://chzzk.naver.com/account-interlock";
  const params = {
    clientId: process.env.CHZZK_CLIENT_ID!,
    redirectUri: process.env.CHZZK_REDIRECT_URI!,
    state: process.env.CHZZK_STATE!,
  };
  const formattedParams = new URLSearchParams(params).toString();
  const finalUrl = `${baseUrl}?${formattedParams}`;
  return Response.redirect(finalUrl);
}
