import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Twin X-Leg Workstation', image: '/Screenshot 2026-06-23 231423.png', description: 'Dual-seater walnut desk with angular black X-shaped legs, triangular privacy screens and center drawer storage, modern minimalist workstation setup.' },
  { name: 'Single X-Leg Workstation', image: '/Screenshot 2026-06-23 231436.png', description: 'Compact workstation with rich walnut top, criss-cross metal legs and fold-up privacy screen with built-in drawer, sleek solution for individual workspaces.' },
  { name: 'Open Top X-Leg Workstation', image: '/Screenshot 2026-06-23 231444.png', description: 'Single-seat walnut workstation with bold X-frame metal legs, raised triangular screen panel and side drawer, stylish contemporary executive workspace.' },
  { name: 'Four-Way Cluster X-Leg Workstation', image: '/Screenshot 2026-06-23 231458.png', description: 'Four-person star-shaped cluster workstation with shared center privacy screens and criss-cross legs, compact walnut-finish collaboration setup.' },
];

export default function CrossLegWalnutWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Cross-Leg Walnut Workstation Series" description="Elegant walnut-top workstations with distinctive X-shaped metal leg frames, privacy screens, and integrated storage for contemporary executive workspaces." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
