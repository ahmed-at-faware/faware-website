import { useState } from 'react'

const faqs = [
  {
    q: 'Is my banking information secure?',
    a: 'Yes. We connect to your bank using read-only access via Plaid, the same technology used by major banks. We can view transactions but can never move money. All data is encrypted with 256-bit SSL, and we are SOC 2 Type II certified. Your credentials are never stored on our servers.',
  },
  {
    q: 'Can my partner and I have separate privacy within the family account?',
    a: 'Absolutely. Each family member has their own secure login and can designate any account as private. Private accounts still contribute to the household net worth total, but the individual transactions are only visible to their owner. You control exactly what you share.',
  },
  {
    q: 'Does Faware support accounts outside the US?',
    a: 'Currently Faware supports US and Canadian bank connections. We are actively expanding to the UK, Australia, and EU countries. If your region isn\'t supported yet, you can manually add accounts and enter transactions until automatic sync is available in your country.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'If you cancel, you have 30 days to export all your data in CSV or PDF format. After 30 days, your account and all associated data are permanently deleted from our servers. We do not sell your data to third parties — ever.',
  },
  {
    q: 'How is Faware different from a spreadsheet?',
    a: 'Spreadsheets require manual data entry, break when someone forgets to update them, and are typically used by one person. Faware pulls transactions automatically every day, works across your whole family, sends alerts when budgets are close, and shows your savings goals progressing in real time — no upkeep required.',
  },
]

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = i => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-head">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-heading">Questions we get all the time</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-btn" onClick={() => toggle(i)}>
                {item.q}
                <div className="faq-icon"><PlusIcon /></div>
              </button>
              <div className="faq-body">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
