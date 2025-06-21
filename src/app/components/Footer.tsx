// src/app/components/Footer.tsx
'use client'

import { useState } from 'react'

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <button
            className="footer-policy-btn"
            onClick={() => setIsOpen(true)}
          >
            Privacy Policy
          </button>
          <p className="footer-copy">© 2025 Teletron Media. All rights reserved.</p>
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
            <h2>Privacy Policy</h2>
            <p><em>Last revised: June 17, 2025</em></p>
            <ol className="policy-list">
              <li>
                <strong>Purpose.</strong> This Privacy Policy explains how Teletron Limited (“we”)
                collects, uses, shares, and protects your personal data when you visit
                <a href="https://teletron.com" target="_blank" rel="noopener noreferrer"> teletron.com</a>.
              </li>
              <li>
                <strong>Data We Collect.</strong>
                <ul>
                  <li><strong>Data You Provide:</strong> name, email, phone, company, message.</li>
                  <li><strong>Usage Data:</strong> IP address, browser info, pages visited, timestamps.</li>
                  <li><strong>Cookies & Tracking:</strong> to remember preferences & analyze traffic.</li>
                </ul>
              </li>
              <li>
                <strong>How We Use.</strong> To respond to your requests, operate & secure our site,
                send marketing (only if you opt in), and comply with legal obligations.
              </li>
              <li>
                <strong>Sharing Data.</strong> With service providers, business successors,
                or when required by law.
              </li>
              <li>
                <strong>Cookies.</strong> You can disable cookies in your browser, but some features
                may break.
              </li>
              <li>
                <strong>Children’s Privacy.</strong> Not intended for under-18s. If we’ve collected
                data from a minor, contact us to remove it.
              </li>
              <li>
                <strong>Data Retention.</strong> We keep your data only as long as needed for the
                purposes above or as required by law.
              </li>
              <li>
                <strong>International Transfers.</strong> Data may be processed in the UK, EU, or
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
                <strong>Your Rights.</strong> EU/UK residents can access, correct, delete, restrict,
                object, port data or withdraw consent. California/Virginia residents have
                disclosure, deletion, opt-out and non-discrimination rights.
              </li>
              <li>
                <strong>Contact.</strong><br/>
                Email: <a href="mailto:info@teletron.com">info@teletron.com</a><br/>
                Address: 24 Station Square, Suite 16, Inverness IV1 1LD, Scotland
              </li>
            </ol>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Footer */
        .footer {
          background: #f4f7fa;
          padding: 1rem 0;
          text-align: center;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .footer-policy-btn {
          background: none;
          border: none;
          color: #00AEEF;
          text-decoration: underline;
          font-size: 0.95rem;
          cursor: pointer;
        }
        .footer-copy {
          font-size: 0.85rem;
          color: #555;
        }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }
        .modal {
          background: #fff;
          border-radius: 0.75rem;
          width: 90%;
          max-width: 600px;
          max-height: 75vh;
          overflow-y: auto;
          padding: 1.5rem;
          position: relative;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .policy-list {
          font-size: 0.9rem;
          line-height: 1.4;
          padding-left: 1.2rem;
        }
        .policy-list li + li {
          margin-top: 0.75rem;
        }
        .policy-list ul {
          margin-top: 0.3rem;
          padding-left: 1rem;
        }
        a {
          color: #00AEEF;
        }
      `}</style>
    </>
  )
}
