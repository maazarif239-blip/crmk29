import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Classic Wood Side Table', image: '/Screenshot 2026-06-23 235247.png', description: 'Dark mahogany finish square side table with elegant curved legs, solid wood construction, traditional design suited for living room or office corners.' },
  { name: 'Carved Console Side Table', image: '/Screenshot 2026-06-23 235252.png', description: 'Rich walnut finish rectangular table with decorative carved apron, turned wooden legs, vintage-inspired design, ideal as accent or side table.' },
  { name: 'Turned Leg Wood Table', image: '/Screenshot 2026-06-23 235258.png', description: 'Square wooden side table with intricately turned legs, warm brown finish, classic craftsmanship, perfect for traditional living spaces and lounges.' },
  { name: 'Round Tapered Leg Table', image: '/Screenshot 2026-06-23 235323.png', description: 'Round walnut finish table with four tapered wooden legs, minimalist modern design, compact size suited for side or accent table use.' },
  { name: 'Round Slim Leg Table', image: '/Screenshot 2026-06-23 235331.png', description: 'Round walnut top table featuring four slender straight legs, sleek contemporary look, lightweight design ideal for side or end table placement.' },
  { name: 'Two-Tone Square Table', image: '/Screenshot 2026-06-23 235337.png', description: 'Square table with contrasting wood and light strip inlay, black metal legs, modern industrial design, great for center or side placement.' },
  { name: 'Steel Frame Square Table', image: '/Screenshot 2026-06-23 235341.png', description: 'Square walnut top table with grey metal looped frame base, modern minimalist style, sturdy build suited for center table arrangements.' },
  { name: 'Chrome U-Base Table', image: '/Screenshot 2026-06-23 235346.png', description: 'Square wooden top table with chrome U-shaped metal base, sleek modern design, compact size ideal for side or corner tables.' },
  { name: 'Console Table with Metal Legs', image: '/Screenshot 2026-06-23 235349.png', description: 'Rectangular walnut top console table with chrome metal frame legs, slim profile, modern design suited for hallway or side placement.' },
  { name: 'Wood Block Side Table', image: '/Screenshot 2026-06-23 235408.png', description: 'Solid dark walnut block-style side table with tapered metal legs, sturdy compact design, modern aesthetic for living room accents.' },
  { name: 'Square Wood Block Table', image: '/Screenshot 2026-06-23 235413.png', description: 'Chunky dark wood square side table with slim metal legs, bold solid design, contemporary look ideal for center or side tables.' },
  { name: 'Round Drum Coffee Table', image: '/Screenshot 2026-06-23 235418.png', description: 'Cylindrical dark walnut drum-style coffee table with tapered metal legs, bold rounded design, statement piece for modern living rooms.' },
  { name: 'Round Drum Side Table', image: '/Screenshot 2026-06-23 235423.png', description: 'Compact round walnut drum table with chrome tapered legs, sleek polished finish, stylish accent piece for side table placement.' },
  { name: 'Cross Base Round Table', image: '/Screenshot 2026-06-23 235430.png', description: 'Round walnut top table with white cross-shaped metal base, modern geometric design, elegant choice for center table setup.' },
  { name: 'Round X-Frame Table', image: '/Screenshot 2026-06-23 235435.png', description: 'Round dark walnut table with white X-shaped metal frame base, contemporary design, stylish addition to living or office spaces.' },
  { name: 'Compact Cross Leg Table', image: '/Screenshot 2026-06-23 235440.png', description: 'Small round walnut table with white cross metal legs, sleek minimalist design, ideal as side or accent table.' },
  { name: 'Marble Top Geometric Table', image: '/Screenshot 2026-06-23 235444.png', description: 'Round light marble-finish table with black geometric cube metal base, modern industrial design, elegant centerpiece for living spaces.' },
  { name: 'Marble Top Cube Base Table', image: '/Screenshot 2026-06-23 235450.png', description: 'Round stone-finish table top with black square frame base, contemporary geometric design, sophisticated look for center table use.' },
  { name: 'Scandi Wood Coffee Table', image: '/Screenshot 2026-06-23 235955.png', description: 'Rectangular light wood coffee table with rounded edges, angled wooden legs, Scandinavian minimalist design, perfect for cozy living rooms.' },
  { name: 'Industrial Plank Coffee Table', image: '/Screenshot 2026-06-24 000029.png', description: 'Rectangular wood-top coffee table with thick plank design, black metal U-shaped legs, rustic industrial style for modern living spaces.' },
];

export default function CenterAndSideTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Center & Side Tables" description="Precision-crafted accent pieces for the modern professional. Discover center and side tables designed for elegance, durability, and timeless style." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
