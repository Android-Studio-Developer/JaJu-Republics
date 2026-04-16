import FlagArtwork from './icons/FlagArtwork';
import CardSwap, { Card } from './CardSwap';

const quickFacts = [
  { label: 'Location', value: 'Asia' },
  { label: 'Government Type', value: 'Presidential Republic' },
  { label: 'Legislature', value: 'KukHwae (국회)' },
  { label: 'System', value: 'Democratic' },
];

const homeCards = [
  {
    id: 'about',
    icon: 'ℹ️',
    title: 'About Us',
    text: "Learn about our nation's identity, heritage, and values.",
  },
  {
    id: 'geography',
    icon: '🗺️',
    title: 'Geography',
    text: 'Discover our landscapes, climate, and natural wonders.',
  },
  {
    id: 'government',
    icon: '🏛️',
    title: 'Government',
    text: 'Understand our democratic system and public institutions.',
  },
];

const whyVisit = [
  {
    title: 'Location',
    text: 'Located in the heart of Asia, JaJu Republics is a vibrant nation with diverse landscapes.',
  },
  {
    title: 'Culture',
    text: 'The republic blends civic ideals, island identity, and memorable local traditions into one experience.',
  },
  {
    title: 'Explore',
    text: 'Learn about our geography, heritage, and the taste of JaJu Republics.',
  },
];

export default function HomeSection() {
  const handleCardJump = (id) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section id="home" className="home-section container">
      <div className="hero">
        <div className="hero-content">
          <div>
            <h2>Welcome to JaJu Republics</h2>
            <p className="lead">Discover a unique country in Asia with a rich culture, vibrant spirit, and democratic values.</p>
            <p className="tagline">
              National Motto: <em>&quot;Unity, Progress, Prosperity&quot;</em>
            </p>
          </div>
          <div className="hero-flag">
            <FlagArtwork />
          </div>
        </div>
      </div>

      <div className="nav-cards-container nav-cards-container--swap">
        <div className="nav-swap-copy">
          <p className="section-kicker">Section Navigator</p>
          <h3 className="section-title">Explore JaJu Republics</h3>
          <p className="nav-cards-copy">
            Use the stacked cards to move through the story of JaJu Republics. Each card leads directly to its section.
          </p>
        </div>
        <div className="nav-swap-stage">
          <CardSwap width={340} height={230} cardDistance={26} verticalDistance={30} delay={4500} pauseOnHover>
            {homeCards.map((card) => (
              <Card
                key={card.id}
                customClass="nav-swap-card"
                role="button"
                tabIndex={0}
                onClick={() => handleCardJump(card.id)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleCardJump(card.id);
                  }
                }}
              >
                <div className="nav-swap-card__header">
                  <span className="nav-card-icon">{card.icon}</span>
                  <span className="nav-swap-chip">Jump</span>
                </div>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
                <span className="nav-swap-link">Open section</span>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>

      <div className="quick-facts">
        <h3 className="section-title">Quick Facts</h3>
        <div className="quick-facts-grid">
          {quickFacts.map((fact) => (
            <div className="fact-box" key={fact.label}>
              <h4>{fact.label}</h4>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="features">
        {whyVisit.map((item) => (
          <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
