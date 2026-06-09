import { Link } from 'react-router-dom';

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link
      to={`/artikel/${article.id}`}
      className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      <div className="overflow-hidden bg-gray-100 h-48 sm:h-56">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex gap-2 mb-3">
          <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full uppercase">
            {article.category}
          </span>
          {featured && (
            <span className="text-xs font-bold text-white bg-red-600 px-3 py-1 rounded-full uppercase">
              Utama
            </span>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="mt-auto flex justify-between items-center text-xs text-gray-500">
          <span>{article.author}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
