const SCRIPTS = {
  "script-roube-um-ovo":
    'loadstring(game:HttpGet("https://cloverhub.app/clover.lua"))()'
};

const params = new URLSearchParams(window.location.search);
const slug = params.get("to");
const script = SCRIPTS[slug];

const title = document.getElementById("title");
const msg = document.getElementById("msg");
const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
const icon = document.getElementById("icon");

const scriptBox = document.getElementById("scriptBox");
const scriptText = document.getElementById("scriptText");
const copyScript = document.getElementById("copyScript");
const copyStatus = document.getElementById("copyStatus");
const continueButton = document.getElementById("continue");


/* SCRIPT NÃO ENCONTRADO */

if (!script) {

  if (title) {
    title.textContent = "Script não encontrado";
  }

  if (msg) {
    msg.textContent =
      "Esse script não existe ou o link está incompleto.";
  }

  if (timer) {
    timer.textContent = "";
  }

  if (icon) {
    icon.textContent = "!";
    icon.classList.add("error");
  }

}


/* SCRIPT ENCONTRADO */

else {

  let segundos = 5;

  const mensagens = [
    "Verificando conexão...",
    "Verificando disponibilidade...",
    "Preparando seu script...",
    "Finalizando acesso...",
    "Acesso liberado."
  ];

  if (title) {
    title.textContent = "Verificando acesso";
  }

  if (msg) {
    msg.textContent = mensagens[0];
  }

  if (timer) {
    timer.textContent = "5s";
  }

  if (progress) {
    progress.style.width = "0%";
  }


  const intervalo = setInterval(function() {

    segundos--;

    const porcentagem =
      ((5 - segundos) / 5) * 100;


    if (progress) {
      progress.style.width =
        `${porcentagem}%`;
    }


    if (segundos === 4) {

      if (title) {
        title.textContent =
          "Conexão verificada";
      }

      if (msg) {
        msg.textContent =
          mensagens[1];
      }

    }


    if (segundos === 3) {

      if (title) {
        title.textContent =
          "Preparando script";
      }

      if (msg) {
        msg.textContent =
          mensagens[2];
      }

    }


    if (segundos === 2) {

      if (title) {
        title.textContent =
          "Quase pronto";
      }

      if (msg) {
        msg.textContent =
          mensagens[3];
      }

    }


    if (segundos === 1) {

      if (title) {
        title.textContent =
          "Liberando acesso";
      }

      if (msg) {
        msg.textContent =
          mensagens[4];
      }

    }


    if (timer) {
      timer.textContent =
        segundos > 0
          ? `${segundos}s`
          : "✓";
    }


    /* FINAL */

    if (segundos <= 0) {

      clearInterval(intervalo);

      if (progress) {
        progress.style.width = "100%";
      }

      if (title) {
        title.textContent =
          "Script pronto";
      }

      if (msg) {
        msg.textContent =
          "Seu script foi liberado. Agora é só copiar.";
      }

      if (icon) {
        icon.textContent = "✓";
        icon.classList.add("success");
      }

      if (timer) {
        timer.textContent =
          "ACESSO LIBERADO";
      }


      if (scriptText) {
        scriptText.value = script;
      }


      if (scriptBox) {

        setTimeout(function() {

          scriptBox.style.display = "block";

          scriptBox.classList.add("show");

        }, 250);

      }

    }

  }, 1000);

}


/* BOTÃO COPIAR */

if (copyScript) {

  copyScript.addEventListener(
    "click",
    async function() {

      if (!scriptText || !scriptText.value) {
        return;
      }


      try {

        await navigator.clipboard.writeText(
          scriptText.value
        );

        if (copyStatus) {
          copyStatus.textContent =
            "✓ Script copiado com sucesso!";
        }

        copyScript.classList.add("copied");

        copyScript.innerHTML =
          "<span>✓</span> Script Copiado";


        setTimeout(function() {

          if (copyStatus) {
            copyStatus.textContent = "";
          }

          copyScript.classList.remove("copied");

          copyScript.innerHTML =
            "<span>📋</span> Copiar Script";

        }, 2500);


      } catch (erro) {

        scriptText.select();

        document.execCommand("copy");

        if (copyStatus) {
          copyStatus.textContent =
            "✓ Script copiado com sucesso!";
        }

      }

    }
  );

    }
