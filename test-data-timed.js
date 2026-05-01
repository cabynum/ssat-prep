// ============================================================
// Timed Quizzes — 10 questions each, 12-minute limit
// Quizzes 1-5: original questions below
// Quizzes 6-20: sliced from tests 1-5 (test-data.js / test-data-pt2.js)
// ============================================================

var TIMED_TEST_META = [];
(function() {
  for (var i = 1; i <= 20; i++) {
    TIMED_TEST_META.push({ id: 'timed' + i, label: 'Timed Quiz ' + i, questions: 10, timeLimit: 720, nudgeAt: 90, timed: true });
  }
})();

// Quizzes 6-20: sliced from the 30-question tests
(function() {
  var mapping = [
    { src: 'test1', targets: ['timed6', 'timed7', 'timed8'] },
    { src: 'test2', targets: ['timed9', 'timed10', 'timed11'] },
    { src: 'test3', targets: ['timed12', 'timed13', 'timed14'] },
    { src: 'test4', targets: ['timed15', 'timed16', 'timed17'] },
    { src: 'test5', targets: ['timed18', 'timed19', 'timed20'] }
  ];
  mapping.forEach(function(m) {
    var src = ALL_TEST_DATA[m.src];
    if (!src) return;
    ALL_TEST_DATA[m.targets[0]] = src.slice(0, 10);
    ALL_TEST_DATA[m.targets[1]] = src.slice(10, 20);
    ALL_TEST_DATA[m.targets[2]] = src.slice(20, 30);
  });
})();

// === TIMED QUIZ 1 ===
ALL_TEST_DATA.timed1 = [
  {
    id: "tq1q1",
    category: "Number Sense",
    topic: "Comparing Values",
    source: "Claude",
    question: "Which of the following is the greatest?",
    choices: ["5/8", "0.6", "62%", "3/5", "0.59"],
    answer: "A",
    explanation: "Step 1: Convert to decimals.\n5/8 = 0.625\n0.6 = 0.600\n62% = 0.620\n3/5 = 0.600\n0.59 = 0.590\n\nStep 2: 0.625 is the largest.\n\nAnswer: (A) 5/8"
  },
  {
    id: "tq1q2",
    category: "Number Sense",
    topic: "Fraction Operations",
    source: "Claude",
    question: "A board is 7½ feet long. If you cut off a piece that is 2¾ feet, how much is left?",
    choices: ["4 1/4 ft", "4 1/2 ft", "4 3/4 ft", "5 ft", "5 1/4 ft"],
    answer: "C",
    explanation: "Step 1: Subtract. 7½ − 2¾\n= 7 2/4 − 2 3/4\n\nStep 2: Borrow 1 from 7: 6 6/4 − 2 3/4 = 4 3/4\n\nAnswer: (C) 4 3/4 ft"
  },
  {
    id: "tq1q3",
    category: "Number Sense",
    topic: "Divisibility",
    source: "Claude",
    question: "Which of the following numbers is divisible by both 4 and 6?",
    choices: ["16", "18", "24", "30", "32"],
    answer: "C",
    explanation: "Step 1: Check each.\n16: 16÷4=4 ✓, 16÷6=2.67 ✗\n18: 18÷4=4.5 ✗\n24: 24÷4=6 ✓, 24÷6=4 ✓\n30: 30÷4=7.5 ✗\n32: 32÷4=8 ✓, 32÷6=5.33 ✗\n\nAnswer: (C) 24"
  },
  {
    id: "tq1q4",
    category: "Algebra",
    topic: "Unit Rate",
    source: "Claude",
    question: "A 12-pack of water bottles costs $3.60. A 20-pack costs $5.40. Which is the better deal per bottle?",
    choices: ["12-pack by $0.03", "20-pack by $0.03", "They cost the same", "12-pack by $0.10", "20-pack by $0.10"],
    answer: "B",
    explanation: "Step 1: Find cost per bottle.\n12-pack: $3.60 ÷ 12 = $0.30 per bottle\n20-pack: $5.40 ÷ 20 = $0.27 per bottle\n\nStep 2: Difference: $0.30 − $0.27 = $0.03 cheaper per bottle for the 20-pack.\n\nAnswer: (B) 20-pack by $0.03"
  },
  {
    id: "tq1q5",
    category: "Algebra",
    topic: "Percent Problem",
    source: "Claude",
    question: "A basketball player made 42 out of 60 free throws. What percentage did she make?",
    choices: ["42%", "60%", "65%", "70%", "72%"],
    answer: "D",
    explanation: "Step 1: Divide.\n42 ÷ 60 = 0.70\n\nStep 2: Convert to percent.\n0.70 × 100 = 70%\n\nShortcut: 42/60 = 7/10 = 70%\n\nAnswer: (D) 70%"
  },
  {
    id: "tq1q6",
    category: "Geometry",
    topic: "Triangle Angles",
    source: "Claude",
    question: "An isosceles triangle has a vertex angle of 40°. What is the measure of each base angle?",
    choices: ["40°", "50°", "60°", "70°", "80°"],
    answer: "D",
    explanation: "Step 1: An isosceles triangle has two equal base angles.\n\nStep 2: All angles sum to 180°.\n180 − 40 = 140° remaining for two equal angles\n140 ÷ 2 = 70° each\n\nAnswer: (D) 70°"
  },
  {
    id: "tq1q7",
    category: "Geometry",
    topic: "Circle",
    source: "Claude",
    question: "A circular pool has a diameter of 14 feet. What is its circumference? (Use π ≈ 22/7)",
    choices: ["22 ft", "28 ft", "44 ft", "88 ft", "154 ft"],
    answer: "C",
    explanation: "Step 1: Circumference = π × diameter\n= (22/7) × 14\n= 22 × 2\n= 44 feet\n\nAnswer: (C) 44 ft"
  },
  {
    id: "tq1q8",
    category: "Data Analysis",
    topic: "Mean",
    source: "Claude",
    question: "Five friends scored 12, 18, 15, 20, and 10 points in a game. What was the mean score?",
    choices: ["12", "14", "15", "16", "18"],
    answer: "C",
    explanation: "Step 1: Add the scores.\n12 + 18 + 15 + 20 + 10 = 75\n\nStep 2: Divide by 5.\n75 ÷ 5 = 15\n\nAnswer: (C) 15"
  },
  {
    id: "tq1q9",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A jar has 5 red, 3 yellow, and 2 blue gumballs. What is the probability of drawing a red OR yellow gumball?",
    choices: ["1/2", "3/5", "3/4", "4/5", "8/10"],
    answer: "D",
    explanation: "Step 1: Total gumballs = 5 + 3 + 2 = 10\n\nStep 2: Red or yellow = 5 + 3 = 8\n\nStep 3: P = 8/10 = 4/5\n\nAnswer: (D) 4/5"
  },
  {
    id: "tq1q10",
    category: "Reasoning",
    topic: "Estimation",
    source: "Claude",
    question: "A school has 487 students and wants to give each student 3 pencils. Pencils come in boxes of 50. What is the minimum number of boxes needed?",
    choices: ["28", "29", "30", "31", "50"],
    answer: "C",
    explanation: "Step 1: Total pencils = 487 × 3 = 1,461\n\nStep 2: Divide by 50.\n1,461 ÷ 50 = 29.22\n\nStep 3: Round up (can't buy a partial box).\nNeed 30 boxes.\n\nAnswer: (C) 30"
  }
];

// === TIMED QUIZ 2 ===
ALL_TEST_DATA.timed2 = [
  {
    id: "tq2q1",
    category: "Number Sense",
    topic: "Mixed Numbers",
    source: "Claude",
    question: "What is 3⅔ × 1½?",
    choices: ["4 1/2", "5", "5 1/2", "6", "6 1/6"],
    answer: "C",
    explanation: "Step 1: Convert to improper fractions.\n3⅔ = 11/3 and 1½ = 3/2\n\nStep 2: Multiply.\n11/3 × 3/2 = 33/6 = 11/2 = 5½\n\nAnswer: (C) 5 1/2"
  },
  {
    id: "tq2q2",
    category: "Number Sense",
    topic: "Percent Change",
    source: "Claude",
    question: "A shirt originally costs $40. It's marked up 50%, then put on sale for 50% off. What is the final price?",
    choices: ["$20", "$30", "$35", "$40", "$45"],
    answer: "B",
    explanation: "Step 1: 50% markup: $40 × 1.50 = $60\n\nStep 2: 50% off: $60 × 0.50 = $30\n\nThe final price is $30 — NOT the original $40. The 50% discount applies to the higher price.\n\nAnswer: (B) $30"
  },
  {
    id: "tq2q3",
    category: "Number Sense",
    topic: "Prime Factorization",
    source: "Claude",
    question: "What is the prime factorization of 72?",
    choices: ["2² × 3²", "2³ × 3²", "2 × 6²", "4 × 18", "8 × 9"],
    answer: "B",
    explanation: "Step 1: Factor tree.\n72 = 8 × 9 = 2³ × 3²\n\nStep 2: Check: 8 × 9 = 72 ✓, and 2 and 3 are both prime.\n\nNote: (D) and (E) are correct factorizations but not PRIME factorizations.\n\nAnswer: (B) 2³ × 3²"
  },
  {
    id: "tq2q4",
    category: "Algebra",
    topic: "Proportions",
    source: "Claude",
    question: "A car uses 5 gallons of gas to travel 150 miles. At this rate, how many gallons are needed for a 420-mile trip?",
    choices: ["12", "14", "15", "16", "21"],
    answer: "B",
    explanation: "Step 1: Find miles per gallon.\n150 ÷ 5 = 30 mpg\n\nStep 2: Divide trip distance by rate.\n420 ÷ 30 = 14 gallons\n\nAnswer: (B) 14"
  },
  {
    id: "tq2q5",
    category: "Algebra",
    topic: "Word Problem",
    source: "Claude",
    question: "A parking lot charges $5 for the first hour and $3 for each additional hour. If Marcus paid $20, how many hours did he park?",
    choices: ["4", "5", "6", "7", "8"],
    answer: "C",
    explanation: "Step 1: After the first hour, remaining cost = $20 − $5 = $15\n\nStep 2: Additional hours = $15 ÷ $3 = 5 hours\n\nStep 3: Total = 1 + 5 = 6 hours\n\nAnswer: (C) 6"
  },
  {
    id: "tq2q6",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "Two similar triangles have a scale factor of 3:5. If the perimeter of the smaller triangle is 24 cm, what is the perimeter of the larger triangle?",
    choices: ["30 cm", "32 cm", "36 cm", "40 cm", "45 cm"],
    answer: "D",
    explanation: "Step 1: For similar figures, perimeters scale by the same ratio.\n\nStep 2: 3/5 = 24/x\n3x = 120\nx = 40\n\nAnswer: (D) 40 cm"
  },
  {
    id: "tq2q7",
    category: "Geometry",
    topic: "Area",
    source: "Claude",
    question: "A rectangle has length 12 cm and width 5 cm. A triangle with the same base and height has an area of",
    choices: ["17 cm²", "30 cm²", "34 cm²", "60 cm²", "120 cm²"],
    answer: "B",
    explanation: "Step 1: Triangle area = ½ × base × height\n= ½ × 12 × 5\n= 30 cm²\n\nNote: A triangle with the same base and height as a rectangle always has HALF the area.\n\nAnswer: (B) 30 cm²"
  },
  {
    id: "tq2q8",
    category: "Data Analysis",
    topic: "Median",
    source: "Claude",
    question: "The test scores are: 78, 92, 85, 88, 95, 82. What is the median?",
    choices: ["84", "85", "86", "86.5", "88"],
    answer: "D",
    explanation: "Step 1: Arrange in order.\n78, 82, 85, 88, 92, 95\n\nStep 2: With 6 numbers (even count), the median is the average of the 3rd and 4th values.\n(85 + 88) / 2 = 173 / 2 = 86.5\n\nAnswer: (D) 86.5"
  },
  {
    id: "tq2q9",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "For lunch, you can choose 1 sandwich (turkey, ham, or veggie), 1 side (chips or fruit), and 1 drink (water, juice, or milk). How many different lunch combinations are possible?",
    choices: ["8", "12", "15", "18", "24"],
    answer: "D",
    explanation: "Step 1: Multiply the choices.\n3 sandwiches × 2 sides × 3 drinks = 18\n\nAnswer: (D) 18"
  },
  {
    id: "tq2q10",
    category: "Reasoning",
    topic: "Number Properties",
    source: "Claude",
    question: "If a and b are both negative integers, which of the following MUST be positive?",
    choices: ["a + b", "a − b", "a × b", "a ÷ b", "a × b could be positive or negative"],
    answer: "C",
    explanation: "Step 1: Negative × negative = positive. Always.\n\nStep 2: Check the others.\n(A) negative + negative = negative ✗\n(B) negative − negative = could be positive or negative ✗\n(D) negative ÷ negative = positive ✓ (also works, but a÷b might not be an integer)\n\nBoth (C) and (D) give positive results, but (C) is the clearest MUST.\n\nAnswer: (C) a × b"
  }
];

// === TIMED QUIZ 3 ===
ALL_TEST_DATA.timed3 = [
  {
    id: "tq3q1",
    category: "Number Sense",
    topic: "Decimals",
    source: "Claude",
    question: "Which is the correct order from least to greatest: 0.7, 0.07, 0.71, 0.17?",
    choices: ["0.07, 0.7, 0.17, 0.71", "0.07, 0.17, 0.7, 0.71", "0.17, 0.07, 0.7, 0.71", "0.7, 0.07, 0.71, 0.17", "0.07, 0.71, 0.17, 0.7"],
    answer: "B",
    explanation: "Step 1: Write with equal decimal places.\n0.70, 0.07, 0.71, 0.17\n\nStep 2: Order: 0.07, 0.17, 0.70, 0.71\n\nAnswer: (B) 0.07, 0.17, 0.7, 0.71"
  },
  {
    id: "tq3q2",
    category: "Number Sense",
    topic: "Fractions",
    source: "Claude",
    question: "What is ¾ ÷ ⅜?",
    choices: ["9/32", "1/2", "1", "2", "3"],
    answer: "D",
    explanation: "Step 1: Keep-Change-Flip.\n3/4 ÷ 3/8 = 3/4 × 8/3\n\nStep 2: Multiply.\n= 24/12 = 2\n\nAnswer: (D) 2"
  },
  {
    id: "tq3q3",
    category: "Number Sense",
    topic: "Absolute Value",
    source: "Claude",
    question: "What is the value of |−7 + 3| + |4 − 9|?",
    choices: ["1", "5", "7", "9", "11"],
    answer: "D",
    explanation: "Step 1: |−7 + 3| = |−4| = 4\n\nStep 2: |4 − 9| = |−5| = 5\n\nStep 3: 4 + 5 = 9\n\nAnswer: (D) 9"
  },
  {
    id: "tq3q4",
    category: "Algebra",
    topic: "Rate Problem",
    source: "Claude",
    question: "A printer can print 30 pages per minute. How long will it take to print a 450-page document?",
    choices: ["12 min", "13 min", "15 min", "18 min", "20 min"],
    answer: "C",
    explanation: "Step 1: Time = total pages ÷ rate\n= 450 ÷ 30\n= 15 minutes\n\nAnswer: (C) 15 min"
  },
  {
    id: "tq3q5",
    category: "Algebra",
    topic: "Linear Equation",
    source: "Claude",
    question: "If 3(x − 4) = 15, what is x?",
    choices: ["3", "5", "7", "9", "11"],
    answer: "D",
    explanation: "Step 1: Divide both sides by 3.\nx − 4 = 5\n\nStep 2: Add 4.\nx = 9\n\nAnswer: (D) 9"
  },
  {
    id: "tq3q6",
    category: "Geometry",
    topic: "Supplementary Angles",
    source: "Claude",
    question: "Two angles are supplementary. One is 3 times the other. What is the larger angle?",
    choices: ["30°", "45°", "90°", "120°", "135°"],
    answer: "E",
    explanation: "Step 1: Let the smaller angle = x. Larger = 3x.\nx + 3x = 180\n4x = 180\nx = 45\n\nStep 2: Larger angle = 3 × 45 = 135°\n\nAnswer: (E) 135°"
  },
  {
    id: "tq3q7",
    category: "Geometry",
    topic: "Volume",
    source: "Claude",
    question: "A fish tank is 20 inches long, 10 inches wide, and 12 inches tall. How many cubic inches of water can it hold?",
    choices: ["42", "240", "1,200", "2,400", "4,800"],
    answer: "D",
    explanation: "Step 1: Volume = length × width × height\n= 20 × 10 × 12\n= 2,400 cubic inches\n\nAnswer: (D) 2,400"
  },
  {
    id: "tq3q8",
    category: "Data Analysis",
    topic: "Range",
    source: "Claude",
    question: "A set of data has a range of 15 and the lowest value is 23. What is the highest value?",
    choices: ["8", "30", "35", "38", "46"],
    answer: "D",
    explanation: "Step 1: Range = highest − lowest\n15 = highest − 23\nhighest = 23 + 15 = 38\n\nAnswer: (D) 38"
  },
  {
    id: "tq3q9",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A coin is flipped 3 times. What is the probability of getting heads all 3 times?",
    choices: ["1/2", "1/3", "1/4", "1/6", "1/8"],
    answer: "E",
    explanation: "Step 1: Each flip has P(heads) = 1/2.\n\nStep 2: Flips are independent — multiply.\n1/2 × 1/2 × 1/2 = 1/8\n\nAnswer: (E) 1/8"
  },
  {
    id: "tq3q10",
    category: "Reasoning",
    topic: "Logic",
    source: "Claude",
    question: "The sum of three consecutive integers is 42. What is the largest of the three?",
    choices: ["12", "13", "14", "15", "16"],
    answer: "D",
    explanation: "Step 1: Let the three integers be n, n+1, n+2.\nn + (n+1) + (n+2) = 42\n3n + 3 = 42\n3n = 39\nn = 13\n\nStep 2: The three integers are 13, 14, 15. Largest is 15.\n\nAnswer: (D) 15"
  }
];

// === TIMED QUIZ 4 ===
ALL_TEST_DATA.timed4 = [
  {
    id: "tq4q1",
    category: "Number Sense",
    topic: "Converting",
    source: "Claude",
    question: "Which fraction is equivalent to 0.125?",
    choices: ["1/4", "1/5", "1/6", "1/8", "1/10"],
    answer: "D",
    explanation: "Step 1: 0.125 = 125/1000\n\nStep 2: Simplify: 125/1000 = 1/8 (divide both by 125)\n\nShortcut: 0.125 × 8 = 1.000, so 0.125 = 1/8.\n\nAnswer: (D) 1/8"
  },
  {
    id: "tq4q2",
    category: "Number Sense",
    topic: "GCF",
    source: "Claude",
    question: "What is the GCF of 28, 42, and 56?",
    choices: ["2", "4", "7", "14", "28"],
    answer: "D",
    explanation: "Step 1: Find prime factorizations.\n28 = 2² × 7\n42 = 2 × 3 × 7\n56 = 2³ × 7\n\nStep 2: Common factors: 2¹ × 7 = 14\n\nAnswer: (D) 14"
  },
  {
    id: "tq4q3",
    category: "Number Sense",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is 5² − 3 × (4 + 2)?",
    choices: ["1", "7", "13", "22", "132"],
    answer: "B",
    explanation: "Step 1: Parentheses: 4 + 2 = 6\nStep 2: Exponent: 5² = 25\nStep 3: Multiply: 3 × 6 = 18\nStep 4: Subtract: 25 − 18 = 7\n\nAnswer: (B) 7"
  },
  {
    id: "tq4q4",
    category: "Algebra",
    topic: "Tip Calculation",
    source: "Claude",
    question: "A restaurant bill is $45. You want to leave a 20% tip. What is the total including the tip?",
    choices: ["$49", "$50", "$52", "$54", "$56"],
    answer: "D",
    explanation: "Step 1: Find 20% of $45.\n0.20 × 45 = $9\n\nStep 2: Total = $45 + $9 = $54\n\nOr: $45 × 1.20 = $54\n\nAnswer: (D) $54"
  },
  {
    id: "tq4q5",
    category: "Algebra",
    topic: "Sequence",
    source: "Claude",
    question: "In the sequence 3, 7, 11, 15, 19, ..., what is the 10th term?",
    choices: ["35", "37", "39", "41", "43"],
    answer: "C",
    explanation: "Step 1: The pattern adds 4 each time (arithmetic sequence).\nFirst term = 3, common difference = 4.\n\nStep 2: nth term = first + (n−1) × difference\n10th = 3 + (10−1) × 4 = 3 + 36 = 39\n\nAnswer: (C) 39"
  },
  {
    id: "tq4q6",
    category: "Geometry",
    topic: "Pythagorean Theorem",
    source: "Claude",
    question: "A rectangular field is 40 yards long and 30 yards wide. What is the distance diagonally across the field?",
    choices: ["35 yds", "50 yds", "60 yds", "70 yds", "100 yds"],
    answer: "B",
    explanation: "Step 1: The diagonal is the hypotenuse.\n30² + 40² = d²\n900 + 1600 = 2500\nd = √2500 = 50\n\nShortcut: 30-40-50 is a 3-4-5 triple × 10.\n\nAnswer: (B) 50 yds"
  },
  {
    id: "tq4q7",
    category: "Geometry",
    topic: "Arc Length",
    source: "Claude",
    question: "A pizza is cut into 8 equal slices. If the pizza has a radius of 7 inches, what is the arc length of the crust on one slice? (Use π ≈ 22/7)",
    choices: ["3.5 in", "4.5 in", "5.5 in", "7 in", "11 in"],
    answer: "C",
    explanation: "Step 1: Each slice has a central angle of 360°/8 = 45°.\n\nStep 2: Arc = (45/360) × 2πr = (1/8) × 2 × (22/7) × 7\n= (1/8) × 44 = 5.5 inches\n\nAnswer: (C) 5.5 in"
  },
  {
    id: "tq4q8",
    category: "Data Analysis",
    topic: "Average",
    source: "Claude",
    question: "A player's scoring average is 18 points per game after 4 games. She scores 28 points in the 5th game. What is her new average?",
    choices: ["19", "20", "21", "22", "23"],
    answer: "B",
    explanation: "Step 1: Total after 4 games = 18 × 4 = 72\n\nStep 2: New total = 72 + 28 = 100\n\nStep 3: New average = 100 ÷ 5 = 20\n\nAnswer: (B) 20"
  },
  {
    id: "tq4q9",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "If the probability of rain on any given day is 30%, what is the probability it will NOT rain on two consecutive days?",
    choices: ["40%", "49%", "60%", "70%", "91%"],
    answer: "B",
    explanation: "Step 1: P(no rain on one day) = 1 − 0.30 = 0.70\n\nStep 2: P(no rain on two consecutive days) = 0.70 × 0.70 = 0.49 = 49%\n\nAnswer: (B) 49%"
  },
  {
    id: "tq4q10",
    category: "Reasoning",
    topic: "Estimation",
    source: "Claude",
    question: "Which of the following is closest to √150?",
    choices: ["10", "11", "12", "13", "15"],
    answer: "C",
    explanation: "Step 1: Find perfect squares near 150.\n12² = 144\n13² = 169\n\nStep 2: 150 is much closer to 144 than 169.\n√150 ≈ 12.2\n\nAnswer: (C) 12"
  }
];

// === TIMED QUIZ 5 ===
ALL_TEST_DATA.timed5 = [
  {
    id: "tq5q1",
    category: "Number Sense",
    topic: "Fraction Comparison",
    source: "Claude",
    question: "Which fraction is closest to 1/2?",
    choices: ["3/7", "5/9", "4/9", "7/15", "5/11"],
    answer: "D",
    explanation: "Step 1: Convert to decimals and find distance from 0.5.\n3/7 ≈ 0.429 → 0.071 away\n5/9 ≈ 0.556 → 0.056 away\n4/9 ≈ 0.444 → 0.056 away\n7/15 ≈ 0.467 → 0.033 away ← closest\n5/11 ≈ 0.455 → 0.045 away\n\nStep 2: 7/15 is closest to 1/2.\n\nAnswer: (D) 7/15"
  },
  {
    id: "tq5q2",
    category: "Number Sense",
    topic: "Percent of a Number",
    source: "Claude",
    question: "What is 15% of 240?",
    choices: ["24", "30", "36", "40", "48"],
    answer: "C",
    explanation: "Step 1: Break 15% into parts.\n10% of 240 = 24\n5% of 240 = 12\n15% = 24 + 12 = 36\n\nAnswer: (C) 36"
  },
  {
    id: "tq5q3",
    category: "Number Sense",
    topic: "Properties",
    source: "Claude",
    question: "Which of the following CANNOT be the product of two consecutive positive integers?",
    choices: ["6", "12", "20", "25", "30"],
    answer: "D",
    explanation: "Step 1: Check each.\n(A) 2 × 3 = 6 ✓\n(B) 3 × 4 = 12 ✓\n(C) 4 × 5 = 20 ✓\n(D) 5 × 5 = 25, but 5 and 5 aren't consecutive. 4 × 5 = 20, 5 × 6 = 30. No consecutive pair gives 25. ✗\n(E) 5 × 6 = 30 ✓\n\nAnswer: (D) 25"
  },
  {
    id: "tq5q4",
    category: "Algebra",
    topic: "Tax Problem",
    source: "Claude",
    question: "An item costs $85 before 8% sales tax. What is the total cost?",
    choices: ["$86.80", "$89.80", "$91.80", "$93.00", "$93.80"],
    answer: "C",
    explanation: "Step 1: Tax = 8% of $85 = 0.08 × 85 = $6.80\n\nStep 2: Total = $85 + $6.80 = $91.80\n\nOr: $85 × 1.08 = $91.80\n\nAnswer: (C) $91.80"
  },
  {
    id: "tq5q5",
    category: "Algebra",
    topic: "Inverse Operations",
    source: "Claude",
    question: "A number is doubled, then 7 is added, giving 31. What is the original number?",
    choices: ["10", "12", "14", "17", "24"],
    answer: "B",
    explanation: "Step 1: Work backwards.\n31 − 7 = 24\n24 ÷ 2 = 12\n\nStep 2: Check: 12 × 2 = 24, 24 + 7 = 31 ✓\n\nAnswer: (B) 12"
  },
  {
    id: "tq5q6",
    category: "Geometry",
    topic: "Complementary Angles",
    source: "Claude",
    question: "Two angles are complementary. One angle is 15° more than twice the other. What is the larger angle?",
    choices: ["25°", "35°", "55°", "65°", "75°"],
    answer: "D",
    explanation: "Step 1: Let smaller = x, larger = 2x + 15.\nx + 2x + 15 = 90\n3x + 15 = 90\n3x = 75\nx = 25\n\nStep 2: Larger = 2(25) + 15 = 65°\n\nAnswer: (D) 65°"
  },
  {
    id: "tq5q7",
    category: "Geometry",
    topic: "Triangle Area",
    source: "Claude",
    question: "A right triangle has legs of length 9 cm and 12 cm. What is its area?",
    choices: ["21 cm²", "36 cm²", "54 cm²", "72 cm²", "108 cm²"],
    answer: "C",
    explanation: "Step 1: For a right triangle, the legs are the base and height.\nArea = ½ × base × height\n= ½ × 9 × 12\n= ½ × 108\n= 54 cm²\n\nAnswer: (C) 54 cm²"
  },
  {
    id: "tq5q8",
    category: "Data Analysis",
    topic: "Mode",
    source: "Claude",
    question: "In the set {4, 7, 2, 8, 7, 3, 7, 5, 8, 6}, the mode is",
    choices: ["2", "5", "6", "7", "8"],
    answer: "D",
    explanation: "Step 1: Count how often each number appears.\n7 appears 3 times — more than any other.\n8 appears 2 times.\nEverything else appears once.\n\nThe mode is the most frequent value.\n\nAnswer: (D) 7"
  },
  {
    id: "tq5q9",
    category: "Data Analysis",
    topic: "Graphs",
    source: "Claude",
    question: "A circle graph shows that 25% of students walk to school, 40% take the bus, and the rest are driven. If there are 200 students, how many are driven?",
    choices: ["35", "50", "65", "70", "80"],
    answer: "D",
    explanation: "Step 1: Percent driven = 100% − 25% − 40% = 35%\n\nStep 2: 35% of 200 = 0.35 × 200 = 70\n\nAnswer: (D) 70"
  },
  {
    id: "tq5q10",
    category: "Reasoning",
    topic: "Working Backwards",
    source: "Claude",
    question: "After giving away half her stickers and then 10 more, Mia has 15 stickers left. How many did she start with?",
    choices: ["25", "30", "40", "50", "60"],
    answer: "D",
    explanation: "Step 1: Work backwards.\nShe has 15. Before giving 10 more: 15 + 10 = 25.\nBefore giving half: 25 is the remaining half, so she had 25 × 2 = 50.\n\nStep 2: Check: Start 50, give half (25 left), give 10 more (15 left). ✓\n\nAnswer: (D) 50"
  }
];
