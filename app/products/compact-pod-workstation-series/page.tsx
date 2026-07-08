import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Single Pod Workstation', image: '/Screenshot 2026-06-23 231939.png', description: 'Compact single-seat workstation with green fabric panel, monitor mount support and side storage drawer, efficient solution for small offices.' },
  { name: 'Mini Cubicle Workstation', image: '/Screenshot 2026-06-23 231952.png', description: 'Space-saving single workstation with grey-green panel divider and built-in cable management, compact and budget-friendly individual desk setup.' },
  { name: 'Corner Twin Workstation', image: '/Screenshot 2026-06-23 231956.png', description: 'L-shaped twin workstation with dual monitor panels and green fabric dividers, suitable for small teams and reception areas.' },
  { name: 'Twin Pod Workstation', image: '/Screenshot 2026-06-23 232009.png', description: 'Two-seater linear pod workstation with shared green fabric divider and matching monitor mounts, compact dual-desk setup for startups and call centers.' },
  { name: 'Pedestal Pod Workstation', image: '/Screenshot 2026-06-23 232014.png', description: 'Single workstation pod with filing pedestal storage, dual monitor stands and fabric panel divider, complete setup for organized individual workspaces.' },
  { name: 'Multi-Bay Pod Workstation', image: '/Screenshot 2026-06-23 232021.png', description: 'Four-unit linear pod workstation row with uniform green panels and monitor mounts, scalable high-density seating solution for BPO and call center environments.' },
];

export default function CompactPodWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Compact Pod Workstation Series" description="Space-efficient pod workstations with fabric panel dividers, monitor mounts, and modular configurations for startups, call centers, and compact offices." />
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
