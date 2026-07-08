import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Skyline Single Desk Workstation', image: '/Screenshot 2026-06-23 232800.png', description: 'Compact single-seat walnut workstation with slim metal frame, low fabric privacy screen and integrated cable management, refined individual workspace solution.' },
  { name: 'Skyline Dual Bench Workstation', image: '/Screenshot 2026-06-23 232819.png', description: 'Two-person walnut bench workstation with shared center fabric divider, matching mobile pedestals and slim metal leg frame, efficient dual-seat team layout.' },
  { name: 'Skyline Cluster Workstation', image: '/Screenshot 2026-06-23 232828.png', description: 'Four-person cluster workstation with walnut desktops, central privacy screen cross, integrated cable trays and metal frame legs, versatile team collaboration setup.' },
];

export default function SkylineWalnutWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Skyline Walnut Workstation Series" description="Elevated walnut-finish workstations with sleek metal frames, privacy screens, and modular storage for modern high-rise office environments." />
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
