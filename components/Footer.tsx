import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { footerSections, socialLinks, contactInfo, companyInfo } from '@/lib/constants';

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">BRAND</span>
            </div>
            <p className="text-brand-gray-mid mb-6 max-w-md">
              {companyInfo.tagline}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="p-2 bg-brand-dark rounded-lg hover:bg-brand-orange transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-brand-gray-mid group-hover:text-white" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.values(footerSections).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-display font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-brand-orange transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-brand-dark">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brand-orange" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-dark text-center text-brand-gray-mid">
          <p>
            © {currentYear} {companyInfo.name}. 保留所有权利。{' '}
            <Link href="https://beian.miit.gov.cn/" className="hover:text-brand-orange transition-colors duration-200">
              湘ICP备XXXXXXXX号
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
