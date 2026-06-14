import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <span className="logo-name">fa<em>ware</em></span>
        </a>

        <div className="nav-center">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#" className="nav-link">Blog</a>
        </div>

        <div className="nav-right">
          {/* <button className="btn-ghost-nav">Sign in</button> */}
          <button className="btn-nav">Join the Waitlist</button>
        </div>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav${open ? ' open' : ''}`}>
        <a href="#features" onClick={() => setOpen(true)}>Features</a>
        <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        <a href="#" onClick={() => setOpen(false)}>Blog</a>
        <a href="#" onClick={() => setOpen(false)}>Sign in</a>
        <div className="m-cta">
          <button className="btn-primary">Get Started Free</button>
        </div>
      </div>
    </>
  )
}
