// Master scroll/animation layer — "The Descent" (see PLAN.md §2).
// Progressive enhancement: without JS or with prefers-reduced-motion,
// all content is simply visible and native scrolling applies.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Section ids in descent order — must match the page + LevelIndicator.
const SECTIONS = ['top', 'about', 'manufacturers', 'services', 'why', 'projects', 'contact'];

const HEADER_OFFSET = -56;

function initSmoothScroll(): Lenis {
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector<HTMLElement>(a.hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: HEADER_OFFSET, duration: 1.2 });
    });
  });

  return lenis;
}

// Fade/slide-in of each section's content, mechanical easing, small stagger.
function initReveals() {
  document.querySelectorAll<HTMLElement>('.section-inner').forEach((inner) => {
    gsap.from(Array.from(inner.children), {
      y: 28,
      autoAlpha: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.09,
      scrollTrigger: { trigger: inner, start: 'top 78%' },
    });
  });

  // Subtle parallax drift of the ghost level numbers.
  document.querySelectorAll<HTMLElement>('[data-ghost]').forEach((ghost) => {
    gsap.to(ghost, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: ghost.parentElement, scrub: true },
    });
  });
}

// Count-up for numeric stats: animates the first number found in the element's
// text (keeps prefixes/suffixes like "+" or "YRS" intact). Locale-agnostic.
function initCountUps() {
  document.querySelectorAll<HTMLElement>('[data-countup]').forEach((el) => {
    const original = el.textContent ?? '';
    const match = original.match(/\d[\d,]*/);
    if (!match) return;
    const target = parseInt(match[0].replace(/,/g, ''), 10);
    if (!Number.isFinite(target) || target === 0) return;
    const useCommas = match[0].includes(',');
    const counter = { v: 0 };
    gsap.to(counter, {
      v: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => {
        const n = Math.round(counter.v);
        el.textContent = original.replace(match[0], useCommas ? n.toLocaleString('en-US') : String(n));
      },
    });
  });
}

// The elevator panel: the car marker rides to the active level as you scroll.
function initElevator() {
  const nav = document.getElementById('level-indicator');
  const car = document.getElementById('level-car');
  if (!nav || !car) return;
  const links = Array.from(nav.querySelectorAll<HTMLElement>('[data-level-link]'));
  if (links.length !== SECTIONS.length) return;

  const carY = (i: number) => {
    const link = links[i];
    return link.offsetTop + link.offsetHeight / 2 - car.offsetHeight / 2;
  };

  const setActive = (i: number) => {
    links.forEach((l, j) => l.setAttribute('data-active', String(j === i)));
  };

  gsap.set(car, { y: carY(0) });
  setActive(0);

  SECTIONS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (!self.isActive) return;
        gsap.to(car, { y: carY(i), duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });
        setActive(i);
      },
    });
  });

  // Recompute the car's resting position after resize reflows the panel.
  ScrollTrigger.addEventListener('refreshInit', () => {
    const active = links.findIndex((l) => l.getAttribute('data-active') === 'true');
    if (active >= 0) gsap.set(car, { y: carY(active) });
  });
}

function init() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return; // content is fully visible without any of this

  initSmoothScroll();
  initReveals();
  initCountUps();

  // The elevator/car is a desktop refinement — phones keep it simple (CLAUDE.md rule 5).
  if (window.matchMedia('(min-width: 1024px)').matches) {
    initElevator();
  }

  window.addEventListener('resize', () => ScrollTrigger.refresh());
}

init();
