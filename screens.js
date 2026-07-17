/* ===========================================================================
   LEAN APP · Onboarding — TELAS (render hi-fi)
   =========================================================================== */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Resource resolver: in bundled/standalone mode images live in window.__resources;
  // in dev mode they fall back to the img/ folder.
  const IMG = (name) => {
    const id = name.replace(/[^a-zA-Z0-9]/g, '_');
    return (window.__resources && window.__resources[id]) || ('img/' + name);
  };

  const crumb = (parts) => `<nav class="crumb">${parts.map((p) =>
    p.href ? `<a href="${p.href}">${esc(p.t)}</a>` : `<span>${esc(p.t)}</span>`).join('<i>/</i>')}</nav>`;

  const badge = (t, cls = '') => `<span class="badge ${cls}">${esc(t)}</span>`;
  const lvlDots = (lv) => { const n = LA.LEVELS[lv] || 1; return `<span class="lvl" title="${esc(lv)}">${[1,2,3].map((i)=>`<i class="${i<=n?'on':''}"></i>`).join('')}<b>${esc(lv)}</b></span>`; };

  const stepList = (arr) => `<ol class="steps">${arr.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`;
  const bullets = (arr, cls = '') => `<ul class="bul ${cls}">${arr.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;

  function shots(f) {
    if (!f.imgs || !f.imgs.length) {
      return `<div class="shot-empty">Captura desta tela ainda não disponível — espaço reservado para screenshot, GIF ou vídeo curto.</div>`;
    }
    return `<div class="shots">${f.imgs.map((im) => `
      <figure class="shot" onclick="LAapp.lightbox('${IMG(im.src)}','${esc(im.cap)}')">
        <div class="shot-frame"><img loading="lazy" src="${IMG(im.src)}" alt="${esc(im.cap)}"><span class="shot-zoom">ampliar</span></div>
        <figcaption>${esc(im.cap)}</figcaption>
      </figure>`).join('')}</div>`;
  }

  function relatedLinks(f) {
    const sameGroup = LA.FEATURES.filter((x) => x.group === f.group && (f.sub ? x.sub === f.sub : true) && x.id !== f.id).slice(0, 5);
    if (!sameGroup.length) return '';
    return `<div class="side-card">
      <div class="side-h">Nesta seção</div>
      ${sameGroup.map((r) => `<a class="side-link" href="#/f/${r.id}">${esc(r.name)}</a>`).join('')}
    </div>`;
  }

  const SCREENS = {
    banners() {
      const B = LA.BANNERS;
      const glyph = '<svg class="bn-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="9" cy="10" r="1.6"></circle><path d="M4 18l5-5 4 4 3-3 4 4"></path></svg>';

      const rules = B.regras.map((r) => `
        <div class="bn-rule">
          <span class="bn-rule-n">${esc(r.n)}</span>
          <div><div class="bn-rule-t">${esc(r.t)}</div><p class="bn-rule-d">${esc(r.d)}</p></div>
        </div>`).join('');

      const hdim = (txt) => `<div class="bn-hdim"><span class="bn-hdim-line"></span><span class="bn-hdim-txt">${txt}</span></div>`;
      const hov = (k) => `onmouseenter="LAapp.bnHi('${k}',1)" onmouseleave="LAapp.bnHi('${k}',0)"`;

      const diagram = `
        <div class="bn-diagram">
          <div class="bn-dtop"><div class="bn-wdim">Área útil · 1080px</div></div>

          <div class="bn-drow bn-drow-simples">
            <div class="bn-dname">Imagem simples<br>ou carrossel</div>
            <div class="bn-dmock" data-format="simples" ${hov('simples')}><div class="bn-ph bn-ph-simples">${glyph}</div></div>
            <div class="bn-dh">${hdim('Exemplo com<br>700px de altura')}</div>
          </div>

          <div class="bn-drow bn-drow-lista">
            <div class="bn-dname">Lista horizontal</div>
            <div class="bn-dmock" data-format="lista" ${hov('lista')}>
              <div class="bn-lista">
                ${[0, 1].map((i) => `
                <div class="bn-litem">
                  <div class="bn-litem-top">
                    <div class="bn-litem-card">${glyph}<span class="bn-litem-title">Título</span></div>
                    ${hdim('214px')}
                  </div>
                  <div class="bn-litem-w"><div class="bn-wdim bn-wdim-sm">160px</div></div>
                </div>`).join('')}
              </div>
            </div>
            <div class="bn-dh"><p class="bn-lista-note"><b>Largura livre.</b> 160&nbsp;px é a sugestão para categorias/stories — é ela que define quantos itens ficam visíveis sem scroll. O título deve estar dentro da imagem.</p></div>
          </div>

          <div class="bn-drow bn-drow-grade">
            <div class="bn-dname">Grade</div>
            <div class="bn-dmock" data-format="grade" ${hov('grade')}>
              <div class="bn-grade">
                <div class="bn-grade-col"><div class="bn-ph bn-ph-grade">${glyph}</div><div class="bn-wdim bn-wdim-sm">540px</div></div>
                <div class="bn-grade-col"><div class="bn-ph bn-ph-grade">${glyph}</div><div class="bn-wdim bn-wdim-sm">540px</div></div>
              </div>
            </div>
            <div class="bn-dh">${hdim('Exemplo com<br>500px de altura')}</div>
          </div>
        </div>`;

      const fIcons = {
        simples: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5.5" width="18" height="13" rx="2"></rect></svg>',
        lista: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="6.5" height="14" rx="1.5"></rect><rect x="11" y="5" width="6.5" height="14" rx="1.5"></rect><line x1="20" y1="5" x2="20" y2="19"></line></svg>',
        grade: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5.5" width="8" height="13" rx="1.5"></rect><rect x="13" y="5.5" width="8" height="13" rx="1.5"></rect></svg>'
      };
      const caps = B.formatos.map((f) => `
        <div class="bn-cap" data-format="${f.key}" ${hov(f.key)}>
          <div class="bn-cap-head"><span class="bn-cap-icn">${fIcons[f.key] || ''}</span><div class="bn-cap-t">${esc(f.t)}</div></div>
          <p class="bn-cap-d">${esc(f.d)}</p>
          <dl class="bn-cap-specs">${(f.specs || []).map(([k, v]) => `<div class="bn-spec"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
        </div>`).join('');

      return `<div class="screen bn">
        ${crumb([{ t: 'Início', href: '#/home' }, { t: 'Guia de banners' }])}
        <header class="page-head">
          <div class="feat-kicker">Marketing · Produção de banners</div>
          <h1>Guia de banners</h1>
          <p>${esc(B.intro)}</p>
        </header>

        <section class="block">
          <h2>Regras gerais</h2>
          <p class="block-note">Valem para qualquer banner, em qualquer formato.</p>
          <div class="bn-rules">${rules}</div>
        </section>

        <section class="block">
          <h2>Formatos de banner</h2>
          <p class="block-note">Todos partem da mesma área útil de 1080px de largura. O diagrama mostra como cada formato ocupa a tela do app.</p>
          ${diagram}
          <div class="bn-caps">${caps}</div>
        </section>

        <section class="block">
          <h2>Checklist rápido antes de cadastrar</h2>
          ${bullets(B.checklist, 'check')}
        </section>

        <div class="faq-foot">
          <div><b>Onde uso esses banners?</b><p>Em Vitrines (home do app) e Hotsites (páginas de campanha).</p></div>
          <a class="btn" href="#/f/vitrines">Ir para Vitrines</a>
        </div>
      </div>`;
    },

    feature(id) {
      const f = LA.byId(id);
      if (!f) return `<div class="screen"><p>Funcionalidade não encontrada.</p><a href="#/home">Voltar ao início</a></div>`;
      const stage = LA.JOURNEY.find((s) => s.id === f.journey);
      const sec = (t, body, note) => `<section class="block"><h2>${esc(t)}</h2>${note ? `<p class="block-note">${esc(note)}</p>` : ''}${body}</section>`;

      return `<article class="screen feat">
        ${crumb([{ t: 'Início', href: '#/home' }, { t: f.group }, ...(f.sub ? [{ t: f.sub }] : []), { t: f.name }])}
        <header class="feat-head">
          <div class="feat-kicker">${esc(f.group)}${f.sub ? ' · ' + esc(f.sub) : ''}</div>
          <h1>${esc(f.name)}</h1>
          <p class="feat-lead">${esc(f.lead)}</p>
          <div class="feat-meta">
            ${lvlDots(f.level)}
            ${badge('Jornada · ' + stage.t)}
            ${badge(f.responsavel, 'soft')}
          </div>
        </header>

        <div class="feat-grid">
          <div class="feat-main">
            ${sec('O que é', `<p>${esc(f.oque)}</p>`)}
            ${sec('Quando utilizar', `<p>${esc(f.quando)}</p>`)}
            ${sec('A tela no painel', shots(f), 'Telas reais do painel administrativo. Clique para ampliar.')}
            ${sec('Benefícios para o negócio', bullets(f.beneficios, 'check'))}
            ${f.prereq && f.prereq.length ? sec('Pré-requisitos', bullets(f.prereq)) : ''}
            ${sec('Como configurar', stepList(f.configurar))}
            ${sec('Como utilizar no dia a dia', stepList(f.utilizar))}
            <div class="two-col">
              <section class="block"><h2>Boas práticas</h2>${bullets(f.praticas, 'good')}</section>
              <section class="block"><h2>Erros mais comuns</h2>${bullets(f.erros, 'bad')}</section>
            </div>
            ${f.faq && f.faq.length ? sec('Dúvidas frequentes', `<div class="qa">${f.faq.map((q) => `<details class="qa-i"><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}</div>`) : ''}
          </div>

          <aside class="feat-aside">
            <div class="side-card">
              <div class="side-h">Resumo</div>
              <div class="side-row"><span>Módulo</span><b>${esc(f.group)}</b></div>
              ${f.sub ? `<div class="side-row"><span>Submódulo</span><b>${esc(f.sub)}</b></div>` : ''}
              <div class="side-row"><span>Etapa</span><b>${esc(stage.t)}</b></div>
              <div class="side-row"><span>Nível</span><b>${esc(f.level)}</b></div>
            </div>
            <div class="side-card">
              <div class="side-h">Indicadores impactados</div>
              <div class="chips">${f.kpis.map((k) => `<span class="chip">${esc(k)}</span>`).join('')}</div>
            </div>
            <div class="side-card">
              <div class="side-h">Responsável recomendado</div>
              <p class="side-resp">${esc(f.responsavel)}</p>
            </div>
            ${relatedLinks(f)}
            ${f.group === 'Marketing' ? `<div class="side-card">
              <div class="side-h">Antes de subir a arte</div>
              <p class="side-resp">Confira as medidas e formatos de banner do app.</p>
              <a class="side-link" href="#/banners" style="border-bottom:0;padding-bottom:0;font-weight:600">Guia de banners →</a>
            </div>` : ''}
          </aside>
        </div>
      </article>`;
    },

    home() {
      const stages = LA.JOURNEY.map((st) => {
        const feats = LA.byJourney(st.id);
        return `<div class="jstage">
          <div class="jstage-n">${st.n}</div>
          <div class="jstage-t">${esc(st.t)}</div>
          <div class="jstage-d">${esc(st.d)}</div>
          <div class="jstage-list">${feats.slice(0, 6).map((f) => `<a href="#/f/${f.id}">${esc(f.name)}</a>`).join('')}</div>
        </div>`;
      }).join('');

      const groups = LA.GROUPS.map((g) => {
        const feats = LA.FEATURES.filter((f) => f.group === g);
        return `<section class="home-grp">
          <h3>${esc(g)}</h3>
          <div class="card-grid">${feats.map((f) => `
            <a class="fcard" href="#/f/${f.id}">
              <div class="fcard-t">${esc(f.name)}</div>
              <div class="fcard-d">${esc(f.lead)}</div>
              <div class="fcard-foot">${f.sub ? esc(f.sub) : esc(g)} <span>→</span></div>
            </a>`).join('')}</div>
        </section>`;
      }).join('');

      return `<div class="screen home">
        <section class="hero">
          <div class="hero-kicker">Onboarding · Lean App</div>
          <h1>Bem-vindo ao <span>Lean App</span></h1>
          <p>O guia oficial para configurar, operar e evoluir a sua operação no painel administrativo do Lean App. Use o menu lateral — ele espelha exatamente o seu painel.</p>
          <div class="hero-actions">
            <a class="btn" href="#/primeiros-passos">Primeiros passos</a>
            <a class="btn ghost" href="#/f/dashboard">Explorar o Dashboard</a>
          </div>
        </section>

        <section class="home-journey">
          <div class="sec-h"><h2>Sua jornada</h2><p>Quatro etapas, do zero à evolução contínua.</p></div>
          <div class="jrow">${stages}</div>
        </section>

        <div class="sec-h"><h2>Todos os módulos</h2><p>As ${LA.FEATURES.length} funcionalidades do painel, agrupadas como no produto.</p></div>
        ${groups}

        <section class="home-foot">
          <a class="foot-card" href="#/primeiros-passos">
            <div class="foot-k">Primeiros passos</div>
            <div class="foot-t">Roteiro de implantação</div>
            <p>Um checklist guiado, da configuração à evolução contínua.</p>
          </a>
          <a class="foot-card" href="#/faq">
            <div class="foot-k">FAQ</div>
            <div class="foot-t">Dúvidas frequentes</div>
            <p>Respostas rápidas, direto do material oficial da Leanwork.</p>
          </a>
        </section>
      </div>`;
    },

    start() {
      const stages = LA.START.map((st) => {
        const tasks = st.tasks.map((tk) => {
          const f = tk.fid ? LA.byId(tk.fid) : null;
          return `<li class="step-task" data-task="${esc(st.id + '|' + tk.t)}">
            <button class="step-check" type="button" aria-label="Marcar como concluído" onclick="LAapp.ppToggle(this)"></button>
            <span class="step-txt">${esc(tk.t)}</span>
            ${f ? `<a class="step-link" href="#/f/${f.id}">${esc(f.name)} →</a>` : ''}
          </li>`;
        }).join('');
        return `<section class="pp-stage">
          <div class="pp-head">
            <span class="pp-n">${st.n}</span>
            <div><h2>${esc(st.t)}</h2><p>${esc(st.goal)}</p></div>
          </div>
          <ul class="pp-tasks">${tasks}</ul>
        </section>`;
      }).join('');
      const totalTasks = LA.START.reduce((s, st) => s + st.tasks.length, 0);
      return `<div class="screen">
        ${crumb([{ t: 'Início', href: '#/home' }, { t: 'Primeiros passos' }])}
        <header class="page-head">
          <h1>Primeiros passos</h1>
          <p>Um roteiro prático de implantação, em ${totalTasks} tarefas e quatro etapas. Marque conforme avança — cada tarefa abre a funcionalidade correspondente. O progresso fica salvo neste navegador.</p>
        </header>
        <div class="pp-bar"><div class="pp-bar-fill" id="ppFill"></div></div>
        <div class="pp-bar-label" id="ppLabel"></div>
        <div class="pp-list">${stages}</div>
        <div class="faq-foot">
          <div><b>Precisa de ajuda na implantação?</b><p>Seu CSM Leanwork acompanha cada etapa com você.</p></div>
          <a class="btn" href="#/faq">Ver dúvidas frequentes</a>
        </div>
      </div>`;
    },

    gestao() {
      const G = LA.GESTAO;
      const col = (c) => `
        <section class="gx-col ${c.key === 'lean' ? 'lean' : 'plat'}">
          <div class="gx-col-head">
            <span class="gx-ic">${c.key === 'lean' ? '<span class="gx-sq"></span>' : '<span class="gx-sync">⇄</span>'}</span>
            <div class="gx-col-meta">
              <div class="gx-col-tt">${esc(c.title)}</div>
              <div class="gx-col-tag">${esc(c.tag)}</div>
              <div class="gx-col-desc">${esc(c.desc)}</div>
            </div>
          </div>
          <ul class="gx-list">${c.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </section>`;

      const freq = G.freq.map((r) => `
        <div class="gx-freq-row">
          <span class="gx-fbadge ${esc(r.cls)}">${esc(r.level)}</span>
          <div class="gx-freq-body">
            <div class="gx-freq-items">${esc(r.items)}</div>
            <div class="gx-freq-note">${esc(r.note)}</div>
          </div>
        </div>`).join('');

      const tech = G.tech.items.map((t) => `
        <div class="gx-tech-card">
          <h3>${esc(t.t)}</h3>
          <p>${esc(t.d)}</p>
          ${t.badges ? `
          <div class="gx-tech-sub">
            <div class="gx-tech-sub-h">${esc(t.badges.title)}</div>
            <ul class="bul check gx-tech-badges">${t.badges.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
          </div>` : ''}
        </div>`).join('');

      return `<div class="screen gx">
        ${crumb([{ t: 'Início', href: '#/home' }, { t: 'Gestão' }])}
        <header class="page-head">
          <div class="feat-kicker">Lean App × sua plataforma de e-commerce</div>
          <h1>Onde gerenciar cada coisa</h1>
          <p>${esc(G.intro)}</p>
        </header>

        <section class="block">
          <h2>Lean App × sua plataforma de e-commerce</h2>
          <p class="block-note">Dois ambientes, papéis diferentes. Veja o que vive em cada um.</p>
          <div class="gx-cols">${G.cols.map(col).join('')}</div>
        </section>

        <section class="block">
          <h2>Com que frequência você mexe em cada coisa?</h2>
          <p class="block-note">Ritmo de gestão no painel Lean App.</p>
          <div class="gx-freq">${freq}</div>
        </section>

        <section class="gx-tech">
          <div class="gx-tech-kicker">${esc(G.tech.kicker)}</div>
          <h2>${esc(G.tech.title)}</h2>
          <p class="gx-tech-lead">${esc(G.tech.lead)}</p>
          <div class="gx-tech-grid">${tech}</div>
        </section>

        <div class="faq-foot">
          <div><b>Ficou com dúvida sobre onde ajustar algo?</b><p>Seu CSM Leanwork ajuda a mapear cada ponto com o seu time.</p></div>
          <a class="btn" href="#/faq">Ver dúvidas frequentes</a>
        </div>
      </div>`;
    },

    faq() {
      const cats = [...new Set(LA.FAQ.map((q) => q.cat))];
      const blocks = cats.map((c) => `
        <section class="faq-sec" data-cat="${esc(c)}"><h3>${esc(c)}</h3>
          ${LA.FAQ.filter((q) => q.cat === c).map((q) => `
            <details class="qa-i" data-q="${esc((q.q + ' ' + q.a).toLowerCase())}"><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}
        </section>`).join('');
      return `<div class="screen">
        ${crumb([{ t: 'Início', href: '#/home' }, { t: 'FAQ' }])}
        <header class="page-head"><h1>Dúvidas frequentes</h1><p>${LA.FAQ.length} respostas extraídas do material oficial da Leanwork, organizadas por tema.</p></header>
        <div class="faq-search"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4-4"></path></svg><input id="faqInput" type="search" placeholder="Buscar por palavra-chave (ex.: vitrine, regionalização, selo…)" oninput="LAapp.faqSearch(this.value)" /></div>
        <div class="faq-chips" id="faqChips"><button class="fchip on" data-c="" onclick="LAapp.faqCat('')">Todas</button>${cats.map((c) => `<button class="fchip" data-c="${esc(c)}" onclick="LAapp.faqCat('${esc(c)}')">${esc(c)}</button>`).join('')}</div>
        <div id="faqBody">${blocks}</div>
        <div class="faq-empty" id="faqEmpty" style="display:none">Nenhuma pergunta encontrada. Tente outro termo.</div>
        <div class="faq-foot">
          <div><b>Não encontrou o que procurava?</b><p>Fale com o seu CSM Leanwork ou consulte a seção Suporte do painel.</p></div>
          <a class="btn" href="#/f/c-suporte">Configurar Suporte</a>
        </div>
      </div>`;
    },
  };

  window.SCREENS = SCREENS;
  window.LAesc = esc;
})();
