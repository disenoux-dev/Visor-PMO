// Sidebar colapsable — compartido por todas las vistas
(function(){
  const html = document.documentElement;
  const btn  = document.querySelector('.navcollapse');
  const logo = document.querySelector('.brand img');
  const LOGO_FULL = 'assets/PMO_3.svg', LOGO_ISO = 'assets/Recurso%207.svg';
  const aplicar = () => {
    const c = html.classList.contains('navc');
    if (logo) logo.src = c ? LOGO_ISO : LOGO_FULL;
    if (btn) {
      btn.setAttribute('aria-expanded', String(!c));
      btn.setAttribute('aria-label', c ? 'Expandir menú' : 'Colapsar menú');
    }
  };
  aplicar();
  if (btn) btn.addEventListener('click', () => {
    html.classList.toggle('navc');
    try { localStorage.setItem('pmo-nav', html.classList.contains('navc') ? '1' : '0'); } catch(e) {}
    aplicar();
    // al terminar la transición, que las tablas recalculen su indicador de scroll
    setTimeout(() => dispatchEvent(new Event('resize')), 400);
  });
})();
