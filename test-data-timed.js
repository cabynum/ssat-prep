// ============================================================
// Timed Quizzes 1-5 — 10 questions each, 12-minute limit
// Appends to ALL_TEST_DATA (declared in test-data.js)
// ============================================================

var TIMED_TEST_META = [];
(function() {
  for (var i = 1; i <= 20; i++) {
    TIMED_TEST_META.push({ id: 'timed' + i, label: 'Timed Quiz ' + i, questions: 10, timeLimit: 720, nudgeAt: 90, timed: true });
  }
})();

// Quizzes 6-20: sliced from the existing 30-question tests (test1-test5)
// Each 30-question test becomes 3 timed quizzes of 10
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
    category: "Algebra",
    topic: "Linear Equations / Systems",
    source: "Claude",
    question: "If 5x − 3 = 22, what is the value of x?",
    choices: ["3", "4", "5", "6", "7"],
    answer: "C",
    explanation: "Step 1: Add 3 to both sides.\n5x = 25\n\nStep 2: Divide both sides by 5.\nx = 5\n\nAnswer: (C) 5"
  },
  {
    id: "tq1q2",
    category: "Algebra",
    topic: "Rates / Ratios / Proportions / Percentages",
    source: "Claude",
    question: "A store marks down a $60 jacket by 25%. What is the sale price?",
    choices: ["$35", "$40", "$45", "$50", "$55"],
    answer: "C",
    explanation: "Step 1: Find 25% of $60.\n0.25 × 60 = $15\n\nStep 2: Subtract from original price.\n$60 − $15 = $45\n\nAnswer: (C) $45"
  },
  {
    id: "tq1q3",
    category: "Algebra",
    topic: "Slope",
    source: "Claude",
    question: "What is the slope of the line passing through (1, 3) and (4, 15)?",
    choices: ["2", "3", "4", "5", "6"],
    answer: "C",
    explanation: "Step 1: Use the slope formula: m = (y₂ − y₁) / (x₂ − x₁)\nm = (15 − 3) / (4 − 1) = 12 / 3 = 4\n\nAnswer: (C) 4"
  },
  {
    id: "tq1q4",
    category: "Algebra",
    topic: "Factoring",
    source: "Claude",
    question: "Which expression is equivalent to x² − 25?",
    choices: ["(x − 5)²", "(x + 5)²", "(x − 5)(x + 5)", "(x − 25)(x + 1)", "(x + 25)(x − 1)"],
    answer: "C",
    explanation: "Step 1: Recognize the difference of squares pattern: a² − b² = (a − b)(a + b)\nx² − 25 = x² − 5² = (x − 5)(x + 5)\n\nAnswer: (C) (x − 5)(x + 5)"
  },
  {
    id: "tq1q5",
    category: "Geometry & Measurement",
    topic: "Area",
    source: "Claude",
    question: "A triangle has a base of 12 cm and a height of 9 cm. What is its area?",
    choices: ["21 cm²", "36 cm²", "54 cm²", "72 cm²", "108 cm²"],
    answer: "C",
    explanation: "Step 1: Use the triangle area formula: A = ½ × base × height\nA = ½ × 12 × 9 = ½ × 108 = 54 cm²\n\nAnswer: (C) 54 cm²"
  },
  {
    id: "tq1q6",
    category: "Geometry & Measurement",
    topic: "Pythagorean Theorem",
    source: "Claude",
    question: "A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?",
    choices: ["7", "9", "10", "12", "14"],
    answer: "C",
    explanation: "Step 1: Use the Pythagorean theorem: a² + b² = c²\n6² + 8² = c²\n36 + 64 = c²\n100 = c²\nc = 10\n\nAnswer: (C) 10"
  },
  {
    id: "tq1q7",
    category: "Data Analysis",
    topic: "Mean / Median / Mode / Range",
    source: "Claude",
    question: "Find the median of this set: {3, 7, 2, 9, 5}",
    choices: ["2", "3", "5", "7", "9"],
    answer: "C",
    explanation: "Step 1: Put the numbers in order.\n2, 3, 5, 7, 9\n\nStep 2: The median is the middle value (3rd of 5 numbers).\nMedian = 5\n\nAnswer: (C) 5"
  },
  {
    id: "tq1q8",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A bag has 4 red, 3 blue, and 5 green marbles. What is the probability of drawing a blue marble?",
    choices: ["1/6", "1/4", "1/3", "3/12", "5/12"],
    answer: "B",
    explanation: "Step 1: Total marbles = 4 + 3 + 5 = 12\n\nStep 2: Probability = favorable / total = 3/12 = 1/4\n\nAnswer: (B) 1/4"
  },
  {
    id: "tq1q9",
    category: "Numbers & Operations",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of 3 + 4 × 5 − 2?",
    choices: ["15", "21", "25", "33", "35"],
    answer: "B",
    explanation: "Step 1: Multiplication first.\n4 × 5 = 20\n\nStep 2: Then addition and subtraction left to right.\n3 + 20 − 2 = 21\n\nAnswer: (B) 21"
  },
  {
    id: "tq1q10",
    category: "Reasoning",
    topic: "Sequences & Patterns",
    source: "Claude",
    question: "What comes next in the pattern: 1, 4, 9, 16, 25, ...?",
    choices: ["30", "32", "34", "36", "49"],
    answer: "D",
    explanation: "Step 1: These are perfect squares.\n1² = 1, 2² = 4, 3² = 9, 4² = 16, 5² = 25\n\nStep 2: The next is 6² = 36.\n\nAnswer: (D) 36"
  }
];

// === TIMED QUIZ 2 ===
ALL_TEST_DATA.timed2 = [
  {
    id: "tq2q1",
    category: "Algebra",
    topic: "Functions",
    source: "Claude",
    question: "If g(x) = 3x − 7, what is g(5)?",
    choices: ["2", "5", "8", "10", "15"],
    answer: "C",
    explanation: "Step 1: Substitute x = 5.\ng(5) = 3(5) − 7 = 15 − 7 = 8\n\nAnswer: (C) 8"
  },
  {
    id: "tq2q2",
    category: "Algebra",
    topic: "Exponential Expressions",
    source: "Claude",
    question: "Simplify: 2<sup>3</sup> × 2<sup>5</sup>",
    choices: ["16", "32", "64", "128", "256"],
    answer: "E",
    explanation: "Step 1: When multiplying powers with the same base, add exponents.\n2³ × 2⁵ = 2⁸\n\nStep 2: Calculate 2⁸ = 256.\n\nAnswer: (E) 256"
  },
  {
    id: "tq2q3",
    category: "Algebra",
    topic: "Classic Problem Solving",
    source: "Claude",
    question: "Maya has twice as many stickers as Jaylen. Together they have 48 stickers. How many does Maya have?",
    choices: ["12", "16", "24", "32", "36"],
    answer: "D",
    explanation: "Step 1: Let Jaylen = x. Maya = 2x.\nx + 2x = 48\n3x = 48\nx = 16\n\nStep 2: Maya = 2 × 16 = 32.\n\nAnswer: (D) 32"
  },
  {
    id: "tq2q4",
    category: "Algebra",
    topic: "Graphs",
    source: "Claude",
    question: "A line has equation y = −3x + 9. What is its y-intercept?",
    choices: ["−3", "3", "6", "9", "−9"],
    answer: "D",
    explanation: "Step 1: In y = mx + b, the y-intercept is b.\nHere b = 9, so the line crosses the y-axis at (0, 9).\n\nAnswer: (D) 9"
  },
  {
    id: "tq2q5",
    category: "Geometry & Measurement",
    topic: "3D: Volume / Surface Area",
    source: "Claude",
    question: "What is the volume of a rectangular box with length 5, width 3, and height 4?",
    choices: ["12", "24", "35", "47", "60"],
    answer: "E",
    explanation: "Step 1: Volume = length × width × height\nV = 5 × 3 × 4 = 60\n\nAnswer: (E) 60"
  },
  {
    id: "tq2q6",
    category: "Geometry & Measurement",
    topic: "Angles",
    source: "Claude",
    question: "Two angles are supplementary. One measures 65°. What does the other measure?",
    choices: ["25°", "65°", "90°", "115°", "125°"],
    answer: "D",
    explanation: "Step 1: Supplementary angles add to 180°.\n180° − 65° = 115°\n\nAnswer: (D) 115°"
  },
  {
    id: "tq2q7",
    category: "Data Analysis",
    topic: "Data Graphs & Tables",
    source: "Claude",
    question: "A bar graph shows sales by month: Jan = 40, Feb = 55, Mar = 35, Apr = 60. Which month had the greatest increase from the previous month?",
    choices: ["January", "February", "March", "April", "Cannot be determined"],
    answer: "D",
    explanation: "Step 1: Calculate changes.\nFeb vs Jan: 55 − 40 = +15\nMar vs Feb: 35 − 55 = −20\nApr vs Mar: 60 − 35 = +25\n\nStep 2: The greatest increase is April (+25).\n\nAnswer: (D) April"
  },
  {
    id: "tq2q8",
    category: "Numbers & Operations",
    topic: "Number Sense / Number Theory",
    source: "Claude",
    question: "What is the greatest common factor (GCF) of 24 and 36?",
    choices: ["4", "6", "8", "12", "18"],
    answer: "D",
    explanation: "Step 1: Find factors of each.\n24: 1, 2, 3, 4, 6, 8, 12, 24\n36: 1, 2, 3, 4, 6, 9, 12, 18, 36\n\nStep 2: The largest number in both lists is 12.\n\nAnswer: (D) 12"
  },
  {
    id: "tq2q9",
    category: "Numbers & Operations",
    topic: "Estimation",
    source: "Claude",
    question: "Which is the best estimate for 398 × 21?",
    choices: ["4,000", "6,000", "8,000", "10,000", "12,000"],
    answer: "C",
    explanation: "Step 1: Round to friendly numbers.\n398 ≈ 400 and 21 ≈ 20\n\nStep 2: Multiply.\n400 × 20 = 8,000\n\nAnswer: (C) 8,000"
  },
  {
    id: "tq2q10",
    category: "Reasoning",
    topic: "Puzzle / Logical Reasoning",
    source: "Claude",
    question: "Three friends each ordered a different drink: juice, water, or milk. Alex didn't order juice. Ben didn't order water or juice. What did Alex order?",
    choices: ["Juice", "Water", "Milk", "Juice or water", "Cannot be determined"],
    answer: "B",
    explanation: "Step 1: Ben didn't order water or juice, so Ben ordered milk.\n\nStep 2: Alex didn't order juice, and milk is taken by Ben, so Alex ordered water.\n\nAnswer: (B) Water"
  }
];

// === TIMED QUIZ 3 ===
ALL_TEST_DATA.timed3 = [
  {
    id: "tq3q1",
    category: "Algebra",
    topic: "Quadratic Equations",
    source: "Claude",
    question: "What are the solutions to x² − 9 = 0?",
    choices: ["x = 3 only", "x = −3 only", "x = 3 or x = −3", "x = 9 or x = −9", "x = 0"],
    answer: "C",
    explanation: "Step 1: Add 9 to both sides.\nx² = 9\n\nStep 2: Take the square root of both sides.\nx = ±3\n\nAnswer: (C) x = 3 or x = −3"
  },
  {
    id: "tq3q2",
    category: "Algebra",
    topic: "Rates / Ratios / Proportions / Percentages",
    source: "Claude",
    question: "A car travels 180 miles in 3 hours. At the same rate, how far will it go in 5 hours?",
    choices: ["240 miles", "270 miles", "300 miles", "360 miles", "450 miles"],
    answer: "C",
    explanation: "Step 1: Find the rate.\n180 ÷ 3 = 60 miles per hour\n\nStep 2: Multiply by 5 hours.\n60 × 5 = 300 miles\n\nAnswer: (C) 300 miles"
  },
  {
    id: "tq3q3",
    category: "Algebra",
    topic: "Polynomial Expressions",
    source: "Claude",
    question: "Simplify: (2x + 3) + (4x − 5)",
    choices: ["6x − 2", "6x + 8", "6x − 8", "2x − 2", "8x + 2"],
    answer: "A",
    explanation: "Step 1: Combine like terms.\n2x + 4x = 6x\n3 + (−5) = −2\n\nResult: 6x − 2\n\nAnswer: (A) 6x − 2"
  },
  {
    id: "tq3q4",
    category: "Algebra",
    topic: "Radical Expressions",
    source: "Claude",
    question: "What is the value of √144?",
    choices: ["11", "12", "13", "14", "72"],
    answer: "B",
    explanation: "Step 1: Find which number times itself equals 144.\n12 × 12 = 144\n\nAnswer: (B) 12"
  },
  {
    id: "tq3q5",
    category: "Geometry & Measurement",
    topic: "Length / Perimeter / Circumference",
    source: "Claude",
    question: "A circle has a diameter of 14 cm. What is its circumference? (Use π ≈ 22/7)",
    choices: ["22 cm", "38 cm", "44 cm", "88 cm", "154 cm"],
    answer: "C",
    explanation: "Step 1: Circumference = π × diameter\nC = (22/7) × 14 = 22 × 2 = 44 cm\n\nAnswer: (C) 44 cm"
  },
  {
    id: "tq3q6",
    category: "Geometry & Measurement",
    topic: "Coordinate Geometry",
    source: "Claude",
    question: "What is the distance between the points (1, 2) and (4, 6)?",
    choices: ["3", "4", "5", "6", "7"],
    answer: "C",
    explanation: "Step 1: Use the distance formula: d = √((x₂−x₁)² + (y₂−y₁)²)\nd = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5\n\nAnswer: (C) 5"
  },
  {
    id: "tq3q7",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "A pizza shop offers 3 sizes and 4 toppings. How many different one-topping pizzas can you order?",
    choices: ["3", "4", "7", "12", "24"],
    answer: "D",
    explanation: "Step 1: Use the counting principle: multiply the choices.\n3 sizes × 4 toppings = 12 different pizzas\n\nAnswer: (D) 12"
  },
  {
    id: "tq3q8",
    category: "Data Analysis",
    topic: "Set Theory",
    source: "Claude",
    question: "In a class of 30 students, 18 play basketball and 12 play soccer. If 6 play both, how many play neither sport?",
    choices: ["0", "4", "6", "8", "12"],
    answer: "C",
    explanation: "Step 1: Use the inclusion-exclusion formula.\nPlays at least one = Basketball + Soccer − Both\n= 18 + 12 − 6 = 24\n\nStep 2: Neither = Total − At least one\n= 30 − 24 = 6\n\nAnswer: (C) 6"
  },
  {
    id: "tq3q9",
    category: "Numbers & Operations",
    topic: "Arithmetic",
    source: "Claude",
    question: "What is 3/4 + 2/3?",
    choices: ["5/7", "5/12", "1 and 1/12", "1 and 5/12", "1 and 1/2"],
    answer: "D",
    explanation: "Step 1: Find a common denominator. LCD of 4 and 3 is 12.\n3/4 = 9/12\n2/3 = 8/12\n\nStep 2: Add.\n9/12 + 8/12 = 17/12 = 1 and 5/12\n\nAnswer: (D) 1 and 5/12"
  },
  {
    id: "tq3q10",
    category: "Reasoning",
    topic: "Visual Spatial Reasoning",
    source: "Claude",
    question: "If you fold a square piece of paper in half diagonally and cut off the top corner, what shape do you see when you unfold it?",
    choices: ["Triangle", "Square with a triangle cut out", "Diamond (rhombus) hole in the center", "Circle", "Two triangles"],
    answer: "C",
    explanation: "Step 1: Folding diagonally creates a triangle. The \"top corner\" of the triangle is the center of the original square.\n\nStep 2: Cutting the top corner and unfolding creates a diamond-shaped (rhombus) hole in the center of the square.\n\nAnswer: (C) Diamond (rhombus) hole in the center"
  }
];

// === TIMED QUIZ 4 ===
ALL_TEST_DATA.timed4 = [
  {
    id: "tq4q1",
    category: "Algebra",
    topic: "Linear Equations / Systems",
    source: "Claude",
    question: "Solve for y: 2y + 8 = 3y − 1",
    choices: ["7", "8", "9", "10", "11"],
    answer: "C",
    explanation: "Step 1: Subtract 2y from both sides.\n8 = y − 1\n\nStep 2: Add 1 to both sides.\ny = 9\n\nAnswer: (C) 9"
  },
  {
    id: "tq4q2",
    category: "Algebra",
    topic: "Rational Expressions",
    source: "Claude",
    question: "Simplify: 12x / 4",
    choices: ["3", "3x", "4x", "8x", "12"],
    answer: "B",
    explanation: "Step 1: Divide the coefficient by 4.\n12x ÷ 4 = 3x\n\nAnswer: (B) 3x"
  },
  {
    id: "tq4q3",
    category: "Algebra",
    topic: "Slope",
    source: "Claude",
    question: "A line has equation y = 2x − 5. What is its slope?",
    choices: ["−5", "−2", "2", "5", "2/5"],
    answer: "C",
    explanation: "Step 1: In y = mx + b, m is the slope.\nHere m = 2.\n\nAnswer: (C) 2"
  },
  {
    id: "tq4q4",
    category: "Algebra",
    topic: "Rates / Ratios / Proportions / Percentages",
    source: "Claude",
    question: "If 3 notebooks cost $7.50, how much do 8 notebooks cost?",
    choices: ["$15.00", "$17.50", "$20.00", "$22.50", "$25.00"],
    answer: "C",
    explanation: "Step 1: Find the cost per notebook.\n$7.50 ÷ 3 = $2.50 each\n\nStep 2: Multiply by 8.\n$2.50 × 8 = $20.00\n\nAnswer: (C) $20.00"
  },
  {
    id: "tq4q5",
    category: "Geometry & Measurement",
    topic: "Transformations",
    source: "Claude",
    question: "Point A is at (3, 2). If it is reflected over the x-axis, what are the new coordinates?",
    choices: ["(−3, 2)", "(3, −2)", "(−3, −2)", "(2, 3)", "(−2, 3)"],
    answer: "B",
    explanation: "Step 1: Reflecting over the x-axis keeps the x-coordinate the same and flips the sign of the y-coordinate.\n(3, 2) → (3, −2)\n\nAnswer: (B) (3, −2)"
  },
  {
    id: "tq4q6",
    category: "Geometry & Measurement",
    topic: "Converting Units / Dimensional Analysis",
    source: "Claude",
    question: "How many inches are in 4.5 feet?",
    choices: ["36", "45", "48", "54", "60"],
    answer: "D",
    explanation: "Step 1: 1 foot = 12 inches.\n4.5 × 12 = 54 inches\n\nAnswer: (D) 54"
  },
  {
    id: "tq4q7",
    category: "Data Analysis",
    topic: "Mean / Median / Mode / Range",
    source: "Claude",
    question: "What is the mean (average) of: 10, 15, 20, 25, 30?",
    choices: ["15", "18", "20", "22", "25"],
    answer: "C",
    explanation: "Step 1: Add all values.\n10 + 15 + 20 + 25 + 30 = 100\n\nStep 2: Divide by count.\n100 ÷ 5 = 20\n\nAnswer: (C) 20"
  },
  {
    id: "tq4q8",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A fair die is rolled twice. What is the probability of getting a 6 both times?",
    choices: ["1/3", "1/6", "1/12", "1/36", "2/6"],
    answer: "D",
    explanation: "Step 1: P(6 on first roll) = 1/6\nP(6 on second roll) = 1/6\n\nStep 2: Since the rolls are independent, multiply.\n(1/6) × (1/6) = 1/36\n\nAnswer: (D) 1/36"
  },
  {
    id: "tq4q9",
    category: "Numbers & Operations",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of (8 + 2)² − 4 × 5?",
    choices: ["60", "70", "80", "90", "100"],
    answer: "C",
    explanation: "Step 1: Parentheses first.\n8 + 2 = 10\n\nStep 2: Exponents.\n10² = 100\n\nStep 3: Multiplication.\n4 × 5 = 20\n\nStep 4: Subtraction.\n100 − 20 = 80\n\nAnswer: (C) 80"
  },
  {
    id: "tq4q10",
    category: "Reasoning",
    topic: "Sequences & Patterns",
    source: "Claude",
    question: "What is the next term: 2, 5, 11, 23, 47, ...?",
    choices: ["71", "83", "94", "95", "96"],
    answer: "D",
    explanation: "Step 1: Find the pattern.\n5 = 2 × 2 + 1\n11 = 5 × 2 + 1\n23 = 11 × 2 + 1\n47 = 23 × 2 + 1\n\nStep 2: Each term is (previous × 2) + 1.\n47 × 2 + 1 = 95\n\nAnswer: (D) 95"
  }
];

// === TIMED QUIZ 5 ===
ALL_TEST_DATA.timed5 = [
  {
    id: "tq5q1",
    category: "Algebra",
    topic: "Quadratic Equations",
    source: "Claude",
    question: "What is the value of x if x² = 64?",
    choices: ["6", "7", "8", "−8 only", "8 or −8"],
    answer: "E",
    explanation: "Step 1: Take the square root of both sides.\nx = ±√64 = ±8\n\nBoth 8 and −8 are solutions since 8² = 64 and (−8)² = 64.\n\nAnswer: (E) 8 or −8"
  },
  {
    id: "tq5q2",
    category: "Algebra",
    topic: "Functions",
    source: "Claude",
    question: "If h(x) = x² + 2x, what is h(−3)?",
    choices: ["−3", "−1", "3", "9", "15"],
    answer: "C",
    explanation: "Step 1: Substitute x = −3.\nh(−3) = (−3)² + 2(−3) = 9 − 6 = 3\n\nAnswer: (C) 3"
  },
  {
    id: "tq5q3",
    category: "Algebra",
    topic: "Classic Problem Solving",
    source: "Claude",
    question: "A team scored 72 points in a game. They made only 2-point and 3-point baskets. If they made 8 three-pointers, how many 2-pointers did they make?",
    choices: ["18", "20", "22", "24", "26"],
    answer: "D",
    explanation: "Step 1: Points from 3-pointers.\n8 × 3 = 24 points\n\nStep 2: Remaining points from 2-pointers.\n72 − 24 = 48 points\n\nStep 3: Number of 2-pointers.\n48 ÷ 2 = 24\n\nAnswer: (D) 24"
  },
  {
    id: "tq5q4",
    category: "Algebra",
    topic: "Exponential Expressions",
    source: "Claude",
    question: "What is (5²)³?",
    choices: ["25", "125", "625", "3,125", "15,625"],
    answer: "E",
    explanation: "Step 1: When raising a power to a power, multiply exponents.\n(5²)³ = 5⁶\n\nStep 2: Calculate 5⁶.\n5⁶ = 15,625\n\nAnswer: (E) 15,625"
  },
  {
    id: "tq5q5",
    category: "Geometry & Measurement",
    topic: "Area",
    source: "Claude",
    question: "A square has a perimeter of 36 cm. What is its area?",
    choices: ["9 cm²", "36 cm²", "64 cm²", "81 cm²", "144 cm²"],
    answer: "D",
    explanation: "Step 1: Find the side length.\nPerimeter = 4s, so s = 36 ÷ 4 = 9 cm\n\nStep 2: Area = s² = 9² = 81 cm²\n\nAnswer: (D) 81 cm²"
  },
  {
    id: "tq5q6",
    category: "Geometry & Measurement",
    topic: "3D: Volume / Surface Area",
    source: "Claude",
    question: "A cube has edges of length 3. What is its surface area?",
    choices: ["18", "27", "36", "54", "81"],
    answer: "D",
    explanation: "Step 1: A cube has 6 identical square faces.\nArea of one face = 3² = 9\n\nStep 2: Total surface area = 6 × 9 = 54\n\nAnswer: (D) 54"
  },
  {
    id: "tq5q7",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "How many 3-digit numbers can be formed using digits 1, 2, 3 if each digit can only be used once?",
    choices: ["3", "6", "9", "12", "27"],
    answer: "B",
    explanation: "Step 1: First digit: 3 choices. Second digit: 2 remaining. Third digit: 1 remaining.\n3 × 2 × 1 = 6\n\nAnswer: (B) 6"
  },
  {
    id: "tq5q8",
    category: "Numbers & Operations",
    topic: "Arithmetic",
    source: "Claude",
    question: "What is 2.5 × 0.4?",
    choices: ["0.1", "0.5", "1.0", "1.5", "10"],
    answer: "C",
    explanation: "Step 1: Multiply as whole numbers.\n25 × 4 = 100\n\nStep 2: Count decimal places (1 + 1 = 2).\n100 → 1.00 = 1.0\n\nAnswer: (C) 1.0"
  },
  {
    id: "tq5q9",
    category: "Numbers & Operations",
    topic: "Number Sense / Number Theory",
    source: "Claude",
    question: "Which of these numbers is prime?",
    choices: ["21", "27", "33", "37", "39"],
    answer: "D",
    explanation: "Step 1: Check each.\n21 = 3 × 7, 27 = 3 × 9, 33 = 3 × 11, 39 = 3 × 13\n37 has no factors other than 1 and itself.\n\nAnswer: (D) 37"
  },
  {
    id: "tq5q10",
    category: "Reasoning",
    topic: "Puzzle / Logical Reasoning",
    source: "Claude",
    question: "In a row of 5 lockers, locker B is between lockers A and C. Locker E is at the far right end. Locker D is not next to locker E. Which locker is in the middle (3rd position)?",
    choices: ["A", "B", "C", "D", "E"],
    answer: "B",
    explanation: "Step 1: E is at position 5. D is not next to E, so D is not at position 4.\n\nStep 2: B is between A and C (in order: A, B, C or C, B, A).\n\nStep 3: If D is at position 1, then A, B, C fill positions 2-4. B would be at position 3.\nOrder: D, A, B, C, E — D is not next to E ✓, B is between A and C ✓\n\nAnswer: (B) B"
  }
];
