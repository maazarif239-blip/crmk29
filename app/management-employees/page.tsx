import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export const revalidate = 0;

export default async function ManagementEmployees() {
  const supabase = await createClient();

  // Fetch management team from site_content table
  const { data: contentData } = await supabase
    .from('site_content')
    .select('value')
    .eq('key', 'management_team')
    .single();

  // Use fetched data or empty array if not yet set in admin
  const allEmployees = (contentData?.value || []) as Array<{
    name: string;
    role: string;
    description: string;
  }>;

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-[#f8f9fa] text-gray-900 font-sans selection:bg-[#E5E0D8]">
      {/* Premium Dark Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#111111] text-center flex flex-col items-center justify-center overflow-hidden border-b-4 border-[#EB5324]">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-[800px] mx-auto px-4 flex flex-col items-center">
          <span className="text-[#EB5324] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">
            Our Organization
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 tracking-tight">
            Management & Employees
          </h1>
          <div className="w-16 h-[2px] bg-[#EB5324] mb-6 opacity-80"></div>
          <p className="text-gray-400 text-sm md:text-[15px] font-medium leading-relaxed max-w-2xl">
            Meet the dedicated leadership team and professionals who drive our organization forward with uncompromising standards in furniture manufacturing and architectural design.
          </p>
        </div>
      </section>

      {/* Employees Grid Section */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {allEmployees.map((employee, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5 flex flex-col overflow-hidden relative"
              >
                {/* Top Orange Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#EB5324] transition-colors duration-500 z-20"></div>

                {/* Image Placeholder Area */}
                <div className="w-full aspect-[4/3] bg-[#F4F4F5] relative overflow-hidden flex items-center justify-center border-b border-gray-100">
                  <div className="text-gray-300 group-hover:text-[#111111] transition-colors duration-500 transform group-hover:scale-110">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {/* Subtle dark gradient overlay from bottom of image area */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Text Content */}
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="text-[18px] font-serif font-bold text-gray-900 mb-1.5 leading-tight group-hover:text-[#EB5324] transition-colors duration-300">
                    {employee.name}
                  </h3>
                  <p className="text-[#EB5324] text-[9px] font-bold uppercase tracking-widest mb-5">
                    {employee.role}
                  </p>
                  
                  {employee.description ? (
                    <>
                      <div className="w-8 h-[1px] bg-gray-200 mb-5 group-hover:bg-gray-300 transition-colors duration-300"></div>
                      <p className="text-gray-500 text-[12px] leading-[1.8] flex-1">
                        {employee.description}
                      </p>
                    </>
                  ) : (
                    <div className="flex-1"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
