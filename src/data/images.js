import civil from '../assets/images/engineering-civil.jpg';
import mechanical from '../assets/images/engineering-mechanical.jpg';
import electrical from '../assets/images/engineering-electrical.jpg';
import computer from '../assets/images/engineering-computer.jpg';
import bridge from '../assets/images/project-bridge.jpeg';
import solar from '../assets/images/project-solar.jpg';
import hvac from '../assets/images/project-hvac.webp';
import power from '../assets/images/project-power-systems.jpg';
import automation from '../assets/images/project-automation.webp';
import embedded from '../assets/images/project-embedded.jpg';
import academicTutoring from '../assets/images/academic-tutoring.jpg';
import finance from '../assets/images/finance.jpg';
import home from '../assets/images/real-estate-home.jpg';
import land from '../assets/images/real-estate-land.jpeg';
import heroRealEstate from '../assets/images/hero-real-estate.jpg';
import teamFounder from '../assets/images/team-founder.jpeg';
import teamMechatronics from '../assets/images/team-Mechatronics-head.jpeg';
import teamElectrical from '../assets/images/team-electrical-head.jpeg';
import teamFinance from '../assets/images/team-finance-head.jpeg';
import teamComputer from '../assets/images/team-computer-head.png';
import teamNetworking from '../assets/images/team-networking-head.jpeg';

export const images = {
  // Engineering discipline cards
  'engineering-civil': {
    src: civil,
    alt: 'A three-storey reinforced concrete building under construction, its block walls still unrendered and balconies open.',
  },
  'engineering-mechanical': {
    src: mechanical,
    alt: 'Two technicians in high-visibility vests and a hard hat servicing a diesel generator set in a workshop.',
  },
  'engineering-electrical': {
    src: electrical,
    alt: 'A grid of fifteen photographs of finished ceilings with recessed and cove lighting installations.',
  },
  'engineering-computer': {
    src: computer,
    alt: 'A laptop on a desk displaying source code in a dark-themed editor.',
  },

  // Project imagery
  'project-bridge': {
    src: bridge,
    alt: 'A newly finished two-storey building with arched balconies, white columns with gold capitals and steel railings.',
  },
  'project-solar': {
    src: solar,
    alt: 'A wall-mounted solar inverter, battery unit and distribution board installed on a green interior wall.',
  },
  'project-hvac': {
    src: hvac,
    alt: 'Two engineers in hard hats inspecting an air handling unit beneath large ventilation ducts on a factory floor.',
  },
  'project-power-systems': {
    src: power,
    alt: 'An electrician in a blue hard hat on a ladder wiring a ceiling light fitting, with a colleague looking on.',
  },
  'project-automation': {
    src: automation,
    alt: 'A small robotic arm and conveyor prototype on a workshop bench, surrounded by monitors and tools.',
  },
  'project-embedded': {
    src: embedded,
    alt: 'A circuit simulation of an intruder detection system: a microcontroller board wired to an LCD, a motion sensor and indicator LEDs.',
  },
  'academic-tutoring': {
    src: academicTutoring,
    alt: 'A tutor working with a small group of students seated around laptops and notebooks.',
  },
  finance: {
    src: finance,
    alt: 'A Binance Academy certificate of completion for a Crypto Risk Management course, presented to Idriss Parfait.',
  },

  // Real estate
  'real-estate-home': {
    src: home,
    alt: 'The empty living room of a newly finished home, with polished dark floor tiles and a decorative ceiling lit in blue.',
  },
  'real-estate-land': {
    src: land,
    alt: 'An aerial rendering of a planned development: a courtyard building and rows of green-roofed houses along an access road.',
  },
  'hero-real-estate': {
    src: heroRealEstate,
    alt: 'A sloping, partly cleared plot of land with pawpaw trees and neighbouring rooftops under an overcast sky.',
  },
  'team-founder': {
  src: teamFounder,
  alt: 'Portrait of Engr Ekane Dilan, Founder and Managing Director of E.Ks Tech.',
  },
  'team-Mechatronics-head': {
  src: teamMechatronics,
  alt: 'Portrait of Engr Motale, Head of the Mechatronics team',
  },
  'team-electrical-head': {
  src: teamElectrical,
  alt: 'Portrait of Engr Meconzy Conrad, Head of the Electrical team',
  },
  'team-finance-head': {
  src: teamFinance,
  alt: "Portrait of Mr Idriss Parfait, General Manager of E.K's Tech",
  },
  'team-computer-head': {
  src: teamComputer,
  alt: 'Portrait of Engr. Frank Junior, Head of the computer engineering team',
  },
  'team-networking-head': {
  src: teamNetworking,
  alt: 'Portrait of Engr. Epiengande Daiel, Head of Network and Security team',
  },
};

/** Look up an image by key. Returns null if missing, so a typo degrades
 *  gracefully instead of crashing the build. */
export function img(key) {
  return images[key] ?? null;
}
