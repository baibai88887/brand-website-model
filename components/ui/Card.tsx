import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'flat';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card = ({
  children,
  variant = 'default',
  hover = false,
  padding = 'md',
  className = '',
  ...props
}: CardProps) => {
  const baseClasses = 'rounded-xl transition-all duration-200';

  const variantClasses = {
    default: 'bg-white shadow-md',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-brand-gray-light',
    flat: 'bg-brand-gray-light',
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1' : '';

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
