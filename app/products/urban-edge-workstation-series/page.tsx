import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export default function UrbanEdgeWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Urban Edge Workstation Series" description="Bold contemporary workstations with sharp angular lines, premium finishes, and versatile configurations for dynamic modern office spaces." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dual Screen Linear Workstation",
                src: "/Screenshot 2026-06-23 225731.png",
                desc: "Two-person linear workstation with tall fabric privacy screens, walnut desktop surfaces and angular metal leg frames, designed for focused parallel work."
              },
              {
                name: "Angled Bay Workstation",
                src: "/Screenshot 2026-06-23 225739.png",
                desc: "Multi-seat angled bay workstation with fabric panel dividers, overhead storage shelves and ergonomic task chairs, ideal for structured open-plan offices."
              },
              {
                name: "Cluster Hub Workstation",
                src: "/Screenshot 2026-06-23 225749.png",
                desc: "Four-person cluster workstation with shared center divider panels, integrated cable management and mobile pedestal storage, efficient team collaboration layout."
              },
              {
                name: "Manager Edge Workstation",
                src: "/Screenshot 2026-06-23 225808.png",
                desc: "Premium single-seat manager workstation with walnut desktop, angular metal frame, side credenza storage and privacy screen, executive workspace solution."
              },
              {
                name: "Open Plan Edge Workstation",
                src: "/Screenshot 2026-06-23 225817.png",
                desc: "Large open-plan workstation layout with multiple desks, low fabric dividers, ergonomic chairs and shared storage units, scalable corporate seating solution."
              },
              {
                name: "Executive Corner Edge Workstation",
                src: "/Screenshot 2026-06-23 225826.png",
                desc: "L-shaped executive corner workstation with walnut finish, angular metal legs, matching credenza and tall bookshelf storage, premium office setup."
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


    </div>
  );
}
