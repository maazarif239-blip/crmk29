import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function GravityWorkstationSeries() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Gravity Workstation Series" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Gravity Workstation Series
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Engineered for modern teams. Explore our Gravity Series workstations designed for productivity, collaboration, and seamless workspace integration.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-20">
        

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
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden">
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


    </div>
  );
}
