import { NavLink, MobileNavLink, SocialLink } from '@/types';

// Navigation Links
export const navLinks: NavLink[] = [
  { name: '首页', href: '/' },
  { name: '产品', href: '/products' },
  { name: '新闻', href: '/news' },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
];

// Mobile Navigation Links
export const mobileNavLinks: MobileNavLink[] = [
  { name: '首页', href: '/', description: '探索我们的品牌故事' },
  { name: '产品', href: '/products', description: '查看我们的产品系列' },
  { name: '新闻', href: '/news', description: '了解最新动态' },
  { name: '关于我们', href: '/about', description: '认识我们的团队' },
  { name: '联系我们', href: '/contact', description: '取得联系' },
];

// Social Media Links
export const socialLinks: SocialLink[] = [
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
];

// Footer Sections
export const footerSections = {
  about: {
    title: '关于我们',
    links: [
      { name: '公司简介', href: '/about#company' },
      { name: '发展历程', href: '/about#timeline' },
      { name: '管理团队', href: '/about#team' },
      { name: '全球布局', href: '/about#global' },
    ],
  },
  products: {
    title: '产品中心',
    links: [
      { name: '智能充电', href: '/products?category=charging' },
      { name: '智能家居', href: '/products?category=smart-home' },
      { name: '智能影音', href: '/products?category=audio' },
      { name: '能源管理', href: '/products?category=energy' },
    ],
  },
  support: {
    title: '支持服务',
    links: [
      { name: '帮助中心', href: '/support' },
      { name: '产品保修', href: '/warranty' },
      { name: '联系我们', href: '/contact' },
      { name: '常见问题', href: '/faq' },
    ],
  },
  legal: {
    title: '法律信息',
    links: [
      { name: '隐私政策', href: '/privacy' },
      { name: '服务条款', href: '/terms' },
      { name: 'Cookie 设置', href: '/cookies' },
      { name: '网站地图', href: '/sitemap' },
    ],
  },
};

// Contact Information
export const contactInfo = {
  email: 'contact@brand.com',
  phone: '+86-400-888-8888',
  address: '湖南省长沙市岳麓区XXX路XXX号',
  businessHours: '周一至周五 9:00-18:00',
};

// Company Info
export const companyInfo = {
  name: 'BRAND',
  tagline: '极致创新，激发可能',
  mission: '极致创新，激发可能',
  vision: '搭建一个互相激发的创造者乐园，成为全球消费者热爱的品牌',
  founded: '2011',
  headquarters: '湖南长沙',
};
