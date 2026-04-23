// ============================================================
// Tests 1 & 2 — SSAT Upper Level Math Practice
// Declares ALL_TEST_DATA; tests 3-5 append from test-data-pt2.js
// ============================================================

var ALL_TEST_DATA = {

// === TEST 1 === (30 questions)
test1: [
  // --- Algebra (12) ---
  {
    id: "t1q1",
    category: "Algebra",
    topic: "Classic Problem Solving",
    source: "Effortless Math",
    question: "David is 58 years old and his daughter Ava is 10 years old. In how many years will David be exactly 3 times Ava's age?",
    choices: ["4", "8", "10", "12", "14"],
    answer: "E",
    explanation: "Step 1: Set up the equation. Let x = the number of years from now.\nIn x years, David will be 58 + x and Ava will be 10 + x.\nWe need: 58 + x = 3(10 + x)\n\nStep 2: Solve for x.\n58 + x = 30 + 3x\n58 − 30 = 3x − x\n28 = 2x\nx = 14\n\nStep 3: Check. In 14 years, David is 72 and Ava is 24. 72 = 3 × 24 ✓\n\nAnswer: (E) 14"
  },
  {
    id: "t1q2",
    category: "Algebra",
    topic: "Exponential Expressions",
    source: "Claude",
    question: "What is the value of 3<sup>2</sup> × 3<sup>4</sup>?",
    choices: ["81", "243", "729", "2,187", "6,561"],
    answer: "C",
    explanation: "Step 1: When multiplying powers with the same base, add the exponents.\n3² × 3⁴ = 3⁽²⁺⁴⁾ = 3⁶\n\nStep 2: Calculate 3⁶.\n3⁶ = 729\n\nAnswer: (C) 729"
  },
  {
    id: "t1q3",
    category: "Algebra",
    topic: "Factoring",
    source: "Claude",
    question: "Which expression is equivalent to x² − 16?",
    choices: ["(x − 4)(x − 4)", "(x + 4)(x − 4)", "(x + 8)(x − 2)", "(x − 16)(x + 1)", "(x + 4)(x + 4)"],
    answer: "B",
    explanation: "Step 1: Recognize this as a difference of two squares.\nx² − 16 = x² − 4²\n\nStep 2: Apply the formula a² − b² = (a + b)(a − b).\nx² − 4² = (x + 4)(x − 4)\n\nAnswer: (B) (x + 4)(x − 4)"
  },
  {
    id: "t1q4",
    category: "Algebra",
    topic: "Functions",
    source: "Claude",
    question: "The cost to rent a bike is given by C(h) = 8h + 5, where h is the number of hours. What is the total cost of renting a bike for 3 hours?",
    choices: ["21", "24", "27", "29", "32"],
    answer: "D",
    explanation: "Step 1: Substitute h = 3 into the function.\nC(3) = 8(3) + 5\n\nStep 2: Calculate.\nC(3) = 24 + 5 = 29\n\nAnswer: (D) $29"
  },
  {
    id: "t1q5",
    category: "Algebra",
    topic: "Graphs",
    source: "Claude",
    question: "A line crosses the y-axis at (0, 4) and has a slope of −2. At what point does it cross the x-axis?",
    choices: ["(1, 0)", "(−2, 0)", "(2, 0)", "(4, 0)", "(−4, 0)"],
    answer: "C",
    explanation: "Step 1: Write the equation of the line using y = mx + b.\nSlope m = −2 and y-intercept b = 4, so y = −2x + 4.\n\nStep 2: The x-axis is where y = 0. Set y = 0 and solve.\n0 = −2x + 4\n2x = 4\nx = 2\n\nThe line crosses the x-axis at (2, 0).\n\nAnswer: (C) (2, 0)"
  },
  {
    id: "t1q6",
    category: "Algebra",
    topic: "Linear Equations / Systems",
    source: "Effortless Math",
    question: "If 35/A + 2 = 7, then 35 + A = ?",
    choices: ["35", "37", "40", "42", "45"],
    answer: "D",
    explanation: "Step 1: Solve for A.\n35/A + 2 = 7\n35/A = 5\nA = 35 ÷ 5\nA = 7\n\nStep 2: Find 35 + A.\n35 + 7 = 42\n\nAnswer: (D) 42"
  },
  {
    id: "t1q7",
    category: "Algebra",
    topic: "Polynomial Expressions",
    source: "Claude",
    question: "Simplify: (3x² + 2x − 5) − (x² − 4x + 3)",
    choices: ["2x² − 2x − 2", "2x² + 6x − 8", "4x² + 6x − 8", "2x² + 6x − 2", "4x² − 2x − 8"],
    answer: "B",
    explanation: "Step 1: Distribute the negative sign to the second group.\n3x² + 2x − 5 − x² + 4x − 3\n\nStep 2: Combine like terms.\nx² terms: 3x² − x² = 2x²\nx terms: 2x + 4x = 6x\nconstants: −5 − 3 = −8\n\nResult: 2x² + 6x − 8\n\nAnswer: (B) 2x² + 6x − 8"
  },
  {
    id: "t1q8",
    category: "Algebra",
    topic: "Quadratic Equations",
    source: "Claude",
    question: "What are the solutions to x² − 5x + 6 = 0?",
    choices: ["x = 2 and x = 3", "x = −2 and x = −3", "x = 1 and x = 6", "x = −1 and x = −6", "x = 2 and x = −3"],
    answer: "A",
    explanation: "Step 1: Factor the quadratic. Find two numbers that multiply to 6 and add to −5.\n−2 × (−3) = 6 and (−2) + (−3) = −5 ✓\n\nStep 2: Write the factored form.\n(x − 2)(x − 3) = 0\n\nStep 3: Set each factor equal to zero.\nx − 2 = 0 → x = 2\nx − 3 = 0 → x = 3\n\nAnswer: (A) x = 2 and x = 3"
  },
  {
    id: "t1q9",
    category: "Algebra",
    topic: "Radical Expressions",
    source: "Claude",
    question: "Simplify: √75",
    choices: ["3√5", "15", "5√3", "√75", "25√3"],
    answer: "C",
    explanation: "Step 1: Break 75 into a perfect square times another number.\n75 = 25 × 3\n\nStep 2: Take the square root of the perfect square part.\n√75 = √(25 × 3) = √25 × √3 = 5√3\n\nAnswer: (C) 5√3"
  },
  {
    id: "t1q10",
    category: "Algebra",
    topic: "Rates / Ratios / Proportions / Percentages",
    source: "Effortless Math",
    question: "A shaft rotates 400 times in 6 seconds. At this rate, how many times does it rotate in 15 seconds?",
    choices: ["800", "1,000", "1,200", "1,500", "2,000"],
    answer: "B",
    explanation: "Step 1: Set up a proportion.\n400 rotations / 6 seconds = x rotations / 15 seconds\n\nStep 2: Cross-multiply and solve.\n400 × 15 = 6 × x\n6,000 = 6x\nx = 1,000\n\nAnswer: (B) 1,000"
  },
  {
    id: "t1q11",
    category: "Algebra",
    topic: "Rational Expressions",
    source: "Claude",
    question: "Simplify: (x² − 4) / (x + 2)",
    choices: ["x + 2", "x + 4", "x² − 2", "x − 2", "x − 4"],
    answer: "D",
    explanation: "Step 1: Factor the numerator. Recognize x² − 4 as a difference of squares.\nx² − 4 = (x + 2)(x − 2)\n\nStep 2: Cancel the common factor of (x + 2).\n(x + 2)(x − 2) / (x + 2) = x − 2\n\n(Note: x cannot equal −2)\n\nAnswer: (D) x − 2"
  },
  {
    id: "t1q12",
    category: "Algebra",
    topic: "Slope",
    source: "Effortless Math",
    question: "What is the slope of a line perpendicular to 8x − 4y = 24?",
    choices: ["-2", "-1/2", "1/2", "2", "4"],
    answer: "B",
    explanation: "Step 1: Rewrite the equation in slope-intercept form (y = mx + b).\n8x − 4y = 24\n−4y = −8x + 24\ny = 2x − 6\nThe slope of this line is 2.\n\nStep 2: Perpendicular lines have slopes that are negative reciprocals.\nThe negative reciprocal of 2 is −1/2.\n\nAnswer: (B) −1/2"
  },
  // --- Geometry & Measurement (7) ---
  {
    id: "t1q13",
    category: "Geometry & Measurement",
    topic: "Area",
    source: "Effortless Math",
    question: "How many tiles of 6 cm² each are needed to cover a floor that is 9 cm by 36 cm?",
    choices: ["18", "24", "36", "48", "54"],
    answer: "E",
    explanation: "Step 1: Find the area of the floor.\nArea = 9 × 36 = 324 cm²\n\nStep 2: Divide by the area of each tile.\n324 ÷ 6 = 54 tiles\n\nAnswer: (E) 54"
  },
  {
    id: "t1q14",
    category: "Geometry & Measurement",
    topic: "3D: Volume / Surface Area",
    source: "Claude",
    question: "A rectangular swimming pool is 25 meters long, 10 meters wide, and 2 meters deep. How many cubic meters of water are needed to fill the pool?",
    choices: ["100", "250", "370", "500", "750"],
    answer: "D",
    explanation: "Step 1: Volume of a rectangular prism = length × width × height.\nV = 25 × 10 × 2\n\nStep 2: Calculate.\nV = 500 cubic meters\n\nAnswer: (D) 500"
  },
  {
    id: "t1q15",
    category: "Geometry & Measurement",
    topic: "Angles",
    source: "Claude",
    question: "Two angles are supplementary. One angle is 35° more than the other. What is the measure of the larger angle?",
    choices: ["72.5°", "90°", "100°", "107.5°", "145°"],
    answer: "D",
    explanation: "Step 1: Supplementary angles add up to 180°. Let the smaller angle = x.\nx + (x + 35) = 180\n\nStep 2: Solve for x.\n2x + 35 = 180\n2x = 145\nx = 72.5°\n\nStep 3: The larger angle = 72.5 + 35 = 107.5°\n\nAnswer: (D) 107.5°"
  },
  {
    id: "t1q16",
    category: "Geometry & Measurement",
    topic: "Converting Units / Dimensional Analysis",
    source: "Claude",
    question: "A swimming pool holds 15,000 gallons of water. If 1 cubic foot of water equals approximately 7.5 gallons, how many cubic feet of water does the pool hold?",
    choices: ["200", "1,500", "1,875", "2,000", "112,500"],
    answer: "D",
    explanation: "Step 1: To convert gallons to cubic feet, divide by 7.5.\n15,000 ÷ 7.5\n\nStep 2: Calculate.\n15,000 ÷ 7.5 = 2,000 cubic feet\n\nAnswer: (D) 2,000"
  },
  {
    id: "t1q17",
    category: "Geometry & Measurement",
    topic: "Coordinate Geometry",
    source: "Claude",
    question: "What is the distance between the points (1, 2) and (4, 6)?",
    choices: ["4", "5", "6", "7", "√41"],
    answer: "B",
    explanation: "Step 1: Use the distance formula: d = √[(x₂ − x₁)² + (y₂ − y₁)²]\nd = √[(4 − 1)² + (6 − 2)²]\n\nStep 2: Calculate.\nd = √[3² + 4²] = √[9 + 16] = √25 = 5\n\nAnswer: (B) 5"
  },
  {
    id: "t1q18",
    category: "Geometry & Measurement",
    topic: "Length / Perimeter / Circumference",
    source: "Claude",
    question: "A circular garden has a diameter of 14 meters. What is its circumference? (Use π ≈ 22/7)",
    choices: ["28 m", "38.5 m", "44 m", "88 m", "154 m"],
    answer: "C",
    explanation: "Step 1: Circumference = π × diameter.\nC = (22/7) × 14\n\nStep 2: Calculate.\nC = 22 × 2 = 44 m\n\nAnswer: (C) 44 m"
  },
  {
    id: "t1q19",
    category: "Geometry & Measurement",
    topic: "Pythagorean Theorem",
    source: "Effortless Math",
    question: "A ship sails 7 miles west and then 24 miles north. What is the shortest distance from the ship back to its starting point?",
    choices: ["15", "20", "24", "25", "31"],
    answer: "D",
    explanation: "Step 1: The path forms a right triangle. The two legs are 7 miles and 24 miles. We need the hypotenuse.\n\nStep 2: Use the Pythagorean theorem: a² + b² = c²\n7² + 24² = c²\n49 + 576 = c²\n625 = c²\nc = √625 = 25 miles\n\nAnswer: (D) 25"
  },
  // --- Data Analysis (3) ---
  {
    id: "t1q20",
    category: "Data Analysis",
    topic: "Mean / Median / Mode / Range",
    source: "Effortless Math",
    question: "The average weight of 12 girls in a class is 55 kg, and the average weight of 21 boys is 59 kg. What is the average weight of all 33 students in the class?",
    choices: ["55.5", "56", "57", "57.12", "57.54"],
    answer: "E",
    explanation: "Step 1: Find the total weight of the girls.\n12 × 55 = 660 kg\n\nStep 2: Find the total weight of the boys.\n21 × 59 = 1,239 kg\n\nStep 3: Find the combined average.\nTotal weight = 660 + 1,239 = 1,899 kg\nAverage = 1,899 ÷ 33 ≈ 57.54 kg\n\nAnswer: (E) 57.54"
  },
  {
    id: "t1q21",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "A basketball team has 12 players. The coach needs to choose 2 co-captains. How many different pairs of co-captains can be chosen?",
    choices: ["24", "44", "66", "132", "144"],
    answer: "C",
    explanation: "Step 1: Since order does not matter (choosing Player A and Player B is the same as B and A), use combinations.\nC(12, 2) = 12! / (2! × 10!)\n\nStep 2: Calculate.\n= (12 × 11) / (2 × 1) = 132 / 2 = 66\n\nAnswer: (C) 66"
  },
  {
    id: "t1q22",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A bag contains 4 red marbles, 3 blue marbles, and 5 green marbles. If one marble is drawn at random, what is the probability that it is NOT green?",
    choices: ["5/12", "7/12", "1/2", "5/7", "7/5"],
    answer: "B",
    explanation: "Step 1: Find the total number of marbles.\n4 + 3 + 5 = 12\n\nStep 2: Find the number that are NOT green.\n12 − 5 = 7\n\nStep 3: Probability = favorable outcomes / total outcomes.\nP(not green) = 7/12\n\nAnswer: (B) 7/12"
  },
  // --- Numbers & Operations (5) ---
  {
    id: "t1q23",
    category: "Numbers & Operations",
    topic: "Arithmetic",
    source: "Effortless Math",
    question: "If 160% of a number is 80, what is 70% of that number?",
    choices: ["35", "40", "45", "50", "55"],
    answer: "A",
    explanation: "Step 1: Find the original number.\n160% × n = 80\n1.6n = 80\nn = 80 ÷ 1.6 = 50\n\nStep 2: Find 70% of 50.\n0.70 × 50 = 35\n\nAnswer: (A) 35"
  },
  {
    id: "t1q24",
    category: "Numbers & Operations",
    topic: "Estimation",
    source: "Claude",
    question: "A bakery sells about 389 cupcakes each day. Approximately how many cupcakes does the bakery sell in 31 days?",
    choices: ["4,000", "8,000", "12,000", "16,000", "40,000"],
    answer: "C",
    explanation: "Step 1: Round to make the math easier.\n389 ≈ 400 and 31 ≈ 30\n\nStep 2: Multiply the rounded numbers.\n400 × 30 = 12,000\n\n(Actual: 389 × 31 = 12,059)\n\nAnswer: (C) 12,000"
  },
  {
    id: "t1q25",
    category: "Numbers & Operations",
    topic: "Number Sense / Number Theory",
    source: "Claude",
    question: "What is the greatest common factor (GCF) of 36 and 48?",
    choices: ["4", "6", "8", "12", "24"],
    answer: "D",
    explanation: "Step 1: Find the prime factorization of each number.\n36 = 2 × 2 × 3 × 3 = 2² × 3²\n48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3\n\nStep 2: Take the lowest power of each common prime.\nCommon factors: 2² and 3¹\nGCF = 4 × 3 = 12\n\nAnswer: (D) 12"
  },
  {
    id: "t1q26",
    category: "Numbers & Operations",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of 3 + 4 × 2² − 6 ÷ 3?",
    choices: ["10", "13", "15", "17", "26"],
    answer: "D",
    explanation: "Step 1: Exponents first.\n2² = 4\nExpression becomes: 3 + 4 × 4 − 6 ÷ 3\n\nStep 2: Multiplication and division, left to right.\n4 × 4 = 16\n6 ÷ 3 = 2\nExpression becomes: 3 + 16 − 2\n\nStep 3: Addition and subtraction, left to right.\n3 + 16 − 2 = 17\n\nAnswer: (D) 17"
  },
  {
    id: "t1q27",
    category: "Numbers & Operations",
    topic: "Arithmetic",
    source: "Effortless Math",
    question: "The price of a jacket was decreased by 50% to $405. What was the original price of the jacket?",
    choices: ["$202.50", "$405", "$607.50", "$750", "$810"],
    answer: "E",
    explanation: "Step 1: A 50% decrease means the sale price is 50% of the original.\n50% × original = $405\n0.50 × original = $405\n\nStep 2: Solve for the original price.\nOriginal = $405 ÷ 0.50 = $810\n\nAnswer: (E) $810"
  },
  // --- Reasoning (3) ---
  {
    id: "t1q28",
    category: "Reasoning",
    topic: "Puzzle / Logical Reasoning",
    source: "Claude",
    question: "In a row of 5 lockers, locker A is to the left of locker B. Locker C is between A and B. Locker D is to the right of B. Locker E is to the left of A. What is the order from left to right?",
    choices: ["E, A, C, B, D", "A, E, C, B, D", "E, C, A, B, D", "D, B, C, A, E", "A, C, B, D, E"],
    answer: "A",
    explanation: "Step 1: Start with what we know.\n- A is to the left of B → ... A ... B ...\n- C is between A and B → ... A, C, B ...\n- D is to the right of B → ... A, C, B, D\n- E is to the left of A → E, A, C, B, D\n\nStep 2: That fills all 5 positions.\n\nAnswer: (A) E, A, C, B, D"
  },
  {
    id: "t1q29",
    category: "Reasoning",
    topic: "Sequences & Patterns",
    source: "Effortless Math",
    question: "What is the missing number in the sequence: 3, 5, 9, 17, 33, __, 129?",
    choices: ["45", "65", "80", "97", "112"],
    answer: "B",
    explanation: "Step 1: Look at the pattern between consecutive terms.\n5 = 3 × 2 − 1\n9 = 5 × 2 − 1\n17 = 9 × 2 − 1\n33 = 17 × 2 − 1\n\nStep 2: Each term is double the previous term minus 1.\nMissing = 33 × 2 − 1 = 66 − 1 = 65\n\nStep 3: Check: 65 × 2 − 1 = 129 ✓\n\nAnswer: (B) 65"
  },
  {
    id: "t1q30",
    category: "Reasoning",
    topic: "Visual Spatial Reasoning",
    source: "Claude",
    question: "A cube is painted red on all 6 faces, then cut into 27 equal smaller cubes (3 × 3 × 3). How many of the smaller cubes have exactly 2 faces painted red?",
    choices: ["6", "8", "12", "18", "24"],
    answer: "C",
    explanation: "Step 1: Think about where each small cube sits.\n- Corner cubes: 3 painted faces (there are 8 corners)\n- Edge cubes (not corners): 2 painted faces\n- Face-center cubes: 1 painted face (6 total, one per face)\n- Center cube: 0 painted faces (1 total, hidden inside)\n\nStep 2: Count the edge cubes. A cube has 12 edges. Each edge of a 3 × 3 × 3 cube has 1 small cube in the middle (between the two corners).\n12 edges × 1 = 12 cubes with exactly 2 painted faces.\n\nAnswer: (C) 12"
  }
],


// === TEST 2 === (30 questions)
test2: [
  // --- Algebra (12) ---
  {
    id: "t2q1",
    category: "Algebra",
    topic: "Classic Problem Solving",
    source: "Claude",
    question: "A school field trip costs $1,200 total. Originally 8 students agreed to split the cost equally, but 2 students dropped out. How much more must each remaining student pay?",
    choices: ["$25", "$50", "$75", "$100", "$150"],
    answer: "B",
    explanation: "Step 1: Find the original cost per student.\n$1,200 ÷ 8 = $150 per student\n\nStep 2: Find the new cost per student after 2 drop out.\n$1,200 ÷ 6 = $200 per student\n\nStep 3: Find the difference.\n$200 − $150 = $50 more per student\n\nAnswer: (B) $50"
  },
  {
    id: "t2q2",
    category: "Algebra",
    topic: "Exponential Expressions",
    source: "Claude",
    question: "What is the value of 2<sup>5</sup> × 2<sup>3</sup> ÷ 2<sup>4</sup>?",
    choices: ["4", "8", "16", "32", "64"],
    answer: "C",
    explanation: "Step 1: When multiplying powers with the same base, add exponents.\n2⁵ × 2³ = 2⁸\n\nStep 2: When dividing powers with the same base, subtract exponents.\n2⁸ ÷ 2⁴ = 2⁴\n\nStep 3: Calculate.\n2⁴ = 16\n\nAnswer: (C) 16"
  },
  {
    id: "t2q3",
    category: "Algebra",
    topic: "Factoring",
    source: "Claude",
    question: "Which of the following is a factor of x² + 5x + 6?",
    choices: ["x + 1", "x − 2", "x − 3", "x + 2", "x + 6"],
    answer: "D",
    explanation: "Step 1: Factor x² + 5x + 6. Find two numbers that multiply to 6 and add to 5.\n2 × 3 = 6 and 2 + 3 = 5 ✓\n\nStep 2: Write the factored form.\nx² + 5x + 6 = (x + 2)(x + 3)\n\nStep 3: (x + 2) is one of the factors.\n\nAnswer: (D) x + 2"
  },
  {
    id: "t2q4",
    category: "Algebra",
    topic: "Functions",
    source: "Claude",
    question: "If g(x) = x² − 3x + 2, what is g(4)?",
    choices: ["2", "4", "6", "8", "10"],
    answer: "C",
    explanation: "Step 1: Substitute x = 4 into the function.\ng(4) = (4)² − 3(4) + 2\n\nStep 2: Calculate.\ng(4) = 16 − 12 + 2 = 6\n\nAnswer: (C) 6"
  },
  {
    id: "t2q5",
    category: "Algebra",
    topic: "Graphs",
    source: "Claude",
    question: "A line passes through points (−1, 4) and (3, −4). What is the y-intercept of this line?",
    choices: ["(0, 1)", "(0, 2)", "(0, 3)", "(0, −2)", "(0, 4)"],
    answer: "B",
    explanation: "Step 1: Find the slope.\nm = (−4 − 4) / (3 − (−1)) = −8 / 4 = −2\n\nStep 2: Use slope-intercept form y = mx + b with one of the points, say (−1, 4).\n4 = −2(−1) + b\n4 = 2 + b\nb = 2\n\nThe y-intercept is (0, 2).\n\nAnswer: (B) (0, 2)"
  },
  {
    id: "t2q6",
    category: "Algebra",
    topic: "Linear Equations / Systems",
    source: "Claude",
    question: "If 3x + 2y = 18 and x − y = 1, what is the value of x?",
    choices: ["2", "3", "3.5", "4", "5"],
    answer: "D",
    explanation: "Step 1: Solve the second equation for x.\nx = y + 1\n\nStep 2: Substitute into the first equation.\n3(y + 1) + 2y = 18\n3y + 3 + 2y = 18\n5y = 15\ny = 3\n\nStep 3: Find x.\nx = 3 + 1 = 4\n\nAnswer: (D) 4"
  },
  {
    id: "t2q7",
    category: "Algebra",
    topic: "Polynomial Expressions",
    source: "Claude",
    question: "What is the product of (x + 3)(x − 5)?",
    choices: ["x² − 2x − 15", "x² + 2x − 15", "x² − 8x − 15", "x² − 2x + 15", "x² + 2x + 15"],
    answer: "A",
    explanation: "Step 1: Use FOIL (First, Outer, Inner, Last).\nFirst: x × x = x²\nOuter: x × (−5) = −5x\nInner: 3 × x = 3x\nLast: 3 × (−5) = −15\n\nStep 2: Combine like terms.\nx² − 5x + 3x − 15 = x² − 2x − 15\n\nAnswer: (A) x² − 2x − 15"
  },
  {
    id: "t2q8",
    category: "Algebra",
    topic: "Quadratic Equations",
    source: "Claude",
    question: "A ball is thrown upward from the ground. Its height in feet after t seconds is h = −16t² + 48t. After how many seconds does the ball return to the ground?",
    choices: ["1", "2", "3", "4", "6"],
    answer: "C",
    explanation: "Step 1: The ball is on the ground when h = 0.\n0 = −16t² + 48t\n\nStep 2: Factor.\n0 = −16t(t − 3)\n\nStep 3: Set each factor to zero.\n−16t = 0 → t = 0 (start)\nt − 3 = 0 → t = 3 (lands)\n\nThe ball returns to the ground after 3 seconds.\n\nAnswer: (C) 3"
  },
  {
    id: "t2q9",
    category: "Algebra",
    topic: "Radical Expressions",
    source: "Claude",
    question: "What is the value of √48 + √12?",
    choices: ["2√3", "4√3", "√60", "6√3", "8√3"],
    answer: "D",
    explanation: "Step 1: Simplify √48.\n√48 = √(16 × 3) = 4√3\n\nStep 2: Simplify √12.\n√12 = √(4 × 3) = 2√3\n\nStep 3: Add the like radicals.\n4√3 + 2√3 = 6√3\n\nAnswer: (D) 6√3"
  },
  {
    id: "t2q10",
    category: "Algebra",
    topic: "Rates / Ratios / Proportions / Percentages",
    source: "Claude",
    question: "A car travels 180 miles on 6 gallons of gas. At this rate, how many gallons are needed to travel 450 miles?",
    choices: ["12", "13.5", "15", "16.5", "18"],
    answer: "C",
    explanation: "Step 1: Find the miles per gallon.\n180 ÷ 6 = 30 miles per gallon\n\nStep 2: Divide the desired distance by the rate.\n450 ÷ 30 = 15 gallons\n\nAnswer: (C) 15"
  },
  {
    id: "t2q11",
    category: "Algebra",
    topic: "Rational Expressions",
    source: "Claude",
    question: "Simplify: (2x + 6) / (x² − 9)",
    choices: ["2/(x + 3)", "2/(x − 3)", "(x + 3)/(x − 3)", "2/(x² − 9)", "2x/(x − 3)"],
    answer: "B",
    explanation: "Step 1: Factor the numerator.\n2x + 6 = 2(x + 3)\n\nStep 2: Factor the denominator as a difference of squares.\nx² − 9 = (x + 3)(x − 3)\n\nStep 3: Cancel the common factor (x + 3).\n2(x + 3) / [(x + 3)(x − 3)] = 2/(x − 3)\n\n(Note: x cannot equal 3 or −3)\n\nAnswer: (B) 2/(x − 3)"
  },
  {
    id: "t2q12",
    category: "Algebra",
    topic: "Slope",
    source: "Claude",
    question: "A wheelchair ramp rises 3 feet over a horizontal distance of 36 feet. What is the slope of the ramp?",
    choices: ["1/12", "1/9", "1/6", "3", "12"],
    answer: "A",
    explanation: "Step 1: Slope = rise / run.\nSlope = 3 / 36\n\nStep 2: Simplify the fraction.\n3/36 = 1/12\n\nAnswer: (A) 1/12"
  },
  // --- Geometry & Measurement (7) ---
  {
    id: "t2q13",
    category: "Geometry & Measurement",
    topic: "Transformations",
    source: "Claude",
    question: "If point P(3, −2) is reflected over the y-axis, what are the coordinates of the reflected point?",
    choices: ["(3, 2)", "(−3, −2)", "(−3, 2)", "(3, −2)", "(2, −3)"],
    answer: "B",
    explanation: "Step 1: When reflecting over the y-axis, the x-coordinate changes sign and the y-coordinate stays the same.\n\nStep 2: P(3, −2) becomes (−3, −2).\n\nAnswer: (B) (−3, −2)"
  },
  {
    id: "t2q14",
    category: "Geometry & Measurement",
    topic: "3D: Volume / Surface Area",
    source: "Claude",
    question: "A cylinder has a radius of 5 cm and a height of 10 cm. What is its volume? (Use π ≈ 3.14)",
    choices: ["157 cm³", "314 cm³", "628 cm³", "785 cm³", "1,570 cm³"],
    answer: "D",
    explanation: "Step 1: Volume of a cylinder = πr²h.\nV = 3.14 × 5² × 10\n\nStep 2: Calculate.\nV = 3.14 × 25 × 10 = 3.14 × 250 = 785 cm³\n\nAnswer: (D) 785 cm³"
  },
  {
    id: "t2q15",
    category: "Geometry & Measurement",
    topic: "Angles",
    source: "Claude",
    question: "In a triangle, one angle measures 40° and another measures 75°. What is the measure of the third angle?",
    choices: ["45°", "55°", "65°", "75°", "115°"],
    answer: "C",
    explanation: "Step 1: The three angles of any triangle add up to 180°.\n\nStep 2: Third angle = 180° − 40° − 75° = 65°\n\nAnswer: (C) 65°"
  },
  {
    id: "t2q16",
    category: "Geometry & Measurement",
    topic: "Area",
    source: "Claude",
    question: "A trapezoid has parallel sides of 10 cm and 14 cm, and a height of 6 cm. What is its area?",
    choices: ["60 cm²", "72 cm²", "84 cm²", "96 cm²", "144 cm²"],
    answer: "B",
    explanation: "Step 1: Area of a trapezoid = (1/2)(base₁ + base₂)(height).\nA = (1/2)(10 + 14)(6)\n\nStep 2: Calculate.\nA = (1/2)(24)(6) = (1/2)(144) = 72 cm²\n\nAnswer: (B) 72 cm²"
  },
  {
    id: "t2q17",
    category: "Geometry & Measurement",
    topic: "Converting Units / Dimensional Analysis",
    source: "Claude",
    question: "A school track is 400 meters per lap. If Marcus runs 6 laps, how many kilometers does he run?",
    choices: ["0.24", "2.0", "2.4", "24", "240"],
    answer: "C",
    explanation: "Step 1: Find the total distance in meters.\n6 × 400 = 2,400 meters\n\nStep 2: Convert to kilometers (1 km = 1,000 m).\n2,400 ÷ 1,000 = 2.4 km\n\nAnswer: (C) 2.4"
  },
  {
    id: "t2q18",
    category: "Geometry & Measurement",
    topic: "Coordinate Geometry",
    source: "Claude",
    question: "What is the midpoint of the segment connecting (−4, 6) and (8, −2)?",
    choices: ["(6, 4)", "(2, 4)", "(−2, 2)", "(2, 2)", "(4, 2)"],
    answer: "D",
    explanation: "Step 1: Use the midpoint formula: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\nM = ((−4 + 8)/2, (6 + (−2))/2)\n\nStep 2: Calculate.\nM = (4/2, 4/2) = (2, 2)\n\nAnswer: (D) (2, 2)"
  },
  {
    id: "t2q19",
    category: "Geometry & Measurement",
    topic: "Length / Perimeter / Circumference",
    source: "Claude",
    question: "A regular hexagon has a side length of 9 cm. What is its perimeter?",
    choices: ["36 cm", "42 cm", "45 cm", "48 cm", "54 cm"],
    answer: "E",
    explanation: "Step 1: A regular hexagon has 6 equal sides.\nPerimeter = 6 × side length\n\nStep 2: Calculate.\nP = 6 × 9 = 54 cm\n\nAnswer: (E) 54 cm"
  },
  // --- Data Analysis (3) ---
  {
    id: "t2q20",
    category: "Data Analysis",
    topic: "Data Graphs & Tables",
    source: "Claude",
    question: "A bar graph shows the number of books read by students in a month: 0 books (3 students), 1 book (7 students), 2 books (5 students), 3 books (4 students), 4 books (1 student). How many students read at least 2 books?",
    choices: ["5", "9", "10", "15", "20"],
    answer: "C",
    explanation: "Step 1: \"At least 2\" means 2 or more. Add up students who read 2, 3, or 4 books.\n2 books: 5 students\n3 books: 4 students\n4 books: 1 student\n\nStep 2: Total = 5 + 4 + 1 = 10\n\nAnswer: (C) 10"
  },
  {
    id: "t2q21",
    category: "Data Analysis",
    topic: "Set Theory",
    source: "Claude",
    question: "In a class of 30 students, 18 play basketball and 15 play soccer. If 8 students play both sports, how many play neither?",
    choices: ["3", "5", "7", "8", "10"],
    answer: "B",
    explanation: "Step 1: Use the inclusion-exclusion principle.\nStudents who play at least one sport = Basketball + Soccer − Both\n= 18 + 15 − 8 = 25\n\nStep 2: Subtract from the total.\n30 − 25 = 5 students play neither sport\n\nAnswer: (B) 5"
  },
  {
    id: "t2q22",
    category: "Data Analysis",
    topic: "Mean / Median / Mode / Range",
    source: "Claude",
    question: "Marcus scored 78, 85, 92, 88, and 72 on five math tests. What is the median of his scores?",
    choices: ["78", "83", "85", "88", "92"],
    answer: "C",
    explanation: "Step 1: Arrange the scores in order from least to greatest.\n72, 78, 85, 88, 92\n\nStep 2: The median is the middle value. With 5 numbers, the middle is the 3rd value.\nMedian = 85\n\nAnswer: (C) 85"
  },
  // --- Numbers & Operations (5) ---
  {
    id: "t2q23",
    category: "Numbers & Operations",
    topic: "Arithmetic",
    source: "Claude",
    question: "What is the value of (−8) × (−3) + (−12) ÷ 4?",
    choices: ["15", "18", "19", "21", "27"],
    answer: "D",
    explanation: "Step 1: Handle multiplication first.\n(−8) × (−3) = 24 (a negative times a negative is positive)\n\nStep 2: Handle division.\n(−12) ÷ 4 = −3\n\nStep 3: Add.\n24 + (−3) = 21\n\nAnswer: (D) 21"
  },
  {
    id: "t2q24",
    category: "Numbers & Operations",
    topic: "Estimation",
    source: "Claude",
    question: "The Earth is approximately 92,960,000 miles from the Sun. What is this distance rounded to the nearest million?",
    choices: ["92,000,000", "93,000,000", "92,900,000", "93,100,000", "100,000,000"],
    answer: "B",
    explanation: "Step 1: Look at the hundred-thousands digit to decide how to round.\n92,960,000 — the hundred-thousands digit is 9 (which is 5 or greater), so round up.\n\nStep 2: Round to the nearest million.\n92,960,000 ≈ 93,000,000\n\nAnswer: (B) 93,000,000"
  },
  {
    id: "t2q25",
    category: "Numbers & Operations",
    topic: "Number Sense / Number Theory",
    source: "Claude",
    question: "How many prime numbers are between 20 and 40?",
    choices: ["3", "4", "5", "6", "7"],
    answer: "B",
    explanation: "Step 1: Check each number from 21 to 39.\n21 = 3 × 7 (not prime)\n22 = 2 × 11 (not prime)\n23 — not divisible by 2, 3, or any prime up to √23 → prime ✓\n24, 25, 26, 27, 28 — all composite\n29 — prime ✓\n30, 32, 33, 34, 35, 36 — all composite\n31 — prime ✓\n37 — prime ✓\n38, 39 — composite\n\nStep 2: The primes are 23, 29, 31, and 37. That is 4 primes.\n\nAnswer: (B) 4"
  },
  {
    id: "t2q26",
    category: "Numbers & Operations",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of 5 × (8 − 3)² ÷ 5 + 2?",
    choices: ["7", "12", "17", "22", "27"],
    answer: "E",
    explanation: "Step 1: Parentheses first.\n8 − 3 = 5\n\nStep 2: Exponents.\n5² = 25\n\nStep 3: Multiplication and division, left to right.\n5 × 25 = 125\n125 ÷ 5 = 25\n\nStep 4: Addition.\n25 + 2 = 27\n\nAnswer: (E) 27"
  },
  {
    id: "t2q27",
    category: "Numbers & Operations",
    topic: "Number Sense / Number Theory",
    source: "Claude",
    question: "What is the least common multiple (LCM) of 12 and 18?",
    choices: ["6", "24", "36", "72", "216"],
    answer: "C",
    explanation: "Step 1: Find the prime factorization of each number.\n12 = 2² × 3\n18 = 2 × 3²\n\nStep 2: Take the highest power of each prime.\nHighest power of 2: 2² = 4\nHighest power of 3: 3² = 9\nLCM = 4 × 9 = 36\n\nAnswer: (C) 36"
  },
  // --- Reasoning (3) ---
  {
    id: "t2q28",
    category: "Reasoning",
    topic: "Puzzle / Logical Reasoning",
    source: "Claude",
    question: "Five friends — Alex, Ben, Cara, Dana, and Eli — finished a race. Alex finished before Ben but after Cara. Dana finished last. Eli finished right after Ben. In what place did Ben finish?",
    choices: ["1st", "2nd", "3rd", "4th", "5th"],
    answer: "C",
    explanation: "Step 1: Use the clues to build the order.\n- Alex finished before Ben → Alex is ahead of Ben.\n- Alex finished after Cara → Cara is ahead of Alex.\nSo far: Cara, Alex, Ben\n- Eli finished right after Ben → Cara, Alex, Ben, Eli\n- Dana finished last → Cara, Alex, Ben, Eli, Dana\n\nStep 2: Ben is in 3rd place.\n\nAnswer: (C) 3rd"
  },
  {
    id: "t2q29",
    category: "Reasoning",
    topic: "Sequences & Patterns",
    source: "Claude",
    question: "What is the next number in the pattern: 2, 6, 18, 54, ...?",
    choices: ["72", "108", "144", "162", "216"],
    answer: "D",
    explanation: "Step 1: Find the pattern between consecutive terms.\n6 ÷ 2 = 3\n18 ÷ 6 = 3\n54 ÷ 18 = 3\n\nStep 2: Each term is multiplied by 3.\n54 × 3 = 162\n\nAnswer: (D) 162"
  },
  {
    id: "t2q30",
    category: "Reasoning",
    topic: "Visual Spatial Reasoning",
    source: "Claude",
    question: "On a standard die, opposite faces always add up to 7. If the top face shows 3 and the front face shows 2, what number is on the bottom face?",
    choices: ["2", "4", "5", "6", "7"],
    answer: "B",
    explanation: "Step 1: Opposite faces of a standard die sum to 7.\n\nStep 2: The bottom face is opposite the top face.\nTop = 3, so Bottom = 7 − 3 = 4.\n\nAnswer: (B) 4"
  }
]

};
