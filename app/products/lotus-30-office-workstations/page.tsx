import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  {
    name: 'Lotus Aluminum 30mm Workstation',
    image: '/screenshot-2026-06-16-183344.png',
    description: 'The Lotus 30 is an elegant and economical screen workstation system that is architectural in nature. A smart solution and complete modular product — suitable as a touch-down station, carrel, or dividing screen. Features a universal connector hardware system making it very easy to specify and install. Available in a wide range of fabric colors.',
  },
];

const specs = [
  { label: 'Tabletop — Straight Top', value: 'D = 1600 / 1800mm — L = 700 / 800mm' },
  { label: 'Tabletop — Ergonomic Top', value: 'D = 1200 / 1400 / 1500 / 1600 / 1800mm — L = 600 / 700 / 800mm' },
  { label: 'Tabletop — Corner Top', value: 'D = 1400 / 1500 / 1600 / 1800mm — L = 1400 / 1500 / 1600 / 1800mm' },
  { label: 'Tabletop — Quarter-Round Top', value: 'D = 1200 / 1400mm — L = 1200 / 1400mm' },
  { label: 'Screen Heights', value: '1200mm and 1600mm' },
  { label: 'Screen Widths', value: '600 / 800 / 1066 / 1200 / 1600 / 1800mm' },
  { label: 'Work Surface Height', value: '750mm' },
  { label: 'Panel Frame', value: '30mm aluminum extrusion with universal connector hardware' },
  { label: 'Cable Management', value: 'Ducted wire channel for telecom and electricity at bottom of partition screen; optional external cable baskets under desks' },
  { label: 'Fabrics', value: 'Multiple colors available for selection' },
  { label: 'Support Legs', value: 'Type I, Type II, Type III' },
  { label: 'Brackets', value: 'Big Bracket (right), Big Bracket (left), Small Bracket' },
  { label: 'Computer Support', value: 'LCD arm support available' },
];

export default function Lotus30OfficeWorkstations() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Lotus 30 Office Workstations" description="An elegant, economical, and architecturally refined screen workstation system. Modular, scalable, and engineered for the modern open-plan office." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-2 font-serif">Technical Specifications</h2>
          <p className="text-gray-400 text-[11px] mb-8">Lotus 30 Workstation System — Full specification data from HB Furniture</p>
          <div className="space-y-0">
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row py-3 border-b border-gray-100">
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider sm:w-[240px] shrink-0 mb-1 sm:mb-0">{s.label}</span>
                <span className="text-[11px] text-gray-500 leading-relaxed">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
