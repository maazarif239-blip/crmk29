import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ConferenceAndMeetingTables() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/175-1-.png" 
              alt="Conference & Meeting Tables" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Conference & Meeting Tables
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Precision-engineered meeting tables for boardrooms, executive suites, and collaborative workspaces. Built to make every meeting count.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/conference-and-meeting-tables" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Poliform Conference Table',
                image: '/175 (1).png',
                description: 'A premium large-format conference table with a refined light wood veneer finish and integrated cable management. Engineered for high-capacity boardrooms seating up to 20 persons. The clean rectangular silhouette and precision-finished surface create a commanding presence in any corporate boardroom or executive meeting environment.',
              },
              {
                name: 'Transcend Conference Table',
                image: '/175 (2).png',
                description: 'The Transcend is a distinctive horseshoe-format conference table in a warm wood finish, designed for large executive meetings and formal conference environments. The open-centre configuration encourages inclusive discussion and unobstructed sightlines across the table. Ideal for government offices, corporate boardrooms, and institutional meeting halls where presence and formality are paramount.',
              },
              {
                name: 'Odyssey Conference Table',
                image: '/175 (3).png',
                description: 'The Odyssey is a bold boat-shaped conference table in a rich dark walnut finish, combining executive aesthetics with functional design. Integrated surface data and power access points make it ideal for technology-enabled boardrooms. The warm wood tones and premium finish create an authoritative meeting environment suited to executive suites, corporate headquarters, and high-profile client-facing boardrooms.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6 mb-2">
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
