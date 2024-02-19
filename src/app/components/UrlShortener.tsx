"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";

import ShortUrlList from "./ShortUrlList";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState<{ shortUrl: string; originalUrl: string }[]>(
    [],
  );
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // copy to clipboard function
  const handleCopy = () => {
    setCopied(true);
  };

  const shortenUrl = async () => {
    try {
      // Check if the input is empty
      if (!longUrl.trim()) {
        setError("Please enter a valid URL");
        return;
      }

      try {
        new URL(longUrl);
      } catch (error) {
        setError("Please enter a valid URL");
        return;
      }

      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();

      setUrls((prevUrls) => [
        { shortUrl: data.shortUrl, originalUrl: longUrl },
        ...prevUrls.slice(0, 2),
      ]);

      setLongUrl(""); // Clear input after successful submission
      setError("");
    } catch (error) {
      console.error("Error shortening URL:", error);
      setError("Error shortening URL");
    }
  };

  return (
    <div className="mx-auto">
      <div className="mb-10">
        <span>Try now</span>
      </div>
      <Input
        size="sm"
        type="text"
        color="secondary"
        variant="flat"
        isRequired
        placeholder="https://zip.link/shorten"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        className="mx-auto w-full drop-shadow-md md:w-2/3"
        endContent={
          <Button
            color="secondary"
            size="sm"
            aria-label="Shorten"
            onClick={shortenUrl}
          >
            Zip It!
          </Button>
        }
      />

      <ShortUrlList urls={urls} onCopy={handleCopy} />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
