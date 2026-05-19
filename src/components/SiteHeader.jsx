import BrandLogo from './icons/BrandLogo';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'geography', label: 'Geography' },
  { id: 'government', label: 'Government' },
  { id: 'economy', label: 'Economy' },
  { id: 'business', label: 'Business' },
];

export default function SiteHeader({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="brand">
          <BrandLogo />
          <div>
            <p className="brand__eyebrow">Republic of Imagination</p>
            <h1>JaJu Republics</h1>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={link.id === activePage ? 'active' : ''}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
