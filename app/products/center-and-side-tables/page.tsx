import Image from 'next/image';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
export default function CenterAndSideTables() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-end pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Center & Side Tables" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Bottom gradient so text is easily readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Center & Side Tables
          </h1>
          <p className="text-gray-200 text-[13px] md:text-sm font-medium leading-relaxed max-w-2xl">
            Precision-crafted accent pieces for the modern professional. Discover center and side tables designed for elegance, durability, and timeless style.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
        
        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Wood Side Table",
                src: "/Screenshot 2026-06-23 235247.png",
                desc: "Dark mahogany finish square side table with elegant curved legs, solid wood construction, traditional design suited for living room or office corners."
              },
              {
                name: "Carved Console Side Table",
                src: "/Screenshot 2026-06-23 235252.png",
                desc: "Rich walnut finish rectangular table with decorative carved apron, turned wooden legs, vintage-inspired design, ideal as accent or side table."
              },
              {
                name: "Turned Leg Wood Table",
                src: "/Screenshot 2026-06-23 235258.png",
                desc: "Square wooden side table with intricately turned legs, warm brown finish, classic craftsmanship, perfect for traditional living spaces and lounges."
              },
              {
                name: "Round Tapered Leg Table",
                src: "/Screenshot 2026-06-23 235323.png",
                desc: "Round walnut finish table with four tapered wooden legs, minimalist modern design, compact size suited for side or accent table use."
              },
              {
                name: "Round Slim Leg Table",
                src: "/Screenshot 2026-06-23 235331.png",
                desc: "Round walnut top table featuring four slender straight legs, sleek contemporary look, lightweight design ideal for side or end table placement."
              },
              {
                name: "Two-Tone Square Table",
                src: "/Screenshot 2026-06-23 235337.png",
                desc: "Square table with contrasting wood and light strip inlay, black metal legs, modern industrial design, great for center or side placement."
              },
              {
                name: "Steel Frame Square Table",
                src: "/Screenshot 2026-06-23 235341.png",
                desc: "Square walnut top table with grey metal looped frame base, modern minimalist style, sturdy build suited for center table arrangements."
              },
              {
                name: "Chrome U-Base Table",
                src: "/Screenshot 2026-06-23 235346.png",
                desc: "Square wooden top table with chrome U-shaped metal base, sleek modern design, compact size ideal for side or corner tables."
              },
              {
                name: "Console Table with Metal Legs",
                src: "/Screenshot 2026-06-23 235349.png",
                desc: "Rectangular walnut top console table with chrome metal frame legs, slim profile, modern design suited for hallway or side placement."
              },
              {
                name: "Wood Block Side Table",
                src: "/Screenshot 2026-06-23 235408.png",
                desc: "Solid dark walnut block-style side table with tapered metal legs, sturdy compact design, modern aesthetic for living room accents."
              },
              {
                name: "Square Wood Block Table",
                src: "/Screenshot 2026-06-23 235413.png",
                desc: "Chunky dark wood square side table with slim metal legs, bold solid design, contemporary look ideal for center or side tables."
              },
              {
                name: "Round Drum Coffee Table",
                src: "/Screenshot 2026-06-23 235418.png",
                desc: "Cylindrical dark walnut drum-style coffee table with tapered metal legs, bold rounded design, statement piece for modern living rooms."
              },
              {
                name: "Round Drum Side Table",
                src: "/Screenshot 2026-06-23 235423.png",
                desc: "Compact round walnut drum table with chrome tapered legs, sleek polished finish, stylish accent piece for side table placement."
              },
              {
                name: "Cross Base Round Table",
                src: "/Screenshot 2026-06-23 235430.png",
                desc: "Round walnut top table with white cross-shaped metal base, modern geometric design, elegant choice for center table setup."
              },
              {
                name: "Round X-Frame Table",
                src: "/Screenshot 2026-06-23 235435.png",
                desc: "Round dark walnut table with white X-shaped metal frame base, contemporary design, stylish addition to living or office spaces."
              },
              {
                name: "Compact Cross Leg Table",
                src: "/Screenshot 2026-06-23 235440.png",
                desc: "Small round walnut table with white cross metal legs, sleek minimalist design, ideal as side or accent table."
              },
              {
                name: "Marble Top Geometric Table",
                src: "/Screenshot 2026-06-23 235444.png",
                desc: "Round light marble-finish table with black geometric cube metal base, modern industrial design, elegant centerpiece for living spaces."
              },
              {
                name: "Marble Top Cube Base Table",
                src: "/Screenshot 2026-06-23 235450.png",
                desc: "Round stone-finish table top with black square frame base, contemporary geometric design, sophisticated look for center table use."
              },
              {
                name: "Scandi Wood Coffee Table",
                src: "/Screenshot 2026-06-23 235955.png",
                desc: "Rectangular light wood coffee table with rounded edges, angled wooden legs, Scandinavian minimalist design, perfect for cozy living rooms."
              },
              {
                name: "Industrial Plank Coffee Table",
                src: "/Screenshot 2026-06-24 000029.png",
                desc: "Rectangular wood-top coffee table with thick plank design, black metal U-shaped legs, rustic industrial style for modern living spaces."
              }
            ].map((product, index) => (
              <div key={index} className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
                <div className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={product.src} 
                    alt={product.name} 
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-8"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-[11px] leading-relaxed flex-1">
                    {product.desc}
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
