import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-blue-600 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-blue-600"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-bold text-white shadow-md">
            NB
          </div>

          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-none text-slate-900">
              Portal Berita
            </h1>
            <p className="text-xs text-slate-500">
              Berita Terpercaya Setiap Hari
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink end to="/" className={navClass}>
              Beranda
            </NavLink>
          </li>

          <li>
            <NavLink to="/tentang" className={navClass}>
              Tentang
            </NavLink>
          </li>

          <li>
            <NavLink to="/kontak" className={navClass}>
              Kontak
            </NavLink>
          </li>

          <li>
            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
              Subscribe
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}