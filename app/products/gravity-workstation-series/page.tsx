<<<<<<< HEAD
import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

=======
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

>>>>>>> c04871bbcb01871c46d5abead229019b1605fe18
export default function GravityWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Gravity Workstation Series" description="Engineered for modern teams. Explore our Gravity Series workstations designed for productivity, collaboration, and seamless workspace integration." />
<<<<<<< HEAD
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Executive L-Shape Workstation",
                src: "/Screenshot 2026-06-23 225622.png",
                desc: "Premium white L-shape executive desk with mobile storage unit, ergonomic mesh chair and matching tall storage cabinets, perfect for modern minimalist office environments."
              },
              {
                name: "Linear Bench Workstation",
                src: "/Screenshot 2026-06-23 225629.png",
                desc: "Two-seater linear bench desk with fabric screen divider, mobile pedestal and sleek metal legs, ideal collaborative workstation solution for compact teams."
              },
              {
                name: "Modular Bench Workstation with Tower Storage",
                src: "/Screenshot 2026-06-23 225646.png",
                desc: "Multi-seat bench workstation featuring built-in tower storage units between desks, fabric privacy screens and ergonomic chairs, ideal for organized workspaces."
              },
              {
                name: "4-Seater Cluster Workstation",
                src: "/Screenshot 2026-06-23 225655.png",
                desc: "Cross-shaped four-person cluster desk with adjustable fabric dividers, cable management and white ergonomic chairs, designed for team collaboration and privacy."
              },
              {
                name: "Curved Multi-Seat Cluster Workstation",
                src: "/Screenshot 2026-06-23 225706.png",
                desc: "Large curved bench-style multi-seat workstation with privacy screens, cable spine management and open layout, scalable seating solution for spacious office floors."
              },
              {
                name: "Meeting/Conference Desk with Storage",
                src: "/Screenshot 2026-06-23 225716.png",
                desc: "Compact two-seater meeting table with integrated power module, matching sideboard and bookshelf storage units, ideal for manager cabins and small meeting rooms."
              },
            ].map((product, index) => (
              <div key={index} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={product.src} 
                    alt={product.name} 
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.desc}
                  </p>
                  <div className="mt-6">
                    <ContactForPricingLink />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>


=======
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
>>>>>>> c04871bbcb01871c46d5abead229019b1605fe18
    </div>
  );
}
