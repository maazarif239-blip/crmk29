import ProductCard from '@/components/ProductCard';
import ProductPageHeader from '@/components/ProductPageHeader';

const products = [
  { name: 'Cafeteria Chair', image: '/1.jpg', description: 'Sky blue plastic study chair with metal frame, lightweight, stackable and easy to clean design.' },
  { name: 'Circa Task Chair', image: '/2.jpg', description: 'Navy blue fabric study chair with thick cushioned back aur seat, foldable armrests, height-adjustable mechanism aur rolling caster wheels. Offers great back support for extended study or work hours.' },
  { name: 'Two-Tone Blue Grey Study Chair', image: '/3.jpg', description: 'Stylish blue backrest with grey cushioned seat, fixed armrests aur unique cutout back design. Smooth height adjustment aur rolling wheels make it comfortable for daily study or desk use.' },
  { name: 'Mesh Back Ergonomic Study Chair', image: '/4.jpg', description: 'Breathable black mesh-back study chair with adjustable armrests, lumbar support aur cushioned seat. Smooth-rolling wheels aur tilt mechanism provide flexible comfort for long hours of studying or working.' },
  { name: 'Foldable Tablet Arm Study Chair', image: '/5.jpg', description: 'Compact mesh chair with foldable writing tablet, castor wheels aur space-saving foldable frame design.' },
  { name: 'Red & Black Classic Study Chair', image: '/6.jpg', description: 'Red backrest with black cushioned seat, fixed armrests aur height-adjustable rolling base comfort.' },
  { name: 'Comfort Study Black Fabric Chair', image: '/7.jpg', description: 'Black fabric study chair with padded seat, armrests, adjustable height aur smooth rolling wheels for comfort.' },
];

export default function StudyChairs() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Study Chairs" description="Ergonomic principles meet architectural minimalism. Discover seating designed for sustained focus and comfort." />
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
