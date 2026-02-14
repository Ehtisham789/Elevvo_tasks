export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-2xl font-bold text-indigo-600">TaskFlow</h1>
        <div className="space-x-6 hidden md:flex">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
        </div>
      </div>
    </nav>
  );
}
