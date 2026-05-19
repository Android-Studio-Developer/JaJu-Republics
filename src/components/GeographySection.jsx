const climate = [
  ['Winter', '0-7°C', ],
  ['Spring', '7-15°C', ],
  ['Summer', '20-28°C', ],
  ['Fall', '12-20°C', ],
];

const physicalFeatures = [
  {
    title: '1. Hallasan Mountain',
    lines: [
      'Height: 1,950m (Highest peak in the region)',
      'Geological Origin: Volcanic mountain with a crater at the summit',
      ,
    ],
  },
  {
    title: '2. Natural Waterfalls',
    lines: [
      'Notable Falls: Cheonjeyeon Falls, Jeongbang Falls, Yeongwol Falls',
      'Fun fact: Formed by volcanic basalt layers and spring water',
      ,
    ],
  },
  {
    title: '3. Black Sand Beaches',
    lines: [
      'Formation: Volcanic sand created from basaltic rock erosion',
      
      'Fun facts: Dynamic volcanic coastlines with distinctive black sand.',
    ],
  },
];

const environmentalLists = {
  causes: [
    'Tourist Activities: People buy food and drinks at the beach and leave plastic wrappers and cups behind.',
    'Ocean Currents: Water currents push trash from other countries into our shores.',
    'Fishing Industry: Old fishing nets and gear get lost in the ocean and hurt sea animals.',
    'Inadequate Waste Management: There aren’t enough recycling bins, so trash gets thrown away wrong.',
    'Global Consumption: Everyone uses too much single-use plastic, and it ends up in the sea.',
  ],
  effects: [
    'Marine Life Harm: Sea turtles, dolphins, and seabirds mistake plastic for food, causing injury and death',
    'Ecosystems: Plastic damages coral reefs and damages marine food chains',
    'Microplastic Contamination: Plastic breakdown creates microplastics that enter the food web, affecting both aquatic life and human consumption',
    'Tourism Impact: Polluted beaches reduce aesthetic appeal and threaten tourism-dependent communities',
    'Economic Loss: Costs for beach cleanup and ecological restoration strain government budgets',
    'Public Health Concerns: Toxic chemicals from plastics leach into water supplies and seafood',
  ],
  solutions: [
    ['Reduce Single-Use Plastics', 'Ban plastic bags, straws, and packaging while having reusable alternatives through regulation.'],
    ['Enhanced Recycling Programs', 'Establish waste sorting systems at beaches and tourist areas with convenient collection points.'],
    
  ],
};

import { useState } from 'react';

export default function GeographySection() {
  const [open, setOpen] = useState({
    map: false,
    climate: false,
    features: false,
    environmental: false,
  });

  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <section id="geography" className="container page-section geography-section">
      <h2 className="page-heading">Geography</h2>

      <div className="geography-card">
        <div className="geography-card__header">
          <h3>Location Map</h3>
          <button className="panel-toggle" onClick={() => toggle('map')} aria-expanded={open.map}>{open.map ? '−' : '+'}</button>
        </div>
        <div className="map-container">
          {open.map ? (
            <iframe
              src="https://www.google.com/maps?q=Jeju+Island+South+Korea&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="JaJu Republics location map"
            />
          ) : (
            <a href="https://www.google.com/maps?q=Jeju+Island+South+Korea" target="_blank" rel="noreferrer" className="map-placeholder">
              Open map in new tab
            </a>
          )}
        </div>
      </div>
      <div className="geography-sources">
        <h3>Sources</h3>
        <ol>
          <li><a href="https://en.wikipedia.org/wiki/Jeju_Island" target="_blank" rel="noreferrer">Jeju Island — Wikipedia</a></li>
        </ol>
      </div>

      <div className="geography-card">
        <div className="geography-card__header">
          <h3>Climate</h3>
          <button className="panel-toggle" onClick={() => toggle('climate')} aria-expanded={open.climate}>{open.climate ? '−' : '+'}</button>
        </div>
        <div className="climate-info">
          <p>JaJu Republics features a <strong>subtropical climate</strong>. <em>{open.climate ? 'Details below.' : 'Click + to expand.'}</em></p>
          {open.climate && (
            <>
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
              
               
              </div>
            </>
          )}
        </div>
      </div>

      <div className="geography-card">
        <div className="geography-card__header">
          <h3>Major Physical Features</h3>
          <button className="panel-toggle" onClick={() => toggle('features')} aria-expanded={open.features}>{open.features ? '−' : '+'}</button>
        </div>
        <div className="features-grid">
          {physicalFeatures.map((feature) => (
            <div className="feature-item" key={feature.title}>
              <h4>{feature.title}</h4>
              {open.features ? (
                feature.lines.map((line) => (<p key={line}>{line}</p>))
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="geography-card environmental-issue">
        <div className="geography-card__header">
          <h3>Major Environmental Challenge: Marine Litter &amp; Plastic Pollution</h3>
          <button className="panel-toggle" onClick={() => toggle('environmental')} aria-expanded={open.environmental}>{open.environmental ? '−' : '+'}</button>
        </div>

        <div className="issue-section">
          <h4>Causes</h4>
          <ul>
            {(open.environmental ? environmentalLists.causes : environmentalLists.causes.slice(0,3)).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="issue-section">
          <h4>Effects</h4>
          <ul>
            {(open.environmental ? environmentalLists.effects : environmentalLists.effects.slice(0,2)).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="issue-section">
          <h4>Solutions</h4>
          <div className="solutions-grid">
            {(open.environmental ? environmentalLists.solutions : environmentalLists.solutions.slice(0,3)).map(([title, text]) => (
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
