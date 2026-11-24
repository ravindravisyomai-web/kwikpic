import React from 'react';

export const solutionsData = {
  'photographers': {
    slug: 'photographers',
    title: 'Photographers & Studios',
    eyebrow: 'BUILT FOR PROFESSIONAL PHOTOGRAPHERS',
    heroHeadline: 'Less Time Managing Photos. More Time Capturing Moments.',
    heroSubline: 'Give your clients a smoother photography experience with organized event galleries, intelligent photo discovery, and seamless photo delivery.',
    heroImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Photographers & Studios', href: '/solutions/photographers' }
    ],
    challenges: [
      {
        title: 'Thousands of Event Photographs',
        desc: 'Sorting and cataloging thousands of high-resolution RAW files after every wedding or corporate shoot consumes countless hours.'
      },
      {
        title: 'Manual Photo Searching',
        desc: 'Couples and event guests constantly message asking where their pictures are, creating communication friction.'
      },
      {
        title: 'Time-Consuming Client Delivery',
        desc: 'Unorganized cloud links, slow download speeds, and confusing folder trees degrade the premium client experience.'
      }
    ],
    features: [
      {
        badge: 'Bulk & Nested Folder Uploads',
        title: 'Direct-to-Cloud Parallel Ingestion',
        desc: 'Upload 50GB+ camera RAW or high-resolution JPEGs directly from SD cards without waiting. Intelligent parallel chunking with automatic resume.'
      },
      {
        badge: 'AI Face Recognition',
        title: 'Automated Guest Discovery',
        desc: 'Proprietary edge neural models identify faces across thousands of shots so guests find their personal portraits in seconds.'
      },
      {
        badge: 'Studio Branding & Proofing',
        title: 'Interactive Album Proofing & Watermarks',
        desc: 'Couples shortlist album selections effortlessly. Export approved filenames directly into Adobe Lightroom or Photoshop.'
      }
    ],
    workflow: [
      { step: '01', title: 'Create Event', desc: 'Set up your event gallery, custom branding, and folder structure in 60 seconds.' },
      { step: '02', title: 'Upload Photos', desc: 'Bulk upload camera RAWs or JPEGs with folder hierarchy preserved.' },
      { step: '03', title: 'Share Gallery', desc: 'Place branded QR acrylic standees at tables or send personalized web links.' },
      { step: '04', title: 'Deliver Memories', desc: 'Clients shortlist album favorites while guests enjoy instant personal photo discovery.' }
    ],
    stats: [
      { label: 'Time Saved per Event', value: '14+ Hours' },
      { label: 'Faster Album Proofing', value: '4x Speed' },
      { label: 'Client Re-booking Rate', value: '+35%' }
    ],
    faqs: [
      {
        q: 'Can I upload camera RAW files directly?',
        a: 'Yes. Lumina supports direct camera RAW and high-resolution JPEG uploads, preserving full camera EXIF data and timestamp ordering.'
      },
      {
        q: 'How does client album proofing export to Adobe Lightroom?',
        a: 'When clients approve their shortlisted selections, Lumina generates an XML file that imports directly into Adobe Lightroom.'
      },
      {
        q: 'Can I add custom watermarks to protect client galleries?',
        a: 'Yes. You can upload your studio logo PNG, choose placement and opacity, and automatically deliver watermark-free originals once authorized.'
      }
    ],
    relatedUseCases: [
      { name: 'Weddings & Engagements', href: '/use-cases/weddings' },
      { name: 'Corporate Events & Conferences', href: '/use-cases/corporate-events' },
      { name: 'Birthdays & Celebrations', href: '/use-cases/celebrations' }
    ]
  },

  'wedding-studios': {
    slug: 'wedding-studios',
    title: 'Wedding Professionals',
    eyebrow: 'FOR WEDDING PHOTOGRAPHERS & STUDIOS',
    heroHeadline: 'Every Wedding Story. Every Guest. Every Memory.',
    heroSubline: 'Create a beautiful wedding photo-sharing experience where couples and guests can discover their special moments without searching through thousands of photographs.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Wedding Professionals', href: '/solutions/wedding-studios' }
    ],
    challenges: [
      {
        title: 'Hundreds of Relatives Asking for Photos',
        desc: 'Couples get overwhelmed with messages from wedding guests asking for ceremony and reception pictures.'
      },
      {
        title: 'Multi-Day Event Folder Disorganization',
        desc: 'Mehendi, Sangeet, Haldi, Vows, and Reception photos get scattered across generic shared links.'
      },
      {
        title: 'Slow Album Proofing & Turnaround',
        desc: 'Waiting months for couples to select album photos delays final print delivery and closes studio cash flow.'
      }
    ],
    features: [
      {
        badge: 'Wedding Guest QR Codes',
        title: 'Instant Table Standee Facial Discovery',
        desc: 'Guests scan the acrylic table standee using their native camera, snap a 2-second selfie, and view all their candid wedding photos.'
      },
      {
        badge: 'Ceremony & Reception Collections',
        title: 'Multi-Day Sub-Event Organization',
        desc: 'Keep Mehendi, Sangeet, Haldi, Phere, and Reception beautifully separated into clean visual sub-folders.'
      },
      {
        badge: 'Couple Album Selections',
        title: 'Seamless Digital Proofing Portal',
        desc: 'Couples heart their favorite photographs with live target counters (e.g., 60 of 80 chosen) and leave specific retouching notes.'
      }
    ],
    workflow: [
      { step: '01', title: 'Setup Sub-Events', desc: 'Create folders for Haldi, Sangeet, Phere, and Reception.' },
      { step: '02', title: 'Display Standees', desc: 'Place branded QR acrylic cards on dining tables and venue entrances.' },
      { step: '03', title: 'Live Event Ingest', desc: 'Upload preview shots for guests to download before the party ends.' },
      { step: '04', title: 'Album Finalization', desc: 'Couple approves final album selections in their private studio portal.' }
    ],
    stats: [
      { label: 'Guest Scan Engagement', value: '88.4%' },
      { label: 'Referral Inquiries Generated', value: '3.2x' },
      { label: 'Couple Satisfaction', value: '99.8%' }
    ],
    faqs: [
      {
        q: 'Do wedding guests need to download an app?',
        a: 'No app download is required! Guests simply point their iPhone or Android camera at the QR code and the gallery opens in their browser.'
      },
      {
        q: 'Can couples keep private ceremonial photos restricted?',
        a: 'Yes. Studios can password-protect specific sub-folders (like intimate bridal portraits) while leaving public party folders open.'
      },
      {
        q: 'Can guests download original quality photos to their camera roll?',
        a: 'Yes. Guests can download high-resolution copies directly to their phone gallery with a single tap.'
      }
    ],
    relatedUseCases: [
      { name: 'Weddings & Engagements', href: '/use-cases/weddings' },
      { name: 'Birthdays & Celebrations', href: '/use-cases/celebrations' },
      { name: 'Concerts & Festivals', href: '/use-cases/concerts-festivals' }
    ]
  },

  'corporate': {
    slug: 'corporate',
    title: 'Corporate Teams',
    eyebrow: 'FOR ENTERPRISE & CONFERENCES',
    heroHeadline: 'Every Corporate Event. Every Team Moment. One Connected Gallery.',
    heroSubline: 'Make corporate event photography easier to organize, access, and share with a professional event gallery experience.',
    heroImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Corporate Teams', href: '/solutions/corporate' }
    ],
    challenges: [
      {
        title: 'Delayed Post-Conference PR Momentum',
        desc: 'Waiting days for marketing teams to sift through 5,000 summit photos means missing valuable LinkedIn press coverage.'
      },
      {
        title: 'VIP & Speaker Photo Requests',
        desc: 'Keynote speakers and C-suite executives urgently need stage portraits for press releases and personal branding.'
      },
      {
        title: 'Enterprise Access & Privacy Compliance',
        desc: 'Corporate summits require strict data protection, NDA preservation, and authorized attendee access controls.'
      }
    ],
    features: [
      {
        badge: 'Badge QR Scanning',
        title: 'Instant Attendee Photo Retrieval',
        desc: 'Print personalized QR codes on attendee lanyards so delegates receive keynote and networking photos before the summit ends.'
      },
      {
        badge: 'Corporate Branding',
        title: 'Watermarked LinkedIn Social Sharing',
        desc: 'Attendees share keynote and booth photos directly to LinkedIn with company hashtags and sponsor watermarks.'
      },
      {
        badge: 'Security & SLA',
        title: 'Controlled Access & Privacy Compliance',
        desc: 'Facial embeddings are processed in transient secure memory and never shared. Data retention policies can be set to auto-purge.'
      }
    ],
    workflow: [
      { step: '01', title: 'Lanyard QR Integration', desc: 'Embed Lumina QR links onto attendee conference badges or stage screens.' },
      { step: '02', title: 'Real-Time Ingest', desc: 'Photographers tether-upload keynote and breakout session photos.' },
      { step: '03', title: 'Selfie Badge Match', desc: 'Delegates scan and instantly receive stage, panel, and booth photos.' },
      { step: '04', title: 'Viral Social Blast', desc: 'Attendees share high-res photos to social media on the same day.' }
    ],
    stats: [
      { label: 'Same-Day Social Posts', value: '4.8x' },
      { label: 'Event Brand Recall', value: '98%' },
      { label: 'Platform Uptime SLA', value: '99.9%' }
    ],
    faqs: [
      {
        q: 'Is Lumina GDPR and enterprise privacy compliant?',
        a: 'Yes. Facial embeddings are processed in transient secure memory. Studios and enterprises maintain full administrative control.'
      },
      {
        q: 'Can we restrict photo access to registered conference attendees?',
        a: 'Yes. You can require corporate email verification or restrict access via attendee passcodes.'
      },
      {
        q: 'Can we add sponsor watermarks to all downloaded photos?',
        a: 'Yes. Event organizers can place sponsor logos and event hashtags on all guest-downloaded images.'
      }
    ],
    relatedUseCases: [
      { name: 'Corporate Events & Conferences', href: '/use-cases/corporate-events' },
      { name: 'Concerts & Festivals', href: '/use-cases/concerts-festivals' },
      { name: 'Sports Events', href: '/use-cases/sports' }
    ]
  },

  'education': {
    slug: 'education',
    title: 'Schools & Colleges',
    eyebrow: 'FOR CAMPUSES & UNIVERSITIES',
    heroHeadline: 'Every Campus Memory Deserves to Be Remembered.',
    heroSubline: 'Bring school and college event photographs together in organized galleries that make it easier for students, faculty, and families to discover memories.',
    heroImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Schools & Colleges', href: '/solutions/education' }
    ],
    challenges: [
      {
        title: 'Massive Student Body Distribution',
        desc: 'Convocations and campus fests generate 10,000+ photos for thousands of students with no practical way to deliver them.'
      },
      {
        title: 'Endless Drive Folder Scrolling',
        desc: 'Students spend hours searching through unorganized shared drives trying to find their brief moments on stage.'
      },
      {
        title: 'Student Privacy & Safety',
        desc: 'Institutions need verified, controlled photo access ensuring student photos are shared respectfully and securely.'
      }
    ],
    features: [
      {
        badge: 'Graduation Day',
        title: 'Diploma Handover Moment Matching',
        desc: 'Graduates snap a selfie and instantly pull up their stage walk and diploma moment in crisp high definition.'
      },
      {
        badge: 'Campus Life',
        title: 'Multi-Day College Fest Organization',
        desc: 'Organize cultural fests, drama competitions, hackathons, and sports meets into clean, categorized campus folders.'
      },
      {
        badge: 'Student Verification',
        title: 'Campus Domain Verified Access',
        desc: 'Campus email verification ensures photos are accessible exclusively to authorized students, faculty, and families.'
      }
    ],
    workflow: [
      { step: '01', title: 'Setup Campus Gallery', desc: 'Create Convocation, Annual Day, or Cultural Fest galleries.' },
      { step: '02', title: 'Display Screen QR', desc: 'Project QR codes on auditorium screens and print programs.' },
      { step: '03', title: 'Student Selfie Discovery', desc: 'Students find their stage and crowd moments in 2 seconds.' },
      { step: '04', title: 'Save Lifelong Records', desc: 'High-res photos saved straight to students’ phones forever.' }
    ],
    stats: [
      { label: 'Campus Students Reached', value: '100%' },
      { label: 'Average Search Time', value: '< 2.4s' },
      { label: 'Admin Hours Saved', value: '40+ hrs' }
    ],
    faqs: [
      {
        q: 'Can students access photos from their mobile browser without downloading an app?',
        a: 'Yes. Students scan the QR code projected in the auditorium and view photos directly on their smartphone browser.'
      },
      {
        q: 'How does Lumina handle student privacy and parental consent?',
        a: 'Selfies are encrypted, matching is strictly consent-driven, and students can request photo removal anytime.'
      },
      {
        q: 'Can colleges use Lumina for athletic tournaments and alumni reunions?',
        a: 'Yes. Unlimited sub-event galleries support athletic meets, alumni reunions, and annual convocations.'
      }
    ],
    relatedUseCases: [
      { name: 'School & College Functions', href: '/use-cases/education-events' },
      { name: 'Sports Events', href: '/use-cases/sports' },
      { name: 'Concerts & Festivals', href: '/use-cases/concerts-festivals' }
    ]
  }
};

export const useCasesData = {
  'weddings': {
    slug: 'weddings',
    title: 'Weddings & Engagements',
    eyebrow: 'USE CASE: WEDDING CELEBRATIONS',
    heroHeadline: 'One Celebration. Thousands of Moments. Find Yours.',
    heroSubline: 'Bring professional wedding photography and guest memories together through an effortless event photo-sharing experience.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Weddings & Engagements', href: '/use-cases/weddings' }
    ],
    highlights: [
      {
        title: 'Wedding Ceremony Galleries',
        desc: 'Organize Mehendi, Sangeet, Haldi, Phere, and Reception into clean, elegant ceremonial collections.'
      },
      {
        title: 'Reception Photo Discovery',
        desc: 'Guests view all candid moments from the reception party without hunting through thousands of event shots.'
      },
      {
        title: 'QR Table Standees',
        desc: 'Place acrylic QR standees on banquet tables so guests discover their photos before the celebration concludes.'
      },
      {
        title: 'Wedding Album Selections',
        desc: 'Couples shortlist favorite photos in an interactive portal with 1-click Adobe Lightroom export.'
      }
    ],
    workflow: [
      { step: '01', title: 'Studio Ingests RAWs', desc: 'Photographer bulk-uploads wedding files into organized sub-events.' },
      { step: '02', title: 'Guests Scan Table QR', desc: 'Guests scan the acrylic table standee using their native camera.' },
      { step: '03', title: 'AI Selfie Discovery', desc: 'Lumina identifies every guest across thousands of candid photos.' },
      { step: '04', title: 'Instant Social Saves', desc: 'Guests save portraits to camera roll and share with the couple.' }
    ],
    faqs: [
      {
        q: 'Does it work for destination weddings with spotty internet?',
        a: 'Yes. Bulk uploads support automatic resume chunking, and guests can access the gallery whenever connected.'
      },
      {
        q: 'Can the wedding couple customize the gallery link with their names?',
        a: 'Yes! Galleries can be mapped to custom domains like lumina.app/meera-and-aarav.'
      }
    ],
    relatedSolutions: [
      { name: 'Wedding Professionals', href: '/solutions/wedding-studios' },
      { name: 'Photographers & Studios', href: '/solutions/photographers' }
    ]
  },

  'celebrations': {
    slug: 'celebrations',
    title: 'Birthdays & Celebrations',
    eyebrow: 'USE CASE: PRIVATE MILESTONES',
    heroHeadline: 'Make Every Celebration a Collection of Memories.',
    heroSubline: 'From birthdays and anniversaries to family gatherings, bring everyone\'s event photographs together in one convenient place.',
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Birthdays & Celebrations', href: '/use-cases/celebrations' }
    ],
    highlights: [
      {
        title: 'Birthday Parties',
        desc: 'Celebrate 1st birthday milestones, sweet sixteens, and milestone birthdays with shared albums.'
      },
      {
        title: 'Family Anniversaries',
        desc: 'Collect multi-generational moments from golden anniversaries into crystal-clear resolution.'
      },
      {
        title: 'QR Event Invitations',
        desc: 'Include the gallery QR code on digital WhatsApp invitations for instant post-party photo access.'
      },
      {
        title: 'Shared Photo Collections',
        desc: 'Family members download cake-cutting, candid, and group portraits in full original resolution.'
      }
    ],
    workflow: [
      { step: '01', title: 'Create Party Album', desc: 'Setup birthday or anniversary event with custom theme.' },
      { step: '02', title: 'Share Invite QR', desc: 'Send QR link over WhatsApp or display it at the venue entrance.' },
      { step: '03', title: 'Guest Selfie Search', desc: 'Relatives take a selfie to immediately see photos they appear in.' },
      { step: '04', title: 'Save Memories', desc: 'Download high-definition photos directly to mobile camera rolls.' }
    ],
    faqs: [
      {
        q: 'Is this suitable for small 30-50 person birthday parties?',
        a: 'Yes! Lumina Starter plan includes free events with up to 1,000 photos, perfect for milestone birthdays.'
      },
      {
        q: 'Can multiple family members upload their camera photos to the same gallery?',
        a: 'Yes. Event hosts can enable guest photo contributions with administrative approval.'
      }
    ],
    relatedSolutions: [
      { name: 'Photographers & Studios', href: '/solutions/photographers' },
      { name: 'Wedding Professionals', href: '/solutions/wedding-studios' }
    ]
  },

  'corporate-events': {
    slug: 'corporate-events',
    title: 'Corporate Events & Conferences',
    eyebrow: 'USE CASE: BUSINESS EVENTS & SUMMITS',
    heroHeadline: 'Every Business Event Has a Story Worth Sharing.',
    heroSubline: 'Make event photographs easier to organize and discover across conferences, networking events, product launches, and company celebrations.',
    heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Corporate Events & Conferences', href: '/use-cases/corporate-events' }
    ],
    highlights: [
      {
        title: 'Conferences & Seminars',
        desc: 'Keynote speakers, delegates, and panelists access stage and networking photographs in real time.'
      },
      {
        title: 'Product Launches',
        desc: 'Press and influencers download high-res launch photos immediately for same-day social media buzz.'
      },
      {
        title: 'Branded Event Galleries',
        desc: 'Incorporate corporate logos, conference hashtags, and sponsor watermarks on all downloaded media.'
      },
      {
        title: 'Guest Photo Access',
        desc: 'Lanyard QR badges enable delegates to pull up their personal conference moments in under 3 seconds.'
      }
    ],
    workflow: [
      { step: '01', title: 'Tethered Ingest', desc: 'Event media crew uploads keynote and booth photos in real time.' },
      { step: '02', title: 'Badge QR Scan', desc: 'Attendees scan their badge lanyard at lunch or session breaks.' },
      { step: '03', title: 'AI Match in 2s', desc: 'Delegates view stage questions, handshake, and booth shots.' },
      { step: '04', title: 'LinkedIn Blast', desc: 'Attendees share high-res photos to LinkedIn with event hashtags.' }
    ],
    faqs: [
      {
        q: 'Can we place our enterprise sponsor logo on the gallery banner?',
        a: 'Yes. Enterprise plans support complete co-branding with logos, event hashtags, and custom corporate colors.'
      },
      {
        q: 'What is the maximum photo capacity for multi-day conferences?',
        a: 'Agency & Enterprise plans support 500,000+ photos with dedicated multi-gigabit cloud storage.'
      }
    ],
    relatedSolutions: [
      { name: 'Corporate Teams', href: '/solutions/corporate' },
      { name: 'Photographers & Studios', href: '/solutions/photographers' }
    ]
  },

  'sports': {
    slug: 'sports',
    title: 'Sports Events',
    eyebrow: 'USE CASE: ATHLETIC & LEAGUE COMPETITIONS',
    heroHeadline: 'Every Game. Every Victory. Every Moment.',
    heroSubline: 'Bring athletes, teams, and spectators closer to the moments captured throughout sports events.',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Sports Events', href: '/use-cases/sports' }
    ],
    highlights: [
      {
        title: 'Sports Tournaments',
        desc: 'High-speed action and telephoto burst shots preserved in crisp, uncompressed sensor clarity.'
      },
      {
        title: 'Team Photographs',
        desc: 'Organize team rosters, squad portraits, and podium celebrations into dedicated folders.'
      },
      {
        title: 'Participant Photo Discovery',
        desc: 'Athletes take a selfie to immediately pull up their track sprint, goal, and victory moments.'
      },
      {
        title: 'Spectator & Parent Access',
        desc: 'Parents in bleachers download their child’s action photos before the closing ceremony.'
      }
    ],
    workflow: [
      { step: '01', title: 'Tournament Upload', desc: 'Sports media teams upload multi-court or pitch action RAWs.' },
      { step: '02', title: 'Bib / Stadium QR', desc: 'Print QR codes on tournament bibs and scoreboard banners.' },
      { step: '03', title: 'Player Selfie Discovery', desc: 'Athletes take a selfie to pull up their game highlights.' },
      { step: '04', title: 'Trophy Celebration Save', desc: 'Download original high-definition sports action photos.' }
    ],
    faqs: [
      {
        q: 'Does AI face matching work when athletes are wearing sports caps or visors?',
        a: 'Lumina facial geometry maps eye, nose, cheekbone, and mouth landmarks accurately even with sports caps and visors.'
      },
      {
        q: 'Can marathon organizers use this for 5,000+ runners?',
        a: 'Yes. Enterprise plans support stadium and marathon scale with concurrent multi-thousand guest searches.'
      }
    ],
    relatedSolutions: [
      { name: 'Schools & Colleges', href: '/solutions/education' },
      { name: 'Corporate Teams', href: '/solutions/corporate' }
    ]
  },

  'concerts-festivals': {
    slug: 'concerts-festivals',
    title: 'Concerts & Festivals',
    eyebrow: 'USE CASE: LIVE ENTERTAINMENT & MUSIC',
    heroHeadline: 'Live the Moment. Find Your Memories.',
    heroSubline: 'Bring concert and festival photographs together in an accessible event gallery so attendees can rediscover their favorite moments.',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Concerts & Festivals', href: '/use-cases/concerts-festivals' }
    ],
    highlights: [
      {
        title: 'Live Concerts & Performances',
        desc: 'Photographers upload stage and pit sets while fans are still enjoying the music at the venue.'
      },
      {
        title: 'Audience & Crowd Photographs',
        desc: 'Music lovers take a selfie to pull up their front-row, dancing, and festival crowd shots.'
      },
      {
        title: 'Event QR Sharing',
        desc: 'Display event QR codes on LED stage backdrops and festival entry wristbands for instant access.'
      },
      {
        title: 'Festival Watermarking',
        desc: 'Every Instagram story shared by attendees features your music festival logo and sponsor hashtags.'
      }
    ],
    workflow: [
      { step: '01', title: 'Live Stage Ingest', desc: 'Media crew uploads festival sets direct from pit cameras.' },
      { step: '02', title: 'LED Screen QR', desc: 'Concert screens project the Lumina discovery QR code.' },
      { step: '03', title: 'Crowd Selfie Search', desc: 'Festival goers find their front-row and crowd photos in seconds.' },
      { step: '04', title: 'Instagram Story Blast', desc: 'Fans share branded high-res memories across social networks.' }
    ],
    faqs: [
      {
        q: 'How does the AI identify attendees in massive crowd shots?',
        a: 'High-resolution crowd photos are indexed down to individual face bounding boxes, matching guests with high accuracy.'
      },
      {
        q: 'Can we monetize festival photos through Lumina?',
        a: 'Yes. Pro and Agency tiers allow photographers to offer free web previews and paid full-resolution master downloads.'
      }
    ],
    relatedSolutions: [
      { name: 'Corporate Teams', href: '/solutions/corporate' },
      { name: 'Photographers & Studios', href: '/solutions/photographers' }
    ]
  },

  'education-events': {
    slug: 'education-events',
    title: 'School & College Functions',
    eyebrow: 'USE CASE: CAMPUS GATHERINGS & FESTS',
    heroHeadline: 'Every Campus Celebration. Every Memory. Together.',
    heroSubline: 'Make annual functions, cultural programs, graduation ceremonies, and college festivals easier to share and revisit.',
    heroImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'School & College Functions', href: '/use-cases/education-events' }
    ],
    highlights: [
      {
        title: 'Annual Day Functions',
        desc: 'Organize drama, music, dance, and awards ceremonies into clean, student-accessible folders.'
      },
      {
        title: 'Graduation Ceremonies',
        desc: 'Graduates snap a selfie to instantly find their diploma handover and cap-toss moments.'
      },
      {
        title: 'Cultural Festivals',
        desc: 'Keep multi-day campus festivals organized across hackathons, fashion shows, and musical nights.'
      },
      {
        title: 'Student Photo Discovery',
        desc: 'Students and parents search 5,000+ fest photos in seconds without hunting through shared drives.'
      }
    ],
    workflow: [
      { step: '01', title: 'Setup Campus Gallery', desc: 'Setup graduation or festival gallery with faculty controls.' },
      { step: '02', title: 'Project Screen QR', desc: 'Display QR code on auditorium screens and print programs.' },
      { step: '03', title: 'Student Selfie Match', desc: 'Students search 5,000+ fest photos in under 3 seconds.' },
      { step: '04', title: 'Lifelong Memories Saved', desc: 'Students download high-res memories to phone gallery.' }
    ],
    faqs: [
      {
        q: 'Can student access be restricted using educational email domains?',
        a: 'Yes! Galleries can be restricted to students logging in with their university domain (@university.edu).'
      },
      {
        q: 'Can colleges download a master ZIP of the entire convocation?',
        a: 'Yes, administrators have 1-click full archive download rights for permanent university records.'
      }
    ],
    relatedSolutions: [
      { name: 'Schools & Colleges', href: '/solutions/education' },
      { name: 'Photographers & Studios', href: '/solutions/photographers' }
    ]
  }
};
