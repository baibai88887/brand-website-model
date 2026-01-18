// Product Types
export interface Product {
  id: string | number;
  name: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isNew?: boolean;
  isHot?: boolean;
  image?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

// News Types
export interface News {
  id: string | number;
  title: string;
  summary: string;
  content?: string;
  date: string;
  readTime: string;
  category: string;
  author?: string;
  views?: number;
  image?: string;
}

export interface NewsCategory {
  id: string;
  name: string;
}

// Stats Types
export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
  color: string;
}

// Contact Types
export interface ContactInfo {
  id: string;
  title: string;
  value: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Navigation Types
export interface NavLink {
  name: string;
  href: string;
}

export interface MobileNavLink extends NavLink {
  description?: string;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Company Types
export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: string;
}

export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
}
