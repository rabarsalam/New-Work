export type Locale = "en" | "ar" | "ku";
export type ProjectCategory = "residential" | "commercial" | "industrial";

export interface Project {
  id: number;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  category: ProjectCategory;
  image: string;
  images?: string[];
  year?: string;
  location?: Record<Locale, string>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Anzu Commercial Complex",
      ar: "مجمع أنزو التجاري",
      ku: "کۆمپڵێکسی بازرگانی ئەنزو",
    },
    description: {
      en: "Full electrical installation and load management for the Anzu Commercial Complex in the Kurdistan Region.",
      ar: "تنفيذ الأعمال الكهربائية الكاملة وإدارة الأحمال لمجمع أنزو التجاري في إقليم كردستان.",
      ku: "جێبەجێکردنی تەواوی کارەبا و بەڕێوەبردنی بارەکان بۆ کۆمپڵێکسی ئەنزو.",
    },
    category: "commercial",
    image: "/images/Anzu-1.jpeg",
    images: [
      "/images/Anzu-1.jpeg",
      "/images/Anzu-2.jpeg",
      "/images/Anzu-3.jpeg",
      "/images/Anzu-4.jpeg",
      "/images/Anzu-5.jpeg",
    ],
    year: "2022",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 2,
    title: {
      en: "26 Car Showrooms, Industrial Zone",
      ar: "26 معرض سيارات، المنطقة الصناعية",
      ku: "٢٦ پێشانگای ئۆتۆمبێل",
    },
    description: {
      en: "Electrical and lighting systems for 26 car showrooms in the industrial zone.",
      ar: "تنفيذ الأنظمة الكهربائية وأنظمة الإنارة لـ 26 معرض سيارات في المنطقة الصناعية.",
      ku: "دانانی سیستەمی کارەبا و ڕووناکی بۆ ٢٦ پێشانگای ئۆتۆمبێل.",
    },
    category: "industrial",
    image: "/images/CarShow-1.jpeg",
    images: [
      "/images/CarShow-1.jpeg",
      "/images/CarShow-2.jpeg",
      "/images/CarShow-3.jpeg",
    ],
    year: "2023",
    location: {
      en: "Industrial Zone, Kurdistan Region, Iraq",
      ar: "المنطقة الصناعية، إقليم كردستان، العراق",
      ku: "ناوچەی پیشەسازی، هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 3,
    title: {
      en: "Awin City (Wluba & Sheikh Abbas)",
      ar: "مدينة آوين (ولوبا وشيخ عباس)",
      ku: "شارەوانی ئاویـن",
    },
    description: {
      en: "Large-scale electrical infrastructure for Awin City development.",
      ar: "تنفيذ البنية التحتية الكهربائية لمشروع تطوير مدينة آوين.",
      ku: "دانانی ژێرخانی کارەبا بۆ شارەوانی ئاویـن.",
    },
    category: "commercial",
    image: "/images/AwinCity-1.jpeg",
    images: [
      "/images/AwinCity-1.jpeg",
      "/images/AwinCity-2.jpeg",
    ],
    year: "2015",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 4,
    title: {
      en: "Roshnbiran City",
      ar: "مدينة روشنبيران",
      ku: "شارەوانی ڕۆشنبیران",
    },
    description: {
      en: "Electrical installation for Roshnbiran City development.",
      ar: "تنفيذ الأعمال الكهربائية لمشروع تطوير مدينة روشنبيران.",
      ku: "جێبەجێکردنی کارەبا بۆ شارەوانی ڕۆشنبیران.",
    },
    category: "commercial",
    image: "/images/Roshnbiran-1.jpg",
    images: [
      "/images/Roshnbiran-1.jpg",
      "/images/Roshnbiran-2.jpg",
    ],
    year: "2015",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 5,
    title: {
      en: "Khalla Shahab Hall",
      ar: "قاعة خلة شهاب",
      ku: "هۆڵی خەڵە شهاب",
    },
    description: {
      en: "Electrical installation and renovation for Khalla Shahab Hall.",
      ar: "تنفيذ الأعمال الكهربائية وأعمال التأهيل لقاعة خلة شهاب.",
      ku: "جێبەجێکردنی کارەبا و نوسینەوەی هۆڵی خەڵە شهاب.",
    },
    category: "commercial",
    image: "/images/Shahab-1.jpeg",
    images: [
      "/images/Shahab-1.jpeg",
      "/images/Shahab-2.jpeg",
    ],
    year: "19/3/2021",
    location: {
      en: "Qalachualan, Kurdistan Region, Iraq",
      ar: "قلعة جوالان، إقليم كردستان، العراق",
      ku: "قەڵاچوولان، هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 6,
    title: {
      en: "Guest House of Mr. Mam Jalal",
      ar: "دار ضيافة السيد مام جلال",
      ku: "میوانخانەی مام جەلال",
    },
    description: {
      en: "Residential electrical installation for the guest house.",
      ar: "تنفيذ الأعمال الكهربائية السكنية لدار الضيافة.",
      ku: "دانانی کارەبای خانوویی بۆ میوانخانە.",
    },
    category: "residential",
    image: "/images/Chk-3.jpg",
    images: [
      "/images/Chk-3.jpg",
      "/images/Chk-4.jpg",
    ],
    year: "1/6/2021",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 7,
    title: {
      en: "Kani Sard Villa",
      ar: "فيلا كاني سارد",
      ku: "ڤێلای کانی سارد",
    },
    description: {
      en: "Full electrical installation for Kani Sard Villa.",
      ar: "تنفيذ الأعمال الكهربائية الكاملة لفيلا كاني سارد.",
      ku: "جێبەجێکردنی تەواوی کارەبا بۆ ڤێلای کانی سارد.",
    },
    category: "residential",
    image: "/images/Sard-1.jpg",
    images: [
      "/images/Sard-1.jpg",
      "/images/Sard-2.jpg",
    ],
    year: "1/4/2022",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 9,
    title: {
      en: "Private House of Mr. Bafel Jalal Talabani",
      ar: "المنزل الخاص للسيد بافل جلال طالباني",
      ku: "ماڵی تایبەتی بافل جەلال تاڵەبانی",
    },
    description: {
      en: "Electrical installation for the private residence.",
      ar: "تنفيذ الأعمال الكهربائية للمنزل الخاص.",
      ku: "جێبەجێکردنی کارەبا بۆ ماڵی تایبەتی.",
    },
    category: "residential",
    image: "/images/Sarok-1.jpg",
    images: [
      "/images/Sarok-1.jpg",
      "/images/Sarok-2.jpg",
    ],
    year: "2023",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 11,
    title: {
      en: "Tasluja Checkpoint",
      ar: "سيطرة تسلوجة",
      ku: "چێکپوینتی تەسلوجە",
    },
    description: {
      en: "Electrical and security systems for Tasluja Checkpoint.",
      ar: "تنفيذ الأنظمة الكهربائية والأمنية لسيطرة تسلوجة.",
      ku: "دانانی سیستەمی کارەبا و پاراستن.",
    },
    category: "industrial",
    image: "/images/Chk-7.jpg",
    images: [
      "/images/Chk-7.jpg",
      "/images/Chk-8.jpg",
    ],
    year: "1/11/2021",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 12,
    title: {
      en: "Kani Goma Prison",
      ar: "سجن كاني كوما",
      ku: "زیندانەی کانی گۆما",
    },
    description: {
      en: "Electrical installation for Kani Goma Prison facility.",
      ar: "تنفيذ الأعمال الكهربائية لمنشأة سجن كاني كوما.",
      ku: "جێبەجێکردنی کارەبا بۆ زیندانە.",
    },
    category: "industrial",
    image: "/images/Prison-1.jpg",
    images: [
      "/images/Prison-1.jpg",
      "/images/Prison-2.jpg",
    ],
    year: "1/11/2021",
    location: {
      en: "Kurdistan Region, Iraq",
      ar: "إقليم كردستان، العراق",
      ku: "هەرێمی کوردستان، عێراق",
    },
  },

  {
    id: 16,
    title: {
      en: "Skymed Hospital",
      ar: "مستشفى سكاي ميد",
      ku: "نه‌خۆشخانه‌ی سكايمێد",
    },
    description: {
      en: "Electrical installation for Skymed Hospital.",
      ar: "تنفيذ الأعمال الكهربائية لمستشفى سكاي ميد.",
      ku: "دانانی کارەبا بۆ نه‌خۆشخانه‌ی سكايمێد.",
    },
    category: "commercial",
    image: "/images/Skymed-1.jpeg",
    images: [
      "/images/Skymed-1.jpeg",
      "/images/Skymed-2.jpeg",
    ],
    year: "2024",
    location: {
      en: "Sulaimaniyah, Kurdistan Region, Iraq",
      ar: "السليمانية، إقليم كردستان، العراق",
      ku: "سلێمانی، هەرێمی کوردستان، عێراق",
    },
  },
  {
    id: 17,
    title: {
      en: "Children's Hospital Electrical Infrastructure",
      ar: "البنية التحتية الكهربائية لمستشفى الأطفال",
      ku: "ژێرخانی کارەبایی نەخۆشخانەی منداڵان"
    },
    category: "commercial",
    image: "/images/Childreen-1.jpg",
    images: ["/images/Childreen-1.jpg"],
    description: {
      en: "Electrical infrastructure for the children's hospital in Sulaimaniyah.",
      ar: "تنفيذ البنية التحتية الكهربائية لمستشفى الأطفال في السليمانية.",
      ku: "دانانی ژێرخانی کارەبا بۆ نەخۆشخانەی منداڵان لە سلێمانی."
    },
    year: "2024",
    location: {
      en: "Children's Hospital Electrical Infrastructure, Sulaimaniyah, Kurdistan Region, Iraq",
      ar: "البنية التحتية الكهربائية لمستشفى الأطفال، السليمانية، إقليم كردستان، العراق",
      ku: "ژێرخانی کارەبایی نەخۆشخانەی منداڵان، سلێمانی، هەرێمی کوردستان، عێراق"
    }
  },

  // =========================
  // OFFICES & BANKS
  // =========================
  {
    id: 18,
    title: {
      en: "Main Office of Hemn Concrete",
      ar: "المكتب الرئيسي لشركة همن للخرسانة",
      ku: "نووسینگەی سەرەکی هەمن کۆنکرێت"
    },
    category: "commercial",
    image: "/images/Hemn-1.jpg",
    images: ["/images/Hemn-1.jpg"],
    description: {
      en: "Electrical installation for the main office of Hemn Concrete.",
      ar: "تنفيذ الأعمال الكهربائية للمكتب الرئيسي لشركة همن للخرسانة.",
      ku: "جێبەجێکردنی کارە کارەبا بۆ نووسینگەی سەرەکی هەمن کۆنکرێت."
    },
    year: "2022",
    location: {
      en: "Main Office of Hemn Concrete, Kurdistan Region, Iraq",
      ar: "المكتب الرئيسي لشركة همن للخرسانة، إقليم كردستان، العراق",
      ku: "نووسینگەی سەرەکی هەمن کۆنکرێت، هەرێمی کوردستان، عێراق"
    }
  },
  {
    id: 19,
    title: {
      en: "Bank of Baghdad",
      ar: "مصرف بغداد",
      ku: "بانکی بەغدا"
    },
    category: "commercial",
    image: "/images/BaghdadBank-1.jpeg",
    images: ["/images/BaghdadBank-1.jpeg", "/images/BaghdadBank-2.jpeg", "/images/BaghdadBank-3.jpeg"],
    description: {
      en: "Electrical and security systems for Bank of Baghdad branch.",
      ar: "تنفيذ الأنظمة الكهربائية والأمنية لفرع مصرف بغداد.",
      ku: "دانانی سیستەمە کارەباییەکان و پاراستن بۆ فرعی بانکی بەغدا."
    },
    year: "2023",
    location: {
      en: "Bank of Baghdad, Kurdistan Region, Iraq",
      ar: "مصرف بغداد، إقليم كردستان، العراق",
      ku: "بانکی بەغدا، هەرێمی کوردستان، عێراق"
    }
  },
  {
    id: 20,
    title: {
      en: "National Bank of Iraq (NBI) & Majdi Mall",
      ar: "المصرف الوطني العراقي ومجمع مجدي",
      ku: "بانکی نیشتمانی عێراق (NBI) و مەجیدی مال"
    },
    category: "commercial",
    image: "/images/NBI-5.jpg",
    images: ["/images/NBI-1.jpg", "/images/NBI-2.jpg", "/images/NBI-3.jpg", "/images/NBI-4.jpg", "/images/NBI-5.jpg"],
    description: {
      en: "Electrical systems for NBI Sulaimaniyah and Majdi Mall.",
      ar: "تنفيذ الأنظمة الكهربائية لمصرف NBI في السليمانية ومجمع مجدي.",
      ku: "دانانی سیستەمە کارەباییەکان بۆ بانکی NBI لە سلێمانی و مەجیدی مال."
    },
    year: "2023",
    location: {
      en: "National Bank of Iraq (NBI), Sulaimaniyah & Majdi Mall, Kurdistan Region, Iraq",
      ar: "المصرف الوطني العراقي، السليمانية ومجمع مجدي، إقليم كردستان، العراق",
      ku: "بانکی نیشتمانی عێراق (NBI)، سلێمانی و مەجیدی مال، هەرێمی کوردستان، عێراق"
    }
  },

  // =========================
  // FARMANDAYI PROJECTS
  // =========================
  {
    id: 21,
    title: {
      en: "Farmandayi Project (Gym, Arsenal, Guards, VIP)",
      ar: "مشروع فرماندايي (قاعة رياضية، مستودع سلاح، حراسة، كبار الشخصيات)",
      ku: "پڕۆژەی فەرماندەیی (جیم، ئارسنال، پاسداران، VIP)"
    },
    category: "commercial",
    image: "/images/Farmanday-1.jpg",
    images: ["/images/Farmanday-1.jpg","/images/Anzu-6.jpeg","/images/Anzu-7.jpeg", "/images/Anzu-8.jpeg",],
    description: {
      en: "Electrical installation for gym, arsenal, guards and VIP buildings at Farmandayi.",
      ar: "تنفيذ الأعمال الكهربائية لمباني القاعة الرياضية، المستودع، الحراسة وVIP في فرماندايي.",
      ku: "جێبەجێکردنی کارە کارەبا بۆ بیناکانی جیم، ئارسنال، پاسداران و VIP لە فەرماندەیی."
    },
    year: "1/4/2022",
    location: {
      en: "Farmandayi Project (Gym, Arsenal, Guards, VIP Buildings), Kurdistan Region, Iraq",
      ar: "مشروع فرماندايي (قاعة رياضية، مستودع سلاح، حراسة، مباني VIP)، إقليم كردستان، العراق",
      ku: "پڕۆژەی فەرماندەیی (جیم، ئارسنال، پاسداران، بیناکانی VIP)، هەرێمی کوردستان، عێراق"
    }
  },
  {
    id: 22,
    title: {
      en: "Commando Farmandayi Site Plan Project",
      ar: "مشروع المخطط العام لكوماندو فرماندايي",
      ku: "پڕۆژەی پلانی گشتی کۆماندۆ فەرماندەیی"
    },
    category: "industrial",
    image: "/images/Chk-9.jpg",
    images: ["/images/Chk-9.jpg"],
    description: {
      en: "Site-wide electrical plan and installation for Commando Farmandayi.",
      ar: "تنفيذ المخطط الكهربائي العام والأعمال الكهربائية لموقع كوماندو فرماندايي.",
      ku: "دانانی پلانی گشتی کارەبا و جێبەجێکردنی کارە کارەبا بۆ کۆماندۆ فەرماندەیی."
    },
    year: "1/6/2022",
    location: {
      en: "Commando Farmandayi Site Plan Project, Kurdistan Region, Iraq",
      ar: "مشروع المخطط العام لكوماندو فرماندايي، إقليم كردستان، العراق",
      ku: "پڕۆژەی پلانی گشتی کۆماندۆ فەرماندەیی، هەرێمی کوردستان، عێراق"
    }
  },
  {
    id: 23,
    title: {
      en: "Banquet Hall, Farmandayi",
      ar: "قاعة حفلات فرماندايي",
      ku: "هۆڵی میوانداری فەرماندەیی"
    },
    category: "commercial",
    image: "/images/Chk-10.jpg",
    images: ["/images/Chk-10.jpg"],
    description: {
      en: "Electrical and lighting for the banquet hall at Farmandayi.",
      ar: "تنفيذ الأنظمة الكهربائية والإنارة لقاعة الحفلات في فرماندايي.",
      ku: "دانانی کارە کارەبا و ڕووناکی بۆ هۆڵی میوانداری لە فەرماندەیی."
    },
    year: "2023",
    location: {
      en: "Banquet Hall, Farmandayi, Kurdistan Region, Iraq",
      ar: "قاعة حفلات فرماندايي، إقليم كردستان، العراق",
      ku: "هۆڵی میوانداری فەرماندەیی، هەرێمی کوردستان، عێراق"
    }
  },
  {
    id: 24,
    title: {
      en: "Helipad, Farmandayi",
      ar: "مهبط الطائرات، فرماندايي",
      ku: "هێلیپاد، فەرماندەیی"
    },
    category: "industrial",
    image: "/images/Chk-11.jpg",
    images: ["/images/Chk-11.jpg"],
    description: {
      en: "Electrical systems for the helipad at Farmandayi.",
      ar: "تنفيذ الأنظمة الكهربائية لمهبط الطائرات في فرماندايي.",
      ku: "دانانی سیستەمە کارەباییەکان بۆ هێلیپاد لە فەرماندەیی."
    },
    year: "2023",
    location: {
      en: "Helipad, Farmandayi, Kurdistan Region, Iraq",
      ar: "مهبط الطائرات، فرماندايي، إقليم كردستان، العراق",
      ku: "هێلیپاد، فەرماندەیی، هەرێمی کوردستان، عێراق"
    }
  },

  // =========================
  // TECHNICAL / INFRASTRUCTURE
  // =========================
  {
    id: 25,
    title: {
      en: "Vim Project Voltage System Repair",
      ar: "إصلاح نظام الجهد لمشروع فيم",
      ku: "چاکسازی سیستەمی ڤۆلتاجی پڕۆژەی ڤیم"
    },
    category: "commercial",
    image: "/images/Chk-12.jpg",
    images: ["/images/Chk-12.jpg","/images/Chk-1.jpg","/images/Chk-2.jpg",],
    description: {
      en: "Voltage system repair and electrical upgrades for the Vim project.",
      ar: "إصلاح نظام الجهد وتنفيذ ترقيات كهربائية لمشروع فيم.",
      ku: "چاکسازی سیستەمی ڤۆلتاج و نوێکردنەوەی کارەبا بۆ پڕۆژەی ڤیم."
    },
    year: "2023",
    location: {
      en: "Vim Project Voltage System Repair, Kurdistan Region, Iraq",
      ar: "إصلاح نظام الجهد لمشروع فيم، إقليم كردستان، العراق",
      ku: "چاکسازی سیستەمی ڤۆلتاجی پڕۆژەی ڤیم، هەرێمی کوردستان، عێراق"
    }
  },

  // =========================
  // SOLAR ENERGY PROJECTS
  // =========================
  {
    id: 26,
    title: {
      en: "Solar Panel Systems – Government & Residential",
      ar: "أنظمة الطاقة الشمسية – حكومية وسكنية",
      ku: "سیستەمەکانی پانێڵی خۆر – حکومی و خانوویی"
    },
    category: "commercial",
    image: "/images/Solar-2.jpeg",
    images: ["/images/Solar-1.jpeg", "/images/Solar-2.jpeg", "/images/Solar-3.jpeg"],
    description: {
      en: "Solar panel design and installation for government and residential sites.",
      ar: "تصميم وتركيب أنظمة الطاقة الشمسية للمواقع الحكومية والسكنية.",
      ku: "دیزاین و دانانی سیستەمەکانی پانێڵی خۆر بۆ شوێنە حکومی و خانوویی."
    },
    year: "2024",
    location: {
      en: "Solar Panel Systems – Government & Residential Sites, Iraq",
      ar: "أنظمة الطاقة الشمسية – مواقع حكومية وسكنية، العراق",
      ku: "سیستەمەکانی پانێڵی خۆر – شوێنە حکومی و خانوویی، عێراق"
    }
  },
  {
    id: 27,
    title: {
      en: "Al-Aliya District & Government Buildings",
      ar: "قضاء العاليا والمباني الحكومية",
      ku: "ناوچەی عالیه و بیناکانی حکومی"
    },
    category: "commercial",
    image: "/images/Solar-5.jpeg",
    images: ["/images/Solar-4.jpeg", "/images/Solar-5.jpeg", "/images/Solar-6.jpeg"],
    description: {
      en: "Solar and electrical systems for House of Representatives, Al-Nazaha, Army Club, Ministry of Defense.",
      ar: "تنفيذ الأنظمة الشمسية والكهربائية لمجلس النواب، النزاهة، نادي الجيش، ووزارة الدفاع.",
      ku: "دانانی سیستەمە خۆری و کارەبا بۆ پەرلەمان، نزاهە، یانەی سوپای و وەزارەتی بەرگری."
    },
    year: "2024",
    location: {
      en: "Al-Aliya District, House of Representatives, Al-Nazaha, Army Club, Ministry of Defense, Iraq",
      ar: "قضاء العاليا، مجلس النواب، النزاهة، نادي الجيش، وزارة الدفاع، العراق",
      ku: "ناوچەی عالیه، پەرلەمان، نزاهە، یانەی سوپای، وەزارەتی بەرگری، عێراق"
    }
  },
  {
    id: 28,
    title: {
      en: "Schools & Health Centers – Multiple Cities",
      ar: "المدارس والمراكز الصحية – عدة مدن",
      ku: "قوتابخانەکان و ناوەندە تەندروستییەکان – شارە جیاوازەکان"
    },
    category: "commercial",
    image: "/images/Solar-8.jpeg",
    images: ["/images/Solar-7.jpeg", "/images/Solar-8.jpeg", "/images/Solar-9.jpeg"],
    description: {
      en: "Electrical and solar installations for schools and health centers in Baghdad, Ramadi, Tikrit, Samarra, Abu Ghraib.",
      ar: "تنفيذ الأنظمة الكهربائية والطاقة الشمسية للمدارس والمراكز الصحية في بغداد، الرمادي، تكريت، سامراء، وأبو غريب.",
      ku: "دانانی سیستەمە کارەباییەکان و خۆری بۆ قوتابخانەکان و ناوەندە تەندروستییەکان لە بەغدا، ڕەمادی، تەکریت، سامەڕا و ئەبو غریب."
    },
    year: "2024",
    location: {
      en: "Schools & Health Centers – Baghdad, Ramadi, Tikrit, Samarra, Abu Ghraib, Iraq",
      ar: "المدارس والمراكز الصحية – بغداد، الرمادي، تكريت، سامراء، وأبو غريب، العراق",
      ku: "قوتابخانەکان و ناوەندە تەندروستییەکان – بەغدا، ڕەمادی، تەکریت، سامەڕا و ئەبو غریب، عێراق"
    }
  },
  {
    id: 29,
    title: {
      en: "Solar Projects – Schools and Health Centers",
      ar: "مشاريع الطاقة الشمسية – المدارس والمراكز الصحية",
      ku: "پڕۆژەکانی خۆر – قوتابخانەکان و ناوەندە تەندروستییەکان"
    },
    category: "commercial",
    image: "/images/Solar-11.jpeg",
    images: ["/images/Solar-10.jpeg", "/images/Solar-11.jpeg", "/images/Solar-12.jpeg"],
    description: {
      en: "Solar and electrical systems for primary and secondary schools and health centers across Iraq.",
      ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء للمدارس الابتدائية والثانوية والمراكز الصحية في جميع أنحاء العراق.",
      ku: "دانانی سیستەمە خۆری و کارەبا بۆ قوتابخانە سەرەتایی و ناوەندییەکان و ناوەندە تەندروستییەکان لە سەرانسەری عێراق."
    },
    year: "2024",
    location: {
      en: "Solar Projects – Primary & Secondary Schools and Health Centers Across Iraq",
      ar: "مشاريع الطاقة الشمسية – المدارس الابتدائية والثانوية والمراكز الصحية في العراق",
      ku: "پڕۆژەکانی خۆر – قوتابخانە سەرەتایی و ناوەندییەکان و ناوەندە تەندروستییەکان لە عێراق"
    }
  },
  {
    id: 30,
    title: { en: "Al-Mohebeen School", ar: "مدرسة الموهبين", ku: "قوتابخانەی موهیبین" },
    category: "commercial",
    image: "/images/Solar-13.jpeg",
    images: ["/images/Solar-13.jpeg","/images/Solar-14.jpeg","/images/Solar-15.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Ramadi, Iraq", ar: "الرمادي، العراق", ku: "ڕەمادی، عێراق" }
  },
  {
    id: 31,
    title: { en: "Outstanding Secondary School", ar: "ثانوية المتفوقين", ku: "قوتابخانەی سەرکەوتووان" },
    category: "commercial",
    image: "/images/Solar-16.jpeg",
    images: ["/images/Solar-16.jpeg","/images/Solar-17.jpeg","/images/Solar-18.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Ramadi, Iraq", ar: "الرمادي، العراق", ku: "ڕەمادی، عێراق" }
  },
  {
    id: 32,
    title: { en: "Al-Mutafawiqeen School", ar: "مدرسة المتفوقين", ku: "قوتابخانەی متفوقین" },
    category: "commercial",
    image: "/images/Solar-19.jpeg",
    images: ["/images/Solar-19.jpeg","/images/Solar-20.jpeg","/images/Solar-21.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025 ",
    location: { en: "Ramadi, Iraq", ar: "الرمادي، العراق", ku: "ڕەمادی، عێراق" }
  },
  {
    id: 33,
    title: { en: "Distinguished Girls School", ar: "مدرسة المتميزات", ku: "قوتابخانەی متمیزات" },
    category: "commercial",
    image: "/images/Solar-22.jpeg",
    images: ["/images/Solar-22.jpeg","/images/Solar-27.jpeg","/images/Solar-28.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Ramadi, Iraq", ar: "الرمادي، العراق", ku: "ڕەمادی، عێراق" }
  },
  {
    id: 34,
    title: { en: "Distinguished Boys Modern School", ar: "مدرسة المتميزين الحديثة", ku: "قوتابخانەی متمیزینی نوێ" },
    category: "commercial",
    image: "/images/Solar-25.jpeg",
    images: ["/images/Solar-25.jpeg","/images/Solar-26.jpeg","/images/Solar-27.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Haditha, Iraq", ar: "حديثة، العراق", ku: "حدیثە، عێراق" }
  },
  {
    id: 35,
    title: { en: "Healthcare Center", ar: "مركز الرعاية الصحية", ku: "ناوەندی تەندروستی" },
    category: "commercial",
    image: "/images/Solar-28.jpeg",
    images: ["/images/Solar-28.jpeg","/images/Solar-29.jpeg","/images/Solar-30.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Haditha, Iraq", ar: "حديثة، العراق", ku: "حدیثە، عێراق" }
  },
  {
    id: 36,
    title: { en: "Al-Mansour Primary School", ar: "مدرسة المنصور الابتدائية", ku: "قوتابخانەی سەرەتایی مەنسور" },
    category: "commercial",
    image: "/images/Solar-31.jpeg",
    images: ["/images/Solar-31.jpeg","/images/Solar-32.jpeg","/images/Solar-33.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 37,
    title: { en: "Abi Hanifa Al-Nu’man School", ar: "مدرسة أبي حنيفة النعمان", ku: "قوتابخانەی ئەبی حەنیفە النعمان" },
    category: "commercial",
    image: "/images/Solar-34.jpeg",
    images: ["/images/Solar-34.jpeg","/images/Solar-35.jpeg","/images/Solar-36.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 38,
    title: { en: "Khawla bint Hussein Primary School", ar: "مدرسة خولة بنت حسين الابتدائية", ku: "قوتابخانەی خەولە بنت حسین" },
    category: "commercial",
    image: "/images/Solar-37.jpeg",
    images: ["/images/Solar-37.jpeg","/images/Solar-38.jpeg","/images/Solar-39.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 39,
    title: { en: "Imam Ali School", ar: "مدرسة الإمام علي", ku: "قوتابخانەی ئیمام علی" },
    category: "commercial",
    image: "/images/Solar-40.jpeg",
    images: ["/images/Solar-40.jpeg","/images/Solar-41.jpeg","/images/Solar-42.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 40,
    title: { en: "Al-Adl Primary School", ar: "مدرسة العدل الابتدائية", ku: "قوتابخانەی سەرەتایی عەدل" },
    category: "commercial",
    image: "/images/Solar-43.jpeg",
    images: ["/images/Solar-43.jpeg","/images/Solar-44.jpeg","/images/Solar-45.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 41,
    title: { en: "Al-Jamia Primary School", ar: "مدرسة الجامعة الابتدائية", ku: "قوتابخانەی زانکۆ" },
    category: "commercial",
    image: "/images/Solar-46.jpeg",
    images: ["/images/Solar-46.jpeg","/images/Solar-47.jpeg","/images/Solar-48.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 42,
    title: { en: "Al-Siddiq Primary School", ar: "مدرسة الصديق الابتدائية", ku: "قوتابخانەی سەدیق" },
    category: "commercial",
    image: "/images/Solar-49.jpeg",
    images: ["/images/Solar-49.jpeg","/images/Solar-50.jpeg","/images/Solar-51.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 43,
    title: { en: "Outstanding Boys School", ar: "مدرسة المتفوقين للبنين", ku: "قوتابخانەی متفوقینی کوڕان" },
    category: "commercial",
    image: "/images/Solar-52.jpeg",
    images: ["/images/Solar-52.jpeg","/images/Solar-53.jpeg","/images/Solar-54.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Tikrit, Iraq", ar: "تكريت، العراق", ku: "تەکریت، عێراق" }
  },
  {
    id: 44,
    title: { en: "Outstanding Girls School", ar: "مدرسة المتفوقات للبنات", ku: "قوتابخانەی متفوقات" },
    category: "commercial",
    image: "/images/Solar-55.jpeg",
    images: ["/images/Solar-55.jpeg","/images/Solar-56.jpeg","/images/Solar-57.jpeg",],
    description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    year: "Oct 2025",
    location: { en: "Tikrit, Iraq", ar: "تكريت، العراق", ku: "تەکریت، عێراق" }
  },
{
  id: 45,
  title: { en: "Naseem Al-Ilm School", ar: "مدرسة نسائم العلم", ku: "قوتابخانەی نەسائیم العێلم" },
  category: "commercial",
  image: "/images/Solar-58.jpeg",
  images: ["/images/Solar-58.jpeg","/images/Solar-49.jpeg","/images/Solar-44.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Iraq", ar: "العراق", ku: "عێراق" }
},
{
  id: 46,
  title: { en: "Sharkad Health Center", ar: "مركز صحي شركاد", ku: "ناوەندی تەندروستی شارکاد" },
  category: "commercial",
  image: "/images/Solar-38.jpeg",
  images: ["/images/Solar-38.jpeg","/images/Solar-39.jpeg","/images/Solar-34.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Sharkad, Iraq", ar: "شركاد، العراق", ku: "شارکاد، عێراق" }
},
{
  id: 47,
  title: { en: "Al-Zuhur Secondary School", ar: "ثانوية الزهور", ku: "قوتابخانەی زهور" },
  category: "commercial",
  image: "/images/Solar-28.jpeg",
  images: ["/images/Solar-28.jpeg","/images/Solar-29.jpeg","/images/Solar-14.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Tikrit, Iraq", ar: "تكريت، العراق", ku: "تەکریت، عێراق" }
},
{
  id: 48,
  title: { en: "Ramadi School", ar: "مدرسة الرمادي", ku: "قوتابخانەی ڕەمادی" },
  category: "commercial",
  image: "/images/Solar-18.jpeg",
  images: ["/images/Solar-18.jpeg","/images/Solar-19.jpeg","/images/Solar-24.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Ramadi, Anbar, Iraq", ar: "الرمادي، الأنبار، العراق", ku: "ڕەمادی، ئەنبەر، عێراق" }
},
{
  id: 49,
  title: { en: "Al-Baroudi Girls Secondary School", ar: "ثانوية البارودي للبنات", ku: "قوتابخانەی بارودی بۆ کچان" },
  category: "commercial",
  image: "/images/Solar-8.jpeg",
  images: ["/images/Solar-8.jpeg","/images/Solar-9.jpeg","/images/Solar-4.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Tikrit, Iraq", ar: "تكريت، العراق", ku: "تەکریت، عێراق" }
},
{
  id: 50,
  title: { en: "Martyr Abdulkhaliq School", ar: "مدرسة الشهيد عبد الخالق", ku: "قوتابخانەی شەهید عبدالخالق" },
  category: "commercial",
  image: "/images/Solar-44.jpeg",
  images: ["/images/Solar-44.jpeg","/images/Solar-41.jpeg","/images/Solar-46.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Samarra, Iraq", ar: "سامراء، العراق", ku: "سەمەرا، عێراق" }
},
{
  id: 51,
  title: { en: "Nablus Primary School", ar: "مدرسة نابلس الابتدائية", ku: "قوتابخانەی نابلس" },
  category: "commercial",
  image: "/images/Solar-40.jpeg",
  images: ["/images/Solar-40.jpeg","/images/Solar-48.jpeg","/images/Solar-49.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Samarra, Iraq", ar: "سامراء، العراق", ku: "سەمەرا، عێراق" }
},
{
  id: 52,
  title: { en: "Salman Al-Muhammadi School", ar: "مدرسة سلمان المحمدي", ku: "قوتابخانەی سلمان المحمدی" },
  category: "commercial",
  image: "/images/Solar-50.jpeg",
  images: ["/images/Solar-50.jpeg","/images/Solar-58.jpeg","/images/Solar-29.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Abu Ghraib, Baghdad, Iraq", ar: "أبو غريب، بغداد، العراق", ku: "ئەبو غریب، بەغدا، عێراق" }
},
{
  id: 53,
  title: { en: "Al-Mansour Intermediate Boys School", ar: "متوسطة المنصور للبنين", ku: "قوتابخانەی ناوەندی مەنسور بۆ کوڕان" },
  category: "commercial",
  image: "/images/Solar-10.jpeg",
  images: ["/images/Solar-10.jpeg","/images/Solar-18.jpeg","/images/Solar-22.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 54,
  title: { en: "Al-Adnaniyah Primary School", ar: "مدرسة العدنانية الابتدائية", ku: "قوتابخانەی سەرەتایی عەدنانیە" },
  category: "commercial",
  image: "/images/Solar-3.jpeg",
  images: ["/images/Solar-2.jpeg","/images/Solar-4.jpeg","/images/Solar-5.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Abu Ghraib, Baghdad, Iraq", ar: "أبو غريب، بغداد، العراق", ku: "ئەبو غریب، بەغدا، عێراق" }
},
{
  id: 55,
  title: { en: "Arab Heritage Girls Secondary School", ar: "ثانوية التراث العربي للبنات", ku: "قوتابخانەی میراثی عەرەبی بۆ کچان" },
  category: "commercial",
  image: "/images/Solar-7.jpeg",
  images: ["/images/Solar-7.jpeg","/images/Solar-8.jpeg","/images/Solar-9.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 56,
  title: { en: "Al-Khulood Intermediate Boys School", ar: "متوسطة الخلود للبنين", ku: "قوتابخانەی ناوەندی خەلود بۆ کوڕان" },
  category: "commercial",
  image: "/images/Solar-15.jpeg",
  images: ["/images/Solar-11.jpeg","/images/Solar-15.jpeg","/images/Solar-17.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 57,
  title: { en: "Badr Al-Kubra Primary School", ar: "مدرسة بدر الكبرى الابتدائية", ku: "قوتابخانەی سەرەتایی بەدر الکبری" },
  category: "commercial",
  image: "/images/Solar-45.jpeg",
  images: ["/images/Solar-45.jpeg","/images/Solar-47.jpeg","/images/Solar-41.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 58,
  title: { en: "Al-Amal Primary School", ar: "مدرسة الأمل الابتدائية", ku: "قوتابخانەی سەرەتایی ئەمل" },
  category: "commercial",
  image: "/images/Solar-35.jpeg",
  images: ["/images/Solar-35.jpeg","/images/Solar-37.jpeg","/images/Solar-31.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 59,
  title: { en: "Dijla Intermediate Boys School", ar: "متوسطة دجلة للبنين", ku: "قوتابخانەی ناوەندی دجلە بۆ کوڕان" },
  category: "commercial",
  image: "/images/Solar-25.jpeg",
  images: ["/images/Solar-25.jpeg","/images/Solar-27.jpeg","/images/Solar-21.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 60,
  title: { en: "Algeria Primary School", ar: "مدرسة الجزائر الابتدائية", ku: "قوتابخانەی سەرەتایی جەزائیر" },
  category: "commercial",
  image: "/images/Solar-15.jpeg",
  images: ["/images/Solar-15.jpeg","/images/Solar-17.jpeg","/images/Solar-11.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 61,
  title: { en: "Excellence Girls Secondary School", ar: "ثانوية التفوق للبنات", ku: "قوتابخانەی تەفوق بۆ کچان" },
  category: "commercial",
  image: "/images/Solar-5.jpeg",
  images: ["/images/Solar-5.jpeg","/images/Solar-7.jpeg","/images/Solar-1.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 62,
  title: { en: "Jannat Al-Ma'wa Primary School", ar: "مدرسة جنة المأوى الابتدائية", ku: "قوتابخانەی سەرەتایی جەنەت المأوى" },
  category: "commercial",
  image: "/images/Solar-57.jpeg",
  images: ["/images/Solar-57.jpeg","/images/Solar-53.jpeg","/images/Solar-56.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Iraq", ar: "العراق", ku: "عێراق" }
},
{
  id: 63,
  title: { en: "Jardaghli Health Center", ar: "المركز الصحي جرداغلي", ku: "ناوەندی تەندروستی جەرداغلی" },
  category: "commercial",
  image: "/images/Solar-49.jpeg",
  images: ["/images/Solar-49.jpeg","/images/Solar-43.jpeg","/images/Solar-46.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Qazaduz, Iraq", ar: "قزدووز، العراق", ku: "قەزادووز، عێراق" }
},
{
  id: 64,
  title: { en: "Abu Ayyub Al-Ansari School", ar: "مدرسة أبو أيوب الأنصاري", ku: "قوتابخانەی ئەبو ئەیوب الأنصاری" },
  category: "commercial",
  image: "/images/Solar-39.jpeg",
  images: ["/images/Solar-39.jpeg","/images/Solar-33.jpeg","/images/Solar-36.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Jan 2026",
  location: { en: "Iraq", ar: "العراق", ku: "عێراق" }
},
{
  id: 65,
  title: { en: "Al-Aliyah District", ar: "قضاء العالية", ku: "ناوچەی عالیە" },
  category: "commercial",
  image: "/images/Solar-29.jpeg",
  images: ["/images/Solar-29.jpeg","/images/Solar-23.jpeg","/images/Solar-26.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Al-Aliyah, Iraq", ar: "العالية، العراق", ku: "عالیە، عێراق" }
},
{
  id: 66,
  title: { en: "Council of Representatives", ar: "مجلس النواب", ku: "ئەنجومەنی نوێنەران" },
  category: "commercial",
  image: "/images/Solar-19.jpeg",
  images: ["/images/Solar-19.jpeg","/images/Solar-13.jpeg","/images/Solar-16.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 67,
  title: { en: "Integrity Commission", ar: "هيئة النزاهة", ku: "دەزگای نزاهە" },
  category: "commercial",
  image: "/images/Solar-9.jpeg",
  images: ["/images/Solar-9.jpeg","/images/Solar-3.jpeg","/images/Solar-6.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 68,
  title: { en: "IT Equipment Department", ar: "قسم الحاسبات", ku: "بەشی هەژمارکەرەکان" },
  category: "commercial",
  image: "/images/Solar-50.jpeg",
  images: ["/images/Solar-50.jpeg","/images/Solar-52.jpeg","/images/Solar-53.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
{
  id: 69,
  title: { en: "Army Club", ar: "نادي الجيش", ku: "یانەی سوپا" },
  category: "commercial",
  image: "/images/Solar-40.jpeg",
  images: ["/images/Solar-40.jpeg","/images/Solar-42.jpeg","/images/Solar-43.jpeg"],
    description: {
    en: "Execution of solar and electrical systems including energy generation, internal wiring, lighting, safety grounding, and backup power solutions for the health center.",
    ar: "تنفيذ أنظمة الطاقة الشمسية والكهرباء بما يشمل التوليد، التمديدات الداخلية، الإنارة، التأريض وأنظمة الطاقة الاحتياطية للمركز الصحي.",
    ku: "جێبەجێکردنی سیستەمە خۆری و کارەباییەکان لەگەڵ وایەرینگ، ڕووناکی، ئەرثینگ و هێزی پاڵپشتی بۆ ناوەندی تەندروستی."
  },
  year: "Oct 2025",
  location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
},
  {
    id: 70,
    title: { en: "Drug Control Directorate", ar: "مديرية مكافحة المخدرات", ku: "بەڕێوەبەرایەتی دژە مادە هۆشبرەکان" },
    category: "commercial",
    image: "/images/Solar-30.jpeg",
    images: ["/images/Solar-30.jpeg","/images/Solar-32.jpeg","/images/Solar-33.jpeg"],
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 71,
    title: { en: "Ministry of Defense", ar: "وزارة الدفاع", ku: "وەزارەتی بەرگری" },
    category: "commercial",
    image: "/images/Solar-20.jpeg",
    images: ["/images/Solar-20.jpeg","/images/Solar-22.jpeg","/images/Solar-23.jpeg"],
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 72,
    title: { en: "General Secretariat", ar: "الأمانة العامة", ku: "سکریتاریای گشتی" },
    category: "commercial",
    image: "/images/Solar-10.jpeg",
    images: ["/images/Solar-10.jpeg","/images/Solar-12.jpeg","/images/Solar-13.jpeg"],
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 73,
    title: { en: "IT Equipment Department", ar: "قسم الحاسبات", ku: "بەشی هەژمارکەرەکان" },
    category: "commercial",
    image: "/images/Solar-3.jpeg",
    images: ["/images/Solar-3.jpeg","/images/Solar-8.jpeg","/images/Solar-9.jpeg"],
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 74,
    title: { en: "Army Club & Military Facilities", ar: "نادي الجيش والمنشآت العسكرية", ku: "یانەی سوپا و دامەزراوە سەربازییەکان" },
    category: "commercial",
    image: "/images/Solar-1.jpeg",
    images: ["/images/Solar-1.jpeg","/images/Solar-6.jpeg","/images/Solar-7.jpeg"],
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    year: "Oct 2025",
    location: { en: "Baghdad, Iraq", ar: "بغداد، العراق", ku: "بەغدا، عێراق" }
  },
  {
    id: 75,
    title: { en: "South Office – Darwaza City", ar: "مكتب الجنوب – مدينة دروازه", ku: "ئۆفیسی باشوور – شاری دروازە" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/SouthOffice-1.jpeg",
    images: ["/images/SouthOffice-1.jpeg","/images/SouthOffice-2.jpeg","/images/SouthOffice-3.jpeg","/images/SouthOffice-4.jpeg","/images/SouthOffice-5.jpeg","/images/SouthOffice-6.jpeg","/images/SouthOffice-7.jpeg","/images/SouthOffice-8.jpeg","/images/SouthOffice-9.jpeg","/images/SouthOffice-10.jpeg","/images/SouthOffice-11.jpeg"],
    location: { en: "Darwaza City, Iraq", ar: "مدينة دروازه، العراق", ku: "شاری دروازە، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 76,
    title: { en: "Darwaza Corniche", ar: "كورنيش دروازه", ku: "کۆرنیچی دروازە" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/Chk-9.jpg",
    images: ["/images/Chk-9.jpg"],
    location: { en: "Darwaza City, Iraq", ar: "مدينة دروازه، العراق", ku: "شاری دروازە، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 77,
    title: { en: "Zhin Center", ar: "مركز ژين", ku: "ناوەندی ژین" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/Chk-10.jpg",
    images: ["/images/Chk-10.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 80,
    title: { en: "Children's Guardians' Home", ar: "دار رعاية الأطفال", ku: "ماڵی چاودێری منداڵان" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/Chk-11.jpg",
    images: ["/images/Chk-11.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 81,
    title: { en: "Sitak House", ar: "بيت سيتاك", ku: "ماڵی سیتاک" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "residential",
    image: "/images/Chk-3.jpg",
    images: ["/images/Chk-3.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 82,
    title: { en: "Healing Center", ar: "مركز الشفاء", ku: "ناوەندی چاکبوون" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/Healing-1.jpg",
    images: ["/images/Healing-1.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 83,
    title: { en: "Nali Building", ar: "بناية نالي", ku: "بینای نالی" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/Nali-1.jpg",
    images: ["/images/Nali-1.jpg","/images/Nali-2.jpg","/images/Nali-3.jpg","/images/Nali-4.jpg","/images/Nali-5.jpg","/images/Nali-6.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 84,
    title: { en: "Private Villa – Qularaysi (65,000 m², Chwargosha)", ar: "فيلا خاصة – قلاريسي (65000 م²، چوارگوشه)", ku: "ڤێلای تایبەتی – قلارێسی (٦٥٬٠٠٠ م²، چوارگۆشە)" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "residential",
    image: "/images/QulaRaisi-1.jpg",
    images: ["/images/QulaRaisi-1.jpg","/images/QulaRaisi-2.jpg","/images/QulaRaisi-3.jpg","/images/QulaRaisi-4.jpg","/images/QulaRaisi-5.jpg","/images/QulaRaisi-6.jpg","/images/QulaRaisi-7.jpg","/images/QulaRaisi-8.jpg","/images/QulaRaisi-9.jpg","/images/QulaRaisi-10.jpg","/images/QulaRaisi-11.jpg","/images/QulaRaisi-12.jpg","/images/QulaRaisi-13.jpg"],
    location: { en: "Qularaysi, Chwargosha, Iraq", ar: "قلاريسي، چوارگوشه، العراق", ku: "قلارێسی، چوارگۆشە، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 85,
    title: { en: "Swat", ar: "ئۆپراسیۆن", ku: "ئۆپراسیۆن" },
        description: {
        en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
        ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
        ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
      },
    category: "commercial",
    image: "/images/swat-1.jpg",
    images: ["/images/swat-1.jpg","/images/swat-2.jpg","/images/swat-3.jpg","/images/swat-4.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 86,
    title: { en: "K9 Building", ar: "مبنى K9", ku: "بینای K9" },
      description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "industrial",
    image: "/images/Chk-2.jpg",
    images: ["/images/Chk-2.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 87,
    title: { en: "Town House – Garden City", ar: "تاون هاوس – جاردن سيتي", ku: "تاون هاوس – گاردن سیتی" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/TownHouse-2.jpg",
    images: ["/images/TownHouse-1.jpg","/images/TownHouse-2.jpg"],
    location: { en: "Garden City, Iraq", ar: "جاردن سيتي، العراق", ku: "گاردن سیتی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 88,
    title: { en: "A82 – Garden City", ar: "A82 – جاردن سيتي", ku: "A82 – گاردن سیتی" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Garden-1.jpg",
    images: ["/images/Garden-1.jpg","/images/Garden-2.jpg"],
    location: { en: "Garden City, Iraq", ar: "جاردن سيتي، العراق", ku: "گاردن سیتی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 89,
    title: { en: "ABC Tower", ar: "برج ABC", ku: "تاوەری ABC" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "commercial",
    image: "/images/ABC-1.jpeg",
    images: ["/images/ABC-1.jpeg","/images/ABC-2.jpeg","/images/ABC-3.jpeg","/images/ABC-4.jpeg","/images/ABC-5.jpeg","/images/ABC-6.jpeg","/images/ABC-7.jpeg","/images/ABC-8.jpeg","/images/ABC-9.jpeg","/images/ABC-10.jpeg","/images/ABC-11.jpeg","/images/ABC-12.jpeg","/images/ABC-13.jpeg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 90,
    title: { en: "Polytechnic University in Sulaimaniyah", ar: "الجامعة التقنية في السليمانية", ku: "زانکۆی تەکنیکی سلێمانی" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "commercial",
    image: "/images/Spu-1.jpg",
    images: ["/images/Spu-1.jpg","/images/Spu-2.jpg","/images/Spu-3.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 91,
    title: { en: "Snawbar City", ar: "مدينة صنوبر", ku: "شاری سنەوبەر" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Snawbar-1.jpeg",
    images: ["/images/Snawbar-1.jpeg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 92,
    title: { en: "Imperial City", ar: "المدينة الإمبراطورية", ku: "شاری ئیمپراتۆری" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Imp-1.jpg",
    images: ["/images/Imp-1.jpg","/images/Imp-2.jpg"],
    location: { en: "Sulaimaniyah, Iraq", ar: "السليمانية، العراق", ku: "سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 93,
    title: { en: "Private House – Kani Bardina", ar: "بيت خاص – كاني بردينا", ku: "ماڵی تایبەتی – کانی بردینە" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Bard-1.jpg",
    images: ["/images/Bard-1.jpg","/images/Bard-2.jpg","/images/Bard-3.jpg"],
    location: { en: "Kani Bardina, Iraq", ar: "كاني بردينا، العراق", ku: "کانی بردینە، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 94,
    title: { en: "+80 Villas – Sulaimani Heights", ar: "+80 فيلا – مرتفعات السليمانية", ku: "+80 ڤێلا – بەرزایی سلێمانی" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/barzayakan-1.jpg",
    images: ["/images/barzayakan-1.jpg","/images/barzayakan-2.jpg","/images/barzayakan-3.jpg","/images/barzayakan-4.jpg","/images/barzayakan-5.jpg","/images/barzayakan-6.jpg","/images/barzayakan-7.jpg","/images/barzayakan-8.jpg","/images/barzayakan-9.jpg","/images/barzayakan-10.jpg","/images/barzayakan-11.jpg","/images/barzayakan-12.jpg","/images/barzayakan-13.jpg","/images/barzayakan-14.jpg","/images/barzayakan-15.jpg","/images/barzayakan-16.jpg","/images/barzayakan-17.jpg","/images/barzayakan-18.jpg","/images/barzayakan-19.jpg"],
    location: { en: "Sulaimani Heights, Iraq", ar: "مرتفعات السليمانية، العراق", ku: "بەرزایی سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 95,
    title: { en: "Intelligence Agency – 4 Departments", ar: "جهاز الاستخبارات – 4 أقسام", ku: "دەزگای زانیاری – ٤ بەش" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "industrial",
    image: "/images/Agency-1.jpg",
    images: ["/images/Agency-1.jpg","/images/Agency-2.jpg","/images/Agency-3.jpg","/images/Agency-4.jpg"],
    location: { en: "Iraq", ar: "العراق", ku: "عێراق" },
    year: "Oct 2025"
  },
  {
    id: 96,
    title: { en: "Private House – New Chwar Chra City", ar: "بيت خاص – مدينة چوارچرا الجديدة", ku: "ماڵی تایبەتی – شاری نوێی چوارچرا" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/ChwarChra-1.jpg",
    images: ["/images/ChwarChra-1.jpg","/images/ChwarChra-2.jpg"],
    location: { en: "New Chwar Chra City, Iraq", ar: "مدينة چوارچرا الجديدة، العراق", ku: "شاری نوێی چوارچرا، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 97,
    title: { en: "Private Villa – Mergapan", ar: "فيلا خاصة – ميرگابان", ku: "ڤێلای تایبەتی – مێرگاپان" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Mergapan-1.jpg",
    images: ["/images/Mergapan-1.jpg","/images/Mergapan-2.jpg"],
    location: { en: "Mergapan, Iraq", ar: "ميرگابان، العراق", ku: "مێرگاپان، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 98,
    title: { en: "Kalawanan Checkpoint", ar: "سيطرة كلاونان", ku: "کۆنتڕۆڵی کلاونان" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "industrial",
    image: "/images/Chk-2.jpg",
    images: ["/images/Chk-2.jpg"],
    location: { en: "Kalawanan, Iraq", ar: "كلاونان، العراق", ku: "کلاونان، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 99,
    title: { en: "Mondi Factory – Bazyan", ar: "مصنع موندي – بازيان", ku: "کارگەی مۆندی – بازیان" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "industrial",
    image: "/images/Mondi-1.jpg",
    images: ["/images/Mondi-1.jpg","/images/Mondi-2.jpg","/images/Mondi-3.jpg"],
    location: { en: "Bazyan, Sulaimaniyah, Iraq", ar: "بازيان، السليمانية، العراق", ku: "بازيان، سلێمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 100,
    title: { en: "Commando Buildings – Bazyan, Koya & Ranya", ar: "مباني الكوماندو – بازيان، كويا ورانية", ku: "بیناکانی کۆماندۆ – بازیان، کۆیا و ڕانیا" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "industrial",
    image: "/images/Chk-1.jpg",
    images: ["/images/Chk-1.jpg"],
    location: { en: "Bazyan, Koya & Ranya, Iraq", ar: "بازيان، كويا ورانية، العراق", ku: "بازيان، کۆیا و ڕانیا، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 101,
    title: { en: "German Village B40 – Smart House", ar: "القرية الألمانية B40 – منزل ذكي", ku: "گوندی ئەڵمانی B40 – ماڵی زیرەک" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Chk-8.jpg",
    images: ["/images/Chk-8.jpg"],
    location: { en: "German Village, Iraq", ar: "القرية الألمانية، العراق", ku: "گوندی ئەڵمانی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 102,
    title: { en: "Hayat City – Qularaysi", ar: "مدينة حياة – قلاريسي", ku: "شاری حیات – قلارێسی" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Hayat-1.jpg",
    images: ["/images/Hayat-1.jpg","/images/Hayat-2.jpg","/images/Hayat-3.jpg","/images/Hayat-4.jpg","/images/Hayat-5.jpg","/images/Hayat-6.jpg","/images/Hayat-7.jpg"],
    location: { en: "Qularaysi, Iraq", ar: "قلاريسي، العراق", ku: "قلارێسی، عێراق" },
    year: "Oct 2025"
  },
  {
    id: 103,
    title: { en: "Espresso", ar: "ئیسبریسو", ku: "ئیسبریسو لاب" },
        description: {
      en: "Executed full site preparation including surveys, surface cutting and treatment, and pre-cast base installation. Installed complete electrical infrastructure such as PV panels, cable trays, DC boards, and AC distribution boards with professional wiring. Implemented lightning protection and earthing systems to ensure safety. Configured battery banks, inverters, and CCTV monitoring for control rooms, followed by final testing, commissioning, and system startup.",
      ar: "تنفيذ أعمال تهيئة الموقع بالكامل بما يشمل المسوحات، أعمال القطع والمعالجة، وتركيب القواعد الجاهزة. تركيب الأنظمة الكهربائية الكاملة مثل الألواح الشمسية، مسارات الكابلات، لوحات التيار المستمر والمتناوب بأسلاك احترافية. تنفيذ أنظمة الحماية من الصواعق والتأريض لضمان السلامة. إعداد بطاريات التخزين، أنظمة العاكس، ومراقبة الكاميرات لغرف التحكم، مع إجراء الفحص النهائي والتشغيل.",
      ku: "تەواوی کاری ئامادەکردنی شوێن جێبەجێکرا لەگەڵ پێوانەکردن، بڕین و چارەسەری سەرەکی و دانانی بنکەی پێش دروستکراو. دامەزراندنی تەواوی سیستەمی کارەبایی وەک پانێڵی خۆر، کەیبڵ ترەی، بۆردی DC و AC بە وایەری پیشەیی. جێبەجێکردنی سیستەمی پاراستن لە تیشکی ئاسمانی و ئەرثینگ بۆ دڵنیایی سەلامەتی. ڕێکخستنی باتەری بانک، ئۆڤێرتەر و سیستەمی CCTV بۆ ژووری کۆنترۆڵ، پاشان تاقیکردنەوە و کارپێکردن."
    },
    category: "residential",
    image: "/images/Ecp-11.jpg",
    images: ["/images/Ecp-1.jpg","/images/Ecp-2.jpg","/images/Ecp-3.jpg","/images/Ecp-4.jpg","/images/Ecp-5.jpg","/images/Ecp-6.jpg","/images/Ecp-7.jpg","/images/Ecp-8.jpg","/images/Ecp-9.jpg","/images/Ecp-10.jpg","/images/Ecp-11.jpg","/images/Ecp-12.jpg","/images/Ecp-13.jpg"],
    location: { en: "slemani gardn avino, Iraq", ar: "سلێمانی گاردن ئافینۆ، عێراق", ku: "سلێمانی گاردن ئافینۆ، عێراق" },
    year: "Oct 2025"
  },

];

// Helper
export const getProjectById = (id: number) =>
  projects.find((p) => p.id === id);
