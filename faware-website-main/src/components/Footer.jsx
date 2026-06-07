const cols = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Security', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Resources',
    links: ['Help Center', 'Blog', 'Budget Templates', 'Financial Guides', 'Community'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Careers', 'Press', 'Contact', 'Partners'],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="footer-logo-name">fa<em>ware</em></span>
            </div>
            <p>Family financial planning that's honest, private, and built for the way real households work — not just individuals.</p>
            <div className="footer-socials">
              <a href="#" className="f-social" aria-label="Twitter">
                <svg viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="f-social" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="f-social" aria-label="Instagram">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map(col => (
            <div className="footer-col" key={col.heading}>
              <h4>{col.heading}</h4>
              {col.links.map(link => (
                <a href="#" key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Faware Technologies, Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
