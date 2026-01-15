'use client';

import Link from 'next/link';
import { ArrowRight, Lightbulb, Target, Heart, Users } from 'lucide-react';

export default function BrandStory() {
  const values = [
    {
      icon: Lightbulb,
      title: '第一性',
      description: '抛开表面事实，回归基础原理，抓住突破关键',
    },
    {
      icon: Target,
      title: '求极致',
      description: '顶着巨大风险，想尽一切办法，追求长期全局最优',
    },
    {
      icon: Heart,
      title: '共成长',
      description: '长期主义：延迟满足，终局思维；公心：大局为先，感恩心态',
    },
    {
      icon: Users,
      title: '持续学习',
      description: '自我觉察进化，不断突破自我，与团队共同成长',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              我们的使命与愿景
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    使命
                  </h3>
                  <p className="text-gray-600">
                    极致创新，激发可能。我们相信创造产品的本质，是以极致的创新去超越用户需求。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    愿景
                  </h3>
                  <p className="text-gray-600">
                    搭建一个互相激发的创造者乐园，成为全球消费者热爱的品牌。
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
            >
              了解更多关于我们
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}