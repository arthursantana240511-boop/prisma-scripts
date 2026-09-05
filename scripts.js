const SCRIPTS = [
{
slug: "script-roube-um-ovo",
name: "Script Roube um Ovo",
description: "Seu primeiro script do Prisma Scripts.",
icon: "⚡"
},

{
slug: "executores",
name: "Executores",
description: "Escolha seu executor para PC ou Mobile.",
icon: "💻",
buttons: [
{
name: "📱 Executor Mobile",
link: "https://www.mediafire.com/file/pfn3jfumf35quib/Delta-2.735.1138.apk/file"
},
{
name: "🖥️ Executor PC",
link: "https://realexecutor.com/download.html"
}
]
}
];

const cards = document.getElementById("cards");
const count = document.getElementById("count");
const year = document.getElementById("year");

count.textContent = SCRIPTS.length + " itens";
year.textContent = new Date().getFullYear();

SCRIPTS.forEach(function(script) {

const card = document.createElement("article");
card.className = "card";

let botoes = "";

if (script.buttons) {

script.buttons.forEach(function(button) {

  botoes += `
    <a
      class="btn"
      href="${button.link}"
      target="_blank"
      rel="noopener noreferrer"
    >
      ${button.name} <strong>→</strong>
    </a>
  `;

});

} else {

botoes = `
  <a class="btn" href="get.html?to=${script.slug}">
    Obter script <strong>→</strong>
  </a>
`;

}

card.innerHTML = <div class="cardicon">${script.icon}</div> <h3>${script.name}</h3> <p>${script.description}</p> ${botoes} ;

cards.appendChild(card);

});
