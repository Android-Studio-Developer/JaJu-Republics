const govBranches = [
  {
    title: 'Executive Branch',
    intro: 'Head of State & Government: The President',
    extra: 'Selection Method: Elected through direct or indirect popular vote',
    items: ['Single elected term', 'Veto power over legislation', 'Appoints cabinet ministers', 'Commander-in-Chief of armed forces'],
  },
  {
    title: 'Legislative Branch',
    intro: 'Legislature: KukHwae (국회) - National Assembly',
    extra: 'Structure: Unicameral (single chamber)',
    items: ['Members elected by popular vote', 'Passes laws and approves budget', 'Oversight of executive branch', 'Ratifies treaties and agreements'],
  },
  {
    title: 'Judicial Branch',
    intro: 'Court System: Independent and impartial',
    extra: '',
    items: ['Constitutional Court for constitutional matters', 'Supreme Court for legal disputes', 'Lower courts handle local cases', 'Guarantees fair trials and justice'],
  },
];

const participation = [
  ['Voting Rights', 'All citizens have the right to vote in presidential, legislative, and local elections.'],
  ['Direct Action', 'Citizens can engage in peaceful demonstrations, assemblies, and public advocacy.'],
  ['Digital Platforms', 'Online civic portals allow citizens to petition the government and report issues.'],
  ['Participatory Budgeting', 'Citizens can propose and vote on how public funds are allocated.'],
  ['Right to Protest', 'Citizens have the constitutional right to peaceful protest and assembly.'],
  ['Public Consultation', 'Major decisions include hearings and consultation periods where citizens can provide input.'],
];

const freedoms = [
  ['Freedom of Speech', 'Citizens may freely express opinions and ideas. Incitement and hate crimes carry legal consequences.'],
  ['Freedom of Religion', 'All citizens have the right to practice any religion or none.'],
  ['Freedom of Press', 'Free and independent media is protected.'],
  ['Freedom of Movement', 'Citizens may travel freely within and outside the country.'],
  ['Right to Fair Trial', 'All citizens have the right to due process and legal representation.'],
  ['Privacy Rights', 'Personal privacy is protected by law.'],
];

const educationLevels = [
  ['Primary Education', '6 Years (Ages 6-12)', 'Foundational learning in literacy, numeracy, sciences, humanities, and life skills.'],
  ['Middle School', '3 Years (Ages 12-15)', 'Intermediate education with expanded curriculum including languages, social studies, arts, and technology.'],
  ['High School', '3 Years (Ages 15-18)', 'Advanced academics or specialized vocational training with academic and technical tracks.'],
  ['Higher Education', '4+ Years (Post-Secondary)', "Universities and colleges offering bachelor's, master's, and doctoral degrees."],
];

const programs = [
  {
    title: 'Meister Schools (Skilled Trades)',
    items: ['Manufacturing & Engineering', 'Information Technology & Software Development', 'Construction & Infrastructure', 'Automotive & Transportation', 'Healthcare & Medical Technology', 'Green Energy & Environmental Technology'],
  },
  {
    title: 'Academic Excellence Programs',
    items: ['Science & Research Programs', 'Advanced Mathematics & Engineering', 'International Studies & Diplomacy', 'Arts & Cultural Excellence', 'Business & Economics', 'Leadership & Public Service'],
  },
  {
    title: 'Continuing Education',
    items: ['Professional Certifications', 'Executive Training Programs', 'Skill Development Workshops', 'Technology & Digital Skills', 'Entrepreneurship Programs'],
  },
];

const defenseCards = [
  ['Defense Doctrine', ['No territorial aggression; defensive posture only', 'Commitment to peaceful resolution of conflicts', 'Deterrence through strength and readiness', 'Protection of citizens and national sovereignty']],
  ['Military Priorities', ['Homeland security and territorial defense', 'Disaster relief and humanitarian assistance', 'Coast guard and maritime security', 'Technological advancement in defense systems']],
  ['Peace Initiatives', ['Diplomatic engagement with neighboring nations', 'Participation in international peacekeeping', 'Support for conflict resolution mechanisms', 'Commitment to international law and treaties']],
];

export default function GovernmentSection() {
  return (
    <section id="government" className="container page-section government-section">
      <h2 className="page-heading">Government of JaJu Republics</h2>

      <div className="gov-intro">
        <p><strong>Government Type:</strong> Presidential Republic</p>
        <p><strong>National Motto:</strong> &quot;Unity, Progress, Prosperity&quot;</p>
        <p>JaJu Republics operates as a democratic presidential republic with a strong emphasis on citizen participation and representative democracy.</p>
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
          <p><strong>Important Note:</strong> Misuse of these freedoms through hate crimes, violence, religious extremism, or incitement results in legal consequences.</p>
        </div>
      </div>

      <div className="gov-section">
        <h3>Education System</h3>
        <p>JaJu Republics provides comprehensive, government-supported education following a model adapted from South Korea&apos;s successful system.</p>

        <div className="education-structure">
          <h4>Educational Pathway</h4>
          <div className="education-grid">
            {educationLevels.map(([title, duration, text]) => (
              <article className="education-level" key={title}>
                <h5>{title}</h5>
                <p><strong>Duration:</strong> {duration}</p>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>

        <h4>Specialized Training &amp; Vocational Education</h4>
        <div className="vocational-programs">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <h5>{program.title}</h5>
              <ul>
                {program.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="gov-section">
        <h3>National Defense &amp; Military Policy</h3>
        <p>JaJu Republics follows a defense-first military doctrine, prioritizing peace and security while maintaining strong deterrence capabilities.</p>
        <div className="defense-grid">
          {defenseCards.map(([title, items]) => (
            <article className="defense-card" key={title}>
              <h4>{title}</h4>
              <ul>
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="war-stance">
          <p><strong>Position on War:</strong> War should be an absolute last resort. JaJu Republics maintains a strong military as a defensive deterrent, not for aggression.</p>
        </div>
      </div>
    </section>
  );
}
