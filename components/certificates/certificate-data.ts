export type Certificate = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const certificates: Certificate[] = [
  {
    id: "fbr",
    title: "National Tax Registration",
    description:
      "Official corporate registration certificate from the Federal Board of Revenue, ensuring full legal compliance and transparent business operations.",
    image: "/Screenshot 2026-06-15 184340.png",
    alt: "FBR National Tax Registration Certificate for HB Furniture",
  },
  {
    id: "chamber",
    title: "Chamber of Commerce Membership",
    description:
      "Verified member of the Rawalpindi Chamber of Commerce & Industry, reflecting our commitment to professional standards and industry credibility.",
    image: "/Screenshot 2026-06-15 184349 - Copy.png",
    alt: "Chamber of Commerce Membership Certificate for HB Furniture",
  },
];

export const trustStats = [
  { value: "1964", label: "Established" },
  { value: "35+", label: "Years in Business" },
  { value: "200+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
] as const;

export const coreValues = [
  {
    title: "Material Integrity",
    description:
      "Every veneer, timber lot, and batch of hardware is inspected for consistency before it reaches the shop floor — because premium furniture begins with uncompromising inputs.",
  },
  {
    title: "Process Transparency",
    description:
      "From design approvals to finishing schedules, clients have clarity into how their pieces are built. No shortcuts, no surprises — only accountable craftsmanship.",
  },
  {
    title: "Delivery Commitment",
    description:
      "Timelines are set with precision and communicated proactively. Your workspace deserves furniture that arrives when promised, finished to specification.",
  },
] as const;

export const brandPromises = [
  "Ethical Sourcing & Trading",
  "In-House Manufacturing & Quality",
  "Direct-to-Consumer Pricing",
  "Free Lifetime Maintenance",
  "Warranty for Years to Come",
] as const;
