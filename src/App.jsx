import { useState } from 'react';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutSection from './components/AboutSection';
import GeographySection from './components/GeographySection';
import GovernmentSection from './components/GovernmentSection';
import EconomySection from './components/EconomySection';
import HomeSection from './components/HomeSection';
import BusinessSection from './components/BusinessSection';

const accessCode = "I'm gonna touch grass";

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [fontFamily, setFontFamily] = useState("'Corsair PE', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [accessError, setAccessError] = useState('');

  const handleFontChange = (value) => setFontFamily(value);

  const handleAccessSubmit = (event) => {
    event.preventDefault();

    if (codeInput.trim() === accessCode) {
      setIsUnlocked(true);
      setAccessError('');
      return;
    }

    setAccessError('Wrong code. Go touch grass and try again.');
  };

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

  if (!isUnlocked) {
    return (
      <div className="access-screen" style={{ '--app-font': fontFamily }}>
        <form className="access-panel" onSubmit={handleAccessSubmit}>
          <p className="access-kicker">JaJu Republics</p>
          <h1>Enter The Code</h1>
          <div className="access-field">
            <input
              type="text"
              value={codeInput}
              onChange={(event) => setCodeInput(event.target.value)}
              placeholder="Type the code"
              aria-label="Access code"
              autoFocus
            />
            <button type="submit">Enter</button>
          </div>
          {accessError ? <p className="access-error">{accessError}</p> : null}
        </form>
      </div>
    );
  }

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
