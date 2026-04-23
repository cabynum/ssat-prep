/* ====== SSAT Practice Test Engine ====== */

const STORAGE_KEY = 'ssatTestResults';
const LETTERS = ['A','B','C','D','E'];

const CATEGORIES = {
  'Algebra': [
    'Classic Problem Solving','Exponential Expressions','Factoring','Functions',
    'Graphs','Linear Equations / Systems','Polynomial Expressions','Quadratic Equations',
    'Radical Expressions','Rates / Ratios / Proportions / Percentages',
    'Rational Expressions','Slope'
  ],
  'Geometry & Measurement': [
    '3D: Volume / Surface Area','Angles','Area',
    'Converting Units / Dimensional Analysis','Coordinate Geometry',
    'Length / Perimeter / Circumference','Pythagorean Theorem',
    'Transformations'
  ],
  'Data Analysis': [
    'Counting','Data Graphs & Tables','Mean / Median / Mode / Range',
    'Probability','Set Theory'
  ],
  'Numbers & Operations': [
    'Arithmetic','Estimation','Number Sense / Number Theory','Order of Operations'
  ],
  'Reasoning': [
    'Puzzle / Logical Reasoning','Sequences & Patterns','Visual Spatial Reasoning'
  ]
};

const ALL_TOPICS = Object.values(CATEGORIES).flat();

/* ---------- State ---------- */
let testId = null;
let questions = [];
let answers = {};
let flags = {};
let currentQ = 0;
let mode = 'test';

/* ---------- Timer State ---------- */
let timerEnabled = false;
let timeLimitSec = 0;
let nudgeThresholdSec = 90;
let timerRemaining = 0;
let timerInterval = null;
let questionEnteredAt = 0;
let questionNudged = false;
let perQuestionTime = {};

/* ---------- Init ---------- */
function initTest(id, qs, meta) {
  testId = id;
  questions = qs;

  if (meta && meta.timed) {
    timerEnabled = true;
    timeLimitSec = meta.timeLimit || 720;
    nudgeThresholdSec = meta.nudgeAt || 90;
  }

  const saved = loadProgress();
  if (saved && saved.answers && !saved.completedAt) {
    answers = saved.answers;
    flags = saved.flags || {};
    currentQ = saved.currentQ || 0;
    perQuestionTime = saved.perQuestionTime || {};
    if (timerEnabled && saved.timerRemaining != null) {
      timerRemaining = saved.timerRemaining;
    } else if (timerEnabled) {
      timerRemaining = timeLimitSec;
    }
  } else if (timerEnabled) {
    timerRemaining = timeLimitSec;
  }

  if (timerEnabled) {
    renderTimerBar();
    startTimer();
  }
  questionEnteredAt = Date.now();
  renderTest();
}

/* ---------- Timer ---------- */
function renderTimerBar() {
  var bar = document.getElementById('progress-bar-area');
  if (!bar) bar = document.querySelector('.progress-bar');
  if (!bar) return;

  var existing = document.getElementById('timer-display');
  if (existing) return;

  var wrap = document.createElement('div');
  wrap.id = 'timer-display';
  wrap.className = 'timer-display';
  wrap.innerHTML = '<span class="timer-icon">⏱</span><span class="timer-clock" id="timer-clock">' + formatTime(timerRemaining) + '</span>';
  bar.parentNode.insertBefore(wrap, bar);
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timerRemaining--;
    updateTimerDisplay();
    if (timerRemaining % 10 === 0) saveProgress();

    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      autoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var clock = document.getElementById('timer-clock');
  if (!clock) return;
  clock.textContent = formatTime(timerRemaining);

  var display = document.getElementById('timer-display');
  if (!display) return;
  display.classList.remove('timer-warning', 'timer-danger');
  if (timerRemaining <= 60) display.classList.add('timer-danger');
  else if (timerRemaining <= 120) display.classList.add('timer-warning');
}

function formatTime(sec) {
  if (sec < 0) sec = 0;
  var m = Math.floor(sec / 60);
  var s = sec % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function checkQuestionNudge() {
  if (!timerEnabled) return;
  var elapsed = (Date.now() - questionEnteredAt) / 1000;
  var card = document.querySelector('.q-card');
  if (!card) return;

  if (elapsed >= nudgeThresholdSec && !questionNudged) {
    card.classList.add('q-nudge');
    questionNudged = true;
  }
}

function resetQuestionNudge() {
  questionNudged = false;
  var card = document.querySelector('.q-card');
  if (card) card.classList.remove('q-nudge');
}

function trackQuestionTime() {
  if (!timerEnabled || !questionEnteredAt) return;
  var elapsed = Math.round((Date.now() - questionEnteredAt) / 1000);
  if (!perQuestionTime[currentQ]) perQuestionTime[currentQ] = 0;
  perQuestionTime[currentQ] += elapsed;
}

function autoSubmit() {
  trackQuestionTime();
  var panel = document.getElementById('test-taking');
  var reviewP = document.getElementById('review-panel');
  if (panel) panel.style.display = 'none';
  if (reviewP) reviewP.style.display = 'none';

  var unanswered = questions.length - Object.keys(answers).length;

  var notice = document.createElement('div');
  notice.className = 'timer-expired-notice';
  notice.innerHTML = '<div class="timer-expired-icon">⏰</div>' +
    '<h3>Time\'s Up!</h3>' +
    '<p>' + Object.keys(answers).length + ' answered' +
    (unanswered > 0 ? ' &middot; ' + unanswered + ' unanswered (no penalty)' : '') + '</p>' +
    '<button class="q-nav-btn primary" onclick="this.parentNode.remove();submitTest()">See Results</button>';

  var container = document.querySelector('.container');
  container.insertBefore(notice, container.firstChild.nextSibling);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

setInterval(checkQuestionNudge, 1000);

/* ---------- Test Rendering ---------- */
function renderTest() {
  const q = questions[currentQ];
  document.getElementById('progress-fill').style.width = ((currentQ + 1) / questions.length * 100) + '%';
  document.getElementById('progress-label').textContent = (currentQ + 1) + ' / ' + questions.length;
  document.getElementById('q-number').textContent = 'Question ' + (currentQ + 1);
  document.getElementById('q-topic').textContent = q.topic;
  document.getElementById('q-text').innerHTML = q.question;

  const list = document.getElementById('choices-list');
  list.innerHTML = '';
  q.choices.forEach(function(c, i) {
    var btn = document.createElement('button');
    btn.className = 'choice-btn' + (answers[currentQ] === LETTERS[i] ? ' selected' : '');
    btn.innerHTML = '<span class="choice-letter">' + LETTERS[i] + '</span><span class="choice-text">' + c + '</span>';
    btn.onclick = function() { selectAnswer(LETTERS[i]); };
    list.appendChild(btn);
  });

  var fb = document.getElementById('flag-btn');
  fb.className = 'flag-btn' + (flags[currentQ] ? ' flagged' : '');
  fb.textContent = flags[currentQ] ? '⚑ Flagged' : '⚑ Flag';

  document.getElementById('prev-btn').disabled = currentQ === 0;
  var nb = document.getElementById('next-btn');
  if (currentQ === questions.length - 1) {
    nb.textContent = 'Review & Submit';
    nb.className = 'q-nav-btn primary';
  } else {
    nb.textContent = 'Next →';
    nb.className = 'q-nav-btn';
  }
  renderDots();
  saveProgress();
}

function renderDots() {
  var wrap = document.getElementById('q-dots');
  wrap.innerHTML = '';
  questions.forEach(function(_, i) {
    var d = document.createElement('div');
    var cls = 'q-dot';
    if (i === currentQ) cls += ' current';
    if (answers[i] !== undefined) cls += ' answered';
    if (flags[i]) cls += ' flagged-dot';
    d.className = cls;
    d.textContent = i + 1;
    d.onclick = function() { trackQuestionTime(); currentQ = i; questionEnteredAt = Date.now(); resetQuestionNudge(); renderTest(); };
    wrap.appendChild(d);
  });
}

function selectAnswer(letter) { answers[currentQ] = letter; renderTest(); }
function toggleFlag() { flags[currentQ] = !flags[currentQ]; renderTest(); }
function prevQuestion() {
  if (currentQ > 0) {
    trackQuestionTime();
    currentQ--;
    questionEnteredAt = Date.now();
    resetQuestionNudge();
    renderTest();
  }
}
function nextQuestion() {
  trackQuestionTime();
  if (currentQ < questions.length - 1) {
    currentQ++;
    questionEnteredAt = Date.now();
    resetQuestionNudge();
    renderTest();
  } else {
    showReview();
  }
}

/* ---------- Review Before Submit ---------- */
function showReview() {
  var answeredCount = Object.keys(answers).length;
  var flaggedCount = Object.keys(flags).filter(function(k) { return flags[k]; }).length;
  var skippedCount = questions.length - answeredCount;

  var h = '<div class="review-panel"><h3>Review Before Submitting</h3>';
  if (timerEnabled) {
    h += '<div class="timer-display" style="margin-bottom:16px;display:inline-flex"><span class="timer-icon">⏱</span><span class="timer-clock">' + formatTime(timerRemaining) + ' remaining</span></div>';
  }
  h += '<p style="color:var(--text2);font-size:0.88rem;margin-bottom:16px">';
  h += '<strong>' + answeredCount + '</strong> answered';
  if (skippedCount > 0) h += ' &middot; <strong>' + skippedCount + '</strong> skipped';
  if (flaggedCount > 0) h += ' &middot; <strong>' + flaggedCount + '</strong> flagged';
  h += '</p><div class="review-grid">';
  questions.forEach(function(_, i) {
    var cls = 'review-item', label = '';
    if (flags[i]) { cls += ' r-flagged'; label = '⚑ Q' + (i+1); }
    else if (answers[i] !== undefined) { cls += ' r-answered'; label = '✓ Q' + (i+1); }
    else { cls += ' r-skipped'; label = '— Q' + (i+1); }
    h += '<div class="' + cls + '" style="cursor:pointer" onclick="currentQ=' + i + ';questionEnteredAt=Date.now();resetQuestionNudge();hideReview();renderTest()">' + label + '</div>';
  });
  h += '</div><div style="display:flex;gap:12px;margin-top:16px">';
  h += '<button class="q-nav-btn" onclick="hideReview()">← Back to Questions</button>';
  h += '<button class="q-nav-btn primary" onclick="submitTest()">Submit Test</button>';
  h += '</div></div>';

  document.getElementById('review-panel').innerHTML = h;
  document.getElementById('review-panel').style.display = 'block';
  document.getElementById('test-taking').style.display = 'none';
}
function hideReview() {
  document.getElementById('review-panel').style.display = 'none';
  document.getElementById('test-taking').style.display = 'block';
}

/* ---------- Scoring ---------- */
function submitTest() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  trackQuestionTime();

  var rawCorrect = 0, rawWrong = 0, rawSkipped = 0;
  var byTopic = {}, byCat = {};

  questions.forEach(function(q, i) {
    var t = q.topic, c = q.category;
    if (!byTopic[t]) byTopic[t] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
    if (!byCat[c]) byCat[c] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
    byTopic[t].total++; byCat[c].total++;

    if (answers[i] === undefined) {
      rawSkipped++; byTopic[t].skipped++; byCat[c].skipped++;
    } else if (answers[i] === q.answer) {
      rawCorrect++; byTopic[t].correct++; byCat[c].correct++;
    } else {
      rawWrong++; byTopic[t].wrong++; byCat[c].wrong++;
    }
  });

  var adjustedScore = Math.max(0, rawCorrect - (rawWrong * 0.25));
  var timeUsed = timerEnabled ? timeLimitSec - Math.max(timerRemaining, 0) : null;
  var result = {
    testId: testId,
    completedAt: new Date().toISOString(),
    rawScore: rawCorrect,
    adjustedScore: parseFloat(adjustedScore.toFixed(2)),
    totalQuestions: questions.length,
    correct: rawCorrect, wrong: rawWrong, skipped: rawSkipped,
    pct: Math.round((rawCorrect / questions.length) * 100),
    answers: Object.assign({}, answers),
    byTopic: byTopic,
    byCategory: byCat,
    timed: timerEnabled,
    timeUsed: timeUsed,
    perQuestionTime: timerEnabled ? Object.assign({}, perQuestionTime) : null
  };

  saveResult(result);
  showResults(result);
}

/* ---------- Results ---------- */
function showResults(result) {
  mode = 'results';
  document.getElementById('test-taking').style.display = 'none';
  document.getElementById('review-panel').style.display = 'none';
  var rc = document.getElementById('results-container');
  rc.style.display = 'block';

  var allResults = loadAllResults();
  var prevBest = getPreviousBest(allResults, testId);
  var isPB = !prevBest || result.rawScore > prevBest;

  var h = '';

  // Score hero
  h += '<div class="score-hero">';
  h += '<div class="score-big">' + result.pct + '%</div>';
  h += '<div class="score-subtitle">' + result.correct + ' of ' + result.totalQuestions + ' correct</div>';
  h += '<div class="score-row">';
  h += '<div class="score-stat s-green"><div class="score-stat-val">' + result.rawScore + '</div><div class="score-stat-label">Raw Score</div></div>';
  h += '<div class="score-stat s-gold"><div class="score-stat-val">' + result.adjustedScore.toFixed(1) + '</div><div class="score-stat-label">Adjusted (−¼ penalty)</div></div>';
  h += '<div class="score-stat s-red"><div class="score-stat-val">' + result.skipped + '</div><div class="score-stat-label">Skipped</div></div>';
  if (result.timed && result.timeUsed != null) {
    h += '<div class="score-stat"><div class="score-stat-val">' + formatTime(result.timeUsed) + '</div><div class="score-stat-label">Time Used</div></div>';
  }
  h += '</div>';
  h += '<div class="motivational">' + getMotivation(result, allResults) + '</div>';
  if (isPB) h += '<div class="pb-badge">★ NEW PERSONAL BEST ★</div>';
  h += '</div>';

  // Category breakdown
  h += '<div class="topic-breakdown"><h3>By Category</h3>';
  Object.keys(CATEGORIES).forEach(function(cat) {
    var d = result.byCategory[cat];
    if (!d) return;
    var p = Math.round((d.correct / d.total) * 100);
    var color = p >= 80 ? 'green' : p >= 50 ? 'yellow' : 'red';
    h += '<div class="tb-row"><div class="tb-name">' + cat + '</div>';
    h += '<div class="tb-bar-wrap"><div class="tb-bar tb-' + color + '" style="width:' + p + '%"></div></div>';
    h += '<div class="tb-score tb-c-' + color + '">' + d.correct + '/' + d.total + '</div></div>';
  });
  h += '</div>';

  // Topic breakdown
  h += '<div class="topic-breakdown"><h3>By Topic</h3>';
  var sortedTopics = Object.entries(result.byTopic).sort(function(a, b) { return (a[1].correct / a[1].total) - (b[1].correct / b[1].total); });
  sortedTopics.forEach(function(entry) {
    var name = entry[0], d = entry[1];
    var p = Math.round((d.correct / d.total) * 100);
    var color = p >= 80 ? 'green' : p >= 50 ? 'yellow' : 'red';
    h += '<div class="tb-row"><div class="tb-name">' + name + '</div>';
    h += '<div class="tb-bar-wrap"><div class="tb-bar tb-' + color + '" style="width:' + p + '%"></div></div>';
    h += '<div class="tb-score tb-c-' + color + '">' + d.correct + '/' + d.total + '</div></div>';
  });
  h += '</div>';

  // Strengths / Focus
  var strong = sortedTopics.filter(function(e) { return e[1].correct / e[1].total >= 0.8; }).map(function(e) { return e[0]; });
  var focus = sortedTopics.filter(function(e) { return e[1].correct / e[1].total < 0.5; }).map(function(e) { return e[0]; });
  if (strong.length || focus.length) {
    h += '<div class="sw-callout">';
    if (strong.length) h += '<div class="sw-box sw-strong"><div class="sw-label">Strong</div><div class="sw-list">' + strong.join('<br>') + '</div></div>';
    if (focus.length) h += '<div class="sw-box sw-focus"><div class="sw-label">Focus Next</div><div class="sw-list">' + focus.join('<br>') + '</div></div>';
    h += '</div>';
  }

  // Question review
  h += '<div class="section" style="margin-top:32px"><div class="section-label">Review</div><div class="section-title">All Questions</div>';
  h += '<p class="section-desc">Wrong and skipped answers are expanded. Tap any question to toggle.</p></div>';
  h += '<div class="qr-list">';
  questions.forEach(function(q, i) {
    var userAns = result.answers[i];
    var isCorrect = userAns === q.answer;
    var isSkipped = userAns === undefined;
    var cls = isSkipped ? 'qr-skipped' : isCorrect ? 'qr-correct' : 'qr-wrong';
    var open = !isCorrect ? ' open' : '';
    var tagText = isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Wrong';

    h += '<div class="qr-item ' + cls + open + '" id="qr-' + i + '">';
    h += '<div class="qr-header" onclick="toggleQR(' + i + ')">';
    h += '<div class="qr-header-left"><span class="qr-q-num">Q' + (i+1) + '</span><span class="qr-q-preview">' + stripHTML(q.question).substring(0, 55) + '…</span></div>';
    h += '<div style="display:flex;align-items:center;gap:8px"><span class="qr-result-tag">' + tagText + '</span><span class="qr-arrow">▼</span></div>';
    h += '</div><div class="qr-body">';
    h += '<div class="qr-question-text">' + q.question + '</div>';
    h += '<div class="qr-choices-review">';
    q.choices.forEach(function(c, ci) {
      var letter = LETTERS[ci];
      var ccls = 'qr-choice qr-ch-neutral', marker = '';
      if (letter === q.answer) { ccls = 'qr-choice qr-ch-correct'; marker = ' ✓'; }
      else if (letter === userAns && !isCorrect) { ccls = 'qr-choice qr-ch-wrong'; marker = ' ✗'; }
      h += '<div class="' + ccls + '"><strong>' + letter + ')</strong> ' + c + marker + '</div>';
    });
    h += '</div>';
    h += '<div class="qr-explanation">' + q.explanation + '</div>';
    h += '<span class="qr-source">Source: ' + q.source + '</span>';
    h += '</div></div>';
  });
  h += '</div>';
  h += '<div style="text-align:center;margin-top:32px"><a href="tests.html" class="q-nav-btn primary" style="text-decoration:none;display:inline-block">← Back to Dashboard</a></div>';

  rc.innerHTML = h;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleQR(i) { document.getElementById('qr-' + i).classList.toggle('open'); }
function stripHTML(s) { var d = document.createElement('div'); d.innerHTML = s; return d.textContent || ''; }

/* ---------- Motivation ---------- */
function getMotivation(result, allResults) {
  var pct = result.pct;
  var history = getTestHistory(allResults);
  var prev = history.length >= 2 ? history[history.length - 2] : null;
  if (prev) {
    var diff = pct - prev.pct;
    if (diff > 10) return '"' + diff + ' points up from last time. That\'s serious growth."';
    if (diff > 0) return '"Trending up. Every point counts."';
    if (diff === 0) return '"Consistent. Now push for the next level."';
    if (diff > -5) return '"Slight dip — review the reds and run it back."';
    return '"Tough round. Hit the weak spots and come back stronger."';
  }
  if (pct >= 90) return '"Elite. You\'re test-ready."';
  if (pct >= 80) return '"Strong showing. Tighten up the misses and you\'re golden."';
  if (pct >= 70) return '"Solid base. Focus on the red topics and you\'ll jump."';
  if (pct >= 60) return '"Good start. The work you put in now shows up on test day."';
  return '"Every expert was once a beginner. Review and go again."';
}

/* ---------- localStorage ---------- */
function loadAllResults() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch(e) { return {}; }
}

function saveResult(result) {
  var all = loadAllResults();
  if (!all.tests) all.tests = {};
  if (!all.tests[testId]) all.tests[testId] = [];
  all.tests[testId].push(result);
  if (!all.personalBest || result.rawScore > all.personalBest.raw) {
    all.personalBest = { raw: result.rawScore, adjusted: result.adjustedScore, testId: testId, pct: result.pct };
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  clearProgress();
}

function saveProgress() {
  var data = { answers: answers, flags: flags, currentQ: currentQ };
  if (timerEnabled) {
    data.timerRemaining = timerRemaining;
    data.perQuestionTime = perQuestionTime;
  }
  localStorage.setItem(STORAGE_KEY + '_progress_' + testId, JSON.stringify(data));
}
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY + '_progress_' + testId)); } catch(e) { return null; }
}
function clearProgress() { localStorage.removeItem(STORAGE_KEY + '_progress_' + testId); }

function getPreviousBest(allResults, tid) {
  if (!allResults.tests || !allResults.tests[tid]) return null;
  var a = allResults.tests[tid];
  if (a.length <= 1) return null;
  return Math.max.apply(null, a.slice(0, -1).map(function(x) { return x.rawScore; }));
}

function getTestHistory(allResults) {
  if (!allResults.tests) return [];
  var all = [];
  Object.values(allResults.tests).forEach(function(attempts) {
    attempts.forEach(function(a) { all.push(a); });
  });
  return all.sort(function(a, b) { return new Date(a.completedAt) - new Date(b.completedAt); });
}

/* ---------- Coverage Data ---------- */
function getCoverageData(allResults) {
  var coverage = {};
  ALL_TOPICS.forEach(function(t) { coverage[t] = { attempted: 0, correct: 0, wrong: 0, skipped: 0, bankSize: 0 }; });

  // Count bank size from all test data
  if (typeof ALL_TEST_DATA !== 'undefined') {
    Object.values(ALL_TEST_DATA).forEach(function(qs) {
      qs.forEach(function(q) {
        if (coverage[q.topic]) coverage[q.topic].bankSize++;
      });
    });
  }

  // Aggregate results
  if (allResults.tests) {
    Object.values(allResults.tests).forEach(function(attempts) {
      attempts.forEach(function(a) {
        Object.entries(a.byTopic).forEach(function(entry) {
          var t = entry[0], d = entry[1];
          if (coverage[t]) {
            coverage[t].attempted += d.total;
            coverage[t].correct += d.correct;
            coverage[t].wrong += d.wrong;
            coverage[t].skipped += d.skipped;
          }
        });
      });
    });
  }
  return coverage;
}

/* ---------- Dashboard ---------- */
function initDashboard() {
  var all = loadAllResults();
  var history = getTestHistory(all);
  var coverage = getCoverageData(all);

  renderDashStats(all, history, coverage);
  renderTestCards(all);
  renderCoverageMap(coverage);
  renderCharts(history);
  renderRecommendation(all, coverage);
}

function renderDashStats(all, history, coverage) {
  var uniqueTests = all.tests ? Object.keys(all.tests).length : 0;
  var totalAttempts = history.length;
  var best = all.personalBest ? all.personalBest.pct + '%' : '—';

  var topicsCovered = 0, topicsTotal = ALL_TOPICS.length;
  ALL_TOPICS.forEach(function(t) { if (coverage[t] && coverage[t].attempted > 0) topicsCovered++; });

  var totalTests = typeof TIMED_TEST_META !== 'undefined' ? TIMED_TEST_META.length : 5;
  document.getElementById('stat-completed').textContent = uniqueTests + '/' + totalTests;
  document.getElementById('stat-attempts').textContent = totalAttempts;
  document.getElementById('stat-best').textContent = best;
  document.getElementById('stat-coverage').textContent = topicsCovered + '/' + topicsTotal;
}

function renderTestCards(all) {
  var wrap = document.getElementById('test-cards');
  wrap.innerHTML = '';
  for (var i = 1; i <= 5; i++) {
    var tid = 'test' + i;
    var attempts = all.tests && all.tests[tid] ? all.tests[tid] : [];
    var latest = attempts.length ? attempts[attempts.length - 1] : null;
    var card = document.createElement('a');
    card.href = 'test.html?id=' + i;
    card.className = 'test-card';
    var rightHTML = '';
    if (latest) {
      var p = latest.pct;
      var color = p >= 80 ? 'tc-green' : p >= 50 ? 'tc-yellow' : 'tc-red';
      rightHTML = '<span class="tc-score ' + color + '">' + p + '%</span><span class="tc-tag tc-done">Done</span>';
    } else {
      rightHTML = '<span class="tc-tag tc-new">Start</span>';
    }
    card.innerHTML = '<div class="tc-left"><span class="tc-num">' + i + '</span><div class="tc-info"><h4>Practice Test ' + i + '</h4><p>30 questions &middot; All 5 categories</p></div></div><div class="tc-right">' + rightHTML + '</div>';
    wrap.appendChild(card);
  }

  var timedWrap = document.getElementById('timed-cards');
  if (!timedWrap || typeof TIMED_TEST_META === 'undefined') return;
  timedWrap.innerHTML = '';
  TIMED_TEST_META.forEach(function(meta) {
    var tid = meta.id;
    var attempts = all.tests && all.tests[tid] ? all.tests[tid] : [];
    var latest = attempts.length ? attempts[attempts.length - 1] : null;
    var card = document.createElement('a');
    card.href = 'test.html?id=' + tid;
    card.className = 'test-card';
    var rightHTML = '';
    if (latest) {
      var p = latest.pct;
      var color = p >= 80 ? 'tc-green' : p >= 50 ? 'tc-yellow' : 'tc-red';
      var timeStr = latest.timeUsed != null ? ' &middot; ' + formatTime(latest.timeUsed) : '';
      rightHTML = '<span class="tc-score ' + color + '">' + p + '%</span><span class="tc-tag tc-done">' + formatTime(latest.timeUsed || 0) + '</span>';
    } else {
      rightHTML = '<span class="tc-tag tc-new">Start</span>';
    }
    card.innerHTML = '<div class="tc-left"><span class="tc-num" style="color:var(--gold)">⚡</span><div class="tc-info"><h4>' + meta.label + '</h4><p>' + meta.questions + ' questions &middot; ' + formatTime(meta.timeLimit) + ' limit</p></div></div><div class="tc-right">' + rightHTML + '</div>';
    timedWrap.appendChild(card);
  });
}

function renderCoverageMap(coverage) {
  var wrap = document.getElementById('coverage-map');
  if (!wrap) return;
  var h = '';

  Object.keys(CATEGORIES).forEach(function(cat) {
    h += '<div style="margin-bottom:24px">';
    h += '<div style="font-size:0.82rem;font-weight:700;color:var(--gold);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.06em">' + cat + '</div>';
    h += '<div class="mastery-grid">';
    CATEGORIES[cat].forEach(function(topic) {
      var d = coverage[topic] || { attempted: 0, correct: 0, wrong: 0, bankSize: 0 };
      var pct = d.attempted > 0 ? Math.round((d.correct / d.attempted) * 100) : -1;
      var level, cls, color;
      if (d.attempted === 0) { level = 'Not practiced'; cls = 'ml-none'; color = 'var(--text3)'; }
      else if (pct >= 80) { level = 'Strong'; cls = 'ml-strong'; color = 'var(--green)'; }
      else if (pct >= 50) { level = 'Solid'; cls = 'ml-solid'; color = 'var(--yellow)'; }
      else { level = 'Developing'; cls = 'ml-dev'; color = 'var(--red)'; }

      var detail = d.attempted > 0 ? d.correct + '/' + d.attempted + ' correct' : d.bankSize + ' in bank';

      h += '<div class="mastery-item' + (d.attempted === 0 ? ' blind-spot' : '') + '">';
      h += '<div class="mastery-name">' + topic + '</div>';
      h += '<div class="mastery-level ' + cls + '">' + level + '</div>';
      h += '<div style="font-size:0.68rem;color:var(--text3);margin-top:2px">' + detail + '</div>';
      h += '<div class="mastery-bar"><div class="mastery-fill" style="width:' + Math.max(pct, 0) + '%;background:' + color + '"></div></div>';
      h += '</div>';
    });
    h += '</div></div>';
  });

  // Blind spots callout
  var blindSpots = ALL_TOPICS.filter(function(t) { return !coverage[t] || coverage[t].attempted === 0; });
  if (blindSpots.length > 0) {
    h += '<div class="sw-box sw-focus" style="margin-top:20px"><div class="sw-label">Blind Spots — ' + blindSpots.length + ' topics not yet practiced</div>';
    h += '<div class="sw-list">' + blindSpots.join('<br>') + '</div></div>';
  }

  // Weak spots
  var weakSpots = ALL_TOPICS.filter(function(t) {
    var d = coverage[t];
    return d && d.attempted > 0 && (d.correct / d.attempted) < 0.5;
  });
  if (weakSpots.length > 0) {
    h += '<div class="sw-box sw-focus" style="margin-top:12px;background:var(--yellow-dim);border-color:rgba(212,168,67,0.3)"><div class="sw-label" style="color:var(--yellow)">Weak Spots — Below 50% accuracy</div>';
    h += '<div class="sw-list">' + weakSpots.join('<br>') + '</div></div>';
  }

  wrap.innerHTML = h;
}

function renderCharts(history) {
  var c1 = document.getElementById('chart-overall');
  var c2 = document.getElementById('chart-topics');
  if (history.length < 1) {
    if (c1) c1.innerHTML = '<div class="chart-empty">Complete a test to see your progress chart.</div>';
    if (c2) c2.innerHTML = '<div class="chart-empty">Complete a test to see category trends.</div>';
    return;
  }

  var labels = history.map(function(_, i) { return 'Attempt ' + (i + 1); });
  var scores = history.map(function(h) { return h.pct; });

  if (c1) {
    var ctx1 = document.createElement('canvas');
    c1.innerHTML = ''; c1.appendChild(ctx1);
    new Chart(ctx1, {
      type: 'line',
      data: { labels: labels, datasets: [{ label: 'Score %', data: scores, borderColor: '#c62828', backgroundColor: 'rgba(198,40,40,0.1)', fill: true, tension: 0.3, pointRadius: 5, pointBackgroundColor: '#d4a843' }] },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { min: 0, max: 100, ticks: { color: '#7a6b6b' }, grid: { color: 'rgba(45,34,34,0.5)' } }, x: { ticks: { color: '#7a6b6b' }, grid: { display: false } } } }
    });
  }

  if (c2) {
    var cats = Object.keys(CATEGORIES);
    var colors = ['#c62828', '#d4a843', '#34d399', '#60a5fa', '#f87171'];
    var datasets = cats.map(function(cat, ci) {
      var data = history.map(function(h) {
        var d = h.byCategory ? h.byCategory[cat] : null;
        return d ? Math.round((d.correct / d.total) * 100) : null;
      });
      return { label: cat, data: data, borderColor: colors[ci], backgroundColor: 'transparent', tension: 0.3, pointRadius: 4, spanGaps: true };
    });
    var ctx2 = document.createElement('canvas');
    c2.innerHTML = ''; c2.appendChild(ctx2);
    new Chart(ctx2, {
      type: 'line',
      data: { labels: labels, datasets: datasets },
      options: { responsive: true, plugins: { legend: { labels: { color: '#bfb0b0', font: { size: 11 } } } }, scales: { y: { min: 0, max: 100, ticks: { color: '#7a6b6b' }, grid: { color: 'rgba(45,34,34,0.5)' } }, x: { ticks: { color: '#7a6b6b' }, grid: { display: false } } } }
    });
  }
}

function renderRecommendation(all, coverage) {
  var el = document.getElementById('recommendation');
  if (!el) return;
  if (!all.tests || Object.keys(all.tests).length === 0) {
    el.innerHTML = '<div class="test-card" style="border-color:var(--gold);cursor:default"><div class="tc-left"><span class="tc-num" style="color:var(--gold)">⚡</span><div class="tc-info"><h4 style="color:var(--gold)">Start with Timed Quiz 1</h4><p>10 questions, 12 minutes. Quick and focused.</p></div></div><div class="tc-right"><a href="test.html?id=timed1" class="q-nav-btn primary" style="text-decoration:none">Begin</a></div></div>';
    return;
  }

  if (typeof TIMED_TEST_META !== 'undefined') {
    for (var t = 0; t < TIMED_TEST_META.length; t++) {
      var tmid = TIMED_TEST_META[t].id;
      if (!all.tests[tmid]) {
        var tnum = tmid.replace('timed', '');
        el.innerHTML = '<div class="test-card" style="border-color:var(--gold);cursor:default"><div class="tc-left"><span class="tc-num" style="color:var(--gold)">⚡</span><div class="tc-info"><h4 style="color:var(--gold)">Recommended: Timed Quiz ' + tnum + '</h4><p>10 questions, 12-minute countdown. Keep pushing.</p></div></div><div class="tc-right"><a href="test.html?id=' + tmid + '" class="q-nav-btn primary" style="text-decoration:none">Begin</a></div></div>';
        return;
      }
    }
  }

  for (var i = 1; i <= 5; i++) {
    if (!all.tests['test' + i]) {
      el.innerHTML = '<div class="test-card" style="border-color:var(--gold);cursor:default"><div class="tc-left"><span class="tc-num" style="color:var(--gold)">→</span><div class="tc-info"><h4 style="color:var(--gold)">Recommended: Practice Test ' + i + '</h4><p>30 questions — full-length practice.</p></div></div><div class="tc-right"><a href="test.html?id=' + i + '" class="q-nav-btn primary" style="text-decoration:none">Begin</a></div></div>';
      return;
    }
  }
  var lowest = null, lowestPct = 101;
  Object.entries(all.tests).forEach(function(entry) {
    var last = entry[1][entry[1].length - 1];
    if (last.pct < lowestPct) { lowestPct = last.pct; lowest = entry[0]; }
  });
  var href = lowest && lowest.indexOf('timed') === 0 ? lowest : lowest ? lowest.replace('test', '') : '1';
  var label = lowest && lowest.indexOf('timed') === 0 ? 'Timed Quiz ' + lowest.replace('timed', '') : 'Practice Test ' + href;
  el.innerHTML = '<div class="test-card" style="border-color:var(--gold);cursor:default"><div class="tc-left"><span class="tc-num" style="color:var(--gold)">↻</span><div class="tc-info"><h4 style="color:var(--gold)">Retake: ' + label + '</h4><p>Your lowest score was ' + lowestPct + '%. Run it back.</p></div></div><div class="tc-right"><a href="test.html?id=' + href + '" class="q-nav-btn primary" style="text-decoration:none">Retake</a></div></div>';
}

/* ---------- Theme ---------- */
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
