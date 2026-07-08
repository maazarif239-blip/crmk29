import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Executive L-Shape Workstation', image: '/Screenshot 2026-06-23 225622.png', description: 'Premium white L-shape executive desk with mobile storage unit, ergonomic mesh chair and matching tall storage cabinets, perfect for modern minimalist office environments.' },
  { name: 'Linear Bench Workstation', image: '/Screenshot 2026-06-23 225629.png', description: 'Two-seater linear bench desk with fabric screen divider, mobile pedestal and sleek metal legs, ideal collaborative workstation solution for compact teams.' },
  { name: 'Modular Bench Workstation with Tower Storage', image: '/Screenshot 2026-06-23 225646.png', description: 'Multi-seat bench workstation featuring built-in tower storage units between desks, fabric privacy screens and ergonomic chairs, ideal for organized workspaces.' },
  { name: '4-Seater Cluster Workstation', image: '/Screenshot 2026-06-23 225655.png', description: 'Cross-shaped four-person cluster desk with adjustable fabric dividers, cable management and white ergonomic chairs, designed for team collaboration and privacy.' },
  { name: 'Curved Multi-Seat Cluster Workstation', image: '/Screenshot 2026-06-23 225706.png', description: 'Large curved bench-style multi-seat workstation with privacy screens, cable spine management and open layout, scalable seating solution for spacious office floors.' },
  { name: 'Meeting/Conference Desk with Storage', image: '/Screenshot 2026-06-23 225716.png', description: 'Compact two-seater meeting table with integrated power module, matching sideboard and bookshelf storage units, ideal for manager cabins and small meeting rooms.' },
];

export default function GravityWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Gravity Workstation Series" description="Engineered for modern teams. Explore our Gravity Series workstations designed for productivity, collaboration, and seamless workspace integration." />
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
