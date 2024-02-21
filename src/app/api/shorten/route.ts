import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "../../../../lib/redis";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // get longUrl from request
    const { longUrl } = await req.json();

    // generate shortUrl
    const shortId = nanoid(10);
    // const shortUrl = `zip.link/${shortId}`;
    const shortUrl = shortId;

    // save it to redis using hset
    await redis.hset("urls", { [shortUrl]: longUrl });

    const responsePayload = { shortUrl };

    return new Response(JSON.stringify(responsePayload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    return new Response("Error shortening URL", {
      status: 400,
    });
  }
}
