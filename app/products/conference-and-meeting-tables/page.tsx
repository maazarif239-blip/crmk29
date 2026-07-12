import { createClient } from '@/lib/supabase/server';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

export const revalidate = 0;

export default async function ConferenceAndMeetingTables() {
  const supabase = await createClient();

  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', 'conference-and-meeting-tables')
    .single();

  const { data: products } = category
    ? await supabase
        .from('products')
        .select('*')
        .eq('category_id', category.id)
        .order('sort_order')
    : { data: [] };

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      <ProductPageHeader title="Conference & Meeting Tables" description="Precision-engineered meeting tables for boardrooms, executive suites, and collaborative workspaces. Built to make every meeting count." />

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        <div className="flex-1">
          {(!products || products.length === 0) ? (
            <p className="text-gray-500 text-center py-20">Products coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-y-12">
              {products.map((product) => (
                <div key={product.id} className="group flex flex-col cursor-pointer h-full">
                  <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden transition-colors group-hover:bg-[#f0f0f0]">
                    <img
                      src={product.image_url || '/placeholder.png'}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-5 text-left bg-white flex flex-col flex-1 px-2">
                    <h3 className="text-[13px] font-bold text-gray-900 group-hover:text-[#E04E1B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-gray-500 text-[11px] leading-relaxed flex-1">
                      {product.description}
                    </p>
                    <div className="mt-6 mb-2">
                      <ContactForPricingLink />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
