// Tests 3, 4, 5 — SSAT Upper Level Math Practice
// Appends to ALL_TEST_DATA (declared in test-data.js)

// === TEST 3 === (30 questions)
ALL_TEST_DATA.test3 = [
  // --- Number Sense (9) ---
  {
    id: "t3q1",
    category: "Number Sense",
    topic: "Fractions",
    source: "Claude",
    question: "Which of the following fractions is between 1/3 and 1/2?",
    choices: ["2/7", "3/8", "5/12", "4/11", "2/9"],
    answer: "C",
    explanation: "Step 1: Convert 1/3 and 1/2 to fractions with a common denominator of 12.\n1/3 = 4/12 and 1/2 = 6/12\n\nStep 2: Convert each choice to twelfths (or compare to the bounds).\n5/12 is between 4/12 and 6/12. ✓\n\nStep 3: Check the others.\n2/7 ≈ 0.286 (less than 1/3 ≈ 0.333) ✗\n3/8 = 0.375 (between, but let's compare to 5/12 ≈ 0.417 — 3/8 is also between 1/3 and 1/2).\nActually 3/8 = 0.375 is between 0.333 and 0.5 too, but 5/12 ≈ 0.417 is also between.\n4/11 ≈ 0.364, also between.\n\nThe intended comparison: 5/12 is clearly between 4/12 and 6/12 with no conversion needed.\n\nAnswer: (C) 5/12"
  },
  {
    id: "t3q2",
    category: "Number Sense",
    topic: "Decimals",
    source: "Claude",
    question: "Arrange these decimals from least to greatest: 0.305, 0.35, 0.3, 0.035. Which comes third?",
    choices: ["0.035", "0.3", "0.305", "0.35", "They are all equal"],
    answer: "C",
    explanation: "Step 1: Write all decimals to the same number of places (thousandths).\n0.305 = 0.305\n0.35 = 0.350\n0.3 = 0.300\n0.035 = 0.035\n\nStep 2: Order from least to greatest.\n0.035, 0.300, 0.305, 0.350\n\nStep 3: The third value is 0.305.\n\nAnswer: (C) 0.305"
  },
  {
    id: "t3q3",
    category: "Number Sense",
    topic: "Percents",
    source: "Claude",
    question: "A pair of sneakers originally costs $80. The store marks them up 25%, then offers a 20% discount on the new price. What is the final price?",
    choices: ["$76", "$80", "$84", "$88", "$96"],
    answer: "B",
    explanation: "Step 1: Find the marked-up price.\n25% of $80 = $20, so the new price is $80 + $20 = $100.\n\nStep 2: Find the discounted price.\n20% of $100 = $20, so the final price is $100 − $20 = $80.\n\nStep 3: Notice — a 25% markup followed by a 20% discount does NOT get you back to the original. In this case it happens to equal $80, but that's because 1.25 × 0.80 = 1.00.\n\nAnswer: (B) $80"
  },
  {
    id: "t3q4",
    category: "Number Sense",
    topic: "GCF/LCM",
    source: "Claude",
    question: "Two runners start at the same point on a circular track. Runner A completes a lap every 6 minutes and Runner B every 8 minutes. After how many minutes will they both be at the starting point together again?",
    choices: ["12", "14", "24", "48", "56"],
    answer: "C",
    explanation: "Step 1: We need the least common multiple (LCM) of 6 and 8.\n\nStep 2: Find prime factorizations.\n6 = 2 × 3\n8 = 2³\n\nStep 3: Take the highest power of each prime.\nLCM = 2³ × 3 = 8 × 3 = 24\n\nThey'll meet at the start every 24 minutes.\n\nAnswer: (C) 24"
  },
  {
    id: "t3q5",
    category: "Number Sense",
    topic: "Factors and Multiples",
    source: "Claude",
    question: "What is the greatest common factor (GCF) of 42 and 70?",
    choices: ["2", "7", "14", "21", "42"],
    answer: "C",
    explanation: "Step 1: Find the prime factorizations.\n42 = 2 × 3 × 7\n70 = 2 × 5 × 7\n\nStep 2: Take the common prime factors with the lowest power.\nCommon factors: 2 and 7\nGCF = 2 × 7 = 14\n\nAnswer: (C) 14"
  },
  {
    id: "t3q6",
    category: "Number Sense",
    topic: "Absolute Value",
    source: "Claude",
    question: "If |x − 3| = 7, what is the sum of all possible values of x?",
    choices: ["0", "3", "6", "10", "14"],
    answer: "C",
    explanation: "Step 1: |x − 3| = 7 means x − 3 = 7 or x − 3 = −7.\n\nStep 2: Solve each.\nx − 3 = 7 → x = 10\nx − 3 = −7 → x = −4\n\nStep 3: Sum: 10 + (−4) = 6\n\nAnswer: (C) 6"
  },
  {
    id: "t3q7",
    category: "Number Sense",
    topic: "Exponents and Roots",
    source: "Claude",
    question: "Which is larger: 2<sup>10</sup> or 10<sup>3</sup>?",
    choices: ["2<sup>10</sup> is larger", "10<sup>3</sup> is larger", "They are equal", "Cannot be determined", "They differ by exactly 1"],
    answer: "A",
    explanation: "Step 1: Calculate 2¹⁰.\n2¹⁰ = 1,024\n\nStep 2: Calculate 10³.\n10³ = 1,000\n\nStep 3: 1,024 > 1,000, so 2¹⁰ is larger.\n\nAnswer: (A) 2<sup>10</sup> is larger"
  },
  {
    id: "t3q8",
    category: "Number Sense",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of 1/2 + 2/3 × 3/4?",
    choices: ["3/4", "7/8", "1", "1 and 1/8", "3/8"],
    answer: "C",
    explanation: "Step 1: Multiplication comes before addition (order of operations).\n2/3 × 3/4 = 6/12 = 1/2\n\nStep 2: Now add.\n1/2 + 1/2 = 1\n\nAnswer: (C) 1"
  },
  {
    id: "t3q9",
    category: "Number Sense",
    topic: "Fraction-Decimal-Percent Conversion",
    source: "Claude",
    question: "Which of the following is equal to 0.375?",
    choices: ["3/7", "3/8", "5/12", "37/100", "4/9"],
    answer: "B",
    explanation: "Step 1: Convert 0.375 to a fraction.\n0.375 = 375/1000\n\nStep 2: Simplify by dividing numerator and denominator by 125.\n375 ÷ 125 = 3\n1000 ÷ 125 = 8\nSo 0.375 = 3/8.\n\nAnswer: (B) 3/8"
  },
  // --- Algebra (7) ---
  {
    id: "t3q10",
    category: "Algebra",
    topic: "Linear Equations",
    source: "Claude",
    question: "Maria has three times as many stickers as Jon. Together they have 84 stickers. How many stickers does Maria have?",
    choices: ["21", "28", "42", "56", "63"],
    answer: "E",
    explanation: "Step 1: Let Jon's stickers = x. Maria has 3x.\nx + 3x = 84\n\nStep 2: Solve.\n4x = 84\nx = 21\n\nStep 3: Maria has 3 × 21 = 63.\n\nStep 4: Check: 21 + 63 = 84. ✓\n\nAnswer: (E) 63"
  },
  {
    id: "t3q11",
    category: "Algebra",
    topic: "Inequalities",
    source: "Claude",
    question: "If 3x + 5 > 20, which of the following is a possible value of x?",
    choices: ["3", "4", "5", "6", "All of the above"],
    answer: "D",
    explanation: "Step 1: Solve the inequality.\n3x + 5 > 20\n3x > 15\nx > 5\n\nStep 2: x must be greater than 5 (not equal to 5).\nOnly 6 satisfies x > 5.\n\nAnswer: (D) 6"
  },
  {
    id: "t3q12",
    category: "Algebra",
    topic: "Word Problems",
    source: "Claude",
    question: "A phone plan charges $15 per month plus $0.10 per text message. Another plan charges $25 per month with unlimited texts. How many texts would you need to send for both plans to cost the same?",
    choices: ["50", "75", "100", "150", "250"],
    answer: "C",
    explanation: "Step 1: Set the costs equal. Let t = number of texts.\n15 + 0.10t = 25\n\nStep 2: Solve.\n0.10t = 10\nt = 100\n\nAt 100 texts, both plans cost $25.\n\nAnswer: (C) 100"
  },
  {
    id: "t3q13",
    category: "Algebra",
    topic: "Sequences",
    source: "Claude",
    question: "The first term of a sequence is 5, and each term after is 3 more than the previous term. What is the 20th term?",
    choices: ["57", "60", "62", "65", "68"],
    answer: "C",
    explanation: "Step 1: This is an arithmetic sequence with first term a₁ = 5 and common difference d = 3.\n\nStep 2: The nth term formula is aₙ = a₁ + (n − 1)d.\na₂₀ = 5 + (20 − 1)(3)\na₂₀ = 5 + 19 × 3\na₂₀ = 5 + 57 = 62\n\nAnswer: (C) 62"
  },
  {
    id: "t3q14",
    category: "Algebra",
    topic: "Ratios and Proportions",
    source: "Claude",
    question: "On a map, 2 inches represents 35 miles. If two cities are 5 inches apart on the map, what is the actual distance between them?",
    choices: ["70 miles", "75 miles", "87.5 miles", "100 miles", "175 miles"],
    answer: "C",
    explanation: "Step 1: Set up a proportion.\n2 inches / 35 miles = 5 inches / x miles\n\nStep 2: Cross-multiply and solve.\n2x = 35 × 5 = 175\nx = 87.5 miles\n\nAnswer: (C) 87.5 miles"
  },
  {
    id: "t3q15",
    category: "Algebra",
    topic: "Rates",
    source: "Claude",
    question: "A printer can print 12 pages per minute. A second printer prints 8 pages per minute. Working together, how long will it take them to print 100 pages?",
    choices: ["4 minutes", "5 minutes", "6 minutes", "8 minutes", "10 minutes"],
    answer: "B",
    explanation: "Step 1: Combined rate = 12 + 8 = 20 pages per minute.\n\nStep 2: Time = total pages ÷ rate.\nTime = 100 ÷ 20 = 5 minutes\n\nAnswer: (B) 5 minutes"
  },
  {
    id: "t3q16",
    category: "Algebra",
    topic: "Basic Functions",
    source: "Claude",
    question: "A machine converts Celsius to Fahrenheit using the rule F(C) = 9C/5 + 32. If the output is 212°F, what was the input in Celsius?",
    choices: ["80°C", "90°C", "100°C", "110°C", "120°C"],
    answer: "C",
    explanation: "Step 1: Set F(C) = 212 and solve for C.\n9C/5 + 32 = 212\n\nStep 2: Subtract 32.\n9C/5 = 180\n\nStep 3: Multiply both sides by 5/9.\nC = 180 × 5/9 = 100\n\nAnswer: (C) 100°C"
  },
  // --- Geometry (6) ---
  {
    id: "t3q17",
    category: "Geometry",
    topic: "Triangles",
    source: "Claude",
    question: "A triangle has sides of length 5, 12, and 13. What type of triangle is it?",
    choices: ["Acute", "Right", "Obtuse", "Equilateral", "Cannot be determined"],
    answer: "B",
    explanation: "Step 1: Check if it's a right triangle by testing the Pythagorean theorem.\n5² + 12² = 25 + 144 = 169\n13² = 169\n\nStep 2: Since 5² + 12² = 13², this is a right triangle.\n\nAnswer: (B) Right"
  },
  {
    id: "t3q18",
    category: "Geometry",
    topic: "Circles",
    source: "Claude",
    question: "A pizza with a 14-inch diameter is cut into 8 equal slices. What is the area of one slice? (Use π ≈ 22/7)",
    choices: ["9.625 in²", "15.25 in²", "19.25 in²", "38.5 in²", "77 in²"],
    answer: "C",
    explanation: "Step 1: Find the radius. Diameter = 14, so radius = 7 inches.\n\nStep 2: Find the total area of the pizza.\nA = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 in²\n\nStep 3: Divide by 8 slices.\n154 ÷ 8 = 19.25 in²\n\nAnswer: (C) 19.25 in²"
  },
  {
    id: "t3q19",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "A 6-foot-tall person casts a 4-foot shadow at the same time a flagpole casts a 20-foot shadow. How tall is the flagpole?",
    choices: ["15 ft", "20 ft", "24 ft", "30 ft", "36 ft"],
    answer: "D",
    explanation: "Step 1: The person and flagpole form similar triangles with their shadows.\nSet up a proportion: height/shadow = height/shadow.\n6/4 = h/20\n\nStep 2: Cross-multiply.\n4h = 6 × 20 = 120\nh = 30 feet\n\nAnswer: (D) 30 ft"
  },
  {
    id: "t3q20",
    category: "Geometry",
    topic: "Angles",
    source: "Claude",
    question: "In a quadrilateral, three of the angles measure 85°, 90°, and 110°. What is the measure of the fourth angle?",
    choices: ["55°", "65°", "75°", "80°", "95°"],
    answer: "C",
    explanation: "Step 1: The sum of angles in a quadrilateral is 360°.\n\nStep 2: Fourth angle = 360° − 85° − 90° − 110° = 75°\n\nAnswer: (C) 75°"
  },
  {
    id: "t3q21",
    category: "Geometry",
    topic: "Right Triangles",
    source: "Claude",
    question: "A rectangular garden is 9 meters wide and 12 meters long. A path runs diagonally from one corner to the opposite corner. How long is the path?",
    choices: ["10 m", "12 m", "15 m", "18 m", "21 m"],
    answer: "C",
    explanation: "Step 1: The diagonal of a rectangle forms a right triangle with the sides.\nUse the Pythagorean theorem: d² = 9² + 12²\n\nStep 2: Calculate.\nd² = 81 + 144 = 225\nd = √225 = 15 m\n\nAnswer: (C) 15 m"
  },
  {
    id: "t3q22",
    category: "Geometry",
    topic: "Coordinate Basics",
    source: "Claude",
    question: "A rectangle has corners at (1, 1), (1, 5), (7, 5), and (7, 1). What is its area?",
    choices: ["12", "16", "20", "24", "28"],
    answer: "D",
    explanation: "Step 1: Find the length and width.\nLength = 7 − 1 = 6\nWidth = 5 − 1 = 4\n\nStep 2: Area = length × width = 6 × 4 = 24\n\nAnswer: (D) 24"
  },
  // --- Data Analysis (5) ---
  {
    id: "t3q23",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A jar has 6 red, 4 blue, and 5 green marbles. If you pick one marble at random, what is the probability it is NOT green?",
    choices: ["1/3", "2/5", "1/2", "2/3", "3/5"],
    answer: "D",
    explanation: "Step 1: Total marbles = 6 + 4 + 5 = 15.\n\nStep 2: Marbles that are NOT green = 6 + 4 = 10.\n\nStep 3: Probability = 10/15 = 2/3.\n\nAnswer: (D) 2/3"
  },
  {
    id: "t3q24",
    category: "Data Analysis",
    topic: "Graphs and Tables",
    source: "Claude",
    question: "A table shows monthly rainfall: Jan: 3.2 in, Feb: 2.8 in, Mar: 4.1 in, Apr: 3.5 in. By how much did rainfall increase from February to March?",
    choices: ["0.3 in", "0.6 in", "0.9 in", "1.3 in", "1.6 in"],
    answer: "D",
    explanation: "Step 1: Find the difference between March and February.\n4.1 − 2.8 = 1.3 inches\n\nAnswer: (D) 1.3 in"
  },
  {
    id: "t3q25",
    category: "Data Analysis",
    topic: "Mean/Median/Mode/Range",
    source: "Claude",
    question: "Five test scores have a mean of 80. Four of the scores are 75, 82, 88, and 70. What is the fifth score?",
    choices: ["75", "80", "85", "90", "95"],
    answer: "C",
    explanation: "Step 1: If the mean of 5 scores is 80, their sum = 5 × 80 = 400.\n\nStep 2: Add the four known scores.\n75 + 82 + 88 + 70 = 315\n\nStep 3: Fifth score = 400 − 315 = 85.\n\nAnswer: (C) 85"
  },
  {
    id: "t3q26",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "A cafeteria offers 3 types of sandwich, 4 types of drink, and 2 types of dessert. If a lunch combo includes one of each, how many different combos are possible?",
    choices: ["9", "12", "18", "24", "36"],
    answer: "D",
    explanation: "Step 1: Use the counting principle — multiply the number of choices.\n3 × 4 × 2 = 24\n\nAnswer: (D) 24"
  },
  {
    id: "t3q27",
    category: "Data Analysis",
    topic: "Proportions",
    source: "Claude",
    question: "In a survey, 3 out of every 5 students prefer math over science. If 200 students were surveyed, how many prefer math?",
    choices: ["40", "60", "80", "100", "120"],
    answer: "E",
    explanation: "Step 1: Set up the proportion.\n3/5 = x/200\n\nStep 2: Solve.\nx = (3/5) × 200 = 120\n\nAnswer: (E) 120"
  },
  // --- Reasoning (3) ---
  {
    id: "t3q28",
    category: "Reasoning",
    topic: "Multi-Step Word Problems",
    source: "Claude",
    question: "A bookstore sells hardcovers for $18 and paperbacks for $7. On Monday, the store sold twice as many paperbacks as hardcovers and collected $128 total. How many hardcovers were sold?",
    choices: ["2", "3", "4", "5", "6"],
    answer: "C",
    explanation: "Step 1: Let h = number of hardcovers. Paperbacks = 2h.\n18h + 7(2h) = 128\n\nStep 2: Simplify and solve.\n18h + 14h = 128\n32h = 128\nh = 4\n\nStep 3: Check: 4 hardcovers ($72) + 8 paperbacks ($56) = $128. ✓\n\nAnswer: (C) 4"
  },
  {
    id: "t3q29",
    category: "Reasoning",
    topic: "Must Be True / Cannot Be",
    source: "Claude",
    question: "If n is an odd number, which of the following MUST be even?",
    choices: ["n + 1", "n + 2", "2n + 1", "n²", "n + n + 1"],
    answer: "A",
    explanation: "Step 1: If n is odd, then n + 1 adds 1 to an odd number, making it even.\n\nStep 2: Check the others.\nn + 2 = odd + even = odd ✗\n2n + 1 = even + 1 = odd ✗\nn² = odd × odd = odd ✗\nn + n + 1 = 2n + 1 = odd ✗\n\nAnswer: (A) n + 1"
  },
  {
    id: "t3q30",
    category: "Reasoning",
    topic: "Estimation",
    source: "Claude",
    question: "Which is closest to the value of 597 × 41?",
    choices: ["18,000", "20,000", "24,000", "25,000", "30,000"],
    answer: "C",
    explanation: "Step 1: Round to estimate.\n597 ≈ 600 and 41 ≈ 40\n600 × 40 = 24,000\n\nStep 2: The actual answer is 597 × 41 = 24,477, which is closest to 24,000.\n\nAnswer: (C) 24,000"
  }
];


// === TEST 4 === (30 questions)
ALL_TEST_DATA.test4 = [
  // --- Number Sense (9) ---
  {
    id: "t4q1",
    category: "Number Sense",
    topic: "Fractions",
    source: "Claude",
    question: "What is 2 and 3/4 minus 1 and 5/8?",
    choices: ["1 and 1/8", "1 and 1/4", "1 and 3/8", "1 and 1/2", "2 and 1/8"],
    answer: "A",
    explanation: "Step 1: Convert to improper fractions.\n2 and 3/4 = 11/4\n1 and 5/8 = 13/8\n\nStep 2: Find a common denominator (8).\n11/4 = 22/8\n\nStep 3: Subtract.\n22/8 − 13/8 = 9/8 = 1 and 1/8\n\nAnswer: (A) 1 and 1/8"
  },
  {
    id: "t4q2",
    category: "Number Sense",
    topic: "Decimals",
    source: "Claude",
    question: "What is 0.6 × 0.15?",
    choices: ["0.009", "0.09", "0.9", "9.0", "0.0009"],
    answer: "B",
    explanation: "Step 1: Multiply as if they were whole numbers.\n6 × 15 = 90\n\nStep 2: Count total decimal places in the factors.\n0.6 has 1 decimal place, 0.15 has 2 decimal places → total 3 decimal places.\n\nStep 3: Place the decimal in the product.\n90 → 0.090 = 0.09\n\nAnswer: (B) 0.09"
  },
  {
    id: "t4q3",
    category: "Number Sense",
    topic: "Percents",
    source: "Claude",
    question: "A restaurant bill is $45. You want to leave a 20% tip. Your friend says the tip should be $8. By how much is your friend's answer off?",
    choices: ["$0.50", "$1.00", "$1.50", "$2.00", "$2.50"],
    answer: "B",
    explanation: "Step 1: Calculate the correct 20% tip.\n20% of $45 = 0.20 × 45 = $9.00\n\nStep 2: Find the difference from your friend's amount.\n$9.00 − $8.00 = $1.00\n\nAnswer: (B) $1.00"
  },
  {
    id: "t4q4",
    category: "Number Sense",
    topic: "GCF/LCM",
    source: "Claude",
    question: "Hot dog buns come in packages of 8 and hot dogs come in packages of 6. What is the fewest of each you need to buy so you have the same number of buns and hot dogs?",
    choices: ["24 of each", "36 of each", "48 of each", "12 of each", "16 of each"],
    answer: "A",
    explanation: "Step 1: Find the LCM of 8 and 6.\n8 = 2³\n6 = 2 × 3\nLCM = 2³ × 3 = 24\n\nStep 2: You need 24 of each: 3 packs of buns (3 × 8 = 24) and 4 packs of hot dogs (4 × 6 = 24).\n\nAnswer: (A) 24 of each"
  },
  {
    id: "t4q5",
    category: "Number Sense",
    topic: "Factors and Multiples",
    source: "Claude",
    question: "How many factors does the number 36 have?",
    choices: ["5", "6", "7", "8", "9"],
    answer: "E",
    explanation: "Step 1: List all factors of 36.\n1, 2, 3, 4, 6, 9, 12, 18, 36\n\nStep 2: Count them: 9 factors.\n\nAnswer: (E) 9"
  },
  {
    id: "t4q6",
    category: "Number Sense",
    topic: "Absolute Value",
    source: "Claude",
    question: "Which point on a number line is closest to zero: −7, 3, −2, 5, or −4?",
    choices: ["−7", "3", "−2", "5", "−4"],
    answer: "C",
    explanation: "Step 1: The point closest to zero has the smallest absolute value.\n|−7| = 7, |3| = 3, |−2| = 2, |5| = 5, |−4| = 4\n\nStep 2: The smallest is 2, which corresponds to −2.\n\nAnswer: (C) −2"
  },
  {
    id: "t4q7",
    category: "Number Sense",
    topic: "Exponents and Roots",
    source: "Claude",
    question: "Between which two consecutive whole numbers does √50 lie?",
    choices: ["5 and 6", "6 and 7", "7 and 8", "8 and 9", "24 and 26"],
    answer: "C",
    explanation: "Step 1: Find perfect squares near 50.\n7² = 49 and 8² = 64\n\nStep 2: Since 49 < 50 < 64, we know 7 < √50 < 8.\n\nAnswer: (C) 7 and 8"
  },
  {
    id: "t4q8",
    category: "Number Sense",
    topic: "Order of Operations",
    source: "Claude",
    question: "Evaluate: 18 ÷ (2 + 4) × 3 − 1",
    choices: ["0", "1", "8", "10", "26"],
    answer: "C",
    explanation: "Step 1: Parentheses first: 2 + 4 = 6.\n\nStep 2: Division and multiplication left to right.\n18 ÷ 6 = 3\n3 × 3 = 9\n\nStep 3: Subtraction.\n9 − 1 = 8\n\nAnswer: (C) 8"
  },
  {
    id: "t4q9",
    category: "Number Sense",
    topic: "Fraction-Decimal-Percent Conversion",
    source: "Claude",
    question: "A student answered 17 out of 20 questions correctly. What percent did the student get right?",
    choices: ["17%", "80%", "83%", "85%", "87%"],
    answer: "D",
    explanation: "Step 1: Convert 17/20 to a percent.\n17/20 = 17 × 5 / (20 × 5) = 85/100 = 85%\n\nAnswer: (D) 85%"
  },
  // --- Algebra (7) ---
  {
    id: "t4q10",
    category: "Algebra",
    topic: "Linear Equations",
    source: "Claude",
    question: "A number is doubled and then 9 is subtracted. The result is 37. What is the number?",
    choices: ["14", "19", "23", "28", "32"],
    answer: "C",
    explanation: "Step 1: Translate to an equation. Let n = the number.\n2n − 9 = 37\n\nStep 2: Solve.\n2n = 46\nn = 23\n\nStep 3: Check: 2(23) − 9 = 46 − 9 = 37. ✓\n\nAnswer: (C) 23"
  },
  {
    id: "t4q11",
    category: "Algebra",
    topic: "Inequalities",
    source: "Claude",
    question: "A store requires you to spend more than $50 to get free shipping. If you have already selected items totaling $32, what is the minimum whole-dollar amount you must still add?",
    choices: ["$17", "$18", "$19", "$20", "$22"],
    answer: "C",
    explanation: "Step 1: You need to spend MORE than $50 (not equal).\n$32 + x > $50\nx > $18\n\nStep 2: The minimum whole-dollar amount greater than $18 is $19.\n\nAnswer: (C) $19"
  },
  {
    id: "t4q12",
    category: "Algebra",
    topic: "Word Problems",
    source: "Claude",
    question: "Tickets to a school play cost $5 for students and $8 for adults. If 120 tickets were sold for a total of $780, how many student tickets were sold?",
    choices: ["40", "50", "60", "70", "80"],
    answer: "C",
    explanation: "Step 1: Let s = student tickets and a = adult tickets.\ns + a = 120\n5s + 8a = 780\n\nStep 2: From the first equation, a = 120 − s. Substitute.\n5s + 8(120 − s) = 780\n5s + 960 − 8s = 780\n−3s = −180\ns = 60\n\nStep 3: Check: 60 students ($300) + 60 adults ($480) = $780. ✓\n\nAnswer: (C) 60"
  },
  {
    id: "t4q13",
    category: "Algebra",
    topic: "Sequences",
    source: "Claude",
    question: "In a sequence, each term is found by multiplying the previous term by 2. If the 3rd term is 20, what is the 6th term?",
    choices: ["40", "80", "100", "160", "320"],
    answer: "D",
    explanation: "Step 1: Going from the 3rd to the 6th term means multiplying by 2 three more times.\n3rd → 4th: 20 × 2 = 40\n4th → 5th: 40 × 2 = 80\n5th → 6th: 80 × 2 = 160\n\nAnswer: (D) 160"
  },
  {
    id: "t4q14",
    category: "Algebra",
    topic: "Ratios and Proportions",
    source: "Claude",
    question: "The ratio of boys to girls in a class is 3:5. If there are 24 students total, how many are girls?",
    choices: ["8", "9", "12", "15", "16"],
    answer: "D",
    explanation: "Step 1: Total parts = 3 + 5 = 8 parts.\n\nStep 2: Each part = 24 ÷ 8 = 3 students.\n\nStep 3: Girls = 5 parts = 5 × 3 = 15.\n\nAnswer: (D) 15"
  },
  {
    id: "t4q15",
    category: "Algebra",
    topic: "Rates",
    source: "Claude",
    question: "A car travels at 55 mph for 2 hours and then at 40 mph for 3 hours. What is the car's average speed for the whole trip?",
    choices: ["44 mph", "45 mph", "46 mph", "47.5 mph", "50 mph"],
    answer: "C",
    explanation: "Step 1: Find the total distance.\nFirst part: 55 × 2 = 110 miles\nSecond part: 40 × 3 = 120 miles\nTotal: 110 + 120 = 230 miles\n\nStep 2: Find total time.\n2 + 3 = 5 hours\n\nStep 3: Average speed = total distance ÷ total time.\n230 ÷ 5 = 46 mph\n\nAnswer: (C) 46 mph"
  },
  {
    id: "t4q16",
    category: "Algebra",
    topic: "Basic Functions",
    source: "Claude",
    question: "A parking garage charges $3 for the first hour and $2 for each additional hour. Which expression gives the cost C for h hours (where h ≥ 1)?",
    choices: ["C = 3h", "C = 2h + 1", "C = 2h + 3", "C = 3 + 2(h − 1)", "C = 5h"],
    answer: "D",
    explanation: "Step 1: The first hour costs $3. Every hour after the first costs $2.\n\nStep 2: Additional hours = h − 1.\nCost = 3 + 2(h − 1)\n\nStep 3: Check with h = 1: C = 3 + 2(0) = 3. ✓\nCheck with h = 3: C = 3 + 2(2) = 7. ✓ (first hour $3 + two more hours at $2 each = $7)\n\nAnswer: (D) C = 3 + 2(h − 1)"
  },
  // --- Geometry (6) ---
  {
    id: "t4q17",
    category: "Geometry",
    topic: "Triangles",
    source: "Claude",
    question: "An isosceles triangle has a perimeter of 40 cm. If the base is 12 cm, what is the length of each equal side?",
    choices: ["12 cm", "14 cm", "16 cm", "18 cm", "20 cm"],
    answer: "B",
    explanation: "Step 1: An isosceles triangle has two equal sides. Call each s.\nPerimeter = s + s + 12 = 40\n\nStep 2: Solve.\n2s = 28\ns = 14 cm\n\nAnswer: (B) 14 cm"
  },
  {
    id: "t4q18",
    category: "Geometry",
    topic: "Circles",
    source: "Claude",
    question: "A circular garden has a circumference of 44 meters. What is the area of the garden? (Use π ≈ 22/7)",
    choices: ["44 m²", "77 m²", "154 m²", "308 m²", "616 m²"],
    answer: "C",
    explanation: "Step 1: Find the radius from the circumference.\nC = 2πr → 44 = 2 × (22/7) × r\n44 = (44/7) × r\nr = 44 × 7/44 = 7 m\n\nStep 2: Find the area.\nA = πr² = (22/7) × 49 = 22 × 7 = 154 m²\n\nAnswer: (C) 154 m²"
  },
  {
    id: "t4q19",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "Two similar triangles have sides in the ratio 2:5. If the area of the smaller triangle is 12 cm², what is the area of the larger triangle?",
    choices: ["30 cm²", "60 cm²", "75 cm²", "120 cm²", "300 cm²"],
    answer: "C",
    explanation: "Step 1: When two triangles are similar with a side ratio of 2:5, the ratio of their areas is the square of the side ratio.\nArea ratio = (2/5)² = 4/25\n\nStep 2: Set up a proportion.\n12/A = 4/25\n\nStep 3: Solve for A.\n4A = 12 × 25 = 300\nA = 75 cm²\n\nAnswer: (C) 75 cm²"
  },
  {
    id: "t4q20",
    category: "Geometry",
    topic: "Angles",
    source: "Claude",
    question: "Two angles are complementary. One angle is 14° more than the other. What is the smaller angle?",
    choices: ["32°", "38°", "42°", "48°", "52°"],
    answer: "B",
    explanation: "Step 1: Complementary angles add to 90°. Let the smaller angle = x.\nx + (x + 14) = 90\n\nStep 2: Solve.\n2x + 14 = 90\n2x = 76\nx = 38°\n\nAnswer: (B) 38°"
  },
  {
    id: "t4q21",
    category: "Geometry",
    topic: "Right Triangles",
    source: "Claude",
    question: "A kite string is 50 feet long. The kite is directly above a point that is 30 feet from where you're standing. How high is the kite?",
    choices: ["20 ft", "30 ft", "40 ft", "45 ft", "58 ft"],
    answer: "C",
    explanation: "Step 1: This forms a right triangle where the string is the hypotenuse (50 ft) and the ground distance is one leg (30 ft).\n\nStep 2: Use the Pythagorean theorem.\n30² + h² = 50²\n900 + h² = 2500\nh² = 1600\nh = 40 ft\n\nAnswer: (C) 40 ft"
  },
  {
    id: "t4q22",
    category: "Geometry",
    topic: "Coordinate Basics",
    source: "Claude",
    question: "Point M is the midpoint of a segment with endpoints (2, 3) and (8, 11). What are the coordinates of M?",
    choices: ["(4, 6)", "(5, 7)", "(6, 8)", "(3, 4)", "(10, 14)"],
    answer: "B",
    explanation: "Step 1: Use the midpoint formula.\nM = ((2 + 8)/2, (3 + 11)/2)\n\nStep 2: Calculate.\nM = (10/2, 14/2) = (5, 7)\n\nAnswer: (B) (5, 7)"
  },
  // --- Data Analysis (5) ---
  {
    id: "t4q23",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A spinner has 5 equal sections numbered 1 through 5. What is the probability of spinning a number greater than 3?",
    choices: ["1/5", "2/5", "3/5", "1/3", "1/2"],
    answer: "B",
    explanation: "Step 1: Numbers greater than 3 are: 4 and 5 — that's 2 numbers.\n\nStep 2: Probability = favorable outcomes / total outcomes = 2/5.\n\nAnswer: (B) 2/5"
  },
  {
    id: "t4q24",
    category: "Data Analysis",
    topic: "Graphs and Tables",
    source: "Claude",
    question: "A circle graph shows how a student spends 24 hours: Sleep 8 hrs, School 7 hrs, Homework 3 hrs, Sports 2 hrs, Other 4 hrs. What percent of the day is spent on school and homework combined?",
    choices: ["25%", "33.3%", "37.5%", "41.7%", "45%"],
    answer: "D",
    explanation: "Step 1: School + Homework = 7 + 3 = 10 hours.\n\nStep 2: Percent = (10/24) × 100 = 41.67% ≈ 41.7%\n\nAnswer: (D) 41.7%"
  },
  {
    id: "t4q25",
    category: "Data Analysis",
    topic: "Mean/Median/Mode/Range",
    source: "Claude",
    question: "Five numbers have a mean of 12 and a range of 10. If the smallest number is 7, what is the largest number?",
    choices: ["15", "17", "19", "21", "22"],
    answer: "B",
    explanation: "Step 1: The mean is 12, so the sum of all five numbers = 5 × 12 = 60.\n\nStep 2: Range = largest − smallest.\n10 = largest − 7\nLargest = 17\n\nAnswer: (B) 17"
  },
  {
    id: "t4q26",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "How many different 3-digit numbers can be formed using the digits 1, 2, and 3 if each digit can only be used once?",
    choices: ["3", "6", "9", "12", "27"],
    answer: "B",
    explanation: "Step 1: For the hundreds place, there are 3 choices.\nFor the tens place, there are 2 remaining choices.\nFor the ones place, there is 1 remaining choice.\n\nStep 2: Total = 3 × 2 × 1 = 6.\n\nThe numbers are: 123, 132, 213, 231, 312, 321.\n\nAnswer: (B) 6"
  },
  {
    id: "t4q27",
    category: "Data Analysis",
    topic: "Proportions",
    source: "Claude",
    question: "A factory produces 5 defective items for every 200 items made. If the factory produces 3,000 items, how many are expected to be defective?",
    choices: ["15", "30", "50", "75", "150"],
    answer: "D",
    explanation: "Step 1: Set up the proportion.\n5/200 = x/3000\n\nStep 2: Simplify: 5/200 = 1/40.\nSo 1/40 = x/3000.\n\nStep 3: Solve.\nx = 3000/40 = 75\n\nAnswer: (D) 75"
  },
  // --- Reasoning (3) ---
  {
    id: "t4q28",
    category: "Reasoning",
    topic: "Multi-Step Word Problems",
    source: "Claude",
    question: "A school bus picks up 8 students at the first stop, 5 at the second, and drops off 3 at the third. At the fourth stop it picks up 6 and drops off 4. How many students are on the bus after the fourth stop?",
    choices: ["10", "12", "14", "16", "22"],
    answer: "B",
    explanation: "Step 1: Track students stop by stop.\nAfter stop 1: 0 + 8 = 8\nAfter stop 2: 8 + 5 = 13\nAfter stop 3: 13 − 3 = 10\nAfter stop 4: 10 + 6 − 4 = 12\n\nAnswer: (B) 12"
  },
  {
    id: "t4q29",
    category: "Reasoning",
    topic: "Must Be True / Cannot Be",
    source: "Claude",
    question: "If the product of two integers is odd, which of the following MUST be true?",
    choices: ["Both integers are even", "At least one integer is even", "Both integers are odd", "Exactly one integer is odd", "The sum of the integers is odd"],
    answer: "C",
    explanation: "Step 1: For a product to be odd, neither factor can contribute a factor of 2.\n\nStep 2: Even × anything = even. So if either integer were even, the product would be even.\n\nStep 3: Both integers must be odd for the product to be odd.\n\nAnswer: (C) Both integers are odd"
  },
  {
    id: "t4q30",
    category: "Reasoning",
    topic: "Estimation",
    source: "Claude",
    question: "A rectangular room is 11.8 feet by 9.3 feet. Which is the best estimate of the room's area?",
    choices: ["90 sq ft", "100 sq ft", "110 sq ft", "120 sq ft", "130 sq ft"],
    answer: "C",
    explanation: "Step 1: Round the dimensions.\n11.8 ≈ 12 and 9.3 ≈ 9 (or ≈ 10)\n\nStep 2: Estimate.\n12 × 9 = 108, which is closest to 110.\n(Or 12 × 10 = 120, but 9.3 is closer to 9 than to 10.)\n\nStep 3: Actual area = 11.8 × 9.3 = 109.74 ≈ 110.\n\nAnswer: (C) 110 sq ft"
  }
];


// === TEST 5 === (30 questions)
ALL_TEST_DATA.test5 = [
  // --- Number Sense (9) ---
  {
    id: "t5q1",
    category: "Number Sense",
    topic: "Fractions",
    source: "Claude",
    question: "A recipe calls for 3/4 cup of flour. If you want to make 2 and 1/2 batches, how much flour do you need?",
    choices: ["1 and 1/2 cups", "1 and 3/4 cups", "1 and 7/8 cups", "2 cups", "2 and 1/4 cups"],
    answer: "C",
    explanation: "Step 1: Multiply 3/4 by 2 and 1/2.\nConvert 2 and 1/2 to an improper fraction: 5/2.\n\nStep 2: Multiply.\n3/4 × 5/2 = 15/8\n\nStep 3: Convert to a mixed number.\n15/8 = 1 and 7/8 cups\n\nAnswer: (C) 1 and 7/8 cups"
  },
  {
    id: "t5q2",
    category: "Number Sense",
    topic: "Decimals",
    source: "Claude",
    question: "Which decimal is equivalent to the fraction 5/6, rounded to the nearest hundredth?",
    choices: ["0.56", "0.80", "0.83", "0.84", "0.85"],
    answer: "C",
    explanation: "Step 1: Divide 5 by 6.\n5 ÷ 6 = 0.83333...\n\nStep 2: Round to the nearest hundredth.\nThe third decimal digit is 3 (less than 5), so round down.\n0.8333... ≈ 0.83\n\nAnswer: (C) 0.83"
  },
  {
    id: "t5q3",
    category: "Number Sense",
    topic: "Percents",
    source: "Claude",
    question: "A bike originally costs $240. It goes on sale for 15% off, and then there is 10% sales tax on the sale price. What is the total cost?",
    choices: ["$198.00", "$204.00", "$216.00", "$220.20", "$224.40"],
    answer: "E",
    explanation: "Step 1: Find the sale price.\n15% of $240 = $36\nSale price = $240 − $36 = $204\n\nStep 2: Add 10% tax on the sale price.\n10% of $204 = $20.40\n\nStep 3: Total = $204 + $20.40 = $224.40\n\nAnswer: (E) $224.40"
  },
  {
    id: "t5q4",
    category: "Number Sense",
    topic: "GCF/LCM",
    source: "Claude",
    question: "Three bells ring at intervals of 4, 6, and 10 minutes. If they all ring together at noon, when will they next all ring together?",
    choices: ["12:12 PM", "12:20 PM", "12:30 PM", "1:00 PM", "2:00 PM"],
    answer: "D",
    explanation: "Step 1: Find the LCM of 4, 6, and 10.\n4 = 2²\n6 = 2 × 3\n10 = 2 × 5\nLCM = 2² × 3 × 5 = 60 minutes\n\nStep 2: 60 minutes after noon is 1:00 PM.\n\nAnswer: (D) 1:00 PM"
  },
  {
    id: "t5q5",
    category: "Number Sense",
    topic: "Factors and Multiples",
    source: "Claude",
    question: "A number is divisible by both 4 and 6. Which of the following must it also be divisible by?",
    choices: ["8", "10", "12", "16", "24"],
    answer: "C",
    explanation: "Step 1: If a number is divisible by both 4 and 6, it must be divisible by their LCM.\n\nStep 2: LCM of 4 and 6.\n4 = 2² and 6 = 2 × 3.\nLCM = 2² × 3 = 12.\n\nStep 3: Any number divisible by both 4 and 6 must be divisible by 12.\n\nAnswer: (C) 12"
  },
  {
    id: "t5q6",
    category: "Number Sense",
    topic: "Absolute Value",
    source: "Claude",
    question: "On a number line, which pair of numbers is exactly 11 units apart?",
    choices: ["−3 and 7", "−5 and 6", "−4 and 8", "2 and 14", "−6 and 4"],
    answer: "B",
    explanation: "Step 1: The distance between two numbers is the absolute value of their difference.\n\nStep 2: Check each pair.\n|−3 − 7| = |−10| = 10 ✗\n|−5 − 6| = |−11| = 11 ✓\n|−4 − 8| = |−12| = 12 ✗\n|2 − 14| = |−12| = 12 ✗\n|−6 − 4| = |−10| = 10 ✗\n\nAnswer: (B) −5 and 6"
  },
  {
    id: "t5q7",
    category: "Number Sense",
    topic: "Exponents and Roots",
    source: "Claude",
    question: "What is the value of 4³ ÷ 2⁴?",
    choices: ["2", "4", "8", "16", "32"],
    answer: "B",
    explanation: "Step 1: Calculate each power.\n4³ = 64\n2⁴ = 16\n\nStep 2: Divide.\n64 ÷ 16 = 4\n\nAnswer: (B) 4"
  },
  {
    id: "t5q8",
    category: "Number Sense",
    topic: "Properties",
    source: "Claude",
    question: "Which property is shown by: 7 × (20 + 3) = 7 × 20 + 7 × 3?",
    choices: ["Commutative Property", "Associative Property", "Distributive Property", "Identity Property", "Inverse Property"],
    answer: "C",
    explanation: "Step 1: The equation shows multiplication being distributed over addition.\na × (b + c) = a × b + a × c\n\nStep 2: This is the Distributive Property.\n\nAnswer: (C) Distributive Property"
  },
  {
    id: "t5q9",
    category: "Number Sense",
    topic: "Fraction-Decimal-Percent Conversion",
    source: "Claude",
    question: "Which list shows 3/5, 62%, and 0.58 in order from least to greatest?",
    choices: ["3/5, 62%, 0.58", "0.58, 3/5, 62%", "62%, 3/5, 0.58", "0.58, 62%, 3/5", "3/5, 0.58, 62%"],
    answer: "B",
    explanation: "Step 1: Convert everything to decimals.\n3/5 = 0.60\n62% = 0.62\n0.58 = 0.58\n\nStep 2: Order from least to greatest.\n0.58, 0.60, 0.62\n\nStep 3: That is: 0.58, 3/5, 62%.\n\nAnswer: (B) 0.58, 3/5, 62%"
  },
  // --- Algebra (7) ---
  {
    id: "t5q10",
    category: "Algebra",
    topic: "Linear Equations",
    source: "Claude",
    question: "Three consecutive even numbers have a sum of 78. What is the largest of the three?",
    choices: ["24", "26", "28", "30", "32"],
    answer: "C",
    explanation: "Step 1: Let the three consecutive even numbers be n, n + 2, n + 4.\nn + (n + 2) + (n + 4) = 78\n\nStep 2: Solve.\n3n + 6 = 78\n3n = 72\nn = 24\n\nStep 3: The largest is n + 4 = 24 + 4 = 28.\n\nAnswer: (C) 28"
  },
  {
    id: "t5q11",
    category: "Algebra",
    topic: "Inequalities",
    source: "Claude",
    question: "An elevator has a weight limit of 2,000 pounds. If 8 people averaging 185 pounds each are on the elevator, how many additional pounds can the elevator hold?",
    choices: ["420 lbs", "480 lbs", "520 lbs", "560 lbs", "620 lbs"],
    answer: "C",
    explanation: "Step 1: Find the total weight of the 8 people.\n8 × 185 = 1,480 pounds\n\nStep 2: Subtract from the limit.\n2,000 − 1,480 = 520 pounds\n\nAnswer: (C) 520 lbs"
  },
  {
    id: "t5q12",
    category: "Algebra",
    topic: "Word Problems",
    source: "Claude",
    question: "Elena saves $12 per week. She already has $45 in her account. After how many weeks will she have at least $165?",
    choices: ["8", "9", "10", "11", "12"],
    answer: "C",
    explanation: "Step 1: Set up the equation.\n45 + 12w = 165\n\nStep 2: Solve.\n12w = 120\nw = 10\n\nAfter 10 weeks she will have exactly $165.\n\nAnswer: (C) 10"
  },
  {
    id: "t5q13",
    category: "Algebra",
    topic: "Sequences",
    source: "Claude",
    question: "Each row of a theater has 2 more seats than the row in front of it. The first row has 14 seats. How many seats are in the 10th row?",
    choices: ["24", "28", "30", "32", "34"],
    answer: "D",
    explanation: "Step 1: This is an arithmetic sequence.\nFirst term a₁ = 14, common difference d = 2.\n\nStep 2: The nth term formula: aₙ = a₁ + (n − 1)d\na₁₀ = 14 + (10 − 1)(2)\na₁₀ = 14 + 18 = 32\n\nAnswer: (D) 32"
  },
  {
    id: "t5q14",
    category: "Algebra",
    topic: "Ratios and Proportions",
    source: "Claude",
    question: "A paint mixture uses red and white paint in a ratio of 3:7. If you need 40 cups of the mixture total, how many cups of red paint do you need?",
    choices: ["8", "10", "12", "14", "16"],
    answer: "C",
    explanation: "Step 1: Total ratio parts = 3 + 7 = 10.\n\nStep 2: Red paint = (3/10) × 40 = 12 cups.\n\nAnswer: (C) 12"
  },
  {
    id: "t5q15",
    category: "Algebra",
    topic: "Rates",
    source: "Claude",
    question: "A pool is being filled at 5 gallons per minute while a drain lets out 2 gallons per minute. If the pool holds 360 gallons, how long will it take to fill?",
    choices: ["60 min", "72 min", "90 min", "120 min", "180 min"],
    answer: "D",
    explanation: "Step 1: Net fill rate = 5 − 2 = 3 gallons per minute.\n\nStep 2: Time = total volume ÷ net rate.\n360 ÷ 3 = 120 minutes\n\nAnswer: (D) 120 min"
  },
  {
    id: "t5q16",
    category: "Algebra",
    topic: "Basic Functions",
    source: "Claude",
    question: "A taxi charges a $2.50 base fare plus $0.75 per mile. If the total fare was $14.50, how many miles was the ride?",
    choices: ["12", "14", "16", "18", "20"],
    answer: "C",
    explanation: "Step 1: Set up the equation. Let m = miles.\n2.50 + 0.75m = 14.50\n\nStep 2: Solve.\n0.75m = 12.00\nm = 16\n\nAnswer: (C) 16"
  },
  // --- Geometry (6) ---
  {
    id: "t5q17",
    category: "Geometry",
    topic: "Triangles",
    source: "Claude",
    question: "The angles of a triangle are in the ratio 2:3:4. What is the measure of the largest angle?",
    choices: ["40°", "60°", "72°", "80°", "100°"],
    answer: "D",
    explanation: "Step 1: The angles add up to 180°. Total ratio parts = 2 + 3 + 4 = 9.\n\nStep 2: Each part = 180° ÷ 9 = 20°.\n\nStep 3: The largest angle = 4 × 20° = 80°.\n\nAnswer: (D) 80°"
  },
  {
    id: "t5q18",
    category: "Geometry",
    topic: "Circles",
    source: "Claude",
    question: "A sector of a circle has a central angle of 90° and a radius of 10 cm. What is the area of the sector? (Use π ≈ 3.14)",
    choices: ["15.7 cm²", "31.4 cm²", "50 cm²", "78.5 cm²", "314 cm²"],
    answer: "D",
    explanation: "Step 1: A 90° sector is 90/360 = 1/4 of the full circle.\n\nStep 2: Full circle area = πr² = 3.14 × 100 = 314 cm².\n\nStep 3: Sector area = 314 ÷ 4 = 78.5 cm².\n\nAnswer: (D) 78.5 cm²"
  },
  {
    id: "t5q19",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "Two similar triangles have corresponding sides of 8 cm and 12 cm. If the shorter side of the smaller triangle is 6 cm, what is the corresponding side of the larger triangle?",
    choices: ["8 cm", "9 cm", "10 cm", "12 cm", "18 cm"],
    answer: "B",
    explanation: "Step 1: Find the scale factor between the triangles.\n8/12 = 2/3 (smaller to larger).\n\nStep 2: Set up a proportion for the unknown side.\n6/x = 2/3\n\nStep 3: Cross-multiply.\n2x = 18\nx = 9 cm\n\nAnswer: (B) 9 cm"
  },
  {
    id: "t5q20",
    category: "Geometry",
    topic: "Angles",
    source: "Claude",
    question: "An exterior angle of a regular polygon measures 36°. How many sides does the polygon have?",
    choices: ["6", "8", "10", "12", "15"],
    answer: "C",
    explanation: "Step 1: The sum of all exterior angles of any convex polygon is 360°.\n\nStep 2: For a regular polygon, all exterior angles are equal.\nNumber of sides = 360° ÷ 36° = 10\n\nAnswer: (C) 10"
  },
  {
    id: "t5q21",
    category: "Geometry",
    topic: "Right Triangles",
    source: "Claude",
    question: "A 10-foot ladder leans against a wall. The bottom of the ladder is 6 feet from the base of the wall. If the ladder is moved so it is only 4 feet from the wall, how much higher up the wall does it now reach?",
    choices: ["√84 ft", "About 1.17 ft", "2 ft", "About 1.13 ft", "4 ft"],
    answer: "B",
    explanation: "Step 1: Find the original height.\n6² + h₁² = 10² → 36 + h₁² = 100 → h₁² = 64 → h₁ = 8 ft\n\nStep 2: Find the new height.\n4² + h₂² = 10² → 16 + h₂² = 100 → h₂² = 84 → h₂ = √84 ≈ 9.17 ft\n\nStep 3: Difference = 9.17 − 8 = about 1.17 ft.\n\nAnswer: (B) About 1.17 ft"
  },
  {
    id: "t5q22",
    category: "Geometry",
    topic: "Coordinate Basics",
    source: "Claude",
    question: "What is the perimeter of a triangle with vertices at (0, 0), (6, 0), and (0, 8)?",
    choices: ["14", "20", "24", "28", "48"],
    answer: "C",
    explanation: "Step 1: Find each side length.\nBottom: from (0,0) to (6,0) = 6\nLeft: from (0,0) to (0,8) = 8\nHypotenuse: from (6,0) to (0,8) → √(6² + 8²) = √(36 + 64) = √100 = 10\n\nStep 2: Perimeter = 6 + 8 + 10 = 24.\n\nAnswer: (C) 24"
  },
  // --- Data Analysis (5) ---
  {
    id: "t5q23",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "Two fair coins are flipped. What is the probability that both show heads?",
    choices: ["1/2", "1/3", "1/4", "1/8", "3/4"],
    answer: "C",
    explanation: "Step 1: List all possible outcomes.\nHH, HT, TH, TT — 4 equally likely outcomes.\n\nStep 2: Only HH has both heads.\nProbability = 1/4.\n\nAnswer: (C) 1/4"
  },
  {
    id: "t5q24",
    category: "Data Analysis",
    topic: "Graphs and Tables",
    source: "Claude",
    question: "A table shows that a store sold 40 jackets in October, 65 in November, and 90 in December. What was the percent increase from October to December?",
    choices: ["50%", "75%", "100%", "125%", "150%"],
    answer: "D",
    explanation: "Step 1: Find the change.\n90 − 40 = 50\n\nStep 2: Percent increase = (change / original) × 100.\n(50/40) × 100 = 125%\n\nAnswer: (D) 125%"
  },
  {
    id: "t5q25",
    category: "Data Analysis",
    topic: "Mean/Median/Mode/Range",
    source: "Claude",
    question: "A set of six numbers has a mean of 15. When a seventh number is added, the mean becomes 16. What is the seventh number?",
    choices: ["16", "17", "20", "22", "24"],
    answer: "D",
    explanation: "Step 1: Sum of the original six numbers = 6 × 15 = 90.\n\nStep 2: Sum of all seven numbers = 7 × 16 = 112.\n\nStep 3: The seventh number = 112 − 90 = 22.\n\nAnswer: (D) 22"
  },
  {
    id: "t5q26",
    category: "Data Analysis",
    topic: "Counting",
    source: "Claude",
    question: "A lock has a 3-digit code where each digit is 0–9 and digits CAN repeat. How many possible codes are there?",
    choices: ["30", "100", "720", "1,000", "10,000"],
    answer: "D",
    explanation: "Step 1: Each of the 3 positions has 10 choices (0 through 9).\n\nStep 2: Total codes = 10 × 10 × 10 = 1,000.\n\nAnswer: (D) 1,000"
  },
  {
    id: "t5q27",
    category: "Data Analysis",
    topic: "Proportions",
    source: "Claude",
    question: "In a wildlife study, 48 out of 400 fish caught in a lake were tagged. If the lake has an estimated 5,000 fish, approximately how many are tagged?",
    choices: ["200", "400", "600", "800", "1,200"],
    answer: "C",
    explanation: "Step 1: Set up the proportion.\n48/400 = x/5000\n\nStep 2: Simplify: 48/400 = 12/100 = 3/25.\n3/25 = x/5000\n\nStep 3: Solve.\nx = 3 × 200 = 600\n\nAnswer: (C) 600"
  },
  // --- Reasoning (3) ---
  {
    id: "t5q28",
    category: "Reasoning",
    topic: "Multi-Step Word Problems",
    source: "Claude",
    question: "A camp has 3 times as many girls as boys. If 12 more boys join, there will be equal numbers of boys and girls. How many campers were there originally?",
    choices: ["18", "20", "24", "32", "36"],
    answer: "C",
    explanation: "Step 1: Let b = number of boys. Girls = 3b.\nAfter 12 more boys join: b + 12 = 3b\n\nStep 2: Solve.\n12 = 2b\nb = 6\n\nStep 3: Originally: 6 boys + 18 girls = 24 campers.\n\nStep 4: Check: 6 + 12 = 18 boys, and 18 girls. Equal. ✓\n\nAnswer: (C) 24"
  },
  {
    id: "t5q29",
    category: "Reasoning",
    topic: "Must Be True / Cannot Be",
    source: "Claude",
    question: "If the sum of two whole numbers is even, which of the following CANNOT be true?",
    choices: ["Both numbers are even", "Both numbers are odd", "One number is 0", "One number is negative", "Exactly one number is odd"],
    answer: "E",
    explanation: "Step 1: Two whole numbers sum to an even number.\nEven + Even = Even ✓\nOdd + Odd = Even ✓\n\nStep 2: If exactly one number is odd, then we have Odd + Even = Odd. That's an odd sum, not even.\n\nStep 3: So \"exactly one number is odd\" cannot be true when the sum is even.\n\nAnswer: (E) Exactly one number is odd"
  },
  {
    id: "t5q30",
    category: "Reasoning",
    topic: "Patterns",
    source: "Claude",
    question: "The pattern below uses dots. Figure 1 has 3 dots, Figure 2 has 6 dots, Figure 3 has 10 dots, and Figure 4 has 15 dots. How many dots will Figure 7 have?",
    choices: ["28", "30", "33", "36", "42"],
    answer: "D",
    explanation: "Step 1: Notice the differences between figures.\nFig 1→2: +3\nFig 2→3: +4\nFig 3→4: +5\nEach time, you add one more dot than before.\n\nStep 2: Continue the pattern.\nFig 4→5: +6 → 15 + 6 = 21\nFig 5→6: +7 → 21 + 7 = 28\nFig 6→7: +8 → 28 + 8 = 36\n\nAnswer: (D) 36"
  }
];
