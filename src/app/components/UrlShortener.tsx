"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import ShortUrlList from "./ShortUrlList";
import { toast } from "sonner";

// Main component for URL shortener
export default function UrlShortener() {
  // State variables
  const [longUrl, setLongUrl] = useState("");
  const [urls, setUrls] = useState<{ shortUrl: string; originalUrl: string }[]>(
    [],
  );
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  // Copy to clipboard function
  const handleCopy = () => {
    setCopied(true);
    console.log("Copied to clipboard");
  };

  // Function to shorten URL
  const shortenUrl = async () => {
    try {
      // Check if input is empty
      if (!longUrl.trim()) {
        toast.error("Please enter a URL");
        return;
      }

      try {
        // Check if input contains a valid URL
        new URL(longUrl);
      } catch (error) {
        toast.error("Please enter a valid URL");
        return;
      }

      // Fetch API to shorten URL
      const response = await fetch("/api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        const errorMessage = "Failed to shorten URL";
        throw new Error(errorMessage);
      }

      toast.success("URL shortened successfully!");

      // Parse response data
      const data = await response.json();

      // Update state with new shortened URL
      setUrls((prevUrls) => [
        { shortUrl: data.shortUrl, originalUrl: longUrl },
        ...prevUrls.slice(0, 2),
      ]);

      // Reset input and error
      setLongUrl("");
      setError("");
    } catch (error) {
      console.error("Error shortening URL:", error);
      setError("Error shortening URL");
    }
  };

  // JSX structure for the component
  return (
    <div className="mx-auto">
      <div>
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
      </div>

      {/* Display the list of shortened URLs */}
      <ShortUrlList urls={urls} onCopy={handleCopy} />

      {/* Display error message if there is an error */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
