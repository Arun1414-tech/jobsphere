import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to AI Job Board
        </h1>
      </main>
    </>
  );
}