import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ExecutiveFurniture() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/240(1).png" 
              alt="Executive Furniture" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Executive Furniture
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Commanding executive desks, reception counters, and manager workstations crafted in premium wood finishes. Designed to define leadership environments with authority and elegance.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/executive-furniture" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Ravi Executive Desk',
                image: '/240(1).png',
                description: 'The Ravi Executive Desk is HB Furniture\'s flagship executive office suite, designed to command any corner office or CEO environment. The complete suite features a generous L-shaped primary desk surface with integrated modesty panel, a side return extension, a matching low credenza with cabinet storage, and a coordinating full-height bookcase wall unit with glass-door upper display shelving and solid-door lower cabinet storage. All surfaces finished in premium cherry wood veneer with a dark espresso contrast base and polished aluminum accent detailing. A complete executive environment that projects authority, organization, and refined professional taste.',
              },
              {
                name: 'Fidelity Reception Desk',
                image: '/240(2).png',
                description: 'The Fidelity Reception Desk makes a powerful first impression in any corporate reception area, hotel lobby, or institutional entrance. Its bold L-shaped counter configuration combines a full-height transaction counter with a lower working return, finished in rich cherry wood veneer over a deep espresso black base. The distinctive horizontal aluminum louvre grille panel on the front fascia adds a contemporary architectural detail that elevates the reception environment. Built for durability and long-term professional use in high-traffic reception and front-of-house settings.',
              },
              {
                name: 'Nile Executive Desk',
                image: '/240(3).png',
                description: 'The Nile Executive Desk combines classic proportions with contemporary detailing to create a distinguished executive workspace. The broad cherry veneer desktop with curved front edge detail sits on elegantly sculpted dark espresso panel legs featuring a refined arched base cutout — a signature design element that lightens the visual weight of the piece. An integrated side return provides additional working surface for monitor placement, reference materials, or secondary task work. Suitable for senior managers, department heads, and executive offices where classic elegance and functional workspace area are equally important.',
              },
              {
                name: 'Indus Executive Desk',
                image: '/240(4).png',
                description: 'The Indus Executive Desk delivers clean, uncompromising executive presence in a straightforward rectangular format. The generous cherry veneer desktop is supported by a solid dark espresso pedestal panel base on one side, providing built-in structural integrity and a commanding visual weight. Its no-compromise proportions make it the ideal primary desk for senior managers and executives who prefer a traditional straight desk format over an L-shaped configuration. Simple, strong, and unmistakably professional — the Indus is a timeless executive desk that never goes out of style.',
              },
              {
                name: 'Tigris Manager Desk',
                image: '/240(5).png',
                description: 'The Tigris Manager Desk is a bold architectural statement piece designed for senior managers and team leaders who demand a workspace as distinctive as their role. The dramatic semi-circular curved front extension in rich cherry veneer creates an expansive, commanding primary work surface, while the rectangular left-hand return with mobile pedestal provides organized secondary working and storage space. The contrast of the curved cherry veneer desktop against the dark espresso structural base creates a striking visual that commands attention in any managerial or director-level office environment. A desk that defines the space it occupies.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left bg-white flex flex-col flex-1">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
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
