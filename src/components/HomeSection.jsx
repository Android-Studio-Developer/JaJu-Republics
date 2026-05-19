import FlagArtwork from './icons/FlagArtwork';
import CardSwap, { Card } from './CardSwap';

export const quickFacts = [
  { label: 'Location', value: 'Asia' },
  { label: 'Government Type', value: 'Presidential Republic' },
  { label: 'Legislature', value: 'KukHwae (국회)' },
  { label: 'System', value: 'Democratic' },
];

export const homeCards = [
  {
    id: 'about',
    icon: 'ℹ️',
    title: 'About Us',
    text: 'Learn about our country and people.',
  },
  {
    id: 'geography',
    icon: '🗺️',
    title: 'Geography',
    text: 'See our lands and nature.',
  },
  {
    id: 'government',
    icon: '🏛️',
    title: 'Government',
    text: 'How our leaders and government work.',
  },
  {
    id: 'economy',
    icon: '💰',
    title: 'Economy',
    text: 'Explore our currency, trade, and economic freedom.',
  },
  {
    id: 'business',
    icon: '🏪',
    title: 'Business',
    text: 'See a simple business plan with easy questions and answers.',
  },
];

export const whyVisit = [
  {
    title: 'Location',
    text: "We're in Asia. We have mountains, beaches, and small towns.",
  },
  {
    title: 'Culture',
    text: 'We have many traditions and tasty food.',
  },
  {
    title: 'Explore',
    text: 'Read about our land and people.',
  },
];

export default function HomeSection({ onNavigate }) {
  const handleCardJump = (id) => {
    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <section id="home" className="home-section container">
      <section className="hero">
        <div className="hero-content">
          <div>
            <h2>Welcome to JaJu Republics</h2>
            <p className="lead">Discover a unique country in Asia</p>
            <p className="tagline">National Motto: <em>"<b>Touch Grass lil bro</b>"</em></p>
          </div>
          <div className="hero-flag">
            <FlagArtwork />
          </div>
        </div>
      </section>

      <section className="nav-cards-container nav-cards-container--swap">
        <div className="nav-swap-copy">
          <p className="section-kicker">Section Navigator</p>
          <h3 className="section-title">Explore JaJu Republics</h3>
          <p className="nav-cards-copy">Use the stacked cards to move through the story of JaJu Republics. Each card leads directly to its section.</p>
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
                <span className="nav-swap-link">Open</span>
              </Card>
            ))}
          </CardSwap>
        </div>
      </section>

      <section className="quick-facts">
        <div className="panel-header-row">
          <h3 className="section-title">Quick Facts</h3>
          <span className="panel-action">•</span>
        </div>
        <div className="quick-facts-grid">
          {quickFacts.map((fact) => (
            <div className="fact-box" key={fact.label}>
              <h4>{fact.label}</h4>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-visit-panel">
        <div className="panel-header-row">
          <h3 className="section-title">Why Visit JaJu?</h3>
          <button type="button" className="panel-action-button">+</button>
        </div>
        <p className="why-visit-copy">A short summary of why people should visit JaJu Republics will go here.</p>
      </section>
    </section>
  );
}
