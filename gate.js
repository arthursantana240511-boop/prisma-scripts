const SCRIPTS = {
  "script-roube-um-ovo":
    'loadstring(game:HttpGet("https://cloverhub.app/clover.lua"))()',

  "blox-fruits":
    'loadstring(game:HttpGet("https://example.com"))()',

  "mm2":
    'loadstring(game:HttpGet("https://example.com"))()'
};


/* PEGAR SCRIPT */

const params = new URLSearchParams(location.search);
const slug = params.get("to");
const script = SCRIPTS[slug];


/* ELEMENTOS */

const title = document.querySelector("#title");
const msg = document.querySelector("#msg");
const timer = document.querySelector("#timer");
const progress = document.querySelector("#progress");
const icon = document.querySelector("#icon");

const scriptBox = document.querySelector("#scriptBox");
const scriptText = document.querySelector("#scriptText");
const copyScript = document.querySelector("#copyScript");
const copyStatus = document.querySelector("#copyStatus");


/* SCRIPT NÃO ENCONTRADO */

if (!script) {

  title.textContent = "Script não encontrado";

  msg.textContent =
    "Esse script não existe ou o link está incompleto.";

  timer.textContent = "";

  icon.textContent = "!";

  icon.classList.add("error");

}


/* PROCESSO DE LIBERAÇÃO */

else {

  let n = 5;


  const mensagens = [
    "Verificando conexão...",
    "Verificando disponibilidade...",
    "Preparando seu script...",
    "Finalizando acesso...",
    "Acesso liberado."
  ];


  /* PRIMEIRA MENSAGEM */

  title.textContent = "Verificando acesso";

  msg.textContent = mensagens[0];


  const tick = setInterval(() => {

    n--;


    /* PROGRESSO */

    const porcentagem = ((5 - n) / 5) * 100;

    progress.style.width = `${porcentagem}%`;


    /* MENSAGENS */

    if (n === 4) {

      title.textContent = "Conexão verificada";

      msg.textContent = mensagens[1];

    }

    if (n === 3) {

      title.textContent = "Preparando script";

      msg.textContent = mensagens[2];

    }

    if (n === 2) {

      title.textContent = "Quase pronto";

      msg.textContent = mensagens[3];

    }

    if (n === 1) {

      title.textContent = "Liberando acesso";

      msg.textContent = mensagens[3];

    }


    /* CONTADOR */

    timer.textContent =
      n > 0 ? `${n}s` : "✓";


    /* FINAL */

    if (n <= 0) {

      clearInterval(tick);


      progress.style.width = "100%";


      title.textContent = "Script pronto";

      msg.textContent =
        "Seu script foi liberado. Agora é só copiar.";


      icon.textContent = "✓";

      icon.classList.add("success");


      timer.textContent = "ACESSO LIBERADO";


      /* COLOCAR SCRIPT */

      scriptText.value = script;


      setTimeout(() => {

        scriptBox.style.display = "block";

        scriptBox.classList.add("show");

      }, 250);

    }

  }, 1000);

}


/* COPIAR SCRIPT */

if (copyScript) {

  copyScript.onclick = async () => {

    if (!scriptText.value) return;


    try {

      await navigator.clipboard.writeText(
        scriptText.value
      );

      copyStatus.textContent =
        "✓ Script copiado com sucesso!";

      copyScript.classList.add("copied");

      copyScript.innerHTML =
        "<span>✓</span> Script Copiado";


      setTimeout(() => {

        copyStatus.textContent = "";

        copyScript.classList.remove("copied");

        copyScript.innerHTML =
          "<span>📋</span> Copiar Script";

      }, 2500);


    } catch {

      scriptText.select();

      document.execCommand("copy");


      copyStatus.textContent =
        "✓ Script copiado com sucesso!";

    }

  };

}
