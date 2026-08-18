/**
 * DIVISION CONTENT
 *
 * Everything here is drawn from the original Stitch designs. Nothing is invented.
 * The fabricated items from earlier exports — "Business School", "Technology
 * Academy", "Tuition & Fees", "Scholarships", "Student Housing", "Mergers &
 * Acquisitions", "Fixed Income Research", "Division Portal", "Architecture
 * Registry" — are deliberately absent. E.K's Tech does not offer them.
 *
 * Replace `TODO` copy with the client's own wording before launch.
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
      { q: 'Do you work outside the South-West Region?', a: 'TODO — confirm coverage area with the client.' },
      { q: 'Can you take over a project that has already started?', a: 'TODO — confirm policy on inherited projects.' },
      { q: 'How are projects priced?', a: 'TODO — describe the quoting and bill-of-quantities process.' },
      { q: 'Do you provide post-installation maintenance?', a: 'TODO — describe maintenance agreements offered.' },
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
      { q: 'Who is eligible to apply?', a: 'TODO — confirm eligible institutions and levels of study.' },
      { q: 'How long does a placement last?', a: 'TODO — confirm typical duration.' },
      { q: 'Is there a fee?', a: 'TODO — confirm fee structure, if any.' },
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
      { q: 'Do you verify property titles?', a: 'TODO — describe the due diligence process.' },
      { q: 'What are your agency fees?', a: 'TODO — confirm fee structure.' },
      { q: 'Which areas do you cover?', a: 'TODO — confirm coverage.' },
      { q: 'Can you manage a rental on my behalf?', a: 'TODO — confirm property management terms.' },
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
      { q: 'Are you licensed financial advisors?', a: 'TODO — state licensing and regulatory status accurately. This matters legally.' },
      { q: 'How are your services priced?', a: 'TODO — confirm fee structure.' },
      { q: 'Do you work with early-stage startups?', a: 'TODO — confirm minimum engagement.' },
      { q: 'Is my financial information kept confidential?', a: 'TODO — describe confidentiality terms.' },
    ],
  },
};

export const divisionList = Object.values(divisions);
