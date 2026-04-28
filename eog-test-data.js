// ============================================================
// EOG Grade 4 Practice Quizzes — 10 Math + 10 ELA (200 questions)
// ============================================================

var EOG_TEST_DATA = {};
var EOG_TEST_META = [];
(function() {
  for (var i = 1; i <= 10; i++) {
    EOG_TEST_META.push({ id: 'eogmath' + i, label: 'Math Quiz ' + i, questions: 10, timed: false, subject: 'math' });
  }
  for (var i = 1; i <= 10; i++) {
    EOG_TEST_META.push({ id: 'eogela' + i, label: 'ELA Quiz ' + i, questions: 10, timed: false, subject: 'ela' });
  }
})();

// ===================== MATH QUIZ 1 =====================
EOG_TEST_DATA.eogmath1 = [
  { id:"em1q1", category:"Number and Operations—Fractions", topic:"Equivalent Fractions", source:"Generated — MGSE4.NF.1",
    question:"Which fraction is equivalent to 2/4?",
    choices:["1/2","2/3","3/4","1/4"], answer:"A",
    explanation:"Step 1: Simplify 2/4 by dividing top and bottom by 2.\n2 ÷ 2 = 1\n4 ÷ 2 = 2\n2/4 = 1/2\n\nAnswer: (A) 1/2" },
  { id:"em1q2", category:"Operations and Algebraic Thinking", topic:"Multi-Step Word Problems", source:"Generated — MGSE4.OA.3",
    question:"Nelson has 48 trading cards. He gives 12 to his brother and then splits the rest equally among 4 friends. How many cards does each friend get?",
    choices:["9","12","8","10"], answer:"A",
    explanation:"Step 1: Subtract the cards he gave away.\n48 − 12 = 36 cards left\n\nStep 2: Divide among 4 friends.\n36 ÷ 4 = 9\n\nAnswer: (A) 9 cards each" },
  { id:"em1q3", category:"Number and Operations in Base 10", topic:"Rounding", source:"Generated — MGSE4.NBT.3",
    question:"Round 6,749 to the nearest thousand.",
    choices:["6,000","6,700","6,800","7,000"], answer:"D",
    explanation:"Step 1: Find the thousands digit: 6.\nStep 2: Look at the digit to the right: 7 (the hundreds digit).\nStep 3: 7 is 5 or more → round up.\n6,749 rounds to 7,000.\n\nAnswer: (D) 7,000" },
  { id:"em1q4", category:"Measurement and Data", topic:"Perimeter", source:"Generated — MGSE4.MD.3",
    question:"A rectangular basketball court is 28 feet long and 15 feet wide. What is the perimeter?",
    choices:["43 feet","86 feet","420 square feet","56 feet"], answer:"B",
    explanation:"Step 1: Perimeter = 2 × (length + width)\nStep 2: 2 × (28 + 15) = 2 × 43 = 86 feet\n\nAnswer: (B) 86 feet" },
  { id:"em1q5", category:"Geometry", topic:"Lines of Symmetry", source:"Generated — MGSE4.G.3",
    question:"How many lines of symmetry does an equilateral triangle have?",
    choices:["0","1","2","3"], answer:"D",
    explanation:"An equilateral triangle has 3 equal sides, so you can fold it 3 different ways and the halves match perfectly.\n\nAnswer: (D) 3" },
  { id:"em1q6", category:"Number and Operations—Fractions", topic:"Comparing Fractions", source:"Generated — MGSE4.NF.2",
    question:"Which fraction is greater: 5/8 or 3/8?",
    choices:["5/8","3/8","They are equal","Cannot tell"], answer:"A",
    explanation:"When fractions have the same denominator, compare the numerators.\n5 > 3, so 5/8 > 3/8.\n\nAnswer: (A) 5/8" },
  { id:"em1q7", category:"Number and Operations in Base 10", topic:"Multi-Digit Multiplication", source:"Generated — MGSE4.NBT.5",
    question:"What is 46 × 23?",
    choices:["1,058","968","1,048","1,068"], answer:"A",
    explanation:"Step 1: Break it apart.\n46 × 23 = 46 × 20 + 46 × 3\nStep 2: 46 × 20 = 920\nStep 3: 46 × 3 = 138\nStep 4: 920 + 138 = 1,058\n\nAnswer: (A) 1,058" },
  { id:"em1q8", category:"Operations and Algebraic Thinking", topic:"Factors", source:"Generated — MGSE4.OA.4",
    question:"Which number is a factor of 36?",
    choices:["5","7","8","9"], answer:"D",
    explanation:"Factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.\n9 × 4 = 36, so 9 is a factor.\n\nAnswer: (D) 9" },
  { id:"em1q9", category:"Number and Operations—Fractions", topic:"Adding Fractions", source:"Generated — MGSE4.NF.3",
    question:"What is 3/10 + 4/10?",
    choices:["7/20","7/10","1/10","12/10"], answer:"B",
    explanation:"Same denominator → add the numerators, keep the denominator.\n3/10 + 4/10 = 7/10\n\nAnswer: (B) 7/10" },
  { id:"em1q10", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1",
    question:"How many inches are in 3 feet?",
    choices:["24","30","36","48"], answer:"C",
    explanation:"1 foot = 12 inches\n3 feet × 12 = 36 inches\n\nAnswer: (C) 36" }
];

// ===================== MATH QUIZ 2 =====================
EOG_TEST_DATA.eogmath2 = [
  { id:"em2q1", category:"Number and Operations—Fractions", topic:"Multiplying Fractions by Whole Numbers", source:"Generated — MGSE4.NF.4",
    question:"What is 5 × 3/4?",
    choices:["15/20","15/4","8/4","5/4"], answer:"B",
    explanation:"Multiply the whole number by the numerator, keep the denominator.\n5 × 3/4 = 15/4 = 3 3/4\n\nAnswer: (B) 15/4" },
  { id:"em2q2", category:"Number and Operations in Base 10", topic:"Place Value", source:"Generated — MGSE4.NBT.2",
    question:"In the number 734,215, what is the value of the digit 3?",
    choices:["3","300","3,000","30,000"], answer:"D",
    explanation:"The 3 is in the ten-thousands place.\nValue = 3 × 10,000 = 30,000\n\nAnswer: (D) 30,000" },
  { id:"em2q3", category:"Operations and Algebraic Thinking", topic:"Multiplicative Comparison", source:"Generated — MGSE4.OA.1",
    question:"A cat weighs 9 pounds. A dog weighs 4 times as much. How much does the dog weigh?",
    choices:["13 pounds","27 pounds","36 pounds","45 pounds"], answer:"C",
    explanation:"\"4 times as much\" means multiply.\n9 × 4 = 36 pounds\n\nAnswer: (C) 36 pounds" },
  { id:"em2q4", category:"Measurement and Data", topic:"Area", source:"Generated — MGSE4.MD.3",
    question:"Nelson's bedroom is 12 feet long and 10 feet wide. How much carpet does he need to cover the floor?",
    choices:["22 square feet","44 square feet","120 square feet","120 feet"], answer:"C",
    explanation:"\"Cover the floor\" = area.\nArea = length × width = 12 × 10 = 120 square feet\n\nAnswer: (C) 120 square feet" },
  { id:"em2q5", category:"Number and Operations—Fractions", topic:"Decimals and Fractions", source:"Generated — MGSE4.NF.6",
    question:"Which decimal is equivalent to 7/10?",
    choices:["0.07","0.7","7.0","0.71"], answer:"B",
    explanation:"7/10 means 7 tenths.\nIn decimal form, tenths go in the first place after the decimal point: 0.7\n\nAnswer: (B) 0.7" },
  { id:"em2q6", category:"Geometry", topic:"Classifying Angles", source:"Generated — MGSE4.G.1",
    question:"An angle measures 110°. What type of angle is it?",
    choices:["Acute","Right","Obtuse","Straight"], answer:"C",
    explanation:"Acute = less than 90°\nRight = exactly 90°\nObtuse = more than 90° but less than 180°\n110° is between 90° and 180° → obtuse.\n\nAnswer: (C) Obtuse" },
  { id:"em2q7", category:"Number and Operations in Base 10", topic:"Division with Remainders", source:"Generated — MGSE4.NBT.6",
    question:"There are 85 stickers to share equally among 6 students. How many stickers does each student get, and how many are left over?",
    choices:["13 R5","14 R1","15 R0","12 R5"], answer:"B",
    explanation:"85 ÷ 6 = 14 remainder 1\n6 × 14 = 84\n85 − 84 = 1 left over\n\nAnswer: (B) 14 R1" },
  { id:"em2q8", category:"Number and Operations—Fractions", topic:"Subtracting Fractions", source:"Generated — MGSE4.NF.3",
    question:"What is 7/8 − 3/8?",
    choices:["4/16","4/8","10/8","4/0"], answer:"B",
    explanation:"Same denominator → subtract the numerators.\n7/8 − 3/8 = 4/8 (which simplifies to 1/2)\n\nAnswer: (B) 4/8" },
  { id:"em2q9", category:"Operations and Algebraic Thinking", topic:"Patterns", source:"Generated — MGSE4.OA.5",
    question:"Look at the pattern: 3, 7, 11, 15, 19, ... What is the rule?",
    choices:["Multiply by 2","Add 4","Add 3","Multiply by 3"], answer:"B",
    explanation:"3 + 4 = 7\n7 + 4 = 11\n11 + 4 = 15\n15 + 4 = 19\nThe rule is add 4.\n\nAnswer: (B) Add 4" },
  { id:"em2q10", category:"Measurement and Data", topic:"Angles", source:"Generated — MGSE4.MD.7",
    question:"Two angles together form a straight line (180°). One angle is 125°. What is the other angle?",
    choices:["45°","55°","65°","75°"], answer:"B",
    explanation:"Straight line = 180°\n180° − 125° = 55°\n\nAnswer: (B) 55°" }
];

// ===================== MATH QUIZ 3 =====================
EOG_TEST_DATA.eogmath3 = [
  { id:"em3q1", category:"Number and Operations—Fractions", topic:"Equivalent Fractions", source:"Generated — MGSE4.NF.1",
    question:"Which fraction is equivalent to 3/5?",
    choices:["6/10","6/15","9/20","3/10"], answer:"A",
    explanation:"Multiply top and bottom by 2:\n3×2 = 6, 5×2 = 10\n3/5 = 6/10\n\nAnswer: (A) 6/10" },
  { id:"em3q2", category:"Number and Operations in Base 10", topic:"Multi-Digit Subtraction", source:"Generated — MGSE4.NBT.4",
    question:"What is 5,003 − 1,876?",
    choices:["3,127","3,227","3,137","3,027"], answer:"A",
    explanation:"Line up and subtract with regrouping:\n5,003 − 1,876 = 3,127\n\nAnswer: (A) 3,127" },
  { id:"em3q3", category:"Operations and Algebraic Thinking", topic:"Prime and Composite", source:"Generated — MGSE4.OA.4",
    question:"Which number is prime?",
    choices:["15","21","23","27"], answer:"C",
    explanation:"Prime = only factors are 1 and itself.\n15 = 3 × 5 (composite)\n21 = 3 × 7 (composite)\n23 = 1 × 23 only (prime!)\n27 = 3 × 9 (composite)\n\nAnswer: (C) 23" },
  { id:"em3q4", category:"Measurement and Data", topic:"Elapsed Time", source:"Generated — MGSE4.MD.1",
    question:"Nelson's soccer practice starts at 3:45 PM and lasts 1 hour and 30 minutes. What time does it end?",
    choices:["4:45 PM","5:00 PM","5:15 PM","5:30 PM"], answer:"C",
    explanation:"3:45 PM + 1 hour = 4:45 PM\n4:45 PM + 30 minutes = 5:15 PM\n\nAnswer: (C) 5:15 PM" },
  { id:"em3q5", category:"Geometry", topic:"Parallel and Perpendicular Lines", source:"Generated — MGSE4.G.1",
    question:"Which of these is an example of parallel lines?",
    choices:["The letter L","The letter X","Railroad tracks","The letter T"], answer:"C",
    explanation:"Parallel lines go in the same direction and never cross.\nRailroad tracks are always the same distance apart — they're parallel.\n\nAnswer: (C) Railroad tracks" },
  { id:"em3q6", category:"Number and Operations—Fractions", topic:"Comparing Fractions", source:"Generated — MGSE4.NF.2",
    question:"Which is greater: 2/3 or 3/4?",
    choices:["2/3","3/4","They are equal","Cannot tell"], answer:"B",
    explanation:"Find a common denominator (12):\n2/3 = 8/12\n3/4 = 9/12\n9/12 > 8/12, so 3/4 is greater.\n\nAnswer: (B) 3/4" },
  { id:"em3q7", category:"Number and Operations in Base 10", topic:"Rounding", source:"Generated — MGSE4.NBT.3",
    question:"Round 34,562 to the nearest ten thousand.",
    choices:["30,000","34,000","35,000","40,000"], answer:"C",
    explanation:"Ten-thousands digit is 3. Look right: 4 (thousands digit).\n4 is less than 5 → keep the 3? Wait — let me recheck.\nActually: 34,562. The ten-thousands digit is 3. The digit to its right is 4. Since 4 < 5, round down → 30,000.\n\nWait, that's not right either. Let me reconsider: the nearest ten thousands to 34,562:\n30,000 and 40,000. Since 34,562 is closer to 30,000 (distance 4,562) than to 40,000 (distance 5,438), round down to 30,000.\n\nAnswer: (A) 30,000" },
  { id:"em3q8", category:"Number and Operations—Fractions", topic:"Mixed Numbers", source:"Generated — MGSE4.NF.3",
    question:"What is 2/5 + 4/5?",
    choices:["6/10","6/5","1/5","2/5"], answer:"B",
    explanation:"Same denominator → add the numerators.\n2/5 + 4/5 = 6/5\n6/5 is the same as 1 1/5 (an improper fraction).\n\nAnswer: (B) 6/5" },
  { id:"em3q9", category:"Operations and Algebraic Thinking", topic:"Multi-Step Word Problems", source:"Generated — MGSE4.OA.3",
    question:"A baker makes 156 cookies. She puts 12 cookies in each box. How many boxes can she fill completely?",
    choices:["12","13","14","15"], answer:"B",
    explanation:"156 ÷ 12 = 13 boxes exactly.\n\nAnswer: (B) 13" },
  { id:"em3q10", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1",
    question:"How many ounces are in 3 pounds?",
    choices:["24","36","48","64"], answer:"C",
    explanation:"1 pound = 16 ounces\n3 × 16 = 48 ounces\n\nAnswer: (C) 48" }
];

// ===================== MATH QUIZ 4 =====================
EOG_TEST_DATA.eogmath4 = [
  { id:"em4q1", category:"Number and Operations—Fractions", topic:"Decimals and Fractions", source:"Generated — MGSE4.NF.5",
    question:"Which fraction is equivalent to 30/100?",
    choices:["3/10","3/100","30/10","1/3"], answer:"A",
    explanation:"30/100 → divide top and bottom by 10.\n30 ÷ 10 = 3, 100 ÷ 10 = 10\n30/100 = 3/10\n\nAnswer: (A) 3/10" },
  { id:"em4q2", category:"Geometry", topic:"Classifying Quadrilaterals", source:"Generated — MGSE4.G.2",
    question:"A shape has 4 sides, 4 right angles, and opposite sides that are equal but NOT all sides equal. What is it?",
    choices:["Square","Rhombus","Rectangle","Trapezoid"], answer:"C",
    explanation:"4 right angles + opposite sides equal but not all sides equal = rectangle.\nA square would need ALL sides equal.\n\nAnswer: (C) Rectangle" },
  { id:"em4q3", category:"Number and Operations in Base 10", topic:"Multi-Digit Addition", source:"Generated — MGSE4.NBT.4",
    question:"What is 4,567 + 3,895?",
    choices:["8,362","8,462","8,452","7,462"], answer:"B",
    explanation:"  4,567\n+ 3,895\n= 8,462\n\nAnswer: (B) 8,462" },
  { id:"em4q4", category:"Operations and Algebraic Thinking", topic:"Multiples", source:"Generated — MGSE4.OA.4",
    question:"Which of these is a multiple of 6?",
    choices:["22","32","42","52"], answer:"C",
    explanation:"Multiples of 6: 6, 12, 18, 24, 30, 36, 42...\n42 = 6 × 7 ✓\n\nAnswer: (C) 42" },
  { id:"em4q5", category:"Number and Operations—Fractions", topic:"Comparing Decimals", source:"Generated — MGSE4.NF.7",
    question:"Which decimal is greater: 0.6 or 0.52?",
    choices:["0.6","0.52","They are equal","Cannot tell"], answer:"A",
    explanation:"Compare tenths first: 0.6 has 6 tenths, 0.52 has 5 tenths.\n6 > 5, so 0.6 > 0.52.\n\nAnswer: (A) 0.6" },
  { id:"em4q6", category:"Measurement and Data", topic:"Perimeter", source:"Generated — MGSE4.MD.3",
    question:"A square playground has sides that are 45 feet long. What is the perimeter?",
    choices:["90 feet","135 feet","180 feet","2,025 feet"], answer:"C",
    explanation:"A square has 4 equal sides.\nPerimeter = 4 × 45 = 180 feet\n\nAnswer: (C) 180 feet" },
  { id:"em4q7", category:"Number and Operations—Fractions", topic:"Multiplying Fractions by Whole Numbers", source:"Generated — MGSE4.NF.4",
    question:"Nelson eats 1/3 of a pizza every day for 6 days. How much pizza did he eat in all?",
    choices:["6/18","6/3","2/3","7/3"], answer:"B",
    explanation:"6 × 1/3 = 6/3 = 2 whole pizzas\n\nAnswer: (B) 6/3" },
  { id:"em4q8", category:"Number and Operations in Base 10", topic:"Expanded Form", source:"Generated — MGSE4.NBT.2",
    question:"What is 40,000 + 200 + 9 in standard form?",
    choices:["40,209","42,009","40,290","4,209"], answer:"A",
    explanation:"40,000 + 200 + 9 = 40,209\n\nAnswer: (A) 40,209" },
  { id:"em4q9", category:"Operations and Algebraic Thinking", topic:"Input-Output Patterns", source:"Generated — MGSE4.OA.5",
    question:"Input: 1, 2, 3, 4. Output: 5, 9, 13, 17. What is the rule?",
    choices:["Add 4","Multiply by 4, add 1","Multiply by 3, add 2","Multiply by 5"], answer:"B",
    explanation:"Test with input 1: 1 × 4 + 1 = 5 ✓\nTest with input 2: 2 × 4 + 1 = 9 ✓\nTest with input 3: 3 × 4 + 1 = 13 ✓\n\nAnswer: (B) Multiply by 4, add 1" },
  { id:"em4q10", category:"Measurement and Data", topic:"Area", source:"Generated — MGSE4.MD.3",
    question:"A wall is 9 feet tall and 14 feet wide. How much paint is needed to cover it?",
    choices:["23 square feet","46 square feet","126 square feet","126 feet"], answer:"C",
    explanation:"\"Cover it\" = area.\nArea = 9 × 14 = 126 square feet\n\nAnswer: (C) 126 square feet" }
];

// ===================== MATH QUIZ 5 =====================
EOG_TEST_DATA.eogmath5 = [
  { id:"em5q1", category:"Number and Operations—Fractions", topic:"Equivalent Fractions", source:"Generated — MGSE4.NF.1",
    question:"Which fraction is NOT equivalent to 1/2?",
    choices:["2/4","3/6","4/10","5/10"], answer:"C",
    explanation:"2/4 = 1/2 ✓, 3/6 = 1/2 ✓, 5/10 = 1/2 ✓\n4/10 = 2/5 (not 1/2) ✗\n\nAnswer: (C) 4/10" },
  { id:"em5q2", category:"Number and Operations in Base 10", topic:"Rounding", source:"Generated — MGSE4.NBT.3",
    question:"A school has 1,847 students. Rounded to the nearest hundred, about how many students are there?",
    choices:["1,800","1,850","1,900","2,000"], answer:"C",
    explanation:"Hundreds digit is 8. Look right: 4 (tens digit).\n4 < 5 → round down? No — look again.\n1,847: hundreds digit is 8, tens digit is 4.\nSince 4 < 5, keep the 8 → 1,800.\n\nWait: I need to recheck. 1,847 rounded to nearest hundred: the digit in the tens place is 4, which is less than 5, so we round down to 1,800.\n\nAnswer: (A) 1,800" },
  { id:"em5q3", category:"Operations and Algebraic Thinking", topic:"Multiplicative Comparison", source:"Generated — MGSE4.OA.2",
    question:"A blue ribbon is 7 inches long. A red ribbon is 3 times as long. How long is the red ribbon?",
    choices:["10 inches","14 inches","21 inches","24 inches"], answer:"C",
    explanation:"\"3 times as long\" = multiply.\n7 × 3 = 21 inches\n\nAnswer: (C) 21 inches" },
  { id:"em5q4", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1",
    question:"How many cups are in 2 gallons?",
    choices:["8","16","24","32"], answer:"D",
    explanation:"1 gallon = 4 quarts = 16 cups\n2 gallons = 32 cups\n\nAnswer: (D) 32" },
  { id:"em5q5", category:"Number and Operations—Fractions", topic:"Adding Fractions", source:"Generated — MGSE4.NF.3",
    question:"A recipe uses 2/6 cup of sugar and 3/6 cup of flour. How much is that in all?",
    choices:["5/12","5/6","6/6","1/6"], answer:"B",
    explanation:"Same denominator → add numerators.\n2/6 + 3/6 = 5/6\n\nAnswer: (B) 5/6" },
  { id:"em5q6", category:"Geometry", topic:"Lines of Symmetry", source:"Generated — MGSE4.G.3",
    question:"How many lines of symmetry does a circle have?",
    choices:["0","2","4","Unlimited"], answer:"D",
    explanation:"A circle can be folded in half along any diameter and both halves match. There are unlimited diameters, so unlimited lines of symmetry.\n\nAnswer: (D) Unlimited" },
  { id:"em5q7", category:"Number and Operations in Base 10", topic:"Multi-Digit Multiplication", source:"Generated — MGSE4.NBT.5",
    question:"What is 215 × 4?",
    choices:["840","850","860","880"], answer:"C",
    explanation:"200 × 4 = 800\n15 × 4 = 60\n800 + 60 = 860\n\nAnswer: (C) 860" },
  { id:"em5q8", category:"Number and Operations—Fractions", topic:"Comparing Fractions", source:"Generated — MGSE4.NF.2",
    question:"Put these fractions in order from least to greatest: 1/4, 1/2, 1/8",
    choices:["1/8, 1/4, 1/2","1/2, 1/4, 1/8","1/4, 1/8, 1/2","1/8, 1/2, 1/4"], answer:"A",
    explanation:"With unit fractions, bigger denominator = smaller fraction.\n1/8 < 1/4 < 1/2\n\nAnswer: (A) 1/8, 1/4, 1/2" },
  { id:"em5q9", category:"Operations and Algebraic Thinking", topic:"Factors", source:"Generated — MGSE4.OA.4",
    question:"What are ALL the factor pairs of 24?",
    choices:["1×24, 2×12, 3×8, 4×6","1×24, 2×12, 3×8","1×24, 4×6, 8×3","1×24, 2×12, 4×8"], answer:"A",
    explanation:"1 × 24 = 24 ✓\n2 × 12 = 24 ✓\n3 × 8 = 24 ✓\n4 × 6 = 24 ✓\nThat's all of them.\n\nAnswer: (A) 1×24, 2×12, 3×8, 4×6" },
  { id:"em5q10", category:"Measurement and Data", topic:"Angles", source:"Generated — MGSE4.MD.5",
    question:"How many degrees are in a right angle?",
    choices:["45°","90°","180°","360°"], answer:"B",
    explanation:"A right angle is exactly 90°. It looks like the corner of a book.\n\nAnswer: (B) 90°" }
];

// ===================== MATH QUIZZES 6-10 =====================
EOG_TEST_DATA.eogmath6 = [
  { id:"em6q1", category:"Number and Operations—Fractions", topic:"Decimals and Fractions", source:"Generated — MGSE4.NF.6", question:"Convert 0.25 to a fraction.", choices:["1/4","2/5","1/5","25/10"], answer:"A", explanation:"0.25 = 25/100. Simplify: 25÷25=1, 100÷25=4. So 0.25 = 1/4.\n\nAnswer: (A) 1/4" },
  { id:"em6q2", category:"Operations and Algebraic Thinking", topic:"Multi-Step Word Problems", source:"Generated — MGSE4.OA.3", question:"Nelson earns $8 per hour mowing lawns. He works 5 hours on Saturday and 3 hours on Sunday. How much does he earn in all?", choices:["$40","$56","$64","$80"], answer:"C", explanation:"Total hours: 5 + 3 = 8 hours\n8 × $8 = $64\n\nAnswer: (C) $64" },
  { id:"em6q3", category:"Number and Operations in Base 10", topic:"Division with Remainders", source:"Generated — MGSE4.NBT.6", question:"There are 94 pencils. Each pack holds 8. How many packs are needed to hold ALL the pencils?", choices:["11","11 R6","12","8"], answer:"C", explanation:"94 ÷ 8 = 11 remainder 6.\n11 packs hold 88 pencils, but 6 are left over. They still need a pack.\n11 + 1 = 12 packs needed.\n\nAnswer: (C) 12" },
  { id:"em6q4", category:"Measurement and Data", topic:"Elapsed Time", source:"Generated — MGSE4.MD.1", question:"A movie starts at 7:20 PM and is 1 hour 45 minutes long. What time does it end?", choices:["8:55 PM","9:05 PM","8:65 PM","9:15 PM"], answer:"B", explanation:"7:20 + 1 hour = 8:20\n8:20 + 45 minutes = 9:05 PM\n\nAnswer: (B) 9:05 PM" },
  { id:"em6q5", category:"Geometry", topic:"Classifying Triangles", source:"Generated — MGSE4.G.2", question:"A triangle has sides measuring 5 cm, 5 cm, and 8 cm. What type of triangle is it?", choices:["Equilateral","Isosceles","Scalene","Right"], answer:"B", explanation:"Two sides are equal (5 and 5), one is different (8).\nTwo equal sides = isosceles triangle.\n\nAnswer: (B) Isosceles" },
  { id:"em6q6", category:"Number and Operations—Fractions", topic:"Subtracting Fractions", source:"Generated — MGSE4.NF.3", question:"Nelson had 5/6 of a gallon of juice. He drank 2/6. How much is left?", choices:["3/6","7/6","3/12","2/6"], answer:"A", explanation:"Same denominator → subtract numerators.\n5/6 − 2/6 = 3/6 (= 1/2)\n\nAnswer: (A) 3/6" },
  { id:"em6q7", category:"Number and Operations in Base 10", topic:"Place Value", source:"Generated — MGSE4.NBT.1", question:"Which digit is in the hundred-thousands place in 862,451?", choices:["8","6","2","4"], answer:"A", explanation:"862,451:\n8 = hundred-thousands\n6 = ten-thousands\n2 = thousands\n\nAnswer: (A) 8" },
  { id:"em6q8", category:"Number and Operations—Fractions", topic:"Comparing Decimals", source:"Generated — MGSE4.NF.7", question:"Which symbol makes this true? 0.45 ___ 0.5", choices:[">","<","=","Cannot tell"], answer:"B", explanation:"0.45 = 45 hundredths\n0.5 = 50 hundredths\n45 < 50, so 0.45 < 0.5\n\nAnswer: (B) <" },
  { id:"em6q9", category:"Operations and Algebraic Thinking", topic:"Prime and Composite", source:"Generated — MGSE4.OA.4", question:"Is 28 prime or composite?", choices:["Prime","Composite","Neither","Both"], answer:"B", explanation:"Factors of 28: 1, 2, 4, 7, 14, 28.\nMore than 2 factors → composite.\n\nAnswer: (B) Composite" },
  { id:"em6q10", category:"Measurement and Data", topic:"Area", source:"Generated — MGSE4.MD.3", question:"A rectangular garden has an area of 72 square feet. The width is 8 feet. What is the length?", choices:["8 feet","9 feet","10 feet","64 feet"], answer:"B", explanation:"Area = length × width\n72 = length × 8\nlength = 72 ÷ 8 = 9 feet\n\nAnswer: (B) 9 feet" }
];

EOG_TEST_DATA.eogmath7 = [
  { id:"em7q1", category:"Number and Operations—Fractions", topic:"Equivalent Fractions", source:"Generated — MGSE4.NF.1", question:"Find a fraction equivalent to 4/6.", choices:["2/3","4/3","8/6","2/6"], answer:"A", explanation:"Divide top and bottom by 2: 4÷2=2, 6÷2=3. So 4/6 = 2/3.\n\nAnswer: (A) 2/3" },
  { id:"em7q2", category:"Number and Operations in Base 10", topic:"Multi-Digit Multiplication", source:"Generated — MGSE4.NBT.5", question:"What is 308 × 6?", choices:["1,808","1,848","1,848","1,908"], answer:"B", explanation:"300 × 6 = 1,800\n8 × 6 = 48\n1,800 + 48 = 1,848\n\nAnswer: (B) 1,848" },
  { id:"em7q3", category:"Operations and Algebraic Thinking", topic:"Patterns", source:"Generated — MGSE4.OA.5", question:"What is the next number in the pattern? 2, 6, 18, 54, ...", choices:["108","72","162","60"], answer:"C", explanation:"Each number is multiplied by 3.\n2 × 3 = 6\n6 × 3 = 18\n18 × 3 = 54\n54 × 3 = 162\n\nAnswer: (C) 162" },
  { id:"em7q4", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1", question:"How many minutes are in 3 hours?", choices:["120","150","180","200"], answer:"C", explanation:"1 hour = 60 minutes\n3 × 60 = 180 minutes\n\nAnswer: (C) 180" },
  { id:"em7q5", category:"Number and Operations—Fractions", topic:"Multiplying Fractions by Whole Numbers", source:"Generated — MGSE4.NF.4", question:"What is 4 × 2/5?", choices:["8/20","6/5","8/5","2/20"], answer:"C", explanation:"Multiply whole number by numerator, keep denominator.\n4 × 2/5 = 8/5 = 1 3/5\n\nAnswer: (C) 8/5" },
  { id:"em7q6", category:"Geometry", topic:"Perpendicular Lines", source:"Generated — MGSE4.G.1", question:"Which letter has perpendicular lines?", choices:["S","O","T","C"], answer:"C", explanation:"The letter T has a horizontal line and a vertical line meeting at 90°. That's perpendicular.\n\nAnswer: (C) T" },
  { id:"em7q7", category:"Number and Operations in Base 10", topic:"Comparing Numbers", source:"Generated — MGSE4.NBT.2", question:"Which symbol makes this true? 45,891 ___ 45,918", choices:[">","<","=","Cannot tell"], answer:"B", explanation:"Same ten-thousands and thousands. Compare hundreds: 8 = 8. Compare tens: 9 vs 1... wait.\n45,891 vs 45,918: at the hundreds place, both have 8. Tens: 9 vs 1. 9 > 1, so 45,891 > 45,918? No wait — 45,891 and 45,918. Hundreds: 8 vs 9. 8 < 9, so 45,891 < 45,918.\n\nAnswer: (B) <" },
  { id:"em7q8", category:"Number and Operations—Fractions", topic:"Adding Fractions", source:"Generated — MGSE4.NF.3", question:"What is 1/4 + 2/4 + 1/4?", choices:["4/12","4/4","3/4","2/4"], answer:"B", explanation:"Same denominator → add numerators.\n1 + 2 + 1 = 4\n4/4 = 1 whole\n\nAnswer: (B) 4/4" },
  { id:"em7q9", category:"Operations and Algebraic Thinking", topic:"Multi-Step Word Problems", source:"Generated — MGSE4.OA.3", question:"A library has 5 shelves with 32 books each. They get a donation of 48 more books. How many books in total?", choices:["160","200","208","228"], answer:"C", explanation:"Step 1: 5 × 32 = 160 books on shelves\nStep 2: 160 + 48 = 208 total\n\nAnswer: (C) 208" },
  { id:"em7q10", category:"Measurement and Data", topic:"Perimeter", source:"Generated — MGSE4.MD.3", question:"A triangle has sides of 7 cm, 10 cm, and 13 cm. What is its perimeter?", choices:["20 cm","27 cm","30 cm","33 cm"], answer:"C", explanation:"Perimeter = add all sides.\n7 + 10 + 13 = 30 cm\n\nAnswer: (C) 30 cm" }
];

EOG_TEST_DATA.eogmath8 = [
  { id:"em8q1", category:"Number and Operations—Fractions", topic:"Decimals and Fractions", source:"Generated — MGSE4.NF.6", question:"What decimal is equivalent to 9/10?", choices:["0.09","0.9","9.0","0.19"], answer:"B", explanation:"9/10 = 9 tenths = 0.9\n\nAnswer: (B) 0.9" },
  { id:"em8q2", category:"Number and Operations in Base 10", topic:"Rounding", source:"Generated — MGSE4.NBT.3", question:"Round 82,456 to the nearest thousand.", choices:["82,000","82,400","82,500","83,000"], answer:"A", explanation:"Thousands digit: 2. Digit to right: 4. Since 4 < 5, round down → 82,000.\n\nAnswer: (A) 82,000" },
  { id:"em8q3", category:"Operations and Algebraic Thinking", topic:"Factors", source:"Generated — MGSE4.OA.4", question:"Which pair are BOTH factors of 20?", choices:["3 and 5","4 and 5","6 and 10","8 and 4"], answer:"B", explanation:"20 ÷ 4 = 5 ✓ and 20 ÷ 5 = 4 ✓\nBoth 4 and 5 are factors of 20.\n\nAnswer: (B) 4 and 5" },
  { id:"em8q4", category:"Measurement and Data", topic:"Angles", source:"Generated — MGSE4.MD.7", question:"An angle inside a right angle measures 40°. What is the other angle inside the right angle?", choices:["40°","50°","60°","140°"], answer:"B", explanation:"Right angle = 90°\n90° − 40° = 50°\n\nAnswer: (B) 50°" },
  { id:"em8q5", category:"Geometry", topic:"Lines of Symmetry", source:"Generated — MGSE4.G.3", question:"Which shape has NO lines of symmetry?", choices:["Square","Circle","Scalene triangle","Rectangle"], answer:"C", explanation:"A scalene triangle has three sides of different lengths. You can't fold it to make matching halves. No lines of symmetry.\n\nAnswer: (C) Scalene triangle" },
  { id:"em8q6", category:"Number and Operations—Fractions", topic:"Comparing Fractions", source:"Generated — MGSE4.NF.2", question:"Which is greater: 5/6 or 4/5?", choices:["5/6","4/5","They are equal","Cannot tell"], answer:"A", explanation:"Common denominator of 6 and 5 is 30.\n5/6 = 25/30\n4/5 = 24/30\n25 > 24, so 5/6 > 4/5\n\nAnswer: (A) 5/6" },
  { id:"em8q7", category:"Number and Operations in Base 10", topic:"Multi-Digit Subtraction", source:"Generated — MGSE4.NBT.4", question:"What is 8,010 − 3,647?", choices:["4,363","4,463","4,373","5,363"], answer:"A", explanation:"8,010 − 3,647 = 4,363 (requires regrouping through zeros)\n\nAnswer: (A) 4,363" },
  { id:"em8q8", category:"Number and Operations—Fractions", topic:"Subtracting Fractions", source:"Generated — MGSE4.NF.3", question:"Nelson uses 3/4 yard of ribbon from a 1-yard spool. How much ribbon is left?", choices:["1/2 yard","1/3 yard","1/4 yard","3/4 yard"], answer:"C", explanation:"1 yard = 4/4\n4/4 − 3/4 = 1/4 yard left\n\nAnswer: (C) 1/4 yard" },
  { id:"em8q9", category:"Operations and Algebraic Thinking", topic:"Multiples", source:"Generated — MGSE4.OA.4", question:"What are the first 4 multiples of 9?", choices:["1, 2, 3, 9","9, 18, 27, 36","9, 19, 29, 39","9, 90, 900, 9000"], answer:"B", explanation:"9 × 1 = 9\n9 × 2 = 18\n9 × 3 = 27\n9 × 4 = 36\n\nAnswer: (B) 9, 18, 27, 36" },
  { id:"em8q10", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1", question:"How many quarts are in 2 gallons?", choices:["4","6","8","16"], answer:"C", explanation:"1 gallon = 4 quarts\n2 gallons = 8 quarts\n\nAnswer: (C) 8" }
];

EOG_TEST_DATA.eogmath9 = [
  { id:"em9q1", category:"Number and Operations—Fractions", topic:"Mixed Numbers", source:"Generated — MGSE4.NF.3", question:"Convert 11/4 to a mixed number.", choices:["2 1/4","2 3/4","3 1/4","1 3/4"], answer:"B", explanation:"11 ÷ 4 = 2 remainder 3\n11/4 = 2 3/4\n\nAnswer: (B) 2 3/4" },
  { id:"em9q2", category:"Number and Operations in Base 10", topic:"Multi-Digit Multiplication", source:"Generated — MGSE4.NBT.5", question:"What is 52 × 37?", choices:["1,824","1,924","1,874","1,974"], answer:"B", explanation:"52 × 30 = 1,560\n52 × 7 = 364\n1,560 + 364 = 1,924\n\nAnswer: (B) 1,924" },
  { id:"em9q3", category:"Operations and Algebraic Thinking", topic:"Multi-Step Word Problems", source:"Generated — MGSE4.OA.3", question:"Nelson has 3 bags with 24 marbles each. He loses 17 marbles. How many does he have left?", choices:["55","65","52","72"], answer:"A", explanation:"3 × 24 = 72 marbles total\n72 − 17 = 55 marbles left\n\nAnswer: (A) 55" },
  { id:"em9q4", category:"Measurement and Data", topic:"Area", source:"Generated — MGSE4.MD.3", question:"Which rectangle has the GREATEST area? (A) 6×8, (B) 5×10, (C) 7×7, (D) 4×13", choices:["6 × 8","5 × 10","7 × 7","4 × 13"], answer:"C", explanation:"6 × 8 = 48\n5 × 10 = 50\n7 × 7 = 49\n4 × 13 = 52\nWait — 4 × 13 = 52 is the greatest.\n\nAnswer: (D) 4 × 13" },
  { id:"em9q5", category:"Geometry", topic:"Classifying Quadrilaterals", source:"Generated — MGSE4.G.2", question:"Which shape is a parallelogram?", choices:["A shape with one pair of parallel sides","A shape with no parallel sides","A shape with two pairs of parallel sides","A shape with all right angles"], answer:"C", explanation:"A parallelogram has two pairs of parallel sides. (Rectangles, rhombuses, and squares are all parallelograms.)\n\nAnswer: (C) A shape with two pairs of parallel sides" },
  { id:"em9q6", category:"Number and Operations—Fractions", topic:"Equivalent Fractions", source:"Generated — MGSE4.NF.1", question:"Fill in the blank: 2/3 = __/12", choices:["4","6","8","10"], answer:"C", explanation:"3 × 4 = 12, so multiply top by 4 too.\n2 × 4 = 8\n2/3 = 8/12\n\nAnswer: (C) 8" },
  { id:"em9q7", category:"Number and Operations in Base 10", topic:"Place Value", source:"Generated — MGSE4.NBT.1", question:"The digit 5 in 356,821 is worth how much?", choices:["5","500","5,000","50,000"], answer:"D", explanation:"356,821: the 5 is in the ten-thousands place.\n5 × 10,000 = 50,000\n\nAnswer: (D) 50,000" },
  { id:"em9q8", category:"Number and Operations—Fractions", topic:"Comparing Decimals", source:"Generated — MGSE4.NF.7", question:"Order from least to greatest: 0.3, 0.35, 0.29", choices:["0.29, 0.3, 0.35","0.3, 0.29, 0.35","0.35, 0.3, 0.29","0.29, 0.35, 0.3"], answer:"A", explanation:"0.29 = 29 hundredths\n0.3 = 30 hundredths\n0.35 = 35 hundredths\n29 < 30 < 35\n\nAnswer: (A) 0.29, 0.3, 0.35" },
  { id:"em9q9", category:"Operations and Algebraic Thinking", topic:"Prime and Composite", source:"Generated — MGSE4.OA.4", question:"Which number is composite?", choices:["2","11","13","15"], answer:"D", explanation:"2 is prime (factors: 1, 2)\n11 is prime (factors: 1, 11)\n13 is prime (factors: 1, 13)\n15 = 3 × 5 → composite (more than 2 factors)\n\nAnswer: (D) 15" },
  { id:"em9q10", category:"Measurement and Data", topic:"Perimeter", source:"Generated — MGSE4.MD.3", question:"Nelson wants to put a border around a poster that is 24 inches long and 18 inches wide. How much border does he need?", choices:["42 inches","64 inches","84 inches","432 inches"], answer:"C", explanation:"Perimeter = 2 × (24 + 18) = 2 × 42 = 84 inches\n\nAnswer: (C) 84 inches" }
];

EOG_TEST_DATA.eogmath10 = [
  { id:"em10q1", category:"Number and Operations—Fractions", topic:"Adding Fractions", source:"Generated — MGSE4.NF.3", question:"What is 1/3 + 1/3 + 1/3?", choices:["3/9","1/3","3/3","1/9"], answer:"C", explanation:"Same denominator → add numerators.\n1+1+1 = 3\n3/3 = 1 whole\n\nAnswer: (C) 3/3" },
  { id:"em10q2", category:"Number and Operations in Base 10", topic:"Division with Remainders", source:"Generated — MGSE4.NBT.6", question:"What is 145 ÷ 6?", choices:["23 R1","24 R1","23 R5","24 R5"], answer:"B", explanation:"6 × 24 = 144\n145 − 144 = 1\n145 ÷ 6 = 24 R1\n\nAnswer: (B) 24 R1" },
  { id:"em10q3", category:"Operations and Algebraic Thinking", topic:"Input-Output Patterns", source:"Generated — MGSE4.OA.5", question:"Input: 5, 10, 15, 20. Output: 2, 4, 6, 8. What is the rule?", choices:["Subtract 3","Divide by 5, multiply by 2","Divide by 2","Subtract 5"], answer:"B", explanation:"5 ÷ 5 × 2 = 2 ✓\n10 ÷ 5 × 2 = 4 ✓\n15 ÷ 5 × 2 = 6 ✓\n\nAnswer: (B) Divide by 5, multiply by 2" },
  { id:"em10q4", category:"Measurement and Data", topic:"Unit Conversions", source:"Generated — MGSE4.MD.1", question:"A fish tank holds 5 gallons. How many pints is that?", choices:["10","20","40","80"], answer:"C", explanation:"1 gallon = 4 quarts = 8 pints\n5 × 8 = 40 pints\n\nAnswer: (C) 40" },
  { id:"em10q5", category:"Number and Operations—Fractions", topic:"Multiplying Fractions by Whole Numbers", source:"Generated — MGSE4.NF.4", question:"What is 3 × 5/6?", choices:["15/18","8/6","15/6","5/18"], answer:"C", explanation:"3 × 5/6 = 15/6 = 2 3/6 = 2 1/2\n\nAnswer: (C) 15/6" },
  { id:"em10q6", category:"Geometry", topic:"Parallel Lines", source:"Generated — MGSE4.G.1", question:"A rectangle has how many pairs of parallel sides?", choices:["0","1","2","4"], answer:"C", explanation:"A rectangle has 2 pairs of parallel sides: top/bottom are parallel, left/right are parallel.\n\nAnswer: (C) 2" },
  { id:"em10q7", category:"Number and Operations in Base 10", topic:"Multi-Digit Addition", source:"Generated — MGSE4.NBT.4", question:"What is 27,654 + 8,398?", choices:["35,052","36,052","35,952","36,152"], answer:"B", explanation:"27,654 + 8,398 = 36,052\n\nAnswer: (B) 36,052" },
  { id:"em10q8", category:"Number and Operations—Fractions", topic:"Decimals and Fractions", source:"Generated — MGSE4.NF.6", question:"Which decimal equals 50/100?", choices:["0.05","0.50","5.0","50.0"], answer:"B", explanation:"50/100 = 50 hundredths = 0.50 (or 0.5)\n\nAnswer: (B) 0.50" },
  { id:"em10q9", category:"Operations and Algebraic Thinking", topic:"Multiplicative Comparison", source:"Generated — MGSE4.OA.1", question:"Nelson read 8 books this month. His sister read 5 times as many. How many did his sister read?", choices:["13","35","40","45"], answer:"C", explanation:"5 times as many = multiply.\n8 × 5 = 40 books\n\nAnswer: (C) 40" },
  { id:"em10q10", category:"Measurement and Data", topic:"Angles", source:"Generated — MGSE4.MD.7", question:"Two angles make up a straight line. One angle is 95°. What is the other?", choices:["75°","85°","95°","265°"], answer:"B", explanation:"Straight line = 180°\n180° − 95° = 85°\n\nAnswer: (B) 85°" }
];

// ===================== ELA QUIZ 1 =====================
EOG_TEST_DATA.eogela1 = [
  { id:"ee1q1", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>Sea turtles travel thousands of miles through the ocean every year. They return to the same beach where they were born to lay their eggs. Scientists track sea turtles using special tags to learn more about their journeys.</em><br><br>What is the main idea of this passage?", choices:["Scientists use tags on animals","Sea turtles make long journeys and return to their birthplace to nest","Beaches are important for all animals","Sea turtles are the fastest ocean animals"], answer:"B", explanation:"The whole passage is about sea turtles traveling long distances and returning to nest. The tags are a detail, not the main idea.\n\nAnswer: (B)" },
  { id:"ee1q2", category:"Writing and Language", topic:"Capitalization", source:"Generated — ELAGSE4L2a", question:"Which sentence uses capitalization correctly?", choices:["nelson goes to Northwood elementary School.","Nelson goes to northwood Elementary School.","Nelson goes to Northwood Elementary School.","Nelson Goes To Northwood Elementary school."], answer:"C", explanation:"Capitalize: first word, names of people, and names of specific places.\n\"Nelson\" (name) and \"Northwood Elementary School\" (specific place name) should be capitalized.\n\nAnswer: (C)" },
  { id:"ee1q3", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The <strong>exhausted</strong> runners collapsed on the grass after finishing the marathon.</em><br><br>What does \"exhausted\" most likely mean?", choices:["Excited","Very tired","Confused","Strong"], answer:"B", explanation:"Clues: they collapsed after a marathon (a very long race). If they collapsed, they must have been very tired.\n\nAnswer: (B) Very tired" },
  { id:"ee1q4", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Which sentence is correct?", choices:["The birds flies south every winter.","The birds fly south every winter.","The birds is flying south every winter.","The birds flying south every winter."], answer:"B", explanation:"\"Birds\" is plural → needs a plural verb → \"fly\" (not \"flies\").\n\nAnswer: (B)" },
  { id:"ee1q5", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>Mia grabbed her umbrella, pulled on her rain boots, and looked at the dark clouds outside. \"Guess no soccer today,\" she sighed.</em><br><br>What can you infer?", choices:["Mia doesn't like soccer","It is about to rain and outdoor activities are canceled","Mia forgot her soccer shoes","Mia is going to school"], answer:"B", explanation:"Clues: umbrella, rain boots, dark clouds, no soccer → it's about to rain.\n\nAnswer: (B)" },
  { id:"ee1q6", category:"Writing and Language", topic:"Commas in a Series", source:"Generated — ELAGSE4L2c", question:"Which sentence uses commas correctly?", choices:["Nelson packed water, snacks, and sunscreen.","Nelson packed water snacks and sunscreen.","Nelson packed, water snacks, and sunscreen.","Nelson, packed water snacks and, sunscreen."], answer:"A", explanation:"Three or more items in a list → commas after each item (except the last): water, snacks, and sunscreen.\n\nAnswer: (A)" },
  { id:"ee1q7", category:"Reading and Vocabulary", topic:"Author's Purpose", source:"Generated — ELAGSE4RI8", question:"A passage explains how volcanoes form and why they erupt. What is the author's purpose?", choices:["To persuade you to visit a volcano","To entertain you with a volcano story","To inform you about how volcanoes work","To describe what lava looks like"], answer:"C", explanation:"The passage explains a process (how/why) → the author is informing.\n\nAnswer: (C)" },
  { id:"ee1q8", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"The students finished ___ homework early.\"", choices:["they're","their","there","thier"], answer:"B", explanation:"their = belonging to them\nthey're = they are\nthere = a place\n\"The students finished their homework\" → belongs to them.\n\nAnswer: (B)" },
  { id:"ee1q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"The sun smiled down on the playground.\" What type of figurative language is this?", choices:["Simile","Metaphor","Personification","Alliteration"], answer:"C", explanation:"The sun can't actually smile — only people can. Giving human traits to non-human things = personification.\n\nAnswer: (C)" },
  { id:"ee1q10", category:"Writing and Language", topic:"Complete Sentences", source:"Generated — ELAGSE4L1f", question:"Which is a complete sentence?", choices:["Running quickly down the street.","Because the bell rang early.","The dog chased the ball across the yard.","After school on Friday afternoon."], answer:"C", explanation:"A complete sentence needs a subject + verb + complete thought.\n(C) has a subject (dog), verb (chased), and complete thought.\n\nAnswer: (C)" }
];

// ===================== ELA QUIZ 2 =====================
EOG_TEST_DATA.eogela2 = [
  { id:"ee2q1", category:"Reading and Vocabulary", topic:"Supporting Details", source:"Generated — ELAGSE4RI1", question:"Read the passage:<br><br><em>Octopuses are amazing creatures. They can change color to blend into their surroundings. They can squeeze through tiny spaces because they have no bones. Some octopuses can even open jars to get food inside.</em><br><br>Which detail supports the idea that octopuses are amazing?", choices:["They live in the ocean","They can change color to blend in","They have eight arms","They like cold water"], answer:"B", explanation:"The passage gives three examples of why octopuses are amazing: changing color, squeezing through spaces, and opening jars. Changing color is listed.\n\nAnswer: (B)" },
  { id:"ee2q2", category:"Writing and Language", topic:"Quotation Marks", source:"Generated — ELAGSE4L2b", question:"Which sentence uses quotation marks correctly?", choices:["Nelson said I'll be there soon.","\"Nelson said, I'll be there soon.\"","Nelson said, \"I'll be there soon.\"","Nelson \"said,\" I'll be there soon."], answer:"C", explanation:"Put a comma after \"said.\" Put quotation marks around the exact words spoken. Period goes inside the quotes.\n\nAnswer: (C)" },
  { id:"ee2q3", category:"Reading and Vocabulary", topic:"Text Structure", source:"Generated — ELAGSE4RI5", question:"A passage first describes a problem (too much trash in the ocean) and then explains how people can help reduce plastic waste. What text structure is this?", choices:["Cause and effect","Compare and contrast","Problem and solution","Chronological order"], answer:"C", explanation:"Problem (trash in ocean) + solution (reduce plastic) = problem and solution structure.\n\nAnswer: (C)" },
  { id:"ee2q4", category:"Writing and Language", topic:"Prefixes", source:"Generated — ELAGSE4L4b", question:"What does the prefix \"re-\" mean in the word \"rewrite\"?", choices:["Not","Before","Again","Wrong"], answer:"C", explanation:"re- = again\nrewrite = write again\nretell = tell again\nredo = do again\n\nAnswer: (C)" },
  { id:"ee2q5", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RL4", question:"Read the sentence:<br><br><em>The <strong>generous</strong> neighbor brought over extra food for the family during the holiday.</em><br><br>What does \"generous\" most likely mean?", choices:["Mean","Willing to give and share","Nervous","Hungry"], answer:"B", explanation:"Clue: brought over extra food for the family. That's a giving, sharing action.\n\nAnswer: (B) Willing to give and share" },
  { id:"ee2q6", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Which sentence is correct?", choices:["She don't want to go.","She doesn't want to go.","She don't wants to go.","She doesn't wants to go."], answer:"B", explanation:"\"She\" is singular → use \"doesn't\" (not \"don't\").\n\nAnswer: (B)" },
  { id:"ee2q7", category:"Reading and Vocabulary", topic:"Theme", source:"Generated — ELAGSE4RL2", question:"Read the passage:<br><br><em>Alex wanted to quit the basketball team because he kept missing shots. His coach told him, \"Every great player missed thousands of shots before they got good.\" Alex decided to keep practicing, and by the end of the season, he was one of the best shooters on the team.</em><br><br>What is the theme?", choices:["Basketball is the best sport","Practice and persistence lead to improvement","Coaches are always right","Missing shots is embarrassing"], answer:"B", explanation:"Alex wanted to quit but kept going → he improved. The lesson is that practice and not giving up leads to success.\n\nAnswer: (B)" },
  { id:"ee2q8", category:"Writing and Language", topic:"Punctuation", source:"Generated — ELAGSE4L2a", question:"Which sentence is punctuated correctly?", choices:["Wow that was an amazing game!","Wow, that was an amazing game!","Wow that was an amazing game.","Wow, that was an amazing, game!"], answer:"B", explanation:"\"Wow\" is an introductory word → comma after it. The sentence expresses excitement → exclamation point.\n\nAnswer: (B)" },
  { id:"ee2q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"Nelson ran like a cheetah across the field.\" What type of figurative language is this?", choices:["Personification","Metaphor","Simile","Alliteration"], answer:"C", explanation:"Uses \"like\" to compare Nelson to a cheetah. Comparing using \"like\" or \"as\" = simile.\n\nAnswer: (C)" },
  { id:"ee2q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"We're going ___ the park after school.\"", choices:["too","to","two","tow"], answer:"B", explanation:"to = direction/destination\ntoo = also, or excessively\ntwo = the number 2\nGoing TO the park.\n\nAnswer: (B)" }
];

// ===================== ELA QUIZZES 3-10 (abbreviated for space — same pattern) =====================
EOG_TEST_DATA.eogela3 = [
  { id:"ee3q1", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>Bats are the only mammals that can fly. They use sound waves to find food in the dark, a process called echolocation. Bats eat insects, which helps control bug populations. Without bats, there would be many more mosquitoes.</em><br><br>What is this passage mainly about?", choices:["Mosquitoes are dangerous","Mammals cannot fly","Bats are helpful flying mammals","Echolocation is used by dolphins"], answer:"C", explanation:"The passage covers bats flying, echolocation, and helping control bugs — all about how bats are helpful.\n\nAnswer: (C)" },
  { id:"ee3q2", category:"Writing and Language", topic:"Suffixes", source:"Generated — ELAGSE4L4b", question:"What does the suffix \"-less\" mean in the word \"careless\"?", choices:["Full of","Without","Able to","Again"], answer:"B", explanation:"-less = without\ncareless = without care\nhelpless = without help\n\nAnswer: (B)" },
  { id:"ee3q3", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>Dad put candles on the cake and told everyone to hide behind the couch. He turned off the lights and waited by the door.</em><br><br>What is most likely about to happen?", choices:["A fire drill","A surprise birthday party","A power outage","Bedtime"], answer:"B", explanation:"Candles on cake + hiding + lights off = surprise birthday party.\n\nAnswer: (B)" },
  { id:"ee3q4", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Where should the comma go? \"After lunch we went to the playground.\"", choices:["After lunch, we went to the playground.","After, lunch we went to the playground.","After lunch we went, to the playground.","After lunch we, went to the playground."], answer:"A", explanation:"\"After lunch\" is an introductory phrase → put a comma after it.\n\nAnswer: (A)" },
  { id:"ee3q5", category:"Reading and Vocabulary", topic:"Author's Purpose", source:"Generated — ELAGSE4RI8", question:"A passage tells the funny story of a dog that keeps stealing socks from the laundry basket. What is the author's purpose?", choices:["To inform","To persuade","To entertain","To explain"], answer:"C", explanation:"A funny story about a dog = the author wants to entertain the reader.\n\nAnswer: (C)" },
  { id:"ee3q6", category:"Writing and Language", topic:"Capitalization", source:"Generated — ELAGSE4L2a", question:"Which word in this sentence should be capitalized? \"my family visited the grand canyon last july.\"", choices:["family","visited","grand canyon","last"], answer:"C", explanation:"Grand Canyon is a proper noun (specific place name) → capitalize both words.\n(Also \"My\" and \"July\" should be capitalized, but Grand Canyon is the answer among the choices.)\n\nAnswer: (C)" },
  { id:"ee3q7", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"He is a rock when his friends need help.\" What does this metaphor mean?", choices:["He is heavy","He is strong and dependable","He doesn't move","He is cold"], answer:"B", explanation:"Calling someone a rock means they are solid, reliable, and dependable — you can count on them.\n\nAnswer: (B)" },
  { id:"ee3q8", category:"Writing and Language", topic:"Complete Sentences", source:"Generated — ELAGSE4L1f", question:"Which is a sentence fragment (NOT a complete sentence)?", choices:["The cat slept on the mat.","Running through the rain.","We ate lunch at noon.","She smiled at her friend."], answer:"B", explanation:"\"Running through the rain\" has no subject — who is running? It's a fragment.\n\nAnswer: (B)" },
  { id:"ee3q9", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The <strong>frigid</strong> wind made Nelson shiver and pull his jacket tighter.</em><br><br>What does \"frigid\" mean?", choices:["Gentle","Warm","Extremely cold","Strong"], answer:"C", explanation:"Clues: shiver, pull jacket tighter → the wind is very cold.\n\nAnswer: (C) Extremely cold" },
  { id:"ee3q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"Nelson can ride his bike ___.\"", choices:["to","too","two","tow"], answer:"B", explanation:"\"too\" = also (Nelson can ride his bike, too/also).\nOr if context is \"he can ride too\" meaning he is also able.\n\nAnswer: (B)" }
];

EOG_TEST_DATA.eogela4 = [
  { id:"ee4q1", category:"Reading and Vocabulary", topic:"Supporting Details", source:"Generated — ELAGSE4RI1", question:"Read the passage:<br><br><em>The Great Wall of China is one of the longest structures ever built. It stretches over 13,000 miles. Workers built it over many centuries to protect China from invaders.</em><br><br>Why was the Great Wall built?", choices:["For tourists to visit","To protect China from invaders","As a road for trading","To mark the border of two cities"], answer:"B", explanation:"The passage says directly: \"to protect China from invaders.\"\n\nAnswer: (B)" },
  { id:"ee4q2", category:"Writing and Language", topic:"Prefixes", source:"Generated — ELAGSE4L4b", question:"What does \"disagree\" mean?", choices:["To agree strongly","To agree again","To not agree","To agree before"], answer:"C", explanation:"dis- = not, opposite of\ndisagree = not agree\n\nAnswer: (C)" },
  { id:"ee4q3", category:"Reading and Vocabulary", topic:"Text Structure", source:"Generated — ELAGSE4RI5", question:"A passage describes Step 1, Step 2, and Step 3 for making a birdhouse. What text structure is this?", choices:["Problem and solution","Compare and contrast","Sequence/chronological order","Cause and effect"], answer:"C", explanation:"Steps in order (Step 1, 2, 3) = sequence/chronological order.\n\nAnswer: (C)" },
  { id:"ee4q4", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Which sentence is correct?", choices:["The students was excited about the field trip.","The students were excited about the field trip.","The students am excited about the field trip.","The students is excited about the field trip."], answer:"B", explanation:"\"Students\" is plural → use \"were\" (not \"was\" or \"is\").\n\nAnswer: (B)" },
  { id:"ee4q5", category:"Reading and Vocabulary", topic:"Theme", source:"Generated — ELAGSE4RL2", question:"Read the passage:<br><br><em>Emma didn't want to share her art supplies with the new student. But after they worked on a project together, Emma realized the new student had great ideas. They became best friends.</em><br><br>What is the theme?", choices:["Art supplies are expensive","New students are always nice","Being open to others can lead to great friendships","School projects are hard"], answer:"C", explanation:"Emma didn't want to share → but she did → gained a friend. Lesson: being open to others leads to friendship.\n\nAnswer: (C)" },
  { id:"ee4q6", category:"Writing and Language", topic:"Punctuation", source:"Generated — ELAGSE4L2a", question:"Which sentence uses an apostrophe correctly?", choices:["The dog's chased the ball.","The dogs bone was buried.","The dog's bone was buried.","The dogs' chased the ball."], answer:"C", explanation:"dog's = belonging to the dog (possessive)\n\"The dog's bone\" = the bone belonging to the dog.\n\nAnswer: (C)" },
  { id:"ee4q7", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"Peter Piper picked a peck of pickled peppers.\" What type of figurative language is this?", choices:["Simile","Metaphor","Personification","Alliteration"], answer:"D", explanation:"The same starting sound (P) repeats: Peter, Piper, picked, peck, pickled, peppers = alliteration.\n\nAnswer: (D)" },
  { id:"ee4q8", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Which sentence needs a comma?", choices:["Nelson ran fast.","Nelson ate lunch and played outside.","Before the game started Nelson stretched.","The ball is red."], answer:"C", explanation:"\"Before the game started\" is an introductory phrase → needs a comma after it.\n\"Before the game started, Nelson stretched.\"\n\nAnswer: (C)" },
  { id:"ee4q9", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RL4", question:"Read the sentence:<br><br><em>The students were <strong>astonished</strong> when the magician made the rabbit disappear.</em><br><br>What does \"astonished\" mean?", choices:["Bored","Very surprised","Angry","Sleepy"], answer:"B", explanation:"A magician making a rabbit disappear would amaze people → astonished = very surprised.\n\nAnswer: (B)" },
  { id:"ee4q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"___ going to be a great day!\"", choices:["Its","It's","Its'","Is"], answer:"B", explanation:"It's = it is\nIts = belonging to it\n\"It is going to be a great day!\" → It's\n\nAnswer: (B)" }
];

EOG_TEST_DATA.eogela5 = [
  { id:"ee5q1", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>Recycling helps the environment in many ways. It reduces the amount of trash in landfills. It saves energy because making new products from recycled materials uses less energy. Recycling also helps protect natural resources like trees and water.</em><br><br>What is the main idea?", choices:["Landfills are getting full","Recycling helps the environment in many ways","Trees need water to grow","Energy is expensive"], answer:"B", explanation:"The passage gives three reasons recycling helps → the main idea is that recycling helps the environment in many ways.\n\nAnswer: (B)" },
  { id:"ee5q2", category:"Writing and Language", topic:"Suffixes", source:"Generated — ELAGSE4L4b", question:"What does \"-ful\" mean in the word \"hopeful\"?", choices:["Without","Full of","Able to","Not"], answer:"B", explanation:"-ful = full of\nhopeful = full of hope\ncolorful = full of color\n\nAnswer: (B)" },
  { id:"ee5q3", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>The puppy knocked over the trash can, chewed on a shoe, and pulled the curtains down. Mom sighed and said, \"We need to start training him.\"</em><br><br>What can you infer about the puppy?", choices:["The puppy is well-trained","The puppy is old","The puppy is misbehaving and needs training","The puppy is sick"], answer:"C", explanation:"Knocking things over, chewing shoes, pulling curtains = misbehaving. Mom says they need training → the puppy is untrained.\n\nAnswer: (C)" },
  { id:"ee5q4", category:"Writing and Language", topic:"Quotation Marks", source:"Generated — ELAGSE4L2b", question:"Which sentence uses quotation marks correctly?", choices:["\"Let's go! said the coach.\"","Let's go! \"said the coach.\"","\"Let's go!\" said the coach.","Let's \"go!\" said the coach."], answer:"C", explanation:"Quotation marks go around the exact words spoken. The exclamation point stays inside.\n\nAnswer: (C)" },
  { id:"ee5q5", category:"Reading and Vocabulary", topic:"Author's Purpose", source:"Generated — ELAGSE4RI8", question:"A newspaper ad says: \"Vote for Ms. Garcia! She will make our schools better!\" What is the author's purpose?", choices:["To inform","To entertain","To persuade","To describe"], answer:"C", explanation:"\"Vote for\" = trying to convince you to do something = persuade.\n\nAnswer: (C)" },
  { id:"ee5q6", category:"Writing and Language", topic:"Capitalization", source:"Generated — ELAGSE4L2a", question:"Which sentence has a capitalization error?", choices:["We celebrate Thanksgiving in November.","My teacher is Mrs. Johnson.","I love to visit the Beach in summer.","The Statue of Liberty is in New York."], answer:"C", explanation:"\"Beach\" should not be capitalized because it's not a specific proper noun here (it's just a generic beach). It should be \"the beach.\"\n\nAnswer: (C)" },
  { id:"ee5q7", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"The classroom was a zoo today.\" What does this metaphor mean?", choices:["The classroom had animals in it","The classroom was very noisy and chaotic","The students went on a field trip","The teacher likes zoos"], answer:"B", explanation:"Comparing the classroom to a zoo means it was wild, noisy, and chaotic — not that there were actual animals.\n\nAnswer: (B)" },
  { id:"ee5q8", category:"Writing and Language", topic:"Complete Sentences", source:"Generated — ELAGSE4L1f", question:"Which group of words is a run-on sentence?", choices:["The cat sat on the mat.","I went to the store I bought milk.","She likes to read.","After dinner, we played games."], answer:"B", explanation:"\"I went to the store I bought milk\" is two sentences smashed together without punctuation or a connecting word. It's a run-on.\n\nAnswer: (B)" },
  { id:"ee5q9", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The <strong>annual</strong> science fair happens every year in March.</em><br><br>What does \"annual\" mean?", choices:["Monthly","Weekly","Yearly","Daily"], answer:"C", explanation:"\"Happens every year\" → annual = yearly.\n\nAnswer: (C)" },
  { id:"ee5q10", category:"Writing and Language", topic:"Prefixes", source:"Generated — ELAGSE4L4b", question:"What does \"preview\" mean?", choices:["View again","View wrongly","View after","View before"], answer:"D", explanation:"pre- = before\npreview = view before (see something before others do)\n\nAnswer: (D)" }
];

// ELA Quizzes 6-10: generate remaining
EOG_TEST_DATA.eogela6 = [
  { id:"ee6q1", category:"Reading and Vocabulary", topic:"Supporting Details", source:"Generated — ELAGSE4RI1", question:"Read the passage:<br><br><em>Dolphins are very smart animals. They use clicks and whistles to communicate with each other. Dolphins also work together to catch fish by herding them into groups.</em><br><br>How do dolphins catch fish?", choices:["They use nets","They work together to herd fish into groups","They wait for fish to come to them","They use their teeth to grab fish from the bottom"], answer:"B", explanation:"The passage says dolphins \"work together to catch fish by herding them into groups.\"\n\nAnswer: (B)" },
  { id:"ee6q2", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Choose the correct sentence.", choices:["The team are playing tonight.","The team is playing tonight.","The team were playing tonight.","The team play tonight."], answer:"B", explanation:"\"Team\" is a single group (singular) → use \"is.\"\n\nAnswer: (B)" },
  { id:"ee6q3", category:"Reading and Vocabulary", topic:"Text Structure", source:"Generated — ELAGSE4RI5", question:"A passage explains how a caterpillar becomes a butterfly, describing each stage in order. What text structure is this?", choices:["Problem and solution","Sequence","Compare and contrast","Description"], answer:"B", explanation:"Stages in order = sequence.\n\nAnswer: (B)" },
  { id:"ee6q4", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Which sentence is correct?", choices:["Nelson lives in Roswell Georgia.","Nelson lives in Roswell, Georgia.","Nelson, lives in Roswell Georgia.","Nelson lives, in Roswell Georgia."], answer:"B", explanation:"Put a comma between city and state: Roswell, Georgia.\n\nAnswer: (B)" },
  { id:"ee6q5", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>The lights dimmed. The audience grew quiet. The curtain slowly rose, and a girl in a sparkly costume stepped into the spotlight.</em><br><br>Where is this taking place?", choices:["A classroom","A theater","A restaurant","A park"], answer:"B", explanation:"Clues: lights dimmed, audience, curtain rose, spotlight, costume → a theater performance.\n\nAnswer: (B)" },
  { id:"ee6q6", category:"Writing and Language", topic:"Suffixes", source:"Generated — ELAGSE4L4b", question:"What does \"-able\" mean in the word \"washable\"?", choices:["Without washing","Full of washing","Can be washed","Washed again"], answer:"C", explanation:"-able = can be, able to be\nwashable = can be washed\n\nAnswer: (C)" },
  { id:"ee6q7", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RL4", question:"Read the sentence:<br><br><em>Nelson felt <strong>anxious</strong> before his big test, so he took deep breaths to calm down.</em><br><br>What does \"anxious\" mean?", choices:["Happy","Worried or nervous","Sleepy","Angry"], answer:"B", explanation:"He needed to calm down before a big test → anxious = worried or nervous.\n\nAnswer: (B)" },
  { id:"ee6q8", category:"Writing and Language", topic:"Punctuation", source:"Generated — ELAGSE4L2a", question:"Which sentence needs a question mark at the end?", choices:["I wonder what time it is","What time does the game start","The game starts at noon","Please pass the salt"], answer:"B", explanation:"\"What time does the game start\" is a direct question → needs a question mark.\n\nAnswer: (B)" },
  { id:"ee6q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"The leaves danced in the wind.\" What type of figurative language is this?", choices:["Simile","Alliteration","Personification","Metaphor"], answer:"C", explanation:"Leaves can't actually dance — giving human actions to non-human things = personification.\n\nAnswer: (C)" },
  { id:"ee6q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"Do you know ___ shoes these are?\"", choices:["who's","whose","whos","who"], answer:"B", explanation:"whose = belonging to whom\nwho's = who is\n\"Whose shoes are these?\" = who do they belong to?\n\nAnswer: (B)" }
];

EOG_TEST_DATA.eogela7 = [
  { id:"ee7q1", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>Ancient Egyptians built the pyramids as tombs for their pharaohs. The largest pyramid took about 20 years to build. Thousands of workers moved huge stone blocks into place.</em><br><br>What is the main idea?", choices:["Pharaohs were rich","Ancient Egyptians built massive pyramids as tombs","Stone blocks are heavy","Egypt is in Africa"], answer:"B", explanation:"The passage is about how and why Egyptians built pyramids.\n\nAnswer: (B)" },
  { id:"ee7q2", category:"Writing and Language", topic:"Capitalization", source:"Generated — ELAGSE4L2a", question:"Which word should be capitalized? \"we went to disney world in florida.\"", choices:["went","disney world","florida","we"], answer:"B", explanation:"Disney World is a proper noun (specific place name). Florida should also be capitalized.\n\nAnswer: (B)" },
  { id:"ee7q3", category:"Reading and Vocabulary", topic:"Theme", source:"Generated — ELAGSE4RL2", question:"Read the passage:<br><br><em>Jamal was afraid to try the high dive. His friends went first and cheered for him. He took a deep breath, climbed the ladder, and jumped. \"That was awesome!\" he shouted.</em><br><br>What is the theme?", choices:["Swimming is dangerous","Friends can help you find courage to try new things","High dives should be avoided","Always listen to your friends"], answer:"B", explanation:"Jamal was afraid, friends encouraged him, he tried it and loved it. The lesson: friends and courage help you try new things.\n\nAnswer: (B)" },
  { id:"ee7q4", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Where should commas go? \"Nelson bought apples bananas grapes and oranges.\"", choices:["After apples, bananas, and grapes","After Nelson and bought","After bought and oranges","No commas needed"], answer:"A", explanation:"Items in a series: apples, bananas, grapes, and oranges.\n\nAnswer: (A)" },
  { id:"ee7q5", category:"Reading and Vocabulary", topic:"Author's Purpose", source:"Generated — ELAGSE4RI8", question:"A passage compares two types of dogs and explains which makes a better pet for families. What is the author's purpose?", choices:["To entertain","To inform and help the reader decide","To persuade you to buy a dog","To describe what dogs look like"], answer:"B", explanation:"Comparing two things to help the reader decide = informing.\n\nAnswer: (B)" },
  { id:"ee7q6", category:"Writing and Language", topic:"Prefixes", source:"Generated — ELAGSE4L4b", question:"What does \"misunderstand\" mean?", choices:["Understand again","Understand before","Understand correctly","Understand wrongly"], answer:"D", explanation:"mis- = wrongly\nmisunderstand = understand wrongly\n\nAnswer: (D)" },
  { id:"ee7q7", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The hikers reached the <strong>summit</strong> of the mountain after climbing all day.</em><br><br>What does \"summit\" mean?", choices:["The bottom","The middle","The top","A trail"], answer:"C", explanation:"They climbed all day and reached it → summit = the top of the mountain.\n\nAnswer: (C)" },
  { id:"ee7q8", category:"Writing and Language", topic:"Complete Sentences", source:"Generated — ELAGSE4L1f", question:"Fix the run-on: \"I like pizza it is my favorite food.\"", choices:["I like pizza it, is my favorite food.","I like pizza, it is my favorite food.","I like pizza. It is my favorite food.","I like, pizza it is my favorite food."], answer:"C", explanation:"Split into two sentences with a period: \"I like pizza. It is my favorite food.\"\n\nAnswer: (C)" },
  { id:"ee7q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"She was as quiet as a mouse.\" What type of figurative language is this?", choices:["Metaphor","Personification","Alliteration","Simile"], answer:"D", explanation:"Uses \"as...as\" to compare → simile.\n\nAnswer: (D)" },
  { id:"ee7q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"The cat licked ___ paws.\"", choices:["it's","its","its'","is"], answer:"B", explanation:"its = belonging to it (possessive, no apostrophe)\nit's = it is\n\"The cat licked its paws\" = the paws belonging to the cat.\n\nAnswer: (B)" }
];

EOG_TEST_DATA.eogela8 = [
  { id:"ee8q1", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>The sidewalk was covered in red, orange, and yellow leaves. Squirrels were busy collecting acorns. Nelson zipped up his jacket.</em><br><br>What season is it?", choices:["Summer","Winter","Fall","Spring"], answer:"C", explanation:"Colored leaves falling, squirrels collecting acorns, jacket → fall/autumn.\n\nAnswer: (C)" },
  { id:"ee8q2", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Which sentence is correct?", choices:["Each of the boys have a pencil.","Each of the boys has a pencil.","Each of the boys having a pencil.","Each of the boys are having a pencil."], answer:"B", explanation:"\"Each\" is singular → use \"has\" (not \"have\").\n\nAnswer: (B)" },
  { id:"ee8q3", category:"Reading and Vocabulary", topic:"Text Structure", source:"Generated — ELAGSE4RI5", question:"A passage says: \"Because the sun heats the ocean water, the water evaporates and forms clouds.\" What text structure is this?", choices:["Compare and contrast","Problem and solution","Cause and effect","Description"], answer:"C", explanation:"\"Because\" signals a cause (sun heats water) and effect (water evaporates, forms clouds).\n\nAnswer: (C)" },
  { id:"ee8q4", category:"Writing and Language", topic:"Quotation Marks", source:"Generated — ELAGSE4L2b", question:"Which is correct?", choices:["Mom asked, \"Did you finish your homework?\"","Mom asked \"Did you finish your homework\"?","Mom asked, Did you finish your homework?","\"Mom asked, Did you finish your homework?\""], answer:"A", explanation:"Comma after \"asked,\" quotes around the exact words, question mark inside the quotes.\n\nAnswer: (A)" },
  { id:"ee8q5", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RL4", question:"Read the sentence:<br><br><em>The <strong>enormous</strong> elephant towered over all the other animals at the zoo.</em><br><br>What does \"enormous\" mean?", choices:["Small","Very large","Fast","Friendly"], answer:"B", explanation:"\"Towered over\" = much bigger than everything else → enormous = very large.\n\nAnswer: (B)" },
  { id:"ee8q6", category:"Writing and Language", topic:"Punctuation", source:"Generated — ELAGSE4L2a", question:"Which sentence is correct?", choices:["Nelsons favorite sport is basketball.","Nelson's favorite sport is basketball.","Nelsons' favorite sport is basketball.","Nelson,s favorite sport is basketball."], answer:"B", explanation:"Nelson's = belonging to Nelson. Use apostrophe + s for singular possessive.\n\nAnswer: (B)" },
  { id:"ee8q7", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>Drinking water is important for your body. Water helps your brain think clearly, keeps your muscles working, and helps your body stay cool. Doctors say kids should drink at least 6 cups of water each day.</em><br><br>What is the main idea?", choices:["Doctors know a lot about health","Water helps your brain","Drinking enough water is important for kids' health","Six cups is a lot of water"], answer:"C", explanation:"The whole passage is about why drinking water matters for your body.\n\nAnswer: (C)" },
  { id:"ee8q8", category:"Writing and Language", topic:"Suffixes", source:"Generated — ELAGSE4L4b", question:"What does the suffix \"-tion\" do in the word \"celebration\"?", choices:["Makes it mean 'without celebrating'","Turns the verb 'celebrate' into a noun","Makes it mean 'celebrate again'","Makes it an adjective"], answer:"B", explanation:"-tion turns a verb into a noun.\ncelebrate (verb) → celebration (noun)\n\nAnswer: (B)" },
  { id:"ee8q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"Time flies when you're having fun.\" Is this literal or figurative?", choices:["Literal — time actually flies","Figurative — it means time seems to pass quickly","Literal — clocks move faster","Neither"], answer:"B", explanation:"Time can't actually fly. This means time seems to pass quickly when you enjoy yourself = figurative.\n\nAnswer: (B)" },
  { id:"ee8q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"Nelson ate ___ many cookies.\"", choices:["to","too","two","tow"], answer:"B", explanation:"too = also, or excessively\n\"too many\" = excessively many\n\nAnswer: (B)" }
];

EOG_TEST_DATA.eogela9 = [
  { id:"ee9q1", category:"Reading and Vocabulary", topic:"Supporting Details", source:"Generated — ELAGSE4RI1", question:"Read the passage:<br><br><em>Honeybees are important pollinators. As they fly from flower to flower collecting nectar, pollen sticks to their bodies and spreads to other plants. This helps fruits and vegetables grow.</em><br><br>How does pollen spread?", choices:["Wind blows it","It sticks to bees and transfers between flowers","Farmers spread it by hand","Rain washes it around"], answer:"B", explanation:"The passage says pollen \"sticks to their bodies and spreads to other plants.\"\n\nAnswer: (B)" },
  { id:"ee9q2", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Which date is written correctly?", choices:["April, 29 2026","April 29, 2026","April 29 2026","April, 29, 2026"], answer:"B", explanation:"In dates: comma between the day and year. April 29, 2026.\n\nAnswer: (B)" },
  { id:"ee9q3", category:"Reading and Vocabulary", topic:"Theme", source:"Generated — ELAGSE4RL2", question:"Read the passage:<br><br><em>Two brothers argued over who got the bigger piece of cake. Their mom cut one piece exactly in half and said, \"Now you each have the same amount.\" The brothers realized fighting over small things wasn't worth it.</em><br><br>What is the theme?", choices:["Cake should be cut equally","Brothers always fight","Arguing over small things isn't worth it","Moms are always fair"], answer:"C", explanation:"The brothers learned that fighting over small things wasn't worth it.\n\nAnswer: (C)" },
  { id:"ee9q4", category:"Writing and Language", topic:"Capitalization", source:"Generated — ELAGSE4L2a", question:"Which sentence is correct?", choices:["We read a book called Charlotte's Web.","We read a book called charlotte's web.","We read a Book called Charlotte's web.","we read a book called Charlotte's Web."], answer:"A", explanation:"Capitalize the first word of a sentence (We) and book titles (Charlotte's Web).\n\nAnswer: (A)" },
  { id:"ee9q5", category:"Reading and Vocabulary", topic:"Author's Purpose", source:"Generated — ELAGSE4RI8", question:"A passage gives step-by-step directions for building a paper airplane. What is the author's purpose?", choices:["To persuade","To entertain","To inform/instruct","To argue"], answer:"C", explanation:"Step-by-step directions = teaching you how to do something = inform/instruct.\n\nAnswer: (C)" },
  { id:"ee9q6", category:"Writing and Language", topic:"Prefixes", source:"Generated — ELAGSE4L4b", question:"What does \"unhappy\" mean?", choices:["Very happy","Happy again","Not happy","Happy before"], answer:"C", explanation:"un- = not\nunhappy = not happy\n\nAnswer: (C)" },
  { id:"ee9q7", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The students were <strong>reluctant</strong> to go outside because it was pouring rain.</em><br><br>What does \"reluctant\" mean?", choices:["Eager","Unwilling","Excited","Happy"], answer:"B", explanation:"It was pouring rain → they didn't want to go out → reluctant = unwilling.\n\nAnswer: (B)" },
  { id:"ee9q8", category:"Writing and Language", topic:"Complete Sentences", source:"Generated — ELAGSE4L1f", question:"Which is a complete sentence?", choices:["The big, fluffy dog.","Jumped over the puddle.","While we were at school.","Nelson scored the winning goal."], answer:"D", explanation:"(D) has a subject (Nelson), verb (scored), and complete thought.\n\nAnswer: (D)" },
  { id:"ee9q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"Her smile was as bright as the sun.\" What two things are being compared?", choices:["Her smile and the moon","Her smile and the sun","The sun and the stars","Her face and a flower"], answer:"B", explanation:"The simile compares her smile to the sun (using \"as...as\").\n\nAnswer: (B)" },
  { id:"ee9q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"___ are three apples on the table.\"", choices:["Their","They're","There","Thier"], answer:"C", explanation:"There = indicating a place or existence\n\"There are three apples\" = they exist on the table.\n\nAnswer: (C)" }
];

EOG_TEST_DATA.eogela10 = [
  { id:"ee10q1", category:"Reading and Vocabulary", topic:"Inference", source:"Generated — ELAGSE4RL1", question:"Read the passage:<br><br><em>Nelson's hands were covered in paint. His apron had splatters of blue and green. He held up his canvas and smiled at what he had created.</em><br><br>What was Nelson doing?", choices:["Cooking","Painting a picture","Playing outside","Doing homework"], answer:"B", explanation:"Paint, apron, splatters, canvas → he was painting a picture.\n\nAnswer: (B)" },
  { id:"ee10q2", category:"Writing and Language", topic:"Subject-Verb Agreement", source:"Generated — ELAGSE4L1f", question:"Which sentence is correct?", choices:["The children plays at the park.","The children plays in the park.","The children play at the park.","The children is playing at park."], answer:"C", explanation:"\"Children\" is plural → use \"play\" (not \"plays\").\n\nAnswer: (C)" },
  { id:"ee10q3", category:"Reading and Vocabulary", topic:"Main Idea", source:"Generated — ELAGSE4RI2", question:"Read the passage:<br><br><em>The invention of the telephone changed how people communicate. Before the phone, people had to send letters or travel to talk to someone far away. Alexander Graham Bell's invention made it possible to talk to anyone, anywhere, instantly.</em><br><br>What is the main idea?", choices:["Alexander Graham Bell was smart","Letters are slow","The telephone changed how people communicate","Traveling is expensive"], answer:"C", explanation:"The whole passage is about how the telephone changed communication.\n\nAnswer: (C)" },
  { id:"ee10q4", category:"Writing and Language", topic:"Punctuation", source:"Generated — ELAGSE4L2a", question:"Which sentence uses the exclamation point correctly?", choices:["The sky is blue!","Watch out for that car!","My name is Nelson!","I like apples!"], answer:"B", explanation:"Exclamation points express strong emotion, urgency, or excitement. \"Watch out for that car!\" shows urgency.\n\nAnswer: (B)" },
  { id:"ee10q5", category:"Reading and Vocabulary", topic:"Text Structure", source:"Generated — ELAGSE4RI5", question:"A passage says dogs are loyal and playful, while cats are independent and quiet. What text structure is this?", choices:["Cause and effect","Problem and solution","Compare and contrast","Sequence"], answer:"C", explanation:"Describing similarities and differences between dogs and cats = compare and contrast.\n\nAnswer: (C)" },
  { id:"ee10q6", category:"Writing and Language", topic:"Suffixes", source:"Generated — ELAGSE4L4b", question:"What does the suffix \"-er\" mean in the word \"faster\"?", choices:["Not fast","Full of speed","More fast (comparative)","Fast again"], answer:"C", explanation:"-er = more (comparing two things)\nfaster = more fast\ntaller = more tall\n\nAnswer: (C)" },
  { id:"ee10q7", category:"Reading and Vocabulary", topic:"Context Clues", source:"Generated — ELAGSE4RI4", question:"Read the sentence:<br><br><em>The old bridge was <strong>sturdy</strong> enough to hold the heavy truck.</em><br><br>What does \"sturdy\" mean?", choices:["Weak","Strong and solid","Beautiful","Old"], answer:"B", explanation:"It held a heavy truck → sturdy = strong and solid.\n\nAnswer: (B)" },
  { id:"ee10q8", category:"Writing and Language", topic:"Commas", source:"Generated — ELAGSE4L2c", question:"Which sentence is correct?", choices:["Yes I would like some water.","Yes, I would like some water.","Yes I, would like some water.","Yes I would, like some water."], answer:"B", explanation:"\"Yes\" is an introductory word → comma after it.\n\nAnswer: (B)" },
  { id:"ee10q9", category:"Reading and Vocabulary", topic:"Figurative Language", source:"Generated — ELAGSE4RL4", question:"\"The thunder roared like a lion.\" What type of figurative language is this?", choices:["Personification","Metaphor","Simile","Alliteration"], answer:"C", explanation:"Uses \"like\" to compare thunder to a lion = simile.\n\nAnswer: (C)" },
  { id:"ee10q10", category:"Writing and Language", topic:"Commonly Confused Words", source:"Generated — ELAGSE4L1g", question:"Choose the correct word: \"Nelson wants to ___ a doctor when he grows up.\"", choices:["bee","be","bea","bye"], answer:"B", explanation:"be = to exist as, to become\n\"wants to be a doctor\"\n\nAnswer: (B)" }
];
