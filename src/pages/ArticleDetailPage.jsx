import { useParams, Link } from 'react-router-dom';
import { getArticleById, getRelatedArticles } from '../data/articles';
import ArticleCard from '../components/shared/ArticleCard';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const article = getArticleById(id);
  const relatedArticles = article ? getRelatedArticles(id, article.category) : [];

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
        <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Article Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex gap-2 mb-4">
            <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-600 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">Oleh {article.author}</span>
            </div>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>Waktu baca: 5 menit</span>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                {paragraph.trim()}
              </p>
            ))}
          </article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 font-semibold mb-4">Bagikan artikel ini:</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Facebook
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors font-medium">
                Twitter
              </button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors font-medium">
                Instagram
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12 sm:py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artikel Terkait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map(relArticle => (
                <ArticleCard key={relArticle.id} article={relArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Dapatkan Berita Terbaru Setiap Hari
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Bergabunglah dengan ribuan pembaca yang telah mendaftar newsletter kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
