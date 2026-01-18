'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Home, Volume2, BatteryCharging } from 'lucide-react';
import { productCategories } from '@/lib/data';
import Card from '@/components/ui/Card';

const iconMap = {
  Zap,
  Home,
  Volume2,
  'BatteryCharging': BatteryCharging,
};

const colorMap = {
  'brand-orange': 'from-brand-orange to-brand-orange/80',
  'brand-blue': 'from-brand-blue to-brand-blue/80',
  'brand-green': 'from-brand-green to-brand-green/80',
  'brand-gray-mid': 'from-brand-gray-mid to-brand-gray-mid/80',
};

export default function Products() {
  return (
    <section className="py-section bg-brand-gray-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            产品系列
          </h2>
          <p className="text-xl text-brand-gray-mid">探索我们的创新产品线</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.slice(1).map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const gradient = colorMap[category.color as keyof typeof colorMap] || colorMap['brand-orange'];
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group"
              >
                <Card variant="default" hover padding="lg" className="h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />

                  <div className="relative">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors duration-300">
                      {category.name}
                    </h3>

                    <p className="text-brand-gray-mid mb-6">
                      点击探索{category.name}系列产品
                    </p>

                    <div className="flex items-center text-brand-orange font-display font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      了解更多
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white rounded-lg font-display font-semibold hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
          >
            查看全部产品
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
