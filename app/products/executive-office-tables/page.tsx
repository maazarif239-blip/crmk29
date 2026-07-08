import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Classic Mahogany Executive Desk Set', image: '/Screenshot 2026-06-23 234454.png', description: 'Rich mahogany executive desk with green leather top, intricate brass detailing, matching credenza, tufted leather chairs, traditional luxury office furniture set.' },
  { name: 'Carved Wood Executive Office Set', image: '/Screenshot 2026-06-23 234504.png', description: 'Elegant carved wooden executive desk with green leather inlay, matching sideboard storage, decorative trim, classic design suited for premium offices.' },
  { name: 'Walnut Executive Desk with Bookcase', image: '/Screenshot 2026-06-23 234512.png', description: 'Large walnut executive desk with decorative star-pattern panels, matching glass-front bookcase cabinet, traditional design for executive office setups.' },
  { name: 'Modern Wood Panel Executive Desk', image: '/Screenshot 2026-06-23 234520.png', description: 'Sleek L-shaped wooden executive desk with dark wood-grain finish, matching storage cabinet, contemporary design suited for modern executive offices.' },
  { name: 'Boat-Shape Executive Desk', image: '/Screenshot 2026-06-23 234528.png', description: 'Curved boat-shaped executive desk with walnut top, dark cylindrical metal legs, modern design featuring rounded conference-style extension.' },
  { name: 'Glossy White-Top Executive Desk', image: '/Screenshot 2026-06-23 234537.png', description: 'Modern executive desk with glossy white edge, walnut wood body, floating pedestal storage, sleek minimalist design for contemporary offices.' },
  { name: 'Wood Block Executive Desk', image: '/Screenshot 2026-06-23 234546.png', description: 'L-shaped executive desk with warm wood finish, built-in open bookshelf unit, matching side cabinet, modern functional design for offices.' },
  { name: 'L-Shaped Mahogany Executive Desk', image: '/Screenshot 2026-06-23 234553.png', description: 'Glossy mahogany L-shaped executive desk with extended return unit, rich wood-grain finish, classic design suited for spacious executive offices.' },
];

export default function ExecutiveOfficeTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Executive Office Tables" description="Precision engineering for the modern professional. Discover premium executive tables designed for peak performance and enduring elegance." />
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
