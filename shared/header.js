/**
 * SEAD Lab — Shared header component
 *
 * Usage: <script src="/shared/header.js"></script>
 * Automatically injects header at top of body.
 */
(function() {
  const header = document.createElement('div');
  header.className = 'sead-header';
  header.innerHTML = `
    <div class="sead-header-content">
      <a class="sead-header-logo" href="/">
        <img class="sead-logo-img" src="/shared/logo.svg" alt="SEAD">
        <span>SEAD NCA</span>
      </a>
      <nav class="sead-header-nav">
        <a href="/">Papers</a>
        <a href="https://github.com/sead-nca">GitHub</a>
      </nav>
    </div>
  `;
  document.body.prepend(header);
})();
