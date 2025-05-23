export default function Navbar({ isScrolled }) {
  return (
    <nav className={`fixed top-0 left-0 w-full bg-white py-4 px-8 flex justify-between items-center z-50 transition-all duration-300 ${isScrolled ? "shadow-md border-b border-gray-200" : ""}`}>
      <div className="flex items-center gap-2">
        <img src="/img/logo.png" alt="Logo Sedap" className="h-8 w-8" />
        <span className="text-xl font-bold text-red-600">Sedap</span>
      </div>
      <ul className="flex gap-6 text-gray-700 items-center">
        <li><a href="#hero" className="hover:text-green-500">Beranda</a></li>
        <li><a href="#about" className="hover:text-green-500">Tentang</a></li>
        <li><a href="#produk" className="hover:text-green-500">Menu</a></li>
        <li><a href="#testimoni" className="hover:text-green-500">Testimoni</a></li>
        <li><a href="#cek-member" className="hover:text-green-500">Cek Member</a></li>
        <li><a href="/login" className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600">Login</a></li>
        <li><a href="/register" classNa1me="bg-white-500 text-gray px-6 py-2 rounded-lg shadow hover:bg-green-600">Register</a></li>
      </ul>
    </nav>
  );
}
