/* ====== SSAT Extended Exam Engine ====== */
/* Section-based test with per-section timers and post-test analysis */

var EXAM_STORAGE = 'ssatExamResults';
var EXAM_PROGRESS = 'ssatExamProgress';
var LETTERS = ['A','B','C','D','E'];

/* ---------- State ---------- */
var exam = null;
var examId = '';
var curSection = 0;
var curQ = 0;
var sectionAnswers = {};
var sectionFlags = {};
var sectionTimes = {};
var sectionPerQTime = {};
var questionEnteredAt = 0;
var timerInterval = null;
var timerRemaining = 0;
var examStartedAt = 0;

/* ---------- Init ---------- */
function initExam(id) {
  examId = id;
  exam = EXAM_TESTS[id];
  if (!exam) {
    document.getElementById('exam-content').innerHTML = '<div class="exam-empty"><h2>Exam not found</h2><p><a href="tests.html">Back to dashboard</a></p></div>';
    return;
  }
  document.title = 'SSAT ' + exam.label;
  document.getElementById('exam-title').textContent = exam.label;

  var saved = loadExamProgress();
  if (saved && saved.examId === id && !saved.completed) {
    exam = EXAM_TESTS[id];
    curSection = saved.curSection || 0;
    sectionAnswers = saved.sectionAnswers || {};
    sectionFlags = saved.sectionFlags || {};
    sectionTimes = saved.sectionTimes || {};
    sectionPerQTime = saved.sectionPerQTime || {};
    examStartedAt = saved.examStartedAt || Date.now();

    if (sectionTimes[curSection] && sectionTimes[curSection].remaining != null) {
      showSectionQuestions(curSection, sectionTimes[curSection].remaining);
    } else {
      showSectionIntro(curSection);
    }
  } else {
    examStartedAt = Date.now();
    showExamIntro();
  }
}

/* ---------- Exam Intro ---------- */
function showExamIntro() {
  var h = '<div class="exam-intro">';
  h += '<div class="exam-intro-icon">📋</div>';
  h += '<h2>' + exam.label + '</h2>';
  h += '<p class="exam-intro-desc">' + exam.description + '</p>';
  h += '<div class="exam-intro-sections">';
  exam.sections.forEach(function(s, i) {
    h += '<div class="exam-intro-section">';
    h += '<span class="eis-icon">' + s.icon + '</span>';
    h += '<div class="eis-info"><strong>' + s.name + '</strong>';
    h += '<span>' + s.questions.length + ' questions · ' + formatTime(s.timeLimit) + '</span></div>';
    h += '</div>';
  });
  h += '</div>';
  h += '<div class="exam-intro-rules">';
  h += '<h4>How It Works</h4>';
  h += '<ul>';
  h += '<li>Each section has its own timer — just like the real SSAT</li>';
  h += '<li>You <strong>cannot</strong> go back to a previous section once you move on</li>';
  h += '<li>Wrong answers cost ¼ point; skipped questions cost nothing</li>';
  h += '<li>After all sections, you\'ll get a full performance analysis with strategy advice</li>';
  h += '</ul></div>';
  h += '<button class="q-nav-btn primary exam-start-btn" onclick="showSectionIntro(0)">Begin Exam</button>';
  h += '</div>';
  document.getElementById('exam-content').innerHTML = h;
}

/* ---------- Section Intro ---------- */
function showSectionIntro(idx) {
  curSection = idx;
  var s = exam.sections[idx];
  renderSectionNav();

  var h = '<div class="section-intro">';
  h += '<div class="si-badge">Section ' + (idx + 1) + ' of ' + exam.sections.length + '</div>';
  h += '<div class="si-icon">' + s.icon + '</div>';
  h += '<h2>' + s.name + '</h2>';
  h += '<div class="si-meta">';
  h += '<span>' + s.questions.length + ' questions</span>';
  h += '<span>' + formatTime(s.timeLimit) + ' time limit</span>';
  h += '</div>';
  h += '<div class="si-instructions">' + s.instructions + '</div>';
  h += '<button class="q-nav-btn primary exam-start-btn" onclick="showSectionQuestions(' + idx + ')">Start Section</button>';
  h += '</div>';
  document.getElementById('exam-content').innerHTML = h;
}

/* ---------- Section Questions ---------- */
function showSectionQuestions(idx, resumeTime) {
  curSection = idx;
  curQ = 0;
  var s = exam.sections[idx];

  if (!sectionAnswers[idx]) sectionAnswers[idx] = {};
  if (!sectionFlags[idx]) sectionFlags[idx] = {};
  if (!sectionPerQTime[idx]) sectionPerQTime[idx] = {};
  if (!sectionTimes[idx]) sectionTimes[idx] = { start: Date.now() };

  timerRemaining = resumeTime != null ? resumeTime : s.timeLimit;

  renderSectionNav();
  renderQuestionUI();
  startSectionTimer();
  questionEnteredAt = Date.now();
  renderExamQuestion();
}

function renderQuestionUI() {
  var s = exam.sections[curSection];
  var hasPassage = s.questions[0] && s.questions[0].passageId;

  var h = '';
  h += '<div class="exam-timer" id="exam-timer"><span class="timer-icon">⏱</span><span class="timer-clock" id="timer-clock">' + formatTime(timerRemaining) + '</span></div>';

  if (hasPassage) {
    h += '<div class="exam-reading-layout">';
    h += '<div class="passage-panel" id="passage-panel"></div>';
    h += '<div class="question-panel" id="question-panel">';
  } else {
    h += '<div id="question-panel">';
  }

  h += '<div class="progress-bar"><div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>';
  h += '<div class="progress-label" id="progress-label">1 / ' + s.questions.length + '</div></div>';
  h += '<div class="q-card" id="q-card"><div class="q-header">';
  h += '<span class="q-number" id="q-number">Question 1</span>';
  h += '<span class="q-topic" id="q-topic"></span></div>';
  h += '<div class="q-text" id="q-text"></div>';
  h += '<div class="choices-list" id="choices-list"></div></div>';
  h += '<div class="q-controls"><button class="q-nav-btn" id="prev-btn" onclick="examPrev()">← Prev</button>';
  h += '<button class="flag-btn" id="flag-btn" onclick="examFlag()">⚑ Flag</button>';
  h += '<button class="q-nav-btn" id="next-btn" onclick="examNext()">Next →</button></div>';
  h += '<div class="q-dots" id="q-dots"></div>';

  if (hasPassage) h += '</div></div>';
  else h += '</div>';

  document.getElementById('exam-content').innerHTML = h;
}

function renderExamQuestion() {
  var s = exam.sections[curSection];
  var q = s.questions[curQ];
  var answers = sectionAnswers[curSection];
  var flags = sectionFlags[curSection];

  document.getElementById('progress-fill').style.width = ((curQ + 1) / s.questions.length * 100) + '%';
  document.getElementById('progress-label').textContent = (curQ + 1) + ' / ' + s.questions.length;
  document.getElementById('q-number').textContent = 'Question ' + (curQ + 1);

  var topicText = q.type === 'synonym' ? 'Synonym' : q.type === 'analogy' ? 'Analogy' : q.topic || q.section;
  document.getElementById('q-topic').textContent = topicText;

  var qTextHTML = '';
  if (q.type === 'synonym') {
    qTextHTML = '<div class="synonym-word">' + q.question + '</div><div class="synonym-prompt">Select the word closest in meaning.</div>';
  } else if (q.type === 'analogy') {
    qTextHTML = '<div class="analogy-stem">' + q.question + '</div>';
  } else {
    qTextHTML = q.question;
  }
  document.getElementById('q-text').innerHTML = qTextHTML;

  if (q.passageId) {
    var panel = document.getElementById('passage-panel');
    if (panel) {
      var p = EXAM_PASSAGES[q.passageId];
      if (p) {
        panel.innerHTML = '<div class="passage-genre">' + p.genre + '</div><div class="passage-text">' + p.text.replace(/\n/g, '<br><br>') + '</div>';
      }
    }
  }

  var list = document.getElementById('choices-list');
  list.innerHTML = '';
  q.choices.forEach(function(c, i) {
    var btn = document.createElement('button');
    btn.className = 'choice-btn' + (answers[curQ] === LETTERS[i] ? ' selected' : '');
    btn.innerHTML = '<span class="choice-letter">' + LETTERS[i] + '</span><span class="choice-text">' + c + '</span>';
    btn.onclick = function() { examSelectAnswer(LETTERS[i]); };
    list.appendChild(btn);
  });

  var fb = document.getElementById('flag-btn');
  fb.className = 'flag-btn' + (flags[curQ] ? ' flagged' : '');
  fb.textContent = flags[curQ] ? '⚑ Flagged' : '⚑ Flag';

  document.getElementById('prev-btn').disabled = curQ === 0;
  var nb = document.getElementById('next-btn');
  if (curQ === s.questions.length - 1) {
    nb.textContent = 'Review & Submit';
    nb.className = 'q-nav-btn primary';
  } else {
    nb.textContent = 'Next →';
    nb.className = 'q-nav-btn';
  }

  renderExamDots();
  saveExamProgress();
}

function renderExamDots() {
  var s = exam.sections[curSection];
  var answers = sectionAnswers[curSection];
  var flags = sectionFlags[curSection];
  var wrap = document.getElementById('q-dots');
  wrap.innerHTML = '';
  s.questions.forEach(function(_, i) {
    var d = document.createElement('div');
    var cls = 'q-dot';
    if (i === curQ) cls += ' current';
    if (answers[i] !== undefined) cls += ' answered';
    if (flags[i]) cls += ' flagged-dot';
    d.className = cls;
    d.textContent = i + 1;
    d.onclick = function() { trackQTime(); curQ = i; questionEnteredAt = Date.now(); renderExamQuestion(); };
    wrap.appendChild(d);
  });
}

function examSelectAnswer(letter) { sectionAnswers[curSection][curQ] = letter; renderExamQuestion(); }
function examFlag() { sectionFlags[curSection][curQ] = !sectionFlags[curSection][curQ]; renderExamQuestion(); }

function examPrev() {
  if (curQ > 0) { trackQTime(); curQ--; questionEnteredAt = Date.now(); renderExamQuestion(); }
}

function examNext() {
  trackQTime();
  var s = exam.sections[curSection];
  if (curQ < s.questions.length - 1) {
    curQ++;
    questionEnteredAt = Date.now();
    renderExamQuestion();
  } else {
    showSectionReview();
  }
}

/* ---------- Timer ---------- */
function startSectionTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timerRemaining--;
    updateExamTimer();
    if (timerRemaining % 10 === 0) {
      sectionTimes[curSection].remaining = timerRemaining;
      saveExamProgress();
    }
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      sectionTimeUp();
    }
  }, 1000);
}

function updateExamTimer() {
  var clock = document.getElementById('timer-clock');
  if (!clock) return;
  clock.textContent = formatTime(timerRemaining);
  var display = document.getElementById('exam-timer');
  if (!display) return;
  display.classList.remove('timer-warning', 'timer-danger');
  if (timerRemaining <= 60) display.classList.add('timer-danger');
  else if (timerRemaining <= 120) display.classList.add('timer-warning');
}

function sectionTimeUp() {
  trackQTime();
  var s = exam.sections[curSection];
  var answered = Object.keys(sectionAnswers[curSection] || {}).length;
  var unanswered = s.questions.length - answered;

  var h = '<div class="timer-expired-notice">';
  h += '<div class="timer-expired-icon">⏰</div>';
  h += '<h3>Time\'s Up — ' + s.name + '</h3>';
  h += '<p>' + answered + ' answered';
  if (unanswered > 0) h += ' · ' + unanswered + ' unanswered';
  h += '</p>';
  h += '<button class="q-nav-btn primary" onclick="submitSection()">Continue</button>';
  h += '</div>';
  document.getElementById('exam-content').innerHTML = h;
}

function trackQTime() {
  if (!questionEnteredAt) return;
  var elapsed = Math.round((Date.now() - questionEnteredAt) / 1000);
  if (!sectionPerQTime[curSection]) sectionPerQTime[curSection] = {};
  if (!sectionPerQTime[curSection][curQ]) sectionPerQTime[curSection][curQ] = 0;
  sectionPerQTime[curSection][curQ] += elapsed;
  questionEnteredAt = Date.now();
}

/* ---------- Section Review ---------- */
function showSectionReview() {
  var s = exam.sections[curSection];
  var answers = sectionAnswers[curSection] || {};
  var flags = sectionFlags[curSection] || {};
  var answered = Object.keys(answers).length;
  var flagged = Object.keys(flags).filter(function(k) { return flags[k]; }).length;
  var skipped = s.questions.length - answered;

  var h = '<div class="review-panel">';
  h += '<h3>Review — ' + s.name + '</h3>';
  h += '<div class="exam-timer" style="margin-bottom:16px;display:inline-flex"><span class="timer-icon">⏱</span><span class="timer-clock">' + formatTime(timerRemaining) + ' remaining</span></div>';
  h += '<p style="color:var(--text2);font-size:0.88rem;margin-bottom:16px">';
  h += '<strong>' + answered + '</strong> answered';
  if (skipped > 0) h += ' · <strong>' + skipped + '</strong> skipped';
  if (flagged > 0) h += ' · <strong>' + flagged + '</strong> flagged';
  h += '</p><div class="review-grid">';

  s.questions.forEach(function(_, i) {
    var cls = 'review-item', label = '';
    if (flags[i]) { cls += ' r-flagged'; label = '⚑ Q' + (i+1); }
    else if (answers[i] !== undefined) { cls += ' r-answered'; label = '✓ Q' + (i+1); }
    else { cls += ' r-skipped'; label = '— Q' + (i+1); }
    h += '<div class="' + cls + '" style="cursor:pointer" onclick="backToQuestion(' + i + ')">' + label + '</div>';
  });

  h += '</div><div style="display:flex;gap:12px;margin-top:16px">';
  h += '<button class="q-nav-btn" onclick="backToQuestion(' + curQ + ')">← Back to Questions</button>';
  h += '<button class="q-nav-btn primary" onclick="submitSection()">Submit Section</button>';
  h += '</div></div>';
  document.getElementById('exam-content').innerHTML = h;
}

function backToQuestion(i) {
  curQ = i;
  questionEnteredAt = Date.now();
  renderQuestionUI();
  renderExamQuestion();
}

/* ---------- Submit Section ---------- */
function submitSection() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  trackQTime();

  var s = exam.sections[curSection];
  var timeUsed = s.timeLimit - Math.max(timerRemaining, 0);
  sectionTimes[curSection].end = Date.now();
  sectionTimes[curSection].timeUsed = timeUsed;
  sectionTimes[curSection].timeLimit = s.timeLimit;
  sectionTimes[curSection].remaining = null;

  if (curSection < exam.sections.length - 1) {
    showBreak();
  } else {
    finishExam();
  }
}

/* ---------- Break Between Sections ---------- */
function showBreak() {
  var next = exam.sections[curSection + 1];
  var h = '<div class="section-break">';
  h += '<div class="sb-check">✓</div>';
  h += '<h2>' + exam.sections[curSection].name + ' Complete</h2>';
  h += '<p class="sb-subtitle">Take a quick breather. The next section starts when you\'re ready.</p>';
  h += '<div class="sb-next">';
  h += '<div class="sb-next-label">Up Next</div>';
  h += '<div class="sb-next-section"><span>' + next.icon + '</span><strong>' + next.name + '</strong>';
  h += '<span>' + next.questions.length + ' questions · ' + formatTime(next.timeLimit) + '</span></div>';
  h += '</div>';
  h += '<button class="q-nav-btn primary exam-start-btn" onclick="showSectionIntro(' + (curSection + 1) + ')">Continue to ' + next.name + '</button>';
  h += '</div>';
  document.getElementById('exam-content').innerHTML = h;
  renderSectionNav();
}

/* ---------- Finish Exam ---------- */
function finishExam() {
  clearExamProgress();
  var result = scoreExam();
  saveExamResult(result);
  showAnalysis(result);
}

function scoreExam() {
  var totalCorrect = 0, totalWrong = 0, totalSkipped = 0;
  var sectionResults = [];

  exam.sections.forEach(function(s, si) {
    var answers = sectionAnswers[si] || {};
    var correct = 0, wrong = 0, skipped = 0;
    var byType = {};
    var byCategory = {};
    var questionResults = [];

    s.questions.forEach(function(q, qi) {
      var userAns = answers[qi];
      var isCorrect = userAns === q.answer;
      var isSkipped = userAns === undefined;

      var typeKey = q.type || q.category || 'other';
      if (!byType[typeKey]) byType[typeKey] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
      byType[typeKey].total++;

      if (q.category) {
        if (!byCategory[q.category]) byCategory[q.category] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
        byCategory[q.category].total++;
      }

      if (isSkipped) {
        skipped++; byType[typeKey].skipped++;
        if (q.category) byCategory[q.category].skipped++;
      } else if (isCorrect) {
        correct++; byType[typeKey].correct++;
        if (q.category) byCategory[q.category].correct++;
      } else {
        wrong++; byType[typeKey].wrong++;
        if (q.category) byCategory[q.category].wrong++;
      }

      questionResults.push({
        idx: qi, id: q.id, userAnswer: userAns, correctAnswer: q.answer,
        isCorrect: isCorrect, isSkipped: isSkipped,
        timeSpent: (sectionPerQTime[si] && sectionPerQTime[si][qi]) || 0,
        type: q.type, category: q.category, topic: q.topic
      });
    });

    var adjusted = Math.max(0, correct - (wrong * 0.25));
    totalCorrect += correct;
    totalWrong += wrong;
    totalSkipped += skipped;

    sectionResults.push({
      name: s.name, icon: s.icon,
      correct: correct, wrong: wrong, skipped: skipped,
      total: s.questions.length,
      rawScore: correct,
      adjustedScore: parseFloat(adjusted.toFixed(2)),
      pct: Math.round((correct / s.questions.length) * 100),
      timeUsed: (sectionTimes[si] && sectionTimes[si].timeUsed) || 0,
      timeLimit: s.timeLimit,
      byType: byType,
      byCategory: byCategory,
      questionResults: questionResults
    });
  });

  var totalQ = exam.sections.reduce(function(a, s) { return a + s.questions.length; }, 0);
  var totalAdjusted = Math.max(0, totalCorrect - (totalWrong * 0.25));

  return {
    examId: examId,
    label: exam.label,
    completedAt: new Date().toISOString(),
    totalQuestions: totalQ,
    correct: totalCorrect, wrong: totalWrong, skipped: totalSkipped,
    rawScore: totalCorrect,
    adjustedScore: parseFloat(totalAdjusted.toFixed(2)),
    pct: Math.round((totalCorrect / totalQ) * 100),
    sections: sectionResults,
    examDuration: Math.round((Date.now() - examStartedAt) / 1000)
  };
}

/* ---------- Analysis Engine ---------- */
function generateInsights(result) {
  var insights = [];
  var totalQ = result.totalQuestions;
  var pct = result.pct;

  // --- Overall Performance ---
  if (pct >= 80) {
    insights.push({ type: 'overall', icon: '🔥', title: 'Strong Performance',
      message: 'You scored ' + pct + '% overall — that puts you in solid shape for the SSAT. Focus on tightening up your weak areas to push even higher.',
      severity: 'positive' });
  } else if (pct >= 60) {
    insights.push({ type: 'overall', icon: '💪', title: 'Good Foundation',
      message: 'You scored ' + pct + '% overall. You know the material — now it\'s about test strategy and targeted practice on your weak spots.',
      severity: 'neutral' });
  } else {
    var weakest = result.sections.reduce(function(a, b) { return a.pct < b.pct ? a : b; });
    insights.push({ type: 'overall', icon: '📈', title: 'Room to Grow',
      message: 'You scored ' + pct + '% overall. This is your baseline — every practice test builds your skills. Start by focusing on ' + weakest.name + ' (' + weakest.pct + '%), since that\'s where you\'ll gain the most points.',
      severity: 'warning' });
  }

  // --- Guessing Strategy ---
  var penaltyCost = result.wrong * 0.25;
  if (result.wrong > result.skipped * 2 && penaltyCost >= 2) {
    insights.push({ type: 'strategy', icon: '🎯', title: 'Guessing Penalty',
      message: 'Wrong answers cost you ' + penaltyCost.toFixed(1) + ' points from the ¼-point penalty. You answered ' + result.wrong + ' questions wrong and only skipped ' + result.skipped + '. On the real SSAT, if you can\'t eliminate at least 2 choices, it\'s better to skip — a skip costs 0 points, a wrong answer costs 0.25.',
      severity: 'warning' });
  }
  if (result.skipped > totalQ * 0.2) {
    insights.push({ type: 'strategy', icon: '⏭️', title: 'Too Many Skips',
      message: 'You skipped ' + result.skipped + ' questions (' + Math.round(result.skipped / totalQ * 100) + '% of the test). If you can eliminate even 1 wrong answer choice, the math favors guessing. Practice the process of elimination: cross out choices you know are wrong, then pick from what\'s left.',
      severity: 'warning' });
  }

  // --- Per-Section Analysis ---
  result.sections.forEach(function(sec) {
    var timeRemaining = sec.timeLimit - sec.timeUsed;
    var timePct = Math.round(sec.timeUsed / sec.timeLimit * 100);

    // Finished early
    if (timeRemaining > sec.timeLimit * 0.25 && sec.total > 0) {
      insights.push({ type: 'pacing', icon: '⏱️', title: sec.name + ': Finished Early',
        message: 'You finished ' + sec.name + ' with ' + formatTime(timeRemaining) + ' remaining (' + (100 - timePct) + '% of your time unused). Use extra time to review flagged questions and double-check answers. On the real SSAT, you can\'t go back to previous sections — use every second.',
        severity: 'neutral' });
    }

    // Ran out of time
    if (sec.timeUsed >= sec.timeLimit && sec.skipped > 0) {
      insights.push({ type: 'pacing', icon: '🏃', title: sec.name + ': Ran Out of Time',
        message: 'Time expired in ' + sec.name + ' with ' + sec.skipped + ' questions unanswered. That\'s ' + sec.skipped + ' guaranteed zeros. Work on pacing: skip hard questions, answer the ones you know, and come back to the tough ones with remaining time.',
        severity: 'warning' });
    }

    // Slow questions
    var maxQTime = 0, maxQIdx = -1;
    sec.questionResults.forEach(function(qr) {
      if (qr.timeSpent > maxQTime) { maxQTime = qr.timeSpent; maxQIdx = qr.idx; }
    });
    if (maxQTime > 120 && sec.total >= 8) {
      var avgTime = Math.round(sec.timeLimit / sec.total);
      insights.push({ type: 'pacing', icon: '🐌', title: sec.name + ': Time Sink on Q' + (maxQIdx + 1),
        message: 'You spent ' + maxQTime + ' seconds on question ' + (maxQIdx + 1) + ' in ' + sec.name + ' — that\'s ' + Math.round(maxQTime / avgTime) + 'x the average time per question. Set a mental ' + avgTime + '-second limit. If you\'re stuck, flag it and move on. You can always come back.',
        severity: 'warning' });
    }

    // Section-specific: Verbal (synonym vs analogy)
    if (sec.name === 'Verbal' && sec.byType) {
      var syn = sec.byType['synonym'];
      var ana = sec.byType['analogy'];
      if (syn && ana && syn.total >= 3 && ana.total >= 3) {
        var synPct = Math.round(syn.correct / syn.total * 100);
        var anaPct = Math.round(ana.correct / ana.total * 100);
        if (synPct > anaPct + 20) {
          insights.push({ type: 'section', icon: '📝', title: 'Synonyms Strong, Analogies Need Work',
            message: 'Your synonym accuracy (' + synPct + '%) is much higher than analogies (' + anaPct + '%). For analogies, try this: identify the relationship between the first pair before looking at the answer choices. Is it a part-to-whole? Cause-and-effect? Opposites? Name the relationship, then find the match.',
            severity: 'warning' });
        } else if (anaPct > synPct + 20) {
          insights.push({ type: 'section', icon: '📝', title: 'Analogies Strong, Synonyms Need Work',
            message: 'Your analogy accuracy (' + anaPct + '%) is much higher than synonyms (' + synPct + '%). Vocabulary flashcards will help the most here. Focus on root words and word families — knowing that "bene-" means "good" helps you figure out benefactor, benevolent, and beneficial.',
            severity: 'warning' });
        } else if (synPct >= 80 && anaPct >= 80) {
          insights.push({ type: 'section', icon: '📝', title: 'Verbal: Strong Across the Board',
            message: 'Nice work — ' + synPct + '% on synonyms and ' + anaPct + '% on analogies. Your vocabulary and relationship-spotting skills are solid.',
            severity: 'positive' });
        }
      }
    }

    // Section-specific: Reading
    if (sec.name === 'Reading') {
      var avgReadTime = sec.total > 0 ? Math.round(sec.timeUsed / sec.total) : 0;
      if (avgReadTime > 80 && sec.pct < 70) {
        insights.push({ type: 'section', icon: '📖', title: 'Reading: Try Questions First',
          message: 'You averaged ' + avgReadTime + ' seconds per reading question. Try reading the questions first, then scanning the passage for the answers. This "targeted reading" approach is faster than reading the whole passage before looking at any questions.',
          severity: 'warning' });
      }
      if (sec.pct >= 75) {
        insights.push({ type: 'section', icon: '📖', title: 'Reading: Solid Comprehension',
          message: 'You got ' + sec.pct + '% on reading comprehension. You\'re extracting key information from passages effectively. Keep it up.',
          severity: 'positive' });
      }
    }

    // Section-specific: Math categories
    if (sec.name === 'Quantitative' && sec.byCategory) {
      var cats = Object.entries(sec.byCategory);
      var weakCats = cats.filter(function(c) { return c[1].total >= 2 && (c[1].correct / c[1].total) < 0.5; });
      var strongCats = cats.filter(function(c) { return c[1].total >= 2 && (c[1].correct / c[1].total) >= 0.8; });

      if (weakCats.length > 0) {
        var weakNames = weakCats.map(function(c) { return c[0] + ' (' + Math.round(c[1].correct / c[1].total * 100) + '%)'; }).join(', ');
        insights.push({ type: 'section', icon: '🔢', title: 'Math: Focus Areas',
          message: 'Your weakest math categories: ' + weakNames + '. These topics show up regularly on the SSAT. Focused practice here will have the biggest payoff — check the study guide for concept cards and practice problems.',
          severity: 'warning' });
      }
      if (strongCats.length > 0) {
        var strongNames = strongCats.map(function(c) { return c[0]; }).join(', ');
        insights.push({ type: 'section', icon: '🔢', title: 'Math: Strong Categories',
          message: 'You\'re solid in ' + strongNames + '. These are reliable point-earners for you on test day.',
          severity: 'positive' });
      }
    }
  });

  // --- Section Imbalance ---
  if (result.sections.length >= 3) {
    var sorted = result.sections.slice().sort(function(a, b) { return a.pct - b.pct; });
    var lowest = sorted[0], highest = sorted[sorted.length - 1];
    if (highest.pct - lowest.pct >= 25) {
      insights.push({ type: 'strategy', icon: '⚖️', title: 'Section Imbalance',
        message: 'Your ' + highest.name + ' score (' + highest.pct + '%) is much higher than your ' + lowest.name + ' score (' + lowest.pct + '%). The SSAT reports each section separately to schools. Focused practice on ' + lowest.name + ' will improve your overall profile the most.',
        severity: 'warning' });
    }
  }

  // --- Pacing consistency ---
  var totalTimeUsed = result.sections.reduce(function(a, s) { return a + s.timeUsed; }, 0);
  var totalTimeLimit = result.sections.reduce(function(a, s) { return a + s.timeLimit; }, 0);
  if (totalTimeUsed < totalTimeLimit * 0.6 && pct < 85) {
    insights.push({ type: 'pacing', icon: '🔍', title: 'Slow Down and Check',
      message: 'You used only ' + Math.round(totalTimeUsed / totalTimeLimit * 100) + '% of the available time. Speed is good, but accuracy matters more. Use leftover time to re-read questions you weren\'t sure about. A wrong answer costs ¼ point — catching one mistake is worth the extra time.',
      severity: 'neutral' });
  }

  return insights;
}

/* ---------- Show Analysis ---------- */
function showAnalysis(result) {
  renderSectionNav();
  var insights = generateInsights(result);
  var h = '';

  // Score Hero
  h += '<div class="score-hero">';
  h += '<div class="score-big">' + result.pct + '%</div>';
  h += '<div class="score-subtitle">' + result.correct + ' of ' + result.totalQuestions + ' correct · ' + result.label + '</div>';
  h += '<div class="score-row">';
  h += '<div class="score-stat s-green"><div class="score-stat-val">' + result.rawScore + '</div><div class="score-stat-label">Raw Score</div></div>';
  h += '<div class="score-stat s-gold"><div class="score-stat-val">' + result.adjustedScore.toFixed(1) + '</div><div class="score-stat-label">Adjusted (−¼)</div></div>';
  h += '<div class="score-stat s-red"><div class="score-stat-val">' + result.skipped + '</div><div class="score-stat-label">Skipped</div></div>';
  h += '<div class="score-stat"><div class="score-stat-val">' + formatTime(result.examDuration) + '</div><div class="score-stat-label">Total Time</div></div>';
  h += '</div>';
  h += '<div class="motivational">' + getExamMotivation(result) + '</div>';
  h += '</div>';

  // Section Score Breakdown
  h += '<div class="section"><div class="section-label">Breakdown</div><div class="section-title">Score by Section</div></div>';
  h += '<div class="section-scores">';
  result.sections.forEach(function(sec) {
    var color = sec.pct >= 80 ? 'green' : sec.pct >= 50 ? 'yellow' : 'red';
    h += '<div class="section-score-card">';
    h += '<div class="ssc-header"><span class="ssc-icon">' + sec.icon + '</span><span class="ssc-name">' + sec.name + '</span>';
    h += '<span class="ssc-pct ssc-' + color + '">' + sec.pct + '%</span></div>';
    h += '<div class="ssc-bar"><div class="ssc-fill ssc-fill-' + color + '" style="width:' + sec.pct + '%"></div></div>';
    h += '<div class="ssc-details">';
    h += '<span>✓ ' + sec.correct + '</span><span>✗ ' + sec.wrong + '</span><span>— ' + sec.skipped + '</span>';
    h += '<span>⏱ ' + formatTime(sec.timeUsed) + ' / ' + formatTime(sec.timeLimit) + '</span>';
    h += '</div></div>';
  });
  h += '</div>';

  // Analysis Report
  h += '<div class="section"><div class="section-label">Analysis</div><div class="section-title">Your Performance Report</div>';
  h += '<p class="section-desc">Personalized insights based on your answers, timing, and patterns.</p></div>';
  h += '<div class="insights-list">';
  insights.forEach(function(insight) {
    var cls = 'insight-card ic-' + insight.severity;
    h += '<div class="' + cls + '">';
    h += '<div class="ic-header"><span class="ic-icon">' + insight.icon + '</span><span class="ic-title">' + insight.title + '</span></div>';
    h += '<div class="ic-message">' + insight.message + '</div>';
    h += '</div>';
  });
  h += '</div>';

  // Detailed section breakdowns
  result.sections.forEach(function(sec) {
    h += '<div class="section"><div class="section-label">' + sec.icon + ' ' + sec.name + '</div>';
    h += '<div class="section-title">' + sec.name + ' Breakdown</div></div>';

    if (sec.name === 'Verbal' && sec.byType) {
      h += '<div class="topic-breakdown"><h3>By Question Type</h3>';
      Object.entries(sec.byType).forEach(function(e) {
        var name = e[0].charAt(0).toUpperCase() + e[0].slice(1) + 's';
        var d = e[1];
        var p = Math.round(d.correct / d.total * 100);
        var c = p >= 80 ? 'green' : p >= 50 ? 'yellow' : 'red';
        h += '<div class="tb-row"><div class="tb-name">' + name + '</div>';
        h += '<div class="tb-bar-wrap"><div class="tb-bar tb-' + c + '" style="width:' + p + '%"></div></div>';
        h += '<div class="tb-score tb-c-' + c + '">' + d.correct + '/' + d.total + '</div></div>';
      });
      h += '</div>';
    }

    if (sec.name === 'Quantitative' && sec.byCategory) {
      h += '<div class="topic-breakdown"><h3>By Math Category</h3>';
      Object.entries(sec.byCategory).forEach(function(e) {
        var d = e[1];
        var p = Math.round(d.correct / d.total * 100);
        var c = p >= 80 ? 'green' : p >= 50 ? 'yellow' : 'red';
        h += '<div class="tb-row"><div class="tb-name">' + e[0] + '</div>';
        h += '<div class="tb-bar-wrap"><div class="tb-bar tb-' + c + '" style="width:' + p + '%"></div></div>';
        h += '<div class="tb-score tb-c-' + c + '">' + d.correct + '/' + d.total + '</div></div>';
      });
      h += '</div>';
    }

    // Question review
    h += '<div class="qr-list">';
    var s = exam.sections[result.sections.indexOf(sec)];
    sec.questionResults.forEach(function(qr, qi) {
      var q = s.questions[qi];
      var cls = qr.isSkipped ? 'qr-skipped' : qr.isCorrect ? 'qr-correct' : 'qr-wrong';
      var open = !qr.isCorrect ? ' open' : '';
      var tag = qr.isSkipped ? 'Skipped' : qr.isCorrect ? 'Correct' : 'Wrong';
      var timeTag = qr.timeSpent > 0 ? ' · ' + qr.timeSpent + 's' : '';
      var preview = q.type === 'synonym' ? q.question : stripHTML(q.question).substring(0, 55);

      h += '<div class="qr-item ' + cls + open + '" id="qr-' + sec.name + '-' + qi + '">';
      h += '<div class="qr-header" onclick="this.parentElement.classList.toggle(\'open\')">';
      h += '<div class="qr-header-left"><span class="qr-q-num">Q' + (qi+1) + '</span><span class="qr-q-preview">' + preview + '…</span></div>';
      h += '<div style="display:flex;align-items:center;gap:8px"><span style="font-size:0.68rem;color:var(--text3)">' + timeTag + '</span><span class="qr-result-tag">' + tag + '</span><span class="qr-arrow">▼</span></div>';
      h += '</div><div class="qr-body">';

      if (q.passageId) {
        h += '<div class="qr-passage-link" style="font-size:0.72rem;color:var(--gold);margin-bottom:8px;font-weight:600">📖 ' + EXAM_PASSAGES[q.passageId].genre + ' passage</div>';
      }

      var qText = q.type === 'synonym' ? '<strong>' + q.question + '</strong> — closest in meaning' : q.type === 'analogy' ? q.question : q.question;
      h += '<div class="qr-question-text">' + qText + '</div>';
      h += '<div class="qr-choices-review">';
      q.choices.forEach(function(c, ci) {
        var letter = LETTERS[ci];
        var ccls = 'qr-choice qr-ch-neutral', marker = '';
        if (letter === q.answer) { ccls = 'qr-choice qr-ch-correct'; marker = ' ✓'; }
        else if (letter === qr.userAnswer && !qr.isCorrect) { ccls = 'qr-choice qr-ch-wrong'; marker = ' ✗'; }
        h += '<div class="' + ccls + '"><strong>' + letter + ')</strong> ' + c + marker + '</div>';
      });
      h += '</div>';
      h += '<div class="qr-explanation">' + q.explanation + '</div>';
      h += '</div></div>';
    });
    h += '</div>';
  });

  // Action plan
  h += '<div class="section"><div class="section-label">Next Steps</div><div class="section-title">Your Action Plan</div></div>';
  h += '<div class="action-plan">';
  h += buildActionPlan(result, insights);
  h += '</div>';

  // Bottom nav
  h += '<div style="text-align:center;margin-top:32px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap">';
  h += '<a href="tests.html" class="q-nav-btn" style="text-decoration:none;display:inline-block">← Dashboard</a>';
  h += '<a href="exam.html?id=' + result.examId + '" class="q-nav-btn primary" style="text-decoration:none;display:inline-block">↻ Retake Exam</a>';
  h += '</div>';

  document.getElementById('exam-content').innerHTML = h;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function buildActionPlan(result, insights) {
  var actions = [];
  var weakSections = result.sections.filter(function(s) { return s.pct < 70; });
  var warnInsights = insights.filter(function(i) { return i.severity === 'warning'; });

  if (weakSections.length > 0) {
    weakSections.forEach(function(s) {
      if (s.name === 'Verbal') {
        actions.push({ icon: '📝', text: 'Practice vocabulary flashcards on the <a href="index.html" style="color:var(--accent-light)">SSAT study page</a>. Focus on synonyms and word relationships.' });
      } else if (s.name === 'Reading') {
        actions.push({ icon: '📖', text: 'Practice reading passages daily. Read the questions first, then scan the passage. Time yourself to build speed.' });
      } else if (s.name === 'Quantitative') {
        var weakCats = Object.entries(s.byCategory || {}).filter(function(c) { return c[1].correct / c[1].total < 0.5; }).map(function(c) { return c[0]; });
        var catText = weakCats.length > 0 ? ' Focus on: ' + weakCats.join(', ') + '.' : '';
        actions.push({ icon: '🔢', text: 'Run through the <a href="tests.html" style="color:var(--accent-light)">timed math quizzes</a> to sharpen problem-solving speed.' + catText });
      }
    });
  }

  if (warnInsights.some(function(i) { return i.type === 'pacing'; })) {
    actions.push({ icon: '⏱️', text: 'Practice pacing: set a per-question time limit and flag questions that take too long instead of grinding on them.' });
  }

  if (result.wrong > result.skipped && result.adjustedScore < result.rawScore * 0.9) {
    actions.push({ icon: '🎯', text: 'Work on elimination strategy. When unsure, cross out choices you know are wrong before guessing. If you can\'t eliminate at least 2, skip.' });
  }

  if (actions.length === 0) {
    actions.push({ icon: '⭐', text: 'You\'re in great shape! Keep taking practice tests to maintain your edge. Try the ' + (result.examId === 'exam30' ? '<a href="exam.html?id=exam60" style="color:var(--accent-light)">full-length exam</a>' : '<a href="tests.html" style="color:var(--accent-light)">timed quizzes</a>') + ' for more practice.' });
  }

  var h = '';
  actions.forEach(function(a, i) {
    h += '<div class="action-item"><span class="ai-num">' + (i + 1) + '</span><span class="ai-icon">' + a.icon + '</span><div class="ai-text">' + a.text + '</div></div>';
  });
  return h;
}

function getExamMotivation(result) {
  var p = result.pct;
  if (p >= 90) return '"Elite performance. You\'re ready for test day."';
  if (p >= 80) return '"Strong showing. Tighten up the details and you\'ll be golden."';
  if (p >= 70) return '"Solid work. The study guide + retake combo will push you higher."';
  if (p >= 60) return '"Good base. Focus on the red areas and you\'ll jump."';
  return '"This is your starting line. Every rep makes you sharper."';
}

/* ---------- Section Nav ---------- */
function renderSectionNav() {
  var nav = document.getElementById('section-nav');
  if (!nav) return;
  var h = '';
  exam.sections.forEach(function(s, i) {
    var cls = 'sn-step';
    if (i < curSection) cls += ' sn-done';
    else if (i === curSection) cls += ' sn-active';
    h += '<div class="' + cls + '"><span class="sn-icon">' + s.icon + '</span><span class="sn-name">' + s.name + '</span></div>';
    if (i < exam.sections.length - 1) h += '<div class="sn-arrow">›</div>';
  });
  nav.innerHTML = h;
}

/* ---------- localStorage ---------- */
function saveExamProgress() {
  var data = {
    examId: examId, curSection: curSection,
    sectionAnswers: sectionAnswers, sectionFlags: sectionFlags,
    sectionTimes: sectionTimes, sectionPerQTime: sectionPerQTime,
    examStartedAt: examStartedAt, completed: false
  };
  localStorage.setItem(EXAM_PROGRESS + '_' + examId, JSON.stringify(data));
}

function loadExamProgress() {
  try { return JSON.parse(localStorage.getItem(EXAM_PROGRESS + '_' + examId)); } catch(e) { return null; }
}

function clearExamProgress() {
  localStorage.removeItem(EXAM_PROGRESS + '_' + examId);
}

function saveExamResult(result) {
  var all = loadAllExamResults();
  if (!all.exams) all.exams = {};
  if (!all.exams[examId]) all.exams[examId] = [];
  all.exams[examId].push(result);
  localStorage.setItem(EXAM_STORAGE, JSON.stringify(all));
}

function loadAllExamResults() {
  try { return JSON.parse(localStorage.getItem(EXAM_STORAGE)) || {}; } catch(e) { return {}; }
}

/* ---------- Utilities ---------- */
function formatTime(sec) {
  if (sec < 0) sec = 0;
  var m = Math.floor(sec / 60);
  var s = sec % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function stripHTML(s) {
  var d = document.createElement('div');
  d.innerHTML = s;
  return d.textContent || '';
}

function toggleTheme() {
  var html = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (html.getAttribute('data-theme') === 'light') {
    html.removeAttribute('data-theme'); btn.textContent = '🌙'; localStorage.setItem('theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light'); btn.textContent = '☀️'; localStorage.setItem('theme', 'light');
  }
}
(function() {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    var b = document.getElementById('theme-toggle');
    if (b) b.textContent = '☀️';
  }
})();
