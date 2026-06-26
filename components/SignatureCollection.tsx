import Image from 'next/image';
import Link from 'next/link';

const signatureProducts = [
  { name: 'Classic Mahogany Executive Desk Set', image: '/Screenshot 2026-06-23 234454.png', href: '/products/executive-office-tables' },
  { name: 'Carved Wood Executive Office Set', image: '/Screenshot 2026-06-23 234504.png', href: '/products/executive-office-tables' },
  { name: 'Walnut Executive Desk with Bookcase', image: '/Screenshot 2026-06-23 234512.png', href: '/products/executive-office-tables' },
  { name: 'Executive Office Table Set', image: '/10016.jpeg', href: '/products/office-sets' },
  { name: 'Modern Office Workstation Set', image: '/10008.jpeg', href: '/products/office-sets' },
  { name: 'Premium Office Table Set', image: '/10009.jpeg', href: '/products/office-sets' },
  { name: 'Walnut Executive Conference Table', image: '/175-1-.png', href: '/products/conference-and-meeting-tables' },
  { name: 'Curved Boardroom Table with Center Display', image: '/175-2-.png', href: '/products/conference-and-meeting-tables' },
  { name: 'Extra Long Boardroom Conference Table', image: '/175-3-.png', href: '/products/conference-and-meeting-tables' },
  { name: 'Pink High-Back Manager Chair', image: '/245-1-.png', href: '/products/manager-chair-collection' },
  { name: 'White Frame Mesh Manager Chair Black & Grey', image: '/245-2-.png', href: '/products/manager-chair-collection' },
  { name: 'Classic Wood Side Table', image: '/Screenshot 2026-06-23 235247.png', href: '/products/center-and-side-tables' },
  { name: 'Carved Console Side Table', image: '/Screenshot 2026-06-23 235252.png', href: '/products/center-and-side-tables' },
  { name: 'Executive Storage Almirah', image: '/f8f1903f-3a91-4b6f-9db7-6efdb338568b.png', href: '/products/almirahs' },
  { name: 'Premium Steel Almirah', image: '/1f6a1a87-8fc6-434f-bed8-10d6459de6e1.png', href: '/products/almirahs' },
  { name: 'L-Shape Executive Workstation', image: '/Screenshot 2026-06-23 225449.png', href: '/products/heritage-executive-workstation-series' },
  { name: 'Mahogany Display & Storage Hutch', image: '/Screenshot 2026-06-23 233940.png', href: '/products/storage-cabinets' },
  { name: 'Classic Chesterfield Leather Sofa', image: '/270-1-.png', href: '/sofas-lounge-seating' },
];

const marqueeItems = [...signatureProducts, ...signatureProducts];

export default function SignatureCollection() {
  return (
    <section className="py-24 md:py-28 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[10px] font-bold text-[#EB5324] uppercase tracking-[0.2em] mb-3 block">
            SIGNATURE COLLECTION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-5 font-serif tracking-tight">
            Signature Collection
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Explore our finest handcrafted office furniture designed for executive workspaces, collaborative environments, and modern offices.
          </p>
        </div>

        <div
          className="relative mb-14 md:mb-16 group/marquee"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
          }}
        >
          <div className="overflow-hidden">
            <div className="flex w-max gap-5 md:gap-6 animate-marquee-slow will-change-transform group-hover/marquee:[animation-play-state:paused]">
              {marqueeItems.map((product, i) => (
                <Link
                  key={`${product.name}-${i}`}
                  href={product.href}
                  className="group/card flex-shrink-0 w-[220px] sm:w-[250px] md:w-[280px] flex flex-col bg-white rounded-[18px] border border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-500 ease-out overflow-hidden"
                >
                  <div className="relative w-full aspect-[4/5] bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 280px"
                      className="object-contain p-5 md:p-6 transition-transform duration-700 ease-out group-hover/card:scale-105"
                    />
                  </div>
                  <div className="px-5 py-5 md:py-6 flex items-center justify-center text-center min-h-[72px]">
                    <h3 className="text-[12px] md:text-[13px] font-medium text-gray-800 leading-snug line-clamp-2 group-hover/card:text-[#EB5324] transition-colors duration-300">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/office-furniture"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 hover:border-[#EB5324] hover:text-[#EB5324] px-8 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:gap-3"
          >
            View All
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
