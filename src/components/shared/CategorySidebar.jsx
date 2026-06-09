import { Link } from 'react-router-dom';
import { categories } from '../../data/articles';

export default function CategorySidebar() {
  return (
    <aside className="bg-white rounded-lg border border-gray-200 p-6 h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Kategori</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.id}>
            <Link
              to={`/kategori/${category.slug}`}
              className="flex justify-between items-center text-gray-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all"
            >
              <span className="font-medium">{category.name}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
