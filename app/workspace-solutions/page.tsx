"use client";

import { useState } from 'react';
import Link from 'next/link';
import ContactForPricingLink from '@/components/ContactForPricingLink';
import ProductPageHeader from '@/components/ProductPageHeader';

type LayoutKey = 'S' | 'D' | 'X' | 'U' | 'R';

interface ConfigOption {
  label: string;
  value: string;
  dims: string;
}

interface LayoutDetail {
  name: string;
  thickness: string;
  description: string;
  configurations: ConfigOption[];
}

const variantsData: Record<LayoutKey, LayoutDetail> = {
  S: {
    name: "S-Type Layout",
    thickness: "50mm Partition Thickness",
    description: "Developed to create structured layout clusters with extra sturdiness, optimal privacy, and built-in acoustic damping.",
    configurations: [
      { label: "2-Person Cluster", value: "2-Person", dims: "1425 x 1210 x 1140 mm" },
      { label: "4-Person Cluster", value: "4-Person", dims: "2850 x 1210 x 1140 mm" }
    ]
  },
  D: {
    name: "D-Type Layout",
    thickness: "25mm Partition Thickness",
    description: "A linear desking system utilizing compact partitions to optimize open-plan spacing and streamline coordination.",
    configurations: [
      { label: "D-I 2-Person Linear", value: "D-I 2-Person", dims: "1200 x 600 x 1200 mm" },
      { label: "D-I 4-Person Quad", value: "D-I 4-Person", dims: "2400 x 1200 x 1200 mm" },
      { label: "D-II 4-Person Back-to-Back", value: "D-II 4-Person", dims: "2400 x 1200 x 1200 mm" }
    ]
  },
  X: {
    name: "X-Type Layout",
    thickness: "25mm Partition Thickness",
    description: "Features a cross-shaped partition arrangement that gives four team members equal space while facilitating quick brainstorming.",
    configurations: [
      { label: "2-Person Side-by-Side", value: "2-Person", dims: "1205 x 3200 x 1220 mm" },
      { label: "4-Person Cross", value: "4-Person", dims: "2410 x 3200 x 1220 mm" }
    ]
  },
  U: {
    name: "U-Type Layout",
    thickness: "25mm Partition Thickness",
    description: "Semi-private configurations crafted for high-concentration desk work combined with interactive perimeter sharing.",
    configurations: [
      { label: "2-Person Semi-Enclosed", value: "2-Person", dims: "3200 x 2000 x 1200 mm" },
      { label: "4-Person Semi-Enclosed", value: "4-Person", dims: "4000 x 3200 x 1200 mm" }
    ]
  },
  R: {
    name: "R-Type Layout",
    thickness: "25mm Partition Thickness",
    description: "Row-based seating alignment engineered for modular expansion, high versatility, and collaborative modern settings.",
    configurations: [
      { label: "2-Person Inline Row", value: "2-Person", dims: "1205 x 1600 x 1220 mm" },
      { label: "4-Person Double Row", value: "4-Person", dims: "2410 x 1600 x 1220 mm" }
    ]
  }
};

const keyFeatures = [
  "5 modular layout types: S, D, X, U, and R-Type",
  "2-person and 4-person layouts built for flexible scaling",
  "Varying partition thicknesses: 25mm or 50mm panels",
  "Premium Cherry wood finish desktop with dark black steel framework",
  "Mobile drawer pedestals included with security locking",
  "Integrated privacy partition screens in every unit",
  "Architectural design perfect for open-plan corporate headquarters"
];

const variantCards = [
  {
    key: "S" as const,
    title: "S-Type Workstation",
    description: "2-person cluster layout engineered for focused collaboration.",
    image: "/screenshot-2026-06-16-163413.png",
    configValue: "2-Person",
    dims: "1425 x 1210 x 1140 mm",
  },
  {
    key: "U" as const,
    title: "U-Type Workstation",
    description: "Semi-private workstation plan for high-concentration work.",
    image: "/screenshot-2026-06-16-184300.png",
    configValue: "2-Person",
    dims: "3200 x 2000 x 1200 mm",
  },
  {
    key: "D" as const,
    title: "D-Type Workstation",
    description: "Linear desking system optimized for open-plan efficiency.",
    image: "/screenshot-2026-06-16-184310.png",
    configValue: "D-I 2-Person",
    dims: "1200 x 600 x 1200 mm",
  },
  {
    key: "R" as const,
    title: "R-Type Workstation",
    description: "Row-based alignment built for modular expansion.",
    image: "/screenshot-2026-06-16-184319.png",
    configValue: "2-Person",
    dims: "1205 x 1600 x 1220 mm",
  },
  {
    key: "X" as const,
    title: "X-Type Workstation",
    description: "Cross partition arrangement that supports agile teamwork.",
    image: "/screenshot-2026-06-16-184330.png",
    configValue: "2-Person",
    dims: "1205 x 3200 x 1220 mm",
  },
] as const;

export default function WorkspaceSolutions() {
  const [activeImage, setActiveImage] = useState<string>('/9952.png');
  const [selectedLayoutKey, setSelectedLayoutKey] = useState<LayoutKey>('S');
  const [selectedConfigIdx, setSelectedConfigIdx] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'guide'>('overview');

  const currentLayout = variantsData[selectedLayoutKey];
  const currentConfig = currentLayout.configurations[selectedConfigIdx] || currentLayout.configurations[0];

  const handleLayoutChange = (key: LayoutKey) => {
    setSelectedLayoutKey(key);
    setSelectedConfigIdx(0); // Reset config selection to the first option of the new layout
  };

  // Generate mailto / link contact page URL query params
  const inquiryUrl = `/contact?product=Workspace%20Solutions&brand=HB%20Furniture&layout=${currentLayout.name}&config=${currentConfig.value}&dims=${encodeURIComponent(currentConfig.dims)}`;

  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-gray-900 font-sans selection:bg-[#E5E0D8]">
      
      <ProductPageHeader title="Workspace Solutions" description="Transforming modern offices with premium, modular desking and partition systems. Engineered for collaboration, focus, and seamless integration of ideas." />
{/* Main Catalog Area */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Sidebar Area */}
          {/* Product Detail Spotlight Column */}
          <div className="flex-1">
            
            {/* Breadcrumb Navigation */}
            <nav className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 flex gap-2 items-center">
              <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-900">Workspace Solutions</span>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

              {/* Variant Listing Grid */}
              <section className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    Workstation Configurations
                  </h3>
                  <p className="mt-2 text-gray-500 text-[11px] leading-relaxed max-w-3xl">
                    Explore the layout types below. Each configuration can be customized in finishes, partition materials, and cable routing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {variantCards.map((card) => {
                    const inquiryHref = `/contact?product=Workspace%20Solutions&brand=HB%20Furniture&layout=${encodeURIComponent(
                      variantsData[card.key].name
                    )}&config=${encodeURIComponent(card.configValue)}&dims=${encodeURIComponent(
                      card.dims
                    )}`;

                    return (
                      <article
                        key={card.key}
                        className="group border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col rounded-lg overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLayoutKey(card.key);
                            setSelectedConfigIdx(0);
                            setActiveImage(card.image);
                          }}
                          className="aspect-square bg-[#F5F5F5] p-4 sm:p-6 md:p-8 flex items-center justify-center relative overflow-hidden text-left"
                          aria-label={`Preview ${card.title}`}
                        >
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </button>

                        <div className="p-6 flex-1 flex flex-col">
                          <h4 className="text-[15px] font-bold text-gray-900 mb-2">
                            {card.title}
                          </h4>
                          <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-1 flex-1">
                            {card.description}
                          </p>
                          <div className="mt-6">
                            <ContactForPricingLink href={inquiryHref} />
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
              
              {/* Left Column: Image Viewer */}
              <div className="flex flex-col gap-4">
                <div className="aspect-[4/3] bg-[#F5F5F5] border border-gray-100 shadow-sm relative overflow-hidden flex items-center justify-center p-8 group">
                  <img 
                    src={activeImage} 
                    alt="Workspace Solutions" 
                    className="w-full h-full object-contain mix-blend-multiply transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Image Overlay Label */}
                  <span className="absolute bottom-4 right-4 bg-white/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest border border-gray-100 shadow-sm text-gray-600 pointer-events-none">
                    {activeImage === '/9952.png' ? 'S-Type Workstation Showcase' : 'Dimensions & Variants Layout'}
                  </span>
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setActiveImage('/9952.png')}
                    className={`aspect-[4/3] bg-[#F5F5F5] border-2 p-2 flex items-center justify-center transition-all duration-300 ${activeImage === '/9952.png' ? 'border-[#EB5324] shadow-sm' : 'border-gray-200 hover:border-gray-400'}`}
                  >
                    <img src="/9952.png" alt="Cover Image" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  </button>

                  <button 
                    onClick={() => setActiveImage('/9981.png')}
                    className={`aspect-[4/3] bg-[#F5F5F5] border-2 p-2 flex items-center justify-center transition-all duration-300 ${activeImage === '/9981.png' ? 'border-[#EB5324] shadow-sm' : 'border-gray-200 hover:border-gray-400'}`}
                  >
                    <img src="/9981.png" alt="Dimensions Gallery" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                  </button>
                </div>
              </div>

              {/* Right Column: Title and Configurator */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Brand: HB Furniture
                    </span>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded border border-emerald-100">
                      Published/Active
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight font-serif mb-2">
                    Workspace Solutions System
                  </h2>
                  
                  <p className="text-[#EB5324] text-[11px] font-bold uppercase tracking-widest mb-4">
                    Connect · Share · Achieve
                  </p>
                  
                  <p className="text-gray-500 text-[11px] leading-relaxed">
                    This system was developed to create an environment for collaborative teamwork which would facilitate the connection of people and ideas in any corporate setting.
                  </p>
                </div>

                <div className="border-t border-b border-gray-100 py-6 my-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                    Interactive Layout Configurator
                  </h4>

                  {/* Layout Selector */}
                  <div className="mb-5">
                    <label className="text-[10px] font-bold uppercase tracking-wide text-gray-600 block mb-2">
                      1. Select Layout Shape
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {(Object.keys(variantsData) as LayoutKey[]).map((key) => (
                        <button
                          key={key}
                          onClick={() => handleLayoutChange(key)}
                          className={`py-2 text-[11px] font-bold rounded text-center transition-all duration-200 border ${
                            selectedLayoutKey === key
                              ? 'bg-[#EB5324] border-[#EB5324] text-white shadow-md'
                              : 'bg-white border-gray-200 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {key}-Type
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Config Type / Size Selector */}
                  <div className="mb-5">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-[10px] font-bold uppercase tracking-wide text-gray-600">
                        2. Select Configuration
                      </label>
                      <span className="text-[10px] text-gray-400 font-semibold italic">
                        {currentLayout.thickness}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {currentLayout.configurations.map((config, idx) => (
                        <button
                          key={config.value + '-' + idx}
                          onClick={() => setSelectedConfigIdx(idx)}
                          className={`px-3 py-2 text-[10px] font-bold rounded border transition-all duration-200 ${
                            selectedConfigIdx === idx
                              ? 'bg-gray-900 border-gray-900 text-white shadow-sm'
                              : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          {config.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Dimension Display Box */}
                  <div className="bg-gray-50 border border-gray-100 p-4 rounded flex items-center justify-between mt-6">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                        Selected Configurations Dimensions
                      </span>
                      <span className="text-gray-900 text-xs font-semibold">
                        {currentLayout.name} ({currentConfig.value})
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#EB5324] font-mono text-sm font-bold block">
                        {currentConfig.dims}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link 
                    href={inquiryUrl}
                    className="w-full bg-[#EB5324] text-white hover:bg-[#d4481f] py-3 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>Request Quotation for Selected Variant</span>
                    <span className="text-xs">→</span>
                  </Link>

                  <p className="text-[9px] text-gray-400 text-center leading-relaxed">
                    Custom sizes, partition materials, and custom finishes are available upon request.
                  </p>
                </div>

              </div>

            </div>

            {/* Information Tabs Section */}
            <div className="mt-20 border-t border-gray-100 pt-10">
              
              {/* Tabs Headers */}
              <div className="flex border-b border-gray-100 mb-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 px-6 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-[#EB5324] text-[#EB5324]'
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Overview & Features
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-4 px-6 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
                    activeTab === 'specs'
                      ? 'border-[#EB5324] text-[#EB5324]'
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Technical Specs Sheet
                </button>
                <button
                  onClick={() => setActiveTab('guide')}
                  className={`pb-4 px-6 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border-b-2 ${
                    activeTab === 'guide'
                      ? 'border-[#EB5324] text-[#EB5324]'
                      : 'border-transparent text-gray-400 hover:text-gray-900'
                  }`}
                >
                  Visual Guide
                </button>
              </div>

              {/* Tab Content Panel */}
              <div className="min-h-[250px]">
                
                {/* Tab 1: Overview & Features */}
                {activeTab === 'overview' && (
                  <div className="animate-fade-in flex flex-col gap-8">
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-3">Product Description</h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed max-w-4xl">
                        The Workspace Solutions System allows you to connect the dots in different ways — from tables to benching, desking to systems. This system redefines how you connect and share, and provides the tools for your workplace to achieve so much more. Available in multiple configurations to suit any office layout.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">Key System Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {keyFeatures.map((feat, i) => (
                          <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 border border-gray-100 rounded">
                            <span className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100 text-[#EB5324] mt-0.5">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-gray-700 text-[11px] leading-relaxed font-medium">
                                {feat}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Specs Sheet */}
                {activeTab === 'specs' && (
                  <div className="animate-fade-in overflow-x-auto">
                    <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-4">All System Configurations Specs</h4>
                    <table className="w-full text-left border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-100">
                          <th className="p-3 font-bold text-gray-900 uppercase tracking-wider">Layout Type</th>
                          <th className="p-3 font-bold text-gray-900 uppercase tracking-wider">Partition Thickness</th>
                          <th className="p-3 font-bold text-gray-900 uppercase tracking-wider">Seating Configuration</th>
                          <th className="p-3 font-bold text-gray-900 uppercase tracking-wider">Dimensions (W x D x H)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {/* S-Type */}
                        <tr>
                          <td className="p-3 font-bold text-gray-800" rowSpan={2}>S-Type</td>
                          <td className="p-3 text-gray-500" rowSpan={2}>50 mm</td>
                          <td className="p-3 text-gray-600">2-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">1425 x 1210 x 1140 mm</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-600">4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">2850 x 1210 x 1140 mm</td>
                        </tr>

                        {/* D-Type */}
                        <tr>
                          <td className="p-3 font-bold text-gray-800" rowSpan={3}>D-Type</td>
                          <td className="p-3 text-gray-500" rowSpan={3}>25 mm</td>
                          <td className="p-3 text-gray-600">D-I 2-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">1200 x 600 x 1200 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-600">D-I 4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">2400 x 1200 x 1200 mm</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-600">D-II 4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">2400 x 1200 x 1200 mm</td>
                        </tr>

                        {/* X-Type */}
                        <tr>
                          <td className="p-3 font-bold text-gray-800" rowSpan={2}>X-Type</td>
                          <td className="p-3 text-gray-500" rowSpan={2}>25 mm</td>
                          <td className="p-3 text-gray-600">2-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">1205 x 3200 x 1220 mm</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-600">4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">2410 x 3200 x 1220 mm</td>
                        </tr>

                        {/* U-Type */}
                        <tr>
                          <td className="p-3 font-bold text-gray-800" rowSpan={2}>U-Type</td>
                          <td className="p-3 text-gray-500" rowSpan={2}>25 mm</td>
                          <td className="p-3 text-gray-600">2-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">3200 x 2000 x 1200 mm</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="p-3 text-gray-600">4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">4000 x 3200 x 1200 mm</td>
                        </tr>

                        {/* R-Type */}
                        <tr>
                          <td className="p-3 font-bold text-gray-800" rowSpan={2}>R-Type</td>
                          <td className="p-3 text-gray-500" rowSpan={2}>25 mm</td>
                          <td className="p-3 text-gray-600">2-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">1205 x 1600 x 1220 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 text-gray-600">4-Person</td>
                          <td className="p-3 font-mono text-[#EB5324] font-semibold">2410 x 1600 x 1220 mm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Tab 3: Visual Guide */}
                {activeTab === 'guide' && (
                  <div className="animate-fade-in flex flex-col gap-6">
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900 uppercase tracking-wider mb-2">Variant Layout & Space Planning Guide</h4>
                      <p className="text-gray-500 text-[11px] leading-relaxed mb-6">
                        Use this blueprint reference to plan your office layout and partition lines. The diagram showcases custom dimensions and layout paths for the S, D, X, U, and R configuration systems.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 border border-gray-100 flex items-center justify-center">
                      <img 
                        src="/9981.png" 
                        alt="Workspace Solutions Dimension blueprint sheet" 
                        className="max-h-[500px] object-contain shadow-sm border border-white"
                      />
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
