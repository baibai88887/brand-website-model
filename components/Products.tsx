'use client';

import Link from 'next/link';
import { ArrowRight, Battery, Home, Music, Sun } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      icon: Battery,
      title: '智能充电',
      description: '首创 Power IQ™ 技术，实现全面快充兼容',
      color: 'from-blue-500 to-blue-600',
      href: '/products?category=charging',
    },
    {
      icon: Home,
      title: '智能家居',
      description: '首创 HomeBase 本地基站存储，提升家庭安防',
      color: 'from-green-500 to-green-600',
      href: '/products?category=smart-home',
    },
    {
      icon: Music,
      title: '智能影音',
      description: '首创 ACAA™ 同轴圈铁声学架构，还原现场音质',
      color: 'from-purple-500 to-purple-600',
      href: '/products?category=audio',
    },
    {
      icon: Sun,
      title: '能源管理',
      description: '开创阳台光储领域，高效利用可再生能源',
      color: 'from-orange-500 to-orange-600',
      href: '/products?category=energy',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">产品系列</h2>
          <p className="text-xl text-gray-600">探索我们的创新产品线</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  了解更多
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}