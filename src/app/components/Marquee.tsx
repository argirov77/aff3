const items = [
  'CPA partnerships',
  'CPS programs',
  'RevShare & hybrid deals',
  'Postback tracking',
  'Fraud filtering',
  'Partner vetting',
  'Brand-safety controls',
  'LTV cohort analysis',
  'Weekly executive reports',
]

export default function Marquee() {
  return (
    <section className="marquee" aria-label="What we cover">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group" aria-hidden={copy === 1 ? true : undefined}>
            {items.map((item) => (
              <li key={item} className="marquee-item">
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
