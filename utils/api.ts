// type shortenParams = {
//   longUrl: string;
// };

// export async function shortenUrl({
//   longUrl,
// }: {
//   longUrl: string;
// }): Promise<string> {
//   try {
//     const response = await fetch("/api/shorten", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ longUrl }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       return data.shortUrl;
//     } else {
//       console.error("Error shortening URL");
//       throw new Error("Error shortening URL");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     throw new Error("Error shortening URL");
//   }
// }
