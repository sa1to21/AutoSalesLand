'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">500</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Что-то пошло не так</h2>
        <p className="text-gray-600 mt-2 mb-8">
          Произошла ошибка при загрузке страницы
        </p>
        <button
          onClick={reset}
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
