/* Real mock-exam questions (multiple choice, choose-all-that-apply, and sequence/ordering)
   sourced directly from the STOTT Level 1 Exam Prep folder'''s mock tests and the 2020
   written exam recollection, cross-verified against the manuals and against the app'''s
   own already-verified apparatus data. See data/quiz.js for the open-recall flashcard-
   style question bank this supplements. */
window.STOTT = window.STOTT || {};
window.STOTT.quizExam = [
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statement about rib cage breathing.",
    "options": [
      "Lumbo-pelvic stability is achieved through rib cage breathing alone.",
      "On inhalation, the rib cage moves up and opens.",
      "The reason for doing breathing flexed forward is to feel the movement at the front of the ribs during rib cage breathing.",
      "Lateral rib cage breathing while supine is an exercise intended only to feel movement at the back of the ribs.",
      "During rib cage breathing, the rib cage moves in two dimensions."
    ],
    "answer": 1,
    "a": "On inhalation the rib cage naturally opens and lifts (STOTT's manual describes the ribs moving up and out on the in-breath); flexed postures are used to target the back ribs, not the front, and 3D breathing moves in three dimensions, not two.",
    "flag": "",
    "id": "mq1"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the incorrect statement about neutral and imprint pelvic placement.",
    "options": [
      "Neutral means that the pubic symphysis and ASIS are on the same plane, parallel to the floor.",
      "Imprint provides the best absorption of impact placed on the spine.",
      "In the supine position, imprint means the pubic symphysis is slightly higher than the ASIS.",
      "Imprint is created by using the internal and external obliques, not the gluteus muscles to create the position.",
      "Imprint refers to a state in which the lower back is pressed into the floor."
    ],
    "answer": 1,
    "a": "The STOTT Basic Principles manual states neutral, not imprint, is 'the most stable and optimal shock-absorbing position' — imprint is used to add lumbar support when neutral cannot be maintained, not because it best absorbs impact.",
    "flag": "",
    "id": "mq2"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "In the supine position, choose the incorrect statement about neutral placement.",
    "options": [
      "The gaze looks toward the ceiling and forms a cervical lordotic curve.",
      "The ears and shoulders are parallel to the floor.",
      "The entire rib cage touches the floor to maintain stability of the body.",
      "The pubic symphysis and ASIS are maintained parallel to the floor.",
      "The lumbar spine forms a natural lordotic curve."
    ],
    "answer": 2,
    "a": "STOTT does not require the entire rib cage to be pressed flat to the mat — a parallel question in the same exam explicitly lists 'the entire rib cage must be weighted down so it touches the floor' as an incorrect statement; the natural curve of the rib cage and spine is preserved instead.",
    "flag": "",
    "id": "mq3"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statement about neutral placement in the prone position.",
    "options": [
      "Only the pubic symphysis touches the floor, and the ASIS is slightly lifted off the floor.",
      "The forehead touches the floor, and the gaze looks toward the tip of the nose.",
      "The scapulae are in downward rotation and depression.",
      "The scapulae lie flat against the rib cage.",
      "Press the abdomen into the floor to increase abdominal stability."
    ],
    "answer": 3,
    "a": "The Basic Principles manual states the scapulae should lie flat against the rib cage regardless of body position; it also specifically warns that resting the forehead (rather than the nose) on the mat creates too much cervical flexion, and it never instructs pressing the abdomen into the floor.",
    "flag": "Option A's ASIS/pubic-symphysis relationship is not explicitly described in the source for the prone position specifically; reasoned by analogy from the supine neutral definition — treat with some caution.",
    "id": "mq4"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statement about the rib cage.",
    "options": [
      "Because arm movement affects the rib cage, the arms should flex only to the point where they remain visible within the line of sight.",
      "The rib cage opens and moves up on inhalation, and closes and moves down on exhalation.",
      "When lying in the supine position, the entire rib cage must be weighted down so it touches the floor.",
      "In the supine position, the rib cage arches back on inhalation.",
      "When the rib cage does not close well, exhale for a long time to close it firmly."
    ],
    "answer": 1,
    "a": "This is the standard STOTT description of 3D rib cage breathing mechanics: the ribs open and lift on the inhale, and close and lower on the exhale.",
    "flag": "",
    "id": "mq5"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the incorrect statement about the scapula.",
    "options": [
      "The scapula is located between T2 and T7.",
      "The scapula has six movements: protraction, retraction, elevation, depression, upward rotation, and downward rotation.",
      "The scapula lies flat against the rib cage.",
      "The medial border of the scapula has a V shape.",
      "The scapula has limited bone-to-bone attachment and is stabilized by muscles."
    ],
    "answer": 3,
    "a": "The medial (vertebral) border of the scapula is a long, essentially straight edge running parallel to the spine, not V-shaped (the 'V' imagery in STOTT cueing refers to the two inferior angles drawing toward each other, not the shape of one border).",
    "flag": "",
    "id": "mq6"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the incorrect statement about cranio-vertebral flexion.",
    "options": [
      "It has the same meaning as head nods.",
      "Movement occurs from C1 to C3.",
      "The deep neck flexors are used.",
      "The chin is drawn in and the gaze is directed toward the tip of the nose.",
      "This movement helps avoid excessive tension in the neck and shoulders before performing the exercise."
    ],
    "answer": 1,
    "a": "The Basic Principles manual specifically states cranio-vertebral flexion is 'flexing the cranium on the first two vertebrae of the cervical spine' — i.e., movement of the head on C1-2, not C1 to C3.",
    "flag": "",
    "id": "mq7"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "When explaining the basic principle of scapula movement & stabilization, choose the movement that is not taught.",
    "options": [
      "Scapula isolation / protraction & retraction",
      "Arm raises",
      "Scapula isolation / elevation & depression",
      "Arm scissors",
      "Arm circles"
    ],
    "answer": 1,
    "a": "The manual's four Scapular Movement & Stabilization exercises are Scapula Isolations (Protraction & Retraction), Scapula Isolations (Elevation & Depression), Arm Scissors, and Arm Circle — 'Arm raises' is not one of them.",
    "flag": "",
    "id": "mq8"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Which of the following is not a muscle that flexes the spine?",
    "options": [
      "Rectus abdominis",
      "Iliacus",
      "Pelvic floor",
      "External oblique",
      "Internal oblique"
    ],
    "answer": 2,
    "a": "The pelvic floor is a postural/breathing stabilizer, not a spinal flexor; rectus abdominis and the obliques directly flex or assist flexion of the trunk.",
    "flag": "Iliacus is a hip flexor rather than a true spinal flexor and could also be argued as the 'odd one out' here — pelvic floor was chosen as the clearer non-flexor, but this option set has some ambiguity.",
    "id": "mq9"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the incorrect statement about the neutral pelvis.",
    "options": [
      "When lying down, the ear opening, shoulder, and pelvis should maintain a straight line when connected as points.",
      "When sitting, the ASIS and PSIS are perpendicular to the floor.",
      "It is a position performed in a closed kinetic chain.",
      "The lower spine gently contacts the floor, and the position does not create tension in the neck and shoulders.",
      "If the ear opening, shoulder, and pelvis are not horizontal to the floor, a pad may be placed under the head to correct the alignment."
    ],
    "answer": 1,
    "a": "Following the same logic as the supine definition (ASIS and pubic symphysis level/parallel to the floor equals neutral), a neutral pelvis in sitting is described by the ASIS and PSIS being level with each other, not perpendicular to the floor; the manual also confirms neutral pelvic work with both feet down is a closed-kinetic-chain position.",
    "flag": "",
    "id": "mq10"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statement about head and cervical placement.",
    "options": [
      "The gaze looks toward the end point, and the head moves naturally following the gaze.",
      "When the upper body lifts while lying down, this is a preparatory position to reduce tension in the neck and shoulders.",
      "There are six movements, such as elevation/depression, upward/downward rotation, and protraction/retraction.",
      "Because only C1 to C3 are used, it is a very small movement.",
      "It is also called head nods."
    ],
    "answer": 0,
    "a": "The manual repeatedly notes that 'the eyeline will affect the cervical placement' and that using the eyes to initiate a movement helps activate proper alignment; option C actually describes scapular movements (not head/neck), and option D misstates the cranio-vertebral range as C1-C3 instead of the correct C1-C2.",
    "flag": "",
    "id": "mq11"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statement about scapula movement & stabilization.",
    "options": [
      "There are seven movements, such as elevation/depression, upward/downward rotation, protraction/retraction, and rotation.",
      "Because scapular mobility is greater than stability, stability must be provided by the muscles.",
      "In neutral scapular placement, the rib cage forms a concave curve with the floor.",
      "Slight scapular winging or tipping may be present.",
      "The deltoid is used to stabilize the scapula."
    ],
    "answer": 1,
    "a": "Because the scapula lacks direct bony attachment to the rib cage and spine, it has great mobility and must be actively stabilized by muscles (serratus anterior, trapezius, rhomboids, levator scapulae, pectoralis minor) — the deltoid is not among the muscles the manual lists as scapular stabilizers, and only six scapular movements are recognized, not seven.",
    "flag": "",
    "id": "mq12"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the correct statements about the basic principles.",
    "options": [
      "A closed kinetic chain is a position that strengthens the transversus abdominis.",
      "A position in which one leg is lifted can also be called an open kinetic chain.",
      "Generally, inhale when the spine moves into flexion.",
      "During head nods, the gaze affects cervical movement.",
      "Beginners who find movement difficult in neutral may first begin in imprint position."
    ],
    "answer": 1,
    "a": "The manual defines the kinetic chain explicitly: 'Both feet on mat = Closed Kinetic Chain', 'One foot / both feet off mat = Open Kinetic Chain' — so lifting one leg makes the position an open kinetic chain.",
    "flag": "Options D and E also appear accurate per the source material, so this question may have originally allowed multiple correct answers; B was selected as the most directly/verbatim confirmed statement.",
    "id": "mq13"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the statement that does not match the STOTT Pilates basic principles.",
    "options": [
      "STOTT Pilates trains the core well, including the limbs close to the torso, when performing exercise movements.",
      "STOTT Pilates allows and uses the natural S-curve shape of the spine.",
      "STOTT Pilates emphasizes a straight spine without curves, with the chin drawn toward the body.",
      "STOTT Pilates uses the body more safely and efficiently through 3D breathing.",
      "In STOTT Pilates, it is enough to simply inhale through the nose and exhale through the mouth."
    ],
    "answer": 2,
    "a": "STOTT Pilates explicitly preserves the spine's natural curves (its manual discusses the 'S-Curve' absorbing shock) rather than flattening the spine — a 'straight spine without curves' directly contradicts this core principle.",
    "flag": "",
    "id": "mq14"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "When explaining breathing, choose the correct statement.",
    "options": [
      "The most important reason for doing 3D breathing is to make the body relaxed.",
      "The reason for inhaling through the nose is to filter dust in the air and allow the breath to reach the deepest part of the lungs.",
      "The ratio between inhalation and exhalation does not matter.",
      "The reason for crossing the hands around the body while sitting and practicing breathing is to recognize that the abdomen naturally moves together with both sides of the ribs during breathing.",
      "When performing correct STOTT Pilates breathing, shoulder tension is a natural phenomenon because breathing must occur in 3D."
    ],
    "answer": 1,
    "a": "Nasal breathing filters, warms, and humidifies incoming air and encourages a deeper diaphragmatic breath than mouth breathing — matching the reference study guide's explanation of why nasal inhalation is emphasized.",
    "flag": "",
    "id": "mq15"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "This is about the pelvic floor. Choose the incorrect statement.",
    "options": [
      "It is a muscle used during breathing.",
      "It is a layer of pelvic floor muscles located between the ischium, coccyx, and pubic symphysis.",
      "It moves separately from the transversus abdominis and moves sequentially.",
      "It lowers on inhalation and lifts on exhalation.",
      "It looks like thin layers of muscles stacked on top of one another, like tissues."
    ],
    "answer": 2,
    "a": "The manual specifically describes 'simultaneous co-contraction of the pelvic floor muscles along with the transversus abdominis' — they work together at the same time, not separately or sequentially.",
    "flag": "",
    "id": "mq16"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "This is about rib cage breathing. Choose the incorrect statement.",
    "options": [
      "On inhalation, the spine extends, and on exhalation, it flexes.",
      "On inhalation, the ribs close and move down, and on exhalation, they open and move up.",
      "During breathing, because of the nature of the ribs, they tend to open forward, but this opening should not always be allowed without control.",
      "Rib cage stability means the degree to which the rib cage naturally contacts the floor when prone or supine.",
      "Rib cage stability means that, when sitting or standing, the rib cage is aligned with the pelvis."
    ],
    "answer": 1,
    "a": "This statement reverses the actual mechanics — the ribs open and move up on inhalation and close and move down on exhalation, as confirmed elsewhere in the same exam and manual.",
    "flag": "",
    "id": "mq17"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "This is about pelvic placement. Choose the correct statement.",
    "options": [
      "Pelvic placement includes neutral, which has a natural S-shaped curve, and imprint, in which the lumbar spine is lengthened with a slight posterior pelvic tilt.",
      "In neutral position, you must intentionally create and maintain the shape.",
      "Imprint is created by contracting the oblique muscles so the pelvis is slightly posteriorly tilted and the lumbar spine is lengthened.",
      "In imprint, avoid lifting the sacrum off the floor more than necessary, and the gluteus maximus or hip flexors may be used.",
      "The appearance of imprint may vary depending on the person and their exercise experience."
    ],
    "answer": 2,
    "a": "This closely matches the manual's own wording: imprint is created by 'engaging the oblique abdominals' to produce 'a slight posterior pelvic tilt with slight lumbar flexion' that lengthens the lumbar spine; the manual also warns against overusing the gluteal muscles to create the position, contradicting option D.",
    "flag": "Option A is also broadly accurate per the source and could be defended as correct; C was chosen as the most precise, near-verbatim match.",
    "id": "mq18"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "Choose the movement that is not used when explaining the principle of pelvic placement.",
    "options": [
      "Rocking pelvis",
      "Leg slides",
      "Leg lifts",
      "One leg circle",
      "Half roll back"
    ],
    "answer": 4,
    "a": "The manual's Pelvic Placement Principle Exercises are exactly four: Rocking Pelvis, Neutral to Imprint, Leg Slides, and Leg Lifts (Toe Taps) — Half Roll Back is a spinal-articulation exercise, not part of this list.",
    "flag": "'One leg circle' is also absent from the confirmed exercise list, creating some ambiguity in which option is intended; Half Roll Back was chosen as the more clearly unrelated exercise category.",
    "id": "mq19"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "This is about head and cervical placement. Choose the correct statement.",
    "options": [
      "In a sitting or standing position, the neck should not shift forward or backward from the body and should be positioned in the center between both shoulders.",
      "In a sitting or standing position, the neck should not have a natural curve.",
      "The cervical spine moves in accordance with the thoracic spine.",
      "Cranio-vertebral flexion is not significantly involved during upper-body flexion.",
      "If the head position is incorrect, excessive tension may be concentrated in the neck and shoulders, so stability of the head and neck is important."
    ],
    "answer": 2,
    "a": "This is close to a verbatim match of the manual's statement that 'the cervical spine should continue the line created by the thoracic spine' during flexion, extension, lateral flexion, and rotation.",
    "flag": "Options A and E are also accurate per the source; C was selected as the closest verbatim match.",
    "id": "mq20"
  },
  {
    "topic": "Basic Principles",
    "type": "mcq",
    "q": "This is about cranio-vertebral flexion. Choose the incorrect statement.",
    "options": [
      "It helps avoid excessive tension in the cervical spine when flexing or extending the upper body.",
      "The cervical spine should be flexed.",
      "When performing cranio-vertebral flexion, there should be enough space between the chin and clavicle for one fist-width.",
      "The gaze should be free.",
      "It refers to movement of C1 and C2."
    ],
    "answer": 3,
    "a": "The manual states the eyeline/gaze actively affects cervical placement and specifically cues to 'drop eye focus slightly' during the head nod — the gaze is directed, not left free.",
    "flag": "",
    "id": "mq21"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which term refers to a part of the body located far from the torso?",
    "options": [
      "Medial",
      "Lateral",
      "Proximal",
      "Distal",
      "Posterior"
    ],
    "answer": 3,
    "a": "Distal describes a structure farther from the trunk or point of attachment; proximal is its opposite (closer to the torso).",
    "flag": "",
    "id": "mq22"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Of the three bones that make up the shoulder, which is the remaining one besides the Clavicle and Humerus?",
    "options": [
      "Scapula",
      "Sternum",
      "Ribs",
      "Acromion",
      "Vertebra"
    ],
    "answer": 0,
    "a": "The shoulder girdle/joint is formed by the scapula, clavicle, and humerus; the acromion is a bony landmark of the scapula, not a separate bone.",
    "flag": "",
    "id": "mq23"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "What type of movement occurs in a hinge joint?",
    "options": [
      "Flexion",
      "Rotation",
      "Lateral flexion",
      "Abduction",
      "Adduction"
    ],
    "answer": 0,
    "a": "Hinge joints (like the knee and elbow) move in a single plane, allowing only flexion and extension — not rotation, lateral flexion, abduction, or adduction.",
    "flag": "",
    "id": "mq24"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which of the following is NOT a rotator cuff muscle?",
    "options": [
      "Supraspinatus",
      "Infraspinatus",
      "Teres Major",
      "Teres Minor",
      "Subscapularis"
    ],
    "answer": 2,
    "a": "The rotator cuff (SITS) is Supraspinatus, Infraspinatus, Teres Minor, and Subscapularis; Teres Major is a separate muscle and is not part of the rotator cuff.",
    "flag": "",
    "id": "mq25"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which of the following is located on the front of the chest attaches to the humerus?",
    "options": [
      "Deltoid",
      "Pectoralis major",
      "Latissimus dorsi",
      "Trapezius",
      "Rhomboid major"
    ],
    "answer": 1,
    "a": "Pectoralis major spans the front of the chest and inserts onto the humerus (intertubercular groove); latissimus dorsi, trapezius, and rhomboid major are back muscles.",
    "flag": "",
    "id": "mq26"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which wide muscle of the back is easily felt just below the armpit?",
    "options": [
      "Pectoralis major",
      "Serratus anterior",
      "Rectus abdominis",
      "Latissimus dorsi",
      "Erector spinae group"
    ],
    "answer": 3,
    "a": "Latissimus dorsi is the broad, fan-shaped back muscle whose lateral edge is easily palpated just below the armpit as it wraps toward the humerus.",
    "flag": "",
    "id": "mq27"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which of the following is NOT a movement of the scapula?",
    "options": [
      "Elevation",
      "Depression",
      "Protraction",
      "Upward rotation",
      "internal rotation"
    ],
    "answer": 4,
    "a": "The scapula's recognized movements are elevation, depression, protraction, retraction, and upward/downward rotation — 'internal rotation' is a term used for joints like the shoulder or hip, not the scapula.",
    "flag": "",
    "id": "mq28"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "If the anterior part of the humerus is rotated away from the midline of the body, what is the joint movement?",
    "options": [
      "medial rotation",
      "adduction",
      "lateral rotation",
      "abduction",
      "horizontal abduction"
    ],
    "answer": 2,
    "a": "Rotating the front (anterior surface) of the humerus away from the body's midline is, by definition, lateral (external) rotation; medial rotation turns it toward the midline.",
    "flag": "",
    "id": "mq29"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "On which bone is the Coracoid process located?",
    "options": [
      "Scapula",
      "Humerus",
      "Ulna",
      "Radius",
      "Femur"
    ],
    "answer": 0,
    "a": "The coracoid process is a hook-like bony projection on the anterior surface of the scapula, serving as an attachment site for pectoralis minor, coracobrachialis, and the short head of biceps brachii.",
    "flag": "",
    "id": "mq30"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which vertebra is located on the same line as the 12th rib?",
    "options": [
      "T-2",
      "T-7",
      "T-12",
      "L-4",
      "L-5"
    ],
    "answer": 2,
    "a": "Each rib articulates with its correspondingly numbered thoracic vertebra, so the 12th rib is at the level of T-12.",
    "flag": "",
    "id": "mq31"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which vertebra is located on the same line as the top of the iliac crest.",
    "options": [
      "T-2",
      "T-7",
      "T-12",
      "L-4",
      "L-5"
    ],
    "answer": 3,
    "a": "The top of the iliac crests is a classic anatomical landmark corresponding to the level of the L4 vertebra (commonly used, for example, to locate the L4-L5 interspace clinically).",
    "flag": "",
    "id": "mq32"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which muscle in the Erector spinae group is closest to the central axis of the body?",
    "options": [
      "Spinalis",
      "Longissimus",
      "iliocostalis",
      "Multifidi",
      "Rotatores"
    ],
    "answer": 0,
    "a": "The three true erector spinae columns run, from lateral to medial, as iliocostalis, longissimus, and spinalis — spinalis lies closest to the spinous processes/central axis (multifidi and rotatores actually belong to the deeper transversospinalis group, not erector spinae).",
    "flag": "",
    "id": "mq33"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which deep muscle of the lumbar region is located between the iliac crest and the last rib?",
    "options": [
      "Rectus abdominis",
      "Quadratus lumborum",
      "External oblique",
      "Internal oblique",
      "Multifidi"
    ],
    "answer": 1,
    "a": "Quadratus lumborum sits deep in the posterior abdominal wall, spanning between the iliac crest below and the 12th rib above.",
    "flag": "",
    "id": "mq34"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which is the deepest muscle among the abdominals?",
    "options": [
      "Rectus abdominis",
      "Internal oblique",
      "External oblique",
      "Transverse abdominis",
      "Quadratus lumborum"
    ],
    "answer": 3,
    "a": "Transversus abdominis is the innermost of the abdominal wall layers (external oblique, internal oblique, transversus abdominis from superficial to deep); quadratus lumborum is a posterior, not anterior abdominal, muscle.",
    "flag": "",
    "id": "mq35"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which muscle of the Erector spinae group is located outermost and includes the ribs in its origin and insertion?",
    "options": [
      "Spinalis",
      "Longissimus",
      "Iliocostalis",
      "Multifidi",
      "Rotatores"
    ],
    "answer": 2,
    "a": "Iliocostalis is the most lateral (outermost) column of the erector spinae and is unique among the three in having direct rib attachments along its length.",
    "flag": "",
    "id": "mq36"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which option includes all muscles belonging to the Transversospinalis group?",
    "options": [
      "Multifidi, Rotatores",
      "Splenius capitis, Splenius cervicis",
      "Multifidi, Rotatores, Splenius capitis, Splenius cervicis",
      "Multifidi, Rotatores, Semispinalis capitis"
    ],
    "answer": 3,
    "a": "The transversospinalis group consists of three subgroups — semispinalis, multifidus, and rotatores; splenius capitis/cervicis form a separate, more superficial muscle group and do not belong to transversospinalis.",
    "flag": "",
    "id": "mq37"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which muscle does NOT belong to the Suboccipital?",
    "options": [
      "Rectus capitis posterior major",
      "Rectus capitis posterior minor",
      "Oblique capitis major",
      "Oblique capitis superior",
      "Oblique capitis inferior"
    ],
    "answer": 2,
    "a": "The four suboccipital muscles are rectus capitis posterior major and minor, and obliquus capitis superior and inferior — there is no 'obliquus capitis major.'",
    "flag": "",
    "id": "mq38"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "What are the three bones that make up the hip (innominate bone)?",
    "options": [
      "Sacrum, Coccyx, Femur",
      "Sacrum, Ilium, Pubis",
      "Ilium, Ischium, Femur",
      "Ilium, Pubis, Ischium",
      "Pubis, Coccyx, Ischium"
    ],
    "answer": 3,
    "a": "The innominate (hip) bone is formed by the fusion of three bones: ilium, ischium, and pubis.",
    "flag": "",
    "id": "mq39"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "What is the broad fascia that covers and connects the muscles of the hip, lower back, and back, influencing spinal stability?",
    "options": [
      "Ligament",
      "Tendon",
      "Retinaculum",
      "Thoracolumbar fascia",
      "Aponeurosis"
    ],
    "answer": 3,
    "a": "The thoracolumbar fascia is the broad connective-tissue sheet spanning the lower back, hips, and mid-back that links the deep spinal stabilizers (including transversus abdominis and the erector spinae/multifidus) and contributes to lumbo-pelvic stability.",
    "flag": "",
    "id": "mq40"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "In which joint is circumduction movement possible?",
    "options": [
      "Knee",
      "Sacroiliac",
      "Hip",
      "Wrist",
      "Elbow"
    ],
    "answer": 2,
    "a": "Circumduction — a circular combination of flexion, extension, abduction, and adduction — is possible in multiaxial ball-and-socket joints like the hip (and shoulder); the knee and elbow (hinge joints) and the largely immobile sacroiliac joint do not allow it.",
    "flag": "The wrist (a condyloid joint) can also perform a limited circumduction; hip was selected as the clearer, classic multiplanar example used in STOTT course material.",
    "id": "mq41"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "In which plane does movement occur during a \"Side Bend,\" where the torso performs lateral flexion?",
    "options": [
      "Sagittal plane",
      "Frontal (coronal) plane",
      "Transverse plane",
      "Horizontal plane",
      "Diagonal plane"
    ],
    "answer": 1,
    "a": "Lateral flexion of the spine occurs in the frontal (coronal) plane, around a sagittal (front-to-back) axis.",
    "flag": "",
    "id": "mq42"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which of the following is NOT an ideal position of the scapula?",
    "options": [
      "Between the 2nd and 7th thoracic vertebrae",
      "Resting flat against the ribcage",
      "The distance from the spinous process to the scapula is 3–4 inches (7.5 cm–10 cm)",
      "The medial border of the scapula is perpendicular to the floor"
    ],
    "answer": 3,
    "a": "STOTT's postural-analysis criteria describe the scapulae's medial borders as essentially parallel (to each other/the spine) and 3-4 inches apart, resting flat between T2-T7 — 'perpendicular to the floor' is not part of the standard description.",
    "flag": "",
    "id": "mq43"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "In which plane do Flexion and Extension occur?",
    "options": [
      "Coronal plane",
      "Sagittal plane",
      "Horizontal plane"
    ],
    "answer": 1,
    "a": "Flexion and extension are forward/backward movements that occur in the sagittal plane, around a frontal (side-to-side) axis.",
    "flag": "",
    "id": "mq44"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "In the anatomical position, which direction do the palms face?",
    "options": [
      "Medially (toward the body)",
      "Laterally (away from the body)",
      "Anteriorly (forward)",
      "Posteriorly (backward)"
    ],
    "answer": 2,
    "a": "In standard anatomical position, the body stands erect with the palms facing forward (anteriorly).",
    "flag": "",
    "id": "mq45"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "What type of joint is the shoulder joint (glenohumeral joint)?",
    "options": [
      "Saddle joint",
      "Ellipsoid joint",
      "Ball and socket joint"
    ],
    "answer": 2,
    "a": "The glenohumeral joint is a multiaxial ball-and-socket joint, the same joint type as the hip, giving it the greatest range of motion of any joint in the body.",
    "flag": "",
    "id": "mq46"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "What does \"Anterior\" mean?",
    "options": [
      "Toward the head (cephalic)",
      "Front of the body",
      "Back of the body"
    ],
    "answer": 1,
    "a": "Anterior means toward the front of the body; toward the head is described as superior or cephalic, and toward the back is posterior.",
    "flag": "",
    "id": "mq47"
  },
  {
    "topic": "Anatomy — Terminology",
    "type": "mcq",
    "q": "Which of the following movements does NOT occur at the scapula?",
    "options": [
      "Winging",
      "Retraction",
      "Circumduction",
      "None of the above"
    ],
    "answer": 0,
    "a": "Winging describes a dysfunctional/unstable position where the medial border lifts off the rib cage — it is a sign of poor scapular control, not one of the scapula's controlled functional movements (elevation, depression, protraction, retraction, and upward/downward rotation).",
    "flag": "Circumduction is also not formally listed among the six named scapular movements and could arguably be the intended answer; winging was chosen as it is explicitly a dysfunction rather than a movement.",
    "id": "mq48"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle surrounds the shoulder joint and plays a vital role in lifting the arm out to the side?",
    "options": [
      "Biceps brachii",
      "Triceps brachii",
      "Deltoid",
      "Pectoralis major",
      "Latissimus dorsi"
    ],
    "answer": 2,
    "a": "The deltoid wraps around the shoulder joint, and its middle fibers are the prime mover for abducting (lifting out to the side) the arm.",
    "flag": "",
    "id": "mq49"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is widely located on the neck and upper back, and is involved in neck/head extension, lateral flexion, and rotation, as well as scapular elevation, depression, upward rotation, and retraction?",
    "options": [
      "Latissimus dorsi",
      "Rhomboid major",
      "Levator scapula",
      "Trapezius",
      "Serratus anterior"
    ],
    "answer": 3,
    "a": "Trapezius is the large, broad muscle spanning the neck and upper/mid back whose different fiber regions extend, laterally flex, and rotate the neck, and elevate, depress, retract, and upwardly rotate the scapula.",
    "flag": "",
    "id": "mq50"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle stabilizes the scapula by pushing it forward (protraction) during a push-up?",
    "options": [
      "Pectoralis major",
      "Pectoralis minor",
      "Serratus Anterior",
      "Bicep brachii",
      "Triceps brachii"
    ],
    "answer": 2,
    "a": "Serratus anterior wraps from the upper ribs to the medial border of the scapula and is the primary protractor, pushing the scapula forward around the rib cage — as in the 'push-up plus' portion of a push-up.",
    "flag": "",
    "id": "mq51"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscles are used to retract the scapula?",
    "options": [
      "Serratus anterior",
      "Pectoralis minor",
      "Teres major",
      "infraspinatus",
      "Rhomboid major and minor"
    ],
    "answer": 4,
    "a": "The rhomboids attach the medial border of the scapula to the spine and contract to draw the scapula toward the spine (retraction); serratus anterior and pectoralis minor actually protract the scapula.",
    "flag": "",
    "id": "mq52"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is involved in the action of flexing (flex) the elbow?",
    "options": [
      "Triceps brachii",
      "Biceps brachii",
      "Deltoid",
      "Latissimus dorsi",
      "Pectoralis major"
    ],
    "answer": 1,
    "a": "Biceps brachii crosses the front of the elbow and flexes it (along with brachialis and brachioradialis); triceps brachii is the elbow extensor.",
    "flag": "",
    "id": "mq53"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is involved in the action of extending (extend) the elbow?",
    "options": [
      "Biceps brachii",
      "Triceps brachii",
      "brachialis",
      "Brachioradialis",
      "Deltoid"
    ],
    "answer": 1,
    "a": "Triceps brachii is the primary elbow extensor, running along the back of the upper arm to the olecranon of the ulna.",
    "flag": "",
    "id": "mq54"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle externally rotates the arm at the shoulder joint?",
    "options": [
      "Supraspinatus",
      "Infraspinatus",
      "Subscapularis",
      "Teres major",
      "Coracobrachialis"
    ],
    "answer": 1,
    "a": "Infraspinatus (along with teres minor) externally/laterally rotates the humerus; subscapularis and teres major are internal rotators, and supraspinatus initiates abduction.",
    "flag": "",
    "id": "mq55"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is involved in the pronation of the forearm?",
    "options": [
      "Pronator teres",
      "Supinator",
      "Brachialis",
      "Triceps brachii",
      "Anconeus"
    ],
    "answer": 0,
    "a": "Pronator teres, as its name indicates, is a primary pronator of the forearm, turning the palm downward/backward; supinator performs the opposite action.",
    "flag": "",
    "id": "mq56"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is NOT directly involved in respiration?",
    "options": [
      "Diaphragm",
      "Intercostals",
      "Serratus anterior",
      "Serratus posterior superior",
      "Serratus posterior inferior"
    ],
    "answer": 2,
    "a": "The diaphragm, intercostals, and serratus posterior superior/inferior are all recognized respiratory muscles (primary or accessory); serratus anterior's main role is protracting/upwardly rotating the scapula, not breathing.",
    "flag": "",
    "id": "mq57"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is NOT primarily involved in spinal extension?",
    "options": [
      "Erector spinae group",
      "Multifidi and rotatores",
      "Semispinalis capitis",
      "Intertransversarii",
      "Psoas major"
    ],
    "answer": 4,
    "a": "Psoas major is primarily a hip flexor (and assists trunk flexion when the femur is fixed); the erector spinae, transversospinalis muscles (multifidi, rotatores, semispinalis), and intertransversarii are all posterior spinal muscles that extend or stabilize the spine.",
    "flag": "",
    "id": "mq58"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which combination of abdominal muscles is primarily used when rotating the spine to the right?",
    "options": [
      "Left external oblique + Left internal oblique",
      "Left external oblique + Right internal oblique",
      "Right external oblique + Right internal oblique",
      "Right external oblique + Left internal oblique",
      "Entire external oblique + Internal oblique"
    ],
    "answer": 1,
    "a": "Oblique fibers run diagonally, so rotation to one side pairs the opposite-side external oblique with the same-side internal oblique — rotating right uses the left external oblique together with the right internal oblique (confirmed by the mirror-image written-exam fact that rotating the ribcage left uses the right external oblique plus left internal oblique).",
    "flag": "",
    "id": "mq59"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which of the following is NOT a function of the Transverse abdominis?",
    "options": [
      "Abdominal compression",
      "Lateral flexion of the spine",
      "Core stabilization",
      "Deep breathing assistance",
      "Pelvic stabilization"
    ],
    "answer": 1,
    "a": "Transversus abdominis fibers run horizontally around the trunk, so its role is compression and stabilization (a 'girdle' effect) rather than producing lateral flexion of the spine, which is a job for the obliques and quadratus lumborum.",
    "flag": "",
    "id": "mq60"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is NOT used when extending the neck?",
    "options": [
      "Upper fibers of Trapezius",
      "Levator scapula",
      "Splenius capitis and cervicis",
      "Semispinalis capitis",
      "Subclavius"
    ],
    "answer": 4,
    "a": "Subclavius is a small muscle that depresses/stabilizes the clavicle and has no role in neck movement; the upper trapezius, levator scapulae, splenius, and semispinalis capitis all contribute to extending the neck.",
    "flag": "",
    "id": "mq61"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle extends from behind the ear to the front of the neck, functioning to flex the neck forward and rotate the head?",
    "options": [
      "Levator scapula",
      "Splenius capitis",
      "Sternocleidomastoid",
      "Longus colli",
      "Rectus capitis posterior major"
    ],
    "answer": 2,
    "a": "Sternocleidomastoid runs diagonally from behind the ear (mastoid process) down to the sternum/clavicle; acting together the two sides flex the neck, and acting alone one side rotates the head to the opposite side.",
    "flag": "",
    "id": "mq62"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "In the Quadriceps femoris group, which is the 2-joint muscle that crosses both the hip and knee joints?",
    "options": [
      "Rectus femoris",
      "Vastus medialis",
      "Vastus lateralis",
      "Vastus intermedius"
    ],
    "answer": 0,
    "a": "Rectus femoris originates on the pelvis (AIIS) and crosses both the hip and knee joints, making it a hip flexor as well as a knee extensor; the three vastus muscles originate on the femur and cross only the knee.",
    "flag": "",
    "id": "mq63"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle does NOT extend the hip?",
    "options": [
      "All fibers of Gluteus maximus",
      "iliopsoas",
      "Long head of Biceps femoris",
      "Semitendinosus",
      "Semimembranosus"
    ],
    "answer": 1,
    "a": "Iliopsoas is the primary hip flexor, the opposite action of hip extension; gluteus maximus and the hamstrings (biceps femoris, semitendinosus, semimembranosus) are all hip extensors.",
    "flag": "",
    "id": "mq64"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is involved in the adduction of the hip?",
    "options": [
      "Gluteus maximus",
      "Piriformis",
      "Biceps femoris",
      "Rectus femoris",
      "Adductor magnus"
    ],
    "answer": 4,
    "a": "Adductor magnus is the largest of the hip adductor group, drawing the thigh toward the midline; the other options are hip extensors/lateral rotators/flexors, not adductors.",
    "flag": "",
    "id": "mq65"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which of the following does NOT belong to the deep Lateral rotators of the nip?",
    "options": [
      "Piriformis",
      "Quadratus femoris",
      "Quadriceps femoris",
      "Obturator internus and externus",
      "Gemellus superior and inferior"
    ],
    "answer": 2,
    "a": "Quadriceps femoris is the anterior thigh knee-extensor group (rectus femoris and the three vastus muscles) — an entirely different muscle group from quadratus femoris, which is one of the six deep lateral rotators of the hip along with piriformis, the obturators, and the gemelli.",
    "flag": "",
    "id": "mq66"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle does NOT belong to the Adductor group?",
    "options": [
      "Adductor magnus",
      "Adductor longus",
      "Adductor brevis",
      "Pectineus",
      "Tensor fasciae latae"
    ],
    "answer": 4,
    "a": "Tensor fasciae latae is a hip flexor/abductor/medial rotator on the front-lateral hip, not part of the medial adductor group (adductor magnus, longus, brevis, and pectineus).",
    "flag": "",
    "id": "mq67"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is NOT used to flex the knee?",
    "options": [
      "Rectus femoris",
      "Semitendinosus",
      "Semimembranosus",
      "Gastrocnemius",
      "Popliteus"
    ],
    "answer": 0,
    "a": "Rectus femoris is part of the quadriceps and extends the knee; the hamstrings (semitendinosus, semimembranosus), gastrocnemius, and popliteus all assist in flexing the knee.",
    "flag": "",
    "id": "mq68"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "What is the primary function of the iliopsoas (Psoas major and Iliacus)?",
    "options": [
      "Extend the hip",
      "Flex the hip",
      "Medially rotate the hip",
      "Abduct the hip",
      "Adduct the hip"
    ],
    "answer": 1,
    "a": "The iliopsoas (psoas major plus iliacus) is the body's primary hip flexor, lifting the thigh toward the torso or the torso toward the thigh.",
    "flag": "",
    "id": "mq69"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which of the following is NOT a 2-joint muscle?",
    "options": [
      "Long head of Biceps femoris",
      "Gracilis",
      "Sartorius",
      "Gluteus medius",
      "Gastrocnemius"
    ],
    "answer": 3,
    "a": "Gluteus medius originates and inserts entirely around the hip, crossing only the hip joint; biceps femoris (long head), gracilis, and sartorius all cross both the hip and knee, and gastrocnemius crosses both the knee and ankle.",
    "flag": "",
    "id": "mq70"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle is located on the outside of the calf and is involved in the eversion of the foot?",
    "options": [
      "Tibialis anterior and posterior",
      "Flexor digitorum longus",
      "Flexor hallucis longus",
      "Extensor hallucis longus",
      "Fibularis longus and brevis"
    ],
    "answer": 4,
    "a": "Fibularis (peroneus) longus and brevis run along the lateral (outside) calf and evert the foot; the tibialis muscles, by contrast, invert the foot.",
    "flag": "",
    "id": "mq71"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Which muscle in the lower leg is located deeper than the Gastrocnemius, is known as the \"soleus,\" and stabilizes the ankle?",
    "options": [
      "Soleus",
      "Plantaris",
      "Popliteus",
      "Tibialis anterior",
      "Fibularis longus"
    ],
    "answer": 0,
    "a": "Soleus lies directly beneath (deep to) the gastrocnemius, and the two share the Achilles tendon; because soleus crosses only the ankle (not the knee), it plays a key role in ankle stability.",
    "flag": "",
    "id": "mq72"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "What happens to the length of the muscle during an eccentric contraction?",
    "options": [
      "The length of the muscle fibers increases",
      "The length of the muscle fibers decreases",
      "The length of the muscle fibers remains constant",
      "The muscle fibers shorten and then lengthen",
      "The muscle fibers lengthen and then shorten"
    ],
    "answer": 0,
    "a": "Eccentric contraction is defined as the muscle producing tension while lengthening (for example, controlling a weight on the way down) — the opposite of a concentric (shortening) contraction.",
    "flag": "",
    "id": "mq73"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "What is the action of the Middle Deltoid?",
    "options": [
      "Abduction of the humerus at the shoulder",
      "Shoulder humerus abduction and lateral rotation",
      "Moves the clavicle inferiorly and anteriorly",
      "Scapular upward rotation",
      "Medial rotation of the humerus at the shoulder"
    ],
    "answer": 0,
    "a": "The middle (lateral) fibers of the deltoid run straight down the side of the arm and are the prime mover for pure abduction of the humerus at the shoulder — they do not produce rotation.",
    "flag": "",
    "id": "mq74"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "During the \"Rolling Like a Ball\" exercise, what term describes the Rectus abdominis contracting without a change in length?",
    "options": [
      "Concentric contraction",
      "Eccentric contraction",
      "Isometric contraction",
      "Isotonic contraction",
      "Active contraction"
    ],
    "answer": 2,
    "a": "Holding the curled, balanced C-curve position in Rolling Like a Ball requires the rectus abdominis to hold tension without changing length — the definition of an isometric contraction.",
    "flag": "",
    "id": "mq75"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "For a client with a hyperextended neck, what is the state of the deep neck flexors?",
    "options": [
      "Lengthened",
      "Strengthened",
      "Normal length",
      "Shortened"
    ],
    "answer": 0,
    "a": "A chronically hyperextended (or forward-head) neck posture places the deep neck flexors, on the front of the neck, in a stretched position, and over time they typically become lengthened and weak while the posterior neck extensors shorten and tighten — a common postural-imbalance pattern taught in postural analysis.",
    "flag": "This is standard postural-analysis knowledge rather than a statement located verbatim in the sourced STOTT text — reasoned from established posture principles; verify before treating as an official answer key.",
    "id": "mq76"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Where are muscles that flex the shoulder generally located?",
    "options": [
      "Anterior (front)",
      "Posterior (back)",
      "Inferior (below)"
    ],
    "answer": 0,
    "a": "Muscles that flex a joint are generally found on the same side of the body as the direction of the movement — shoulder flexors (e.g., anterior deltoid, pectoralis major clavicular head, coracobrachialis) lie on the front of the torso/shoulder.",
    "flag": "",
    "id": "mq77"
  },
  {
    "topic": "Anatomy — Muscle Function",
    "type": "mcq",
    "q": "Where are muscles that extend the spine generally located?",
    "options": [
      "Anterior (front)",
      "Posterior (back)",
      "Inferior (below)"
    ],
    "answer": 1,
    "a": "Spinal extensors — the erector spinae and transversospinalis groups — run along the back of the spine, so they are located posteriorly.",
    "flag": "",
    "id": "mq78"
  },
  {
    "topic": "Mat",
    "type": "order",
    "q": "Put these Essential Mat warm-up movements in the correct sequence.",
    "options": [
      "Breathing",
      "Imprint & Release",
      "Hip Release",
      "Spinal Rotation",
      "Cat Stretch",
      "Hip Roll",
      "Scapula Isolation",
      "Arm Circle",
      "Head Nod",
      "Elevation & Depression of Scapula"
    ],
    "a": "The STOTT Essential Matwork chart (manual p.15) lists the warm-up in this exact order, matching the page order in which each movement is taught (Breathing p.18 through Elevation & Depression of Scapulae p.27).",
    "flag": "",
    "id": "mq79"
  },
  {
    "topic": "Mat",
    "type": "order",
    "q": "Put the following list of Mat exercises in the correct order.",
    "options": [
      "Ab Prep",
      "Breast Stroke Prep",
      "Shell Stretch",
      "Hundred",
      "Half Roll Back",
      "Roll Up",
      "One Leg Circle",
      "Spine Twist",
      "Rolling Like a Ball",
      "Single Leg Stretch"
    ],
    "a": "This is the opening sequence of the Essential Matwork chart (manual p.15), confirmed by ascending manual page numbers (Ab Prep 30, Breast Stroke Prep 32, Shell Stretch 35, Hundred 36, Half Roll Back 39, Roll Up 40, One Leg Circle 42, Spine Twist 44, Rolling Like a Ball 46, Single Leg Stretch 48).",
    "flag": "",
    "id": "mq80"
  },
  {
    "topic": "Mat",
    "type": "order",
    "q": "Put the following list of Essential Mat exercises in the correct order (the block starting with \"Double Leg Stretch\").",
    "options": [
      "Double Leg Stretch",
      "Scissors",
      "Shoulder Bridge Prep",
      "Roll Over Prep",
      "Heel Squeeze Prone",
      "One Leg Kick Prep",
      "Breast Stroke",
      "Shell Stretch",
      "Saw",
      "Obliques Roll Back"
    ],
    "a": "This matches the Essential Matwork chart (manual p.15), which lists Shoulder Bridge Prep and Roll Over Prep between Scissors and Heel Squeeze Prone, and the full Breast Stroke movement between One Leg Kick Prep and Saw. The list's final item 'oblique' refers to Obliques Roll Back, the next chart entry after Saw.",
    "flag": "",
    "id": "mq81"
  },
  {
    "topic": "Mat",
    "type": "order",
    "q": "Put the following list of Essential Mat exercises in the correct order (the block starting with \"Neck Pull Prep\").",
    "options": [
      "Neck Pull Prep",
      "Obliques Roll Back",
      "Side Kick",
      "Side Leg Lift Series",
      "Spine Stretch Forward",
      "Teaser Prep",
      "Single Leg Extension",
      "Swan Dive Prep",
      "Swimming Prep",
      "Shell Stretch"
    ],
    "a": "Order confirmed by ascending manual page numbers (Neck Pull 72, Obliques Roll Back 74, Side Kick 78, Side Leg Lift Series 80, Spine Stretch Forward 90, Teaser Prep 96, Single Leg Extension 97, Swan Dive Prep 99, Swimming Prep 101), with Shell Stretch recurring as the rest position before the next section on the chart.",
    "flag": "",
    "id": "mq82"
  },
  {
    "topic": "Mat",
    "type": "order",
    "q": "Put the following list of Essential Mat exercises in the correct order (the block starting with \"Leg Pull Front Prep\").",
    "options": [
      "Leg Pull Front Prep",
      "Seal",
      "Side Bend Prep",
      "Push Up Prep"
    ],
    "a": "This is the closing sequence of the Essential Matwork chart (manual p.15): Leg Pull Front Prep, Seal, Side Bend Prep, Push Up Prep, confirmed by ascending manual page numbers (102, 113, 114, 122).",
    "flag": "",
    "id": "mq83"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the exercise that includes articulation, meaning sequential movement of the joints.",
    "options": [
      "Saw",
      "Swan Dive Prep",
      "Shoulder Bridge Prep",
      "Spine Stretch Forward"
    ],
    "answer": 0,
    "a": "The manual's Saw entry literally instructs: 'EXHALE sequentially articulate spine into flexion from head... INHALE roll up through spine and sequentially articulate out of flexion from tail' and lists 'MOBILITY: spinal articulation and rotation' -- a direct, explicit match to sequential vertebra-by-vertebra movement.",
    "flag": "",
    "id": "mq84"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises that include hip extension.",
    "options": [
      "Leg Pull Front Prep",
      "Single Leg Extension",
      "Shoulder Bridge Prep",
      "Side Kick",
      "One Leg Circle"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "a": "Single Leg Extension's MOBILITY is explicitly 'hips into extension'. Shoulder Bridge Prep (lift/lower pelvis) extends the hips to bridge. Side Kick's target muscles include 'hip extensors concentrically to reach leg back'. Leg Pull Front Prep (hands-and-knees) explicitly involves no hip-joint movement, and One Leg Circle's mobility is 'hip circumduction' with only hip flexors/abductors/adductors named, not extensors.",
    "flag": "",
    "id": "mq85"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises that include hip flexion.",
    "options": [
      "Roll Up",
      "One Leg Kick",
      "Obliques Roll Back",
      "Obliques",
      "Side Kick"
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "a": "Roll Up's target muscles include hip flexors concentrically on roll up; Obliques Roll Back's target muscles include hip flexors on roll up/down; Obliques' MOBILITY is 'hip and knee flexion/extension'; Side Kick's hip flexors reach the leg forward. One Leg Kick keeps hips isometrically in extension throughout -- the movement is only at the knee, so it is excluded.",
    "flag": "",
    "id": "mq86"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises that include spine flexion.",
    "options": [
      "Push Up Prep",
      "Side Bend Prep",
      "Side Leg Lift Series 1",
      "Neck Pull Prep",
      "Heel Squeeze Prone"
    ],
    "answer": [
      0,
      3
    ],
    "a": "Push Up's roll-down/roll-up is explicit sequential spine flexion ('sequentially articulate spine through flexion from head'). Neck Pull is a sequential-flexion sit-up variant. Side Bend Prep is lateral flexion (a different plane), and both Side Leg Lift Series position 1 and Heel Squeeze Prone keep the spine neutral.",
    "flag": "",
    "id": "mq87"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises that include spine rotation.",
    "options": [
      "Half Roll Back",
      "Ab Prep",
      "Obliques Roll Back",
      "Oblique",
      "One Leg Circle"
    ],
    "answer": [
      2,
      3
    ],
    "a": "Obliques Roll Back and Obliques (criss-cross) both explicitly rotate the upper torso. Half Roll Back and Ab Prep are pure sagittal flexion with no rotation, and One Leg Circle keeps the spine/pelvis neutral and non-rotating (obliques work isometrically to PREVENT rotation).",
    "flag": "",
    "id": "mq88"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises that include spine extension.",
    "options": [
      "Single Leg Extension",
      "Swimming Prep modification: single & double arm reaches",
      "One Leg Kick Prep",
      "Breast Stroke Prep",
      "Single Leg Stretch"
    ],
    "answer": [
      1,
      3
    ],
    "a": "Breast Stroke Prep is upper-thoracic/hover spine extension by definition, and Swimming Prep's arm-reach modifications build toward its full extension pattern. Single Leg Extension and One Leg Kick Prep both keep the SPINE neutral (only the hip extends; abdominals work specifically to prevent spinal extension), and Single Leg Stretch stays in thoracic flexion.",
    "flag": "",
    "id": "mq89"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all exercises whose starting position is neutral pelvis.",
    "options": [
      "Ab Prep",
      "Hundred",
      "Single Leg Extension",
      "Double Leg Stretch",
      "Scissors"
    ],
    "answer": [
      0,
      2
    ],
    "a": "Ab Prep and Single Leg Extension both begin 'pelvis and spine neutral' per the manual. Hundred, Double Leg Stretch and Scissors all begin in an imprinted pelvis position, not neutral.",
    "flag": "",
    "id": "mq90"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the exercise/position that is not included in the Side Leg Lift Series.",
    "options": [
      "Staggered Legs",
      "Top Leg Circle",
      "Top Leg Adduction",
      "Both Legs Together",
      "Lateral Flexion"
    ],
    "answer": 2,
    "a": "The manual's five Side Leg Lift Series positions are: Top Leg Abduction, Top Leg Circles, Staggered Legs, Both Legs Together, and Both Legs Together with Lateral Flexion. 'Top Leg Adduction' is not one of them -- the top leg movement is abduction, not adduction.",
    "flag": "",
    "id": "mq91"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the movement that is not included as a modification of Hundred.",
    "options": [
      "Head and feet on mat",
      "Feet on mat in neutral pelvis",
      "Tabletop position",
      "Breathe in a staccato rhythm",
      "Arms by ear"
    ],
    "answer": 4,
    "a": "The manual lists 11 Hundred modifications including 'Head and Feet on Mat', 'Feet on Mat in Neutral Pelvis', 'Tabletop Position', and 'Breathe in Staccato Rhythm' -- all genuine Hundred modifications. 'Arms by the ears' is not among them; it is listed as a Roll Up modification instead.",
    "flag": "",
    "id": "mq92"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Which modification can be used when parallel alignment of the legs cannot be maintained well?",
    "options": [
      "Place a pad between the knees",
      "Sit on a box",
      "Place a pad under the head",
      "Use tabletop position",
      "Place the heels close to the pelvis"
    ],
    "answer": 0,
    "a": "A sponge/ball or Fitness Circle placed between the knees (used across Ab Prep, Hundred, Roll Up, Spine Twist, Neck Pull, Double Leg Stretch and more) aids adductor connection and helps keep the legs parallel/adducted when that alignment is otherwise hard to hold.",
    "flag": "",
    "id": "mq93"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Which modification can be used when the spine is flat and spine flexion cannot be achieved?",
    "options": [
      "Place the shoulders on the arc barrel",
      "Use a spine supporter",
      "Place a fitness circle between both knees",
      "Place the hands behind the head",
      "Cross the arms over the chest"
    ],
    "answer": 0,
    "a": "The manual's 'Shoulders on Arc Barrel' modification (used for Scissors, Double Leg Stretch, Hundred, Slow Double Leg Stretch) is described as 'Assists abdominals with thoracic flexion... encouraging thoracic flexion' -- directly addressing an inability to achieve spinal flexion.",
    "flag": "",
    "id": "mq94"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "When performing a spine flexion exercise, which modification can reduce excessive neck tension?",
    "options": [
      "Cross the arms over the chest",
      "Place a fitness circle between both knees",
      "Place the hands behind the head",
      "Hold the fitness circle with both hands",
      "Place a fitness circle between the knees"
    ],
    "answer": 0,
    "a": "Crossing the arms over the chest is a standard low-leverage arm position (an Ab Prep/Hundred-family modification) that removes the ability to pull on the neck with hands-behind-head, reducing neck strain during spine-flexion work.",
    "flag": "",
    "id": "mq95"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "When performing a spine flexion exercise, which modification helps shoulder stability?",
    "options": [
      "Place a fitness circle between the knees",
      "Hold the fitness circle with both hands",
      "Cross the arms over the chest",
      "Reach the arms beside the torso as in Hundred"
    ],
    "answer": 1,
    "a": "The manual's Scissors modification 'Fitness Circle Resistance Ring Over Chest' is described as 'promotes greater awareness of scapular stability' -- a direct match for shoulder/scapular stability, as opposed to the between-the-knees version which targets adductor connection.",
    "flag": "",
    "id": "mq96"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "When performing Spine Twist, which modification can be used if the hamstrings are tight and the lumbar spine cannot maintain neutral?",
    "options": [
      "Place a pad between the knees",
      "Sit on a box",
      "Sit cross-legged",
      "Bend the knees",
      "Place the heels close to the pelvis"
    ],
    "answer": 2,
    "a": "Spine Twist modification #1 reads: 'Sit on Foam Cushion, Edge of Mat or Cross-Legged. For those with tightness in lower back, hamstrings and/or hip flexors.' Of the given options, 'sit cross-legged' matches this exact wording.",
    "flag": "",
    "id": "mq97"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Which statement correctly describes the supine position?",
    "options": [
      "Lie down with the nose facing the ceiling.",
      "Lie down with the nose facing the floor."
    ],
    "answer": 0,
    "a": "Supine means lying face-up, so the nose faces the ceiling (prone is face-down, nose to the floor).",
    "flag": "",
    "id": "mq98"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "When performing the prone position, what should be checked first in the starting position?",
    "options": [
      "Check whether the ASIS and pubic symphysis are touching the floor",
      "Check whether the lumbar erector spinae are overused and whether there is hyperextension",
      "Check whether the transverse abdominis is being used",
      "Check whether the ear opening, cervical spine, and midline of the torso are well aligned",
      "Check whether the scapulae are flat against the rib cage and stable"
    ],
    "answer": 0,
    "a": "STOTT's Basic Principles are taught in the order Breathing, Pelvic Placement, Rib Cage Placement, Scapular Movement & Stabilization, then Head & Cervical Placement. Checking that the ASIS and pubic symphysis both contact the floor (neutral pelvic placement) precedes rib cage, scapular and head/cervical checks.",
    "flag": "Inferred from the manual's Basic Principles ordering (Breathing, Pelvic Placement, Rib Cage, Scapular, Head/Cervical) rather than an explicit 'check this first in prone' statement -- the OCR did not preserve a dedicated prone-position checklist passage.",
    "id": "mq99"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe the hands-by-shoulders movement in Breast Stroke Prep. Choose the incorrect statement.",
    "options": [
      "The spine and pelvis are in neutral.",
      "It is an upper thoracic spine extension movement.",
      "The scapulae should be stable before beginning, and during upper thoracic spine extension, they dynamically stabilize with slight retraction, depression, and downward rotation.",
      "During the movement, the cervical, thoracic, and lumbar erector spinae are used concentrically.",
      "The gaze should be aligned so that the cervical spine follows the thoracic spine."
    ],
    "answer": 3,
    "a": "The manual's target-muscle list for this variant reads 'mid- and upper-back erector spinae concentrically to extend upper spine' -- not cervical, thoracic AND lumbar erector spinae. The lumbar spine stays neutral/stabilized, not extending concentrically.",
    "flag": "",
    "id": "mq100"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe the hands-by-hips movement in Breast Stroke Prep. Choose the incorrect statement.",
    "options": [
      "It is a hover extension movement.",
      "The gaze should be aligned so that the cervical spine follows the thoracic spine. Prepare with rounded shoulders, then on the exhale, move the scapulae into slight retraction, depression, and downward rotation, dynamically stabilizing them in a V shape.",
      "The palms should face the thighs.",
      "During spine extension, lengthen as if the head and toes are moving away from each other.",
      "During the movement, the mid-back erector spinae are used concentrically."
    ],
    "answer": 1,
    "a": "Per the manual's exercise steps, the scapular retraction to neutral happens on the INHALE ('INHALE open front of shoulders by retracting scapulae to neutral'), not the exhale -- the exhale is when the hover/extension itself occurs. The other four statements match the manual's starting position, cues and target-muscle text directly.",
    "flag": "Moderate confidence -- this hinges on a breath-timing detail (retraction on inhale vs. the statement's claim of exhale); the other four statements are more directly textually confirmed.",
    "id": "mq101"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "For a person with lordosis, which modification is essential when exercising in the prone position?",
    "options": [
      "Place a thin pad under the ASIS.",
      "Place a pad under the head.",
      "Perform it over two breaths.",
      "Place the upper body at the end of the mat.",
      "Wrap a flex band around the scapulae."
    ],
    "answer": 0,
    "a": "'Thin Pad Under ASIS. To prevent anterior pelvic tilt' is a recurring modification across the prone-extension family (Breast Stroke, Single Leg Extension, Swimming) specifically to protect a client with an exaggerated lumbar curve (lordosis).",
    "flag": "",
    "id": "mq102"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Half Roll Back. Choose the incorrect statement.",
    "options": [
      "It is performed with four breaths: inhale, exhale, inhale, exhale.",
      "Begin the movement by posteriorly tilting the pelvis so the ASIS move away from the femurs.",
      "It includes both flexion and extension of the spine.",
      "The gaze should be aligned so that the cervical spine follows the thoracic spine.",
      "The hands remain at shoulder height."
    ],
    "answer": 2,
    "a": "Half Roll Back's STABILITY is explicitly 'spine in flexion' throughout, and the FOCUS notes warn against 'rolling further than pelvis rolls, which unflexes spine.' Only the pelvis moves on the femurs (hip joint mobility); the spine stays in flexion the entire time and never goes into extension.",
    "flag": "",
    "id": "mq103"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Roll Up. Choose the incorrect statement.",
    "options": [
      "When performing Roll Up, do not push the head forward or round the shoulders to come up.",
      "During Roll Up and Roll Down, the movement must pass through imprint.",
      "If the abdominals are weak and the hip flexors are tight, bend both knees and use a modification that comes up only halfway, like Ab Prep. Use this modification as needed.",
      "Regardless of the hip joint, both legs must always maintain adduction.",
      "The abdomen should remain flat throughout the movement."
    ],
    "answer": 3,
    "a": "The Roll Up starting position explicitly allows the legs 'adducted or abducted hip-distance apart' -- adduction is not mandatory. All other statements match the manual (imprint is named twice in the exercise steps; the halfway/bent-knee modification and flat-abdomen cue are both documented).",
    "flag": "",
    "id": "mq104"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Spine Twist. Choose the incorrect statement.",
    "options": [
      "The movement begins from the pelvis.",
      "Move while lengthening the spine upward.",
      "Do not rotate only the head or create the movement with the arms.",
      "There should be no shifting of the spine.",
      "Work toward gradually creating controlled movement rather than using momentum."
    ],
    "answer": 0,
    "a": "The manual's STABILITY line is 'pelvis; spine during rotation' -- the pelvis stays stable/anchored, and SEQUENCING specifies rotation initiates 'from the lower spine moving up like a spiral, not from the shoulders.' The pelvis is a stabilizer, not the initiator of the movement.",
    "flag": "",
    "id": "mq105"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Rolling Like a Ball. Choose the incorrect statement.",
    "options": [
      "In the starting position, the center of gravity is behind the sit bones.",
      "There should be a lot of flexion in the upper thoracic spine.",
      "Roll along the center of the spine.",
      "The gaze looks far beyond the toes.",
      "After rolling and returning to the starting position, pause briefly and maintain balance."
    ],
    "answer": 3,
    "a": "The starting position specifies 'eye-focus approximately at knees' (illustration notes: 'eye gaze between knees or around toes') -- a close, inward focus, not a gaze that looks far beyond the toes.",
    "flag": "",
    "id": "mq106"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Scissors. Choose the incorrect statement.",
    "options": [
      "Regardless of leg movement, the torso square should be maintained.",
      "Place the hand on the same side as the bent leg on the ankle, and the hand on the extended-leg side on the knee.",
      "It is a movement that emphasizes coordination and endurance.",
      "Lower the legs only as far as the pelvis can remain stable.",
      "The gaze looks toward the navel."
    ],
    "answer": 1,
    "a": "The manual's exercise text says both hands 'reach hands toward ankle of flexed leg' together -- not one hand on the ankle and the other on the knee of the extended leg.",
    "flag": "",
    "id": "mq107"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Shoulder Bridge Prep modification: lift and lower pelvis. Choose the incorrect statement.",
    "options": [
      "A pad must always be placed behind the head.",
      "The rib cage should be well aligned between the shoulders and pelvis.",
      "The pelvis should be neutral.",
      "The center of gravity is in the upper thoracic region.",
      "If the shoulders roll forward, change the direction of the palms toward the hips."
    ],
    "answer": 0,
    "a": "Nothing in the manual's Shoulder Bridge Prep description mentions a head pad, and STOTT modifications are always situational/optional, never an absolute 'must always.' The other statements match documented cues (neutral pelvis, upper-thoracic center of gravity, rib cage alignment).",
    "flag": "",
    "id": "mq108"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Roll Over Prep. Choose the incorrect statement.",
    "options": [
      "It is a movement that creates movement in the lumbar spine.",
      "It is a movement that can develop abdominal strength.",
      "If there is too much neck tension or the abdominals are weak, place an arc barrel under the pelvis.",
      "The toes should not be crossed.",
      "Perform as much hip flexion as possible."
    ],
    "answer": 3,
    "a": "The manual explicitly instructs 'Roll Over Prep. Flex knees and CROSS ANKLES' -- directly contradicting the claim that the toes/feet should not be crossed.",
    "flag": "",
    "id": "mq109"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Side Kick. Choose the incorrect statement.",
    "options": [
      "The spine is neutral.",
      "If it is difficult to balance, use the modification of bending the knee of the bottom leg.",
      "When the leg reaches forward or backward, the pelvis should maintain neutral.",
      "Hip flexion is performed twice at the same angle.",
      "Hip extension is performed only once."
    ],
    "answer": 3,
    "a": "The manual's exercise steps say the leg reaches forward 'for two counts... Reach further on second count' -- the flexion angle increases on the second count rather than staying the same.",
    "flag": "",
    "id": "mq110"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Spine Stretch Forward. Choose the incorrect statement.",
    "options": [
      "It is a movement that emphasizes even flexion of the spine.",
      "In the starting position, the center of gravity is over the sit bones and the pelvis is neutral.",
      "If it is difficult to stabilize the pelvis while seated and to give feedback for spinal articulation, a standing modification leaning against a wall can be used.",
      "When flexing the spine, bend until the chest touches the legs.",
      "The erector spinae flex the spine eccentrically and extend the spine concentrically."
    ],
    "answer": 3,
    "a": "The manual emphasizes 'even spinal flexion' with the pelvis kept vertical throughout -- there is no instruction to bend until the chest touches the legs; that would be excessive, uneven flexion, contrary to the exercise's purpose.",
    "flag": "",
    "id": "mq111"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Breast Stroke. Choose the incorrect statement.",
    "options": [
      "It includes both upper thoracic extension and hover extension.",
      "Teach Breast Stroke Prep before teaching this movement.",
      "The movement should flow continuously and evenly without interruption.",
      "The height of the palms should align with the back-of-head line.",
      "For kyphosis, it is good to perform the movement at the end of an elevated mat."
    ],
    "answer": 3,
    "a": "Modification #4 reads 'Upper Body Off End of Mat. Good for kyphosis, by allowing flexion on reach forward' -- confirming statement 5. No manual text supports a 'palms align with back-of-head line' cue; by elimination this is the incorrect statement.",
    "flag": "",
    "id": "mq112"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Teaser Prep. Choose the incorrect statement.",
    "options": [
      "It is a movement for teaching proper spinal articulation.",
      "Teach in the order of half roll down → feet on mat in four breaths → one foot on mat.",
      "To exercise safely and accurately, teach the movement sequence, strengthen the abdominals and hips, and establish a neuromuscular pattern.",
      "If abdominal strength is weak during roll up or roll down, use the modification of lowering the hands toward the hips. Use this modification.",
      "It is a movement created only by the hip flexors."
    ],
    "answer": 4,
    "a": "The target muscles list both 'rectus abdominis and obliques' AND 'hip flexors' as concentric movers on roll up -- it is not created by the hip flexors alone.",
    "flag": "",
    "id": "mq113"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Swan Dive Prep modification: 4 breaths. Choose the incorrect statement.",
    "options": [
      "Perform extension on the inhale.",
      "In the starting position, abduct both legs shoulder-width apart.",
      "The cervical spine should connect well with the line of the thoracic spine.",
      "It should proceed in the order of hover extension → upper thoracic extension → full extension.",
      "To dynamically stabilize with spinal extension, the scapulae perform slight retraction, depression, and downward rotation."
    ],
    "answer": 0,
    "a": "The manual's 4-breath modification reads: 'INHALE stay. EXHALE stabilize scapulae and extend spine...' -- the extension itself happens on the EXHALE, not the inhale.",
    "flag": "",
    "id": "mq114"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Swimming Prep modification: contralateral arm and leg. Choose the incorrect statement.",
    "options": [
      "It is a movement for progressing toward the intermediate full movement.",
      "It is a movement that lifts the same-side arm and leg.",
      "It is a movement that emphasizes torso stability.",
      "The angles of hip extension and upper spine extension should be the same.",
      "Avoid excessive tension in the neck and shoulders."
    ],
    "answer": 1,
    "a": "The modification's own name is 'Contralateral Arm and Leg Reaching' -- 'Reach OPPOSITE arm and leg off mat' -- the opposite (contralateral) sides move together, not the same side.",
    "flag": "",
    "id": "mq115"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Leg Pull Front Prep modification 1: hands and knees at 90 degrees. Choose the incorrect statement.",
    "options": [
      "The spine and pelvis are neutral.",
      "Use the rectus abdominis to prevent lumbar hyperextension.",
      "It is a movement that emphasizes stability of the scapulae, pelvis, and hips.",
      "It is a movement that develops endurance.",
      "The knees lift only slightly from the floor and then lower."
    ],
    "answer": 1,
    "a": "The manual describes this prep as 'On hands and knees, spine and pelvis neutral... lift knees off mat (about two inches)... lower knees onto mat' -- matching statements 1, 3, 4 and 5 directly. Statement 2's specific muscle claim is not explicitly stated for this prep in the manual.",
    "flag": "Low-to-moderate confidence -- I could not find explicit manual text confirming or denying the 'rectus abdominis to prevent lumbar hyperextension' claim for this specific hands-and-knees prep (as opposed to the full Leg Pull Front); flagged rather than guaranteed.",
    "id": "mq116"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Side Bend Prep. Choose the incorrect statement.",
    "options": [
      "It is a movement that performs lateral flexion of the spine.",
      "The ipsilateral oblique on the lower side of the spine creates the movement concentrically.",
      "Before starting and during the movement, the scapula should remain stable.",
      "The torso square should face forward.",
      "Align the ankle and hand on the same line."
    ],
    "answer": 4,
    "a": "The manual's Side Bend Prep modification specifies 'Hand in line with knee' -- not the ankle. The other statements match the manual (lateral flexion, ipsilateral oblique concentric action, scapular stability via SEQUENCING).",
    "flag": "",
    "id": "mq117"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements describe Push Up Prep modification 1: knees down. Choose the incorrect statement.",
    "options": [
      "If the hip joints are tight, the legs may be abducted.",
      "Bend the elbows a total of three times, lowering gradually each time.",
      "Bend the elbows on the inhale.",
      "Perform the exercise while aligning the line from the ear opening, middle of the cervical spine, middle of the thoracic spine, to the greater trochanter.",
      "To emphasize the pectoralis, use the modification of bringing both hands together in a triangle shape."
    ],
    "answer": 4,
    "a": "The manual's Push Up Prep 'Hands Together' modification specifies fingers and thumbs forming a DIAMOND shape, not a triangle. (Note: the 'Knees Down' modification also explicitly says legs are 'adducted and parallel' with no abduction exception noted, so statement 1 is a secondary possible candidate.)",
    "flag": "Two statements conflict with the manual (the diamond/triangle wording, and the unsupported 'legs may be abducted' claim); I selected the diamond/triangle mismatch as the primary answer since it is an exact quoted-term substitution, but statement 1 is a plausible alternate.",
    "id": "mq118"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "From this list of movements (Rolling Like a Ball, Shoulder Bridge Prep, Heel Squeeze Prone (circle between ankle), Single Leg Extension, Breast Stroke Prep (hands by hip), Scissors, Leg Pull Front Prep (hands & knees), Push Up Prep (against wall), Roll Up (bend knee, legs abducted), Ab Prep), choose the movement that can strengthen the hip flexors.",
    "options": [
      "Rolling Like a Ball",
      "Shoulder Bridge Prep",
      "Heel Squeeze Prone (circle between ankle)",
      "Single Leg Extension",
      "Breast Stroke Prep (hands by hip)",
      "Scissors",
      "Leg Pull Front Prep (hands & knees)",
      "Push Up Prep (against wall)",
      "Roll Up (bend knee, legs abducted)",
      "Ab Prep"
    ],
    "answer": 5,
    "a": "Scissors' target muscles explicitly include 'hip flexors concentrically to flex at hip' as legs reciprocate -- the clearest dedicated hip-flexor strengthener in this list.",
    "flag": "Roll Up also uses hip flexors concentrically on roll up, but as a secondary mover after the abdominals, so Scissors is the more direct match.",
    "id": "mq119"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "From this list of movements (Rolling Like a Ball, Shoulder Bridge Prep, Heel Squeeze Prone (circle between ankle), Single Leg Extension, Breast Stroke Prep (hands by hip), Scissors, Leg Pull Front Prep (hands & knees), Push Up Prep (against wall), Roll Up (bend knee, legs abducted), Ab Prep), choose the movement that can strengthen the hip extensors.",
    "options": [
      "Rolling Like a Ball",
      "Shoulder Bridge Prep",
      "Heel Squeeze Prone (circle between ankle)",
      "Single Leg Extension",
      "Breast Stroke Prep (hands by hip)",
      "Scissors",
      "Leg Pull Front Prep (hands & knees)",
      "Push Up Prep (against wall)",
      "Roll Up (bend knee, legs abducted)",
      "Ab Prep"
    ],
    "answer": 3,
    "a": "Single Leg Extension's target muscles name 'unilateral gluteus maximus and hamstrings to extend one hip', and its MOBILITY is explicitly 'hips into extension' -- the most direct hip-extensor match (Shoulder Bridge Prep also uses hip extensors to bridge, but is a secondary candidate).",
    "flag": "Shoulder Bridge Prep is also a valid hip-extensor exercise; Single Leg Extension was chosen for its more explicit, unilateral hip-extensor muscle naming.",
    "id": "mq120"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "From this list of movements (Rolling Like a Ball, Shoulder Bridge Prep, Heel Squeeze Prone (circle between ankle), Single Leg Extension, Breast Stroke Prep (hands by hip), Scissors, Leg Pull Front Prep (hands & knees), Push Up Prep (against wall), Roll Up (bend knee, legs abducted), Ab Prep), choose the movement that can strengthen the serratus anterior.",
    "options": [
      "Rolling Like a Ball",
      "Shoulder Bridge Prep",
      "Heel Squeeze Prone (circle between ankle)",
      "Single Leg Extension",
      "Breast Stroke Prep (hands by hip)",
      "Scissors",
      "Leg Pull Front Prep (hands & knees)",
      "Push Up Prep (against wall)",
      "Roll Up (bend knee, legs abducted)",
      "Ab Prep"
    ],
    "answer": 7,
    "a": "The full Push Up's target muscles explicitly name 'scapular stabilizers, especially serratus anterior', and Push Up Prep against the wall is described as developing strength 'through scapular stabilizers and arms' in that same plank-loaded pattern.",
    "flag": "Leg Pull Front Prep (a plank-family exercise) is a plausible secondary candidate for scapular/serratus work, but Push Up has the explicit serratus anterior naming in the manual.",
    "id": "mq121"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "From this list of movements (Rolling Like a Ball, Shoulder Bridge Prep, Heel Squeeze Prone (circle between ankle), Single Leg Extension, Breast Stroke Prep (hands by hip), Scissors, Leg Pull Front Prep (hands & knees), Push Up Prep (against wall), Roll Up (bend knee, legs abducted), Ab Prep), choose the movement that can strengthen the obliques.",
    "options": [
      "Rolling Like a Ball",
      "Shoulder Bridge Prep",
      "Heel Squeeze Prone (circle between ankle)",
      "Single Leg Extension",
      "Breast Stroke Prep (hands by hip)",
      "Scissors",
      "Leg Pull Front Prep (hands & knees)",
      "Push Up Prep (against wall)",
      "Roll Up (bend knee, legs abducted)",
      "Ab Prep"
    ],
    "answer": 9,
    "a": "Ab Prep's target muscles name 'rectus abdominis and obliques concentrically' as the two co-primary movers -- the cleanest explicit oblique reference among this list (obliques are also named for Rolling Like a Ball, but there they mainly sustain the C-curve rather than being a co-primary mover).",
    "flag": "No exercise in this specific list is a dedicated rotation/oblique exercise (e.g. Saw, Spine Twist); Ab Prep was chosen as the clearest explicit 'rectus abdominis and obliques' pairing, but this pick is not exclusive.",
    "id": "mq122"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the muscle that is used isometrically in the Hundred movement.",
    "options": [
      "Rectus Abdominis",
      "Gluteus Medius",
      "Tensor Fascia Lata",
      "Adductor",
      "Oblique"
    ],
    "answer": 3,
    "a": "The manual's Hundred target muscles read: 'hip flexors, adductors and quadriceps isometrically' -- while rectus abdominis and obliques work concentrically to create/sustain thoracic flexion.",
    "flag": "",
    "id": "mq123"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the muscle that is used eccentrically in Double Leg Stretch.",
    "options": [
      "Latissimus Dorsi",
      "Vastus Medialis",
      "Semitendinosus",
      "Rectus Abdominis",
      "Rectus Femoris"
    ],
    "answer": 4,
    "a": "The manual states 'hip flexors eccentrically, as legs extend' for Double Leg Stretch. Rectus femoris is a hip flexor, matching this eccentric role during the leg-extension phase; rectus abdominis works concentrically/isometrically to sustain flexion, not eccentrically.",
    "flag": "",
    "id": "mq124"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "When rotating the spine to the right in the Oblique movement, choose the muscle that is used.",
    "options": [
      "Right external oblique concentrically",
      "Left external oblique concentrically",
      "Right internal oblique concentrically",
      "Left internal oblique concentrically",
      "None of the above"
    ],
    "answer": 4,
    "a": "The manual consistently describes rotation as created by 'contralateral internal and external obliques' working together (e.g. for Obliques, Saw, Obliques Roll Back, Spine Twist) -- a paired, bilateral action. No single muscle acting alone (as each of options 1-4 describes) is a complete description of what creates the rotation, so none of the above is the more accurate choice.",
    "flag": "This tests whether the single-muscle options are individually complete; the anatomically full answer is the contralateral pair (right internal oblique + left external oblique working together), which none of options 1-4 state as a pair.",
    "id": "mq125"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the correct position when placing the arc barrel under the pelvis.",
    "options": [
      "The pelvis is on the diagonal surface of the arc barrel closer to the legs.",
      "The pelvis is on the diagonal surface of the arc barrel closer to the shoulders.",
      "The pelvis is on the top of the arc barrel.",
      "None of the above."
    ],
    "answer": 2,
    "a": "Multiple modifications (Scissors, Roll Over, Shoulder Bridge) instruct 'Start with pelvis near TOP of Barrel' -- consistently the top surface, not a diagonal slope toward either the legs or shoulders.",
    "flag": "",
    "id": "mq126"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the correct position when placing the arc barrel under the hands to reduce pressure.",
    "options": [
      "Place it on the top of the arc barrel.",
      "Place it close to the diagonal surface that slopes from the top of the arc barrel toward the head.",
      "Place it close to the diagonal surface that slopes from the top of the arc barrel toward the pelvis.",
      "None of the above."
    ],
    "answer": 1,
    "a": "'Hands on Arc Barrel' modifications (Leg Pull Front, Push Up) state this 'lessens extension in wrists', implying the hands rest on the barrel's downward slope rather than its flat top, reducing the wrist-extension angle in a plank position facing toward the head-end of the setup.",
    "flag": "Low confidence -- the manual's 'Hands on Arc Barrel' modifications describe the wrist-pressure benefit but do not explicitly specify which diagonal slope (head-side vs. pelvis-side) the hands should be on; this answer is inferred from typical plank orientation, not a direct quote.",
    "id": "mq127"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "This is an explanation of what must be prepared before moving on to the Intermediate level. Choose the incorrect statement.",
    "options": [
      "You should have a good understanding of the basic principles.",
      "You should have good body awareness.",
      "Core strength should be better developed than arm and leg strength.",
      "You should be able to perform most of the exercises on the Essential chart.",
      "Strength, endurance, and overall physical fitness are tested through the power workout."
    ],
    "answer": 2,
    "a": "STOTT's readiness criteria emphasize balanced principles, body awareness and Essential-chart mastery rather than ranking core strength as needing to specifically exceed limb strength -- that particular framing does not match general STOTT progression guidance.",
    "flag": "No direct manual passage on Intermediate-readiness criteria was recoverable from the OCR; this answer is based on general STOTT pedagogy rather than a directly quoted source, so confidence is low.",
    "id": "mq128"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the movements that progressed from Essential to Intermediate among the following: Slow Double Leg Stretch, Shoulder Bridge, Roll Over, Teaser, Swimming.",
    "options": [
      "Slow Double Leg Stretch",
      "Shoulder Bridge",
      "Roll Over",
      "Teaser",
      "Swimming"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "a": "Each of these Intermediate exercises has an explicit Essential-level 'Prep' precursor on the manual's Essential Matwork chart (Double Leg Stretch -> Slow Double Leg Stretch; Shoulder Bridge Prep -> Shoulder Bridge; Roll Over Prep -> Roll Over; Teaser Prep -> Teaser; Swimming Prep -> Swimming), so all five qualify as progressions.",
    "flag": "",
    "id": "mq129"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the movements that progressed from Essential to Intermediate among the following: Slow Double Leg Stretch, Neck Pull, Swan Dive, Open Leg Rocker, Obliques Roll Back.",
    "options": [
      "Slow Double Leg Stretch",
      "Neck Pull",
      "Swan Dive",
      "Open Leg Rocker",
      "Obliques Roll Back"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "a": "Slow Double Leg Stretch, Neck Pull and Swan Dive each progress from an Essential-chart precursor (Double Leg Stretch, Neck Pull Prep, Swan Dive Prep). Open Leg Rocker has no Essential-level prep on the chart (it is newly introduced at Intermediate), and Obliques Roll Back is itself an Essential-level exercise, not an Intermediate progression of something else.",
    "flag": "",
    "id": "mq130"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the movements that are newly introduced in Intermediate, rather than progressed from Essential: Roll Over, Open Leg Rocker, Slow Double Leg Stretch, Hip Twist, Jack Knife.",
    "options": [
      "Roll Over",
      "Open Leg Rocker",
      "Slow Double Leg Stretch",
      "Hip Twist",
      "Jack Knife"
    ],
    "answer": [
      1,
      3,
      4
    ],
    "a": "Open Leg Rocker has no Essential-chart 'prep' precursor. Jack Knife's manual note says it progresses from Roll Over (itself Intermediate), not from an Essential exercise. Roll Over and Slow Double Leg Stretch both have clear Essential precursors (Roll Over Prep, Double Leg Stretch) and are excluded.",
    "flag": "Hip Twist's level is ambiguous across sources -- data/mat.js lists it as Essential (p.106), but this exam item and the manual's Intermediate chart formatting suggest it may be treated as intermediate-introduced; included with moderate confidence.",
    "id": "mq131"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Slow Double Leg Stretch. Choose the incorrect statement.",
    "options": [
      "Movement occurs only at the upper thoracic spine, hip, and knee joint.",
      "If abdominal strength is weak, a flex band can be used to prepare for the full movement.",
      "The legs extend low only within the range in which the pelvis can be stabilized.",
      "The arms move within the visual range while maintaining scapular and shoulder stability.",
      "This movement maintains upper thoracic flexion from the start using the rectus abdominis and obliques."
    ],
    "answer": 0,
    "a": "The word 'only' is the problem: the exercise clearly also involves active shoulder/arm movement (arms reach overhead, circle open and around) which is not one of the three joints listed. The other statements match the manual's FOCUS and target-muscle text directly.",
    "flag": "",
    "id": "mq132"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Slow Double Leg Stretch modification. Choose the incorrect statement.",
    "options": [
      "Place the flex band on the feet.",
      "Maintain lateral rotation of the legs.",
      "Place the shoulders on the arc barrel.",
      "Use a spine supporter.",
      "Hold the fitness circle with the hands."
    ],
    "answer": 4,
    "a": "The manual's four Slow Double Leg Stretch modifications are: Flex-Band Exerciser (around feet), Maintain Legs in Lateral Rotation, Shoulders on Arc Barrel, and Spine Supporter. Holding a fitness circle with the hands is not among them.",
    "flag": "",
    "id": "mq133"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Shoulder Bridge, comparing Essential and Intermediate versions. Choose the incorrect statement.\n\nEssential: (1) This movement occurs in hip joint extension and hip flexion. (2) It is less challenging for trunk rotation. (3) The hip extensor is mainly used. (4) Center of gravity is in the upper thoracic area. (5) The pelvis is neutral.\n\nIntermediate: (6) Movement occurs at the hip joint & knee joint. (7) Compared with Essential, it is more challenging for trunk rotation. (8) Hip extensor & obliques are used, & for leg movement, the hip flexor & hip extensor are used. (9) Center of gravity is in the upper thoracic area. (10) The pelvis is imprinted.",
    "options": [
      "Essential: This movement occurs in hip joint extension and hip flexion.",
      "Essential: It is less challenging for trunk rotation.",
      "Essential: The hip extensor is mainly used.",
      "Essential: Center of gravity is in the upper thoracic area.",
      "Essential: The pelvis is neutral.",
      "Intermediate: Movement occurs at the hip joint & knee joint.",
      "Intermediate: Compared with Essential, it is more challenging for trunk rotation.",
      "Intermediate: Hip extensor & obliques are used, & for leg movement, the hip flexor & hip extensor are used.",
      "Intermediate: Center of gravity is in the upper thoracic area.",
      "Intermediate: The pelvis is imprinted."
    ],
    "answer": 9,
    "a": "The full/Intermediate Shoulder Bridge's starting position and exercise steps both explicitly say 'pelvis and spine neutral' and 'stabilize pelvis and spine in neutral' throughout the bridge and leg movement -- the pelvis is neutral, not imprinted (imprint is only used in the separate Arc Barrel modification).",
    "flag": "",
    "id": "mq134"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Roll Over modification. Choose the incorrect statement.",
    "options": [
      "To develop strength in the abdominals and hip flexors, place the pelvis on the arc barrel and only perform lower and lift with the legs.",
      "To reduce the range of motion and teach how to roll over from the abdominal muscles, place the pelvis on the arc barrel and practice.",
      "To emphasize the lateral rotator muscles, practice while maintaining the legs in lateral rotation.",
      "To emphasize the abductors and abdominals, place a fitness circle between the ankles."
    ],
    "answer": 3,
    "a": "The manual's Fitness Circle Between Ankles modification reads 'To challenge ADDUCTORS, and to challenge abdominals' -- squeezing a ring between the ankles trains the adductors, not the abductors.",
    "flag": "",
    "id": "mq135"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Which modification can be used to emphasize hamstring connection (use) in the Roll Over movement?",
    "options": [
      "Plantar flexion",
      "Dorsi flexion",
      "Lateral rotation",
      "Medial rotation"
    ],
    "answer": 1,
    "a": "The manual's modification reads: 'Flex Feet on Roll Down. May help maintain connection with hamstring muscles.' Flexing the feet is dorsiflexion.",
    "flag": "",
    "id": "mq136"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about One Leg Kick, comparing Essential and Intermediate framing. Choose the incorrect statement.\n\nEssential: (1) The spine and pelvis are neutral. (2) Stability is in the lumbo-pelvic area and scapula. (3) The gaze looks toward the floor. (4) To avoid tension in the neck and shoulders, open the elbows wide so that the chest touches the floor. (5) Compared with the intermediate movement, endurance is less challenged.\n\nIntermediate: (6) The pubic bone is touching the floor, and the ASIS is lifted off. The hip joint is extended, and the spine is maintained as close as possible to neutral. (7) Stability is in the torso, lumbo-pelvic area, and scapula. (8) The gaze looks diagonally forward. (9) The elbows are positioned in front of the shoulders, and the shoulders should not collapse; they should be stabilized by the latissimus dorsi and teres major. They must remain stable. (10) Because hip extension must be maintained and the pelvis should be kept as close as possible to neutral, endurance is challenged.",
    "options": [
      "Essential: The spine and pelvis are neutral.",
      "Essential: Stability is in the lumbo-pelvic area and scapula.",
      "Essential: The gaze looks toward the floor.",
      "Essential: To avoid tension in the neck and shoulders, open the elbows wide so that the chest touches the floor.",
      "Essential: Compared with the intermediate movement, endurance is less challenged.",
      "Intermediate: The pubic bone is touching the floor, and the ASIS is lifted off. The hip joint is extended, and the spine is maintained as close as possible to neutral.",
      "Intermediate: Stability is in the torso, lumbo-pelvic area, and scapula.",
      "Intermediate: The gaze looks diagonally forward.",
      "Intermediate: The elbows are positioned in front of the shoulders, and the shoulders should not collapse; they should be stabilized by the latissimus dorsi and teres major. They must remain stable.",
      "Intermediate: Because hip extension must be maintained and the pelvis should be kept as close as possible to neutral, endurance is challenged."
    ],
    "answer": 3,
    "a": "One Leg Kick's starting position requires the upper body propped UP off the mat on the forearms ('one long line from tailbone to crown', ASIS lifted, hips in extension) -- the chest should never touch the floor; doing so would collapse the required propped/extended shape.",
    "flag": "",
    "id": "mq137"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Among the mat exercises, the term 'Teaser spine shape' is mentioned; choose the correct explanation(s).",
    "options": [
      "The center of gravity is on the sit bones.",
      "The lumbar spine is slightly flexed.",
      "The thoracic spine is lengthened.",
      "The gaze looks forward in line with the connection between the cervical and thoracic spine.",
      "The spine is in a vertical line."
    ],
    "answer": [
      1,
      2
    ],
    "a": "The manual describes the Teaser balance position exactly as 'with slight lumbar flexion and lengthened thoracic spine' -- both conditions apply together. Center of gravity is actually back of (not on) the sit bones, and the spine is curved (not vertical), so options 1 and 5 are incorrect.",
    "flag": "The original question asked for a single 'correct explanation,' but the manual's own defining sentence names two co-occurring facts (lumbar flexion AND lengthened thoracic spine); presented here as multi-select rather than forcing an arbitrary single pick.",
    "id": "mq138"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the incorrect statement about the difference between Jack Knife and Roll Over.\n\nJack Knife: (1) The starting position is pelvis neutral. (2) The breath when rolling over is inhale. (3) The rectus abdominis and obliques maintain spine flexion. However, here the gluteus maximus and hamstrings contract concentrically. (4) In the roll over position, hip extension is performed. (5) The lever is long.\n\nRoll Over: (6) The starting position is pelvis imprint. (7) The breath when rolling over is exhale. (8) The rectus abdominis and obliques maintain spine flexion. (9) In the roll over position, hip flexion is performed and the hip extensors are lengthened. (10) There is no change in the lever.",
    "options": [
      "Jack Knife: The starting position is pelvis neutral.",
      "Jack Knife: The breath when rolling over is inhale.",
      "Jack Knife: The rectus abdominis and obliques maintain spine flexion. However, here the gluteus maximus and hamstrings contract concentrically.",
      "Jack Knife: In the roll over position, hip extension is performed.",
      "Jack Knife: The lever is long.",
      "Roll Over: The starting position is pelvis imprint.",
      "Roll Over: The breath when rolling over is exhale.",
      "Roll Over: The rectus abdominis and obliques maintain spine flexion.",
      "Roll Over: In the roll over position, hip flexion is performed and the hip extensors are lengthened.",
      "Roll Over: There is no change in the lever."
    ],
    "answer": 0,
    "a": "The manual's Jack Knife starting position explicitly says 'Supine, IMPRINTED position' -- not neutral. This matches its identical opening line to Roll Over's own starting position, confirming both begin imprinted, not neutral.",
    "flag": "",
    "id": "mq139"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the incorrect statement about the target muscles of the Neck Pull movement.",
    "options": [
      "The hip flexors, obliques, and rectus abdominis roll up concentrically in that order.",
      "The hip flexors work eccentrically, while the rectus abdominis and obliques begin the roll down concentrically, then contract eccentrically when the lumbar spine reaches the floor.",
      "The erector spinae concentrically brings the spine upright.",
      "The hip extensors contract concentrically, and the pelvis tilts posteriorly during roll down.",
      "The transversus abdominis keeps the abdomen flat."
    ],
    "answer": 0,
    "a": "The manual's actual order is reversed: 'first rectus abdominis and obliques concentrically, THEN hip flexors concentrically to roll up' -- abdominals initiate, hip flexors follow, not hip flexors first.",
    "flag": "",
    "id": "mq140"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the movement(s) whose ESSENCE includes Balance.",
    "options": [
      "Rolling Like a Ball",
      "Jack Knife",
      "Open Leg Rocker",
      "Seal",
      "Teaser Series"
    ],
    "answer": [
      0,
      1,
      2,
      3,
      4
    ],
    "a": "All five exercises carry an explicit 'BALANCE:' line in their manual ESSENCE section (e.g. Rolling Like a Ball -- 'just back of sit-bones at top of movement'; Jack Knife -- 'on upper thoracic area, counterbalancing...'; Open Leg Rocker -- 'V-position against extended legs'; Seal -- 'on upper thoracic area on roll back...'; Teaser Series -- 'in V-position').",
    "flag": "The original question asked to 'choose the movement' (singular), but all five listed exercises verifiably carry an explicit Balance essence tag in the manual, so this is presented as multi-select rather than an arbitrary single pick.",
    "id": "mq141"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Which of the following is the name of this movement? Inhale: use the rectus abdominis and obliques concentrically to create deep lumbar spine flexion. Allow the thoracic spine to form a C-curve and maintain a rounded spine shape while rolling back. However, roll only as far as the upper thoracic area. Exhale: roll forward while maintaining the C-curve of the spine and keeping the center of gravity behind the sit bones. Then, while maintaining lumbar spine flexion, lengthen the thoracic spine and return to the starting position. The legs and torso form a V shape.",
    "options": [
      "Rolling Like a Ball",
      "Jack Knife",
      "Open Leg Rocker",
      "Seal"
    ],
    "answer": 2,
    "a": "This matches Open Leg Rocker's exercise text almost verbatim: 'initiate by deepening flexion of lumbar spine and allow thoracic spine to flex and create C-curve... roll backward, no further than upper thoracic area' on inhale, and 'roll forward, maintaining C-curve with weight back of sit-bones... Legs and torso create V shape' on exhale.",
    "flag": "",
    "id": "mq142"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Neck Pull modification. Choose the incorrect statement.",
    "options": [
      "If the full movement cannot be performed, teach the prep movement first.",
      "To challenge the hip extensor muscles and abdominals, use Neck Pull with hinge back. Use a modification in which the spine is maintained in neutral, the body hinges back, and then rolls down.",
      "If the pectorals are tight, place both hands in front of the forehead.",
      "If the lower back or hamstrings are tight, bend the knees.",
      "To avoid excessive use of the upper trapezius or pectorals and to provide slight assistance to the abdominals, extend both hands forward as the upper body rolls up."
    ],
    "answer": 1,
    "a": "The manual's 'Neck Pull With Hinge Back' modification says it 'Challenges abdominal and HIP FLEXOR strength' -- not hip extensor. The other statements match the manual's modification list exactly (hands at forehead for tight pectorals, bend knees for tight low back/hamstrings, reach arms forward to reduce trapezius/pectoral overuse).",
    "flag": "",
    "id": "mq143"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose all movements that can be prepared before teaching the Neck Pull movement.",
    "options": [
      "Half Roll Back",
      "Ab Prep",
      "Roll Up",
      "Double Leg Kick",
      "Side Bend"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "a": "Neck Pull is a hands-behind-head progression of the same sequential-flexion pattern taught in Ab Prep, Half Roll Back and Roll Up (Neck Pull Prep itself starts from a Half-Roll-Back-like position). Double Leg Kick (a prone extension exercise) and Side Bend (lateral flexion) belong to unrelated movement families.",
    "flag": "",
    "id": "mq144"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the common mistakes that often occur in the Neck Pull movement.",
    "options": [
      "The hands push the head so that the chin touches the torso.",
      "The abdomen is kept flat during the movement.",
      "The shoulder or neck muscles are overused instead of the abdominal muscles to come up.",
      "The spine cannot articulate one vertebra at a time, and a flat section drops down all at once.",
      "The heels lift off."
    ],
    "answer": [
      0,
      2,
      3,
      4
    ],
    "a": "Yanking the head/chin, overusing the trapezius/pectorals instead of the abdominals, failing to articulate vertebra-by-vertebra, and losing leg anchor (heels lifting) are all documented faults. 'The abdomen is kept flat' describes correct technique (the manual explicitly wants the transversus abdominis to keep the abdomen flat), not a mistake.",
    "flag": "",
    "id": "mq145"
  },
  {
    "topic": "Mat",
    "type": "multi",
    "q": "Choose the movements that are good to prepare before teaching Double Leg Kick.",
    "options": [
      "Heel Squeeze",
      "Swan Dive Prep",
      "Leg Pull Front Prep",
      "One Leg Kick",
      "Breast Stroke Prep 1, 2"
    ],
    "answer": [
      0,
      3,
      4
    ],
    "a": "The manual's own Double Leg Kick page notes 'Foundation: Breast Stroke Prep', and Double Leg Kick combines the knee-flexion pattern of One Leg Kick with the thoracic-extension pattern built by Breast Stroke Prep and glute activation from Heel Squeeze Prone. Swan Dive Prep and Leg Pull Front Prep belong to different movement families (rocking dive extension, and plank stability, respectively).",
    "flag": "",
    "id": "mq146"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the statement that correctly explains common mistakes that often occur in Double Leg Kick.",
    "options": [
      "In the prone position, the ASIS does not touch the floor.",
      "The pelvis moves when bending the knees.",
      "The upper body and lower body extend to the same height.",
      "The coordination of the movement is not performed smoothly.",
      "The head, neck, and back line are not aligned well."
    ],
    "answer": 1,
    "a": "The manual's FOCUS notes directly target this fault: 'maintain abdominal, gluteal and hamstring contraction to prevent pelvis tilting anteriorly during pulse' -- the pulse being the knee-bending phase, confirming pelvic movement during knee flexion is the documented common mistake being guarded against.",
    "flag": "Other options (ASIS lifting, poor coordination, misalignment) are also plausible general faults not explicitly ruled out by the manual text I could access; option 2 was chosen for its direct, explicit FOCUS-cue match.",
    "id": "mq147"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Among the following, which muscle should contract isometrically when performing Swan Dive?",
    "options": [
      "Triceps Brachii",
      "Biceps Brachii",
      "Gluteus Maximus",
      "Hamstring",
      "Gastrocnemius"
    ],
    "answer": 2,
    "a": "The manual's Swan Dive target muscles include 'erector spinae and hip extensors to maintain shape throughout', and ENDURANCE names 'spinal and hip extensors to maintain position throughout exercise' -- a sustained (isometric) holding action. Gluteus maximus is the primary hip extensor.",
    "flag": "Hamstrings are also hip extensors and technically fit the same 'hip extensors' description in the manual; gluteus maximus was chosen as the more commonly cited primary hip extensor.",
    "id": "mq148"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the item that is not a modification of Swan Dive.",
    "options": [
      "Rock and catch",
      "Slow rock",
      "On arc barrel under the pelvis",
      "Hands by hip",
      "Fitness circle between knee"
    ],
    "answer": 3,
    "a": "The manual's complete Swan Dive modification list is: Prep on Four Breaths, Prep on Two Breaths, With Slow Rock, On Arc Barrel, and Rock & Catch. 'Hands by hip' is not a Swan Dive modification -- it is actually the name of a Breast Stroke Prep hand position, a different exercise.",
    "flag": "'Fitness circle between knee' is also absent from the manual's Swan Dive modification list, so it is a second valid candidate for this answer; 'hands by hip' was chosen as the clearer 'borrowed from a different named exercise' trick.",
    "id": "mq149"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the item that is not a modification of the Swimming movement.",
    "options": [
      "Legs parallel: make both legs parallel",
      "Decrease speed: reduce the speed",
      "On arc barrel: lie prone on the arc barrel",
      "Hold flex band: hold the flex band with both hands",
      "Upper body off end of raised mat: place the upper body at the end of a raised mat"
    ],
    "answer": 3,
    "a": "The manual's complete Swimming Prep modification list (11 items) includes Legs Parallel, Decrease Speed, On Arc Barrel, and Upper Body Off End of Raised Mat, but never mentions a Flex-Band exerciser for Swimming.",
    "flag": "",
    "id": "mq150"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the incorrect statement about the difference between Leg Pull Front Prep and the full movement.\n\nLeg Pull Front Prep: (1) The lever is short. (2) The pelvis and spine are neutral. (3) There is slight movement at the ankle joint, but no movement at the hip joint. (4) The obliques and multifidus are less challenged in trunk rotation than in Intermediate. (5) Abductor, quadratus femoris, quadriceps, hip flexor contract isometrically.\n\nLeg Pull Front: (6) The lever is long. (7) The pelvis and spine are neutral. (8) Both the hip and ankle joints move. (9) The obliques and multifidus are greatly challenged in trunk rotation. (10) The hip extensor extends the leg concentrically and lowers the leg eccentrically.",
    "options": [
      "Prep: The lever is short.",
      "Prep: The pelvis and spine are neutral.",
      "Prep: There is slight movement at the ankle joint, but no movement at the hip joint.",
      "Prep: The obliques and multifidus are less challenged in trunk rotation than in Intermediate.",
      "Prep: Abductor, quadratus femoris, quadriceps, hip flexor contract isometrically.",
      "Full: The lever is long.",
      "Full: The pelvis and spine are neutral.",
      "Full: Both the hip and ankle joints move.",
      "Full: The obliques and multifidus are greatly challenged in trunk rotation.",
      "Full: The hip extensor extends the leg concentrically and lowers the leg eccentrically."
    ],
    "answer": 2,
    "a": "Statements 1, 2, 6, 7, 8 and 10 are all directly confirmed by the manual's Leg Pull Front/Prep text (short vs. long lever, neutral spine/pelvis, hip+ankle movement in the full version, concentric/eccentric hip extensor action). Statement 3's specific claim about the Prep's ankle/hip joint movement was the least directly supported in what I could verify.",
    "flag": "Moderate confidence only -- the manual text I could access for the hands-and-knees Prep does not explicitly confirm or deny ankle movement, and lifting the knees off the floor plausibly involves some hip-joint angle change, which would contradict this statement; flagged for uncertainty rather than fully confirmed.",
    "id": "mq151"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "Choose the incorrect statement about how to set the starting position before performing Side Bend.",
    "options": [
      "The torso square should face forward.",
      "The hand of the supporting arm should be aligned with the knee.",
      "The palm of the moving arm faces the floor.",
      "The pelvis and spine are neutral.",
      "The top leg is laterally rotated and placed in front of the bottom foot. The bottom leg places the center of gravity in front of the greater trochanter, crosses the ankles, and is placed behind the top foot."
    ],
    "answer": 2,
    "a": "The manual's starting position specifies the top (moving) arm rests 'on knee, palm UP' -- not facing the floor.",
    "flag": "Statement 2 is also a plausible candidate: the manual says the supporting hand is 'in line with hip' for the full Side Bend (the 'in line with knee' cue belongs to Side Bend Prep specifically), so this statement may also be incorrect. Selected statement 3 (palm direction) as the primary answer since it is a cleaner single-detail contradiction.",
    "id": "mq152"
  },
  {
    "topic": "Mat",
    "type": "mcq",
    "q": "The following statements are about Push Up. Choose the incorrect statement.",
    "options": [
      "On the exhale, articulate from the head and flex the spine sequentially.",
      "On the inhale, maintain spinal flexion, place the hands on the floor, and walk forward.",
      "Keep spine and pelvis neutral, on the inhale bend the elbows three times increasingly toward the floor.",
      "On the inhale, flex the spine from the head, maintain the C-curve, place the hands on the floor, and walk backward.",
      "On the exhale, articulate the spine from the head and bring the spine and pelvis to neutral."
    ],
    "answer": 4,
    "a": "The manual's finishing sequence reads 'EXHALE articulate spine through flexion from TAIL to neutral standing position' -- the return to standing articulates from the tail, not from the head.",
    "flag": "Statements 1 and 2 also appear to mismatch the manual's breath sequence when checked closely (the manual has the initial bend-down happening on INHALE, not exhale, and the walk into plank happening on EXHALE, not inhale), so confidence on isolating a single 'the' error is only moderate; statement 5 (head vs. tail) was chosen as the cleanest single-term substitution.",
    "id": "mq153"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which of the following is the best description of Kyphosis-Lordosis posture?",
    "options": [
      "Cervical spine hyperextended, scapula protracted, thoracic spine flat, hip flexed",
      "Cervical spine hyperextended, thoracic spine increased flexed, pelvis anterior tilt",
      "Scapula protracted, thoracic spine increased flexed, lumbar spine hyperextended, hip extended",
      "Thoracic spine increased flexed, lumbar spine hyperextended, pelvis anterior tilt, hip extended",
      "Cervical spine neutral, thoracic spine increased flexed, lumbar spine hyperextended, pelvis anterior tilt"
    ],
    "answer": 1,
    "a": "Verified against the Green Book: 'Head forward, cervical spine hyperextended, scapulae abducted, increased flexion in thoracic spine (kyphosis), lumbar spine hyperextended (lordosis), pelvis anteriorly tilted, hip joints flexed...'. Option 2 is the only option where every clause matches: cervical hyperextended, thoracic increased flexion, pelvis anterior tilt. The other options each swap one clause: option 1 says thoracic 'flat' (wrong, should be increased flexed); options 3 and 4 say 'hip extended' (wrong, should be flexed); option 5 says cervical 'neutral' (wrong, should be hyperextended).",
    "flag": "",
    "id": "mq154"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which of the following is the best description of Military-Type posture?",
    "options": [
      "Head neutral, cervical spine normal curve, thoracic spine normal curve, pelvis anterior tilt",
      "Head forward, cervical spine hyperextended, thoracic spine normal curve, pelvis posterior tilt",
      "Cervical spine flat, upper thoracic spine increased flexed, lumbar spine hyperextended",
      "Cervical spine flat, lumbar spine hyperextended, pelvis anterior tilt, knee joint neutral",
      "Thoracic spine normal curve, lumbar spine neutral, pelvis neutral, knee joint hyperextended"
    ],
    "answer": 0,
    "a": "Verified against the Green Book: 'Head: Neutral position. Cervical Spine: Normal curve, slightly anterior. Thoracic Spine: Normal curve, slightly posterior. Lumbar Spine: Hyperextended (lordosis). Pelvis: Anterior tilt.' Only option 1 matches all four clauses (head neutral, cervical normal, thoracic normal, pelvis anterior tilt). The other options each contain a wrong clause: option 2 has head forward/cervical hyperextended/pelvis posterior tilt (these describe Sway-Back-like traits, not Military); options 3-4 wrongly say cervical is 'flat'; option 5 wrongly says lumbar/pelvis are neutral (Military has lumbar hyperextension and anterior pelvic tilt).",
    "flag": "",
    "id": "mq155"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which of the following is the best description of Sway-Back posture?",
    "options": [
      "Knee joint hyperextended, hip joint hyperextended with anterior displacement of pelvis, pelvis posterior tilt, thoracic spine increased flexed, cervical spine slightly extended",
      "Hip joint hyperextended with anterior displacement of pelvis, pelvis posterior tilt, thoracic spine increased flexed (long kyphosis) with posterior displacement of upper trunk, cervical spine slightly extended, head forward",
      "Hip joint hyperextended with anterior displacement of pelvis, pelvis posterior tilt, thoracic spine increased flexed (long kyphosis) with posterior displacement of upper trunk, cervical spine neutral, head neutral",
      "Knee joint hyperextended, hip joint hyperextended with posterior displacement of pelvis, pelvis posterior tilt, thoracic spine increased flexed (long kyphosis) with posterior displacement of upper trunk, cervical spine slightly extended",
      "Knee joint neutral, hip joint extended, pelvis posterior tilt, lumbar flat, thoracic spine increased flexed (long kyphosis)"
    ],
    "answer": 1,
    "a": "Verified against the Green Book's exact Sway-Back description: 'Head forward, cervical spine slightly extended, increased flexion in thoracic spine (long kyphosis) with posterior displacement of upper trunk, flexion (flattening) of low lumbar area, pelvis posteriorly tilted, hip joints hyperextended with anterior displacement of pelvis, knee joints hyperextended, ankle joints neutral.' Option 2 matches this wording almost verbatim (hip/anterior displacement, pelvis posterior tilt, thoracic 'long kyphosis with posterior displacement of upper trunk', cervical slightly extended, head forward). Options 3, 4, and 5 each contain a clearly swapped clause: option 3 wrongly says cervical neutral/head neutral (should be slightly extended/forward); option 4 wrongly says 'posterior displacement of pelvis' (should be anterior); option 5 wrongly says knee neutral/hip extended (should be hyperextended).",
    "flag": "Option 1 (leading with 'Knee joint hyperextended...') is also fully consistent with the verified breakdown and contains no wrong clause -- it just omits 'head forward' and abbreviates the thoracic description. I chose option 2 because its wording is the closer verbatim match to the Green Book's official Sway-Back description (exact phrase 'long kyphosis... with posterior displacement of upper trunk' plus 'head forward'), but genuine ambiguity exists between options 1 and 2 since neither contradicts the verified source.",
    "id": "mq156"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which of the following is the best description of Flat-Back posture?",
    "options": [
      "Ankle joint slightly plantar flexion, knee joint extended, pelvis posterior tilt, thoracic spine flat, upper thoracic spine increased flexed, lower thoracic spine flat",
      "Ankle joint slightly plantar flexion, knee joint extended, pelvis posterior tilt, thoracic spine increased flexed, cervical spine slightly extended",
      "Ankle joint hyperextended, knee joint extended, pelvis anterior tilt, thoracic spine increased flexed, cervical spine slightly extended",
      "Pelvis anterior tilt, lumbar flexed, upper thoracic spine increased flexed, lower thoracic spine straight",
      "Cervical spine flat, thoracic spine flat, lumbar spine flexed, hip joint neutral"
    ],
    "answer": 0,
    "a": "Verified against the Green Book: 'Thoracic Spine: Upper part increased flexion; lower part, straight... Pelvis: Posterior tilt... Knee Joints: Extended... Ankle Joints: Slight plantar flexion.' Option 1 precisely captures the defining upper-vs-lower thoracic distinction that is the hallmark of Flat Back (upper thoracic increased flexion, lower thoracic flat/straight), plus correct ankle, knee, and pelvis clauses. Option 3 has pelvis anterior tilt (wrong, should be posterior) and ankle hyperextended (not a valid descriptor); option 4 has pelvis anterior tilt (wrong); option 5 has cervical 'flat' and hip 'neutral' (both wrong -- should be slightly extended and extended respectively).",
    "flag": "",
    "id": "mq157"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "Which posture does this programming description most likely apply to? 'Use a pad under the head in supine exercises. First work in imprint at the beginning of the workout and then strengthen obliques with thoracic flexion. Progress to working in neutral as much as possible during exercise. In sitting, align the rib cage directly over the pelvis. Likely need to sit on a pillow or a cushion.'",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 2,
    "a": "Matches the Green Book's Sway-Back programming recommendations almost verbatim: 'Work in imprint first and thoracic flexion to strengthen obliques. Progress to working in neutral as much as possible... Ensure rib cage is aligned over pelvis in sitting position. Probably need to sit on a cushion.'",
    "flag": "",
    "id": "mq158"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "Which posture does this programming description most likely apply to? 'Use a pad under the head in supine exercises. Work in imprint as much as possible. If the hip flexors are gripping, place the top leg(s) over an arc barrel or table. Emphasize thoracic extension.'",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 0,
    "a": "Matches the Green Book's Kyphosis-Lordosis programming recommendations: 'Work in imprint as much as possible... legs over Arc Barrel if hip flexors are gripping. Emphasize thoracic extension, lumbar flexion, upper back extensors, and scapular stabilization.'",
    "flag": "",
    "id": "mq159"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "The following is Layer 1 of a posture-specific mat program. Which posture does it describe? Warm up: breathing over an arc barrel, imprint and release, hip release with imprint, cat stretch, hip rolls, arm circles, elevation/depression of scapula. Exercises: Ab prep (hands behind head, legs over arc barrel, imprinted), Breast stroke prep 1 & 2 (over arc barrel), Shell stretch, Half roll back (hold in flex-bend), One leg circle (both knees bent), Spine twist (sit on a box or cross-legged), Oblique prep (legs over arc barrel, with imprint), Spine stretch forward (against a wall).",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 0,
    "a": "Matches the Green Book's Kyphosis-Lordosis Essential Matwork Layer 1 list almost exercise-for-exercise: Ab Prep hands behind head (imprinted), Breast Stroke Preps 1&2, Shell Stretch, Half Roll Back, One Leg Circle, Spine Twist, Obliques, and 'Spine Stretch Forward against wall' -- this last phrase is an exact textual match unique to the Kyphosis-Lordosis Layer 1 list.",
    "flag": "",
    "id": "mq160"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "Which posture does this programming description most likely apply to? 'Use a pad under the head during supine exercises. Work in neutral as much as possible. Work on thoracic flexion. Emphasize increasing mobility in the spine and restoring normal spinal curve.'",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 1,
    "a": "Matches the Green Book's Flat-Back programming recommendations verbatim: 'Work in neutral as much as possible. Work thoracic flexion. Emphasis is on increasing mobility in spine and restoring normal spinal curves.'",
    "flag": "",
    "id": "mq161"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "The following is Layer 1 of a posture-specific mat program. Which posture does it describe? Warm up: breathing over arc barrel, imprint and release, hip release, spinal rotation, cat stretch, hip rolls, scapula isolation, arm circles, head nod, elevation/depression of scapula. Exercises: Ab prep, Breast stroke prep 1 & 2 (over arc barrel), Shell stretch, Roll up (half, hold flex-band), One leg circle (both knees bent), Spine twist (sit on a box or cross-legged), Rolling like a ball prep, Single leg stretch, Oblique (prep, feet down), Spine stretch forward (sit on a box or cross-legged), Single leg extension, Swan dive prep.",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 1,
    "a": "Matches the Green Book's Flat-Back Essential Matwork exercise list: Ab Prep, Breast Stroke Preps 1&2, Shell Stretch, Roll Up, One Leg Circle (both legs bent), Spine Twist (cross-legged, on a cushion or arc barrel), Rolling Like a Ball (feet down), Single Leg Stretch, and 'Obliques (feet down)' -- the 'feet down' oblique variant and longer exercise count (Flat Back 'can do more exercises than the other 2' per the Green Book) distinguish this from the Kyphosis-Lordosis and Sway-Back Layer 1 lists.",
    "flag": "",
    "id": "mq162"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "The following is Layer 1 of a posture-specific mat program. Which posture does it describe? Warm up: breathing over arc barrel, imprint and release, hip release, spinal rotation, cat stretch, hip rolls, scapula isolation, arm circles, head nod, elevation/depression of scapula. Exercises: Ab prep (hands behind head), Breast stroke prep 1 & 2, Shell stretch, Half roll back, One leg circle (both knees bent), Spine twist (sit on a box or cross-legged), Rolling like a ball prep, Oblique (prep, table top legs), Spine stretch forward (sit on a box or cross-legged), Single leg extension, Swan dive prep.",
    "options": [
      "Kyphosis-Lordosis",
      "Flat Back",
      "Sway Back",
      "Military Type"
    ],
    "answer": 2,
    "a": "Matches the Green Book's Sway-Back Essential Matwork exercise list: 'Ab Prep hands behind head, Breast Stroke Preps 1&2, Shell Stretch, Half Roll Back...' -- 'Ab Prep hands behind head' and 'Half Roll Back' are the exact phrases used in the Sway-Back list (Flat-Back's list instead uses plain 'Ab Prep' and 'Roll Up'), and the 'Oblique, table top legs' variant matches the Sway-Back list rather than Flat-Back's 'feet down' variant.",
    "flag": "",
    "id": "mq163"
  },
  {
    "topic": "Programming",
    "type": "order",
    "q": "When designing a general STOTT Pilates program, put the following 8 points in the correct order.",
    "options": [
      "Apply the STOTT Pilates Principles included in the warm-up",
      "Mobilize the spine in various movements (flexion, rotation, extension)",
      "Mobilize the shoulder and hip joints and add various movements",
      "Build initial strengthening of the core (basic strength of core)",
      "Build initial strengthening of the periphery (basic strength of legs/arms)",
      "Build further on strength and endurance of core and periphery",
      "Build up stamina and pace (cardiorespiratory system and speed)",
      "Increase challenge to coordination, balance and strength"
    ],
    "a": "Directly sourced from the Green Book's 'Designing a STOTT Pilates Program' basic sequence: 1) Principles in warm-up, 2) Mobilize spine, 3) Mobilize shoulder/hip joints, 4) Initial strengthening of core, 5) Initial strengthening of periphery, 6) Further strength/endurance of core and periphery, 7) Stamina and pace, 8) Coordination/balance/strength challenge. Steps 1-5 are aimed to be covered in the first session; mastering Essential level brings a client to step 7.",
    "flag": "",
    "id": "mq164"
  },
  {
    "topic": "Postural Analysis",
    "type": "order",
    "q": "When performing a detailed postural assessment, in what order are the following checked?",
    "options": [
      "Alignment of the plumb line",
      "Alignment of each body segment",
      "Side view",
      "Front view",
      "Back view"
    ],
    "a": "Matches the posture manual's CHECK 1 through CHECK 5 structure: CHECK 1 = Plumb Line, CHECK 2 = Segmental (body-segment) alignment, CHECK 3 = Side View (detail), CHECK 4 = Front View (detail), CHECK 5 = Back View (detail).",
    "flag": "",
    "id": "mq165"
  },
  {
    "topic": "Postural Analysis",
    "type": "order",
    "q": "Put the following items in the order they are assessed when examining the side view in detail.",
    "options": [
      "Ankle joint",
      "Knee",
      "Hip",
      "Pelvis",
      "Lumbar spine",
      "Thoracic spine",
      "Cervical spine",
      "Head"
    ],
    "a": "Sourced directly from the Green Book's Bony Landmark Reference Guide, Side View section: ankle joints -> knees -> hip joints -> pelvis -> lumbar spine -> lower thoracic spine -> upper thoracic spine -> cervical spine -> head (lower/upper thoracic collapsed into one 'thoracic spine' item to match the item set given).",
    "flag": "",
    "id": "mq166"
  },
  {
    "topic": "Postural Analysis",
    "type": "order",
    "q": "Put the following items in the order they are assessed when examining the front view in detail.",
    "options": [
      "Feet",
      "Knee",
      "Pelvis",
      "Ribcage",
      "Shoulder",
      "Head"
    ],
    "a": "Sourced directly from the Green Book's Bony Landmark Reference Guide, Front View section: feet -> knees -> pelvis -> rib cage -> shoulders -> head.",
    "flag": "",
    "id": "mq167"
  },
  {
    "topic": "Postural Analysis",
    "type": "order",
    "q": "Put the following items in the order they are assessed when examining the back view in detail.",
    "options": [
      "Feet",
      "Femur",
      "Pelvis",
      "Scapula",
      "Humerus"
    ],
    "a": "Sourced directly from the Green Book's Bony Landmark Reference Guide, Back View section: feet -> femurs -> pelvis -> scapulae -> humeri.",
    "flag": "",
    "id": "mq168"
  },
  {
    "topic": "Postural Analysis",
    "type": "multi",
    "q": "To assess the greater trochanter, examine two points. Which two are they?",
    "options": [
      "Lumbar spine",
      "Pelvis",
      "Hip joint",
      "Ankle joint",
      "Knee joint"
    ],
    "answer": [
      2,
      4
    ],
    "a": "The Bony Landmark Reference Guide uses the greater trochanter twice: for Knee joint ('use greater trochanter and anterior to lateral malleolus and relate to plumb line') and for Hip joint ('palpate greater trochanter and compare' against the ASIS-PSIS midpoint).",
    "flag": "",
    "id": "mq169"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Between the ASIS and PSIS, the iliac crest, and the greater trochanter -- when locating and marking the midpoint of the iliac crest, what is being assessed?",
    "options": [
      "Lumbar spine",
      "Pelvis",
      "Hip joint",
      "Ankle joint",
      "Knee joint"
    ],
    "answer": 2,
    "a": "The Green Book's Bony Landmark Reference Guide lists this exact method under Hip joints: 'Palpate ASIS and PSIS to find the midpoint of the iliac crest. Palpate greater trochanter and compare.'",
    "flag": "",
    "id": "mq170"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When locating and marking the PSIS, what is being assessed?",
    "options": [
      "Lumbar spine",
      "Pelvis",
      "Hip joint",
      "Ankle joint",
      "Knee joint"
    ],
    "answer": 1,
    "a": "The Bony Landmark Reference Guide lists PSIS palpation under Pelvis, both from the side view ('Palpate ASIS and PSIS and compare to horizontal plane') and back view ('Palpate each PSIS and compare').",
    "flag": "",
    "id": "mq171"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing the medial and lateral epicondyles (condyles) of the femur from the back, what is being assessed?",
    "options": [
      "Femur",
      "Pelvis",
      "Hip joint",
      "Ankle joint",
      "Knee joint"
    ],
    "answer": 0,
    "a": "The Bony Landmark Reference Guide's Back View section lists 'Palpate femoral condyles' under the 'femurs' category (used to assess medial/lateral rotation of the femur), not under hip joint or knee joint.",
    "flag": "Moderate confidence -- the source lists this palpation under a 'femurs' category rather than explicitly using the word 'Femur' as the assessed item, so the mapping to option (a) is a reasonable but not word-for-word match.",
    "id": "mq172"
  },
  {
    "topic": "Postural Analysis",
    "type": "multi",
    "q": "When checking the angle of the scapula, which of the following statements are correct?",
    "options": [
      "Lie prone and find C7.",
      "Follow the spine of the scapula to the medial border and go to T3.",
      "Find T1 at the superior angle of the scapula.",
      "Find T7 at the inferior angle of the scapula."
    ],
    "answer": [
      1,
      3
    ],
    "a": "The posture manual's own scapula-palpation notes confirm the spine of the scapula (medial border 'root') aligns with T3 ('root of spine of scapula -> T3'). The inferior angle of the scapula aligning with T7 is standard anatomical landmark knowledge consistent with the Kendall reference this manual reprints from. The superior angle corresponds to T2 (not T1), making statement 3 the swapped/incorrect one.",
    "flag": "Statement 1 ('lie prone and find C7') is plausible as a starting reference point but is not explicitly confirmed in the source materials as part of this specific scapula-angle check, so it was left out of the answer key rather than marked correct without direct support.",
    "id": "mq173"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing pelvic tilt from the side view, which of the following is NOT one of the categories used?",
    "options": [
      "Neutral",
      "Flexed",
      "Anterior tilt",
      "Posterior tilt"
    ],
    "answer": 1,
    "a": "The Postural Analysis Guide Checklist lists only three pelvic-tilt categories for the side view: neutral, anterior pelvic tilt, and posterior pelvic tilt. 'Flexed' is not a valid pelvic-tilt descriptor (the pelvis tilts, it does not 'flex').",
    "flag": "",
    "id": "mq174"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing the ribcage from the front view, which of the following is NOT one of the categories used?",
    "options": [
      "Popping",
      "Shift",
      "Rotate",
      "Elevate"
    ],
    "answer": 0,
    "a": "The Postural Analysis Guide Checklist's formal ribcage categories are neutral, elevated, shifted, and rotated (clockwise/counter-clockwise). 'Popping' is used elsewhere in the manual as an informal/colloquial observation (e.g. 'is rib cage popping?') rather than a formal checklist category.",
    "flag": "",
    "id": "mq175"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing leg alignment from the front view, if the femur is abducted and the tibia is adducted, what type of leg shape is this?",
    "options": [
      "O-leg",
      "X-leg",
      "Y-leg",
      "11-leg"
    ],
    "answer": 1,
    "a": "The posture manual pairs 'X-leg / Knock-Kneed' with this pattern (knees moving inward relative to the feet), as opposed to 'O-leg / bow-legged' which describes the opposite (outward) pattern.",
    "flag": "",
    "id": "mq176"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing the scapula from the back view, which of the following is NOT included?",
    "options": [
      "Protraction",
      "Retraction",
      "Circumduction",
      "Elevation",
      "Depression"
    ],
    "answer": 2,
    "a": "The Postural Analysis Guide Checklist's back-view scapula categories are: neutral, protracted, retracted, elevated, depressed, upwardly rotated, downwardly rotated, winging, and anteriorly tipped. Circumduction is not among them.",
    "flag": "",
    "id": "mq177"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When assessing the bottom of the ribcage (costal margin), which of the following should be assessed?",
    "options": [
      "Ribcage rotation",
      "Ribcage shift",
      "Ribcage elevation",
      "Ribcage tilt"
    ],
    "answer": 0,
    "a": "The posture manual's 'Last rib' check (12th rib) is described as checking left/right height and 'whether the direction is inward or outward' -- this describes a rotational assessment. Note the formal ribcage checklist categories are only elevated/shifted/rotated (no 'tilt' category exists for ribcage), which further supports rotation over tilt.",
    "flag": "Moderate confidence -- the source does not explicitly label the costal-margin check as 'rotation'; this is inferred from the 'inward/outward direction' language used alongside the rotation check in the same section.",
    "id": "mq178"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "To assess scapular upward and downward rotation, which is the correct method?",
    "options": [
      "Palpate the inferior angle of the scapula to assess elevation.",
      "Palpate the lateral border of the scapula to assess the gap (distance to the spine).",
      "Palpate the medial border of the scapula to assess the distance from the spine.",
      "Palpate the superior angle of the scapula to assess the angle."
    ],
    "answer": 2,
    "a": "The posture manual states: 'rotation: medial border should be parallel to spine' -- if the medial border is not parallel (i.e. its distance from the spine varies top-to-bottom), that indicates upward or downward rotation. The medial border is the landmark used for this check per the source.",
    "flag": "Moderate confidence -- the source's exact wording for rotation emphasizes checking whether the medial border is 'parallel to the spine' rather than 'distance from spine' (that exact 'distance' phrasing appears in the source for protraction/retraction, a related but separate check). Option 4 (superior angle) could not be ruled out with full certainty.",
    "id": "mq179"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "From the side view, to assess lumbar spine curvature, between which two landmarks is the distance/curve measured?",
    "options": [
      "Between the spine of scapula and the inferior angle of scapula",
      "Between the inferior angle of scapula and the inferior angle of the last rib",
      "Between the inferior angle of the last rib and the iliac crest",
      "Between the inferior angle of scapula and the iliac crest"
    ],
    "answer": 2,
    "a": "The lumbar region anatomically spans from roughly the last rib down to the iliac crest, which best matches option 3.",
    "flag": "Low-moderate confidence -- this specific landmark-to-landmark distance method for lumbar curvature was not found explicitly stated in the source materials; the answer is inferred from anatomical region boundaries rather than a directly quoted source passage. The source materials instead describe lumbar curvature assessment via direct fingertip palpation of L1-L5 ('use fingertips, push into the lumbar to find the curve'), not a two-landmark distance measurement.",
    "id": "mq180"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Ankle inversion is being assessed. Which statement is correct?",
    "options": [
      "The center is on the top of the medial malleolus.",
      "The medial arch of the foot has decreased.",
      "A line drawn horizontally from the lateral malleolus meets the lateral border of the foot.",
      "It is reflected in the shape/angle of the Achilles (calcaneal) tendon."
    ],
    "answer": 3,
    "a": "The posture manual's back-view foot assessment explicitly lists 'examine common calcaneal tendons' as a method for assessing foot inversion/eversion (the tendon angle indicates whether the foot is inverting/supinating or everting/pronating).",
    "flag": "Low-moderate confidence -- option 4's exact source phrasing is garbled/incomplete in the original document ('It is the shape of the Achilles tendon ( )'), and options 1-3 could not be definitively ruled out from the available source text.",
    "id": "mq181"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "From the side view, when assessing the ankle joint, what should be checked?",
    "options": [
      "Greater trochanter",
      "Tibia",
      "Medial malleolus",
      "Lateral epicondyle of the femur"
    ],
    "answer": 1,
    "a": "The Green Book states the ankle joint angle is 'created by the front of the shin and of the foot' -- 'front of the shin' corresponds to the tibia.",
    "flag": "Minor uncertainty -- other sources consistently reference the lateral malleolus (not offered as an option here) as the key ankle landmark for the plumb line; 'Tibia' was chosen because it is the closest direct textual match ('front of the shin') among the options actually given in the source document.",
    "id": "mq182"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "From the back view, the humerus is positioned anteriorly (i.e. the olecranon faces outward). Which item should be assessed/recorded?",
    "options": [
      "Medial rotation",
      "Neutral",
      "Lateral rotation"
    ],
    "answer": 0,
    "a": "The posture manual's method for humeral rotation states: 'locate olecranon process -- facing out = medial rotate, facing in = lateral rotate, facing back = neutral.' An anteriorly-positioned/protracted humerus with the olecranon facing outward corresponds to medial rotation, which is also the only rotation category listed on the Postural Analysis Guide Checklist for humeri (neutral / medially rotated).",
    "flag": "",
    "id": "mq183"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "What is the purpose of performing a forward roll-down to check spinal alignment?",
    "options": [
      "To check if the articulations of the spine move well",
      "To check if the alignment of the spine is maintained",
      "To check if the spinal muscles are flexible",
      "None of the above"
    ],
    "answer": 0,
    "a": "The posture manual states directly: 'check if there's articulation of spine, by rolling up/down while standing' -- confirming the primary purpose is assessing segmental/sequential spinal movement (articulation), consistent with the Roll Down's documented purposes (checking for flat spots and observing sequential movement).",
    "flag": "",
    "id": "mq184"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "If the scapula is winging, which muscle should be strengthened?",
    "options": [
      "Serratus posterior superior",
      "Serratus posterior inferior",
      "Serratus anterior",
      "Rhomboids"
    ],
    "answer": 2,
    "a": "Scapular winging is classically caused by serratus anterior weakness/dysfunction; strengthening serratus anterior is the standard corrective approach.",
    "flag": "",
    "id": "mq185"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "If the legs form an X-shape (knock-knees), which muscle group should be strengthened?",
    "options": [
      "Hip abductors",
      "Hip adductors",
      "Abdominals",
      "Knee extensors",
      "Dorsiflexors"
    ],
    "answer": 0,
    "a": "X-leg/knock-knee posture is associated with weak hip abductors (e.g. gluteus medius), which allows excessive femoral adduction; strengthening the hip abductors is the standard corrective approach.",
    "flag": "",
    "id": "mq186"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "If the humerus is medially rotated, which muscle should be strengthened?",
    "options": [
      "Anterior deltoid",
      "Infraspinatus",
      "Teres major",
      "Subscapularis",
      "Supraspinatus"
    ],
    "answer": 1,
    "a": "A medially (internally) rotated humerus is corrected by strengthening the external/lateral rotators. Infraspinatus is a rotator-cuff external rotator; subscapularis, teres major, and anterior deltoid are all medial rotators/flexors and would need to be stretched, not strengthened, in this scenario.",
    "flag": "",
    "id": "mq187"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "When performing a postural analysis from the side view, which line should be observed?",
    "options": [
      "Plumb line",
      "Sagittal line",
      "Other lines"
    ],
    "answer": 0,
    "a": "Confirmed directly: postural analysis from the side view uses the plumb line as the line of reference.",
    "flag": "",
    "id": "mq188"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which landmark must the ideal plumb line pass through (side view)?",
    "options": [
      "Earlobe",
      "Other anatomical landmarks"
    ],
    "answer": 0,
    "a": "The Green Book's ideal plumb alignment (side view) passes through the lobe of the ear, among other landmarks (external auditory meatus, shoulder joint, bodies of cervical/lumbar vertebrae, slightly anterior to knee/lateral malleolus, slightly posterior to hip joint axis).",
    "flag": "",
    "id": "mq189"
  },
  {
    "topic": "Postural Analysis",
    "type": "multi",
    "q": "Which of the following landmarks does the ideal plumb line pass through/near (side view)? Select all that are correct per the Green Book.",
    "options": [
      "Slightly anterior to the Greater Trochanter (GT)",
      "Body of the cervical vertebrae",
      "Body of the lumbar vertebrae",
      "Slightly posterior to the knee joint"
    ],
    "answer": [
      1,
      2
    ],
    "a": "The Green Book's exact plumb-line landmark list includes 'bodies of most of cervical vertebrae' and 'bodies of lumbar vertebrae' -- both correct. The other two options reverse the correct direction: the source states the line passes slightly POSTERIOR to the axis of the hip joint (greater trochanter), not anterior; and slightly ANTERIOR to the knee joint axis, not posterior.",
    "flag": "The original source document itself flagged uncertainty about whether the exam actually said 'cervical' or 'thoracic' vertebrae for this option ('Unsure if cervical or thoracic appeared on the exam'). The Green Book only documents cervical and lumbar vertebral bodies as plumb-line landmarks (no thoracic vertebral body landmark is listed), so 'cervical' was kept as the verified answer, but this residual transcription ambiguity in the source should be noted.",
    "id": "mq190"
  },
  {
    "topic": "Postural Analysis",
    "type": "mcq",
    "q": "Which of the following is NOT a reason for performing a Roll Down during a postural analysis?",
    "options": [
      "To identify and diagnose scoliosis",
      "To check for flat areas along the spine",
      "To observe if the spine moves sequentially (segmentally)"
    ],
    "answer": 0,
    "a": "A Pilates instructor screens for movement quality (flat spots, segmental movement), not medical diagnosis -- diagnosing scoliosis is outside scope and is not a valid reason for the Roll Down assessment.",
    "flag": "",
    "id": "mq191"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "For a client with Kyphosis, which is the best environment to introduce Swan Dive first?",
    "options": [
      "Cadillac",
      "Mat",
      "Chair (prone on the seat)",
      "Ladder Barrel (holding the ladder)"
    ],
    "answer": 2,
    "a": "Chair Prone Prep offers a more supported/controlled progression before advancing a kyphotic client to the less-supported Ladder Barrel or Mat versions of Swan Dive.",
    "flag": "",
    "id": "mq192"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "Which combination of exercises is appropriate for teaching Pelvic Placement?",
    "options": [
      "Hip Rolls + Spinal Rotation",
      "Hip Rolls + Leg Slides",
      "Leg Slides + Leg Lifts",
      "Leg Slides + Arm Circles"
    ],
    "answer": 2,
    "a": "Leg Slides (closed kinetic chain) and Leg Lifts (open kinetic chain) are the exercises used to teach Neutral vs. Imprint pelvic placement. Spinal Rotation instead teaches rib cage/thoracic mobility, not pelvic placement.",
    "flag": "",
    "id": "mq193"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "True or False: If lumbar flexion is difficult during Short Box on the Reformer, it is best to perform the movement on the Ladder Barrel instead.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "a": "When a client finds lumbar spinal segmentation difficult in general, performing the movement on the Arc Barrel or Ladder Barrel is recommended, since both provide a curved surface that supports/guides segmental articulation.",
    "flag": "",
    "id": "mq194"
  },
  {
    "topic": "Programming",
    "type": "mcq",
    "q": "Which muscle group is primarily used to maintain an Imprint?",
    "options": [
      "Various muscles",
      "Obliques",
      "Gluteus maximus"
    ],
    "answer": 1,
    "a": "Per the STOTT Pelvic Placement principle: 'Imprint involves shortening of the obliques, without activating the glutes.'",
    "flag": "",
    "id": "mq195"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "Choose the correct scenario where the Reformer headrest should be raised.",
    "options": [
      "When the headrest is flat and the neck is in flexion",
      "When the headrest is flat and there is excessive tension in the neck",
      "When the connection to the transversus abdominis is weak",
      "When scapular stability is poor"
    ],
    "answer": 1,
    "a": "The headrest is raised to relieve excessive tension/strain in the neck when the flat headrest position tends toward cervical hyperextension -- not simply because it defaults to flat, and not directly tied to TA weakness or scapular instability.",
    "flag": "",
    "id": "mq196"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "Which exercise occurs exclusively in the coronal plane?",
    "options": [
      "Single Thigh Stretch",
      "Mermaid (Short Box)",
      "Other movements"
    ],
    "answer": 1,
    "a": "Mermaid on the Short Box is a pure lateral-flexion movement, staying entirely within the coronal (frontal) plane. Single Thigh Stretch primarily involves sagittal-plane hip/knee flexion-extension.",
    "flag": "",
    "id": "mq197"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "Which exercise correctly utilizes the safety chain on the Cadillac?",
    "options": [
      "Various exercises",
      "Chest Press"
    ],
    "answer": 1,
    "a": "Per this 2020 exam recollection's recorded answer, Chest Press is the exercise noted as correctly utilizing the safety chain.",
    "flag": "Sources conflict: a separate STOTT TalkFile study-guide source states the answer is Monkey ('ensures safety from the risk of the springs during lower-body movements'), which is arguably the more mechanically consistent explanation for a safety chain's purpose (protecting against spring-loaded leg-spring exercises). 'Chest Press' is used here because it is the answer this specific 2020 written-exam recollection records, but verify against your Cadillac manual.",
    "id": "mq198"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "What modification can be used during Cadillac Breathing for a body type that struggles with rolling down (i.e. spinal segmentation is difficult)?",
    "options": [
      "Rest both arms down",
      "Flex (bend) the knees"
    ],
    "answer": 1,
    "a": "Flexing (bending) the knees is the documented modification for clients who struggle with segmental rolling down during Cadillac Breathing.",
    "flag": "",
    "id": "mq199"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "What joint action occurs during the 'Lean' on the Stability Chair?",
    "options": [
      "Hip extension",
      "Hip flexion",
      "Hip extension and spine rotation",
      "Hip flexion and spine rotation"
    ],
    "answer": 0,
    "a": "The Lean's kneeling-to-leaning-back mechanics correspond to hip extension.",
    "flag": "Best-answer reasoning rather than a directly quoted source key -- the 2020 exam recollection did not record an official answer key for this item; hip extension is inferred from the exercise's biomechanics.",
    "id": "mq200"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "What is the position of the pelvis during Knee Raise on the Stability Chair?",
    "options": [
      "Imprint",
      "Neutral",
      "Anterior tilt",
      "Lateral tilt"
    ],
    "answer": 0,
    "a": "Knee Raise on the Chair is performed with the pelvis in Imprint.",
    "flag": "",
    "id": "mq201"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "What happens to triceps recruitment when you add more spring tension during a Standing Triceps Press on the Stability Chair?",
    "options": [
      "Triceps are recruited less",
      "Triceps are recruited more",
      "Abdominals are recruited less",
      "Abdominals are recruited more"
    ],
    "answer": 0,
    "a": "A heavier spring changes the resistance/assistance balance such that the triceps are recruited LESS -- this is confirmed consistently across the equivalent Reformer-based question as well.",
    "flag": "",
    "id": "mq202"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "What is the correct hand placement on the Arc Barrel when performing a Push-Up?",
    "options": [
      "Apex",
      "From the apex toward the feet",
      "From the apex away from the feet"
    ],
    "answer": 1,
    "a": "Hands are placed in front of the apex, toward the feet, so the wrists do not bend/hyperextend under load.",
    "flag": "",
    "id": "mq203"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "Which of the following exercises does NOT involve full extension of the spine?",
    "options": [
      "Ladder Barrel: Tree (Essential)",
      "Swan Dive",
      "Other exercises"
    ],
    "answer": 0,
    "a": "Ladder Barrel: Tree (Essential) is a stretch-oriented movement rather than a full-spinal-extension exercise, unlike Swan Dive which involves full spinal extension.",
    "flag": "",
    "id": "mq204"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Front Rowing Preps\" (Reformer, Essential) include?",
    "options": [
      "3",
      "4",
      "1",
      "2"
    ],
    "answer": 0,
    "a": "Front Rowing Preps has 3 positions: Straight Forward, 2nd Position, Offering.",
    "flag": "",
    "id": "mq205"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Leg Circles\" (Reformer, Essential) include?",
    "options": [
      "1",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "a": "Leg Circles has 3 positions: Parallel, Laterally rotated, Medially rotated.",
    "flag": "",
    "id": "mq206"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Stomach Massage\" (Reformer, Essential) include?",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "answer": 2,
    "a": "Stomach Massage has 2 positions: Round Back, Straight Back.",
    "flag": "",
    "id": "mq207"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Side Arm Preps — Kneeling\" (Reformer, Intermediate) include?",
    "options": [
      "5",
      "6",
      "7",
      "9"
    ],
    "answer": 2,
    "a": "Side Arm Preps — Kneeling has 7 positions: Internal Rotation, External Rotation, Adduction, Abduction, Long Arm Adduction, Long Arm Abduction, Backhand.",
    "flag": "",
    "id": "mq208"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Mermaid (Intermediate)\" (Reformer, Intermediate) include?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "a": "Mermaid (Intermediate) has 2 positions: Mermaid, Mermaid with Rotation.",
    "flag": "",
    "id": "mq209"
  },
  {
    "topic": "Reformer",
    "type": "mcq",
    "q": "How many named positions/variations does \"Footwork (Intermediate)\" (Reformer, Intermediate) include?",
    "options": [
      "4",
      "7",
      "5",
      "3"
    ],
    "answer": 2,
    "a": "Footwork (Intermediate) has 5 positions: Toes apart, heels together, Wrap toes on bar, Heels on bar, High half-toe, Lower & lift.",
    "flag": "",
    "id": "mq210"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Essential), which category does \"Push-Thru on Back\" belong to?",
    "options": [
      "Push-Thru Bar — Springs from Above",
      "Trapeze",
      "Arm Springs — Sitting",
      "Arm Springs — Supine"
    ],
    "answer": 0,
    "a": "\"Push-Thru on Back\" is grouped under Push-Thru Bar — Springs from Above in the Cadillac essential workout chart.",
    "flag": "",
    "id": "mq211"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Essential), which category does \"Forward Push-Thru\" belong to?",
    "options": [
      "Roll-Down Bar",
      "Push-Thru Bar — Springs from Below",
      "Leg Springs — Side-Lying",
      "Push-Thru Bar — Springs from Above"
    ],
    "answer": 3,
    "a": "\"Forward Push-Thru\" is grouped under Push-Thru Bar — Springs from Above in the Cadillac essential workout chart.",
    "flag": "",
    "id": "mq212"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Essential), which category does \"Push-Thru on Stomach with Back Extension Prep\" belong to?",
    "options": [
      "Fuzzy Hanging Straps",
      "Roll-Down Bar",
      "Trapeze",
      "Push-Thru Bar — Springs from Above"
    ],
    "answer": 3,
    "a": "\"Push-Thru on Stomach with Back Extension Prep\" is grouped under Push-Thru Bar — Springs from Above in the Cadillac essential workout chart.",
    "flag": "",
    "id": "mq213"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Essential), which category does \"Pull Down\" belong to?",
    "options": [
      "Roll-Down Bar",
      "Push-Thru Bar — Springs from Above",
      "Roll-Down Bar Standing",
      "Leg Springs — Side-Lying"
    ],
    "answer": 1,
    "a": "\"Pull Down\" is grouped under Push-Thru Bar — Springs from Above in the Cadillac essential workout chart.",
    "flag": "",
    "id": "mq214"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Bend & Stretch (Supine)\" (Cadillac, Essential) include?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 2,
    "a": "Bend & Stretch (Supine) has 3 positions: Parallel, Laterally Rotated, Medially Rotated.",
    "flag": "",
    "id": "mq215"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Snow Angels\" (Cadillac, Essential) include?",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "answer": 1,
    "a": "Snow Angels has 2 positions: Two Arms, One Arm.",
    "flag": "",
    "id": "mq216"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Ballet Stretches Kneeling\" (Cadillac, Essential) include?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "a": "Ballet Stretches Kneeling has 2 positions: Leg to Front, Leg to Side.",
    "flag": "",
    "id": "mq217"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Intermediate), which category does \"Triceps Lunge\" belong to?",
    "options": [
      "Leg Springs — Side-Lying",
      "Arm Springs — Sitting",
      "Roll-Down Bar Standing",
      "Trapeze"
    ],
    "answer": 2,
    "a": "\"Triceps Lunge\" is grouped under Roll-Down Bar Standing in the Cadillac intermediate workout chart.",
    "flag": "",
    "id": "mq218"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Intermediate), which category does \"Fencer Lunges\" belong to?",
    "options": [
      "Leg Springs — Side-Lying",
      "Arm Springs — Standing",
      "Fuzzy Hanging Straps",
      "Trapeze"
    ],
    "answer": 1,
    "a": "\"Fencer Lunges\" is grouped under Arm Springs — Standing in the Cadillac intermediate workout chart.",
    "flag": "",
    "id": "mq219"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Intermediate), which category does \"Sit-Up Combo\" belong to?",
    "options": [
      "Hanging from Uprights",
      "Arm Springs — Sitting",
      "Push-Thru Bar — Springs from Above",
      "Roll-Down Bar Standing"
    ],
    "answer": 2,
    "a": "\"Sit-Up Combo\" is grouped under Push-Thru Bar — Springs from Above in the Cadillac intermediate workout chart.",
    "flag": "",
    "id": "mq220"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "On the Cadillac (Intermediate), which category does \"Butterfly\" belong to?",
    "options": [
      "Arm Springs — Standing",
      "Leg Springs — Side-Lying",
      "Push-Thru Bar — Springs from Below",
      "Arm Springs — Sitting"
    ],
    "answer": 0,
    "a": "\"Butterfly\" is grouped under Arm Springs — Standing in the Cadillac intermediate workout chart.",
    "flag": "",
    "id": "mq221"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Back Rowing\" (Cadillac, Intermediate) include?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "answer": 2,
    "a": "Back Rowing has 2 positions: Round Back, Straight Back.",
    "flag": "",
    "id": "mq222"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Teaser Series\" (Cadillac, Intermediate) include?",
    "options": [
      "6",
      "4",
      "5",
      "7"
    ],
    "answer": 2,
    "a": "Teaser Series has 5 positions: Teaser, Arm Presses, Lower & Lift Legs, Alternating Arms & Legs, Arms & Legs Together.",
    "flag": "",
    "id": "mq223"
  },
  {
    "topic": "Cadillac",
    "type": "mcq",
    "q": "How many named positions/variations does \"Ballet Stretches\" (Cadillac, Intermediate) include?",
    "options": [
      "1",
      "5",
      "2",
      "3"
    ],
    "answer": 3,
    "a": "Ballet Stretches has 3 positions: Leg to Front, Leg to Side, Leg to Back.",
    "flag": "",
    "id": "mq224"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Essential), which category does \"Cat Standing Front\" belong to?",
    "options": [
      "Leg Work",
      "Torso Flexion",
      "Torso Extension",
      "Arm Work"
    ],
    "answer": 1,
    "a": "\"Cat Standing Front\" is grouped under Torso Flexion in the Stability Chair essential workout chart.",
    "flag": "",
    "id": "mq225"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Essential), which category does \"Scapula Isolation Prone\" belong to?",
    "options": [
      "Leg Work",
      "Arm Work",
      "Torso Lateral Flexion",
      "Torso Flexion"
    ],
    "answer": 1,
    "a": "\"Scapula Isolation Prone\" is grouped under Arm Work in the Stability Chair essential workout chart.",
    "flag": "",
    "id": "mq226"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Essential), which category does \"Hamstring Press Hips Down\" belong to?",
    "options": [
      "Arm Work",
      "Leg Work",
      "Torso Extension",
      "Torso Lateral Flexion"
    ],
    "answer": 1,
    "a": "\"Hamstring Press Hips Down\" is grouped under Leg Work in the Stability Chair essential workout chart.",
    "flag": "",
    "id": "mq227"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Essential), which category does \"Footwork\" belong to?",
    "options": [
      "Arm Work",
      "Leg Work",
      "Torso Lateral Flexion",
      "Torso Extension"
    ],
    "answer": 1,
    "a": "\"Footwork\" is grouped under Leg Work in the Stability Chair essential workout chart.",
    "flag": "",
    "id": "mq228"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Footwork\" (Stability Chair, Essential) include?",
    "options": [
      "3",
      "4",
      "6",
      "5"
    ],
    "answer": 3,
    "a": "Footwork has 5 positions: Toes Apart, Heels Together, Wrap Toes, Heels on Pedal, High Half Toe, Lower & Lift.",
    "flag": "",
    "id": "mq229"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Single Leg\" (Stability Chair, Essential) include?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "answer": 3,
    "a": "Single Leg has 2 positions: Heel on Pedal, High Half Toe.",
    "flag": "",
    "id": "mq230"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Cat Standing Front\" (Stability Chair, Essential) include?",
    "options": [
      "1",
      "5",
      "4",
      "3"
    ],
    "answer": 3,
    "a": "Cat Standing Front has 3 positions: Articulation, Ab Pulses, Arm Presses.",
    "flag": "",
    "id": "mq231"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Intermediate), which category does \"Frog Back\" belong to?",
    "options": [
      "Leg Work",
      "Leg Work Supported by Arms",
      "Torso Rotation",
      "Torso Lateral Flexion"
    ],
    "answer": 1,
    "a": "\"Frog Back\" is grouped under Leg Work Supported by Arms in the Stability Chair intermediate workout chart.",
    "flag": "",
    "id": "mq232"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Intermediate), which category does \"Forward Step Up\" belong to?",
    "options": [
      "Leg Work",
      "Torso Extension",
      "Leg Work Supported by Arms",
      "Torso Rotation"
    ],
    "answer": 0,
    "a": "\"Forward Step Up\" is grouped under Leg Work in the Stability Chair intermediate workout chart.",
    "flag": "",
    "id": "mq233"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Intermediate), which category does \"Frog Front\" belong to?",
    "options": [
      "Torso Flexion & Extension",
      "Leg Work",
      "Leg Work Supported by Arms",
      "Torso Extension"
    ],
    "answer": 2,
    "a": "\"Frog Front\" is grouped under Leg Work Supported by Arms in the Stability Chair intermediate workout chart.",
    "flag": "",
    "id": "mq234"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "On the Stability Chair (Intermediate), which category does \"Leg Circles\" belong to?",
    "options": [
      "Torso Lateral Flexion",
      "Leg Work",
      "Torso Flexion & Extension",
      "Leg Work Supported by Arms"
    ],
    "answer": 3,
    "a": "\"Leg Circles\" is grouped under Leg Work Supported by Arms in the Stability Chair intermediate workout chart.",
    "flag": "",
    "id": "mq235"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Cat Standing Side\" (Stability Chair, Intermediate) include?",
    "options": [
      "1",
      "5",
      "4",
      "3"
    ],
    "answer": 3,
    "a": "Cat Standing Side has 3 positions: Articulation, Ab Pulses, Arm Presses.",
    "flag": "",
    "id": "mq236"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Cat Kneeling\" (Stability Chair, Intermediate) include?",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": 0,
    "a": "Cat Kneeling has 3 positions: Articulation, Ab Pulses, Arm Presses.",
    "flag": "",
    "id": "mq237"
  },
  {
    "topic": "Stability Chair",
    "type": "mcq",
    "q": "How many named positions/variations does \"Cat Standing Back\" (Stability Chair, Intermediate) include?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answer": 1,
    "a": "Cat Standing Back has 2 positions: Articulation, Ab Pulses.",
    "flag": "",
    "id": "mq238"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Arc Barrel (Essential), which category does \"Push Up\" belong to?",
    "options": [
      "Warm-Up",
      "Inverted Positions",
      "Supported on Hands",
      "Prone"
    ],
    "answer": 2,
    "a": "\"Push Up\" is grouped under Supported on Hands in the Arc Barrel essential workout chart.",
    "flag": "",
    "id": "mq239"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Arc Barrel (Essential), which category does \"Scissors (Prone)\" belong to?",
    "options": [
      "Inverted Positions",
      "Supported on Hands",
      "Prone",
      "Warm-Up"
    ],
    "answer": 2,
    "a": "\"Scissors (Prone)\" is grouped under Prone in the Arc Barrel essential workout chart.",
    "flag": "",
    "id": "mq240"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Arc Barrel (Essential), which category does \"Teaser Balance\" belong to?",
    "options": [
      "Supported on Hands",
      "Sitting",
      "Inverted Positions",
      "Prone"
    ],
    "answer": 2,
    "a": "\"Teaser Balance\" is grouped under Inverted Positions in the Arc Barrel essential workout chart.",
    "flag": "",
    "id": "mq241"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Arc Barrel (Essential), which category does \"Arm Circles\" belong to?",
    "options": [
      "Prone",
      "Supported on Hands",
      "Sitting",
      "Warm-Up"
    ],
    "answer": 3,
    "a": "\"Arm Circles\" is grouped under Warm-Up in the Arc Barrel essential workout chart.",
    "flag": "",
    "id": "mq242"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "How many named positions/variations does \"Breast Stroke Preps\" (Arc Barrel, Essential) include?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": 0,
    "a": "Breast Stroke Preps has 2 positions: Hands on the mat, Arms by the sides.",
    "flag": "",
    "id": "mq243"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "How many named positions/variations does \"Scapula Isolation\" (Arc Barrel, Essential) include?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "a": "Scapula Isolation has 2 positions: Position 1 — lumbar neutral, Position 2 — thoracic/cervical extended.",
    "flag": "",
    "id": "mq244"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Spine Corrector (Intermediate), which category does \"Beats\" belong to?",
    "options": [
      "Sitting",
      "Supported on Hands",
      "Side-Lying",
      "Prone"
    ],
    "answer": 3,
    "a": "\"Beats\" is grouped under Prone in the Spine Corrector intermediate workout chart.",
    "flag": "",
    "id": "mq245"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Spine Corrector (Intermediate), which category does \"Frog\" belong to?",
    "options": [
      "Side-Lying",
      "Inverted Positions",
      "Sitting",
      "Prone"
    ],
    "answer": 1,
    "a": "\"Frog\" is grouped under Inverted Positions in the Spine Corrector intermediate workout chart.",
    "flag": "",
    "id": "mq246"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Spine Corrector (Intermediate), which category does \"Bicycle (Inverted)\" belong to?",
    "options": [
      "Inverted Positions",
      "Side-Lying",
      "Prone",
      "Supported on Hands"
    ],
    "answer": 0,
    "a": "\"Bicycle (Inverted)\" is grouped under Inverted Positions in the Spine Corrector intermediate workout chart.",
    "flag": "",
    "id": "mq247"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Spine Corrector (Intermediate), which category does \"Obliques with Flexion\" belong to?",
    "options": [
      "Inverted Positions",
      "Sitting",
      "Prone",
      "Supported on Hands"
    ],
    "answer": 1,
    "a": "\"Obliques with Flexion\" is grouped under Sitting in the Spine Corrector intermediate workout chart.",
    "flag": "",
    "id": "mq248"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "How many named positions/variations does \"Side Leg Lifts\" (Spine Corrector, Intermediate) include?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "answer": 2,
    "a": "Side Leg Lifts has 3 positions: Top Leg Abduction, Staggered Legs, Both Legs Together.",
    "flag": "",
    "id": "mq249"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "How many named positions/variations does \"Ballet Stretches\" (Ladder Barrel, Essential) include?",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": 0,
    "a": "Ballet Stretches has 3 positions: Front (facing the barrel), Side, Back.",
    "flag": "",
    "id": "mq250"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Ladder Barrel (Intermediate), which category does \"Hip Twist\" belong to?",
    "options": [
      "Sitting",
      "Hands on Ladder",
      "Short Box Series",
      "Feet on Ladder"
    ],
    "answer": 0,
    "a": "\"Hip Twist\" is grouped under Sitting in the Ladder Barrel intermediate workout chart.",
    "flag": "",
    "id": "mq251"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Ladder Barrel (Intermediate), which category does \"Rotation Prone\" belong to?",
    "options": [
      "Short Box Series",
      "Side-Lying",
      "Feet on Ladder",
      "Sitting"
    ],
    "answer": 2,
    "a": "\"Rotation Prone\" is grouped under Feet on Ladder in the Ladder Barrel intermediate workout chart.",
    "flag": "",
    "id": "mq252"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Ladder Barrel (Intermediate), which category does \"Grasshopper\" belong to?",
    "options": [
      "Short Box Series",
      "Sitting",
      "Hands on Ladder",
      "Side-Lying"
    ],
    "answer": 2,
    "a": "\"Grasshopper\" is grouped under Hands on Ladder in the Ladder Barrel intermediate workout chart.",
    "flag": "",
    "id": "mq253"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "On the Ladder Barrel (Intermediate), which category does \"Scissors (Sitting)\" belong to?",
    "options": [
      "Feet on Ladder",
      "Sitting",
      "Hands on Ladder",
      "Short Box Series"
    ],
    "answer": 1,
    "a": "\"Scissors (Sitting)\" is grouped under Sitting in the Ladder Barrel intermediate workout chart.",
    "flag": "",
    "id": "mq254"
  },
  {
    "topic": "Barrels",
    "type": "mcq",
    "q": "How many named positions/variations does \"Side Leg Lifts\" (Ladder Barrel, Intermediate) include?",
    "options": [
      "2",
      "1",
      "3",
      "5"
    ],
    "answer": 2,
    "a": "Side Leg Lifts has 3 positions: Top Leg Abduction, Staggered Legs, Both Legs Together.",
    "flag": "",
    "id": "mq255"
  }
];
