import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconContainerProps {
  icon: LucideIcon;
  variant?: 'default' | 'orange' | 'blue' | 'green';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconContainer = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  className = '',
}: IconContainerProps) => {
  const variantClasses = {
    default: 'bg-brand-gray-light text-brand-dark group-hover:bg-brand-dark group-hover:text-white',
    orange: 'bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white',
    blue: 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white',
    green: 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white',
  };

  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-16 h-16',
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <Icon className={iconSizeClasses[size]} />
    </div>
  );
};

export default IconContainer;
