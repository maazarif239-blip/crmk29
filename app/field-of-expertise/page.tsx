import Link from 'next/link';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function FieldOfExpertise() {
  const expertise = [
    {
      title: "Industrial Manufacturing",
      desc: "Producing specialized workspace components using advanced technology and efficient manufacturing processes.",

      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Precision Engineering",
      desc: "Carefully designing and developing furniture pieces to ensure quality, comfort, and long-lasting performance.",

      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    },
    {
      title: "Infrastructure Solutions",
      desc: "Carefully designing and developing furniture pieces to ensure quality, comfort, and long-lasting performance.",

      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    },
    {
      title: "Custom Fabrication",
      desc: "Creating custom furniture and executive solutions designed to match specific styles and requirements.",

      icon: "M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
    },
    {
      title: "Project Management",
      desc: "Managing installations from start to finish to ensure timely delivery and smooth execution.",

      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    },
    {
      title: "Installation & Execution",
      desc: "Providing professional installation and on-site support to ensure a perfect final setup.",

      icon: "M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
    }
  ];

  const process = [
    { num: "01", title: "Requirement Analysis", desc: "Understanding operational needs and architectural intent." },
    { num: "02", title: "Planning & Consultation", desc: "Proposing layouts, materials, and ergonomic solutions." },
    { num: "03", title: "Design & Engineering", desc: "Creating technical CADs and 3D renderings for approval." },
    { num: "04", title: "Manufacturing & Execution", desc: "Precision fabrication utilizing our advanced machinery." },
    { num: "05", title: "Quality Inspection", desc: "Rigorous testing to ensure compliance with standards." },
    { num: "06", title: "Delivery & Support", desc: "On-site installation and comprehensive after-sales care." }
  ];

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="relative h-[280px] sm:h-[380px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Expertise" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
        </div>

        <div className="relative z-10 max-w-[1000px] px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight font-serif uppercase">
            Field of Expertise
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Delivering specialized expertise through innovation, technical excellence, and years of industry experience.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 max-w-[1000px] mx-auto px-4 text-center">
        <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">What We Excel At</h2>
        <div className="w-12 h-0.5 bg-[#EB5324] mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg leading-relaxed font-serif max-w-3xl mx-auto">
          Crafting exceptional workspaces since 1964 with precision, innovation, and enduring quality.
        </p>
      </section>

      {/* Expertise Grid Section */}
      <section className="pb-24 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] p-8 rounded-sm group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-sm mb-6 text-[#EB5324] group-hover:bg-[#EB5324] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
              </div>
              <h3 className="text-xl font-serif text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>

            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Approach</h2>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6 relative z-10">
                <div className="shrink-0 w-16 h-16 bg-white border border-gray-200 rounded-full flex items-center justify-center text-xl font-serif text-[#EB5324] font-bold shadow-sm">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Project Highlights */}
      <section className="py-24 max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Why Partner With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Experienced Team", "Proven Track Record", "Modern Technology", 
              "Customer-Centric Approach", "High Quality Standards", "Reliable Support"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm p-4 rounded-sm">
                <div className="w-6 h-6 rounded-full bg-[#EB5324]/10 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#EB5324]"></div>
                </div>
                <span className="text-sm font-bold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#111111] text-white p-12 rounded-sm shadow-xl">
          <h3 className="text-2xl font-serif mb-8 text-[#EB5324]">Project Highlights</h3>
          <div className="space-y-8">
            <div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Turnkey Solutions Delivered</div>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div>
              <div className="text-4xl font-bold mb-1">1M+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sq. Ft. Furnished Annually</div>
            </div>
            <div className="w-full h-px bg-white/10"></div>
            <div>
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-24 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="w-12 h-0.5 bg-[#EB5324] mx-auto"></div>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do you offer custom fabrication for unique layouts?", a: "Yes, our advanced manufacturing capabilities allow us to create highly customized structural pieces tailored to specific architectural constraints." },
              { q: "What quality standards do your products adhere to?", a: "We strictly adhere to BIFMA durability testing and use GREENGUARD certified materials to ensure safety, longevity, and sustainability." },
              { q: "Can you handle multi-city installation rollouts?", a: "Absolutely. Our operations and logistics teams are equipped to execute synchronized installations across multiple regions efficiently." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-sm overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 text-sm">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="p-6 pt-0 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-16 sm:py-20 md:py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-serif">Let's Turn Expertise Into Results</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="bg-[#EB5324] text-white px-8 py-4 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-widest inline-flex items-center justify-center min-w-[200px]">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
