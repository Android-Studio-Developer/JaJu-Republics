import Galaxy from '../component/Galaxy';
import FlagArtwork from './icons/FlagArtwork';

const facts = [
  { label: 'Continent', value: 'Asia' },
  { label: 'National Slogan', value: '귤이냐 굴이냐, 둘다 맜있다.' },
  { label: 'English Translation', value: '"Mandarin or oyster? Both are just delicious."' },
];

const values = [
  {
    title: 'Diversity With Flavor',
    text: 'JaJu Republics presents itself as a place where different traditions, foods, and stories all belong together.',
  },
  {
    title: 'Fresh Coastal Energy',
    text: 'The About Us story leans into the feel of sea breeze, moving water, and a calm island rhythm.',
  },
  {
    title: 'Up And Downs',
    text: 'The national identity is not polished into perfection. It feels human, uneven, and memorable on purpose.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about-page">
      <div className="about-hero">
        <div className="about-hero__galaxy">
          <Galaxy
            mouseRepulsion
            mouseInteraction
            density={1}
            glowIntensity={0.3}
            saturation={0.2}
            hueShift={140}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            repulsionStrength={2}
            autoCenterRepulsion={0}
            starSpeed={0.5}
            speed={1}
          />
        </div>

        <div className="about-hero__content">
          <p className="section-kicker">About Us</p>
          <h2>A Nation Full of Up &amp; Downs</h2>
          <p className="about-hero__lead">
            JaJu Republics gives you a taste of diversity and abundance. The page is now rebuilt in JSX so we can keep growing it with React-based experiences and animated visual layers.
          </p>
          <p className="about-hero__tagline">
            National Motto: <em>&quot;Unity, Progress, Prosperity&quot;</em>
          </p>
        </div>
      </div>

      <div className="about-layout">
        <article id="identity" className="panel panel--featured">
          <div className="panel__header">
            <div>
              <p className="section-kicker">National Identity</p>
              <h3>JaJu Republics</h3>
              <p className="country-tagline">A Nation full of Up &amp; Downs</p>
            </div>
            <div className="flag-card" aria-label="JaJu Republics flag">
              <FlagArtwork />
            </div>
          </div>

          <div className="facts-grid">
            {facts.map((fact) => (
              <div className="fact-card" key={fact.label}>
                <p>{fact.label}</p>
                <h4>{fact.value}</h4>
              </div>
            ))}
          </div>

          <p className="description">
            JaJu Republics gives you a great taste of diversity and abundance. For the suite and scent of the fresh, JaJu Republics&apos; wave of the waters will stress you down.
          </p>
        </article>

        <aside id="values" className="panel panel--stacked">
          <div className="panel panel--soft">
            <p className="section-kicker">Creative Direction</p>
            <h3>Why move this into React?</h3>
            <p>
              React gives this project room to grow beyond a single static page. We can break sections into components, plug in React Bits-style visuals, and keep the content easier to maintain.
            </p>
          </div>

          <div className="value-list">
            {values.map((value) => (
              <article className="panel value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
