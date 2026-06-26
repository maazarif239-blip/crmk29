import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function LoopFrameWorkstationSeries() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Loop Frame Workstation Series" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Loop Frame Workstation Series
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Smooth curved metal loop-frame workstations with clean lines, integrated storage, and modular desk configurations for collaborative office environments.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        

        {/* Product Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Single Loop Desk Workstation",
                src: "/Screenshot 2026-06-23 225838.png",
                desc: "Compact single-seat workstation with rounded loop metal frame legs, walnut desktop and low fabric privacy screen, minimalist individual desk solution."
              },
              {
                name: "Dual Loop Bench Workstation",
                src: "/Screenshot 2026-06-23 225848.png",
                desc: "Two-person bench workstation with continuous loop metal frame, shared fabric divider panel and matching mobile pedestals, streamlined team seating layout."
              },
              {
                name: "Loop Cluster Workstation",
                src: "/Screenshot 2026-06-23 225955.png",
                desc: "Four-person cluster workstation with loop frame legs, center privacy screens and integrated cable trays, efficient open-plan team collaboration setup."
              },
              {
                name: "Loop Manager Desk",
                src: "/Screenshot 2026-06-23 230003.png",
                desc: "Premium manager workstation with loop metal frame, walnut top, side return desk and credenza storage unit, sophisticated single-seat executive layout."
              },
              {
                name: "Multi-Bay Loop Workstation",
                src: "/Screenshot 2026-06-23 230010.png",
                desc: "Large multi-seat linear workstation row with loop frame structure, uniform fabric dividers and overhead storage, scalable high-density office seating solution."
              },
              {
                name: "Loop Corner Executive Workstation",
                src: "/Screenshot 2026-06-23 230017.png",
                desc: "L-shaped corner workstation with loop metal frame, walnut desktop, side credenza and bookshelf storage, premium executive office workspace configuration."
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
