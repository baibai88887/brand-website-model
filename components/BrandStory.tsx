'use client';

import Link from 'next/link';
import { ArrowRight, Target, Heart, Lightbulb, BookOpen, Zap } from 'lucide-react';
import { companyInfo } from '@/lib/constants';
import { companyValues } from '@/lib/data';

const iconMap = {
  Target,
  Zap,
  Heart,
  Lightbulb,
  BookOpen,
};

const colorMap = ['brand-orange', 'brand-blue', 'brand-green', 'brand-orange', 'brand-blue'];

export default function BrandStory() {
  return (
    <section className="py-section bg-brand-gray-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Mission & Vision */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-8">
              我们的使命与愿景
            </h2>

            <div className="space-y-6 mb-8">
              {/* Mission */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">
                    使命
                  </h3>
                  <p className="text-brand-gray-mid">
                    {companyInfo.mission}。我们相信创造产品的本质，是以极致的创新去超越用户需求。
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-brand-dark mb-2">
                    愿景
                  </h3>
                  <p className="text-brand-gray-mid">
                    {companyInfo.vision}。
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-brand-orange font-display font-semibold hover:text-brand-dark transition-colors duration-200"
            >
              了解更多关于我们
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {companyValues.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              const color = colorMap[index % colorMap.length] as 'brand-orange' | 'brand-blue' | 'brand-green';
              return (
                <div
                  key={value.id}
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors duration-300 ${
                    color === 'brand-orange'
                      ? 'bg-brand-orange/10 group-hover:bg-brand-orange'
                      : color === 'brand-blue'
                      ? 'bg-brand-blue/10 group-hover:bg-brand-blue'
                      : 'bg-brand-green/10 group-hover:bg-brand-green'
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      color === 'brand-orange'
                        ? 'text-brand-orange group-hover:text-white'
                        : color === 'brand-blue'
                        ? 'text-brand-blue group-hover:text-white'
                        : 'text-brand-green group-hover:text-white'
                    }`} />
                  </div>

                  <h3 className="text-lg font-display font-semibold text-brand-dark mb-2">
                    {value.title}
                  </h3>

                  <p className="text-brand-gray-mid text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
