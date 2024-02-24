import ShortUrlCard from "./ShortUrlCard";

interface ShortUrlListProps {
  urls: { shortUrl: string; originalUrl: string }[];
  onCopy: () => void;
  onDelete: (index: number) => void;
}

export default function ShortUrlList({
  urls,
  onCopy,
  onDelete,
}: ShortUrlListProps) {
  return (
    <div className="mx-auto my-20 flex w-full flex-col gap-5 md:w-1/2">
      {urls.map((url, index) => (
        <ShortUrlCard
          key={index}
          shortUrl={url.shortUrl}
          originalUrl={url.originalUrl}
          onCopy={onCopy}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}
