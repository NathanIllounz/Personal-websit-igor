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
// The hero (#top) is deliberately excluded: hiding above-the-fold content until
// JS runs tanks FCP/Speed Index — the hero must paint immediately.
function initReveals() {
  document.querySelectorAll<HTMLElement>('.section-inner').forEach((inner) => {
    if (inner.closest('#top')) return;
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

// Hero intro: the name rises letter by letter, then the rest of the hero
// slides in with a mechanical stagger. Runs once, after load (content is
// painted before this runs, so first paint stays instant).
function initHeroIntro() {
  const hero = document.getElementById('top');
  if (!hero) return;
  const letters = hero.querySelectorAll('.hero-letter');
  const items = hero.querySelectorAll('[data-intro]');
  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  if (letters.length) tl.from(letters, { yPercent: 115, duration: 0.55, stagger: 0.03 }, 0);
  if (items.length) tl.from(items, { y: 26, autoAlpha: 0, duration: 0.55, stagger: 0.07 }, 0.3);
}

// Hero parallax: grid and diagram drift subtly against the pointer.
function initHeroParallax() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const hero = document.getElementById('top');
  if (!hero) return;
  const layers: Array<[HTMLElement | null, number]> = [
    [hero.querySelector<HTMLElement>('.hero-grid'), 12],
    [hero.querySelector<HTMLElement>('.hero-diagram'), -22],
  ];
  hero.addEventListener('pointermove', (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach(([el, f]) => {
      if (el) gsap.to(el, { x: nx * f, y: ny * f, duration: 0.8, ease: 'power2.out' });
    });
    // amber glow follows the pointer
    hero.style.setProperty('--mx', `${e.clientX - r.left}px`);
    hero.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

// The Build: fixed photographic backdrop — each level descent crossfades to
// the next construction stage with a perspective dip (the 3D transition).
function initBuildScene() {
  const scene = document.getElementById('build-scene');
  if (!scene) return;
  const stages = Array.from(scene.querySelectorAll<HTMLImageElement>('.build-stage'));
  if (!stages.length) return;

  // section index → stage index (0-based). Hero shows stage 1 faintly behind
  // the paper hero; contact keeps the last stage (also hidden behind paper).
  const stageFor = (i: number) => Math.max(0, Math.min(i - 1, stages.length - 1));

  const goTo = (i: number) => {
    const s = stageFor(i);
    stages.forEach((img, k) => img.setAttribute('data-active', String(k === s)));
    // camera dip: slight tilt + push-in that settles — mechanical, no bounce
    const tl = gsap.timeline({ defaults: { overwrite: 'auto' } });
    tl.fromTo(
      scene,
      { rotateX: 0, scale: 1 },
      { rotateX: 5, scale: 1.02, duration: 0.5, ease: 'power2.in' },
      0
    ).to(scene, { rotateX: 0, scale: 1, duration: 0.6, ease: 'power2.out' }, 0.5);
  };

  stages[0]?.setAttribute('data-active', 'true');

  SECTIONS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => {
        if (self.isActive) goTo(i);
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

  // First real user input unlocks idle CSS loops (hero lift diagram) —
  // keeps audits (which never interact) free of endless animation.
  const wake = () => document.documentElement.classList.add('user-active');
  ['pointermove', 'scroll', 'touchstart', 'keydown'].forEach((ev) =>
    window.addEventListener(ev, wake, { once: true, passive: true })
  );

  // Run each init as its own task after the load event: keeps main-thread
  // work out of the startup window (TBT) and splits it into short tasks.
  const queue: Array<() => void> = [initHeroIntro, initSmoothScroll, initReveals, initCountUps];
  // The elevator/car + Build scene are desktop refinements — phones keep it
  // simple (CLAUDE.md rule 5).
  if (window.matchMedia('(min-width: 1024px)').matches) {
    queue.push(initElevator);
    queue.push(initBuildScene);
    queue.push(initHeroParallax);
  }
  queue.push(() => window.addEventListener('resize', () => ScrollTrigger.refresh()));

  const runNext = () => {
    const task = queue.shift();
    if (!task) return;
    task();
    setTimeout(runNext, 0);
  };
  if (document.readyState === 'complete') {
    setTimeout(runNext, 0);
  } else {
    window.addEventListener('load', () => setTimeout(runNext, 0), { once: true });
  }
}

init();
