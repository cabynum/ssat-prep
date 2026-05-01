var ALL_TEST_DATA = {

test1: [
  // --- Number Sense (9) ---
  {
    id: "t1q1",
    category: "Number Sense",
    topic: "Comparing Fractions and Decimals",
    source: "Claude",
    question: "Which of the following is greatest?",
    choices: ["3/8", "0.36", "37%", "2/5", "0.38"],
    answer: "D",
    explanation: "Step 1: Convert everything to decimals.\n3/8 = 0.375\n0.36 = 0.360\n37% = 0.370\n2/5 = 0.400\n0.38 = 0.380\n\nStep 2: Compare the values.\n0.375, 0.360, 0.370, 0.400, 0.380\n\nThe greatest is 0.400, which is 2/5.\n\nAnswer: (D) 2/5"
  },
  {
    id: "t1q2",
    category: "Number Sense",
    topic: "Fraction Operations",
    source: "Claude",
    question: "A recipe calls for 2/3 cup of sugar. If Maria wants to make 1½ times the recipe, how much sugar does she need?",
    choices: ["3/4 cup", "5/6 cup", "1 cup", "1 1/6 cups", "1 1/3 cups"],
    answer: "C",
    explanation: "Step 1: Multiply the amount by 1½.\n1½ × 2/3\n\nStep 2: Convert 1½ to an improper fraction.\n1½ = 3/2\n\nStep 3: Multiply.\n3/2 × 2/3 = 6/6 = 1\n\nAnswer: (C) 1 cup"
  },
  {
    id: "t1q3",
    category: "Number Sense",
    topic: "Percent Change",
    source: "Claude",
    question: "A jacket originally costs $80. It is marked down 25%, and then the sale price is marked down an additional 10%. What is the final price?",
    choices: ["$48.00", "$52.00", "$54.00", "$56.00", "$58.00"],
    answer: "C",
    explanation: "Step 1: Find the price after the first markdown.\n25% of $80 = $20\n$80 − $20 = $60\n\nStep 2: Find the price after the second markdown.\n10% of $60 = $6\n$60 − $6 = $54\n\nNote: You cannot simply add 25% + 10% = 35% off. Each discount applies to the NEW price.\n\nAnswer: (C) $54.00"
  },
  {
    id: "t1q4",
    category: "Number Sense",
    topic: "GCF and LCM",
    source: "Claude",
    question: "Two buses leave a station at the same time. Bus A returns every 12 minutes, and Bus B returns every 18 minutes. In how many minutes will both buses return to the station at the same time?",
    choices: ["24", "30", "36", "54", "72"],
    answer: "C",
    explanation: "Step 1: We need the Least Common Multiple (LCM) of 12 and 18.\n\nStep 2: Find the prime factorizations.\n12 = 2 × 2 × 3 = 2² × 3\n18 = 2 × 3 × 3 = 2 × 3²\n\nStep 3: Take the highest power of each prime.\nLCM = 2² × 3² = 4 × 9 = 36\n\nAnswer: (C) 36"
  },
  {
    id: "t1q5",
    category: "Number Sense",
    topic: "Properties of Numbers",
    source: "Claude",
    question: "If n is an odd number, which of the following MUST be even?",
    choices: ["n + 2", "n × 3", "n − 4", "n × n", "n + 1"],
    answer: "E",
    explanation: "Step 1: Think about what happens with odd numbers.\nAn odd number plus 1 always gives an even number.\n\nStep 2: Check the others.\n(A) n + 2: odd + even = odd ✗\n(B) n × 3: odd × odd = odd ✗\n(C) n − 4: odd − even = odd ✗\n(D) n × n: odd × odd = odd ✗\n(E) n + 1: odd + odd = even ✓\n\nAnswer: (E) n + 1"
  },
  {
    id: "t1q6",
    category: "Number Sense",
    topic: "Order of Operations",
    source: "Claude",
    question: "What is the value of 48 ÷ (4 + 2) × 3 − 5?",
    choices: ["4", "7", "14", "19", "24"],
    answer: "D",
    explanation: "Step 1: Parentheses first.\n48 ÷ (6) × 3 − 5\n\nStep 2: Multiplication and division from left to right.\n48 ÷ 6 = 8\n8 × 3 = 24\n\nStep 3: Subtraction.\n24 − 5 = 19\n\nAnswer: (D) 19"
  },
  {
    id: "t1q7",
    category: "Number Sense",
    topic: "Fraction Ordering",
    source: "Claude",
    question: "Which list shows the fractions in order from least to greatest?",
    choices: ["1/3, 3/8, 2/5, 1/2", "1/3, 2/5, 3/8, 1/2", "3/8, 1/3, 2/5, 1/2", "1/3, 3/8, 1/2, 2/5", "2/5, 1/3, 3/8, 1/2"],
    answer: "A",
    explanation: "Step 1: Convert each fraction to a decimal.\n1/3 ≈ 0.333\n3/8 = 0.375\n2/5 = 0.400\n1/2 = 0.500\n\nStep 2: Order from least to greatest.\n0.333, 0.375, 0.400, 0.500\nwhich is 1/3, 3/8, 2/5, 1/2\n\nAnswer: (A) 1/3, 3/8, 2/5, 1/2"
  },
  {
    id: "t1q8",
    category: "Number Sense",
    topic: "Exponents and Roots",
    source: "Claude",
    question: "If 5<sup>2</sup> = 25, what is the value of 5<sup>2</sup> + √25?",
    choices: ["26", "28", "30", "35", "50"],
    answer: "C",
    explanation: "Step 1: Calculate 5².\n5² = 25\n\nStep 2: Calculate √25.\n√25 = 5\n\nStep 3: Add them.\n25 + 5 = 30\n\nAnswer: (C) 30"
  },
  {
    id: "t1q9",
    category: "Number Sense",
    topic: "Distributive Property",
    source: "Claude",
    question: "Which expression is equivalent to 7 × 98?",
    choices: ["7 × 100 − 7 × 2", "7 × 90 + 7 × 7", "7 × 100 + 7 × 2", "7 × 90 − 7 × 8", "7 × 100 − 2"],
    answer: "A",
    explanation: "Step 1: Use the distributive property to break apart 98.\n98 = 100 − 2\n\nStep 2: Apply the distributive property.\n7 × 98 = 7 × (100 − 2) = 7 × 100 − 7 × 2\n\nStep 3: Verify.\n7 × 100 − 7 × 2 = 700 − 14 = 686\n7 × 98 = 686 ✓\n\nAnswer: (A) 7 × 100 − 7 × 2"
  },

  // --- Algebra (7) ---
  {
    id: "t1q10",
    category: "Algebra",
    topic: "Setting Up Equations",
    source: "Claude",
    question: "A movie theater charges $9 for adults and $5 for children. A group buys 12 tickets and spends a total of $76. How many adult tickets did they buy?",
    choices: ["3", "4", "5", "6", "7"],
    answer: "B",
    explanation: "Step 1: Let a = the number of adult tickets.\nThen (12 − a) = the number of children's tickets.\n\nStep 2: Set up the equation.\n9a + 5(12 − a) = 76\n\nStep 3: Solve.\n9a + 60 − 5a = 76\n4a + 60 = 76\n4a = 16\na = 4\n\nStep 4: Check. 4 adults × $9 = $36. 8 children × $5 = $40. $36 + $40 = $76 ✓\n\nAnswer: (B) 4"
  },
  {
    id: "t1q11",
    category: "Algebra",
    topic: "Ratios and Proportions",
    source: "Claude",
    question: "The ratio of boys to girls in a class is 3 to 5. If there are 40 students total, how many more girls are there than boys?",
    choices: ["5", "8", "10", "15", "25"],
    answer: "C",
    explanation: "Step 1: The ratio is 3:5, so there are 3 + 5 = 8 parts total.\n\nStep 2: Each part represents 40 ÷ 8 = 5 students.\n\nStep 3: Boys = 3 × 5 = 15. Girls = 5 × 5 = 25.\n\nStep 4: Difference = 25 − 15 = 10.\n\nAnswer: (C) 10"
  },
  {
    id: "t1q12",
    category: "Algebra",
    topic: "Rate Problems",
    source: "Claude",
    question: "Sarah can paint a fence in 6 hours. Working together, Sarah and Tom can paint the same fence in 4 hours. How long would it take Tom to paint the fence alone?",
    choices: ["8 hours", "10 hours", "12 hours", "14 hours", "18 hours"],
    answer: "C",
    explanation: "Step 1: Figure out how much each person paints per hour.\nSarah paints 1/6 of the fence per hour.\nTogether they paint 1/4 of the fence per hour.\n\nStep 2: Find Tom's rate.\nTom's rate = 1/4 − 1/6\n\nStep 3: Subtract the fractions.\n1/4 − 1/6 = 3/12 − 2/12 = 1/12\n\nStep 4: Tom paints 1/12 of the fence per hour, so he would take 12 hours alone.\n\nAnswer: (C) 12 hours"
  },
  {
    id: "t1q13",
    category: "Algebra",
    topic: "Linear Inequalities",
    source: "Claude",
    question: "A student needs at least 360 points total on 5 tests to earn an A in the class. After 4 tests, the student has 280 points. What is the minimum score the student needs on the 5th test?",
    choices: ["70", "72", "76", "80", "90"],
    answer: "D",
    explanation: "Step 1: Set up the inequality.\n280 + x ≥ 360\n\nStep 2: Solve for x.\nx ≥ 360 − 280\nx ≥ 80\n\nStep 3: The minimum score needed is 80.\n\nAnswer: (D) 80"
  },
  {
    id: "t1q14",
    category: "Algebra",
    topic: "Arithmetic Sequences",
    source: "Claude",
    question: "The first term of a sequence is 7 and each term after the first is 4 more than the previous term. What is the 20th term?",
    choices: ["80", "83", "84", "87", "91"],
    answer: "B",
    explanation: "Step 1: Write out the pattern.\nTerm 1: 7\nTerm 2: 7 + 4 = 11\nTerm 3: 7 + 2(4) = 15\n\nStep 2: Find the general formula.\nTerm n = 7 + (n − 1) × 4\n\nStep 3: Plug in n = 20.\nTerm 20 = 7 + 19 × 4 = 7 + 76 = 83\n\nAnswer: (B) 83"
  },
  {
    id: "t1q15",
    category: "Algebra",
    topic: "Solving Linear Equations",
    source: "Claude",
    question: "If 3(x − 4) + 2 = 2(x + 1), what is the value of x?",
    choices: ["6", "8", "12", "14", "16"],
    answer: "C",
    explanation: "Step 1: Distribute on both sides.\n3x − 12 + 2 = 2x + 2\n3x − 10 = 2x + 2\n\nStep 2: Get x terms on one side.\n3x − 2x = 2 + 10\nx = 12\n\nStep 3: Check. 3(12 − 4) + 2 = 3(8) + 2 = 26. 2(12 + 1) = 2(13) = 26 ✓\n\nAnswer: (C) 12"
  },
  {
    id: "t1q16",
    category: "Algebra",
    topic: "Function Input/Output",
    source: "Claude",
    question: "A machine takes a number, doubles it, and then subtracts 3. If the machine outputs 11, what number was put in?",
    choices: ["4", "5.5", "7", "8", "14"],
    answer: "C",
    explanation: "Step 1: Write what the machine does as an equation.\nOutput = 2 × (input) − 3\n\nStep 2: Set the output equal to 11 and solve.\n11 = 2n − 3\n14 = 2n\nn = 7\n\nStep 3: Check. 2(7) − 3 = 14 − 3 = 11 ✓\n\nAnswer: (C) 7"
  },

  // --- Geometry (6) ---
  {
    id: "t1q17",
    category: "Geometry",
    topic: "Perimeter Reasoning",
    source: "Claude",
    question: "A rectangle has a perimeter of 36 inches. If the length is 3 times the width, what is the area of the rectangle?",
    choices: ["27 sq in", "36 sq in", "60.75 sq in", "72 sq in", "81 sq in"],
    answer: "C",
    explanation: "Step 1: Let w = the width. Then the length = 3w.\n\nStep 2: Use the perimeter formula.\n2(3w) + 2(w) = 36\n6w + 2w = 36\n8w = 36\nw = 4.5 inches\n\nStep 3: Find the length.\nlength = 3 × 4.5 = 13.5 inches\n\nStep 4: Find the area.\nArea = 13.5 × 4.5 = 60.75 sq in\n\nAnswer: (C) 60.75 sq in"
  },
  {
    id: "t1q18",
    category: "Geometry",
    topic: "Triangle Angle Sum",
    source: "Claude",
    question: "In triangle PQR, angle P is twice angle Q, and angle R is 20° more than angle Q. What is the measure of angle P?",
    choices: ["40°", "60°", "70°", "80°", "100°"],
    answer: "D",
    explanation: "Step 1: Let angle Q = x.\nThen angle P = 2x and angle R = x + 20.\n\nStep 2: The angles in a triangle sum to 180°.\nx + 2x + (x + 20) = 180\n4x + 20 = 180\n4x = 160\nx = 40\n\nStep 3: Angle P = 2x = 2(40) = 80°.\n\nAnswer: (D) 80°"
  },
  {
    id: "t1q19",
    category: "Geometry",
    topic: "Circle Area and Circumference",
    source: "Claude",
    question: "A circular garden has a diameter of 14 feet. Which is closest to the area of the garden? (Use π ≈ 22/7)",
    choices: ["44 sq ft", "88 sq ft", "154 sq ft", "308 sq ft", "616 sq ft"],
    answer: "C",
    explanation: "Step 1: Find the radius.\nRadius = 14 ÷ 2 = 7 feet\n\nStep 2: Use the area formula.\nArea = π × r² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 sq ft\n\nAnswer: (C) 154 sq ft"
  },
  {
    id: "t1q20",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "A 6-foot-tall person casts a shadow that is 4 feet long. At the same time, a tree casts a shadow that is 20 feet long. How tall is the tree?",
    choices: ["13 ft", "24 ft", "30 ft", "36 ft", "40 ft"],
    answer: "C",
    explanation: "Step 1: The person and tree form similar triangles with their shadows.\nSet up the proportion: height/shadow = height/shadow\n\nStep 2: Solve.\n6/4 = h/20\n4h = 6 × 20\n4h = 120\nh = 30\n\nAnswer: (C) 30 ft"
  },
  {
    id: "t1q21",
    category: "Geometry",
    topic: "Complementary and Supplementary Angles",
    source: "Claude",
    question: "Two angles are supplementary. One angle is 36° more than the other. What is the measure of the larger angle?",
    choices: ["72°", "90°", "108°", "114°", "144°"],
    answer: "C",
    explanation: "Step 1: Supplementary angles add up to 180°.\nLet the smaller angle = x. Then the larger angle = x + 36.\n\nStep 2: Solve.\nx + (x + 36) = 180\n2x + 36 = 180\n2x = 144\nx = 72\n\nStep 3: The larger angle = 72 + 36 = 108°.\n\nAnswer: (C) 108°"
  },
  {
    id: "t1q22",
    category: "Geometry",
    topic: "Arc Length",
    source: "Claude",
    question: "A circle has a radius of 10 cm. What is the length of an arc that corresponds to a central angle of 90°? (Use π ≈ 3.14)",
    choices: ["7.85 cm", "15.7 cm", "25.12 cm", "31.4 cm", "78.5 cm"],
    answer: "B",
    explanation: "Step 1: An arc with a 90° central angle is 90/360 = 1/4 of the full circumference.\n\nStep 2: Find the full circumference.\nC = 2πr = 2(3.14)(10) = 62.8 cm\n\nStep 3: Find 1/4 of the circumference.\n62.8 ÷ 4 = 15.7 cm\n\nAnswer: (B) 15.7 cm"
  },

  // --- Data Analysis (5) ---
  {
    id: "t1q23",
    category: "Data Analysis",
    topic: "Mean and Median",
    source: "Claude",
    question: "Five students scored 72, 85, 88, 90, and 95 on a test. If a sixth student scores 91, how does the median change?",
    choices: ["It stays the same", "It decreases by 1", "It increases by 1", "It increases by 1.5", "It increases by 3"],
    answer: "C",
    explanation: "Step 1: Find the median of the original 5 scores.\nOrdered: 72, 85, 88, 90, 95\nMedian = 88 (the middle value)\n\nStep 2: Add 91 and reorder.\n72, 85, 88, 90, 91, 95\nWith 6 values, the median is the average of the 3rd and 4th values.\nMedian = (88 + 90) ÷ 2 = 89\n\nStep 3: The median changed from 88 to 89, an increase of 1.\n\nAnswer: (C) It increases by 1"
  },
  {
    id: "t1q24",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A bag contains 4 red marbles, 6 blue marbles, and 5 green marbles. If one marble is drawn at random, what is the probability it is NOT blue?",
    choices: ["2/5", "3/5", "2/3", "1/3", "6/15"],
    answer: "B",
    explanation: "Step 1: Find the total number of marbles.\n4 + 6 + 5 = 15 marbles\n\nStep 2: Find the number that are NOT blue.\n15 − 6 = 9 marbles\n\nStep 3: Calculate the probability.\nP(not blue) = 9/15 = 3/5\n\nAnswer: (B) 3/5"
  },
  {
    id: "t1q25",
    category: "Data Analysis",
    topic: "Counting Principle",
    source: "Claude",
    question: "A restaurant offers 3 types of soup, 5 types of sandwiches, and 4 types of drinks. If a lunch special includes one of each, how many different lunch specials are possible?",
    choices: ["12", "15", "24", "48", "60"],
    answer: "E",
    explanation: "Step 1: Use the counting principle — multiply the number of choices.\n3 × 5 × 4 = 60\n\nAnswer: (E) 60"
  },
  {
    id: "t1q26",
    category: "Data Analysis",
    topic: "Interpreting Data",
    source: "Claude",
    question: "A student's test scores are 78, 82, 91, 85, and 94. To get an A, the student needs a mean of at least 88. The student has one more test. What is the minimum score needed on the last test to earn an A?",
    choices: ["88", "90", "92", "96", "98"],
    answer: "E",
    explanation: "Step 1: Find the total needed for a mean of 88 over 6 tests.\n88 × 6 = 528\n\nStep 2: Find the sum of the current scores.\n78 + 82 + 91 + 85 + 94 = 430\n\nStep 3: Find the score needed.\n528 − 430 = 98\n\nAnswer: (E) 98"
  },
  {
    id: "t1q27",
    category: "Data Analysis",
    topic: "Proportions in Data",
    source: "Claude",
    question: "In a survey, 45 out of 200 people preferred Brand X. If 1,000 people are surveyed, about how many would you expect to prefer Brand X?",
    choices: ["45", "90", "180", "225", "450"],
    answer: "D",
    explanation: "Step 1: Set up a proportion.\n45/200 = x/1000\n\nStep 2: Solve.\n200x = 45 × 1000\n200x = 45,000\nx = 225\n\nAnswer: (D) 225"
  },

  // --- Reasoning (3) ---
  {
    id: "t1q28",
    category: "Reasoning",
    topic: "Estimation",
    source: "Claude",
    question: "The product of 398 × 52 is closest to which of the following?",
    choices: ["15,000", "16,000", "20,000", "24,000", "40,000"],
    answer: "C",
    explanation: "Step 1: Round the numbers to estimate.\n398 ≈ 400\n52 ≈ 50\n\nStep 2: Multiply the rounded numbers.\n400 × 50 = 20,000\n\nStep 3: The actual product is 398 × 52 = 20,696, which is closest to 20,000.\n\nAnswer: (C) 20,000"
  },
  {
    id: "t1q29",
    category: "Reasoning",
    topic: "Must Be True",
    source: "Claude",
    question: "If the product of two integers is negative, which of the following MUST be true?",
    choices: ["Both integers are negative", "Both integers are positive", "One integer is zero", "The integers have different signs", "The sum of the integers is negative"],
    answer: "D",
    explanation: "Step 1: Think about when a product is negative.\nA product is negative only when one factor is positive and the other is negative.\n\nStep 2: Check each choice.\n(A) Both negative → product would be positive ✗\n(B) Both positive → product would be positive ✗\n(C) One is zero → product would be zero ✗\n(D) Different signs → yes, this must be true ✓\n(E) Sum is negative → not necessarily. Example: (−2)(3) = −6, but also (2)(−3) = −6 where the sum is −1. But (−1)(5) = −5 and the sum is 4 (positive). So the sum doesn't have to be negative. ✗\n\nAnswer: (D) The integers have different signs"
  },
  {
    id: "t1q30",
    category: "Reasoning",
    topic: "Multi-Step Word Problem",
    source: "Claude",
    question: "A tank is 1/3 full of water. After adding 16 gallons, the tank is 5/6 full. How many gallons does the tank hold when completely full?",
    choices: ["24", "28", "30", "32", "48"],
    answer: "D",
    explanation: "Step 1: The water level went from 1/3 to 5/6 of the tank.\nThe amount added = 5/6 − 1/3 of the tank.\n\nStep 2: Subtract the fractions.\n5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2\n\nStep 3: So 16 gallons = 1/2 of the tank.\nFull tank = 16 × 2 = 32 gallons.\n\nAnswer: (D) 32"
  }
],

test2: [
  // --- Number Sense (9) ---
  {
    id: "t2q1",
    category: "Number Sense",
    topic: "Fraction/Decimal/Percent Conversion",
    source: "Claude",
    question: "Which of the following shows 7/8 as a percent?",
    choices: ["78%", "82.5%", "85%", "87.5%", "88%"],
    answer: "D",
    explanation: "Step 1: Divide 7 by 8.\n7 ÷ 8 = 0.875\n\nStep 2: Convert the decimal to a percent.\n0.875 × 100 = 87.5%\n\nAnswer: (D) 87.5%"
  },
  {
    id: "t2q2",
    category: "Number Sense",
    topic: "Decimal Operations",
    source: "Claude",
    question: "A runner completes three laps in 4.32 minutes, 3.98 minutes, and 4.15 minutes. What is the total time for all three laps?",
    choices: ["12.35 min", "12.40 min", "12.45 min", "12.50 min", "12.55 min"],
    answer: "C",
    explanation: "Step 1: Add the three times.\n4.32 + 3.98 + 4.15\n\nStep 2: Add step by step.\n4.32 + 3.98 = 8.30\n8.30 + 4.15 = 12.45\n\nAnswer: (C) 12.45 min"
  },
  {
    id: "t2q3",
    category: "Number Sense",
    topic: "Percent of a Number",
    source: "Claude",
    question: "At a restaurant, the bill is $45. You want to leave a 20% tip. Your friend says the tip should be $8, but you think it should be $9. Who is correct?",
    choices: ["Your friend, because 20% of 45 is $8", "You, because 20% of 45 is $9", "Neither — the tip should be $7.50", "Neither — the tip should be $10", "Both are wrong — the tip should be $8.50"],
    answer: "B",
    explanation: "Step 1: Calculate 20% of $45.\n20% = 0.20\n0.20 × 45 = 9.00\n\nStep 2: You are correct — the tip should be $9.\n\nAnswer: (B) You, because 20% of 45 is $9"
  },
  {
    id: "t2q4",
    category: "Number Sense",
    topic: "Factors and Multiples",
    source: "Claude",
    question: "What is the greatest common factor (GCF) of 36 and 54?",
    choices: ["6", "9", "12", "18", "27"],
    answer: "D",
    explanation: "Step 1: Find the prime factorization of each number.\n36 = 2² × 3²\n54 = 2 × 3³\n\nStep 2: The GCF uses the lowest power of each common prime.\nGCF = 2¹ × 3² = 2 × 9 = 18\n\nAnswer: (D) 18"
  },
  {
    id: "t2q5",
    category: "Number Sense",
    topic: "Absolute Value",
    source: "Claude",
    question: "On a number line, which point is farther from zero: −7.5 or 7.2?",
    choices: ["−7.5, because negative numbers are always farther from zero", "7.2, because positive numbers are always farther from zero", "−7.5, because |−7.5| > |7.2|", "They are the same distance from zero", "7.2, because 7.2 > −7.5"],
    answer: "C",
    explanation: "Step 1: The distance from zero is the absolute value.\n|−7.5| = 7.5\n|7.2| = 7.2\n\nStep 2: Compare: 7.5 > 7.2, so −7.5 is farther from zero.\n\nStep 3: The correct reasoning is (C) — it's about absolute value, not about being negative or positive.\n\nAnswer: (C) −7.5, because |−7.5| > |7.2|"
  },
  {
    id: "t2q6",
    category: "Number Sense",
    topic: "Mixed Number Operations",
    source: "Claude",
    question: "What is 3 1/4 − 1 2/3?",
    choices: ["1 1/12", "1 5/12", "1 7/12", "2 1/12", "2 5/12"],
    answer: "C",
    explanation: "Step 1: Convert to improper fractions.\n3 1/4 = 13/4\n1 2/3 = 5/3\n\nStep 2: Find a common denominator (12).\n13/4 = 39/12\n5/3 = 20/12\n\nStep 3: Subtract.\n39/12 − 20/12 = 19/12\n\nStep 4: Convert back to a mixed number.\n19/12 = 1 7/12\n\nAnswer: (C) 1 7/12"
  },
  {
    id: "t2q7",
    category: "Number Sense",
    topic: "Comparing Values",
    source: "Claude",
    question: "Which of the following is between 1/3 and 1/2?",
    choices: ["3/10", "3/8", "5/12", "5/8", "Both (B) and (C)"],
    answer: "E",
    explanation: "Step 1: Convert 1/3 and 1/2 to decimals.\n1/3 ≈ 0.333\n1/2 = 0.500\n\nStep 2: Convert each answer choice.\n(A) 3/10 = 0.300 — less than 1/3 ✗\n(B) 3/8 = 0.375 — between 0.333 and 0.500 ✓\n(C) 5/12 ≈ 0.417 — between 0.333 and 0.500 ✓\n(D) 5/8 = 0.625 — greater than 1/2 ✗\n\nStep 3: Both (B) and (C) are between 1/3 and 1/2.\n\nAnswer: (E) Both (B) and (C)"
  },
  {
    id: "t2q8",
    category: "Number Sense",
    topic: "Exponents",
    source: "Claude",
    question: "Which is greater, 2<sup>5</sup> or 5<sup>2</sup>, and by how much?",
    choices: ["2⁵ is greater by 3", "5² is greater by 3", "2⁵ is greater by 7", "5² is greater by 7", "They are equal"],
    answer: "C",
    explanation: "Step 1: Calculate each.\n2⁵ = 32\n5² = 25\n\nStep 2: Find the difference.\n32 − 25 = 7\n\nStep 3: 2⁵ is greater by 7.\n\nAnswer: (C) 2⁵ is greater by 7"
  },
  {
    id: "t2q9",
    category: "Number Sense",
    topic: "Percent Change",
    source: "Claude",
    question: "A store buys a shirt for $20 and marks it up by 50%. During a sale, the store offers 30% off the marked price. What is the sale price?",
    choices: ["$18", "$20", "$21", "$24", "$26"],
    answer: "C",
    explanation: "Step 1: Find the marked-up price.\n50% of $20 = $10\nMarked price = $20 + $10 = $30\n\nStep 2: Find the sale price after 30% off.\n30% of $30 = $9\nSale price = $30 − $9 = $21\n\nNote: A 50% markup followed by a 30% discount does NOT get you back to the original price!\n\nAnswer: (C) $21"
  },

  // --- Algebra (7) ---
  {
    id: "t2q10",
    category: "Algebra",
    topic: "Word Problem with Equation",
    source: "Claude",
    question: "Three consecutive even numbers have a sum of 78. What is the largest of the three numbers?",
    choices: ["24", "26", "28", "30", "32"],
    answer: "C",
    explanation: "Step 1: Let the three consecutive even numbers be n, n + 2, and n + 4.\n\nStep 2: Set up the equation.\nn + (n + 2) + (n + 4) = 78\n3n + 6 = 78\n3n = 72\nn = 24\n\nStep 3: The three numbers are 24, 26, and 28.\nThe largest is 28.\n\nAnswer: (C) 28"
  },
  {
    id: "t2q11",
    category: "Algebra",
    topic: "Proportions",
    source: "Claude",
    question: "A car uses 3 gallons of gas to travel 84 miles. At this rate, how many gallons are needed to travel 350 miles?",
    choices: ["10.5", "11.5", "12.5", "14", "15"],
    answer: "C",
    explanation: "Step 1: Find the miles per gallon.\n84 ÷ 3 = 28 miles per gallon\n\nStep 2: Find gallons needed for 350 miles.\n350 ÷ 28 = 12.5 gallons\n\nAnswer: (C) 12.5"
  },
  {
    id: "t2q12",
    category: "Algebra",
    topic: "Rate Problem",
    source: "Claude",
    question: "A train travels at 60 mph and a car travels at 45 mph. They both leave the same station at the same time heading in the same direction. After how many hours will the train be 45 miles ahead of the car?",
    choices: ["1", "2", "3", "4", "5"],
    answer: "C",
    explanation: "Step 1: Every hour, the train gains on the car.\nDifference in speed = 60 − 45 = 15 mph\n\nStep 2: Find when the gap reaches 45 miles.\n45 ÷ 15 = 3 hours\n\nAnswer: (C) 3"
  },
  {
    id: "t2q13",
    category: "Algebra",
    topic: "Solving Equations",
    source: "Claude",
    question: "If 5x − 8 = 3x + 12, what is the value of 2x?",
    choices: ["4", "8", "10", "16", "20"],
    answer: "E",
    explanation: "Step 1: Solve for x.\n5x − 8 = 3x + 12\n5x − 3x = 12 + 8\n2x = 20\n\nStep 2: The question asks for 2x, not x.\n2x = 20\n\nAnswer: (E) 20"
  },
  {
    id: "t2q14",
    category: "Algebra",
    topic: "Linear Inequality",
    source: "Claude",
    question: "A parking lot charges $5 for the first hour and $2 for each additional hour. Which inequality represents the number of additional hours (h) you can park if you have $15?",
    choices: ["5 + 2h ≤ 15", "2 + 5h ≤ 15", "5h + 2 ≥ 15", "5 + 2h ≥ 15", "2h ≤ 15"],
    answer: "A",
    explanation: "Step 1: The total cost is $5 for the first hour plus $2 for each additional hour h.\nTotal = 5 + 2h\n\nStep 2: You have $15, so the total must be at most $15.\n5 + 2h ≤ 15\n\nAnswer: (A) 5 + 2h ≤ 15"
  },
  {
    id: "t2q15",
    category: "Algebra",
    topic: "Sequence Pattern",
    source: "Claude",
    question: "In a sequence, each term is found by adding 5 to twice the previous term. If the first term is 1, what is the fourth term?",
    choices: ["19", "29", "37", "43", "91"],
    answer: "D",
    explanation: "Step 1: Build the sequence using the rule: next = 2 × previous + 5.\nTerm 1: 1\nTerm 2: 2(1) + 5 = 7\nTerm 3: 2(7) + 5 = 19\nTerm 4: 2(19) + 5 = 43\n\nAnswer: (D) 43"
  },
  {
    id: "t2q16",
    category: "Algebra",
    topic: "Function Input/Output",
    source: "Claude",
    question: "If f(x) = 3x − 7, for what value of x does f(x) = 20?",
    choices: ["7", "8", "9", "10", "13"],
    answer: "C",
    explanation: "Step 1: Set f(x) equal to 20.\n3x − 7 = 20\n\nStep 2: Solve for x.\n3x = 27\nx = 9\n\nStep 3: Check. f(9) = 3(9) − 7 = 27 − 7 = 20 ✓\n\nAnswer: (C) 9"
  },

  // --- Geometry (6) ---
  {
    id: "t2q17",
    category: "Geometry",
    topic: "Triangle Area",
    source: "Claude",
    question: "A triangle has a base of 12 cm and a height of 9 cm. A second triangle has the same area but a base of 18 cm. What is the height of the second triangle?",
    choices: ["4 cm", "5 cm", "6 cm", "7 cm", "8 cm"],
    answer: "C",
    explanation: "Step 1: Find the area of the first triangle.\nArea = (1/2)(12)(9) = 54 sq cm\n\nStep 2: Use the same area for the second triangle.\n54 = (1/2)(18)(h)\n54 = 9h\nh = 6 cm\n\nAnswer: (C) 6 cm"
  },
  {
    id: "t2q18",
    category: "Geometry",
    topic: "Perimeter Transformation",
    source: "Claude",
    question: "A rectangle has a perimeter of 24 cm. If the length is doubled and the width is halved, what is the new perimeter?",
    choices: ["It depends on the dimensions", "18 cm", "24 cm", "30 cm", "36 cm"],
    answer: "A",
    explanation: "Step 1: Let the original length = L and width = W.\nPerimeter: 2L + 2W = 24, so L + W = 12.\n\nStep 2: New dimensions: length = 2L, width = W/2.\nNew perimeter = 2(2L) + 2(W/2) = 4L + W\n\nStep 3: We know L + W = 12, so W = 12 − L.\nNew perimeter = 4L + (12 − L) = 3L + 12\n\nStep 4: The new perimeter depends on L. For example:\nIf L = 6, W = 6: new perimeter = 3(6) + 12 = 30\nIf L = 8, W = 4: new perimeter = 3(8) + 12 = 36\nIf L = 4, W = 8: new perimeter = 3(4) + 12 = 24\n\nThe answer changes depending on the original dimensions.\n\nAnswer: (A) It depends on the dimensions"
  },
  {
    id: "t2q19",
    category: "Geometry",
    topic: "Circle Sector Area",
    source: "Claude",
    question: "A pizza has a diameter of 16 inches. If you cut it into 8 equal slices, what is the area of one slice? (Use π ≈ 3.14)",
    choices: ["6.28 sq in", "12.56 sq in", "25.12 sq in", "50.24 sq in", "100.48 sq in"],
    answer: "C",
    explanation: "Step 1: Find the radius.\nRadius = 16 ÷ 2 = 8 inches\n\nStep 2: Find the total area.\nArea = πr² = 3.14 × 64 = 200.96 sq in\n\nStep 3: Divide by 8 for one slice.\n200.96 ÷ 8 = 25.12 sq in\n\nAnswer: (C) 25.12 sq in"
  },
  {
    id: "t2q20",
    category: "Geometry",
    topic: "Similar Triangles",
    source: "Claude",
    question: "Two triangles are similar. The sides of the smaller triangle are 3, 4, and 5. If the longest side of the larger triangle is 15, what is the perimeter of the larger triangle?",
    choices: ["24", "30", "36", "42", "45"],
    answer: "C",
    explanation: "Step 1: Find the scale factor.\nThe longest side of the small triangle is 5.\nThe longest side of the large triangle is 15.\nScale factor = 15/5 = 3\n\nStep 2: Multiply each side by 3.\n3 × 3 = 9\n4 × 3 = 12\n5 × 3 = 15\n\nStep 3: Find the perimeter.\n9 + 12 + 15 = 36\n\nAnswer: (C) 36"
  },
  {
    id: "t2q21",
    category: "Geometry",
    topic: "Vertical and Supplementary Angles",
    source: "Claude",
    question: "Two straight lines cross, forming four angles. If one of the angles measures 65°, what is the sum of the other three angles?",
    choices: ["115°", "195°", "245°", "295°", "315°"],
    answer: "D",
    explanation: "Step 1: When two lines cross, the four angles add up to 360°.\n\nStep 2: Subtract the known angle.\n360° − 65° = 295°\n\nStep 3: The sum of the other three angles is 295°.\n\n(Note: The four angles are 65°, 115°, 65°, 115° — the vertical angles are equal and adjacent angles are supplementary.)\n\nAnswer: (D) 295°"
  },
  {
    id: "t2q22",
    category: "Geometry",
    topic: "Right Triangle Word Problem",
    source: "Claude",
    question: "A ladder leans against a wall. The base of the ladder is 6 feet from the wall, and the ladder reaches 8 feet up the wall. How long is the ladder?",
    choices: ["7 ft", "9 ft", "10 ft", "12 ft", "14 ft"],
    answer: "C",
    explanation: "Step 1: This forms a right triangle with legs 6 and 8.\n\nStep 2: Use the Pythagorean theorem.\nc² = 6² + 8²\nc² = 36 + 64\nc² = 100\nc = 10\n\nStep 3: The ladder is 10 feet long. (This is a 6-8-10 right triangle, a multiple of the 3-4-5 triangle.)\n\nAnswer: (C) 10 ft"
  },

  // --- Data Analysis (5) ---
  {
    id: "t2q23",
    category: "Data Analysis",
    topic: "Mean/Median/Mode",
    source: "Claude",
    question: "The ages of seven children are: 8, 10, 10, 11, 12, 13, 15. Which statement is true?",
    choices: ["The mean equals the median", "The mean is greater than the median", "The median is greater than the mean", "The mode is greater than the median", "The range equals the mean"],
    answer: "B",
    explanation: "Step 1: Find the median (middle value of 7 numbers).\nOrdered: 8, 10, 10, 11, 12, 13, 15\nMedian = 11\n\nStep 2: Find the mean.\nSum = 8 + 10 + 10 + 11 + 12 + 13 + 15 = 79\nMean = 79 ÷ 7 ≈ 11.29\n\nStep 3: Find the mode.\nMode = 10 (appears twice)\n\nStep 4: Find the range.\nRange = 15 − 8 = 7\n\nStep 5: Check each statement.\n(A) Mean (11.29) = median (11)? No ✗\n(B) Mean (11.29) > median (11)? Yes ✓\n(C) Median > mean? No ✗\n(D) Mode (10) > median (11)? No ✗\n(E) Range (7) = mean (11.29)? No ✗\n\nAnswer: (B) The mean is greater than the median"
  },
  {
    id: "t2q24",
    category: "Data Analysis",
    topic: "Probability",
    source: "Claude",
    question: "A spinner is divided into 5 equal sections numbered 1 through 5. If you spin twice, what is the probability that both spins land on an odd number?",
    choices: ["2/5", "4/25", "6/25", "9/25", "3/5"],
    answer: "D",
    explanation: "Step 1: Identify the odd numbers: 1, 3, 5 — that's 3 out of 5.\n\nStep 2: The probability of odd on one spin is 3/5.\n\nStep 3: Since the spins are independent, multiply.\nP(both odd) = 3/5 × 3/5 = 9/25\n\nAnswer: (D) 9/25"
  },
  {
    id: "t2q25",
    category: "Data Analysis",
    topic: "Reading Tables",
    source: "Claude",
    question: "A school recorded the number of students who bought lunch: Monday 120, Tuesday 95, Wednesday 110, Thursday 135, Friday 90. On which day did the number of students buying lunch increase the most compared to the day before?",
    choices: ["Tuesday", "Wednesday", "Thursday", "Friday", "Monday"],
    answer: "C",
    explanation: "Step 1: Find the change from each day to the next.\nMon→Tue: 95 − 120 = −25 (decrease)\nTue→Wed: 110 − 95 = +15 (increase)\nWed→Thu: 135 − 110 = +25 (increase)\nThu→Fri: 90 − 135 = −45 (decrease)\n\nStep 2: The biggest increase was +25, from Wednesday to Thursday.\n\nAnswer: (C) Thursday"
  },
  {
    id: "t2q26",
    category: "Data Analysis",
    topic: "Counting Principle",
    source: "Claude",
    question: "A password must be 3 characters long: the first character is a letter (A-E), the second is a digit (1-5), and the third is a letter (A-E) that is different from the first. How many passwords are possible?",
    choices: ["80", "100", "120", "125", "500"],
    answer: "B",
    explanation: "Step 1: Count choices for each position.\nFirst letter: 5 choices (A, B, C, D, or E)\nDigit: 5 choices (1, 2, 3, 4, or 5)\nThird letter: 4 choices (any letter except the first one)\n\nStep 2: Multiply.\n5 × 5 × 4 = 100\n\nAnswer: (B) 100"
  },
  {
    id: "t2q27",
    category: "Data Analysis",
    topic: "Experimental Probability",
    source: "Claude",
    question: "A basketball player made 36 out of her last 48 free throws. Based on this record, if she shoots 20 free throws in her next game, how many would you expect her to make?",
    choices: ["12", "13", "14", "15", "16"],
    answer: "D",
    explanation: "Step 1: Find her free throw rate.\n36/48 = 3/4 = 75%\n\nStep 2: Apply this rate to 20 shots.\n3/4 × 20 = 15\n\nAnswer: (D) 15"
  },

  // --- Reasoning (3) ---
  {
    id: "t2q28",
    category: "Reasoning",
    topic: "Multi-Step Word Problem",
    source: "Claude",
    question: "Emma earns $12 per hour babysitting. She wants to buy a pair of shoes that costs $85 and a shirt that costs $23. She already has $30 saved. How many full hours does she need to work to have enough money?",
    choices: ["5", "6", "7", "8", "9"],
    answer: "C",
    explanation: "Step 1: Find the total cost.\n$85 + $23 = $108\n\nStep 2: Find how much more she needs.\n$108 − $30 = $78\n\nStep 3: Divide by her hourly rate.\n$78 ÷ $12 = 6.5 hours\n\nStep 4: Since she can only work full hours and needs at least $78, she must work 7 hours.\n(6 hours would only give her $72, which is not enough.)\n\nAnswer: (C) 7"
  },
  {
    id: "t2q29",
    category: "Reasoning",
    topic: "Cannot Be True",
    source: "Claude",
    question: "If x is a positive integer less than 10, which of the following CANNOT be the value of x² + 1?",
    choices: ["2", "5", "20", "26", "50"],
    answer: "C",
    explanation: "Step 1: Find all possible values of x² + 1 for positive integers less than 10.\nx = 1: 1 + 1 = 2\nx = 2: 4 + 1 = 5\nx = 3: 9 + 1 = 10\nx = 4: 16 + 1 = 17\nx = 5: 25 + 1 = 26\nx = 6: 36 + 1 = 37\nx = 7: 49 + 1 = 50\nx = 8: 64 + 1 = 65\nx = 9: 81 + 1 = 82\n\nStep 2: Check each answer choice.\n(A) 2 — yes, when x = 1 ✓\n(B) 5 — yes, when x = 2 ✓\n(C) 20 — no integer less than 10 gives 20. (4² + 1 = 17, 5² + 1 = 26) ✗\n(D) 26 — yes, when x = 5 ✓\n(E) 50 — yes, when x = 7 ✓\n\nAnswer: (C) 20"
  },
  {
    id: "t2q30",
    category: "Reasoning",
    topic: "Pattern Recognition",
    source: "Claude",
    question: "The pattern 2, 6, 18, 54, ... is formed by multiplying each term by 3. If this pattern continues, which is the first term greater than 1,000?",
    choices: ["486", "729", "1,458", "2,187", "4,374"],
    answer: "C",
    explanation: "Step 1: Continue the pattern by multiplying by 3.\n2, 6, 18, 54, 162, 486, 1458, ...\n\nStep 2: Check each term.\n2 × 3 = 6\n6 × 3 = 18\n18 × 3 = 54\n54 × 3 = 162\n162 × 3 = 486\n486 × 3 = 1,458\n\nStep 3: 1,458 is the first term greater than 1,000.\n\nAnswer: (C) 1,458"
  }
]

};
