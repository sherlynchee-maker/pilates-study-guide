/* ===== Progression — how STOTT sample classes build up, layer by layer (Green Book Sample Workouts) ===== */
window.STOTT = window.STOTT || {};
window.STOTT.progression = {
  source: "STOTT PILATES Mat-Reformer Support Materials (\"Green Book\") — Sample Workouts",
  general: {
    title: "Group Progression — Matwork & Reformer",
    warmup: ["Breathing", "Imprint & Release", "Hip Release", "Spinal Rotation", "Cat Stretch", "Hip Rolls", "Scapula Isolation", "Arm Circles", "Head Nods", "Elevation & Depression of Scapula"],
    layers: [
      {
        layer: 1, level: "Essential",
        matworkNew: [{ name: "Ab Prep" }, { name: "Breast Stroke Preps", variants: "1 2" }, { name: "Shell Stretch" }, { name: "Hundred", note: "feet down" }, { name: "Half Roll Back" }, { name: "One Leg Circle" }, { name: "Spine Twist" }, { name: "Single Leg Stretch" }, { name: "Obliques" }, { name: "Spine Stretch Forward" }],
        reformerNew: [{ name: "Footwork", variants: "1 2 3 4 5" }, { name: "Midback Series", variants: "1 2 3 4" }, { name: "Mermaid" }, { name: "Hip Rolls Prep" }, { name: "Single Thigh Stretch", note: "standing" }],
      },
      {
        layer: 2, level: "Essential",
        matworkNew: [{ name: "Hundred", note: "tabletop legs" }, { name: "Roll Up" }, { name: "Rolling Like a Ball" }, { name: "Roll Over Prep" }, { name: "Heel Squeeze Prone" }, { name: "One Leg Kick Prep" }, { name: "Single Leg Extension" }, { name: "Swan Dive Prep" }, { name: "Shell Stretch" }, { name: "Leg Pull Front Prep" }],
        reformerNew: [{ name: "Second Position", variants: "1 2 3" }, { name: "Bend & Stretch", variants: "1 2 3" }, { name: "Lift & Lower", variants: "1 2" }, { name: "Adductor Stretch" }, { name: "Back Rowing Preps", variants: "1 2 3 4 5" }, { name: "Single Thigh Stretch", note: "on carriage if possible" }],
      },
      {
        layer: 3, level: "Essential",
        matworkNew: [{ name: "Breast Stroke Preps", variants: "1 2 3" }, { name: "Double Leg Stretch" }, { name: "Scissors" }, { name: "Shoulder Bridge Prep" }, { name: "Saw" }, { name: "Side Kick" }, { name: "Side Leg Lift Series" }, { name: "Obliques Roll Back" }],
        reformerNew: [{ name: "Hundred", note: "tabletop legs" }, { name: "Short Spine Prep" }, { name: "Side Arm Preps Sitting", variants: "1 2 3 4" }, { name: "Front Rowing Preps", variants: "1 2 3" }, { name: "Leg Circles", variants: "1 2 3" }, { name: "Hip Rolls" }],
      },
      {
        layer: 4, level: "Essential",
        matworkNew: [{ name: "Seal" }],
        reformerNew: [{ name: "Single Leg", variants: "1 2 3 4" }, { name: "Hundred" }, { name: "Back Rowing Preps", variants: "1 3 5 6 7 8" }, { name: "Side Twist Sitting" }, { name: "LB Arms Pulling Straps", variants: "1 2 3" }, { name: "Knee Stretches Prep", variants: "1 2" }, { name: "Running" }, { name: "Hip Lift" }],
      },
      {
        layer: 5, level: "Essential",
        matworkNew: [{ name: "Breast Stroke" }, { name: "Shell Stretch" }, { name: "Teaser Preps" }, { name: "Side Bend Prep" }, { name: "Push Up Prep" }],
        reformerNew: [{ name: "Short Spine" }, { name: "Side Splits", variants: "1 2" }],
      },
      {
        layer: 6, level: "Intermediate",
        matworkNew: [{ name: "Shoulder Bridge" }, { name: "Open Leg Rocker" }, { name: "Swan Dive" }, { name: "Swimming" }, { name: "Leg Pull Front" }, { name: "Side Bend" }, { name: "Push Up" }],
        reformerNew: [{ name: "Single Leg", variants: "1 2 3 4" }, { name: "Beats" }, { name: "Frog" }, { name: "Back Rowing", variants: "1 2" }, { name: "Front Rowing", variants: "1 2 3 4" }, { name: "LB Arms Pulling Straps", variants: "1 2 3", note: "intermediate" }, { name: "Feet Pulling Straps", variants: "1 2 3 4" }, { name: "Side Arm Preps Kneeling", variants: "1 2 3 4 5 6 7" }, { name: "Side Twist Kneeling" }, { name: "Mermaid", variants: "1 2" }, { name: "Knee Stretches", variants: "1 2 3 4" }],
      },
      {
        layer: 7, level: "Intermediate",
        matworkNew: [{ name: "Jack Knife" }, { name: "Teaser", variants: "1" }, { name: "Swan Dive", note: "rock & catch" }],
        reformerNew: [{ name: "Long Stretch Prep" }, { name: "Down Stretch" }, { name: "Up Stretch", variants: "1" }, { name: "Chest Expansion" }, { name: "Reverse Expansion", variants: "1 2 3 4 5" }, { name: "Front Splits" }, { name: "Side Splits", variants: "1 2 3 4 5 6 7" }, { name: "Star Prep" }],
      },
    ],
  },
  byPosture: {
    "Kyphosis-Lordosis": {
      layers: [
        {
          layer: 1,
          matworkNewWarmup: [{ name: "Breathing" }, { name: "Imprint & Release" }, { name: "Hip Release" }, { name: "Spinal Rotation", note: "supine, imprinted, emphasize pec stretch" }, { name: "Cat Stretch" }, { name: "Hip Rolls" }, { name: "Scapula Isolation" }, { name: "Arm Circles" }, { name: "Head Nods" }, { name: "Elevation & Depression of Scapula" }],
          matworkNewExercises: [{ name: "Ab Prep", note: "head supported, over arc barrel, imprinted" }, { name: "Breast Stroke Preps 1 2", note: "over arc barrel" }, { name: "Shell Stretch" }, { name: "Half Roll Back" }, { name: "One Leg Circle", note: "both knees bent" }, { name: "Spine Twist", note: "cross-legged, on a cushion or arc barrel" }, { name: "Obliques", note: "legs over arc barrel, imprinted, or tabletop legs" }, { name: "Spine Stretch Forward", note: "against wall" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Footwork 1 2 3 4 5" }, { name: "Midback Series 1 2 3 4" }, { name: "Mermaid" }, { name: "Hip Rolls Prep" }, { name: "Single Thigh Stretch", note: "standing" }],
        },
        {
          layer: 2,
          matworkNewWarmup: [],
          matworkNewExercises: [{ name: "Ab Prep", note: "hands behind head, over arc barrel, imprinted" }, { name: "Hundred", note: "head down, over arc barrel, imprinted" }, { name: "Rolling Like a Ball", note: "feet down" }, { name: "Single Leg Extension", note: "pad under ASIS, over arc barrel" }, { name: "Swimming Prep", note: "on all fours" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Second Position 1 3" }, { name: "Bend & Stretch 1 2" }, { name: "Lift & Lower 1 2" }, { name: "Adductor Stretch" }, { name: "Side Arm Preps Sitting 1 2 3 4", note: "on a cushion" }, { name: "Side Twist Sitting", note: "on a cushion" }, { name: "Stomach Massage Prep 2" }, { name: "Knee Stretches Preps 1 2" }],
        },
        {
          layer: 3,
          matworkNewWarmup: [{ name: "Hip Rolls", note: "feet on arc barrel" }],
          matworkNewExercises: [{ name: "Ab Prep", note: "arms reaching, no barrel" }, { name: "Rolling Like a Ball" }, { name: "Single Leg Stretch", note: "head down on a cushion" }, { name: "Obliques", note: "tabletop legs" }, { name: "Shoulder Bridge Prep" }, { name: "Swan Dive Prep", note: "pad under ASIS" }, { name: "Shell Stretch" }, { name: "Side Kick", note: "bottom leg bent" }, { name: "Side Leg Lift Series", note: "bottom leg bent" }, { name: "Swimming Prep", note: "on all fours, or kneeling" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Single Leg 1 4" }, { name: "Hundred", note: "tabletop legs, head down" }, { name: "Back Rowing Preps 1 2 3 4 5", note: "on a cushion" }, { name: "Front Rowing Preps 1 3", note: "on a cushion" }, { name: "LB Arms Pulling Straps 1 2", note: "light resistance, instructor holding feet" }, { name: "SB Tree" }, { name: "Elephant 1 2" }, { name: "Leg Circles 1" }, { name: "Hip Rolls" }],
        },
      ],
    },
    "Flat-Back": {
      layers: [
        {
          layer: 1,
          matworkNewWarmup: [{ name: "Breathing" }, { name: "Imprint & Release" }, { name: "Hip Release" }, { name: "Spinal Rotation", note: "supine" }, { name: "Cat Stretch" }, { name: "Hip Rolls" }, { name: "Scapula Isolation" }, { name: "Arm Circles" }, { name: "Head Nods" }, { name: "Elevation & Depression of Scapula" }],
          matworkNewExercises: [{ name: "Ab Prep" }, { name: "Breast Stroke Preps 1 2" }, { name: "Shell Stretch" }, { name: "One Leg Circle", note: "both legs bent" }, { name: "Spine Twist", note: "cross-legged, on a cushion or arc barrel" }, { name: "Single Leg Stretch" }, { name: "Obliques", note: "feet down" }, { name: "Spine Stretch Forward", note: "against wall" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Footwork 1 2 3 4 5" }, { name: "Second Position 1" }, { name: "Midback Series 1 2 3 4 5" }, { name: "Stomach Massage Prep" }, { name: "Mermaid" }, { name: "Knee Stretches Preps 1 2" }, { name: "Hip Rolls Prep" }],
        },
        {
          layer: 2,
          matworkNewWarmup: [],
          matworkNewExercises: [{ name: "Hundred", note: "feet down" }, { name: "One Leg Circle", note: "bottom leg straight" }, { name: "Rolling Like a Ball", note: "lumbar flexion only" }, { name: "Saw", note: "cross-legged, on a cushion or arc barrel" }, { name: "Single Leg Extension" }, { name: "Swan Dive Prep" }, { name: "Shell Stretch" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Single Leg 1" }, { name: "Bend & Stretch 1" }, { name: "Lift & Lower 1" }, { name: "Side Arm Preps Sitting 1 2 3 4", note: "on a cushion" }, { name: "Side Twist Sitting", note: "on cushion, light resistance" }, { name: "Stomach Massage 1" }, { name: "LB Arms Pulling Straps 1 2", note: "light resistance" }],
        },
        {
          layer: 3,
          matworkNewWarmup: [],
          matworkNewExercises: [{ name: "Roll Up", note: "half" }, { name: "Rolling Like a Ball" }, { name: "Obliques", note: "tabletop legs" }, { name: "Side Leg Lift Series" }, { name: "Swimming Prep" }, { name: "Side Bend Prep" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Second Position 1 3" }, { name: "Hundred", note: "tabletop legs" }, { name: "Short Spine Prep" }, { name: "Back Rowing Preps 1 2 3 4 5", note: "on a cushion" }, { name: "Side Twist Sitting", note: "on cushion, increase resistance" }, { name: "Front Rowing Preps 1 3", note: "on a cushion" }, { name: "LB Arms Pulling Straps 1 2 3", note: "increase resistance" }, { name: "SB Round Back" }, { name: "SB Twist" }, { name: "Elephant 1 2" }, { name: "Hip Rolls" }],
        },
      ],
    },
    "Sway-Back": {
      layers: [
        {
          layer: 1,
          matworkNewWarmup: [{ name: "Breathing" }, { name: "Imprint & Release" }, { name: "Hip Release" }, { name: "Spinal Rotation", note: "supine" }, { name: "Cat Stretch" }, { name: "Hip Rolls" }, { name: "Scapula Isolation" }, { name: "Arm Circles" }, { name: "Head Nods" }, { name: "Elevation & Depression of Scapula" }],
          matworkNewExercises: [{ name: "Ab Prep", note: "hands behind head" }, { name: "Breast Stroke Preps 1 2" }, { name: "Shell Stretch" }, { name: "Half Roll Back" }, { name: "One Leg Circle", note: "both knees bent" }, { name: "Single Leg Stretch" }, { name: "Obliques", note: "tabletop legs, less than 90°" }, { name: "Spine Stretch Forward", note: "cross-legged, on a cushion or arc barrel" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Footwork 1 2 3 4 5" }, { name: "Bend & Stretch 1 2" }, { name: "Midback Series 1 2 3 4 5" }, { name: "Side Arm Preps Sitting 1 2 3 4", note: "on a cushion" }, { name: "Side Twist Sitting", note: "on cushion" }, { name: "Mermaid" }],
        },
        {
          layer: 2,
          matworkNewWarmup: [],
          matworkNewExercises: [{ name: "Ab Prep", note: "arms reaching" }, { name: "Hundred", note: "tabletop legs, less than 90°" }, { name: "One Leg Circle", note: "bottom leg straight" }, { name: "Rolling Like a Ball", note: "feet down" }, { name: "Single Leg Extension" }, { name: "Swan Dive Prep" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Second Position 1 2 3" }, { name: "Lift & Lower 1 2" }, { name: "Back Rowing Preps 1 2 3 4 5 6 7 8", note: "on a cushion" }, { name: "Front Rowing Preps 1 2 3", note: "on a cushion" }, { name: "Leg Circles 1 2" }, { name: "Knee Stretches Prep" }, { name: "Hip Rolls Prep" }],
        },
        {
          layer: 3,
          matworkNewWarmup: [],
          matworkNewExercises: [{ name: "Hundred", note: "feet down, neutral pelvis" }, { name: "Roll Up", note: "half" }, { name: "Rolling Like a Ball" }, { name: "Obliques", note: "feet down, neutral pelvis" }, { name: "Double Leg Stretch" }, { name: "Breast Stroke" }, { name: "Shell Stretch" }, { name: "Side Kick" }, { name: "Side Leg Lift Series" }, { name: "Swan Dive Prep", note: "with legs" }],
          reformerNewWarmup: [],
          reformerNewExercises: [{ name: "Single Leg 1 2" }, { name: "Hundred", note: "tabletop legs" }, { name: "Short Spine Prep" }, { name: "LB Arms Pulling Straps 1 2 3" }, { name: "SB Round Back" }, { name: "SB Straight Back" }, { name: "SB Twist" }, { name: "SB Tree" }, { name: "Elephant 2" }, { name: "Knee Stretches 2" }, { name: "Hip Rolls" }],
        },
      ],
    },
  },
  buildupPaths: [
    {
      id: "ab-curl-cadillac",
      title: "Building up to Abdominal Curls (Cadillac)",
      principle: "Strengthen the abs and hip flexors progressively — from a stable, supported supine position up to a fully suspended curl with no rigid bar to brace against.",
      source: "The user's own handwritten study notes — Cadillac Essentials manual, \"the exercises...\" divider page: \"Preparation Sequence for Ab Curl.\"",
      steps: [
        { name: "Tabletop position hold", apparatus: null, why: "Foundational pelvic-stability position, not a separate named exercise in the manual — the leg position the next few exercises are built from.", flag: "The note says \"Table Top\" as the easiest step. There's no exercise by that exact name in the Mat manual, so this is shown as a general concept rather than a specific exercise — let me know if a named exercise was meant instead (e.g. Ab Prep)." },
        { name: "The Hundred", apparatus: "mat", why: "First loaded abdominal-endurance work in this same tabletop/imprinted position." },
        { name: "Double Leg Stretch", apparatus: "mat", why: "Adds simultaneous arm/leg extension while holding the same abdominal connection." },
        { name: "Slow Double Leg Stretch", apparatus: "mat", why: "Slows the same pattern down and removes momentum, forcing the abdominals to control the movement rather than assist it." },
        { name: "Front Rowing Preps", apparatus: "reformer", why: "Moves the same abdominal/pelvic stability demand onto an unstable, moving carriage." },
        { name: "Stomach Massage", apparatus: "reformer", why: "A seated, loaded leg-press pattern that directly trains hip-flexor strength against resistance." },
      ],
      target: { name: "Abdominal Curls", apparatus: "cadillac", why: "Combines everything above — abdominal curl strength and hip-flexor control — while hanging in the fuzzy straps with no bar to brace against, the hardest version of the pattern." },
    },
  ],
};
