export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-brand-orange bg-brand-orange/10 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4 font-display">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-brand-gray-mid max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
