import Link from "next/link";
import {
  Button,
  Card,
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
}

export default function ShortUrlCard({
  shortUrl,
  originalUrl,
  onCopy,
}: ShortUrlCardProps) {
  return (
    <Card
      isBlurred
      className="rounded-lg border-2 border-transparent bg-white bg-opacity-70 p-4 drop-shadow-lg backdrop-blur-md hover:border-black"
    >
      <div className="flex items-center justify-between">
        <div className="flex w-4/5 flex-col items-start gap-1">
          <div className="flex items-center gap-4">
            <Link
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-md font-bold hover:underline"
            >
              {shortUrl}
            </Link>

            {/* copy to clipboard button */}
            <CopyToClipboard text={shortUrl} onCopy={onCopy}>
              <Button isIconOnly color="default" size="sm" variant="flat">
                <ClipboardDocumentIcon className="h-4 w-4" />
              </Button>
            </CopyToClipboard>
          </div>
          <Link
            href={originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full truncate text-start text-sm"
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
              Analyze
            </DropdownItem>
            <DropdownItem
              key="delete"
              startContent={<TrashIcon className="h-4 w-4" />}
              className="text-danger"
              color="danger"
            >
              Delete URL
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Card>
  );
}
