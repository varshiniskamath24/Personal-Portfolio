import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['about','experience','projects','skills','contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <ul className="nav__links">
          {links.map((l, i) => (
            <li key={l.href} style={{ animationDelay: `${i * 0.07}s` }}>
              <a href={l.href} className={active === l.href.slice(1) ? 'active' : ''}>
                <span className="nav__link-num">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&to=varshiniskamath2001@gmail.com&su=Let's Connect&body=Hi Varshini,"
  target="_blank"
  rel="noopener noreferrer"
  className="nav__cta"
            >
              Hire Me
            </a>
          </li>
        </ul>
        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="mailto:vkamath32@gatech.edu" onClick={() => setOpen(false)}>Hire Me</a>
      </div>
    </nav>
  );
}
