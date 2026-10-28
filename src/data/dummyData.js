// ==============================================================================
// DUMMY DATA FOR CLIENT ENTERTAINMENT PLATFORM
// Professional, comprehensive mock data mirroring all original capabilities
// ==============================================================================

export const companyInfo = {
  name: "Lumina Entertainments",
  shortName: "Lumina",
  tagline: "Creating Extraordinary Moments with Precision & Grandeur",
  subTagline: "Premier Event Management, Live Stage Concerts, Celebrity Connects & Immersive Production",
  foundedYear: 2018,
  yearsOfExperience: 8,
  phone: "+91 98421 87654",
  phoneFormatted: "+91 98421 87654",
  whatsapp: "+919842187654",
  whatsappMessage: "Hello Lumina Entertainments! I would like to inquire about organizing an event.",
  email: "hello@luminaentertainments.com",
  inquiryEmail: "bookings@luminaentertainments.com",
  address: "Apex Grand Plaza, 4th Floor, Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  workingHours: "Monday – Saturday: 9:00 AM – 7:30 PM",
  developerCredit: "Powered by: Mist Solutions",
  copyright: `Copyright © ${new Date().getFullYear()} All Rights Reserved by Lumina Entertainments.`,
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    whatsapp: "https://wa.me/919842187654"
  }
};

// High quality curated video & media assets (Local zero-latency assets with CDN fallbacks)
export const dummyMedia = {
  heroVideo: "/videos/hero-loop.mp4",
  heroVideoFallback: "/videos/hero-video.mp4",
  heroVideoCDN: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  heroPoster: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
  aboutImage1: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  aboutImage2: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80"
};

export const services = [
  {
    id: "concerts",
    slug: "concerts",
    title: "Mega Concerts & Music Festivals",
    shortDesc: "End-to-end management of stadium-scale live music concerts, playback singer shows, devotional nights, and talent showcases.",
    fullDesc: "We bring amphitheaters and stadium grounds to life with world-class acoustic engineering, mammoth trussing, synchronized pyrotechnics, and seamless artist hospitality. From classical and devotional evenings to electric pop-rock live tours, our production teams manage every decimal of sound and lux of light.",
    icon: "FaMusic",
    badge: "Crowd Puller",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Concert-grade Line-Array Audio & Digital Mixing Consoles",
      "Massive LED Wall backdrops with customized 3D visuals",
      "Full artist logistics, green room management & riders",
      "Crowd control barriers, fire safety, and municipal clearances",
      "Pyrotechnics, cold sparks, and stadium confetti cannons"
    ],
    amenities: ["Artist Liaison", "Venue Acoustics", "Ticketing Support", "Live Multi-Cam Broadcast"]
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events & Brand Launches",
    shortDesc: "High-impact brand experiences, international dealer meets, annual award galas, and VIP executive conclaves.",
    fullDesc: "Elevate your corporate stature with immaculate execution. We transform formal gatherings into inspiring spectacles. Whether launching a flagship product, inaugurating state-of-the-art facilities, or hosting an annual awards night, we balance elegance, technology, and branding to leave lasting impressions on stakeholders.",
    icon: "FaBriefcase",
    badge: "Business Class",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Sleek architectural stage designs with acrylic & LED accents",
      "Keynote presentation setups with teleprompters & seamless switching",
      "Bespoke product reveal mechanisms with laser unveiling",
      "Gourmet catering coordination and executive VIP seating",
      "End-to-end delegate registration and RFID badges"
    ],
    amenities: ["Live Webcasting", "Media & Press Kit", "Corporate Gifting", "Emcee Management"]
  },
  {
    id: "college-events",
    slug: "college-events",
    title: "College Fests & Youth Carnivals",
    shortDesc: "Vibrant, electric campus festivals, inter-collegiate cultural fests, star nights, and battle of the bands.",
    fullDesc: "Youth energy requires bold imagination and airtight security. We curate heart-pounding college cultural fests featuring trending singers, hip-hop crews, dance battles, and fashion runway stages. We make university festivals the most anticipated date on the academic calendar.",
    icon: "FaGraduationCap",
    badge: "High Energy",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Celebrity and Indie band bookings popular with youth",
      "Electrifying sound systems with deep sub-bass frequencies",
      "Campus stage rigs, dynamic moving heads and laser rigs",
      "Student committee coordination and crowd management protocols",
      "Food truck alleys and experiential gaming zones"
    ],
    amenities: ["Security & Barricading", "First Aid Rigs", "Campus PR & Social Buzz", "DJ After-party"]
  },
  {
    id: "dj-events",
    slug: "dj-events",
    title: "Club Nights & High-Voltage DJ Events",
    shortDesc: "Electrifying nightlife events with international DJ mixing consoles, LED dance floors, thunder-bass audio, and visual effects.",
    fullDesc: "Turn any venue into an unforgettable sonic paradise. Our DJ productions feature thunderous subwoofers that you feel in your chest, computerized beam and strobe lighting, interactive LED dancefloors, atmospheric smoke, and professional hype dancers.",
    icon: "FaCompactDisc",
    badge: "Bass Driven",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Industry-standard Pioneer CDJ-3000 & DJM consoles",
      "Interactive LED dancefloors and curved visual walls",
      "CO2 cryo-jets, fire flamethrowers, and laser light arrays",
      "Professional club choreographers and fire dancers",
      "Specialized ambient uplighting and neon accents"
    ],
    amenities: ["Resident & Guest DJs", "Bar & Mixology Setup", "Soundproofing Layout", "VIP Lounge Pods"]
  },
  {
    id: "special-occasions",
    slug: "special-occasions",
    title: "Grand Weddings & Milestone Occasions",
    shortDesc: "Lavish weddings, theme receptions, reality show styled talent nights, anniversaries, and sacred ceremonies.",
    fullDesc: "Every milestone deserves royal treatment. We weave emotional resonance with luxury craftsmanship. From dreamlike floral mandaps and royal sangeet stages with television-grade dance choreography to intimate devotional vocal recitals, our team curates lifetime celebrations with love and finesse.",
    icon: "FaGlassCheers",
    badge: "Royalty & Glamour",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Custom royal stage architecture and floral scapes",
      "Sangeet productions formatted like reality TV competitions",
      "Devotional musical ensembles & spiritual concerts",
      "Cinematic 4K drone cinematography and wedding documentary",
      "Grand bride & groom entry concepts (pyro tunnel, chariot, aerial)"
    ],
    amenities: ["Theme Styling", "Celebrity Emcees", "Catering Consulting", "Hospitality Desk"]
  },
  {
    id: "celebrity-connects",
    slug: "celebrity-connects",
    title: "Celebrity Connects & Artist Management",
    shortDesc: "Direct access to top cinema stars, playback vocalists, reality TV champions, sports icons, and digital influencers.",
    fullDesc: "Harness star power to skyrocket your brand visibility and event pull. With direct relationships across South Indian cinema, national film industries, music directors, and viral creators, we guarantee genuine artist contracts, airtight security, VIP coordination, and unforgettable appearances.",
    icon: "FaStar",
    badge: "Star Power",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Inaugurations, ribbon-cutting ceremonies & grand store openings",
      "Live star performances (Super Singer & reality show stars)",
      "Brand endorsements, promotional meet-and-greets & photo-ops",
      "Executive convoy security, bouncers & backstage isolation",
      "Strict legal contracting, payment escrow, and timeline commitments"
    ],
    amenities: ["VIP Escort", "Press Meet Protocol", "Security Detail", "Luxury Stays & Flights"]
  }
];

export const stats = [
  {
    id: 1,
    value: 8,
    suffix: "+",
    label: "Years of Excellence",
    description: "Industry veterans delivering flawless entertainment"
  },
  {
    id: 2,
    value: 250,
    suffix: "+",
    label: "Mega Concerts",
    description: "Packed stadiums with stellar acoustic production"
  },
  {
    id: 3,
    value: 180,
    suffix: "+",
    label: "Corporate Galas",
    description: "Flawless executions for leading enterprise brands"
  },
  {
    id: 4,
    value: 120,
    suffix: "+",
    label: "High-Octane DJ Nights",
    description: "Electrifying nightlife events with thunder-bass audio"
  }
];

export const galleryItems = [
  {
    id: 1,
    title: "Symphony Under the Stars",
    subtitle: "Coimbatore Mega Musical Night",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80",
    tags: ["Live Band", "Line Array", "Stadium"]
  },
  {
    id: 2,
    title: "Apex Tech Summit Gala",
    subtitle: "Annual Corporate Awards Night",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80",
    tags: ["Keynote", "Product Launch", "Gala"]
  },
  {
    id: 3,
    title: "Neon Pulse Festival",
    subtitle: "Electronic Dance Music Night",
    category: "DJ Nights",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    tags: ["LED Wall", "Laser Show", "Bass Night"]
  },
  {
    id: 4,
    title: "The Royal Heritage Wedding",
    subtitle: "Grand Floral Sangeet Production",
    category: "Special Occasions",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    tags: ["Royal Sangeet", "Floral Mandap", "Choreography"]
  },
  {
    id: 5,
    title: "Star Ribbon Cutting",
    subtitle: "Celebrity Flagship Showroom Opening",
    category: "Celebrity Connects",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
    tags: ["Chief Guest", "Red Carpet", "Fan Gathering"]
  },
  {
    id: 6,
    title: "Campus Euphoria '26",
    subtitle: "State Inter-College Youth Carnival",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80",
    tags: ["College Fest", "Star Singer", "Rock Show"]
  },
  {
    id: 7,
    title: "Automotive Reveal Stage",
    subtitle: "Luxury Vehicle National Launch",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    tags: ["Reveal", "Pyrotechnics", "3D Mapping"]
  },
  {
    id: 8,
    title: "Sunset Bass Beach Bash",
    subtitle: "Open Air DJ Showcase",
    category: "DJ Nights",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1000&q=80",
    tags: ["Open Air", "Summer Beats", "CO2 Blasts"]
  },
  {
    id: 9,
    title: "Golden Jubilee Celebration",
    subtitle: "50th Milestone Anniversary Gala",
    category: "Special Occasions",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80",
    tags: ["Milestone", "Orchestra", "Fine Dining"]
  },
  {
    id: 10,
    title: "Cinema Icon Meet & Greet",
    subtitle: "Film Audio Launch Promotion",
    category: "Celebrity Connects",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1000&q=80",
    tags: ["Audio Launch", "VIP Security", "Press Meet"]
  },
  {
    id: 11,
    title: "Devotional Choral Evening",
    subtitle: "Spiritual Harmony Live Concert",
    category: "Concerts",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80",
    tags: ["Devotional", "Traditional", "Acoustics"]
  },
  {
    id: 12,
    title: "Midnight Laser Rave",
    subtitle: "Indoor Electronic Arena",
    category: "DJ Nights",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80",
    tags: ["Lasers", "Heavy Bass", "LED Dance Floor"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Nandha Kumar",
    role: "Corporate Client",
    rating: 5,
    text: "Lumina made our corporate event a roaring success. The attention to detail in their arrangements was impeccable. Highly recommend their services!"
  },
  {
    id: 2,
    name: "Dhivakar",
    role: "Concert Organizer",
    rating: 5,
    text: "I can't thank Lumina enough for the stunning stage setup at our concert. It was beyond our expectations. Truly professional in event arrangements."
  },
  {
    id: 3,
    name: "Gowtham",
    role: "College Fest Coordinator",
    rating: 5,
    text: "Our college event was a hit, thanks to Lumina! Their innovative ideas and flawless arrangements added the perfect touch of magic."
  },
  {
    id: 4,
    name: "Kishore",
    role: "Brand Marketing Lead",
    rating: 5,
    text: "Lumina exceeded our expectations at our product launch! Their attention to detail and expert arrangements created an unforgettable event."
  },
  {
    id: 5,
    name: "Priya",
    role: "Wedding Client",
    rating: 5,
    text: "Lumina turned our special occasion into a fairytale. The decor and arrangements were breathtaking. They exceeded our dreams."
  },
  {
    id: 6,
    name: "Nandhini",
    role: "Nightlife Host",
    rating: 5,
    text: "Lumina's DJ night arrangements were mind-blowing. The lighting and music created an electrifying atmosphere that kept everyone dancing all night!"
  },
  {
    id: 7,
    name: "Rahul",
    role: "Private Host",
    rating: 5,
    text: "They made our wedding day truly magical. The stage and decor arrangements were elegant and captured the essence of our love story."
  },
  {
    id: 8,
    name: "Ganesh",
    role: "Enterprise HR Director",
    rating: 5,
    text: "Lumina handled our corporate awards ceremony flawlessly. The stage setup, audiovisuals, and seating arrangements were top-notch."
  },
  {
    id: 9,
    name: "Suresh",
    role: "Commercial Property Lead",
    rating: 5,
    text: "We couldn't have asked for a better mall promotion event. Lumina's arrangements and engaging activities drew a massive crowd!"
  },
  {
    id: 10,
    name: "Ravi Kumar",
    role: "Retail Showroom Owner",
    rating: 5,
    text: "The celebrity connect arranged by Lumina was a showstopper! Having a star at our shop opening event was a game-changer. Thank you!"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Ashik Ali",
    role: "MANAGING DIRECTOR",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Arun Kumar",
    role: "PRODUCTION DIRECTOR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Pooja Hegde",
    role: "CELEBRITY RELATIONS HEAD",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
  }
];

export const upcomingEvents = [
  {
    id: "e1",
    title: "Summer Beat Sonic Fest 2026",
    category: "Concerts",
    date: "Nov 28, 2026",
    time: "6:30 PM Onwards",
    venue: "VOC Park Grounds, Coimbatore",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    description: "Featuring 4 premier playback bands, international DJ sets, and immersive 360-degree laser mapping."
  },
  {
    id: "e2",
    title: "National Retail Leadership Conclave",
    category: "Corporate",
    date: "Dec 12, 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Radisson Blu Grand Ballroom",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    description: "Annual meeting of 500+ enterprise leaders, keynote addresses, product demonstrations and awards banquet."
  },
  {
    id: "e3",
    title: "Electro Carnival 3.0",
    category: "DJ Nights",
    date: "Dec 31, 2026",
    time: "8:00 PM – Late",
    venue: "The Palms Arena, Pollachi Road",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    status: "Upcoming",
    description: "The biggest New Year's Eve dance experience with top charting DJs, LED walls, and pyro midnight countdown."
  }
];

export const faqs = [
  {
    q: "How far in advance should we book your event services?",
    a: "For large-scale concerts, celebrity appearances, and high-profile weddings, we advise booking 4 to 8 weeks in advance to ensure artist availability, venue reservations, and regulatory permissions. For corporate events, 2 to 3 weeks is typically sufficient."
  },
  {
    q: "Do you manage celebrity logistics and regulatory permissions?",
    a: "Yes, completely! We handle the complete chain of celebrity management — including contracts, travel, five-star hospitality, green room setup, and personal security. We also assist in securing necessary municipal, police, and sound permits."
  },
  {
    q: "Can you provide customized technical setups (LED screens, sound, lighting)?",
    a: "Absolutely. We own and collaborate with leading audiovisual inventories featuring concert-grade line arrays, 4K P2/P3 LED walls, intelligent moving head beams, haze machines, and custom laser rigs tailored to the venue dimensions."
  },
  {
    q: "Do you handle events outside of Coimbatore?",
    a: "Yes! While our headquarters is based in Coimbatore, we regularly produce concerts, corporate fests, and destination weddings across Chennai, Bangalore, Kochi, Madurai, Tirupur, and throughout South India."
  }
];

