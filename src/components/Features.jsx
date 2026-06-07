import { useEffect, useRef } from 'react'

const features = [
  {
    color: '',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Shared Family Dashboard',
    desc: 'Everyone in the household sees the same big picture — net worth, monthly spend, and savings progress — while keeping individual account details private.',
  },
  {
    color: 'amber',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Savings Goals That Stick',
    desc: "Create goals for anything — a family vacation, the kids' college funds, a new home. Track progress automatically and get gentle nudges when you're falling behind.",
  },
  {
    color: 'blue',
    icon: (
      <svg viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Flexible Family Budgets',
    desc: "Set budgets by category, by person, or for the whole household. Color-coded alerts tell you when you're approaching a limit — before you go over it.",
  },
  {
    color: 'purple',
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Spending Insights & Reports',
    desc: 'See where every dollar goes with clear charts and monthly reports. Spot unusual charges, understand spending patterns, and find easy ways to cut back.',
  },
]

export default function Features() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="features" id="features">
      <div className="section-inner">
        <div className="feat-header">
          <div>
            <span className="section-kicker">Features</span>
            <h2 className="section-heading">
              Built for the way <em>families actually work</em>
            </h2>
          </div>
          <p className="section-sub">
            Most finance tools are built for one person. Faware is built for a household — with shared visibility, individual privacy, and goals you build toward together.
          </p>
        </div>

        <div className="feat-grid">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feat-card fade-up"
              ref={el => (cardRefs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`feat-icon-wrap${f.color ? ` ${f.color}` : ''}`}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <span className="feat-learn">
                Learn more
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
