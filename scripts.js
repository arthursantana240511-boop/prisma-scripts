const SCRIPTS = [
  {
    slug: "script-roube-um-ovo",
    name: "Script Roube um Ovo",
    description: "Script para Roube um Ovo.",
    icon: "⚡",
    category: "Roblox"
  }
];

const EXECUTORES = [
  {
    name: "📱 Executor Mobile",
    link: "https://www.mediafire.com/file/pfn3jfumf35quib/Delta-2.735.1138.apk/file"
  },
  {
    name: "🖥️ Executor PC",
    link: "https://realexecutor.com/download.html"
  }
];

const cards = document.getElementById("cards");
const count = document.getElementById("count");
const year = document.getElementById("year");
const search = document.getElementById("search");

year.textContent = new Date().getFullYear();

function renderScripts(list) {

  cards.innerHTML = "";

  count.textContent = list.length + " scripts";

  if (list.length === 0) {

    cards.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        padding: 50px 20px;
        text-align: center;
        color: #777783;
      ">
        <div style="font-size: 35px; margin-bottom: 12px;">
          🔎
        </div>

        <strong style="color:white;">
          Nenhum script encontrado
        </strong>

        <p style="margin-top:8px;">
          Tente pesquisar outro nome.
        </p>
      </div>
    `;

    return;
  }

  list.forEach(function(script) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="cardicon">
        ${script.icon}
      </div>

      <h3>
        ${script.name}
      </h3>

      <p>
        ${script.description}
      </p>

      <a
        class="btn"
        href="get.html?to=${encodeURIComponent(script.slug)}"
      >
        Obter Script
        <strong>→</strong>
      </a>
    `;

    cards.appendChild(card);

  });

}

renderScripts(SCRIPTS);


/* PESQUISA */

if (search) {

  search.addEventListener("input", function() {

    const text = search.value
      .toLowerCase()
      .trim();

    const filtered = SCRIPTS.filter(function(script) {

      return (
        script.name.toLowerCase().includes(text) ||
        script.description.toLowerCase().includes(text)
      );

    });

    renderScripts(filtered);

  });

}
