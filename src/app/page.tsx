import UrlShortener from "./components/UrlShortener";

export default function Home() {
  return (
    <div className="mt-20 w-full text-center lg:mt-28">
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        Simplify Your Links,
        <br /> Supercharge Your Sharing!
      </h1>
      <p className="my-8 text-balance text-sm text-gray-700 md:my-14 md:font-medium lg:text-base">
        Upgrade your links with Ziplink!
        <br /> Simplify sharing, it&apos;s quick and hassle-free.
        <br /> Revolutionize your experience now!
      </p>
      <UrlShortener />
    </div>
  );
}
