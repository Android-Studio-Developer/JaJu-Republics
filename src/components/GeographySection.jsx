const climate = [
  ['Winter', '0-7°C', 'Mild and relatively dry season'],
  ['Spring', '7-15°C', 'Gradual warming with blooming flowers'],
  ['Summer', '20-28°C', 'Warm and humid with monsoon rains'],
  ['Fall', '12-20°C', 'Cool and comfortable weather'],
];

const physicalFeatures = [
  {
    title: '1. Hallasan Mountain',
    lines: [
      'Height: 1,950m (Highest peak in the region)',
      'Geological Origin: Volcanic mountain with a crater at the summit',
      'Visitor Experience: This iconic stratovolcano attracts thousands of hikers annually with panoramic summit views and a serene crater lake.',
    ],
  },
  {
    title: '2. Scenic Waterfalls',
    lines: [
      'Notable Falls: Cheonjeyeon Falls, Jeongbang Falls, Yeongwol Falls',
      'Geological Significance: Formed by volcanic basalt layers and spring water',
      'Visitor Experience: The waterfalls create lush natural pools and a calming, photographic escape for families and casual tourists.',
    ],
  },
  {
    title: '3. Black Sand Beaches',
    lines: [
      'Formation: Volcanic sand created from basaltic rock erosion',
      'Unique Characteristics: Distinctive black coloration with therapeutic mineral-rich sand',
      'Visitor Experience: Visitors enjoy dramatic coastlines, sunset walks, and uncrowded volcanic shores.',
    ],
  },
];

const environmentalLists = {
  causes: [
    'Tourist Activities: Increased coastal tourism generates significant plastic waste from food packaging, beverages, and single-use plastics',
    'Ocean Currents: Regional ocean currents bring plastic waste from neighboring countries to our shores',
    'Fishing Industry: Discarded fishing nets, buoys, and equipment contribute to marine debris',
    'Inadequate Waste Management: Limited recycling infrastructure and improper disposal practices in coastal areas',
    'Global Consumption: Excessive use of single-use plastics flows into marine ecosystems',
  ],
  effects: [
    'Marine Life Harm: Sea turtles, dolphins, and seabirds mistake plastic for food, causing injury and death',
    'Ecosystem Degradation: Plastic accumulation damages coral reefs and disrupts marine food chains',
    'Microplastic Contamination: Plastic breakdown creates microplastics that enter the food web, affecting both aquatic life and human consumption',
    'Tourism Impact: Polluted beaches reduce aesthetic appeal and threaten tourism-dependent communities',
    'Economic Loss: Costs for beach cleanup and ecological restoration strain government budgets',
    'Public Health Concerns: Toxic chemicals from plastics leach into water supplies and seafood',
  ],
  solutions: [
    ['Reduce Single-Use Plastics', 'Ban plastic bags, straws, and packaging while promoting reusable alternatives through policy and education.'],
    ['Enhanced Recycling Programs', 'Establish waste sorting systems at beaches and tourist areas with convenient collection points.'],
    ['Community Beach Cleanups', 'Organize regular coastal cleanup drives involving local communities, tourists, and volunteers.'],
    ['Education & Awareness', 'Launch public awareness campaigns and include marine conservation in school curricula and tourism guides.'],
    ['International Cooperation', 'Collaborate with neighboring regions to address cross-border pollution and share best practices.'],
    ['Innovation & Research', 'Invest in biodegradable materials, sustainable packaging, and new cleanup technologies.'],
  ],
};

export default function GeographySection() {
  return (
    <section id="geography" className="container page-section">
      <h2 className="page-heading">Geography</h2>

      <div className="geography-card">
        <h3>Location Map</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Jeju+Island+South+Korea&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="JaJu Republics location map"
          />
        </div>
      </div>

      <div className="geography-card">
        <h3>Climate</h3>
        <div className="climate-info">
          <p>JaJu Republics features a <strong>subtropical climate</strong> with distinct seasonal characteristics:</p>
          <div className="climate-grid">
            {climate.map(([season, temp, text]) => (
              <div className="climate-item" key={season}>
                <h4>{season}</h4>
                <p><strong>Temp:</strong> {temp}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="climate-details">
            <p><strong>Annual Rainfall:</strong> 1,800-2,000mm</p>
            <p><strong>Peak Rain Season:</strong> June-August (monsoon)</p>
            <p><strong>Typhoon Season:</strong> August-September</p>
          </div>
        </div>
      </div>

      <div className="geography-card">
        <h3>Major Physical Features</h3>
        <div className="features-grid">
          {physicalFeatures.map((feature) => (
            <div className="feature-item" key={feature.title}>
              <h4>{feature.title}</h4>
              {feature.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="geography-card environmental-issue">
        <h3>Major Environmental Challenge: Marine Litter &amp; Plastic Pollution</h3>

        <div className="issue-section">
          <h4>Causes</h4>
          <ul>
            {environmentalLists.causes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="issue-section">
          <h4>Effects</h4>
          <ul>
            {environmentalLists.effects.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="issue-section">
          <h4>Solutions</h4>
          <div className="solutions-grid">
            {environmentalLists.solutions.map(([title, text]) => (
              <div className="solution-item" key={title}>
                <h5>{title}</h5>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
