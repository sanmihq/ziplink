import { NextRequest, NextResponse } from "next/server";
import { getUrl } from "../lib/redis";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split("/")[1];

  if (["favicon.ico", "api", "static", "_next"].includes(path)) return;

  const shortUrl = await getUrl(path);

  if (shortUrl) {
    return NextResponse.redirect(shortUrl);
  }
}
