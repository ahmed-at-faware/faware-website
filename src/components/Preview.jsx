const budgetRows = [
  { emoji: '🏠', name: 'Housing & Rent', spent: '$1,950', total: '$2,000', pct: 97,  type: 'safe' },
  { emoji: '🛒', name: 'Groceries',      spent: '$1,080', total: '$1,200', pct: 90,  type: 'safe' },
  { emoji: '🍽️', name: 'Dining Out',     spent: '$390',   total: '$300',   pct: 100, type: 'over' },
  { emoji: '🚗', name: 'Transport',      spent: '$620',   total: '$800',   pct: 77,  type: 'warn' },
  { emoji: '🎮', name: 'Entertainment',  spent: '$140',   total: '$250',   pct: 56,  type: 'safe' },
]

const transactions = [
  { icon: '🛒', bg: 'accent-bg', title: 'Whole Foods Market',  meta: 'Today · Groceries',   amt: '−$86.40', cls: 'neg' },
  { icon: '💰', bg: 'blue-bg',  title: 'Direct Deposit',      meta: 'Yesterday · Income',  amt: '+$4,600', cls: 'pos' },
  { icon: '⛽', bg: 'amber-bg', title: 'Shell Gas Station',   meta: 'May 4 · Transport',   amt: '−$62.50', cls: 'neg' },
]

const steps = [
  {
    num: 1,
    title: 'Connect every account in minutes',
    desc: 'Link checking, savings, credit cards, and investments from 12,000+ banks — securely and automatically.',
  },
  {
    num: 2,
    title: 'Transactions categorize themselves',
    desc: 'Groceries, utilities, dining — every transaction is sorted automatically. You can adjust categories any time.',
  },
  {
    num: 3,
    title: 'Get alerts before you overspend',
    desc: "Set soft limits and get notified when you're at 80% of a budget — not after you've already blown past it.",
  },
]

function StatusIcons() {
  return (
    <div className="ph-status-icons">
      <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
        <rect x="0"    y="8" width="3" height="4"  rx="0.5" />
        <rect x="4.5"  y="5" width="3" height="7"  rx="0.5" />
        <rect x="9"    y="2" width="3" height="10" rx="0.5" />
        <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="0.3" />
      </svg>
      <svg width="15" height="12" viewBox="0 0 24 19" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M1 6C5 2 9.5.5 12 .5s7 1.5 11 5.5" />
        <path d="M4.5 10C7 7.5 9.5 6.5 12 6.5s5 1 7.5 3.5" />
        <path d="M8.5 14.5c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
      </svg>
      <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
        <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.35" />
        <rect x="2" y="2" width="17" height="8" rx="2" fill="currentColor" />
        <path d="M23 4.5v3a1.5 1.5 0 000-3z" fill="currentColor" fillOpacity="0.45" />
      </svg>
    </div>
  )
}

export default function Preview() {
  return (
    <section className="preview">
      <div className="preview-inner">

        {/* ── Left column: copy + steps ── */}
        <div className="preview-text">
          <span className="section-kicker">Budget Together</span>
          <h2 className="section-heading">
            One budget.<br /><em>The whole family.</em>
          </h2>
          <p className="section-sub">
            Stop managing money in silos. Faware connects all your accounts and shows a single, honest view of where your household stands — updated in real time.
          </p>
          <div className="preview-list">
            {steps.map(s => (
              <div className="preview-item" key={s.num}>
                <div className="preview-num">{s.num}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column: phone mockup ── */}
        <div className="preview-visual">
          <div className="phone-frame">
            <div className="phone-notch" />
            <div className="phone-screen">

              {/* Status bar */}
              <div className="ph-statusbar">
                <span>9:41</span>
                <StatusIcons />
              </div>

              {/* Budget screen header */}
              <div className="ph-bud-head">
                <div className="ph-bud-back">
                  <svg viewBox="0 0 24 24">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </div>
                <h3 className="ph-bud-title">May Budget</h3>
                <div className="ph-bud-menu">
                  <svg viewBox="0 0 24 24">
                    <circle cx="5"  cy="12" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="19" cy="12" r="1.5" />
                  </svg>
                </div>
              </div>

              {/* Spending summary card */}
              <div className="ph-bud-summary">
                <div className="ph-bud-amounts">
                  <span className="ph-bud-spent">$4,810</span>
                  <span className="ph-bud-sep"> / </span>
                  <span className="ph-bud-total-amt">$6,500</span>
                </div>
                <p className="ph-bud-sublabel">74% of budget used · 12 days left</p>
                <div className="ph-bud-masterbar">
                  <div className="ph-bud-masterfill" style={{ width: '74%' }} />
                </div>
              </div>

              {/* Budget categories */}
              <div className="ph-bud-cats">
                <p className="ph-bud-cat-label">Categories</p>
                {budgetRows.map(r => (
                  <div key={r.name} className="ph-bud-row">
                    <span className="ph-bud-emoji">{r.emoji}</span>
                    <div className="ph-bud-row-info">
                      <p className="ph-bud-row-name">{r.name}</p>
                      <div className="ph-bud-row-bar">
                        <div className={`ph-bud-row-fill ${r.type}`} style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                    <div className="ph-bud-row-right">
                      <p className="ph-bud-row-spent">{r.spent}</p>
                      <p className="ph-bud-row-total">of {r.total}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent transactions */}
              <div className="ph-bud-txns">
                <div className="ph-sec-head">
                  <span>Recent</span>
                  <span className="ph-sec-link">See all</span>
                </div>
                {transactions.map(t => (
                  <div className="ph-txn" key={t.title}>
                    <div className={`act-icon ${t.bg}`}>{t.icon}</div>
                    <div className="act-info">
                      <h5>{t.title}</h5>
                      <p>{t.meta}</p>
                    </div>
                    <span className={`act-amt ${t.cls}`}>{t.amt}</span>
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
