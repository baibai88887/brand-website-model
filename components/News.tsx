'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsData } from '@/lib/data';

export default function News() {
  const displayNews = newsData.slice(0, 3);

  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            新闻动态
          </h2>
          <p className="text-xl text-brand-gray-mid">了解我们的最新资讯和行业动态</p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block"
            >
              <div className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange text-sm font-display font-semibold rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-brand-gray-mid text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-brand-gray-mid mb-6 line-clamp-3">
                  {item.summary}
                </p>

                <div className="flex items-center text-brand-orange font-display font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  阅读更多
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white rounded-lg font-display font-semibold hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            查看全部新闻
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
