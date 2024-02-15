import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { longUrl } = await req.json();
    const shortId = nanoid(10);
    const shortUrl = `ziplink/${shortId}`;
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
