import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Socials from './components/socials';
import FoodMenuPage from './pages/foodMenuPage';
import DrinkMenuPage from './pages/drinkMenuPage';
import WelcomePage from './pages/welcomePage';
import JobsPage from './pages/jobsPage';
import ScrollToTop from './utils/scrollToTop';
import PrivacyPolicyPage from './pages/privacyPolicyPage';
import TermsOfServicesPage from './pages/termsOfServicesPage';
import AccessibilityPage from './pages/accessibilityPage';
import VipRoomPage from './pages/vipRoomPage';
import GiftCardPage from './pages/giftCardPage';
import EventsPage from './pages/eventsPage';
import ParkingPage from './pages/parkingPage';
import DressCodePage from './pages/dressCodePage';
import ReservationPage from './pages/resrevationPage';
import { initGA4, trackPageView } from './utils/ga4/ga4-analytics';
import { headerData } from './components/dynamicHeader/routes';
import DynamicHeader from './components/dynamicHeader';
import useGDPRFacebookPixel from './utils/metaPixel/gdprFacebookPixel';
import FacebookPixelSetup from './utils/metaPixel/facebookPixelSteup';
import Button from './components/button';
import EventModal from './components/eventModal';
import { MODAL_INTERVAL_MS } from './components/eventModal/eventModal';

function App() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const [sideRef, setSideRef] = useState();
  const [showModalIcon, setShowModalIcon] = useState(false);
  const { consentGranted, grantConsent } = useGDPRFacebookPixel('1393362078221567');

  const normalizedPath = location.pathname.replace(/\/$/, '').split('?')[0];
  const currentRouteData = headerData[normalizedPath] || {
    title: 'Katsin',
    metaTags: [{ name: 'description', content: 'Default description' }],
    eventScripts: [],
  };

  useEffect(() => {
    initGA4(); // Initialize GA4 globally
  }, []);

  useEffect(() => {
    trackPageView(location.pathname); // Track page views on route changes
  }, [location]);

  useEffect(() => {
    const lastClosed = parseInt(localStorage.getItem('lastModalClosedAt'), 10);
    const now = Date.now();
    if (!isNaN(lastClosed) && now - lastClosed < MODAL_INTERVAL_MS) {
      setShowModalIcon(true);
    }
  }, []);

  useEffect(() => {
    const userConsented = localStorage.getItem('facebookPixelConsent') === 'true';

    if (userConsented && !consentGranted) {
      grantConsent();
    }
  }, [consentGranted, grantConsent]);

  const handleAcceptCookies = () => {
    grantConsent();
    localStorage.setItem('facebookPixelConsent', 'true');
  };

  return (
    <div className="App">
      <EventModal onClose={() => setShowModalIcon(true)} />
      <FacebookPixelSetup />
      <ScrollToTop />
      <Header
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        showModalIcon={showModalIcon}
      />
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} setSideRef={setSideRef} />
      <DynamicHeader
        title={currentRouteData.title}
        metaTags={currentRouteData.metaTags}
        eventScripts={currentRouteData.eventScripts}
      />
      <Routes>
        <Route path="/" element={<HomePage sideRef={sideRef} />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/menu" element={<FoodMenuPage />} />
        <Route path="/bar" element={<DrinkMenuPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/cards" element={<GiftCardPage />} />
        <Route path="/vip" element={<VipRoomPage />} />
        <Route path="/dress-code" element={<DressCodePage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-services" element={<TermsOfServicesPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
      <Socials />
      <Footer />
      {!consentGranted && (
        <div className="cookie-banner">
          <p>
            We use cookies to enhance your experience. By clicking "Accept", you consent to
            tracking.
          </p>
          <Button onClick={handleAcceptCookies}>Accept cookies</Button>
        </div>
      )}
    </div>
  );
}

export default App;
