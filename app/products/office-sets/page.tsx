import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Executive Office Table Set', image: '/10016.jpeg', description: 'Masterfully crafted executive office set with expansive work surface, integrated storage aur premium seating for senior leadership.' },
  { name: 'Modern Office Workstation Set', image: '/10008.jpeg', description: 'Modern workstation set with clean lines, ergonomic seating aur adaptable desk configuration, perfect for collaborative corporate environments.' },
  { name: 'Premium Office Table Set', image: '/10009.jpeg', description: 'Premium desk set with elegant materials, expansive primary desk aur coordinated seating for formal meetings and intense work.' },
  { name: 'Contemporary Office Desk Set', image: '/10003.jpeg', description: 'Contemporary minimalist desk set with sleek table surface aur ergonomic chairs, ideal for private cabins or management zones.' },
  { name: 'Manager Office Table Set', image: '/10004.jpeg', description: 'Comprehensive manager set with robust primary desk aur comfortable guest seating, perfect for daily operations and team reviews.' },
  { name: 'Luxury Executive Office Set', image: '/10005.jpeg', description: 'Luxury executive set with richly finished desk, high-back seating aur refined details for an impressive corner office space.' },
  { name: 'Modern Corporate Office Set', image: '/10012.jpg', description: 'Versatile corporate office set with durable work desk aur supportive seating, bringing professional aesthetic to any department.' },
  { name: 'Executive Office Furniture Set', image: '/10010.jpg', description: 'Spacious executive desk set with premium ergonomic chairs, refined finish aur solid construction for top-tier management workspace.' },
  { name: 'Premium Workspace Furniture Set', image: '/10007.jpg', description: 'Premium workspace set with coordinated desk and seating components, built for enhanced productivity aur quality office aesthetics.' },
];

export default function OfficeSets() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Office Sets" description="Modern office table and seating combinations designed for executive cabins, workspaces, and collaborative environments." />
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
          {products.map((p, i) => (
            <ProductCard key={i} name={p.name} image={p.image} description={p.description} />
          ))}
        </div>
      </section>
    </div>
  );
}
