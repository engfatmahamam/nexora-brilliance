import work10 from "@/assets/work-10.jpg.asset.json";
import work11 from "@/assets/work-11.jpg.asset.json";
import work13 from "@/assets/work-13.jpg.asset.json";
import work14 from "@/assets/work-14.jpg.asset.json";
import work15 from "@/assets/work-15.jpg.asset.json";
import work16 from "@/assets/work-16.jpg.asset.json";
import work17 from "@/assets/work-17.jpg.asset.json";
import work18 from "@/assets/work-18.jpg.asset.json";
import work19 from "@/assets/work-19.jpg.asset.json";
import work20 from "@/assets/work-20.jpg.asset.json";

export const stats = [
  { value: "14+", label: "Years of experience" },
  { value: "500+", label: "Businesses worked with" },
  { value: "8M+", label: "EGP media investment managed" },
  { value: "3", label: "Languages — AR • EN • FR" },
];

export const services = [
  {
    title: "Brand",
    summary: "Positioning, identity and communication that people remember.",
    items: ["Brand Strategy", "Positioning", "Visual Identity", "Creative Direction"],
  },
  {
    title: "Marketing",
    summary: "Strategy, content and campaigns built as one connected system.",
    items: ["Marketing Strategy", "Digital Marketing", "Content Strategy", "Social Media", "SEO"],
  },
  {
    title: "Performance",
    summary: "Media buying and analytics tied to real business signals.",
    items: ["Media Buying", "Campaign Management", "Performance Analysis", "Optimization", "Reporting"],
  },
  {
    title: "Business Growth",
    summary: "Customer journeys, lead generation and scalable revenue systems.",
    items: ["Growth Strategy", "Lead Generation", "Customer Journey", "Business Development", "Sales Support"],
  },
  {
    title: "Experiences & Production",
    summary: "From idea to screen, from logo to a full 3D world.",
    items: ["Media Production", "AI Content", "Events", "Activations", "Print & Production"],
  },
];

export const process = [
  { no: "01", title: "Understand", text: "Understand the business, market, audience and goals." },
  { no: "02", title: "Diagnose", text: "Identify gaps, bottlenecks and missed opportunities." },
  { no: "03", title: "Strategize", text: "Build the right marketing and growth direction." },
  { no: "04", title: "Build", text: "Create the brand, content, campaigns and assets." },
  { no: "05", title: "Measure", text: "Track performance and business signals." },
  { no: "06", title: "Optimize", text: "Learn, improve and scale what works." },
];

export const whyUs = [
  { no: "01", title: "Business Thinking", text: "We don't isolate marketing from the business." },
  { no: "02", title: "14+ Years of Experience", text: "Across business, technology and marketing." },
  { no: "03", title: "Integrated Execution", text: "Strategy, creative, digital, performance and production." },
  { no: "04", title: "Data-Driven Decisions", text: "We measure, learn and optimize." },
  { no: "05", title: "One Strategic Partner", text: "Less fragmentation. More alignment." },
];

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  meta: string;
  image: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
};

export const categories = [
  "All",
  "Performance",
  "Branding",
  "Production",
  "Experiences",
] as const;

export const projects: Project[] = [
  {
    id: "dr-joseph",
    title: "From Testing to Scaling",
    client: "Dr. Joseph Raafat — Surgery Clinic",
    category: "Performance",
    meta: "Healthcare · Egypt · Jul 2023 – Aug 2026",
    image: work10.url,
    challenge:
      "A two-branch surgery clinic needed more than ads. The strategy focused on digital presence, performance marketing and digital expansion to support business growth at every stage.",
    approach: [
      "Started at 4,000 EGP monthly for testing and learning",
      "Content development and audience building",
      "Continuous performance optimization across multiple campaigns",
      "171K+ EGP total media investment managed",
    ],
    results: [
      { value: "6", label: "Branches now" },
      { value: "Multi-country", label: "Targeting" },
      { value: "Scalable", label: "System built" },
    ],
  },
  {
    id: "digital-impact",
    title: "The Digital Impact",
    client: "Dr. Joseph Raafat — Surgery Clinic",
    category: "Performance",
    meta: "Healthcare · Egypt · Media & Ads Manager results",
    image: work11.url,
    challenge:
      "Turning a limited local presence into wide digital reach, with messaging conversations as the primary business outcome.",
    approach: [
      "Testing → Learning → Building → Optimizing → Scaling",
      "Content design system built around clinic services",
      "Ads Manager tracking on cost per conversation",
    ],
    results: [
      { value: "7M", label: "Views" },
      { value: "2.1M", label: "Viewers" },
      { value: "54.3K", label: "Link clicks" },
      { value: "50.1K", label: "Visits" },
      { value: "2.5K", label: "Conversations started" },
      { value: "EGP 13.65", label: "Cost per conversation" },
    ],
  },
  {
    id: "content-with-a-job",
    title: "Content That Has a Job",
    client: "Multi-client content system",
    category: "Production",
    meta: "Social · Reels · Videos · Campaigns · AI Content",
    image: work13.url,
    challenge:
      "Beautiful content is not the goal. Every piece of content should have a strategic role — attract, educate, position, convert or build trust.",
    approach: [
      "Content mapped to a stage of the customer journey",
      "Myth vs fact and education formats to build authority",
      "Campaign-led calendars instead of random posting",
    ],
    results: [{ value: "+320%", label: "Organic engagement vs baseline" }],
  },
  {
    id: "ai-creative",
    title: "AI × Creative Production",
    client: "MAQAM · Dental · Hospitality",
    category: "Production",
    meta: "AI-assisted film and creative production",
    image: work14.url,
    challenge:
      "Brands wanted premium film-grade creative without premium production timelines and budgets.",
    approach: [
      "AI used as a creative production layer, not a shortcut",
      "MAQAM luxury fleet film concept",
      "Dental AI avatar presenter",
      "Hospitality AI brand film",
    ],
    results: [{ value: "3", label: "Premium AI films produced" }],
  },
  {
    id: "ai-creative-2",
    title: "AI Concepts & Inclusive Storytelling",
    client: "LOJEIN · JASOUR",
    category: "Production",
    meta: "3D cartoon · creative concepts · sign language AI",
    image: work15.url,
    challenge:
      "Expanding what brands can imagine and execute, including audiences usually left out of campaigns.",
    approach: [
      "LOJEIN creative concept film",
      "JASOUR 3D cartoon character universe",
      "Inclusive sign language AI presenter",
    ],
    results: [{ value: "Inclusive", label: "Sign language AI format" }],
  },
  {
    id: "media-production",
    title: "From Idea to Screen",
    client: "Media production unit",
    category: "Production",
    meta: "Commercials · Documentaries · Reels · Animation · Voice Over",
    image: work16.url,
    challenge:
      "Running full episodic and commercial production end to end, from concept through final delivery.",
    approach: [
      "Episode 01 — concept and pre-production",
      "Episode 02 — shoot and edit",
      "Episode 03 — final cut and deliver",
    ],
    results: [{ value: "3", label: "Episode production pipeline" }],
  },
  {
    id: "pmskills",
    title: "Building Brands People Remember",
    client: "PMSKILLS — UK Education",
    category: "Branding",
    meta: "Education · Brand identity system",
    image: work17.url,
    challenge:
      "An education brand entering a competitive market needed a clean, credible and modern identity.",
    approach: [
      "Logo and full visual identity",
      "Colour palette built on #1E5AA8 and white",
      "Clean sans typography — modern, readable, professional",
      "Applications and brand asset kit",
    ],
    results: [{ value: "Full", label: "Brand guidelines delivered" }],
  },
  {
    id: "kazoza",
    title: "Kazoza Café & Restaurant",
    client: "Kazoza — Café & Restaurant",
    category: "Branding",
    meta: "Hospitality · Identity and applications",
    image: work18.url,
    challenge:
      "A hospitality brand needing personality on the street and consistency across every touchpoint.",
    approach: [
      "Logo and identity system",
      "Colour palette anchored on #2BBBC1 and white",
      "Typography, applications and brand assets",
    ],
    results: [{ value: "End-to-end", label: "Identity + applications" }],
  },
  {
    id: "sohag",
    title: "From Logo to 3D World",
    client: "Sohag University — Faculty of Archaeology",
    category: "Experiences",
    meta: "Event identity & experience design",
    image: work19.url,
    challenge:
      "Bridge 4,500 years of Egyptian heritage with a modern digital experience, engaging students and visitors through immersive, culturally authentic design.",
    approach: [
      "Concept: Time Portal — a journey from ancient past to future present",
      "Design language blending hieroglyphs, gold geometry and digital mesh",
      "Environmental design — gates, booths, stage, signage",
      "Experiential design — photo booth and interactive displays",
    ],
    results: [
      { value: "Brand", label: "Identity system" },
      { value: "3D", label: "Environmental design" },
      { value: "Full", label: "Wayfinding blueprint" },
    ],
  },
  {
    id: "print",
    title: "From Digital to Physical",
    client: "Jamela · Dr. Islam Hashem Pharmacy",
    category: "Experiences",
    meta: "Print, packaging and outdoor",
    image: work20.url,
    challenge:
      "Carrying brand systems out of the feed and into real-world materials customers can hold.",
    approach: [
      "Brochures, flyers and prescription covers",
      "Business cards and roll-up banners",
      "Packaging, stationery and outdoor signage",
    ],
    results: [{ value: "Consistent", label: "Brand across print & retail" }],
  },
];

export const clients = [
  "Baytana",
  "Dr. Omnya Abdellah",
  "Dr. Joseph Raafat Surgery Clinic",
  "Dr. Basant ElMokhtar",
  "GOMATAR",
  "Creators Studio Productions",
  "Ahmed Elsherief Uro. Clinic",
  "MAQAM",
  "Glimmer Dental & Dermatology",
  "Dynamic Digital Agency",
  "Lojein Dental Center",
  "Jameela",
  "Al-Dowaini",
  "SM Certified Translation",
  "Sun City Travel",
  "NATASCIA Eyelashes",
  "Almalek Exchange",
  "Alsaeed Glass",
];

export const testimonials = [
  {
    name: "Dr. Jameela Clinics",
    role: "Healthcare",
    quote: "بجد انتوا شركة محترمة جدا.",
  },
  {
    name: "أحمد سليم",
    role: "Business owner",
    quote:
      "التزامكم بالمواعيد والنتايج خلى البراند بتاعي يتضاعف ٣ مرات — شكراً على الشفافية والاحترافية.",
  },
  {
    name: "Ramez El Dewiny",
    role: "Hadid El Dewiny",
    quote:
      "شراكة حقيقية وليست مجرد تنفيذ — فريق يفهم البيزنس قبل الإعلان.",
  },
  {
    name: "Wafaa",
    role: "Jasour",
    quote: "فخور بالشغل معاكي ومع التيم كله، انتم ناس امينة ومحترفة.",
  },
];

export const markets = [
  "Egypt · Cairo",
  "France · Paris",
  "Monaco",
  "Oman · Muscat",
  "Kuwait City",
  "Saudi Arabia · Riyadh",
  "Morocco · Casablanca",
];

export const contact = {
  email: "nexorabu@gmail.com",
  instagram: "nexora.bu",
  instagramUrl: "https://instagram.com/nexora.bu",
};
