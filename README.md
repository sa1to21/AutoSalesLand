# AutoSalesBot Landing Page

Лендинг для бота автоматических продаж в Telegram.

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (иконки)

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Сборка для продакшена

```bash
npm run build
npm start
```

## Настройка

Перед деплоем замените следующие заглушки в коде:

1. В файле `app/page.tsx`:
   - `https://t.me/ТВОЙ_ДЕМО_БОТ` - ссылка на демо-бот
   - `https://t.me/ТВОЙ_ЛИЧНЫЙ_НИК` - ваш Telegram для заказов

2. Опционально добавьте видео демонстрации в секцию "Phone Demo":
   - Поместите видео `demo.mp4` в папку `public/`
   - Раскомментируйте строку с video тегом в компоненте

## Структура проекта

```
tglendos/
├── app/
│   ├── page.tsx          # Главная страница
│   ├── layout.tsx        # Layout приложения
│   └── globals.css       # Глобальные стили
├── public/               # Статические файлы
├── tailwind.config.js    # Конфигурация Tailwind
├── tsconfig.json         # Конфигурация TypeScript
└── package.json          # Зависимости проекта
```

## Деплой

Рекомендуется деплоить на [Vercel](https://vercel.com):

1. Залейте код на GitHub
2. Импортируйте репозиторий в Vercel
3. Деплой произойдет автоматически

## Лицензия

MIT
