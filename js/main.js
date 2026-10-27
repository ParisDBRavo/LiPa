// Placeholders: when an image exists in /images it replaces the placeholder automatically
document.querySelectorAll('.ph img').forEach(img => {
  const ph = img.parentElement;
  const ok = () => ph.classList.add('loaded');
  const fail = () => img.classList.add('broken');
  if (img.complete) { img.naturalWidth ? ok() : fail(); }
  img.addEventListener('load', ok);
  img.addEventListener('error', fail);
});

// Sticky nav
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 50));

// Mobile menu
const menu = document.getElementById('menu');
document.getElementById('burger').onclick = () => menu.classList.toggle('open');
menu.querySelectorAll('a').forEach(a => a.onclick = () => menu.classList.remove('open'));

// Reveal on scroll
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
