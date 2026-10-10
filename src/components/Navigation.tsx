import { useEffect, useRef, useState } from 'react';
import resumePdf from '../assets/Redhwan_Rahi_Resume.pdf';
import { Close, Download, Menu, Moon, Sun } from './Icons';

export type Theme = 'light' | 'dark';

type NavigationProps = {
  theme: Theme;
  onThemeToggle: () => void;
};

const navItems = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'About', href: '#about', id: 'about' },
];

function Navigation({ theme, onThemeToggle }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        const progress = distance > 0 ? window.scrollY / distance : 0;

        setScrolled(window.scrollY > 24);
        progressRef.current?.style.setProperty('--scroll-progress', `${progress}`);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id === 'top' ? '' : visible.target.id);
        }
      },
      { rootMargin: '-28% 0px -58%', threshold: [0, 0.25, 0.6] },
    );

    [{ id: 'top' }, ...navItems].forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    const main = document.querySelector<HTMLElement>('main');
    const footer = document.querySelector<HTMLElement>('footer');

    main?.toggleAttribute('inert', menuOpen);
    footer?.toggleAttribute('inert', menuOpen);

    if (!menuOpen) {
      return () => {
        document.body.classList.remove('menu-open');
        main?.removeAttribute('inert');
        footer?.removeAttribute('inert');
      };
    }

    window.requestAnimationFrame(() => navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || !headerRef.current) return;

      const focusable = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((element) => element.offsetParent !== null);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('menu-open');
      main?.removeAttribute('inert');
      footer?.removeAttribute('inert');
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 861px)');
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener('change', closeAtDesktop);
    return () => desktop.removeEventListener('change', closeAtDesktop);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header ref={headerRef} className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-is-open' : ''}`}>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="nav-shell">
        <a className="brand-mark" href="#top" aria-label="RR. — Redhwan Rahi, back to top" onClick={closeMenu}>
          RR<span>.</span>
        </a>

        <nav ref={navRef} className={`primary-nav${menuOpen ? ' is-open' : ''}`} id="site-navigation" aria-label="Primary navigation">
          <div className="nav-links">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.id}
                onClick={closeMenu}
                aria-current={activeSection === item.id ? 'location' : undefined}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <a className="nav-resume" href={resumePdf} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Résumé
            <Download />
          </a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button
            ref={menuButtonRef}
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
