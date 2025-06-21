'use client'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section-content">
        <h2>Get In Touch</h2>
        <p>
          Ready to unlock higher-quality affiliate leads? Drop us a line and
          one of our strategists will respond within 24 hours.
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:info@teletron.media" className="contact-link">
            info@teletron.media
          </a>
          <br />
          <strong>Phone:</strong>{' '}
          <a href="tel:+441234567890" className="contact-link">
            +44 1234 567890
          </a>
        </p>
        <p>
          Teletron Media Ltd.<br />
          24 Station Square, Suite 16<br />
          Inverness IV1 1LD, Scotland
        </p>
      </div>
    </section>
  )
}
