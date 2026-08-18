import civil from '../assets/images/engineering-civil.webp';
import mechanical from '../assets/images/engineering-mechanical.webp';
import electrical from '../assets/images/engineering-electrical.webp';
import computer from '../assets/images/engineering-computer.webp';
import bridge from '../assets/images/project-bridge.webp';
import solar from '../assets/images/project-solar.webp';
import hvac from '../assets/images/project-hvac.webp';
import power from '../assets/images/project-power-systems.webp';
import automation from '../assets/images/project-automation.webp';
import embedded from '../assets/images/project-embedded.webp';
import home from '../assets/images/real-estate-home.webp';
import land from '../assets/images/real-estate-land.webp';
import heroRealEstate from '../assets/images/hero-real-estate.webp';

export const images = {
  // Engineering discipline cards
  'engineering-civil': {
    src: civil,
    alt: 'A multi-storey reinforced concrete building under construction, with tower cranes overhead and a site team in high-visibility vests.',
  },
  'engineering-mechanical': {
    src: mechanical,
    alt: 'An industrial robotic arm positioned above large steel gears on a manufacturing floor.',
  },
  'engineering-electrical': {
    src: electrical,
    alt: 'High-voltage transmission pylons and power lines against a blue sky.',
  },
  'engineering-computer': {
    src: computer,
    alt: 'A server room lined with equipment racks, with a laptop displaying code in the foreground.',
  },

  // Project imagery
  'project-bridge': {
    src: bridge,
    alt: 'Engineers reviewing drawings on a highway interchange under construction, with cranes and reinforcement steel around them.',
  },
  'project-solar': {
    src: solar,
    alt: 'Rows of photovoltaic panels across a large-scale solar installation.',
  },
  'project-hvac': {
    src: hvac,
    alt: 'Industrial HVAC ductwork and air handling units installed in a large building interior.',
  },
  'project-power-systems': {
    src: power,
    alt: 'Electrical switchgear and distribution equipment in a power systems installation.',
  },
  'project-automation': {
    src: automation,
    alt: 'An automated robotic assembly cell operating on a production line.',
  },
  'project-embedded': {
    src: embedded,
    alt: 'A close-up of a printed circuit board showing a microcontroller and surrounding components.',
  },

  // Real estate
  'real-estate-home': {
    src: home,
    alt: 'A modern two-storey family home with a landscaped lawn, photographed in warm evening light.',
  },
  'real-estate-land': {
    src: land,
    alt: 'An open green development plot with a for-sale sign, under a clear blue sky.',
  },
  'hero-real-estate': {
    src: heroRealEstate,
    alt: 'A contemporary architect-designed house at dusk, with lit interiors and a pool terrace.',
  },
};

/** Look up an image by key. Returns null if missing, so a typo degrades
 *  gracefully instead of crashing the build. */
export function img(key) {
  return images[key] ?? null;
}
