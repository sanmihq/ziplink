This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Ziplink README

## Overview

This project is a URL shortener implemented using Next.js, Redis, and Upstash. It provides a simple and efficient way to generate short URLs for long links, making them easier to share.

## Project Structure

### 1. `app/index.tsx` - Home Page

- The main entry point of the application.
- Displays a landing page and an input to shorten URLs.
- Utilizes the `UrlShortener` component.

### 2. `components/UrlShortener.tsx` - URL Shortener Component

- Manages the state, input, and interactions related to the URL shortening process.
- Allows users to input a long URL and generates a short URL using the `/api/shorten` endpoint.
- Displays a list of shortened URLs using the `ShortUrlList` component.

### 3. `components/ShortUrlList.tsx` - Short URL List Component

- Displays a list of shortened URLs using the `ShortUrlCard` component.

### 4. `components/ShortUrlCard.tsx` - Short URL Card Component

- Represents an individual card displaying information about a shortened URL.
- Provides actions such as copying to clipboard and deleting the URL.

### 5. `lib/redis.ts` - Redis Functions

- Connects to the Upstash Redis database using the `@upstash/redis` library.
- Defines functions for setting, getting, and deleting URL mappings in the database.

### 6. `app/api/shorten.ts` - URL Shortening API Endpoint

- Handles the URL shortening logic by generating a short URL using `nanoid`, saving it to Redis, and returning the result.

### 7. `middleware.ts` - URL Redirection Middleware

- Middleware to intercept requests and redirect to the original URL if a short URL is found in the database.

## Setup and Dependencies

### 1. Next.js

- The project is built using the Next.js framework for React applications.

### 2. Redis and Upstash

- Redis is used for storing and retrieving URL mappings.
- Upstash provides a hosted Redis service.

### 3. Sonner

- The `sonner` library is used for displaying toast notifications.

### 4. NextUI

- NextUI components are utilized for building the user interface.

### 5. Nanoid

- The `nanoid` library is used for generating unique short URL identifiers.

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up Upstash Redis and obtain the necessary credentials.
4. Update the Redis configuration in `lib/redis.ts` with the obtained URL and token.
5. Run the development server using `npm run dev`.
6. Open the application in your browser at [`http://localhost:3000`](`http://localhost:3000`).

## Contributing

If you'd like to contribute to this project, feel free to submit issues or pull requests.
