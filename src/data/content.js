// High quality curated, reliable editorial photography data for weddings, corporate, festivals, birthdays, and AI demos
export const samplePhotos = {
  hero: [
    {
      id: 'h1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
      title: 'Royal Destination Wedding',
      photographer: 'Aarav Mehta Studios',
      tag: 'Wedding'
    },
    {
      id: 'h2',
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=85',
      title: 'Sangeet Night Ecstasy',
      photographer: 'Lumina Lens',
      tag: 'Celebration'
    },
    {
      id: 'h3',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=85',
      title: 'Tech Summit Keynote 2026',
      photographer: 'Summit Media',
      tag: 'Corporate'
    },
    {
      id: 'h4',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=85',
      title: 'Golden Hour Bridal Portrait',
      photographer: 'Kavita Sen Photography',
      tag: 'Portrait'
    }
  ],
  gallery: [
    {
      id: 'g1',
      category: 'Weddings',
      title: 'Mehendi & Floral Vows',
      location: 'Udaipur Palace',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85',
      aspect: 'tall',
      matches: 48,
      views: '1.2k'
    },
    {
      id: 'g2',
      category: 'Weddings',
      title: 'The Grand Garland Exchange',
      location: 'Jaipur Heritage',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
      aspect: 'wide',
      matches: 76,
      views: '2.4k'
    },
    {
      id: 'g3',
      category: 'Corporate',
      title: 'Global Fintech Summit 2026',
      location: 'Bangalore Convention',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85',
      aspect: 'wide',
      matches: 120,
      views: '4.1k'
    },
    {
      id: 'g4',
      category: 'Festivals',
      title: 'Sunburn Music Arena',
      location: 'Goa Coast',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85',
      aspect: 'tall',
      matches: 210,
      views: '8.9k'
    },
    {
      id: 'g5',
      category: 'Birthdays',
      title: 'Boho Garden 1st Birthday',
      location: 'Delhi Greens',
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85',
      aspect: 'square',
      matches: 34,
      views: '850'
    },
    {
      id: 'g6',
      category: 'Engagements',
      title: 'Sunset Rooftop Ring Exchange',
      location: 'Mumbai Skyline',
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=85',
      aspect: 'wide',
      matches: 52,
      views: '1.6k'
    },
    {
      id: 'g7',
      category: 'Weddings',
      title: 'Intimate Candlelit Dinner',
      location: 'Goa Villa',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=85',
      aspect: 'tall',
      matches: 63,
      views: '1.9k'
    },
    {
      id: 'g8',
      category: 'Corporate',
      title: 'Leadership Awards Gala',
      location: 'The Leela, Mumbai',
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85',
      aspect: 'square',
      matches: 89,
      views: '3.2k'
    }
  ],
  aiMatchingDemo: {
    guestSelfie: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    guestName: 'Ananya Sharma',
    guestRole: 'Maid of Honor',
    matchesFound: 38,
    matchedPhotos: [
      {
        url: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
        confidence: '99.4%',
        time: '7:42 PM',
        tag: 'Sangeet Stage'
      },
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
        confidence: '99.8%',
        time: '8:15 PM',
        tag: 'Bride Entrance'
      },
      {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80',
        confidence: '98.9%',
        time: '9:30 PM',
        tag: 'Cake Cutting'
      },
      {
        url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
        confidence: '99.1%',
        time: '10:10 PM',
        tag: 'After Party'
      }
    ]
  }
};

export const verifiedStats = [
  { value: '3.8M+', label: 'Event Photos Delivered', description: 'Zero loss lossless compression' },
  { value: '99.4%', label: 'AI Facial Precision', description: 'Trained on diverse angles & lighting' },
  { value: '< 2.4s', label: 'Average Selfie Search', description: 'Instant matching across 10k+ event shots' },
  { value: '4,200+', label: 'Pro Photographers', description: 'Across 18+ countries globally' }
];

export const photographerFeatures = [
  {
    id: 'ai-matching',
    badge: 'Core Intelligence',
    title: 'AI Neural Face Matching That Never Fails',
    description: 'Guests simply take one selfie from their phone. Our proprietary edge neural model scans 15,000+ event photos in under 3 seconds to assemble their private, personalized memory book.',
    bullets: [
      'Works in low-light, sunglasses, traditional wedding turbans, & partial side profiles',
      'Zero download required for guests — pure browser-based web application',
      'GDPR and privacy-first architecture with instant guest opt-out'
    ],
    metric: '99.4% Match Accuracy',
    metricSubtitle: 'Tested on 500,000+ guest faces'
  },
  {
    id: 'bulk-upload',
    badge: 'Pro Workflow',
    title: 'Lightning Bulk & Nested Folder Uploads',
    description: 'Upload 50GB+ camera RAW or high-resolution JPEGs directly from SD cards without waiting. Intelligent parallel chunking with automatic resume on wifi drops.',
    bullets: [
      'Preserves full camera EXIF metadata, timestamp order, and custom ratings',
      'One-shot folder upload maintains your sub-event folders (Haldi, Reception, Party)',
      'Background cloud optimization produces web-ready previews instantly'
    ],
    metric: '10x Faster Uploads',
    metricSubtitle: 'Direct-to-cloud multi-thread pipeline'
  },
  {
    id: 'qr-experience',
    badge: 'Guest Delight',
    title: 'One-Scan QR Codes with Instant Branded Experience',
    description: 'Place smart QR standees on wedding dining tables, entrance archways, or corporate badges. Guests scan and are instantly greeted by your photography brand logo and event theme.',
    bullets: [
      'Download print-ready high-DPI acrylic standee & tent-card designs in 1 click',
      'Custom branded domain & logo integration for complete studio ownership',
      'Real-time live photo stream updating as your team shoots and uploads'
    ],
    metric: '88% Scan-to-Find Rate',
    metricSubtitle: 'Highest event guest engagement in industry'
  },
  {
    id: 'client-proofing',
    badge: 'Studio Monetization',
    title: 'Client Album Proofing & Seamless Selections',
    description: 'Empower couples and families to shortlist album selects, heart favorites, add specific retouching notes, and finalize print albums without chaotic WhatsApp links or pen-and-paper lists.',
    bullets: [
      'Granular download permissions (Web resolution vs. Full 300 DPI Original)',
      'Built-in customizable watermarking (Dynamic diagonal, bottom corner, or subtle center tile)',
      'Automated selection export directly compatible with Adobe Lightroom & Photoshop'
    ],
    metric: '7 Days Saved',
    metricSubtitle: 'Cut typical album proofing turnaround by 75%'
  }
];

export const useCases = [
  {
    title: 'Destination & Big Weddings',
    tag: 'Highest Demand',
    description: 'From 500-guest sangeets to multi-day palace weddings, eliminate guest requests for photos. Every family member and friend finds their moments automatically.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    stat: '4,000+ photos / event'
  },
  {
    title: 'Corporate Conferences & Summits',
    tag: 'Enterprise Speed',
    description: 'Elevate attendee engagement. Delegates scan their badge QR code, upload a quick selfie, and get keynote and networking photos before the closing speech.',
    img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    stat: '98% corporate recall'
  },
  {
    title: 'Concerts & Music Festivals',
    tag: 'High Velocity',
    description: 'Crowd photography made personal. Festival attendees instantly retrieve stage and crowd portraits to post to Instagram with your studio watermark.',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    stat: 'Live photo sync'
  },
  {
    title: 'Milestone Birthdays & Anniversaries',
    tag: 'Family Favorite',
    description: 'Keep intimate gatherings warm and effortless. Grandparents, cousins, and distant relatives receive high-resolution memories on their phones.',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    stat: '100% cloud secure'
  }
];

export const pricingPlans = [
  {
    name: 'Starter Solo',
    description: 'For budding freelance photographers shooting intimate gatherings and portraits.',
    priceMonthly: 0,
    priceYearly: 0,
    isFree: true,
    badge: 'Free Forever',
    features: [
      'Up to 3 Active Events',
      '1,000 Total Photo Storage',
      'AI Facial Recognition (Up to 100 Guests/mo)',
      'Instant QR Code Generator',
      'Standard Web Resolution Downloads',
      'Community Support'
    ],
    cta: 'Start Free Today',
    recommended: false
  },
  {
    name: 'Studio Pro',
    description: 'The standard choice for busy wedding, event, and portrait photographers.',
    priceMonthly: 29,
    priceYearly: 24,
    badge: 'Most Popular',
    features: [
      'Unlimited Active Events',
      '50,000 High-Res Photos Storage',
      'Unlimited AI Face Recognition Matching',
      'Custom Studio Branding & Custom Domain',
      'Full Original 300 DPI Downloads',
      'Client Proofing & Lightroom Selection Export',
      'Custom Watermark Protection',
      'Priority 24/7 WhatsApp & Email Support'
    ],
    cta: 'Get Started with Pro',
    recommended: true
  },
  {
    name: 'Agency Enterprise',
    description: 'For large event production agencies, media teams, and franchise studios.',
    priceMonthly: 89,
    priceYearly: 74,
    badge: 'High Capacity',
    features: [
      'Everything in Studio Pro',
      '500,000+ High-Res Photo Storage',
      'Multi-User Team Collaboration (10 Seats)',
      'Sub-Event Folder Organization (Unlimited)',
      'Custom Print Standee Design Kit Export',
      'Dedicated Account Manager & SLA',
      'Custom API & Webhook Integrations',
      'Custom Privacy & NDA Compliance'
    ],
    cta: 'Talk to Sales',
    recommended: false
  }
];

export const faqs = [
  {
    q: 'How accurately does the AI Face Recognition identify guests?',
    a: 'Our neural vision models achieve over 99.4% precision. The system analyzes subtle facial geometry, skin tones, and key features that remain consistent across varying lighting conditions, profile angles, sunglasses, hats, and traditional festive attire (turbans, dupattas, and heavy jewelry).'
  },
  {
    q: 'Do event guests need to install an app or create an account?',
    a: 'No app download or account creation is required! Guests simply scan the event QR code using their iPhone or Android camera, which immediately opens the fast web gallery. They take a 2-second selfie in their mobile browser, and their personal matching photos populate in under 3 seconds.'
  },
  {
    q: 'Are photographs uploaded and downloaded in original camera quality?',
    a: 'Yes. Lumina preserves your original file resolution up to 50MB per photograph. Photographers can configure granular download permissions per gallery—permitting guests to download compressed social-ready images while reserving original 300 DPI master files for the client or album proofing.'
  },
  {
    q: 'Can photographers protect their work with custom watermarks?',
    a: 'Absolutely. You can upload your studio logo PNG and position it anywhere on the photos (center, corner, or diagonal tile pattern) with adjustable opacity. When a client purchases or is granted download rights, watermark-free originals are automatically delivered.'
  },
  {
    q: 'How does client album selection and proofing work?',
    a: 'Clients receive an interactive selection link where they can tap heart icons on their favorites, leave timestamped notes for specific retouching requests, and approve final sets. You can export their selected photo file names in one click directly into Adobe Lightroom or Photoshop.'
  },
  {
    q: 'What happens to guest privacy and uploaded selfies?',
    a: 'Privacy and data protection are foundational. Selfies uploaded for matching are encrypted in transit and stored strictly for indexing. Guests can remove their photo association anytime with a single click, and studios maintain full administrative control over data retention policies.'
  },
  {
    q: 'Can I use my own studio branding and custom domain?',
    a: 'Yes! Pro and Agency tiers allow you to map your own custom domain (e.g. photos.yourstudio.com), add custom color palettes, and place your studio logo on all guest-facing landing screens and email notifications.'
  }
];

export const testimonials = [
  {
    name: 'Kabir & Srishti Varma',
    role: 'Destination Wedding Photographers',
    studio: 'Artisan Storytellers, Udaipur',
    quote: 'Lumina completely transformed our post-event client experience. At a 700-guest royal wedding in Udaipur, guests received their personalized photo links within minutes of our same-day edit upload. The couples loved it and we gained 8 new wedding inquiries just from guest scans!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '140+ Events Hosted'
  },
  {
    name: 'Vikram Malhotra',
    role: 'Founder & Lead Cinematographer',
    studio: 'Lumina Moments Studio, Mumbai',
    quote: 'Before Lumina, album proofing took 3 to 4 months of back-and-forth WhatsApp messages. Now our couples finalize their album selections in less than 10 days using the intuitive heart and comment system. The Lightroom filename export is a lifesaver.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '320+ Events Hosted'
  },
  {
    name: 'Natasha Roy',
    role: 'Head of Experiential Events',
    studio: 'Apex Corporate Conclaves, Bangalore',
    quote: 'For multi-track tech summits with 3,000 attendees, delivering stage and audience photos was a logistical nightmare. With Lumina’s QR standees on conference tables, attendees scanned, snapped a selfie, and had their keynote photos before lunch. The speed is unprecedented.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '85+ Summits Hosted'
  }
];
