import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Dual Screen Linear Workstation', image: '/Screenshot 2026-06-23 225731.png', description: 'Two-person linear workstation with tall fabric privacy screens, walnut desktop surfaces and angular metal leg frames, designed for focused parallel work.' },
  { name: 'Angled Bay Workstation', image: '/Screenshot 2026-06-23 225739.png', description: 'Multi-seat angled bay workstation with fabric panel dividers, overhead storage shelves and ergonomic task chairs, ideal for structured open-plan offices.' },
  { name: 'Cluster Hub Workstation', image: '/Screenshot 2026-06-23 225749.png', description: 'Four-person cluster workstation with shared center divider panels, integrated cable management and mobile pedestal storage, efficient team collaboration layout.' },
  { name: 'Manager Edge Workstation', image: '/Screenshot 2026-06-23 225808.png', description: 'Premium single-seat manager workstation with walnut desktop, angular metal frame, side credenza storage and privacy screen, executive workspace solution.' },
  { name: 'Open Plan Edge Workstation', image: '/Screenshot 2026-06-23 225817.png', description: 'Large open-plan workstation layout with multiple desks, low fabric dividers, ergonomic chairs and shared storage units, scalable corporate seating solution.' },
  { name: 'Executive Corner Edge Workstation', image: '/Screenshot 2026-06-23 225826.png', description: 'L-shaped executive corner workstation with walnut finish, angular metal legs, matching credenza and tall bookshelf storage, premium office setup.' },
];

export default function UrbanEdgeWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Urban Edge Workstation Series" description="Bold contemporary workstations with sharp angular lines, premium finishes, and versatile configurations for dynamic modern office spaces." />
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
