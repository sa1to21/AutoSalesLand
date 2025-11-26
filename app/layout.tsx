import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://autosalesbot.online'),
  title: {
    default: 'AutoSalesBot - Автоматический бот для продажи гайдов в Telegram',
    template: '%s | AutoSalesBot'
  },
  description: 'Автоматический бот-магазин для продажи гайдов и цифровых продуктов в Telegram. Принимает оплату ЮКасса и Stripe прямо в чате, выдает файлы мгновенно. Настройка под ключ за 8900₽.',
  keywords: [
    'telegram бот для продаж',
    'автоматизация продаж telegram',
    'продажа гайдов telegram',
    'бот магазин telegram',
    'прием платежей telegram',
    'юкасса telegram',
    'stripe telegram',
    'продажа цифровых товаров',
    'автопродажи telegram',
    'telegram shop bot',
    'автоматический магазин telegram',
    'мгновенная доставка файлов'
  ],
  authors: [{ name: 'AutoSalesBot' }],
  creator: 'AutoSalesBot',
  publisher: 'AutoSalesBot',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
      { url: '/flash-sale.svg', type: 'image/svg+xml' },
    ],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://autosalesbot.online',
    siteName: 'AutoSalesBot',
    title: 'AutoSalesBot - Автоматический бот для продажи гайдов в Telegram',
    description: 'Автоматический бот-магазин для продажи гайдов и цифровых продуктов в Telegram. Принимает оплату прямо в чате, выдает файлы мгновенно.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutoSalesBot - Продажи на автопилоте в Telegram',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoSalesBot - Автоматический бот для продажи гайдов в Telegram',
    description: 'Бот-магазин с приемом оплаты и мгновенной выдачей файлов. Настройка под ключ за 8900₽',
    images: ['/og-image.jpg'],
    creator: '@autosalesbot',
  },
  verification: {
    // Добавь после регистрации в вебмастерах
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://autosalesbot.online',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AutoSalesBot',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Telegram',
    description: 'Автоматический бот-магазин для продажи гайдов и цифровых продуктов в Telegram с приемом оплаты и мгновенной выдачей файлов',
    offers: {
      '@type': 'Offer',
      price: '8900',
      priceCurrency: 'RUB',
      description: 'Настройка бота под ключ'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '15'
    },
    author: {
      '@type': 'Organization',
      name: 'AutoSalesBot'
    }
  };

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AutoSalesBot',
    url: 'https://autosalesbot.online',
    logo: 'https://autosalesbot.online/icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://t.me/sa1toautosales'
    },
    sameAs: [
      'https://t.me/demoautosalesbot'
    ]
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
