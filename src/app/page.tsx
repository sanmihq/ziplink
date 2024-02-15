"use client";

import { useState } from "react";
import Link from "next/link";
import { shortenUrl } from "../../utils/api";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShortenUrl = async () => {
    // Validate that the longUrl is not empty
    if (!longUrl.trim()) {
      setError("Long URL cannot be empty");
      setShortUrl("");
      return;
    }

    try {
      const shortenedUrl = await shortenUrl({ longUrl });
      setError(""); // Reset error when there's no error
      setShortUrl(shortenedUrl);
    } catch (error) {
      setError("Error shortening URL");
      setShortUrl("");
    }
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1>Welcome to ziplink</h1>
      <div className="flex items-center gap-6">
        <input
          placeholder="Enter long URL"
          className="rounded-xl p-3 text-sm text-black"
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button
          onClick={handleShortenUrl}
          className="rounded-xl bg-gray-700 p-3 text-sm text-white"
        >
          Shorten
        </button>
      </div>

      {error && <p className="text-red-400">{error}</p>}

      {shortUrl && (
        <div>
          <p>Short URL: {shortUrl}</p>
          {/* Add a link to the shortened URL */}
          <Link
            href={`/redirect?shortUrl=${encodeURIComponent(shortUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Link>
        </div>
      )}
    </div>
  );
}
