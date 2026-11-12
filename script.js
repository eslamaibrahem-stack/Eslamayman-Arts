const pad = (n) => String(n).padStart(2, "0");

// Projects come straight from the portfolio deck; `pages` are the deck page numbers in img/full and img/thumb.
//
// Social campaigns made of portrait posters use `posters` (caption is optional):
//   posters: [{ src: "img/campaigns/<name>/<file>", caption: "headline on the post" }, ...]
// `tint` is the brand color behind the poster fan on the card. Any `pages` are shown after the posters.
// To add a new campaign: put its images in img/campaigns/<name>/ and copy the Fadel block below.
const PROJECTS = [
  // ---- Branding & Visual Identity ----
  {
    cat: "branding", title: "Aurél", sub: "Events Agency", year: "Branding · 2026", pages: [11, 12, 13],
    challenge: "Creating a premium identity for an events agency that communicates creativity, elegance, and attention to detail across different event experiences.",
    role: "Logo Design · Visual Identity · Brand Applications",
  },
  {
    cat: "branding", title: "Moments", sub: "Catering Brand by Vivid · Saudi Arabia", year: "Branding · 2026", pages: [14, 15],
    challenge: "Creating a distinctive catering sub-brand that carries VIVID's premium event character while building an independent identity centered on taste, hospitality, and memorable guest experiences.",
    idea: "The identity combines an expressive handwritten wordmark with a subtle fork-and-spoon symbol, communicating personal service, handcrafted presentation, and the social experience of sharing food. Deep navy adds professionalism and trust, while the coral accent introduces warmth, appetite, and a contemporary hospitality character.",
    role: "Logo Design · Visual Identity · Catering Applications · Production",
  },
  {
    cat: "branding", title: "Kako", sub: "Food & Beverage · Saudi Arabia", year: "Branding · 2026", pages: [16, 17, 18],
    challenge: "Modernizing an established Saudi food brand while preserving its familiar, family-friendly character and strong market recognition.",
    idea: "The rebrand introduces a bolder Arabic logotype supported by a wheat element that reflects the brand's connection to baked goods. A warm red, white, and gold palette, combined with a flexible pattern and clear packaging hierarchy, creates a more modern and recognizable identity across different product categories.",
    role: "Logo Redesign · Visual Identity · Packaging Design",
  },
  {
    cat: "branding", client: "Ministry of Health Egypt", title: "Pre-Marital Health Screening", sub: "Ministry of Health and Population · Egypt", year: "Branding · 2023", pages: [19, 20, 21, 22],
    challenge: "Transforming a complex national medical screening program into a clear, reassuring, and approachable identity that encourages couples to make informed health decisions before marriage.",
    idea: "The identity combines two human figures within a heart-shaped form, representing partnership, care, and the shared responsibility of building a healthy family. The cyan and purple palette creates a friendly and trustworthy visual system supporting the initiative's vision of safer marriages and future generations protected from hereditary and infectious diseases.",
    role: "Logo Design · Visual Identity · Campaign Design & Slogans · Production",
  },
  {
    // Boards from a separate brand-guidelines file use `boards` (image paths) instead of deck `pages`.
    cat: "branding", title: "Ali Al Abdullah", sub: "Customs Clearance Company · Kuwait", year: "Branding · 2026",
    cover: "img/brands/ali-alabdullah/cover.jpg",
    boards: [1, 2, 3].map((n) => `img/brands/ali-alabdullah/board-0${n}.jpg`),
    challenge: "Building an identity for a customs clearance company that communicates trust, precision and speed, and makes a procedural, paperwork-heavy service feel clear and reliable.",
    idea: "The monogram unites the two letters A of Ali Al Abdullah into one strong, stable mark, crossed by a sweeping arrow that carries a plane and a ship, expressing the smooth movement of goods across borders by air and sea. Heritage gold stands for value and trust, while deep royal navy brings stability, authority and expertise.",
    role: "Logo Design · Visual Identity · Brand Guidelines · Brand Applications",
  },
  {
    cat: "branding", title: "Accura", sub: "Medical Supplies Brand", year: "Branding · 2024", pages: [23, 24],
    challenge: "Building a credible and distinctive medical brand that communicates accuracy, scientific expertise, and reliability in a highly competitive healthcare market.",
    idea: "The identity uses bold geometric typography to express strength, precision, and professionalism. A laboratory-inspired symbol integrated into the letterform, featuring liquid and bubbles, connects the brand directly to medical supplies, diagnostics, and scientific instruments, while the blue and turquoise palette reinforces trust, safety, and innovation.",
    role: "Logo Design · Visual Identity · Brand Applications",
  },
  {
    cat: "branding", client: "ECRRM", title: "Genora", sub: "Scientific Services Brand · ECRRM Egypt", year: "Branding · 2025", pages: [25, 26],
    challenge: "Creating a credible scientific identity that brings GENORA's advanced genomic and molecular research services under one clear, modern, and recognizable brand.",
    idea: "The identity integrates a DNA double helix into the letter “O”, transforming it into a symbol of genetics, scientific continuity, and interconnected research. The cyan and turquoise palette reflects innovation, precision, and life sciences, while the flexible visual system supports GENORA's services across next-generation sequencing, microarray testing, and molecular biology applications.",
    role: "Logo Design · Visual Identity · Brand Applications · Printing Materials",
  },

  // ---- Events & Experiences ----
  {
    cat: "events", title: "3al Raseef", sub: "Urban Lifestyle Destination · Saudi Arabia", year: "Event Identity · 2026", pages: [29, 30, 31],
    challenge: "Creating a bold and flexible identity for a portable urban destination built from modular containers, bringing together food, retail, art, sports, entertainment, and youth culture, while remaining recognizable as the experience moves, evolves, and changes across different locations.",
    idea: "Inspired by graffiti stickers, street signage, sidewalk culture, and colorful container architecture, the identity builds the Arabic wordmark from bold modular forms. Each letter feels like a different container or experience zone, while the dark purple outline unifies the changing elements into one recognizable urban destination.",
    role: "Creative Direction · Logo Design · Visual Identity · Experience Concept · Presentation Design",
  },
  {
    cat: "events", title: "Saudi Tourism Authority", sub: "Event Calendar Identities", year: "Event Identity · 2026", pages: [32, 33, 34, 35],
    challenge: "Creating a connected series of identities for a diverse annual event calendar, from winter gatherings and cultural celebrations to employee sports tournaments, where every event needed its own distinctive personality while remaining part of one energetic, Saudi-focused visual family.",
    idea: "The visual system is built around bold customized Arabic typography, combined with direct illustrative symbols drawn from the character of each occasion. Rather than using one repeated template, every identity was treated as a unique event badge, while consistent graphic weight, strong outlines, expressive colors, and culturally relevant details created a recognizable family across the full calendar.",
    role: "Creative Direction · Logo Design · Event Identity · Visual System · Brand Applications",
  },
  {
    cat: "events", client: "Diplomatic Quarter", title: "Diplomatic Quarter", sub: "Community Event Identities", year: "Event Identity · 2026", pages: [36, 37, 38, 39, 40],
    challenge: "Creating a distinctive family of identities for a diverse calendar of community initiatives, covering creativity, children's art, environmental awareness, and traditional crafts, while ensuring that every event has its own personality and remains visually connected to the Diplomatic Quarter's established identity.",
    idea: "The system uses custom Arabic typography as the core of every identity, integrating each initiative's central idea directly into its letterforms. Illustrative visuals and symbolic details give every event a unique narrative, while the Diplomatic Quarter's teal, deep green, and turquoise palette creates one cohesive visual family across the full community calendar.",
    role: "Creative Direction · Logo Design · Visual Identity · Illustration Direction · Event Applications",
  },
  {
    cat: "events", client: "Ministry of Culture", title: "Saudi Playwriting Competition", sub: "Ministry of Culture", year: "Cultural Event Identity · 2026", pages: [41, 42, 43],
    challenge: "Creating a distinctive cultural identity that connects the written theatrical text with its transformation into a live performance, while expressing the contemporary spirit of Saudi theatre.",
    idea: "The concept is built around the journey from a story being written to a vision being performed. The theatrical curtain frames the identity as a symbolic stage, while its varied colors represent creative diversity, different voices, and the richness of Saudi playwriting. Bold Arabic typography creates a strong visual rhythm inspired by the structure and movement of a theatrical scene.",
    role: "Creative Direction · Logo Design · Visual Identity · Presentation Design · Editorial Design · Print Collateral",
  },
  {
    cat: "events", client: "Ministry of Culture", title: "Saudi Orchestra Competition", sub: "Ministry of Culture", year: "Cultural Event Identity · 2025", pages: [44, 45],
    challenge: "Creating a distinctive cultural identity that presents the Saudi orchestra through a contemporary visual language while preserving its connection to Arabic expression and musical heritage.",
    idea: "The identity merges expressive Arabic calligraphy with the form of a violin and bow, turning the event name into one unified musical composition. Flowing letterforms communicate rhythm and movement, while the surrounding notes and diverse color accents represent the harmony of different instruments, artistic voices, and cultural influences.",
    role: "Logo Design · Creative Direction · Visual Identity · Event Experience",
  },
  {
    cat: "events", client: "Royal Institute of Traditional Arts", title: "Asalah Turaa", sub: "The Royal Institute of Traditional Arts", year: "Annual Gathering Identity · 2025", pages: [46, 47],
    challenge: "Creating a dedicated annual event identity that feels rooted in the Royal Institute of Traditional Arts' official visual language, while giving the gathering its own distinctive character and memorable cultural presence.",
    idea: "The concept is built around the meaning of “Asalah Turaa” as a celebration of heritage that is not only preserved, but continuously nurtured and passed forward. The event logo was developed by extracting visual cues from the institute's original identity and reinterpreting them into a new emblem with a more event-focused expression. Traditional ornamental elements, structured Arabic typography, and earthy heritage tones reflect authenticity, continuity, and the living spirit of Saudi traditional arts.",
    role: "Creative Direction · Logo Design · Visual Identity · Presentation Design · Event Experience",
  },
  {
    cat: "events", client: "Ministry of Culture", title: "Nawtat Watan", sub: "Tariq Abdulhakim Center · Ministry of Culture", year: "Event Identity · 2025", pages: [48, 49],
    challenge: "Creating a musical event identity that reflects Saudi cultural heritage, celebrates national artistic expression, and connects visually with the official spirit of the Ministry of Culture.",
    idea: "The identity is inspired by the oud as a core symbol of Arabic music and by the cultural color language of the Ministry of Culture. The logo merges the oud form with colorful musical notes and Arabic typography, turning the event name into a patriotic musical expression that reflects heritage, rhythm, and the legacy of Tariq Abdulhakim Center.",
    role: "Creative Direction · Logo Design · Visual Identity · Presentation Design · Event Experience",
  },
  {
    cat: "events", client: "Saudi Conventions & Exhibitions General Authority", title: "Gateway to the Future", sub: "IMEX 2025 · Saudi Conventions & Exhibitions General Authority", year: "Pavilion Identity · 2025", pages: [50, 51],
    challenge: "Positioning Saudi Arabia as a global hub for exhibitions and conferences through a forward-looking identity that communicates opportunity, innovation, and international connection.",
    idea: "The identity transforms the gateway into a symbol of transition toward new possibilities, presenting the Saudi pavilion as an entry point to the future of the global events industry. The dynamic central form represents connection, expansion, and continuous transformation, while the green palette reinforces Saudi identity, growth, and ambition.",
    role: "Logo Design · Visual Identity · Event Design · Production",
  },
  {
    cat: "events", client: "Council of Health Insurance", title: "Tamayuz Sehhi", sub: "Saudi Health Excellence Award", year: "Pavilion Identity · 2025", pages: [52, 53],
    challenge: "Creating a clear and credible award identity for the Council of Health Insurance that reflects excellence, trust, and innovation in healthcare services.",
    idea: "The identity brings together a protective shield and an integrated check mark, expressing quality, reliability, and verified achievement. The continuous Arabic lettering connects directly with the shield to create one unified mark, while the blue and turquoise gradient reflects healthcare, innovation, and forward progress.",
    role: "Logo Design · Visual Identity · Event Design",
  },
  {
    cat: "events", client: "AlUla FC", title: "Destination of Champions", sub: "AlUla Club Championship Celebration · Saudi Arabia", year: "Event Identity · 2026", pages: [54],
    challenge: "Creating a powerful celebration identity for AlUla Club's championship victory and promotion to the Yellow League, one that expresses sporting achievement while connecting the club's success with AlUla's distinctive natural landscape, cultural heritage, and local identity.",
    idea: "The identity positions AlUla as the “Destination of Champions”, bringing together the club's official cheetah symbol, the championship emblem, and shield-inspired forms within one bold victory mark. Desert beige and earthy brown reflect AlUla's landscape and heritage, while dark blue communicates ambition, trust, and sporting excellence.",
    role: "Creative Direction · Visual Identity · Presentation Design · Event Branding Materials",
  },

  // ---- Social Media & Campaigns ----
  {
    cat: "social", title: "Fadel", sub: "Personal finance app · Social media campaign", year: "Social Media · 2026", tint: "#9be22d",
    challenge: "Making money tracking feel personal and relevant by speaking to the everyday moments people already recognize: the balance that ran out too fast, the receipts nobody remembers, the subscriptions renewing at 2 a.m., and the installments that always feel like a surprise.",
    idea: "Every post opens with a question or truth in Egyptian Arabic, set in bold custom lettering in the brand's lime green, over a warm cinematic scene of the same character. The app appears as the calm answer in each moment, as a balance ring, a spending breakdown, an installments calendar, or a savings jar, so the series reads as one story from “where did it go?” to “it's all in front of you”.",
    role: "Campaign Concept · Art Direction · Copywriting · Social Media Design",
    posters: [
      { src: "img/campaigns/fadel/fadel-01.webp", caption: "فاضل كام؟" },
      { src: "img/campaigns/fadel/fadel-02.webp", caption: "هو أنا صرفت كل ده في إيه؟" },
      { src: "img/campaigns/fadel/fadel-03.webp", caption: "لسه بتدفع في حاجات نسيتها؟" },
      { src: "img/campaigns/fadel/fadel-04.webp", caption: "الأقساط مش مفاجأة" },
      { src: "img/campaigns/fadel/fadel-05.webp", caption: "وفّر من غير ما تحس" },
      { src: "img/campaigns/fadel/fadel-06.webp", caption: "مصاريفك قدامك" },
    ],
  },
  {
    // Ongoing account: add new posts to this list as they go live.
    cat: "social", title: "DAW", sub: "Super app by Dalilin · Kuwait · Social media", year: "Social Media · Ongoing", tint: "#2f7de1", ongoing: true,
    role: "Art Direction · Social Media Design",
    posters: [
      "غسل سيارتك — خصم 50%", "خصم 90% فقط من خلال تطبيق داو", "خلها على داو",
      "داو ياكم", "داو يوصلك ويسفرك ويكشخك ويشبعك ويفزعلك", "كل شي بمكان واحد",
      "Download DAW Now", "عروض الكيترنق — كوبون 5 د.ك", "اطلب الي بخاطرك والتوصيل علينا",
      "خصم حصري لغاية 50%", "عرض الويك إند — التوصيل علينا",
    ].map((caption, k) => ({ src: `img/campaigns/daw/daw-${String(k + 1).padStart(2, "0")}.webp`, caption })),
  },
  {
    cat: "social", title: "Joosk", sub: "Sparkling juice brand · Social media campaign", year: "Social Media · 2026", tint: "#f39a1e",
    role: "Art Direction · Copywriting · Social Media Design",
    posters: [
      "المود يبقى مانجا", "خدلك رشة صيف", "مانجا من قلب الحدوتة",
      "دوامة لآخر بوء", "ساقعة ترد الروح", "حلاوتها في السما",
      "المزاج جاهز للإقلاع", "فاصل فراولة ونواصل", "التلاجة فيها فرحة",
      "السكة بقت أحلى", "يظبط جوك", "اللمة عايزة جوسك",
    ].map((caption, k) => ({ src: `img/campaigns/joosk/joosk-${String(k + 1).padStart(2, "0")}.webp`, caption })),
  },
  {
    cat: "social", title: "Sira", sub: "Weekend travel app · Social media", year: "Social Media · 2026", tint: "#2e8f6c",
    role: "Art Direction · Social Media Design",
    posters: [
      "الويكند مو للروتين", "جاهز تختفي 48 ساعة؟", "اختر مودك والباقي علينا",
      "جهّز شنطتك مو جدولك", "خلّ المدينة وراك", "من هنا يبدأ الهروب",
      "مو مكان تجربة", "خلّ الوقت يمشي على مهله", "يومين يغيّرون كل شي",
    ].map((caption, k) => ({ src: `img/campaigns/sira/sira-0${k + 1}.webp`, caption })),
  },
  {
    // Ongoing account: add new posts to this list as they go live.
    cat: "social", title: "Alfaresi", sub: "Marketing agency · Kuwait · Social media", year: "Social Media · Ongoing", tint: "#1f8fe0", ongoing: true,
    role: "Art Direction · Social Media Design",
    posters: [
      "خل أرقامك هي اللي تتكلم", "حكايتك تستاهل تنشاف",
    ].map((caption, k) => ({ src: `img/campaigns/alfaresi/alfaresi-0${k + 1}.webp`, caption })),
  },
  {
    // Ongoing account: add new posts / reel covers to this list as they go live.
    cat: "social", title: "RAVE", sub: "Football club · Kuwait · Reels covers & social media", year: "Social Media · Ongoing", tint: "#f5a623", ongoing: true,
    role: "Art Direction · Social Media Design · Reels Covers",
    posters: [
      { src: "img/campaigns/rave/rave-01.webp", caption: "منو اهوا هذا اللاعب؟" },
      ...[2, 3, 4, 5].map((n) => ({ src: `img/campaigns/rave/rave-0${n}.webp`, caption: "Reel cover" })),
      { src: "img/campaigns/rave/rave-06.webp", caption: "Farewell CR7" },
      { src: "img/campaigns/rave/rave-07.webp", caption: "وصل لاعب جديد ما تعرف مستواه" },
      { src: "img/campaigns/rave/rave-08.webp", caption: "Reel cover" },
    ],
  },
  {
    // Ongoing account (park just opened): add new posts to this list as they go live.
    cat: "social", title: "Aloha", sub: "Amusement park · Messilah Beach, Kuwait · Social media", year: "Social Media · Ongoing", tint: "#8b3fd1", ongoing: true,
    role: "Art Direction · Social Media Design",
    posters: [
      "الفعاليات اليومية — جدول العروض", "الفعاليات اليومية", "Daily Events", "الحين في شاطئ المسيلة!",
    ].map((caption, k) => ({ src: `img/campaigns/aloha/aloha-0${k + 1}.webp`, caption })),
  },
  {
    cat: "social", client: "Ejaza", title: "Ejaza × Porsche Club", sub: "Chalet Drive & Lunch · Porsche Club Kuwait", year: "Event Social Media · 2026", tint: "#f08a3c",
    role: "Art Direction · Social Media Design",
    posters: [1, 2, 3].map((n) => ({ src: `img/campaigns/ejaza-porsche/ejaza-0${n}.webp` })),
  },
  {
    cat: "social", title: "Moments", sub: "Catering brand by Vivid · Social media", year: "Social Media · 2026", tint: "#e5846b",
    role: "Art Direction · Social Media Design",
    posters: [1, 2, 3, 4, 5, 6].map((n) => ({ src: `img/campaigns/moments/moments-0${n}.webp` })),
    pages: [56],
  },
  {
    cat: "social", client: "Lattafa", title: "Lattafa — Khamrah", sub: "Perfume campaign · Social media", year: "Social Media", tint: "#c98a2e",
    role: "Art Direction · Social Media Design",
    posters: [
      "الفخامة تبدأ من أول رشة", "سحر لا يختفي", "أناقتها لها توقيع لا يُنسى",
      "كل تفصيلة... تحكي فخامة", "دفء يلفت وحضور يثبت", "كل تفصيلة... تحكي فخامة",
      "رائحة لها هيبة", "له ولها وللحظة بينهما", "رائحة لها هيبة",
    ].map((caption, k) => ({ src: `img/campaigns/lattafa/lattafa-0${k + 1}.webp`, caption })),
  },
  {
    cat: "social", title: "Taqahwa", sub: "Coffee brand · Social media", year: "Social Media", tint: "#a0612f",
    role: "Art Direction · Social Media Design",
    posters: [
      "اللحظة تحلى وإحنا سوا", "لحظات تستاهل تنحفظ", "رشفة تجمعنا",
      "المشوار يحلى بتقهوي", "خذ لك لحظة حلوة", "وقفتنا لها طعم ثاني",
      "بين شغلة وشغلة نتقهوي", "شغلك يطول وقهوتك تحلّي", "أحلى اللقطات تبدأ بتقهوي",
    ].map((caption, k) => ({ src: `img/campaigns/taqahwa/taqahwa-0${k + 1}.webp`, caption })),
  },
  {
    cat: "social", title: "Kako", sub: "Food & Beverage · Saudi Arabia · Social media", year: "Social Media · 2026", tint: "#e3262f",
    role: "Art Direction · Social Media Design",
    posters: [
      "اختيارك اليومي بشكل جديد", "الصغار عرفوا الجديد قبل الكل", "معاكم في كل طلعة",
      "رجعنا للمدرسة وكاكو معانا", "لمة البيت تحلى معاه", "الحقها قبلهم",
      "عشان كاكو نوصل", "دايم معك", "أقرب مما تتخيّل",
    ].map((caption, k) => ({ src: `img/campaigns/kako/kako-0${k + 1}.webp`, caption })),
  },
  {
    cat: "social", title: "Ali Al Abdullah", sub: "Customs clearance company · Kuwait · Social media", year: "Social Media", tint: "#d4a94a",
    role: "Art Direction · Social Media Design",
    posters: [
      "التخليص الجمركي بلا تعقيد", "صار التخليص الجمركي أسهل من أي وقت مضى", "نفتح الطريق لشحنتك",
      "شحناتك بأمان الآن", "شحناتك توصل أسرع", "شحنتك القادمة اتركها علينا",
      "شريك واحد لكل احتياجاتك", "التميّز في التخليص الجمركي", "لماذا علي العبدالله؟",
    ].map((caption, k) => ({ src: `img/campaigns/ali-alabdullah/aa-0${k + 1}.webp`, caption })),
  },
  {
    cat: "social", title: "Bagedo Medical Clinics", sub: "Aesthetic & wellness clinic · Social media", year: "Social Media", tint: "#9e1b3f",
    role: "Art Direction · Social Media Design",
    posters: [
      "البوتوكس بيهدّي ملامحك طب ومزاجك؟", "حين تهدأ عضلات العبوس يهدأ المزاج معها", "قبل لا تفكر بالمكمّلات ابدأ من طبقك",
    ].map((caption, k) => ({ src: `img/campaigns/bagedo/bagedo-0${k + 1}.webp`, caption })),
  },
  {
    // Posts cut out of deck page 62 (one board) so each shows on its own.
    cat: "social", client: "Council of Health Insurance", title: "Tamayuz Sehhi — Social", sub: "Saudi Health Excellence Award · Announcement series", year: "Social Media · 2025", tint: "#2f8fe0",
    role: "Art Direction · Social Media Design",
    posters: [
      "تميّز صحي", "الترشيحات مفتوحة", "فئات الجائزة", "قصص التميز", "نحتفي بالتميز",
    ].map((caption, k) => ({ src: `img/campaigns/tamayuz/tamayuz-0${k + 1}.jpg`, caption })),
  },

  // ---- Print & Corporate ----
  // `pieces` are single mockups cut from the deck boards (pages 66–69); they scroll inside the
  // accordion panels and show one by one in the project view. `accent` tints the panel.
  {
    cat: "print", client: null, title: "Invitations & Agendas", sub: "Event invitations, agendas & cards", year: "Print & Corporate", accent: "#c9a862",
    role: "Print Design · Invitation Design · Event Collateral",
    // Re-rendered from the flat artwork into one shared high-res envelope mockup.
    pieces: Array.from({ length: 9 }, (_, k) => `img/print/invitations/inv-${pad(k + 1)}.jpg`),
  },
  {
    // One project per client: the Fund's ceremony prints & giveaways, then its internal-event boards
    // (Eid, Founding Day). `cats` lists every filter the project should also appear under.
    cat: "print", cats: ["print", "events"], client: "Cultural Development Fund", title: "Cultural Fund", sub: "Cultural Development Fund · Ceremony prints, giveaways & internal events", year: "Print · Events", accent: "#9fa8d6",
    cover: "img/brands/cultural-fund/cover.jpg",
    pieces: Array.from({ length: 16 }, (_, k) => `img/print/cultural-fund/cf-${pad(k + 1)}.jpg`),
    boards: [3, 4].map((n) => `img/brands/cultural-fund/board-0${n}.jpg`),
    challenge: "Extending the Fund's official identity across its ceremony prints and giveaways, from stands, folders and notebooks to trophies and stickers, and on to the internal staff occasions of Eid and Founding Day, while keeping every piece unmistakably the Fund.",
    idea: "The emblem, the palm and crossed swords, is scaled up and cropped as a bold graphic element over a soft palette of lavender, powder blue, sand and terracotta. For the occasions, hand-painted Eid illustrations and archival Founding Day photography add warmth and story, while the same palette and emblem keep it all one family.",
    role: "Print Design · Giveaways & Merchandise · Exhibition Stand · Event Identity",
  },
  {
    // Separate from the "Tamayuz Sehhi" event identity at the user's request.
    cat: "print", client: "Council of Health Insurance", title: "Tamayuz Sehhi Ceremony", sub: "Council of Health Insurance · Invitation, vests, flags & hoarding", year: "Print & Corporate · 2025", accent: "#4bbfae",
    role: "Print Design · Ceremony Collateral · Event Branding",
    pieces: Array.from({ length: 5 }, (_, k) => `img/print/tamayuz/tamayuz-${pad(k + 1)}.jpg`),
  },
  {
    // Separate from the "Destination of Champions" event identity at the user's request.
    cat: "print", client: "AlUla FC", title: "AlUla FC Celebration", sub: "Destination of Champions · Flags, podium, merchandise & giveaways", year: "Print & Corporate · 2026", accent: "#8b7445",
    role: "Print Design · Event Branding · Merchandise & Giveaways",
    pieces: Array.from({ length: 10 }, (_, k) => `img/print/alula/alula-${pad(k + 1)}.jpg`),
  },
  {
    // "Welcome to Arabia" print & giveaways, then the Authority's internal events (Cup, Kashta, Women's Day).
    cat: "print", client: "Saudi Tourism Authority", title: "Saudi Tourism Authority", sub: "Welcome to Arabia · Totems, flags, awards, kits & internal events", year: "Print & Corporate · 2026", accent: "#b0207e",
    role: "Print Design · Event Branding · Awards & Giveaways · Merchandise",
    pieces: Array.from({ length: 19 }, (_, k) => `img/print/saudi-tourism/sta-${pad(k + 1)}.jpg`),
  },
  {
    // Saudi National Day 95 ("عزّنا بطبعنا") print set for Bank Albilad.
    cat: "print", client: "Bank Albilad", title: "Bank Albilad — National Day 95", sub: "عزّنا بطبعنا · Flags, cube totems, scarves & pins", year: "Print & Corporate · 2025", accent: "#1f9d55",
    role: "Print Design · Campaign Adaptation · Merchandise & Giveaways",
    pieces: Array.from({ length: 7 }, (_, k) => `img/print/albilad/albilad-${pad(k + 1)}.jpg`),
  },
  {
    // Founding Day ("يوم بدينا") and Eid sets (flat arches placed in the venue mockup), then corporate print & merchandise.
    cat: "print", client: "Ministry of Sports", title: "Ministry of Sport", sub: "Founding Day & Eid events · Arches, totems, uniforms & giveaways", year: "Print & Corporate · 2025", accent: "#2fa84f",
    role: "Event Print Design · Venue Branding · Uniforms · Merchandise & Giveaways",
    pieces: Array.from({ length: 36 }, (_, k) => `img/print/ministry-of-sports/mos-${pad(k + 1)}.jpg`),
  },
  {
    // High-res set; the two flat invitations are placed in the shared envelope mockup.
    cat: "print", title: "ingate", sub: "Stage screens, VIP invitations, badges & certificates", year: "Print & Corporate · 2026", accent: "#2ec4d6",
    role: "Event Branding · Stage Visuals · Invitations · Badges · Certificates",
    pieces: Array.from({ length: 12 }, (_, k) => `img/print/ingate/ingate-${pad(k + 1)}.jpg`),
  },
  {
    cat: "print", client: null, title: "Event Merchandise", sub: "Quality of Life Program · Giveaways, apparel & packaging", year: "Print & Corporate", accent: "#d23a4f",
    role: "Merchandise Design · Exhibition Graphics · Packaging",
    pieces: Array.from({ length: 10 }, (_, k) => `img/print/merch/merch-${pad(k + 1)}.jpg`),
  },
  {
    cat: "print", client: "Roads General Authority", title: "Cyber Awareness Guide", sub: "Roads General Authority × National Cybersecurity Authority · Tri-fold brochure", year: "Print & Corporate · 2025", accent: "#3d7bf0",
    role: "Editorial Design · Brochure Layout · Print Production",
    pieces: Array.from({ length: 4 }, (_, k) => `img/print/brochure/brochure-${pad(k + 1)}.jpg`),
  },
];

// Clients shown on the "Selected brands & organizations" logo wall (img/brands.jpg).
// A project's client is `client` if set, otherwise its title; `client: null` means no specific client.
// Every distinct client across this list and PROJECTS is counted once in the stats section.
const LOGO_WALL = [
  "Ministry of Culture", "Council of Health Insurance", "Ministry of Sports", "Royal Institute of Traditional Arts",
  "Decision Support Center", "Saudi Press Agency", "Cultural Development Fund", "Insurance Authority", "AlUla FC",
  "Bank Albilad", "Roads General Authority", "K.A.CARE", "Qiddiya", "General Authority for Statistics", "New Murabba",
  "elm", "Rooh Al Saudia", "Diplomatic Quarter", "Theater and Performing Arts Commission",
  "Literature, Publishing & Translation Commission", "Ministry of Health Egypt", "HVD", "Vivid",
];

// Career totals Eslam fills in himself (the boards hold many designs each, so they can't be counted
// from the site). Leave null to hide the tile; e.g. DESIGNS_DELIVERED = 1200 shows "1200+".
const DESIGNS_DELIVERED = null;
const YEARS_EXPERIENCE = 7; // professional years, matching the About section ("7+ years")

const CAT_LABEL = { branding: "Branding", events: "Events", social: "Social", print: "Print" };
const CAT_COLOR = { branding: "#e8a92c", events: "#a9b6ec", social: "#e5846b", print: "#5ec4c0" };
const CAT_FULL = { branding: "Branding & Identity", events: "Events & Experiences", social: "Social Media", print: "Print & Corporate" };
const thumb = (p) => `img/thumb/page-${pad(p)}.jpg`;
const full = (p) => `img/full/page-${pad(p)}.jpg`;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

// ---------- grid ----------
const grid = document.getElementById("grid");
function cardMedia(p) {
  if (p.posters) {
    // 3D glass folder in the brand tint: three posters tucked inside, a frosted front panel
    // that tilts open on hover while the posters rise out and fan apart.
    return `<div class="card__media card__media--folder" style="--tint:${p.tint || "#e8a92c"}">
      <div class="folder">
        <div class="folder__back"></div>
        <div class="folder__papers">
          ${p.posters.slice(0, 3).map((x) => `<img src="${x.src}" alt="" loading="lazy" width="1080" height="1350">`).join("")}
        </div>
        <div class="folder__front">
          <span class="folder__name">${esc(p.title)}</span>
          <span class="folder__meta">${p.posters.length} ${p.posters.length === 1 ? "design" : "designs"}</span>
        </div>
      </div>
    </div>`;
  }
  return `<div class="card__media"><img src="${p.cover || thumb(p.pages[0])}" alt="${esc(p.title)} — ${esc(p.sub)}" loading="lazy" width="960" height="540"></div>`;
}
const boardSrcs = (p) => p.boards || (p.pages ? p.pages.map(full) : []);
const countLabel = (p) => p.posters ? `${p.posters.length} posts` : boardSrcs(p).length > 1 ? `${boardSrcs(p).length} boards` : "";
const cardHTML = (p, i, group) => `
  <button class="card${p.cat === group ? "" : " card--dupe"}" data-group="${group}" data-cat="${(p.cats || [p.cat]).join(" ")}" data-index="${i}" aria-label="Open ${esc(p.title)}">
    ${cardMedia(p)}
    ${countLabel(p) ? `<span class="card__count">${countLabel(p)}</span>` : ""}
    ${p.ongoing ? `<span class="card__live">Ongoing</span>` : ""}
    <span class="card__view" aria-hidden="true">View project →</span>
    <div class="card__meta">
      <div><span class="card__title">${esc(p.title)}</span><span class="card__sub">${esc(p.sub)}</span></div>
      <span class="card__tag">${CAT_LABEL[p.cat]}</span>
    </div>
  </button>`;
// The grid is grouped by category, each group opened by a divider. A project listed under
// several `cats` gets a copy in each group; copies outside its main `cat` (card--dupe) only
// show when that category's filter is active, so "All" lists every project once.
// Print projects are tall accordion panels: each shows a vertical reel of its mockups,
// and the hovered (or tapped) panel widens while the others narrow to a vertical title.
const piecesOf = (p) => p.pieces || boardSrcs(p);
const panelHTML = (p, i, group, n) => {
  const pics = piecesOf(p).map((src) => `<img src="${src}" alt="" loading="lazy">`).join("");
  return `
  <button class="panel${p.cat === group ? "" : " card--dupe"}" data-group="${group}" data-index="${i}" style="--accent:${p.accent || "#e8a92c"};--dur:${Math.max(18, piecesOf(p).length * 4)}s" aria-label="Open ${esc(p.title)}">
    <span class="panel__reel${n % 2 ? " panel__reel--down" : ""}" aria-hidden="true"><span class="panel__track">${pics}${pics}</span></span>
    <span class="panel__shade" aria-hidden="true"></span>
    <span class="panel__num" aria-hidden="true"></span>
    <span class="panel__vtitle" aria-hidden="true">${esc(p.title)}</span>
    <span class="panel__info">
      <span class="panel__count">${piecesOf(p).length} pieces</span>
      <span class="panel__title">${esc(p.title)}</span>
      <span class="panel__sub">${esc(p.sub)}</span>
      <span class="panel__cta">View project →</span>
    </span>
  </button>`;
};
grid.innerHTML = Object.keys(CAT_LABEL).map((c, n) => {
  const items = PROJECTS.map((p, i) => [p, i]).filter(([p]) => (p.cats || [p.cat]).includes(c));
  if (!items.length) return "";
  const main = items.filter(([p]) => p.cat === c).length;
  const body = c === "print"
    ? `<div class="accordion" data-group="${c}">${items.map(([p, i], k) => panelHTML(p, i, c, k)).join("")}</div>`
    : items.map(([p, i]) => cardHTML(p, i, c)).join("");
  return `
  <div class="divider reveal" data-group="${c}">
    <span class="divider__num">${pad(n + 1)}</span>
    <h3 class="divider__title">${CAT_FULL[c]}</h3>
    <span class="divider__line" aria-hidden="true"></span>
    <span class="divider__count" data-all="${main}" data-only="${items.length}">${main} projects</span>
  </div>` + body;
}).join("");

// One panel is open at a time: the first visible one by default, then whichever is hovered,
// focused or tapped. On touch screens the first tap opens a panel and the second opens the project.
function openPanel(panel) {
  panel.parentElement.querySelectorAll(".panel").forEach((x) => x.classList.toggle("is-open", x === panel));
}
function resetPanels() {
  grid.querySelectorAll(".accordion").forEach((acc) => {
    const first = acc.querySelector(".panel:not([hidden])");
    if (first) openPanel(first);
  });
}
grid.querySelectorAll(".panel").forEach((panel) => {
  panel.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") openPanel(panel); });
  panel.addEventListener("focus", () => openPanel(panel));
});
resetPanels();

// ---------- featured: 3D curved carousel ----------
// Social projects whose first poster leads the carousel, in display order.
const FEATURED = ["Joosk", "Fadel", "Sira", "DAW", "Lattafa — Khamrah", "Taqahwa", "RAVE", "Aloha", "Kako", "Moments"];
(function carousel() {
  const stage = document.getElementById("stage");
  const items = FEATURED
    .map((t) => PROJECTS.findIndex((p) => p.title === t && p.posters))
    .filter((i) => i >= 0)
    .map((i) => ({ i, p: PROJECTS[i] }));
  const n = items.length;
  if (!n) return;

  stage.innerHTML = items.map(({ p }, k) => `
    <div class="fcard" data-k="${k}" role="group" aria-label="${k + 1} of ${n}: ${esc(p.title)}">
      <img src="${p.posters[0].src}" alt="${esc(p.title)}" draggable="false" ${k > 3 && k < n - 3 ? 'loading="lazy"' : ""} width="1080" height="1350">
      <span class="fcard__tag">${esc(p.title)}</span>
    </div>`).join("");
  const els = [...stage.children];
  const dots = document.getElementById("fDots");
  dots.innerHTML = items.map((_, k) => `<button class="fdot" data-k="${k}" role="tab" aria-label="Go to ${esc(items[k].p.title)}"></button>`).join("");
  const dotEls = [...dots.children];
  const glow = document.querySelector(".featured__glow");
  const [idxEl, titleEl, subEl] = ["fIdx", "fTitle", "fSub"].map((id) => document.getElementById(id));

  let cur = 0, target = 0, shown = -1, cardW = 300;
  const mod = (k) => ((k % n) + n) % n;
  // signed distance of card k from the current position, wrapped to [-n/2, n/2)
  const dist = (k) => { let d = mod(k - cur); if (d >= n / 2) d -= n; return d; };

  function render() {
    cardW = els[0].offsetWidth || cardW;
    const spread = cardW * (innerWidth < 700 ? 0.62 : 0.8);
    els.forEach((el, k) => {
      const d = dist(k), a = Math.abs(d);
      const x = Math.sign(d) * (a <= 1 ? a * spread : spread + (a - 1) * spread * 0.72);
      const ry = Math.max(-58, Math.min(58, -d * 30));
      const z = -Math.min(a, 4) * 150;
      const s = 1 - Math.min(a, 3) * 0.05;
      el.style.transform = `translate(-50%, -50%) translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg) scale(${s})`;
      el.style.zIndex = String(100 - Math.round(a * 10));
      el.style.opacity = a > 3.6 ? "0" : String(1 - Math.max(0, a - 2.6));
      el.style.filter = `brightness(${1 - Math.min(a, 3) * 0.17})`;
      el.classList.toggle("is-center", a < 0.5);
    });
    const now = mod(Math.round(cur));
    if (now !== shown) {
      shown = now;
      const { p } = items[now];
      idxEl.textContent = pad(now + 1);
      titleEl.textContent = p.title;
      subEl.textContent = p.sub;
      glow.style.setProperty("--tint", p.tint || "#e8a92c");
      dotEls.forEach((d, k) => { d.classList.toggle("is-active", k === now); d.setAttribute("aria-selected", k === now); });
    }
  }

  // Ease the position toward the target every frame while the section is on screen.
  let running = false;
  function frame() {
    if (!running) return;
    cur += (target - cur) * (reduceMotion ? 1 : 0.11);
    if (Math.abs(target - cur) < 0.0005) cur = target;
    render();
    requestAnimationFrame(frame);
  }
  new IntersectionObserver(([en]) => {
    const was = running; running = en.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(stage);

  const go = (k) => { target = Math.round(target) + k; kick(); };
  const goTo = (k) => { target = Math.round(cur) + (() => { let d = mod(k - Math.round(cur)); if (d > n / 2) d -= n; return d; })(); kick(); };

  // Autoplay, paused while hovered, focused or dragged.
  let paused = false, timer;
  function kick() { clearInterval(timer); if (!reduceMotion) timer = setInterval(() => { if (!paused && running) target += 1; }, 4200); }
  kick();
  stage.addEventListener("pointerenter", () => { paused = true; });
  stage.addEventListener("pointerleave", () => { paused = false; });

  // Drag / swipe.
  let drag = null;
  stage.addEventListener("pointerdown", (e) => {
    drag = { x: e.clientX, start: target, moved: 0, id: e.pointerId };
    try { stage.setPointerCapture(e.pointerId); } catch { /* pointer already gone */ }
    stage.classList.add("is-dragging");
  });
  stage.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    drag.moved = Math.max(drag.moved, Math.abs(dx));
    target = drag.start - dx / (cardW * 0.8);
  });
  const end = (e) => {
    if (!drag) return;
    stage.classList.remove("is-dragging");
    const wasClick = drag.moved < 6;
    drag = null;
    if (wasClick) {
      const card = document.elementFromPoint(e.clientX, e.clientY)?.closest(".fcard");
      if (card) {
        const k = Number(card.dataset.k);
        if (Math.abs(dist(k)) < 0.5) openProject(items[k].i); else goTo(k);
      }
      target = Math.round(target);
    } else {
      target = Math.round(target);
    }
    kick();
  };
  stage.addEventListener("pointerup", end);
  stage.addEventListener("pointercancel", end);

  // Horizontal wheel / trackpad swipe moves one card per gesture.
  let wheelLock = 0;
  stage.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    const t = performance.now();
    if (t - wheelLock > 380 && Math.abs(e.deltaX) > 8) { wheelLock = t; go(e.deltaX > 0 ? 1 : -1); }
  }, { passive: false });

  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    if (e.key === "Enter") openProject(items[mod(Math.round(cur))].i);
  });
  stage.addEventListener("focusin", () => { paused = true; });
  stage.addEventListener("focusout", () => { paused = false; });
  document.getElementById("fPrev").addEventListener("click", () => go(-1));
  document.getElementById("fNext").addEventListener("click", () => go(1));
  dots.addEventListener("click", (e) => { const d = e.target.closest(".fdot"); if (d) goTo(Number(d.dataset.k)); });
  addEventListener("resize", render);
  render();
})();

// ---------- client orbit ----------
// Three rings of client logos circling the painted photo. `logo` is a white-on-transparent PNG in
// img/logos/; entries without one show as a wordmark in the project's tint until a logo file arrives.
const ORBIT_RINGS = [
  { speed: 0.07, items: [
    ["Ministry of Culture", "ministry-of-culture"], ["Council of Health Insurance", "council-health-insurance"],
    ["Ministry of Sports", "ministry-of-sports"], ["Cultural Development Fund", "cultural-development-fund"],
    ["Saudi Press Agency", "saudi-press-agency"], ["Royal Institute of Traditional Arts", "royal-institute-arts"],
    ["Diplomatic Quarter", "diplomatic-quarter"], ["Qiddiya", "qiddiya"],
  ] },
  { speed: -0.045, items: [
    ["Decision Support Center", "decision-support-center"], ["Insurance Authority", "insurance-authority"],
    ["AlUla FC", "alula-fc"], ["Bank Albilad", "bank-albilad"], ["Roads General Authority", "roads-authority"],
    ["K.A.CARE", "kacare"], ["General Authority for Statistics", "statistics-authority"], ["New Murabba", "new-murabba"],
    ["elm", "elm"], ["Rooh Al Saudia", "rooh-al-saudia"], ["Theater & Performing Arts Commission", "theater-commission"],
    ["Literature, Publishing & Translation Commission", "literature-commission"],
    ["Ministry of Health, Egypt", "ministry-health-egypt"], ["HVD Life Sciences", "hvd"], ["Vivid Experience", "vivid"],
  ] },
  // Social media clients: full-colour logos; "light" puts dark logos on a cream tile so they stay readable.
  { speed: 0.032, items: [
    ["Alfaresi", "clients/alfaresi"], ["DAW", "clients/daw"], ["Joosk", "clients/joosk"], ["Sira", "clients/sira"],
    ["RAVE", "clients/rave"], ["Aloha", "clients/aloha"], ["Fadel", "clients/fadel"], ["Kako", "clients/kako"],
    ["Ali Al Abdullah", "clients/ali-alabdullah", "light"], ["Bagedo Medical Clinics", "clients/bagedo", "light"],
    ["Moments by Vivid", "clients/moments", "light"],
  ] },
];
(function orbit() {
  const stage = document.getElementById("orbitStage");
  const caption = document.getElementById("orbitCaption");
  const HINT = finePointer ? "Hover a logo to see who it is" : "Tap a logo to see who it is";
  caption.textContent = HINT;
  const tintOf = (name) => (PROJECTS.find((p) => p.title.startsWith(name) || (p.client || "").startsWith(name)) || {}).tint || "#e8a92c";
  const nodes = [];
  ORBIT_RINGS.forEach((ring, r) => {
    ring.paused = false;
    ring.angle = r * 0.4;
    ring.items.forEach(([name, logo, tone], k) => {
      const el = document.createElement("div");
      el.className = `orb orb--r${r + 1}${logo ? "" : " orb--word"}${tone === "light" ? " orb--light" : ""}`;
      el.setAttribute("role", "listitem");
      el.tabIndex = 0;
      el.setAttribute("aria-label", name);
      el.innerHTML = logo
        ? `<img src="img/logos/${logo}.png" alt="${esc(name)}" loading="lazy" draggable="false">`
        : `<span style="--c:${tintOf(name)}">${esc(name)}</span>`;
      const show = () => { ring.paused = true; caption.textContent = name; el.classList.add("is-hot"); };
      const hide = () => { ring.paused = false; caption.textContent = HINT; el.classList.remove("is-hot"); };
      el.addEventListener("pointerenter", show); el.addEventListener("pointerleave", hide);
      el.addEventListener("focus", show); el.addEventListener("blur", hide);
      stage.appendChild(el);
      nodes.push({ el, ring, r, phase: (k / ring.items.length) * Math.PI * 2 });
    });
  });

  // Rings are centred on the person in the background photo (object-fit: cover), not on the stage box.
  const section = document.getElementById("clients");
  const bgImg = section.querySelector(".orbit__bg img");
  const PERSON = { x: 828 / 1672, y: 430 / 941 }; // body centre in the source photo
  let W = 0, H = 0, cx = 0, cy = 0, radii = [];
  function measure() {
    W = stage.clientWidth; H = stage.clientHeight;
    const sw = section.clientWidth, sh = section.clientHeight;
    const iw = bgImg.naturalWidth || 1672, ih = bgImg.naturalHeight || 941;
    const s = Math.max(sw / iw, sh / ih);
    // object-position 50% 42%: leftover space split by those ratios
    const ox = (sw - iw * s) * 0.5, oy = (sh - ih * s) * 0.42;
    cx = ox + PERSON.x * iw * s - stage.offsetLeft;
    cy = oy + PERSON.y * ih * s - stage.offsetTop;
    const phone = W < 700;
    if (phone) cy = H * 0.5; // on phones the stage is tall and narrow: centre the rings in it
    const room = Math.min(cx, W - cx, (cy + stage.offsetTop) * 1.25, (H - cy) * 1.25);
    const outer = phone ? W * 0.36 : Math.min(W * 0.47, Math.max(room, W * 0.3));
    // flat ellipses on wide screens; tall ellipses on phones so the rings use the height
    const tilt = phone ? Math.min(1.6, (H * 0.44) / outer) : 0.62;
    radii = [0.42, 0.7, 1].map((f) => ({ rx: outer * f, ry: outer * f * tilt }));
  }
  bgImg.addEventListener("load", () => { measure(); place(); });
  function place() {
    nodes.forEach(({ el, ring, r, phase }) => {
      const a = ring.angle + phase, { rx, ry } = radii[r];
      const depth = (Math.sin(a) + 1) / 2; // 1 = front (lower on screen), 0 = back
      const x = cx + Math.cos(a) * rx, y = cy + Math.sin(a) * ry;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${0.68 + depth * 0.42})`;
      el.style.opacity = String(0.45 + depth * 0.55);
      el.style.zIndex = String(10 + Math.round(depth * 100));
    });
  }
  let running = false, last = 0;
  function frame(t) {
    if (!running) return;
    const dt = Math.min((t - last) / 1000, 0.05); last = t;
    if (!reduceMotion) ORBIT_RINGS.forEach((ring) => { if (!ring.paused) ring.angle += ring.speed * dt; });
    place();
    requestAnimationFrame(frame);
  }
  new IntersectionObserver(([en]) => {
    const was = running; running = en.isIntersecting;
    if (running && !was) { last = performance.now(); requestAnimationFrame(frame); }
  }).observe(stage);
  addEventListener("resize", () => { measure(); place(); });
  measure(); place();
})();

// ---------- by the numbers ----------
// Odometer: each digit is a 0–9 strip that rolls into place when its tile is revealed.
function setOdo(el, value, suffix = "") {
  el.dataset.value = value;
  el.setAttribute("aria-label", `${value}${suffix}`);
  el.innerHTML = String(value).split("").map((d, k) =>
    `<span class="odo__digit" style="--d:${d};--k:${k}" aria-hidden="true"><span>${"0123456789".split("").map((n) => `<i>${n}</i>`).join("")}</span></span>`
  ).join("") + (suffix ? `<span class="odo__suffix" aria-hidden="true">${suffix}</span>` : "");
}

(function numbers() {
  // Distinct clients: the logo wall plus every project's client, keyed loosely so spellings merge.
  const key = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const clients = new Map(LOGO_WALL.map((c) => [key(c), c]));
  PROJECTS.forEach((p) => { const c = p.client === undefined ? p.title : p.client; if (c && !clients.has(key(c))) clients.set(key(c), c); });
  const names = [...clients.values()];
  const posts = PROJECTS.reduce((n, p) => n + (p.posters ? p.posters.length : 0), 0);
  const live = PROJECTS.filter((p) => p.ongoing);
  const mainCat = Object.fromEntries(Object.keys(CAT_LABEL).map((c) => [c, PROJECTS.filter((p) => p.cat === c).length]));

  setOdo(document.getElementById("odoClients"), clients.size);
  setOdo(document.getElementById("odoYears"), YEARS_EXPERIENCE, "+");
  setOdo(document.getElementById("odoProjects"), PROJECTS.length);
  setOdo(document.getElementById("odoPosts"), posts);
  setOdo(document.getElementById("odoLive"), live.length);
  if (DESIGNS_DELIVERED) {
    setOdo(document.getElementById("odoDesigns"), DESIGNS_DELIVERED, "+");
    document.getElementById("tileDesigns").hidden = false;
    document.getElementById("bento").classList.add("has-designs");
  }

  // Two ticker rows of client names scrolling in opposite directions (content doubled for a seamless loop).
  const half = Math.ceil(names.length / 2);
  const pills = (list) => list.map((n) => `<span class="pill">${esc(n)}</span>`).join("");
  document.getElementById("tickA").innerHTML = pills(names.slice(0, half)).repeat(2);
  document.getElementById("tickB").innerHTML = pills(names.slice(half)).repeat(2);

  // Three posters fanned in the posts tile.
  const withPosters = PROJECTS.filter((p) => p.posters && p.posters.length);
  document.getElementById("postFan").innerHTML = ["Joosk", "Sira", "DAW"]
    .map((t) => withPosters.find((p) => p.title === t) || withPosters[0])
    .map((p) => `<img src="${p.posters[0].src}" alt="" loading="lazy" width="1080" height="1350">`).join("");

  document.getElementById("liveList").innerHTML = live.map((p) => `<li><span class="dot"></span>${esc(p.title)}</li>`).join("");

  // Donut of projects by main discipline; segments draw in when the tile is revealed.
  const total = PROJECTS.length, R = 78, C = 2 * Math.PI * R, gap = 3;
  let offset = 0;
  document.getElementById("donut").innerHTML = `<circle cx="100" cy="100" r="${R}" class="donut__track"/>` +
    Object.entries(mainCat).map(([c, n], k) => {
      const len = (n / total) * C;
      const seg = `<circle cx="100" cy="100" r="${R}" class="donut__seg" data-cat="${c}" stroke="${CAT_COLOR[c]}"
        style="--len:${Math.max(len - gap, 0)};--C:${C};--off:${-offset};--k:${k}"/>`;
      offset += len;
      return seg;
    }).join("");
  setOdo(document.getElementById("donutTotal"), total);
  const mix = document.getElementById("mixList");
  mix.innerHTML = Object.entries(mainCat).map(([c, n]) => `
    <button class="mix__item" data-goto="${c}" style="--c:${CAT_COLOR[c]}">
      <span class="mix__swatch"></span>
      <span class="mix__name">${CAT_FULL[c]}</span>
      <span class="mix__num">${n}</span>
      <span class="mix__pct">${Math.round((n / total) * 100)}%</span>
    </button>`).join("");
  // Hovering a discipline highlights its segment; clicking jumps to the grid filtered to it.
  const donut = document.getElementById("donut");
  mix.addEventListener("pointerover", (e) => { const b = e.target.closest(".mix__item"); donut.dataset.hl = b ? b.dataset.goto : ""; });
  mix.addEventListener("pointerleave", () => { donut.dataset.hl = ""; });
  mix.addEventListener("click", (e) => {
    const b = e.target.closest(".mix__item");
    if (!b) return;
    document.querySelector(`.filter[data-filter="${b.dataset.goto}"]`).click();
    document.getElementById("work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });

  // Spotlight follows the pointer across each tile.
  document.querySelectorAll(".tile").forEach((t) => t.addEventListener("pointermove", (e) => {
    const r = t.getBoundingClientRect();
    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
    t.style.setProperty("--my", `${e.clientY - r.top}px`);
  }));
})();

let visible = [];
function filterGrid(f) {
  visible = [];
  grid.querySelectorAll("[data-group]").forEach((el) => {
    const show = f === "all" ? !el.classList.contains("card--dupe") : el.dataset.group === f;
    el.hidden = !show;
    if (!show || el.classList.contains("accordion")) return;
    if (el.classList.contains("divider")) {
      const n = el.querySelector(".divider__count");
      n.textContent = `${f === "all" ? n.dataset.all : n.dataset.only} projects`;
      return;
    }
    const i = Number(el.dataset.index);
    if (!visible.includes(i)) visible.push(i);
    el.style.animation = "none"; el.offsetHeight; el.style.animation = "";
  });
  resetPanels();
}
filterGrid("all");

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("is-active", b === btn);
      b.setAttribute("aria-selected", b === btn);
    });
    filterGrid(btn.dataset.filter);
  });
});

// ---------- modal ----------
const modal = document.getElementById("modal");
const body = document.getElementById("modalBody");
let current = -1;
let lastFocus = null;

// Print projects lead with their pieces; everything else leads with its boards.
const boardsBlock = (p) => boardSrcs(p).length ? `
    <div class="project__images">
      ${boardSrcs(p).map((src, k) => `<img src="${src}" alt="${esc(p.title)} — board ${k + 1}" ${k || p.posters || p.cat === "print" ? 'loading="lazy"' : ""} width="1920" height="1080">`).join("")}
    </div>` : "";
const piecesBlock = (p) => p.pieces ? `
    <div class="project__pieces">
      ${p.pieces.map((src, k) => `<figure class="piece" style="--i:${k % 3}"><img src="${src}" alt="${esc(p.title)} — piece ${k + 1}" ${k > 3 || p.cat !== "print" ? 'loading="lazy"' : ""}></figure>`).join("")}
    </div>` : "";

function renderProject(i) {
  const p = PROJECTS[i];
  current = i;
  const info = [
    p.challenge && `<h4>The challenge</h4><p>${esc(p.challenge)}</p>`,
    p.idea && `<h4>The idea</h4><p>${esc(p.idea)}</p>`,
    p.role && `<h4>My role</h4><p class="project__role">${esc(p.role)}</p>`,
  ].filter(Boolean).join("");
  body.innerHTML = `
    <div class="project__head">
      <div>
        <h2 class="project__title" id="modalTitle">${esc(p.title)}</h2>
        <p class="project__sub">${esc(p.sub)}</p>
        <p class="project__year">${esc(p.year)}</p>
      </div>
      <div class="project__info">${info}</div>
    </div>
    ${p.posters ? `
    <div class="project__posters">
      ${p.posters.map((x, k) => `
        <figure class="poster" style="--i:${k % 3}">
          <img src="${x.src}" alt="${esc(p.title)} post ${k + 1}${x.caption ? `: ${esc(x.caption)}` : ""}" ${k > 2 ? 'loading="lazy"' : ""} width="1080" height="1350">
          ${x.caption ? `<figcaption lang="ar" dir="rtl">${esc(x.caption)}</figcaption>` : ""}
        </figure>`).join("")}
    </div>` : ""}
    ${p.cat === "print" ? piecesBlock(p) + boardsBlock(p) : boardsBlock(p) + piecesBlock(p)}`;
  const pos = visible.indexOf(i);
  document.getElementById("modalCount").textContent = `${pos + 1} / ${visible.length}`;
  modal.scrollTop = 0;
  // Fade each board/poster in as it scrolls into view inside the modal.
  body.querySelectorAll(".project__images img, .poster, .piece").forEach((el) => { el.classList.add("rise"); modalIO.observe(el); });
}
const modalIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); modalIO.unobserve(en.target); } });
}, { root: modal, threshold: 0.08 });

function openProject(i) {
  lastFocus = document.activeElement;
  renderProject(i);
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeProject() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
function step(dir) {
  const pos = visible.indexOf(current);
  renderProject(visible[(pos + dir + visible.length) % visible.length]);
}

grid.addEventListener("click", (e) => {
  const panel = e.target.closest(".panel");
  if (panel && !panel.classList.contains("is-open")) { openPanel(panel); return; }
  const card = e.target.closest(".card, .panel");
  if (card) openProject(Number(card.dataset.index));
});
document.getElementById("modalClose").addEventListener("click", closeProject);
document.getElementById("modalPrev").addEventListener("click", () => step(-1));
document.getElementById("modalNext").addEventListener("click", () => step(1));
document.addEventListener("keydown", (e) => {
  if (modal.hidden) return;
  if (e.key === "Escape") closeProject();
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});

// ---------- nav ----------
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
document.querySelectorAll("#navLinks a").forEach((a) => a.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}));

// ---------- client reviews ----------
// Add real reviews here (one object each). Items with `sample: true` show a "Sample" label so placeholder
// wording can't be mistaken for a real client's words; delete those objects as real reviews come in.
const TESTIMONIALS = [
  { quote: "بخصوص ديزاين البوستات ماشاءالله، الله ينور ولا غلطة شغل professional واشكرلي البشمهندس اسلام ❤️👏🏻🔥", name: "علي عبدالله للتخليص الجمركي", initials: "AA", role: "Ali Al Abdullah · Customs Clearance", project: "Social media", rating: 5 },
  { sample: true, quote: "A second review goes here, for example about the speed, the communication or the quality of the campaign.", name: "Client name", role: "Role · Company", project: "Branding", rating: 5 },
  { sample: true, quote: "A third review goes here, for example about an event or a print job they trusted you with.", name: "Client name", role: "Role · Company", project: "Events", rating: 5 },
];(() => {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;
  const STAR = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 16.6 6.4 19.8l1.3-6.2L3 9.3l6.3-.7z"/></svg>';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dirOf = (s) => (/[\u0600-\u06FF]/.test(s) ? "rtl" : "ltr");
  const initials = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  grid.innerHTML = TESTIMONIALS.map((t) => {
    const stars = Array.from({ length: 5 }, (_, i) => STAR.replace("<svg", `<svg style="--s:${i}" class="${i < t.rating ? "is-on" : ""}"`)).join("");
    return `<article class="review reveal">
      <span class="review__mark" aria-hidden="true">&ldquo;</span>
      ${t.sample ? '<span class="review__sample">Sample</span>' : ""}
      <div class="review__stars" role="img" aria-label="${t.rating} out of 5 stars">${stars}</div>
      <blockquote dir="${dirOf(t.quote)}">${esc(t.quote)}</blockquote>
      <div class="review__who">
        <span class="review__avatar" aria-hidden="true">${esc(t.initials || initials(t.name))}</span>
        <span><span class="review__name" dir="${dirOf(t.name)}">${esc(t.name)}</span><span class="review__role">${esc(t.role)}</span></span>
        ${t.project ? `<span class="review__tag">${esc(t.project)}</span>` : ""}
      </div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".review").forEach((card) => card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  }));
})();

// ---------- reveal on scroll (staggered within each parent) ----------
document.querySelectorAll(".reveal").forEach((el) => {
  const sibs = [...el.parentElement.children].filter((c) => c.classList.contains("reveal"));
  el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 6) * 90}ms`);
});
// Reveal anything whose top has entered (or already passed) the viewport. Measured on scroll
// rather than with IntersectionObserver, so fast scrolling and jump links never skip an element.
// Headings start fully clipped, so their unclipped wrapper is measured instead.
const CLIPPED = ".h2.reveal, .contact__title.reveal";
let pendingReveal = [...document.querySelectorAll(".reveal")];
function revealSweep() {
  const line = innerHeight * 0.9;
  pendingReveal = pendingReveal.filter((el) => {
    const box = (el.matches(CLIPPED) ? el.parentElement : el).getBoundingClientRect();
    if (box.top > line) return true;
    el.classList.add("is-in");
    el.querySelectorAll("[data-count]").forEach(countUp);
    return false;
  });
}
let revealQueued = false;
addEventListener("scroll", () => {
  if (revealQueued) return;
  revealQueued = true;
  requestAnimationFrame(() => { revealQueued = false; revealSweep(); });
}, { passive: true });
addEventListener("resize", revealSweep);
addEventListener("load", revealSweep);
revealSweep();

// Number counters in the stats row.
function countUp(el) {
  const end = Number(el.dataset.count), suffix = el.dataset.suffix || "";
  if (reduceMotion) { el.textContent = end + suffix; return; }
  const t0 = performance.now(), dur = 1400;
  const tick = (t) => {
    const k = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Hero intro plays once fonts/layout are ready.
requestAnimationFrame(() => document.body.classList.add("is-loaded"));

// ---------- scroll-linked: progress bar, parallax, marquee speed ----------
const progress = document.getElementById("progress");
const parallax = [...document.querySelectorAll("[data-parallax]")];
const marquee = document.querySelector(".marquee__track");
const marqueeAnim = marquee && marquee.getAnimations ? marquee.getAnimations()[0] : null;
let lastY = scrollY, velocity = 0, ticking = false;

function onScrollFrame() {
  const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  if (!reduceMotion) {
    parallax.forEach((el) => {
      const r = el.getBoundingClientRect();
      // clamp to the room the image's scale leaves inside its frame, so no empty strip ever shows
      const slack = Math.max(0, (r.height - el.parentElement.clientHeight) / 2 - 1);
      const off = Math.max(-slack, Math.min(slack, (r.top + r.height / 2 - innerHeight / 2) * Number(el.dataset.parallax)));
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
    velocity = Math.max(-40, Math.min(40, y - lastY));
    if (marqueeAnim) marqueeAnim.playbackRate = (velocity < 0 ? -1 : 1) * (1 + Math.abs(velocity) / 6);
  }
  lastY = y;
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScrollFrame); } }, { passive: true });
onScrollFrame();
// Ease the marquee back to its resting speed once scrolling stops.
if (marqueeAnim && !reduceMotion) setInterval(() => {
  const r = marqueeAnim.playbackRate, base = r < 0 ? -1 : 1;
  marqueeAnim.playbackRate = base + (r - base) * 0.85;
}, 60);

// ---------- starry hero canvas ----------
(function stars() {
  const cv = document.getElementById("stars");
  if (!cv || reduceMotion) return;
  const ctx = cv.getContext("2d");
  let w, h, dpr, pts = [], mx = 0, my = 0, running = true;
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / 9000);
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.6 + 0.3, z: Math.random() * 0.8 + 0.2,
      tw: Math.random() * Math.PI * 2, gold: Math.random() < 0.45,
    }));
  }
  function frame(t) {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += 0.06 * p.z; p.y -= 0.03 * p.z;
      if (p.x > w + 10) p.x = -10; if (p.y < -10) p.y = h + 10;
      const a = 0.35 + 0.65 * Math.abs(Math.sin(t / 900 + p.tw));
      const x = p.x + mx * 18 * p.z, y = p.y + my * 18 * p.z;
      ctx.beginPath(); ctx.arc(x, y, p.r * p.z * 1.4, 0, Math.PI * 2);
      ctx.fillStyle = p.gold ? `rgba(243,198,107,${a})` : `rgba(244,239,228,${a * 0.8})`;
      ctx.shadowColor = p.gold ? "rgba(232,169,44,.9)" : "rgba(255,255,255,.6)";
      ctx.shadowBlur = p.r * 4;
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  addEventListener("resize", resize);
  addEventListener("pointermove", (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
  // Pause drawing while the hero is off screen.
  new IntersectionObserver(([en]) => {
    const was = running; running = en.isIntersecting;
    if (running && !was) requestAnimationFrame(frame);
  }).observe(cv);
  requestAnimationFrame(frame);
})();

// ---------- pointer effects (desktop only) ----------
if (finePointer && !reduceMotion) {
  // Custom cursor: a dot that follows exactly and a ring that trails it.
  const dot = document.getElementById("cursorDot"), ring = document.getElementById("cursorRing");
  let cx = innerWidth / 2, cy = innerHeight / 2, rx = cx, ry = cy;
  document.body.classList.add("has-cursor");
  addEventListener("pointermove", (e) => {
    cx = e.clientX; cy = e.clientY;
    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    const t = e.target.closest(".card, .panel, .fcard.is-center, a, button");
    ring.classList.toggle("is-hover", !!t);
    ring.classList.toggle("is-card", !!(t && ["card", "fcard", "panel"].some((c) => t.classList.contains(c))));
  }, { passive: true });
  document.addEventListener("pointerleave", () => ring.classList.add("is-hidden"));
  document.addEventListener("pointerenter", () => ring.classList.remove("is-hidden"));
  (function follow() {
    rx += (cx - rx) * 0.18; ry += (cy - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(follow);
  })();

  // 3D tilt + spotlight on project cards.
  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    card.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
    card.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
    card.style.setProperty("--mx", `${px * 100}%`);
    card.style.setProperty("--my", `${py * 100}%`);
  });
  grid.addEventListener("pointerout", (e) => {
    const card = e.target.closest(".card");
    if (card && !card.contains(e.relatedTarget)) { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); }
  });

  // Magnetic buttons.
  document.querySelectorAll(".btn, .nav__cta, .socials a").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
    });
    b.addEventListener("pointerleave", () => { b.style.transform = ""; });
  });

  // Hero photo drifts gently against the pointer.
  const heroImg = document.querySelector(".hero__bg img");
  document.querySelector(".hero").addEventListener("pointermove", (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    heroImg.style.setProperty("--px", `${x * -18}px`);
    heroImg.style.setProperty("--py", `${y * -12}px`);
  });
}

// ---------- project inquiry → WhatsApp ----------
// The site has no backend, so the form composes the inquiry as a WhatsApp message to this number.
const WHATSAPP_NUMBER = "201152321914";
(function inquiry() {
  const form = document.getElementById("inquiry");
  const chips = [...document.querySelectorAll("#inqServices .chip")];
  const errBox = document.getElementById("inqError");
  const done = document.getElementById("inqDone");

  chips.forEach((c) => c.addEventListener("click", () => {
    c.setAttribute("aria-pressed", c.getAttribute("aria-pressed") !== "true");
    c.closest(".field").classList.remove("is-invalid");
  }));
  form.addEventListener("input", (e) => e.target.closest(".field")?.classList.remove("is-invalid"));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = (name) => form.elements[name].value.trim();
    const services = chips.filter((c) => c.getAttribute("aria-pressed") === "true").map((c) => c.textContent.trim());
    const email = v("email");

    const problems = [];
    const flag = (el, msg) => { el.closest(".field").classList.add("is-invalid"); problems.push(msg); };
    if (!v("name")) flag(form.elements.name, "your name");
    if (!services.length) flag(chips[0], "at least one service");
    if (!v("overview")) flag(form.elements.overview, "a short project overview");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) flag(form.elements.email, "a valid email (or leave it empty)");
    if (problems.length) {
      errBox.textContent = `Please add ${problems.join(", ")}.`;
      errBox.hidden = false;
      form.querySelector(".is-invalid input, .is-invalid textarea, .is-invalid .chip")?.focus();
      return;
    }
    errBox.hidden = true;

    // Optional fields left empty become null and are dropped; "" lines are intentional blank lines.
    const opt = (label, value) => (value ? `*${label}:* ${value}` : null);
    const lines = [
      "Hello Eslam, new project inquiry from your portfolio:",
      "",
      `*Name:* ${v("name")}`,
      opt("Phone", v("phone")),
      opt("Email", email),
      `*Services:* ${services.join(", ")}`,
      opt("Budget", v("budget")),
      opt("Timeline", v("timeline")),
      "",
      "*Project overview:*",
      v("overview"),
    ].filter((l) => l !== null);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    document.getElementById("inqRetry").href = url;
    window.open(url, "_blank", "noopener");
    done.hidden = false;
  });
})();

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- headlines: keep each phrase on one line, shrinking the type when a line would overflow ----------
function fitHeadlines() {
  document.querySelectorAll(".h2, .contact__title").forEach((h) => {
    h.style.fontSize = "";
    const box = h.parentElement, cs = getComputedStyle(box);
    // the headline's own box can be narrower than its parent (max-width), and the reveal clip-path cuts at that box
    const avail = Math.min(box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight), h.clientWidth);
    const r = document.createRange(); r.selectNodeContents(h);
    const need = r.getBoundingClientRect().width;
    if (need > avail) h.style.fontSize = Math.floor(parseFloat(getComputedStyle(h).fontSize) * avail / need * 0.98) + "px";
  });
}
fitHeadlines();
if (document.fonts) document.fonts.ready.then(fitHeadlines);
addEventListener("resize", fitHeadlines);
// ---------- service cards: cursor spotlight ----------
document.querySelectorAll(".service").forEach((card) => {
  card.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
});
// ---------- floating WhatsApp button: appears after the hero, hides over the contact form ----------
(() => {
  const fab = document.getElementById("waFab");
  if (!fab) return;
  const msg = "Hi Eslam, I saw your portfolio and I'd like to talk about a project.";
  fab.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  const contact = document.getElementById("contact");
  let inContact = false;
  if (contact && "IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { inContact = e.isIntersecting; update(); }, { threshold: 0.25 }).observe(contact);
  }
  function update() {
    fab.classList.toggle("is-shown", scrollY > innerHeight * 0.4);
    fab.classList.toggle("is-hidden", inContact);
  }
  addEventListener("scroll", update, { passive: true });
  setTimeout(update, 600);
})();

// ---------- reviews: "Share your feedback" opens WhatsApp with a ready message ----------
(() => {
  const link = document.getElementById("reviewLink");
  if (link) link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Eslam, I'd like to share my feedback about working with you: ")}`;
})();