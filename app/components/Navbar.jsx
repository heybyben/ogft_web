export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-red-900">
      <h1 className="font-bold text-lg">
        FALSMANIA <span className="text-red-500">TANGERANG</span>
      </h1>

      <div className="space-x-6 hidden md:block">
        <a href="#">Home</a>
        <a href="#">Philosophy</a>
        <a href="#">Archive</a>

        <button className="bg-red-600 px-4 py-2 rounded">
          Join Community
        </button>
      </div>
    </nav>
  );
}
