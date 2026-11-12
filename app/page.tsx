'use client';

import { useMemo, useState } from 'react';

type Locale = 'ar' | 'fr';

type TranslationSet = {
  brand: string;
  dashboard: string;
  products: string;
  inventory: string;
  barcode: string;
  welcome: string;
  todaySales: string;
  netRevenue: string;
  orders: string;
  customers: string;
  overview: string;
  stockSummary: string;
  lowStock: string;
  premium: string;
  search: string;
  language: string;
  arabic: string;
  french: string;
  month: string;
  productName: string;
  sku: string;
  category: string;
  stock: string;
  status: string;
  performance: string;
  bestSeller: string;
  totalRevenue: string;
  pendingOrders: string;
  activeCustomers: string;
  trending: string;
};

const translations: Record<Locale, TranslationSet> = {
  ar: {
    brand: 'SOLTAN',
    dashboard: 'لوحة التحكم',
    products: 'المنتجات',
    inventory: 'المخزون',
    barcode: 'الباركود',
    welcome: 'مرحباً بعودتك',
    todaySales: 'مبيعات اليوم',
    netRevenue: 'الإيرادات الصافية',
    orders: 'الطلبات',
    customers: 'العملاء',
    overview: 'نظرة عامة',
    stockSummary: 'ملخص المخزون',
    lowStock: 'منتجات منخفضة المخزون',
    premium: 'متميز',
    search: 'بحث',
    language: 'اللغة',
    arabic: 'العربية',
    french: 'الفرنسية',
    month: 'شهر',
    productName: 'اسم المنتج',
    sku: 'الرمز',
    category: 'الفئة',
    stock: 'المخزون',
    status: 'الحالة',
    performance: 'الأداء',
    bestSeller: 'الأكثر مبيعاً',
    totalRevenue: 'إجمالي الإيرادات',
    pendingOrders: 'الطلبات المعلقة',
    activeCustomers: 'العملاء النشطون',
    trending: 'الرائج',
  },
  fr: {
    brand: 'SOLTAN',
    dashboard: 'Tableau de bord',
    products: 'Produits',
    inventory: 'Inventaire',
    barcode: 'Code-barres',
    welcome: 'Bon retour',
    todaySales: 'Ventes du jour',
    netRevenue: 'Revenu net',
    orders: 'Commandes',
    customers: 'Clients',
    overview: 'Aperçu',
    stockSummary: 'Résumé du stock',
    lowStock: 'Produits à stock faible',
    premium: 'Premium',
    search: 'Rechercher',
    language: 'Langue',
    arabic: 'Arabe',
    french: 'Français',
    month: 'Mois',
    productName: 'Nom du produit',
    sku: 'SKU',
    category: 'Catégorie',
    stock: 'Stock',
    status: 'Statut',
    performance: 'Performance',
    bestSeller: 'Meilleure vente',
    totalRevenue: 'Revenu total',
    pendingOrders: 'Commandes en attente',
    activeCustomers: 'Clients actifs',
    trending: 'Tendance',
  },
};

const navigation = [
  { key: 'dashboard', icon: '◫', label: 'dashboard' },
  { key: 'products', icon: '▣', label: 'products' },
  { key: 'inventory', icon: '◧', label: 'inventory' },
  { key: 'barcode', icon: '◰', label: 'barcode' },
] as const;

const productRows = [
  { name: 'Royal Noir', sku: 'SOL-201', category: 'Élégance', stock: 86, status: 'Disponible', performance: '+18%' },
  { name: 'Signature Gold', sku: 'SOL-145', category: 'Premium', stock: 42, status: 'Faible', performance: '+12%' },
  { name: 'Luxury Beige', sku: 'SOL-308', category: 'Mode', stock: 128, status: 'Disponible', performance: '+24%' },
  { name: 'Midnight Set', sku: 'SOL-622', category: 'Collection', stock: 19, status: 'Réappro.', performance: '+9%' },
];

export default function Page() {
  const [locale, setLocale] = useState<Locale>('ar');
  const t = translations[locale];
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const stats = useMemo(
    () => [
      { label: t.todaySales, value: locale === 'ar' ? '12,480 د.م' : '12 480 MAD', accent: 'gold' },
      { label: t.netRevenue, value: locale === 'ar' ? '7,320 د.م' : '7 320 MAD', accent: 'purple' },
      { label: t.orders, value: locale === 'ar' ? '184 طلباً' : '184 commandes', accent: 'dark' },
      { label: t.customers, value: locale === 'ar' ? '1,260 عميل' : '1 260 clients', accent: 'light' },
    ],
    [locale, t]
  );

  return (
    <main className="app-shell" dir={dir}>
      <div className="app-frame">
        <aside className="sidebar">
          <div className="brand-block">
            <div className="brand-mark">
              <img src="/logo.svg" alt="Soltan logo" />
            </div>
            <div className="brand-copy">
              <span className="brand-name">{t.brand}</span>
              <small>{t.premium}</small>
            </div>
          </div>

          <nav className="nav-menu" aria-label="Main navigation">
            {navigation.map((item) => (
              <button
                key={item.key}
                className={`nav-item ${item.key === 'dashboard' ? 'active' : ''}`}
                type="button"
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{t[item.label as keyof TranslationSet]}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-card">
            <p>{t.bestSeller}</p>
            <strong>Royal Collection</strong>
            <span>+28% this month</span>
          </div>
        </aside>

        <section className="content-area">
          <header className="topbar">
            <div className="search-box">
              <span>⌕</span>
              <input type="text" placeholder={t.search} aria-label={t.search} />
            </div>

            <div className="topbar-actions">
              <div className="lang-switcher">
                <span>{t.language}</span>
                <div className="lang-select">
                  <button
                    type="button"
                    className={locale === 'ar' ? 'selected' : ''}
                    onClick={() => setLocale('ar')}
                  >
                    {t.arabic}
                  </button>
                  <button
                    type="button"
                    className={locale === 'fr' ? 'selected' : ''}
                    onClick={() => setLocale('fr')}
                  >
                    {t.french}
                  </button>
                </div>
              </div>

              <div className="profile-pill">
                <div className="avatar">SL</div>
                <div>
                  <strong>Soltan Admin</strong>
                  <small>Operations</small>
                </div>
              </div>
            </div>
          </header>

          <div className="hero-panel">
            <div>
              <p className="eyebrow">{t.welcome}</p>
              <h1>{t.overview}</h1>
            </div>
            <button type="button" className="primary-action">
              {t.trending}
            </button>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <article key={stat.label} className={`stat-card ${stat.accent}`}>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
              </article>
            ))}
          </div>

          <div className="content-grid">
            <section className="panel main-panel">
              <div className="panel-header">
                <h2>{t.stockSummary}</h2>
                <span>{t.month}</span>
              </div>

              <div className="chart-bars" aria-label={t.stockSummary}>
                {[60, 85, 58, 96, 75, 110, 92].map((value, index) => (
                  <div key={index} className="bar-column">
                    <span style={{ height: `${value}%` }} />
                  </div>
                ))}
              </div>
            </section>

            <section className="panel mini-panel">
              <div className="panel-header">
                <h2>{t.lowStock}</h2>
                <span>07</span>
              </div>

              <ul className="stock-list">
                {['Prestige White', 'Amber Gold', 'Noir Luxe', 'Signature Soft'].map((item, i) => (
                  <li key={item}>
                    <div>
                      <strong>{item}</strong>
                      <small>{i < 2 ? 'Low stock' : 'Monitor'}</small>
                    </div>
                    <span>{12 - i * 2}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="panel table-panel">
            <div className="panel-header">
              <h2>{t.products}</h2>
              <button type="button" className="secondary-action">
                {t.performance}
              </button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>{t.productName}</th>
                  <th>{t.sku}</th>
                  <th>{t.category}</th>
                  <th>{t.stock}</th>
                  <th>{t.status}</th>
                  <th>{t.performance}</th>
                </tr>
              </thead>
              <tbody>
                {productRows.map((row) => (
                  <tr key={row.sku}>
                    <td>{row.name}</td>
                    <td>{row.sku}</td>
                    <td>{row.category}</td>
                    <td>{row.stock}</td>
                    <td>
                      <span className={`status-pill ${row.status === 'Faible' ? 'warning' : 'good'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>{row.performance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </div>
    </main>
  );
}
