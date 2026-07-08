import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Linear Run Workstation', image: '/Screenshot 2026-06-23 232952.png', description: 'Multi-bay panel workstation with wood-finish desks, overhead storage cabinets and mobile pedestals, efficient row layout for large teams and call centers.' },
  { name: 'Corner Bay Workstation', image: '/Screenshot 2026-06-23 233000.png', description: 'Compact corner-shaped panel workstation with translucent privacy screens, under-desk storage and CPU holders, designed for focused individual work.' },
  { name: 'Double Cluster Workstation', image: '/Screenshot 2026-06-23 233010.png', description: 'Back-to-back panel workstation cluster with curved desks, mobile drawer units and frosted glass dividers, balanced privacy-sharing setup for four-person teams.' },
];

export default function ClassicCubicleWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Classic Cubicle Workstation Series" description="Traditional panel-based cubicle workstations with wood-finish desks, overhead storage, and privacy screens for structured corporate environments." />
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
