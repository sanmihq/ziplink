import Link from "next/link";
import {
  Button,
  Card,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClipboardDocumentIcon } from "@heroicons/react/20/solid";
import {
  ArrowTrendingUpIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

interface ShortUrlCardProps {
  shortUrl: string;
  originalUrl: string;
  onCopy: () => void;
  onDelete: () => void;
}

export default function ShortUrlCard({
  shortUrl,
  originalUrl,
  onCopy,
  onDelete,
}: ShortUrlCardProps) {
  const baseUrl = () => {
    const { protocol, host } = window.location;
    return `${protocol}//${host}`;
  };
  const fullUrl = (shortUrl: string) => `${baseUrl()}/${shortUrl}`;

  return (
    <Card
      radius="md"
      isBlurred
      className="border-2 border-transparent bg-opacity-70 p-4 hover:border-black"
    >
      <div className="flex items-center justify-between">
        <div className="flex w-4/5 flex-col items-start gap-1">
          <div className="flex w-full items-center gap-4">
            <Link
              href={fullUrl(shortUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="text:sm md:text-md truncate text-start font-semibold hover:underline"
            >
              {fullUrl(shortUrl)}
            </Link>

            {/* copy to clipboard button */}
            <CopyToClipboard text={fullUrl(shortUrl)} onCopy={onCopy}>
              <Button isIconOnly color="default" size="sm" variant="flat">
                <ClipboardDocumentIcon className="h-4 w-4" />
              </Button>
            </CopyToClipboard>
          </div>
          <Link
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full truncate text-start text-xs md:text-sm"
          >
            {originalUrl}
          </Link>
        </div>

        {/* actions dropdown */}
        <Dropdown>
          <DropdownTrigger>
            <button type="button">
              <EllipsisVerticalIcon className="h-5 w-5" />
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Actions Dropdown"
            color="secondary"
            variant="solid"
            disabledKeys={["analyze"]}
          >
            <DropdownItem
              key="share"
              startContent={<ShareIcon className="h-4 w-4" />}
            >
              Share
            </DropdownItem>
            <DropdownItem
              key="analyze"
              startContent={<ArrowTrendingUpIcon className="h-4 w-4" />}
            >
              <span>Analyze</span>
              <Chip size="sm" color="secondary" className="ml-2">
                coming soon
              </Chip>
            </DropdownItem>
            <DropdownItem
              key="delete"
              startContent={<TrashIcon className="h-4 w-4" />}
              className="text-danger"
              color="danger"
              onClick={onDelete}
            >
              Delete URL
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Card>
  );
}
