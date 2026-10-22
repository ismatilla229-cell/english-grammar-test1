/**
 * ========================================================
 * GRADE 6 ENGLISH GRAMMAR TEST - SCRIPT.JS
 * Present Simple & Present Continuous Interactive Website
 * ========================================================
 */

// Strict Mode for best practices
'use strict';

/**
 * DATABASE OF 30 GRADE 6 GRAMMAR QUESTIONS
 * Balanced between Present Simple & Present Continuous across 3 levels:
 * - Level 1: Easy (10 questions)
 * - Level 2: Medium (10 questions)
 * - Level 3: Challenge (10 questions)
 */
const QUESTIONS_BANK = [
  // ==========================================
  // LEVEL 1: EASY (10 QUESTIONS)
  // ==========================================
  {
    id: 1,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Multiple Choice",
    instruction: "Choose the correct verb form to complete the routine sentence:",
    sentence: "She _____ to school every day.",
    options: [
      "go",
      "goes",
      "is going",
      "going"
    ],
    correctAnswer: "goes",
    signalWord: "every day",
    hint: "Signal words like 'every day' indicate a daily routine (Present Simple). For singular 3rd-person subjects (he, she, it), verbs take -s or -es.",
    explanation: "We use the Present Simple for habits and daily routines with 'every day'. Since the subject is 'She' (third-person singular), we add '-es' to 'go' to make 'goes'."
  },
  {
    id: 2,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Continuous",
    type: "Choose Correct Verb Form",
    instruction: "Complete the sentence with the action happening right now:",
    sentence: "Look! The children _____ in the park.",
    options: [
      "play",
      "plays",
      "are playing",
      "played"
    ],
    correctAnswer: "are playing",
    signalWord: "Look!",
    hint: "The word 'Look!' alerts us to an action happening right at this exact moment. Use am/is/are + verb-ing.",
    explanation: "'Look!' signals that an action is currently in progress (Present Continuous). 'The children' is plural (they), so we use 'are' + verb-ing ('are playing')."
  },
  {
    id: 3,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Multiple Choice",
    instruction: "Choose the correct form to describe this morning habit:",
    sentence: "My brother usually _____ breakfast at 7 o'clock.",
    options: [
      "eat",
      "eats",
      "is eating",
      "eating"
    ],
    correctAnswer: "eats",
    signalWord: "usually",
    hint: "'Usually' is an adverb of frequency showing a regular habit. The subject 'My brother' equals 'he'.",
    explanation: "'Usually' indicates a regular routine (Present Simple). For 'My brother' (he), we add '-s' to the base verb, giving 'eats'."
  },
  {
    id: 4,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Continuous",
    type: "Choose Correct Verb Form",
    instruction: "Choose the verb form for this action happening at the moment:",
    sentence: "I _____ my homework right now.",
    options: [
      "do",
      "does",
      "am doing",
      "doing"
    ],
    correctAnswer: "am doing",
    signalWord: "right now",
    hint: "'Right now' indicates an action occurring this instant. Which helping verb pairs with 'I' before verb-ing?",
    explanation: "'Right now' specifies the Present Continuous tense. For the subject 'I', we use 'am' + verb-ing ('am doing')."
  },
  {
    id: 5,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Identify Tense",
    instruction: "Identify the grammar tense used in the following sentence:",
    sentence: "\"Birds fly in the sky during the day.\"",
    options: [
      "Present Simple",
      "Present Continuous",
      "Past Simple",
      "Future Simple"
    ],
    correctAnswer: "Present Simple",
    signalWord: "General fact of nature",
    hint: "Think about whether this statement expresses a permanent fact of nature or an action happening just right now.",
    explanation: "This sentence states a general truth and fact about birds using the base verb 'fly', which is the Present Simple tense."
  },
  {
    id: 6,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Continuous",
    type: "Fill-in-the-blank",
    instruction: "Choose the correct verb to complete what you hear right now:",
    sentence: "Listen! The baby _____ in the nursery room.",
    options: [
      "cries",
      "cry",
      "is crying",
      "are crying"
    ],
    correctAnswer: "is crying",
    signalWord: "Listen!",
    hint: "'Listen!' tells us an event is happening as we speak. 'The baby' is singular (he or she).",
    explanation: "The attention word 'Listen!' triggers the Present Continuous tense. Since 'The baby' is singular, we use 'is' + crying."
  },
  {
    id: 7,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Multiple Choice",
    instruction: "Select the correct negative helping verb for this preference:",
    sentence: "They _____ like spicy food very much.",
    options: [
      "doesn't",
      "don't",
      "aren't",
      "isn't"
    ],
    correctAnswer: "don't",
    signalWord: "General preference / Like",
    hint: "In Present Simple negative sentences, plural subjects (I, you, we, they) use 'do not' ('don't') with the base verb.",
    explanation: "For the plural pronoun 'They' in Present Simple negative statements, we use 'do not' ('don't') + base verb 'like'."
  },
  {
    id: 8,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Continuous",
    type: "Identify Tense",
    instruction: "Identify which grammatical tense is used here:",
    sentence: "\"We are watching a funny comedy movie at the moment.\"",
    options: [
      "Present Continuous",
      "Present Simple",
      "Past Continuous",
      "Present Perfect"
    ],
    correctAnswer: "Present Continuous",
    signalWord: "at the moment",
    hint: "Notice the auxiliary verb 'are' paired with the '-ing' verb ('watching') and the time phrase 'at the moment'.",
    explanation: "The formula 'are + watching' together with the signal phrase 'at the moment' belongs to the Present Continuous tense."
  },
  {
    id: 9,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Choose Correct Verb Form",
    instruction: "Complete this universal scientific fact with the correct verb:",
    sentence: "The sun _____ in the east and sets in the west.",
    options: [
      "rise",
      "rises",
      "is rising",
      "rising"
    ],
    correctAnswer: "rises",
    signalWord: "Scientific fact",
    hint: "Scientific truths and facts of nature always take the Present Simple. 'The sun' is singular (it).",
    explanation: "Scientific truths use Present Simple. 'The sun' is a third-person singular noun (it), so we add '-s' to form 'rises'."
  },
  {
    id: 10,
    level: "easy",
    levelLabel: "Level 1: Easy",
    tenseFocus: "Present Simple",
    type: "Complete Sentence",
    instruction: "Complete the question with the correct helper verb:",
    sentence: "_____ you walk to school every morning?",
    options: [
      "Do",
      "Does",
      "Are",
      "Is"
    ],
    correctAnswer: "Do",
    signalWord: "every morning",
    hint: "For Present Simple questions with the subject 'you' and a base verb ('walk'), what auxiliary verb do we use?",
    explanation: "In Present Simple questions with 'you', we start with 'Do' ('Do you walk...?'). 'Does' is for he/she/it, and 'Are' would require 'walking'."
  },

  // ==========================================
  // LEVEL 2: MEDIUM (10 QUESTIONS)
  // ==========================================
  {
    id: 11,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Tense Comparison",
    type: "Complete Sentence",
    instruction: "Complete the sentence showing a contrast between routine and today:",
    sentence: "Tom usually plays tennis, but today he _____ basketball with his cousins.",
    options: [
      "plays",
      "play",
      "is playing",
      "are playing"
    ],
    correctAnswer: "is playing",
    signalWord: "today",
    hint: "The second part of the sentence describes what Tom is doing 'today' (temporary change from his routine).",
    explanation: "While 'usually' takes Present Simple (plays), 'today' signifies a temporary activity occurring right now, requiring Present Continuous: 'is playing'."
  },
  {
    id: 12,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Continuous",
    type: "Fill-in-the-blank",
    instruction: "Complete the sentence with the action currently in progress:",
    sentence: "Please be quiet! Dad _____ on an important phone call right now.",
    options: [
      "talks",
      "talk",
      "is talking",
      "are talking"
    ],
    correctAnswer: "is talking",
    signalWord: "Be quiet! / right now",
    hint: "'Be quiet!' and 'right now' indicate an action taking place at this very second. 'Dad' is singular (he).",
    explanation: "'Be quiet!' and 'right now' denote an active event in the Present Continuous. Singular subject 'Dad' pairs with 'is talking'."
  },
  {
    id: 13,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Simple",
    type: "Choose Correct Verb Form",
    instruction: "Select the correct negative verb form for this weekly schedule:",
    sentence: "Emma _____ her bedroom on Mondays; she cleans it on Saturdays instead.",
    options: [
      "doesn't clean",
      "don't clean",
      "isn't cleaning",
      "not cleans"
    ],
    correctAnswer: "doesn't clean",
    signalWord: "on Mondays",
    hint: "'On Mondays' denotes a regular weekly schedule (Present Simple). For singular subject 'Emma' (she), what is the negative helper?",
    explanation: "Regular schedules use Present Simple. With third-person singular 'Emma' (she), the negative form is 'does not' / 'doesn't' + base verb 'clean'."
  },
  {
    id: 14,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Continuous",
    type: "Error Correction",
    instruction: "Identify how to correct the grammar error in this sentence:",
    sentence: "\"Listen! Somebody are knocking on the front door.\"",
    options: [
      "Change 'are knocking' to 'is knocking'",
      "Change 'Listen' to 'Hear'",
      "Change 'knocking' to 'knock'",
      "Change 'on' to 'at'"
    ],
    correctAnswer: "Change 'are knocking' to 'is knocking'",
    signalWord: "Listen! / Somebody",
    hint: "Indefinite pronouns such as 'somebody', 'someone', and 'everyone' are grammatically singular.",
    explanation: "Even though 'somebody' refers to an unknown person, it is grammatically singular. Therefore, it requires the singular helper verb 'is knocking', not 'are knocking'."
  },
  {
    id: 15,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Continuous",
    type: "Choose Correct Verb Form",
    instruction: "Choose the correctly spelled Present Continuous form:",
    sentence: "The fastest swimmers _____ in the school pool at the moment.",
    options: [
      "are swimming",
      "is swimming",
      "are swiming",
      "swims"
    ],
    correctAnswer: "are swimming",
    signalWord: "at the moment",
    hint: "Subject is plural ('The fastest swimmers'). Remember: when a one-syllable verb ends in consonant-vowel-consonant (s-w-i-m), double the last letter before adding -ing.",
    explanation: "'The fastest swimmers' is plural, requiring 'are'. For the verb 'swim' (C-V-C pattern), we double the 'm' before adding '-ing', producing 'are swimming'."
  },
  {
    id: 16,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Simple",
    type: "Multiple Choice",
    instruction: "Choose the correct spelling rule for Present Simple 3rd person singular:",
    sentence: "Our science teacher always _____ fascinating experiments in class.",
    options: [
      "teaches",
      "teach",
      "is teaching",
      "teachs"
    ],
    correctAnswer: "teaches",
    signalWord: "always",
    hint: "'Always' signals Present Simple. When a verb ends in '-ch' (like teach, watch, catch), do we add -s or -es for singular subjects?",
    explanation: "Verbs ending in -ch, -sh, -ss, -x, or -o take '-es' when the subject is third-person singular (Our teacher). Thus, 'teach' becomes 'teaches'."
  },
  {
    id: 17,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Continuous",
    type: "Complete Sentence",
    instruction: "Complete this question asking about an ongoing action:",
    sentence: "_____ your sister preparing for the English test right now?",
    options: [
      "Is",
      "Are",
      "Does",
      "Do"
    ],
    correctAnswer: "Is",
    signalWord: "right now / preparing",
    hint: "The main verb has an '-ing' ending ('preparing') and 'your sister' is singular (she). Which helping verb begins the question?",
    explanation: "For Present Continuous questions with a singular subject ('your sister' = she), the sentence starts with 'Is' ('Is your sister preparing...?')."
  },
  {
    id: 18,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Simple",
    type: "Error Correction",
    instruction: "Which of the following four sentences is grammatically CORRECT?",
    sentence: "Select the sentence with accurate tense and verb usage:",
    options: [
      "Water boils at 100 degrees Celsius.",
      "He goes to the gym currently.",
      "She is often drinking hot tea in the morning.",
      "They are walk to school every morning."
    ],
    correctAnswer: "Water boils at 100 degrees Celsius.",
    signalWord: "Scientific fact",
    hint: "Find the sentence expressing a scientific fact using the correct Present Simple structure.",
    explanation: "'Water boils at 100 degrees Celsius' is completely correct as a scientific law in Present Simple. 'Currently' requires Continuous, 'often' takes Simple ('drinks'), and 'are walk' is grammatically invalid."
  },
  {
    id: 19,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Simple",
    type: "Multiple Choice",
    instruction: "Select the sentence with the correct placement of the frequency adverb:",
    sentence: "Where does the signal word 'always' correctly belong?",
    options: [
      "Sam always plays soccer after school.",
      "Sam plays always soccer after school.",
      "Always Sam plays soccer after school.",
      "Sam plays soccer always after school."
    ],
    correctAnswer: "Sam always plays soccer after school.",
    signalWord: "always",
    hint: "Adverbs of frequency (always, usually, often, never) go BEFORE the main verb in Present Simple.",
    explanation: "In English, adverbs of frequency are placed between the subject and the main verb: Subject ('Sam') + Adverb ('always') + Verb ('plays')."
  },
  {
    id: 20,
    level: "medium",
    levelLabel: "Level 2: Medium",
    tenseFocus: "Present Continuous",
    type: "Complete Sentence",
    instruction: "Fill in the blank to complete this Present Continuous question:",
    sentence: "Why _____ you wearing a thick winter coat today? It is quite warm!",
    options: [
      "are",
      "do",
      "is",
      "does"
    ],
    correctAnswer: "are",
    signalWord: "today / wearing",
    hint: "The main verb ends in '-ing' ('wearing') and the subject is 'you'.",
    explanation: "The Present Continuous question structure with 'you' is: Question word ('Why') + 'are' + subject ('you') + verb-ing ('wearing')."
  },

  // ==========================================
  // LEVEL 3: CHALLENGE (10 QUESTIONS)
  // ==========================================
  {
    id: 21,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Simple",
    type: "Choose Correct Verb Form",
    instruction: "Select the correct form for this stative verb of mental understanding:",
    sentence: "After the teacher's explanation, I _____ this math problem now.",
    options: [
      "understand",
      "am understanding",
      "understands",
      "am understand"
    ],
    correctAnswer: "understand",
    signalWord: "Stative verb: understand",
    hint: "Even though 'now' is present, verbs of thinking/knowing (like understand, know, believe) are stative verbs and are NOT typically used with '-ing'.",
    explanation: "'Understand' is a stative verb representing a state of mind rather than a physical activity. Stative verbs take the Present Simple ('I understand') even when referring to right now."
  },
  {
    id: 22,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Tense Comparison",
    type: "Complete Sentence",
    instruction: "Choose the pair of verbs that correctly fills both blanks in this contrast:",
    sentence: "Normally, my mother _____ dinner at home, but tonight we _____ at an Italian restaurant.",
    options: [
      "cooks / are eating",
      "is cooking / eat",
      "cook / are eating",
      "cooks / eat"
    ],
    correctAnswer: "cooks / are eating",
    signalWord: "Normally vs. tonight",
    hint: "The first clause describes a regular routine ('Normally'); the second clause describes a special plan for this evening ('tonight').",
    explanation: "'Normally' requires Present Simple ('cooks' for 3rd person singular mother). 'Tonight' indicates a temporary exception happening this evening, requiring Present Continuous ('are eating')."
  },
  {
    id: 23,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Simple",
    type: "Choose Correct Verb Form",
    instruction: "Choose the correct verb form for the stative verb of desire:",
    sentence: "Look at the excited puppy! It _____ to catch the bouncing ball.",
    options: [
      "wants",
      "is wanting",
      "want",
      "are wanting"
    ],
    correctAnswer: "wants",
    signalWord: "Stative verb: want",
    hint: "Although the speaker says 'Look!', 'want' expresses a desire (stative verb). Does 'want' take '-ing' in standard English?",
    explanation: "Verbs of desire like 'want', 'need', and 'wish' are stative verbs and do not take the continuous form. With the singular subject 'It', we use 'wants'."
  },
  {
    id: 24,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Continuous",
    type: "Fill-in-the-blank",
    instruction: "Select the correct spelling of the verb ending in silent -e when adding -ing:",
    sentence: "The students _____ their new bicycles along the designated bike trail right now.",
    options: [
      "are riding",
      "are rideing",
      "is riding",
      "ride"
    ],
    correctAnswer: "are riding",
    signalWord: "right now",
    hint: "'The students' is plural (are). Remember the rule for verbs ending in a silent 'e' (r-i-d-e): drop the 'e' before adding -ing!",
    explanation: "'The students' is plural, so we use 'are'. For the verb 'ride', drop the silent 'e' before attaching '-ing' to spell 'are riding'."
  },
  {
    id: 25,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Simple",
    type: "Error Correction",
    instruction: "Which sentence contains a grammar ERROR regarding stative verbs?",
    sentence: "Find the sentence that incorrectly uses a stative verb in continuous form:",
    options: [
      "He is having two sisters and one brother.",
      "She is working on her science project right now.",
      "They never eat breakfast on Sunday mornings.",
      "Listen! The phone in the hallway is ringing."
    ],
    correctAnswer: "He is having two sisters and one brother.",
    signalWord: "Stative verb of possession: have",
    hint: "When 'have' means possession/family relationships, it is a stative verb and cannot be used in continuous form with -ing.",
    explanation: "When 'have' expresses possession or family relationships, it cannot be continuous. It must be in Present Simple: 'He has two sisters and one brother', not 'is having'."
  },
  {
    id: 26,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Simple",
    type: "Complete Sentence",
    instruction: "Choose the correct form of the verb following the question helper 'Does':",
    sentence: "Does Mark _____ French at his middle school every Tuesday afternoon?",
    options: [
      "study",
      "studies",
      "is studying",
      "studying"
    ],
    correctAnswer: "study",
    signalWord: "Does / every Tuesday",
    hint: "When a question begins with 'Does', the third-person '-s' is already handled by 'Does'. What form must the main verb take?",
    explanation: "In questions using 'Does', the main verb must remain in its base form (infinitive without 'to'): 'Does Mark study...?'. Never write 'Does Mark studies'."
  },
  {
    id: 27,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Tense Comparison",
    type: "Choose Correct Verb Form",
    instruction: "Choose the verb form that describes a temporary situation:",
    sentence: "My uncle lives in London permanently, but this month he _____ with us in Manchester.",
    options: [
      "is staying",
      "stays",
      "stay",
      "stayed"
    ],
    correctAnswer: "is staying",
    signalWord: "this month (temporary situation)",
    hint: "Permanent situations use Present Simple ('lives'), but temporary living arrangements around the present time use Present Continuous.",
    explanation: "Living in London is permanent (Present Simple), but visiting for 'this month' is a temporary arrangement. Temporary actions around now take the Present Continuous: 'is staying'."
  },
  {
    id: 28,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Continuous",
    type: "Multiple Choice",
    instruction: "Identify which of the following signal words belongs to the Present Continuous tense:",
    sentence: "Which phrase signals an action happening right at this moment?",
    options: [
      "at the moment",
      "usually",
      "rarely",
      "every weekend"
    ],
    correctAnswer: "at the moment",
    signalWord: "at the moment",
    hint: "Three of these choices refer to repeated habits and routines; only one points to an event occurring right now.",
    explanation: "'At the moment' refers specifically to right now, which is a classic signal phrase for the Present Continuous. 'Usually', 'rarely', and 'every weekend' signal the Present Simple."
  },
  {
    id: 29,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Present Continuous",
    type: "Complete Sentence",
    instruction: "Complete this conversation with the action currently taking place:",
    sentence: "— \"Where is Maya?\" — \"She is in her bedroom upstairs. She _____ for her car keys.\"",
    options: [
      "is looking",
      "looks",
      "look",
      "is look"
    ],
    correctAnswer: "is looking",
    signalWord: "Context: action happening right now",
    hint: "Maya is in her room right now, and the search is actively happening during the conversation.",
    explanation: "The conversation makes it clear that Maya is actively searching at this exact moment. Therefore, the Present Continuous 'is looking' is required."
  },
  {
    id: 30,
    level: "challenge",
    levelLabel: "Level 3: Challenge",
    tenseFocus: "Tense Comparison",
    type: "Identify Tense",
    instruction: "Why is the statement \"I am knowing the answer\" grammatically incorrect?",
    sentence: "Explain the English grammar rule for the verb 'know':",
    options: [
      "'Know' is a stative verb of mental state and must be used in Present Simple ('I know').",
      "'Know' should end in -ed, not -ing.",
      "You must always use the helping verb 'does' with know.",
      "The sentence should say 'I am know the answer'."
    ],
    correctAnswer: "'Know' is a stative verb of mental state and must be used in Present Simple ('I know').",
    signalWord: "Stative verb rule",
    hint: "Does 'know' describe a physical action that can be started and stopped, or a mental state of knowledge?",
    explanation: "'Know' represents a mental state (stative verb), so English grammar does not use it in the continuous form with '-ing'. The correct sentence is 'I know the answer'."
  }
];

/**
 * APPLICATION STATE MANAGEMENT
 */
const AppState = {
  studentName: "Grade 6 Scholar",
  questions: [], // shuffled or ordered copy of 30 questions
  currentIndex: 0,
  userAnswers: {}, // key: questionId (number) -> value: selected string
  isSubmitted: false,
  timerSeconds: 0,
  timerIntervalId: null,
  isHintVisible: false,
  currentReviewFilter: "all"
};

/**
 * DOM ELEMENT REFERENCES
 */
const DOM = {
  // Navigation
  navButtons: document.querySelectorAll(".nav-btn"),
  mobileToggle: document.getElementById("mobile-menu-toggle"),
  navMenu: document.getElementById("nav-menu"),
  navResultsBtn: document.getElementById("nav-results-btn"),
  brandLogo: document.getElementById("nav-brand-logo"),
  headerStudentName: document.getElementById("header-student-name"),

  // Sections
  sections: {
    home: document.getElementById("home-section"),
    guide: document.getElementById("guide-section"),
    test: document.getElementById("test-section"),
    results: document.getElementById("results-section")
  },

  // Home Section
  studentNameInput: document.getElementById("student-name-input"),
  homeStartTestBtn: document.getElementById("home-start-test-btn"),
  homeOpenGuideBtn: document.getElementById("home-open-guide-btn"),
  homeViewFullGuideLink: document.getElementById("home-view-full-guide-link"),

  // Guide Section
  guideTabButtons: document.querySelectorAll(".guide-tab-btn"),
  guideTabContents: document.querySelectorAll(".guide-tab-content"),
  guideGotoTestBtn: document.getElementById("guide-goto-test-btn"),

  // Test Section
  testLevelBadge: document.getElementById("test-level-badge"),
  testQCounter: document.getElementById("test-q-counter"),
  testProgressPercent: document.getElementById("test-progress-percent"),
  testProgressFill: document.getElementById("test-progress-fill"),
  testTimerDisplay: document.getElementById("test-timer-display"),
  testAnsweredDisplay: document.getElementById("test-answered-display"),
  qDotsGrid: document.getElementById("q-dots-grid"),

  // Question Card
  qLevelTag: document.getElementById("q-level-tag"),
  qTenseTag: document.getElementById("q-tense-tag"),
  qTypeTag: document.getElementById("q-type-tag"),
  qCardNumber: document.getElementById("q-card-number"),
  qInstruction: document.getElementById("q-instruction"),
  qSentenceText: document.getElementById("q-sentence-text"),
  optionsGrid: document.getElementById("options-grid"),

  // Hint Elements
  hintToggleBtn: document.getElementById("hint-toggle-btn"),
  hintToggleText: document.getElementById("hint-toggle-text"),
  hintDrawer: document.getElementById("hint-drawer"),
  hintText: document.getElementById("hint-text"),

  // Question Controls
  btnPrevQ: document.getElementById("btn-prev-q"),
  btnNextQ: document.getElementById("btn-next-q"),
  btnClearAnswer: document.getElementById("btn-clear-answer"),
  btnOpenSubmitModal: document.getElementById("btn-open-submit-modal"),

  // Modal Elements
  submitModal: document.getElementById("submit-modal"),
  modalAnsweredSummary: document.getElementById("modal-answered-summary"),
  modalUnansweredAlert: document.getElementById("modal-unanswered-alert"),
  modalUnansweredCount: document.getElementById("modal-unanswered-count"),
  modalBtnCancel: document.getElementById("modal-btn-cancel"),
  modalBtnConfirm: document.getElementById("modal-btn-confirm"),

  // Results Section
  resultsBadgeIcon: document.getElementById("results-badge-icon"),
  resultsGreeting: document.getElementById("results-greeting"),
  resultsScorePoints: document.getElementById("results-score-points"),
  resultsScorePercent: document.getElementById("results-score-percent"),
  performanceStatusTitle: document.getElementById("performance-status-title"),
  performanceMessageText: document.getElementById("performance-message-text"),
  metricCorrectCount: document.getElementById("metric-correct-count"),
  metricIncorrectCount: document.getElementById("metric-incorrect-count"),
  metricTimeTaken: document.getElementById("metric-time-taken"),
  metricGradeBand: document.getElementById("metric-grade-band"),
  lvlEasyScore: document.getElementById("lvl-easy-score"),
  lvlMediumScore: document.getElementById("lvl-medium-score"),
  lvlChallengeScore: document.getElementById("lvl-challenge-score"),
  btnRestartTest: document.getElementById("btn-restart-test"),
  btnResultsOpenGuide: document.getElementById("btn-results-open-guide"),
  btnPrintResults: document.getElementById("btn-print-results"),
  reviewCardsList: document.getElementById("review-cards-list"),
  filterAllBtn: document.getElementById("filter-all-btn"),
  filterCorrectBtn: document.getElementById("filter-correct-btn"),
  filterIncorrectBtn: document.getElementById("filter-incorrect-btn"),

  // Toast Container
  toastContainer: document.getElementById("toast-container")
};

/**
 * INITIALIZATION
 */
function initApp() {
  // Deep clone questions bank into AppState
  AppState.questions = JSON.parse(JSON.stringify(QUESTIONS_BANK));
  
  // Register all Event Listeners
  setupNavigationEvents();
  setupGuideEvents();
  setupTestControlEvents();
  setupModalEvents();
  setupResultsEvents();

  // Initialize UI with Question 1
  renderQuestionDots();
  renderCurrentQuestion();
  updateProgressUI();

  // Greet student
  showToast("Welcome to Grade 6 Grammar Test! 🎒");
}

/**
 * NAVIGATION SYSTEM (Tab-based SPA)
 */
function navigateToSection(targetSection) {
  // Hide all sections
  Object.keys(DOM.sections).forEach((key) => {
    DOM.sections[key].classList.remove("active");
  });

  // Show target section
  if (DOM.sections[targetSection]) {
    DOM.sections[targetSection].classList.add("active");
  }

  // Update Nav Buttons
  DOM.navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.target === targetSection);
  });

  // If navigating to Test, start timer if not already running
  if (targetSection === "test" && !AppState.isSubmitted) {
    startTimer();
  }

  // Close mobile nav menu if open
  DOM.navMenu.classList.remove("open");

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupNavigationEvents() {
  // Nav bar buttons
  DOM.navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target === "results" && !AppState.isSubmitted) {
        showToast("Please submit your test first to view Results!");
        return;
      }
      navigateToSection(target);
    });
  });

  // Brand logo click
  DOM.brandLogo.addEventListener("click", (e) => {
    e.preventDefault();
    navigateToSection("home");
  });

  // Mobile menu hamburger toggle
  DOM.mobileToggle.addEventListener("click", () => {
    DOM.navMenu.classList.toggle("open");
  });

  // Home Start Test Button
  DOM.homeStartTestBtn.addEventListener("click", () => {
    saveStudentName();
    navigateToSection("test");
  });

  // Home Open Guide Button
  DOM.homeOpenGuideBtn.addEventListener("click", () => {
    saveStudentName();
    navigateToSection("guide");
  });

  // Home View Full Guide link
  DOM.homeViewFullGuideLink.addEventListener("click", () => {
    navigateToSection("guide");
  });

  // Guide Goto Test Button
  DOM.guideGotoTestBtn.addEventListener("click", () => {
    navigateToSection("test");
  });
}

/**
 * STUDENT PROFILE MANAGEMENT
 */
function saveStudentName() {
  const entered = DOM.studentNameInput.value.trim();
  if (entered.length > 0) {
    AppState.studentName = entered;
    DOM.headerStudentName.textContent = entered;
  } else {
    AppState.studentName = "Grade 6 Scholar";
    DOM.headerStudentName.textContent = "Student";
  }
}

/**
 * GRAMMAR GUIDE TABS LOGIC
 */
function setupGuideEvents() {
  DOM.guideTabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      const tabKey = tabBtn.dataset.tab;
      
      DOM.guideTabButtons.forEach((btn) => btn.classList.remove("active"));
      DOM.guideTabContents.forEach((content) => content.classList.remove("active"));

      tabBtn.classList.add("active");
      const targetContent = document.getElementById(`tab-${tabKey}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }
    });
  });
}

/**
 * TIMER SYSTEM
 */
function startTimer() {
  if (AppState.timerIntervalId !== null) return;
  AppState.timerIntervalId = setInterval(() => {
    AppState.timerSeconds++;
    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (AppState.timerIntervalId !== null) {
    clearInterval(AppState.timerIntervalId);
    AppState.timerIntervalId = null;
  }
}

function resetTimer() {
  stopTimer();
  AppState.timerSeconds = 0;
  updateTimerDisplay();
}

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function updateTimerDisplay() {
  const formatted = formatTime(AppState.timerSeconds);
  DOM.testTimerDisplay.textContent = formatted;
}

/**
 * QUESTION NAVIGATION DOTS PALETTE
 */
function renderQuestionDots() {
  DOM.qDotsGrid.innerHTML = "";
  AppState.questions.forEach((q, idx) => {
    const dotBtn = document.createElement("button");
    dotBtn.type = "button";
    dotBtn.className = "q-dot-btn";
    dotBtn.textContent = idx + 1;
    dotBtn.dataset.index = idx;
    dotBtn.setAttribute("aria-label", `Go to question ${idx + 1}`);

    // Update classes based on current state
    if (idx === AppState.currentIndex) {
      dotBtn.classList.add("current");
    }
    if (AppState.userAnswers[q.id] !== undefined) {
      dotBtn.classList.add("answered");
    }

    dotBtn.addEventListener("click", () => {
      goToQuestion(idx);
    });

    DOM.qDotsGrid.appendChild(dotBtn);
  });
}

function updateQuestionDotsState() {
  const dots = DOM.qDotsGrid.querySelectorAll(".q-dot-btn");
  dots.forEach((dot, idx) => {
    const q = AppState.questions[idx];
    dot.classList.toggle("current", idx === AppState.currentIndex);
    dot.classList.toggle("answered", AppState.userAnswers[q.id] !== undefined);
  });
}

/**
 * RENDER CURRENT QUESTION
 */
function renderCurrentQuestion() {
  const q = AppState.questions[AppState.currentIndex];
  if (!q) return;

  // Level & Category Badges
  DOM.qLevelTag.textContent = q.levelLabel;
  DOM.qLevelTag.className = `badge badge-${q.level}`;
  DOM.testLevelBadge.textContent = q.levelLabel;
  DOM.testLevelBadge.className = `badge badge-${q.level}`;

  DOM.qTenseTag.textContent = q.tenseFocus;
  DOM.qTypeTag.textContent = q.type;

  // Question Counter
  const qNum = AppState.currentIndex + 1;
  DOM.testQCounter.textContent = `Question ${qNum} of ${AppState.questions.length}`;
  DOM.qCardNumber.textContent = `Question #${qNum}`;
  DOM.qInstruction.textContent = q.instruction;

  // Sentence Prompt Display
  renderSentence(q);

  // Render 4 Options
  renderOptions(q);

  // Reset Hint State for the new question
  hideHint();
  DOM.hintText.textContent = q.hint;

  // Update Nav Buttons (Previous / Next)
  DOM.btnPrevQ.disabled = AppState.currentIndex === 0;
  DOM.btnPrevQ.style.opacity = AppState.currentIndex === 0 ? "0.5" : "1";

  if (AppState.currentIndex === AppState.questions.length - 1) {
    DOM.btnNextQ.style.display = "none";
  } else {
    DOM.btnNextQ.style.display = "inline-flex";
  }

  // Update Question Dots Palette
  updateQuestionDotsState();
  updateProgressUI();
}

/**
 * FORMAT & DISPLAY QUESTION SENTENCE
 */
function renderSentence(q) {
  // Format blanks into stylized spans
  let formatted = q.sentence;
  if (formatted.includes("_____")) {
    const chosenAnswer = AppState.userAnswers[q.id];
    if (chosenAnswer) {
      formatted = formatted.replace(
        "_____",
        `<span class="sentence-blank">${chosenAnswer}</span>`
      );
    } else {
      formatted = formatted.replace(
        "_____",
        `<span class="sentence-blank">_____</span>`
      );
    }
  }
  DOM.qSentenceText.innerHTML = formatted;
}

/**
 * RENDER 4 OPTIONS (A, B, C, D)
 */
function renderOptions(q) {
  DOM.optionsGrid.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  const selectedAnswer = AppState.userAnswers[q.id];

  q.options.forEach((opt, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "option-card";
    if (selectedAnswer === opt) {
      card.classList.add("selected");
    }

    const letterSpan = document.createElement("span");
    letterSpan.className = "option-letter";
    letterSpan.textContent = letters[index] || (index + 1);

    const textSpan = document.createElement("span");
    textSpan.className = "option-text";
    textSpan.textContent = opt;

    card.appendChild(letterSpan);
    card.appendChild(textSpan);

    // Option Click Handler
    card.addEventListener("click", () => {
      selectAnswer(q.id, opt);
    });

    DOM.optionsGrid.appendChild(card);
  });
}

/**
 * SELECT AN ANSWER
 */
function selectAnswer(questionId, selectedValue) {
  AppState.userAnswers[questionId] = selectedValue;

  // Refresh current question sentence & options
  const q = AppState.questions[AppState.currentIndex];
  renderSentence(q);

  const optionCards = DOM.optionsGrid.querySelectorAll(".option-card");
  optionCards.forEach((card) => {
    const textEl = card.querySelector(".option-text");
    if (textEl && textEl.textContent === selectedValue) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  updateQuestionDotsState();
  updateProgressUI();
}

/**
 * CLEAR ANSWER FOR CURRENT QUESTION
 */
function clearCurrentAnswer() {
  const q = AppState.questions[AppState.currentIndex];
  if (AppState.userAnswers[q.id] !== undefined) {
    delete AppState.userAnswers[q.id];
    renderSentence(q);
    renderOptions(q);
    updateQuestionDotsState();
    updateProgressUI();
    showToast("Answer cleared for this question.");
  }
}

/**
 * PROGRESS & COUNTER UI
 */
function updateProgressUI() {
  const total = AppState.questions.length;
  const answeredCount = Object.keys(AppState.userAnswers).length;
  const percent = Math.round((answeredCount / total) * 100);

  DOM.testProgressPercent.textContent = `${percent}%`;
  DOM.testProgressFill.style.width = `${Math.max(percent, 3.33)}%`;
  DOM.testAnsweredDisplay.textContent = `${answeredCount} / ${total} answered`;
}

/**
 * HINT SYSTEM
 */
function toggleHint() {
  if (AppState.isHintVisible) {
    hideHint();
  } else {
    showHint();
  }
}

function showHint() {
  AppState.isHintVisible = true;
  DOM.hintDrawer.classList.remove("hidden");
  DOM.hintToggleText.textContent = "Hide Hint";
  DOM.hintToggleBtn.style.backgroundColor = "#fde68a";
}

function hideHint() {
  AppState.isHintVisible = false;
  DOM.hintDrawer.classList.add("hidden");
  DOM.hintToggleText.textContent = "Show Hint";
  DOM.hintToggleBtn.style.backgroundColor = "";
}

/**
 * QUESTION NAVIGATION CONTROLS
 */
function goToQuestion(index) {
  if (index >= 0 && index < AppState.questions.length) {
    AppState.currentIndex = index;
    renderCurrentQuestion();
    // Scroll question into comfortable view
    DOM.sections.test.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function goToPrevQuestion() {
  if (AppState.currentIndex > 0) {
    goToQuestion(AppState.currentIndex - 1);
  }
}

function goToNextQuestion() {
  if (AppState.currentIndex < AppState.questions.length - 1) {
    goToQuestion(AppState.currentIndex + 1);
  }
}

function setupTestControlEvents() {
  DOM.btnPrevQ.addEventListener("click", goToPrevQuestion);
  DOM.btnNextQ.addEventListener("click", goToNextQuestion);
  DOM.btnClearAnswer.addEventListener("click", clearCurrentAnswer);
  DOM.hintToggleBtn.addEventListener("click", toggleHint);
  DOM.btnOpenSubmitModal.addEventListener("click", openSubmitModal);

  // Keyboard navigation for power users / accessibility
  document.addEventListener("keydown", (e) => {
    // Only handle if test section is currently visible
    if (!DOM.sections.test.classList.contains("active")) return;
    // Don't intercept if user is typing in an input
    if (e.target.tagName === "INPUT") return;

    if (e.key === "ArrowLeft") {
      goToPrevQuestion();
    } else if (e.key === "ArrowRight") {
      goToNextQuestion();
    }
  });
}

/**
 * SUBMISSION MODAL SYSTEM
 */
function openSubmitModal() {
  const total = AppState.questions.length;
  const answered = Object.keys(AppState.userAnswers).length;
  const unanswered = total - answered;

  DOM.modalAnsweredSummary.innerHTML = `You have answered <strong>${answered} of ${total}</strong> questions.`;

  if (unanswered > 0) {
    DOM.modalUnansweredAlert.classList.remove("hidden");
    DOM.modalUnansweredCount.textContent = unanswered;
  } else {
    DOM.modalUnansweredAlert.classList.add("hidden");
  }

  DOM.submitModal.classList.remove("hidden");
}

function closeSubmitModal() {
  DOM.submitModal.classList.add("hidden");
}

function setupModalEvents() {
  DOM.modalBtnCancel.addEventListener("click", closeSubmitModal);
  
  DOM.modalBtnConfirm.addEventListener("click", () => {
    closeSubmitModal();
    submitTest();
  });

  // Close modal when clicking outside modal-card
  DOM.submitModal.addEventListener("click", (e) => {
    if (e.target === DOM.submitModal) {
      closeSubmitModal();
    }
  });
}

/**
 * TEST SUBMISSION & SCORE CALCULATION
 */
function submitTest() {
  if (AppState.isSubmitted) {
    showToast("This test has already been submitted!");
    return;
  }

  // Prevent multiple submissions
  AppState.isSubmitted = true;
  stopTimer();

  // Save student name in case changed
  saveStudentName();

  // Enable Results Tab in Header
  DOM.navResultsBtn.disabled = false;

  // Calculate Scores
  calculateAndRenderResults();

  // Navigate to results
  navigateToSection("results");
  showToast("Test successfully submitted! 🎉");
}

function calculateAndRenderResults() {
  let score = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  // Level breakdowns
  const levelStats = {
    easy: { correct: 0, total: 0 },
    medium: { correct: 0, total: 0 },
    challenge: { correct: 0, total: 0 }
  };

  AppState.questions.forEach((q) => {
    const userAnswer = AppState.userAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;

    if (levelStats[q.level]) {
      levelStats[q.level].total++;
    }

    if (isCorrect) {
      score++;
      correctCount++;
      if (levelStats[q.level]) {
        levelStats[q.level].correct++;
      }
    } else {
      incorrectCount++;
    }
  });

  const totalQuestions = AppState.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Update Hero & Greeting
  DOM.resultsGreeting.textContent = `Awesome Effort, ${AppState.studentName}! 🎉`;
  DOM.resultsScorePoints.textContent = score;
  DOM.resultsScorePercent.textContent = `${percentage}%`;

  // Performance Message according to prompt guidelines:
  // 27–30: Excellent! You understand both tenses very well.
  // 23–26: Great job! Keep practicing.
  // 18–22: Good effort! Review the grammar guide.
  // 0–17: Keep learning! Read the guide and try again.
  let messageTitle = "";
  let messageBody = "";
  let badgeIcon = "🌟";
  let gradeBand = "";

  if (score >= 27) {
    messageTitle = "Mastery Level (27–30 Points)";
    messageBody = "Excellent! You understand both tenses very well.";
    badgeIcon = "🏆";
    gradeBand = "Grammar Master";
  } else if (score >= 23) {
    messageTitle = "Proficient Level (23–26 Points)";
    messageBody = "Great job! Keep practicing.";
    badgeIcon = "⭐";
    gradeBand = "Advanced Learner";
  } else if (score >= 18) {
    messageTitle = "Developing Level (18–22 Points)";
    messageBody = "Good effort! Review the grammar guide.";
    badgeIcon = "📚";
    gradeBand = "Intermediate";
  } else {
    messageTitle = "Needs Practice (0–17 Points)";
    messageBody = "Keep learning! Read the guide and try again.";
    badgeIcon = "💪";
    gradeBand = "Grammar Explorer";
  }

  DOM.performanceStatusTitle.textContent = messageTitle;
  DOM.performanceMessageText.textContent = messageBody;
  DOM.resultsBadgeIcon.textContent = badgeIcon;
  DOM.metricGradeBand.textContent = gradeBand;

  // Metric values
  DOM.metricCorrectCount.textContent = correctCount;
  DOM.metricIncorrectCount.textContent = incorrectCount;
  DOM.metricTimeTaken.textContent = formatTime(AppState.timerSeconds);

  // Level breakdowns UI
  DOM.lvlEasyScore.textContent = `${levelStats.easy.correct} / ${levelStats.easy.total}`;
  DOM.lvlMediumScore.textContent = `${levelStats.medium.correct} / ${levelStats.medium.total}`;
  DOM.lvlChallengeScore.textContent = `${levelStats.challenge.correct} / ${levelStats.challenge.total}`;

  // Filter button counts
  DOM.filterAllBtn.textContent = `All (${totalQuestions})`;
  DOM.filterCorrectBtn.textContent = `Correct (${correctCount})`;
  DOM.filterIncorrectBtn.textContent = `Incorrect (${incorrectCount})`;

  // Render Detailed Question Reviews
  renderQuestionReviewList();
}

/**
 * DETAILED QUESTION-BY-QUESTION REVIEW
 */
function renderQuestionReviewList() {
  DOM.reviewCardsList.innerHTML = "";

  AppState.questions.forEach((q, idx) => {
    const userAnswer = AppState.userAnswers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;

    // Apply Filter
    if (AppState.currentReviewFilter === "correct" && !isCorrect) return;
    if (AppState.currentReviewFilter === "incorrect" && isCorrect) return;

    const card = document.createElement("div");
    card.className = `review-card ${isCorrect ? "correct-card" : "incorrect-card"}`;

    card.innerHTML = `
      <div class="review-card-header">
        <div class="q-meta-tags">
          <span class="badge badge-${q.level}">${q.levelLabel}</span>
          <span class="badge badge-topic">${q.tenseFocus}</span>
          <span class="badge badge-type">Question #${idx + 1}</span>
        </div>
        <div class="review-status-badge ${isCorrect ? "correct" : "incorrect"}">
          ${isCorrect ? "✅ Correct (+1 Point)" : "❌ Incorrect (0 Points)"}
        </div>
      </div>

      <div class="review-sentence">
        <strong>${idx + 1}.</strong> ${q.sentence.replace("_____", `<u>${q.correctAnswer}</u>`)}
      </div>

      <div class="review-answers-box">
        <div class="ans-row">
          <span class="ans-label">Your Submitted Answer:</span>
          <span class="ans-val ${isCorrect ? "student-correct" : "student-wrong"}">
            ${userAnswer ? userAnswer : "<em>(Not Answered)</em>"}
          </span>
        </div>
        <div class="ans-row">
          <span class="ans-label">Correct Grammar Answer:</span>
          <span class="ans-val key-correct">
            ${q.correctAnswer}
          </span>
        </div>
        <div class="ans-row">
          <span class="ans-label">Signal Word / Clue:</span>
          <span class="ans-val" style="color: var(--accent-purple);">
            ${q.signalWord}
          </span>
        </div>
      </div>

      <div class="review-explanation">
        <div class="exp-label">💡 Why this is correct:</div>
        <div class="exp-text">${q.explanation}</div>
      </div>
    `;

    DOM.reviewCardsList.appendChild(card);
  });
}

/**
 * RESTART TEST & RANDOMIZATION
 */
function restartTest() {
  // Confirm with user if already in progress
  const confirmRestart = confirm("Are you sure you want to restart the test? Your questions will be shuffled and all answers will be reset.");
  if (!confirmRestart) return;

  // Reset state
  AppState.isSubmitted = false;
  AppState.userAnswers = {};
  AppState.currentIndex = 0;
  DOM.navResultsBtn.disabled = true;

  // Shuffle questions randomly using Fisher-Yates shuffle algorithm
  AppState.questions = shuffleArray(JSON.parse(JSON.stringify(QUESTIONS_BANK)));

  // Reset timer
  resetTimer();

  // Re-render UI
  renderQuestionDots();
  renderCurrentQuestion();
  updateProgressUI();

  // Jump to test
  navigateToSection("test");
  showToast("New test started with randomized questions! Good luck! 🚀");
}

/**
 * FISHER-YATES SHUFFLE UTILITY
 */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * RESULTS PAGE ACTIONS & FILTERS
 */
function setupResultsEvents() {
  // Restart Test
  DOM.btnRestartTest.addEventListener("click", restartTest);

  // Review Guide
  DOM.btnResultsOpenGuide.addEventListener("click", () => {
    navigateToSection("guide");
  });

  // Print results
  DOM.btnPrintResults.addEventListener("click", () => {
    window.print();
  });

  // Filter Buttons
  const filterBtns = [DOM.filterAllBtn, DOM.filterCorrectBtn, DOM.filterIncorrectBtn];
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.currentReviewFilter = btn.dataset.filter;
      renderQuestionReviewList();
    });
  });
}

/**
 * TOAST NOTIFICATION UTILITY
 */
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>💬</span><span>${message}</span>`;

  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

// Start application once DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);
