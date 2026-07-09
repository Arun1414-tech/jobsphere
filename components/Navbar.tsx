export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        AI Job Board
      </h1>

      <ul className="flex gap-6 font-medium">
        <li className="cursor-pointer hover:text-blue-600">
          Home
        </li>

        <li className="cursor-pointer hover:text-blue-600">
          Jobs
        </li>

        <li className="cursor-pointer hover:text-blue-600">
          About
        </li>
      </ul>
    </nav>
  );
}