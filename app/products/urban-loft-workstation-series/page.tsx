import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Open Bay Workstation', image: '/Screenshot 2026-06-23 225900.png', description: 'Industrial-style open workstation with walnut storage credenzas, sleek metal-leg desks and ergonomic chairs, featuring a spacious dual-seat layout for modern loft offices.' },
  { name: 'Panel System Workstation', image: '/Screenshot 2026-06-23 225905.png', description: 'Cubicle-style panel workstations with overhead bookshelf storage, fabric privacy dividers and mobile pedestals, structured workspace solution for corporate offices.' },
  { name: 'Pergola Meeting Pod Workstation', image: '/Screenshot 2026-06-23 225917.png', description: 'Open-plan cubicle workstations surrounding a wooden pergola-style meeting pod, combining collaborative workspaces with private meeting zones.' },
  { name: 'Executive Media Workstation', image: '/Screenshot 2026-06-23 225940.png', description: 'Premium walnut executive desk with matching wall-mounted credenza and built-in display unit, sophisticated setup for executive offices and boardrooms.' },
];

export default function UrbanLoftWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Urban Loft Workstation Series" description="Industrial-inspired workstation designs combining walnut finishes, metal frames, and modular layouts for contemporary loft-style offices." />
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
