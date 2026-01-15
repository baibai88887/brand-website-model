import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Heart, Lightbulb, Users, Award, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解我们的公司简介、使命愿景、核心价值观、发展历程和管理团队',
};

export default function AboutPage() {
  const milestones = [
    { year: '2011', title: '公司成立', description: '在美国创立，开启创新之旅' },
    { year: '2014', title: '进军中国市场', description: '建立中国总部，布局全球市场' },
    { year: '2017', title: '获得安永企业家奖', description: '创始人荣获年度企业家奖项' },
    { year: '2020', title: '推出智能家居品牌', description: '拓展产品线，进入智能家居领域' },
    { year: '2022', title: '入选中国全球化品牌Top 50', description: '品牌影响力持续提升' },
    { year: '2024', title: '全球研发中心启用', description: '加强研发实力，推动技术创新' },
  ];

  const offices = [
    { city: '长沙', country: '中国', type: '总部' },
    { city: '深圳', country: '中国', type: '研发中心' },
    { city: '纽约', country: '美国', type: '销售中心' },
    { city: '伦敦', country: '英国', type: '欧洲总部' },
    { city: '东京', country: '日本', type: '销售中心' },
    { city: '新加坡', country: '新加坡', type: '亚太总部' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">关于我们</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  我们是一家极致创新的全球化智能硬件科技企业，自2011年成立以来，我们不断创造出深受全球消费者喜爱的科技产品。
                </p>
                <p>
                  我们的使命是"极致创新，激发可能"。我们相信创造产品的本质，是以极致的创新去超越用户需求。
                </p>
                <p>
                  我们的愿景是"搭建一个互相激发的创造者乐园，成为全球消费者热爱的品牌"。
                </p>
                <p>
                  公司总部位于湖南长沙，并在全球设有超过30个办公室，业务覆盖146+个国家和地区，服务超过2亿全球消费者。
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">使命</h3>
                <p className="text-gray-600 text-sm">极致创新，激发可能</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">愿景</h3>
                <p className="text-gray-600 text-sm">成为全球消费者热爱的品牌</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">创新</h3>
                <p className="text-gray-600 text-sm">53%研发人员，技术驱动</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-lg mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">荣誉</h3>
                <p className="text-gray-600 text-sm">Top 50中国全球化品牌</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">核心价值观</h2>
            <p className="text-xl text-gray-600">指导我们前进的信念与原则</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                <Lightbulb className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">第一性</h3>
              <p className="text-gray-600 leading-relaxed">
                抛开表面事实，回归基础原理，抓住突破关键
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">求极致</h3>
              <p className="text-gray-600 leading-relaxed">
                顶着巨大风险，想尽一切办法，追求长期全局最优
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">共成长</h3>
              <p className="text-gray-600 leading-relaxed">
                长期主义：延迟满足，终局思维；公心：大局为先，感恩心态
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">持续学习</h3>
              <p className="text-gray-600 leading-relaxed">
                自我觉察进化，不断突破自我，与团队共同成长
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-xl text-gray-600">见证我们的成长与突破</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2 pr-8">
                    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-3xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                  
                  <div className="w-1/2 pl-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">管理团队</h2>
            <p className="text-xl text-gray-600">引领我们前进的核心团队</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">CEO</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    阳萌 (Steven)
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    创始人兼首席执行官
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p>
                      2005年获得美国德克萨斯大学奥斯汀分校计算机硕士学位，此前毕业于北京大学计算机系。
                    </p>
                    <p>
                      在创立公司之前，曾担任Google高级算法工程师，并荣获Google最高奖项"Founders' Award"。
                    </p>
                    <p>
                      因创业成就获得2017年中国安永企业家奖，并于2019年被评为年度企业家。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">全球布局</h2>
            <p className="text-xl text-gray-600">我们的足迹遍布全球</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {office.city}
                    </h3>
                    <p className="text-sm text-gray-500">{office.country}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                  {office.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}