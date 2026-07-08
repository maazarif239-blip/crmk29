import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'White Perforated Panel Desk', image: '/Screenshot 2026-06-23 234615.png', description: 'Modern white office desk with perforated metal modesty panel, clean minimalist frame, sleek design suited for compact manager office setups.' },
  { name: 'White Floating Top Manager Desk', image: '/Screenshot 2026-06-23 234622.png', description: 'Contemporary white desk with floating split-level top, built-in cable management gap, modern storage base, ideal for managerial workstations.' },
  { name: 'Compact White L-Desk', image: '/Screenshot 2026-06-23 234821.png', description: 'Minimalist white desk with open metal frame legs, split tabletop design with cable channel, modern functional look for manager offices.' },
  { name: 'Wood Grain L-Shape Manager Desk', image: '/Screenshot 2026-06-23 234827.png', description: 'Classic wood-finish L-shaped desk with matching return unit, black metal trim accents, traditional design suited for manager office spaces.' },
  { name: 'Green Accent Modesty Panel Desk', image: '/Screenshot 2026-06-23 234834.png', description: 'Modern wood-top desk with bold green modesty panel, open storage cubby, industrial metal legs, contemporary look for manager workstations.' },
  { name: 'Wood Desk with Green Panel & Return', image: '/Screenshot 2026-06-23 234842.png', description: 'L-shaped wood-finish desk featuring green modesty panel accent, matching storage credenza, sleek black frame for modern manager offices.' },
  { name: 'Walnut L-Shape Desk with Cylindrical Legs', image: '/Screenshot 2026-06-23 234848.png', description: 'Rich walnut L-shaped manager desk with rounded wooden legs, matching open-shelf credenza unit, warm traditional aesthetic for office use.' },
  { name: 'Orange Accent Compact Desk', image: '/Screenshot 2026-06-23 234854.png', description: 'White desk with bold orange edge trim, angled metal legs, mobile storage pedestal, vibrant modern design for manager workstations.' },
  { name: 'Red Trim White Desk', image: '/Screenshot 2026-06-23 234900.png', description: 'White desk with striking red edge banding, modern A-frame metal legs, modesty panel with storage drawer, contemporary manager office design.' },
  { name: 'Grey Wood Desk with Green Trim', image: '/Screenshot 2026-06-23 234907.png', description: 'L-shaped grey wood-finish desk with green edge accents, modesty panel, matching storage cabinet, modern colorful design for manager offices.' },
  { name: 'Minimalist Grey Desk with A-Frame Legs', image: '/Screenshot 2026-06-23 234916.png', description: 'Sleek grey wood-top desk with white modesty panel, sturdy A-frame metal legs, clean modern design for compact manager workstations.' },
  { name: 'Walnut Desk with Black Frame Base', image: '/Screenshot 2026-06-23 234932.png', description: 'Dark walnut finish desk with bold black geometric frame legs, matching tall storage cabinet, modern bold design for manager offices.' },
  { name: 'Walnut Desk with Grey Accent Base', image: '/Screenshot 2026-06-23 234938.png', description: 'Walnut top desk with contrasting grey metal base panel, matching tall storage unit with cutout handle, modern executive-style manager desk.' },
];

export default function ManagerOfficeTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Manager Office Tables" description="Precision engineering for the modern professional. Discover premium manager office tables designed for peak performance, modern functionality, and style." />
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
