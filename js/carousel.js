export function initCarousel() {
  const slider = document.querySelector('.slider');
  if (!slider) return;

  const track = slider.querySelector('.slides');
  const slides = slider.querySelectorAll('.slide');
  const dotsBox = slider.querySelector('.dots');
  let index = 0;

  slides.forEach((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Témoignage ${i + 1} sur ${slides.length}`);
    dot.addEventListener('click', () => show(i));
    dotsBox.append(dot);
  });

  function show(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, n) => s.setAttribute('aria-hidden', n !== index));
    dotsBox.querySelectorAll('.dot').forEach((d, n) => {
      d.setAttribute('aria-current', n === index ? 'true' : 'false');
    });
  }

  slider.querySelector('.prev').addEventListener('click', () => show(index - 1));
  slider.querySelector('.next').addEventListener('click', () => show(index + 1));

  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });


  let startX = 0;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 50) show(index - 1);
    if (diff < -50) show(index + 1);
  });

  show(0);
}