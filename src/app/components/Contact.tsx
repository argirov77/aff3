'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiArrowUpRight,
  HiCheck,
  HiOutlineDocumentDuplicate,
  HiOutlineEnvelope,
  HiOutlinePhone,
} from 'react-icons/hi2'

const EMAIL = 'main@kiklaminoadv.com'

const checklist = [
  'Your current CAC/CPA and target range',
  'Priority geos, offers, and audience segments',
  'Expected timeline and desired scale volume',
]

const budgets = ['Under £10k', '£10k–50k', '£50k–150k', '£150k+']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (field: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }))

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Kiklamino — new enquiry${form.name ? ` from ${form.name}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Monthly budget: ${form.budget || 'Not specified'}`,
      '',
      form.message,
    ].join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <motion.div
          className="contact-shell"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="contact-main">
            <div className="eyebrow">Start partnership</div>
            <h2>
              Bring your targets. <span className="text-gradient">We’ll build the execution plan.</span>
            </h2>
            <p>
              Share your baseline and goals. We will return with an execution plan, risk map, and launch priorities
              within 24 business hours.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-icon" aria-hidden="true">
                  <HiOutlineEnvelope />
                </span>
                <a href={`mailto:${EMAIL}`} className="contact-link">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{EMAIL}</span>
                </a>
                <button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <HiCheck aria-hidden="true" /> : <HiOutlineDocumentDuplicate aria-hidden="true" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a href="tel:+441234567890" className="contact-row contact-row--link">
                <span className="contact-icon" aria-hidden="true">
                  <HiOutlinePhone />
                </span>
                <span className="contact-link">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+44 1234 567890</span>
                </span>
                <HiArrowUpRight className="contact-arrow" aria-hidden="true" />
              </a>
            </div>

            <div className="contact-tips">
              <h3>What to include in your first email</h3>
              <ol>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-row">
              <label className="field">
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={update('name')}
                />
              </label>
              <label className="field">
                <span>Business email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="team@company.com"
                  value={form.email}
                  onChange={update('email')}
                  required
                />
              </label>
            </div>

            <fieldset className="field">
              <legend>Monthly budget</legend>
              <div className="chip-options">
                {budgets.map((b) => (
                  <label key={b} className="chip-option">
                    <input
                      type="radio"
                      name="budget"
                      value={b}
                      checked={form.budget === b}
                      onChange={update('budget')}
                    />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="field">
              <span>Goals &amp; context</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Current CPA, target geos, timeline…"
                value={form.message}
                onChange={update('message')}
              />
            </label>

            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Send request <HiArrowRight aria-hidden="true" />
            </button>

            <p className="form-note" aria-live="polite">
              {sent ? (
                <>
                  Your email app should open with the request ready to send. If it didn’t, write to{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </>
              ) : (
                'Opens your email app with everything filled in. We reply within 24 business hours.'
              )}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
