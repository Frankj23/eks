/**
 * DIVISION CONTENT
 *
 * Everything here is drawn from the original Stitch designs. Nothing is invented.
 * The fabricated items from earlier exports — "Business School", "Technology
 * Academy", "Tuition & Fees", "Scholarships", "Student Housing", "Mergers &
 * Acquisitions", "Fixed Income Research", "Division Portal", "Architecture
 * Registry" — are deliberately absent. E.K's Tech does not offer them.
 *
 * Copy is written to be operationally accurate and conservative. Confirm the
 * specifics (fees, coverage, durations) against how the firm actually works.
 */

export const divisions = {
  engineering: {
    id: 'engineering',
    slug: 'engineering',
    name: 'Engineering',
    fullName: 'Engineering Division',
    tagline: 'Precision Engineering, Delivered End to End',
    intro:
      'From structural design to embedded systems, we deliver engineering projects across four disciplines — planned, built and supervised by one accountable team.',
    cardBlurb:
      'Civil, mechanical, electrical and computer engineering — design, build and site supervision under one roof.',
    icon: 'engineering',
    hero: 'project-bridge',
    services: [
      {
        slug: 'civil',
        image: 'engineering-civil',
        title: 'Civil & Infrastructure',
        summary: 'Structural design, road construction and site supervision.',
        detail:
          'We handle structural analysis and design, road and drainage construction, and full-time site supervision — taking a project from survey through to handover.',
        capabilities: ['Structural Design', 'Road Construction', 'Site Supervision', 'Drainage & Earthworks'],
      },
      {
        slug: 'mechanical',
        image: 'engineering-mechanical',
        title: 'Mechanical & Manufacturing',
        summary: 'Installations, HVAC systems and fabrication.',
        detail:
          'Mechanical installation and maintenance for commercial and industrial facilities, including HVAC design and custom fabrication.',
        capabilities: ['Mechanical Installations', 'HVAC Systems', 'Fabrication', 'Preventive Maintenance'],
      },
      {
        slug: 'electrical',
        image: 'engineering-electrical',
        title: 'Electrical Power & Renewables',
        summary: 'Power systems, renewable energy and distribution.',
        detail:
          'Design and installation of electrical power systems, solar and renewable installations, and low-voltage distribution networks.',
        capabilities: ['Power Systems Design', 'Solar & Renewables', 'Distribution Networks', 'Backup & Standby Power'],
      },
      {
        slug: 'computer',
        image: 'engineering-computer',
        title: 'Computer Engineering & IoT',
        summary: 'Embedded systems, automation and IoT solutions.',
        detail:
          'Embedded hardware and firmware, industrial automation, and connected sensing systems built for the environments they run in.',
        capabilities: ['Embedded Systems', 'Industrial Automation', 'IoT Solutions', 'Control Systems'],
      },
    ],
    process: [
      { title: 'Consultation', text: 'We scope the problem, the site and the constraints before proposing anything.' },
      { title: 'Design & Costing', text: 'Detailed technical design with a transparent bill of quantities.' },
      { title: 'Execution', text: 'Build and installation with documented progress at every stage.' },
      { title: 'Handover & Support', text: 'Testing, commissioning, documentation and ongoing maintenance.' },
    ],
    faqs: [
      { q: 'Do you work outside the South-West Region?', a: 'Yes. We are based in Buea and work across the South-West and Littoral regions as standard, including Douala and Limbe. Projects further afield are taken case by case — travel and accommodation are quoted separately and agreed up front, never added afterwards.' },
      { q: 'Can you take over a project that has already started?', a: 'Often, yes. We begin with a paid condition assessment: what has been built, what drawings and approvals exist, and what has to be corrected before work continues. That report is yours to keep whether or not you engage us for the remaining work. We will not sign off on work we have not inspected.' },
      { q: 'How are projects priced?', a: 'Every quote is built from a bill of quantities — materials, labour, plant and contingency listed line by line, so you can see what each figure covers. Design and supervision are priced separately from construction. Once the BOQ is signed the price is fixed; variations are raised in writing only when scope genuinely changes.' },
      { q: 'Do you provide post-installation maintenance?', a: 'Yes. Every installation is handed over with a defects liability period, and we offer scheduled maintenance agreements — typically quarterly or biannual — covering inspection, servicing and priority call-out. Maintenance is optional and quoted separately; it is never bundled into the build price without your agreement.' },
    ],
  },

  academic: {
    id: 'academic',
    slug: 'academic',
    name: 'Academic Services',
    fullName: 'Academic Services',
    tagline: 'Practical Support for Engineering Students',
    intro:
      'Structured internship placements and rigorous project supervision for Electrical & Electronic Engineering students moving from coursework into professional practice.',
    cardBlurb:
      'Internship placements and project and report writing support for engineering students.',
    icon: 'school',
    hero: 'project-embedded',
    services: [
      {
        slug: 'internships',
        image: 'project-power-systems',
        title: 'Internship Programs',
        summary: 'Supervised placements on live engineering projects.',
        detail:
          'Students join real project teams under the supervision of practising engineers, with defined learning objectives and a written assessment at the end of the placement.',
        capabilities: ['Site-based placements', 'Assigned supervisor', 'Defined learning objectives', 'Written assessment & certificate'],
      },
      {
        slug: 'report-writing',
        image: 'project-embedded',
        title: 'Project & Report Writing Support',
        summary: 'Structure, methodology and technical writing guidance.',
        detail:
          'Guidance on framing a research question, choosing a methodology, presenting results and writing to academic standard. We supervise and review — we do not write work on a student\u2019s behalf.',
        capabilities: ['Topic & scope refinement', 'Methodology guidance', 'Technical writing review', 'Presentation preparation'],
      },
    ],
    process: [
      { title: 'Apply', text: 'Submit the enquiry form with your institution, level of study and area of interest.' },
      { title: 'Assessment', text: 'We review your background and confirm a suitable placement or supervisor.' },
      { title: 'Placement', text: 'You join a project team with a named supervisor and clear objectives.' },
      { title: 'Assessment & Certificate', text: 'Written evaluation and a certificate on completion.' },
    ],
    faqs: [
      { q: 'Who is eligible to apply?', a: 'Students currently enrolled in an engineering or applied science programme at a recognised Cameroonian institution — HTTTC, the Faculty of Engineering and Technology, COT and equivalent programmes — from HND, B.Tech and B.Eng level upward. You must be in good standing and able to provide a letter from your department.' },
      { q: 'How long does a placement last?', a: 'Most placements run six to twelve weeks and are timed around the academic calendar so they do not clash with your coursework. Project and report supervision runs to your submission deadline instead, and the schedule is agreed at the start so both sides know what to expect.' },
      { q: 'Is there a fee?', a: 'Fees depend on the type of support and are confirmed in writing before anything begins — nothing is added later. Ask us for the current schedule when you apply, and tell us if cost is a barrier; we would rather discuss it than lose a capable student.' },
      { q: 'Will you write my project report for me?', a: 'No. We supervise, guide and review your work. The work must be your own — this protects both your academic standing and ours.' },
    ],
  },

  'real-estate': {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    fullName: 'Real Estate Division',
    tagline: 'Property, Rentals and Project Management',
    intro:
      'Buying, renting or developing — we source property, manage rentals and run construction projects with the same engineering discipline we bring to everything else.',
    cardBlurb:
      'Property listings, rental sourcing and end-to-end real estate project management.',
    icon: 'apartment',
    hero: 'hero-real-estate',
    services: [
      {
        slug: 'listings',
        image: 'real-estate-home',
        title: 'Browse Listings',
        summary: 'Available properties for sale and for rent.',
        detail:
          'Verified listings with clear pricing, location and specifications. Each property is inspected before it goes on the list.',
        capabilities: ['Residential sales', 'Commercial spaces', 'Land', 'Verified inspections'],
      },
      {
        slug: 'list-property',
        image: 'real-estate-land',
        title: 'List Your Property',
        summary: 'Put your property in front of serious buyers and tenants.',
        detail:
          'We photograph, price and market your property, screen enquiries and handle viewings so you only meet qualified prospects.',
        capabilities: ['Valuation & pricing', 'Photography & listing', 'Enquiry screening', 'Viewing management'],
      },
      {
        slug: 'rentals',
        image: 'real-estate-home',
        title: 'Rental Sourcing',
        summary: 'We find the rental that matches your brief and budget.',
        detail:
          'Tell us the area, budget and requirements. We shortlist properties, arrange viewings and support you through the agreement.',
        capabilities: ['Requirement brief', 'Shortlisting', 'Viewing coordination', 'Agreement support'],
      },
      {
        slug: 'project-management',
        image: 'project-bridge',
        title: 'Project Management',
        summary: 'Construction and development managed end to end.',
        detail:
          'For owners developing a site: we manage contractors, schedule, budget and quality from groundbreaking to completion.',
        capabilities: ['Contractor management', 'Schedule & budget control', 'Quality assurance', 'Progress reporting'],
      },
    ],
    process: [
      { title: 'Brief', text: 'We capture your requirements, budget and timeline.' },
      { title: 'Search or Survey', text: 'We shortlist properties, or survey and cost your site.' },
      { title: 'Viewings & Due Diligence', text: 'Inspections, title verification and negotiation support.' },
      { title: 'Completion', text: 'Agreement, handover and ongoing management if required.' },
    ],
    faqs: [
      { q: 'Do you verify property titles?', a: 'Yes, and we treat it as non-negotiable. Before a property is listed we check the land certificate at the Land Registry, confirm the seller identity and authority to sell, and look for encumbrances, disputes or overlapping claims. If a title cannot be verified we will not list the property — which is why our list is shorter than some.' },
      { q: 'What are your agency fees?', a: 'Fees are a percentage of the transaction value for sales, and a set portion of the agreed rent for lettings. The exact figure is confirmed in writing before we act for you, and we do not take a commission from both sides of the same transaction.' },
      { q: 'Which areas do you cover?', a: 'Buea and the surrounding South-West towns are our core area, with selected listings in Limbe and Douala. If you are looking outside that area, tell us anyway — we will either help or point you to someone reputable who can.' },
      { q: 'Can you manage a rental on my behalf?', a: 'Yes. Full management covers tenant sourcing and vetting, rent collection, routine inspections and coordinating repairs, with a statement issued to you each period. It suits owners living outside the region or abroad. Terms and the management fee are agreed in writing before we take over.' },
    ],
  },

  finance: {
    id: 'finance',
    slug: 'finance',
    name: 'Finance & Management',
    fullName: 'Finance & Management Services',
    tagline: 'Financial Clarity for Businesses and Individuals',
    intro:
      'From startup fundraising to personal investment planning — we help you plan, forecast and grow with confidence.',
    cardBlurb:
      'Financial planning, forecasting and advisory for businesses raising capital and individuals building wealth.',
    icon: 'monitoring',
    hero: null,
    services: [
      {
        slug: 'business',
        title: 'For Businesses & Startups',
        summary: 'Scale your venture with data-driven financial strategy.',
        detail:
          'Engineering robust financial infrastructure for scalable growth — the analytical rigour modern enterprises and high-growth startups require.',
        capabilities: [
          'Financial Planning & Forecasting',
          'Fundraising Support',
          'Business Valuation',
          'Cost Analysis & Pricing Strategy',
          'KPI Dashboard Setup',
          'Due Diligence',
        ],
        items: [
          { anchor: 'planning', title: 'Financial Planning & Forecasting', text: 'Financial models projecting revenue, cash flow and runway.' },
          { anchor: 'fundraising', title: 'Fundraising Support', text: 'Pitch deck financials, valuation modelling and investor Q&A preparation.' },
          { anchor: 'valuation', title: 'Business Valuation', text: 'DCF and comparables analysis for accurate enterprise valuation.' },
          { anchor: 'pricing', title: 'Cost Analysis & Pricing Strategy', text: 'Margin optimisation, unit economics and pricing model architecture.' },
          { anchor: 'kpi', title: 'KPI Dashboard Setup', text: 'Operational and financial dashboards for real-time performance tracking.' },
          { anchor: 'diligence', title: 'Due Diligence', text: 'Financial health audits for mergers, acquisitions and partnerships.' },
        ],
      },
      {
        slug: 'personal',
        title: 'For Individuals',
        summary: 'Secure your future with personalised wealth planning.',
        detail:
          'Applying institutional-grade analysis to personal wealth — objective, structured planning to secure your financial future.',
        capabilities: [
          'Personal Financial Planning',
          'Investment Advisory',
          'Financial Modeling for Big Purchases',
          'Credit Score Improvement Plan',
        ],
        items: [
          { anchor: 'planning', title: 'Personal Financial Planning', text: 'Holistic assessment of income, expenses and long-term goals to build a structured wealth plan.' },
          { anchor: 'advisory', title: 'Investment Advisory', text: 'Risk-adjusted portfolio allocation tailored to your timeline and objectives.' },
          { anchor: 'modeling', title: 'Financial Modeling for Big Purchases', text: 'Scenario analysis for property, education funding or significant asset purchases.' },
          { anchor: 'credit', title: 'Credit Score Improvement Plan', text: 'Structured timelines for debt restructuring and credit profile optimisation.' },
        ],
      },
    ],
    process: [
      { title: 'Discovery', text: 'We understand your position, goals and constraints.' },
      { title: 'Analysis', text: 'We model the numbers and stress-test the assumptions.' },
      { title: 'Recommendation', text: 'A written plan with clear options and trade-offs.' },
      { title: 'Review', text: 'Scheduled reviews as circumstances change.' },
    ],
    faqs: [
      { q: 'What is your regulatory status?', a: 'We operate as a management and financial consultancy. We do not hold client funds, sell financial products, or act as a licensed investment advisor or broker. Our work is planning, forecasting, modelling and business advisory. Where an engagement would require regulated advice, we will say so plainly and refer you to an appropriately licensed professional.' },
      { q: 'How are your services priced?', a: 'Defined pieces of work — a business plan, a financial model, a forecast — are quoted as a fixed fee agreed before we start. Ongoing advisory runs on a monthly retainer. We do not charge a percentage of funds raised, so our advice is not tied to any particular outcome.' },
      { q: 'Do you work with early-stage startups?', a: 'Yes, including pre-revenue businesses. Early-stage work usually starts with a short scoping engagement — a financial model and a realistic funding plan — rather than a long retainer, so the cost stays proportionate to the stage you are at.' },
      { q: 'Is my financial information kept confidential?', a: 'Yes. Every engagement is covered by a written confidentiality agreement, and we will sign your NDA if you have one. Your information is shared only with the colleagues working on your engagement, and never with another client. We can put this in place before you send us anything sensitive.' },
    ],
  },
};

export const divisionList = Object.values(divisions);
