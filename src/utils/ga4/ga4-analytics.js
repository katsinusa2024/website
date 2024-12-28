import ReactGA from 'react-ga4';

const ga4PropertyIds = [
    "G-DEN2PG8KR2", // Your primary GA4 property
    "G-V6EXKBL0XP"  // Your second GA4 property
];

export const initGA4 = () => {
    ReactGA.initialize(ga4PropertyIds.map(id => ({trackingId: id})));
};

export const trackPageView = (path) => {
    // Track page view
    ReactGA.send({ hitType: "pageview", page: path });
};