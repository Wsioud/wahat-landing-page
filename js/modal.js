const KEY = 'wahat-modal-fermee';

export function initModal() {
  const modal = document.getElementById('cta-modal');
  if (!modal || typeof modal.showModal !== 'function') return;

  let dejaFermee = false;
  try { dejaFermee = localStorage.getItem(KEY) === 'oui'; } catch (e) { }

  if (!dejaFermee) {
    setTimeout(() => {
      if (!document.querySelector('dialog[open]')) modal.showModal();
    }, 8000);
  }


  modal.addEventListener('close', () => {
    try { localStorage.setItem(KEY, 'oui'); } catch (e) {  }
  });

  modal.querySelectorAll('[data-fermer]').forEach(btn => {
    btn.addEventListener('click', () => modal.close());
  });

  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}