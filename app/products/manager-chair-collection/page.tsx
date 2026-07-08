import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Pink High-Back Manager Chair', image: '/245-1-.png', description: 'BIFMA certified pink fabric chair with high back support and black base. Smooth wheels, ideal for comfortable daily office work.', badge: 'BIFMA Certified' },
  { name: 'White Frame Mesh Manager Chair Black & Grey', image: '/245-2-.png', description: 'Premium mesh-back chair with white frame, adjustable arms and headrest support. Ergonomic design for executive-level comfort.', badge: 'BIFMA Certified' },
  { name: 'Brown Fabric Manager Chair', image: '/245-3-.png', description: 'Simple brown fabric manager chair with adjustable armrests and black base. Comfortable padded seat, suitable for regular office use.' },
  { name: 'White Frame Mesh Manager Chair Red Seat', image: '/245-7-.png', description: 'BIFMA certified mesh-back chair with white frame and bold red cushion. Adjustable arms and lumbar support for better posture.', badge: 'BIFMA Certified' },
  { name: 'Beige Mesh High-Back Manager Chair', image: '/245-8-.png', description: 'Breathable beige mesh back chair with adjustable arms and dark seat cushion. Great airflow and comfort for long working hours.' },
  { name: 'Green Mid-Back Manager Chair', image: '/245-9-.png', description: 'BIFMA certified green fabric chair with fixed armrests and black base. Simple modern design, good for everyday manager seating.', badge: 'BIFMA Certified' },
];

export default function ManagerChairCollection() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Manager Chair Collection" description="Ergonomically engineered manager and task seating for the modern professional. BIFMA certified performance meets contemporary design across our complete manager chair range." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} badge={p.badge} />
          ))}
        </div>
      </section>
    </div>
  );
}
