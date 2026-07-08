import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Wooden Modern Visitor Chair', image: '/11.jpg', description: 'Wooden frame visitor chair with black cushioned seat and stylish open armrest design for guests.' },
  { name: 'White Fabric Visitor Chair', image: '/12.jpg', description: 'White fabric visitor chair with wooden legs, soft armrests, and simple elegant look for office.' },
  { name: 'Maroon Cantilever Visitor Chair', image: '/16.jpg', description: 'Maroon and black visitor chair with chrome base, padded armrests, and comfy cushioned seat design.' },
  { name: 'Blue Cantilever Visitor Chair', image: '/17.jpg', description: 'Blue fabric visitor chair with chrome frame, curved armrests, and smooth cantilever base for guests.' },
  { name: 'Wooden Slat Back Visitor Chair', image: '/19.jpg', description: 'Light wood visitor chair with slatted backrest, grey cushioned seat, and simple sturdy armrest design.' },
  { name: 'Striped Cantilever Visitor Chair', image: '/20.jpg', description: 'Black and white striped visitor chair with metal base, padded armrests, and comfy cushioned seat design.' },
  { name: 'Black Leather Cantilever Visitor Chair', image: '/Screenshot 2026-06-24 001523.png', description: 'Elegant black leather visitor chair with padded armrests and a chrome cantilever sleigh base, offering a sleek, executive look for guest seating in offices.' },
  { name: 'Grey Fabric Sled-Base Visitor Chair', image: '/Screenshot 2026-06-24 001528.png', description: 'Contemporary visitor chair upholstered in light grey fabric with curved black armrests and a black sled base, combining comfort with a soft modern aesthetic.' },
  { name: 'Mesh Back Chrome Cantilever Visitor Chair', image: '/Screenshot 2026-06-24 001548.png', description: 'Breathable mesh-back visitor chair with black fabric seat, chrome armrests, and a polished chrome cantilever frame, practical and durable for reception or meeting areas.' },
];

export default function VisitorChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Visitor Chairs" description="Elegant first impressions for your reception and meeting spaces." />
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
