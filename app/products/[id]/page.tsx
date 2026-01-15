'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ShoppingCart, Heart, Share2, Check, Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: params.id,
    name: 'PowerCore III Elite 25600',
    category: '智能充电',
    description: '超大容量移动电源，支持60W双向快充，为笔记本电脑和手机提供持久电力',
    price: '¥599',
    originalPrice: '¥799',
    rating: 4.8,
    reviews: 1234,
    stock: 999,
    colors: ['黑色', '白色', '银色'],
    features: [
      '25600mAh超大容量',
      '60W双向快充技术',
      '3个USB-C接口',
      'LCD数字显示屏',
      '多设备同时充电',
      '智能安全保护',
    ],
    specifications: [
      { label: '容量', value: '25600mAh / 96Wh' },
      { label: '输出功率', value: '60W Max' },
      { label: '输入功率', value: '60W Max' },
      { label: '接口', value: '3× USB-C, 1× USB-A' },
      { label: '尺寸', value: '160 × 72 × 27mm' },
      { label: '重量', value: '630g' },
      { label: '充电时间', value: '约3小时（60W充电器）' },
      { label: '循环寿命', value: '≥800次' },
    ],
  };

  const relatedProducts = [
    { id: 2, name: 'PowerPort Atom III Slim', price: '¥199', category: '智能充电' },
    { id: 3, name: 'PowerCore III 10000', price: '¥299', category: '智能充电' },
    { id: 4, name: 'PowerCore+ 26800', price: '¥699', category: '智能充电' },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回产品列表
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center mb-6">
                <span className="text-8xl font-bold text-gray-400">{product.name[0]}</span>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    <span className="text-2xl font-bold text-gray-400">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                {product.stock > 0 && (
                  <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                    有货
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">{product.reviews} 条评价</span>
              </div>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-4xl font-bold text-primary-600">
                  {product.price}
                </span>
                <span className="text-2xl text-gray-400 line-through">
                  {product.originalPrice}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                  省{parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))}元
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">选择颜色</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedColor === index
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">数量</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-2xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-20 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-2xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  加入购物车
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                    isWishlisted
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? '已收藏' : '收藏'}
                </button>
                <button className="flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">产品特点</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">产品规格</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">相关产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                >
                  <div className="p-6">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <span className="text-4xl font-bold text-gray-400">{related.name[0]}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{related.category}</p>
                    <span className="text-xl font-bold text-primary-600">
                      {related.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}