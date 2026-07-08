import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Black Leather Single Sofa Chair', image: '/35.jpg', description: 'Black leather single sofa chair with metal legs, soft cushions, and modern boxy design for lounge.' },
  { name: 'Classic Chesterfield Leather Sofa', image: '/270-1-.png', description: 'Traditional tufted leather sofa with rolled arms and button detailing. Adds a rich, classic touch to any lounge or office space.' },
  { name: 'Grey Boxy Lounge Sofa', image: '/270-2-.png', description: 'Grey fabric sofa with wooden legs, two cushioned backrests, and simple modern style for office lounge.' },
  { name: 'White Leather Sofa Set', image: '/270-3-.png', description: 'White leather loveseat aur armchair set with glass coffee table, elegant and comfortable lounge seating.' },
  { name: 'Curved Striped Lounge Sofa Set', image: '/270-4-.png', description: 'Curved striped fabric sofa with matching chairs aur round wooden coffee table, stylish lounge seating set.' },
  { name: 'Blue Curved Modular Lounge Set', image: '/270-5-.png', description: 'Blue curved modular sofa with wooden side table aur round coffee table, modern lounge seating design.' },
  { name: 'Round Wooden Coffee Table', image: '/270-6-.png', description: 'Round wooden coffee table with hollow center design, sturdy legs aur smooth polished modern finish.' },
  { name: 'Blue Modular Lounge Chairs with Table', image: '/270-7-.png', description: 'Two blue modular lounge chairs with wooden side table in between, comfy aur space-saving design.' },
  { name: 'Wooden Side Table with Shelf', image: '/270-8-.png', description: 'Wooden side table with open shelf storage, tapered legs aur compact modern lounge furniture design.' },
  { name: 'Walnut Round Coffee Table', image: '/270-9-.png', description: 'Walnut wood round coffee table with metal legs aur sleek modern finish for lounge area.' },
  { name: 'Wooden Rectangular Coffee Table', image: '/270-10-.png', description: 'Simple wooden rectangular coffee table with tapered legs, sturdy build aur minimal modern design.' },
];

export default function SofasLoungeSeating() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Sofas & Lounge Seating" />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
