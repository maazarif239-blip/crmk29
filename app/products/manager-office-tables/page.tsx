import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';
export default function ManagerOfficeTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Manager Office Tables" description="Precision engineering for the modern professional. Discover premium manager office tables designed for peak performance, modern functionality, and style." />
{/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "White Perforated Panel Desk",
                src: "/Screenshot 2026-06-23 234615.png",
                desc: "Modern white office desk with perforated metal modesty panel, clean minimalist frame, sleek design suited for compact manager office setups." 
              },
              {
                name: "White Floating Top Manager Desk",
                src: "/Screenshot 2026-06-23 234622.png",
                desc: "Contemporary white desk with floating split-level top, built-in cable management gap, modern storage base, ideal for managerial workstations."
              },
              {
                name: "Compact White L-Desk",
                src: "/Screenshot 2026-06-23 234821.png",
                desc: "Minimalist white desk with open metal frame legs, split tabletop design with cable channel, modern functional look for manager offices."
              },
              {
                name: "Wood Grain L-Shape Manager Desk",
                src: "/Screenshot 2026-06-23 234827.png",
                desc: "Classic wood-finish L-shaped desk with matching return unit, black metal trim accents, traditional design suited for manager office spaces."
              },
              {
                name: "Green Accent Modesty Panel Desk",
                src: "/Screenshot 2026-06-23 234834.png",
                desc: "Modern wood-top desk with bold green modesty panel, open storage cubby, industrial metal legs, contemporary look for manager workstations."
              },
              {
                name: "Wood Desk with Green Panel & Return",
                src: "/Screenshot 2026-06-23 234842.png",
                desc: "L-shaped wood-finish desk featuring green modesty panel accent, matching storage credenza, sleek black frame for modern manager offices."
              },
              {
                name: "Walnut L-Shape Desk with Cylindrical Legs",
                src: "/Screenshot 2026-06-23 234848.png",
                desc: "Rich walnut L-shaped manager desk with rounded wooden legs, matching open-shelf credenza unit, warm traditional aesthetic for office use."
              },
              {
                name: "Orange Accent Compact Desk",
                src: "/Screenshot 2026-06-23 234854.png",
                desc: "White desk with bold orange edge trim, angled metal legs, mobile storage pedestal, vibrant modern design for manager workstations."
              },
              {
                name: "Red Trim White Desk",
                src: "/Screenshot 2026-06-23 234900.png",
                desc: "White desk with striking red edge banding, modern A-frame metal legs, modesty panel with storage drawer, contemporary manager office design."
              },
              {
                name: "Grey Wood Desk with Green Trim",
                src: "/Screenshot 2026-06-23 234907.png",
                desc: "L-shaped grey wood-finish desk with green edge accents, modesty panel, matching storage cabinet, modern colorful design for manager offices."
              },
              {
                name: "Minimalist Grey Desk with A-Frame Legs",
                src: "/Screenshot 2026-06-23 234916.png",
                desc: "Sleek grey wood-top desk with white modesty panel, sturdy A-frame metal legs, clean modern design for compact manager workstations."
              },
              {
                name: "Walnut Desk with Black Frame Base",
                src: "/Screenshot 2026-06-23 234932.png",
                desc: "Dark walnut finish desk with bold black geometric frame legs, matching tall storage cabinet, modern bold design for manager offices."
              },
              {
                name: "Walnut Desk with Grey Accent Base",
                src: "/Screenshot 2026-06-23 234938.png",
                desc: "Walnut top desk with contrasting grey metal base panel, matching tall storage unit with cutout handle, modern executive-style manager desk."
              }
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
