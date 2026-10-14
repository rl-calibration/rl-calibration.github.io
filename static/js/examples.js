// Renders the interactive examples viewer from the `examples` array in examples-content.js.
// Each example's `content` is legacy HTML; we parse it into per-model fields
// (think / answer / analysis / confidence) and render a side-by-side comparison.
(function () {
  if (typeof examples === 'undefined') {
    console.error("The 'examples' array is not loaded. Make sure examples-content.js is included.");
    return;
  }

  const tabsEl = document.getElementById('ex-tabs');
  const qTextEl = document.getElementById('ex-q-text');
  const gtEl = document.getElementById('ex-gt-text');
  const modelsEl = document.getElementById('ex-models');
  const toggleAllBtn = document.getElementById('ex-toggle-all');
  if (!tabsEl || !modelsEl) return;

  const MODEL_STYLES = [
    { match: /rlcr/i, color: 'var(--rlcr)', ours: true },
    { match: /rlvr/i, color: 'var(--rlvr)' },
    { match: /base/i, color: 'var(--base)' },
  ];

  // Strip <tag> labels, stray leading/trailing <br>, indentation from the template literals,
  // and convert **markdown bold** into <strong>.
  function cleanTrace(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll('.tag-label').forEach(el => el.remove());
    return tmp.innerHTML
      .replace(/^(\s|<br\s*\/?>)+/i, '')
      .replace(/(\s|<br\s*\/?>)+$/i, '')
      .replace(/^[ \t]+/gm, '')
      .replace(/\n{3,}/g, '\n\n')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function parseModels(contentHtml) {
    const doc = new DOMParser().parseFromString(contentHtml, 'text/html');
    return [...doc.querySelectorAll('.box')].map(box => {
      const rawName = (box.querySelector('strong')?.textContent || '').trim();
      const model = { name: rawName.replace(/\s*\(ours\)\s*/i, ''), traces: {}, answer: '', confidence: null };
      const style = MODEL_STYLES.find(s => s.match.test(rawName)) || {};
      model.color = style.color || 'var(--accent)';
      model.ours = !!style.ours;

      box.querySelectorAll('.scroll-box, .gray-box').forEach(el => {
        const tag = (el.querySelector('.tag-label')?.textContent || '').replace(/[<>\/]/g, '').trim();
        if (el.classList.contains('scroll-box')) {
          model.traces[tag] = cleanTrace(el.innerHTML);
        } else if (tag === 'answer') {
          model.answer = cleanTrace(el.innerHTML);
        } else if (tag === 'confidence') {
          const v = parseFloat(cleanTrace(el.innerHTML));
          model.confidence = isNaN(v) ? null : v;
        }
      });
      return model;
    });
  }

  // Build tab labels like "Trivia 1", "Math 2" from titles of the form "Example - Trivia".
  const counts = {};
  const items = examples.map(ex => {
    const kind = (ex.title.split('-').pop() || 'Example').trim();
    counts[kind] = (counts[kind] || 0) + 1;
    const gtIdx = ex.question.lastIndexOf('Ground Truth Answer:');
    return {
      kind,
      n: counts[kind],
      question: (gtIdx >= 0 ? ex.question.slice(0, gtIdx) : ex.question).trim(),
      truth: gtIdx >= 0 ? ex.question.slice(gtIdx + 'Ground Truth Answer:'.length).trim() : '',
      models: parseModels(ex.content),
    };
  });

  const ICONS = { Trivia: 'fa-book-open', Math: 'fa-square-root-alt' };

  items.forEach((it, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'ex-tab';
    b.setAttribute('role', 'tab');
    b.innerHTML = `<i class="fas ${ICONS[it.kind] || 'fa-comment'} kind"></i>${it.kind} ${it.n}`;
    b.addEventListener('click', () => show(i));
    tabsEl.appendChild(b);
  });

  function traceBlock(label, tag, html, extraClass) {
    if (!html) return '';
    return `
      <details class="ex-trace ${extraClass || ''}">
        <summary>${label} <span class="tag">&lt;${tag}&gt;</span><i class="fas fa-chevron-down chev"></i></summary>
        <div class="ex-trace-body">${html}</div>
      </details>`;
  }

  function modelCard(m) {
    const conf = m.confidence;
    const pct = conf == null ? null : Math.round(conf * 100);
    return `
      <article class="ex-model ${m.ours ? 'is-ours' : ''}" style="--c:${m.color}">
        <header class="ex-model-head">
          <span class="ex-dot"></span><h3>${m.name}</h3>
          ${m.ours ? '<span class="ex-badge">Ours</span>' : ''}
        </header>
        <div class="ex-answer">
          <span class="ex-label">Answer</span>
          <div class="val">${m.answer || '—'}</div>
        </div>
        <div class="ex-conf">
          <div class="ex-conf-row">
            <span class="ex-label">Confidence</span>
            <span class="ex-conf-num">${pct == null ? '—' : `${pct}<small>%</small>`}</span>
          </div>
          <div class="ex-bar" role="img" aria-label="Confidence ${pct ?? 'unknown'} percent"><i style="width:0%" data-w="${pct ?? 0}%"></i></div>
        </div>
        <div class="ex-traces">
          ${traceBlock('Reasoning', 'think', m.traces.think)}
          ${traceBlock('Analysis', 'analysis', m.traces.analysis, 'is-analysis')}
        </div>
      </article>`;
  }

  function typeset(el) {
    const mj = window.MathJax;
    if (!mj || !mj.typesetPromise) return; // MathJax's startup pass will pick it up
    (mj.startup && mj.startup.promise ? mj.startup.promise : Promise.resolve())
      .then(() => { mj.typesetClear && mj.typesetClear([el]); return mj.typesetPromise([el]); })
      .catch(err => console.warn('MathJax typeset failed', err));
  }

  let current = 0;
  let expanded = false;

  function show(i) {
    current = (i + items.length) % items.length;
    const it = items[current];

    [...tabsEl.children].forEach((t, j) => t.setAttribute('aria-selected', String(j === current)));
    const tab = tabsEl.children[current];
    tabsEl.scrollTo({ left: tab.offsetLeft - (tabsEl.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });

    qTextEl.innerHTML = it.question;
    gtEl.innerHTML = it.truth;
    modelsEl.innerHTML = it.models.map(modelCard).join('');
    if (expanded) modelsEl.querySelectorAll('details').forEach(d => d.open = true);

    // animate confidence bars from 0
    requestAnimationFrame(() => requestAnimationFrame(() => {
      modelsEl.querySelectorAll('.ex-bar i').forEach(bar => bar.style.width = bar.dataset.w);
    }));

    typeset(document.getElementById('examples'));
  }

  document.getElementById('ex-prev').addEventListener('click', () => show(current - 1));
  document.getElementById('ex-next').addEventListener('click', () => show(current + 1));

  toggleAllBtn.addEventListener('click', () => {
    expanded = !expanded;
    modelsEl.querySelectorAll('details').forEach(d => d.open = expanded);
    toggleAllBtn.textContent = expanded ? 'Collapse all reasoning' : 'Expand all reasoning';
  });

  show(0);
})();
