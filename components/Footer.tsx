import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const footerSections = [
    {
      title: '关于我们',
      links: [
        { name: '公司简介', href: '/about' },
        { name: '使命愿景', href: '/about#mission' },
        { name: '发展历程', href: '/about#history' },
        { name: '管理团队', href: '/about#team' },
      ],
    },
    {
      title: '产品中心',
      links: [
        { name: '智能充电', href: '/products?category=charging' },
        { name: '智能家居', href: '/products?category=smart-home' },
        { name: '智能影音', href: '/products?category=audio' },
        { name: '能源管理', href: '/products?category=energy' },
      ],
    },
    {
      title: '支持服务',
      links: [
        { name: '帮助中心', href: '#' },
        { name: '售后服务', href: '#' },
        { name: '产品注册', href: '#' },
        { name: '常见问题', href: '#' },
      ],
    },
    {
      title: '法律信息',
      links: [
        { name: '隐私声明', href: '/privacy' },
        { name: '使用条款', href: '/terms' },
        { name: '网站地图', href: '/sitemap' },
        { name: 'Cookie政策', href: '/cookies' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold text-white">BRAND</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              一家极致创新的全球化智能硬件科技企业，致力于成为全球消费者热爱的品牌。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <span>400-888-8888</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <span>contact@brand.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <span>湖南省长沙市</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {currentYear} BRAND. 保留所有权利。{' '}
            <Link href="https://beian.miit.gov.cn/" className="hover:text-primary-400">
              湘ICP备XXXXXXXX号
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}