import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
                NB
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Portal Berita</h3>
                <p className="text-sm text-slate-400">
                  Berita Terpercaya Setiap Hari
                </p>
              </div>
            </div>

            <p className="max-w-md text-slate-400 leading-relaxed">
              Menyajikan berita terkini, analisis mendalam, dan informasi
              terpercaya dari berbagai bidang untuk membantu Anda tetap
              terhubung dengan perkembangan dunia.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-5">Kategori</h4>

            <ul className="space-y-3">
              {["Teknologi", "Bisnis", "Politik", "Olahraga"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Perusahaan</h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/tentang"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Syarat Layanan
                </a>
              </li>

              <li>
                <Link
                  to="/kontak"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-5">Ikuti Kami</h4>

            <ul className="space-y-3">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Dapatkan Update Berita Terbaru
              </h4>

              <p className="text-slate-400 text-sm mt-1">
                Berlangganan newsletter kami.
              </p>
            </div>

            <form className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Masukkan email..."
                className="w-full lg:w-80 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Portal Berita. Semua hak dilindungi.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
