const SCRIPTS = {
  "script-roube-um-ovo": 'loadstring(game:HttpGet("https://cloverhub.app/clover.lua"))()',

  "blox-fruits": 'loadstring(game:HttpGet("https://example.com"))()',

  "mm2": 'loadstring(game:HttpGet("https://example.com"))()'
};

const params = new URLSearchParams(location.search);
const slug = params.get("to");
const script = SCRIPTS[slug];

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

if (!script) {

  title.textContent = "Script não encontrado";
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

      title.textContent = "Script pronto";
      msg.textContent = "Seu script está pronto para copiar.";

      btn.disabled = false;
      btn.textContent = "Mostrar Script";

      btn.onclick = () => {

        scriptText.value = script;
        scriptBox.style.display = "block";

        btn.textContent = "Script exibido ✓";

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

      scriptText.select();
      document.execCommand("copy");

      copyStatus.textContent = "✅ Script copiado!";

    }

  };

}
