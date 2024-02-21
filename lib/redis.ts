import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://certain-oriole-43380.upstash.io",
  token:
    "Aal0ASQgMmExZmEyOWYtMGQzMC00NmE0LTg0YmMtMjZmYjQ0NTczYmFmMTJmOTRkYTBkMDBkNGM4ZThhNTBlNGQ4ZTZiMTIwOTY=",
});

export async function getUrl(shortUrl: string): Promise<string | null> {
  const data: string | null = await redis.hget("urls", shortUrl);

  return data ?? null;
}
