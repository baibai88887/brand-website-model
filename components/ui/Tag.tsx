import { HTMLAttributes } from 'react';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'orange' | 'blue' | 'green' | 'gray';
  size?: 'sm' | 'md';
}

const Tag = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: TagProps) => {
  const baseClasses = 'inline-flex items-center font-semibold rounded-full';

  const variantClasses = {
    default: 'bg-brand-orange/10 text-brand-orange',
    orange: 'bg-brand-orange/10 text-brand-orange',
    blue: 'bg-brand-blue/10 text-brand-blue',
    green: 'bg-brand-green/10 text-brand-green',
    gray: 'bg-brand-gray-light text-brand-gray-mid',
  };

  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
