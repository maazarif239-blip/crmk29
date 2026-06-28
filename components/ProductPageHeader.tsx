type ProductPageHeaderProps = {
  title: string;
  description?: string;
};

export default function ProductPageHeader({ title, description }: ProductPageHeaderProps) {
  return (
    <section className="bg-white" data-product-page="true">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-20 pb-10 sm:pb-12 md:pb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight font-serif">
          {title}
        </h1>
        {description ? (
          <p className="text-gray-500 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
