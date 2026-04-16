import BrandLogo from './icons/BrandLogo';

export default function SiteHeader() {
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
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#geography">Geography</a>
          <a href="#government">Government</a>
        </nav>
      </div>
    </header>
  );
}
