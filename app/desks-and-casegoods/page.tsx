import Link from 'next/link';

export default function DesksAndCasegoods() {
  const desks: { title: string; image: string; href?: string }[] = [
    {
      title: "Executive Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Yg4fK_ydPLSE8Nl2a9C3lfRQEnr4Cjt8Rc5ynaMNDaSjEinbEDCZbWy5nZxU8bQiGVuXJqXUE0O1ynJO9Hs76t3IVxVJh6_cxK2-BJIjSE5XuUla1cAEwP_C94U1ggA6r4XdAdnT_eOX8ZQtq5qrTYejpPdm2WhB6Om5oOaQ1S4tncvb2re8JRC0iUzql1Loc1Wh-O05UdrRjG2Ty9PJCk5sxQm16WZVKZVzk-XzDzz58QmcWprlNEuzZ7VfwQ3icuRQGnKh2gM",
    },
    {
      title: "Manager Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5uZzfcA68xMLBSmPFToaIlhxBSL09uyq43GJjEFLiwSH_8S7G5zJ59vaJK7X-3DRftLw8eu7PjR9CRYVQbwppj2pzm2-zEPk6QwQF3GSI1abCxxSK8UtetuAL_5w9tJzblatAZkch-yUYNbzf_34182r7s5HAbmLeDYmQQyuMeteFPCFMtRo2bJSRma9q2hvkt3hNm013ZnsAhiRHDHAOmWf5xhU2QFLfLMgT-XSS1wRQIAT_K-kjpwgFn2UV40pKpfWGeKtB034",
    },
    {
      title: "Director Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIXVJgW4tfoEaFBwjQjFqUDr7wnM8B3fqmG4b1TZusZTzQrf9iwe32fBCT_7gffd-ygpuLRJSvy1bCBucD2GHelpUGWWc7nJEQwaF9PiM_lp94YDnhvh-BQnGKrnVY9nCnm_MVdHR39uSTnlTolUSqQ8izULGtLytGAOHRWaWFTNQJigikE6MzLAGGJEB2wRQhQkxjFJv9bKEO-exajPwzFzG22OL-YeEDg_lTKrtf6CSXVy6DVOqZeOyDtgycplINyWK5PyKRWX8",
    },
    {
      title: "Height Adjustable Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJCMNcHa_4aa490too9Pk0xwFDcWfJRkpxtOvZuj2wUcqrKsfRkzQPakmwCWl7xWZdzzMLQBjGO-4Txn-6_ezdvu4EecB0MQsrwMtwgxol9iHxtT93jS6UEghFsPHraGo9m4qGkAopJBDsRirFRwAkj0H0t7KK_zVCeiDzaB40QBsPBPTSQGoHk564OZPhBRR__-3AOPiRd7qYdjonYUbrB59Ap7rzdDZZIF80KAsJ6VLRRPs5LbWGvoH5Y6p2H02aa2O0ckp4aWg",
    },
    {
      title: "Collaborative Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCve12nFeeWTg9KkyhkVEr2r39Xt25DDplbddvOWmw3ABAykkZ3Qo-8Y4l5xW53SxaY2nEE1HPYHyBpAk9pniECiXoeBsqy6ft-V1EzJUWkR3lOWva2YXMCf3PIEvnmSj2_dRQDJGvngyHSPKrrtGRcSwVxRX545HXNn6CVXhQWnEh2XlH2IftpCsZiAK2UC55Y0a5eZM5YA2fptR0OMHnwT5nVIhIBrjL3ASo8Nk-D5cTBAfpHTlGKN9XMaIsasmXZU7EDSGtoEcU",
    },
    {
      title: "Meeting Tables",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD33v0Z1DUuTWrZtnX38fgWjx8awtFXN04EHh2bC12WrXsyk3nZ1Bdr5gIm32m5i8wwl14h1PfUvQYAGLIwULcCAE9Ju8rL1BiaZTmSVSsXOmG4qrYZ-XKjYIg3IOK6nMgnnRMjCvhV4egqhc3aqC-dbXFkHWOt3oDyy0P9v88I_2lFa6Zr6DAYkRKwOFq7petZXytMnEzR7Hbh2vIKKExQNeVrIhGC9AWVlitP3TYhkkiR9qXG-FB5mP686ByKn_pUoDPun6pIgfM",
    },
    {
      title: "Conference Tables",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf0DVRszh6zS8YcoI0dAahY3EsHGt7Qmd4hkwFUb3QTW9NEhMyt-acE2tH36yzfrHQk5ClHAGedxAmok3ZXEr5UsdfjUhA7ttZq1Gmp-oBPqkyk7s53la7WQoiOuaJJ8DKBMXAVE1VPcbjRs04hoBVDOIzcQGrVmBN4F5YqTfngjoEcJbhss1txAmqTjVE6CkGIkDOtzsjpLEg9PA7D7pVM1ZkVSIRRfyJra5giKFYvgvZYPbqmAqSuj0ydpawuYGwyzBsCvkWm84",
    },
    {
      title: "Reception Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2aK94ZnsuC_x4RmjjF4A1rcqTeD7J2vtQSsczxGgSbW_iytn09NxsnjNX7qKAPf5mVxa37lqMZ7SYAteFurXnf93Y9QwO5M8otbpxyz_pgsWHvA_V8ser8B6Ra4z9Mlxug42ccdWf2fV6IRExxYf5Y11pKi8LYgzQrA6BANYj7UyYI47oJdyKoYeMrq28WlSbZMauG0F4vdxs-Imp-Tn342NhwxDI-9OZ0alt9hkVuOlpPshyZx-kmEMMPsD4n3uqdH6zQcFKycs",
    },
    {
      title: "Writing Desks",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-OjcGvkjiO8Wj1TtgduOhlY3UYsDrC7XLmIBFkELhwjRFqAHZbDzifDqjvXY2UpR-b_BBCJ_CoWe2mbNo1Q69fiZf5olxV8Ikho3m7vSNfKsGID84aj8m216ntSOBWAL0bhGvJIfPJTOG_m4DZA4Q_zRyrxR3GdqVHFoxE7QEM5Ty_mJMotOq8UNSuwu0DWxdyzh1d0ZrZ118hdIcH9pK3TiVEnds8SGtDY6zSJhRPGCpNVU35ESt_XOp4GyU6XZu30E-rRs6fcY",
    }
  ];

  const casegoods = [
    {
      title: "Storage",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbxJL-HuzHqkH9Y3kKNWUVOT-jXWYjRhnj04bnzZ8xqG8_D5C_unDRdWBe52dvKfiCnZQOx6G3M8i7yEPmDQBvk78VoKyP6Q4u90zk-Tmh9LgV9J9QrwNFSY9F-09uJNkH49O_Y_csjnya9UwiYUGI_jqU7hQwsJq1rh5BhZmmcN32wFo019n4_equ3LoXQAbmaDWMTN9ouH8bm-XN9RrfeTu7ZqTq0rTIpBLn_qOD-kb5v5pNuPGCbSnaC558np5YaKX8a4rND2o",
      href: "/storage",
    }
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans antialiased min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="bg-[#ffffff] py-[120px] px-[24px] flex flex-col items-center text-center">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-serif text-[48px] leading-[1.2] tracking-[-0.02em] font-bold text-[#191c1e] mb-[16px]">
              Desks and Casegoods
            </h1>
            <p className="font-sans text-[18px] leading-[1.6] text-[#565e74] max-w-[650px] mx-auto">
              Premium desks and casegoods collections crafted for executive offices, collaborative workspaces, meeting environments, and modern commercial interiors.
            </p>
          </div>
        </section>

        {/* Product Gallery Section */}
        <section className="bg-[#ffffff] py-[80px] px-[24px]">
          <div className="max-w-[1280px] mx-auto">
            
            {/* Category Header */}
            <div className="mb-[32px]">
              <h2 className="font-serif text-[32px] leading-[1.3] font-semibold text-[#191c1e] relative inline-block">
                Desks
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#a93200]"></span>
              </h2>
            </div>

            {/* Executive Desks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[80px]">
              {desks.map((desk, index) => (
                <Link
                  key={index}
                  href={desk.href || "#"}
                  className="group relative block overflow-hidden rounded aspect-[4/5] bg-[#eceef0] cursor-pointer"
                >
                  <img
                    alt={desk.title}
                    src={desk.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Custom gradient matching the design */}
                  <div 
                    className="absolute inset-0 z-10 opacity-80" 
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)' }}
                  ></div>
                  <div className="absolute top-0 left-0 p-[16px] z-20">
                    <span className="font-sans text-[12px] leading-[1] tracking-[0.1em] font-bold uppercase text-[#ffffff]">
                      {desk.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Casegoods Header */}
            <div className="mb-[32px]">
              <h2 className="font-serif text-[32px] leading-[1.3] font-semibold text-[#191c1e] relative inline-block">
                Casegoods
                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#a93200]"></span>
              </h2>
            </div>

            {/* Casegoods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {casegoods.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative block overflow-hidden rounded aspect-[4/5] bg-[#eceef0] cursor-pointer"
                >
                  <img
                    alt={item.title}
                    src={item.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 z-10 opacity-80" 
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 40%)' }}
                  ></div>
                  <div className="absolute top-0 left-0 p-[16px] z-20">
                    <span className="font-sans text-[12px] leading-[1] tracking-[0.1em] font-bold uppercase text-[#ffffff]">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
              
              {/* More Casegoods Placeholder */}
              <div className="flex items-center justify-center bg-[#eceef0] aspect-[4/5] rounded border border-[#e2bfb4] text-[#565e74]">
                <span className="font-sans text-[12px] leading-[1] tracking-[0.1em] font-bold uppercase">More Casegoods...</span>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
