'use client';

import React, { useState, useEffect } from 'react';
import {
  Play, Zap, CreditCard, Lock, MessageCircle,
  ChevronDown, Menu, X,
  Check, ArrowRight, Wallet,
  XCircle, CheckCircle, Sparkles, HelpCircle, AlertCircle,
  User
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">

      {/* --- BACKGROUND BLOBS (Dark Mode) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-900/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow delay-1000"></div>
          <div className="absolute inset-0 opacity-20 brightness-100 contrast-150 mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>
      </div>

      {/* --- HEADER --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-900/60 backdrop-blur-xl border-white/10 shadow-lg shadow-indigo-500/5' : 'bg-transparent border-transparent'}`}>
        <div className="container mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 font-bold text-xl tracking-tight cursor-pointer z-50 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/flash-sale.svg" alt="AutoSalesBot" className="w-full h-full" />
            </div>
            <span className="text-white">AutoSales<span className="text-zinc-500">Bot</span></span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            {['Возможности', 'Сравнение', 'FAQ', 'Связаться'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'FAQ' ? 'faq' : item === 'Сравнение' ? 'comparison' : item === 'Возможности' ? 'features' : 'pricing')}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
             onClick={() => window.open('https://t.me/demoautosalesbot', '_blank')}
             className="hidden md:flex bg-white text-zinc-950 px-5 py-2.5 rounded-full font-semibold hover:bg-zinc-200 transition-all items-center gap-2 text-sm"
          >
            Демо Бота <ArrowRight size={16} />
          </button>

          <button className="md:hidden text-white p-2 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#09090b] z-[45] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            {['Возможности', 'Сравнение', 'FAQ', 'Связаться'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'FAQ' ? 'faq' : item === 'Сравнение' ? 'comparison' : item === 'Возможности' ? 'features' : 'pricing')}
                className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {item}
              </button>
            ))}
             <button
              onClick={() => window.open('https://t.me/demoautosalesbot', '_blank')}
              className="mt-4 bg-indigo-600 px-8 py-3 rounded-xl font-bold text-white hover:bg-indigo-500 transition-colors"
            >
              Запустить Демо
            </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-4 relative flex items-center min-h-[90vh]" aria-label="Главная секция">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Column: Text */}
            <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 shadow-sm text-sm font-bold text-indigo-300 mb-8 animate-fade-in hover:bg-indigo-500/20 transition-colors cursor-default mx-auto lg:mx-0">
                <Sparkles size={16} className="text-indigo-400 fill-indigo-400" />
                <span className="text-zinc-300">Новый способ продаж в 2025</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                Продавай гайды <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 animate-gradient-x">
                  прямо в Telegram
                </span>
              </h1>

              <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Автоматический бот-магазин. Принимает оплату картой в чате и выдает файлы за секунду. <span className="text-zinc-200">Без сайта. Без рутины.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto mb-10">
                <button
                  onClick={() => window.open('https://t.me/demoautosalesbot', '_blank')}
                  className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-lg shadow-white/5"
                >
                  <Play size={20} fill="currentColor" />
                  Демо Бота
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-lg border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
                >
                  Узнать цену
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#09090b] bg-gradient-to-br ${i === 1 ? 'from-indigo-600 to-violet-600' : i === 2 ? 'from-fuchsia-600 to-pink-600' : i === 3 ? 'from-cyan-600 to-blue-600' : 'from-emerald-600 to-teal-600'} flex items-center justify-center text-xs font-bold text-white opacity-80 hover:opacity-100 transition-opacity shadow-lg`}>
                        <User size={18} strokeWidth={2.5} />
                      </div>
                    ))}
                 </div>
                 <div className="text-sm font-medium text-zinc-500">
                    <span className="text-zinc-300 font-bold">15+ экспертов</span> уже используют бота
                 </div>
              </div>
            </div>

            {/* Right Column: Hero Mockup */}
            <div className="flex-1 flex justify-center lg:justify-end relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-full blur-[100px] opacity-60 z-0"></div>

               <div className="relative z-10 bg-[#0e0e0e] border-[10px] border-zinc-900 rounded-[3rem] h-[640px] w-[320px] shadow-2xl shadow-black/50 flex flex-col overflow-hidden transform lg:rotate-[-6deg] hover:rotate-0 transition-all duration-700">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[140px] bg-zinc-900 rounded-b-2xl z-20"></div>

                 <div className="flex-1 bg-[#121212] pt-14 pb-4 px-3 flex flex-col gap-3 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-20 bg-[#121212] border-b border-zinc-800 flex items-end pb-3 px-4 z-10">
                       <div className="flex items-center gap-3 w-full">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <img src="/flash-sale.svg" alt="AutoSalesBot" className="w-full h-full" />
                          </div>
                          <div className="flex-1">
                             <div className="font-bold text-sm text-white">AutoSalesBot</div>
                             <div className="text-xs text-indigo-400 font-medium">bot</div>
                          </div>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-end gap-3 pb-4 pt-24 overflow-y-auto no-scrollbar">
                        <div className="self-start max-w-[85%] bg-zinc-800 p-3.5 rounded-2xl rounded-tl-sm text-sm text-zinc-200 shadow-sm border border-zinc-700/50">
                          Привет! 👋 <br/>
                          Я автоматический бот.
                          Хочешь купить гайд &quot;Быстрый старт&quot;?
                        </div>

                        <div className="self-start w-[85%] bg-zinc-800 p-0 rounded-2xl shadow-lg border border-zinc-700/50 overflow-hidden">
                           <div className="h-24 bg-zinc-700 flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-violet-900/50"></div>
                              <Zap size={32} className="text-white/20 relative z-10" />
                           </div>
                           <div className="p-3">
                              <h4 className="font-bold text-white text-sm mb-1">Гайд &quot;Быстрый Старт&quot;</h4>
                              <p className="text-xs text-zinc-400">PDF файл, 45 страниц. Мгновенная доставка.</p>
                           </div>
                        </div>

                        <div className="self-end max-w-[85%] bg-indigo-600 p-3 rounded-2xl rounded-tr-sm text-sm text-white shadow-md shadow-indigo-900/20 mt-2">
                           Оплата прошла успешно! 🎉
                        </div>

                        <div className="self-start flex items-center gap-3 bg-zinc-800 p-3.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-zinc-700/50 shadow-md animate-in slide-in-from-left-5 fade-in duration-700">
                          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">
                              <span className="text-[10px] font-black tracking-tighter">PDF</span>
                          </div>
                          <div className="overflow-hidden">
                              <div className="text-xs text-zinc-200 font-bold truncate">Гайд_Быстрый_Старт.pdf</div>
                              <div className="text-[10px] text-zinc-500 font-medium">Готово к скачиванию</div>
                          </div>
                        </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="py-24 px-4 bg-zinc-900/30 relative overflow-hidden" aria-labelledby="features-heading">
        {/* Purple glow accents - more visible */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/30 to-violet-500/30 rounded-full blur-[120px] opacity-70 z-0"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-500/25 to-indigo-500/25 rounded-full blur-[100px] opacity-60 z-0"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 id="features-heading" className="text-3xl md:text-5xl font-bold mb-6 text-white">Всё для продаж на автопилоте</h2>
            <p className="text-zinc-400 text-lg">
              Идеальный путь клиента: от клика до файла за 15 секунд. <br/>
              Мы убрали всё лишнее, чтобы увеличить вашу конверсию.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* 1. Payment UI */}
            <div className="md:col-span-2 group relative bg-zinc-900/20 rounded-3xl p-8 border border-white/5 overflow-hidden hover:border-white/10 transition-colors">
              {/* Purple accent glow - more visible */}
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/25 to-violet-500/25 rounded-full blur-[100px] opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center h-full">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                    <CreditCard size={24} className="text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Оплата через ЮКассу & Stripe</h3>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    Клиент платит, не выходя из Telegram. Используем ЮКассу (для ИП в РФ) и Stripe (для всего мира).
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    <span className="font-semibold text-zinc-200">А если у вас нет ИП</span> — настроим режим "Перевод на карту". Бот сам попросит чек, пришлет его вам в личку, и вы выдадите файл одной кнопкой "Подтвердить".
                  </p>
                </div>

                {/* Visual: Mockup */}
                <div className="w-full md:w-auto md:min-w-[280px]">
                  <div className="bg-[#18181b] rounded-2xl p-4 border border-white/5 shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-red-500"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                         <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">INVOICE #4092</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-zinc-900/50 p-3 rounded-lg">
                        <span className="text-xs text-zinc-400">Сумма к оплате</span>
                        <span className="text-sm font-bold text-white">990.00 RUB</span>
                      </div>
                      <div className="h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-900/20">
                        Оплатить через Telegram
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Direct Money */}
            <div className="md:row-span-2 bg-zinc-900/20 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden flex flex-col">
               {/* Purple accent mixed with emerald - more visible */}
               <div className="absolute top-0 right-0 w-[280px] h-[280px] bg-gradient-to-bl from-violet-500/25 to-transparent rounded-full blur-[80px] opacity-70"></div>
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-70"></div>
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-white/5">
                  <Wallet size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-3 text-white">Деньги сразу у тебя</h3>
               <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                 Никаких холдов и запросов на вывод. Деньги поступают напрямую на твой счет в платежной системе.
               </p>

               <div className="mt-auto space-y-3">
                   <div className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-white/5 shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0"><Check size={14} strokeWidth={3}/></div>
                      <div className="text-sm w-full">
                         <div className="flex justify-between">
                            <span className="font-bold text-white">+ 4 900 ₽</span>
                            <span className="text-[10px] text-zinc-600">14:20</span>
                         </div>
                         <div className="text-xs text-zinc-500">Поступление</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-white/5 opacity-80">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0"><Check size={14} strokeWidth={3}/></div>
                      <div className="text-sm w-full">
                         <div className="flex justify-between">
                            <span className="font-bold text-white">+ 990 ₽</span>
                            <span className="text-[10px] text-zinc-600">13:45</span>
                         </div>
                         <div className="text-xs text-zinc-500">Поступление</div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3 p-3 rounded-xl bg-[#151515] border border-white/5 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0"><Check size={14} strokeWidth={3}/></div>
                      <div className="text-sm w-full">
                         <div className="flex justify-between">
                            <span className="font-bold text-white">+ 2 990 ₽</span>
                            <span className="text-[10px] text-zinc-600">12:10</span>
                         </div>
                         <div className="text-xs text-zinc-500">Поступление</div>
                      </div>
                   </div>
                </div>
            </div>

            {/* 3. Speed */}
            <div className="bg-zinc-900/20 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
              {/* Amber/purple mix glow */}
              <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-gradient-to-bl from-amber-500/15 via-indigo-500/15 to-transparent rounded-full blur-[70px] opacity-60"></div>
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-amber-400 border border-white/5 relative z-10">
                  <Zap size={24} fill="currentColor" className="text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Мгновенная выдача</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Файл прилетает через секунду после оплаты. Даже в 4 утра.
              </p>
            </div>

             {/* 4. Protection */}
            <div className="bg-zinc-900/20 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors group relative overflow-hidden">
               {/* Fuchsia glow */}
               <div className="absolute -bottom-10 -left-10 w-[220px] h-[220px] bg-gradient-to-tr from-fuchsia-500/20 to-violet-500/20 rounded-full blur-[75px] opacity-65"></div>
               <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 text-fuchsia-400 border border-white/5 relative z-10">
                  <Lock size={24} />
               </div>
               <h3 className="text-xl font-bold mb-3 text-white">Защита контента</h3>
               <p className="text-zinc-400 text-sm leading-relaxed">
                 Можно запретить пересылку сообщений из бота (анти-слив).
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMPARISON SECTION (Updated) --- */}
      <section id="comparison" className="py-24 px-4 bg-zinc-900/30 relative overflow-hidden" aria-labelledby="comparison-heading">
        {/* Purple glow accents - both sides */}
        <div className="absolute top-[30%] left-[5%] w-[550px] h-[550px] bg-gradient-to-br from-violet-500/25 to-indigo-500/25 rounded-full blur-[130px] opacity-70 z-0"></div>
        <div className="absolute bottom-[20%] right-[8%] w-[450px] h-[450px] bg-gradient-to-tl from-fuchsia-500/20 to-violet-500/20 rounded-full blur-[115px] opacity-65 z-0"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 id="comparison-heading" className="text-3xl md:text-5xl font-bold mb-6 text-white">Почему это выгоднее?</h2>
            <p className="text-zinc-400 text-lg">Честное сравнение с альтернативами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Column 1: Manual */}
              <div className="p-8 bg-zinc-900/20 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-zinc-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle size={24} className="text-red-500" />
                  <h3 className="text-xl font-bold text-zinc-300">Вручную</h3>
                </div>
                <ul className="space-y-4 text-sm text-zinc-500">
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Обработка заявки: 15-60 мин</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Нет продаж ночью (вы спите)</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Ручная отправка карты</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Риск ошибок и &quot;забыл скинуть&quot;</li>
                  <li className="pt-4 font-bold text-red-400">Итог: Теряете 40% клиентов</li>
                </ul>
              </div>

              {/* Column 2: AutoSales Bot (Featured) */}
              <div className="p-8 bg-zinc-900/40 backdrop-blur-md border-2 border-indigo-500/50 rounded-3xl shadow-2xl shadow-indigo-900/30 relative overflow-hidden z-10 transform md:scale-105">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
                <div className="relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-bold text-indigo-300 mb-6">
                    ВЫБОР ПРОФИ
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                    <CheckCircle size={28} className="text-indigo-400" fill="currentColor" />
                    <h3 className="text-2xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">AutoSales Bot</h3>
                    </div>
                    <ul className="space-y-5 text-sm text-zinc-200 font-medium leading-relaxed">
                    <li className="flex gap-3 items-center"><Check size={18} className="text-indigo-400 shrink-0"/> <span>Мгновенная выдача <span className="text-indigo-300">(1 секунда)</span></span></li>
                    <li className="flex gap-3 items-center"><Check size={18} className="text-indigo-400 shrink-0"/> <span>Работает <span className="text-indigo-300">24/7</span> без выходных</span></li>
                    <li className="flex gap-3 items-center"><Check size={18} className="text-indigo-400 shrink-0"/> <span>Оплата в <span className="text-indigo-300">1 клик</span> внутри чата</span></li>
                    <li className="flex gap-3 items-center"><Check size={18} className="text-indigo-400 shrink-0"/> <span><span className="text-indigo-300">0₽</span> ежемесячных платежей</span></li>
                    <li className="pt-6 font-black text-lg text-indigo-300">Итог: Максимальная прибыль</li>
                    </ul>
                </div>
              </div>

              {/* Column 3: Platforms */}
              <div className="p-8 bg-zinc-900/20 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-zinc-900/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle size={24} className="text-amber-500" />
                  <h3 className="text-xl font-bold text-zinc-300">GetCourse / Сайт</h3>
                </div>
                <ul className="space-y-4 text-sm text-zinc-500">
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Абонентская плата: от 4000₽/мес</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Сложная настройка (нужен технарь)</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Клиент уходит из Telegram на сайт</li>
                  <li className="flex gap-3"><X size={16} className="shrink-0 mt-0.5"/> Низкая конверсия на мобильных</li>
                  <li className="pt-4 font-bold text-amber-400">Итог: Дорого и сложно</li>
                </ul>
              </div>

            </div>
        </div>
      </section>

      {/* --- FAQ (Moved before Pricing) --- */}
      <section id="faq" className="py-24 px-4 relative overflow-hidden" aria-labelledby="faq-heading">
        {/* Purple glow accents - stronger visibility */}
        <div className="absolute top-[15%] right-[8%] w-[480px] h-[480px] bg-gradient-to-tl from-indigo-500/28 to-fuchsia-500/28 rounded-full blur-[110px] opacity-70 z-0"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-gradient-to-br from-violet-500/22 to-indigo-500/22 rounded-full blur-[100px] opacity-65 z-0"></div>
        <div className="container mx-auto max-w-2xl relative z-10">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Частые вопросы</h2>
          <p className="text-zinc-400 text-center mb-12">Ответы на то, что вас может волновать</p>

          <div className="space-y-4">
            <FaqItem
              question="Нужно ли мне платить каждый месяц?"
              answer="Нет. Бот работает на платформе Make.com. Их бесплатного тарифа хватает на 150-200 продаж в месяц. Если вы вырастете, тариф стоит всего $9."
              isOpen={openFaq === 0}
              onClick={() => toggleFaq(0)}
            />
            <FaqItem
              question="Куда приходят деньги?"
              answer="Сразу вам на счет. Мы не посредники. Мы подключаем ВАШУ ЮКассу или Stripe напрямую к боту."
              isOpen={openFaq === 1}
              onClick={() => toggleFaq(1)}
            />
            <FaqItem
              question="Сложно ли мне будет менять товары?"
              answer="Очень просто. Я запишу для вас персональное видео на 2 минуты, где покажу, какую кнопку нажать, чтобы поменять цену или файл."
              isOpen={openFaq === 2}
              onClick={() => toggleFaq(2)}
            />
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION (Updated Style) --- */}
      <section id="pricing" className="py-24 px-4 bg-zinc-900/30 relative overflow-hidden" aria-labelledby="pricing-heading">
        {/* Background Lights - enhanced with multiple strong purple accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[140px] -z-10"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[450px] h-[450px] bg-gradient-to-tr from-violet-500/30 to-indigo-500/30 rounded-full blur-[110px] opacity-75 -z-10"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-to-bl from-fuchsia-500/28 to-indigo-500/28 rounded-full blur-[105px] opacity-70 -z-10"></div>

        <div className="container mx-auto max-w-3xl">
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl group">
             {/* Gradient Border Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-fuchsia-500/20 pointer-events-none"></div>

             {/* Internal glowing accents - much stronger */}
             <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gradient-to-bl from-indigo-500/40 to-violet-500/40 rounded-full blur-[110px] opacity-80"></div>
             <div className="absolute bottom-[15%] left-[8%] w-[350px] h-[350px] bg-gradient-to-tr from-fuchsia-500/35 to-indigo-500/35 rounded-full blur-[100px] opacity-75"></div>
             <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-r from-violet-500/25 to-indigo-500/25 rounded-full blur-[90px] opacity-60"></div>

             <div className="relative z-10 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white text-xs font-bold tracking-widest mb-6">
                   РАННИЙ ДОСТУП
                </div>

                <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold mb-10 text-white">Настройка &quot;Под Ключ&quot;</h2>

                <div className="flex items-end justify-center gap-4 mb-10">
                   <div className="text-2xl text-zinc-500 line-through decoration-red-500/50 decoration-2 mb-2">15 000 ₽</div>
                   <div className="text-6xl md:text-7xl font-bold text-white tracking-tighter">8 900 ₽</div>
                </div>

                <ul className="text-left max-w-md mx-auto space-y-4 mb-10 text-zinc-300">
                   {[
                      'Подключение платежной системы (ЮКасса / Stripe)',
                      'Настройка сценария и логики бота',
                      'Загрузка твоих файлов и товаров',
                      'Видео-инструкция по управлению',
                      '100% передача прав (бот будет твоим навсегда)'
                   ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                         <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5 shrink-0">
                            <Check size={12} className="text-indigo-400"/>
                         </div>
                         {item}
                      </li>
                   ))}
                </ul>

                <button
                  onClick={() => window.open('https://t.me/sa1toautosales?text=' + encodeURIComponent('Привет! Интересует AutoSalesBot\n**Опишите какую систему платежей используете, какой формат продукта, который вы хотите продовать**'), '_blank')}
                  className="w-full md:w-auto px-12 py-5 bg-white text-black hover:bg-indigo-50 rounded-2xl font-bold text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-3 mx-auto"
                >
                  <MessageCircle size={24} />
                  Заказать Бота
                </button>

                <a
                  href={'https://t.me/sa1toautosales?text=' + encodeURIComponent('Привет! Интересует AutoSalesBot\n**Опишите какую систему платежей используете, какой формат продукта, который вы хотите продовать**')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-zinc-400 hover:text-white transition-colors group text-sm mt-4"
                >
                  <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">@sa1toautosales</span>
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center relative overflow-hidden">
        {/* Purple glow in footer - more visible */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-indigo-500/18 via-violet-500/15 to-transparent rounded-full blur-[90px] opacity-65 z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <a
            href={'https://t.me/sa1toautosales?text=' + encodeURIComponent('Привет! Интересует AutoSalesBot\n**Опишите какую систему платежей используете, какой формат продукта, который вы хотите продовать**')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">@sa1toautosales</span>
          </a>
          <p className="text-zinc-600 text-sm">© 2025 AutoSalesBot. Designed for Creators.</p>
        </div>
      </footer>
    </div>
  );
};

// --- Components ---

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border border-white/5 rounded-2xl overflow-hidden bg-zinc-900/20 transition-all hover:border-white/10 relative group">
    {/* Internal purple glow accent - always visible, stronger on hover */}
    <div className="absolute -bottom-8 -right-8 w-[250px] h-[250px] bg-gradient-to-tl from-indigo-500/30 to-violet-500/30 rounded-full blur-[70px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
    <div className="absolute -top-8 -left-8 w-[180px] h-[180px] bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center p-5 text-left font-semibold text-white hover:bg-white/5 transition-colors relative z-10"
    >
      <div className="flex items-center gap-3">
        <HelpCircle size={18} className="text-indigo-400" />
        {question}
      </div>
      <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : 'text-zinc-600'}`}>
         <ChevronDown size={20} />
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="p-5 pt-0 pl-12 text-zinc-200 text-sm leading-relaxed relative z-10 font-medium">
        {answer}
      </div>
    </div>
  </div>
);

export default Home;
