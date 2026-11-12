// WebCraft client presentation — slideshow controls
'use strict';
  const slides = Array.from(document.querySelectorAll('.slide'));
  const previous = document.getElementById('previous');
  const next = document.getElementById('next');
  const counter = document.getElementById('counter');
  const progress = document.getElementById('progress');
  const fill = document.getElementById('fill');
  let current = 0;
  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    slides.forEach((slide, i) => { const active = i === index; slide.hidden = !active; slide.classList.toggle('active', active); });
    current = index;
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    progress.setAttribute('aria-valuenow', String(current + 1));
    fill.style.width = `${((current + 1) / slides.length) * 100}%`;
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    next.textContent = current === slides.length - 1 ? 'Finished ✓' : 'Next →';
  }
  previous.addEventListener('click', () => showSlide(current - 1));
  next.addEventListener('click', () => showSlide(current + 1));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.key === 'ArrowRight') showSlide(current + 1);
    if (event.key === 'ArrowLeft') showSlide(current - 1);
  });
  showSlide(0);
