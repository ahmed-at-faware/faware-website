import { useEffect, useRef } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
)

const plans = [
  {
    name: 'Starter',
    price: '0',
    desc: 'For individuals just getting started with budgeting. No payment info required.',
    popular: false,
    features: [
      { label: '1 user account',           active: true  },
      { label: 'Up to 3 bank connections',  active: true  },
      { label: 'Monthly budget tracking',   active: true  },
      { label: '2 savings goals',           active: true  },
      { label: 'Family member invites',     active: false },
      { label: 'Investment tracking',       active: false },
    ],
    cta: 'Get started free',
    ctaStyle: 'btn-plan btn-plan-outline',
  },
  {
    name: 'Family',
    price: '9',
    desc: 'The full Faware experience for your whole household. Everything you need to manage money together.',
    popular: true,
    features: [
      { label: 'Up to 6 family members',         active: true },
      { label: 'Unlimited bank connections',      active: true },
      { label: 'Shared family dashboard',         active: true },
      { label: 'Unlimited savings goals',         active: true },
      { label: 'Investment tracking',             active: true },
      { label: 'Spending reports & alerts',       active: true },
    ],
    cta: 'Start free trial',
    ctaStyle: 'btn-plan btn-plan-solid',
  },
  {
    name: 'Wealth',
    price: '19',
    desc: 'For families with complex finances — multiple income streams, investments, and estate planning needs.',
    popular: false,
    features: [
      { label: 'Everything in Family',        active: true },
      { label: 'Tax optimization insights',   active: true },
      { label: 'Net worth projections',       active: true },
      { label: 'Estate & will planning tools',active: true },
      { label: 'Priority email support',      active: true },
      { label: 'Quarterly financial review',  active: true },
    ],
    cta: 'Start free trial',
    ctaStyle: 'btn-plan btn-plan-outline',
  },
]

export default function Pricing() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    refs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="pricing" id="pricing">
      <div className="section-inner">
        <div className="pricing-header">
          <span className="section-kicker">Pricing</span>
          <h2 className="section-heading">Simple, honest pricing</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            No hidden fees. No upsells. Cancel anytime — we'd rather earn your trust than lock you in.
          </p>
        </div>

        <div className="plans">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`plan fade-up${p.popular ? ' popular' : ''}`}
              ref={el => (refs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {p.popular && <div className="popular-badge">Most Popular</div>}

              <div>
                <div className="plan-name">{p.name}</div>
                <div className="plan-price">
                  <span className="dollar">$</span>
                  <span className="amount">{p.price}</span>
                  <span className="period">/ mo</span>
                </div>
              </div>

              <p className="plan-desc">{p.desc}</p>
              <div className="plan-divider" />

              <div className="plan-features">
                {p.features.map(f => (
                  <div key={f.label} className={`plan-feat${!f.active ? ' muted' : ''}`}>
                    <CheckIcon />
                    {f.label}
                  </div>
                ))}
              </div>

              <div className="plan-cta">
                <button className={p.ctaStyle}>{p.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
