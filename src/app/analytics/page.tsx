import { Button, Link } from "@nextui-org/react";

export default function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-xl font-semibold">
        This feature isn&apos;t available yet
      </h1>
      <Button as={Link} href="/" color="secondary" size="md">
        Go back
      </Button>
    </div>
  );
}
