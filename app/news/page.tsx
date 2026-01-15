'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, Search } from 'lucide-react';
import Link from 'next/link';

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '全部新闻' },
    { id: 'company', name: '公司动态' },
    { id: 'product', name: '产品发布' },
    { id: 'honor', name: '荣誉奖项' },
    { id: 'industry', name: '行业资讯' },
  ];

  const news = [
    {
      id: 1,
      title: '公司荣获2024年度中国全球化品牌Top 50',
      summary: '凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。',
      content: '凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。这是对我们多年来坚持"极致创新，激发可能"使命的最好肯定。',
      date: '2024-01-15',
      readTime: '5 分钟',
      category: 'honor',
      categoryName: '荣誉奖项',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 2,
      title: '推出全新一代智能充电产品线',
      summary: '搭载最新Power IQ™ 4.0技术，充电速度提升40%，为用户带来更快的充电体验。',
      content: '搭载最新Power IQ™ 4.0技术，充电速度提升40%，为用户带来更快的充电体验。新产品线包括多款移动电源、充电器和充电宝，满足不同用户的需求。',
      date: '2024-01-10',
      readTime: '3 分钟',
      category: 'product',
      categoryName: '产品发布',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 3,
      title: '全球研发中心正式启用',
      summary: '位于长沙的全球研发中心正式投入使用，将进一步加强我们在人工智能、电池技术等领域的研发实力。',
      content: '位于长沙的全球研发中心正式投入使用，将进一步加强我们在人工智能、电池技术等领域的研发实力。研发中心配备了最先进的实验设备和测试平台，为技术创新提供了强有力的支持。',
      date: '2024-01-05',
      readTime: '4 分钟',
      category: 'company',
      categoryName: '公司动态',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 4,
      title: '智能家居市场份额持续增长',
      summary: '根据最新市场调研报告，我们的智能家居产品在2023年第四季度市场份额达到15%，同比增长8%。',
      content: '根据最新市场调研报告，我们的智能家居产品在2023年第四季度市场份额达到15%，同比增长8%。这得益于我们在产品创新、用户体验和品牌建设方面的持续投入。',
      date: '2023-12-28',
      readTime: '6 分钟',
      category: 'industry',
      categoryName: '行业资讯',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 5,
      title: '获得2023年度最佳创新企业奖',
      summary: '在年度科技创新大会上，公司凭借在氮化镓技术应用方面的突破性贡献，荣获最佳创新企业奖。',
      content: '在年度科技创新大会上，公司凭借在氮化镓技术应用方面的突破性贡献，荣获最佳创新企业奖。这是对我们技术创新能力的认可，也是对团队努力的肯定。',
      date: '2023-12-20',
      readTime: '4 分钟',
      category: 'honor',
      categoryName: '荣誉奖项',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 6,
      title: '推出首款AI智能音箱',
      summary: '集成最新人工智能技术，支持语音助手、智能家居控制等功能，为用户带来全新的智能体验。',
      content: '集成最新人工智能技术，支持语音助手、智能家居控制等功能，为用户带来全新的智能体验。产品采用先进的语音识别和自然语言处理技术，能够准确理解用户需求。',
      date: '2023-12-15',
      readTime: '5 分钟',
      category: 'product',
      categoryName: '产品发布',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 7,
      title: '与多家知名零售商达成战略合作',
      summary: '与国内外多家知名零售商建立战略合作关系，进一步扩大产品销售渠道，提升品牌影响力。',
      content: '与国内外多家知名零售商建立战略合作关系，进一步扩大产品销售渠道，提升品牌影响力。合作包括线上和线下渠道，覆盖全球主要市场。',
      date: '2023-12-10',
      readTime: '3 分钟',
      category: 'company',
      categoryName: '公司动态',
      image: 'https://via.placeholder.com/800x400',
    },
    {
      id: 8,
      title: '行业报告：智能充电市场前景广阔',
      summary: '最新行业报告显示，全球智能充电市场规模预计将在2025年达到500亿美元，年复合增长率超过20%。',
      content: '最新行业报告显示，全球智能充电市场规模预计将在2025年达到500亿美元，年复合增长率超过20%。随着移动设备的普及和快充技术的进步，市场需求将持续增长。',
      date: '2023-12-05',
      readTime: '7 分钟',
      category: 'industry',
      categoryName: '行业资讯',
      image: 'https://via.placeholder.com/800x400',
    },
  ];

  const filteredNews = news.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">新闻资讯</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解我们的最新动态、产品发布和行业资讯
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索新闻..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">未找到相关新闻</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-gray-400">{item.id}</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                        {item.categoryName}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.summary}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                      <span className="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        阅读更多 →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}