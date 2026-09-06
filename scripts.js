const SCRIPTS = [
  {
    slug: "script-roube-um-ovo",
    name: "Script Roube um Ovo",
    description: "Script para Roube um Ovo.",
    icon: "⚡"
  }
];

const cards = document.getElementById("cards");
const count = document.getElementById("count");
const year = document.getElementById("year");
const search = document.getElementById("search");

if (year) {
  year.textContent = new Date().getFullYear();
}

function mostrarScripts(lista) {

  if (!cards) return;

  cards.innerHTML = "";

  if (count) {
    count.textContent = lista.length + " scripts";
  }

  if (lista.length === 0) {

    cards.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        text-align: center;
        padding: 50px 20px;
        color: #777783;
      ">
        <div style="font-size: 40px;">🔎</div>

        <h3 style="margin-top: 10px; color: white;">
          Nenhum script encontrado
        </h3>

        <p style="margin-top: 8px;">
          Tente pesquisar outro nome.
        </p>
      </div>
    `;

    return;
  }

  lista.forEach(function(script) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="cardicon">
        ${script.icon}
      </div>

      <h3>${script.name}</h3>

      <p>${script.description}</p>

      <a
        class="btn"
        href="get.html?to=${script.slug}"
      >
        Obter Script
        <strong>→</strong>
      </a>
    `;

    cards.appendChild(card);

  });
}

mostrarScripts(SCRIPTS);


/* PESQUISA */

if (search) {

  search.addEventListener("input", function() {

    const texto = search.value.toLowerCase().trim();

    const resultados = SCRIPTS.filter(function(script) {

      return script.name
        .toLowerCase()
        .includes(texto);

    });

    mostrarScripts(resultados);

  });

}
