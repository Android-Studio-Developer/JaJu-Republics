import { useState } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutSection from './components/AboutSection';
import GeographySection from './components/GeographySection';
import GovernmentSection from './components/GovernmentSection';
import EconomySection from './components/EconomySection';
import HomeSection from './components/HomeSection';
import BusinessSection from './components/BusinessSection';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [fontFamily, setFontFamily] = useState("'Corsair PE', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");

  const handleFontChange = (value) => setFontFamily(value);

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutSection />;
      case 'geography':
        return <GeographySection />;
      case 'government':
        return <GovernmentSection />;
      case 'economy':
        return <EconomySection />;
      case 'business':
        return <BusinessSection />;
      default:
        return <HomeSection onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="site-shell" style={{ '--app-font': fontFamily }}>
      <SiteHeader
        activePage={activePage}
        onNavigate={setActivePage}
        selectedFont={fontFamily}
        onFontChange={handleFontChange}
      />

      <main className="page-main">{renderPage()}</main>

      <SiteFooter />
    </div>
  );
}
