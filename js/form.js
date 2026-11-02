const rules = {
  nom: v => v.trim().length >= 2 || 'Entrez votre nom (2 lettres minimum).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Entrez une adresse e-mail valide (ex : nom@site.com).',
  telephone: v => v.trim() === '' || /^(\+216)?\s?\d{2}\s?\d{3}\s?\d{3}$/.test(v.trim()) || 'Numéro invalide : 8 chiffres, avec ou sans +216.',
  message: v => v.trim().length >= 20 || 'Votre message doit contenir au moins 20 caractères.',
};

export function initForm() {
  const form = document.querySelector('.form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const counter = document.getElementById('compteur');
  const fields = Array.from(form.querySelectorAll('[data-valider]'));

  function check(field) {
    const result = rules[field.name](field.value);
    const error = document.getElementById(field.id + '-erreur');
    const valid = result === true;
    error.textContent = valid ? '' : result;
    field.setAttribute('aria-invalid', valid ? 'false' : 'true');
    return valid;
  }

  fields.forEach(field => {
    field.addEventListener('blur', () => check(field));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') check(field);
    });
  });

  form.message.addEventListener('input', () => {
    counter.textContent = `${form.message.value.length} / 20 caractères minimum`;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    const invalid = fields.filter(f => !check(f));
    if (invalid.length > 0) {
      invalid[0].focus(); 
      return;
    }
    status.textContent = 'Merci ! Votre message a bien été envoyé (simulation).';
    form.reset();
    counter.textContent = '0 / 20 caractères minimum';
  });
}