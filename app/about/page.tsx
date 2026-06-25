import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="About HB Furniture" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif max-w-4xl leading-tight">
            A Legacy of Craftsmanship.<br/>A Future of Workspaces.
          </h1>
          <p className="text-[#EB5324] text-[13px] md:text-sm font-bold uppercase tracking-widest max-w-2xl">
            From a small 1964 workshop to Pakistan's leading workspace execution partner.
          </p>
        </div>
      </section>

      {/* The Foundation of Excellence */}
      <section className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <img 
              src="/90.png"
              alt="CEO Portrait"
              className="w-full h-[500px] object-cover grayscale opacity-90"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">The Foundation of Excellence</h2>
            <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
              <p>
                Founded in 1964 by Mr. Tahir Hassan Gardezi at the ambitious age of 23, HB Furniture began with a singular vision: to bring uncompromising European craftsmanship to Pakistan. Trained extensively in Sweden, Mr. Gardezi instilled a culture of precision and structural integrity that remains the bedrock of our operations today.
              </p>
              <p>
                Over the decades, we have evolved from a bespoke workshop into a formidable turnkey execution partner. Now under second-generation leadership, we blend heritage woodworking techniques with state-of-the-art architectural technology to deliver workspaces that define corporate legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones of Progress */}
      <section className="bg-[#FAFAFA] py-24 border-y border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Milestones of Progress</h2>
            <div className="w-16 h-1 bg-[#EB5324] mx-auto"></div>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {/* 1964 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#EB5324] mb-2 font-serif">1964</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Founded by Mr. Tahir Hassan Gardezi in Karachi.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#EB5324] z-10"></div>
                <div className="w-full md:w-5/12 md:pl-8"></div>
              </div>

              {/* 1977 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 md:pr-8"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#EB5324] z-10"></div>
                <div className="w-full md:w-5/12 text-center md:text-left md:pl-8 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-[#EB5324] mb-2 font-serif">1977</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Landmark BOT/B contract awards for Pakistan Steel Mills, establishing industrial capability.</p>
                </div>
              </div>

              {/* 1993 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 text-center md:text-right md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-[#EB5324] mb-2 font-serif">1993</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Premium 3-storey flagship showroom opened in the heart of Islamabad.</p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#EB5324] z-10"></div>
                <div className="w-full md:w-5/12 md:pl-8"></div>
              </div>

              {/* 2024 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
                <div className="w-full md:w-5/12 md:pr-8"></div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#EB5324] z-10"></div>
                <div className="w-full md:w-5/12 text-center md:text-left md:pl-8 mt-4 md:mt-0">
                  <h3 className="text-2xl font-bold text-[#EB5324] mb-2 font-serif">2024</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">New generation leadership drives expansion across a premium corporate project portfolio.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architects of Our Vision */}
      <section className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Architects of Our Vision</h2>
          <div className="w-16 h-1 bg-[#EB5324] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Mr. Tahir Hassan Gardezi",
              role: "FOUNDER",
              desc: "The visionary who brought Swedish engineering precision to Pakistan's furniture landscape."
            },
            {
              name: "Mr. Syed Hassan Ahmed Gardezi",
              role: "CEO",
              desc: "Driving operational excellence and corporate strategy in the modern era."
            },
            {
              name: "Mr. Syed Danial Hassan Gardezi",
              role: "DIRECTOR",
              desc: "Leading innovative design integrations and expanding project execution capabilities."
            }
          ].map((person, i) => (
            <div key={i} className="bg-[#1A1A1A] text-center p-12 flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform duration-300">
              <div className="w-20 h-20 bg-gray-700 mb-8 flex items-center justify-center rounded-sm">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{person.name}</h3>
              <p className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest mb-6">{person.role}</p>
              <p className="text-gray-400 text-[11px] leading-relaxed max-w-[250px]">
                {person.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose HB Furniture */}
      <section className="bg-[#FAFAFA] py-24 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-6">Why Choose HB Furniture</h2>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            <div>
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">60+ Years of Proven Excellence</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">Partnering with Pakistan's top organizations since 1964.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🏭</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Complete In-House Manufacturing</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">HB provides strict end-to-end (E2E) quality control.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🔑</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">End-to-End Turnkey Delivery</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">Design, produce, install — we take total ownership.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📐</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Custom Built for Your Space</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">Every project engineered to your exact specifications.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">300+ Satisfied Clients</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">From multinationals to ministries, we deliver excellence.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Reliable, Consistent, On Schedule</h3>
              <p className="text-gray-500 text-[12px] leading-relaxed">Deadlines met. Standards never compromised.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#EBEBEB] py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Ready to Build Your Legacy?</h2>
        <Link href="/contact" className="bg-[#EB5324] text-white px-8 py-4 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-widest inline-flex items-center gap-3">
          Discuss Your Project
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </section>


    </div>
  );
}
