import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#EB5324]" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" fill="currentColor" />
            </svg>
            <span className="font-bold text-lg tracking-tight uppercase">HB Furniture</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 h-full">
            <Link href="/" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/projects" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Projects
            </Link>
            <Link href="/products" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              Products
            </Link>
            <Link href="/about" className="h-full flex items-center text-[11px] font-bold text-gray-400 hover:text-gray-900 uppercase tracking-wider transition-colors">
              About Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="border border-gray-300 text-gray-700 px-5 py-2 text-[11px] font-bold hover:bg-gray-50 transition-colors uppercase tracking-wider">
              Login
            </Link>
            <Link href="/contact" className="bg-[#EB5324] text-white px-5 py-2 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-wider shadow-sm flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center text-center bg-[#111111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-30 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 w-full px-4 flex flex-col items-center pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight font-serif">
            Let's Build Your Workspace Together
          </h1>
          <p className="text-[#EB5324] text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-2">
            Get in touch with our corporate design team today
          </p>
        </div>
      </section>

      {/* Contact Section (Form + Info Card) */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-24 relative z-20 mb-24">
        <div className="flex flex-col md:flex-row shadow-2xl bg-white rounded-sm overflow-hidden">
          
          {/* Form Side */}
          <div className="w-full md:w-[60%] p-10 md:p-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">Start a Conversation</h2>
            
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50" />
                </div>
                <div className="w-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50" />
                </div>
                <div className="w-full">
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" placeholder="+92 (300) 000-0000" className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Inquiry Type</label>
                <div className="relative">
                  <select className="w-full border border-gray-200 p-3 text-sm text-gray-500 focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50 appearance-none rounded-none">
                    <option>Select an option</option>
                    <option>Corporate Workspace Project</option>
                    <option>Bulk Order Inquiry</option>
                    <option>Dealership/Partner Program</option>
                    <option>General Support</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#EB5324] focus:ring-1 focus:ring-[#EB5324] transition-all bg-gray-50/50 resize-none"></textarea>
              </div>

              <button type="button" className="bg-[#EB5324] text-white px-8 py-4 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-widest inline-flex items-center gap-3 mt-4">
                Send Message
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          </div>

          {/* Info Card Side */}
          <div className="w-full md:w-[40%] bg-[#1A1A1A] text-white p-10 md:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-12 font-serif">Islamabad Flagship</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Address</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">Sector I-9/3, Industrial Area<br/>Islamabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Phone</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">+92 (51) 111-HB-FURN<br/>+92 (300) 123-4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">contact@hbfurniture.com<br/>careers@hbfurniture.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-0.5 shrink-0">
                    <svg className="w-5 h-5 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Business Hours</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">Mon - Fri: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">in</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">ig</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1A1A1A] transition-colors cursor-pointer">
                  <span className="text-[10px] font-bold">fb</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Our Headquarters & Factory</h2>
            <p className="text-[#EB5324] text-[11px] font-bold uppercase tracking-widest">Islamabad</p>
          </div>
          <div className="w-full h-[450px] relative flex items-center justify-center border border-gray-200 rounded-sm overflow-hidden bg-gray-100 shadow-sm">
            {/* Map Placeholder */}
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-20 grayscale" alt="Map background" />
               <div className="absolute inset-0 bg-[#FAFAFA]/70"></div>
            </div>
            <div className="relative z-10 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
              <svg className="w-7 h-7 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* Three Cards Section */}
      <section className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support */}
          <div className="bg-white border border-gray-100 p-10 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Customer Support</h3>
            <p className="text-gray-500 text-[12px] leading-relaxed mb-6 px-4">Need help with an existing order? Our support team is available 24/7.</p>
            <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest hover:underline underline-offset-4 cursor-pointer inline-flex items-center gap-2">
              Get Support <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </div>

          {/* Consultation */}
          <div className="bg-white border border-gray-100 p-10 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Design Consultation</h3>
            <p className="text-gray-500 text-[12px] leading-relaxed mb-6 px-4">Schedule a free workspace planning session with our experts.</p>
            <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest hover:underline underline-offset-4 cursor-pointer inline-flex items-center gap-2">
              Book Session <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </div>

          {/* Partnerships */}
          <div className="bg-white border border-gray-100 p-10 text-center shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#EB5324]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">Corporate Partnerships</h3>
            <p className="text-gray-500 text-[12px] leading-relaxed mb-6 px-4">Explore B2B pricing and bulk orders for large enterprise projects.</p>
            <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-widest hover:underline underline-offset-4 cursor-pointer inline-flex items-center gap-2">
              Partner With Us <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </span>
          </div>
        </div>
      </section>


    </div>
  );
}
