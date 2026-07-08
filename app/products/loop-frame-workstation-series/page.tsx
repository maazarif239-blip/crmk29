import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Single Loop Desk Workstation', image: '/Screenshot 2026-06-23 225838.png', description: 'Compact single-seat workstation with rounded loop metal frame legs, walnut desktop and low fabric privacy screen, minimalist individual desk solution.' },
  { name: 'Dual Loop Bench Workstation', image: '/Screenshot 2026-06-23 225848.png', description: 'Two-person bench workstation with continuous loop metal frame, shared fabric divider panel and matching mobile pedestals, streamlined team seating layout.' },
  { name: 'Loop Manager Desk', image: '/Screenshot 2026-06-23 230003.png', description: 'Premium manager workstation with loop metal frame, walnut top, side return desk and credenza storage unit, sophisticated single-seat executive layout.' },
  { name: 'Multi-Bay Loop Workstation', image: '/Screenshot 2026-06-23 230010.png', description: 'Large multi-seat linear workstation row with loop frame structure, uniform fabric dividers and overhead storage, scalable high-density office seating solution.' },
];

export default function LoopFrameWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Loop Frame Workstation Series" description="Smooth curved metal loop-frame workstations with clean lines, integrated storage, and modular desk configurations for collaborative office environments." />
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
