import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-bold text-blue-500"
        >
          <BriefcaseBusiness size={34} />
          JobSphere
        </Link>

        <div className="flex gap-8 text-lg">
          <Link href="/" className="hover:text-blue-500 transition">
            Home
          </Link>

          <Link href="/jobs" className="hover:text-blue-500 transition">
            Jobs
          </Link>

          <Link href="/about" className="hover:text-blue-500 transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}