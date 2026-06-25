import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function BricklineIndustrialWorkstationSeries() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Brickline Industrial Workstation Series" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Brickline Industrial Workstation Series
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Industrial-grade workstations with robust metal frames, raw material finishes, and heavy-duty configurations for warehouse-style and creative studio offices.
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
                name: "Brickline Single Desk Workstation",
                src: "/Screenshot 2026-06-23 225449.png",
                desc: "Sturdy single-seat industrial workstation with thick metal frame, raw walnut desktop surface and low panel divider, robust individual desk for creative studios."
              },
              {
                name: "Brickline Bench Workstation",
                src: "/Screenshot 2026-06-23 225458.png",
                desc: "Two-person industrial bench workstation with heavy-duty metal leg structure, shared fabric screen divider and matching mobile pedestal storage units."
              },
              {
                name: "Brickline Linear Row Workstation",
                src: "/Screenshot 2026-06-23 225507.png",
                desc: "Multi-seat linear row workstation with industrial metal frame, walnut desktops, uniform fabric dividers and integrated cable management for large teams."
              },
              {
                name: "Brickline Cluster Workstation",
                src: "/Screenshot 2026-06-23 225521.png",
                desc: "Four-person cluster workstation with industrial metal crossbar frame, center privacy screens, cable trays and ergonomic task chairs, heavy-duty team layout."
              },
              {
                name: "Brickline Manager Workstation",
                src: "/Screenshot 2026-06-23 225529.png",
                desc: "Premium industrial-style manager workstation with thick walnut desktop, metal frame legs, side return desk and matching storage credenza, executive-grade workspace."
              },
              {
                name: "Brickline Executive Corner Workstation",
                src: "/Screenshot 2026-06-23 225539.png",
                desc: "L-shaped industrial executive workstation with robust metal frame, walnut finish, integrated credenza, tall bookshelf unit and premium leather chair, complete office setup."
              },
              {
                name: "Brickline Open Plan Workstation",
                src: "/Screenshot 2026-06-23 225554.png",
                desc: "Large open-plan industrial workstation arrangement with multiple desks, metal frame structure, low dividers and shared storage, scalable corporate seating solution."
              },
              {
                name: "Brickline Conference Workstation",
                src: "/Screenshot 2026-06-23 225602.png",
                desc: "Industrial-style workstation with conference extension table, metal frame construction, walnut surfaces and matching display storage unit, versatile meeting-ready workspace."
              },
              {
                name: "Brickline Compact Workstation",
                src: "/Screenshot 2026-06-23 225611.png",
                desc: "Space-efficient industrial workstation with compact metal frame desk, single privacy panel and mobile pedestal, budget-friendly robust desk solution for small offices."
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
