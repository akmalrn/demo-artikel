import { Link } from 'react-router-dom';
import { getPopularArticles } from '../../data/articles';

export default function PopularSidebar() {
  const popular = getPopularArticles();

  return (
    <aside className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Artikel Populer</h3>
      <ul className="space-y-4">
        {popular.map((article, index) => (
          <li key={article.id} className="pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
            <div className="flex gap-3">
              <span className="text-2xl font-bold text-blue-600 min-w-fit">{String(index + 1).padStart(2, '0')}</span>
              <div className="flex-1">
                <Link
                  to={`/artikel/${article.id}`}
                  className="text-gray-900 hover:text-blue-600 font-semibold line-clamp-2 transition-colors"
                >
                  {article.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{article.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
