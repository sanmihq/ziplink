import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h1>Welcome to ziplink</h1>
      <input
        placeholder="Enter long URL"
        className="rounded-xl p-3 text-black"
      />
    </div>
  );
}
