'use client';

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const news = [
    {
      id: 1,
      title: '公司荣获2024年度中国全球化品牌Top 50',
      summary: '凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。',
      date: '2024-01-15',
      category: '荣誉奖项',
    },
    {
      id: 2,
      title: '推出全新一代智能充电产品线',
      summary: '搭载最新Power IQ™ 4.0技术，充电速度提升40%，为用户带来更快的充电体验。',
      date: '2024-01-10',
      category: '产品发布',
    },
    {
      id: 3,
      title: '全球研发中心正式启用',
      summary: '位于长沙的全球研发中心正式投入使用，将进一步加强我们在人工智能、电池技术等领域的研发实力。',
      date: '2024-01-05',
      category: '公司动态',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">新闻动态</h2>
          <p className="text-xl text-gray-600">了解我们的最新资讯和行业动态</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {item.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.summary}
                </p>

                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  阅读更多
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-200 transform hover:scale-105"
          >
            查看全部新闻
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}