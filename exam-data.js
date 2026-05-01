// ============================================================
// Extended Exam Data — Full SSAT simulation
// Four exams: exam30, exam60, exam30b, exam60b
// Sections: Verbal, Reading, Quantitative
// ============================================================

var EXAM_PASSAGES = {

// ---- EXAM 30 PASSAGES ----

p1: {
  id: 'p1',
  genre: 'Fiction',
  text: 'Marcus had always been the smallest kid on the basketball team. At tryouts last spring, the coach almost cut him before giving him one more chance. Marcus spent the entire summer in his driveway, shooting free throws until the streetlights came on. He worked on his crossover, his pull-up jumper, and most importantly, his confidence.\n\nWhen the season opener arrived, Marcus sat on the bench for the first quarter. The starting point guard picked up two quick fouls, and the coach looked down the bench. "Marcus, you\'re in." His heart hammered as he checked into the game.\n\nThe first time he touched the ball, a defender twice his size trapped him in the corner. Marcus hesitated, then remembered all those summer evenings. He executed a crisp crossover, drove the lane, and dished to the center for an easy layup. The crowd erupted.\n\nBy the fourth quarter, Marcus had six assists and zero turnovers. He wasn\'t the leading scorer, but he controlled the tempo of the entire game. After the final buzzer, the coach pulled him aside. "Size doesn\'t determine your ceiling, Marcus. Preparation does."\n\nMarcus smiled, understanding for the first time that the long summer hadn\'t just improved his game — it had proven something to himself.'
},

p2: {
  id: 'p2',
  genre: 'Science',
  text: 'Coral reefs are sometimes called "the rainforests of the sea" because of the incredible biodiversity they support. Although they cover less than one percent of the ocean floor, coral reefs are home to approximately 25 percent of all marine species. This remarkable concentration of life depends on a partnership between coral animals and tiny algae called zooxanthellae.\n\nCorals are actually colonies of small animals called polyps. Each polyp secretes a hard limestone skeleton, and over time, these skeletons build up to form the reef structure. Living inside the tissue of each polyp are millions of zooxanthellae, which use sunlight to produce food through photosynthesis. The corals provide the algae with shelter and nutrients, while the algae supply up to 90 percent of the coral\'s energy needs.\n\nThis partnership is highly sensitive to temperature changes. When ocean water gets too warm — even by just one or two degrees Celsius — the corals expel their zooxanthellae, turning white in a process called bleaching. Without their algae partners, corals begin to starve. If normal temperatures return quickly, the algae can recolonize the coral. But prolonged warming leads to coral death and the collapse of the entire reef ecosystem.\n\nScientists monitoring the Great Barrier Reef have documented six mass bleaching events since 1998, with the most severe occurring in consecutive years.'
},

// ---- EXAM 60 PASSAGES ----

p3: {
  id: 'p3',
  genre: 'Social Studies',
  text: 'In the 1920s and 1930s, a cultural movement swept through the Harlem neighborhood of New York City that would transform American art, literature, and music. Known as the Harlem Renaissance, this explosion of creativity gave voice to African American experiences and challenged the stereotypes that had long defined Black people in American culture.\n\nThe movement\'s roots lay in the Great Migration, when millions of African Americans moved from the rural South to northern cities between 1910 and 1970, seeking better economic opportunities and escape from racial violence. Harlem became a destination for Black professionals, artists, and intellectuals. The concentrated talent and shared experiences created favorable conditions for artistic innovation.\n\nWriters like Langston Hughes and Zora Neale Hurston crafted works that celebrated Black culture and identity while confronting racism. Hughes\'s poetry captured the rhythms of jazz and blues, and his famous essay "The Negro Artist and the Racial Mountain" declared that Black artists should express themselves freely without seeking outside approval.\n\nMusicians like Duke Ellington and Louis Armstrong developed jazz into a sophisticated art form that attracted audiences across racial lines. The Cotton Club and the Savoy Ballroom became legendary venues where music connected people, even in an era of strict segregation.\n\nThe Harlem Renaissance didn\'t end racial inequality, but it established that African American culture was a vital and original force in American life — a legacy that continues to influence artists today.'
},

p4: {
  id: 'p4',
  genre: 'Humanities',
  text: 'In the summer of 1973, a Jamaican-born teenager named Clive Campbell — known as DJ Kool Herc — hosted a back-to-school party in the recreation room of his apartment building at 1520 Sedgwick Avenue in the Bronx, New York. Using two turntables, he isolated and extended the instrumental breaks in funk and soul records, creating a continuous loop of rhythm that kept partygoers dancing. This technique, which he called the "Merry-Go-Round," is widely considered the origin of hip-hop.\n\nFrom those block parties, four distinct elements emerged: DJing, MCing (rapping), breaking (dance), and graffiti art. Each element gave young people in the Bronx — many from communities that had been hit hard by poverty and neglect — a means of creative expression that required minimal equipment. All you needed was a turntable, a microphone, a cardboard mat, or a can of spray paint.\n\nBy the early 1980s, hip-hop had spread beyond the Bronx. Grandmaster Flash and the Furious Five released "The Message" in 1982, one of the first rap songs to address social issues like poverty and urban decay. Run-DMC brought hip-hop to mainstream audiences, and their collaboration with Aerosmith on "Walk This Way" in 1986 broke down genre barriers.\n\nWhat began as a neighborhood party tradition has become the most consumed music genre in the world. Hip-hop\'s influence extends far beyond music into fashion, language, film, and politics — proof that art born from struggle can reshape culture on a global scale.'
},

p5: {
  id: 'p5',
  genre: 'Science',
  text: 'Every autumn, millions of monarch butterflies begin one of the most extraordinary journeys in the animal kingdom. Starting from breeding grounds across eastern North America, these insects travel up to 3,000 miles to reach their winter homes in the oyamel fir forests of central Mexico — a trip that no individual butterfly has ever made before.\n\nThe migration spans multiple generations. The butterflies that fly south in autumn are a special "super generation" that lives up to eight months, compared to the typical two-to-six-week lifespan of summer monarchs. When spring arrives, these same butterflies begin the return trip north, laying eggs on milkweed plants along the way. Their offspring continue the journey northward over two or three additional generations, none of which will live long enough to make the full return trip. Yet somehow, the following autumn, a new super generation knows exactly where to go.\n\nScientists believe monarchs navigate using a combination of the sun\'s position and the Earth\'s magnetic field. A tiny cluster of cells in their antennae contains a molecular compass that responds to magnetism, while an internal clock in their brain compensates for the sun\'s movement across the sky. This dual navigation system is encoded in their DNA, requiring no learning or experience.\n\nThe monarch population has declined by approximately 80 percent over the past two decades, primarily due to habitat loss. The milkweed plants that caterpillars depend on for food have been eliminated from millions of acres of farmland by herbicide use.'
},

p6: {
  id: 'p6',
  genre: 'Fiction',
  text: 'Amara stared at the equation on the whiteboard, her pencil frozen above her notebook. Around her, other students scribbled confidently, their pencils scratching in a steady rhythm that made her feel even more lost. She had studied for three hours last night, but the numbers on the board seemed to rearrange themselves every time she blinked.\n\n"Five minutes," Mr. Chen announced. Amara\'s stomach tightened.\n\nShe looked down at her work. She had solved the first three parts correctly — she was almost sure of that. But the final part required combining everything she\'d done into one expression, and her mind went blank every time she tried.\n\nThen she remembered something her older sister had told her last week: "When you freeze up, go back to what you know. Write down everything you\'re certain about, and work forward from there."\n\nAmara took a breath and listed her known values in the margin: x equals 4, the slope is negative 2, the y-intercept is 10. She wrote the equation step by step, substituting one value at a time instead of trying to do it all at once. Each step was simple on its own. When she finished the final calculation, she stared at her answer: y equals 2.\n\nShe wasn\'t sure it was right, but for the first time all period, the numbers made sense. When Mr. Chen collected the papers, Amara\'s hands weren\'t shaking anymore. She hadn\'t conquered math. But she\'d found a way to stop it from conquering her.'
}

,

// ---- EXAM 30B PASSAGES ----

p7: {
  id: 'p7',
  genre: 'Fiction',
  text: 'On his first day at Westfield Middle, Darius kept his headphones around his neck like armor. The hallways smelled different from his old school — floor wax instead of cafeteria grease — and every face was a stranger\'s. His mother had promised he\'d adjust, but standing at the edge of the lunch room with a tray of food he didn\'t recognize, adjusting felt impossible.\n\nHe spotted an empty table near the window and sat down alone. He was unwrapping his sandwich when a kid with a basketball under his arm dropped into the seat across from him.\n\n"You\'re the new kid, right? I\'m DeShawn." He didn\'t wait for an answer. "You play ball?"\n\nDarius shrugged. "A little."\n\n"Come to open gym after school. Coach runs it Tuesdays and Thursdays." DeShawn bit into an apple. "Fair warning — he makes you run lines if you\'re late."\n\nThat afternoon, Darius found himself in the gym, lacing up shoes he\'d almost left in his locker. The first drill was a full-court press, and his legs burned after two minutes. But by the end of the hour, three other kids knew his name, and DeShawn had passed him the ball without being asked.\n\nWalking home, Darius realized the knot in his stomach that had been there since the moving truck pulled away was finally starting to loosen. He hadn\'t made friends yet — not really. But he\'d made a start.'
},

p8: {
  id: 'p8',
  genre: 'Science',
  text: 'The human brain contains approximately 86 billion neurons, each capable of forming thousands of connections with other neurons. These connections, called synapses, are the physical basis of memory. When you learn something new — a phone number, a basketball play, a vocabulary word — specific patterns of neurons fire together. The more often that pattern fires, the stronger the connections become. Neuroscientists summarize this principle as "neurons that fire together, wire together."\n\nMemory operates in three stages. First, encoding converts sensory information into a form the brain can process. Paying attention is critical at this stage — information you ignore rarely makes it past this filter. Second, storage maintains the encoded information over time. Short-term memory holds about seven items for roughly 20 seconds, while long-term memory can store vast amounts of information indefinitely. Third, retrieval accesses the stored information when needed.\n\nThe transfer from short-term to long-term memory depends heavily on repetition and meaning. Simply rereading notes is one of the least effective study strategies because it creates a feeling of familiarity without strengthening retrieval pathways. Research consistently shows that active recall — testing yourself on material rather than passively reviewing it — is far more effective. When you struggle to remember something and then succeed, the retrieval pathway grows stronger than if the answer had come easily.\n\nSleep also plays a crucial role in memory consolidation. During deep sleep, the brain replays the day\'s neural patterns, strengthening important connections and pruning weak ones. Students who sleep well after studying retain significantly more than those who stay up late cramming.'
},

// ---- EXAM 60B PASSAGES ----

p9: {
  id: 'p9',
  genre: 'Social Studies',
  text: 'Before the Civil War, an estimated 100,000 enslaved people escaped to freedom through a secret network known as the Underground Railroad. Despite its name, it was neither underground nor a railroad. It was a loose system of safe houses, hidden routes, and courageous people — both Black and white — who risked imprisonment and death to help others reach free states or Canada.\n\nThe network used railroad terminology as code. Safe houses were called "stations" or "depots." The people who hid fugitives were "stationmasters." Those who guided escaped people between stations were "conductors." The fugitives themselves were called "passengers" or "freight."\n\nHarriet Tubman is the most famous conductor, but she was one of many. Born into slavery in Maryland around 1822, Tubman escaped in 1849 and then returned to the South at least 13 times, personally leading about 70 people to freedom. She carried a pistol for protection and reportedly told reluctant travelers, "You\'ll be free or die." No one she guided was ever captured.\n\nThe Underground Railroad succeeded not because of any single hero, but because of collective courage. Ordinary people — farmers who left lanterns burning to signal safe houses, Quaker families who built hidden rooms behind fireplaces, free Black communities that organized escape routes — all chose to break the law because they believed the law was wrong. Their combined efforts created one of the most significant acts of resistance in American history.'
},

p10: {
  id: 'p10',
  genre: 'Humanities',
  text: 'In December 1891, a Canadian physical education instructor named James Naismith faced a practical problem: his class of 18 young men at the International YMCA Training School in Springfield, Massachusetts, needed a vigorous indoor game to play during the harsh New England winter. Naismith had two weeks to invent one.\n\nHe started by analyzing why previous attempts at indoor sports had failed. Football and rugby were too rough for a wooden gymnasium floor. Soccer worked outdoors but broke windows indoors. Naismith realized he needed a game where the goal was elevated — placed above the players — so that scoring required skill rather than force. He also wanted to eliminate tackling by prohibiting players from running with the ball.\n\nNaismith wrote 13 original rules, nailed a peach basket to the elevated running track at each end of the gym, and divided his class into two teams of nine. The first game ended with a score of 1-0. Every time someone scored, a janitor climbed a ladder to retrieve the ball from the basket.\n\nThe game spread rapidly through the YMCA network. Within a year, it was being played across the United States and Canada. The peach baskets were replaced with iron hoops and open nets by 1906. Naismith lived long enough to see basketball become an Olympic sport in 1936 — 45 years after he invented it as a two-week class assignment.\n\nToday, basketball is played by an estimated 450 million people worldwide, making it one of the most popular sports on Earth.'
},

p11: {
  id: 'p11',
  genre: 'Science',
  text: 'Beneath Earth\'s thin outer crust lies a layer of hot, semi-solid rock called the mantle, which extends about 1,800 miles deep. The mantle\'s heat comes from two sources: residual energy from Earth\'s formation 4.5 billion years ago, and the ongoing decay of radioactive elements like uranium and thorium. This heat drives the movement of tectonic plates — massive slabs of crust that float on the mantle like rafts on a slow-moving river.\n\nVolcanoes form primarily at the boundaries where these plates meet. At convergent boundaries, where one plate slides beneath another in a process called subduction, the sinking plate reaches depths where temperatures are high enough to melt rock. This molten rock, called magma, is less dense than the surrounding solid rock and rises through cracks in the overlying plate. When it reaches the surface, it erupts as lava, ash, and gas.\n\nThe "Ring of Fire" — a horseshoe-shaped zone around the Pacific Ocean — contains about 75 percent of the world\'s active volcanoes. This concentration exists because the Pacific Plate is being subducted beneath several surrounding plates simultaneously.\n\nVolcanoes also form at divergent boundaries, where plates pull apart. As the plates separate, magma rises to fill the gap, creating new crust. Most of this activity occurs along mid-ocean ridges — underwater mountain chains that stretch for tens of thousands of miles. Iceland, which sits directly on the Mid-Atlantic Ridge, is one of the few places where this process is visible above sea level.\n\nA third type of volcano forms over "hot spots" — stationary plumes of unusually hot mantle material that punch through the moving plate above. The Hawaiian Islands were created by a hot spot: as the Pacific Plate drifts northwest, the hot spot creates a new island while the older ones move away and gradually erode.'
},

p12: {
  id: 'p12',
  genre: 'Fiction',
  text: 'Jade had practiced the song two hundred times. She knew this because she kept a tally in the back of her music notebook — four vertical lines crossed by a fifth, over and over, filling three pages. Two hundred repetitions of the same three-minute piece, and her fingers still trembled as she waited in the wings of the auditorium.\n\n"Jade Mitchell," the announcer called.\n\nShe walked to the piano at center stage. The spotlight made everything beyond the first row disappear into darkness, which was somehow both terrifying and comforting. She couldn\'t see the judges. She couldn\'t see her parents. It was just her and the piano.\n\nShe placed her hands on the keys and waited for them to stop shaking. They didn\'t. So she began anyway.\n\nThe first measure came out shaky, and she heard the imperfection as clearly as a crack in glass. But by the eighth measure, something shifted. Her fingers found the familiar pathways they\'d traced two hundred times before, and the music stopped being a performance and became a conversation between her and the instrument. The trembling hands weren\'t gone — they were just irrelevant now.\n\nWhen the final chord faded, the silence lasted exactly two seconds. Then applause. Jade stood, bowed the way her teacher had taught her, and walked offstage. She didn\'t know if she\'d won anything. She didn\'t check the judges\' faces. She was thinking about something her grandmother always said: "Courage isn\'t the absence of fear. It\'s deciding that something else matters more."'
}

};

// ============================================================
// EXAM 30 — Half-Length SSAT (30 questions, 30 minutes)
// ============================================================

var EXAM_TESTS = {};

EXAM_TESTS.exam30 = {
  id: 'exam30',
  label: 'Half-Length SSAT',
  description: '30 questions · 30 minutes · 3 sections',
  totalTime: 1800,
  sections: [

  // ---- SECTION 1: VERBAL (10 questions, 7 min) ----
  {
    name: 'Verbal',
    icon: '📝',
    timeLimit: 420,
    instructions: 'This section has two types of questions: <strong>Synonyms</strong> and <strong>Analogies</strong>. For synonyms, select the word closest in meaning to the given word. For analogies, find the pair that has the same relationship as the given pair.',
    questions: [
      // Synonyms (5)
      {
        id: 'e30v1', type: 'synonym', section: 'Verbal',
        question: 'ARDUOUS',
        choices: ['simple', 'creative', 'difficult', 'ancient', 'sudden'],
        answer: 'C',
        explanation: 'ARDUOUS means requiring great effort; difficult and tiring.\n\nArduous → difficult, strenuous, grueling, exhausting'
      },
      {
        id: 'e30v2', type: 'synonym', section: 'Verbal',
        question: 'FUTILE',
        choices: ['hopeless', 'fragile', 'flexible', 'furious', 'frequent'],
        answer: 'A',
        explanation: 'FUTILE means incapable of producing any result; pointless.\n\nFutile → hopeless, useless, pointless, vain'
      },
      {
        id: 'e30v3', type: 'synonym', section: 'Verbal',
        question: 'ELUSIVE',
        choices: ['obvious', 'generous', 'harmful', 'hard to catch', 'expensive'],
        answer: 'D',
        explanation: 'ELUSIVE means difficult to find, catch, or achieve.\n\nElusive → hard to catch, evasive, slippery, fleeting'
      },
      {
        id: 'e30v4', type: 'synonym', section: 'Verbal',
        question: 'CONTEMPT',
        choices: ['admiration', 'patience', 'scorn', 'satisfaction', 'confusion'],
        answer: 'C',
        explanation: 'CONTEMPT means the feeling that someone or something is worthless; scorn and disrespect.\n\nContempt → scorn, disdain, disrespect, derision'
      },
      {
        id: 'e30v5', type: 'synonym', section: 'Verbal',
        question: 'PRAGMATIC',
        choices: ['dramatic', 'imaginary', 'wealthy', 'ancient', 'practical'],
        answer: 'E',
        explanation: 'PRAGMATIC means dealing with things in a practical, realistic way rather than theoretical.\n\nPragmatic → practical, realistic, sensible, down-to-earth'
      },
      // Analogies (5)
      {
        id: 'e30v6', type: 'analogy', section: 'Verbal',
        question: 'Rehearsal is to performance as practice is to',
        choices: ['sport', 'game', 'coach', 'uniform', 'skill'],
        answer: 'B',
        explanation: 'A rehearsal prepares you for a performance. Practice prepares you for a game.\n\nThe relationship is: preparation → the event it prepares for.'
      },
      {
        id: 'e30v7', type: 'analogy', section: 'Verbal',
        question: 'Drought is to rain as famine is to',
        choices: ['desert', 'disease', 'poverty', 'food', 'heat'],
        answer: 'D',
        explanation: 'A drought is a severe shortage of rain. A famine is a severe shortage of food.\n\nThe relationship is: crisis → the resource that is lacking.'
      },
      {
        id: 'e30v8', type: 'analogy', section: 'Verbal',
        question: 'Whisper is to shout as drizzle is to',
        choices: ['rain', 'cloud', 'downpour', 'wind', 'fog'],
        answer: 'C',
        explanation: 'A whisper is a quiet version of a shout. A drizzle is a mild version of a downpour.\n\nThe relationship is: mild degree → extreme degree of the same thing.'
      },
      {
        id: 'e30v9', type: 'analogy', section: 'Verbal',
        question: 'Blueprint is to building as recipe is to',
        choices: ['kitchen', 'chef', 'ingredient', 'meal', 'cookbook'],
        answer: 'D',
        explanation: 'A blueprint is a plan for creating a building. A recipe is a plan for creating a meal.\n\nThe relationship is: plan/instructions → what gets created from them.'
      },
      {
        id: 'e30v10', type: 'analogy', section: 'Verbal',
        question: 'Telescope is to distant as microscope is to',
        choices: ['laboratory', 'scientist', 'tiny', 'lens', 'dark'],
        answer: 'C',
        explanation: 'A telescope makes distant things visible. A microscope makes tiny things visible.\n\nThe relationship is: instrument → what type of thing it reveals.'
      }
    ]
  },

  // ---- SECTION 2: READING (8 questions, 9 min) ----
  {
    name: 'Reading',
    icon: '📖',
    timeLimit: 540,
    instructions: 'Read each passage carefully, then answer the questions based on what is stated or implied in the passage. Each passage is followed by 4 questions.',
    questions: [
      // Passage 1 questions (Fiction)
      {
        id: 'e30r1', type: 'reading', section: 'Reading', passageId: 'p1',
        question: 'The passage primarily suggests that',
        choices: [
          'natural talent is more important than practice',
          'smaller players should avoid competitive sports',
          'preparation and hard work can overcome physical limitations',
          'coaching decisions are usually unfair to younger players',
          'basketball rewards only the tallest athletes'
        ],
        answer: 'C',
        explanation: 'The entire passage traces Marcus\'s arc from being nearly cut (due to his size) to controlling the game — all because of his summer of practice. The coach\'s final words directly state the theme: "Size doesn\'t determine your ceiling. Preparation does."'
      },
      {
        id: 'e30r2', type: 'reading', section: 'Reading', passageId: 'p1',
        question: 'According to the passage, why did Marcus get to play in the game?',
        choices: [
          'He was the best player at practice',
          'The starting point guard got injured',
          'The starting point guard picked up two quick fouls',
          'The coach wanted to reward his summer work',
          'He volunteered to substitute'
        ],
        answer: 'C',
        explanation: 'The passage states: "The starting point guard picked up two quick fouls, and the coach looked down the bench." Marcus got in because the starter was in foul trouble — not because the coach planned to play him.'
      },
      {
        id: 'e30r3', type: 'reading', section: 'Reading', passageId: 'p1',
        question: 'As used in the passage, "controlled the tempo" most nearly means',
        choices: [
          'played defense aggressively',
          'scored the most points',
          'set the pace of play',
          'argued with the referees',
          'ran faster than everyone else'
        ],
        answer: 'C',
        explanation: '"Tempo" refers to the speed or pace of something. "Controlled the tempo" means Marcus set the pace of the game — dictating how fast or slow the team played, evidenced by his 6 assists and 0 turnovers.'
      },
      {
        id: 'e30r4', type: 'reading', section: 'Reading', passageId: 'p1',
        question: 'The coach\'s final words suggest that a player\'s potential is determined by',
        choices: [
          'how tall they are',
          'which position they play',
          'how much effort they put in',
          'whether they start or come off the bench',
          'how many points they score'
        ],
        answer: 'C',
        explanation: 'The coach says "Size doesn\'t determine your ceiling. Preparation does." This directly states that effort and preparation — not physical traits — determine a player\'s potential.'
      },
      // Passage 2 questions (Science)
      {
        id: 'e30r5', type: 'reading', section: 'Reading', passageId: 'p2',
        question: 'The passage is primarily about',
        choices: [
          'the economic value of coral reefs to coastal communities',
          'the symbiotic relationship between coral and algae and its vulnerability to temperature changes',
          'how scientists are working to restore damaged coral reefs',
          'why the Great Barrier Reef is the world\'s largest reef system',
          'the different species of fish that live in coral reefs'
        ],
        answer: 'B',
        explanation: 'The passage focuses on the coral-zooxanthellae partnership (paragraphs 1-2), then explains how temperature changes threaten this relationship through bleaching (paragraphs 3-4). The central idea connects the partnership to its vulnerability.'
      },
      {
        id: 'e30r6', type: 'reading', section: 'Reading', passageId: 'p2',
        question: 'What percentage of the coral\'s energy comes from zooxanthellae?',
        choices: ['about 25 percent', 'about 50 percent', 'about 75 percent', 'up to 90 percent', 'exactly 100 percent'],
        answer: 'D',
        explanation: 'The passage states: "the algae supply up to 90 percent of the coral\'s energy needs." This is a direct detail from paragraph 2.'
      },
      {
        id: 'e30r7', type: 'reading', section: 'Reading', passageId: 'p2',
        question: 'As used in the passage, "expel" most nearly means',
        choices: ['attract', 'absorb', 'force out', 'protect', 'dissolve'],
        answer: 'C',
        explanation: '"Expel" means to force something out. In context: "the corals expel their zooxanthellae" — the corals push out / get rid of their algae partners when water gets too warm.'
      },
      {
        id: 'e30r8', type: 'reading', section: 'Reading', passageId: 'p2',
        question: 'Based on the passage, what can be inferred about the future of coral reefs?',
        choices: [
          'They will adapt to warmer temperatures over time',
          'Scientists will successfully prevent all future bleaching',
          'They face increasing threats from rising ocean temperatures',
          'New species of coral will replace the bleached ones',
          'The Great Barrier Reef will fully recover by 2030'
        ],
        answer: 'C',
        explanation: 'The passage describes bleaching from warming, notes that "prolonged warming leads to coral death," and mentions six mass bleaching events with increasing frequency. The logical inference is that rising temperatures pose a growing threat.'
      }
    ]
  },

  // ---- SECTION 3: QUANTITATIVE (12 questions, 14 min) ----
  {
    name: 'Quantitative',
    icon: '🔢',
    timeLimit: 840,
    instructions: 'Solve each math problem and select the best answer. No calculators are allowed. Figures are not necessarily drawn to scale.',
    questions: [
      // Number Sense (4)
      {
        id: 'e30m1', section: 'Quantitative',
        category: 'Number Sense', topic: 'Comparing Fractions',
        question: 'Which of the following is greatest?',
        choices: ['3/8', '0.4', '37%', '2/5', '0.38'],
        answer: 'B',
        explanation: 'Step 1: Convert everything to decimals.\n3/8 = 0.375\n0.4 = 0.400\n37% = 0.370\n2/5 = 0.400\n0.38 = 0.380\n\nStep 2: Compare. 0.4 and 2/5 are both 0.400, but 0.4 appears first in the choices.\n\nNote: 0.4 and 2/5 are equal. Both are correct, but (B) 0.4 comes first.\n\nAnswer: (B) 0.4'
      },
      {
        id: 'e30m2', section: 'Quantitative',
        category: 'Number Sense', topic: 'Factors and Multiples',
        question: 'What is the greatest common factor of 36 and 48?',
        choices: ['4', '6', '8', '12', '24'],
        answer: 'D',
        explanation: 'Step 1: List factor pairs.\n36: 1, 2, 3, 4, 6, 9, 12, 18, 36\n48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48\n\nStep 2: Largest number in both lists is 12.\n\nAnswer: (D) 12'
      },
      {
        id: 'e30m3', section: 'Quantitative',
        category: 'Number Sense', topic: 'Properties of Numbers',
        question: 'If n is an odd number, which of the following MUST be even?',
        choices: ['n + 2', 'n²', 'n + 1', '3n', 'n² + 2'],
        answer: 'C',
        explanation: 'Step 1: Test with an odd number like n = 3.\n(A) 3 + 2 = 5 (odd)\n(B) 3² = 9 (odd)\n(C) 3 + 1 = 4 (even) ✓\n(D) 3 × 3 = 9 (odd)\n(E) 9 + 2 = 11 (odd)\n\nOdd + 1 always equals even.\n\nAnswer: (C) n + 1'
      },
      {
        id: 'e30m4', section: 'Quantitative',
        category: 'Number Sense', topic: 'Fractions',
        question: 'What is 2/3 + 3/4?',
        choices: ['5/7', '5/12', '1 1/12', '1 5/12', '1 1/2'],
        answer: 'D',
        explanation: 'Step 1: Find a common denominator. LCD of 3 and 4 is 12.\n2/3 = 8/12\n3/4 = 9/12\n\nStep 2: Add.\n8/12 + 9/12 = 17/12 = 1 5/12\n\nAnswer: (D) 1 5/12'
      },
      // Algebra (3)
      {
        id: 'e30m5', section: 'Quantitative',
        category: 'Algebra', topic: 'Percent Change',
        question: 'A store raises all prices by 20%, then offers a 20% discount on the new prices. Compared to the original price, a customer pays',
        choices: ['the same amount', '4% more', '4% less', '2% more', '2% less'],
        answer: 'C',
        explanation: 'Step 1: Start with $100.\nAfter 20% increase: $100 × 1.20 = $120\nAfter 20% discount: $120 × 0.80 = $96\n\nStep 2: Compare to original.\n$96 vs $100 = $4 less = 4% less\n\nThe discount is applied to the BIGGER number, so it removes more than the raise added.\n\nAnswer: (C) 4% less'
      },
      {
        id: 'e30m6', section: 'Quantitative',
        category: 'Algebra', topic: 'Word Problem',
        question: 'A team scored an average of 72 points in their first 5 games. How many points must they score in their 6th game to raise their average to 75?',
        choices: ['75', '78', '87', '90', '93'],
        answer: 'D',
        explanation: 'Step 1: Total points for 5 games = 72 × 5 = 360\n\nStep 2: Total needed for 6 games at 75 avg = 75 × 6 = 450\n\nStep 3: Points needed in game 6 = 450 − 360 = 90\n\nAnswer: (D) 90'
      },
      {
        id: 'e30m7', section: 'Quantitative',
        category: 'Algebra', topic: 'Proportions',
        question: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 9 cups of sugar, how many cups of flour do you need?',
        choices: ['4', '5', '6', '7', '13.5'],
        answer: 'C',
        explanation: 'Step 1: Set up the proportion.\n2/3 = x/9\n\nStep 2: Cross-multiply.\n2 × 9 = 3 × x\n18 = 3x\nx = 6\n\nAnswer: (C) 6'
      },
      // Geometry (3)
      {
        id: 'e30m8', section: 'Quantitative',
        category: 'Geometry', topic: 'Triangle Angles',
        question: 'In a triangle, one angle is 90° and another is 35°. What is the measure of the third angle?',
        choices: ['35°', '45°', '55°', '65°', '125°'],
        answer: 'C',
        explanation: 'Step 1: The three angles of a triangle add up to 180°.\n\nStep 2: 180 − 90 − 35 = 55°\n\nAnswer: (C) 55°'
      },
      {
        id: 'e30m9', section: 'Quantitative',
        category: 'Geometry', topic: 'Circle',
        question: 'A circular garden has a radius of 7 feet. What is the approximate area of the garden? (Use π ≈ 22/7)',
        choices: ['22 sq ft', '44 sq ft', '88 sq ft', '154 sq ft', '308 sq ft'],
        answer: 'D',
        explanation: 'Step 1: Area = πr²\nA = (22/7) × 7²\nA = (22/7) × 49\nA = 22 × 7 = 154 sq ft\n\nAnswer: (D) 154 sq ft'
      },
      {
        id: 'e30m10', section: 'Quantitative',
        category: 'Geometry', topic: 'Similar Triangles',
        question: 'Two similar triangles have sides in the ratio 2:5. If the shortest side of the larger triangle is 15 cm, what is the shortest side of the smaller triangle?',
        choices: ['3 cm', '6 cm', '7.5 cm', '10 cm', '37.5 cm'],
        answer: 'B',
        explanation: 'Step 1: The ratio is 2:5, meaning small/large = 2/5.\n\nStep 2: Set up the proportion.\n2/5 = x/15\nx = (2 × 15) / 5 = 30/5 = 6\n\nAnswer: (B) 6 cm'
      },
      // Data Analysis (1)
      {
        id: 'e30m11', section: 'Quantitative',
        category: 'Data Analysis', topic: 'Probability',
        question: 'A spinner has 5 equal sections: 2 red, 2 blue, 1 green. If you spin twice, what is the probability of getting red BOTH times?',
        choices: ['1/5', '2/5', '4/25', '4/10', '2/25'],
        answer: 'C',
        explanation: 'Step 1: P(red on one spin) = 2/5\n\nStep 2: Spins are independent, so multiply.\nP(red both) = 2/5 × 2/5 = 4/25\n\nAnswer: (C) 4/25'
      },
      // Reasoning (1)
      {
        id: 'e30m12', section: 'Quantitative',
        category: 'Reasoning', topic: 'Estimation',
        question: 'The product of 397 × 51 is closest to which of the following?',
        choices: ['15,000', '20,000', '25,000', '40,000', '200,000'],
        answer: 'B',
        explanation: 'Step 1: Round to friendly numbers.\n397 ≈ 400 and 51 ≈ 50\n\nStep 2: Multiply the rounded values.\n400 × 50 = 20,000\n\nThe actual answer is 20,247, so 20,000 is the closest.\n\nAnswer: (B) 20,000'
      }
    ]
  }
  ]
};


// ============================================================
// EXAM 60 — Full-Length SSAT (60 questions, 60 minutes)
// ============================================================

EXAM_TESTS.exam60 = {
  id: 'exam60',
  label: 'Full-Length SSAT',
  description: '60 questions · 60 minutes · 3 sections',
  totalTime: 3600,
  sections: [

  // ---- SECTION 1: VERBAL (20 questions, 14 min) ----
  {
    name: 'Verbal',
    icon: '📝',
    timeLimit: 840,
    instructions: 'This section has two types of questions: <strong>Synonyms</strong> and <strong>Analogies</strong>. For synonyms, select the word closest in meaning to the given word. For analogies, find the pair that has the same relationship as the given pair.',
    questions: [
      // Synonyms (10)
      {
        id: 'e60v1', type: 'synonym', section: 'Verbal',
        question: 'JUBILANT',
        choices: ['tired', 'angry', 'overjoyed', 'confused', 'serious'],
        answer: 'C',
        explanation: 'JUBILANT means feeling or expressing great happiness and triumph.\n\nJubilant → overjoyed, ecstatic, elated, thrilled'
      },
      {
        id: 'e60v2', type: 'synonym', section: 'Verbal',
        question: 'ABSURD',
        choices: ['reasonable', 'ridiculous', 'enormous', 'cautious', 'brilliant'],
        answer: 'B',
        explanation: 'ABSURD means wildly unreasonable or illogical; ridiculous.\n\nAbsurd → ridiculous, nonsensical, preposterous, silly'
      },
      {
        id: 'e60v3', type: 'synonym', section: 'Verbal',
        question: 'DILIGENT',
        choices: ['lazy', 'smart', 'harsh', 'hardworking', 'shy'],
        answer: 'D',
        explanation: 'DILIGENT means having or showing careful and persistent effort.\n\nDiligent → hardworking, industrious, conscientious, dedicated'
      },
      {
        id: 'e60v4', type: 'synonym', section: 'Verbal',
        question: 'ELOQUENT',
        choices: ['silent', 'expressive', 'modest', 'athletic', 'plain'],
        answer: 'B',
        explanation: 'ELOQUENT means fluent or persuasive in speaking or writing.\n\nEloquent → expressive, articulate, well-spoken, persuasive'
      },
      {
        id: 'e60v5', type: 'synonym', section: 'Verbal',
        question: 'FRIGID',
        choices: ['warm', 'freezing', 'moist', 'dark', 'windy'],
        answer: 'B',
        explanation: 'FRIGID means extremely cold in temperature.\n\nFrigid → freezing, icy, bitter, arctic'
      },
      {
        id: 'e60v6', type: 'synonym', section: 'Verbal',
        question: 'TEDIOUS',
        choices: ['exciting', 'boring', 'dangerous', 'delicate', 'brief'],
        answer: 'B',
        explanation: 'TEDIOUS means too long, slow, or dull; tiresome and monotonous.\n\nTedious → boring, monotonous, dull, tiresome'
      },
      {
        id: 'e60v7', type: 'synonym', section: 'Verbal',
        question: 'PROSPEROUS',
        choices: ['poor', 'healthy', 'wealthy', 'brave', 'humble'],
        answer: 'C',
        explanation: 'PROSPEROUS means successful in material terms; flourishing financially.\n\nProsperous → wealthy, affluent, thriving, successful'
      },
      {
        id: 'e60v8', type: 'synonym', section: 'Verbal',
        question: 'OBSOLETE',
        choices: ['modern', 'fragile', 'outdated', 'expensive', 'portable'],
        answer: 'C',
        explanation: 'OBSOLETE means no longer produced or used; out of date.\n\nObsolete → outdated, antiquated, outmoded, old-fashioned'
      },
      {
        id: 'e60v9', type: 'synonym', section: 'Verbal',
        question: 'METICULOUS',
        choices: ['careless', 'thorough', 'rapid', 'distant', 'humble'],
        answer: 'B',
        explanation: 'METICULOUS means showing great attention to detail; very careful and precise.\n\nMeticulous → thorough, precise, careful, painstaking'
      },
      {
        id: 'e60v10', type: 'synonym', section: 'Verbal',
        question: 'FORMIDABLE',
        choices: ['weak', 'friendly', 'ordinary', 'impressive', 'familiar'],
        answer: 'D',
        explanation: 'FORMIDABLE means inspiring fear or respect through being impressively large, powerful, or capable.\n\nFormidable → impressive, intimidating, daunting, powerful'
      },
      // Analogies (10)
      {
        id: 'e60v11', type: 'analogy', section: 'Verbal',
        question: 'Calf is to cow as puppy is to',
        choices: ['cat', 'kennel', 'bone', 'dog', 'kitten'],
        answer: 'D',
        explanation: 'A calf is the young of a cow. A puppy is the young of a dog.\n\nThe relationship is: young animal → adult animal.'
      },
      {
        id: 'e60v12', type: 'analogy', section: 'Verbal',
        question: 'Pilot is to airplane as captain is to',
        choices: ['army', 'ship', 'hat', 'crew', 'ocean'],
        answer: 'B',
        explanation: 'A pilot operates an airplane. A captain operates a ship.\n\nThe relationship is: operator → vehicle they command.'
      },
      {
        id: 'e60v13', type: 'analogy', section: 'Verbal',
        question: 'Envelope is to letter as shell is to',
        choices: ['beach', 'sand', 'nut', 'ocean', 'rock'],
        answer: 'C',
        explanation: 'An envelope is the outer covering of a letter. A shell is the outer covering of a nut.\n\nThe relationship is: protective covering → what it encloses.'
      },
      {
        id: 'e60v14', type: 'analogy', section: 'Verbal',
        question: 'Drought is to rain as famine is to',
        choices: ['water', 'disease', 'food', 'poverty', 'heat'],
        answer: 'C',
        explanation: 'A drought is a severe lack of rain. A famine is a severe lack of food.\n\nThe relationship is: crisis → the thing that is lacking.'
      },
      {
        id: 'e60v15', type: 'analogy', section: 'Verbal',
        question: 'Petal is to flower as feather is to',
        choices: ['nest', 'bird', 'pillow', 'sky', 'wing'],
        answer: 'B',
        explanation: 'A petal is a part of a flower. A feather is a part of a bird.\n\nThe relationship is: component → the whole it belongs to.'
      },
      {
        id: 'e60v16', type: 'analogy', section: 'Verbal',
        question: 'Spectator is to watch as chef is to',
        choices: ['eat', 'cook', 'taste', 'serve', 'order'],
        answer: 'B',
        explanation: 'A spectator\'s primary action is to watch. A chef\'s primary action is to cook.\n\nThe relationship is: person → their defining action.'
      },
      {
        id: 'e60v17', type: 'analogy', section: 'Verbal',
        question: 'Enormous is to tiny as ancient is to',
        choices: ['old', 'modern', 'historic', 'important', 'valuable'],
        answer: 'B',
        explanation: 'Enormous is the opposite of tiny. Ancient is the opposite of modern.\n\nThe relationship is: word → its antonym.'
      },
      {
        id: 'e60v18', type: 'analogy', section: 'Verbal',
        question: 'Marathon is to race as novel is to',
        choices: ['story', 'book', 'author', 'chapter', 'library'],
        answer: 'B',
        explanation: 'A marathon is a specific type of race. A novel is a specific type of book.\n\nThe relationship is: specific example → general category.'
      },
      {
        id: 'e60v19', type: 'analogy', section: 'Verbal',
        question: 'Compass is to direction as clock is to',
        choices: ['hours', 'time', 'hands', 'alarm', 'wall'],
        answer: 'B',
        explanation: 'A compass tells you your direction. A clock tells you the time.\n\nThe relationship is: instrument → what it measures/indicates.'
      },
      {
        id: 'e60v20', type: 'analogy', section: 'Verbal',
        question: 'Seed is to tree as egg is to',
        choices: ['nest', 'chicken', 'shell', 'breakfast', 'farm'],
        answer: 'B',
        explanation: 'A seed grows into a tree. An egg grows into a chicken.\n\nThe relationship is: origin → what it develops into.'
      }
    ]
  },

  // ---- SECTION 2: READING (16 questions, 18 min) ----
  {
    name: 'Reading',
    icon: '📖',
    timeLimit: 1080,
    instructions: 'Read each passage carefully, then answer the questions based on what is stated or implied in the passage. Each passage is followed by 4 questions.',
    questions: [
      // Passage 3 — Social Studies (Harlem Renaissance)
      {
        id: 'e60r1', type: 'reading', section: 'Reading', passageId: 'p3',
        question: 'The primary purpose of this passage is to',
        choices: [
          'argue that the Harlem Renaissance was the most important cultural movement in American history',
          'describe the cultural significance and origins of the Harlem Renaissance',
          'compare the literary achievements of Hughes and Hurston',
          'explain why African Americans moved to northern cities',
          'criticize the segregation policies of the 1920s'
        ],
        answer: 'B',
        explanation: 'The passage provides an overview of the Harlem Renaissance — its origins in the Great Migration, its key figures, and its lasting impact. It describes the movement rather than making an argument or comparison.'
      },
      {
        id: 'e60r2', type: 'reading', section: 'Reading', passageId: 'p3',
        question: 'According to the passage, what was the Great Migration?',
        choices: [
          'A literary movement started by Langston Hughes',
          'The movement of artists from Harlem to other cities',
          'The movement of millions of African Americans from the South to northern cities',
          'A series of concerts organized by Duke Ellington',
          'The spread of jazz music across the United States'
        ],
        answer: 'C',
        explanation: 'The passage directly states: "the Great Migration, when millions of African Americans moved from the rural South to northern cities between 1910 and 1970."'
      },
      {
        id: 'e60r3', type: 'reading', section: 'Reading', passageId: 'p3',
        question: 'As used in the passage, "favorable conditions" (replacing "fertile ground") most nearly means',
        choices: [
          'rich farmland',
          'supportive environment for growth',
          'expensive real estate',
          'comfortable living spaces',
          'political stability'
        ],
        answer: 'B',
        explanation: '"Fertile ground" is used metaphorically to mean conditions that support growth — in this case, the growth of artistic innovation. It describes how concentrated talent and shared experiences created an environment where art could flourish.'
      },
      {
        id: 'e60r4', type: 'reading', section: 'Reading', passageId: 'p3',
        question: 'The author would most likely agree that the Harlem Renaissance',
        choices: [
          'solved the problem of racial inequality in America',
          'was primarily a musical movement',
          'had effects that extended well beyond its era',
          'was only significant to people living in New York',
          'ended when the Great Migration stopped'
        ],
        answer: 'C',
        explanation: 'The final paragraph states the movement "established that African American culture was a vital and original force in American life — a legacy that continues to influence artists today." The word "continues" indicates lasting, ongoing impact.'
      },

      // Passage 4 — Humanities (Hip-Hop)
      {
        id: 'e60r5', type: 'reading', section: 'Reading', passageId: 'p4',
        question: 'The passage mainly describes',
        choices: [
          'the life and career of DJ Kool Herc',
          'why hip-hop is better than other music genres',
          'how hip-hop originated and evolved into a global cultural force',
          'the technical process of DJing with two turntables',
          'the differences between hip-hop and rock music'
        ],
        answer: 'C',
        explanation: 'The passage traces hip-hop from its origin (DJ Kool Herc\'s 1973 party) through its growth (four elements, social commentary) to its current status as the world\'s most consumed music genre. It\'s a story of origin and evolution.'
      },
      {
        id: 'e60r6', type: 'reading', section: 'Reading', passageId: 'p4',
        question: 'What was DJ Kool Herc\'s "Merry-Go-Round" technique?',
        choices: [
          'A style of breakdancing performed in circles',
          'A method of writing rap lyrics',
          'Isolating and extending instrumental breaks using two turntables',
          'A type of graffiti art found on carousel structures',
          'A way of organizing block parties in different neighborhoods'
        ],
        answer: 'C',
        explanation: 'The passage states he "isolated and extended the instrumental breaks in funk and soul records, creating a continuous loop of rhythm" and calls this the "Merry-Go-Round."'
      },
      {
        id: 'e60r7', type: 'reading', section: 'Reading', passageId: 'p4',
        question: 'As used in the passage, "hit hard" (replacing "devastated") most nearly means',
        choices: [
          'physically struck',
          'emotionally moved',
          'severely damaged',
          'completely destroyed',
          'barely affected'
        ],
        answer: 'C',
        explanation: 'In context, "communities that had been hit hard by poverty and neglect" means severely damaged or harmed — not literally struck. The communities suffered greatly from these conditions.'
      },
      {
        id: 'e60r8', type: 'reading', section: 'Reading', passageId: 'p4',
        question: 'The author\'s tone toward hip-hop\'s evolution is best described as',
        choices: [
          'skeptical and critical',
          'neutral and detached',
          'admiring and respectful',
          'nostalgic and sad',
          'humorous and lighthearted'
        ],
        answer: 'C',
        explanation: 'The author uses positive language throughout: "extraordinary," "creative expression," "broke down genre barriers," and calls hip-hop "proof that art born from struggle can reshape culture on a global scale." This reflects admiration and respect.'
      },

      // Passage 5 — Science (Monarch Butterflies)
      {
        id: 'e60r9', type: 'reading', section: 'Reading', passageId: 'p5',
        question: 'The central idea of the passage is that',
        choices: [
          'all butterfly species migrate south for the winter',
          'monarch butterflies have a genetically programmed multi-generational migration',
          'scientists have fully solved the mystery of butterfly navigation',
          'milkweed is the most important plant in North America',
          'the monarch population is no longer in decline'
        ],
        answer: 'B',
        explanation: 'The passage explains the multi-generational migration, emphasizing that it\'s encoded in DNA (genetically programmed) and requires no learning. The "super generation" concept and DNA-encoded navigation are the central threads.'
      },
      {
        id: 'e60r10', type: 'reading', section: 'Reading', passageId: 'p5',
        question: 'How long does the "super generation" of monarchs live?',
        choices: ['two to six weeks', 'about three months', 'up to eight months', 'exactly one year', 'several years'],
        answer: 'C',
        explanation: 'The passage states: "a special \'super generation\' that lives up to eight months, compared to the typical two-to-six-week lifespan of summer monarchs."'
      },
      {
        id: 'e60r11', type: 'reading', section: 'Reading', passageId: 'p5',
        question: 'As used in the passage, "homes" (replacing "sanctuaries") most nearly means',
        choices: [
          'churches',
          'cages',
          'safe shelters',
          'traps',
          'breeding areas'
        ],
        answer: 'C',
        explanation: 'In context, the butterflies travel to their winter "homes" (sanctuaries) in Mexico — places of safety and refuge. Sanctuary implies a safe, protected shelter.'
      },
      {
        id: 'e60r12', type: 'reading', section: 'Reading', passageId: 'p5',
        question: 'Based on the passage, the main threat to monarch butterflies is',
        choices: [
          'predators in Mexico',
          'cold winter temperatures',
          'destruction of milkweed habitat by herbicides',
          'climate change affecting their magnetic compass',
          'competition from other butterfly species'
        ],
        answer: 'C',
        explanation: 'The final paragraph states the decline is "primarily due to habitat loss" and specifically that "milkweed plants... have been eliminated from millions of acres of farmland by herbicide use."'
      },

      // Passage 6 — Fiction (Amara)
      {
        id: 'e60r13', type: 'reading', section: 'Reading', passageId: 'p6',
        question: 'The passage is primarily about',
        choices: [
          'a student who cheats on a math test',
          'a student learning to manage test anxiety by breaking problems into smaller steps',
          'a teacher who gives his students too little time',
          'the importance of studying more than three hours',
          'why math is the most difficult school subject'
        ],
        answer: 'B',
        explanation: 'Amara freezes during a test, then uses her sister\'s advice to break the problem into small steps. The passage is about overcoming anxiety through a practical strategy — not about studying harder or the teacher being unfair.'
      },
      {
        id: 'e60r14', type: 'reading', section: 'Reading', passageId: 'p6',
        question: 'What advice did Amara\'s sister give her?',
        choices: [
          'Study longer the night before a test',
          'Ask the teacher for extra time',
          'Skip the hardest questions and come back later',
          'Write down what you know and work forward from there',
          'Copy answers from a neighbor'
        ],
        answer: 'D',
        explanation: 'Her sister said: "When you freeze up, go back to what you know. Write down everything you\'re certain about, and work forward from there."'
      },
      {
        id: 'e60r15', type: 'reading', section: 'Reading', passageId: 'p6',
        question: 'As used in the final paragraph, "conquered" most nearly means',
        choices: ['traveled to', 'defeated', 'studied', 'enjoyed', 'ignored'],
        answer: 'B',
        explanation: '"She hadn\'t conquered math. But she\'d found a way to stop it from conquering her." Here "conquered" means defeated or overcome — she hasn\'t mastered math, but she\'s stopped it from beating her.'
      },
      {
        id: 'e60r16', type: 'reading', section: 'Reading', passageId: 'p6',
        question: 'At the end of the passage, Amara most likely feels',
        choices: [
          'angry at herself for freezing up',
          'certain she got a perfect score',
          'cautiously confident and relieved',
          'worried the teacher noticed her struggling',
          'eager to give up on math entirely'
        ],
        answer: 'C',
        explanation: 'Key details: "for the first time all period, the numbers made sense" and "her hands weren\'t shaking anymore." She\'s not fully confident ("She wasn\'t sure it was right"), but she found a way through. That\'s cautious confidence and relief.'
      }
    ]
  },

  // ---- SECTION 3: QUANTITATIVE (24 questions, 28 min) ----
  {
    name: 'Quantitative',
    icon: '🔢',
    timeLimit: 1680,
    instructions: 'Solve each math problem and select the best answer. No calculators are allowed. Figures are not necessarily drawn to scale.',
    questions: [
      // Number Sense (8)
      {
        id: 'e60m1', section: 'Quantitative',
        category: 'Number Sense', topic: 'Ordering Fractions',
        question: 'Which list shows the fractions in order from least to greatest?',
        choices: ['1/4, 2/5, 3/8, 1/2', '1/4, 3/8, 2/5, 1/2', '3/8, 1/4, 2/5, 1/2', '2/5, 3/8, 1/4, 1/2', '1/4, 2/5, 1/2, 3/8'],
        answer: 'B',
        explanation: 'Step 1: Convert to decimals.\n1/4 = 0.25, 3/8 = 0.375, 2/5 = 0.40, 1/2 = 0.50\n\nStep 2: Order: 0.25, 0.375, 0.40, 0.50\nSo: 1/4, 3/8, 2/5, 1/2\n\nAnswer: (B) 1/4, 3/8, 2/5, 1/2'
      },
      {
        id: 'e60m2', section: 'Quantitative',
        category: 'Number Sense', topic: 'Decimal Operations',
        question: 'A runner completes laps in 2.45 minutes, 2.38 minutes, and 2.52 minutes. What is the total time for all three laps?',
        choices: ['7.25 min', '7.35 min', '7.45 min', '7.53 min', '8.35 min'],
        answer: 'B',
        explanation: 'Step 1: Add the decimals.\n2.45 + 2.38 + 2.52\n\nStep 2: Add the ones: 2 + 2 + 2 = 6\nAdd the tenths: 0.4 + 0.3 + 0.5 = 1.2\nAdd the hundredths: 0.05 + 0.08 + 0.02 = 0.15\n\nStep 3: 6 + 1.2 + 0.15 = 7.35\n\nAnswer: (B) 7.35 min'
      },
      {
        id: 'e60m3', section: 'Quantitative',
        category: 'Number Sense', topic: 'Converting Fractions/Decimals/Percents',
        question: 'Which of the following is equal to 5/8?',
        choices: ['0.58', '0.625', '58%', '0.585', '63%'],
        answer: 'B',
        explanation: 'Step 1: Divide 5 by 8.\n5 ÷ 8 = 0.625\n\nStep 2: Check the choices.\n(A) 0.58 ≠ 0.625\n(B) 0.625 ✓\n(C) 58% = 0.58 ≠ 0.625\n(D) 0.585 ≠ 0.625\n(E) 63% = 0.63 ≠ 0.625\n\nAnswer: (B) 0.625'
      },
      {
        id: 'e60m4', section: 'Quantitative',
        category: 'Number Sense', topic: 'Divisibility',
        question: 'How many of the following numbers are divisible by both 3 and 5: 15, 25, 30, 45, 50, 60?',
        choices: ['2', '3', '4', '5', '6'],
        answer: 'C',
        explanation: 'Step 1: Divisible by both 3 AND 5 means divisible by 15.\n\nStep 2: Check each.\n15 ÷ 15 = 1 ✓\n25 ÷ 15 = 1.67 ✗ (not divisible by 3)\n30 ÷ 15 = 2 ✓\n45 ÷ 15 = 3 ✓\n50 ÷ 15 = 3.33 ✗ (not divisible by 3)\n60 ÷ 15 = 4 ✓\n\nFour numbers: 15, 30, 45, 60\n\nAnswer: (C) 4'
      },
      {
        id: 'e60m5', section: 'Quantitative',
        category: 'Number Sense', topic: 'LCM',
        question: 'Hot dogs come in packs of 8 and buns come in packs of 6. What is the smallest number of each you must buy so that the hot dogs and buns come out even?',
        choices: ['12 of each', '16 of each', '24 of each', '48 of each', '6 of each'],
        answer: 'C',
        explanation: 'Step 1: Find the LCM of 8 and 6.\n8 = 2³, 6 = 2 × 3\nLCM = 2³ × 3 = 24\n\nStep 2: You need 24 hot dogs (3 packs) and 24 buns (4 packs).\n\nAnswer: (C) 24 of each'
      },
      {
        id: 'e60m6', section: 'Quantitative',
        category: 'Number Sense', topic: 'Properties of Numbers',
        question: 'The product of two integers is positive and their sum is negative. Which MUST be true?',
        choices: ['Both are positive', 'Both are negative', 'One is positive and one is negative', 'One of them is zero', 'At least one is greater than 1'],
        answer: 'B',
        explanation: 'Step 1: Product is positive → both same sign (both positive or both negative).\n\nStep 2: Sum is negative → both can\'t be positive (positive + positive = positive).\n\nStep 3: So both must be negative. Example: −2 × −3 = 6 (positive) and −2 + −3 = −5 (negative). ✓\n\nAnswer: (B) Both are negative'
      },
      {
        id: 'e60m7', section: 'Quantitative',
        category: 'Number Sense', topic: 'Fraction Division',
        question: 'How many pieces of ribbon, each 2/3 of a foot long, can be cut from a ribbon that is 8 feet long?',
        choices: ['5', '10', '12', '16', '24'],
        answer: 'C',
        explanation: 'Step 1: Divide the total length by the piece length.\n8 ÷ 2/3\n\nStep 2: Dividing by a fraction = multiplying by its reciprocal.\n8 × 3/2 = 24/2 = 12\n\nAnswer: (C) 12 pieces'
      },
      {
        id: 'e60m8', section: 'Quantitative',
        category: 'Number Sense', topic: 'Exponents',
        question: 'Which is greater: 3⁴ or 4³?',
        choices: ['3⁴ is greater', '4³ is greater', 'They are equal', 'Cannot be determined', 'Both equal 12'],
        answer: 'A',
        explanation: 'Step 1: Calculate each.\n3⁴ = 3 × 3 × 3 × 3 = 81\n4³ = 4 × 4 × 4 = 64\n\nStep 2: 81 > 64\n\nAnswer: (A) 3⁴ is greater'
      },
      // Algebra (6)
      {
        id: 'e60m9', section: 'Quantitative',
        category: 'Algebra', topic: 'Percent Problem',
        question: 'If 40% of a number is 28, what is the number?',
        choices: ['42', '56', '60', '70', '112'],
        answer: 'D',
        explanation: 'Step 1: Set up: 0.40 × n = 28\n\nStep 2: Divide both sides by 0.40.\nn = 28 ÷ 0.40 = 70\n\nAnswer: (D) 70'
      },
      {
        id: 'e60m10', section: 'Quantitative',
        category: 'Algebra', topic: 'Rate Problem',
        question: 'Sam can mow a lawn in 3 hours. His brother can mow the same lawn in 6 hours. Working together, how long will it take them?',
        choices: ['1 hour', '1.5 hours', '2 hours', '3 hours', '4.5 hours'],
        answer: 'C',
        explanation: 'Step 1: Find each rate.\nSam: 1/3 lawn per hour\nBrother: 1/6 lawn per hour\n\nStep 2: Combined rate = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 lawn per hour\n\nStep 3: Time = 1 ÷ 1/2 = 2 hours\n\nAnswer: (C) 2 hours'
      },
      {
        id: 'e60m11', section: 'Quantitative',
        category: 'Algebra', topic: 'Word Problem',
        question: 'A store sells notebooks for $3 each and pens for $2 each. If Alex buys a total of 10 items for $24, how many notebooks did he buy?',
        choices: ['2', '4', '5', '6', '8'],
        answer: 'B',
        explanation: 'Step 1: Let n = notebooks, p = pens.\nn + p = 10 and 3n + 2p = 24\n\nStep 2: From first equation: p = 10 − n\n3n + 2(10 − n) = 24\n3n + 20 − 2n = 24\nn = 4\n\nAnswer: (B) 4 notebooks'
      },
      {
        id: 'e60m12', section: 'Quantitative',
        category: 'Algebra', topic: 'Proportions',
        question: 'On a map, 1 inch represents 25 miles. Two cities are 3.5 inches apart on the map. What is the actual distance between them?',
        choices: ['75 miles', '82.5 miles', '87.5 miles', '100 miles', '125 miles'],
        answer: 'C',
        explanation: 'Step 1: Set up the proportion.\n1 inch / 25 miles = 3.5 inches / x miles\n\nStep 2: Multiply.\n3.5 × 25 = 87.5 miles\n\nAnswer: (C) 87.5 miles'
      },
      {
        id: 'e60m13', section: 'Quantitative',
        category: 'Algebra', topic: 'Average Problem',
        question: 'A student scored 78, 85, 92, and 88 on four tests. What score does she need on the fifth test to have an average of exactly 86?',
        choices: ['82', '85', '86', '87', '90'],
        answer: 'D',
        explanation: 'Step 1: Total needed for average of 86 over 5 tests:\n86 × 5 = 430\n\nStep 2: Sum of first four tests:\n78 + 85 + 92 + 88 = 343\n\nStep 3: Fifth test = 430 − 343 = 87\n\nAnswer: (D) 87'
      },
      {
        id: 'e60m14', section: 'Quantitative',
        category: 'Algebra', topic: 'Inequality',
        question: 'If 2x + 5 > 17, which is the smallest integer value of x?',
        choices: ['5', '6', '7', '8', '12'],
        answer: 'C',
        explanation: 'Step 1: Solve the inequality.\n2x + 5 > 17\n2x > 12\nx > 6\n\nStep 2: x must be GREATER than 6. The smallest integer greater than 6 is 7.\n\nAnswer: (C) 7'
      },
      // Geometry (5)
      {
        id: 'e60m15', section: 'Quantitative',
        category: 'Geometry', topic: 'Arc Length',
        question: 'A circle has a radius of 12 cm. What is the length of a 90° arc? (Use π ≈ 3.14)',
        choices: ['6.28 cm', '9.42 cm', '12.56 cm', '18.84 cm', '37.68 cm'],
        answer: 'D',
        explanation: 'Step 1: A 90° arc is 90/360 = 1/4 of the full circumference.\n\nStep 2: Circumference = 2πr = 2 × 3.14 × 12 = 75.36 cm\n\nStep 3: Arc = 1/4 × 75.36 = 18.84 cm\n\nAnswer: (D) 18.84 cm'
      },
      {
        id: 'e60m16', section: 'Quantitative',
        category: 'Geometry', topic: 'Similar Triangles',
        question: 'A tree casts a shadow 15 feet long. At the same time, a 6-foot person casts a shadow 4 feet long. How tall is the tree?',
        choices: ['10 ft', '15 ft', '20 ft', '22.5 ft', '25 ft'],
        answer: 'D',
        explanation: 'Step 1: Similar triangles — the ratios are equal.\nperson height / person shadow = tree height / tree shadow\n6/4 = h/15\n\nStep 2: Cross-multiply.\n6 × 15 = 4 × h\n90 = 4h\nh = 22.5 ft\n\nAnswer: (D) 22.5 ft'
      },
      {
        id: 'e60m17', section: 'Quantitative',
        category: 'Geometry', topic: 'Pythagorean Theorem',
        question: 'A ladder is leaning against a wall. The base is 6 feet from the wall and the ladder is 10 feet long. How high up the wall does it reach?',
        choices: ['4 ft', '6 ft', '8 ft', '12 ft', '16 ft'],
        answer: 'C',
        explanation: 'Step 1: Use a² + b² = c² where c = 10 (hypotenuse).\n6² + h² = 10²\n36 + h² = 100\nh² = 64\nh = 8\n\nShortcut: 6-8-10 is a multiple of the 3-4-5 triple (×2).\n\nAnswer: (C) 8 ft'
      },
      {
        id: 'e60m18', section: 'Quantitative',
        category: 'Geometry', topic: 'Angles',
        question: 'Two lines intersect. One of the angles formed is 72°. What are the measures of the other three angles?',
        choices: ['72°, 108°, 108°', '72°, 72°, 144°', '108°, 108°, 72°', '72°, 90°, 126°', '36°, 36°, 216°'],
        answer: 'A',
        explanation: 'Step 1: When two lines cross, vertical angles are equal.\nSo the angle across from 72° is also 72°.\n\nStep 2: Adjacent angles are supplementary (add to 180°).\n180° − 72° = 108°\n\nStep 3: The four angles are: 72°, 108°, 72°, 108°.\nThe other three are: 72°, 108°, 108°.\n\nAnswer: (A) 72°, 108°, 108°'
      },
      {
        id: 'e60m19', section: 'Quantitative',
        category: 'Geometry', topic: 'Perimeter',
        question: 'A rectangle has an area of 48 square cm and a width of 6 cm. What is its perimeter?',
        choices: ['22 cm', '28 cm', '32 cm', '48 cm', '54 cm'],
        answer: 'B',
        explanation: 'Step 1: Find the length.\nArea = length × width\n48 = length × 6\nlength = 8\n\nStep 2: Find the perimeter.\nP = 2(length + width) = 2(8 + 6) = 2 × 14 = 28\n\nAnswer: (B) 28 cm'
      },
      // Data Analysis (3)
      {
        id: 'e60m20', section: 'Quantitative',
        category: 'Data Analysis', topic: 'Mean/Median',
        question: 'The scores 85, 90, 70, 80, and 100 are listed. If the lowest score is removed, by how much does the mean increase?',
        choices: ['1.5', '3', '3.75', '5', '7.5'],
        answer: 'C',
        explanation: 'Step 1: Mean of all 5 scores.\n(85 + 90 + 70 + 80 + 100) / 5 = 425 / 5 = 85\n\nStep 2: Remove the lowest (70). Mean of remaining 4.\n(85 + 90 + 80 + 100) / 4 = 355 / 4 = 88.75\n\nStep 3: Increase = 88.75 − 85 = 3.75\n\nAnswer: (C) 3.75'
      },
      {
        id: 'e60m21', section: 'Quantitative',
        category: 'Data Analysis', topic: 'Probability',
        question: 'A bag has 3 red marbles, 5 blue marbles, and 2 green marbles. If you draw one marble without looking, what is the probability it is NOT blue?',
        choices: ['1/10', '3/10', '1/2', '2/5', '7/10'],
        answer: 'C',
        explanation: 'Step 1: Total marbles = 3 + 5 + 2 = 10\n\nStep 2: Non-blue = 3 + 2 = 5\n\nStep 3: P(not blue) = 5/10 = 1/2\n\nAnswer: (C) 1/2'
      },
      {
        id: 'e60m22', section: 'Quantitative',
        category: 'Data Analysis', topic: 'Counting',
        question: 'A combination lock has 3 dials, each with digits 0-9. How many different combinations are possible?',
        choices: ['30', '100', '720', '1,000', '10,000'],
        answer: 'D',
        explanation: 'Step 1: Each dial has 10 choices (0-9).\n\nStep 2: Total combinations = 10 × 10 × 10 = 1,000\n\nAnswer: (D) 1,000'
      },
      // Reasoning (2)
      {
        id: 'e60m23', section: 'Quantitative',
        category: 'Reasoning', topic: 'Logic',
        question: 'If the product of two integers is odd, which MUST be true?',
        choices: [
          'Both integers are even',
          'One integer is odd and one is even',
          'Both integers are odd',
          'At least one integer is even',
          'The sum of the integers is odd'
        ],
        answer: 'C',
        explanation: 'Step 1: For a product to be odd, NEITHER factor can be even (because even × anything = even).\n\nStep 2: So both must be odd.\n\nStep 3: Check (E): odd + odd = even, so (E) is NOT true.\n\nAnswer: (C) Both integers are odd'
      },
      {
        id: 'e60m24', section: 'Quantitative',
        category: 'Reasoning', topic: 'Estimation',
        question: 'Without calculating exactly, which is closest to the value of 1,988 × 52?',
        choices: ['10,000', '50,000', '100,000', '150,000', '500,000'],
        answer: 'C',
        explanation: 'Step 1: Round to friendly numbers.\n1,988 ≈ 2,000 and 52 ≈ 50\n\nStep 2: Multiply.\n2,000 × 50 = 100,000\n\nActual: 1,988 × 52 = 103,376. 100,000 is the closest.\n\nAnswer: (C) 100,000'
      }
    ]
  }
  ]
};


// ============================================================
// EXAM 30B — Half-Length SSAT #2 (30 questions, 30 minutes)
// ============================================================

EXAM_TESTS.exam30b = {
  id: 'exam30b',
  label: 'Half-Length SSAT #2',
  description: '30 questions · 30 minutes · 3 sections',
  totalTime: 1800,
  sections: [
  {
    name: 'Verbal', icon: '📝', timeLimit: 420,
    instructions: 'This section has two types of questions: <strong>Synonyms</strong> and <strong>Analogies</strong>. For synonyms, select the word closest in meaning to the given word. For analogies, find the pair that has the same relationship as the given pair.',
    questions: [
      { id: 'e30bv1', type: 'synonym', section: 'Verbal', question: 'BENEVOLENT', choices: ['cruel', 'kind', 'wealthy', 'nervous', 'bold'], answer: 'B', explanation: 'BENEVOLENT means well-meaning and kindly; generous.\n\nBenevolent → kind, charitable, generous, compassionate' },
      { id: 'e30bv2', type: 'synonym', section: 'Verbal', question: 'ADVERSARY', choices: ['partner', 'stranger', 'opponent', 'advisor', 'leader'], answer: 'C', explanation: 'ADVERSARY means a person one is opposed to; an opponent or enemy.\n\nAdversary → opponent, rival, foe, enemy' },
      { id: 'e30bv3', type: 'synonym', section: 'Verbal', question: 'PECULIAR', choices: ['common', 'strange', 'dangerous', 'fragile', 'beautiful'], answer: 'B', explanation: 'PECULIAR means strange, unusual, or odd.\n\nPeculiar → strange, odd, unusual, bizarre' },
      { id: 'e30bv4', type: 'synonym', section: 'Verbal', question: 'MUNDANE', choices: ['exciting', 'ordinary', 'ancient', 'delicate', 'enormous'], answer: 'B', explanation: 'MUNDANE means lacking interest or excitement; dull and ordinary.\n\nMundane → ordinary, dull, routine, everyday' },
      { id: 'e30bv5', type: 'synonym', section: 'Verbal', question: 'AMPLE', choices: ['tiny', 'sufficient', 'empty', 'narrow', 'rapid'], answer: 'B', explanation: 'AMPLE means enough or more than enough; plentiful.\n\nAmple → sufficient, plentiful, abundant, generous' },
      { id: 'e30bv6', type: 'analogy', section: 'Verbal', question: 'Doctor is to hospital as teacher is to', choices: ['student', 'school', 'textbook', 'degree', 'lesson'], answer: 'B', explanation: 'A doctor works in a hospital. A teacher works in a school.\n\nThe relationship is: professional → their workplace.' },
      { id: 'e30bv7', type: 'analogy', section: 'Verbal', question: 'Kitten is to cat as foal is to', choices: ['stable', 'horse', 'donkey', 'saddle', 'pony'], answer: 'B', explanation: 'A kitten is the young of a cat. A foal is the young of a horse.\n\nThe relationship is: young animal → adult animal.' },
      { id: 'e30bv8', type: 'analogy', section: 'Verbal', question: 'Pencil is to write as scissors is to', choices: ['paper', 'cut', 'draw', 'sharpen', 'blade'], answer: 'B', explanation: 'A pencil is used to write. Scissors are used to cut.\n\nThe relationship is: tool → its primary action.' },
      { id: 'e30bv9', type: 'analogy', section: 'Verbal', question: 'Whisper is to shout as trickle is to', choices: ['water', 'drip', 'flood', 'rain', 'stream'], answer: 'C', explanation: 'A whisper is a quiet version of a shout. A trickle is a small version of a flood.\n\nThe relationship is: small degree → large degree of the same thing.' },
      { id: 'e30bv10', type: 'analogy', section: 'Verbal', question: 'Page is to book as frame is to', choices: ['picture', 'wall', 'movie', 'glass', 'gallery'], answer: 'C', explanation: 'A page is one unit of a book. A frame is one unit of a movie.\n\nThe relationship is: individual unit → the whole it composes.' }
    ]
  },
  {
    name: 'Reading', icon: '📖', timeLimit: 540,
    instructions: 'Read each passage carefully, then answer the questions based on what is stated or implied in the passage. Each passage is followed by 4 questions.',
    questions: [
      { id: 'e30br1', type: 'reading', section: 'Reading', passageId: 'p7', question: 'The passage is primarily about', choices: ['the difficulty of learning a new sport', 'a student finding his first connection at a new school', 'why basketball is the best way to make friends', 'the differences between two schools', 'a coach who pushes students too hard'], answer: 'B', explanation: 'The passage traces Darius\'s arc from isolation (eating alone, every face a stranger) to the beginning of connection (three kids know his name, the knot loosening). The basketball is the vehicle, but the story is about finding a first connection at a new school.' },
      { id: 'e30br2', type: 'reading', section: 'Reading', passageId: 'p7', question: 'Darius kept his headphones around his neck because they', choices: ['helped him listen to music during class', 'were a gift from his mother', 'served as a form of protection or comfort', 'were required by the school dress code', 'were broken and couldn\'t play music'], answer: 'C', explanation: 'The passage says he kept them "like armor." Armor is worn for protection. The headphones were a comfort object, a barrier between Darius and the unfamiliar environment.' },
      { id: 'e30br3', type: 'reading', section: 'Reading', passageId: 'p7', question: 'As used in the passage, "the knot in his stomach... was finally starting to loosen" most nearly means', choices: ['he was getting hungry again', 'his anxiety was beginning to ease', 'he had recovered from a stomach illness', 'the exercise had made him physically tired', 'he had forgotten about his old school'], answer: 'B', explanation: 'A "knot in the stomach" describes anxiety or nervousness. The knot "loosening" means his anxiety was beginning to ease.' },
      { id: 'e30br4', type: 'reading', section: 'Reading', passageId: 'p7', question: 'The last paragraph suggests that Darius is', choices: ['confident he will become the team\'s best player', 'still unhappy about the move', 'realistically hopeful about adjusting', 'planning to transfer back to his old school', 'angry at his mother for making him move'], answer: 'C', explanation: '"He hadn\'t made friends yet — not really. But he\'d made a start." This shows realistic optimism — he recognizes forward progress and feels hopeful.' },
      { id: 'e30br5', type: 'reading', section: 'Reading', passageId: 'p8', question: 'The main idea of this passage is that', choices: ['the human brain has 86 billion neurons', 'sleeping is more important than studying', 'memory formation involves specific processes that can be strengthened through effective study habits', 'short-term memory can only hold seven items', 'rereading notes is the best study method'], answer: 'C', explanation: 'The passage explains how memory works (encoding, storage, retrieval) and connects that science to practical study strategies (active recall, sleep). The central idea ties brain science to better learning.' },
      { id: 'e30br6', type: 'reading', section: 'Reading', passageId: 'p8', question: 'According to the passage, why is rereading notes ineffective?', choices: ['It takes too long', 'It creates familiarity without strengthening retrieval pathways', 'It only works for visual learners', 'It requires too much concentration', 'It doesn\'t engage short-term memory'], answer: 'B', explanation: 'The passage states: "rereading notes is one of the least effective study strategies because it creates a feeling of familiarity without strengthening retrieval pathways."' },
      { id: 'e30br7', type: 'reading', section: 'Reading', passageId: 'p8', question: 'The phrase "neurons that fire together, wire together" means', choices: ['neurons are connected by physical wires', 'all neurons in the brain fire at the same time', 'repeated activation of the same neural pattern strengthens those connections', 'only certain neurons are capable of learning', 'the brain creates new neurons when learning occurs'], answer: 'C', explanation: 'The passage explains: "The more often that pattern fires, the stronger the connections become." Repetition strengthens the pattern.' },
      { id: 'e30br8', type: 'reading', section: 'Reading', passageId: 'p8', question: 'Based on the passage, a student preparing for a test would benefit most from', choices: ['reading the textbook chapter five times', 'highlighting every important sentence', 'quizzing themselves on the material and sleeping well afterward', 'studying all night without breaks', 'copying their notes word for word'], answer: 'C', explanation: 'Active recall (testing yourself) is identified as far more effective than passive review, and sleep plays a "crucial role in memory consolidation." The combination aligns with the passage\'s evidence.' }
    ]
  },
  {
    name: 'Quantitative', icon: '🔢', timeLimit: 840,
    instructions: 'Solve each math problem and select the best answer. No calculators are allowed.',
    questions: [
      { id: 'e30bm1', section: 'Quantitative', category: 'Algebra', topic: 'Linear Equations / Systems', question: 'If 7x − 4 = 3x + 16, what is x?', choices: ['3', '4', '5', '6', '7'], answer: 'C', explanation: '4x − 4 = 16 → 4x = 20 → x = 5\n\nAnswer: (C) 5' },
      { id: 'e30bm2', section: 'Quantitative', category: 'Algebra', topic: 'Rates / Ratios / Proportions / Percentages', question: 'A recipe calls for 2 cups of flour for every 3 cups of sugar. If you use 9 cups of sugar, how many cups of flour do you need?', choices: ['3', '4', '5', '6', '8'], answer: 'D', explanation: '2/3 = x/9 → 3x = 18 → x = 6\n\nAnswer: (D) 6' },
      { id: 'e30bm3', section: 'Quantitative', category: 'Algebra', topic: 'Factoring', question: 'Which expression is equivalent to x² − 49?', choices: ['(x − 49)(x + 1)', '(x − 7)²', '(x + 7)(x − 7)', '(x + 49)(x − 1)', '(x + 7)²'], answer: 'C', explanation: 'Difference of squares: x² − 7² = (x + 7)(x − 7)\n\nAnswer: (C)' },
      { id: 'e30bm4', section: 'Quantitative', category: 'Algebra', topic: 'Functions', question: 'If g(x) = 3x + 7, what is g(−2)?', choices: ['−1', '0', '1', '3', '13'], answer: 'C', explanation: 'g(−2) = 3(−2) + 7 = −6 + 7 = 1\n\nAnswer: (C) 1' },
      { id: 'e30bm5', section: 'Quantitative', category: 'Algebra', topic: 'Classic Problem Solving', question: 'A train travels at 60 mph. A second train leaves the same station 2 hours later at 90 mph. How many hours after the second train departs will it catch the first?', choices: ['2', '3', '4', '5', '6'], answer: 'C', explanation: 'Head start: 2 × 60 = 120 miles. Closing rate: 90 − 60 = 30 mph. Time: 120 ÷ 30 = 4 hours.\n\nAnswer: (C) 4' },
      { id: 'e30bm6', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Area', question: 'A triangle has a base of 10 cm and a height of 14 cm. What is its area?', choices: ['24 cm²', '48 cm²', '70 cm²', '100 cm²', '140 cm²'], answer: 'C', explanation: 'A = ½ × 10 × 14 = 70 cm²\n\nAnswer: (C) 70 cm²' },
      { id: 'e30bm7', section: 'Quantitative', category: 'Geometry & Measurement', topic: '3D: Volume / Surface Area', question: 'A cube has a side length of 5 cm. What is its volume?', choices: ['15 cm³', '25 cm³', '75 cm³', '100 cm³', '125 cm³'], answer: 'E', explanation: 'V = s³ = 5³ = 125 cm³\n\nAnswer: (E) 125 cm³' },
      { id: 'e30bm8', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Angles', question: 'Two angles are complementary. If one angle measures 37°, what is the other?', choices: ['43°', '53°', '63°', '127°', '143°'], answer: 'B', explanation: 'Complementary angles add to 90°. 90° − 37° = 53°\n\nAnswer: (B) 53°' },
      { id: 'e30bm9', section: 'Quantitative', category: 'Data Analysis', topic: 'Mean / Median / Mode / Range', question: 'The heights of 5 players in inches are: 68, 72, 70, 74, 71. What is the range?', choices: ['2', '4', '5', '6', '8'], answer: 'D', explanation: 'Range = 74 − 68 = 6\n\nAnswer: (D) 6' },
      { id: 'e30bm10', section: 'Quantitative', category: 'Data Analysis', topic: 'Probability', question: 'A coin is flipped 3 times. What is the probability of getting heads all 3 times?', choices: ['1/2', '1/4', '1/6', '1/8', '3/8'], answer: 'D', explanation: 'P(HHH) = ½ × ½ × ½ = 1/8\n\nAnswer: (D) 1/8' },
      { id: 'e30bm11', section: 'Quantitative', category: 'Numbers & Operations', topic: 'Arithmetic', question: 'What is the value of (−3)² + (−2)³?', choices: ['−17', '1', '5', '13', '17'], answer: 'B', explanation: '(−3)² = 9, (−2)³ = −8. 9 + (−8) = 1\n\nAnswer: (B) 1' },
      { id: 'e30bm12', section: 'Quantitative', category: 'Reasoning', topic: 'Puzzle / Logical Reasoning', question: 'Five friends are in a line. Maya is ahead of Ben. Carlos is behind David. Ben is ahead of Carlos. David is first. Who is last?', choices: ['Maya', 'Ben', 'Carlos', 'David', 'Cannot be determined'], answer: 'E', explanation: 'David is 1st. Maya before Ben, Ben before Carlos. But the 5th friend\'s position is unknown — they could be last. We can\'t determine who is last.\n\nAnswer: (E) Cannot be determined' }
    ]
  }
  ]
};


// ============================================================
// EXAM 60B — Full-Length SSAT #2 (60 questions, 60 minutes)
// ============================================================

EXAM_TESTS.exam60b = {
  id: 'exam60b',
  label: 'Full-Length SSAT #2',
  description: '60 questions · 60 minutes · 3 sections',
  totalTime: 3600,
  sections: [
  {
    name: 'Verbal', icon: '📝', timeLimit: 840,
    instructions: 'This section has two types of questions: <strong>Synonyms</strong> and <strong>Analogies</strong>. For synonyms, select the word closest in meaning to the given word. For analogies, find the pair that has the same relationship as the given pair.',
    questions: [
      { id: 'e60bv1', type: 'synonym', section: 'Verbal', question: 'RESILIENT', choices: ['fragile', 'tough', 'quiet', 'generous', 'clever'], answer: 'B', explanation: 'RESILIENT means able to recover quickly from difficulties; tough and flexible.\n\nResilient → tough, strong, adaptable, hardy' },
      { id: 'e60bv2', type: 'synonym', section: 'Verbal', question: 'CANDID', choices: ['secretive', 'honest', 'graceful', 'ambitious', 'timid'], answer: 'B', explanation: 'CANDID means truthful and straightforward; frank.\n\nCandid → honest, frank, open, direct' },
      { id: 'e60bv3', type: 'synonym', section: 'Verbal', question: 'ARID', choices: ['humid', 'dry', 'fertile', 'frozen', 'windy'], answer: 'B', explanation: 'ARID means very dry, having little or no rain.\n\nArid → dry, parched, barren, desert-like' },
      { id: 'e60bv4', type: 'synonym', section: 'Verbal', question: 'NOVICE', choices: ['expert', 'beginner', 'inventor', 'leader', 'teacher'], answer: 'B', explanation: 'NOVICE means a person new to a field or activity; a beginner.\n\nNovice → beginner, newcomer, amateur, trainee' },
      { id: 'e60bv5', type: 'synonym', section: 'Verbal', question: 'INEVITABLE', choices: ['avoidable', 'uncertain', 'unavoidable', 'invisible', 'immediate'], answer: 'C', explanation: 'INEVITABLE means certain to happen; unavoidable.\n\nInevitable → unavoidable, certain, inescapable, sure' },
      { id: 'e60bv6', type: 'synonym', section: 'Verbal', question: 'DIMINISH', choices: ['increase', 'reduce', 'destroy', 'improve', 'separate'], answer: 'B', explanation: 'DIMINISH means to make or become less; to reduce.\n\nDiminish → reduce, decrease, lessen, shrink' },
      { id: 'e60bv7', type: 'synonym', section: 'Verbal', question: 'ENDEAVOR', choices: ['avoid', 'attempt', 'finish', 'reject', 'observe'], answer: 'B', explanation: 'ENDEAVOR means to try hard to do or achieve something; an attempt.\n\nEndeavor → attempt, effort, try, undertaking' },
      { id: 'e60bv8', type: 'synonym', section: 'Verbal', question: 'OBSTINATE', choices: ['flexible', 'stubborn', 'clever', 'anxious', 'generous'], answer: 'B', explanation: 'OBSTINATE means stubbornly refusing to change one\'s opinion or course of action.\n\nObstinate → stubborn, headstrong, unyielding, pig-headed' },
      { id: 'e60bv9', type: 'synonym', section: 'Verbal', question: 'SERENE', choices: ['violent', 'calm', 'strict', 'cheerful', 'gloomy'], answer: 'B', explanation: 'SERENE means calm, peaceful, and untroubled.\n\nSerene → calm, peaceful, tranquil, placid' },
      { id: 'e60bv10', type: 'synonym', section: 'Verbal', question: 'PRUDENT', choices: ['reckless', 'wise', 'wealthy', 'patient', 'proud'], answer: 'B', explanation: 'PRUDENT means acting with care and thought for the future; wise.\n\nPrudent → wise, careful, sensible, judicious' },
      { id: 'e60bv11', type: 'analogy', section: 'Verbal', question: 'Helmet is to head as glove is to', choices: ['arm', 'hand', 'finger', 'wrist', 'fist'], answer: 'B', explanation: 'A helmet protects the head. A glove protects the hand.\n\nThe relationship is: protective gear → body part it covers.' },
      { id: 'e60bv12', type: 'analogy', section: 'Verbal', question: 'Telescope is to stars as microscope is to', choices: ['laboratory', 'science', 'cells', 'glass', 'medicine'], answer: 'C', explanation: 'A telescope observes distant things like stars. A microscope observes tiny things like cells.\n\nThe relationship is: viewing instrument → what it helps you see.' },
      { id: 'e60bv13', type: 'analogy', section: 'Verbal', question: 'Composer is to symphony as playwright is to', choices: ['actor', 'stage', 'drama', 'audience', 'music'], answer: 'C', explanation: 'A composer creates a symphony. A playwright creates a drama.\n\nThe relationship is: creator → their creation.' },
      { id: 'e60bv14', type: 'analogy', section: 'Verbal', question: 'Bark is to tree as skin is to', choices: ['bone', 'body', 'blood', 'muscle', 'face'], answer: 'B', explanation: 'Bark is the outer covering of a tree. Skin is the outer covering of the body.\n\nThe relationship is: outer layer → what it covers.' },
      { id: 'e60bv15', type: 'analogy', section: 'Verbal', question: 'Stale is to fresh as blunt is to', choices: ['dull', 'sharp', 'heavy', 'thick', 'smooth'], answer: 'B', explanation: 'Stale is the opposite of fresh. Blunt is the opposite of sharp.\n\nThe relationship is: adjective → its antonym.' },
      { id: 'e60bv16', type: 'analogy', section: 'Verbal', question: 'Archipelago is to island as constellation is to', choices: ['moon', 'galaxy', 'star', 'planet', 'comet'], answer: 'C', explanation: 'An archipelago is a group of islands. A constellation is a group of stars.\n\nThe relationship is: collection → individual unit.' },
      { id: 'e60bv17', type: 'analogy', section: 'Verbal', question: 'Author is to novel as sculptor is to', choices: ['museum', 'clay', 'statue', 'chisel', 'painting'], answer: 'C', explanation: 'An author creates a novel. A sculptor creates a statue.\n\nThe relationship is: artist → their finished work.' },
      { id: 'e60bv18', type: 'analogy', section: 'Verbal', question: 'Rehearsal is to performance as draft is to', choices: ['pencil', 'essay', 'mistake', 'paragraph', 'teacher'], answer: 'B', explanation: 'A rehearsal is a practice version of a performance. A draft is a practice version of an essay.\n\nThe relationship is: preliminary version → final product.' },
      { id: 'e60bv19', type: 'analogy', section: 'Verbal', question: 'Flock is to birds as herd is to', choices: ['sheep', 'cattle', 'fish', 'dogs', 'bees'], answer: 'B', explanation: 'A flock is a group of birds. A herd is a group of cattle.\n\nThe relationship is: group name → the animals in it.' },
      { id: 'e60bv20', type: 'analogy', section: 'Verbal', question: 'Hammer is to nail as wrench is to', choices: ['screw', 'bolt', 'pliers', 'wood', 'pipe'], answer: 'B', explanation: 'A hammer is the tool used on a nail. A wrench is the tool used on a bolt.\n\nThe relationship is: tool → the fastener it works on.' }
    ]
  },
  {
    name: 'Reading', icon: '📖', timeLimit: 1080,
    instructions: 'Read each passage carefully, then answer the questions based on what is stated or implied in the passage. Each passage is followed by 4 questions.',
    questions: [
      { id: 'e60br1', type: 'reading', section: 'Reading', passageId: 'p9', question: 'The passage is primarily about', choices: ['the life of Harriet Tubman', 'the network of people and methods that helped enslaved people escape', 'why the Underground Railroad used train terminology', 'the geography of escape routes to Canada', 'the punishments for helping fugitives'], answer: 'B', explanation: 'The passage covers the entire network — terminology, roles, and collective nature. The central focus is the system as a whole, not one individual.' },
      { id: 'e60br2', type: 'reading', section: 'Reading', passageId: 'p9', question: 'According to the passage, who were "conductors"?', choices: ['People who drove actual trains', 'Enslaved people who chose not to escape', 'People who guided fugitives between safe houses', 'Government officials who enforced the law', 'People who owned the safe houses'], answer: 'C', explanation: '"Those who guided escaped people between stations were \'conductors.\'"' },
      { id: 'e60br3', type: 'reading', section: 'Reading', passageId: 'p9', question: 'The statement that the Railroad "succeeded... because of collective courage" suggests', choices: ['Harriet Tubman\'s contributions were exaggerated', 'the effort required many ordinary people working together', 'the railroad would have succeeded without Tubman', 'only Quaker families participated', 'the government secretly supported the effort'], answer: 'B', explanation: 'The final paragraph lists ordinary people — farmers, Quaker families, free Black communities — all contributing. The system worked because of widespread collective effort.' },
      { id: 'e60br4', type: 'reading', section: 'Reading', passageId: 'p9', question: 'The people who helped on the Underground Railroad', choices: ['faced no legal consequences', 'were motivated by financial rewards', 'broke the law because they believed the law was unjust', 'operated with permission of local authorities', 'were all members of the same religious group'], answer: 'C', explanation: 'They "chose to break the law because they believed the law was wrong" and risked "imprisonment and death."' },
      { id: 'e60br5', type: 'reading', section: 'Reading', passageId: 'p10', question: 'The passage mainly describes', choices: ['how basketball became more popular than football', 'the rules that make basketball different from soccer', 'how basketball was invented to solve a specific problem', 'why the YMCA was the best sports organization', 'the history of the Olympic basketball tournament'], answer: 'C', explanation: 'The passage begins with Naismith\'s problem (indoor winter activity), walks through his design process, and shows the solution.' },
      { id: 'e60br6', type: 'reading', section: 'Reading', passageId: 'p10', question: 'Why did Naismith decide the goal should be elevated?', choices: ['No goals were available at floor level', 'He wanted the game to be similar to football', 'So that scoring required skill rather than force', 'The peach baskets were too heavy for the ground', 'The gymnasium ceiling was very low'], answer: 'C', explanation: '"Naismith realized he needed a game where the goal was elevated — placed above the players — so that scoring required skill rather than force."' },
      { id: 'e60br7', type: 'reading', section: 'Reading', passageId: 'p10', question: 'The detail about the janitor climbing a ladder shows', choices: ['janitors were important team members', 'how different the original game was from modern basketball', 'why the game was unpopular at first', 'the gymnasium was poorly equipped', 'Naismith didn\'t plan the game carefully'], answer: 'B', explanation: 'The peach basket detail highlights how primitive the original game was compared to today\'s version with open nets.' },
      { id: 'e60br8', type: 'reading', section: 'Reading', passageId: 'p10', question: 'Basketball\'s rapid spread was partly due to', choices: ['television coverage of early games', 'the YMCA\'s existing network of locations', 'Naismith\'s personal marketing efforts', 'its inclusion in the Olympics', 'the simplicity of the peach basket design'], answer: 'B', explanation: '"The game spread rapidly through the YMCA network." The YMCA already had locations across the US and Canada.' },
      { id: 'e60br9', type: 'reading', section: 'Reading', passageId: 'p11', question: 'The primary cause of volcanic activity is', choices: ['earthquakes shaking the ground', 'rain water seeping into the Earth', 'heat from the mantle driving tectonic plate movement', 'wind erosion of mountain surfaces', 'chemical reactions in ocean water'], answer: 'C', explanation: 'Mantle heat "drives the movement of tectonic plates" and volcanoes form at plate boundaries.' },
      { id: 'e60br10', type: 'reading', section: 'Reading', passageId: 'p11', question: 'The "Ring of Fire" contains 75% of active volcanoes because', choices: ['the Pacific Ocean is the deepest ocean', 'the Pacific Plate is being subducted beneath several surrounding plates', 'there are more hot spots under the Pacific', 'the Pacific Ocean has the warmest water', 'there are more divergent boundaries in the Pacific'], answer: 'B', explanation: '"This concentration exists because the Pacific Plate is being subducted beneath several surrounding plates simultaneously."' },
      { id: 'e60br11', type: 'reading', section: 'Reading', passageId: 'p11', question: 'As used in the passage, "stationary" most nearly means', choices: ['moving quickly', 'remaining in one place', 'very hot', 'extremely large', 'recently discovered'], answer: 'B', explanation: 'Hot spots are "stationary plumes" — they stay in one place while the plate moves above them.' },
      { id: 'e60br12', type: 'reading', section: 'Reading', passageId: 'p11', question: 'What makes Iceland geologically unusual?', choices: ['It has no active volcanoes', 'It sits on a convergent boundary', 'It is on a mid-ocean ridge visible above sea level', 'It was created by a hot spot like Hawaii', 'It is the largest volcanic island'], answer: 'C', explanation: '"Iceland... is one of the few places where this process is visible above sea level." It sits on the Mid-Atlantic Ridge.' },
      { id: 'e60br13', type: 'reading', section: 'Reading', passageId: 'p12', question: 'The passage is primarily about', choices: ['the importance of musical training', 'performing despite fear rather than waiting for fear to disappear', 'why piano competitions are stressful', 'how to practice a song effectively', 'the relationship between Jade and her grandmother'], answer: 'B', explanation: 'Jade\'s hands never stop shaking — she performs anyway, and the trembling becomes "irrelevant." Courage isn\'t absence of fear, it\'s acting despite it.' },
      { id: 'e60br14', type: 'reading', section: 'Reading', passageId: 'p12', question: 'Jade kept a tally of her practice sessions because', choices: ['her teacher required it for a grade', 'she wanted to track and quantify her preparation', 'she was competing against another student', 'she forgot how many times she had practiced', 'her parents told her to practice 200 times'], answer: 'B', explanation: 'The tally shows Jade\'s deliberate, methodical approach to preparation. She tracked every repetition, demonstrating dedication.' },
      { id: 'e60br15', type: 'reading', section: 'Reading', passageId: 'p12', question: '"The music stopped being a performance and became a conversation" means', choices: ['Jade started talking to the audience', 'the music shifted from forced and mechanical to natural and personal', 'Jade forgot the notes and improvised', 'the piano began making unusual sounds', 'Jade could hear the audience whispering'], answer: 'B', explanation: 'A "performance" implies something stiff. A "conversation" implies something natural. The shift describes when Jade stopped overthinking and connected with the music.' },
      { id: 'e60br16', type: 'reading', section: 'Reading', passageId: 'p12', question: 'Jade\'s grandmother\'s quote suggests that courage requires', choices: ['eliminating all nervousness before acting', 'choosing to act on something important despite being afraid', 'pretending not to be scared', 'years of practice and preparation', 'support from family and friends'], answer: 'B', explanation: '"Courage isn\'t the absence of fear. It\'s deciding that something else matters more." Courage is about priorities — you\'re still afraid, but the goal matters more.' }
    ]
  },
  {
    name: 'Quantitative', icon: '🔢', timeLimit: 1680,
    instructions: 'Solve each math problem and select the best answer. No calculators are allowed.',
    questions: [
      { id: 'e60bm1', section: 'Quantitative', category: 'Algebra', topic: 'Linear Equations / Systems', question: 'If 2(x + 5) = 3x − 4, what is x?', choices: ['6', '9', '12', '14', '16'], answer: 'D', explanation: '2x + 10 = 3x − 4 → 10 = x − 4 → x = 14\n\nAnswer: (D) 14' },
      { id: 'e60bm2', section: 'Quantitative', category: 'Algebra', topic: 'Rates / Ratios / Proportions / Percentages', question: 'A basketball player makes 7 out of every 10 free throws. If she attempts 50, how many would you expect her to make?', choices: ['25', '30', '35', '40', '45'], answer: 'C', explanation: '7/10 = 70%. 0.70 × 50 = 35\n\nAnswer: (C) 35' },
      { id: 'e60bm3', section: 'Quantitative', category: 'Algebra', topic: 'Slope', question: 'Which line is parallel to y = 3x + 2?', choices: ['y = −3x + 2', 'y = 3x − 7', 'y = ⅓x + 2', 'y = −⅓x + 5', 'y = 2x + 3'], answer: 'B', explanation: 'Parallel lines have the same slope. y = 3x + 2 has slope 3. y = 3x − 7 also has slope 3.\n\nAnswer: (B)' },
      { id: 'e60bm4', section: 'Quantitative', category: 'Algebra', topic: 'Quadratic Equations', question: 'What are the solutions to x² − 5x + 6 = 0?', choices: ['x = 1, x = 6', 'x = −2, x = −3', 'x = 2, x = 3', 'x = −1, x = 6', 'x = 1, x = 5'], answer: 'C', explanation: 'Factor: (x − 2)(x − 3) = 0 → x = 2 or x = 3\n\nAnswer: (C)' },
      { id: 'e60bm5', section: 'Quantitative', category: 'Algebra', topic: 'Exponential Expressions', question: 'Simplify: 5⁴ ÷ 5²', choices: ['5', '10', '25', '125', '625'], answer: 'C', explanation: '5⁴ ÷ 5² = 5² = 25\n\nAnswer: (C) 25' },
      { id: 'e60bm6', section: 'Quantitative', category: 'Algebra', topic: 'Classic Problem Solving', question: 'The sum of three consecutive integers is 72. What is the largest?', choices: ['22', '23', '24', '25', '26'], answer: 'D', explanation: 'n + (n+1) + (n+2) = 72 → 3n + 3 = 72 → n = 23. Largest = 25.\n\nAnswer: (D) 25' },
      { id: 'e60bm7', section: 'Quantitative', category: 'Algebra', topic: 'Rational Expressions', question: 'Simplify: 12x³ / 4x', choices: ['3x', '3x²', '4x²', '8x²', '3x³'], answer: 'B', explanation: '12 ÷ 4 = 3, x³ ÷ x = x². Result: 3x²\n\nAnswer: (B) 3x²' },
      { id: 'e60bm8', section: 'Quantitative', category: 'Algebra', topic: 'Functions', question: 'If h(x) = x² + 2x − 3, what is h(−3)?', choices: ['−6', '0', '6', '12', '18'], answer: 'B', explanation: 'h(−3) = 9 − 6 − 3 = 0\n\nAnswer: (B) 0' },
      { id: 'e60bm9', section: 'Quantitative', category: 'Algebra', topic: 'Graphs', question: 'At what point does y = 4x − 8 cross the x-axis?', choices: ['(0, −8)', '(2, 0)', '(4, 0)', '(−2, 0)', '(8, 0)'], answer: 'B', explanation: 'Set y = 0: 0 = 4x − 8 → x = 2. Crosses at (2, 0).\n\nAnswer: (B)' },
      { id: 'e60bm10', section: 'Quantitative', category: 'Algebra', topic: 'Radical Expressions', question: 'What is √144 + √49?', choices: ['17', '19', '21', '23', '193'], answer: 'B', explanation: '√144 = 12, √49 = 7. 12 + 7 = 19\n\nAnswer: (B) 19' },
      { id: 'e60bm11', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Length / Perimeter / Circumference', question: 'A circle has a diameter of 14 cm. What is its circumference? (π ≈ 22/7)', choices: ['22 cm', '28 cm', '44 cm', '88 cm', '154 cm'], answer: 'C', explanation: 'C = πd = (22/7) × 14 = 44 cm\n\nAnswer: (C) 44 cm' },
      { id: 'e60bm12', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Area', question: 'A trapezoid has parallel sides of 8 cm and 12 cm, and a height of 5 cm. What is its area?', choices: ['40 cm²', '45 cm²', '50 cm²', '60 cm²', '100 cm²'], answer: 'C', explanation: 'A = ½ × (8 + 12) × 5 = 50 cm²\n\nAnswer: (C) 50 cm²' },
      { id: 'e60bm13', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Transformations', question: 'If (3, −2) is reflected over the x-axis, what are the new coordinates?', choices: ['(−3, −2)', '(3, 2)', '(−3, 2)', '(2, −3)', '(−2, 3)'], answer: 'B', explanation: 'Reflecting over x-axis: keep x, flip y sign. (3, −2) → (3, 2)\n\nAnswer: (B)' },
      { id: 'e60bm14', section: 'Quantitative', category: 'Geometry & Measurement', topic: '3D: Volume / Surface Area', question: 'A cylinder has radius 3 cm and height 10 cm. What is its volume? (π ≈ 3.14)', choices: ['28.26 cm³', '94.2 cm³', '188.4 cm³', '282.6 cm³', '942 cm³'], answer: 'D', explanation: 'V = πr²h = 3.14 × 9 × 10 = 282.6 cm³\n\nAnswer: (D) 282.6 cm³' },
      { id: 'e60bm15', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Coordinate Geometry', question: 'What is the distance between (−1, 3) and (3, 6)?', choices: ['3', '4', '5', '6', '7'], answer: 'C', explanation: 'd = √[4² + 3²] = √[16 + 9] = √25 = 5\n\nAnswer: (C) 5' },
      { id: 'e60bm16', section: 'Quantitative', category: 'Geometry & Measurement', topic: 'Converting Units / Dimensional Analysis', question: 'How many inches are in 4.5 feet?', choices: ['36', '42', '48', '54', '60'], answer: 'D', explanation: '4.5 × 12 = 54 inches\n\nAnswer: (D) 54' },
      { id: 'e60bm17', section: 'Quantitative', category: 'Data Analysis', topic: 'Mean / Median / Mode / Range', question: 'Scores are: 88, 92, 76, 88, 96. What is the mode?', choices: ['76', '84', '88', '92', '96'], answer: 'C', explanation: '88 appears twice; all others once. Mode = 88\n\nAnswer: (C) 88' },
      { id: 'e60bm18', section: 'Quantitative', category: 'Data Analysis', topic: 'Probability', question: 'A bag has 5 red, 3 blue, and 2 yellow marbles. Probability of NOT drawing red?', choices: ['1/10', '1/5', '3/10', '1/2', '2/5'], answer: 'D', explanation: 'Total = 10. Not red = 5. P = 5/10 = 1/2\n\nAnswer: (D) 1/2' },
      { id: 'e60bm19', section: 'Quantitative', category: 'Data Analysis', topic: 'Set Theory', question: 'In a class of 30, 18 play basketball, 12 play soccer, 5 play both. How many play neither?', choices: ['0', '3', '5', '7', '10'], answer: 'C', explanation: 'Either = 18 + 12 − 5 = 25. Neither = 30 − 25 = 5\n\nAnswer: (C) 5' },
      { id: 'e60bm20', section: 'Quantitative', category: 'Data Analysis', topic: 'Data Graphs & Tables', question: 'A pie chart shows 25% math, 30% science, 20% English, rest history. With 200 students, how many prefer history?', choices: ['25', '40', '50', '60', '100'], answer: 'C', explanation: 'History = 100% − 25% − 30% − 20% = 25%. 0.25 × 200 = 50\n\nAnswer: (C) 50' },
      { id: 'e60bm21', section: 'Quantitative', category: 'Numbers & Operations', topic: 'Number Sense / Number Theory', question: 'What is the LCM of 6 and 8?', choices: ['12', '16', '24', '32', '48'], answer: 'C', explanation: 'Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... LCM = 24\n\nAnswer: (C) 24' },
      { id: 'e60bm22', section: 'Quantitative', category: 'Numbers & Operations', topic: 'Estimation', question: 'Which is closest to 49.7 × 20.3?', choices: ['700', '800', '900', '1,000', '1,100'], answer: 'D', explanation: '50 × 20 = 1,000. Actual: 1,008.91\n\nAnswer: (D) 1,000' },
      { id: 'e60bm23', section: 'Quantitative', category: 'Reasoning', topic: 'Sequences & Patterns', question: 'What is the 8th term in: 3, 7, 11, 15, 19, ...?', choices: ['27', '29', '31', '33', '35'], answer: 'C', explanation: 'Pattern: +4 each time. a₈ = 3 + 7×4 = 31\n\nAnswer: (C) 31' },
      { id: 'e60bm24', section: 'Quantitative', category: 'Reasoning', topic: 'Visual Spatial Reasoning', question: 'A square paper is folded in half twice. A hole is punched through all layers. How many holes when unfolded?', choices: ['1', '2', '3', '4', '8'], answer: 'D', explanation: 'Fold 1: 2 layers. Fold 2: 4 layers. Punch through 4 layers = 4 holes.\n\nAnswer: (D) 4' }
    ]
  }
  ]
};
