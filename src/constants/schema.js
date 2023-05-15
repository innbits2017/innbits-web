export const socialmediaschema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Neetable | Web and Mobile App Development Company in India & USA',
  'url': 'https://neetable.com/',
  'sameAs': ['https://www.facebook.com/neetable/', 'https://twitter.com/myneetable', 'https://in.linkedin.com/company/neetable', 'https://www.instagram.com/neetable/', 'https://in.pinterest.com/neetable/'],
};

export const organizationSchema = { '@context': 'http://schema.org', '@type': 'Organization', 'name': 'Neetable', 'logo': 'https://neetable.com/img/neetable-logo.png', 'url': 'https://neetable.com/' };

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Neetable | Web & Mobile App Development Company in India, USA',
  'url': 'https://neetable.com/',
  'logo': 'https://neetable.com/img/neetablelogo.svg',
  'image': 'https://neetable.com/img/neetablelogo.svg',
  'description': 'We are best Web & Mobile app development companies in USA & India for Startups &amp; Enterprise, provides high-quality android, ios &amp; web development services.',
  'telephone': '+91 9971004859',
  'pricerange': 'Call US: +91 9971004859 | Mail US: sales@neetable.com',
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 12.938280826668452,
    'longitude': 77.69956251534151,
  },
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.9',
    'bestRating': '5',
    'ratingCount': '1550',
  },
  'address': {
    '@type': 'PostalAddress',
    'addressLocality': 'Bengaluru',
    'addressRegion': 'IN',
    'streetAddress': '4th Floor, Vaswani Presidio, Panathur Main Rd, New Kaverappa Layout, Kaverappa Layout, Kadubeesanahalli',
    'postalCode': '560103',
  },
  'openingHours': ['Mo-Fri 10:00AM-08:00PM'],
};

export const ProfessionalServices = {
  "@context": "http://schema.org",
  "@type": "ProfessionalService",
  "priceRange": "$25 - $49",
  "name": "Mobile App Development Company | Neetable",
  "url": "https://neetable.com/services/mobile-development",
  "image": "https://neetable.com/img/services/mobile-development/mobile-app-development-1.png",
  "description": "Neetable mobile app development team delivers on the promise of a feature rich application with a robust backend. We develop trusted applications using iOS, Android and cross-platform solutions.",
  "telephone": "+91 9971004859",
  "areaServed": ["Bengaluru", "Mumbai", "Gurgaon", "Chennai", "Hyderabad", "India", "USA"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "401, Vaswani Presidio, Panathur Main Rd, Kadubeesanahalli,",
    "addressLocality": "Bengaluru",
    "addressRegion": "IN",
    "postalCode": "560103"
  }
};

export const BreadCrumbList = {

  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home Page",
    "item": "https://neetable.com/"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Mobile App Development",
    "item": "https://neetable.com/services/mobile-development"
  }]

};