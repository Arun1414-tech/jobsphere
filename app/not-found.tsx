import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-7xl font-bold">404</h1>

      <p className="mt-4 text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link href="/">
        <button className="mt-8 bg-blue-600 px-6 py-3 rounded-xl">
          Go Home
        </button>
      </Link>

    </main>
  );
}