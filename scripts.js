/* EDITE SOMENTE ESTA LISTA PARA ADICIONAR SEUS SCRIPTS. */

const SCRIPTS = [
  {
    slug: 'script-roube-um-ovo',
    name: 'script roube um ovo',
    description: 'Seu primeiro script do Prisma Scripts.',
    icon: '⚡',
    link: 'https://raw.githubusercontent.com/Abdullahking20/loader-lua/main/loader'
  },

  {
    slug: 'blox-fruits',
    name: 'Blox Fruits',
    description: 'Script para seu conteúdo de Blox Fruits.',
    icon: '◆',
    link: 'https://example.com'
  },

  {
    slug: 'mm2',
    name: 'Murder Mystery 2',
    description: 'Adicione aqui a descrição do seu script.',
    icon: '◈',
    link: 'https://example.com'
  }
];

const cards = document.querySelector('#cards');
const count = document.querySelector('#count');
const year = document.querySelector('#year');

if (count) {
  count.textContent = `${SCRIPTS.length} scripts`;
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (cards) {
  SCRIPTS.forEach(s => {
    const c = document.createElement('article');

    c.className = 'card';

    c.innerHTML = `
      <div class="cardicon">${s.icon}</div>
      <h3>${safe(s.name)}</h3>
      <p>${safe(s.description)}</p>

      <a class="btn" href="get.html?to=${encodeURIComponent(s.slug)}">
        Obter script <strong>→</strong>
      </a>
    `;

    cards.appendChild(c);
  });
}

function safe(x) {
  return String(x).replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[m]));
}
