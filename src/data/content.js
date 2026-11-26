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
    id: 'bulk-upload',
    badge: 'High-Speed Ingestion',
    title: 'Lightning Bulk & Nested Folder Uploads',
    description: 'Upload 50GB+ camera RAW or high-resolution JPEGs straight from SD cards. Resumable multi-part uploads pick up automatically if Wi-Fi drops.',
    bullets: [
      'Preserves complete camera EXIF metadata, timestamp order, and custom ratings',
      'One-shot folder upload maintains your sub-event folders (Mehendi, Haldi, Reception)',
      'Background cloud optimization produces web-ready previews in seconds'
    ],
    metric: '10x Faster Uploads',
    metricSubtitle: 'Direct-to-cloud multi-thread pipeline'
  },
  {
    id: 'client-proofing',
    badge: 'Studio Monetization',
    title: 'Client Album Proofing & 1-Click Lightroom Export',
    description: 'Empower couples and clients to shortlist favorites, heart selects, add specific retouching instructions, and approve final albums without chaotic WhatsApp links.',
    bullets: [
      'Interactive selection portal with real-time feedback and photo favoriting',
      'Granular download permissions (Social web-res vs. Full 300 DPI Master Original)',
      '1-Click export of approved photo filenames directly into Adobe Lightroom or Photoshop'
    ],
    metric: '7 Days Saved',
    metricSubtitle: 'Cut typical album proofing turnaround by 75%'
  },
  {
    id: 'studio-branding',
    badge: 'Brand Ownership',
    title: 'White-Label Branding & Custom Studio Domains',
    description: 'Deliver a high-end studio client experience. Map your custom domain, embed your brand logo, and position dynamic watermarks with adjustable opacity.',
    bullets: [
      'Custom domain mapping (e.g., photos.yourstudio.com) for 100% brand ownership',
      'Dynamic watermarking (diagonal tile, bottom corner, or subtle logo overlay)',
      'Automatic watermark removal upon client purchase or approval rights'
    ],
    metric: '100% White-Label',
    metricSubtitle: 'Your brand remains front and center'
  },
  {
    id: 'lossless-storage',
    badge: 'Enterprise Security',
    title: 'Lossless Master RAW Storage & Granular Access Control',
    description: 'Preserve high-resolution master files and RAW originals in secure cloud storage while controlling exactly what guests, clients, and vendors can view and download.',
    bullets: [
      'Lossless master compression preserves full 300 DPI original print quality',
      'Set separate permissions for guests (social downloads) and clients (full masters)',
      'GDPR-compliant security with automated data retention and instant client opt-out'
    ],
    metric: 'Zero Quality Loss',
    metricSubtitle: 'Up to 50MB per photograph preserved'
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
    description: 'Keep intimate gatherings warm and simple. Grandparents, cousins, and distant relatives get high-resolution photos straight on their phones.',
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
    a: 'Our face matching achieves over 99.4% accuracy across varied lighting, side profiles, sunglasses, and traditional attire.'
  },
  {
    q: 'Do event guests need to install an app or create an account?',
    a: 'No app download or signup is needed. Guests scan the QR code in Chrome or Safari, snap a 2-second selfie, and see their photos in under 3 seconds.'
  },
  {
    q: 'Are photographs uploaded and downloaded in original camera quality?',
    a: 'Yes—Lumina preserves original files up to 50MB at 300 DPI. You can allow social-ready downloads for guests while keeping master originals for clients.'
  },
  {
    q: 'Can photographers protect their work with custom watermarks?',
    a: 'Yes. Upload your studio logo PNG, place it in any corner or diagonal pattern with custom opacity, and deliver clean originals once approved.'
  },
  {
    q: 'How does client album selection and proofing work?',
    a: 'Clients favorite photos and leave retouching notes in one interactive link. You can export approved filenames directly into Adobe Lightroom or Photoshop in one click.'
  },
  {
    q: 'What happens to guest privacy and uploaded selfies?',
    a: 'Selfies are encrypted in transit and used strictly to match event photos. Guests can remove their photo matches anytime with one click.'
  },
  {
    q: 'Can I use my own studio branding and custom domain?',
    a: 'Yes. Pro and Agency plans support custom domains (such as photos.yourstudio.com), custom colors, and your studio logo across guest galleries.'
  }
];

export const testimonials = [
  {
    name: 'Kabir & Srishti Varma',
    role: 'Destination Wedding Photographers',
    studio: 'Artisan Storytellers, Udaipur',
    quote: 'At a 700-guest wedding in Udaipur, guests received their personal photos within minutes of upload—and we gained 8 new wedding inquiries directly from guest scans.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '140+ Events Hosted'
  },
  {
    name: 'Vikram Malhotra',
    role: 'Founder & Lead Cinematographer',
    studio: 'Lumina Moments Studio, Mumbai',
    quote: 'Album proofing used to take months of WhatsApp messages. Now couples finalize their selects in under 10 days, and the Lightroom filename export saves hours.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '320+ Events Hosted'
  },
  {
    name: 'Natasha Roy',
    role: 'Head of Experiential Events',
    studio: 'Apex Corporate Conclaves, Bangalore',
    quote: 'At our 3,000-attendee tech summits, table QR standees let delegates scan, take a selfie, and download their keynote photos before lunch.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    eventsCount: '85+ Summits Hosted'
  }
];
