import type { ReactNode } from 'react';

type ProductPageHeaderProps = {
  title: string;
  description?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  contained?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  extra?: ReactNode;
};

export default function ProductPageHeader({
  title,
  description,
  subtitle,
  align = 'center',
  contained = false,
  titleClassName = 'text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif',
  descriptionClassName = 'text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl',
  extra,
}: ProductPageHeaderProps) {
  const isCenter = align === 'center';

  const inner = (
    <>
      {subtitle ? (
        <span className="text-[#EB5324] text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 block">
          {subtitle}
        </span>
      ) : null}
      <h1 className={`${titleClassName} ${isCenter ? 'mx-auto' : ''}`}>{title}</h1>
      {description ? (
        <p className={`${descriptionClassName} ${isCenter ? 'mx-auto' : ''}`}>{description}</p>
      ) : null}
      {extra}
    </>
  );

  if (contained) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <section className={`bg-white py-16 sm:py-20 md:py-24 ${isCenter ? 'text-center' : ''}`}>
          <div className={`w-full px-4 ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>{inner}</div>
        </section>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div
        className={`w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 ${isCenter ? 'text-center' : ''}`}
      >
        {isCenter ? <div className="max-w-2xl mx-auto">{inner}</div> : inner}
      </div>
    </section>
  );
}
