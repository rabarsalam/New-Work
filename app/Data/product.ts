/**
 * Projects data – single source of truth (like product.ts pattern).
 * Only data here. Pages loop over `projects` – no translation JSON for project content.
 * Add a new object and it appears in the list and gets its own detail page.
 */

export type ProjectCategory = "residential" | "commercial" | "industrial";

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  images: string[];
  description: string;
  date: string;
  location: string;
}

export const projects: Project[] = [
  // =========================
  // MAJOR COMMERCIAL PROJECTS
  // =========================
  {
    id: 1,
    title: "Anzu Commercial Complex",
    category: "commercial",
    image: "/images/project-1.jpeg",
    images: ["/images/project-1.jpeg", "/images/project-2.jpeg", "/images/project-3.jpeg"],
    description: "Full electrical installation and load management for the Anzu Commercial Complex in the Kurdistan Region.",
    date: "2022–Present",
    location: "Anzu Commercial Complex, Kurdistan Region, Iraq",
  },
  // =========================
  // INDUSTRIAL / SHOWROOMS
  // =========================
  {
    id: 2,
    title: "26 Car Showrooms, Industrial Zone",
    category: "industrial",
    image: "/images/project-3.jpeg",
    images: ["/images/project-3.jpeg", "/images/project-4.jpeg", "/images/project-5.jpeg"],
    description: "Electrical and lighting systems for 26 car showrooms in the industrial zone.",
    date: "2023–Present",
    location: "26 Car Showrooms, Industrial Zone, Kurdistan Region, Iraq",
  },
  // =========================
  // CITIES & LARGE DEVELOPMENTS
  // =========================
  {
    id: 3,
    title: "Awin City (Wluba & Sheikh Abbas)",
    category: "commercial",
    image: "/images/project-4.jpeg",
    images: ["/images/project-4.jpeg", "/images/project-5.jpeg", "/images/project-6.jpeg"],
    description: "Large-scale electrical infrastructure for Awin City development.",
    date: "2015–2017",
    location: "Awin City (Wluba & Sheikh Abbas), Kurdistan Region, Iraq",
  },
  {
    id: 4,
    title: "Roshnbiran City",
    category: "commercial",
    image: "/images/project-5.jpeg",
    images: ["/images/project-5.jpeg", "/images/project-6.jpeg", "/images/project-7.jpeg"],
    description: "Electrical installation for Roshnbiran City development.",
    date: "2015–2016",
    location: "Roshnbiran City, Kurdistan Region, Iraq",
  },
  // =========================
  // HALLS & RENOVATIONS
  // =========================
  {
    id: 5,
    title: "Khalla Shahab Hall",
    category: "commercial",
    image: "/images/project-6.jpeg",
    images: ["/images/project-6.jpeg", "/images/project-7.jpeg", "/images/project-8.jpeg"],
    description: "Electrical installation and renovation for Khalla Shahab Hall, Qalachualan.",
    date: "19/3/2021 – 1/7/2021",
    location: "Khalla Shahab Hall, Qalachualan, Kurdistan Region, Iraq",
  },
  // =========================
  // RESIDENTIAL PROJECTS
  // =========================
  {
    id: 6,
    title: "Guest House of Mr. Mam Jalal",
    category: "residential",
    image: "/images/project-7.jpeg",
    images: ["/images/project-7.jpeg", "/images/project-8.jpeg", "/images/project-9.jpeg"],
    description: "Residential electrical installation for the guest house at Dukani Sarw.",
    date: "1/6/2021 – 1/4/2022",
    location: "Guest House of Mr. Mam Jalal, Dukani Sarw, Kurdistan Region, Iraq",
  },
  {
    id: 7,
    title: "Kani Sard Villa",
    category: "residential",
    image: "/images/project-8.jpeg",
    images: ["/images/project-8.jpeg", "/images/project-9.jpeg", "/images/project-10.jpeg"],
    description: "Full electrical installation for Kani Sard Villa.",
    date: "1/4/2022 – 1/8/2022",
    location: "Kani Sard Villa, Kurdistan Region, Iraq",
  },
  {
    id: 8,
    title: "Villa, Sulaimani Heights (600 m²)",
    category: "residential",
    image: "/images/project-9.jpeg",
    images: ["/images/project-9.jpeg", "/images/project-10.jpeg", "/images/project-11.jpeg"],
    description: "Electrical systems for a 600 m² villa at Sulaimani Heights.",
    date: "1/4/2022 – 1/7/2022",
    location: "Villa, Sulaimani Heights (600 m²), Kurdistan Region, Iraq",
  },
  {
    id: 9,
    title: "Private House of Mr. Bafel Jalal Talabani",
    category: "residential",
    image: "/images/project-10.jpeg",
    images: ["/images/project-10.jpeg", "/images/project-11.jpeg", "/images/project-12.jpeg"],
    description: "Electrical installation for the private residence at Dabashan Hill.",
    date: "2023–Present",
    location: "Private House of Mr. Bafel Jalal Talabani, Dabashan Hill, Kurdistan Region, Iraq",
  },
  {
    id: 10,
    title: "Town House Apartment (320 m²)",
    category: "residential",
    image: "/images/project-11.jpeg",
    images: ["/images/project-11.jpeg", "/images/project-12.jpeg", "/images/project-13.jpeg"],
    description: "Electrical infrastructure for a 320 m² town house in Sulaimaniyah.",
    date: "2023–Present",
    location: "Town House Apartment (320 m²), Sulaimaniyah, Kurdistan Region, Iraq",
  },
  // =========================
  // SECURITY / GOVERNMENT
  // =========================
  {
    id: 11,
    title: "Tasluja Checkpoint",
    category: "industrial",
    image: "/images/project-12.jpeg",
    images: ["/images/project-12.jpeg", "/images/project-13.jpeg", "/images/project-14.jpeg"],
    description: "Electrical and security systems for Tasluja Checkpoint.",
    date: "1/11/2021 – 1/6/2022",
    location: "Tasluja Checkpoint, Kurdistan Region, Iraq",
  },
  {
    id: 12,
    title: "Kani Goma Prison",
    category: "industrial",
    image: "/images/project-13.jpeg",
    images: ["/images/project-13.jpeg", "/images/project-14.jpeg", "/images/project-15.jpeg"],
    description: "Electrical installation for Kani Goma Prison facility.",
    date: "1/11/2021 – 1/9/2022",
    location: "Kani Goma Prison, Kurdistan Region, Iraq",
  },
  {
    id: 13,
    title: "Counter-Terrorism Building, 70th Forces Command",
    category: "industrial",
    image: "/images/project-14.jpeg",
    images: ["/images/project-14.jpeg", "/images/project-15.jpeg", "/images/project-1.jpeg"],
    description: "Electrical systems for the counter-terrorism building.",
    date: "2022–2023",
    location: "Counter-Terrorism Building, 70th Forces Command, Kurdistan Region, Iraq",
  },
  {
    id: 14,
    title: "Parwez Khan Checkpoint",
    category: "industrial",
    image: "/images/project-15.jpeg",
    images: ["/images/project-15.jpeg", "/images/project-1.jpeg", "/images/project-2.jpeg"],
    description: "Electrical installation for Parwez Khan Checkpoint, Kalar.",
    date: "2023",
    location: "Parwez Khan Checkpoint, Kalar, Kurdistan Region, Iraq",
  },
  // =========================
  // HOSPITALS & MEDICAL
  // =========================
  {
    id: 15,
    title: "Dabashan Hospital (PUK Secretariat)",
    category: "commercial",
    image: "/images/project-16.jpeg",
    images: ["/images/project-16.jpeg", "/images/project-17.jpeg", "/images/project-18.jpeg"],
    description: "Electrical and medical systems for Dabashan Hospital.",
    date: "2022",
    location: "Dabashan Hospital (PUK Secretariat), Kurdistan Region, Iraq",
  },
  {
    id: 16,
    title: "Skymed Hospital",
    category: "commercial",
    image: "/images/project-17.jpeg",
    images: ["/images/project-17.jpeg", "/images/project-18.jpeg", "/images/project-19.jpeg"],
    description: "Electrical installation for Skymed Hospital, Sulaimaniyah.",
    date: "2024–Present",
    location: "Skymed Hospital, Sulaimaniyah, Kurdistan Region, Iraq",
  },
  {
    id: 17,
    title: "Children's Hospital Electrical Infrastructure",
    category: "commercial",
    image: "/images/project-18.jpeg",
    images: ["/images/project-18.jpeg", "/images/project-19.jpeg", "/images/project-20.jpeg"],
    description: "Electrical infrastructure for the children's hospital in Sulaimaniyah.",
    date: "2024",
    location: "Children's Hospital Electrical Infrastructure, Sulaimaniyah, Kurdistan Region, Iraq",
  },
  // =========================
  // OFFICES & BANKS
  // =========================
  {
    id: 18,
    title: "Main Office of Hemn Concrete",
    category: "commercial",
    image: "/images/project-19.jpeg",
    images: ["/images/project-19.jpeg", "/images/project-20.jpeg", "/images/project-21.jpeg"],
    description: "Electrical installation for the main office of Hemn Concrete.",
    date: "2022",
    location: "Main Office of Hemn Concrete, Kurdistan Region, Iraq",
  },
  {
    id: 19,
    title: "Bank of Baghdad",
    category: "commercial",
    image: "/images/project-20.jpeg",
    images: ["/images/project-20.jpeg", "/images/project-21.jpeg", "/images/project-22.jpeg"],
    description: "Electrical and security systems for Bank of Baghdad branch.",
    date: "2023",
    location: "Bank of Baghdad, Kurdistan Region, Iraq",
  },
  {
    id: 20,
    title: "National Bank of Iraq (NBI) & Majdi Mall",
    category: "commercial",
    image: "/images/project-21.jpeg",
    images: ["/images/project-21.jpeg", "/images/project-22.jpeg", "/images/project-23.jpeg"],
    description: "Electrical systems for NBI Sulaimaniyah and Majdi Mall.",
    date: "2023",
    location: "National Bank of Iraq (NBI), Sulaimaniyah & Majdi Mall, Kurdistan Region, Iraq",
  },
  // =========================
  // FARMANDAYI PROJECTS
  // =========================
  {
    id: 21,
    title: "Farmandayi Project (Gym, Arsenal, Guards, VIP)",
    category: "commercial",
    image: "/images/project-22.jpeg",
    images: ["/images/project-22.jpeg", "/images/project-23.jpeg", "/images/project-24.jpeg"],
    description: "Electrical installation for gym, arsenal, guards and VIP buildings at Farmandayi.",
    date: "1/4/2022 – 1/7/2022",
    location: "Farmandayi Project (Gym, Arsenal, Guards, VIP Buildings), Kurdistan Region, Iraq",
  },
  {
    id: 22,
    title: "Commando Farmandayi Site Plan Project",
    category: "industrial",
    image: "/images/project-23.jpeg",
    images: ["/images/project-23.jpeg", "/images/project-24.jpeg", "/images/project-25.jpeg"],
    description: "Site-wide electrical plan and installation for Commando Farmandayi.",
    date: "1/6/2022 – 1/9/2022",
    location: "Commando Farmandayi Site Plan Project, Kurdistan Region, Iraq",
  },
  {
    id: 23,
    title: "Banquet Hall, Farmandayi",
    category: "commercial",
    image: "/images/project-24.jpeg",
    images: ["/images/project-24.jpeg", "/images/project-25.jpeg", "/images/project-26.jpeg"],
    description: "Electrical and lighting for the banquet hall at Farmandayi.",
    date: "2023",
    location: "Banquet Hall, Farmandayi, Kurdistan Region, Iraq",
  },
  {
    id: 24,
    title: "Helipad, Farmandayi",
    category: "industrial",
    image: "/images/project-25.jpeg",
    images: ["/images/project-25.jpeg", "/images/project-26.jpeg", "/images/project-27.jpeg"],
    description: "Electrical systems for the helipad at Farmandayi.",
    date: "2023",
    location: "Helipad, Farmandayi, Kurdistan Region, Iraq",
  },
  // =========================
  // TECHNICAL / INFRASTRUCTURE
  // =========================
  {
    id: 25,
    title: "Vim Project Voltage System Repair",
    category: "commercial",
    image: "/images/project-26.jpeg",
    images: ["/images/project-26.jpeg", "/images/project-27.jpeg", "/images/project-28.jpeg"],
    description: "Voltage system repair and electrical upgrades for the Vim project.",
    date: "2023",
    location: "Vim Project Voltage System Repair, Kurdistan Region, Iraq",
  },
  // =========================
  // SOLAR ENERGY PROJECTS
  // =========================
  {
    id: 26,
    title: "Solar Panel Systems – Government & Residential",
    category: "commercial",
    image: "/images/project-27.jpeg",
    images: ["/images/project-27.jpeg", "/images/project-28.jpeg", "/images/project-29.jpeg"],
    description: "Solar panel design and installation for government and residential sites.",
    date: "2024",
    location: "Solar Panel Systems – Government & Residential Sites, Iraq",
  },
  {
    id: 27,
    title: "Al-Aliya District & Government Buildings",
    category: "commercial",
    image: "/images/project-28.jpeg",
    images: ["/images/project-28.jpeg", "/images/project-29.jpeg", "/images/project-30.jpeg"],
    description: "Solar and electrical systems for House of Representatives, Al-Nazaha, Army Club, Ministry of Defense.",
    date: "2024",
    location: "Al-Aliya District, House of Representatives, Al-Nazaha, Army Club, Ministry of Defense, Iraq",
  },
  {
    id: 28,
    title: "Schools & Health Centers – Multiple Cities",
    category: "commercial",
    image: "/images/project-29.jpeg",
    images: ["/images/project-29.jpeg", "/images/project-30.jpeg", "/images/project-31.jpeg"],
    description: "Electrical and solar installations for schools and health centers in Baghdad, Ramadi, Tikrit, Samarra, Abu Ghraib.",
    date: "2024",
    location: "Schools & Health Centers – Baghdad, Ramadi, Tikrit, Samarra, Abu Ghraib, Iraq",
  },
  {
    id: 29,
    title: "Solar Projects – Schools and Health Centers",
    category: "commercial",
    image: "/images/project-30.jpeg",
    images: ["/images/project-30.jpeg", "/images/project-31.jpeg", "/images/project-32.jpeg"],
    description: "Solar and electrical systems for primary and secondary schools and health centers across Iraq.",
    date: "2024",
    location: "Solar Projects – Primary & Secondary Schools and Health Centers Across Iraq",
  },
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
