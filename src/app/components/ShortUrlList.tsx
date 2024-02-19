import ShortUrlCard from "./ShortUrlCard";

interface ShortUrlListProps {
  urls: { shortUrl: string; originalUrl: string }[];
  onCopy: () => void;
}

export default function ShortUrlList({ urls, onCopy }: ShortUrlListProps) {
  return (
    <div className="mx-auto my-20 flex w-full flex-col gap-5 md:w-1/2">
      {urls.map((url, index) => (
        <ShortUrlCard
          key={index}
          shortUrl={url.shortUrl}
          originalUrl={url.originalUrl}
          onCopy={onCopy}
        />
      ))}
    </div>
  );
};

