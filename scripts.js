const cards = document.getElementById("cards");

cards.innerHTML = `
  <article class="card">
    <div class="cardicon">⚡</div>
    <h3>Script Roube um Ovo</h3>
    <p>Seu primeiro script do Prisma Scripts.</p>
    <a class="btn" href="get.html?to=script-roube-um-ovo">
      Obter script <strong>→</strong>
    </a>
  </article>

  <article class="card">
    <div class="cardicon">💻</div>
    <h3>Executores</h3>
    <p>Escolha seu executor para PC ou Mobile.</p>

    <a class="btn" href="https://www.mediafire.com/file/pfn3jfumf35quib/Delta-2.735.1138.apk/file" target="_blank">
      📱 Executor Mobile <strong>→</strong>
    </a>

    <a class="btn" href="https://realexecutor.com/download.html" target="_blank">
      🖥️ Executor PC <strong>→</strong>
    </a>
  </article>
`;
