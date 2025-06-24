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
          <a href="mailto:main@kiklaminoadv.com" className="contact-link">
            main@kiklaminoadv.com
          </a>
          <br />
          <strong>Phone:</strong>{' '}
          <a href="tel:+441234567890" className="contact-link">
            +44 1234 567890
          </a>
        </p>
        <p>
          Kiklamino Limited.<br />
          1 King Street, London<br />
           England, EC2V 8AU
        </p>
      </div>
    </section>
  )
}
