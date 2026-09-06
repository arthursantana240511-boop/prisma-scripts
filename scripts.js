const SCRIPTS = [
  {
    slug: "script-roube-um-ovo",
    name: "Script Roube um Ovo",
    description: "Script para Roube um Ovo. Atualizado e pronto para usar.",
    icon: "⚡",
    category: "roblox"
  }
];

const cards = document.getElementById("cards");
const count = document.getElementById("count");
const search = document.getElementById("search");
const executorSection = document.getElementById("executores");
const year = document.getElementById("year");

let categoriaAtual = "todos";


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

  if (lista.length === 0) {

    cards.innerHTML = `
      <div style="
        grid-column: 1 / -1;
        text-align: center;
        padding: 50px 20px;
        color: #777783;
      ">

        <div style="font-size:40px;">🔎</div>

        <h3 style="
          margin-top:10px;
          color:white;
        ">
          Nenhum resultado encontrado
        </h3>

        <p style="margin-top:8px;">
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


/* ATUALIZAR TELA */
function atualizar() {

  const texto = search
    ? search.value.toLowerCase().trim()
    : "";


  /*
    PESQUISA POR EXECUTOR
  */

  const termosExecutor = [
    "executor",
    "executores",
    "delta",
    "mobile",
    "celular",
    "android",
    "pc",
    "computador",
    "windows"
  ];

  const pesquisandoExecutor =
    termosExecutor.some(function(termo) {
      return texto.includes(termo);
    });


  /*
    PESQUISA POR SCRIPT
  */

  const resultados = SCRIPTS.filter(function(script) {

    const correspondeTexto =
      !texto ||
      script.name.toLowerCase().includes(texto) ||
      script.description.toLowerCase().includes(texto);

    const correspondeCategoria =
      categoriaAtual === "todos" ||
      categoriaAtual === script.category;

    return correspondeTexto && correspondeCategoria;

  });


  /*
    SE PESQUISOU EXECUTOR
  */

  if (pesquisandoExecutor) {

    mostrarScripts([]);

    if (executorSection) {
      executorSection.style.display = "block";
    }

    if (count) {
      count.textContent = "Executor";
    }

    return;
  }


  /*
    CATEGORIA EXECUTORES
  */

  if (categoriaAtual === "executores") {

    mostrarScripts([]);

    if (executorSection) {
      executorSection.style.display = "block";
    }

    if (count) {
      count.textContent = "Executor";
    }

    return;
  }


  /*
    CATEGORIA ROBLOX
  */

  if (categoriaAtual === "roblox") {

    if (executorSection) {
      executorSection.style.display = "none";
    }

    mostrarScripts(resultados);

    return;
  }


  /*
    UTILIDADES
  */

  if (categoriaAtual === "utilidades") {

    if (executorSection) {
      executorSection.style.display = "none";
    }

    mostrarScripts([]);

    return;
  }


  /*
    PESQUISA NORMAL
  */

  mostrarScripts(resultados);


  /*
    SEM PESQUISA:
    MOSTRA SCRIPT + EXECUTOR
  */

  if (!texto && executorSection) {
    executorSection.style.display = "block";
  } else if (executorSection) {
    executorSection.style.display =
      resultados.length === 0 ? "none" : "none";
  }

}


/* PESQUISA */

if (search) {

  search.addEventListener("input", function() {
    atualizar();
  });

}


/* CATEGORIAS */

const botoesCategoria =
  document.querySelectorAll(".category");


botoesCategoria.forEach(function(botao) {

  botao.addEventListener("click", function() {

    botoesCategoria.forEach(function(btn) {
      btn.classList.remove("active");
    });

    botao.classList.add("active");

    categoriaAtual =
      botao.dataset.category || "todos";

    atualizar();

  });

});


/* INICIAR */

atualizar();
