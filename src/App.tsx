import { useEffect, useState } from 'react';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Impact from './components/Impact';
import Main from './components/Main';
import Navigation, { type Theme } from './components/Navigation';
import Project from './components/Project';
import Timeline from './components/Timeline';

function getInitialTheme(): Theme {
  const savedTheme = window.localStorage.getItem('rr-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('rr-theme', theme);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    themeMeta?.setAttribute('content', theme === 'dark' ? '#0b0f0d' : '#f3f1e9');
  }, [theme]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8%', threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-frame">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation theme={theme} onThemeToggle={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main id="main-content">
        <Main />
        <Impact />
        <Project />
        <Timeline />
        <Expertise />
      </main>
      <Footer />
    </div>
  );
}

export default App;
