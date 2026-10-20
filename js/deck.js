/* Allmana × Ágora · Family Day Casa Aberta · motor da apresentação */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const stage = $('#stage');
  const slides = $$('.slide');
  const N = slides.length;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let cur = -1;

  /* ---------- ícones (traço, herdam a cor) ---------- */
  const IC = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowUp: '<path d="M7 17L17 7M8 7h9v9"/>',
    chevL: '<path d="M15 5l-7 7 7 7"/>', chevR: '<path d="M9 5l7 7-7 7"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>', check: '<path d="M4 12.5l5 5L20 6.5"/>',
    pin: '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
    users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M16 14.2c2.9.3 5 2.6 5 5.8"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 16.5l9 5 9-5"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2v.2h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
    chart: '<path d="M3 21h18"/><rect x="5" y="12" width="3" height="7" rx="1"/><rect x="10.5" y="7" width="3" height="12" rx="1"/><rect x="16" y="4" width="3" height="15" rx="1"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-5h4v5"/>',
    route: '<circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="6" r="2.2"/><path d="M7 18h6a3 3 0 0 0 0-6h-2a3 3 0 0 1 0-6h6"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r=".6" fill="currentColor"/><circle cx="4.5" cy="12" r=".6" fill="currentColor"/><circle cx="4.5" cy="18" r=".6" fill="currentColor"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h12l-2.5 4L17 12H5"/>',
    baby: '<circle cx="12" cy="7.5" r="3.8"/><path d="M6.5 21v-2.5a5.5 5.5 0 0 1 11 0V21"/><path d="M10.6 7.4h.01M13.4 7.4h.01"/>',
    spark: '<path d="M12 3l2 6.5 6.5 2.5-6.5 2.5L12 21l-2-6.5L3.5 12 10 9.5z"/>',
    quote: '<path d="M6 7h4v4c0 3-1.8 5-4 6"/><path d="M14 7h4v4c0 3-1.8 5-4 6"/>',
    door: '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><path d="M3 21h18"/><circle cx="14.5" cy="12" r=".8" fill="currentColor"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12c0-4-3-6.5-7.5-6.5 0 4 3 6.5 7.5 6.5z"/><path d="M12 10c0-3.5 2.5-5.5 6.5-5.5 0 3.5-2.5 5.5-6.5 5.5z"/><path d="M8 21h8"/>',
    heart: '<path d="M12 20s-7.5-4.6-9.2-9.2C1.6 7.4 3.9 4 7.3 4c2 0 3.5 1.1 4.7 2.8C13.2 5.1 14.7 4 16.7 4c3.4 0 5.7 3.4 4.5 6.8C19.5 15.4 12 20 12 20z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M16 7l3 3M13.5 9.5l2 2"/>',
    cart: '<path d="M3 4h2l2.4 11h11l2-8H6.3"/><circle cx="9" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
    tv: '<rect x="2.5" y="5" width="19" height="13" rx="2"/><path d="M8 21h8M12 18v3"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-1.2-1-1.6-1-2.6 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11.5" r="1" fill="currentColor"/><circle cx="9.5" cy="7.5" r="1" fill="currentColor"/><circle cx="14.5" cy="7.5" r="1" fill="currentColor"/>',
    scissors: '<path d="M4 18L12 4l8 14z"/><path d="M12 4v14M4 18l8-5 8 5"/>',
    grid: '<path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    map: '<path d="M9 4L3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
    alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v4.5M12 17.5h.01"/>',
    leaf: '<path d="M5 19C5 11 10 5 20 5c0 10-6 15-14 15"/><path d="M5 19l7-7"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    hand: '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M8 7.5c0-1.5 1-2 1-3.5M12 7.5c0-1.5 1-2 1-3.5M16 7.5c0-1.5 1-2 1-3.5"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.8"/><path d="M21 16l-5-5-9 9"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20.5h.01M17 20.5h4v-3"/>',
    ruler: '<path d="M3 16L16 3l5 5L8 21z"/><path d="M7 12l2 2M10 9l2 2M13 6l2 2"/>',
    wheat: '<path d="M12 21V8"/><path d="M12 9C10 8 9 6 9 4c2 0 3 2 3 5zM12 9c2-1 3-3 3-5-2 0-3 2-3 5zM12 14c-2-1-3-3-3-5 2 0 3 2 3 5zM12 14c2-1 3-3 3-5-2 0-3 2-3 5z"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8.5 7l1.5-3h4l1.5 3"/><circle cx="12" cy="13.5" r="3.5"/>',
    mouse: '<rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 7v3"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18h2"/>'
  };
  $$('[data-icon]').forEach(el => { el.classList.add('ic'); el.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${IC[el.dataset.icon] || ''}</svg>`; });

  /* ---------- QR ilustrativo (padrão determinístico) ---------- */
  function qr(seed) {
    const n = 21; let s = [...seed].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0;
    const rnd = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
    const finder = (x, y) => [[0, 0], [n - 7, 0], [0, n - 7]].some(([fx, fy]) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7);
    let r = '';
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (!finder(x, y) && rnd() > .52) r += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    const f = (x, y) => `<rect x="${x}" y="${y}" width="7" height="7"/><rect x="${x + 1}" y="${y + 1}" width="5" height="5" fill="#fff"/><rect x="${x + 2}" y="${y + 2}" width="3" height="3"/>`;
    return `<svg viewBox="-1 -1 ${n + 2} ${n + 2}" shape-rendering="crispEdges" aria-label="QR code ilustrativo"><rect x="-1" y="-1" width="${n + 2}" height="${n + 2}" fill="#fff"/><g fill="currentColor">${r}${f(0, 0)}${f(n - 7, 0)}${f(0, n - 7)}</g></svg>`;
  }
  $$('[data-qr]').forEach(el => el.innerHTML = qr(el.dataset.qr));

  /* ---------- escala do palco ---------- */
  function fit() {
    const s = Math.min(innerWidth / 1600, innerHeight / 900);
    stage.style.transform = `translate(-50%,-50%) scale(${s})`;
  }
  addEventListener('resize', fit); fit();
  const rot = $('#rot'); $('#rotX').onclick = e => { e.stopPropagation(); rot.classList.add('off'); };

  /* ---------- contadores ---------- */
  function countUp(el) {
    const end = +el.dataset.count;
    if (reduce) { el.textContent = end; return; }
    const t0 = performance.now() + 350, dur = 1100;
    const tick = t => { const p = Math.min(1, Math.max(0, (t - t0) / dur)); el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
    el.textContent = 0; requestAnimationFrame(tick);
  }

  /* ---------- índice ---------- */
  const idx = $('#index'), idxBody = $('#idxBody');
  const groups = [];
  slides.forEach((s, i) => { const c = s.dataset.chapter; if (!groups.length || groups[groups.length - 1].name !== c) groups.push({ name: c, items: [] }); groups[groups.length - 1].items.push(i); });
  idxBody.innerHTML = groups.map(g => `<section><h4>${g.name}</h4><ol>${g.items.map(i => `<li><button data-i="${i}"><b>${String(i + 1).padStart(2, '0')}</b><span>${slides[i].dataset.name}</span></button></li>`).join('')}</ol></section>`).join('');
  $$('button', idxBody).forEach(b => b.onclick = () => { closeIndex(); go(+b.dataset.i); });
  const openIndex = () => { $$('button', idxBody).forEach(b => b.classList.toggle('cur', +b.dataset.i === cur)); idx.classList.add('open'); $('#idxX').focus(); };
  const closeIndex = () => idx.classList.remove('open');
  $('#idxB').onclick = e => { e.stopPropagation(); openIndex(); };
  $('#idxX').onclick = closeIndex;

  /* ---------- navegação ---------- */
  function go(n) {
    n = Math.max(0, Math.min(N - 1, n));
    if (n === cur) return;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === n));
    cur = n;
    $('#ct').textContent = `${String(n + 1).padStart(2, '0')} / ${N}`;
    $('#prog').style.width = ((n + 1) / N * 100) + '%';
    history.replaceState(null, '', '#' + (n + 1));
    onEnter(slides[n]);
  }
  const nextS = () => go(cur + 1), prevS = () => go(cur - 1);
  $('#prevB').onclick = e => { e.stopPropagation(); prevS(); };
  $('#nextB').onclick = e => { e.stopPropagation(); nextS(); };

  let hudT;
  const pingHud = () => { document.body.classList.add('show-hud'); clearTimeout(hudT); hudT = setTimeout(() => document.body.classList.remove('show-hud'), 2400); };
  addEventListener('mousemove', pingHud); addEventListener('touchstart', pingHud, { passive: true });

  /* ampliação em tela cheia das artes (KVs), com setas entre elas */
  const lb = $('#lb'), lbImg = $('#lbImg'), zooms = $$('[data-zoom]');
  let lbI = 0;
  const lbOpen = () => lb.classList.contains('open');
  let lbSet = [];
  const lbShow = i => { lbI = (i + lbSet.length) % lbSet.length; lbImg.src = lbSet[lbI].src; lbImg.alt = lbSet[lbI].alt; };
  const lbClose = () => lb.classList.remove('open');
  zooms.forEach(img => { img.tabIndex = 0; img.setAttribute('role', 'button'); img.onclick = e => { e.stopPropagation(); lbSet = $$('[data-zoom]', img.closest('.slide')); lbShow(lbSet.indexOf(img)); lb.classList.add('open'); $('#lbX').focus(); }; });
  lb.onclick = lbClose;

  addEventListener('keydown', e => {
    if (lbOpen()) {
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowRight') lbShow(lbI + 1);
      else if (e.key === 'ArrowLeft') lbShow(lbI - 1);
      return;
    }
    if (e.key === 'Enter' && e.target.matches('[data-zoom]')) { e.target.click(); return; }
    if (idx.classList.contains('open')) { if (e.key === 'Escape' || e.key.toLowerCase() === 'm') closeIndex(); return; }
    if (['ArrowRight', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); nextS(); }
    else if (['ArrowLeft', 'PageUp'].includes(e.key)) { e.preventDefault(); prevS(); }
    else if (e.key === 'Home') go(0); else if (e.key === 'End') go(N - 1);
    else if (e.key.toLowerCase() === 'm') openIndex();
    else if (e.key === '1' || e.key === '2') setKV(e.key);
    else if (e.key.toLowerCase() === 'f') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
  });
  let wheelT = 0;
  addEventListener('wheel', e => {
    if (lbOpen() || idx.classList.contains('open') || e.target.closest('.mail-scroll')) return;
    const now = Date.now(); if (now - wheelT < 900 || Math.abs(e.deltaY) + Math.abs(e.deltaX) < 20) return;
    wheelT = now; (e.deltaY + e.deltaX > 0 ? nextS : prevS)();
  }, { passive: true });
  let tx = 0, ty = 0;
  addEventListener('touchstart', e => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', e => {
    if (lbOpen() || idx.classList.contains('open') || e.target.closest('.mail-scroll')) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
    const d = Math.abs(dx) > Math.abs(dy) ? dx : dy; (d < 0 ? nextS : prevS)();
  }, { passive: true });
  stage.addEventListener('click', e => {
    if (e.target.closest('button,a,.mail,.phone,.pg-tbl')) return;
    const r = stage.getBoundingClientRect();
    (e.clientX - r.left < r.width * .25 ? prevS : nextS)();
  });
  $$('[data-goto]').forEach(b => b.onclick = e => { e.stopPropagation(); const t = document.getElementById(b.dataset.goto); if (t) go(slides.indexOf(t)); });

  /* ---------- ao entrar em cada tela ---------- */
  function onEnter(s) {
    $$('[data-count]', s).forEach(countUp);
    if (s.classList.contains('s-dur')) tvStart(); else tvStop();
  }

  /* programação: destacar faixa */
  const tbl = $('.pg-tbl table');
  $$('.pg-f button').forEach(b => b.onclick = e => {
    e.stopPropagation();
    $$('.pg-f button').forEach(x => x.classList.toggle('on', x === b));
    const a = b.dataset.age; tbl.dataset.f = a;
    $$('tbody tr', tbl).forEach(tr => tr.classList.toggle('dim', a !== 'all' && !tr.children[+a + 1].querySelector('.dot')));
  });

  /* carrinhos: cada item leva os seus ícones (a: sem açúcar adicionado, g: sem glúten, l: sem lactose, v: vegano)
     e cada carrinho diz o que contém. Pelos ingredientes de cada item; a lista final vem da ficha do fornecedor. */
  const CARTS = [
    ['Fruta da casa', 'Docinho que vem da natureza.', [['Espetinho de frutas da estação', 'aglv'], ['Copinho de melancia e uva', 'aglv'], ['Picolé de fruta', 'glv']], 'Tudo neste carrinho', ''],
    ['Pipoca da casa', 'Estourada na hora.', [['Pipoca salgada no azeite', 'aglv'], ['Pipoca doce em porção pequena', 'glv']], 'Pipoca no azeite, sem manteiga', ''],
    ['Lanchinho da casa', 'Para recarregar entre uma brincadeira e outra.', [['Mini pão de queijo', 'g'], ['Sanduíche natural de frango ou de queijo branco no pão integral', ''], ['Wrap de homus com legumes (vegano)', 'lv']], 'Sanduíche natural e wrap', 'glúten (sanduíche e wrap), lactose (pão de queijo e sanduíche), ovo (pão de queijo).'],
    ['Bebidas da casa', 'Água fresquinha a manhã toda.', [['Água', 'aglv'], ['Água saborizada com fruta e hortelã', 'aglv'], ['Suco natural sem açúcar', 'aglv'], ['Limonada suíça pouco doce', 'glv']], 'Água saborizada e suco sem açúcar', ''],
    ['Docinho da casa', 'Um pedacinho de alegria.', [['Brigadeiro de colher em porção pequena', 'g'], ['Cookie de aveia com banana', 'a'], ['Iogurte com granola', '']], 'Cookie de aveia com banana, iogurte natural', 'lactose (brigadeiro e iogurte), glúten (cookie e granola). A granola pode conter castanhas.'],
    ['Café da casa', 'Para os adultos da família.', [['Café coado', 'aglv'], ['Cappuccino', ''], ['Chá gelado sem açúcar', 'aglv'], ['Leite vegetal', 'lv']], 'Chá gelado sem açúcar', 'lactose (cappuccino). Leite vegetal conforme o tipo: amêndoa tem castanhas, aveia tem glúten.']
  ];
  const TAG = { a: ['leaf', 'sem açúcar adicionado'], g: ['wheat', 'sem glúten'], l: ['drop', 'sem lactose'], v: ['sprout', 'vegano'] };
  const tags = f => f ? `<span class="m-ics" title="${[...f].map(k => TAG[k][1]).join(', ')}">${[...f].map(k => `<i class="ic"><svg viewBox="0 0 24 24" aria-hidden="true">${IC[TAG[k][0]]}</svg></i>`).join('')}</span>` : '';
  function renderCart(i) {
    const [n, l, items, healthy, contains] = CARTS[i];
    $('#crName').textContent = n; $('#crLine').textContent = l; $('#crMenuT').textContent = n;
    $('#crMenu').innerHTML = items.map(([t, f]) => `<li>${t}${tags(f)}</li>`).join('');
    $('#crHealthy').textContent = `Saudável: ${healthy.charAt(0).toLowerCase() + healthy.slice(1)}`;
    $('#crAl').innerHTML = contains ? `<b>Contém:</b> ${contains}` : 'Nenhum item contém glúten, lactose, amendoim, castanhas ou ovo.';
  }
  renderCart(0);
  $$('.cr-list button').forEach(b => b.onclick = e => {
    e.stopPropagation();
    $$('.cr-list button').forEach(x => x.classList.toggle('on', x === b));
    const swap = $$('.cart-top,.menu-a4'); swap.forEach(x => x.classList.add('swap'));
    setTimeout(() => { renderCart(+b.dataset.cart); swap.forEach(x => x.classList.remove('swap')); }, 200);
  });

  /* TV: loop das 4 telas */
  let tvI = 0, tvTimer = null;
  const tvShow = i => {
    tvI = (i + 4) % 4;
    $$('.tvs').forEach(x => x.classList.toggle('on', +x.dataset.s === tvI));
    $$('.tv-list button').forEach(x => x.classList.toggle('on', +x.dataset.s === tvI));
    const bar = $('.tv-bar i'); bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = '';
  };
  function tvStart() { tvStop(); tvShow(tvI); if (!reduce) tvTimer = setInterval(() => tvShow(tvI + 1), 5000); }
  function tvStop() { clearInterval(tvTimer); tvTimer = null; }
  $$('.tv-list button').forEach(b => b.onclick = e => { e.stopPropagation(); tvShow(+b.dataset.s); if (tvTimer) tvStart(); });

  /* crachá: passaporte */
  $$('.pass button').forEach(b => b.onclick = e => { e.stopPropagation(); b.classList.toggle('on'); });

  /* página do QR: abas */
  $$('.ph-tabs button').forEach(b => b.onclick = e => {
    e.stopPropagation();
    $$('.ph-tabs button').forEach(x => x.classList.toggle('on', x === b));
    $$('.ph-p').forEach(p => p.classList.toggle('on', p.dataset.t === b.dataset.t));
  });
  $$('.ph-ages span').forEach(s => s.onclick = e => { e.stopPropagation(); $$('.ph-ages span').forEach(x => x.classList.toggle('on', x === s)); });

  /* opção de KV: o seletor (ou as teclas 1 e 2) troca todas as peças de uma vez */
  function setKV(v) { document.body.classList.toggle('kv2', v === '2'); $$('.kvsel button').forEach(b => b.classList.toggle('on', b.dataset.kv === v)); }
  $$('.kvsel button').forEach(b => b.onclick = e => { e.stopPropagation(); setKV(b.dataset.kv); });
  setKV('1');

  /* ---------- início ---------- */
  addEventListener('hashchange', () => { const n = parseInt(location.hash.slice(1)); if (n && n - 1 !== cur) go(n - 1); });
  go(Math.min(N, Math.max(1, parseInt(location.hash.slice(1)) || 1)) - 1);
})();
