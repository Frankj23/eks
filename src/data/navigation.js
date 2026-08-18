/**
 * SINGLE SOURCE OF TRUTH FOR ALL NAVIGATION.
 *
 * Every menu, every dropdown, every footer column and the mobile drawer
 * are generated from this one file. Change a label or a path here and it
 * updates everywhere at once.
 *
 * RULE: if a path appears here, a page must exist for it. Nothing points at "#".
 */

export const nav = [
  {
    id: 'engineering',
    label: 'Engineering',
    href: '/engineering',
    blurb: 'Design, build and delivery across four disciplines.',
    columns: [
      {
        heading: 'Disciplines',
        links: [
          { label: 'Civil & Infrastructure', href: '/engineering/civil' },
          { label: 'Mechanical & Manufacturing', href: '/engineering/mechanical' },
          { label: 'Electrical Power & Renewables', href: '/engineering/electrical' },
          { label: 'Computer Engineering & IoT', href: '/engineering/computer' },
        ],
      },
      {
        heading: 'More',
        links: [
          { label: 'Engineering Overview', href: '/engineering' },
          { label: 'Our Process', href: '/engineering#process' },
          { label: 'Engineering Projects', href: '/portfolio' },
        ],
      },
    ],
  },
  {
    id: 'academic',
    label: 'Academic',
    href: '/academic',
    blurb: 'Support for Electrical & Electronic Engineering students.',
    columns: [
      {
        heading: 'Services',
        links: [
          { label: 'Internship Programs', href: '/academic/internships' },
          { label: 'Project & Report Writing Support', href: '/academic/report-writing' },
        ],
      },
      {
        heading: 'More',
        links: [
          { label: 'Academic Overview', href: '/academic' },
          { label: 'Student Project Gallery', href: '/academic/projects' },
          { label: 'Eligibility & How to Apply', href: '/academic/apply' },
        ],
      },
    ],
  },
  {
    id: 'real-estate',
    label: 'Real Estate',
    href: '/real-estate',
    blurb: 'Property, rentals and project management.',
    columns: [
      {
        heading: 'Property',
        links: [
          { label: 'Browse Listings', href: '/real-estate/listings' },
          { label: 'List Your Property', href: '/real-estate/list-property' },
          { label: 'Rental Sourcing', href: '/real-estate/rentals' },
        ],
      },
      {
        heading: 'More',
        links: [
          { label: 'Real Estate Overview', href: '/real-estate' },
          { label: 'Project Management', href: '/real-estate/project-management' },
          { label: 'How It Works', href: '/real-estate#process' },
        ],
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    href: '/finance',
    blurb: 'Financial clarity for businesses and individuals.',
    columns: [
      {
        heading: 'For Businesses & Startups',
        links: [
          { label: 'Financial Planning & Forecasting', href: '/finance/business#planning' },
          { label: 'Fundraising Support', href: '/finance/business#fundraising' },
          { label: 'Business Valuation', href: '/finance/business#valuation' },
          { label: 'Cost Analysis & Pricing', href: '/finance/business#pricing' },
          { label: 'KPI Dashboard Setup', href: '/finance/business#kpi' },
          { label: 'Due Diligence', href: '/finance/business#diligence' },
        ],
      },
      {
        heading: 'For Individuals',
        links: [
          { label: 'Personal Financial Planning', href: '/finance/personal#planning' },
          { label: 'Investment Advisory', href: '/finance/personal#advisory' },
          { label: 'Financial Modeling for Big Purchases', href: '/finance/personal#modeling' },
          { label: 'Credit Score Improvement Plan', href: '/finance/personal#credit' },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    href: '/about',
    simple: true,
    columns: [
      {
        heading: null,
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
  },
];

/** Footer columns. Reuses the same paths so nothing can drift. */
export const footerColumns = [
  {
    heading: 'Divisions',
    links: [
      { label: 'Engineering', href: '/engineering' },
      { label: 'Academic Services', href: '/academic' },
      { label: 'Real Estate', href: '/real-estate' },
      { label: 'Finance & Management', href: '/finance' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];
