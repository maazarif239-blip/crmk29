import { createClient } from '@/lib/supabase/server';

export const revalidate = 0;

export default async function PromoBanner() {
  const supabase = await createClient();

  // Fetch the currently active promotion
  const { data: activePromo } = await supabase
    .from('promotions')
    .select('message')
    .eq('is_active', true)
    .single();

  // If no active promotion, render nothing
  if (!activePromo) {
    return null;
  }

  return (
    <div className="bg-[#EB5324] text-white py-2.5 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-sm md:text-base tracking-wide">
          {activePromo.message}
        </p>
      </div>
    </div>
  );
}
