import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Modern Wooden Rostrum', image: '/28ce7446-3163-4f23-95ab-ce914cc78217.png', description: 'A professionally crafted wooden rostrum featuring a sleek design and durable construction, ideal for conferences, seminars, classrooms, and public speaking events. Designed to provide functionality with an elegant appearance.' },
];

export default function Rostrum() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Rostrum" description="Premium podium and presentation solutions designed for conference rooms, lecture halls, educational institutions, and professional environments." />
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
