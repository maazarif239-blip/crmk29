import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Integrity Workstation Type X', image: '/screenshot-2026-06-16-181849.png', description: 'The Integrity Workstation Type X is a high-performance modular workstation engineered for open-plan corporate environments. Features a robust panel-based system with integrated cable management, privacy screening, and generous desktop surface. Scalable and reconfigurable to meet evolving office layouts and team sizes.' },
  { name: 'Integrity Workstation Type S', image: '/screenshot-2026-06-16-182144.png', description: 'The Integrity Workstation Type S offers a compact, space-efficient modular workstation solution ideal for medium-density office environments. Shares the same robust Integrity panel system architecture as Type X but optimized for tighter floor plans without compromising on ergonomic workspace quality or cable management capability.' },
  { name: 'Integrity Cable Management System', image: '/screenshot-2026-06-16-182240.png', description: 'A purpose-engineered cable management solution designed specifically for the Integrity Workstation System. Routes power, data, and communication cables cleanly through the panel infrastructure, eliminating desk clutter and maintaining a professional workspace aesthetic.' },
  { name: 'Integrity Executive Desk with Side Rack', image: '/screenshot-2026-06-16-182346.png', description: 'A premium executive desk from the Integrity series, paired with an integrated side rack for organized storage of files, equipment, and personal items. Designed for senior professionals who require a commanding workspace that balances executive presence with functional organization.' },
  { name: 'Integrity Manager Desk with Side Rack', image: '/screenshot-2026-06-13-163948.png', description: 'The Integrity Manager Desk with Side Rack delivers a professional and organized workspace for team leads and department managers. The integrated side rack provides immediate access to frequently used files and equipment while keeping the primary desk surface clear for productive work.' },
  { name: 'Integrity Storage Pedestal', image: '/205-6-.png', description: 'A compact under-desk storage pedestal from the Integrity series, designed to slot seamlessly beneath any Integrity workstation or executive desk. Available with drawer and file configurations to suit individual storage needs.' },
  { name: 'Integrity Free Standing Side Rack', image: '/205-7-.png', description: 'A freestanding side rack unit from the Integrity Workstation System, providing flexible additional storage and organizational capacity. Can be positioned independently or alongside any Integrity desk configuration.' },
  { name: 'Integrity Workstation Cluster for Four Persons', image: '/screenshot-2026-06-16-182823.png', description: 'A fully integrated four-person workstation cluster built on the Integrity modular panel system. Designed for collaborative open-plan office environments, this cluster configuration maximizes floor space efficiency while providing each user with a defined, ergonomic personal workspace.' },
  { name: 'Infinity Meeting Table', image: '/screenshot-2026-06-13-164041.png', description: 'The Infinity Meeting Table is a sleek, contemporary meeting and collaboration table designed to complement modern open-plan workstation environments. Its clean architectural form and premium surface finish make it equally suited for internal team meetings, client presentations, and informal collaborative sessions.' },
];

export default function ModernWorkstationSystems() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Modern Workstation Systems" description="Intelligently designed workstation solutions engineered for modern open-plan offices. Modular, scalable, and built for the way teams work today." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
