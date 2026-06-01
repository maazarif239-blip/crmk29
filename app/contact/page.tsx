import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      

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

      {/* Contact Details Section */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-24 relative z-20 mb-24">
        <div className="bg-white shadow-2xl rounded-sm overflow-hidden p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Reach Out to Us</h2>
          <p className="text-gray-600 mb-12 max-w-lg mx-auto">
            Connect directly with our team for quick support, consultation, or project inquiries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-stretch">
            <div className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-lg h-full">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2">Address</h3>
              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                Plot 56 Service Rd N, I-10/3,<br />
                Islamabad, 44000, Pakistan
              </p>
            </div>

            <a 
              href="https://wa.me/971524331920" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-lg hover:border-[#25D366] hover:shadow-lg transition-all h-full"
            >
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4 text-[#25D366]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2">WhatsApp (UAE)</h3>
              <p className="text-sm font-bold text-gray-900">+971 52 433 1920</p>
            </a>

            <div className="flex flex-col gap-4 h-full">
              <a 
                href="https://wa.me/923215112240" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg hover:border-[#25D366] hover:shadow-lg transition-all flex-1"
              >
                <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-2 text-[#25D366]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp (PK)</h3>
                <p className="text-sm font-bold text-gray-900">0321 5112240</p>
              </a>
              <a 
                href="https://wa.me/923192004722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg hover:border-[#25D366] hover:shadow-lg transition-all flex-1"
              >
                <div className="w-8 h-8 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-2 text-[#25D366]">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">WhatsApp (PK)</h3>
                <p className="text-sm font-bold text-gray-900">0319 2004722</p>
              </a>
            </div>

            <a 
              href="mailto:hbfurniture64@gmail.com" 
              className="flex flex-col items-center justify-center p-8 border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-lg transition-all h-full"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-[12px] font-bold uppercase tracking-widest text-gray-500 mb-2">Email</h3>
              <p className="text-sm font-medium text-gray-900 truncate max-w-full px-2">hbfurniture64@gmail.com</p>
            </a>
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
         <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=HB%20Furniture%20Hassan%20Brother%20(PVT)%20LIMITED&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.google.com/maps/place/HB+Furniture+Hassan+Brother+(PVT)+LIMITED/@33.657515,73.0357053,17z/data=!3m1!4b1!4m6!3m5!1s0x38df95384559b40d:0x11098f728e61baed!8m2!3d33.6575106!4d73.0382802!16s%2Fg%2F11xh6rfbd2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EB5324] text-white px-6 py-3 font-semibold hover:opacity-90 transition"
          >
            Open in Google Maps
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}
