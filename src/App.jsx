import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import AboutSection from './components/AboutSection';
import GeographySection from './components/GeographySection';
import GovernmentSection from './components/GovernmentSection';
import HomeSection from './components/HomeSection';

export default function App() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="page-main">
        <HomeSection />
        <AboutSection />
        <GeographySection />
        <GovernmentSection />
      </main>

      <SiteFooter />
    </div>
  );
}
