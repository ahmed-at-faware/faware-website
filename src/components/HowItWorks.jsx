import { useEffect, useRef } from 'react'

const steps = [
  {
    num: 1,
    title: 'Create your family account',
    desc: 'Sign up and create a shared household. Invite your partner, spouse, or any family member via email — they get their own secure login.',
  },
  {
    num: 2,
    title: 'Connect your bank accounts',
    desc: 'Link accounts from 12,000+ banks and credit unions in minutes. Read-only access means we can never move your money — only see it.',
  },
  {
    num: 3,
    title: 'Set budgets and goals together',
    desc: 'Decide on category budgets and savings goals as a family. Faware tracks everything automatically from that point forward.',
  },
]

export default function HowItWorks() {
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
    <section className="how" id="how-it-works">
      <div className="section-inner">
        <div className="how-header">
          <span className="section-kicker">Setup</span>
          <h2 className="section-heading">
            Up and running in <em>under 10 minutes</em>
          </h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            No accountant needed. No complicated setup. Just connect, invite, and start seeing your finances clearly.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="how-step fade-up"
              ref={el => (refs.current[i] = el)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="how-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
