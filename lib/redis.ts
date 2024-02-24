import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://certain-oriole-43380.upstash.io",
  token:
    "Aal0ASQgMmExZmEyOWYtMGQzMC00NmE0LTg0YmMtMjZmYjQ0NTczYmFmMTJmOTRkYTBkMDBkNGM4ZThhNTBlNGQ4ZTZiMTIwOTY=",
});

// fucntion to set url mappings to db
export async function setUrl(shortUrl: string, longUrl: string): Promise<void> {
  await redis.hset("urls", { [shortUrl]: longUrl });
}

// function to get url mappings from db
export async function getUrl(shortUrl: string): Promise<string | null> {
  const data: string | null = await redis.hget("urls", shortUrl);

  return data ?? null;
}

// Function to delete url mapping from db
export async function deleteUrl(shortUrl: string): Promise<void> {
  await redis.hdel("urls", shortUrl);
}
