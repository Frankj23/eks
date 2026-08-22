/**
 * SITE CONFIGURATION
 *
 * Single source of truth for contact details, stats and social links.
 * `formAccessKey` below is the one value still outstanding.
 */

export const site = {
  name: "E.K's Tech",
  tagline: 'Engineering precision in technology, management and financial systems.',
  description:
    "E.K's Tech is a multi-disciplinary firm delivering engineering, academic support, real estate and financial services from Buea, Cameroon.",

  // Drives canonical URLs, og:url and sitemap.xml.
  url: 'https://ekstechub.com',

  contact: {
    phone: '+237650619020',
    phoneDisplay: '+237 6 50 61 90 20',
    whatsapp: '237650619020',
    email: 'engfj2003@gmail.com',
    address: 'Molyko, Buea',
    region: 'South-West Region, Cameroon',
  },

  // Web3Forms access key for the contact form. Get one free at
  // https://web3forms.com — you enter this address, they email you the key.
  // ⚠️ While this is the placeholder string, EVERY enquiry fails and the form
  // falls back to the email/WhatsApp links. See src/pages/contact.astro.
  formAccessKey: 'YOUR_ACCESS_KEY',

  // Add real profile URLs when the accounts exist. Any entry left null is
  // hidden from the footer —
  // this is why there are no "#" placeholder links anywhere in the build.
  social: {
    linkedin: null,
    facebook: null,
    instagram: null,
  },

  // Verified figures only. Leave a stat out entirely rather than inventing one.
  stats: [
    { value: '5+', label: 'Years of Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '500+', label: 'Students Supported' },
    { value: '30+', label: 'Clients Served' },
  ],
};
