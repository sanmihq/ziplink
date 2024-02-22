import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { setUrl } from "../../../../lib/redis";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // get longUrl from request
    const { longUrl } = await req.json();

    // generate shortUrl
    const shortUrl = nanoid(10);

    // save shortUrl to Redis
    await setUrl(shortUrl, longUrl);

    const responsePayload = { shortUrl };

    return new NextResponse(JSON.stringify(responsePayload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error shortening URL:", error);
    return new NextResponse("Error shortening URL", {
      status: 400,
    });
  }
}
