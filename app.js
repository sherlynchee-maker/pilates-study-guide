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
DATA.crossref = DATA.crossref || { columns: [], rows: [] };
DATA.progression = DATA.progression || { source: "", general: { title: "", warmup: [], layers: [] }, byPosture: {} };

const APPARATUS_META = {
  mat: { label: "Mat", key: "mat" },
  reformer: { label: "Reformer", key: "reformer" },
  cadillac: { label: "Cadillac", key: "cadillac" },
  chair: { label: "Stability Chair", key: "chair" },
  archbarrel: { label: "Arc Barrel", key: "archbarrel" },
  spinecorrector: { label: "Spine Corrector", key: "spinecorrector" },
  ladderbarrel: { label: "Ladder Barrel", key: "ladderbarrel" },
};

const LS_KEY = "stott_l1_progress_v2";

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
  const crossrefBtn = document.querySelector('.nav-btn[data-view="crossref"]');
  if (crossrefBtn) {
    let countSpan = crossrefBtn.querySelector(".count");
    if (!countSpan) { countSpan = el("span", { class: "count" }, ""); crossrefBtn.appendChild(countSpan); }
    countSpan.textContent = DATA.crossref.rows.length ? DATA.crossref.rows.length : "";
  }
}

/* ================= DASHBOARD ================= */
function renderDashboard() {
  const totalExercises = Object.keys(APPARATUS_META).reduce((s, k) => s + apparatusCount(k), 0);
  const totalQ = DATA.quiz.length;
  const perQ = PROGRESS.perQuestion;
  const seen = Object.keys(perQ).length;
  const mastered = Object.values(perQ).filter((q) => q.lastCorrect === true).length;

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

  const diagramBlock = el("div", { class: "section-block" });
  diagramBlock.append(el("h3", {}, "Muscle Map"));
  const diagramFig = el("figure", { class: "anatomy-diagram" });
  const diagramImg = el("img", {
    src: "images/anatomy/muscles-full-body.jpg",
    alt: "Labeled anterior and posterior diagram of the major muscles of the human body",
    loading: "lazy",
  });
  diagramImg.addEventListener("click", () => openImageLightbox(diagramImg.src, diagramImg.alt));
  diagramFig.append(
    diagramImg,
    el("figcaption", {}, [
      "Click to enlarge. Illustration: OpenStax, ",
      el("i", {}, "Anatomy & Physiology"),
      ", ",
      el("a", { href: "https://commons.wikimedia.org/wiki/File:1105_Anterior_and_Posterior_Views_of_Muscles.jpg", target: "_blank", rel: "noopener" }, "CC BY 4.0"),
      " via Wikimedia Commons.",
    ])
  );
  diagramBlock.append(diagramFig);
  mainView.append(diagramBlock);

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
    card.append(el("p", { class: "v" }, p.emphasis));

    const fg = el("div", { class: "field-grid" });
    fg.append(el("div", { class: "field" }, [el("div", { class: "k" }, "Work in"), el("div", { class: "v" }, p.workIn)]));
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
  if (ex.page) pills.append(el("span", { class: "pill" }, `p.${ex.page}`));
  card.append(el("h3", {}, ex.name));
  card.append(pills);

  const grid = el("div", { class: "field-grid" });
  const fields = [
    ["Springs / setup", ex.springs],
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

function normalizeExerciseName(s) {
  return (s || "")
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function renderApparatus(key, opts = {}) {
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
    const showSprings = key !== "chair" && key !== "cadillac" && ex.springs && ex.springs.length <= 24;
    const row = el("div", { class: "exercise-row" }, [
      el("div", {}, [el("div", { class: "name" }, ex.name)]),
      el("span", { class: "meta" }, showSprings ? `springs ${ex.springs}` : (ex.page ? `p.${ex.page}` : "")),
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
    return flatList;
  }
  const initialFlatList = draw("");
  document.getElementById("apparatusSearch").addEventListener("input", (e) => draw(e.target.value));

  if (opts.focusName) {
    const target = normalizeExerciseName(opts.focusName);
    const targetTokens = target.split(" ").filter(Boolean);
    let matchIndex = initialFlatList.findIndex((ex) => normalizeExerciseName(ex.name) === target);
    if (matchIndex === -1) {
      matchIndex = initialFlatList.findIndex((ex) => {
        const n = normalizeExerciseName(ex.name);
        return n && target && (n.includes(target) || target.includes(n));
      });
    }
    if (matchIndex === -1 && opts.focusPage) {
      // Same exercise family, different apparatus-specific naming: fall back to
      // matching on the page number the cross-reference cell pointed at, scored
      // against name-token overlap so overlapping page ranges don't win on page alone.
      let bestScore = 0;
      initialFlatList.forEach((ex, i) => {
        const pageNums = (ex.page || "").match(/\d+/g) || [];
        if (!pageNums.includes(opts.focusPage)) return;
        let score = (ex.page || "").trim() === opts.focusPage ? 2 : 1;
        const exTokens = normalizeExerciseName(ex.name).split(" ").filter(Boolean);
        const overlap = targetTokens.filter((t) => exTokens.some((n) => n === t || n.includes(t) || t.includes(n))).length;
        score += overlap * 2;
        if (score > bestScore) { bestScore = score; matchIndex = i; }
      });
    }
    if (matchIndex !== -1) {
      openExerciseModal(initialFlatList, matchIndex);
    } else {
      const input = document.getElementById("apparatusSearch");
      input.value = opts.focusName;
      draw(opts.focusName);
    }
  }
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

function openImageLightbox(src, alt) {
  const overlay = el("div", { class: "lightbox-overlay" });
  const img = el("img", { src, alt, class: "lightbox-img" });
  const closeBtn = el("button", { class: "lightbox-close", "aria-label": "Close" }, "×");

  function close() {
    document.removeEventListener("keydown", keyHandler);
    overlay.remove();
  }
  function keyHandler(e) {
    if (e.key === "Escape") close();
  }

  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
  closeBtn.addEventListener("click", close);
  overlay.append(img, closeBtn);
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
        el("p", { class: "sub" }, "Multiple choice, choose-all-that-apply, and sequencing questions pulled from real STOTT mock exams — plus open-recall questions from your manuals. Most questions grade themselves; recall ones ask you to self-check."),
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
      const noneChip = el("button", { class: "chip chip-ghost" }, "Deselect all");
      noneChip.addEventListener("click", () => {
        selectedTopics = new Set();
        chipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
        updateCount();
      });
      chipRow.append(allChip, noneChip);
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
        const label = { "all": "All questions", "due-for-review": "Not yet answered correctly", "missed-before": "Previously missed" }[m];
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
      if (mode === "due-for-review") return !st || st.lastCorrect !== true;
      if (mode === "missed-before") return st && st.lastCorrect === false;
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

let quizKeyHandler = null;
function clearQuizKeyHandler() {
  if (quizKeyHandler) {
    document.removeEventListener("keydown", quizKeyHandler);
    quizKeyHandler = null;
  }
}

function renderQuizQuestion() {
  clearQuizKeyHandler();
  const { questions, index } = quizSession;
  if (index >= questions.length) { renderQuizResults(); return; }
  const q = questions[index];

  mainView.innerHTML = "";
  const progWrap = el("div", { class: "quiz-progress" }, [
    el("span", {}, `${index + 1} / ${questions.length}`),
    el("div", { class: "bar" }, el("span", { style: `width:${(index / questions.length) * 100}%` })),
  ]);
  mainView.append(progWrap);

  const card = el("div", { class: "question-card" });
  card.append(el("span", { class: "qtag" }, q.topic || "General"));
  card.append(el("div", { class: "qtext" }, q.q));
  mainView.append(card);

  const nextBtn = el("button", { class: "btn", disabled: "disabled" }, "Next →");
  const endBtn = el("button", { class: "btn secondary" }, "End quiz early");
  const actions = el("div", { class: "quiz-actions" }, [endBtn, nextBtn]);
  endBtn.addEventListener("click", () => { clearQuizKeyHandler(); renderQuizResults(); });
  nextBtn.addEventListener("click", () => { clearQuizKeyHandler(); quizSession.index++; renderQuizQuestion(); });

  let answered = false;
  function finish(correct) {
    if (answered) return;
    answered = true;
    quizSession.results.push({ id: q.id, topic: q.topic || "General", correct });
    recordAnswer(q, correct);
    nextBtn.disabled = false;
  }

  const type = q.type || "recall";
  if (type === "mcq") renderMCQBody(card, q, finish);
  else if (type === "multi") renderMultiBody(card, q, finish);
  else if (type === "order") renderOrderBody(card, q, finish);
  else renderRecallBody(card, q, finish);

  mainView.append(actions);

  quizKeyHandler = (e) => {
    if (document.activeElement && ["TEXTAREA", "INPUT"].includes(document.activeElement.tagName)) return;
    if (answered && e.key === "Enter") { e.preventDefault(); nextBtn.click(); }
  };
  document.addEventListener("keydown", quizKeyHandler);
}

function qzExplain(card, correct, text, flag) {
  const box = el("div", { class: "qz-explain visible" }, [
    el("div", { class: "qz-verdict " + (correct ? "correct" : "incorrect") }, correct ? "Correct" : "Not quite"),
    el("div", { class: "qz-explain-text" }, text),
    flag ? el("div", { class: "qz-flag" }, flag) : null,
  ]);
  card.append(box);
}

function renderMCQBody(card, q, finish) {
  const optEls = q.options.map((opt) => el("button", { class: "qz-opt" }, el("span", { class: "qz-opt-text" }, opt)));
  const wrap = el("div", { class: "qz-options" }, optEls);
  card.append(wrap);

  let done = false;
  optEls.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (done) return;
      done = true;
      const correct = i === q.answer;
      optEls.forEach((b) => b.classList.add("disabled"));
      btn.classList.add(correct ? "correct" : "incorrect");
      if (!correct) optEls[q.answer].classList.add("correct");
      qzExplain(card, correct, q.a, q.flag);
      finish(correct);
    });
  });
}

function renderMultiBody(card, q, finish) {
  const chosen = new Set();
  let submitted = false;
  const optEls = q.options.map((opt, i) => {
    const b = el("button", { class: "qz-opt qz-opt-multi" }, [
      el("span", { class: "qz-opt-check" }),
      el("span", { class: "qz-opt-text" }, opt),
    ]);
    b.addEventListener("click", () => {
      if (submitted) return;
      if (chosen.has(i)) { chosen.delete(i); b.classList.remove("selected"); }
      else { chosen.add(i); b.classList.add("selected"); }
    });
    return b;
  });
  card.append(el("div", { class: "qz-options" }, optEls));
  card.append(el("div", { class: "qz-order-hint" }, "Select every option that applies, then check your answer."));

  const submitBtn = el("button", { class: "btn secondary", style: "margin-top:4px" }, "Check answer");
  card.append(submitBtn);

  submitBtn.addEventListener("click", () => {
    if (submitted) return;
    submitted = true;
    submitBtn.disabled = true;
    const correctSet = new Set(q.answer);
    const allCorrect = chosen.size === correctSet.size && [...chosen].every((i) => correctSet.has(i));
    optEls.forEach((b, i) => {
      b.classList.add("disabled");
      if (correctSet.has(i)) b.classList.add("correct");
      else if (chosen.has(i)) b.classList.add("incorrect");
    });
    qzExplain(card, allCorrect, q.a, q.flag);
    finish(allCorrect);
  });
}

function renderOrderBody(card, q, finish) {
  const correctOrder = q.options;
  const pool = shuffle([...correctOrder]);
  const built = [];
  card.append(el("div", { class: "qz-order-hint" }, "Tap items below in the order they belong."));
  const poolWrap = el("div", { class: "qz-order-pool" });
  const builtWrap = el("div", { class: "qz-order-built" });
  card.append(poolWrap, builtWrap);

  let revealed = false;
  function renderPool() {
    poolWrap.innerHTML = "";
    pool.forEach((item, i) => {
      if (built.includes(i)) return;
      const b = el("button", { class: "qz-order-chip" }, item);
      b.addEventListener("click", () => {
        if (revealed) return;
        built.push(i);
        renderPool();
        renderBuilt();
        if (built.length === correctOrder.length) reveal();
      });
      poolWrap.append(b);
    });
  }
  function renderBuilt() {
    builtWrap.innerHTML = "";
    built.forEach((i, pos) => {
      builtWrap.append(el("div", { class: "qz-order-slot" }, [el("span", { class: "qz-order-num" }, String(pos + 1)), el("span", {}, pool[i])]));
    });
  }
  function reveal() {
    revealed = true;
    let correctCount = 0;
    builtWrap.innerHTML = "";
    built.forEach((i, pos) => {
      const item = pool[i];
      const isRight = correctOrder[pos] === item;
      if (isRight) correctCount++;
      builtWrap.append(el("div", { class: "qz-order-slot " + (isRight ? "correct" : "incorrect") }, [
        el("span", { class: "qz-order-num" }, String(pos + 1)),
        el("span", {}, item),
        !isRight ? el("span", { class: "qz-order-correct-hint" }, `should be: ${correctOrder[pos]}`) : null,
      ]));
    });
    const allCorrect = correctCount === correctOrder.length;
    qzExplain(card, allCorrect, q.a, q.flag);
    finish(allCorrect);
  }
  renderPool();
  renderBuilt();
}

function renderRecallBody(card, q, finish) {
  const revealBtn = el("button", { class: "btn secondary" }, "Show answer");
  card.append(revealBtn);

  const revealBox = el("div", { class: "reveal-box", style: "display:none" }, [
    el("div", { class: "label" }, "Answer"),
    el("div", { class: "answer-text" }, q.a),
    q.flag ? el("div", { class: "qz-flag" }, q.flag) : null,
  ]);
  card.append(revealBox);

  const grades = el("div", { class: "self-grade-row", style: "display:none" }, [
    gradeBtn(true, "✓ I was right"),
    gradeBtn(false, "✗ I got it wrong"),
  ]);
  card.append(grades);

  revealBtn.addEventListener("click", () => {
    revealBtn.style.display = "none";
    revealBox.style.display = "block";
    grades.style.display = "flex";
  });

  function gradeBtn(correct, label) {
    const b = el("button", { "data-grade": correct ? "right" : "wrong" }, label);
    b.addEventListener("click", () => {
      grades.querySelectorAll("button").forEach((x) => x.classList.remove("chosen"));
      b.classList.add("chosen");
      finish(correct);
    });
    return b;
  }
}

function recordAnswer(q, correct) {
  const st = PROGRESS.perQuestion[q.id] || { attempts: 0, correctCount: 0, incorrectCount: 0 };
  st.attempts++;
  if (correct) st.correctCount++;
  else st.incorrectCount++;
  st.lastCorrect = correct;
  st.lastSeen = Date.now();
  PROGRESS.perQuestion[q.id] = st;
  saveProgress(PROGRESS);
}

function renderQuizResults() {
  const { results, startedAt } = quizSession;
  const total = results.length;
  const correct = results.filter((r) => r.correct).length;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  PROGRESS.sessions.push({
    date: new Date().toISOString(),
    total, correct,
    durationSec: Math.round((Date.now() - startedAt) / 1000),
  });
  if (PROGRESS.sessions.length > 200) PROGRESS.sessions = PROGRESS.sessions.slice(-200);
  saveProgress(PROGRESS);

  mainView.innerHTML = "";
  const summary = el("div", { class: "results-summary" });
  summary.append(el("div", { class: "score-ring-wrap" }, scoreRing(pct)));
  summary.append(el("h2", { style: "margin-top:4px" }, `${correct} / ${total} correct`));
  summary.append(el("p", {}, total ? `${pct}% on this pass. Missed items will resurface if you run "Not yet answered correctly" again.` : "No questions in this session."));

  const missed = results.filter((r) => !r.correct);
  if (missed.length) {
    const missedBlock = el("div", { class: "section-block", style: "text-align:left;width:100%;max-width:640px" });
    missedBlock.append(el("h3", {}, "Review these"));
    const list = el("ul", { style: "padding-left:18px;display:flex;flex-direction:column;gap:6px" });
    missed.forEach((r) => {
      const mq = DATA.quiz.find((x) => x.id === r.id);
      if (mq) list.append(el("li", { style: "font-size:13.5px" }, `${mq.topic ? mq.topic + " — " : ""}${mq.q}`));
    });
    missedBlock.append(list);
    summary.append(missedBlock);
  }

  const byTopic = {};
  results.forEach((r) => {
    byTopic[r.topic] = byTopic[r.topic] || { got: 0, total: 0 };
    byTopic[r.topic].total++;
    if (r.correct) byTopic[r.topic].got++;
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
  const correctCount = Object.values(perQ).filter((q) => q.lastCorrect === true).length;
  const incorrectCount = Object.values(perQ).filter((q) => q.lastCorrect === false).length;

  mainView.append(
    el("div", { class: "stat-row" }, [
      statTile("Questions reviewed", `${seenCount} / ${DATA.quiz.length}`),
      statTile("Correct (latest)", correctCount),
      statTile("Incorrect (latest)", incorrectCount),
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
      if (st.lastCorrect === true) byTopic[topic].got++;
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
    el("thead", {}, el("tr", {}, [el("th", {}, "Date"), el("th", {}, "Questions"), el("th", {}, "Correct"), el("th", {}, "Score"), el("th", {}, "Duration")])),
  ]);
  const tbody = el("tbody");
  [...sessions].reverse().slice(0, 50).forEach((s) => {
    const pct = s.total ? Math.round((s.correct / s.total) * 100) : 0;
    tbody.append(el("tr", {}, [
      el("td", { class: "mono" }, new Date(s.date).toLocaleString()),
      el("td", { class: "mono" }, String(s.total)),
      el("td", { class: "mono" }, String(s.correct)),
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

/* ================= CROSS-REFERENCE ================= */
const CROSSREF_SHORT_LABELS = {
  matEss: "Mat\nEss.",
  matInt: "Mat\nInt.",
  reformerEss: "Reformer\nEss.",
  reformerInt: "Reformer\nInt.",
  cadillacEss: "Cadillac\nEss.",
  cadillacInt: "Cadillac\nInt.",
  archbarrel: "Arc\nBarrel",
  spinecorrector: "Spine\nCorrector",
  ladderbarrel: "Ladder\nBarrel",
  chair: "Stability\nChair",
};

function twoLineText(text) {
  return text.split("\n").map((line, i) => (i === 0 ? [line] : [el("br"), line])).flat();
}

function renderCrossRef() {
  const meta = DATA.crossref;
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Compare"),
        el("h2", {}, "Exercise Cross-Reference"),
        el("p", { class: "sub" }, "Same exercise family across every apparatus it shows up on — spot the pattern, then click any reference to jump straight to that exercise."),
      ]),
    ])
  );

  if (!meta.rows.length) {
    mainView.append(el("div", { class: "empty-state" }, "Still building this table — check back shortly."));
    return;
  }

  const searchWrap = el("div", { class: "search-box" }, [
    el("input", { placeholder: "Search exercise family…", id: "crossrefSearch" }),
  ]);
  mainView.append(searchWrap);

  const table = el("table", { class: "crossref-table" });
  const thead = el(
    "thead",
    {},
    el(
      "tr",
      {},
      [el("th", { class: "crossref-name-col" }, "Exercise")].concat(
        meta.columns.map((c) => el("th", { title: c.label }, twoLineText(CROSSREF_SHORT_LABELS[c.key] || c.label)))
      )
    )
  );
  const tbody = el("tbody");
  table.append(thead, tbody);
  mainView.append(el("div", { class: "table-wrap crossref-wrap" }, table));

  function cellContent(row, col) {
    const val = row.cells[col.key];
    if (!val) return el("span", { class: "crossref-empty" }, "—");
    const btn = el("button", { class: "crossref-cell-btn", type: "button" }, twoLineText(val));
    const pageMatch = val.match(/\d+/);
    btn.addEventListener("click", () => navigate(col.apparatus, { focusName: row.name, focusPage: pageMatch ? pageMatch[0] : null }));
    return btn;
  }

  function draw(filter) {
    tbody.innerHTML = "";
    const f = (filter || "").toLowerCase();
    const rows = meta.rows.filter((r) => !f || r.name.toLowerCase().includes(f));
    if (!rows.length) {
      tbody.append(el("tr", {}, el("td", { colspan: meta.columns.length + 1, class: "empty-state" }, "No exercises match your search.")));
      return;
    }
    rows.forEach((row) => {
      tbody.append(
        el(
          "tr",
          {},
          [el("td", { class: "crossref-name-col" }, row.name)].concat(
            meta.columns.map((col) => el("td", {}, cellContent(row, col)))
          )
        )
      );
    });
  }
  draw("");
  document.getElementById("crossrefSearch").addEventListener("input", (e) => draw(e.target.value));
}

/* ================= PROGRESSION ================= */
function progressionItemLabel(item) {
  return item.variants ? `${item.name} ${item.variants}` : item.name;
}

function progressionChip(item, apparatusKey) {
  const chip = el("button", { class: "prog-chip", type: "button", title: item.note || "" }, [
    progressionItemLabel(item),
    item.note ? el("span", { class: "prog-chip-note" }, ` — ${item.note}`) : null,
  ]);
  chip.addEventListener("click", () => navigate(apparatusKey, { focusName: item.name }));
  return chip;
}

function renderProgression() {
  const data = DATA.progression;
  mainView.innerHTML = "";
  mainView.append(
    el("div", { class: "view-header" }, [
      el("div", {}, [
        el("span", { class: "eyebrow" }, "Learn"),
        el("h2", {}, "Progression"),
        el("p", { class: "sub" }, "How STOTT's own sample classes build up, layer by layer — which exercises get added within an apparatus, and how Mat and Reformer work build on each other. Pulled straight from the manual's Sample Workouts, not inferred."),
      ]),
    ])
  );

  if (!data.general.layers.length && !Object.keys(data.byPosture).length) {
    mainView.append(el("div", { class: "empty-state" }, "Still digesting these charts — check back shortly."));
    return;
  }

  const tabRow = el("div", { class: "chip-select", style: "margin-bottom:20px" });
  const generalTab = el("button", { class: "chip selected" }, "General class progression");
  const postureTab = el("button", { class: "chip" }, "By posture");
  tabRow.append(generalTab, postureTab);
  mainView.append(tabRow);

  const body = el("div");
  mainView.append(body);

  function levelPill(level) {
    return el("span", { class: `pill level-${(level || "").toLowerCase()}` }, level);
  }

  function layerCard(layerNum, level, cols) {
    const card = el("div", { class: "progression-layer" });
    card.append(el("div", { class: "progression-layer-head" }, [el("h3", {}, `Layer ${layerNum}`), level ? levelPill(level) : null]));
    const colsWrap = el("div", { class: "progression-cols" });
    cols.forEach(([label, items, apparatusKey]) => {
      const col = el("div", { class: "progression-col" });
      col.append(el("div", { class: "progression-col-label" }, label));
      if (!items.length) {
        col.append(el("div", { class: "progression-empty" }, "Nothing new this layer"));
      } else {
        const list = el("div", { class: "prog-chip-list" });
        items.forEach((item) => list.append(progressionChip(item, apparatusKey)));
        col.append(list);
      }
      colsWrap.append(col);
    });
    card.append(colsWrap);
    return card;
  }

  function drawGeneral() {
    body.innerHTML = "";
    if (data.general.warmup && data.general.warmup.length) {
      body.append(el("div", { class: "progression-warmup" }, [
        el("span", { class: "k" }, "Warm-up (established Layer 1, repeated every layer): "),
        el("span", { class: "v" }, data.general.warmup.join(", ")),
      ]));
    }
    data.general.layers.forEach((l) => {
      body.append(layerCard(l.layer, l.level, [
        ["Mat — new this layer", l.matworkNew || [], "mat"],
        ["Reformer — new this layer", l.reformerNew || [], "reformer"],
      ]));
    });
  }

  function drawPosture(postureName) {
    body.innerHTML = "";
    const prog = data.byPosture[postureName];
    if (!prog) { body.append(el("div", { class: "empty-state" }, "No chart for this posture yet.")); return; }
    prog.layers.forEach((l) => {
      body.append(layerCard(l.layer, null, [
        ["Mat — new this layer", (l.matworkNewWarmup || []).concat(l.matworkNewExercises || []), "mat"],
        ["Reformer — new this layer", (l.reformerNewWarmup || []).concat(l.reformerNewExercises || []), "reformer"],
      ]));
    });
  }

  const postureNames = Object.keys(data.byPosture);
  let postureChipRow = null;

  function showGeneral() {
    generalTab.classList.add("selected");
    postureTab.classList.remove("selected");
    if (postureChipRow) postureChipRow.remove();
    drawGeneral();
  }
  function showPosture() {
    postureTab.classList.add("selected");
    generalTab.classList.remove("selected");
    if (!postureChipRow) {
      postureChipRow = el("div", { class: "chip-select", style: "margin-bottom:16px" });
      postureNames.forEach((name, i) => {
        const chip = el("button", { class: "chip" + (i === 0 ? " selected" : "") }, name);
        chip.addEventListener("click", () => {
          postureChipRow.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
          chip.classList.add("selected");
          drawPosture(name);
        });
        postureChipRow.append(chip);
      });
    }
    body.before(postureChipRow);
    drawPosture(postureNames[0]);
  }
  generalTab.addEventListener("click", showGeneral);
  postureTab.addEventListener("click", showPosture);

  if (data.source) {
    mainView.append(el("p", { style: "margin-top:24px;font-size:12px;color:var(--ink-faint)" }, `Source: ${data.source}`));
  }

  showGeneral();
}

/* ================= ROUTER ================= */
function render(view, opts = {}) {
  if (view !== "quiz") clearQuizKeyHandler();
  switch (view) {
    case "dashboard": return renderDashboard();
    case "principles": return renderPrinciples();
    case "anatomy": return renderAnatomy();
    case "posture": return renderPosture();
    case "programming": return renderProgramming();
    case "examinfo": return renderExamInfo();
    case "quiz": return renderQuiz();
    case "progress": return renderProgress();
    case "crossref": return renderCrossRef();
    case "progression": return renderProgression();
    case "mat": case "reformer": case "cadillac": case "chair":
    case "archbarrel": case "spinecorrector": case "ladderbarrel":
      return renderApparatus(view, opts);
    default: return renderDashboard();
  }
}

refreshNavCounts();
const initialView = window.location.hash.replace("#", "") || "dashboard";
navigate(initialView);
