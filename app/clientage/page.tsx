import Image from 'next/image';
import Link from 'next/link';

export default function HBClientage() {
  const clients = [
    { id: 1, name: "Asian Development Bank", industry: "Banking & Finance", logoText: "ADB" },
    { id: 2, name: "Askari Bank", industry: "Banking & Finance", logoText: "ASKARI" },
    { id: 3, name: "Citibank", industry: "Banking & Finance", logoText: "CITI" },
    { id: 4, name: "MCB", industry: "Banking & Finance", logoText: "MCB" },
    { id: 5, name: "HBL", industry: "Banking & Finance", logoText: "HBL" },
    { id: 6, name: "Pepsi", industry: "FMCG", logoText: "PEPSI" },
    { id: 7, name: "Nestle", industry: "FMCG", logoText: "NESTLE" },
    { id: 8, name: "Engro Corp", industry: "Conglomerate", logoText: "ENGRO" },
    { id: 9, name: "WWF", industry: "NGO", logoText: "WWF" },
    { id: 10, name: "World Health Organization", industry: "NGO / INGO", logoText: "WHO" },
    { id: 11, name: "United Nations", industry: "NGO / INGO", logoText: "UN" },
    { id: 12, name: "UNICEF", industry: "NGO / INGO", logoText: "UNICEF" },
    { id: 13, name: "MercyCorps", industry: "NGO", logoText: "MERCY" },
    { id: 14, name: "Save the Children", industry: "NGO", logoText: "SAVE" },
    { id: 15, name: "Oxfam", industry: "NGO", logoText: "OXFAM" },
    { id: 16, name: "Care", industry: "NGO", logoText: "CARE" },
    { id: 17, name: "FAO", industry: "NGO", logoText: "FAO" },
    { id: 18, name: "Shell", industry: "Oil & Gas", logoText: "SHELL" },
    { id: 19, name: "Total", industry: "Oil & Gas", logoText: "TOTAL" },
    { id: 20, name: "Schlumberger", industry: "Oil & Gas", logoText: "SLB" },
    { id: 21, name: "Weatherford", industry: "Oil & Gas", logoText: "WFT" },
    { id: 22, name: "Halliburton", industry: "Oil & Gas", logoText: "HAL" },
    { id: 23, name: "Attock Petroleum", industry: "Oil & Gas", logoText: "APL" },
    { id: 24, name: "MOL", industry: "Oil & Gas", logoText: "MOL" },
    { id: 25, name: "PTCL", industry: "Telecom", logoText: "PTCL" },
    { id: 26, name: "Ufone", industry: "Telecom", logoText: "UFONE" },
    { id: 27, name: "Zong", industry: "Telecom", logoText: "ZONG" },
    { id: 28, name: "Mobilink", industry: "Telecom", logoText: "MOBILINK" },
    { id: 29, name: "Huawei", industry: "Technology", logoText: "HUAWEI" },
    { id: 30, name: "Mobicash", industry: "Fintech", logoText: "MOBICASH" },
    { id: 31, name: "Easypaisa", industry: "Fintech", logoText: "EASY" },
    { id: 32, name: "Deloitte", industry: "Consulting", logoText: "DELOITTE" },
    { id: 33, name: "Alstom", industry: "Manufacturing", logoText: "ALSTOM" },
    { id: 34, name: "Lucky Cement", industry: "Manufacturing", logoText: "LUCKY" },
    { id: 35, name: "General Tire", industry: "Manufacturing", logoText: "GTR" },
    { id: 36, name: "GSK", industry: "Pharmaceuticals", logoText: "GSK" },
    { id: 37, name: "BASF", industry: "Chemicals", logoText: "BASF" },
    { id: 38, name: "Lakson Group", industry: "Conglomerate", logoText: "LAKSON" },
    { id: 39, name: "Scomi", industry: "Energy", logoText: "SCOMI" },
    { id: 40, name: "Coffey", industry: "Consulting", logoText: "COFFEY" }
  ];

  const featuredClients = [
    {
      id: 1,
      name: "United Nations (UN) & WHO",
      overview: "Provided sustainable, modular workspace systems designed for agility and collaborative team environments across multiple regional offices.",
      industry: "International Organization",
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "HBL (Habib Bank Limited)",
      overview: "Executed complete executive floor furnishings and deployed ergonomic workstations for over 500 employees at their corporate headquarters.",
      industry: "Banking & Finance",
      color: "bg-emerald-700"
    },
    {
      id: 3,
      name: "Engro Corporation",
      overview: "Designed and implemented bespoke conference tables, acoustic solutions, and executive suites fitting a premier industrial conglomerate.",
      industry: "Conglomerate",
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Hero Section */}
      <section className="pt-24 pb-16 max-w-[1200px] mx-auto px-4 text-center md:text-left border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-serif text-[#111111] mb-4 tracking-tight">
          HB Clientage
        </h1>
        <p className="text-gray-500 text-sm font-medium max-w-2xl">
          Our valued clients and trusted partnerships built through excellence and commitment.
        </p>
      </section>

      {/* Featured Clients Section */}
      <section className="py-20 max-w-[1200px] mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-3">Featured Partnerships</h2>
          <h3 className="text-3xl font-serif text-gray-900 mb-2">Defining Corporate Legacy</h3>
          <div className="w-12 h-0.5 bg-[#EB5324]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredClients.map((featured) => (
            <div key={featured.id} className="bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-sm overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className={`h-2 w-full ${featured.color}`}></div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">{featured.industry}</p>
                <h4 className="text-xl font-serif text-gray-900 mb-4">{featured.name}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed flex-1">
                  {featured.overview}
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Showcase Section */}
      <section className="py-20 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-serif text-gray-900 mb-2">Our Esteemed Clients</h2>
              <div className="w-12 h-0.5 bg-[#EB5324]"></div>
            </div>


          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {clients.map((client) => (
              <div key={client.id} className="bg-white border border-gray-100 rounded-sm p-6 flex flex-col items-center justify-center text-center group hover:border-gray-300 hover:shadow-sm transition-all h-[140px]">
                <div className="text-xl font-bold text-gray-300 group-hover:text-gray-800 transition-colors mb-3 font-serif tracking-tight">
                  {client.logoText}
                </div>
                <h4 className="text-[12px] font-bold text-gray-900 leading-tight">{client.name}</h4>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">Join Our Growing List of Partners</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
          We bring decades of manufacturing expertise and project execution to every space we furnish. Let us build your corporate legacy together.
        </p>
        <Link href="/contact" className="bg-[#EB5324] text-white px-8 py-4 text-[11px] font-bold hover:bg-[#d4481f] transition-colors uppercase tracking-widest inline-flex items-center gap-3">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}
