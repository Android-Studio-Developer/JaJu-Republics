const govBranches = [
  {
    title: 'Legislative Branch',
    intro: 'Legislature: KukHwae (국회) - National Assembly',
    extra: 'Structure: Unicameral (single chamber)',
    items: ['Members elected by popular vote', 'Passes laws and approves budget', 'Oversight of executive branch', 'Ratifies treaties and agreements'],
  },
];

const participation = [
  ['Voting Rights', 'All citizens have the right to vote in presidential, legislative, and local elections.'],
  
  ['Digital Platforms', 'Online sites allow citizens to petition the government and report issues.'],
  
];

const freedoms = [
  ['Freedom of Speech', 'Citizens may freely express opinions and ideas.'],
  ['Freedom of Religion', 'All citizens have the right to practice any religion or none.'],
  ['Freedom of Press', 'Free and independent media is protected.'],
  ['Freedom of Movement', 'Citizens may travel freely within and outside the country.'],
];

export default function GovernmentSection() {
  return (
    <section id="government" className="container page-section government-section">
      <h2 className="page-heading">Government of JaJu Republics</h2>

      <div className="gov-intro">
        <p><strong>Government Type:</strong> Presidential Republic</p>
        <p><strong>National Motto:</strong> &quot;Touch Grass lil bro&quot;</p>
        <p>JaJu Republics operates as a democratic presidential republics.</p>
      </div>

      <div className="gov-section">
        <h3>Government Structure</h3>
        <div className="gov-grid">
          {govBranches.map((branch) => (
            <article className="gov-card" key={branch.title}>
              <h4>{branch.title}</h4>
              <p><strong>{branch.intro}</strong></p>
              {branch.extra ? <p><strong>{branch.extra}</strong></p> : null}
              <ul>
                {branch.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="gov-section">
        <h3>Citizen Participation</h3>
        <p>JaJu Republics empowers its citizens to participate actively in governance through multiple channels:</p>
        <div className="participation-grid">
          {participation.map(([title, text]) => (
            <article className="participation-card" key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="gov-section">
        <h3>Freedoms &amp; Civil Liberties</h3>
        <p>JaJu Republics guarantees comprehensive freedoms and civil liberties to all citizens, with responsible limitations.</p>
        <div className="freedoms-grid">
          {freedoms.map(([title, text]) => (
            <article className="freedom-card" key={title}>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="freedoms-warning">
          <p><strong>Important Note:</strong> Misuse of these freedoms through crimes, violence, will may sent you to be in the next seat of Jesus.</p>
        </div>
      </div>

      <div className="gov-section">
        <h3>Education System</h3>
        <p>Free education is provided to all citizens from primary through achieve higher education in investments on human capital development.</p>
      </div>

      <div className="gov-section">
        <h3>National Defense</h3>
        <p><strong>Position on War:</strong> We’re chill and we want peace, not fight. JaJu Republics keeps defense limited to protecting citizens and avoiding conflict whenever possible.</p>
      </div>
      <div className="gov-sources">
        <h3>Sources</h3>
        <ol>
          <li><a href="https://en.wikipedia.org/wiki/Politics_of_South_Korea" target="_blank" rel="noreferrer">Politics of South Korea — Wikipedia</a></li>
        </ol>
      </div>
    </section>
  );
}
