import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function LibraryShelves() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/155 (4).png" 
              alt="Library Shelves" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Library Shelves
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-3xl mx-auto">
              Comprehensive library shelving solutions engineered for schools, institutions, and public libraries. Built for durability, organization, and lasting performance.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/library-shelves" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Circulation Desk Type A',
                image: '/155 (1).png',
                description: 'Library circulation desk combining sitting and standing heights. Desk shelves and tabletops finished with grey colour desk-top laminate. Available in various sizes to suit different library layouts.',
              },
              {
                name: 'Circulation Desk Type B',
                image: '/155 (2).png',
                description: 'Compact circulation desk variant with the same premium laminate and composite finish as Type A. Ideal for smaller library reception and checkout areas. Multiple size configurations available.',
              },
              {
                name: 'Single-Sided Shelving Bay',
                image: '/155 (3).png',
                description: 'Single-sided library shelving unit constructed on a laminate sides and steel shelving composite scheme. Designed for wall placement and the perimeter rows of any library setup.',
              },
              {
                name: 'Double-Sided Shelving Bay',
                image: '/155 (4).png',
                description: 'Freestanding double-sided shelving bay for central aisle placement. Part of the HB Softline Library Shelving System — fulfils the needs of any community or institutional library environment.',
              },
              {
                name: 'Newspaper & Magazine Display',
                image: '/155 (5).png',
                description: 'Dedicated display unit for newspapers and magazines with angled display slots and lower storage. Keeps periodicals organized and accessible for library visitors.',
              },
              {
                name: 'Newspaper Stand',
                image: '/155 (6).png',
                description: 'Upright newspaper stand with transparent display panels for easy visibility of current publications. Compact footprint suitable for reading rooms and library lounges.',
              },
              {
                name: 'Periodical Shelving with Storage',
                image: '/155 (7).png',
                description: 'Periodical display shelving unit with an integrated lower storage compartment. Ideal for libraries managing both current issues and archived periodical collections.',
              },
              {
                name: 'Study Carrel',
                image: '/155 (8).png',
                description: 'Individual study carrel with a spacious table surface and a top shelf for books and materials. Optional reading lamp available. Single-sided and double-sided add-on modules allow formation of multiple connected units.',
              },
              {
                name: 'Periodical Display Shelving',
                image: '/155 (9).png',
                description: 'Dedicated shelving unit for displaying periodicals and journals in an angled, forward-facing format. Designed for easy browsing and high visibility of publication covers.',
              },
              {
                name: 'Atlas Case',
                image: '/155 (10).png',
                description: 'Wide-format horizontal storage case designed for oversized reference books, atlases, and large documents. Multiple shelf tiers with generous depth to accommodate large-format materials.',
              },
              {
                name: 'Dictionary Stand',
                image: '/155 (11).png',
                description: 'Compact open two-shelf stand designed specifically for dictionary and heavy reference book placement. Clean, minimal form that fits naturally into any library reference zone.',
              },
              {
                name: 'Book Trolley',
                image: '/155 (12).png',
                description: 'Mobile book trolley mounted on smooth-rolling castors for transporting returned or reshelving books across the library floor. Durable construction with multiple shelf levels.',
              },
              {
                name: 'Reading Table Type I',
                image: '/155 (13).png',
                description: 'Rectangular library reading table with a clean metal frame and spacious tabletop surface. Designed for individual or group study in reading rooms and open library areas.',
              },
              {
                name: 'Reading Table Type II',
                image: '/155 (14).png',
                description: 'Round library reading table with slim metal legs for collaborative and informal seating arrangements. Encourages group study and discussion in library common areas.',
              },
              {
                name: 'Low Height Unit',
                image: '/155 (15).png',
                description: 'Low-height cabinet with double-door closure for secure storage in library environments. Suitable for storing supplies, equipment, or archival materials discreetly beneath counters or shelving runs.',
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
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">
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
