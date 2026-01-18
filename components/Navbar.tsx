'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';
import { navLinks } from '@/lib/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY !== lastScrollY) {
        setIsScrolled(scrollY > 20);
        lastScrollY = scrollY;
      }
      rafRef.current = requestAnimationFrame(handleScroll);
    };

    rafRef.current = requestAnimationFrame(handleScroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-light/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center transition-all duration-200 group-hover:shadow-lg">
              <span className="text-white font-display font-bold text-xl">B</span>
            </div>
            <span className="text-2xl font-display font-bold text-brand-dark transition-colors duration-200 group-hover:text-brand-orange">
              BRAND
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
            <button className="flex items-center space-x-1 text-brand-dark hover:text-brand-orange transition-colors duration-200">
              <Globe className="w-5 h-5" />
              <span>中文</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-brand-gray-light transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-brand-dark" />
            ) : (
              <Menu className="w-6 h-6 text-brand-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-light border-t border-brand-gray-light animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-brand-dark hover:text-brand-orange transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="flex items-center space-x-1 py-2 text-brand-dark hover:text-brand-orange transition-colors duration-200">
              <Globe className="w-5 h-5" />
              <span>中文</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
