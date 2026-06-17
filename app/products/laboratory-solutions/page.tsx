import Image from 'next/image';
import Link from 'next/link';
import ProductSidebar from '@/components/ProductSidebar';
import ContactForPricingLink from '@/components/ContactForPricingLink';

export default function LaboratorySolutions() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      {/* Hero Section (Contained) */}
      <div className="max-w-[1200px] mx-auto px-4 pt-12 pb-8">
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/skylab-page-1.png" 
              alt="Laboratory Solutions" 
              className="w-full h-full object-cover opacity-80"
            />
            {/* Center gradient for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 w-full text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
              Laboratory Solutions
            </h1>
            <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl mx-auto">
              Pioneering commercial laboratory infrastructure since 1967. High-performance casework engineered for scientific environments.
            </p>
          </div>
        </section>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Sidebar */}
        <ProductSidebar activeCategory="/products/laboratory-solutions" />

        {/* Product Grid and Extra Sections */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
            
            {[
              {
                name: 'Laminate Cabinetry & Regent Racks',
                image: '/skylab-page-3.png',
                description: 'A new generation of laminate technology engineered to withstand corrosive elements. Flexible, durable, and affordable high-quality plastic laminate casework offering adaptable designs that integrate seamlessly.',
              },
              {
                name: 'Metal Base Laboratory System',
                image: '/skylab-page-4.png',
                description: 'Sturdy steel and stainless steel casework designed for heavy use areas. Resistant to corrosive elements, frequent cleaning, and topical contaminants to provide decades of reliable, resilient use.',
              },
              {
                name: 'Fuming Chambers & Hoods',
                image: '/skylab-page-5.png',
                description: 'World-class laboratory fume cupboards and hoods designed to control exposure to toxic or flammable vapors. Supplied with Treapa solid laminate inner chamber and cast epoxy resin work base.',
              }
            ].map((product, i) => (
              <div key={i} className="group flex flex-col cursor-pointer h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <div className="aspect-square bg-[#F5F5F5] p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-left bg-white flex flex-col flex-1">
                  <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#EB5324] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <ContactForPricingLink />
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Chemical Resistance Specifications */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Worktop & Chemical Resistance</h2>
              <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Laboratory worktops are made with materials to withstand extreme conditions and chemicals, recommended keeping our clients' precise needs in perspective.
              </p>
            </div>
            
            <div className="overflow-x-auto border border-gray-200">
              <table className="w-full text-left border-collapse text-[11px] text-gray-700">
                <thead>
                  <tr className="bg-gray-50 text-gray-900 uppercase tracking-wider text-[10px] border-b border-gray-200">
                    <th className="p-4 font-bold w-1/4">Material Surface</th>
                    <th className="p-4 font-bold w-1/4">Key Advantages</th>
                    <th className="p-4 font-bold w-1/4">Limitations</th>
                    <th className="p-4 font-bold w-1/4">Optimal Use Cases</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50/50">Melamine / Postforming</td>
                    <td className="p-4">Flat surface, cost-effective</td>
                    <td className="p-4">Joints sensitive to moisture, medium chemical resistance</td>
                    <td className="p-4">Mobile tables, add-on tables, window benches in dry areas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50/50">Polypropylene</td>
                    <td className="p-4">No joints, flat, light, high resistance to acids and many solvents</td>
                    <td className="p-4">Soft surface sensitive to scratches, sensitive to heat</td>
                    <td className="p-4">Areas with high resistance to chemicals, radio-isotope areas</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50/50">Stainless Steel</td>
                    <td className="p-4">No joints, high resistance to solvents, high temperature resistance</td>
                    <td className="p-4">Sensitive to halogens and their compounds</td>
                    <td className="p-4">Maximum loads, decontamination, pathology, microbiology</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50/50">Epoxy</td>
                    <td className="p-4">No joints, solid panel, high mechanical load capacity</td>
                    <td className="p-4">Surface sensitive to scratches, sensitive to concentrated acids</td>
                    <td className="p-4">Laboratory workstations of all types</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-900 bg-gray-50/50">Corian / Solid Surface</td>
                    <td className="p-4">Best chemical resistance, mechanically stable, easy to dispose of</td>
                    <td className="p-4">Evenness tolerances, thermodynamic stress limited</td>
                    <td className="p-4">Areas subject to very high chemical and mechanical stress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Valued Clients Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our Legacy & Valued Clients</h2>
              <div className="w-10 h-1 bg-[#EB5324] mt-3"></div>
            </div>
            <div className="bg-[#F9F9F9] border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                  Established in 1967, HB Furniture is a leading Pakistani manufacturer of distinctively different and unique furniture solutions for workplaces. Considered as the pioneer in the lab manufacturing field, HB has erected more labs than any other company in Pakistan.
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#EB5324] rounded-full"></span>
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-widest">
                    Welcome Pharmaceutical, Karachi (1967)
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-[4/3] relative bg-white border border-gray-200 shadow-sm p-4 flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                 <img src="/skylab-page-2.png" alt="Welcome Pharmaceutical 1967" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
