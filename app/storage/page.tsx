import Image from "next/image";
import ContactForPricingLink from "@/components/ContactForPricingLink";
import ProductPageHeader from "@/components/ProductPageHeader";
import { storageProducts } from "@/data/storage-products";

export default function StoragePage() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader
        title="Storage"
        description="Professional storage cabinets and almirah solutions designed for secure organization, lasting durability, and seamless integration into modern workspaces."
      />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {storageProducts.map((product) => (
              <div
                key={product.name}
                className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
              >
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <ContactForPricingLink />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
