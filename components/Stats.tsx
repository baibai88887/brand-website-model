'use client';

import { Globe, Users, Lightbulb, Building, Award } from 'lucide-react';
import { stats } from '@/lib/data';

export default function Stats() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4">
            我们的成就
          </h2>
          <p className="text-xl text-brand-gray-mid">用数据见证我们的成长与突破</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const icons = [Globe, Users, Lightbulb, Building, Award, Award];
            const Icon = icons[index % icons.length];

            return (
              <div key={stat.id} className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-xl transition-all duration-300 ${
                    stat.color === 'brand-orange'
                      ? 'bg-brand-orange/10 group-hover:bg-brand-orange'
                      : stat.color === 'brand-blue'
                      ? 'bg-brand-blue/10 group-hover:bg-brand-blue'
                      : 'bg-brand-green/10 group-hover:bg-brand-green'
                  }`}>
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      stat.color === 'brand-orange'
                        ? 'text-brand-orange group-hover:text-white'
                        : stat.color === 'brand-blue'
                        ? 'text-brand-blue group-hover:text-white'
                        : 'text-brand-green group-hover:text-white'
                    }`} />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-display font-bold text-brand-dark mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-display font-semibold text-brand-dark mb-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
