import Galaxy from '../component/Galaxy';
import FlagArtwork from './icons/FlagArtwork';

const facts = [
  { label: 'Continent', value: 'Asia' },
  { label: 'National Slogan', value: '귤이냐 굴이냐, 둘다 맜있다.' },
  { label: 'English Translation', value: '"Mandarin or oyster? Both are just delicious."' },
];

const values = [
  
  
  {
    title: 'Up And Downs',
    text: 'The national identity is not in the tourism industry, but in the everyday lives of its people .',
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
            JaJu Republics gives you a taste of diversity and abundance of <b>GRASS</b>
          </p>
          <p className="about-hero__tagline">
            National Motto: <em>&quot;Touch Grass lil bro&quot;</em>
          </p>
        </div>
      </div>

      <div className="about-layout">
        <article id="identity" className="panel panel--featured">
          <div className="panel__header">
            <div>
              <p className="section-kicker">National Identity</p>
              <h3>JaJu Republics</h3>
              <p className="country-tagline">A Nation full of Up &amp; GRASS</p>
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
            JaJu Republics gives you a great taste of oysters and tangerines, but <b>Touch grass</b>
          </p>
        </article>

        <aside id="values" className="panel panel--stacked">
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
