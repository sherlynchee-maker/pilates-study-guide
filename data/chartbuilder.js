window.STOTT = window.STOTT || {};

/* Apparatus registry for chart-order tooling — kept separate from app.js's
   APPARATUS_META since this file loads (and runs, via quiz.js) before app.js. */
window.STOTT.CHART_APPARATUS = [
  { key: "mat", label: "Mat" },
  { key: "reformer", label: "Reformer" },
  { key: "cadillac", label: "Cadillac" },
  { key: "chair", label: "Stability Chair" },
  { key: "archbarrel", label: "Arc Barrel" },
  { key: "spinecorrector", label: "Spine Corrector" },
  { key: "ladderbarrel", label: "Ladder Barrel" },
];

/* Mat, Reformer, and Cadillac print their Essential and Intermediate content
   as genuinely separate physical charts in STOTT's "Workout Charts" booklet
   (confirmed page-by-page). Chair, Arc Barrel, Spine Corrector, and Ladder
   Barrel instead print a single "Complete" chart mixing every level together
   with icon markers. buildChart() uses this list to decide whether a level
   filter applies. */
window.STOTT.SPLIT_LEVEL_APPARATUS = ["mat", "reformer", "cadillac"];

/* Mat and Reformer's official Intermediate chart folds Essential items back
   into one continuous list (verified against the STOTT "Workout Charts"
   booklet — e.g. Intermediate Matwork runs Ab Prep, Breast Stroke Preps,
   Shell Stretch... straight through to Slow Double Leg Stretch and beyond,
   with no separate Essential section). Cadillac's Intermediate & Advanced
   chart instead prints ONLY new intermediate/advanced content per category —
   it never repeats Essential rows like "Roll-Down" under Roll-Down Bar. */
window.STOTT.INCLUSIVE_INTERMEDIATE_APPARATUS = ["mat", "reformer"];

/* Rebuilds an apparatus's true workout-chart order: optionally restricts to
   one level (opts.level: "essential" | "intermediate" | "all", default
   "all"), then sorts what's left into one page-ordered sequence and groups
   it by category where the chart prints one (Chair, Cadillac, the Barrels),
   or by level where it doesn't (Mat/Reformer print flat lists with no
   category headers). Powers both the Chart Trainer view and the
   auto-generated chart-order quiz questions. */
window.STOTT.buildChart = function (key, opts) {
  const level = (opts && opts.level) || "all";
  const data = (window.STOTT.apparatus || {})[key] || {};
  const isSplit = (window.STOTT.SPLIT_LEVEL_APPARATUS || []).indexOf(key) !== -1;
  const inclusiveIntermediate = (window.STOTT.INCLUSIVE_INTERMEDIATE_APPARATUS || []).indexOf(key) !== -1;

  let all;
  if (level === "essential") all = [].concat(data.warmup || [], data.essential || []);
  else if (level === "intermediate") {
    all = inclusiveIntermediate
      ? [].concat(data.essential || [], data.intermediate || [], data.advanced || [])
      : [].concat(data.intermediate || [], data.advanced || []);
  } else {
    all = [].concat(data.warmup || [], data.essential || [], data.intermediate || [], data.advanced || []);
  }

  const sorted = [...all].sort((a, b) => (parseInt(a.page, 10) || Infinity) - (parseInt(b.page, 10) || Infinity));

  // Mat/Reformer's merged Intermediate chart interleaves Essential and
  // Intermediate items by page with no sub-headers in the real chart, so it
  // renders as one flat, uninterrupted group rather than being fragmented by
  // category/level (which would scramble the true page order).
  const flatGroup = isSplit && level === "intermediate" && inclusiveIntermediate;

  const order = [];
  const groupLabels = [];
  const byLabel = new Map();
  sorted.forEach((ex) => {
    const label = flatGroup ? "Exercises" : (ex.category || ex.level || "Exercises");
    if (!byLabel.has(label)) { byLabel.set(label, []); groupLabels.push(label); }
    byLabel.get(label).push({ name: ex.name, level: ex.level, page: ex.page });
    order.push(ex.name);
  });

  return {
    key,
    level,
    order,
    groups: groupLabels.map((label) => ({ label, items: byLabel.get(label) })),
  };
};

/* Splits a list into ~size-sized chunks for reorder/type-the-list drills and
   quiz questions. Folds a short (<3 item) trailing remainder into the
   previous chunk instead of leaving a near-trivial lonely chunk. */
window.STOTT.chunkItems = function (items, size) {
  if (items.length <= size + 2) return [items];
  const chunks = [];
  for (let i = 0; i < items.length; i += size) chunks.push(items.slice(i, i + size));
  if (chunks.length > 1 && chunks[chunks.length - 1].length < 3) {
    const tail = chunks.pop();
    chunks[chunks.length - 1] = chunks[chunks.length - 1].concat(tail);
  }
  return chunks;
};
