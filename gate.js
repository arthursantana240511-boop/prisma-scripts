const DESTINATIONS = {
  "script-roube-um-ovo":
    "https://raw.githubusercontent.com/Abdullahking20/loader-lua/main/loader",

  "blox-fruits":
    "https://example.com",

  "mm2":
    "https://example.com"
};

const params = new URLSearchParams(location.search);
const slug = params.get("to");
const dest = DESTINATIONS[slug];

const title = document.querySelector("#title");
const msg = document.querySelector("#msg");
const timer = document.querySelector("#timer");
const progress = document.querySelector("#progress");
const btn = document.querySelector("#continue");
const icon = document.querySelector("#icon");

const scriptBox = document.querySelector("#scriptBox");
const scriptText = document.querySelector("#scriptText");
const copyScript = document.querySelector("#copyScript");
const copyStatus = document.querySelector("#copyStatus");

if (!dest) {

  title.textContent = "Link não encontrado";
  msg.textContent = "Esse script não existe ou o link está incompleto.";
  timer.textContent = "";
  icon.textContent = "!";

} else {

  let n = 5;

  const tick = setInterval(() => {

    n--;

    timer.textContent = n > 0 ? `${n}s` : "Pronto";

    progress.style.width =
      `${((5 - n) / 5) * 100}%`;

    if (n <= 0) {

      clearInterval(tick);

      title.textContent = "Link pronto";
      msg.textContent = "Seu script está pronto.";

      btn.disabled = false;
      btn.textContent = "Carregar Script";

      btn.onclick = async () => {

        btn.disabled = true;
        btn.textContent = "Carregando...";

        try {

          const response = await fetch(dest);

          if (!response.ok) {
            throw new Error("Não foi possível carregar o script.");
          }

          const text = await response.text();

          if (!text.trim()) {
            throw new Error("O script está vazio.");
          }

          scriptText.value = text;
          scriptBox.style.display = "block";

          btn.textContent = "Script carregado ✓";

          try {
            await navigator.clipboard.writeText(text);
            copyStatus.textContent = "✅ Script copiado!";
          } catch {
            copyStatus.textContent =
              "Script carregado. Clique em 'Copiar Script'.";
          }

        } catch (error) {

          scriptBox.style.display = "block";

          copyStatus.textContent =
            "❌ Não foi possível carregar o script.";

          btn.disabled = false;
          btn.textContent = "Tentar novamente";

        }

      };

    }

  }, 1000);

}

if (copyScript) {

  copyScript.onclick = async () => {

    try {

      await navigator.clipboard.writeText(scriptText.value);

      copyStatus.textContent = "✅ Script copiado!";

    } catch {

      copyStatus.textContent =
        "❌ Não foi possível copiar.";

    }

  };

}
