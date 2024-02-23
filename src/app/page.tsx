import UrlShortener from "./components/UrlShortener";

export default function Home() {
  return (
    <div className="h-screen w-full py-20 text-center">
      <h1 className="mb-10 text-3xl font-bold md:text-4xl lg:text-5xl">
        Simplify Your Links,
        <br /> Supercharge Your Sharing!
      </h1>
      <p className="mb-20 text-balance text-sm">
        Upgrade your links with Ziplink!
        <br /> Simplify sharing, it&apos;s quick and hassle-free.
        <br /> Revolutionize your experience now!
      </p>
      <UrlShortener />
    </div>
  );
}
