import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function TechnologySuite() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header (Alternative Style) */}
      

      {/* Hero Section (Light & Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-12">
        <section className="relative h-[300px] flex items-center justify-center text-center overflow-hidden border border-gray-100 bg-[#FAFAFA]">
          {/* Background Image with Light Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
              alt="Technology" 
              className="w-full h-full object-cover opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-white/70"></div>
          </div>

          <div className="relative z-10 w-full px-4 flex flex-col items-center">
            <span className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest mb-3">Product Category</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Technology
            </h1>
            <p className="text-gray-600 text-[13px] max-w-sm leading-relaxed">
              Advanced power, data, and connectivity integration for the modern workspace.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid (2 Columns) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {[
              {
                name: 'Interactive Display Solution',
                desc: 'A professional display system tailored for smart offices, boardrooms, and engaging team presentations.',
                image: '/36.jpg',
              },
              {
                name: 'Smart Collaboration Screen',
                desc: 'Designed to support seamless communication and content sharing across modern meeting environments.',
                image: '/37.jpg',
              },
              {
                name: 'Video Conferencing System',
                desc: 'An integrated conferencing solution built for executive meetings, hybrid teams, and connected workspaces.',
                image: '/38.jpg',
              },
              {
                name: 'Digital Meeting Hub',
                desc: 'A streamlined technology centerpiece that enhances coordination, presentations, and collaborative workflows.',
                image: '/39.jpg',
              },
              {
                name: 'Integrated Workspace Technology',
                desc: 'A refined corporate technology solution that brings efficiency and connectivity to premium office settings.',
                image: '/40.jpg',
              },
              {
                name: 'Black Recessed Mounting Box',
                desc: 'Compact black plastic housing unit designed for embedding power or data sockets into desktop cutouts, providing a clean recessed fit for cable management hardware.',
                image: '/Screenshot 2026-06-23 233442.png',
              },
              {
                name: 'Sliding Cable Tray with Cover',
                desc: 'Slim rectangular tray with a sliding white insert panel, used for routing and concealing desktop cables neatly within table-top grommet systems.',
                image: '/Screenshot 2026-06-23 233450.png',
              },
              {
                name: 'Wireless Charging Desktop Module',
                desc: 'Brushed metal in-desk panel with wireless charging pad, USB ports, and control icons integrated power and charging solution for modern office desks.',
                image: '/Screenshot 2026-06-23 233457.png',
              },
              {
                name: 'Aluminum Power Socket Housing',
                desc: 'Silver metal under-desk mounting unit with multiple cutouts for sockets and switches, offering sturdy support for built-in desktop power modules.',
                image: '/Screenshot 2026-06-23 233502.png',
              },
              {
                name: 'Stainless Steel Cable Tray Insert',
                desc: 'Long brushed steel tray with mesh cable port, designed to sit flush within desktops for organized wire routing and a polished finish.',
                image: '/Screenshot 2026-06-23 233505.png',
              },
              {
                name: 'Round Wireless Charger with Cable',
                desc: 'Compact white circular wireless charging pad with attached power cord, suitable for placement on desks or side tables for convenient device charging.',
                image: '/Screenshot 2026-06-23 233516.png',
              },
              {
                name: 'Portable Wireless Charging Puck',
                desc: 'Small blue-and-white handheld wireless charger with dual USB cable ports, offering flexible fast-charging for phones and small devices on the go.',
                image: '/Screenshot 2026-06-23 233519.png',
              },
              {
                name: 'Oval Desktop Power & USB Module',
                desc: 'Sleek grey oval-shaped power module with built-in sockets and USB ports, designed to sit on desktops for easy access to charging and connectivity.',
                image: '/Screenshot 2026-06-23 233703.png',
              },
              {
                name: 'Round Pop-Up Power Grommet',
                desc: 'Black circular flip-top desktop grommet housing multiple power sockets, allowing concealed, flush-mounted access to electricity directly on the work surface.',
                image: '/Screenshot 2026-06-23 233712.png',
              },
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-2">{product.name}</h3>
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
