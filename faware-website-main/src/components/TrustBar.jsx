const items = [
  {
    label: '256-bit SSL encryption',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'FDIC insured accounts',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
  {
    label: 'SOC 2 Type II certified',
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: 'Trusted by 120,000+ families',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: 'Read-only bank access',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-bar-inner">
        {items.map(item => (
          <div className="trust-item" key={item.label}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
