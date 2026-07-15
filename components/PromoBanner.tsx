import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const FONT_STYLES: Record<string, string> = {
  default: 'font-sans',
  serif: 'font-serif',
  bold: 'font-bold',
  elegant: 'font-serif italic',
  mono: 'font-mono',
};

export default async function PromoBanner() {
  try {
    const supabase = await createClient();

    const { data: activePromo } = await supabase
      .from('promotions')
      .select('message, cta_text, cta_link, font_style')
      .eq('is_active', true)
      .single();

    if (!activePromo) return null;

    const hasCTA = activePromo.cta_text && activePromo.cta_link;
    const fontClass = FONT_STYLES[activePromo.font_style || 'default'] || FONT_STYLES.default;

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .promo-banner {
          animation: slideDown 0.6s ease-out;
        }
        .promo-banner::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }
      `}</style>

      <div className="promo-banner fixed top-0 left-0 right-0 z-50 bg-[#EB5324] text-white py-3 px-4 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EB5324] via-[#FF6B3D] to-[#EB5324] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto">
          {hasCTA ? (
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <a
                href={activePromo.cta_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-5 py-2 border-2 border-white text-white rounded-full font-semibold text-sm hover:bg-white hover:text-[#EB5324] transition-all duration-300 whitespace-nowrap order-1 md:order-none"
              >
                {activePromo.cta_text}
              </a>
              <p className={`font-bold text-sm md:text-base tracking-wide text-center md:text-right ${fontClass}`}>{activePromo.message}</p>
            </div>
          ) : (
            <p className={`font-bold text-sm md:text-base tracking-wide text-center ${fontClass}`}>{activePromo.message}</p>
          )}
        </div>
      </div>
    </>
  );
  } catch (error) {
    console.error('Error loading promo banner:', error);
    return null;
  }
}
