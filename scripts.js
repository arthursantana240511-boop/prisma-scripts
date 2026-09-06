const SCRIPTS = [
  {
    slug: "script-roube-um-ovo",
    name: "Script Roube um Ovo",
    description: "Script para Roube um Ovo. Atualizado e pronto para usar.",
    icon: "⚡"
  }
];
const SCRIPTS = [
  {
    slug: "script-roube-um-ovo",
    name: "Script Roube um Ovo",
    description: "Script para Roube um Ovo. Atualizado e pronto para usar.",
    icon: "⚡"
  }
];

const cards = document.getElementById("cards");
const count = document.getElementById("count");
const year = document.getElementById("year");
const search = document.getElementById("search");

const executorSection = document.getElementById("executores");


/* ANO */

if (year) {
  year.textContent = new Date().getFullYear();
}


/* MOSTRAR SCRIPTS */

function mostrarScripts(lista) {

  if (!cards) return;

  cards.innerHTML = "";

  if (count) {
    count.textContent =
      lista.length +
      (lista.length === 1 ? " script" : " scripts");
  }


  /* NENHUM RESULTADO */

  if (lista.length === 0) {

    cards.innerHTML = `
      <div class="no-results">

        <div class="no-results-icon">
          🔎
        </div>

        <h3>
          Nenhum resultado encontrado
        </h3>

        <p>
          Tente pesquisar outro nome ou palavra.
        </p>

      </div>
    `;

    return;
  }


  /* CRIAR CARDS */

  lista.forEach(function(script) {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      
      <div class="cardicon">
        ${script.icon}
      </div>

      <div class="status">
        ● ATIVO
      </div>

      <h3>
        ${script.name}
      </h3>

      <p>
        ${script.description}
      </p>

      <div class="card-bottom">

        <span class="tag">
          ROBLOX
        </span>

        <a
          class="btn"
          href="get.html?to=${encodeURIComponent(script.slug)}"
        >
          Obter Script
          <strong>→</strong>
        </a>

      </div>

    `;

    cards.appendChild(card);

  });

}


/* MOSTRAR TUDO AO ABRIR */

mostrarScripts(SCRIPTS);


/* PESQUISA */

if (search) {

  search.addEventListener("input", function() {

    const texto = search.value
      .toLowerCase()
      .trim();


    /* CAMPO VAZIO */

    if (texto === "") {

      mostrarScripts(SCRIPTS);

      if (executorSection) {
        executorSection.style.display = "flex";
      }

      return;
    }


    /* PESQUISAR SCRIPTS */

    const resultados = SCRIPTS.filter(function(script) {

      return (
        script.name.toLowerCase().includes(texto) ||
        script.description.toLowerCase().includes(texto)
      );

    });


    /* PALAVRAS RELACIONADAS AO EXECUTOR */

    const palavrasExecutor = [
      "executor",
      "executores",
      "delta",
      "mobile",
      "pc",
      "computador",
      "celular",
      "android",
      "windows",
      "download"
    ];


    const encontrouExecutor = palavrasExecutor.some(function(palavra) {

      return palavra.includes(texto) ||
             texto.includes(palavra);

    });


    /* RESULTADO DA PESQUISA */

    mostrarScripts(resultados);


    /* CONTROLAR EXECUTOR */

    if (executorSection) {

      if (encontrouExecutor) {

        executorSection.style.display = "flex";

      } else {

        executorSection.style.display = "none";

      }

    }

  });

}
