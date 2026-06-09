import { useParams, Link } from 'react-router-dom';
import { articles, categories, getArticlesByCategory } from '../data/articles';
import ArticleCard from '../components/shared/ArticleCard';
import CategorySidebar from '../components/shared/CategorySidebar';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find(c => c.slug === slug);
  const categoryArticles = category ? getArticlesByCategory(category.name) : [];

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Kategori Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">Maaf, kategori yang Anda cari tidak tersedia.</p>
        <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Category Header */}
      <section className="bg-white border-b border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-600 transition-colors">Beranda</Link>
              {' '}/{' '}
              <span className="text-gray-900 font-semibold">{category.name}</span>
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {category.name}
          </h1>
          <p className="text-gray-600 text-lg">
            Jelajahi semua artikel terbaru di kategori {category.name}. Total {category.count} artikel tersedia.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            {categoryArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {categoryArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Belum ada artikel di kategori ini.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Dapatkan Update {category.name}
              </h2>
              <p className="text-blue-100 text-lg">
                Berlangganan untuk mendapatkan notifikasi artikel terbaru di kategori {category.name} langsung ke email Anda.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
