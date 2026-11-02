
export function initMenu() {
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('menu-toggle');
  let lastY = window.scrollY;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > lastY && y > 120 && !toggle.checked) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastY = y;
  }, { passive: true });

 
  header.addEventListener('focusin', () => header.classList.remove('hidden'));


  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => { toggle.checked = false; });
  });
}