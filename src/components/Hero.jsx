const goals = [
  { emoji: '🏡', label: 'Home Down Payment', pct: 68 },
  { emoji: '🎓', label: 'College Fund', pct: 41, amber: true },
  { emoji: '✈️', label: 'Family Vacation', pct: 85 },
]

const navItems = [
  {
    label: 'Home', active: true,
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
  },
  {
    label: 'Budget', active: false,
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    label: 'Goals', active: false,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    label: 'Profile', active: false,
    icon: (
      <>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  },
]

function StatusIcons() {
  return (
    <div className="ph-status-icons">
      {/* Signal bars */}
      <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
        <rect x="0"    y="8" width="3" height="4"  rx="0.5" />
        <rect x="4.5"  y="5" width="3" height="7"  rx="0.5" />
        <rect x="9"    y="2" width="3" height="10" rx="0.5" />
        <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
      </svg>
      {/* WiFi */}
      <svg width="15" height="12" viewBox="0 0 24 19" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M1 6C5 2 9.5.5 12 .5s7 1.5 11 5.5" />
        <path d="M4.5 10C7 7.5 9.5 6.5 12 6.5s5 1 7.5 3.5" />
        <path d="M8.5 14.5c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      {/* Battery */}
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
        <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
        <path d="M23 4.5v3a1.5 1.5 0 000-3z" fill="currentColor" fillOpacity="0.45" />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        {/* ── Left column: copy ── */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">DAY-0 INCENTIVE</span>
            <span className="eyebrow-text">Enjoy extended limits on AI insights throughout the trial period</span>
          </div>

          <h1 className="hero-heading">
            The financial <em>clarity</em><br />your family needs
          </h1>

          <p className="hero-sub">
            Single platform to save together, track spending, invest into ETFs, and earn returns — for every member of your household.
          </p>

          <div className="hero-actions">
            <button className="btn-primary"> 
              { /* 
                Same functionality as waitlist.
            */}
              Coming Soon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-outline">See how it works</button>
          </div>

          <div className="hero-proof">
            <div className="proof-item">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              Free 30-day trial
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              No credit card needed
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              Bank-level encryption
            </div>
          </div>
        </div>

        {/* ── Right column: phone mockup ── */}
        <div className="hero-visual">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">

              {/* Status bar */}
              <div className="ph-statusbar">
                <span>9:41</span>
                <StatusIcons />
              </div>

              <div className="ph-app">

                {/* App header */}
                <div className="ph-app-header">
                  <div>
                    <p className="ph-greeting">Good morning 👋</p>
                    <h4 className="ph-name">Ahmed family</h4>
                  </div>
                  <div className="ph-bell">
                    <svg viewBox="0 0 24 24">
                      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 01-3.46 0" />
                    </svg>
                  </div>
                </div>

                {/* Net worth card */}
                <div className="ph-net-card">
                  <p className="ph-net-label">Total Net Worth</p>
                  <h2 className="ph-net-amount">$148,320</h2>
                  <div className="ph-net-change">▲ $2,140 this month</div>
                </div>

                {/* Quick stats */}
                <div className="ph-stats">
                  <div className="ph-stat">
                    <p>Income</p>
                    <h5>$9,200</h5>
                  </div>
                  <div className="ph-stat-div" />
                  <div className="ph-stat">
                    <p>Spent</p>
                    <h5 className="red">$4,810</h5>
                  </div>
                  <div className="ph-stat-div" />
                  <div className="ph-stat">
                    <p>Saved</p>
                    <h5 className="green">$1,240</h5>
                  </div>
                </div>

                {/* Savings goals */}
                <div className="ph-section">
                  <div className="ph-sec-head">
                    <span>Savings Goals</span>
                    <span className="ph-sec-link">See all</span>
                  </div>
                  {goals.map(g => (
                    <div key={g.label} className="ph-goal">
                      <div className="ph-goal-top">
                        <span className="ph-goal-name">{g.emoji} {g.label}</span>
                        <span className="ph-goal-pct">{g.pct}%</span>
                      </div>
                      <div className="ph-goal-bar">
                        <div
                          className={`ph-goal-fill${g.amber ? ' amber' : ''}`}
                          style={{ width: `${g.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom navigation */}
              <div className="ph-bottomnav">
                {navItems.map(item => (
                  <div key={item.label} className={`ph-nav-item${item.active ? ' active' : ''}`}>
                    <svg viewBox="0 0 24 24">{item.icon}</svg>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
