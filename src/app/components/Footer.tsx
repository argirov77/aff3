'use client'

import { useState } from 'react'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="logo">
                <span className="logo-mark" aria-hidden="true" />
                <span>Kiklamino</span>
              </span>
              <p>
                Performance-powered affiliate agency specialising in CPA/CPS
                partnerships and proprietary review platforms.
              </p>
            </div>

            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Office</h4>
              <address>
                Kiklamino Limited<br />
                1st Floor 415 High Street<br />
                Suite 1038, Stratford<br />
                London, E15 4QZ
              </address>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Kiklamino Limited. All rights reserved.</span>
            <button
              className="footer-policy-btn"
              onClick={() => setIsOpen(true)}
            >
              Privacy policy
            </button>
          </div>
        </div>
      </footer>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
            <h2>Privacy policy</h2>
            <p><em>Last revised: June 17, 2025</em></p>
            <ol className="policy-list">
              <li>
                <strong>Purpose.</strong> This Privacy Policy explains how Kiklamino Limited (&ldquo;we&rdquo;)
                collects, uses, shares, and protects your personal data when you visit{' '}
                <a href="https://kiklaminoadv.com/" target="_blank" rel="noopener noreferrer">kiklaminoadv.com</a>.
              </li>
              <li>
                <strong>Data we collect.</strong>
                <ul>
                  <li><strong>Data you provide:</strong> name, email, phone, company, message.</li>
                  <li><strong>Usage data:</strong> IP address, browser info, pages visited, timestamps.</li>
                  <li><strong>Cookies &amp; tracking:</strong> to remember preferences and analyse traffic.</li>
                </ul>
              </li>
              <li>
                <strong>How we use.</strong> To respond to your requests, operate &amp; secure our site,
                send marketing (only if you opt in), and comply with legal obligations.
              </li>
              <li>
                <strong>Sharing data.</strong> With service providers, business successors,
                or when required by law.
              </li>
              <li>
                <strong>Cookies.</strong> You can disable cookies in your browser, but some features
                may break.
              </li>
              <li>
                <strong>Children&rsquo;s privacy.</strong> Not intended for under-18s. If we&rsquo;ve collected
                data from a minor, contact us to remove it.
              </li>
              <li>
                <strong>Data retention.</strong> We keep your data only as long as needed for the
                purposes above or as required by law.
              </li>
              <li>
                <strong>International transfers.</strong> Data may be processed in the UK, EU, or
                other jurisdictions with adequate safeguards.
              </li>
              <li>
                <strong>Security.</strong> We use industry-standard measures, but no system is
                completely secure.
              </li>
              <li>
                <strong>Changes.</strong> We may update this policy at any time; continued use means
                you accept changes.
              </li>
              <li>
                <strong>Your rights.</strong> EU/UK residents can access, correct, delete, restrict,
                object, port data or withdraw consent. California/Virginia residents have
                disclosure, deletion, opt-out and non-discrimination rights.
              </li>
              <li>
                <strong>Contact.</strong><br/>
                Email: <a href="mailto:main@kiklaminoadv.com">main@kiklaminoadv.com</a><br/>
                Address: 1st Floor 415 High Street, Suite 1038, Stratford, London, E15 4QZ
              </li>
            </ol>
          </div>
        </div>
      )}
    </>
  )
}
