/* ===== STOTT Level 1 Study Guide — app shell ===== */
window.STOTT = window.STOTT || {};
const DATA = window.STOTT;
DATA.principles = DATA.principles || [];
DATA.anatomy = DATA.anatomy || { sections: [], muscleGroups: [] };
DATA.posture = DATA.posture || { sections: [] };
DATA.programming = DATA.programming || { layers: [], workflow: [], postures: [] };
DATA.apparatus = DATA.apparatus || {};
DATA.examInfo = DATA.examInfo || {};
DATA.quiz = DATA.quiz || [];

const APPARATUS_META = {
  mat: { label: "Mat", key: "mat" },
  reformer: { label: "Reformer", key: "reformer" },
  cadillac: { label: "Cadillac", key: "cadillac" },
  chair: { label: "Stability Chair", key: "chair" },
  archbarrel: { label: "Arc Barrel", key: "archbarrel" },
  spinecorrector: { label: "Spine Corrector", key: "spinecorrector" },
  ladderbarrel: { label: "Ladder Barrel", key: "ladderbarrel" },
};

const LS_KEY = "stott_l1_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { perQuestion: {}, sessions: [] };
}
function saveProgress(state) {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}
let PROGRESS = loadProgress();

/* ---------- theme ---------- */
function applyTheme(mode) {
  const root = document.documentElement;
  if (mode === "auto") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", mode);
  document.querySelectorAll(".theme-toggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.theme === mode);
  });
  localStorage.setItem("stott_theme", mode);
}
document.getElementById("themeToggle").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-theme]");
  if (btn) applyTheme(btn.dataset.theme);
});
applyTheme(localStorage.getItem("stott_theme") || "auto");

/* ---------- nav ---------- */
const mainView = document.getElementById("mainView");
const navButtons = document.querySelectorAll(".nav-btn[data-view]");

function setActiveNav(view) {
  navButtons.forEach((b) => b.classList.toggle("active", b.dataset.view === view));
}

let currentView = null;

function navigate(view, opts = {}) {
  currentView = view;
  setActiveNav(view);
  if (window.location.hash.replace("#", "") !== view) window.location.hash = view;
  render(view, opts);
  mainView.scrollTo({ top: 0 });
}

navButtons.forEach((b) =>
  b.addEventListener("click", () => navigate(b.dataset.view))
);

window.addEventListener("hashchange", () => {
  const view = window.location.hash.replace("#", "") || "dashboard";
  if (view === currentView) return; // avoid re-rendering when navigate() itself set this hash
  navigate(view);
});

/* ---------- helpers ---------- */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c === null || c === undefined) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}
function esc(s) {
  return (s ?? "").toString();
}
function countAll(arr) {
  return Array.isArray(arr) ? arr.length : 0;
}
function apparatusCount(key) {
  const a = DATA.apparatus[key];
  if (!a) return 0;
  return countAll(a.warmup) + countAll(a.essential) + countAll(a.intermediate) + countAll(a.advanced);
}

/* update nav counts once data is loaded */
function refreshNavCounts() {
  Object.keys(APPARATUS_META).forEach((key) => {
    const btn = document.querySelector(`.nav-btn[data-view="${key}"]`);
    if (!btn) return;
    const n = apparatusCount(key);
    let countSpan = btn.querySelector(".count");
    if (!countSpan) {
      countSpan = el("span", { class: "count" }, "");
      btn.appendChild(countSpan);
    }
    countSpan.textContent = n ? n : "";
  });
  const quizBtn = document.querySelector('.nav-btn[data-view="quiz"]');
  if (quizBtn) {
    let countSpan = quizBtn.querySelector(".count");
    if (!countSpan) { countSpan = el("span", { class: "count" }, ""); quizBtn.appendChild(countSpan); }
    countSpan.textContent = DATA.quiz.length ? DATA.quiz.length : "";
  }
}

/* ================= DASHBOARD ================= */
function renderDashboard() {
  const totalExercises = Object.keys(APPARATUS_META).reduce((s, k) => s + apparatusCount(k), 0);
  const totalQ = DATA.quiz.length;
  const perQ = PROGRESS.perQuestion;
  const seen = Object.keys(perQ).length;
  const mastered = Object.values(perQ).filter((q) => q.lastGrade === "got-it").length;

  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Welcome back"),
        el("h2", {}, "Let's get you ready."),
        el("p", { class: "sub" }, "Everything pulled from your STOTT manuals, mock exams, and course notes — organized by apparatus, with a self-testing quiz that tracks what's actually sticking."),
      ]),
    ])
  );

  mainView.append(
    el("div", { class: "stat-row" }, [
      statTile("Exercises indexed", totalExercises),
      statTile("Quiz questions", totalQ),
      statTile("Questions reviewed", seen),
      statTile("Marked “got it”", mastered),
    ])
  );

  const section = el("div", { class: "section-block" });
  section.append(el("h3", {}, "Jump in"));
  const grid = el("div", { class: "exercise-list" });
  const jumpTargets = [
    ["principles", "The 5 Basic Principles", "Breathing, pelvic/rib/scapular/cervical placement — the backbone of every score sheet."],
    ["programming", "Programming", "Layer 1 → Layer 2 exercise picks per posture type, with the reasoning behind each one."],
    ["examinfo", "Exam Info & Scripting", "Written + practical exam format, minimum exercise counts, and scripted cueing language."],
    ["quiz", "Run a quiz", "Self-graded recall practice across everything you've studied."],
    ["progress", "My Progress", "See weak topics and past quiz sessions."],
  ];
  jumpTargets.forEach(([view, title, desc]) => {
    grid.append(
      el("div", { class: "exercise-row", onclick: () => navigate(view) }, [
        el("div", {}, [el("div", { class: "name" }, title), el("p", { style: "margin:4px 0 0;font-size:12.5px" }, desc)]),
        el("span", { class: "meta" }, "→"),
      ])
    );
  });
  section.append(grid);
  mainView.append(section);

  if (!totalExercises) {
    mainView.append(
      el("div", { class: "empty-state" }, "Exercise content is still being digested from your manuals — check back shortly, or open Exam Info which is ready now.")
    );
  }
}
function statTile(label, value) {
  return el("div", { class: "stat-tile" }, [
    el("div", { class: "label" }, label),
    el("div", { class: "value mono" }, String(value)),
  ]);
}

/* ================= PRINCIPLES ================= */
function renderPrinciples() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Foundations"),
        el("h2", {}, "The 5 Basic Principles"),
        el("p", { class: "sub" }, "Every practical exam is scored around these. Introduced in this order, every time."),
      ]),
    ])
  );
  if (!DATA.principles.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this section."));
    return;
  }
  DATA.principles.forEach((p, i) => {
    const card = el("div", { class: "card" });
    card.append(el("h3", {}, `${i + 1}. ${p.title}`));
    if (p.goal) card.append(el("p", {}, p.goal));
    if (p.cues && p.cues.length) {
      card.append(el("div", { class: "field" }, [
        el("div", { class: "k" }, "Teaching cues"),
        el("div", { class: "v" }, el("ul", { style: "margin:4px 0 0;padding-left:18px" }, p.cues.map((c) => el("li", {}, c)))),
      ]));
    }
    if (p.commonErrors && p.commonErrors.length) {
      card.append(el("div", { class: "field", style: "margin-top:10px" }, [
        el("div", { class: "k" }, "Common errors → corrective cue"),
        el("div", { class: "v" }, el("ul", { style: "margin:4px 0 0;padding-left:18px" },
          p.commonErrors.map((e) => el("li", {}, [el("strong", {}, e.error + ": "), e.cue])))),
      ]));
    }
    mainView.append(card);
  });
}

/* ================= ANATOMY & POSTURE (shared helpers) ================= */
function renderSectionsInto(host, sections) {
  sections.forEach((s) => {
    const block = el("div", { class: "section-block" });
    block.append(el("h3", {}, s.title));
    (s.body || []).forEach((para) => block.append(el("p", {}, para)));
    if (s.items && s.items.length) {
      block.append(el("ul", { style: "padding-left:18px" }, s.items.map((it) => el("li", {}, it))));
    }
    host.append(block);
  });
}

function renderAnatomy() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Foundations"),
        el("h2", {}, "Anatomy"),
        el("p", { class: "sub" }, "Terminology, planes & joints, muscle groups by action, and muscle origin/insertion/action." ),
      ]),
    ])
  );
  const sections = DATA.anatomy.sections || [];
  if (!sections.length && !(DATA.anatomy.muscleGroups || []).length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this section."));
    return;
  }
  renderSectionsInto(mainView, sections);

  const groups = DATA.anatomy.muscleGroups || [];
  if (groups.length) {
    const headBlock = el("div", { class: "section-block" });
    headBlock.append(el("h3", {}, "Muscle Origin / Insertion / Action — by Region"));
    headBlock.append(el("p", {}, `${groups.reduce((n, g) => n + g.muscles.length, 0)} muscles, grouped and ordered exactly the way Trail Guide to the Body presents them, chapter by chapter.`));
    const search = el("input", { class: "answer-input", placeholder: "Filter muscles…", style: "min-height:auto" });
    headBlock.append(search);
    mainView.append(headBlock);

    const groupBlocks = groups.map((g) => {
      const block = el("div", { class: "section-block", style: "margin-top:0" });
      block.append(el("h3", { style: "font-size:16px;font-family:var(--font-display);color:var(--accent);text-transform:none;letter-spacing:0;border-bottom:none;padding-bottom:0;margin-bottom:8px" }, `${g.region} · ${g.muscles.length}`));
      const wrap = el("div", { class: "table-wrap" });
      const table = el("table", {}, [
        el("thead", {}, el("tr", {}, [el("th", {}, "Muscle"), el("th", {}, "Origin"), el("th", {}, "Insertion"), el("th", {}, "Action")])),
      ]);
      const tbody = el("tbody");
      table.append(tbody);
      wrap.append(table);
      block.append(wrap);
      mainView.append(block);
      return { block, tbody, muscles: g.muscles };
    });

    function renderRows(filter) {
      const f = filter.toLowerCase();
      groupBlocks.forEach(({ block, tbody, muscles }) => {
        tbody.innerHTML = "";
        const matches = muscles.filter((m) => !f || m.muscle.toLowerCase().includes(f));
        matches.forEach((m) => {
          tbody.append(el("tr", {}, [el("td", {}, m.muscle), el("td", {}, m.origin || "—"), el("td", {}, m.insertion || "—"), el("td", {}, m.action || "—")]));
        });
        block.style.display = matches.length ? "" : "none";
      });
    }
    renderRows("");
    search.addEventListener("input", () => renderRows(search.value));
  }
}

/* ================= POSTURE ================= */
function renderPosture() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Foundations"),
        el("h2", {}, "Posture Assessment"),
        el("p", { class: "sub" }, "Plumb line, the four posture types, and the full palpation checklist used in the practical exam." ),
      ]),
    ])
  );
  const sections = DATA.posture.sections || [];
  if (!sections.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this section."));
    return;
  }
  renderSectionsInto(mainView, sections);
}

/* ================= PROGRAMMING ================= */
function renderProgramming() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Foundations"),
        el("h2", {}, "Programming"),
        el("p", { class: "sub" }, "Turn a posture finding into a Layer 1 → Layer 2 workout, with the reasoning to defend every exercise choice on exam day."),
      ]),
    ])
  );
  const prog = DATA.programming;
  if (!prog || !prog.postures || !prog.postures.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this section."));
    return;
  }

  const introBlock = el("div", { class: "section-block" });
  introBlock.append(el("h3", {}, "What Layer 1 & Layer 2 Mean"));
  const layerGrid = el("div", { class: "layer-grid" });
  (prog.layers || []).forEach((l) => {
    layerGrid.append(
      el("div", { class: "layer-card" }, [
        el("div", { class: "layer-card-title" }, l.title),
        el("div", { class: "layer-card-subtitle" }, l.subtitle),
        el("p", {}, l.body),
      ])
    );
  });
  introBlock.append(layerGrid);
  mainView.append(introBlock);

  if (prog.workflow && prog.workflow.length) {
    const flowBlock = el("div", { class: "section-block" });
    flowBlock.append(el("h3", {}, "Exam-Day Workflow"));
    flowBlock.append(el("ol", { class: "workflow-list" }, prog.workflow.map((step) => el("li", {}, step))));
    mainView.append(flowBlock);
  }

  if (prog.note) {
    const noteBlock = el("div", { class: "section-block" });
    noteBlock.append(el("p", { style: "color:var(--ink-faint);font-size:13px" }, prog.note));
    mainView.append(noteBlock);
  }

  const postureBlock = el("div", { class: "section-block" });
  postureBlock.append(el("h3", {}, "By Posture Type"));
  prog.postures.forEach((p) => {
    const card = el("div", { class: "card posture-program" });
    card.append(el("h3", {}, p.posture));
    card.append(el("div", { class: "pill-row" }, [el("span", { class: "pill success" }, `Work in: ${p.workIn}`)]));
    card.append(el("p", { class: "v" }, p.emphasis));

    const fg = el("div", { class: "field-grid" });
    fg.append(el("div", { class: "field" }, [el("div", { class: "k" }, "Strengthen"), el("div", { class: "v" }, (p.strengthen || []).join(", "))]));
    fg.append(el("div", { class: "field" }, [el("div", { class: "k" }, "Stretch"), el("div", { class: "v" }, (p.stretch || []).join(", "))]));
    card.append(fg);

    [["layer1", "Layer 1 — Connect"], ["layer2", "Layer 2 — Build"]].forEach(([key, label]) => {
      const rows = p[key] || [];
      if (!rows.length) return;
      card.append(el("div", { class: "layer-tag" }, label));
      const wrap = el("div", { class: "table-wrap" });
      const table = el("table", {}, [
        el("thead", {}, el("tr", {}, [el("th", {}, "Exercise"), el("th", {}, "Apparatus"), el("th", {}, "Why this exercise")])),
        el("tbody", {}, rows.map((r) => el("tr", {}, [el("td", {}, r.exercise), el("td", {}, r.apparatus), el("td", {}, r.why)]))),
      ]);
      wrap.append(table);
      card.append(wrap);
    });

    postureBlock.append(card);
  });
  mainView.append(postureBlock);
}

/* ================= APPARATUS ================= */
function exerciseDetailCard(ex) {
  const card = el("div", { class: "card exercise-detail open" });
  const pills = el("div", { class: "pill-row" });
  if (ex.level) pills.append(el("span", { class: `pill level-${ex.level.toLowerCase()}` }, ex.level));
  if (ex.category) pills.append(el("span", { class: "pill success" }, ex.category));
  if (ex.springs) pills.append(el("span", { class: "pill" }, `Springs: ${ex.springs}`));
  if (ex.page) pills.append(el("span", { class: "pill" }, `p.${ex.page}`));
  card.append(el("h3", {}, ex.name));
  card.append(pills);

  const grid = el("div", { class: "field-grid" });
  const fields = [
    ["Starting position", ex.startingPosition],
    ["Pelvis", ex.pelvis],
    ["Spine", ex.spine],
    ["Breathing", ex.breathing],
    ["Target muscles", ex.targetMuscles],
    ["Focus / essence", ex.focus],
  ];
  fields.forEach(([label, val]) => {
    if (!val) return;
    grid.append(el("div", { class: "field" }, [el("div", { class: "k" }, label), el("div", { class: "v" }, val)]));
  });
  card.append(grid);

  if (ex.positions && ex.positions.length) {
    card.append(el("div", { class: "field", style: "margin-top:14px;border-top:1px solid var(--line-soft);padding-top:10px" }, [
      el("div", { class: "k" }, "Positions / Variations"),
      el("ol", { class: "position-list" }, ex.positions.map((p) => el("li", {}, [
        el("span", { class: "position-label" }, p.label),
        p.detail ? el("span", { class: "position-detail" }, " — " + p.detail) : null,
      ]))),
    ]));
  }

  if (ex.cues && ex.cues.length) {
    card.append(el("div", { class: "field", style: "margin-top:14px;border-top:1px solid var(--line-soft);padding-top:10px" }, [
      el("div", { class: "k" }, "Cues"),
      el("ul", { style: "margin:4px 0 0;padding-left:18px" }, ex.cues.map((c) => el("li", { class: "v" }, c))),
    ]));
  }
  if (ex.faults && ex.faults.length) {
    card.append(el("div", { class: "field", style: "margin-top:10px" }, [
      el("div", { class: "k" }, "Common faults & corrections"),
      el("ul", { style: "margin:4px 0 0;padding-left:18px" }, ex.faults.map((c) => el("li", { class: "v" }, c))),
    ]));
  }
  if (ex.modifications && ex.modifications.length) {
    card.append(el("div", { class: "field", style: "margin-top:10px" }, [
      el("div", { class: "k" }, "Modifications"),
      el("ul", { style: "margin:4px 0 0;padding-left:18px" }, ex.modifications.map((c) => el("li", { class: "v" }, c))),
    ]));
  }
  if (ex.notes) {
    card.append(el("div", { class: "field", style: "margin-top:10px" }, [el("div", { class: "k" }, "Notes"), el("div", { class: "v" }, ex.notes)]));
  }
  return card;
}

function renderApparatus(key) {
  const meta = APPARATUS_META[key];
  const data = DATA.apparatus[key] || {};
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Apparatus"),
        el("h2", {}, meta.label),
      ]),
    ])
  );

  const groups = [
    ["Warm-Up", data.warmup],
    ["Essential", data.essential],
    ["Intermediate", data.intermediate],
    ["Advanced", data.advanced],
  ].filter(([, list]) => list && list.length);

  if (!groups.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this apparatus — check back shortly."));
    return;
  }

  const searchWrap = el("div", { class: "search-box" }, [
    el("input", { placeholder: `Search ${meta.label} exercises…`, id: "apparatusSearch" }),
  ]);
  mainView.append(searchWrap);

  const listHost = el("div");
  mainView.append(listHost);

  function makeRow(ex, flatList) {
    const row = el("div", { class: "exercise-row" }, [
      el("div", {}, [el("div", { class: "name" }, ex.name)]),
      el("span", { class: "meta" }, ex.springs ? `springs ${ex.springs}` : (ex.page ? `p.${ex.page}` : "")),
    ]);
    const flatIndex = flatList.length;
    flatList.push(ex);
    row.addEventListener("click", () => openExerciseModal(flatList, flatIndex));
    return row;
  }

  function draw(filter) {
    listHost.innerHTML = "";
    const flatList = [];
    groups.forEach(([levelLabel, list]) => {
      const filtered = list.filter((e) => !filter || e.name.toLowerCase().includes(filter.toLowerCase()));
      if (!filtered.length) return;
      const block = el("div", { class: "section-block" });
      block.append(el("h3", {}, `${levelLabel} · ${filtered.length}`));

      const hasCategories = filtered.some((e) => e.category);
      if (hasCategories) {
        const catOrder = [];
        const catMap = new Map();
        filtered.forEach((ex) => {
          const cat = ex.category || "Other";
          if (!catMap.has(cat)) { catMap.set(cat, []); catOrder.push(cat); }
          catMap.get(cat).push(ex);
        });
        catOrder.forEach((cat) => {
          block.append(el("div", { class: "apparatus-category-label" }, `${cat} · ${catMap.get(cat).length}`));
          const rows = el("div", { class: "exercise-list" });
          catMap.get(cat).forEach((ex) => rows.append(makeRow(ex, flatList)));
          block.append(rows);
        });
      } else {
        const rows = el("div", { class: "exercise-list" });
        filtered.forEach((ex) => rows.append(makeRow(ex, flatList)));
        block.append(rows);
      }
      listHost.append(block);
    });
  }
  draw("");
  document.getElementById("apparatusSearch").addEventListener("input", (e) => draw(e.target.value));
}

function openExerciseModal(list, index) {
  const overlay = el("div", {
    style: "position:fixed;inset:0;background:rgba(20,24,22,0.5);display:flex;align-items:flex-start;justify-content:center;padding:6vh 20px;overflow-y:auto;z-index:50",
  });
  let idx = index;
  let detail = null;

  function close() {
    document.removeEventListener("keydown", keyHandler);
    overlay.remove();
  }

  function go(delta) {
    const next = idx + delta;
    if (next < 0 || next >= list.length) return;
    idx = next;
    const fresh = buildCard();
    detail.replaceWith(fresh);
    detail = fresh;
    overlay.scrollTo({ top: 0 });
  }

  function keyHandler(e) {
    if (document.activeElement && ["TEXTAREA", "INPUT"].includes(document.activeElement.tagName)) return;
    if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    else if (e.key === "Escape") { close(); }
  }

  function buildCard() {
    const card = exerciseDetailCard(list[idx]);
    card.style.maxWidth = "640px";
    card.style.width = "100%";
    card.style.boxShadow = "var(--shadow-lift)";

    const prevBtn = el("button", { class: "btn secondary" }, "← Back");
    const nextBtn = el("button", { class: "btn secondary" }, "Next →");
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === list.length - 1;
    prevBtn.addEventListener("click", () => go(-1));
    nextBtn.addEventListener("click", () => go(1));
    card.append(
      el("div", { class: "modal-nav-row" }, [
        prevBtn,
        el("span", { class: "modal-nav-pos" }, list.length > 1 ? `${idx + 1} of ${list.length}` : ""),
        nextBtn,
      ])
    );

    const closeBtn = el("button", { class: "btn secondary", style: "margin-top:10px;width:100%" }, "Close");
    closeBtn.addEventListener("click", close);
    card.append(closeBtn);
    return card;
  }

  detail = buildCard();
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  overlay.append(detail);
  document.body.append(overlay);
  document.addEventListener("keydown", keyHandler);
}

/* ================= EXAM INFO ================= */
function renderExamInfo() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Know before you go"),
        el("h2", {}, "Exam Info & Scripting"),
      ]),
    ])
  );
  const info = DATA.examInfo;
  if (!info || !info.sections || !info.sections.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting this section."));
    return;
  }
  info.sections.forEach((s) => {
    const block = el("div", { class: "section-block" });
    block.append(el("h3", {}, s.title));
    (s.body || []).forEach((para) => block.append(el("p", {}, para)));
    if (s.table) {
      const wrap = el("div", { class: "table-wrap" });
      const table = el("table");
      const thead = el("thead", {}, el("tr", {}, s.table.headers.map((h) => el("th", {}, h))));
      const tbody = el("tbody", {}, s.table.rows.map((r) => el("tr", {}, r.map((c) => el("td", {}, c)))));
      table.append(thead, tbody);
      wrap.append(table);
      block.append(wrap);
    }
    if (s.items && s.items.length) {
      block.append(el("ul", { style: "padding-left:18px" }, s.items.map((it) => el("li", {}, it))));
    }
    mainView.append(block);
  });
}

/* ================= QUIZ ================= */
let quizSession = null; // {questions:[], index, results:[]}

function allTopics() {
  const set = new Set();
  DATA.quiz.forEach((q) => set.add(q.topic || "General"));
  return Array.from(set).sort();
}

function renderQuiz() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Active recall"),
        el("h2", {}, "Quiz"),
        el("p", { class: "sub" }, "Answer in your own words, reveal, then grade yourself honestly — your grading drives what “My Progress” shows you."),
      ]),
    ])
  );

  if (!DATA.quiz.length) {
    mainView.append(el("div", { class: "empty-state" }, "Quiz bank still loading."));
    return;
  }

  const setup = el("div", { class: "quiz-setup" });
  const topics = allTopics();
  let selectedTopics = new Set(topics);

  const topicWrap = el("div", {}, [
    el("div", { class: "nav-group-label", style: "padding:0;margin-bottom:8px" }, "Topics"),
    (() => {
      const chipRow = el("div", { class: "chip-select" });
      const allChip = el("button", { class: "chip selected" }, `All (${DATA.quiz.length})`);
      allChip.addEventListener("click", () => {
        selectedTopics = new Set(topics);
        chipRow.querySelectorAll(".chip").forEach((c) => c.classList.add("selected"));
        updateCount();
      });
      chipRow.append(allChip);
      topics.forEach((t) => {
        const n = DATA.quiz.filter((q) => (q.topic || "General") === t).length;
        const chip = el("button", { class: "chip selected" }, `${t} (${n})`);
        chip.addEventListener("click", () => {
          if (selectedTopics.has(t)) { selectedTopics.delete(t); chip.classList.remove("selected"); }
          else { selectedTopics.add(t); chip.classList.add("selected"); }
          allChip.classList.toggle("selected", selectedTopics.size === topics.length);
          updateCount();
        });
        chipRow.append(chip);
      });
      return chipRow;
    })(),
  ]);
  setup.append(topicWrap);

  const modeRow = el("div", {}, [
    el("div", { class: "nav-group-label", style: "padding:0;margin-bottom:8px" }, "Question mix"),
    (() => {
      const chipRow = el("div", { class: "chip-select" });
      let mode = "all";
      ["all", "due-for-review", "missed-before"].forEach((m, i) => {
        const label = { "all": "All questions", "due-for-review": "Not yet marked ‘got it’", "missed-before": "Previously shaky / missed" }[m];
        const chip = el("button", { class: "chip" + (i === 0 ? " selected" : "") }, label);
        chip.addEventListener("click", () => {
          mode = m;
          chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
          chip.classList.add("selected");
          updateCount();
        });
        chip.dataset.mode = m;
        chipRow.append(chip);
      });
      chipRow.getMode = () => mode;
      return chipRow;
    })(),
  ]);
  setup.append(modeRow);
  const modeChipRow = modeRow.querySelector(".chip-select");

  const countLabel = el("p", { class: "mono", style: "font-size:13px" }, "");
  setup.append(countLabel);

  function poolForSelection() {
    const mode = modeChipRow.getMode();
    return DATA.quiz.filter((q) => {
      if (!selectedTopics.has(q.topic || "General")) return false;
      const st = PROGRESS.perQuestion[q.id];
      if (mode === "due-for-review") return !st || st.lastGrade !== "got-it";
      if (mode === "missed-before") return st && (st.lastGrade === "shaky" || st.lastGrade === "missed");
      return true;
    });
  }
  function updateCount() {
    const n = poolForSelection().length;
    countLabel.textContent = `${n} question${n === 1 ? "" : "s"} match this selection`;
    startBtn.disabled = n === 0;
  }

  const startRow = el("div", { style: "display:flex;gap:10px;align-items:center" });
  const startBtn = el("button", { class: "btn" }, "Start quiz");
  const shuffleCb = el("input", { type: "checkbox", checked: "checked" });
  const shuffleLabel = el("label", { class: "mono", style: "font-size:12px;display:flex;gap:6px;align-items:center;color:var(--ink-faint)" }, [
    shuffleCb,
    "shuffle",
  ]);
  shuffleLabel._cb = shuffleCb;
  startRow.append(startBtn, shuffleLabel);
  setup.append(startRow);
  mainView.append(setup);

  updateCount();

  startBtn.addEventListener("click", () => {
    let pool = poolForSelection();
    if (shuffleLabel._cb.checked) pool = shuffle([...pool]);
    quizSession = { questions: pool, index: 0, results: [], startedAt: Date.now() };
    renderQuizQuestion();
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let flashcardKeyHandler = null;
function clearFlashcardKeyHandler() {
  if (flashcardKeyHandler) {
    document.removeEventListener("keydown", flashcardKeyHandler);
    flashcardKeyHandler = null;
  }
}

function renderQuizQuestion() {
  clearFlashcardKeyHandler();
  const { questions, index } = quizSession;
  if (index >= questions.length) { renderQuizResults(); return; }
  const q = questions[index];

  mainView.innerHTML = "";
  const progWrap = el("div", { class: "quiz-progress" }, [
    el("span", {}, `${index + 1} / ${questions.length}`),
    el("div", { class: "bar" }, el("span", { style: `width:${(index / questions.length) * 100}%` })),
  ]);
  mainView.append(progWrap);

  const scene = el("div", { class: "flashcard-scene" });
  const card = el("div", { class: "flashcard", tabindex: "0" });
  const frontFace = el("div", { class: "flashcard-face front" }, [
    el("span", { class: "qtag" }, q.topic || "General"),
    el("div", { class: "flashcard-text" }, q.q),
    el("div", { class: "flashcard-hint" }, "Click the card, or press space, to flip"),
  ]);
  const backFace = el("div", { class: "flashcard-face back" }, [
    el("span", { class: "qtag" }, q.topic || "General"),
    el("div", { class: "flashcard-text" }, q.a),
    q.flag ? el("div", { class: "flashcard-flag" }, q.flag) : null,
  ]);
  card.append(frontFace, backFace);
  scene.append(card);
  mainView.append(scene);

  const grades = el("div", { class: "self-grade-row flashcard-grades" }, [
    gradeBtn("got-it", "✓ Got it"),
    gradeBtn("shaky", "½ Shaky"),
    gradeBtn("missed", "✗ Missed it"),
  ]);
  mainView.append(grades);

  const actions = el("div", { class: "quiz-actions" }, [
    el("button", { class: "btn secondary" }, "End quiz early"),
    el("span", { class: "mono", style: "font-size:11px;color:var(--ink-faint)" }, "space = flip · 1 / 2 / 3 = grade"),
  ]);
  actions.firstChild.addEventListener("click", () => { clearFlashcardKeyHandler(); renderQuizResults(); });
  mainView.append(actions);

  let flipped = false;
  function flip() {
    if (flipped) return;
    flipped = true;
    card.classList.add("flipped");
    grades.classList.add("visible");
  }
  card.addEventListener("click", flip);
  card.focus({ preventScroll: true });

  flashcardKeyHandler = (e) => {
    if (document.activeElement && ["TEXTAREA", "INPUT"].includes(document.activeElement.tagName)) return;
    if (e.code === "Space" || e.key === "Enter") { e.preventDefault(); flip(); }
    if (flipped && ["1", "2", "3"].includes(e.key)) {
      const map = { "1": "got-it", "2": "shaky", "3": "missed" };
      const btn = grades.querySelector(`button[data-grade="${map[e.key]}"]`);
      if (btn) btn.click();
    }
  };
  document.addEventListener("keydown", flashcardKeyHandler);

  function gradeBtn(grade, label) {
    const b = el("button", { "data-grade": grade }, label);
    b.addEventListener("click", () => {
      if (!flipped) return;
      b.parentElement.querySelectorAll("button").forEach((x) => x.classList.remove("chosen"));
      b.classList.add("chosen");
      recordGrade(q, grade);
      quizSession.results.push({ id: q.id, topic: q.topic || "General", grade });
      clearFlashcardKeyHandler();
      setTimeout(() => {
        quizSession.index++;
        renderQuizQuestion();
      }, 260);
    });
    return b;
  }
}

function recordGrade(q, grade) {
  const st = PROGRESS.perQuestion[q.id] || { attempts: 0, gotIt: 0, shaky: 0, missed: 0 };
  st.attempts++;
  if (grade === "got-it") st.gotIt++;
  if (grade === "shaky") st.shaky++;
  if (grade === "missed") st.missed++;
  st.lastGrade = grade;
  st.lastSeen = Date.now();
  PROGRESS.perQuestion[q.id] = st;
  saveProgress(PROGRESS);
}

function renderQuizResults() {
  const { results, startedAt } = quizSession;
  const total = results.length;
  const gotIt = results.filter((r) => r.grade === "got-it").length;
  const shaky = results.filter((r) => r.grade === "shaky").length;
  const missed = results.filter((r) => r.grade === "missed").length;
  const pct = total ? Math.round((gotIt / total) * 100) : 0;

  PROGRESS.sessions.push({
    date: new Date().toISOString(),
    total, gotIt, shaky, missed,
    durationSec: Math.round((Date.now() - startedAt) / 1000),
  });
  if (PROGRESS.sessions.length > 200) PROGRESS.sessions = PROGRESS.sessions.slice(-200);
  saveProgress(PROGRESS);

  mainView.innerHTML = "";
  const summary = el("div", { class: "results-summary" });
  summary.append(el("div", { class: "score-ring-wrap" }, scoreRing(pct)));
  summary.append(el("h2", { style: "margin-top:4px" }, `${gotIt} / ${total} got it`));
  summary.append(el("p", {}, total ? `${pct}% on this pass. Shaky and missed items will resurface if you run "Not yet marked got it" again.` : "No questions in this session."));

  const byTopic = {};
  results.forEach((r) => {
    byTopic[r.topic] = byTopic[r.topic] || { got: 0, total: 0 };
    byTopic[r.topic].total++;
    if (r.grade === "got-it") byTopic[r.topic].got++;
  });
  const breakdown = el("div", { class: "topic-breakdown" });
  Object.entries(byTopic).forEach(([topic, v]) => {
    const p = Math.round((v.got / v.total) * 100);
    const color = p >= 80 ? "var(--success)" : p >= 50 ? "var(--warning)" : "var(--error)";
    breakdown.append(el("div", { class: "row" }, [
      el("span", { class: "name" }, topic),
      el("div", { class: "bar" }, el("span", { style: `width:${p}%;background:${color}` })),
      el("span", { class: "pct" }, `${p}%`),
    ]));
  });
  summary.append(breakdown);

  const actions = el("div", { style: "display:flex;gap:10px;margin-top:26px" }, [
    el("button", { class: "btn", onclick: () => navigate("quiz") }, "Run another quiz"),
    el("button", { class: "btn secondary", onclick: () => navigate("progress") }, "View full progress"),
  ]);
  summary.append(actions);

  mainView.append(summary);
  quizSession = null;
}

function scoreRing(pct) {
  const size = 160, stroke = 12, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  const color = pct >= 80 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--error)";
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", size); svg.setAttribute("height", size);
  const bg = document.createElementNS(svgNS, "circle");
  [["cx", size/2], ["cy", size/2], ["r", r], ["fill", "none"], ["stroke", "var(--line-soft)"], ["stroke-width", stroke]].forEach(([k,v]) => bg.setAttribute(k, v));
  const fg = document.createElementNS(svgNS, "circle");
  [["cx", size/2], ["cy", size/2], ["r", r], ["fill", "none"], ["stroke", color], ["stroke-width", stroke], ["stroke-linecap", "round"], ["stroke-dasharray", c], ["stroke-dashoffset", offset], ["transform", `rotate(-90 ${size/2} ${size/2})`]].forEach(([k,v]) => fg.setAttribute(k, v));
  svg.append(bg, fg);
  const label = el("div", { style: `position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:var(--font-display);font-size:32px;font-weight:600` }, `${pct}%`);
  const wrap = el("div", { style: "position:relative;width:100%;height:100%" });
  wrap.append(svg, label);
  return wrap;
}

/* ================= PROGRESS ================= */
function renderProgress() {
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Track your prep"),
        el("h2", {}, "My Progress"),
      ]),
    ])
  );

  const sessions = PROGRESS.sessions || [];
  const perQ = PROGRESS.perQuestion || {};
  const seenCount = Object.keys(perQ).length;
  const gotItCount = Object.values(perQ).filter((q) => q.lastGrade === "got-it").length;
  const shakyCount = Object.values(perQ).filter((q) => q.lastGrade === "shaky").length;
  const missedCount = Object.values(perQ).filter((q) => q.lastGrade === "missed").length;

  mainView.append(
    el("div", { class: "stat-row" }, [
      statTile("Questions reviewed", `${seenCount} / ${DATA.quiz.length}`),
      statTile("Got it", gotItCount),
      statTile("Shaky", shakyCount),
      statTile("Missed", missedCount),
    ])
  );

  if (!sessions.length) {
    mainView.append(el("div", { class: "empty-state" }, "No quiz sessions yet — run a quiz to start tracking your progress."));
    return;
  }

  const byTopic = {};
  DATA.quiz.forEach((q) => {
    const topic = q.topic || "General";
    byTopic[topic] = byTopic[topic] || { got: 0, total: 0, seen: 0 };
    byTopic[topic].total++;
    const st = perQ[q.id];
    if (st) {
      byTopic[topic].seen++;
      if (st.lastGrade === "got-it") byTopic[topic].got++;
    }
  });

  const weakBlock = el("div", { class: "section-block" });
  weakBlock.append(el("h3", {}, "By topic"));
  const breakdown = el("div", { class: "topic-breakdown" });
  Object.entries(byTopic).sort((a, b) => (a[1].got / a[1].total) - (b[1].got / b[1].total)).forEach(([topic, v]) => {
    const p = v.total ? Math.round((v.got / v.total) * 100) : 0;
    const color = p >= 80 ? "var(--success)" : p >= 50 ? "var(--warning)" : "var(--error)";
    breakdown.append(el("div", { class: "row" }, [
      el("span", { class: "name" }, topic),
      el("div", { class: "bar" }, el("span", { style: `width:${p}%;background:${color}` })),
      el("span", { class: "pct" }, `${p}%`),
    ]));
  });
  weakBlock.append(breakdown);
  mainView.append(weakBlock);

  const histBlock = el("div", { class: "section-block" });
  histBlock.append(el("h3", {}, "Session history"));
  const wrap = el("div", { class: "table-wrap" });
  const table = el("table", {}, [
    el("thead", {}, el("tr", {}, [el("th", {}, "Date"), el("th", {}, "Questions"), el("th", {}, "Got it"), el("th", {}, "Shaky"), el("th", {}, "Missed"), el("th", {}, "Score"), el("th", {}, "Duration")])),
  ]);
  const tbody = el("tbody");
  [...sessions].reverse().slice(0, 50).forEach((s) => {
    const pct = s.total ? Math.round((s.gotIt / s.total) * 100) : 0;
    tbody.append(el("tr", {}, [
      el("td", { class: "mono" }, new Date(s.date).toLocaleString()),
      el("td", { class: "mono" }, String(s.total)),
      el("td", { class: "mono" }, String(s.gotIt)),
      el("td", { class: "mono" }, String(s.shaky)),
      el("td", { class: "mono" }, String(s.missed)),
      el("td", { class: "mono" }, `${pct}%`),
      el("td", { class: "mono" }, `${Math.floor(s.durationSec / 60)}m ${s.durationSec % 60}s`),
    ]));
  });
  table.append(tbody);
  wrap.append(table);
  histBlock.append(wrap);
  mainView.append(histBlock);

  const dangerRow = el("div", { style: "margin-top:30px" });
  const resetBtn = el("button", { class: "btn secondary" }, "Reset all progress");
  resetBtn.addEventListener("click", () => {
    if (confirm("Clear all quiz history and grading? This can't be undone.")) {
      PROGRESS = { perQuestion: {}, sessions: [] };
      saveProgress(PROGRESS);
      renderProgress();
    }
  });
  dangerRow.append(resetBtn);
  mainView.append(dangerRow);
}

/* ================= ROUTER ================= */
function render(view) {
  if (view !== "quiz") clearFlashcardKeyHandler();
  switch (view) {
    case "dashboard": return renderDashboard();
    case "principles": return renderPrinciples();
    case "anatomy": return renderAnatomy();
    case "posture": return renderPosture();
    case "programming": return renderProgramming();
    case "examinfo": return renderExamInfo();
    case "quiz": return renderQuiz();
    case "progress": return renderProgress();
    case "mat": case "reformer": case "cadillac": case "chair":
    case "archbarrel": case "spinecorrector": case "ladderbarrel":
      return renderApparatus(view);
    default: return renderDashboard();
  }
}

refreshNavCounts();
const initialView = window.location.hash.replace("#", "") || "dashboard";
navigate(initialView);
