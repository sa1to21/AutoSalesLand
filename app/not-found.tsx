import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Страница не найдена</h2>
        <p className="text-gray-600 mt-2 mb-8">
          К сожалению, запрашиваемая страница не существует
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
