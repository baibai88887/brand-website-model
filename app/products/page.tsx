'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Battery, Home, Music, Sun, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '全部产品', icon: SlidersHorizontal },
    { id: 'charging', name: '智能充电', icon: Battery },
    { id: 'smart-home', name: '智能家居', icon: Home },
    { id: 'audio', name: '智能影音', icon: Music },
    { id: 'energy', name: '能源管理', icon: Sun },
  ];

  const products = [
    {
      id: 1,
      name: 'PowerCore III Elite 25600',
      category: 'charging',
      description: '超大容量移动电源，支持60W双向快充，为笔记本电脑和手机提供持久电力',
      price: '¥599',
      features: ['25600mAh容量', '60W双向快充', '3个USB-C接口', 'LCD数字显示屏'],
      isNew: true,
      isHot: true,
    },
    {
      id: 2,
      name: 'Nebula Cosmos Laser 4K',
      category: 'audio',
      description: '4K激光投影仪，2400 ANSI流明，带来影院级观影体验',
      price: '¥8999',
      features: ['4K分辨率', '2400 ANSI流明', '智能对焦', 'Android TV系统'],
      isNew: true,
      isHot: false,
    },
    {
      id: 3,
      name: 'eufy Security Cam 2K',
      category: 'smart-home',
      description: '2K高清智能摄像头，支持人形检测，本地存储保护隐私',
      price: '¥399',
      features: ['2K高清画质', '人形智能检测', 'HomeBase本地存储', '夜视功能'],
      isNew: false,
      isHot: true,
    },
    {
      id: 4,
      name: 'Solix F1200 Solar Generator',
      category: 'energy',
      description: '1200W便携式太阳能发电站，家庭应急用电的理想选择',
      price: '¥4999',
      features: ['1200W输出功率', '1229Wh容量', '太阳能充电', '多接口设计'],
      isNew: true,
      isHot: false,
    },
    {
      id: 5,
      name: 'PowerPort Atom III Slim',
      category: 'charging',
      description: '超薄65W GaN充电器，同时为多设备快速充电',
      price: '¥199',
      features: ['65W GaN技术', '4个USB接口', '超薄设计', '折叠插头'],
      isNew: false,
      isHot: true,
    },
    {
      id: 6,
      name: 'Liberty 4 NC',
      category: 'audio',
      description: '主动降噪真无线耳机，50小时续航，Hi-Res音质认证',
      price: '¥899',
      features: ['主动降噪', '50小时续航', 'Hi-Res音质', '空间音频'],
      isNew: true,
      isHot: true,
    },
    {
      id: 7,
      name: 'RoboVac G30',
      category: 'smart-home',
      description: '智能扫地机器人，AI地图规划，精准避障',
      price: '¥2999',
      features: ['AI地图规划', '精准避障', '2000Pa吸力', 'APP控制'],
      isNew: false,
      isHot: false,
    },
    {
      id: 8,
      name: 'PowerHouse 757',
      category: 'energy',
      description: '1229Wh便携电站，支持太阳能充电，户外用电无忧',
      price: '¥3999',
      features: ['1229Wh容量', '800W输出', '太阳能充电', '多接口输出'],
      isNew: false,
      isHot: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">产品中心</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我们的创新产品，体验极致科技带来的美好生活
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
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索产品..."
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
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">未找到相关产品</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className="relative p-8">
                    {product.isNew && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        新品
                      </span>
                    )}
                    {product.isHot && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        热销
                      </span>
                    )}

                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl font-bold text-gray-400">{product.name[0]}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-500 group-hover:text-primary-600 transition-colors">
                        查看详情 →
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