import { useEffect, useRef } from 'react'

const testimonials = [
  {
    quote: 'My husband and I fought about money constantly. Faware didn\'t fix our budget — it fixed our conversations. We finally see the same numbers at the same time.',
    avatar: '👩',
    name: 'Sarah M.',
    meta: 'Mother of 2 · Austin, TX',
  },
  {
    quote: 'We paid off $23,000 in debt in 14 months. I know exactly how much credit to give Faware — all of it. Seeing the payoff progress every week kept us going.',
    avatar: '👨',
    name: 'James & Priya K.',
    meta: 'Dual income · Chicago, IL',
  },
  {
    quote: 'As a single parent, budgeting felt impossible. Faware\'s goal tracker showed me I could actually save for my daughter\'s college while still paying rent.',
    avatar: '👩',
    name: 'Danielle R.',
    meta: 'Single parent · Seattle, WA',
  },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default function Testimonials() {
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
    <section className="testi">
      <div className="section-inner">
        <div className="testi-header">
          <span className="section-kicker">Stories</span>
          <h2 className="section-heading">What families are saying</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Real households using Faware to get on the same financial page.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="testi-card fade-up"
              ref={el => (refs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="stars">
                {Array.from({ length: 5 }).map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="testi-quote">"{t.quote}"</p>
              <div className="testi-author">
                <div className="author-avatar">{t.avatar}</div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
