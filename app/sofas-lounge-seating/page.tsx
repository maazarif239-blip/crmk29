import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function SofasLoungeSeating() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section (Edge-to-Edge) */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/i.jpg" 
            alt="Sofas & Lounge Seating" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 w-full px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-sans">
            Sofas & Lounge Seating
          </h1>
          <div className="w-16 h-1 bg-[#EB5324]"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/sofas-lounge-seating" />

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                name: 'Arc Sofa Koto 1 Seater',
                desc: 'Elegant single-seater sofa designed for executive offices, reception lounges, and premium corporate environments. Combines comfort, durability, and modern aesthetics.',
                image: '/35.jpg',
                isPlaceholder: false
              },
              {
                name: 'HB-Sofa TQ-01',
                image: '/270 (1).png',
                desc: 'The HB-Sofa TQ-01 is a timeless Chesterfield three-seater sofa upholstered in rich antique dark leather with full button-tufting across the back, seat, and front apron. The deep rolled arms, hand-finished leather, and traditional dark bun feet make it an iconic statement piece for executive reception areas, premium lounges, and boardroom ante-rooms where heritage and character are paramount.',
              },
              {
                name: 'HB-Sofa TQ-02',
                image: '/270 (2).png',
                desc: 'The HB-Sofa TQ-02 is a sleek contemporary two-seater sofa finished in smooth dark charcoal leather. Its clean boxy silhouette, wide flat armrests, and minimal low block feet make it an ideal choice for modern corporate reception areas, waiting lounges, and executive breakout zones where contemporary elegance and durability are equally required.',
              },
              {
                name: 'HB-Sofa TQ-03',
                image: '/270 (3).png',
                desc: 'The HB-Sofa TQ-03 is a premium white leather lounge set comprising a three-seater sofa and coordinating armchair. The clean white leather upholstery and simple structured form create a sophisticated, light, and airy reception or lounge environment. Photographed in a modern corporate interior, this set is ideal for executive reception areas, hospitality lounges, and high-end client-facing spaces.',
              },
              {
                name: 'Circular Lounge Sofa Set',
                image: '/270 (4).png',
                desc: 'A dramatic and architecturally composed lounge set built around a curved semi-circular sectional sofa in rich wine-toned striped upholstery. Flanked by two coordinating armchairs with integrated dark walnut side tables and anchored by a substantial circular drum coffee table, this complete lounge set creates a defined, prestigious seating environment ideal for large executive reception areas, hotel lobbies, and premium corporate lounge spaces.',
              },
              {
                name: 'Modular Curved Sofa Set',
                image: '/270 (5).png',
                desc: 'The Modular Curved Sofa Set is a contemporary modular lounge configuration in vibrant cobalt blue upholstery. The curved arc-shaped sofa sections connect via a wood-veneer bridge element and are accompanied by a coordinating single seat unit, all elevated on elegant tapered dark wood legs. The matching circular wood-veneer coffee table with central cutout detail completes an avant-garde lounge arrangement suited to modern corporate reception areas, creative studios, and premium hospitality environments.',
              },
              {
                name: 'Center Table',
                image: '/270 (6).png',
                desc: 'A refined circular center table in natural maple wood veneer featuring a distinctive central cutout detail on the table top surface. The clean drum-cylinder body and four tapered solid wood legs create an elegant, contemporary piece that anchors any lounge or reception seating arrangement. Available in multiple wood veneer finish options.',
              },
              {
                name: 'Block Sofa Seats',
                image: '/270 (7).png',
                desc: 'Block Sofa Seats are bold, architectural individual lounge seats in cobalt blue upholstery featuring a high straight back, wide flat armrests, and silver tapered metal legs. Sold as a coordinated pair with an integrated natural maple wood side table, these seats are ideal for creating defined individual seating clusters in reception areas, waiting zones, and corporate breakout spaces. Modular design allows flexible configuration.',
              },
              {
                name: 'Sofa Side Table',
                image: '/270 (8).png',
                desc: 'A compact and versatile sofa side table in natural maple wood veneer. The rectangular box form with integrated open shelf provides convenient surface space and accessible storage alongside any lounge or sofa seating arrangement. Four tapered solid wood legs in a matching natural finish complete the clean Scandinavian-inspired aesthetic. Compatible with the broader modular lounge seating range.',
              },
              {
                name: 'Center Table Round',
                image: '/270 (9).png',
                desc: 'A sophisticated circular center table in warm dark walnut veneer with chrome tapered legs. The wide flat circular top provides generous surface area for a corporate lounge or reception environment, while the subtle horizontal banding on the drum body adds refined textural detail. An ideal centerpiece for executive lounge arrangements and high-end reception seating clusters.',
              },
              {
                name: 'Fly Table',
                image: '/270 (10).png',
                desc: 'The Fly Table is a minimal, architecturally clean rectangular low coffee table in warm mocha finish. Its flat rectangular top and four subtly splayed solid legs create a grounded, contemporary form that integrates naturally into any corporate lounge, reception waiting area, or executive breakout zone. Available in a range of finishes.',
              },
              {
                name: 'Sofa Two Seater',
                image: '/270 (11).png',
                desc: 'A refined two-seater lounge sofa in soft sage green fabric upholstery featuring a structured curved back, elegantly flared swept armrests, and a generous two-cushion seat. The dark espresso block feet ground the piece with understated elegance. Ideal for corporate lounges, executive reception areas, and premium waiting environments where comfort and sophisticated color are valued in equal measure.',
              },
              {
                name: 'Sectional Sofa',
                image: '/270 (12).png',
                desc: 'The Sectional Sofa is a fully modular sectional lounge system in vibrant apple green fabric upholstery on natural wood block feet. The system includes straight sofa sections, a corner unit, an armchair, and an integrated side table module — all fully reconfigurable to create custom L-shaped, U-shaped, or linear arrangements. Ideal for large corporate reception areas, breakout zones, collaborative lounges, and open-plan office environments where bold color and maximum flexibility are required.',
              },
              {
                name: 'Block Sofa Seat Armless',
                image: '/270 (13).png',
                desc: 'The Block Sofa Seat Armless is a clean, modular single armless lounge seat in sage green fabric upholstery with a high structured back and dark espresso block feet. Designed as a flexible modular element that combines with the Block Sofa Seats and Sectional Sofa range, this armless unit allows compact, space-efficient seating configurations in waiting areas, lounge clusters, and corporate reception environments.',
              },
              {
                name: 'Block Sofa Seat',
                image: '/270 (14).png',
                desc: 'The Block Sofa Seat is a single-seat armchair that forms part of the coordinated sage green lounge seating family. Sharing the same structured curved back, flared armrests, and dark espresso block feet as the Sofa Two Seater, this single-seat unit enables flexible lounge cluster configurations for corporate reception areas, waiting zones, and breakout lounges. A natural companion piece to the Sofa Two Seater and Sectional Sofa range.',
              },
              {
                name: 'Index Lounge',
                image: '/270 (15).png',
                desc: 'The Index Lounge chair is a contemporary boxy lounge armchair in warm taupe fabric upholstery with wide flat armrests and a deep comfortable seat. Each unit can be fitted with an optional integrated swivel work tablet surface, making the Index Lounge equally suited to informal work, waiting, and collaboration environments. Ideal for modern corporate lounges, executive waiting areas, airport-style departure lounges, and anywhere that seamlessly combines comfortable seating with individual productivity.',
              },
              {
                name: 'Casala Sofa & Chair Set',
                image: '/270 (16).png',
                desc: 'The Casala Sofa & Chair Set comprises a single armchair and coordinating two-seater loveseat, both upholstered in smooth dark navy leather with clean structured lines, wide back cushions, and dark walnut block feet. The set creates a cohesive, sophisticated reception or executive lounge arrangement. Available as a set or as individual pieces. Ideal for corporate reception areas, executive waiting lounges, and premium client-facing environments.',
              },
              {
                name: 'Casala Chair',
                image: '/270 (17).png',
                desc: 'The Casala Chair is a bold, architectural single-seat lounge armchair with a clean rectangular silhouette and a distinctive separate headrest cushion detail. Available in dark chocolate brown and black leather finishes. Its minimalist form and premium leather upholstery make it equally at home in executive offices, high-end hotel lobbies, premium reception areas, and contemporary corporate lounge environments. A chair that makes a quiet but unmistakable design statement.',
              },
              {
                name: 'Casala Three Seater',
                image: '/270 (18).png',
                desc: 'The Casala Three Seater is a generously proportioned three-seat sofa in warm taupe leather upholstery. Its clean contemporary boxy silhouette with three distinct seat and back cushions, slim flat armrests, and minimal dark block feet creates a refined, understated lounge piece suitable for corporate reception areas, executive waiting rooms, and high-end hospitality environments. Coordinates with the Casala Sofa & Chair Set for complete reception suite configurations.',
              },
              {
                name: 'Serenity Club Leather Chair',
                image: '/270 (19).png',
                desc: 'The Serenity Club Leather Chair is a premium single-seat club armchair in jet black leather upholstery with a structured high back, deep padded seat, and wide flat armrests. Mounted on four polished brushed steel square-section legs, it delivers a sleek, contemporary executive aesthetic suitable for the most prestigious corporate reception areas, executive offices, boardroom lounges, and high-end hotel environments. A definitive lounge chair that pairs perfectly with the Serenity Club Sofa Chair.',
              },
              {
                name: 'Serenity Club Sofa Chair',
                image: '/270(20).png',
                desc: 'The Serenity Club Sofa Chair is the perfect companion to the Serenity Club Leather Chair — shown here in a styled corporate lounge environment demonstrating the chairs\' exceptional versatility. In jet black leather with brushed chrome square-section legs, a pair of Serenity Club Sofa Chairs creates an instantly sophisticated reception cluster or executive lounge setting. Ideal for corporate headquarters, premium reception areas, and executive waiting environments where design and comfort must perform in equal measure.',
              }
            ].map((product, i) => (
              <div key={i} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-[4/3] bg-[#F5F5F5] relative overflow-hidden flex items-center justify-center text-gray-300">
                  {/* @ts-ignore - isPlaceholder is not on all objects */}
                  {product.isPlaceholder ? (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                    />
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1">{product.name}</h3>
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
