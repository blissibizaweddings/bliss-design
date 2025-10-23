const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

const closeNav = () => {
  siteNav.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });
}

const marker = document.querySelector('.map-marker');
const mapTitle = document.getElementById('map-title');
const mapDescription = document.getElementById('map-description');
const mapHighlights = document.getElementById('map-highlights');
const mapImage = document.getElementById('map-image');
const mapButtons = document.querySelectorAll('.map-button');

const locations = {
  'dalt-vila': {
    title: 'Ibiza Town & Dalt Vila',
    description: 'Historic sandstone walls set the stage for rooftop vows and modernist terraces that glow against the old town skyline. We play with architectural lines, warm light and curated soundscapes to echo the city’s rhythm.',
    coords: [68, 28],
    highlights: [
      'Rooftop welcome cocktails overlooking the citadel',
      'Modernist villas for late-night after-parties',
    ],
    image: '../framerusercontent.com/images/cjcFh2gejAv9ITlcJoNN5mZj8.png?width=1582&height=1000',
    alt: 'Candlelit dinner overlooking Dalt Vila',
  },
  'santa-gertrudis': {
    title: 'Santa Gertrudis Fincas',
    description: 'Whitewashed farmhouses surrounded by citrus groves become the canvas for laid-back luxury. We layer handwoven textiles, abundant florals and family-style feasts beneath the stars.',
    coords: [48, 44],
    highlights: [
      'Courtyard ceremonies framed with wild olive branches',
      'Farm-to-table menus with live fire kitchens',
    ],
    image: '../framerusercontent.com/images/BvgJ6oXoULm3SI0Z1oInZjpgDk.png?width=1582&height=956',
    alt: 'Garden wedding dinner in Santa Gertrudis',
  },
  'es-vedra': {
    title: 'Es Vedrà Viewpoints',
    description: 'Sheer cliffs and horizon lines inspire bold, sculptural designs. We choreograph sunset ceremonies, floating stages and soundscapes that mirror the island’s magnetic energy.',
    coords: [16, 70],
    highlights: [
      'Golden-hour ceremonies with panoramic views',
      'Immersive lighting design and live instrumental sets',
    ],
    image: '../framerusercontent.com/images/EbBYByP3WdirFfVIaRWZLt2YQ.jpg',
    alt: 'Couple standing on a cliff near Es Vedrà at sunset',
  },
  formentera: {
    title: 'Formentera Shores',
    description: 'Powder-white sand and crystalline waters call for barefoot elegance. We design fluid weekend itineraries with boat flotillas, beach club takeovers and moonlit dinners on the shore.',
    coords: [86, 86],
    highlights: [
      'Sail-in welcome parties aboard wooden llaüts',
      'Seaside ceremonies followed by candlelit dinners on teak tables',
    ],
    image: '../framerusercontent.com/images/FD58Vk0kC62St7eGRCM6uDkWv0E.jpg',
    alt: 'Wedding reception set on the beach in Formentera',
  },
};

const setActiveLocation = (key) => {
  const data = locations[key];
  if (!data) return;

  mapButtons.forEach((button) => {
    const isActive = button.dataset.location === key;
    button.setAttribute('aria-pressed', String(isActive));
  });

  if (mapTitle) mapTitle.textContent = data.title;
  if (mapDescription) mapDescription.textContent = data.description;
  if (marker) {
    marker.style.setProperty('--x', `${data.coords[0]}%`);
    marker.style.setProperty('--y', `${data.coords[1]}%`);
  }

  if (mapHighlights) {
    mapHighlights.replaceChildren();
    data.highlights.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      mapHighlights.appendChild(li);
    });
  }

  if (mapImage) {
    mapImage.src = data.image;
    mapImage.alt = data.alt;
  }
};

if (mapButtons.length) {
  mapButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveLocation(button.dataset.location);
    });
  });

  const initial = mapButtons[0].dataset.location;
  setActiveLocation(initial);
}

const yearTarget = document.getElementById('copyright-year');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
