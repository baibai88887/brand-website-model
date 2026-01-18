'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-light via-white to-brand-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-display text-brand-dark mb-6 leading-tight">
            极致创新
            <span className="block text-gradient">激发可能</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-brand-gray-mid mb-12 max-w-3xl mx-auto">
            一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white rounded-lg font-display font-semibold hover:bg-opacity-90 transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              探索产品
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-dark border-2 border-brand-gray-light rounded-lg font-display font-semibold hover:border-brand-orange hover:text-brand-orange transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
