/* EDITE SOMENTE ESTA LISTA PARA ADICIONAR SEUS SCRIPTS. */

const SCRIPTS = [
  {
    slug: 'script-roube-um-ovo',
    name: 'script roube um ovo',
    description: 'Seu primeiro script do Prisma Scripts.',
    icon: '⚡',link: 'https://raw.githubusercontent.com/Abdullahking20/loader-lua/main/loader'
    
{
  slug: 'executores',
  name: 'Executores',
  description: 'Escolha seu executor para PC ou Mobile.',
  icon: '⚡',
  buttons: [
    {
      name: '📱 Executor Mobile',
      link: 'https://www.mediafire.com/file/pfn3jfumf35quib/Delta-2.735.1138.apk/file'
    },
    {
      name: '🖥️ Executor PC',
      link: 'https://realexecutor.com/download.html'
    }
  ]
}


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
