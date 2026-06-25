import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function ModernWorkstationSystems() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/screenshot-2026-06-16-164657.png" 
              alt="Modern Workstation Systems" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Modern Workstation Systems
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Intelligently designed workstation solutions engineered for modern open-plan offices. Modular, scalable, and built for the way teams work today.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {[
              {
                name: 'Integrity Workstation Type X',
                image: '/screenshot-2026-06-16-181849.png',
                description: 'The Integrity Workstation Type X is a high-performance modular workstation engineered for open-plan corporate environments. Features a robust panel-based system with integrated cable management, privacy screening, and generous desktop surface. Scalable and reconfigurable to meet evolving office layouts and team sizes.',
              },
              {
                name: 'Integrity Workstation Type S',
                image: '/screenshot-2026-06-16-182144.png',
                description: 'The Integrity Workstation Type S offers a compact, space-efficient modular workstation solution ideal for medium-density office environments. Shares the same robust Integrity panel system architecture as Type X but optimized for tighter floor plans without compromising on ergonomic workspace quality or cable management capability.',
              },
              {
                name: 'Integrity Cable Management System',
                image: '/screenshot-2026-06-16-182240.png',
                description: 'A purpose-engineered cable management solution designed specifically for the Integrity Workstation System. Routes power, data, and communication cables cleanly through the panel infrastructure, eliminating desk clutter and maintaining a professional workspace aesthetic. Compatible with all Integrity workstation configurations.',
              },
              {
                name: 'Integrity Executive Desk with Side Rack',
                image: '/screenshot-2026-06-16-182346.png',
                description: 'A premium executive desk from the Integrity series, paired with an integrated side rack for organized storage of files, equipment, and personal items. Designed for senior professionals who require a commanding workspace that balances executive presence with functional organization. Clean lines and premium finish throughout.',
              },
              {
                name: 'Integrity Manager Desk with Side Rack',
                image: '/screenshot-2026-06-13-163948.png',
                description: 'The Integrity Manager Desk with Side Rack delivers a professional and organized workspace for team leads and department managers. The integrated side rack provides immediate access to frequently used files and equipment while keeping the primary desk surface clear for productive work. Part of the cohesive Integrity modular furniture family.',
              },
              {
                name: 'Integrity Storage Pedestal',
                image: '/205-6-.png',
                description: 'A compact under-desk storage pedestal from the Integrity series, designed to slot seamlessly beneath any Integrity workstation or executive desk. Available with drawer and file configurations to suit individual storage needs. Finished to match the broader Integrity system for a unified, professional office aesthetic.',
              },
              {
                name: 'Integrity Free Standing Side Rack',
                image: '/205-7-.png',
                description: 'A freestanding side rack unit from the Integrity Workstation System, providing flexible additional storage and organizational capacity. Can be positioned independently or alongside any Integrity desk configuration. Ideal for offices requiring adaptable storage solutions that can be repositioned as team layouts evolve.',
              },
              {
                name: 'Integrity Workstation duster for Four Persons',
                image: '/screenshot-2026-06-16-182823.png',
                description: 'A fully integrated four-person workstation cluster built on the Integrity modular panel system. Designed for collaborative open-plan office environments, this cluster configuration maximizes floor space efficiency while providing each user with a defined, ergonomic personal workspace complete with privacy screening and integrated cable management. Scalable to larger clusters on request.',
              },
              {
                name: 'Infinity Meeting Table',
                image: '/screenshot-2026-06-13-164041.png',
                description: 'The Infinity Meeting Table is a sleek, contemporary meeting and collaboration table designed to complement modern open-plan workstation environments. Its clean architectural form and premium surface finish make it equally suited for internal team meetings, client presentations, and informal collaborative sessions. Available in multiple size configurations.',
              },
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
