import { useEffect, useState } from 'react';
import Banknote, { BANKNOTE_VALUE, BANKNOTE_DEFAULT_WIDTH } from './Banknote';

export const majorExports = [
  { name: 'Citrus (Tangerines)', desc: 'Sweet tangerines grown on volcanic soils.' },
  { name: 'Seafood (Fish & Squid)', desc: 'Fresh catch from surrounding seas.' },
];

export const majorImports = [
  { name: 'Fuel & Energy Products', desc: 'Diesel, petrol and other fuels.' },
  { name: 'Electronics & Machinery', desc: 'Manufactured goods and equipment.' },
];

export default function EconomySection() {
  const [openPanels, setOpenPanels] = useState({
    continuum: true,
    currency: true,
    exchange: true,
  });

  const [minimalView, setMinimalView] = useState(false);

  const togglePanel = (key) => {
    setOpenPanels((s) => ({ ...s, [key]: !s[key] }));
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.currency.wiki/v3/script.js?style=mini-chart&size=small&theme=dark&accent=2563eb&lang=en-US&from=USD&to=KRW&amount=1&lock=0&flags=1&labels=0&swap=1&branding=1&brandinglink=1&symbol=0&format=auto&decimals=2&dropdown=top10&chart=1&chartperiod=7d&width=250&height=260&container=cww-slqsmexkr';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="economy" className="container page-section economy-section">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h2 className="page-heading">Economy of JaJu Republics</h2>
        <div>
          <button
            type="button"
            className="panel-toggle"
            onClick={() => setMinimalView((m) => !m)}
            aria-pressed={minimalView}
            title="Toggle minimal view"
          >
            {minimalView ? 'Full' : 'Minimal'}
          </button>
        </div>
      </div>

      <div className={`economy-grid ${openPanels.continuum && openPanels.currency ? 'economy-grid--cols-2' : 'economy-grid--cols-1'}`}>
        <article className="economy-card economy-card--continuum">
          <div className="economy-card__header">
            <span>Economic Systems Continuum</span>
            <button
              type="button"
              aria-label={openPanels.continuum ? 'Collapse panel' : 'Expand panel'}
              aria-expanded={openPanels.continuum}
              onClick={() => togglePanel('continuum')}
              className="panel-toggle"
            >
              {openPanels.continuum ? '−' : '+'}
            </button>
          </div>

          {openPanels.continuum && (
            <div className={`continuum-panel ${minimalView ? 'minimal' : ''}`}>
            <div className="continuum-labels">
              <span>Command Economy</span>
              <span>Mixed Economy</span>
              <span>Market Economy</span>
            </div>

            <div className="continuum-bar">
              <div className="continuum-pointer" style={{ left: '73.7%' }} />
            </div>

            <div className="continuum-stats">
              <strong>73.7%</strong>
              <span>JaJu Republics</span>
            </div>

            <div className="continuum-caption">
              <span>less business freedom</span>
              <span>more business freedom</span>
            </div>
          </div>
          )}
        </article>

        <article className="economy-card economy-card--currency">
          <div className="economy-card__header">
            <span>Currency</span>
            <button
              type="button"
              aria-label={openPanels.currency ? 'Collapse panel' : 'Expand panel'}
              aria-expanded={openPanels.currency}
              onClick={() => togglePanel('currency')}
              className="panel-toggle"
            >
              {openPanels.currency ? '−' : '+'}
            </button>
          </div>

          {openPanels.currency && (
            <div className={`currency-grid ${minimalView ? 'minimal' : ''}`}>
            <div className="currency-copy">
              <h3>Name of Currency</h3>
              <p>
                The currency is called JRW, which means JaJu Republics Won.
              </p>

              <div className="trade-box">
                <h4 className="trade-title">Major Trade</h4>
                <div className="trade-grid">
                  <div className="trade-col">
                    <h5>Exports</h5>
                    <ul>
                      {majorExports.map((it) => (
                        <li key={it.name}>
                          <strong>{it.name}:</strong> {it.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="trade-col">
                    <h5>Imports</h5>
                    <ul>
                      {majorImports.map((it) => (
                        <li key={it.name}>
                          <strong>{it.name}:</strong> {it.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="currency-note">
                <div className="banknote-wrapper currency-visual">
                  <Banknote width={BANKNOTE_DEFAULT_WIDTH} minimal={minimalView} />
                </div>
            </div>
          </div>
          )}
        </article>
      </div>
      <div className="economy-grid economy-grid--full">
        <article className="economy-card economy-card--exchange">
          <div className="economy-card__header">
            <span>Exchange Rate</span>
            <button
              type="button"
              aria-label={openPanels.exchange ? 'Collapse panel' : 'Expand panel'}
              aria-expanded={openPanels.exchange}
              onClick={() => togglePanel('exchange')}
              className="panel-toggle"
            >
              {openPanels.exchange ? '−' : '+'}
            </button>
          </div>

          {openPanels.exchange && (
            <div className="exchange-grid">
            <div className="exchange-copy">
              <h3>Exchange Rate Tool</h3>
              <p>
                This widget compares the United States dollar with the Korean won. JaJu Republics uses JRW, but this gives a good example because JRW is based on KRW.
              </p>
            </div>

            <div className="exchange-widget exchange-widget--currencywiki">
              <div id="cww-slqsmexkr" style={{ minHeight: '260px' }} />
            </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
