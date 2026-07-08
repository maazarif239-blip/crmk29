import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Tufted Grey Accent Office Chair', image: '/8.jpg', description: 'Grey leather tufted chair with wooden legs, soft armrests, and comfy cushioned seat for office.' },
  { name: 'Tan Leather Executive Office Chair', image: '/10.jpg', description: 'Tan leather office chair with padded armrests, smooth wheels, and adjustable height for comfort.' },
  { name: 'Beige Mesh Adjustable Office Chair', image: '/99-3-.png', description: 'Beige mesh-back chair with adjustable armrests, comfy seat aur smooth rolling wheels for office desk.' },
  { name: 'Red Headrest Office Chair', image: '/99-8-.png', description: 'Red mesh chair with headrest, fixed armrests aur black cushioned seat for long office hours.' },
  { name: 'White Mesh Ergonomic Office Chair', image: '/99-9-.png', description: 'White frame mesh chair with adjustable armrests, black seat aur smooth wheels for easy movement.' },
  { name: 'Red Cushioned Office Chair', image: '/99-10-.png', description: 'Red fabric office chair with padded armrests, soft backrest aur rolling wheels for comfort.' },
  { name: 'Black Mesh Office Chair', image: '/99-11-.png', description: 'Black mesh-back chair with adjustable armrests, cushioned seat aur smooth rolling wheels for office use.' },
  { name: 'Striped Mesh Task Chair', image: '/Screenshot 2026-06-24 000146.png', description: 'Black mesh back with horizontal stripe pattern, fixed armrests, padded seat, tilt mechanism, and smooth-rolling caster wheels for everyday office use.' },
  { name: 'Grey Fabric Executive Chair', image: '/Screenshot 2026-06-24 000202.png', description: 'Light grey upholstered chair with curved loop armrests, high back support, swivel base, and sturdy five-star nylon legs for comfortable seating.' },
  { name: 'Boucle Swivel Accent Chair', image: '/Screenshot 2026-06-24 000213.png', description: 'Cream textured boucle fabric chair with rounded tub-style back, wrapped armrests, height-adjustable swivel base, ideal for stylish home office setups.' },
  { name: 'X-Back Mesh Office Chair', image: '/Screenshot 2026-06-24 000242.png', description: 'Black mesh chair featuring distinctive X-pattern backrest design, adjustable armrests, cushioned seat, lumbar support, and durable rolling base.' },
  { name: 'Compact Mesh Staff Chair', image: '/Screenshot 2026-06-24 000314.png', description: 'Simple black mesh-back chair with fixed armrests, breathable design, padded seat cushion, tilt-lock mechanism, suited for budget-friendly workstation seating.' },
  { name: 'Wave Pattern Mesh Chair', image: '/Screenshot 2026-06-24 000329.png', description: 'Sleek black mesh chair with subtle wave-line texture, solid loop armrests, ergonomic curved back, smooth recline function, and stable wheeled base.' },
  { name: 'Curved Mesh Visitor Chair', image: '/Screenshot 2026-06-24 000336.png', description: 'Minimalist black mesh chair with curved waterfall seat edge, slim armrests, breathable backrest, adjustable height, perfect for guest or staff seating.' },
];

export default function OfficeChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Office Chairs" description="Precision engineering for the modern professional. Discover ergonomic seating designed for peak performance and enduring comfort." />
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
