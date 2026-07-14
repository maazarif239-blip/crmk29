import Image from 'next/image';

const certificates = [
  {
    id: 1,
    title: 'FBR Registration Certificate',
    description:
      'Federal Board of Revenue — official tax registration confirming HB Furniture\'s compliance with Pakistan\'s tax regulations.',
    image: '/certificates/fbr-certificate.jpg',
    fallback: true,
  },
  {
    id: 2,
    title: 'Chamber of Commerce Membership',
    description:
      'Registered member of the Chamber of Commerce & Industry, affirming our standing as a legitimate and trusted business entity.',
    image: '/certificates/chamber-certificate.jpg',
    fallback: true,
  },
];

export default function CertificateGallery() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
          {/* Certificate Image / Placeholder */}
          <div className="relative flex h-64 items-center justify-center overflow-hidden bg-neutral-100 sm:h-72 lg:h-80">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              onError={() => {}}
            />
            {/* Fallback overlay if image not found */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100">
              <svg
                className="mb-3 h-16 w-16 text-neutral-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Certificate
              </p>
            </div>
          </div>

          {/* Info */}
          <div className="px-7 py-6">
            <div className="mb-2 inline-block h-0.5 w-8 bg-[#EB5324]" />
            <h3 className="font-serif text-xl text-neutral-900">{cert.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">
              {cert.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
