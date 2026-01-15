'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const news = {
    id: params.id,
    title: '公司荣获2024年度中国全球化品牌Top 50',
    summary: '凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。',
    content: `
      <p class="mb-6">凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。这是对我们多年来坚持"极致创新，激发可能"使命的最好肯定。</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">持续创新，引领行业发展</h2>
      <p class="mb-6">自2011年成立以来，我们始终将技术创新作为企业发展的核心驱动力。从首创Power IQ™技术实现全面快充兼容，到首次将氮化镓（GaN）应用于消费电子领域，我们不断突破技术边界，为用户带来更好的产品体验。</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">全球化布局，服务全球用户</h2>
      <p class="mb-6">我们的业务已覆盖146+个国家和地区，服务超过2亿全球消费者。在全球设有超过30个办公室，形成了完善的研发、生产、销售和服务网络。这种全球化布局不仅让我们能够更好地服务全球用户，也让我们能够整合全球资源，推动技术创新。</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">品牌影响力持续提升</h2>
      <p class="mb-6">此次入选中国全球化品牌Top 50，是对我们品牌影响力的认可。我们将继续坚持"极致创新，激发可能"的使命，不断提升产品和服务质量，为全球消费者创造更多价值。</p>
      
      <p class="mb-6">未来，我们将继续加大研发投入，在人工智能、电池技术、智能家居等领域深耕细作，推出更多创新产品，为用户带来更好的体验。我们相信，只有不断创新，才能在激烈的市场竞争中保持领先地位。</p>
    `,
    date: '2024-01-15',
    readTime: '5 分钟',
    category: '荣誉奖项',
    author: '品牌部',
    views: 12345,
  };

  const relatedNews = [
    {
      id: 2,
      title: '推出全新一代智能充电产品线',
      date: '2024-01-10',
      category: '产品发布',
    },
    {
      id: 3,
      title: '全球研发中心正式启用',
      date: '2024-01-05',
      category: '公司动态',
    },
    {
      id: 4,
      title: '智能家居市场份额持续增长',
      date: '2023-12-28',
      category: '行业资讯',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回新闻列表
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 text-sm font-medium rounded-full mb-6">
              {news.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {news.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                {news.readTime}
              </div>
              <div className="flex items-center">
                <span className="font-medium">作者：</span>
                {news.author}
              </div>
              <div className="flex items-center">
                <span className="font-medium">阅读：</span>
                {news.views.toLocaleString()}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Facebook className="w-5 h-5" />
                <span>分享</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter className="w-5 h-5" />
                <span>分享</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>分享</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>更多</span>
              </button>
            </div>
          </div>

          <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-12 flex items-center justify-center">
            <span className="text-6xl font-bold text-gray-400">{news.id}</span>
          </div>

          <div className="prose prose-lg max-w-none mb-16">
            <div
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>

          <div className="border-t border-gray-200 pt-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">相关新闻</h3>
            <div className="space-y-6">
              {relatedNews.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.id}`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 font-medium">
                      {related.category}
                    </span>
                    <span className="text-sm text-gray-500">{related.date}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}