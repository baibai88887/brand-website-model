'use client';

import { Zap, Users, Globe, Award, TrendingUp, Building2 } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Globe,
      value: '146+',
      label: '国家和地区',
      description: '业务覆盖全球',
    },
    {
      icon: Users,
      value: '200M+',
      label: '全球消费者',
      description: '服务用户规模',
    },
    {
      icon: Zap,
      value: '53%',
      label: '研发人员',
      description: '技术创新驱动',
    },
    {
      icon: Building2,
      value: '5,000+',
      label: '全球员工',
      description: '专业团队支持',
    },
    {
      icon: Award,
      value: 'Top 50',
      label: '中国全球化品牌',
      description: '行业领先地位',
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: '年行业经验',
      description: '持续创新发展',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的成就</h2>
          <p className="text-xl text-gray-600">用数据见证我们的成长与突破</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}