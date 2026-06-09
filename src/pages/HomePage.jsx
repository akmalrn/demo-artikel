import { Link } from 'react-router-dom';
import { articles, getPopularArticles } from '../data/articles';
import CategorySidebar from '../components/shared/CategorySidebar';
import PopularSidebar from '../components/shared/PopularSidebar';
import ArticleCard from '../components/shared/ArticleCard';

export default function HomePage() {
  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1, 7);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-64 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6 sm:p-12">
              <div className="flex gap-2 mb-4">
                <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase">
                  {featuredArticle.category}
                </span>
                <span className="text-xs font-bold text-white bg-red-600 px-3 py-1 rounded-full uppercase">
                  Berita Utama
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 line-clamp-3">
                {featuredArticle.title}
              </h1>
              <p className="text-gray-100 text-sm sm:text-base mb-4">
                Oleh <span className="font-semibold">{featuredArticle.author}</span> • {featuredArticle.date}
              </p>
              <Link
                to={`/artikel/${featuredArticle.id}`}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors w-fit"
              >
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Jangan Lewatkan Berita Terbaru</h2>
              <p className="text-blue-100 text-lg">
                Berlangganan newsletter kami untuk mendapatkan update berita terkini langsung ke inbox Anda.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Berita Terkini</h2>
              <p className="text-gray-600">Artikel dan analisis terbaru dari berbagai kategori</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <CategorySidebar />
            <PopularSidebar />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
              <p className="text-gray-600">Pembaca Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Artikel Dipublikasikan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Liputan Berita</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
