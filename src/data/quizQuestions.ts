// src/data/quizQuestions.ts
import { CATEGORIES } from "./categories";

// Quiz question types
export type QuizQuestionType = "drag" | "choice";

export interface QuizQuestion {
  id: string;
  categoryId: string;
  wordId?: string;          // link to the word this question is about (optional but useful)
  type: QuizQuestionType;
  prompt: string;           // for "drag", use a "____" placeholder in the sentence
  options: string[];
  correctIndex: number;
}

// Utility to get a valid category id example
// (Adjust "business" to one of your real CATEGORIES ids if needed)
const GENERAL_CATEGORY_ID = "general";
const WORK_CATEGORY_ID = "business";
const MEDICAL_CATEGORY_ID = "medical";
const TECH_CATEGORY_ID = "tech";
const TRAVEL_CATEGORY_ID = "travel";
const REL_CATEGORY_ID = "relationships"
const FOOD_CATEGORY_ID = "food";
const EDUCATION_CATEGORY_ID = "education";
const SPORT_CATEGORY_ID = "sports";
const ART_CATEGORY_ID = "art";
const POLITICS_CATEGORY_ID = "politics";
const ENV_CATEGORY_ID = "environment";
const FINANCE_CATEGORY_ID = "finance";


// Example questions for one category
const QUIZ_QUESTIONS: QuizQuestion[] = [

    {
    id: 'general-q1',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-1',
    type: 'drag',
    prompt: 'I usually ____ at 6:30 in the morning.',
    options: ['wake up', 'get dressed', 'go to bed', 'take a nap'],
    correctIndex: 0
  },
  {
    id: 'general-q2',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-2',
    type: 'drag',
    prompt: 'He ____ right after his alarm rings.',
    options: ['gets up', 'falls asleep', 'stays in', 'checks social media'],
    correctIndex: 0
  },
  {
    id: 'general-q3',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-3',
    type: 'drag',
    prompt: 'I ____ before I have breakfast.',
    options: ['get dressed', 'go to bed', 'take a nap', 'hang out'],
    correctIndex: 0
  },
  {
    id: 'general-q4',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-4',
    type: 'drag',
    prompt: 'Don’t forget to ____ before bed.',
    options: ['brush your teeth', 'wake up', 'take out the trash', 'run errands'],
    correctIndex: 0
  },
  {
    id: 'general-q5',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-5',
    type: 'drag',
    prompt: 'She always ____ in the morning.',
    options: ['takes a shower', 'falls asleep', 'takes a nap', 'stays up late'],
    correctIndex: 0
  },
  {
    id: 'general-q6',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-6',
    type: 'drag',
    prompt: 'I ____ with cold water to wake up.',
    options: ['wash my face', 'make the bed', 'go to bed', 'fill the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q7',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-7',
    type: 'drag',
    prompt: 'He ____ right after getting up.',
    options: ['makes the bed', 'takes a nap', 'misses the train', 'runs late'],
    correctIndex: 0
  },
  {
    id: 'general-q8',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-8',
    type: 'drag',
    prompt: 'We usually ____ together.',
    options: ['have breakfast', 'go to bed', 'run errands', 'fill out a form'],
    correctIndex: 0
  },
  {
    id: 'general-q9',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-9',
    type: 'drag',
    prompt: 'She ____ at work around noon.',
    options: ['has lunch', 'takes a shower', 'goes to bed', 'runs late'],
    correctIndex: 0
  },
  {
    id: 'general-q10',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-10',
    type: 'drag',
    prompt: 'We ____ at 7 p.m. every day.',
    options: ['have dinner', 'wake up', 'go for a run', 'take out the trash'],
    correctIndex: 0
  },

  {
    id: 'general-q11',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-11',
    type: 'drag',
    prompt: 'I ____ after dinner.',
    options: ['do the dishes', 'take a nap', 'binge-watch', 'go to bed'],
    correctIndex: 0
  },
  {
    id: 'general-q12',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-12',
    type: 'drag',
    prompt: 'She ____ on weekends.',
    options: ['does the laundry', 'misses the train', 'hits the sack', 'runs late'],
    correctIndex: 0
  },
  {
    id: 'general-q13',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-13',
    type: 'drag',
    prompt: 'He ____ the clothes to dry.',
    options: ['hung up', 'put on', 'took off', 'folded'],
    correctIndex: 0
  },
  {
    id: 'general-q14',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-14',
    type: 'drag',
    prompt: 'I ____ the clothes and put them away.',
    options: ['folded', 'hung up', 'washed', 'tried on'],
    correctIndex: 0
  },
  {
    id: 'general-q15',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-15',
    type: 'drag',
    prompt: 'She ____ the floor after cooking.',
    options: ['swept', 'binge-watched', 'drove to work', 'took a nap'],
    correctIndex: 0
  },
  {
    id: 'general-q16',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-16',
    type: 'drag',
    prompt: 'Please ____ the trash tonight.',
    options: ['take out', 'fill out', 'run out of', 'make'],
    correctIndex: 0
  },
  {
    id: 'general-q17',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-17',
    type: 'drag',
    prompt: 'He ____ while I dried them.',
    options: ['washed the dishes', 'went for a walk', 'took a nap', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q18',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-18',
    type: 'drag',
    prompt: 'We ____ every Saturday.',
    options: ['vacuum the floor', 'miss the train', 'sleep in', 'order in'],
    correctIndex: 0
  },
  {
    id: 'general-q19',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-19',
    type: 'drag',
    prompt: 'She ____ by bus.',
    options: ['goes to work', 'falls asleep', 'stays in', 'takes a nap'],
    correctIndex: 0
  },
  {
    id: 'general-q20',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-20',
    type: 'drag',
    prompt: 'The children ____ at 8 a.m.',
    options: ['go to school', 'go to bed', 'stay in', 'hit the sack'],
    correctIndex: 0
  },

  {
    id: 'general-q21',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-21',
    type: 'drag',
    prompt: 'He ____ an hour each way.',
    options: ['commutes', 'runs errands', 'binge-watches', 'sleeps in'],
    correctIndex: 0
  },
  {
    id: 'general-q22',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-22',
    type: 'drag',
    prompt: 'I ____ at nine o’clock sharp.',
    options: ['start work', 'take a nap', 'sleep in', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q23',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-23',
    type: 'drag',
    prompt: 'She ____ at five.',
    options: ['finishes work', 'wakes up', 'takes a shower', 'makes the bed'],
    correctIndex: 0
  },
  {
    id: 'general-q24',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-24',
    type: 'drag',
    prompt: 'Let’s ____ and grab a coffee.',
    options: ['take a break', 'run errands', 'go to bed', 'fill the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q25',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-25',
    type: 'drag',
    prompt: 'We have to ____ when we arrive at work.',
    options: ['clock in', 'sleep in', 'hit the sack', 'run late'],
    correctIndex: 0
  },
  {
    id: 'general-q26',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-26',
    type: 'drag',
    prompt: 'He ____ at exactly 5 p.m.',
    options: ['clocked out', 'fell asleep', 'got stuck in traffic', 'took out the trash'],
    correctIndex: 0
  },
  {
    id: 'general-q27',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-27',
    type: 'drag',
    prompt: 'You need to ____ to access your email.',
    options: ['log in', 'wake up', 'go out', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q28',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-28',
    type: 'drag',
    prompt: 'Don’t forget to ____ of the computer.',
    options: ['log out', 'go out', 'eat out', 'run out of time'],
    correctIndex: 0
  },
  {
    id: 'general-q29',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-29',
    type: 'drag',
    prompt: 'I ____ first thing in the morning.',
    options: ['check my email', 'wash the dishes', 'sleep in', 'ride a bike'],
    correctIndex: 0
  },
  {
    id: 'general-q30',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-30',
    type: 'drag',
    prompt: 'I still need to ____ her message.',
    options: ['reply to', 'run out of', 'hang out', 'log out of'],
    correctIndex: 0
  },

  {
    id: 'general-q31',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-31',
    type: 'drag',
    prompt: 'Let me ____ to confirm the appointment.',
    options: ['make a call', 'take a nap', 'run errands', 'binge-watch'],
    correctIndex: 0
  },
  {
    id: 'general-q32',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-32',
    type: 'drag',
    prompt: 'He didn’t ____ the phone.',
    options: ['pick up', 'fall asleep', 'take off', 'sign up'],
    correctIndex: 0
  },
  {
    id: 'general-q33',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-33',
    type: 'drag',
    prompt: 'She ____ without saying goodbye.',
    options: ['hung up', 'woke up', 'got dressed', 'checked social media'],
    correctIndex: 0
  },
  {
    id: 'general-q34',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-34',
    type: 'drag',
    prompt: 'I spent the afternoon ____.',
    options: ['running errands', 'sleeping in', 'binge-watching', 'hitting the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q35',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-35',
    type: 'drag',
    prompt: 'We ____ every Saturday morning.',
    options: ['go grocery shopping', 'stay in', 'hit the sack', 'sleep in'],
    correctIndex: 0
  },
  {
    id: 'general-q36',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-36',
    type: 'drag',
    prompt: 'I ____ of things to buy.',
    options: ['made a list', 'took a nap', 'ran late', 'filled the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q37',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-37',
    type: 'drag',
    prompt: 'We ____ for twenty minutes.',
    options: ['stood in line', 'fell asleep', 'went to bed', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q38',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-38',
    type: 'drag',
    prompt: 'We ____ and paid for our groceries.',
    options: ['checked out', 'went out', 'ate out', 'hung out'],
    correctIndex: 0
  },
  {
    id: 'general-q39',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-39',
    type: 'drag',
    prompt: 'I ____ online at the end of the month.',
    options: ['pay the bills', 'sleep in', 'go for a walk', 'binge-watch'],
    correctIndex: 0
  },
  {
    id: 'general-q40',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-40',
    type: 'drag',
    prompt: 'Please ____ this form and sign it.',
    options: ['fill out', 'take out', 'run out of', 'check out'],
    correctIndex: 0
  },

  {
    id: 'general-q41',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-41',
    type: 'drag',
    prompt: 'You can ____ for the class online.',
    options: ['sign up', 'wake up', 'get up', 'hang up'],
    correctIndex: 0
  },
  {
    id: 'general-q42',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-42',
    type: 'drag',
    prompt: 'I ____ my account to check my balance.',
    options: ['logged into', 'ran out of', 'stood in', 'drove to'],
    correctIndex: 0
  },
  {
    id: 'general-q43',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-43',
    type: 'drag',
    prompt: 'He ____ his phone credit.',
    options: ['topped up', 'took off', 'put on', 'ran out of'],
    correctIndex: 0
  },
  {
    id: 'general-q44',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-44',
    type: 'drag',
    prompt: 'We ____ after dinner.',
    options: ['went for a walk', 'fell asleep', 'ran late', 'filled the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q45',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-45',
    type: 'drag',
    prompt: 'She ____ at the gym three times a week.',
    options: ['works out', 'stays in', 'hits the sack', 'runs errands'],
    correctIndex: 0
  },
  {
    id: 'general-q46',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-46',
    type: 'drag',
    prompt: 'I ____ in the park on Sundays.',
    options: ['go for a run', 'take a nap', 'stay in', 'sleep in'],
    correctIndex: 0
  },
  {
    id: 'general-q47',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-47',
    type: 'drag',
    prompt: 'Remember to ____ before exercising.',
    options: ['stretch', 'hit the sack', 'run errands', 'check social media'],
    correctIndex: 0
  },
  {
    id: 'general-q48',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-48',
    type: 'drag',
    prompt: 'He ____ a short nap after lunch.',
    options: ['took', 'made', 'ran', 'filled'],
    correctIndex: 0
  },
  {
    id: 'general-q49',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-49',
    type: 'drag',
    prompt: 'I’m tired, I need to ____ for a minute.',
    options: ['lie down', 'run out', 'check out', 'stand in line'],
    correctIndex: 0
  },
  {
    id: 'general-q50',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-50',
    type: 'drag',
    prompt: 'Let’s just ____ and watch a movie.',
    options: ['chill out', 'run late', 'fill the tank', 'wake up'],
    correctIndex: 0
  },

  {
    id: 'general-q51',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-51',
    type: 'drag',
    prompt: 'We like to ____ at the café after class.',
    options: ['hang out', 'hit the sack', 'run late', 'sleep in'],
    correctIndex: 0
  },
  {
    id: 'general-q52',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-52',
    type: 'drag',
    prompt: 'I met my friend to ____ over coffee.',
    options: ['catch up', 'check out', 'take off', 'run out'],
    correctIndex: 0
  },
  {
    id: 'general-q53',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-53',
    type: 'drag',
    prompt: 'Let’s ____ at 6 in front of the station.',
    options: ['meet up', 'wake up', 'take off', 'stay in'],
    correctIndex: 0
  },
  {
    id: 'general-q54',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-54',
    type: 'drag',
    prompt: 'She ____ to say hello.',
    options: ['dropped by', 'fell asleep', 'checked out', 'ran out'],
    correctIndex: 0
  },
  {
    id: 'general-q55',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-55',
    type: 'drag',
    prompt: 'We ____ for dinner.',
    options: ['invited them over', 'went out', 'ran late', 'filled out a form'],
    correctIndex: 0
  },
  {
    id: 'general-q56',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-56',
    type: 'drag',
    prompt: 'We ____ and watched TV.',
    options: ['stayed in', 'ate out', 'ran out', 'stood in line'],
    correctIndex: 0
  },
  {
    id: 'general-q57',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-57',
    type: 'drag',
    prompt: 'They ____ for drinks after work.',
    options: ['went out', 'took out', 'checked out', 'ran out'],
    correctIndex: 0
  },
  {
    id: 'general-q58',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-58',
    type: 'drag',
    prompt: 'We decided to ____ instead of cooking.',
    options: ['eat out', 'stay in', 'sleep in', 'hang up'],
    correctIndex: 0
  },
  {
    id: 'general-q59',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-59',
    type: 'drag',
    prompt: 'We ____ pizza last night.',
    options: ['ordered in', 'woke up', 'took off', 'ran errands'],
    correctIndex: 0
  },
  {
    id: 'general-q60',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-60',
    type: 'drag',
    prompt: 'I ____ dinner for my family.',
    options: ['cooked', 'ran', 'drove', 'slept'],
    correctIndex: 0
  },

  {
    id: 'general-q61',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-61',
    type: 'drag',
    prompt: 'The children ____ every evening.',
    options: ['set the table', 'hit the sack', 'run errands', 'sleep in'],
    correctIndex: 0
  },
  {
    id: 'general-q62',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-62',
    type: 'drag',
    prompt: 'He ____ after the meal.',
    options: ['cleared the table', 'fell asleep', 'ran late', 'went out'],
    correctIndex: 0
  },
  {
    id: 'general-q63',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-63',
    type: 'drag',
    prompt: '____ your hands before you eat.',
    options: ['Wash', 'Fold', 'Ride', 'Drive'],
    correctIndex: 0
  },
  {
    id: 'general-q64',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-64',
    type: 'drag',
    prompt: 'Let’s ____ before the movie.',
    options: ['grab a bite', 'hit the sack', 'run errands', 'fill the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q65',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-65',
    type: 'drag',
    prompt: 'I ____ a quick snack after school.',
    options: ['made', 'took', 'ran', 'wrote'],
    correctIndex: 0
  },
  {
    id: 'general-q66',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-66',
    type: 'drag',
    prompt: 'I need to ____ my phone.',
    options: ['take a break from', 'run out of', 'fill up', 'check out'],
    correctIndex: 0
  },
  {
    id: 'general-q67',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-67',
    type: 'drag',
    prompt: 'She ____ her messages.',
    options: ['scrolled through', 'slept in', 'took off', 'signed up'],
    correctIndex: 0
  },
  {
    id: 'general-q68',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-68',
    type: 'drag',
    prompt: 'He ____ during his break.',
    options: ['checked social media', 'hit the sack', 'ran late', 'filled the tank'],
    correctIndex: 0
  },
  {
    id: 'general-q69',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-69',
    type: 'drag',
    prompt: 'We ____ an entire series in one weekend.',
    options: ['binge-watched', 'stood in line', 'woke up', 'ran out of milk'],
    correctIndex: 0
  },
  {
    id: 'general-q70',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-70',
    type: 'drag',
    prompt: '____ a deep breath and relax.',
    options: ['Take', 'Stand', 'Run', 'Drive'],
    correctIndex: 0
  },

  {
    id: 'general-q71',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-71',
    type: 'drag',
    prompt: 'He needed a few minutes to ____. ',
    options: ['calm down', 'run out', 'sleep in', 'check out'],
    correctIndex: 0
  },
  {
    id: 'general-q73',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-73',
    type: 'drag',
    prompt: '____, everything will be fine.',
    options: ['Take it easy', 'Run late', 'Hit the sack', 'Check out'],
    correctIndex: 0
  },
  {
    id: 'general-q74',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-74',
    type: 'drag',
    prompt: 'I’m ____ late, I’ll be there in 10 minutes.',
    options: ['running', 'waking', 'standing', 'filling'],
    correctIndex: 0
  },
  {
    id: 'general-q75',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-75',
    type: 'drag',
    prompt: '____ or we’ll miss the bus.',
    options: ['Hurry up', 'Sleep in', 'Calm down', 'Chill out'],
    correctIndex: 0
  },
  {
    id: 'general-q76',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-76',
    type: 'drag',
    prompt: 'I ____ the bus just in time.',
    options: ['caught', 'washed', 'signed', 'drove'],
    correctIndex: 0
  },
  {
    id: 'general-q77',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-77',
    type: 'drag',
    prompt: 'We ____ the bus at the next stop.',
    options: ['got off', 'woke up', 'went out', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q78',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-78',
    type: 'drag',
    prompt: 'She ____ the train at the main station.',
    options: ['got on', 'ran out of', 'stood in', 'checked out'],
    correctIndex: 0
  },
  {
    id: 'general-q79',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-79',
    type: 'drag',
    prompt: 'He ____ the train by one minute.',
    options: ['missed', 'caught', 'washed', 'filled'],
    correctIndex: 0
  },
  {
    id: 'general-q80',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-80',
    type: 'drag',
    prompt: 'We ____ home after the game.',
    options: ['headed', 'stood', 'ran', 'signed'],
    correctIndex: 0
  },

  {
    id: 'general-q81',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-81',
    type: 'drag',
    prompt: 'I ____ in traffic on my way home.',
    options: ['got stuck', 'woke up', 'took off', 'signed up'],
    correctIndex: 0
  },
  {
    id: 'general-q82',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-82',
    type: 'drag',
    prompt: 'We need to ____ the tank before we leave.',
    options: ['fill', 'run', 'sleep', 'sign'],
    correctIndex: 0
  },
  {
    id: 'general-q83',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-83',
    type: 'drag',
    prompt: 'She ____ to work every day.',
    options: ['drives', 'runs', 'lies', 'hits'],
    correctIndex: 0
  },
  {
    id: 'general-q84',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-84',
    type: 'drag',
    prompt: 'The kids ____ to school together.',
    options: ['walk', 'ride', 'sleep', 'drive'],
    correctIndex: 0
  },
  {
    id: 'general-q85',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-85',
    type: 'drag',
    prompt: 'He ____ his bike to the gym.',
    options: ['rides', 'drives', 'walks', 'sleeps'],
    correctIndex: 0
  },
  {
    id: 'general-q86',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-86',
    type: 'drag',
    prompt: 'I like to ____ before bed.',
    options: ['take a shower', 'run errands', 'go grocery shopping', 'fill out forms'],
    correctIndex: 0
  },
  {
    id: 'general-q87',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-87',
    type: 'drag',
    prompt: 'They ____ around eleven.',
    options: ['go to bed', 'wake up', 'run late', 'stand in line'],
    correctIndex: 0
  },
  {
    id: 'general-q88',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-88',
    type: 'drag',
    prompt: 'It took me a while to ____. ',
    options: ['fall asleep', 'wake up', 'go out', 'check out'],
    correctIndex: 0
  },
  {
    id: 'general-q89',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-89',
    type: 'drag',
    prompt: 'We ____ late watching videos.',
    options: ['stayed up', 'woke up', 'stood in', 'filled out'],
    correctIndex: 0
  },
  {
    id: 'general-q90',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-90',
    type: 'drag',
    prompt: 'I ____ on Sunday and got up at ten.',
    options: ['slept in', 'ran out', 'woke up', 'checked out'],
    correctIndex: 0
  },

  {
    id: 'general-q91',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-91',
    type: 'drag',
    prompt: 'I’m really tired, I’m going to ____. ',
    options: ['hit the sack', 'run late', 'binge-watch', 'check social media'],
    correctIndex: 0
  },
  {
    id: 'general-q92',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-92',
    type: 'drag',
    prompt: 'I need an hour to ____ in the morning.',
    options: ['get ready', 'run late', 'take off', 'scroll through'],
    correctIndex: 0
  },
  {
    id: 'general-q93',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-93',
    type: 'drag',
    prompt: 'We ____ of time to finish the project.',
    options: ['ran out', 'woke up', 'stood in', 'drove'],
    correctIndex: 0
  },
  {
    id: 'general-q94',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-94',
    type: 'drag',
    prompt: 'We ____ of milk, can you buy some?',
    options: ['ran out', 'woke up', 'stood in', 'drove'],
    correctIndex: 0
  },
  {
    id: 'general-q95',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-95',
    type: 'drag',
    prompt: 'She ____ her jacket and left.',
    options: ['put on', 'took off', 'hung up', 'ran out of'],
    correctIndex: 0
  },
  {
    id: 'general-q96',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-96',
    type: 'drag',
    prompt: 'He ____ his shoes at the door.',
    options: ['took off', 'put on', 'hung up', 'ran out of'],
    correctIndex: 0
  },
  {
    id: 'general-q97',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-97',
    type: 'drag',
    prompt: 'She ____ three dresses.',
    options: ['tried on', 'took off', 'put on', 'hung up'],
    correctIndex: 0
  },
  {
    id: 'general-q98',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-98',
    type: 'drag',
    prompt: 'I ____ after I came back from the gym.',
    options: ['got changed', 'got stuck', 'ran late', 'went out'],
    correctIndex: 0
  },
  {
    id: 'general-q99',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-99',
    type: 'drag',
    prompt: 'She ____ her little brother after school.',
    options: ['looks after', 'runs after', 'checks out', 'takes off'],
    correctIndex: 0
  },
  {
    id: 'general-q100',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-100',
    type: 'drag',
    prompt: 'He ____ the plants in the house.',
    options: ['takes care of', 'gets rid of', 'runs out of', 'takes off'],
    correctIndex: 0
  },
  {
    id: 'general-q101',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-101',
    type: 'drag',
    prompt: 'I ____ an old friend at the supermarket.',
    options: ['ran into', 'woke up', 'hung up', 'checked out'],
    correctIndex: 0
  },
  {
    id: 'general-q102',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-102',
    type: 'drag',
    prompt: 'She ____ her teacher downtown.',
    options: ['bumped into', 'ran into battery', 'wrote down', 'took off'],
    correctIndex: 0
  },
  {
    id: 'general-q103',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-103',
    type: 'drag',
    prompt: 'I stayed late to ____ work.',
    options: ['catch up on', 'run into', 'look forward to', 'take care of'],
    correctIndex: 0
  },
  {
    id: 'general-q104',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-104',
    type: 'drag',
    prompt: 'I need the weekend to ____ sleep.',
    options: ['catch up on', 'wake up from', 'run out of', 'take turns with'],
    correctIndex: 0
  },
  {
    id: 'general-q105',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-105',
    type: 'drag',
    prompt: 'She ____ during every meeting.',
    options: ['takes notes', 'takes walks', 'takes off', 'takes turns'],
    correctIndex: 0
  },
  {
    id: 'general-q106',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-106',
    type: 'drag',
    prompt: '____ the address so you don’t forget it.',
    options: ['Write down', 'Turn down', 'Scroll down', 'Run down'],
    correctIndex: 0
  },
  {
    id: 'general-q107',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-107',
    type: 'drag',
    prompt: 'He ____ a few ideas.',
    options: ['jotted down', 'turned down', 'ran into', 'hit the sack'],
    correctIndex: 0
  },
  {
    id: 'general-q108',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-108',
    type: 'drag',
    prompt: 'I ____ the restaurant’s address online.',
    options: ['looked up', 'looked after', 'looked forward to', 'looked down'],
    correctIndex: 0
  },
  {
    id: 'general-q109',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-109',
    type: 'drag',
    prompt: 'Many people ____ their parents.',
    options: ['look up to', 'look after', 'run into', 'catch up on'],
    correctIndex: 0
  },
  {
    id: 'general-q110',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-110',
    type: 'drag',
    prompt: 'Make sure you ____ yourself.',
    options: ['look after', 'run after', 'look up to', 'run into'],
    correctIndex: 0
  },

  {
    id: 'general-q111',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-111',
    type: 'drag',
    prompt: 'I’m ____ the weekend.',
    options: ['looking forward to', 'looking down', 'running into', 'taking turns with'],
    correctIndex: 0
  },
  {
    id: 'general-q112',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-112',
    type: 'drag',
    prompt: 'Drink water to ____.',
    options: ['stay hydrated', 'stay up late', 'stay in', 'stay logged in'],
    correctIndex: 0
  },
  {
    id: 'general-q113',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-113',
    type: 'drag',
    prompt: 'Let’s ____ before class.',
    options: ['grab a coffee', 'take a screenshot', 'run the dishwasher', 'split the bill'],
    correctIndex: 0
  },
  {
    id: 'general-q114',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-114',
    type: 'drag',
    prompt: 'It’s important to ____ every day.',
    options: ['drink enough water', 'scroll down', 'run into people', 'split the bill'],
    correctIndex: 0
  },
  {
    id: 'general-q115',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-115',
    type: 'drag',
    prompt: 'I ____ leftovers for lunch.',
    options: ['heated up', 'fixed up', 'wrote down', 'ran out of'],
    correctIndex: 0
  },
  {
    id: 'general-q116',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-116',
    type: 'drag',
    prompt: 'Let the soup ____ before serving.',
    options: ['cool down', 'warm up', 'run out', 'boil over'],
    correctIndex: 0
  },
  {
    id: 'general-q117',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-117',
    type: 'drag',
    prompt: '____ before exercising.',
    options: ['Warm up', 'Sleep in', 'Scroll up', 'Bump into someone'],
    correctIndex: 0
  },
  {
    id: 'general-q118',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-118',
    type: 'drag',
    prompt: 'We ____ after the party.',
    options: ['cleaned up', 'ran out', 'logged out', 'split up'],
    correctIndex: 0
  },
  {
    id: 'general-q119',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-119',
    type: 'drag',
    prompt: 'She ____ her bedroom.',
    options: ['tidied up', 'ran into', 'hit up', 'hung up'],
    correctIndex: 0
  },
  {
    id: 'general-q120',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-120',
    type: 'drag',
    prompt: 'He ____ the kitchen counter.',
    options: ['wiped down', 'wrote down', 'ran down', 'looked down'],
    correctIndex: 0
  },

  {
    id: 'general-q121',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-121',
    type: 'drag',
    prompt: 'I ____ the floor after cooking.',
    options: ['mopped', 'dusted', 'baked', 'boiled'],
    correctIndex: 0
  },
  {
    id: 'general-q122',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-122',
    type: 'drag',
    prompt: 'We ____ the dishwasher every night.',
    options: ['run', 'ride', 'walk', 'drive'],
    correctIndex: 0
  },
  {
    id: 'general-q123',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-123',
    type: 'drag',
    prompt: 'I ____ the bathroom once a week.',
    options: ['clean', 'drive to', 'scroll through', 'heat up'],
    correctIndex: 0
  },
  {
    id: 'general-q124',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-124',
    type: 'drag',
    prompt: 'He ____ the furniture this morning.',
    options: ['dusted', 'mopped', 'baked', 'boiled'],
    correctIndex: 0
  },
  {
    id: 'general-q125',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-125',
    type: 'drag',
    prompt: 'Don’t forget to ____ the plants.',
    options: ['water', 'dust', 'ride', 'split'],
    correctIndex: 0
  },
  {
    id: 'general-q126',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-126',
    type: 'drag',
    prompt: 'We ____ the sheets every week.',
    options: ['change', 'split', 'scroll', 'delete'],
    correctIndex: 0
  },
  {
    id: 'general-q127',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-127',
    type: 'drag',
    prompt: 'He ____ the broken chair.',
    options: ['fixed', 'locked', 'looked up', 'charged'],
    correctIndex: 0
  },
  {
    id: 'general-q128',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-128',
    type: 'drag',
    prompt: 'I ____ an alarm for 6 a.m.',
    options: ['set', 'took', 'ran', 'split'],
    correctIndex: 0
  },
  {
    id: 'general-q129',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-129',
    type: 'drag',
    prompt: 'Please ____ the lights before leaving.',
    options: ['turn off', 'run off', 'sign off', 'look off'],
    correctIndex: 0
  },
  {
    id: 'general-q130',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-130',
    type: 'drag',
    prompt: 'He ____ the TV to watch the news.',
    options: ['turned on', 'turned off', 'turned down', 'turned up'],
    correctIndex: 0
  },

  {
    id: 'general-q131',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-131',
    type: 'drag',
    prompt: '____ the volume, it’s too loud.',
    options: ['Turn down', 'Turn up', 'Turn off', 'Turn on'],
    correctIndex: 0
  },
  {
    id: 'general-q132',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-132',
    type: 'drag',
    prompt: 'It’s cold, ____ the heat.',
    options: ['turn up', 'turn down', 'turn off', 'turn on'],
    correctIndex: 0
  },
  {
    id: 'general-q133',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-133',
    type: 'drag',
    prompt: 'My phone ____ of battery.',
    options: ['ran out', 'wrote down', 'turned off', 'split up'],
    correctIndex: 0
  },
  {
    id: 'general-q134',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-134',
    type: 'drag',
    prompt: 'I need to ____ my phone.',
    options: ['charge', 'wash', 'sign', 'ride'],
    correctIndex: 0
  },
  {
    id: 'general-q135',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-135',
    type: 'drag',
    prompt: 'He ____ a photo on Instagram.',
    options: ['posted', 'mailed', 'baked', 'loaded'],
    correctIndex: 0
  },
  {
    id: 'general-q136',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-136',
    type: 'drag',
    prompt: 'Please ____ the file to the folder.',
    options: ['upload', 'download', 'delete', 'block'],
    correctIndex: 0
  },
  {
    id: 'general-q137',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-137',
    type: 'drag',
    prompt: 'She ____ a fitness app.',
    options: ['downloaded', 'uploaded', 'blocked', 'deleted'],
    correctIndex: 0
  },
  {
    id: 'general-q138',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-138',
    type: 'drag',
    prompt: 'I accidentally ____ the message.',
    options: ['deleted', 'blocked', 'posted', 'downloaded'],
    correctIndex: 0
  },
  {
    id: 'general-q139',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-139',
    type: 'drag',
    prompt: 'He ____ the spam number.',
    options: ['blocked', 'wrote', 'split', 'fixed'],
    correctIndex: 0
  },
  {
    id: 'general-q140',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-140',
    type: 'drag',
    prompt: 'She ____ some accounts to clean her feed.',
    options: ['unfollowed', 'unloaded', 'unblocked', 'unwrote'],
    correctIndex: 0
  },

  {
    id: 'general-q141',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-141',
    type: 'drag',
    prompt: 'He sent me a ____ online.',
    options: ['friend request', 'friend ticket', 'friend budget', 'friend note'],
    correctIndex: 0
  },
  {
    id: 'general-q142',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-142',
    type: 'drag',
    prompt: '____ me a message when you’re ready.',
    options: ['Send', 'Save', 'Split', 'Catch'],
    correctIndex: 0
  },
  {
    id: 'general-q143',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-143',
    type: 'drag',
    prompt: 'I ____ him earlier today.',
    options: ['texted', 'mailed', 'blocked', 'withdrew'],
    correctIndex: 0
  },
  {
    id: 'general-q144',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-144',
    type: 'drag',
    prompt: 'I’ll ____ you back later.',
    options: ['call', 'text', 'block', 'unfollow'],
    correctIndex: 0
  },
  {
    id: 'general-q145',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-145',
    type: 'drag',
    prompt: 'I ____ your call, sorry.',
    options: ['missed', 'blocked', 'posted', 'charged'],
    correctIndex: 0
  },
  {
    id: 'general-q146',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-146',
    type: 'drag',
    prompt: '____ down to see more options.',
    options: ['Scroll', 'Run', 'Write', 'Turn'],
    correctIndex: 0
  },
  {
    id: 'general-q147',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-147',
    type: 'drag',
    prompt: '____ up to read the beginning.',
    options: ['Scroll', 'Run', 'Write', 'Turn'],
    correctIndex: 0
  },
  {
    id: 'general-q148',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-148',
    type: 'drag',
    prompt: 'I ____ a screenshot of the conversation.',
    options: ['took', 'made', 'wrote', 'charged'],
    correctIndex: 0
  },
  {
    id: 'general-q149',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-149',
    type: 'drag',
    prompt: '____ a reminder for the appointment.',
    options: ['Set', 'Run', 'Split', 'Catch'],
    correctIndex: 0
  },
  {
    id: 'general-q150',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-150',
    type: 'drag',
    prompt: 'Let’s ____ a meeting for Monday.',
    options: ['schedule', 'charge', 'unfollow', 'upload'],
    correctIndex: 0
  },

  {
    id: 'general-q151',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-151',
    type: 'drag',
    prompt: 'She ____ notes during the meeting.',
    options: ['took', 'fixed', 'heated', 'saved'],
    correctIndex: 0
  },
  {
    id: 'general-q152',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-152',
    type: 'drag',
    prompt: 'I ____ the meeting on Zoom.',
    options: ['joined', 'ran', 'deleted', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q153',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-153',
    type: 'drag',
    prompt: 'He ____ the meeting efficiently.',
    options: ['ran', 'joined', 'missed', 'scrolled'],
    correctIndex: 0
  },
  {
    id: 'general-q154',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-154',
    type: 'drag',
    prompt: 'I ____ an email to my coworker.',
    options: ['wrote', 'fixed', 'charged', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q155',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-155',
    type: 'drag',
    prompt: 'She ____ the email this morning.',
    options: ['sent', 'ran', 'split', 'drove'],
    correctIndex: 0
  },
  {
    id: 'general-q156',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-156',
    type: 'drag',
    prompt: 'I ____ my voicemail during lunch.',
    options: ['checked', 'baked', 'boiled', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q157',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-157',
    type: 'drag',
    prompt: 'I need to ____ his call.',
    options: ['return', 'delete', 'post', 'block'],
    correctIndex: 0
  },
  {
    id: 'general-q158',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-158',
    type: 'drag',
    prompt: 'Don’t be afraid to ____ for help.',
    options: ['ask', 'block', 'scroll', 'sign'],
    correctIndex: 0
  },
  {
    id: 'general-q159',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-159',
    type: 'drag',
    prompt: 'Can you ____ me a hand with this box?',
    options: ['give', 'take', 'run', 'split'],
    correctIndex: 0
  },
  {
    id: 'general-q160',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-160',
    type: 'drag',
    prompt: 'She ____ at the store on weekends.',
    options: ['helped out', 'ran out', 'signed up', 'hung up'],
    correctIndex: 0
  },

  {
    id: 'general-q161',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-161',
    type: 'drag',
    prompt: 'Let’s ____ washing the dishes.',
    options: ['take turns', 'run out of', 'scroll through', 'bump into'],
    correctIndex: 0
  },
  {
    id: 'general-q162',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-162',
    type: 'drag',
    prompt: 'They ____ chores fairly.',
    options: ['share', 'split', 'block', 'delete'],
    correctIndex: 0
  },
  {
    id: 'general-q163',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-163',
    type: 'drag',
    prompt: '____ tasks can take a lot of time.',
    options: ['Household', 'Office', 'Holiday', 'School'],
    correctIndex: 0
  },
  {
    id: 'general-q164',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-164',
    type: 'drag',
    prompt: 'I ____ dinner before they arrived.',
    options: ['fixed', 'saved', 'charged', 'downloaded'],
    correctIndex: 0
  },
  {
    id: 'general-q165',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-165',
    type: 'drag',
    prompt: 'Let’s ____ something to eat after work.',
    options: ['grab', 'block', 'post', 'scroll'],
    correctIndex: 0
  },
  {
    id: 'general-q166',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-166',
    type: 'drag',
    prompt: 'Can you ____ some water for tea?',
    options: ['heat', 'scroll', 'fix', 'split'],
    correctIndex: 0
  },
  {
    id: 'general-q167',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-167',
    type: 'drag',
    prompt: '____ some water for the pasta.',
    options: ['Boil', 'Bake', 'Dust', 'Deposit'],
    correctIndex: 0
  },
  {
    id: 'general-q168',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-168',
    type: 'drag',
    prompt: 'I ____ rice for dinner.',
    options: ['cooked', 'saved', 'blocked', 'uploaded'],
    correctIndex: 0
  },
  {
    id: 'general-q169',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-169',
    type: 'drag',
    prompt: 'We ____ a cake for her birthday.',
    options: ['baked', 'boiled', 'dusted', 'mailed'],
    correctIndex: 0
  },
  {
    id: 'general-q170',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-170',
    type: 'drag',
    prompt: 'I ____ a new recipe last night.',
    options: ['tried out', 'ran out', 'looked up to', 'scrolled up'],
    correctIndex: 0
  },

  {
    id: 'general-q171',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-171',
    type: 'drag',
    prompt: '____ the soup and tell me if it needs salt.',
    options: ['Taste', 'Boil', 'Save', 'Mail'],
    correctIndex: 0
  },
  {
    id: 'general-q172',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-172',
    type: 'drag',
    prompt: 'She ____ the dishwasher after dinner.',
    options: ['loaded', 'baked', 'split', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q173',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-173',
    type: 'drag',
    prompt: 'He ____ a snack before studying.',
    options: ['fixed', 'ran', 'boiled', 'mailed'],
    correctIndex: 0
  },
  {
    id: 'general-q174',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-174',
    type: 'drag',
    prompt: 'I’m trying to ____ money for a new laptop.',
    options: ['save', 'spend', 'split', 'block'],
    correctIndex: 0
  },
  {
    id: 'general-q175',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-175',
    type: 'drag',
    prompt: 'She ____ money on clothes too often.',
    options: ['spends', 'saves', 'deposits', 'withdraws'],
    correctIndex: 0
  },
  {
    id: 'general-q176',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-176',
    type: 'drag',
    prompt: 'We need to ____ more carefully.',
    options: ['budget', 'block', 'split', 'bake'],
    correctIndex: 0
  },
  {
    id: 'general-q177',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-177',
    type: 'drag',
    prompt: 'I ____ money into my account.',
    options: ['deposited', 'withdrew', 'baked', 'mailed'],
    correctIndex: 0
  },
  {
    id: 'general-q178',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-178',
    type: 'drag',
    prompt: 'He ____ money from the ATM.',
    options: ['withdrew', 'deposited', 'baked', 'uploaded'],
    correctIndex: 0
  },
  {
    id: 'general-q179',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-179',
    type: 'drag',
    prompt: 'She ____ her balance online.',
    options: ['checked', 'blocked', 'baked', 'split'],
    correctIndex: 0
  },
  {
    id: 'general-q180',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-180',
    type: 'drag',
    prompt: 'I prefer to ____ in cash.',
    options: ['pay', 'save', 'sign', 'schedule'],
    correctIndex: 0
  },

  {
    id: 'general-q181',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-181',
    type: 'drag',
    prompt: 'Most stores let you ____ by card.',
    options: ['pay', 'walk', 'sleep', 'bake'],
    correctIndex: 0
  },
  {
    id: 'general-q182',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-182',
    type: 'drag',
    prompt: 'Let’s ____ the bill for dinner.',
    options: ['split', 'save', 'charge', 'block'],
    correctIndex: 0
  },
  {
    id: 'general-q183',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-183',
    type: 'drag',
    prompt: 'She ____ errands for her grandmother.',
    options: ['ran', 'saved', 'blocked', 'baked'],
    correctIndex: 0
  },
  {
    id: 'general-q184',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-184',
    type: 'drag',
    prompt: 'I need to ____ a package at the post office.',
    options: ['drop off', 'pick up', 'run into', 'scroll down'],
    correctIndex: 0
  },
  {
    id: 'general-q185',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-185',
    type: 'drag',
    prompt: 'She ____ her package after work.',
    options: ['picked up', 'dropped off', 'ran out of', 'signed up'],
    correctIndex: 0
  },
  {
    id: 'general-q186',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-186',
    type: 'drag',
    prompt: 'I ____ a letter to my cousin.',
    options: ['mailed', 'baked', 'saved', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q187',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-187',
    type: 'drag',
    prompt: 'I ____ an appointment with the doctor.',
    options: ['scheduled', 'deleted', 'posted', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'general-q188',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-188',
    type: 'drag',
    prompt: 'I had to ____ my appointment.',
    options: ['cancel', 'block', 'upload', 'bake'],
    correctIndex: 0
  },
  {
    id: 'general-q189',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-189',
    type: 'drag',
    prompt: 'We ____ the meeting for Friday.',
    options: ['rescheduled', 'reposted', 'recharged', 'rewrote'],
    correctIndex: 0
  },
  {
    id: 'general-q190',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-190',
    type: 'drag',
    prompt: 'I ____ the day off to rest.',
    options: ['took', 'split', 'charged', 'saved'],
    correctIndex: 0
  },

  {
    id: 'general-q191',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-191',
    type: 'drag',
    prompt: 'Let’s go outside and ____ some fresh air.',
    options: ['get', 'take', 'run', 'save'],
    correctIndex: 0
  },
  {
    id: 'general-q192',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-192',
    type: 'drag',
    prompt: 'We ____ the sun at the beach.',
    options: ['soaked up', 'ran into', 'looked up', 'split up'],
    correctIndex: 0
  },
  {
    id: 'general-q193',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-193',
    type: 'drag',
    prompt: 'I ____ a walk around the block after dinner.',
    options: ['took', 'ran', 'drove', 'biked'],
    correctIndex: 0
  },
  {
    id: 'general-q194',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-194',
    type: 'drag',
    prompt: 'He ____ the dog every morning.',
    options: ['walks', 'bakes', 'blocks', 'splits'],
    correctIndex: 0
  },
  {
    id: 'general-q195',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-195',
    type: 'drag',
    prompt: 'She ____ the cat after getting home.',
    options: ['fed', 'fixed', 'saved', 'mailed'],
    correctIndex: 0
  },
  {
    id: 'general-q196',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-196',
    type: 'drag',
    prompt: 'We ____ of our pets together.',
    options: ['take care', 'take notes', 'take turns', 'take off'],
    correctIndex: 0
  },
  {
    id: 'general-q197',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-197',
    type: 'drag',
    prompt: 'They ____ a loan to buy a car.',
    options: ['took out', 'ran out of', 'looked after', 'split up'],
    correctIndex: 0
  },
  {
    id: 'general-q198',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-198',
    type: 'drag',
    prompt: 'I ____ the weather before leaving.',
    options: ['checked', 'blocked', 'baked', 'saved'],
    correctIndex: 0
  },
  {
    id: 'general-q199',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-199',
    type: 'drag',
    prompt: 'He ____ the news every morning.',
    options: ['reads', 'saves', 'charges', 'blocks'],
    correctIndex: 0
  },
  {
    id: 'general-q200',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-200',
    type: 'drag',
    prompt: '____ a deep breath and relax.',
    options: ['Take', 'Save', 'Split', 'Block'],
    correctIndex: 0
  },
  {
    id: 'general-q301',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-301',
    type: 'drag',
    prompt: 'I like to ____ my day with a cup of tea.',
    options: ['start', 'end', 'sleep', 'skip'],
    correctIndex: 0
  },
  {
    id: 'general-q302',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-302',
    type: 'drag',
    prompt: 'She ____ her day by reading a book.',
    options: ['ends', 'starts', 'skips', 'loses'],
    correctIndex: 0
  },
  {
    id: 'general-q303',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-303',
    type: 'drag',
    prompt: 'I need to ____ before we go out.',
    options: ['freshen up', 'wake up late', 'give up', 'log in'],
    correctIndex: 0
  },
  {
    id: 'general-q304',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-304',
    type: 'drag',
    prompt: 'I ____ on weekdays.',
    options: ['wake up early', 'sleep in', 'run into traffic', 'cut in line'],
    correctIndex: 0
  },
  {
    id: 'general-q305',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-305',
    type: 'drag',
    prompt: 'I try to ____ early for better health.',
    options: ['sleep', 'wake up', 'stand up', 'log in'],
    correctIndex: 0
  },
  {
    id: 'general-q306',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-306',
    type: 'drag',
    prompt: 'I ____ and missed the meeting.',
    options: ['woke up late', 'woke up early', 'took a seat', 'took the stairs'],
    correctIndex: 0
  },
  {
    id: 'general-q307',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-307',
    type: 'drag',
    prompt: 'Don’t forget to ____ your medicine.',
    options: ['take', 'lose', 'skip', 'double-check'],
    correctIndex: 0
  },
  {
    id: 'general-q308',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-308',
    type: 'drag',
    prompt: 'I need to ____ an appointment with the dentist.',
    options: ['book', 'cancel', 'miss', 'unlock'],
    correctIndex: 0
  },
  {
    id: 'general-q309',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-309',
    type: 'drag',
    prompt: 'He ____ paperwork at the office.',
    options: ['filled out', 'ran into', 'wiped down', 'logged out'],
    correctIndex: 0
  },
  {
    id: 'general-q310',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-310',
    type: 'drag',
    prompt: 'We ____ traffic on the way to work.',
    options: ['ran into', 'beat the', 'took out', 'stood in'],
    correctIndex: 0
  },
  {
    id: 'general-q311',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-311',
    type: 'drag',
    prompt: 'We left early to ____ the traffic.',
    options: ['beat', 'run into', 'cause', 'follow'],
    correctIndex: 0
  },
  {
    id: 'general-q312',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-312',
    type: 'drag',
    prompt: 'I spent the morning ____ my emails.',
    options: ['going through', 'logging into', 'wiping down', 'locking'],
    correctIndex: 0
  },
  {
    id: 'general-q313',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-313',
    type: 'drag',
    prompt: 'She ____ her messages during lunch.',
    options: ['checked', 'washed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q314',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-314',
    type: 'drag',
    prompt: 'I ____ my calendar with new deadlines.',
    options: ['updated', 'deleted', 'blocked', 'skipped'],
    correctIndex: 0
  },
  {
    id: 'general-q315',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-315',
    type: 'drag',
    prompt: 'We ____ our plans because it was raining.',
    options: ['cancelled', 'made', 'met', 'beat'],
    correctIndex: 0
  },
  {
    id: 'general-q316',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-316',
    type: 'drag',
    prompt: 'Let’s ____ plans for the weekend.',
    options: ['make', 'cancel', 'separate', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q317',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-317',
    type: 'drag',
    prompt: 'We ____ the plan and everything went well.',
    options: ['stuck to', 'gave up', 'ran from', 'cut in'],
    correctIndex: 0
  },
  {
    id: 'general-q318',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-318',
    type: 'drag',
    prompt: 'He quickly ____ the subject.',
    options: ['changed', 'deleted', 'locked', 'washed'],
    correctIndex: 0
  },
  {
    id: 'general-q319',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-319',
    type: 'drag',
    prompt: 'She ____ the topic of vacation.',
    options: ['brought up', 'gave up', 'cut in', 'ran into'],
    correctIndex: 0
  },
  {
    id: 'general-q320',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-320',
    type: 'drag',
    prompt: 'Don’t be afraid to ____ your mind.',
    options: ['speak', 'wash', 'lock', 'double-check'],
    correctIndex: 0
  },

  {
    id: 'general-q321',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-321',
    type: 'drag',
    prompt: 'He tried to ____ conversation with the guests.',
    options: ['make', 'cancel', 'unlock', 'wash'],
    correctIndex: 0
  },
  {
    id: 'general-q322',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-322',
    type: 'drag',
    prompt: 'Try not to ____ people when they talk.',
    options: ['interrupt', 'wash', 'mail', 'unlock'],
    correctIndex: 0
  },
  {
    id: 'general-q323',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-323',
    type: 'drag',
    prompt: 'You should ____ prepared for the meeting.',
    options: ['come', 'sleep', 'drive', 'walk'],
    correctIndex: 0
  },
  {
    id: 'general-q324',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-324',
    type: 'drag',
    prompt: 'Let’s ____ ideas for the project.',
    options: ['brainstorm', 'separate', 'vacuum', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q325',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-325',
    type: 'drag',
    prompt: 'He ____ the deadline for the assignment.',
    options: ['missed', 'met', 'beat', 'washed'],
    correctIndex: 0
  },
  {
    id: 'general-q326',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-326',
    type: 'drag',
    prompt: 'We worked hard to ____ the deadline.',
    options: ['meet', 'miss', 'cut', 'give up'],
    correctIndex: 0
  },
  {
    id: 'general-q327',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-327',
    type: 'drag',
    prompt: 'She ____ responsibility for the mistake.',
    options: ['took', 'lost', 'missed', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q328',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-328',
    type: 'drag',
    prompt: 'I decided to ____ a chance and apply.',
    options: ['take', 'miss', 'wash', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q329',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-329',
    type: 'drag',
    prompt: 'Starting a business is to ____ a risk.',
    options: ['take', 'cut', 'lock', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q330',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-330',
    type: 'drag',
    prompt: 'She ____ notes during the class.',
    options: ['took', 'lost', 'gave', 'cut'],
    correctIndex: 0
  },

  {
    id: 'general-q331',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-331',
    type: 'drag',
    prompt: 'I ____ notes of every lecture.',
    options: ['keep', 'wash', 'lock', 'block'],
    correctIndex: 0
  },
  {
    id: 'general-q332',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-332',
    type: 'drag',
    prompt: 'I ____ a reminder to pay the bill.',
    options: ['wrote', 'washed', 'locked', 'ran'],
    correctIndex: 0
  },
  {
    id: 'general-q333',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-333',
    type: 'drag',
    prompt: 'He ____ a reminder on the fridge.',
    options: ['left', 'gave', 'cut', 'beat'],
    correctIndex: 0
  },
  {
    id: 'general-q334',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-334',
    type: 'drag',
    prompt: 'I ____ my profile picture.',
    options: ['updated', 'washed', 'locked', 'missed'],
    correctIndex: 0
  },
  {
    id: 'general-q335',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-335',
    type: 'drag',
    prompt: 'It’s good to ____ your password regularly.',
    options: ['change', 'cancel', 'sleep', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q336',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-336',
    type: 'drag',
    prompt: 'Always ____-check your work before submitting.',
    options: ['double', 'single', 'late', 'short'],
    correctIndex: 0
  },
  {
    id: 'general-q337',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-337',
    type: 'drag',
    prompt: 'If you don’t know the word, ____ it up.',
    options: ['look', 'write', 'wash', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q338',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-338',
    type: 'drag',
    prompt: 'Can you ____ back some milk?',
    options: ['bring', 'cut', 'lock', 'vacuum'],
    correctIndex: 0
  },
  {
    id: 'general-q339',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-339',
    type: 'drag',
    prompt: 'She ____ out a dress for the event.',
    options: ['picked', 'locked', 'washed', 'skipped'],
    correctIndex: 0
  },
  {
    id: 'general-q340',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-340',
    type: 'drag',
    prompt: 'Let’s ____ the numbers before we decide.',
    options: ['run', 'wash', 'lock', 'mail'],
    correctIndex: 0
  },

  {
    id: 'general-q341',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-341',
    type: 'drag',
    prompt: 'If you ____ the math, it’s cheaper to buy in bulk.',
    options: ['do', 'wash', 'lock', 'skip'],
    correctIndex: 0
  },
  {
    id: 'general-q342',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-342',
    type: 'drag',
    prompt: 'Just ____ your best and don’t worry.',
    options: ['try', 'cut', 'rush', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q343',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-343',
    type: 'drag',
    prompt: 'He always ____ his best at work.',
    options: ['does', 'washes', 'locks', 'skips'],
    correctIndex: 0
  },
  {
    id: 'general-q344',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-344',
    type: 'drag',
    prompt: '____ trying, you’ll get it eventually.',
    options: ['Keep', 'Stop', 'Cut', 'Skip'],
    correctIndex: 0
  },
  {
    id: 'general-q345',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-345',
    type: 'drag',
    prompt: 'Don’t ____ up, you’re almost there.',
    options: ['give', 'wash', 'lock', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q346',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-346',
    type: 'drag',
    prompt: 'Sometimes you need to ____ yourself to succeed.',
    options: ['push', 'wash', 'lock', 'skip'],
    correctIndex: 0
  },
  {
    id: 'general-q347',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-347',
    type: 'drag',
    prompt: '____ a moment to breathe.',
    options: ['Take', 'Run', 'Cut', 'Mail'],
    correctIndex: 0
  },
  {
    id: 'general-q348',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-348',
    type: 'drag',
    prompt: 'Let’s ____ a break and relax.',
    options: ['take', 'wash', 'lock', 'drive'],
    correctIndex: 0
  },
  {
    id: 'general-q349',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-349',
    type: 'drag',
    prompt: 'You’re working too fast, ____ down.',
    options: ['slow', 'speed', 'cut', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q350',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-350',
    type: 'drag',
    prompt: 'We need to ____ up to meet the deadline.',
    options: ['speed', 'slow', 'wash', 'lock'],
    correctIndex: 0
  },

  {
    id: 'general-q351',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-351',
    type: 'drag',
    prompt: 'Let’s ____ things slow and not rush.',
    options: ['take', 'push', 'lock', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q352',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-352',
    type: 'drag',
    prompt: 'We need to ____ ahead for the trip.',
    options: ['plan', 'wash', 'lock', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q353',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-353',
    type: 'drag',
    prompt: 'We must ____ ahead and prepare for the future.',
    options: ['look', 'cut', 'wash', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q354',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-354',
    type: 'drag',
    prompt: '____ ready for the meeting.',
    options: ['Get', 'Stay', 'Lose', 'Wash'],
    correctIndex: 0
  },
  {
    id: 'general-q355',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-355',
    type: 'drag',
    prompt: '____ yourself for a long day.',
    options: ['Prepare', 'Lose', 'Cut', 'Skip'],
    correctIndex: 0
  },
  {
    id: 'general-q356',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-356',
    type: 'drag',
    prompt: 'It’s hard to ____ focused when tired.',
    options: ['stay', 'lose', 'mail', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q357',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-357',
    type: 'drag',
    prompt: 'I ____ motivation halfway through.',
    options: ['lost', 'kept', 'washed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q358',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-358',
    type: 'drag',
    prompt: 'Find ways to ____ motivated.',
    options: ['stay', 'lose', 'separate', 'vacuum'],
    correctIndex: 0
  },
  {
    id: 'general-q359',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-359',
    type: 'drag',
    prompt: 'We ____ the elevator to the 10th floor.',
    options: ['took', 'washed', 'mailed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q360',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-360',
    type: 'drag',
    prompt: 'She ____ the stairs instead of the elevator.',
    options: ['takes', 'locks', 'mails', 'washes'],
    correctIndex: 0
  },

  {
    id: 'general-q361',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-361',
    type: 'drag',
    prompt: 'I went ____ to get water.',
    options: ['downstairs', 'ahead', 'upstairs', 'inside'],
    correctIndex: 0
  },
  {
    id: 'general-q362',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-362',
    type: 'drag',
    prompt: 'She went ____ to her room.',
    options: ['upstairs', 'downstairs', 'outside', 'ahead'],
    correctIndex: 0
  },
  {
    id: 'general-q363',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-363',
    type: 'drag',
    prompt: 'Please ____ a seat and wait.',
    options: ['take', 'wash', 'cut', 'push'],
    correctIndex: 0
  },
  {
    id: 'general-q364',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-364',
    type: 'drag',
    prompt: 'You may ____ a seat now.',
    options: ['have', 'lock', 'wash', 'skip'],
    correctIndex: 0
  },
  {
    id: 'general-q365',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-365',
    type: 'drag',
    prompt: '____ up straight for better posture.',
    options: ['Stand', 'Sit', 'Sleep', 'Lay'],
    correctIndex: 0
  },
  {
    id: 'general-q366',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-366',
    type: 'drag',
    prompt: '____ up straight at your desk.',
    options: ['Sit', 'Stand', 'Sleep', 'Lay'],
    correctIndex: 0
  },
  {
    id: 'general-q367',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-367',
    type: 'drag',
    prompt: 'Let’s ____ our legs during the break.',
    options: ['stretch', 'lock', 'cut', 'wash'],
    correctIndex: 0
  },
  {
    id: 'general-q368',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-368',
    type: 'drag',
    prompt: '____ a deep breath to relax.',
    options: ['Take', 'Lose', 'Skip', 'Lock'],
    correctIndex: 0
  },
  {
    id: 'general-q369',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-369',
    type: 'drag',
    prompt: '____ slowly through your mouth.',
    options: ['Exhale', 'Inhale', 'Stretch', 'Lock'],
    correctIndex: 0
  },
  {
    id: 'general-q370',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-370',
    type: 'drag',
    prompt: '____ deeply and hold your breath.',
    options: ['Inhale', 'Exhale', 'Wash', 'Mail'],
    correctIndex: 0
  },

  {
    id: 'general-q371',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-371',
    type: 'drag',
    prompt: 'We ____ in line for concert tickets.',
    options: ['stood', 'sat', 'slept', 'ran'],
    correctIndex: 0
  },
  {
    id: 'general-q372',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-372',
    type: 'drag',
    prompt: 'Someone ____ in line and people got angry.',
    options: ['cut', 'stood', 'washed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q373',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-373',
    type: 'drag',
    prompt: 'Please ____ your turn.',
    options: ['wait', 'cut', 'lock', 'wash'],
    correctIndex: 0
  },
  {
    id: 'general-q374',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-374',
    type: 'drag',
    prompt: 'It was hot, so I ____ on the AC.',
    options: ['turned', 'locked', 'washed', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q375',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-375',
    type: 'drag',
    prompt: '____ off the heater before leaving.',
    options: ['Turn', 'Lock', 'Wash', 'Cut'],
    correctIndex: 0
  },
  {
    id: 'general-q376',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-376',
    type: 'drag',
    prompt: 'She ____ the temperature in the room.',
    options: ['adjusted', 'washed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q377',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-377',
    type: 'drag',
    prompt: 'Could you ____ the window?',
    options: ['open', 'lock', 'wash', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q378',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-378',
    type: 'drag',
    prompt: '____ the window, it’s cold outside.',
    options: ['Close', 'Open', 'Wash', 'Lock'],
    correctIndex: 0
  },
  {
    id: 'general-q379',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-379',
    type: 'drag',
    prompt: 'Don’t forget to ____ the door.',
    options: ['lock', 'wash', 'mail', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q380',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-380',
    type: 'drag',
    prompt: 'He ____ the door and entered.',
    options: ['unlocked', 'washed', 'mailed', 'cut'],
    correctIndex: 0
  },

  {
    id: 'general-q381',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-381',
    type: 'drag',
    prompt: 'I heard knocking, so I ____ the door.',
    options: ['answered', 'locked', 'washed', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q382',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-382',
    type: 'drag',
    prompt: 'She ____ the doorbell twice.',
    options: ['rang', 'washed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q383',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-383',
    type: 'drag',
    prompt: 'I ____ through the peephole before opening.',
    options: ['looked', 'washed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q384',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-384',
    type: 'drag',
    prompt: 'I ____ out the recycling every Wednesday.',
    options: ['take', 'wash', 'lock', 'mail'],
    correctIndex: 0
  },
  {
    id: 'general-q385',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-385',
    type: 'drag',
    prompt: 'We ____ the trash into three bins.',
    options: ['separate', 'wash', 'lock', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q386',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-386',
    type: 'drag',
    prompt: '____ on the stove to heat the water.',
    options: ['Turn', 'Wash', 'Mail', 'Cut'],
    correctIndex: 0
  },
  {
    id: 'general-q387',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-387',
    type: 'drag',
    prompt: 'Make sure to ____ off the stove after cooking.',
    options: ['turn', 'lock', 'wash', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q388',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-388',
    type: 'drag',
    prompt: '____heat the oven to 180°C.',
    options: ['Pre', 'Re', 'Un', 'Over'],
    correctIndex: 0
  },
  {
    id: 'general-q389',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-389',
    type: 'drag',
    prompt: '____ the vegetables before cutting them.',
    options: ['Wash', 'Lock', 'Mail', 'Cut'],
    correctIndex: 0
  },
  {
    id: 'general-q390',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-390',
    type: 'drag',
    prompt: 'I ____ the onions for the soup.',
    options: ['chopped', 'washed', 'locked', 'mailed'],
    correctIndex: 0
  },

  {
    id: 'general-q391',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-391',
    type: 'drag',
    prompt: '____ a timer for 20 minutes.',
    options: ['Set', 'Cut', 'Wash', 'Mail'],
    correctIndex: 0
  },
  {
    id: 'general-q392',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-392',
    type: 'drag',
    prompt: 'Can you ____ the living room before guests arrive?',
    options: ['tidy', 'lock', 'wash', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q393',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-393',
    type: 'drag',
    prompt: 'I ____ the carpet yesterday.',
    options: ['vacuumed', 'mailed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q394',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-394',
    type: 'drag',
    prompt: 'Please ____ the table after eating.',
    options: ['wipe', 'lock', 'wash', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q395',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-395',
    type: 'drag',
    prompt: 'He ____ the floor in the kitchen.',
    options: ['washed', 'locked', 'mailed', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q396',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-396',
    type: 'drag',
    prompt: 'We ____ grocery shopping on Sundays.',
    options: ['go', 'sleep', 'mail', 'lock'],
    correctIndex: 0
  },
  {
    id: 'general-q397',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-397',
    type: 'drag',
    prompt: 'I ____ lunch for the kids.',
    options: ['prepared', 'washed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q398',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-398',
    type: 'drag',
    prompt: 'We ____ leftovers for lunch.',
    options: ['ate', 'mailed', 'locked', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q399',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-399',
    type: 'drag',
    prompt: 'I ____ prep every Sunday for the whole week.',
    options: ['meal', 'wash', 'lock', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q400',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-400',
    type: 'drag',
    prompt: 'Let’s ____ up the kitchen together.',
    options: ['clean', 'lock', 'mail', 'cut'],
    correctIndex: 0
  },
  {
    id: 'general-q401',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-401',
    type: 'drag',
    prompt: 'Today, she seems to ____.',
    options: ['be in a good mood', 'be in a bad mood', 'feel lonely', 'feel sad'],
    correctIndex: 0
  },
  {
    id: 'general-q402',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-402',
    type: 'drag',
    prompt: 'He was in a ____ this morning.',
    options: ['bad mood', 'good mood', 'quality time', 'family photo'],
    correctIndex: 0
  },
  {
    id: 'general-q403',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-403',
    type: 'drag',
    prompt: 'I ____ happy when I talk to my friends.',
    options: ['feel', 'am', 'stay', 'lose'],
    correctIndex: 0
  },
  {
    id: 'general-q404',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-404',
    type: 'drag',
    prompt: 'She ____ sad after the phone call.',
    options: ['felt', 'slept', 'washed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q405',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-405',
    type: 'drag',
    prompt: 'He sometimes ____ lonely in a new city.',
    options: ['feels', 'sleeps', 'locks', 'doubles-checks'],
    correctIndex: 0
  },
  {
    id: 'general-q406',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-406',
    type: 'drag',
    prompt: 'Her parents ____ proud of her progress.',
    options: ['feel', 'sleep', 'declutter', 'unplug'],
    correctIndex: 0
  },
  {
    id: 'general-q407',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-407',
    type: 'drag',
    prompt: 'I always ____ nervous before an exam.',
    options: ['feel', 'run', 'decorate', ' donate'],
    correctIndex: 0
  },
  {
    id: 'general-q408',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-408',
    type: 'drag',
    prompt: 'Take a deep breath and ____ a bit.',
    options: ['calm down', 'speed up', 'give up', 'head out'],
    correctIndex: 0
  },
  {
    id: 'general-q409',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-409',
    type: 'drag',
    prompt: 'We argued, then we took a walk to ____.',
    options: ['cool off', 'lose signal', 'sleep like a baby', 'pack your bag'],
    correctIndex: 0
  },
  {
    id: 'general-q410',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-410',
    type: 'drag',
    prompt: 'We brought ice cream to ____ her up.',
    options: ['cheer', 'wake', 'tick', 'pack'],
    correctIndex: 0
  },
  {
    id: 'general-q411',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-411',
    type: 'drag',
    prompt: 'He felt ____ by all the tasks.',
    options: ['overwhelmed', 'organized', 'silent', 'online'],
    correctIndex: 0
  },
  {
    id: 'general-q412',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-412',
    type: 'drag',
    prompt: 'Sometimes you need to take a ____ break.',
    options: ['mental', 'family', 'desk', 'rainy'],
    correctIndex: 0
  },
  {
    id: 'general-q413',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-413',
    type: 'drag',
    prompt: 'They decided to ____ it out and solve the issue.',
    options: ['talk', 'sleep', 'pack', 'mute'],
    correctIndex: 0
  },
  {
    id: 'general-q414',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-414',
    type: 'drag',
    prompt: 'She finally ____ up to her friend.',
    options: ['opened', 'woke', 'packed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q415',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-415',
    type: 'drag',
    prompt: 'He decided to ____ it to himself.',
    options: ['keep', 'share', 'scroll', 'wipe'],
    correctIndex: 0
  },
  {
    id: 'general-q416',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-416',
    type: 'drag',
    prompt: 'It helps to ____ your feelings with someone you trust.',
    options: ['share', 'wash', 'lock', 'decorate'],
    correctIndex: 0
  },
  {
    id: 'general-q417',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-417',
    type: 'drag',
    prompt: 'She needed time, so he ____ her space.',
    options: ['gave', 'took', 'lost', 'slept'],
    correctIndex: 0
  },
  {
    id: 'general-q418',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-418',
    type: 'drag',
    prompt: 'It’s healthy to ____ boundaries with others.',
    options: ['set', 'lose', 'mute', 'tick'],
    correctIndex: 0
  },
  {
    id: 'general-q419',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-419',
    type: 'drag',
    prompt: 'Try not to ____ it personally.',
    options: ['take', 'wash', 'scroll', 'heat'],
    correctIndex: 0
  },
  {
    id: 'general-q420',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-420',
    type: 'drag',
    prompt: 'Sometimes you just have to ____ it go.',
    options: ['let', 'make', 'keep', 'tick'],
    correctIndex: 0
  },

  {
    id: 'general-q421',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-421',
    type: 'drag',
    prompt: 'She decided to ____ him after their argument.',
    options: ['forgive', 'mute', 'decorate', 'restart'],
    correctIndex: 0
  },
  {
    id: 'general-q422',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-422',
    type: 'drag',
    prompt: 'He said ____ for being late.',
    options: ['sorry', 'goodnight', 'goodbye', 'thank you'],
    correctIndex: 0
  },
  {
    id: 'general-q423',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-423',
    type: 'drag',
    prompt: 'I ____ for the confusion.',
    options: ['apologize', 'decorate', 'unplug', 'declutter'],
    correctIndex: 0
  },
  {
    id: 'general-q424',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-424',
    type: 'drag',
    prompt: 'They decided to ____ peace after years of conflict.',
    options: ['make', 'take', 'sleep', 'pack'],
    correctIndex: 0
  },
  {
    id: 'general-q425',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-425',
    type: 'drag',
    prompt: 'She ____ him a compliment on his presentation.',
    options: ['gave', 'took', 'lost', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q426',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-426',
    type: 'drag',
    prompt: 'It’s okay to simply say “thank you” and ____ the compliment.',
    options: ['take', 'wash', 'sleep', 'lose'],
    correctIndex: 0
  },
  {
    id: 'general-q427',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-427',
    type: 'drag',
    prompt: 'Your message really ____ my day.',
    options: ['made', 'lost', 'muted', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q428',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-428',
    type: 'drag',
    prompt: 'Her kind words ____ my spirits.',
    options: ['lifted', 'washed', 'locked', 'lost'],
    correctIndex: 0
  },
  {
    id: 'general-q429',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-429',
    type: 'drag',
    prompt: '____ me a line when you get home.',
    options: ['Drop', 'Sleep', 'Pack', 'Heat'],
    correctIndex: 0
  },
  {
    id: 'general-q430',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-430',
    type: 'drag',
    prompt: 'I’ll ____ you posted about any changes.',
    options: ['keep', 'lose', 'sleep', 'mute'],
    correctIndex: 0
  },

  {
    id: 'general-q431',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-431',
    type: 'drag',
    prompt: 'Can you ____ me in on what I missed?',
    options: ['fill', 'pack', 'wipe', 'sleep'],
    correctIndex: 0
  },
  {
    id: 'general-q432',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-432',
    type: 'drag',
    prompt: 'I like to ____ in with my family every weekend.',
    options: ['check', 'scroll', 'declutter', 'mute'],
    correctIndex: 0
  },
  {
    id: 'general-q433',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-433',
    type: 'drag',
    prompt: 'She called to ask how I was ____.',
    options: ['doing', 'cleaning', 'decorating', 'moving'],
    correctIndex: 0
  },
  {
    id: 'general-q434',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-434',
    type: 'drag',
    prompt: 'I ____ up on the news during breakfast.',
    options: ['caught', 'cleaned', 'packed', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q435',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-435',
    type: 'drag',
    prompt: 'He ____ through the news on his phone.',
    options: ['scrolled', 'washed', 'packed', 'locked'],
    correctIndex: 0
  },
  {
    id: 'general-q436',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-436',
    type: 'drag',
    prompt: 'She just read the ____ before work.',
    options: ['headlines', 'expenses', 'room', 'recycling'],
    correctIndex: 0
  },
  {
    id: 'general-q437',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-437',
    type: 'drag',
    prompt: 'I ____ the article to read later.',
    options: ['saved', 'muted', 'donated', 'decluttered'],
    correctIndex: 0
  },
  {
    id: 'general-q438',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-438',
    type: 'drag',
    prompt: 'He ____ a link in the group chat.',
    options: ['shared', 'washed', 'packed', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q439',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-439',
    type: 'drag',
    prompt: 'I ____ notifications during the meeting.',
    options: ['muted', 'lit', 'washed', 'decorated'],
    correctIndex: 0
  },
  {
    id: 'general-q440',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-440',
    type: 'drag',
    prompt: 'Please put your phone on ____.',
    options: ['silent', 'quality time', 'airplane mode', 'track'],
    correctIndex: 0
  },

  {
    id: 'general-q441',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-441',
    type: 'drag',
    prompt: 'I turned on ____ mode before the flight.',
    options: ['airplane', 'silent', 'family', 'news'],
    correctIndex: 0
  },
  {
    id: 'general-q442',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-442',
    type: 'drag',
    prompt: 'We ____ signal in the tunnel.',
    options: ['lost', 'kept', 'shared', 'decorated'],
    correctIndex: 0
  },
  {
    id: 'general-q443',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-443',
    type: 'drag',
    prompt: 'When the Wi-Fi came back, I ____ back online.',
    options: ['got', 'slept', 'packed', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q444',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-444',
    type: 'drag',
    prompt: 'Don’t forget to ____ your screen at work.',
    options: ['lock', 'wash', 'decorate', 'scroll'],
    correctIndex: 0
  },
  {
    id: 'general-q445',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-445',
    type: 'drag',
    prompt: 'I try to ____ from technology on Sundays.',
    options: ['unplug', 'pack', 'donate', 'light'],
    correctIndex: 0
  },
  {
    id: 'general-q446',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-446',
    type: 'drag',
    prompt: 'We love to spend time with ____ on weekends.',
    options: ['family', 'notifications', 'headlines', 'expenses'],
    correctIndex: 0
  },
  {
    id: 'general-q447',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-447',
    type: 'drag',
    prompt: 'She likes to spend time ____ to recharge.',
    options: ['alone', 'online', 'muted', 'decorated'],
    correctIndex: 0
  },
  {
    id: 'general-q448',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-448',
    type: 'drag',
    prompt: 'I try to have ____ time with my kids.',
    options: ['quality', 'silent', 'headlines', 'airplane'],
    correctIndex: 0
  },
  {
    id: 'general-q449',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-449',
    type: 'drag',
    prompt: 'We took a family ____ at the park.',
    options: ['photo', 'door', 'task', 'bill'],
    correctIndex: 0
  },
  {
    id: 'general-q450',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-450',
    type: 'drag',
    prompt: 'We visited ____ during the holidays.',
    options: ['relatives', 'notifications', 'papers', 'headlines'],
    correctIndex: 0
  },

  {
    id: 'general-q451',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-451',
    type: 'drag',
    prompt: 'They ____ in touch even after moving away.',
    options: ['stay', 'sleep', 'muted', 'declutter'],
    correctIndex: 0
  },
  {
    id: 'general-q452',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-452',
    type: 'drag',
    prompt: 'We talked for hours and ____ track of time.',
    options: ['lost', 'kept', 'washed', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q453',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-453',
    type: 'drag',
    prompt: 'Use a timer to ____ track of time.',
    options: ['keep', 'lose', 'mute', 'unplug'],
    correctIndex: 0
  },
  {
    id: 'general-q454',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-454',
    type: 'drag',
    prompt: 'I use an app to keep track of ____.',
    options: ['expenses', 'candles', 'curtains', 'relatives'],
    correctIndex: 0
  },
  {
    id: 'general-q455',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-455',
    type: 'drag',
    prompt: 'I wrote a to-do ____ for the day.',
    options: ['list', 'lamp', 'closet', 'blinds'],
    correctIndex: 0
  },
  {
    id: 'general-q456',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-456',
    type: 'drag',
    prompt: 'It feels good to ____ off a task.',
    options: ['tick', 'sleep', 'light', 'lose'],
    correctIndex: 0
  },
  {
    id: 'general-q457',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-457',
    type: 'drag',
    prompt: 'You should ____ your tasks in the morning.',
    options: ['prioritize', 'mute', 'unplug', 'decorate'],
    correctIndex: 0
  },
  {
    id: 'general-q458',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-458',
    type: 'drag',
    prompt: 'I’m trying to get ____ this year.',
    options: ['organized', 'offline', 'relaxed', 'expensive'],
    correctIndex: 0
  },
  {
    id: 'general-q459',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-459',
    type: 'drag',
    prompt: 'I ____ my room and donated clothes.',
    options: ['decluttered', 'slept', 'muted', 'hung'],
    correctIndex: 0
  },
  {
    id: 'general-q460',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-460',
    type: 'drag',
    prompt: 'She cleaned ____ the closet on Saturday.',
    options: ['out', 'in', 'over', 'up'],
    correctIndex: 0
  },

  {
    id: 'general-q461',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-461',
    type: 'drag',
    prompt: 'I ____ through my things and threw away old papers.',
    options: ['sorted', 'slept', 'muted', 'decorated'],
    correctIndex: 0
  },
  {
    id: 'general-q462',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-462',
    type: 'drag',
    prompt: 'We ____ clothes we no longer wear.',
    options: ['donated', 'locked', 'lit', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q463',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-463',
    type: 'drag',
    prompt: 'They moved the ____ around to change the look.',
    options: ['furniture', 'headlines', 'candles', 'relatives'],
    correctIndex: 0
  },
  {
    id: 'general-q464',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-464',
    type: 'drag',
    prompt: 'We ____ the room with plants.',
    options: ['decorated', 'muted', 'unplugged', 'restarted'],
    correctIndex: 0
  },
  {
    id: 'general-q465',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-465',
    type: 'drag',
    prompt: 'She ____ a candle to relax.',
    options: ['lit', 'packed', 'lost', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q466',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-466',
    type: 'drag',
    prompt: 'He ____ on the lamp to read.',
    options: ['turned', 'locked', 'muted', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q467',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-467',
    type: 'drag',
    prompt: 'She ____ the curtains to let in light.',
    options: ['opened', 'closed', 'muted', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q468',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-468',
    type: 'drag',
    prompt: 'We ____ the blinds at night.',
    options: ['closed', 'opened', 'unplugged', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q469',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-469',
    type: 'drag',
    prompt: 'He ____ the lightbulb in the hallway.',
    options: ['fixed', 'muted', 'unplugged', 'donated'],
    correctIndex: 0
  },
  {
    id: 'general-q470',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-470',
    type: 'drag',
    prompt: 'We did a quick ____ before guests arrived.',
    options: ['cleanup', 'headline', 'expense', 'signal'],
    correctIndex: 0
  },

  {
    id: 'general-q471',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-471',
    type: 'drag',
    prompt: 'Please ____ your shoes before coming in.',
    options: ['wipe', 'lose', 'light', 'unplug'],
    correctIndex: 0
  },
  {
    id: 'general-q472',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-472',
    type: 'drag',
    prompt: 'We ____ off our shoes at the door.',
    options: ['take', 'sleep', 'light', 'lose'],
    correctIndex: 0
  },
  {
    id: 'general-q473',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-473',
    type: 'drag',
    prompt: '____ up your coat in the hallway.',
    options: ['Hang', 'Pack', 'Mute', 'Lock'],
    correctIndex: 0
  },
  {
    id: 'general-q474',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-474',
    type: 'drag',
    prompt: 'I always put my keys ____ in the same place.',
    options: ['away', 'down', 'over', 'back'],
    correctIndex: 0
  },
  {
    id: 'general-q475',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-475',
    type: 'drag',
    prompt: 'I ____ my keys again this morning.',
    options: ['lost', 'found', 'muted', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q476',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-476',
    type: 'drag',
    prompt: 'I finally ____ my keys under the couch.',
    options: ['found', 'lost', 'packed', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q477',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-477',
    type: 'drag',
    prompt: 'I forgot to ____ my laptop last night.',
    options: ['charge', 'pack', 'donate', 'unlock'],
    correctIndex: 0
  },
  {
    id: 'general-q478',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-478',
    type: 'drag',
    prompt: 'I had to ____ the computer to fix the problem.',
    options: ['restart', 'decorate', 'declutter', 'unplug'],
    correctIndex: 0
  },
  {
    id: 'general-q479',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-479',
    type: 'drag',
    prompt: 'He ____ his phone to update it.',
    options: ['restarted', 'donated', 'muted', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q480',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-480',
    type: 'drag',
    prompt: 'Remember to ____ up your files regularly.',
    options: ['back', 'wash', 'light', 'mute'],
    correctIndex: 0
  },

  {
    id: 'general-q481',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-481',
    type: 'drag',
    prompt: 'I ____ my desk before starting work.',
    options: ['cleaned', 'muted', 'lost', 'slept'],
    correctIndex: 0
  },
  {
    id: 'general-q482',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-482',
    type: 'drag',
    prompt: 'She ____ her papers into folders.',
    options: ['organized', 'donated', 'muted', 'unplugged'],
    correctIndex: 0
  },
  {
    id: 'general-q483',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-483',
    type: 'drag',
    prompt: 'I ____ my schedule for tomorrow.',
    options: ['checked', 'washed', 'lit', 'muted'],
    correctIndex: 0
  },
  {
    id: 'general-q484',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-484',
    type: 'drag',
    prompt: 'We took a coffee ____ at 10 a.m.',
    options: ['break', 'headline', 'signal', 'expense'],
    correctIndex: 0
  },
  {
    id: 'general-q485',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-485',
    type: 'drag',
    prompt: 'I ____ some water before the meeting.',
    options: ['grabbed', 'muted', 'donated', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q486',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-486',
    type: 'drag',
    prompt: 'She ____ her bottle at the fountain.',
    options: ['refilled', 'lost', 'muted', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q487',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-487',
    type: 'drag',
    prompt: 'We ____ up leftovers for dinner.',
    options: ['heated', 'packed', 'muted', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q488',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-488',
    type: 'drag',
    prompt: 'I ____ my lunch the night before.',
    options: ['packed', 'lost', 'muted', 'lit'],
    correctIndex: 0
  },
  {
    id: 'general-q489',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-489',
    type: 'drag',
    prompt: 'The kids ____ their bags for school.',
    options: ['packed', 'muted', 'donated', 'unplugged'],
    correctIndex: 0
  },
  {
    id: 'general-q490',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-490',
    type: 'drag',
    prompt: 'I ____-checked the door before leaving.',
    options: ['double', 'single', 'late', 'light'],
    correctIndex: 0
  },

  {
    id: 'general-q491',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-491',
    type: 'drag',
    prompt: 'We ____ out early in the morning.',
    options: ['headed', 'slept', 'muted', 'unplugged'],
    correctIndex: 0
  },
  {
    id: 'general-q492',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-492',
    type: 'drag',
    prompt: 'I came ____ home after midnight.',
    options: ['back', 'out', 'over', 'through'],
    correctIndex: 0
  },
  {
    id: 'general-q493',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-493',
    type: 'drag',
    prompt: 'I like to ____ after work with a good show.',
    options: ['unwind', 'decorate', 'donate', 'restart'],
    correctIndex: 0
  },
  {
    id: 'general-q494',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-494',
    type: 'drag',
    prompt: 'It’s late, let’s ____ it a night.',
    options: ['call', 'pack', 'light', 'lose'],
    correctIndex: 0
  },
  {
    id: 'general-q495',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-495',
    type: 'drag',
    prompt: 'We told the kids to get ____ for bed.',
    options: ['ready', 'muted', 'lit', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q496',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-496',
    type: 'drag',
    prompt: 'She ____ her hair before sleeping.',
    options: ['brushed', 'lost', 'muted', 'donated'],
    correctIndex: 0
  },
  {
    id: 'general-q497',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-497',
    type: 'drag',
    prompt: 'Don’t forget to ____ your alarm for tomorrow.',
    options: ['set', 'lose', 'mute', 'unplug'],
    correctIndex: 0
  },
  {
    id: 'general-q498',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-498',
    type: 'drag',
    prompt: 'He said ____ and turned off the light.',
    options: ['goodnight', 'sorry', 'hello', 'thanks'],
    correctIndex: 0
  },
  {
    id: 'general-q499',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-499',
    type: 'drag',
    prompt: 'She ____ off to sleep while reading.',
    options: ['drifted', 'muted', 'lost', 'packed'],
    correctIndex: 0
  },
  {
    id: 'general-q500',
    categoryId: GENERAL_CATEGORY_ID,
    wordId: 'general-500',
    type: 'drag',
    prompt: 'After the long day, I slept like a ____. ',
    options: ['baby', 'door', 'desk', 'signal'],
    correctIndex: 0
  },

    // ---------------------------------------
    // 🔥 WORK CATEGORY QUESTIONS
  {
    id: "busness-q1",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-1",
    type: "drag",
    prompt:
      "Because he had an important meeting scheduled for 8:30 AM, Mark made sure to ____ at least 15 minutes early.",
    options: [
      "turn up",
      "sign off",
      "clock in",
      "check out"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q2",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-99",
    type: "choice",
    prompt:
      "The need to follow all laws, regulations, and company rules is called:",
    options: [
      "Profitability",
      "Compliance",
      "Liability",
      "Accountability"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q3",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-2",
    type: "drag",
    prompt:
      "Don’t forget to ____ before you leave, or your hours won’t be recorded.",
    options: [
      "clock out",
      "take a break",
      "sign up",
      "check in"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q4",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-3",
    type: "choice",
    prompt:
      "The fixed amount of money an employee receives regularly for their work is called a:",
    options: [
      "Bonus",
      "Salary",
      "Commission",
      "Discount"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q5",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-4",
    type: "drag",
    prompt:
      "In many jobs, the ____ is calculated by multiplying the hourly rate by the number of hours worked.",
    options: [
      "salary",
      "wage",
      "bonus",
      "invoice"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q6",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-5",
    type: "choice",
    prompt:
      "An extra payment given to an employee as a reward, often at the end of the year, is a:",
    options: [
      "Budget",
      "Penalty",
      "Bonus",
      "Invoice"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q7",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-6",
    type: "drag",
    prompt:
      "Because they worked on Saturday and Sunday, the company paid them ____.",
    options: [
      "vacation days",
      "overtime",
      "sick leave",
      "training"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q8",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-7",
    type: "choice",
    prompt:
      "The final date or time by which something must be completed is called a:",
    options: [
      "Budget",
      "Agenda",
      "Deadline",
      "Shift"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q9",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-8",
    type: "drag",
    prompt:
      "The ____ for submitting the assignment is next Monday.",
    options: [
      "due date",
      "meeting",
      "invoice",
      "brand"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q10",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-9",
    type: "choice",
    prompt:
      "A planned gathering where people discuss work-related topics is called a:",
    options: [
      "Meeting",
      "Schedule",
      "Campaign",
      "Posting"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q11",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-10",
    type: "drag",
    prompt:
      "They had to ____ the conference because the speaker was sick.",
    options: [
      "call in",
      "call up",
      "call off",
      "call about"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q12",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-11",
    type: "choice",
    prompt:
      "If you change the time of an appointment to another day, you:",
    options: [
      "Renew it",
      "Reschedule it",
      "Reject it",
      "Promote it"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q13",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-12",
    type: "drag",
    prompt:
      "Before the meeting, the manager sent the ____ so everyone knew the topics.",
    options: [
      "agenda",
      "invoice",
      "contract",
      "proposal"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q14",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-13",
    type: "choice",
    prompt:
      "The written record of what was discussed and decided in a meeting is called the:",
    options: [
      "Agenda",
      "Minutes",
      "Posting",
      "Schedule"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q15",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-14",
    type: "drag",
    prompt:
      "Because some team members work remotely, the manager organized a ____ instead of an in-person meeting.",
    options: [
      "conference call",
      "job posting",
      "training session",
      "overtime shift"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q16",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-15",
    type: "choice",
    prompt:
      "When someone prepares slides and speaks in front of a group to share information, they are giving a:",
    options: [
      "Contract",
      "Report",
      "Presentation",
      "Invoice"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q17",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-16",
    type: "drag",
    prompt:
      "During the meeting, she had a chance to ____ her idea to the directors.",
    options: [
      "sign off",
      "pitch an idea",
      "clock out",
      "take a day off"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q18",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-17",
    type: "choice",
    prompt:
      "A formal plan or offer that is sent to a client is called a:",
    options: [
      "Request",
      "Proposal",
      "Feedback",
      "Campaign"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q19",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-18",
    type: "drag",
    prompt:
      "Before starting the project, all parties had to sign the ____.",
    options: [
      "budget",
      "contract",
      "agenda",
      "invoice"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q20",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-19",
    type: "choice",
    prompt:
      "When both sides agree to continue working together after a contract ends, they:",
    options: [
      "Terminate the contract",
      "Ignore the contract",
      "Renew the contract",
      "Reject the contract"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q21",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-20",
    type: "drag",
    prompt:
      "Because of repeated delays, the company decided to ____ and look for a new supplier.",
    options: [
      "launch a product",
      "terminate the contract",
      "set a goal",
      "submit a report"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q22",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-21",
    type: "choice",
    prompt:
      "A document that lists what a client must pay for products or services is an:",
    options: [
      "Invoice",
      "Agenda",
      "Posting",
      "Policy"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q23",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-22",
    type: "drag",
    prompt:
      "Consultants often track their ____ carefully so they know how much to bill clients.",
    options: [
      "vacation days",
      "billable hours",
      "due dates",
      "brand names"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q24",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-23",
    type: "choice",
    prompt:
      "The planned amount of money that can be spent on a project is the:",
    options: [
      "Promotion",
      "Budget",
      "Compliance",
      "Shift"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q25",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-24",
    type: "drag",
    prompt:
      "At the end of each month, employees must submit an ____ for travel and meal costs.",
    options: [
      "expense report",
      "overtime sheet",
      "training plan",
      "conference call"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q26",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-25",
    type: "choice",
    prompt:
      "When an employee asks to be paid more for the same job, they are asking for a:",
    options: [
      "Demotion",
      "Salary raise",
      "Market share",
      "Sick leave"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q27",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-26",
    type: "drag",
    prompt:
      "After completing several successful projects, she finally received a ____ and a new title.",
    options: [
      "promotion",
      "budget cut",
      "overtime shift",
      "probation period"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q28",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-27",
    type: "choice",
    prompt:
      "If an employee is moved to a lower position with less responsibility, they experience a:",
    options: [
      "Promotion",
      "Compliance",
      "Demotion",
      "Partnership"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q29",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-28",
    type: "drag",
    prompt:
      "The company plans to ____ three new developers this month.",
    options: [
      "lay off",
      "hire",
      "clock out",
      "submit"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q30",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-29",
    type: "choice",
    prompt:
      "When an employee is asked to leave the company because of serious issues, the company decides to:",
    options: [
      "Fire them",
      "Promote them",
      "Onboard them",
      "Train them"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q31",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-30",
    type: "drag",
    prompt:
      "Due to the economic crisis, the factory had to ____ 60 workers.",
    options: [
      "take on",
      "hire",
      "lay off",
      "clock in"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q32",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-31",
    type: "choice",
    prompt:
      "A student who works in a company to gain experience is called a:",
    options: [
      "Client",
      "Intern",
      "CEO",
      "Supervisor"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q33",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-32",
    type: "drag",
    prompt:
      "New employees usually have a ____ during which their work is closely evaluated.",
    options: [
      "probation period",
      "conference call",
      "training session",
      "deadline"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q34",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-33",
    type: "choice",
    prompt:
      "A formal meeting where a manager evaluates an employee’s work is a:",
    options: [
      "Performance review",
      "Job posting",
      "Brainstorm",
      "Invoice"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q35",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-34",
    type: "drag",
    prompt:
      "I saw a ____ for a nursing position on the hospital’s website.",
    options: [
      "job interview",
      "job posting",
      "job offer",
      "job duty"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q36",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-35",
    type: "choice",
    prompt:
      "The formal discussion where a candidate answers questions to get a job is called a:",
    options: [
      "Training session",
      "Job interview",
      "Conference call",
      "Performance review"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q37",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-36",
    type: "drag",
    prompt:
      "The company is looking for someone with a strong ____ in communication and leadership.",
    options: [
      "shift",
      "skill set",
      "invoice",
      "brand"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q38",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-37",
    type: "choice",
    prompt:
      "When a company officially offers you a position, they make you a:",
    options: [
      "Job posting",
      "Job policy",
      "Job offer",
      "Job duty"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q39",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-38",
    type: "drag",
    prompt:
      "Her main ____ include answering emails and helping customers at the front desk.",
    options: [
      "job duties",
      "deadlines",
      "vacation days",
      "billable hours"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q40",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-39",
    type: "choice",
    prompt:
      "The process of helping new employees adapt to the company and learn procedures is called:",
    options: [
      "Onboarding",
      "Multitasking",
      "Compliance",
      "Delegation"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q41",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-40",
    type: "drag",
    prompt:
      "The ____ will start at 2 p.m., so please be on time to learn the new software.",
    options: [
      "job posting",
      "training session",
      "conference call",
      "performance review"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q42",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-41",
    type: "choice",
    prompt:
      "If you have a serious issue at work, you should report it to your:",
    options: [
      "Client",
      "Coworker",
      "Supervisor",
      "Intern"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q43",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-42",
    type: "drag",
    prompt:
      "The ____ approved the new schedule after reviewing everyone’s availability.",
    options: [
      "intern",
      "manager",
      "client",
      "brand"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q44",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-43",
    type: "choice",
    prompt:
      "The person at the top of a company, responsible for major decisions, is the:",
    options: [
      "CEO",
      "Intern",
      "Supervisor",
      "Customer"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q45",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-44",
    type: "drag",
    prompt:
      "The ____ makes sure everyone in the group knows their responsibilities.",
    options: [
      "customer",
      "team leader",
      "client",
      "probation officer"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q46",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-45",
    type: "choice",
    prompt:
      "The people you work with in the same company or office are your:",
    options: [
      "Clients",
      "Coworkers",
      "Customers",
      "Partners"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q47",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-46",
    type: "drag",
    prompt:
      "My ____ helped me finish the report before the deadline.",
    options: [
      "colleague",
      "invoice",
      "brand",
      "market share"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q48",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-47",
    type: "choice",
    prompt:
      "Marketing, finance, and human resources are each an example of a:",
    options: [
      "Shift",
      "Department",
      "Campaign",
      "Meeting"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q49",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-48",
    type: "drag",
    prompt:
      "If you have questions about your benefits, contact ____.",
    options: [
      "IT",
      "customer service",
      "human resources (HR)",
      "CEO"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q50",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-49",
    type: "choice",
    prompt:
      "The team that fixes computers and manages software in a company is the:",
    options: [
      "HR department",
      "IT department",
      "Marketing department",
      "Customer service team"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q51",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-50",
    type: "drag",
    prompt:
      "Our ____ is available 24/7 to answer questions and solve problems.",
    options: [
      "target audience",
      "customer service",
      "CEO",
      "probation period"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q52",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-51",
    type: "choice",
    prompt:
      "A person or company that buys services or products from you is a:",
    options: [
      "Colleague",
      "Client",
      "Supervisor",
      "Intern"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q53",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-52",
    type: "drag",
    prompt:
      "The two companies formed a ____ to develop a new product together.",
    options: [
      "deadline",
      "partnership",
      "invoice",
      "vacation plan"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q54",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-53",
    type: "choice",
    prompt:
      "When two sides discuss to reach better terms or conditions, they:",
    options: [
      "Submit",
      "Complain",
      "Negotiate",
      "Clock in"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q55",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-54",
    type: "drag",
    prompt:
      "After weeks of discussion, they managed to ____ and sign the contract.",
    options: [
      "launch a product",
      "close a deal",
      "take a day off",
      "fall behind"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q56",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-55",
    type: "choice",
    prompt:
      "When a company officially releases something new to the market, they:",
    options: [
      "Call off a meeting",
      "Launch a product",
      "Submit an invoice",
      "Take sick leave"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q57",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-56",
    type: "drag",
    prompt:
      "The company decided to refresh its ____ with a new logo and colors.",
    options: [
      "brand",
      "invoice",
      "probation period",
      "schedule"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q58",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-57",
    type: "choice",
    prompt:
      "The percentage of total sales that a company has compared to competitors is its:",
    options: [
      "Paid leave",
      "Market share",
      "Sick leave",
      "Job duties"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q59",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-58",
    type: "drag",
    prompt:
      "Investing in online ____ helped the company reach more customers.",
    options: [
      "compliance",
      "advertising",
      "minutes",
      "probation"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q60",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-59",
    type: "choice",
    prompt:
      "A planned series of messages or ads to promote a product is a:",
    options: [
      "Conference",
      "Campaign",
      "Shift",
      "Agenda"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q61",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-60",
    type: "drag",
    prompt:
      "Before designing the ad, the marketing team clearly defined the ____.",
    options: [
      "target audience",
      "overtime",
      "probation period",
      "minutes"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q62",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-61",
    type: "choice",
    prompt:
      "If you need a personal day to rest or handle errands, you might:",
    options: [
      "Take responsibility",
      "Take a day off",
      "Take initiative",
      "Take overtime"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q63",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-62",
    type: "drag",
    prompt:
      "In this company, employees get 15 days of ____ every year.",
    options: [
      "sick leave",
      "paid leave",
      "probation",
      "brainstorming"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q64",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-63",
    type: "choice",
    prompt:
      "When you are ill and cannot work, you are usually on:",
    options: [
      "Paid leave",
      "Sick leave",
      "Overtime",
      "Probation"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q65",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-64",
    type: "drag",
    prompt:
      "I still have 8 ____ left, so I can plan a trip this summer.",
    options: [
      "vacation days",
      "billable hours",
      "deadlines",
      "job postings"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q66",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-65",
    type: "choice",
    prompt:
      "If you work from home using your computer and the internet, you:",
    options: [
      "Work remotely",
      "Work on-site",
      "Work overtime",
      "Work part-time"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q67",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-66",
    type: "drag",
    prompt:
      "The company offers a ____ where employees work some days at home and some days in the office.",
    options: [
      "probation period",
      "hybrid schedule",
      "behind schedule",
      "training session"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q68",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-67",
    type: "choice",
    prompt:
      "If your employer requires you to be physically present at the workplace, you work:",
    options: [
      "Remotely",
      "In partnership",
      "On-site",
      "Part-time"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q69",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-68",
    type: "drag",
    prompt:
      "My night ____ starts at 11 p.m. and ends at 7 a.m.",
    options: [
      "deadline",
      "shift",
      "agenda",
      "brand"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q70",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-69",
    type: "drag",
    prompt:
      "If someone works 40 hours every week, they usually have a ____ job.",
    options: [
      "Full-time",
      "Part-time",
      "Remote",
      "Seasonal"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q71",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-70",
    type: "drag",
    prompt:
      "She studies during the week and works ____ at a café on weekends.",
    options: [
      "full-time",
      "part-time",
      "on-site",
      "overtime"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q72",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-71",
    type: "choice",
    prompt:
      "A piece of work that you are responsible for completing is called a:",
    options: [
      "Task",
      "Brand",
      "Client",
      "Invoice"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q73",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-72",
    type: "drag",
    prompt:
      "The manager will ____ a new ____ to you this afternoon.",
    options: [
      "submit a report",
      "assign a task",
      "take a day off",
      "launch a product"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q74",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-73",
    type: "choice",
    prompt:
      "If you can handle several things at the same time, you can:",
    options: [
      "Clock out",
      "Multitask",
      "Take initiative",
      "Get promoted"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q75",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-74",
    type: "drag",
    prompt:
      "Since two colleagues left, my ____ has increased a lot.",
    options: [
      "workload",
      "brand",
      "vacation days",
      "agenda"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q76",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-75",
    type: "drag",
    prompt:
      "When a team can complete more work in less time, their ____ has improved.",
    options: [
      "Probation",
      "Productivity",
      "Compliance",
      "Leave"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q78",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-77",
    type: "choice",
    prompt:
      "If the team achieved what they planned, they:",
    options: [
      "Missed a goal",
      "Rejected a goal",
      "Met a goal",
      "Postponed a goal"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q79",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-78",
    type: "drag",
    prompt:
      "We need more staff because we are starting to ____ on this project.",
    options: [
      "fall behind",
      "take responsibility",
      "touch base",
      "launch a product"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q80",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-79",
    type: "choice",
    prompt:
      "If you have missed some work and need to finish it later, you need to:",
    options: [
      "Close a deal",
      "Catch up",
      "Clock out",
      "Submit"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q81",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-80",
    type: "drag",
    prompt:
      "Thanks to good teamwork, the project is now ____.",
    options: [
      "behind schedule",
      "ahead of schedule",
      "on sick leave",
      "in probation"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q82",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-81",
    type: "choice",
    prompt:
      "If tasks are taking longer than expected and are late, the project is:",
    options: [
      "On-site",
      "Behind schedule",
      "Under promotion",
      "In partnership"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q83",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-82",
    type: "drag",
    prompt:
      "Please ____ your timesheet by Friday so we can process payroll.",
    options: [
      "approve",
      "submit",
      "reject",
      "negotiate"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q84",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-83",
    type: "choice",
    prompt:
      "When a manager says yes to a request or plan, they:",
    options: [
      "Reject it",
      "Approve it",
      "Postpone it",
      "Cancel it"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q85",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-84",
    type: "drag",
    prompt:
      "The company decided to ____ the proposal because it was too expensive.",
    options: [
      "approve",
      "submit",
      "reject",
      "launch"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q86",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-85",
    type: "choice",
    prompt:
      "An official question asking for something, usually in writing, is called a:",
    options: [
      "Request",
      "Budget",
      "Shift",
      "Campaign"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q87",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-86",
    type: "drag",
    prompt:
      "I will ____ with you next week to see how the project is going.",
    options: [
      "follow up",
      "clock in",
      "touch base",
      "take a day off"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q88",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-87",
    type: "drag",
    prompt:
      "If your manager says, “I’ll ____ to you tomorrow,” they will contact you again later.",
    options: [
      "take responsibility",
      "get back",
      "fall behind",
      "launch"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q89",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-88",
    type: "drag",
    prompt:
      "Let’s ____ next month to review the new project’s progress.",
    options: [
      "take a day off",
      "touch base",
      "fire someone",
      "clock out"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q90",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-89",
    type: "choice",
    prompt:
      "If you contact someone to offer help or start a conversation, you:",
    options: [
      "Reach out",
      "Clock in",
      "Submit",
      "Promote"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q91",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-90",
    type: "drag",
    prompt:
      "My supervisor gave me useful ____ on how to improve my reports.",
    options: [
      "feedback",
      "budget",
      "vacation days",
      "invoice"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q92",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-91",
    type: "choice",
    prompt:
      "When a group quickly shares many ideas without judging them, they:",
    options: [
      "Negotiate",
      "Brainstorm",
      "Clock out",
      "Submit"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q93",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-92",
    type: "drag",
    prompt:
      "Teams from different departments will ____ on this project to reach the same goal.",
    options: [
      "fire",
      "collaborate",
      "reject",
      "take initiative"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q94",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-93",
    type: "choice",
    prompt:
      "When a group of people work well together and support each other, they show strong:",
    options: [
      "Teamwork",
      "Compliance",
      "Billable hours",
      "Sick leave"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q95",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-94",
    type: "drag",
    prompt:
      "Good managers know when to ____ tasks instead of doing everything themselves.",
    options: [
      "delegate",
      "submit",
      "clock in",
      "reject"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q96",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-95",
    type: "choice",
    prompt:
      "If you start helpful actions without being asked, you:",
    options: [
      "Take overtime",
      "Take responsibility",
      "Take initiative",
      "Take sick leave"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q97",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-96",
    type: "drag",
    prompt:
      "Even though it was a team mistake, he decided to ____ and apologize to the client.",
    options: [
      "take a day off",
      "take responsibility",
      "take initiative",
      "take sick leave"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q98",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-97",
    type: "choice",
    prompt:
      "When there is a disagreement between coworkers, HR often helps to:",
    options: [
      "Resolve a conflict",
      "Launch a product",
      "Submit a budget",
      "Assign a task"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q99",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-98",
    type: "drag",
    prompt:
      "Employees must follow every ____ to avoid breaking company rules.",
    options: [
      "company policy",
      "overtime sheet",
      "brand logo",
      "meeting minute"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q100",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-100",
    type: "choice",
    prompt:
      "A safe, respectful, and comfortable place where people do their jobs is a good:",
    options: [
      "Probation period",
      "Job posting",
      "Market share",
      "Work environment"
    ],
    correctIndex: 3
  },
  {
    id: "busness-q101",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-101",
    type: "drag",
    prompt:
      "Because he is visiting clients in another city all week, he is on a ____.",
    options: [
      "business trip",
      "coffee break",
      "career change",
      "vacation day"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q102",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-102",
    type: "choice",
    prompt:
      "The regular journey you make between your home and your workplace is your:",
    options: [
      "Career path",
      "Commute",
      "Workload",
      "Shift"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q103",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-103",
    type: "drag",
    prompt:
      "To save money and reduce pollution, several coworkers decided to ____ to the office.",
    options: [
      "burn out",
      "take the lead",
      "carpool",
      "clock out"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q104",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-104",
    type: "choice",
    prompt:
      "The rules about what employees should wear at work are called the:",
    options: [
      "Corporate ladder",
      "Dress code",
      "Paper trail",
      "Chain of command"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q105",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-105",
    type: "drag",
    prompt:
      "On Fridays, the office allows ____ instead of formal suits.",
    options: [
      "business trip",
      "business casual",
      "job security",
      "office politics"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q106",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-106",
    type: "choice",
    prompt:
      "The shared values, behaviors, and atmosphere within a company describe its:",
    options: [
      "Company culture",
      "Cash flow",
      "Time management",
      "Dress code"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q107",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-107",
    type: "drag",
    prompt:
      "Instead of separate offices, everyone works together in an ____.",
    options: [
      "open-plan office",
      "entry-level position",
      "break room",
      "quality control room"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q108",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-108",
    type: "choice",
    prompt:
      "In some companies, each employee has a small personal workspace with walls around it called a:",
    options: [
      "KPI",
      "Cubicle",
      "Stakeholder",
      "Hot desk"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q109",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-109",
    type: "drag",
    prompt:
      "In our office, no one has a fixed desk; we use a ____ system.",
    options: [
      "time management",
      "paper trail",
      "hot desk",
      "work–life balance"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q110",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-110",
    type: "choice",
    prompt:
      "The room where employees relax, eat, or chat informally at work is the:",
    options: [
      "Boardroom",
      "Break room",
      "Cubicle",
      "Open-plan office"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q111",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-111",
    type: "drag",
    prompt:
      "Let’s take a short ____ and grab something to drink.",
    options: [
      "quality control",
      "coffee break",
      "career path",
      "action item"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q112",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-112",
    type: "choice",
    prompt:
      "The time in the middle of the day when you stop work to eat is your:",
    options: [
      "Overtime",
      "Lunch break",
      "Business trip",
      "Commute"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q113",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-113",
    type: "drag",
    prompt:
      "Every morning I ____ at the machine by the entrance to start my shift.",
    options: [
      "call off a deal",
      "punch the clock",
      "cut costs",
      "file a complaint"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q114",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-114",
    type: "choice",
    prompt:
      "If you are officially working and being paid for your time, you are:",
    options: [
      "Off the record",
      "Over budget",
      "On the clock",
      "Off the clock"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q115",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-115",
    type: "drag",
    prompt:
      "I’m ____ now, so I won’t answer any more work messages until tomorrow.",
    options: [
      "on the clock",
      "in the loop",
      "off the clock",
      "overworked"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q116",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-116",
    type: "choice",
    prompt:
      "When a company starts an official record for a customer or case, they:",
    options: [
      "Open a file",
      "Cut costs",
      "Miss the deadline",
      "Take a day off"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q117",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-117",
    type: "drag",
    prompt:
      "Before seeing the doctor, you must ____ this form with your personal information.",
    options: [
      "sign a document",
      "take something off your plate",
      "fill out a form",
      "shake on it"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q118",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-118",
    type: "choice",
    prompt:
      "When you write your name at the bottom of an official paper, you:",
    options: [
      "File a complaint",
      "Sign a document",
      "Follow a procedure",
      "Kick off a meeting"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q119",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-119",
    type: "drag",
    prompt:
      "The customer was unhappy and decided to ____ about the poor service.",
    options: [
      "file a complaint",
      "call in sick",
      "brainstorm",
      "punch the clock"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q120",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-120",
    type: "choice",
    prompt:
      "When the company receives your request and starts handling it, they:",
    options: [
      "Wrap up a meeting",
      "Process a request",
      "Climb the ladder",
      "Back out of a deal"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q121",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-121",
    type: "drag",
    prompt:
      "By law, hospitals must ____ accurate medical ____ for each patient.",
    options: [
      "keep records",
      "cut costs",
      "miss deadlines",
      "shake on it"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q122",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-122",
    type: "choice",
    prompt:
      "If you organize and store documents in the correct place, you:",
    options: [
      "File paperwork",
      "Break even",
      "Cover a shift",
      "Kick off a meeting"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q123",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-123",
    type: "drag",
    prompt:
      "Make sure there is a ____ so we can prove every step of the decision.",
    options: [
      "paper trail",
      "dress code",
      "coffee break",
      "green light"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q124",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-124",
    type: "choice",
    prompt:
      "Complicated official rules and procedures that slow things down are often called:",
    options: [
      "Red tape",
      "Open-plan offices",
      "Hot desks",
      "KPIs"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q125",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-125",
    type: "drag",
    prompt:
      "The ____ can take a long time because several managers must agree.",
    options: [
      "approval process",
      "coffee break",
      "commute",
      "career change"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q126",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-126",
    type: "choice",
    prompt:
      "The official order of authority in an organization, showing who reports to whom, is the:",
    options: [
      "Dress code",
      "Chain of command",
      "Break room",
      "Commute"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q127",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-127",
    type: "drag",
    prompt:
      "I ____ directly ____ the head of the department.",
    options: [
      "report to",
      "call off",
      "move forward with",
      "be short-staffed"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q128",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-128",
    type: "choice",
    prompt:
      "If you manage and direct the work of several people, you:",
    options: [
      "Commute",
      "Climb the ladder",
      "Supervise a team",
      "Punch the clock"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q129",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-129",
    type: "drag",
    prompt:
      "As marketing director, she ____ every major campaign the company launches.",
    options: [
      "wraps up a meeting",
      "oversees a project",
      "calls in sick",
      "files paperwork"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q130",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-130",
    type: "choice",
    prompt:
      "If you are responsible for a department or task, you:",
    options: [
      "Are in charge of it",
      "Miss the deadline",
      "Call off a deal",
      "Commute to it"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q131",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-131",
    type: "drag",
    prompt:
      "No one wanted to start, so he decided to ____ and present the plan first.",
    options: [
      "keep records",
      "take the lead",
      "call in sick",
      "be off the clock"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q132",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-132",
    type: "choice",
    prompt:
      "When your manager asks you to organize and run a meeting, they want you to:",
    options: [
      "Lead a meeting",
      "Commute to the office",
      "Take something off their plate",
      "Open a file"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q133",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-133",
    type: "drag",
    prompt:
      "Let’s ____ the meeting with a quick round of introductions.",
    options: [
      "wrap up",
      "kick off",
      "call off",
      "back out of"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q134",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-134",
    type: "choice",
    prompt:
      "When you finish and close a meeting, you:",
    options: [
      "Punch the clock",
      "Wrap up a meeting",
      "Call in sick",
      "Climb the ladder"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q135",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-135",
    type: "drag",
    prompt:
      "At the end of the meeting, each ____ was assigned to a specific person.",
    options: [
      "coffee break",
      "action item",
      "corporate ladder",
      "paper trail"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q136",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-136",
    type: "choice",
    prompt:
      "To avoid getting lost in side topics, the team decided to:",
    options: [
      "Follow the agenda",
      "Cut costs",
      "Call off the deal",
      "Climb the ladder"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q137",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-137",
    type: "drag",
    prompt:
      "He told me his real opinion ____ and asked me not to repeat it.",
    options: [
      "off the record",
      "on the clock",
      "under budget",
      "in the loop"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q138",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-138",
    type: "choice",
    prompt:
      "If you receive regular updates about a project, you are:",
    options: [
      "Off the record",
      "Overworked",
      "In the loop",
      "Short-staffed"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q139",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-139",
    type: "drag",
    prompt:
      "Since I changed departments, I feel completely ____ on this project.",
    options: [
      "off the clock",
      "out of the loop",
      "over budget",
      "under budget"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q140",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-140",
    type: "choice",
    prompt:
      "If you have one meeting right after another with no breaks, you have:",
    options: [
      "Red tape",
      "Back-to-back meetings",
      "Job security",
      "Work–life balance"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q141",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-141",
    type: "drag",
    prompt:
      "He tries to stay out of ____ and avoid office gossip.",
    options: [
      "office politics",
      "coffee breaks",
      "open-plan offices",
      "quarterly results"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q142",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-142",
    type: "choice",
    prompt:
      "The metaphor that describes moving up through higher positions in a corporation is the:",
    options: [
      "Corporate ladder",
      "Paper trail",
      "Break room",
      "Compliance audit"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q143",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-143",
    type: "drag",
    prompt:
      "She is working hard to ____ and reach a senior role.",
    options: [
      "climb the ladder",
      "call in sick",
      "punch the clock",
      "kick off the meeting"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q144",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-144",
    type: "choice",
    prompt:
      "A position that does not require much experience and is often for new graduates is an:",
    options: [
      "Entry-level position",
      "Senior position",
      "Mid-level position",
      "Hot desk"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q145",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-145",
    type: "drag",
    prompt:
      "After a few years, she moved into a ____ with more responsibility.",
    options: [
      "mid-level position",
      "coffee break",
      "commute",
      "paper trail"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q146",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-146",
    type: "choice",
    prompt:
      "A high-responsibility role usually given to experienced employees is a:",
    options: [
      "Business trip",
      "Senior position",
      "Entry-level position",
      "Cubicle"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q147",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-147",
    type: "drag",
    prompt:
      "Government jobs often offer strong ____ and stable income.",
    options: [
      "job security",
      "red tape",
      "break rooms",
      "commutes"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q148",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-148",
    type: "choice",
    prompt:
      "The long-term direction and series of jobs someone has over their life is their:",
    options: [
      "Chain of command",
      "Career path",
      "Coffee break",
      "Time management"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q149",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-149",
    type: "drag",
    prompt:
      "After ten years in banking, he is thinking about a ____ into teaching.",
    options: [
      "quality control",
      "career change",
      "coffee break",
      "corporate ladder"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q150",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-150",
    type: "choice",
    prompt:
      "Courses, workshops, and training that help you grow in your job are part of your:",
    options: [
      "Professional development",
      "Commute",
      "Dress code",
      "Office politics"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q151",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-151",
    type: "drag",
    prompt:
      "In this department, ____ is high because people feel valued and supported.",
    options: [
      "job satisfaction",
      "staff turnover",
      "red tape",
      "cash flow"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q152",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-152",
    type: "choice",
    prompt:
      "Severe physical and emotional exhaustion caused by long-term stress at work is called:",
    options: [
      "Burnout",
      "Commute",
      "Overtime",
      "Coffee break"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q153",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-153",
    type: "drag",
    prompt:
      "The company tries to support a healthy ____ by limiting overtime.",
    options: [
      "paper trail",
      "work–life balance",
      "corporate ladder",
      "break room"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q154",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-154",
    type: "choice",
    prompt:
      "If someone has too much work and not enough time, they may:",
    options: [
      "Be overworked",
      "Be on the clock",
      "Be in the loop",
      "Be under budget"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q155",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-155",
    type: "drag",
    prompt:
      "We need to lower the ____ in the office to protect employees’ health.",
    options: [
      "chain of command",
      "stress level",
      "coffee break",
      "dress code"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q156",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-156",
    type: "choice",
    prompt:
      "When you phone your workplace to say you’re too ill to come in, you:",
    options: [
      "Call off a deal",
      "Call in sick",
      "Call in a favor",
      "Call back later"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q157",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-157",
    type: "drag",
    prompt:
      "I have a dentist appointment; can you ____ my ____ tonight?",
    options: [
      "cover a shift",
      "miss the deadline",
      "take the lead",
      "kick off a meeting"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q158",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-158",
    type: "choice",
    prompt:
      "If you agree to work more hours than usual, especially on weekends, you:",
    options: [
      "Pick up extra shifts",
      "Cut costs",
      "Climb the ladder",
      "Take something off your plate"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q159",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-159",
    type: "drag",
    prompt:
      "We are ____ tonight, so everyone will have to work harder.",
    options: [
      "over budget",
      "short-staffed",
      "off the record",
      "under budget"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q160",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-160",
    type: "choice",
    prompt:
      "If many employees leave and new ones are hired often, the company has high:",
    options: [
      "Time management",
      "Staff turnover",
      "Job security",
      "Dress code"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q161",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-161",
    type: "drag",
    prompt:
      "Last quarter, company ____ increased thanks to strong sales.",
    options: [
      "burnout",
      "revenue",
      "commute",
      "dress code"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q162",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-162",
    type: "choice",
    prompt:
      "The money a company has left after paying all its costs is its:",
    options: [
      "Loss",
      "Revenue",
      "Profit",
      "Cash flow"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q163",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-163",
    type: "drag",
    prompt:
      "Because of higher costs, the company reported a ____ last year.",
    options: [
      "loss",
      "KPI",
      "coffee break",
      "mid-level position"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q164",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-164",
    type: "choice",
    prompt:
      "When a business covers all its costs but doesn’t make extra profit, it:",
    options: [
      "Cuts costs",
      "Breaks even",
      "Climbs the ladder",
      "Calls off the deal"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q165",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-165",
    type: "drag",
    prompt:
      "We need better ____ so that more money comes into the company than goes out.",
    options: [
      "cash flow",
      "dress code",
      "job satisfaction",
      "office politics"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q166",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-166",
    type: "choice",
    prompt:
      "The financial information a company reports every three months is its:",
    options: [
      "Corporate ladder",
      "Quarterly results",
      "Annual report",
      "Paper trail"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q167",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-167",
    type: "drag",
    prompt:
      "Investors read the ____ carefully to understand the company’s yearly performance.",
    options: [
      "annual report",
      "coffee break schedule",
      "dress code",
      "commute plan"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q168",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-168",
    type: "choice",
    prompt:
      "Any person or group that has an interest in how a company performs is a:",
    options: [
      "Stakeholder",
      "Cubicle",
      "KPI",
      "Commute"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q169",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-169",
    type: "drag",
    prompt:
      "The ____ voted on the new proposal at the annual meeting.",
    options: [
      "coffee breaks",
      "shareholders",
      "commutes",
      "dress codes"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q170",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-170",
    type: "choice",
    prompt:
      "The group of people elected to oversee a company’s management is the:",
    options: [
      "Break room",
      "Board of directors",
      "Open-plan office",
      "Chain of command"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q171",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-171",
    type: "drag",
    prompt:
      "Before starting the project, we had to ____ a ____.",
    options: [
      "set a budget",
      "call off a deal",
      "take a day off",
      "kick off a meeting"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q172",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-172",
    type: "choice",
    prompt:
      "If a company wants to spend less money, it tries to:",
    options: [
      "Cut costs",
      "Climb the ladder",
      "Call in sick",
      "Open a file"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q173",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-173",
    type: "drag",
    prompt:
      "We chose the most ____ solution so we could save money and still get good results.",
    options: [
      "cost-effective",
      "short-staffed",
      "overworked",
      "off the record"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q174",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-174",
    type: "choice",
    prompt:
      "If a project spends more money than planned, it is:",
    options: [
      "Under budget",
      "Over budget",
      "On the clock",
      "Off the clock"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q175",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-175",
    type: "drag",
    prompt:
      "We were happy to finish the project ____ and still meet all the goals.",
    options: [
      "under budget",
      "short-staffed",
      "off the record",
      "overworked"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q176",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-176",
    type: "choice",
    prompt:
      "When you decide the final date for a task to be completed, you:",
    options: [
      "Kick off a meeting",
      "Set a deadline",
      "Take a day off",
      "Call in sick"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q177",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-177",
    type: "drag",
    prompt:
      "The team needed more time, so we had to ____ the ____ by one week.",
    options: [
      "extend the deadline",
      "punch the clock",
      "file a complaint",
      "cut costs"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q178",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-178",
    type: "choice",
    prompt:
      "If you finish your work on time, you:",
    options: [
      "Miss the deadline",
      "Meet the deadline",
      "Call off a deal",
      "Be short-staffed"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q179",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-179",
    type: "drag",
    prompt:
      "We can’t ____ the ____ again, or the client will be very upset.",
    options: [
      "miss the deadline",
      "cut the costs",
      "punch the clock",
      "climb the ladder"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q180",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-180",
    type: "choice",
    prompt:
      "Planning your schedule so you use your hours wisely is good:",
    options: [
      "Office politics",
      "Work–life balance",
      "Time management",
      "Cash flow"
    ],
    correctIndex: 2
  },

  {
    id: "busness-q181",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-181",
    type: "drag",
    prompt:
      "We track each ____ every month to see how well the team is performing.",
    options: [
      "key performance indicator (KPI)",
      "coffee break",
      "commute",
      "break room"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q182",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-182",
    type: "choice",
    prompt:
      "When a manager decides what result they want to achieve, they:",
    options: [
      "Set a target",
      "Cut costs",
      "Call in sick",
      "Climb the ladder"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q183",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-183",
    type: "drag",
    prompt:
      "We were proud to ____ our sales ____ for the year.",
    options: [
      "follow the agenda",
      "hit our target",
      "call off a deal",
      "file paperwork"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q184",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-184",
    type: "choice",
    prompt:
      "If your results are less than the goal you wanted, you:",
    options: [
      "Hit the target",
      "Fall short of the target",
      "Punch the clock",
      "Cover a shift"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q185",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-185",
    type: "drag",
    prompt:
      "Our main objective is high ____ so that people stay loyal to our company.",
    options: [
      "client satisfaction",
      "office politics",
      "staff turnover",
      "paper trail"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q186",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-186",
    type: "choice",
    prompt:
      "If a customer is unhappy, you should calmly and professionally:",
    options: [
      "Handle a complaint",
      "Climb the ladder",
      "Punch the clock",
      "Cut costs"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q187",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-187",
    type: "drag",
    prompt:
      "For safety reasons, we must ____ the ____ exactly step by step.",
    options: [
      "follow the procedure",
      "miss the deadline",
      "call off the deal",
      "climb the ladder"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q188",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-188",
    type: "choice",
    prompt:
      "A detailed written instruction that explains exactly how to do a task is a:",
    options: [
      "Coffee break",
      "Standard operating procedure (SOP)",
      "Cubicle",
      "Commute"
    ],
    correctIndex: 1
  },

  {
    id: "busness-q189",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-189",
    type: "drag",
    prompt:
      "The product failed ____ and had to be redesigned.",
    options: [
      "quality control",
      "coffee break",
      "corporate ladder",
      "commute"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q190",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-190",
    type: "choice",
    prompt:
      "The official check to make sure a company is following laws and rules is a:",
    options: [
      "Compliance audit",
      "Coffee break",
      "Business trip",
      "Commute"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q191",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-191",
    type: "drag",
    prompt:
      "Because of new information, they decided to ____ the ____ at the last minute.",
    options: [
      "call off the deal",
      "punch the clock",
      "cover the shift",
      "set the deadline"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q192",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-192",
    type: "choice",
    prompt:
      "If an investor decides not to continue with an agreement, they:",
    options: [
      "Shake on it",
      "Back out of a deal",
      "Kick off a meeting",
      "Set a target"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q193",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-193",
    type: "drag",
    prompt:
      "The lawyer will ____ the ____ so both parties can review it.",
    options: [
      "draw up a contract",
      "take a day off",
      "call in sick",
      "kick off a meeting"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q194",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-194",
    type: "choice",
    prompt:
      "When two companies finally agree and officially accept the terms, they:",
    options: [
      "Sign a deal",
      "Call off a deal",
      "Fall short of a target",
      "Miss the deadline"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q195",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-195",
    type: "drag",
    prompt:
      "We agreed on the price and then decided to ____ it to confirm the agreement.",
    options: [
      "be short-staffed",
      "take something off the plate",
      "shake on",
      "call off"
    ],
    correctIndex: 2
  },
  {
    id: "busness-q196",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-196",
    type: "choice",
    prompt:
      "If a project is temporarily stopped and not continued for now, you:",
    options: [
      "Move forward with it",
      "Put it on hold",
      "Hit the target",
      "Cover a shift"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q197",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-197",
    type: "drag",
    prompt:
      "We finally got the ____ from management to start the new campaign.",
    options: [
      "green light",
      "commute",
      "coffee break",
      "paper trail"
    ],
    correctIndex: 0
  },
  {
    id: "busness-q198",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-198",
    type: "choice",
    prompt:
      "When your boss officially says you can start a plan, they:",
    options: [
      "Give the go-ahead",
      "Call in sick",
      "Cut costs",
      "Punch the clock"
    ],
    correctIndex: 0
  },

  {
    id: "busness-q199",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-199",
    type: "drag",
    prompt:
      "Now that we have approval, we can ____ the new training program.",
    options: [
      "be short-staffed with",
      "move forward with",
      "call off with",
      "punch the clock with"
    ],
    correctIndex: 1
  },
  {
    id: "busness-q200",
    categoryId: WORK_CATEGORY_ID,
    wordId: "business-200",
    type: "choice",
    prompt:
      "If you help a coworker by doing one of their tasks, you:",
    options: [
      "Take something off their plate",
      "Put the project on hold",
      "Cut their costs",
      "Call off their deal"
    ],
    correctIndex: 0
  },

//   End of WORK_CATEGORY_ID questions

// Medical category questions 
{
    id: "medical-q1",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-1",
    type: "drag",
    prompt:
      "The doctor recommended a yearly ____ to catch any problems early.",
    options: ["check-up", "surgery", "X-ray", "dose"],
    correctIndex: 0,
  },
  {
    id: "medical-q2",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-2",
    type: "drag",
    prompt:
      "The official name a doctor gives to explain what illness a patient has is called a ____.",
    options: ["prognosis", "diagnosis", "symptom", "side effect"],
    correctIndex: 1,
  },
  {
    id: "medical-q3",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-3",
    type: "drag",
    prompt:
      "Fever, cough, and fatigue are common ____ of many infections.",
    options: ["prognosis", "fracture", "symptoms", "vitals"],
    correctIndex: 2,
  },
  {
    id: "medical-q4",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-4",
    type: "drag",
    prompt:
      "The doctor gave the patient a positive ____, explaining that recovery was likely.",
    options: ["diagnosis", "symptom", "dose", "prognosis"],
    correctIndex: 3,
  },
  {
    id: "medical-q5",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-5",
    type: "drag",
    prompt:
      "At the emergency department, a nurse completes the initial ____ forms and assessments.",
    options: ["fracture", "intake", "clinic", "ointment"],
    correctIndex: 1,
  },
  {
    id: "medical-q6",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-6",
    type: "drag",
    prompt:
      "Nausea, rash, or dizziness after taking a drug can be an ____.",
    options: [
      "adverse effect",
      "check-up",
      "pre-existing condition",
      "remission",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q7",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-7",
    type: "drag",
    prompt:
      "In the ER, patients are sorted by ____ to decide who needs care first.",
    options: ["triage", "ward", "appointment", "paperwork"],
    correctIndex: 0,
  },
  {
    id: "medical-q8",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-8",
    type: "drag",
    prompt:
      "A patient who stays in the hospital overnight is called an ____. ",
    options: ["outpatient", "clinic patient", "inpatient", "visitor"],
    correctIndex: 2,
  },
  {
    id: "medical-q9",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-9",
    type: "drag",
    prompt:
      "He had a minor procedure and went home the same day as an ____.",
    options: ["inpatient", "intensive care patient", "outpatient", "visitor"],
    correctIndex: 2,
  },
  {
    id: "medical-q10",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-10",
    type: "drag",
    prompt:
      "When you are unsure about a diagnosis, it is wise to ____ from another specialist.",
    options: [
      "get a second opinion",
      "take stock of it",
      "run a fever",
      "check out",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q11",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-11",
    type: "drag",
    prompt:
      "After a few days of rest and medication, the child finally seemed to be ____.",
    options: ["on the mend", "under the knife", "in remission", "short-staffed"],
    correctIndex: 0,
  },
  {
    id: "medical-q12",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-12",
    type: "drag",
    prompt:
      "If you start to feel tired, feverish, and achy, you might be ____ the flu.",
    options: ["getting over", "coming down with", "bouncing back from", "passing on"],
    correctIndex: 1,
  },
  {
    id: "medical-q13",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-13",
    type: "drag",
    prompt:
      "He was very ill, but with treatment and support he managed to ____.",
    options: ["pull through", "pass out", "break out", "check in"],
    correctIndex: 0,
  },
  {
    id: "medical-q14",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-14",
    type: "drag",
    prompt:
      "Before the patient can leave, the physician must ____ the discharge order.",
    options: ["sign off on", "wear off", "rule out", "bounce back"],
    correctIndex: 0,
  },
  {
    id: "medical-q15",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-15",
    type: "drag",
    prompt:
      "The nurse told the patient that the pain medication would ____ after a few hours.",
    options: ["follow up", "adhere to", "wear off", "come off"],
    correctIndex: 2,
  },
  {
    id: "medical-q16",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-16",
    type: "drag",
    prompt:
      "The doctor asked the patient to ____ in two weeks to review the test results.",
    options: ["rule out", "follow up", "pass out", "break out"],
    correctIndex: 1,
  },
  {
    id: "medical-q17",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-17",
    type: "drag",
    prompt:
      "To control their condition, patients must ____ the prescribed treatment plan.",
    options: ["adhere to", "check in", "get over", "pass on"],
    correctIndex: 0,
  },
  {
    id: "medical-q18",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-18",
    type: "drag",
    prompt:
      "Additional imaging was ordered to ____ any internal bleeding.",
    options: ["bounce back", "rule out", "take stock of", "wear off"],
    correctIndex: 1,
  },
  {
    id: "medical-q19",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-19",
    type: "drag",
    prompt:
      "We will ____ the patient tomorrow morning if her vitals remain stable.",
    options: ["discharge", "check up", "dose up", "triage"],
    correctIndex: 0,
  },
  {
    id: "medical-q20",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-20",
    type: "drag",
    prompt:
      "The child started to ____ and his temperature reached 39°C.",
    options: ["run a fever", "pass out", "break out", "bounce back"],
    correctIndex: 0,
  },
  {
    id: "medical-q21",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-21",
    type: "drag",
    prompt:
      "After surgery, the goal is to get the patient ____ as soon as it is safe.",
    options: ["back on your feet", "under the knife", "off the record", "short-staffed"],
    correctIndex: 0,
  },
  {
    id: "medical-q22",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-22",
    type: "drag",
    prompt:
      "A sudden increase in cases of the same disease in a community is called an ____. ",
    options: ["epidemic", "side effect", "stroke", "dose"],
    correctIndex: 0,
  },
  {
    id: "medical-q23",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-23",
    type: "drag",
    prompt:
      "Because the illness is highly ____, infected patients must be isolated.",
    options: ["contagious", "acute", "burnout", "short-staffed"],
    correctIndex: 0,
  },
  {
    id: "medical-q24",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-24",
    type: "drag",
    prompt:
      "Vaccines are an important part of childhood ____. ",
    options: ["fracture care", "immunization", "bandage", "consultation"],
    correctIndex: 1,
  },
  {
    id: "medical-q25",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-25",
    type: "drag",
    prompt:
      "A severe allergy to a vaccine can be a ____ to receiving it.",
    options: ["placebo effect", "contraindication", "remission", "comorbidity"],
    correctIndex: 1,
  },
  {
    id: "medical-q26",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-26",
    type: "drag",
    prompt:
      "Some people feel better just because they believe a treatment will work, which is called the ____. ",
    options: ["placebo effect", "acute phase", "stroke", "blood test"],
    correctIndex: 0,
  },
  {
    id: "medical-q27",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-27",
    type: "drag",
    prompt:
      "The team became worried when the patient’s condition seemed to ____ overnight.",
    options: [
      "take a turn for the worse",
      "bounce back",
      "get over quickly",
      "come off medication",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q28",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-28",
    type: "drag",
    prompt:
      "Before the surgery, the patient was nervous about going ____. ",
    options: [
      "under the knife",
      "on the mend",
      "back on his feet",
      "off the clock",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q29",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-29",
    type: "drag",
    prompt:
      "After many tests, the doctor told her she had a ____, and everything was normal.",
    options: [
      "clean bill of health",
      "severe prognosis",
      "fractured record",
      "shortness of breath",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q30",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-30",
    type: "drag",
    prompt:
      "It took her a few days to ____ the stomach virus.",
    options: ["get over", "come down with", "pass on", "dose up on"],
    correctIndex: 0,
  },
  {
    id: "medical-q31",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-31",
    type: "drag",
    prompt:
      "If you stand up too quickly, you might feel lightheaded and even ____.",
    options: ["bounce back", "pass out", "follow up", "take stock"],
    correctIndex: 1,
  },
  {
    id: "medical-q32",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-32",
    type: "drag",
    prompt:
      "The nurse will ____ the allergy as a warning in the chart.",
    options: ["come round as", "put down as", "wear off as", "pull through as"],
    correctIndex: 1,
  },
  {
    id: "medical-q33",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-33",
    type: "drag",
    prompt:
      "After surgery, the patient slowly started to ____, opening his eyes and responding.",
    options: ["pass on", "come round", "check in", "break out"],
    correctIndex: 1,
  },
  {
    id: "medical-q34",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-34",
    type: "drag",
    prompt:
      "Children often ____ quickly from mild illnesses.",
    options: ["fight off", "bounce back", "take stock", "rule out"],
    correctIndex: 1,
  },
  {
    id: "medical-q35",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-35",
    type: "drag",
    prompt:
      "In older adults, multiple ____ like diabetes and heart disease can complicate care.",
    options: ["fractures", "comorbidities", "stitches", "side effects"],
    correctIndex: 1,
  },
  {
    id: "medical-q36",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-36",
    type: "drag",
    prompt:
      "The oncologist was pleased to say the cancer was in ____. ",
    options: ["remission", "infection", "stroke", "inflammation"],
    correctIndex: 0,
  },
  {
    id: "medical-q37",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-37",
    type: "drag",
    prompt:
      "The patient was rushed to surgery with ____ appendicitis.",
    options: ["chronic", "acute", "clean", "short-staffed"],
    correctIndex: 1,
  },
  {
    id: "medical-q38",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-38",
    type: "drag",
    prompt:
      "Asthma and diabetes are examples of ____ conditions.",
    options: ["acute", "chronic", "fractured", "off the record"],
    correctIndex: 1,
  },
  {
    id: "medical-q39",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-39",
    type: "drag",
    prompt:
      "The research study must follow a strict ____ for safety and consistency.",
    options: ["dose", "protocol", "appointment", "bandage"],
    correctIndex: 1,
  },
  {
    id: "medical-q40",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-40",
    type: "drag",
    prompt:
      "Insurance companies often ask about any ____ before approving coverage.",
    options: [
      "side effects",
      "pre-existing conditions",
      "shortness of breath",
      "remission periods",
    ],
    correctIndex: 1,
  },
  {
    id: "medical-q41",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-41",
    type: "drag",
    prompt:
      "Before changing the treatment plan, the doctor needs to ____ all of the patient’s medications.",
    options: ["take stock of", "get over", "rule out", "break out"],
    correctIndex: 0,
  },
  {
    id: "medical-q42",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-42",
    type: "drag",
    prompt:
      "High ____ can be a sign of hypertension.",
    options: [
      "blood pressure",
      "heart rate",
      "body temperature",
      "oxygen mask",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q43",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-43",
    type: "drag",
    prompt:
      "She complained of a severe ____ and sensitivity to light.",
    options: ["rash", "headache", "fracture", "remission"],
    correctIndex: 1,
  },
  {
    id: "medical-q44",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-44",
    type: "drag",
    prompt:
      "The nurse noted that his ____ was irregular and very fast.",
    options: ["appetite", "heart rate", "ointment", "fracture"],
    correctIndex: 1,
  },
  {
    id: "medical-q45",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-45",
    type: "drag",
    prompt:
      "The doctor placed two fingers on his wrist to check his ____. ",
    options: ["pulse", "rash", "clinic", "ointment"],
    correctIndex: 0,
  },
  {
    id: "medical-q46",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-46",
    type: "drag",
    prompt:
      "The child’s ____ is slightly elevated at 38.2°C.",
    options: ["temperature", "fracture", "stitches", "dose"],
    correctIndex: 0,
  },
  {
    id: "medical-q47",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-47",
    type: "drag",
    prompt:
      "The new medication may cause ____ such as nausea or dizziness.",
    options: ["fractures", "nausea", "stitches", "bandages"],
    correctIndex: 1,
  },
  {
    id: "medical-q48",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-48",
    type: "drag",
    prompt:
      "He began to ____ shortly after taking the medicine.",
    options: ["check up", "vomit", "bounce back", "take stock"],
    correctIndex: 1,
  },
  {
    id: "medical-q49",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-49",
    type: "drag",
    prompt:
      "Standing up too quickly made her feel lightheaded and ____.",
    options: ["dizzy", "short-staffed", "overworked", "chronic"],
    correctIndex: 0,
  },
  {
    id: "medical-q50",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-50",
    type: "drag",
    prompt:
      "He started to feel faint and then actually did ____ during the procedure.",
    options: ["sprain", "faint", "fracture", "break out"],
    correctIndex: 1,
  },
  {
    id: "medical-q51",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-51",
    type: "drag",
    prompt:
      "The patient reported ____ when climbing a single flight of stairs.",
    options: [
      "shortness of breath",
      "clean bill of health",
      "bandages",
      "vitals",
    ],
    correctIndex: 0,
  },
  {
    id: "medical-q52",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-52",
    type: "drag",
    prompt:
      "Severe ____ should always be taken seriously because it might signal a heart attack.",
    options: ["rash", "chest pain", "earache", "stomachache"],
    correctIndex: 1,
  },
  {
    id: "medical-q53",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-53",
    type: "drag",
    prompt:
      "An allergic ____ appeared on his arms after eating peanuts.",
    options: ["infection", "rash", "dose", "fracture"],
    correctIndex: 1,
  },
  {
    id: "medical-q54",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-54",
    type: "drag",
    prompt:
      "The nurse noted some ____ around the ankle after the injury.",
    options: ["swelling", "dose", "clinic", "ointment"],
    correctIndex: 0,
  },
  {
    id: "medical-q55",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-55",
    type: "drag",
    prompt:
      "She noticed a large purple ____ on her leg after she bumped into the table.",
    options: ["fracture", "bruise", "sprain", "rash"],
    correctIndex: 1,
  },
  {
    id: "medical-q56",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-56",
    type: "drag",
    prompt:
      "The X-ray confirmed that he had a ____ in his wrist.",
    options: ["bruise", "sprain", "fracture", "rash"],
    correctIndex: 2,
  },
  {
    id: "medical-q57",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-57",
    type: "drag",
    prompt:
      "He twisted his ankle during the game and was diagnosed with a ____. ",
    options: ["sprain", "fracture", "infection", "stroke"],
    correctIndex: 0,
  },
  {
    id: "medical-q58",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-58",
    type: "drag",
    prompt:
      "The deep cut on his arm needed several ____.",
    options: ["fractures", "stitches", "bandages", "scans"],
    correctIndex: 1,
  },
  {
    id: "medical-q59",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-59",
    type: "drag",
    prompt:
      "The nurse covered the wound with a clean ____.",
    options: ["bandage", "dose", "ointment", "vitals"],
    correctIndex: 0,
  },
  {
    id: "medical-q60",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-60",
    type: "drag",
    prompt:
      "Apply the ____ to the affected area twice a day.",
    options: ["fracture", "clinic", "ointment", "shortness of breath"],
    correctIndex: 2,
  },
  {
    id: "medical-q61",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-61",
    type: "drag",
    prompt:
      "The doctor prescribed ____ to treat the bacterial infection.",
    options: ["antibiotics", "bandages", "stitches", "earplugs"],
    correctIndex: 0,
  },
  {
    id: "medical-q62",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-62",
    type: "drag",
    prompt:
      "She took a ____ to relieve the severe headache.",
    options: ["side effect", "painkiller", "dose", "ointment"],
    correctIndex: 1,
  },
  {
    id: "medical-q63",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-63",
    type: "drag",
    prompt:
      "Drowsiness is a common ____ of this medication.",
    options: ["sprain", "side effect", "fracture", "appointment"],
    correctIndex: 1,
  },
  {
    id: "medical-q64",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-64",
    type: "drag",
    prompt:
      "The label says to take one ____ every 8 hours.",
    options: ["dose", "fracture", "check-up", "clinic"],
    correctIndex: 0,
  },
  {
    id: "medical-q65",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-65",
    type: "drag",
    prompt:
      "Because of his peanut ____, he always checks food labels carefully.",
    options: ["dose", "allergy", "sprain", "clinic"],
    correctIndex: 1,
  },
  {
    id: "medical-q66",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-66",
    type: "drag",
    prompt:
      "A sudden weakness on one side of the body can be a sign of a ____. ",
    options: ["bruise", "stroke", "rash", "earache"],
    correctIndex: 1,
  },
  {
    id: "medical-q67",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-67",
    type: "drag",
    prompt:
      "Severe ____ requires immediate emergency treatment to save the heart muscle.",
    options: ["stomachache", "heart attack", "sprain", "burnout"],
    correctIndex: 1,
  },
  {
    id: "medical-q68",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-68",
    type: "drag",
    prompt:
      "The patient began to shake uncontrollably; the nurse recognized it as a ____. ",
    options: ["side effect", "fracture", "seizure", "sprain"],
    correctIndex: 2,
  },
  {
    id: "medical-q69",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-69",
    type: "drag",
    prompt:
      "Redness, warmth, and pus around the wound may indicate an ____. ",
    options: ["infection", "sprain", "fracture", "headache"],
    correctIndex: 0,
  },
  {
    id: "medical-q70",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-70",
    type: "drag",
    prompt:
      "Swelling and redness around a joint are typical signs of ____. ",
    options: ["infection", "fracture", "inflammation", "dehydration"],
    correctIndex: 2,
  },
  {
    id: "medical-q71",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-71",
    type: "drag",
    prompt:
      "Drinking enough fluids throughout the day helps prevent ____.",
    options: ["stroke", "dehydration", "fracture", "swelling"],
    correctIndex: 1,
  },
  {
    id: "medical-q72",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-72",
    type: "drag",
    prompt:
      "The lab technician drew blood for a ____. ",
    options: ["CT scan", "MRI", "blood test", "X-ray"],
    correctIndex: 2,
  },
  {
    id: "medical-q73",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-73",
    type: "drag",
    prompt:
      "The doctor ordered a ____ to check for infection in the kidneys.",
    options: ["urine test", "blood test", "X-ray", "CT scan"],
    correctIndex: 0,
  },
  {
    id: "medical-q74",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-74",
    type: "drag",
    prompt:
      "They took an ____ of his chest to look at the lungs.",
    options: ["MRI", "X-ray", "CT scan", "ward"],
    correctIndex: 1,
  },
  {
    id: "medical-q75",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-75",
    type: "drag",
    prompt:
      "A ____ is often used to get detailed images of organs such as the brain.",
    options: ["urine test", "CT scan", "bandage", "ointment"],
    correctIndex: 1,
  },
  {
    id: "medical-q76",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-76",
    type: "drag",
    prompt:
      "The neurologist ordered an ____ to look closely at the patient’s brain.",
    options: ["MRI", "X-ray", "blood test", "pulse check"],
    correctIndex: 0,
  },
  {
    id: "medical-q77",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-77",
    type: "drag",
    prompt:
      "Before surgery, the nurse checked the patient’s ____ like blood pressure and heart rate.",
    options: ["diagnosis", "vitals", "ointment", "fracture"],
    correctIndex: 1,
  },
  {
    id: "medical-q78",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-78",
    type: "drag",
    prompt:
      "The nurse inserted an ____ to give fluids and medication directly into the vein.",
    options: ["IV line", "cast", "bandage", "stitches"],
    correctIndex: 0,
  },
  {
    id: "medical-q79",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-79",
    type: "drag",
    prompt:
      "Because she was struggling to breathe, they placed an ____ over her nose and mouth.",
    options: ["ointment", "oxygen mask", "bandage", "dose"],
    correctIndex: 1,
  },
  {
    id: "medical-q80",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-80",
    type: "drag",
    prompt:
      "When the patient could not breathe on his own, he was placed on a ____. ",
    options: ["ventilator", "clinic", "bandage", "brace"],
    correctIndex: 0,
  },
  {
    id: "medical-q81",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-81",
    type: "drag",
    prompt:
      "Because his condition was unstable, he was moved to ____.",
    options: ["intensive care", "the clinic", "the waiting room", "outpatient"],
    correctIndex: 0,
  },
  {
    id: "medical-q82",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-82",
    type: "drag",
    prompt:
      "He is recovering in the surgical ____, sharing the room with other patients.",
    options: ["clinic", "ward", "appointment", "triage"],
    correctIndex: 1,
  },
  {
    id: "medical-q83",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-83",
    type: "drag",
    prompt:
      "She volunteers once a week at a community health ____.",
    options: ["fracture", "clinic", "dose", "bandage"],
    correctIndex: 1,
  },
  {
    id: "medical-q84",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-84",
    type: "drag",
    prompt:
      "You have an ____ with the cardiologist at 3 PM.",
    options: ["operation", "appointment", "fracture", "dose"],
    correctIndex: 1,
  },
  {
    id: "medical-q85",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-85",
    type: "drag",
    prompt:
      "Your ____ is confidential and can only be seen by authorized staff.",
    options: ["shortness of breath", "medical record", "triage card", "sprain"],
    correctIndex: 1,
  },
  {
    id: "medical-q86",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-86",
    type: "drag",
    prompt:
      "When you arrive at the hospital, you usually ____ at the front desk.",
    options: ["check in", "pass out", "get over", "fight off"],
    correctIndex: 0,
  },
  {
    id: "medical-q87",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-87",
    type: "drag",
    prompt:
      "Once the doctor approves, you can ____ and go home.",
    options: ["check in", "check out", "pass out", "dose up"],
    correctIndex: 1,
  },
  {
    id: "medical-q88",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-88",
    type: "drag",
    prompt:
      "She suddenly ____ in hives after eating shellfish.",
    options: ["bounced back", "broke out", "came off", "took stock"],
    correctIndex: 1,
  },
  {
    id: "medical-q89",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-89",
    type: "drag",
    prompt:
      "He is trying to ____ a cold by resting and drinking fluids.",
    options: ["fight off", "pass on", "dose up on", "take stock of"],
    correctIndex: 0,
  },
  {
    id: "medical-q90",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-90",
    type: "drag",
    prompt:
      "The doctor decided to have him slowly ____ the medication.",
    options: ["come round", "come off", "come down with", "get over"],
    correctIndex: 1,
  },
  {
    id: "medical-q91",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-91",
    type: "drag",
    prompt:
      "Before flu season, some people like to ____ vitamins.",
    options: ["pass on", "dose up on", "break out", "pass out"],
    correctIndex: 1,
  },
  {
    id: "medical-q92",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-92",
    type: "drag",
    prompt:
      "Cover your mouth when you cough so you don’t ____ the infection.",
    options: ["pass out", "pass on", "come round", "take stock"],
    correctIndex: 1,
  },
  {
    id: "medical-q93",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-93",
    type: "drag",
    prompt:
      "A ____ can make it hard to breathe through your nose.",
    options: ["side effect", "stuffy nose", "fracture", "bruise"],
    correctIndex: 1,
  },
  {
    id: "medical-q94",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-94",
    type: "drag",
    prompt:
      "She has a ____ and keeps using tissues all day.",
    options: ["runny nose", "stuffy nose", "earache", "stomachache"],
    correctIndex: 0,
  },
  {
    id: "medical-q95",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-95",
    type: "drag",
    prompt:
      "His persistent ____ made it hard for him to sleep at night.",
    options: ["cough", "rash", "fracture", "earache"],
    correctIndex: 0,
  },
  {
    id: "medical-q96",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-96",
    type: "drag",
    prompt:
      "A ____ can be the first sign of a throat infection.",
    options: ["stomachache", "earache", "sore throat", "headache"],
    correctIndex: 2,
  },
  {
    id: "medical-q97",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-97",
    type: "drag",
    prompt:
      "The child woke up crying with an ____, so the parents went to the clinic.",
    options: ["earache", "rash", "sprain", "fracture"],
    correctIndex: 0,
  },
  {
    id: "medical-q98",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-98",
    type: "drag",
    prompt:
      "He complained of a severe ____ after eating too quickly.",
    options: ["stomachache", "earache", "headache", "stroke"],
    correctIndex: 0,
  },
  {
    id: "medical-q99",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-99",
    type: "drag",
    prompt:
      "Because of her ____, she needed to drink extra fluids to avoid dehydration.",
    options: ["constipation", "diarrhea", "earache", "fracture"],
    correctIndex: 1,
  },
  {
    id: "medical-q100",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-100",
    type: "drag",
    prompt:
      "Eating enough fiber can help prevent ____. ",
    options: ["diarrhea", "constipation", "stroke", "seizure"],
    correctIndex: 1,
  },
  {
    id: "medical-q101",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-101",
    type: "drag",
    prompt:
      "She has a severe ____ and needs to rest in a dark room.",
    options: ["migraine", "fracture", "sprain", "rash"],
    correctIndex: 0
  },
  {
    id: "medical-q102",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-102",
    type: "drag",
    prompt:
      "Difficulty falling or staying asleep for a long period is called ____. ",
    options: ["insomnia", "anemia", "arthritis", "diabetes"],
    correctIndex: 0
  },
  {
    id: "medical-q103",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-103",
    type: "drag",
    prompt:
      "Low red blood cell levels leading to fatigue and weakness is known as ____. ",
    options: ["cholesterol", "insomnia", "anemia", "migraine"],
    correctIndex: 2
  },
  {
    id: "medical-q104",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-104",
    type: "drag",
    prompt:
      "A chronic condition where the body has trouble regulating blood sugar is ____. ",
    options: ["hypertension", "diabetes", "arthritis", "anemia"],
    correctIndex: 1
  },
  {
    id: "medical-q105",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-105",
    type: "drag",
    prompt:
      "Long-term high blood pressure is called ____. ",
    options: ["cholesterol", "hypertension", "arthritis", "stroke"],
    correctIndex: 1
  },
  {
    id: "medical-q106",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-106",
    type: "drag",
    prompt:
      "High levels of ____ in the blood can increase the risk of heart disease.",
    options: ["arthritis", "diabetes", "cholesterol", "insomnia"],
    correctIndex: 2
  },
  {
    id: "medical-q107",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-107",
    type: "drag",
    prompt:
      "Joint inflammation that causes pain and stiffness is called ____. ",
    options: ["migraine", "arthritis", "anemia", "insomnia"],
    correctIndex: 1
  },
  {
    id: "medical-q108",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-108",
    type: "drag",
    prompt:
      "Hospitals use strict procedures for ____ to prevent the spread of disease.",
    options: [
      "wound care",
      "infection control",
      "symptom relief",
      "primary care"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q109",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-109",
    type: "drag",
    prompt:
      "Surgical instruments must remain completely ____ to avoid infection.",
    options: ["contaminated", "sterile", "fractured", "blocked"],
    correctIndex: 1
  },
  {
    id: "medical-q110",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-110",
    type: "drag",
    prompt:
      "Used needles are considered ____ and must be disposed of safely.",
    options: ["sterile", "fractured", "contaminated", "acute"],
    correctIndex: 2
  },
  {
    id: "medical-q111",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-111",
    type: "drag",
    prompt:
      "The doctor removed the ____ once the wound had healed.",
    options: ["sutures", "arteries", "veins", "organs"],
    correctIndex: 0
  },
  {
    id: "medical-q112",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-112",
    type: "drag",
    prompt:
      "Proper ____ is essential to prevent infection and promote healing.",
    options: ["wound care", "lab results", "insomnia", "primary care"],
    correctIndex: 0
  },
  {
    id: "medical-q113",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-113",
    type: "drag",
    prompt:
      "He received an ____ of a vaccine in his upper arm.",
    options: ["insomnia", "injection", "biopsy", "dialysis"],
    correctIndex: 1
  },
  {
    id: "medical-q114",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-114",
    type: "drag",
    prompt:
      "She is afraid of ____ and avoids blood tests when possible.",
    options: ["organs", "needles", "lab results", "surgeons"],
    correctIndex: 1
  },
  {
    id: "medical-q115",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-115",
    type: "drag",
    prompt:
      "An IV that accidentally enters a ____ can cause complications.",
    options: ["bone", "blood vessel", "tendon", "nerve"],
    correctIndex: 1
  },
  {
    id: "medical-q116",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-116",
    type: "drag",
    prompt:
      "After the accident, X-rays confirmed he had a ____. ",
    options: ["fractured rib", "heart attack", "blurred vision", "rash"],
    correctIndex: 0
  },
  {
    id: "medical-q117",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-117",
    type: "drag",
    prompt:
      "You need ____ from your doctor before you can have this operation.",
    options: ["symptom relief", "medical clearance", "lab results", "fluid intake"],
    correctIndex: 1
  },
  {
    id: "medical-q118",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-118",
    type: "drag",
    prompt:
      "He ____ for influenza, so he must stay home.",
    options: ["tested negative", "tested positive", "blacked out", "dozed off"],
    correctIndex: 1
  },
  {
    id: "medical-q119",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-119",
    type: "drag",
    prompt:
      "She was relieved to ____ for COVID after the exposure.",
    options: ["test positive", "test negative", "black out", "throw up"],
    correctIndex: 1
  },
  {
    id: "medical-q120",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-120",
    type: "drag",
    prompt:
      "If you ____ you feel slightly sick and not in your normal condition.",
    options: [
      "feel under the weather",
      "are as fit as a fiddle",
      "build up immunity",
      "gasp for air"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q121",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-121",
    type: "drag",
    prompt:
      "He exercises every day and eats well; he is ____. ",
    options: [
      "under the weather",
      "out of breath",
      "as fit as a fiddle",
      "short-staffed"
    ],
    correctIndex: 2
  },
  {
    id: "medical-q122",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-122",
    type: "drag",
    prompt:
      "He hit his head so hard that he ____ for a few seconds.",
    options: ["dozed off", "checked over", "broke down", "blacked out"],
    correctIndex: 3
  },
  {
    id: "medical-q123",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-123",
    type: "drag",
    prompt:
      "She was so tired that she ____ in the waiting room.",
    options: ["broke down", "dozed off", "blacked out", "came forward"],
    correctIndex: 1
  },
  {
    id: "medical-q124",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-124",
    type: "drag",
    prompt:
      "The doctor will ____ the patient to make sure nothing is missed.",
    options: ["check for", "check over", "build up", "break down"],
    correctIndex: 1
  },
  {
    id: "medical-q125",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-125",
    type: "drag",
    prompt:
      "When he heard the diagnosis, he started to cry and completely ____. ",
    options: ["came forward", "broke down", "checked in", "built up immunity"],
    correctIndex: 1
  },
  {
    id: "medical-q126",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-126",
    type: "drag",
    prompt:
      "Several witnesses decided to ____ and share what they saw.",
    options: ["come forward", "black out", "dose off", "throw up"],
    correctIndex: 0
  },
  {
    id: "medical-q127",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-127",
    type: "drag",
    prompt:
      "We need to ____ any signs of infection around the wound.",
    options: ["check for", "throw up", "break down", "dose off"],
    correctIndex: 0
  },
  {
    id: "medical-q128",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-128",
    type: "drag",
    prompt:
      "Vaccines help the body ____ against serious diseases.",
    options: [
      "throw up",
      "build up immunity",
      "break down",
      "black out"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q129",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-129",
    type: "drag",
    prompt:
      "His ____ is within the healthy range for his height and weight.",
    options: [
      "body mass index",
      "blood vessel",
      "temperature spike",
      "blood clot"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q130",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-130",
    type: "drag",
    prompt:
      "There was a sudden ____ from 37°C to 39.5°C.",
    options: [
      "lab result",
      "temperature spike",
      "fluid intake",
      "joint pain"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q131",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-131",
    type: "drag",
    prompt:
      "The nurse told him his ____ would be available this afternoon.",
    options: ["lab results", "skin", "arteries", "bones"],
    correctIndex: 0
  },
  {
    id: "medical-q132",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-132",
    type: "drag",
    prompt:
      "People with diabetes must monitor their ____ regularly.",
    options: ["body mass index", "blood sugar", "fluid intake", "tissue"],
    correctIndex: 1
  },
  {
    id: "medical-q133",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-133",
    type: "drag",
    prompt:
      "During a fever, it is important to increase your ____. ",
    options: ["bone density", "blood sugar", "fluid intake", "skin care"],
    correctIndex: 2
  },
  {
    id: "medical-q134",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-134",
    type: "drag",
    prompt:
      "A ____ along with fever can be a warning sign of meningitis.",
    options: ["fractured rib", "stiff neck", "muscle tear", "sore throat"],
    correctIndex: 1
  },
  {
    id: "medical-q135",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-135",
    type: "drag",
    prompt:
      "He reports increased light ____ since the concussion.",
    options: ["insomnia", "sensitivity", "blockage", "fracture"],
    correctIndex: 1
  },
  {
    id: "medical-q136",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-136",
    type: "drag",
    prompt:
      "After running up the stairs, he was ____, trying to catch his breath.",
    options: [
      "as fit as a fiddle",
      "out of breath",
      "building up immunity",
      "short-staffed"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q137",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-137",
    type: "drag",
    prompt:
      "He felt nauseous and had to ____ right after dinner.",
    options: ["throw up", "black out", "dose off", "check in"],
    correctIndex: 0
  },
  {
    id: "medical-q138",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-138",
    type: "drag",
    prompt:
      "A ____ in a coronary artery can lead to a heart attack.",
    options: ["blockage", "tissue", "organ", "joint"],
    correctIndex: 0
  },
  {
    id: "medical-q139",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-139",
    type: "drag",
    prompt:
      "A ____ that travels to the lungs can be life-threatening.",
    options: ["bone fracture", "blood clot", "ligament tear", "vein"],
    correctIndex: 1
  },
  {
    id: "medical-q140",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-140",
    type: "drag",
    prompt:
      "To recover properly, you must ____ exactly.",
    options: [
      "throw up",
      "follow the doctor’s orders",
      "black out regularly",
      "break down often"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q141",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-141",
    type: "drag",
    prompt:
      "She became ____ after walking quickly up the hill.",
    options: ["as fit as a fiddle", "under the weather", "out of breath", "short-staffed"],
    correctIndex: 2
  },
  {
    id: "medical-q142",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-142",
    type: "drag",
    prompt:
      "The injury affected his lower ____ and caused back pain.",
    options: ["skull", "spine", "rib", "lung"],
    correctIndex: 1
  },
  {
    id: "medical-q143",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-143",
    type: "drag",
    prompt:
      "The CT scan showed there was no fracture of the ____. ",
    options: ["spine", "skull", "lung", "kidney"],
    correctIndex: 1
  },
  {
    id: "medical-q144",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-144",
    type: "drag",
    prompt:
      "She broke a ____ while playing sports.",
    options: ["joint", "rib", "organ", "tissue"],
    correctIndex: 1
  },
  {
    id: "medical-q145",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-145",
    type: "drag",
    prompt:
      "Smoking can seriously damage the ____. ",
    options: ["lungs", "intestines", "bladder", "skin"],
    correctIndex: 0
  },
  {
    id: "medical-q146",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-146",
    type: "drag",
    prompt:
      "Heavy alcohol use over many years can damage the ____. ",
    options: ["spine", "liver", "bladder", "stomach"],
    correctIndex: 1
  },
  {
    id: "medical-q147",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-147",
    type: "drag",
    prompt:
      "He has only one functioning ____, so doctors monitor him closely.",
    options: ["kidney", "lung", "rib", "muscle"],
    correctIndex: 0
  },
  {
    id: "medical-q148",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-148",
    type: "drag",
    prompt:
      "After eating too fast, her ____ hurt.",
    options: ["kidneys", "stomach", "joints", "bones"],
    correctIndex: 1
  },
  {
    id: "medical-q149",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-149",
    type: "drag",
    prompt:
      "The ____ are an essential part of the digestive system.",
    options: ["lungs", "intestines", "veins", "arteries"],
    correctIndex: 1
  },
  {
    id: "medical-q150",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-150",
    type: "drag",
    prompt:
      "A urinary tract infection often affects the ____. ",
    options: ["bladder", "spine", "skull", "lung"],
    correctIndex: 0
  },
  {
    id: "medical-q151",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-151",
    type: "drag",
    prompt:
      "The knee is a large ____. ",
    options: ["organ", "artery", "joint", "tissue"],
    correctIndex: 2
  },
  {
    id: "medical-q152",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-152",
    type: "drag",
    prompt:
      "He strained a back ____ while lifting boxes.",
    options: ["tendon", "muscle", "vein", "nerve"],
    correctIndex: 1
  },
  {
    id: "medical-q153",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-153",
    type: "drag",
    prompt:
      "A torn ____ can take months to heal completely.",
    options: ["tendon", "skin", "artery", "organ"],
    correctIndex: 0
  },
  {
    id: "medical-q154",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-154",
    type: "drag",
    prompt:
      "She tore a ____ in her knee while playing soccer.",
    options: ["bone", "ligament", "muscle", "tissue"],
    correctIndex: 1
  },
  {
    id: "medical-q155",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-155",
    type: "drag",
    prompt:
      "The injury damaged a facial ____, causing numbness.",
    options: ["nerve", "bone", "organ", "joint"],
    correctIndex: 0
  },
  {
    id: "medical-q156",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-156",
    type: "drag",
    prompt:
      "The rash covered most of his ____. ",
    options: ["nerve", "skin", "artery", "vein"],
    correctIndex: 1
  },
  {
    id: "medical-q157",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-157",
    type: "drag",
    prompt:
      "The nurse inserted the IV into a ____ in his arm.",
    options: ["bone", "vein", "organ", "ligament"],
    correctIndex: 1
  },
  {
    id: "medical-q158",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-158",
    type: "drag",
    prompt:
      "A blockage in a coronary ____ can cause a heart attack.",
    options: ["vein", "artery", "bone", "joint"],
    correctIndex: 1
  },
  {
    id: "medical-q159",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-159",
    type: "drag",
    prompt:
      "Calcium is important for strong ____. ",
    options: ["organs", "bones", "tendons", "tissue"],
    correctIndex: 1
  },
  {
    id: "medical-q160",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-160",
    type: "drag",
    prompt:
      "The injury damaged soft ____ around the joint.",
    options: ["tissue", "bone", "skin", "organ"],
    correctIndex: 0
  },
  {
    id: "medical-q161",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-161",
    type: "drag",
    prompt:
      "The heart is a vital ____. ",
    options: ["joint", "organ", "tendon", "vein"],
    correctIndex: 1
  },
  {
    id: "medical-q162",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-162",
    type: "drag",
    prompt:
      "The ____ explained the risks and benefits of the surgery.",
    options: ["dietitian", "surgeon", "paramedic", "social worker"],
    correctIndex: 1
  },
  {
    id: "medical-q163",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-163",
    type: "drag",
    prompt:
      "You should see a family ____ if your symptoms continue.",
    options: ["physician", "nurse", "dietitian", "paramedic"],
    correctIndex: 0
  },
  {
    id: "medical-q164",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-164",
    type: "drag",
    prompt:
      "She was referred to a heart ____ for further testing.",
    options: ["surgeon", "specialist", "social worker", "paramedic"],
    correctIndex: 1
  },
  {
    id: "medical-q165",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-165",
    type: "drag",
    prompt:
      "A ____ will review your heart tests and discuss treatment.",
    options: ["cardiologist", "neurologist", "oncologist", "pediatrician"],
    correctIndex: 0
  },
  {
    id: "medical-q166",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-166",
    type: "drag",
    prompt:
      "The ____ assessed his seizures and ordered an EEG.",
    options: ["cardiologist", "neurologist", "dietitian", "social worker"],
    correctIndex: 1
  },
  {
    id: "medical-q167",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-167",
    type: "drag",
    prompt:
      "An ____ will discuss cancer treatment options with the patient.",
    options: ["oncologist", "paramedic", "physiotherapist", "family doctor"],
    correctIndex: 0
  },
  {
    id: "medical-q168",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-168",
    type: "drag",
    prompt:
      "The ____ examined the child and gave advice to the parents.",
    options: ["pediatrician", "neurologist", "oncologist", "surgeon"],
    correctIndex: 0
  },
  {
    id: "medical-q169",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-169",
    type: "drag",
    prompt:
      "The ____ adjusted his medication for depression.",
    options: ["dietitian", "psychiatrist", "cardiologist", "paramedic"],
    correctIndex: 1
  },
  {
    id: "medical-q170",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-170",
    type: "drag",
    prompt:
      "Your ____ will coordinate your care and refer you to specialists if needed.",
    options: [
      "family doctor",
      "emergency nurse",
      "paramedic",
      "social worker"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q171",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-171",
    type: "drag",
    prompt:
      "A ____ can assess, diagnose, and prescribe certain medications.",
    options: [
      "caregiver",
      "nurse practitioner",
      "resident doctor",
      "physiotherapist"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q172",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-172",
    type: "drag",
    prompt:
      "The ____ arrived within minutes and started emergency treatment.",
    options: ["dietitian", "paramedic", "pediatrician", "surgeon"],
    correctIndex: 1
  },
  {
    id: "medical-q173",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-173",
    type: "drag",
    prompt:
      "Her daughter is her main ____ at home.",
    options: ["paramedic", "caregiver", "surgeon", "oncologist"],
    correctIndex: 1
  },
  {
    id: "medical-q174",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-174",
    type: "drag",
    prompt:
      "The ____ will make the final decision about the treatment plan.",
    options: [
      "resident doctor",
      "attending physician",
      "home care nurse",
      "dietitian"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q175",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-175",
    type: "drag",
    prompt:
      "The ____ examined the patient first before the attending arrived.",
    options: [
      "resident doctor",
      "paramedic",
      "neurologist",
      "social worker"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q176",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-176",
    type: "drag",
    prompt:
      "A ____ will guide you through exercises to regain strength and mobility.",
    options: [
      "physiotherapist",
      "psychiatrist",
      "pediatrician",
      "dietitian"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q177",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-177",
    type: "drag",
    prompt:
      "The ____ helped adapt his home so he could live more independently.",
    options: [
      "occupational therapist",
      "speech therapist",
      "cardiologist",
      "paramedic"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q178",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-178",
    type: "drag",
    prompt:
      "After his stroke, a ____ helped him practice language and swallowing.",
    options: [
      "dietitian",
      "speech therapist",
      "neurologist",
      "surgeon"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q179",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-179",
    type: "drag",
    prompt:
      "The ____ created a meal plan to help manage his diabetes.",
    options: ["social worker", "dietitian", "paramedic", "family doctor"],
    correctIndex: 1
  },
  {
    id: "medical-q180",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-180",
    type: "drag",
    prompt:
      "A ____ helped them find community resources and financial support.",
    options: [
      "social worker",
      "surgeon",
      "nurse practitioner",
      "cardiologist"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q181",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-181",
    type: "drag",
    prompt:
      "A ____ visits him twice a week to change dressings and check vitals.",
    options: [
      "home care nurse",
      "resident doctor",
      "physiotherapist",
      "paramedic"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q182",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-182",
    type: "drag",
    prompt:
      "He went straight to the ____ after feeling severe chest pain.",
    options: [
      "rehabilitation center",
      "emergency department",
      "nursing home",
      "outpatient clinic"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q183",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-183",
    type: "drag",
    prompt:
      "The patient was taken to the ____ for surgery.",
    options: [
      "recovery room",
      "operating room",
      "waiting room",
      "long-term care unit"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q184",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-184",
    type: "drag",
    prompt:
      "After the operation, she stayed in the ____ until she woke up fully.",
    options: [
      "emergency department",
      "recovery room",
      "nursing home",
      "clinic"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q185",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-185",
    type: "drag",
    prompt:
      "Family members waited in the ____ during the surgery.",
    options: [
      "waiting room",
      "operating room",
      "rehabilitation center",
      "ward"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q186",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-186",
    type: "drag",
    prompt:
      "Follow-up visits are done at the ____. ",
    options: [
      "intensive care unit",
      "outpatient clinic",
      "nursing home",
      "recovery room"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q187",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-187",
    type: "drag",
    prompt:
      "____ clinics manage common illnesses and chronic conditions in the community.",
    options: [
      "Palliative care",
      "Primary care",
      "Long-term care",
      "Emergency"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q188",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-188",
    type: "drag",
    prompt:
      "____ focuses on comfort and quality of life for patients with serious illnesses.",
    options: [
      "Primary care",
      "Palliative care",
      "Rehabilitation",
      "Emergency care"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q189",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-189",
    type: "drag",
    prompt:
      "He was transferred to a ____ facility because he needed ongoing daily assistance.",
    options: [
      "long-term care",
      "recovery room",
      "emergency department",
      "outpatient clinic"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q190",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-190",
    type: "drag",
    prompt:
      "After his accident, he spent three weeks in a ____. ",
    options: [
      "rehabilitation center",
      "nursing home",
      "outpatient clinic",
      "operating room"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q191",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-191",
    type: "drag",
    prompt:
      "His grandmother lives in a ____, where staff help with daily activities.",
    options: [
      "rehabilitation center",
      "nursing home",
      "operating room",
      "emergency department"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q192",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-192",
    type: "drag",
    prompt:
      "A ____ was done to examine a small sample of tissue for cancer cells.",
    options: ["dialysis", "biopsy", "chemotherapy", "transfusion"],
    correctIndex: 1
  },
  {
    id: "medical-q193",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-193",
    type: "drag",
    prompt:
      "She is starting ____ next week to treat her cancer.",
    options: [
      "chemotherapy",
      "dialysis",
      "organ transplant",
      "radiation therapy"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q194",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-194",
    type: "drag",
    prompt:
      "____ uses high-energy rays to target and destroy tumor cells.",
    options: [
      "Dialysis",
      "Radiation therapy",
      "Blood transfusion",
      "Symptom relief"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q195",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-195",
    type: "drag",
    prompt:
      "Because his kidneys no longer work properly, he goes for ____ three times a week.",
    options: ["chemotherapy", "dialysis", "biopsy", "surgery"],
    correctIndex: 1
  },
  {
    id: "medical-q196",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-196",
    type: "drag",
    prompt:
      "She received an ____ and now has a healthy new kidney.",
    options: [
      "organ transplant",
      "X-ray",
      "lab result",
      "symptom relief"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q197",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-197",
    type: "drag",
    prompt:
      "After losing a lot of blood during surgery, a ____ was needed.",
    options: [
      "blood transfusion",
      "CT scan",
      "dialysis session",
      "biopsy"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q198",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-198",
    type: "drag",
    prompt:
      "The ____ to remove his appendix lasted about an hour.",
    options: ["surgery", "biopsy", "dialysis", "transfusion"],
    correctIndex: 0
  },
  {
    id: "medical-q199",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-199",
    type: "drag",
    prompt:
      "It is a ____ done under local anesthesia and you can go home the same day.",
    options: [
      "minor procedure",
      "organ transplant",
      "dialysis session",
      "chemotherapy cycle"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q200",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-200",
    type: "drag",
    prompt:
      "You will have a ____ in two weeks to check your progress.",
    options: [
      "blood transfusion",
      "follow-up appointment",
      "emergency visit",
      "CT scan"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q201",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-201",
    type: "drag",
    prompt:
      "This medication is for ____ only; it does not cure the disease.",
    options: [
      "infection control",
      "organ transplant",
      "symptom relief",
      "primary care"
    ],
    correctIndex: 2
  },
  {
    id: "medical-q202",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-202",
    type: "drag",
    prompt: "Care given to avoid disease before it appears is called ____. ",
    options: ["preventive care", "palliative care", "rehabilitation", "screening test"],
    correctIndex: 0
  },
  {
    id: "medical-q203",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-203",
    type: "drag",
    prompt: "She had a ____ for breast cancer last year.",
    options: ["screening test", "blood transfusion", "tumor", "rehabilitation"],
    correctIndex: 0
  },
  {
    id: "medical-q204",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-204",
    type: "drag",
    prompt: "We need to ____ his blood pressure closely.",
    options: ["sanitize", "wean off", "monitor", "taper off"],
    correctIndex: 2
  },
  {
    id: "medical-q205",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-205",
    type: "drag",
    prompt: "It is important to ____ exactly to avoid complications.",
    options: [
      "make a full recovery",
      "follow the treatment plan",
      "taper off",
      "start on a new drug"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q206",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-206",
    type: "drag",
    prompt: "With rest and physiotherapy, she is expected to ____. ",
    options: [
      "treatment failure",
      "deteriorate",
      "make a full recovery",
      "relapse"
    ],
    correctIndex: 2
  },
  {
    id: "medical-q207",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-207",
    type: "drag",
    prompt: "On a ____ from 0 to 10, how bad is your pain?",
    options: ["pain scale", "side effects profile", "blood sugar level", "baseline"],
    correctIndex: 0
  },
  {
    id: "medical-q208",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-208",
    type: "drag",
    prompt: "He has a high fever with ____, shaking uncontrollably.",
    options: ["chills", "fatigue", "weakness", "sweats"],
    correctIndex: 0
  },
  {
    id: "medical-q209",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-209",
    type: "drag",
    prompt: "Night ____ can be a sign of infection or hormone changes.",
    options: ["fatigue", "sweats", "loss of appetite", "confusion"],
    correctIndex: 1
  },
  {
    id: "medical-q210",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-210",
    type: "drag",
    prompt: "Chronic ____ makes it hard for her to work full-time.",
    options: ["sedation", "fatigue", "chills", "delirium"],
    correctIndex: 1
  },
  {
    id: "medical-q211",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-211",
    type: "drag",
    prompt: "He reports ____ in both legs when he tries to stand.",
    options: ["fatigue", "weakness", "delirium", "palpitations"],
    correctIndex: 1
  },
  {
    id: "medical-q212",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-212",
    type: "drag",
    prompt: "____ can accompany many illnesses and lead to weight loss.",
    options: [
      "loss of appetite",
      "short-term memory",
      "incubation period",
      "treatment failure"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q213",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-213",
    type: "drag",
    prompt: "After the stroke, her ____ was affected; she forgets recent events.",
    options: ["mental status", "short-term memory", "baseline", "symptom onset"],
    correctIndex: 1
  },
  {
    id: "medical-q214",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-214",
    type: "drag",
    prompt: "Sudden ____ and disorientation can be a medical emergency.",
    options: ["confusion", "bed sore", "catheter", "tumor"],
    correctIndex: 0
  },
  {
    id: "medical-q215",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-215",
    type: "drag",
    prompt: "The elderly patient developed ____ at night and became very agitated.",
    options: ["relapse", "delirium", "fatigue", "remission period"],
    correctIndex: 1
  },
  {
    id: "medical-q216",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-216",
    type: "drag",
    prompt: "Her ____ changed after surgery; she became less responsive.",
    options: ["mental status", "baseline", "exposure", "treatment plan"],
    correctIndex: 0
  },
  {
    id: "medical-q217",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-217",
    type: "drag",
    prompt: "We compare new symptoms with his ____ to see what is different.",
    options: ["baseline", "remission period", "dose adjustment", "tumor"],
    correctIndex: 0
  },
  {
    id: "medical-q218",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-218",
    type: "drag",
    prompt: "After fluids and oxygen, the team managed to ____ the patient.",
    options: ["deteriorate", "wean off", "stabilize", "relapse"],
    correctIndex: 2
  },
  {
    id: "medical-q219",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-219",
    type: "drag",
    prompt: "Her condition began to ____ overnight, so they called the doctor.",
    options: ["improve", "stabilize", "deteriorate", "remit"],
    correctIndex: 2
  },
  {
    id: "medical-q220",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-220",
    type: "drag",
    prompt: "With the new inhaler, his breathing has started to ____. ",
    options: ["deteriorate", "improve", "relapse", "taper off"],
    correctIndex: 1
  },
  {
    id: "medical-q221",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-221",
    type: "drag",
    prompt: "____ must be controlled to reduce the risk of stroke.",
    options: [
      "High blood pressure",
      "Low blood pressure",
      "Blood sample",
      "Incubation period"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q222",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-222",
    type: "drag",
    prompt: "____ can cause dizziness or fainting when standing up.",
    options: [
      "High blood pressure",
      "Low blood pressure",
      "Rapid heartbeat",
      "Hand hygiene"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q223",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-223",
    type: "drag",
    prompt: "We monitor her ____ before meals and at bedtime.",
    options: [
      "oxygen saturation",
      "blood sugar level",
      "incubation period",
      "tumor size"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q224",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-224",
    type: "drag",
    prompt: "His ____ dropped suddenly, so they applied oxygen.",
    options: [
      "oxygen saturation",
      "side effects profile",
      "short-term memory",
      "hand hygiene"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q225",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-225",
    type: "drag",
    prompt: "She complained of a ____ and felt her heart racing.",
    options: ["rapid heartbeat", "bed sore", "relapse", "mass"],
    correctIndex: 0
  },
  {
    id: "medical-q226",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-226",
    type: "drag",
    prompt: "An ____ often requires ECG monitoring and cardiology review.",
    options: [
      "irregular heartbeat",
      "incubation period",
      "mobility aid",
      "catheter"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q227",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-227",
    type: "drag",
    prompt: "He feels ____ when he exercises and drinks too much coffee.",
    options: ["palpitations", "bed sores", "chills", "lesions"],
    correctIndex: 0
  },
  {
    id: "medical-q228",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-228",
    type: "drag",
    prompt: "He is ____; he becomes breathless when climbing stairs.",
    options: [
      "tapering off",
      "short of breath on exertion",
      "in remission",
      "under sedation"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q229",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-229",
    type: "drag",
    prompt: "Diabetes and COPD are each an example of a ____. ",
    options: ["acute episode", "chronic condition", "metastasis", "baseline"],
    correctIndex: 1
  },
  {
    id: "medical-q230",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-230",
    type: "drag",
    prompt: "He had an ____ of shortness of breath and needed a nebulizer.",
    options: [
      "acute episode",
      "incubation period",
      "treatment failure",
      "remission period"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q231",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-231",
    type: "drag",
    prompt: "We discussed all the ____ so she could choose what is best.",
    options: [
      "safety precautions",
      "treatment options",
      "side effects profiles",
      "mobility aids"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q232",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-232",
    type: "drag",
    prompt: "This drug has a better ____ than the older medication.",
    options: [
      "pain scale",
      "side effects profile",
      "incubation period",
      "tumor mass"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q233",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-233",
    type: "drag",
    prompt: "Palliative care focuses on comfort and ____. ",
    options: [
      "symptom management",
      "incubation periods",
      "exposure history",
      "tumor removal"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q234",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-234",
    type: "drag",
    prompt: "A ____ was necessary because the initial dose was too strong.",
    options: [
      "dose adjustment",
      "relapse",
      "treatment failure",
      "mass biopsy"
    ],
    correctIndex: 0
  },
  
  {
    id: "medical-q236",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-236",
    type: "drag",
    prompt: "The doctor will ____ the steroids to avoid withdrawal symptoms.",
    options: [
      "start on",
      "wean off",
      "taper off",
      "respond well to"
    ],
    correctIndex: 2
  },
  {
    id: "medical-q237",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-237",
    type: "drag",
    prompt: "She was ____ a new blood pressure pill last month.",
    options: ["started on", "tapered off", "weaned off", "relapsed from"],
    correctIndex: 0
  },
  {
    id: "medical-q238",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-238",
    type: "drag",
    prompt: "So far, he seems to ____, and his symptoms are decreasing.",
    options: [
      "treatment failure",
      "respond well to treatment",
      "have an acute episode",
      "deteriorate"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q239",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-239",
    type: "drag",
    prompt: "They considered changing drugs after ____. ",
    options: [
      "symptom onset",
      "treatment failure",
      "baseline improvement",
      "dose adjustment"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q240",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-240",
    type: "drag",
    prompt: "The team created an individualized ____. ",
    options: [
      "treatment plan",
      "safety precaution",
      "mobility aid",
      "incubation period"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q241",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-241",
    type: "drag",
    prompt: "Always follow ____ when handling needles and sharps.",
    options: [
      "incubation periods",
      "safety precautions",
      "tumor staging",
      "dose adjustments"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q242",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-242",
    type: "drag",
    prompt: "____ apply to all patients, regardless of diagnosis.",
    options: [
      "Standard precautions",
      "Airborne precautions",
      "Contact precautions",
      "Palliative care"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q243",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-243",
    type: "drag",
    prompt: "Good ____ is essential to prevent infection transmission.",
    options: ["hand hygiene", "tumor staging", "bed sores", "relapse"],
    correctIndex: 0
  },
  {
    id: "medical-q244",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-244",
    type: "drag",
    prompt: "Wear ____ when entering isolation rooms to protect yourself.",
    options: [
      "hand sanitizer",
      "personal protective equipment",
      "mobility aids",
      "bed sores"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q245",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-245",
    type: "drag",
    prompt: "She wore a mask and a ____ while caring for the patient.",
    options: ["walker", "face shield", "cane", "prosthetic limb"],
    correctIndex: 1
  },
  {
    id: "medical-q246",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-246",
    type: "drag",
    prompt: "Put on a ____ before entering the room for contact precautions.",
    options: ["gown", "wheelchair", "crutches", "catheter"],
    correctIndex: 0
  },
  {
    id: "medical-q247",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-247",
    type: "drag",
    prompt: "Always remove your ____ and wash your hands before leaving.",
    options: ["crutches", "gloves", "walker", "cane"],
    correctIndex: 1
  },
  {
    id: "medical-q248",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-248",
    type: "drag",
    prompt: "The patient is in ____ due to a high infection risk.",
    options: ["rehabilitation", "isolation", "remission", "treatment failure"],
    correctIndex: 1
  },
  {
    id: "medical-q249",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-249",
    type: "drag",
    prompt: "Use ____ for organisms spread by direct touch.",
    options: [
      "airborne precautions",
      "contact precautions",
      "quarantine",
      "speech therapy"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q250",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-250",
    type: "drag",
    prompt: "____ are required for diseases such as tuberculosis.",
    options: [
      "Standard precautions",
      "Contact precautions",
      "Airborne precautions",
      "Symptom management"
    ],
    correctIndex: 2
  },
  {
    id: "medical-q251",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-251",
    type: "drag",
    prompt: "The patient was moved to an ____ due to their infectious disease.",
    options: [
      "isolation room",
      "operating room",
      "rehabilitation center",
      "waiting room"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q252",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-252",
    type: "drag",
    prompt: "They placed the unit in ____ after several positive cases.",
    options: ["remission", "quarantine", "rehabilitation", "palliative care"],
    correctIndex: 1
  },
  {
    id: "medical-q253",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-253",
    type: "drag",
    prompt: "The hospital is managing a flu ____. ",
    options: ["outbreak", "relapse", "tumor", "catheter"],
    correctIndex: 0
  },
  {
    id: "medical-q254",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-254",
    type: "drag",
    prompt: "Staff must ____ all surfaces regularly to reduce infection risk.",
    options: ["sterilize", "sanitize", "relapse", "taper"],
    correctIndex: 1
  },
  {
    id: "medical-q255",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-255",
    type: "drag",
    prompt: "Surgical instruments are ____ before each operation.",
    options: ["sanitized", "sterilized", "relapsed", "weaned"],
    correctIndex: 1
  },
  {
    id: "medical-q256",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-256",
    type: "drag",
    prompt: "Use ____ before entering or leaving the patient’s room.",
    options: ["tumor mass", "hand sanitizer", "speech therapy", "prosthetic limb"],
    correctIndex: 1
  },
  {
    id: "medical-q257",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-257",
    type: "drag",
    prompt: "He had ____ to a confirmed case of measles.",
    options: ["exposure", "remission", "quarantine", "bed sore"],
    correctIndex: 0
  },
  {
    id: "medical-q258",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-258",
    type: "drag",
    prompt: "Record the date of ____ for accurate contact tracing.",
    options: [
      "symptom onset",
      "treatment failure",
      "tumor removal",
      "dose adjustment"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q259",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-259",
    type: "drag",
    prompt: "The virus ____ rate is high in crowded places.",
    options: ["relapse", "transmission", "remission", "exposure"],
    correctIndex: 1
  },
  {
    id: "medical-q260",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-260",
    type: "drag",
    prompt: "The ____ can vary from 2 to 14 days after exposure.",
    options: [
      "remission period",
      "incubation period",
      "rehabilitation time",
      "treatment plan"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q261",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-261",
    type: "drag",
    prompt: "They collected a ____ for testing in the lab.",
    options: ["blood sample", "mass", "bed sore", "prosthetic limb"],
    correctIndex: 0
  },
  {
    id: "medical-q262",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-262",
    type: "drag",
    prompt: "The nurse performed a nasal ____. ",
    options: ["biopsy", "blood sample", "swab test", "catheter insertion"],
    correctIndex: 2
  },
  {
    id: "medical-q263",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-263",
    type: "drag",
    prompt: "A ____ was required to confirm the diagnosis.",
    options: ["genetic testing", "biopsy", "blood transfusion", "dialysis"],
    correctIndex: 1
  },
  {
    id: "medical-q264",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-264",
    type: "drag",
    prompt: "____ can detect hereditary diseases before symptoms appear.",
    options: [
      "Genetic testing",
      "Speech therapy",
      "Rehabilitation",
      "Quarantine"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q265",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-265",
    type: "drag",
    prompt: "The patient needed a ____ after losing a lot of blood.",
    options: [
      "blood transfusion",
      "swab test",
      "bed sore treatment",
      "cane"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q266",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-266",
    type: "drag",
    prompt: "He is registered as an ____, in case his organs can help others.",
    options: [
      "organ donor",
      "organ transplant",
      "tumor",
      "mobility aid"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q267",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-267",
    type: "drag",
    prompt: "She is waiting for an ____ because her kidneys have failed.",
    options: [
      "organ donor",
      "organ transplant",
      "incubation period",
      "physical therapy"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q268",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-268",
    type: "drag",
    prompt: "He goes for ____ three times a week because his kidneys don’t work.",
    options: ["dialysis", "chemotherapy", "radiation therapy", "rehabilitation"],
    correctIndex: 0
  },
  {
    id: "medical-q269",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-269",
    type: "drag",
    prompt: "____ can cause hair loss and nausea.",
    options: ["Dialysis", "Chemotherapy", "Speech therapy", "Quarantine"],
    correctIndex: 1
  },
  {
    id: "medical-q270",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-270",
    type: "drag",
    prompt: "____ is part of her cancer treatment plan and uses high-energy rays.",
    options: [
      "Radiation therapy",
      "Physical therapy",
      "Palliative care",
      "Bed sore prevention"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q271",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-271",
    type: "drag",
    prompt: "The ____ was removed successfully during surgery.",
    options: ["tumor", "bed sore", "walker", "prosthetic limb"],
    correctIndex: 0
  },
  {
    id: "medical-q272",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-272",
    type: "drag",
    prompt: "The mass was ____, meaning it was not cancerous.",
    options: ["malignant", "benign", "invasive", "metastatic"],
    correctIndex: 1
  },
  {
    id: "medical-q273",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-273",
    type: "drag",
    prompt: "The tumor was ____, so more aggressive treatment was needed.",
    options: ["benign", "malignant", "sanitized", "sterile"],
    correctIndex: 1
  },
  {
    id: "medical-q274",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-274",
    type: "drag",
    prompt: "They found a ____ on the scan that needed further tests.",
    options: ["mass", "bed sore", "walker", "crutch"],
    correctIndex: 0
  },
  {
    id: "medical-q275",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-275",
    type: "drag",
    prompt: "The skin ____ was biopsied to check for cancer.",
    options: ["tumor", "lesion", "catheter", "quarantine"],
    correctIndex: 1
  },
  {
    id: "medical-q276",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-276",
    type: "drag",
    prompt: "The cancer is highly ____, spreading quickly into nearby tissue.",
    options: ["benign", "invasive", "baseline", "relapsed"],
    correctIndex: 1
  },
  {
    id: "medical-q277",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-277",
    type: "drag",
    prompt: "There is no sign of ____, meaning the cancer has not spread.",
    options: ["incubation", "remission", "metastasis", "treatment failure"],
    correctIndex: 2
  },
  {
    id: "medical-q278",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-278",
    type: "drag",
    prompt: "She has been in a long ____, with no signs of active cancer.",
    options: [
      "relapse",
      "remission period",
      "treatment failure",
      "incubation period"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q279",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-279",
    type: "drag",
    prompt: "The patient had a ____ last month after stopping treatment.",
    options: ["remission", "relapse", "rehabilitation", "quarantine"],
    correctIndex: 1
  },
  {
    id: "medical-q280",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-280",
    type: "drag",
    prompt: "____ focuses on comfort and quality of life, not cure.",
    options: [
      "Preventive care",
      "Palliative care",
      "Screening tests",
      "Genetic testing"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q281",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-281",
    type: "drag",
    prompt: "He requires ____ after the stroke to help with speaking.",
    options: ["speech therapy", "dialysis", "chemotherapy", "quarantine"],
    correctIndex: 0
  },
  {
    id: "medical-q282",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-282",
    type: "drag",
    prompt: "____ helps with mobility and muscle strength.",
    options: [
      "Physical therapy",
      "Speech therapy",
      "Hand hygiene",
      "Quarantine"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q283",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-283",
    type: "drag",
    prompt: "____ helps people manage daily tasks like dressing and cooking.",
    options: [
      "Occupational therapy",
      "Physical therapy",
      "Chemotherapy",
      "Radiation therapy"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q284",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-284",
    type: "drag",
    prompt: "He is in ____ after knee surgery to regain his strength.",
    options: ["rehabilitation", "quarantine", "remission", "dialysis"],
    correctIndex: 0
  },
  {
    id: "medical-q285",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-285",
    type: "drag",
    prompt: "A walker is a common ____. ",
    options: ["tumor", "mobility aid", "catheter", "bed sore"],
    correctIndex: 1
  },
  {
    id: "medical-q286",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-286",
    type: "drag",
    prompt: "He uses a ____ for walking short distances.",
    options: ["cane", "catheter", "face shield", "gown"],
    correctIndex: 0
  },
  {
    id: "medical-q287",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-287",
    type: "drag",
    prompt: "She received a ____ after her hip surgery to help her walk.",
    options: ["walker", "wheelchair", "cane", "prosthetic limb"],
    correctIndex: 0
  },
  {
    id: "medical-q288",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-288",
    type: "drag",
    prompt: "The patient uses a ____ because he cannot walk.",
    options: ["wheelchair", "gown", "catheter", "hand sanitizer"],
    correctIndex: 0
  },
  {
    id: "medical-q289",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-289",
    type: "drag",
    prompt: "He was fitted with a ____ after his leg amputation.",
    options: ["prosthetic limb", "walker", "bed sore", "swab test"],
    correctIndex: 0
  },
  {
    id: "medical-q290",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-290",
    type: "drag",
    prompt: "He walks with ____ after the injury.",
    options: ["crutches", "face shields", "tumors", "catheters"],
    correctIndex: 0
  },
  {
    id: "medical-q291",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-291",
    type: "drag",
    prompt: "Repositioning prevents ____, especially in bed-bound patients.",
    options: ["bed sores", "relapses", "tumors", "quarantine"],
    correctIndex: 0
  },
  {
    id: "medical-q292",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-292",
    type: "drag",
    prompt: "The nurse inserted a urinary ____. ",
    options: ["catheter", "walker", "cane", "crutch"],
    correctIndex: 0
  },
  {
    id: "medical-q293",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-293",
    type: "drag",
    prompt: "The surgical ____ was removed once the fluid stopped.",
    options: ["drain", "bed sore", "mass", "prosthetic limb"],
    correctIndex: 0
  },
  {
    id: "medical-q294",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-294",
    type: "drag",
    prompt: "He received light ____ for the procedure so he would relax.",
    options: ["sedation", "rehabilitation", "quarantine", "remission"],
    correctIndex: 0
  },
  {
    id: "medical-q295",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-295",
    type: "drag",
    prompt: "Because of the complexity of the surgery, ____ was required.",
    options: [
      "local anesthesia",
      "general anesthesia",
      "speech therapy",
      "hand hygiene"
    ],
    correctIndex: 1
  },
  {
    id: "medical-q296",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-296",
    type: "drag",
    prompt: "The dentist used ____ so the patient wouldn’t feel pain in one area.",
    options: ["general anesthesia", "local anesthesia", "quarantine", "rehabilitation"],
    correctIndex: 1
  },
  {
    id: "medical-q297",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-297",
    type: "drag",
    prompt: "It was a minor ____, done in less than an hour.",
    options: [
      "surgical procedure",
      "bed sore",
      "mobility aid",
      "speech therapy"
    ],
    correctIndex: 0
  },
  {
    id: "medical-q298",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-298",
    type: "drag",
    prompt: "She is in the ____ unit, getting ready for surgery.",
    options: ["post-op", "pre-op", "rehabilitation", "quarantine"],
    correctIndex: 1
  },
  {
    id: "medical-q299",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-299",
    type: "drag",
    prompt: "Pain is common in the ____ period after surgery.",
    options: ["pre-op", "post-op", "rehabilitation", "incubation"],
    correctIndex: 1
  },
  {
    id: "medical-q300",
    categoryId: MEDICAL_CATEGORY_ID,
    wordId: "medical-300",
    type: "drag",
    prompt: "A ____ is scheduled in two weeks to check his progress.",
    options: [
      "medical follow-up",
      "tumor biopsy",
      "quarantine period",
      "speech therapy"
    ],
    correctIndex: 0
  },
//   end of medical questions


//Tech category questions can go here
{
    id: 'tech-q1',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-1',
    type: 'drag',
    prompt: 'There was a small ____ in the system yesterday.',
    options: ['battery life', 'server', 'glitch', 'USB drive'],
    correctIndex: 2
  },
  {
    id: 'tech-q2',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-2',
    type: 'drag',
    prompt: 'You need to ____ to access your account.',
    options: ['log in', 'log out', 'scroll', 'install'],
    correctIndex: 0
  },
  {
    id: 'tech-q3',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-3',
    type: 'drag',
    prompt: 'On a public computer, you should always ____ when you are done.',
    options: ['swipe', 'log out', 'screenshot', 'reboot'],
    correctIndex: 1
  },
  {
    id: 'tech-q4',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-4',
    type: 'drag',
    prompt: 'You must ____ before you can create a new profile on that app.',
    options: ['click', 'sign up', 'download', 'debug'],
    correctIndex: 1
  },
  {
    id: 'tech-q5',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-5',
    type: 'drag',
    prompt: 'Please ____ to continue using the service.',
    options: ['battery life', 'sign in', 'USB drive', 'factory reset'],
    correctIndex: 1
  },
  {
    id: 'tech-q6',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-6',
    type: 'drag',
    prompt: 'I need to ____ my resume to the website.',
    options: ['download', 'upload', 'scroll', 'reboot'],
    correctIndex: 1
  },
  {
    id: 'tech-q7',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-7',
    type: 'drag',
    prompt: 'He ____ the file from the cloud.',
    options: ['uploaded', 'downloaded', 'scrolled', 'paired'],
    correctIndex: 1
  },
  {
    id: 'tech-q8',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-8',
    type: 'drag',
    prompt: 'Chrome is my favorite ____. ',
    options: ['browser', 'plugin', 'API', 'router'],
    correctIndex: 0
  },
  {
    id: 'tech-q9',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-9',
    type: 'drag',
    prompt: 'Google is the most popular ____. ',
    options: ['search engine', 'hard drive', 'QR code', 'RAM'],
    correctIndex: 0
  },
  {
    id: 'tech-q10',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-10',
    type: 'drag',
    prompt: 'We ____ the movie online last night.',
    options: ['crashed', 'streamed', 'compressed', 'swiped'],
    correctIndex: 1
  },

  {
    id: 'tech-q11',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-11',
    type: 'drag',
    prompt: 'The video keeps ____, so it’s hard to watch.',
    options: ['buffering', 'signing in', 'going viral', 'pairing'],
    correctIndex: 0
  },
  {
    id: 'tech-q12',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-12',
    type: 'drag',
    prompt: 'Streaming takes a lot of ____. ',
    options: ['battery life', 'bandwidth', 'cache', 'brightness'],
    correctIndex: 1
  },
  {
    id: 'tech-q13',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-13',
    type: 'drag',
    prompt: 'The ____ signal is very weak in this room.',
    options: ['Wi-Fi', 'SQL', 'USB drive', 'barcode'],
    correctIndex: 0
  },
  {
    id: 'tech-q14',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-14',
    type: 'drag',
    prompt: 'Try restarting the ____ if the internet is not working.',
    options: ['router', 'battery', 'voice assistant', 'app'],
    correctIndex: 0
  },
  {
    id: 'tech-q15',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-15',
    type: 'drag',
    prompt: 'The ____ is down right now, so no one can access the site.',
    options: ['USB drive', 'server', 'Bluetooth', 'QR code'],
    correctIndex: 1
  },
  {
    id: 'tech-q16',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-16',
    type: 'drag',
    prompt: 'My photos are saved in ____. ',
    options: ['dark mode', 'cloud storage', 'RAM', 'barcode'],
    correctIndex: 1
  },
  {
    id: 'tech-q17',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-17',
    type: 'drag',
    prompt: 'The company suffered a major ____, and user data was exposed.',
    options: ['data backup', 'data breach', 'battery life', 'crash'],
    correctIndex: 1
  },
  {
    id: 'tech-q18',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-18',
    type: 'drag',
    prompt: 'Always perform a ____ before updating the system.',
    options: ['data breach', 'USB drive', 'data backup', 'shutdown'],
    correctIndex: 2
  },
  {
    id: 'tech-q19',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-19',
    type: 'drag',
    prompt: 'Your phone needs a software ____. ',
    options: ['backup', 'update', 'scroll', 'plug-in'],
    correctIndex: 1
  },
  {
    id: 'tech-q20',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-20',
    type: 'drag',
    prompt: 'I ____ my laptop last week so it runs faster now.',
    options: ['debugged', 'signed in', 'upgraded', 'blocked'],
    correctIndex: 2
  },

  {
    id: 'tech-q21',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-21',
    type: 'drag',
    prompt: 'Everything you post online becomes part of your ____. ',
    options: ['Bluetooth', 'digital footprint', 'USB drive', 'framework'],
    correctIndex: 1
  },
  {
    id: 'tech-q22',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-22',
    type: 'drag',
    prompt: '____ is essential for keeping personal data safe online.',
    options: ['cybersecurity', 'dark mode', 'battery life', 'scrolling'],
    correctIndex: 0
  },
  {
    id: 'tech-q23',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-23',
    type: 'drag',
    prompt: 'A ____ helps protect your network from attacks.',
    options: ['factory reset', 'firewall', 'screenshot', 'QR code'],
    correctIndex: 1
  },
  {
    id: 'tech-q24',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-24',
    type: 'drag',
    prompt: 'Install an ____ program to protect your computer.',
    options: ['RAM', 'firewall', 'antivirus', 'cache'],
    correctIndex: 2
  },
  {
    id: 'tech-q25',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-25',
    type: 'drag',
    prompt: 'The computer was infected with ____. ',
    options: ['malware', 'brightness', 'Bluetooth', 'router'],
    correctIndex: 0
  },
  {
    id: 'tech-q26',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-26',
    type: 'drag',
    prompt: 'Be careful of ____ emails that try to steal your information.',
    options: ['phishing', 'coding', 'battery', 'scrolling'],
    correctIndex: 0
  },
  {
    id: 'tech-q27',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-27',
    type: 'drag',
    prompt: 'My inbox is full of ____. ',
    options: ['spam', 'RAM', 'cloud storage', 'plugins'],
    correctIndex: 0
  },
  {
    id: 'tech-q28',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-28',
    type: 'drag',
    prompt: 'If someone is harassing you online, you can ____ them.',
    options: ['freeze', 'restore', 'block someone', 'extract a file'],
    correctIndex: 2
  },
  {
    id: 'tech-q29',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-29',
    type: 'drag',
    prompt: 'Users can ____ inappropriate accounts on the platform.',
    options: ['install', 'report an account', 'log out', 'pair'],
    correctIndex: 1
  },
  {
    id: 'tech-q30',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-30',
    type: 'drag',
    prompt: 'She works in ____ marketing.',
    options: ['storage', 'battery life', 'social media', 'Bluetooth'],
    correctIndex: 2
  },

  {
    id: 'tech-q31',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-31',
    type: 'drag',
    prompt: 'The video ____ and got millions of views overnight.',
    options: ['went viral', 'froze', 'rebooted', 'uninstalled'],
    correctIndex: 0
  },
  {
    id: 'tech-q32',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-32',
    type: 'drag',
    prompt: 'He is a full-time ____, posting videos and photos every day.',
    options: ['AI model', 'content creator', 'router', 'coder'],
    correctIndex: 1
  },
  {
    id: 'tech-q33',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-33',
    type: 'drag',
    prompt: 'I scrolled through my ____ for an hour.',
    options: ['feed', 'router', 'SSD', 'barcode'],
    correctIndex: 0
  },
  {
    id: 'tech-q34',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-34',
    type: 'drag',
    prompt: 'I keep ____ on TikTok instead of sleeping.',
    options: ['scrolling', 'compressing files', 'pairing devices', 'factory resetting'],
    correctIndex: 0
  },
  {
    id: 'tech-q35',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-35',
    type: 'drag',
    prompt: '____ left to delete the message.',
    options: ['Click', 'Swipe', 'Tap', 'Install'],
    correctIndex: 1
  },
  {
    id: 'tech-q36',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-36',
    type: 'drag',
    prompt: '____ the button to continue.',
    options: ['Tap', 'Scroll', 'Freeze', 'Uninstall'],
    correctIndex: 0
  },
  {
    id: 'tech-q37',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-37',
    type: 'drag',
    prompt: '____ the icon to open the app.',
    options: ['Uninstall', 'Swipe', 'Tap', 'Reboot'],
    correctIndex: 2
  },
  {
    id: 'tech-q38',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-38',
    type: 'drag',
    prompt: 'I got a new ____ from that app.',
    options: ['battery life', 'notification', 'RAM', 'hard drive'],
    correctIndex: 1
  },
  {
    id: 'tech-q39',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-39',
    type: 'drag',
    prompt: 'The app sent me a ____ on my phone.',
    options: ['virtual machine', 'push notification', 'barcode', 'router'],
    correctIndex: 1
  },
  {
    id: 'tech-q40',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-40',
    type: 'drag',
    prompt: 'Go to ____ to change your password.',
    options: ['settings', 'USB drive', 'face recognition', 'algorithm'],
    correctIndex: 0
  },

  {
    id: 'tech-q41',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-41',
    type: 'drag',
    prompt: 'Adjust your ____ regularly to control who sees your posts.',
    options: ['battery life', 'privacy settings', 'Bluetooth', 'cache'],
    correctIndex: 1
  },
  {
    id: 'tech-q42',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-42',
    type: 'drag',
    prompt: '____ dark mode if the screen is too bright at night.',
    options: ['Disable', 'Enable', 'Uninstall', 'Backup'],
    correctIndex: 1
  },
  {
    id: 'tech-q43',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-43',
    type: 'drag',
    prompt: 'You can ____ location tracking in your phone settings.',
    options: ['compress', 'disable', 'scroll', 'install'],
    correctIndex: 1
  },
  {
    id: 'tech-q44',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-44',
    type: 'drag',
    prompt: 'I ____ my headphones with my phone.',
    options: ['paired', 'logged out', 'froze', 'uninstalled'],
    correctIndex: 0
  },
  {
    id: 'tech-q45',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-45',
    type: 'drag',
    prompt: 'The phone won’t ____ to the TV.',
    options: ['scroll', 'connect', 'screenshot', 'extract'],
    correctIndex: 1
  },
  {
    id: 'tech-q46',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-46',
    type: 'drag',
    prompt: 'My files are ____ automatically to the cloud.',
    options: ['freezing', 'syncing', 'crashing', 'compressing'],
    correctIndex: 1
  },
  {
    id: 'tech-q47',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-47',
    type: 'drag',
    prompt: 'Your ____ is not compatible with this app.',
    options: ['device', 'battery life', 'Wi-Fi', 'barcode'],
    correctIndex: 0
  },
  {
    id: 'tech-q48',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-48',
    type: 'drag',
    prompt: 'Your ____ is almost full. You need to delete some files.',
    options: ['framework', 'storage', 'algorithm', 'router'],
    correctIndex: 1
  },
  {
    id: 'tech-q49',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-49',
    type: 'drag',
    prompt: 'Clear your ____ for better browser performance.',
    options: ['QR code', 'cache', 'USB drive', 'power bank'],
    correctIndex: 1
  },
  {
    id: 'tech-q50',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-50',
    type: 'drag',
    prompt: 'I took a ____ of the error message.',
    options: ['battery life', 'stream', 'screenshot', 'debug'],
    correctIndex: 2
  },

  {
    id: 'tech-q51',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-51',
    type: 'drag',
    prompt: 'The ____ needs an update.',
    options: ['software', 'USB drive', 'Bluetooth', 'RAM'],
    correctIndex: 0
  },
  {
    id: 'tech-q52',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-52',
    type: 'drag',
    prompt: 'The ____ is damaged and must be replaced.',
    options: ['software', 'hardware', 'QR code', 'battery life'],
    correctIndex: 1
  },
  {
    id: 'tech-q53',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-53',
    type: 'drag',
    prompt: 'I downloaded a new fitness ____. ',
    options: ['RAM', 'app', 'cache', 'router'],
    correctIndex: 1
  },
  {
    id: 'tech-q54',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-54',
    type: 'drag',
    prompt: 'My ____ is outdated, so I can’t run the latest apps.',
    options: ['factory reset', 'operating system', 'USB drive', 'barcode'],
    correctIndex: 1
  },
  {
    id: 'tech-q55',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-55',
    type: 'drag',
    prompt: '____ is changing many industries.',
    options: ['AI (artificial intelligence)', 'USB drive', 'battery life', 'Bluetooth'],
    correctIndex: 0
  },
  {
    id: 'tech-q56',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-56',
    type: 'drag',
    prompt: 'The ____ recommends videos you might like.',
    options: ['router', 'algorithm', 'hard drive', 'QR code'],
    correctIndex: 1
  },
  {
    id: 'tech-q57',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-57',
    type: 'drag',
    prompt: 'I learned how to write ____. ',
    options: ['code', 'plug-ins', 'RAM', 'Wi-Fi'],
    correctIndex: 0
  },
  {
    id: 'tech-q58',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-58',
    type: 'drag',
    prompt: 'She works as a ____, building apps and websites.',
    options: ['programmer', 'voice assistant', 'router', 'SSD'],
    correctIndex: 0
  },
  {
    id: 'tech-q59',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-59',
    type: 'drag',
    prompt: 'I spent hours trying to ____ the app.',
    options: ['uninstall', 'debug', 'stream', 'swipe'],
    correctIndex: 1
  },
  {
    id: 'tech-q60',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-60',
    type: 'drag',
    prompt: 'There is a ____ on line 22.',
    options: ['USB drive', 'coding error', 'battery life', 'voice assistant'],
    correctIndex: 1
  },

  {
    id: 'tech-q61',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-61',
    type: 'drag',
    prompt: 'The ____ improved its accuracy over time.',
    options: ['AI model', 'router', 'SSD', 'USB drive'],
    correctIndex: 0
  },
  {
    id: 'tech-q62',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-62',
    type: 'drag',
    prompt: 'The company uses ____ to save time on repetitive tasks.',
    options: ['automation', 'cache', 'RAM', 'barcode'],
    correctIndex: 0
  },
  {
    id: 'tech-q63',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-63',
    type: 'drag',
    prompt: 'I installed Linux on a ____. ',
    options: ['virtual machine', 'USB drive', 'battery', 'router'],
    correctIndex: 0
  },
  {
    id: 'tech-q64',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-64',
    type: 'drag',
    prompt: 'The ____ contains millions of records.',
    options: ['database', 'Bluetooth', 'cache', 'algorithm'],
    correctIndex: 0
  },
  {
    id: 'tech-q65',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-65',
    type: 'drag',
    prompt: 'I learned ____ for data analysis.',
    options: ['SQL', 'Wi-Fi', 'Bluetooth', 'battery life'],
    correctIndex: 0
  },
  {
    id: 'tech-q66',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-66',
    type: 'drag',
    prompt: 'She works on the ____ of the website, focusing on the user interface.',
    options: ['backend', 'framework', 'frontend', 'hardware'],
    correctIndex: 2
  },
  {
    id: 'tech-q67',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-67',
    type: 'drag',
    prompt: 'He manages the ____ systems and servers.',
    options: ['frontend', 'backend', 'brightness', 'feed'],
    correctIndex: 1
  },
  {
    id: 'tech-q68',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-68',
    type: 'drag',
    prompt: 'React is a popular JavaScript ____. ',
    options: ['cache', 'framework', 'router', 'SSD'],
    correctIndex: 1
  },
  {
    id: 'tech-q69',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-69',
    type: 'drag',
    prompt: 'The app connects to the ____. ',
    options: ['API', 'RAM', 'battery', 'router'],
    correctIndex: 0
  },
  {
    id: 'tech-q70',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-70',
    type: 'drag',
    prompt: 'I added a new ____ to my site.',
    options: ['plugin', 'Wi-Fi', 'dark mode', 'USB drive'],
    correctIndex: 0
  },

  {
    id: 'tech-q71',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-71',
    type: 'drag',
    prompt: 'Try to ____ your device if it stops working.',
    options: ['stream', 'reboot', 'scroll', 'compress'],
    correctIndex: 1
  },
  {
    id: 'tech-q72',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-72',
    type: 'drag',
    prompt: 'Please ____ the computer properly before leaving.',
    options: ['shutdown', 'install', 'pair', 'uninstall'],
    correctIndex: 0
  },
  {
    id: 'tech-q73',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-73',
    type: 'drag',
    prompt: 'The app ____ unexpectedly while I was using it.',
    options: ['froze', 'crashed', 'installed', 'synced'],
    correctIndex: 1
  },
  {
    id: 'tech-q74',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-74',
    type: 'drag',
    prompt: 'My laptop ____ again and I had to restart it.',
    options: ['crashed', 'froze', 'rebooted', 'streamed'],
    correctIndex: 1
  },
  {
    id: 'tech-q75',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-75',
    type: 'drag',
    prompt: 'I got an ____ when opening the file.',
    options: ['error message', 'AI model', 'QR code', 'USB drive'],
    correctIndex: 0
  },
  {
    id: 'tech-q76',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-76',
    type: 'drag',
    prompt: 'I ____ my phone to the previous version.',
    options: ['restored', 'paired', 'scrolled', 'installed'],
    correctIndex: 0
  },
  {
    id: 'tech-q77',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-77',
    type: 'drag',
    prompt: 'A ____ erases all data and returns the device to original settings.',
    options: ['factory reset', 'update', 'plugin', 'screenshot'],
    correctIndex: 0
  },
  {
    id: 'tech-q78',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-78',
    type: 'drag',
    prompt: 'My ____ is full; I need to delete some files.',
    options: ['SSD', 'RAM', 'hard drive', 'USB drive'],
    correctIndex: 2
  },
  {
    id: 'tech-q79',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-79',
    type: 'drag',
    prompt: 'I replaced my hard drive with an ____. ',
    options: ['SSD', 'router', 'Bluetooth', 'battery'],
    correctIndex: 0
  },
  {
    id: 'tech-q80',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-80',
    type: 'drag',
    prompt: 'The laptop needs more ____ to run multiple apps smoothly.',
    options: ['RAM', 'Wi-Fi', 'barcode', 'QR code'],
    correctIndex: 0
  },

  {
    id: 'tech-q81',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-81',
    type: 'drag',
    prompt: 'Save the file on a ____. ',
    options: ['USB drive', 'algorithm', 'router', 'cache'],
    correctIndex: 0
  },
  {
    id: 'tech-q82',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-82',
    type: 'drag',
    prompt: 'I forgot my ____ at home and can’t charge my phone.',
    options: ['charging cable', 'plugin', 'SSD', 'voice assistant'],
    correctIndex: 0
  },
  {
    id: 'tech-q83',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-83',
    type: 'drag',
    prompt: 'The ____ is amazing on this phone; it lasts all day.',
    options: ['battery life', 'face recognition', 'dark mode', 'router'],
    correctIndex: 0
  },
  {
    id: 'tech-q84',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-84',
    type: 'drag',
    prompt: 'I always carry a ____ when I travel.',
    options: ['power bank', 'barcode', 'framework', 'API'],
    correctIndex: 0
  },
  {
    id: 'tech-q85',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-85',
    type: 'drag',
    prompt: 'Turn on ____ to connect your earbuds.',
    options: ['Bluetooth', 'battery life', 'QR code', 'factory reset'],
    correctIndex: 0
  },
  {
    id: 'tech-q86',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-86',
    type: 'drag',
    prompt: 'Switch your phone to ____ during the flight.',
    options: ['dark mode', 'airplane mode', 'privacy settings', 'encryption'],
    correctIndex: 1
  },
  {
    id: 'tech-q87',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-87',
    type: 'drag',
    prompt: 'I prefer using ____ at night to reduce eye strain.',
    options: ['dark mode', 'factory reset', 'virtual machine', 'battery life'],
    correctIndex: 0
  },
  {
    id: 'tech-q88',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-88',
    type: 'drag',
    prompt: 'Reduce the ____ to save battery.',
    options: ['brightness', 'plugin', 'RAM', 'feed'],
    correctIndex: 0
  },
  {
    id: 'tech-q89',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-89',
    type: 'drag',
    prompt: 'The ____ answered my question.',
    options: ['router', 'voice assistant', 'USB drive', 'barcode'],
    correctIndex: 1
  },
  {
    id: 'tech-q90',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-90',
    type: 'drag',
    prompt: 'My phone uses ____ to unlock.',
    options: ['face recognition', 'QR codes', 'RAM', 'database'],
    correctIndex: 0
  },

  {
    id: 'tech-q91',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-91',
    type: 'drag',
    prompt: 'Scan the ____ to open the link.',
    options: ['router', 'QR code', 'cache', 'hard drive'],
    correctIndex: 1
  },
  {
    id: 'tech-q92',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-92',
    type: 'drag',
    prompt: 'The cashier scanned the ____. ',
    options: ['barcode', 'Wi-Fi', 'QR code', 'SSD'],
    correctIndex: 0
  },
  {
    id: 'tech-q93',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-93',
    type: 'drag',
    prompt: '____ failed, so the earbuds won’t connect.',
    options: ['Firewall', 'Bluetooth pairing', 'Automation', 'Screenshot'],
    correctIndex: 1
  },
  {
    id: 'tech-q94',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-94',
    type: 'drag',
    prompt: 'The messages are protected by ____. ',
    options: ['compression', 'battery life', 'encryption', 'USB drive'],
    correctIndex: 2
  },
  {
    id: 'tech-q95',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-95',
    type: 'drag',
    prompt: 'The file cannot be opened because it is not ____. ',
    options: ['encrypted', 'decrypted', 'installed', 'rebooted'],
    correctIndex: 1
  },
  {
    id: 'tech-q96',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-96',
    type: 'drag',
    prompt: 'I had to ____ the file to send it faster.',
    options: ['extract', 'compress', 'reboot', 'scroll'],
    correctIndex: 1
  },
  {
    id: 'tech-q97',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-97',
    type: 'drag',
    prompt: 'After downloading the ZIP, you must ____ the files.',
    options: ['extract', 'freeze', 'stream', 'uninstall'],
    correctIndex: 0
  },
  {
    id: 'tech-q98',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-98',
    type: 'drag',
    prompt: '____ the app to continue.',
    options: ['Uninstall', 'Install', 'Backup', 'Scroll'],
    correctIndex: 1
  },
  {
    id: 'tech-q99',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-99',
    type: 'drag',
    prompt: 'I decided to ____ the program because I never use it.',
    options: ['update', 'uninstall', 'stream', 'pair'],
    correctIndex: 1
  },
  {
    id: 'tech-q100',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-100',
    type: 'drag',
    prompt: 'Please read the ____ carefully before using the service.',
    options: ['terms of service', 'battery life', 'dark mode', 'AI model'],
    correctIndex: 0
  },
  {
    id: 'tech-q101',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-101',
    type: 'drag',
    prompt: 'Try to ____ if the website doesn’t load.',
    options: ['refresh the page', 'go offline', 'clear history', 'log out'],
    correctIndex: 0
  },
  {
    id: 'tech-q102',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-102',
    type: 'drag',
    prompt: 'I ____ to search for it.',
    options: ['muted my mic', 'opened a new tab', 'turned on captions', 'cancelled a subscription'],
    correctIndex: 1
  },
  {
    id: 'tech-q103',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-103',
    type: 'drag',
    prompt: 'You can ____ when you’re done.',
    options: ['join the meeting', 'clear cache', 'close the tab', 'go live'],
    correctIndex: 2
  },
  {
    id: 'tech-q104',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-104',
    type: 'drag',
    prompt: 'He used ____ to browse privately.',
    options: ['screen time', 'incognito mode', 'dark mode', 'screen share'],
    correctIndex: 1
  },
  {
    id: 'tech-q105',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-105',
    type: 'drag',
    prompt: 'This website uses ____ to remember your preferences.',
    options: ['cookies', 'plugins', 'RAM', 'ad blocker'],
    correctIndex: 0
  },
  {
    id: 'tech-q106',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-106',
    type: 'drag',
    prompt: 'You must ____ to continue using the website.',
    options: ['accept cookies', 'clear history', 'go offline', 'mute your mic'],
    correctIndex: 0
  },
  {
    id: 'tech-q107',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-107',
    type: 'drag',
    prompt: 'I decided to ____ yesterday.',
    options: ['turn on captions', 'clear history', 'open a ticket', 'go live'],
    correctIndex: 1
  },
  {
    id: 'tech-q108',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-108',
    type: 'drag',
    prompt: '____ to fix loading issues.',
    options: ['Clear cache', 'Install an app', 'Turn on your camera', 'Go offline'],
    correctIndex: 0
  },
  {
    id: 'tech-q109',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-109',
    type: 'drag',
    prompt: 'My ____ is very slow today.',
    options: ['screen time', 'download speed', 'battery life', 'click rate'],
    correctIndex: 1
  },
  {
    id: 'tech-q110',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-110',
    type: 'drag',
    prompt: 'We need better ____ for video calls.',
    options: ['upload speed', 'RAM', 'screen share', 'cookies'],
    correctIndex: 0
  },

  {
    id: 'tech-q111',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-111',
    type: 'drag',
    prompt: 'Netflix is a popular ____. ',
    options: ['streaming platform', 'knowledge base', 'dashboard', 'FAQ page'],
    correctIndex: 0
  },
  {
    id: 'tech-q112',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-112',
    type: 'drag',
    prompt: 'She did a ____ on Instagram.',
    options: ['free trial', 'screen share', 'live stream', 'factory reset'],
    correctIndex: 2
  },
  {
    id: 'tech-q113',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-113',
    type: 'drag',
    prompt: 'The creator decided to ____ to talk to followers.',
    options: ['doomscroll', 'go live', 'cancel a subscription', 'clone a profile'],
    correctIndex: 1
  },
  {
    id: 'tech-q114',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-114',
    type: 'drag',
    prompt: 'There is a lot of ____ in the game.',
    options: ['lag', 'cookies', 'screen time', 'ad blocker'],
    correctIndex: 0
  },
  {
    id: 'tech-q115',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-115',
    type: 'drag',
    prompt: 'A higher ____ makes the video smoother.',
    options: ['time limit', 'frame rate', 'traffic', 'pop-up'],
    correctIndex: 1
  },
  {
    id: 'tech-q116',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-116',
    type: 'drag',
    prompt: 'Change the ____ to 1080p for better quality.',
    options: ['resolution', 'screen time', 'password', 'traffic'],
    correctIndex: 0
  },
  {
    id: 'tech-q117',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-117',
    type: 'drag',
    prompt: 'This movie is available in ____. ',
    options: ['screen share', 'HD (high definition)', 'beta version', 'free trial'],
    correctIndex: 1
  },
  {
    id: 'tech-q118',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-118',
    type: 'drag',
    prompt: '____ video needs a good internet connection.',
    options: ['4K', 'offline', 'VR', 'FAQ'],
    correctIndex: 0
  },
  {
    id: 'tech-q119',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-119',
    type: 'drag',
    prompt: 'The ____ is annoying in this call.',
    options: ['ad blocker', 'audio lag', 'screen time', 'password manager'],
    correctIndex: 1
  },
  {
    id: 'tech-q120',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-120',
    type: 'drag',
    prompt: 'Can you start a ____ to show us?',
    options: ['screen share', 'server outage', 'bug report', 'subscription'],
    correctIndex: 0
  },

  {
    id: 'tech-q121',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-121',
    type: 'drag',
    prompt: 'Please ____ for the meeting.',
    options: ['turn on your camera', 'clear cache', 'go offline', 'open a ticket'],
    correctIndex: 0
  },
  {
    id: 'tech-q122',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-122',
    type: 'drag',
    prompt: '____ if you’re not speaking.',
    options: ['Clear history', 'Mute your mic', 'Go live', 'Accept cookies'],
    correctIndex: 1
  },
  {
    id: 'tech-q123',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-123',
    type: 'drag',
    prompt: 'You’re on mute, please ____. ',
    options: ['uninstall the app', 'unmute yourself', 'refresh the page', 'turn on captions'],
    correctIndex: 1
  },
  {
    id: 'tech-q124',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-124',
    type: 'drag',
    prompt: 'Click the link to ____. ',
    options: ['leave the meeting', 'join the meeting', 'open a ticket', 'go offline'],
    correctIndex: 1
  },
  {
    id: 'tech-q125',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-125',
    type: 'drag',
    prompt: 'She decided to ____ early.',
    options: ['leave the meeting', 'push to GitHub', 'go live', 'clone a profile'],
    correctIndex: 0
  },
  {
    id: 'tech-q126',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-126',
    type: 'drag',
    prompt: 'I sent you the ____ by email.',
    options: ['user agreement', 'meeting link', 'dashboard', 'beta version'],
    correctIndex: 1
  },
  {
    id: 'tech-q127',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-127',
    type: 'drag',
    prompt: 'We used a ____ for small group work.',
    options: ['breakout room', 'streaming platform', 'chatbot', 'smartwatch'],
    correctIndex: 0
  },
  {
    id: 'tech-q128',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-128',
    type: 'drag',
    prompt: 'We decided to ____ for those who missed it.',
    options: ['clear history', 'record the call', 'go offline', 'merge a branch'],
    correctIndex: 1
  },
  {
    id: 'tech-q129',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-129',
    type: 'drag',
    prompt: '____ if you can’t hear well.',
    options: ['Turn on captions', 'Go live', 'Go offline', 'Open a ticket'],
    correctIndex: 0
  },
  {
    id: 'tech-q130',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-130',
    type: 'drag',
    prompt: 'There is too much ____ on the call.',
    options: ['bandwidth', 'background noise', 'screen time', 'analytics'],
    correctIndex: 1
  },

  {
    id: 'tech-q131',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-131',
    type: 'drag',
    prompt: 'Enable ____ to secure your account.',
    options: ['parental controls', 'two-factor authentication', 'screen time', 'cookies'],
    correctIndex: 1
  },
  {
    id: 'tech-q132',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-132',
    type: 'drag',
    prompt: 'You will receive a ____ by SMS.',
    options: ['feature request', 'verification code', 'screen share', 'ad blocker'],
    correctIndex: 1
  },
  {
    id: 'tech-q133',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-133',
    type: 'drag',
    prompt: 'I use a ____ to store my logins.',
    options: ['password manager', 'virtual machine', 'bug report', 'pop-up'],
    correctIndex: 0
  },
  {
    id: 'tech-q134',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-134',
    type: 'drag',
    prompt: 'Always choose a ____. ',
    options: ['strong password', 'free trial', 'beta version', 'screen time'],
    correctIndex: 0
  },
  {
    id: 'tech-q135',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-135',
    type: 'drag',
    prompt: 'Each ____ has different permissions.',
    options: ['user account', 'server outage', 'banner ad', 'time limit'],
    correctIndex: 0
  },
  {
    id: 'tech-q136',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-136',
    type: 'drag',
    prompt: 'The ____ is simple and clear.',
    options: ['user interface', 'download speed', 'knowledge base', 'pop-up'],
    correctIndex: 0
  },
  {
    id: 'tech-q137',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-137',
    type: 'drag',
    prompt: '____ is very important in app design.',
    options: ['Screen time', 'User experience', 'Server outage', 'Cookies'],
    correctIndex: 1
  },
  {
    id: 'tech-q138',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-138',
    type: 'drag',
    prompt: 'The ____ shows all your statistics.',
    options: ['dashboard', 'cookies banner', 'time limit', 'FAQ page'],
    correctIndex: 0
  },
  {
    id: 'tech-q139',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-139',
    type: 'drag',
    prompt: 'We check the ____ every week.',
    options: ['analytics', 'screen time', 'beta version', 'captcha'],
    correctIndex: 0
  },
  {
    id: 'tech-q140',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-140',
    type: 'drag',
    prompt: 'Website ____ increased after the campaign.',
    options: ['frame rate', 'traffic', 'ad blocker', 'screen share'],
    correctIndex: 1
  },

  {
    id: 'tech-q141',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-141',
    type: 'drag',
    prompt: 'The ____ on this button is very high.',
    options: ['screen time', 'download speed', 'click rate', 'background noise'],
    correctIndex: 2
  },
  {
    id: 'tech-q142',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-142',
    type: 'drag',
    prompt: 'We are trying to improve our ____. ',
    options: ['conversion rate', 'screen share', 'cookies', 'beta version'],
    correctIndex: 0
  },
  {
    id: 'tech-q143',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-143',
    type: 'drag',
    prompt: 'A high ____ can mean a bad user experience.',
    options: ['bounce rate', 'ad blocker', 'download speed', 'frame rate'],
    correctIndex: 0
  },
  {
    id: 'tech-q144',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-144',
    type: 'drag',
    prompt: 'A ____ asked me to accept cookies.',
    options: ['dashboard', 'pop-up', 'knowledge base', 'screen share'],
    correctIndex: 1
  },
  {
    id: 'tech-q145',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-145',
    type: 'drag',
    prompt: 'There is a ____ at the top of the page.',
    options: ['screen time', 'banner ad', 'time limit', 'FAQ page'],
    correctIndex: 1
  },
  {
    id: 'tech-q146',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-146',
    type: 'drag',
    prompt: 'I installed an ____ in my browser.',
    options: ['analytics', 'ad blocker', 'screen share', 'beta version'],
    correctIndex: 1
  },
  {
    id: 'tech-q147',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-147',
    type: 'drag',
    prompt: 'You need a ____ to use all features.',
    options: ['subscription', 'system overload', 'bug report', 'cookies'],
    correctIndex: 0
  },
  {
    id: 'tech-q148',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-148',
    type: 'drag',
    prompt: 'The app offers a 7-day ____. ',
    options: ['server outage', 'clone', 'free trial', 'screen share'],
    correctIndex: 2
  },
  {
    id: 'tech-q149',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-149',
    type: 'drag',
    prompt: 'I decided to ____ last month.',
    options: ['cancel a subscription', 'merge a branch', 'go live', 'push to GitHub'],
    correctIndex: 0
  },
  {
    id: 'tech-q150',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-150',
    type: 'drag',
    prompt: 'Be careful with ____ in games.',
    options: ['screen time', 'in-app purchases', 'feature requests', 'system overload'],
    correctIndex: 1
  },

  {
    id: 'tech-q151',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-151',
    type: 'drag',
    prompt: 'The ____ was temporarily unavailable.',
    options: ['payment gateway', 'screen share', 'chatbot', 'streaming platform'],
    correctIndex: 0
  },
  {
    id: 'tech-q152',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-152',
    type: 'drag',
    prompt: 'I pay my bills through ____. ',
    options: ['online banking', 'VR', 'screen time', 'ad blocker'],
    correctIndex: 0
  },
  {
    id: 'tech-q153',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-153',
    type: 'drag',
    prompt: 'My ____ stores my cards.',
    options: ['dashboard', 'digital wallet', 'knowledge base', 'free trial'],
    correctIndex: 1
  },
  {
    id: 'tech-q154',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-154',
    type: 'drag',
    prompt: 'We accept ____. ',
    options: ['screen time', 'contactless payment', 'screen share', 'conversion rate'],
    correctIndex: 1
  },
  {
    id: 'tech-q155',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-155',
    type: 'drag',
    prompt: 'Be careful, it might be an ____. ',
    options: ['online scam', 'open source', 'analytics', 'beta version'],
    correctIndex: 0
  },
  {
    id: 'tech-q156',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-156',
    type: 'drag',
    prompt: 'They reported a ____. ',
    options: ['fake account', 'feature request', 'VR headset', 'bug report'],
    correctIndex: 0
  },
  {
    id: 'tech-q157',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-157',
    type: 'drag',
    prompt: 'Someone ____ her profile on social media.',
    options: ['merged', 'cloned', 'downloaded', 'muted'],
    correctIndex: 1
  },
  {
    id: 'tech-q158',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-158',
    type: 'drag',
    prompt: '____ is a big concern today.',
    options: ['Screen time', 'Data privacy', 'Frame rate', 'Banner ads'],
    correctIndex: 1
  },
  {
    id: 'tech-q159',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-159',
    type: 'drag',
    prompt: 'Nobody likes reading the ____. ',
    options: ['traffic stats', 'release notes', 'terms and conditions', 'bug reports'],
    correctIndex: 2
  },
  {
    id: 'tech-q160',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-160',
    type: 'drag',
    prompt: 'You must accept the ____ before using the service.',
    options: ['user agreement', 'screen share', 'bug report', 'dashboard'],
    correctIndex: 0
  },

  {
    id: 'tech-q161',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-161',
    type: 'drag',
    prompt: 'I’m testing the ____ of the app.',
    options: ['beta version', 'server outage', 'screen time', 'click rate'],
    correctIndex: 0
  },
  {
    id: 'tech-q162',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-162',
    type: 'drag',
    prompt: 'The ____ comes out next month.',
    options: ['screen share', 'stable release', 'FAQ page', 'knowledge base'],
    correctIndex: 1
  },
  {
    id: 'tech-q163',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-163',
    type: 'drag',
    prompt: 'Please submit a ____ if you see an issue.',
    options: ['bug report', 'beta version', 'cookies', 'time limit'],
    correctIndex: 0
  },
  {
    id: 'tech-q164',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-164',
    type: 'drag',
    prompt: 'Users can send ____ by email.',
    options: ['feature requests', 'screen times', 'cookies', 'pop-ups'],
    correctIndex: 0
  },
  {
    id: 'tech-q165',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-165',
    type: 'drag',
    prompt: 'Check the ____ for new features.',
    options: ['release notes', 'traffic stats', 'dashboard', 'beta versions'],
    correctIndex: 0
  },
  {
    id: 'tech-q166',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-166',
    type: 'drag',
    prompt: 'Linux is an ____ operating system.',
    options: ['offline', 'open-source', 'screen-heavy', 'incognito'],
    correctIndex: 1
  },
  {
    id: 'tech-q167',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-167',
    type: 'drag',
    prompt: 'The code is available in a public ____. ',
    options: ['dashboard', 'repository', 'knowledge base', 'screen share'],
    correctIndex: 1
  },
  {
    id: 'tech-q168',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-168',
    type: 'drag',
    prompt: 'I ____ my changes to Git.',
    options: ['streamed', 'committed', 'muted', 'doomscrolled'],
    correctIndex: 1
  },
  {
    id: 'tech-q169',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-169',
    type: 'drag',
    prompt: 'I ____ the latest version to GitHub.',
    options: ['pushed', 'muted', 'reset', 'recorded'],
    correctIndex: 0
  },
  {
    id: 'tech-q170',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-170',
    type: 'drag',
    prompt: 'We decided to ____ into main.',
    options: ['doomscroll', 'merge the branch', 'go offline', 'cancel the trial'],
    correctIndex: 1
  },

  {
    id: 'tech-q171',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-171',
    type: 'drag',
    prompt: 'If you have an issue, ____. ',
    options: ['open a ticket', 'go offline', 'doomscroll', 'clone a profile'],
    correctIndex: 0
  },
  {
    id: 'tech-q172',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-172',
    type: 'drag',
    prompt: 'The ____ answered quickly.',
    options: ['screen time', 'support team', 'beta version', 'dashboard'],
    correctIndex: 1
  },
  {
    id: 'tech-q173',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-173',
    type: 'drag',
    prompt: 'Call the ____ for technical problems.',
    options: ['help desk', 'VR headset', 'pop-up', 'beta tester'],
    correctIndex: 0
  },
  {
    id: 'tech-q174',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-174',
    type: 'drag',
    prompt: 'I tried to ____ the connection issue.',
    options: ['doomscroll', 'unsubscribe', 'troubleshoot', 'go live'],
    correctIndex: 2
  },
  {
    id: 'tech-q175',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-175',
    type: 'drag',
    prompt: '____ in the guide.',
    options: ['Refresh the page', 'Follow the steps', 'Cancel the trial', 'Go offline'],
    correctIndex: 1
  },
  {
    id: 'tech-q176',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-176',
    type: 'drag',
    prompt: 'He ____ the installation.',
    options: ['walked me through', 'crashed', 'muted', 'uninstalled'],
    correctIndex: 0
  },
  {
    id: 'tech-q177',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-177',
    type: 'drag',
    prompt: 'I called ____ for help.',
    options: ['tech support', 'screen time', 'feature request', 'beta version'],
    correctIndex: 0
  },
  {
    id: 'tech-q178',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-178',
    type: 'drag',
    prompt: 'Check the ____ for common questions.',
    options: ['user interface', 'knowledge base', 'screen time', 'banner ad'],
    correctIndex: 1
  },
  {
    id: 'tech-q179',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-179',
    type: 'drag',
    prompt: 'The ____ answered my question.',
    options: ['bounce rate', 'FAQ page', 'system overload', 'pop-up'],
    correctIndex: 1
  },
  {
    id: 'tech-q180',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-180',
    type: 'drag',
    prompt: 'A ____ greeted me on the website.',
    options: ['chatbot', 'server outage', 'VR headset', 'dashboard'],
    correctIndex: 0
  },

  {
    id: 'tech-q181',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-181',
    type: 'drag',
    prompt: 'They tried a game in ____. ',
    options: ['VR (virtual reality)', 'online banking', 'beta version', 'screen time'],
    correctIndex: 0
  },
  {
    id: 'tech-q182',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-182',
    type: 'drag',
    prompt: 'The app uses ____ for filters.',
    options: ['release notes', 'AR (augmented reality)', 'cookies', 'screen time'],
    correctIndex: 1
  },
  {
    id: 'tech-q183',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-183',
    type: 'drag',
    prompt: 'They control lights with a ____. ',
    options: ['smart home system', 'banner ad', 'trial version', 'VR headset'],
    correctIndex: 0
  },
  {
    id: 'tech-q184',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-184',
    type: 'drag',
    prompt: 'The ____ can play music and answer questions.',
    options: ['screen time report', 'smart speaker', 'FAQ page', 'ad blocker'],
    correctIndex: 1
  },
  {
    id: 'tech-q185',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-185',
    type: 'drag',
    prompt: 'My ____ tracks my steps.',
    options: ['smartwatch', 'dashboard', 'cookies', 'server outage'],
    correctIndex: 0
  },
  {
    id: 'tech-q186',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-186',
    type: 'drag',
    prompt: '____ collect health data.',
    options: ['Wearable devices', 'Screen times', 'Captcha', 'Pop-ups'],
    correctIndex: 0
  },
  {
    id: 'tech-q187',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-187',
    type: 'drag',
    prompt: 'My phone shows my weekly ____. ',
    options: ['screen time', 'system overload', 'download speed', 'feature requests'],
    correctIndex: 0
  },
  {
    id: 'tech-q188',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-188',
    type: 'drag',
    prompt: 'They set ____ on the tablet.',
    options: ['cookies', 'parental controls', 'bug reports', 'release notes'],
    correctIndex: 1
  },
  {
    id: 'tech-q189',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-189',
    type: 'drag',
    prompt: 'There is a ____ for this app.',
    options: ['time limit', 'server outage', 'screen share', 'beta version'],
    correctIndex: 0
  },
  {
    id: 'tech-q190',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-190',
    type: 'drag',
    prompt: 'Parents worry about ____. ',
    options: ['screen addiction', 'release notes', 'ad blockers', 'VR headsets'],
    correctIndex: 0
  },

  {
    id: 'tech-q191',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-191',
    type: 'drag',
    prompt: 'The app lets you download songs and ____. ',
    options: ['go offline', 'go live', 'go viral', 'go down'],
    correctIndex: 0
  },
  {
    id: 'tech-q192',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-192',
    type: 'drag',
    prompt: 'You need to ____ to sync your data.',
    options: ['go live', 'go online', 'go offline', 'go viral'],
    correctIndex: 1
  },
  {
    id: 'tech-q193',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-193',
    type: 'drag',
    prompt: 'This app helps people ____. ',
    options: ['stay connected', 'clone profiles', 'submit bug reports', 'clear history'],
    correctIndex: 0
  },
  {
    id: 'tech-q194',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-194',
    type: 'drag',
    prompt: 'I ____ on my phone last night.',
    options: ['went offline', 'scrolled endlessly', 'merged a branch', 'reset the server'],
    correctIndex: 1
  },
  {
    id: 'tech-q195',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-195',
    type: 'drag',
    prompt: '____ can increase your anxiety.',
    options: ['Doomscrolling', 'Screen sharing', 'Open sourcing', 'Beta testing'],
    correctIndex: 0
  },
  {
    id: 'tech-q196',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-196',
    type: 'drag',
    prompt: 'The website ____ for an hour.',
    options: ['went down', 'went live', 'went viral', 'went offline mode'],
    correctIndex: 0
  },
  {
    id: 'tech-q197',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-197',
    type: 'drag',
    prompt: 'A ____ affected all users.',
    options: ['server outage', 'beta version', 'captcha', 'parental control'],
    correctIndex: 0
  },
  {
    id: 'tech-q198',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-198',
    type: 'drag',
    prompt: 'The app will be offline for ____. ',
    options: ['screen addiction', 'scheduled maintenance', 'doomscrolling', 'screen time'],
    correctIndex: 1
  },
  {
    id: 'tech-q199',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-199',
    type: 'drag',
    prompt: 'The server crashed due to ____. ',
    options: ['system overload', 'screen time', 'beta version', 'feature requests'],
    correctIndex: 0
  },
  {
    id: 'tech-q200',
    categoryId: TECH_CATEGORY_ID,
    wordId: 'tech-200',
    type: 'drag',
    prompt: 'You don’t have to ____ to use this app.',
    options: ['be tech-savvy', 'go offline', 'refresh the page', 'clone a profile'],
    correctIndex: 0
  },
//   END OF TECH QUESTIONS

// TRAVEL QUESTIONS WOULD GO HERE
{
    id: 'travel-q1',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-1',
    type: 'drag',
    prompt: 'We need to ____ two hours before the flight.',
    options: ['check in', 'check out', 'take off', 'head back'],
    correctIndex: 0
  },
  {
    id: 'travel-q2',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-2',
    type: 'drag',
    prompt: 'We have to ____ of the hotel by 11 a.m.',
    options: ['check out', 'set off', 'get away', 'stop over'],
    correctIndex: 0
  },
  {
    id: 'travel-q3',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-3',
    type: 'drag',
    prompt: 'Passengers will ____ the plane in 10 minutes.',
    options: ['board', 'drop off', 'pick up', 'touch down'],
    correctIndex: 0
  },
  {
    id: 'travel-q4',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-4',
    type: 'drag',
    prompt: 'You must show your ____ at the gate.',
    options: ['boarding pass', 'passport', 'travel insurance', 'reservation'],
    correctIndex: 0
  },
  {
    id: 'travel-q5',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-5',
    type: 'drag',
    prompt: 'Our flight leaves from ____ 32.',
    options: ['seat', 'gate', 'subway', 'platform'],
    correctIndex: 1
  },
  {
    id: 'travel-q6',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-6',
    type: 'drag',
    prompt: 'I prefer an ____ so I can stretch my legs.',
    options: ['aisle seat', 'window seat', 'middle seat', 'seat belt'],
    correctIndex: 0
  },
  {
    id: 'travel-q7',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-7',
    type: 'drag',
    prompt: 'He asked for a ____ to see the view.',
    options: ['window seat', 'aisle seat', 'middle seat', 'backpack'],
    correctIndex: 0
  },
  {
    id: 'travel-q8',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-8',
    type: 'drag',
    prompt: 'Nobody likes the ____ on a long flight.',
    options: ['middle seat', 'gate', 'hostel', 'platform'],
    correctIndex: 0
  },
  {
    id: 'travel-q9',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-9',
    type: 'drag',
    prompt: 'This suitcase is small enough to be ____. ',
    options: ['lost luggage', 'carry-on luggage', 'checked baggage', 'travel budget'],
    correctIndex: 1
  },
  {
    id: 'travel-q10',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-10',
    type: 'drag',
    prompt: 'You have to pay extra for ____. ',
    options: ['checked baggage', 'carry-on luggage', 'seat belt', 'travel app'],
    correctIndex: 0
  },

  {
    id: 'travel-q11',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-11',
    type: 'drag',
    prompt: 'We met at ____ after the flight.',
    options: ['baggage claim', 'customs', 'immigration', 'front desk'],
    correctIndex: 0
  },
  {
    id: 'travel-q12',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-12',
    type: 'drag',
    prompt: 'You must remove your belt at the ____. ',
    options: ['security check', 'gas station', 'bus stop', 'train station'],
    correctIndex: 0
  },
  {
    id: 'travel-q13',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-13',
    type: 'drag',
    prompt: 'We had to declare the goods at ____. ',
    options: ['customs', 'baggage claim', 'check-in', 'car rental'],
    correctIndex: 0
  },
  {
    id: 'travel-q14',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-14',
    type: 'drag',
    prompt: 'We waited an hour at ____. ',
    options: ['immigration', 'the hostel', 'the gas station', 'the bus stop'],
    correctIndex: 0
  },
  {
    id: 'travel-q15',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-15',
    type: 'drag',
    prompt: 'You need a ____ to enter that country.',
    options: ['map', 'visa', 'travel adapter', 'seat belt'],
    correctIndex: 1
  },
  {
    id: 'travel-q16',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-16',
    type: 'drag',
    prompt: 'Don’t forget your ____ at home.',
    options: ['passport', 'hotel', 'suitcase', 'ATM'],
    correctIndex: 0
  },
  {
    id: 'travel-q17',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-17',
    type: 'drag',
    prompt: '____ can cover lost luggage and medical costs.',
    options: ['Travel insurance', 'Room service', 'Culture shock', 'Car rental'],
    correctIndex: 0
  },
  {
    id: 'travel-q18',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-18',
    type: 'drag',
    prompt: 'A ____ is often cheaper than two one-way tickets.',
    options: ['round-trip ticket', 'travel budget', 'travel app', 'reservation'],
    correctIndex: 0
  },
  {
    id: 'travel-q19',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-19',
    type: 'drag',
    prompt: 'He bought a ____ to Canada.',
    options: ['travel adapter', 'one-way ticket', 'travel itinerary', 'seat belt'],
    correctIndex: 1
  },
  {
    id: 'travel-q20',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-20',
    type: 'drag',
    prompt: 'We have a three-hour ____ in Paris.',
    options: ['layover', 'highway', 'sunburn', 'travel buddy'],
    correctIndex: 0
  },

  {
    id: 'travel-q21',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-21',
    type: 'drag',
    prompt: 'We almost missed our ____. ',
    options: ['travel adapter', 'connecting flight', 'seat belt', 'guesthouse'],
    correctIndex: 1
  },
  {
    id: 'travel-q22',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-22',
    type: 'drag',
    prompt: 'I prefer a ____ to avoid delays.',
    options: ['direct flight', 'red-eye flight', 'missed connection', 'traffic jam'],
    correctIndex: 0
  },
  {
    id: 'travel-q23',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-23',
    type: 'drag',
    prompt: 'Our ____ arrived three hours late.',
    options: ['travel agency', 'delayed flight', 'guesthouse', 'travel buddy'],
    correctIndex: 1
  },
  {
    id: 'travel-q24',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-24',
    type: 'drag',
    prompt: 'The airline offered a hotel because the flight was ____. ',
    options: ['cancelled', 'direct', 'overbooked', 'red-eye'],
    correctIndex: 0
  },
  {
    id: 'travel-q25',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-25',
    type: 'drag',
    prompt: 'The ____ is 7:45 a.m.',
    options: ['arrival time', 'departure time', 'time zone', 'exchange rate'],
    correctIndex: 1
  },
  {
    id: 'travel-q26',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-26',
    type: 'drag',
    prompt: 'The ____ is shown on the screen.',
    options: ['arrival time', 'backpack', 'car rental', 'travel app'],
    correctIndex: 0
  },
  {
    id: 'travel-q27',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-27',
    type: 'drag',
    prompt: 'We crossed three ____ during the trip.',
    options: ['time zones', 'gas stations', 'highways', 'platforms'],
    correctIndex: 0
  },
  {
    id: 'travel-q28',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-28',
    type: 'drag',
    prompt: 'I always get ____ after long flights.',
    options: ['jet lag', 'motion sickness', 'homesick', 'sunburn'],
    correctIndex: 0
  },
  {
    id: 'travel-q29',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-29',
    type: 'drag',
    prompt: 'They stayed in a cheap ____ near the station.',
    options: ['highway', 'hostel', 'guesthouse', 'ATM'],
    correctIndex: 1
  },
  {
    id: 'travel-q30',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-30',
    type: 'drag',
    prompt: 'The ____ room has a great view.',
    options: ['hotel', 'bus', 'subway', 'highway'],
    correctIndex: 0
  },

  {
    id: 'travel-q31',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-31',
    type: 'drag',
    prompt: 'We booked a small ____ in the countryside.',
    options: ['guesthouse', 'gas station', 'platform', 'toll'],
    correctIndex: 0
  },
  {
    id: 'travel-q32',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-32',
    type: 'drag',
    prompt: 'Do you have a ____ for tonight?',
    options: ['reservation', 'travel adapter', 'exchange rate', 'seat belt'],
    correctIndex: 0
  },
  {
    id: 'travel-q33',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-33',
    type: 'drag',
    prompt: 'Our ____ was confirmed by email.',
    options: ['traffic jam', 'booking', 'layover', 'travel budget'],
    correctIndex: 1
  },
  {
    id: 'travel-q34',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-34',
    type: 'drag',
    prompt: 'Keep your ____ in case of problems.',
    options: ['confirmation number', 'jet lag', 'travel buddy', 'map'],
    correctIndex: 0
  },
  {
    id: 'travel-q35',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-35',
    type: 'drag',
    prompt: 'Please ask for a taxi at the ____. ',
    options: ['front desk', 'baggage claim', 'immigration', 'emergency exit'],
    correctIndex: 0
  },
  {
    id: 'travel-q36',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-36',
    type: 'drag',
    prompt: 'We ordered dinner from ____. ',
    options: ['room service', 'public transport', 'car rental', 'gas station'],
    correctIndex: 0
  },
  {
    id: 'travel-q37',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-37',
    type: 'drag',
    prompt: 'I asked for a ____ at 6 a.m.',
    options: ['red-eye flight', 'wake-up call', 'travel adapter', 'seat belt'],
    correctIndex: 1
  },
  {
    id: 'travel-q38',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-38',
    type: 'drag',
    prompt: 'The resort offers an ____ package.',
    options: ['all-inclusive', 'overbooked', 'no-show', 'homesick'],
    correctIndex: 0
  },
  {
    id: 'travel-q39',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-39',
    type: 'drag',
    prompt: 'We booked our trip through a ____. ',
    options: ['travel agency', 'gas station', 'ATM', 'subway'],
    correctIndex: 0
  },
  {
    id: 'travel-q40',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-40',
    type: 'drag',
    prompt: 'We spent the afternoon ____ in the old town.',
    options: ['sightseeing', 'overbooked', 'toll paying', 'jet lagging'],
    correctIndex: 0
  },

  {
    id: 'travel-q41',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-41',
    type: 'drag',
    prompt: 'The Eiffel Tower is a major ____. ',
    options: ['travel itinerary', 'tourist attraction', 'traffic jam', 'gas station'],
    correctIndex: 1
  },
  {
    id: 'travel-q42',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-42',
    type: 'drag',
    prompt: 'We joined a ____ of the museum.',
    options: ['guided tour', 'traffic jam', 'missed connection', 'highway'],
    correctIndex: 0
  },
  {
    id: 'travel-q43',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-43',
    type: 'drag',
    prompt: 'The hotel is close to the ____. ',
    options: ['city center', 'toll road', 'seat belt', 'gas station'],
    correctIndex: 0
  },
  {
    id: 'travel-q44',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-44',
    type: 'drag',
    prompt: 'We went ____ for dinner.',
    options: ['downtown', 'sunburn', 'motion sickness', 'off the beaten path'],
    correctIndex: 0
  },
  {
    id: 'travel-q45',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-45',
    type: 'drag',
    prompt: 'They live in the ____ and commute to the city.',
    options: ['suburbs', 'seat belts', 'platforms', 'customs'],
    correctIndex: 0
  },
  {
    id: 'travel-q46',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-46',
    type: 'drag',
    prompt: '____ is cheap in this city.',
    options: ['Public transport', 'Sunburn', 'Motion sickness', 'Travel insurance'],
    correctIndex: 0
  },
  {
    id: 'travel-q47',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-47',
    type: 'drag',
    prompt: 'We took the ____ to the museum.',
    options: ['hostel', 'subway', 'ATM', 'highway'],
    correctIndex: 1
  },
  {
    id: 'travel-q48',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-48',
    type: 'drag',
    prompt: 'The ____ is just around the corner.',
    options: ['bus stop', 'emergency exit', 'train station', 'platform'],
    correctIndex: 0
  },
  {
    id: 'travel-q49',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-49',
    type: 'drag',
    prompt: 'The ____ is very busy in the morning.',
    options: ['toll', 'train station', 'travel adapter', 'travel app'],
    correctIndex: 1
  },
  {
    id: 'travel-q50',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-50',
    type: 'drag',
    prompt: 'The train leaves from ____ 4.',
    options: ['platform', 'seat belt', 'highway', 'front desk'],
    correctIndex: 0
  },

  {
    id: 'travel-q51',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-51',
    type: 'drag',
    prompt: 'We arranged ____ at the airport.',
    options: ['car rental', 'culture shock', 'homesick', 'sunburn'],
    correctIndex: 0
  },
  {
    id: 'travel-q52',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-52',
    type: 'drag',
    prompt: 'We stopped at a ____ to fill up.',
    options: ['gas station', 'guesthouse', 'ATM', 'platform'],
    correctIndex: 0
  },
  {
    id: 'travel-q53',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-53',
    type: 'drag',
    prompt: 'We drove on the ____ most of the day.',
    options: ['highway', 'passport', 'front desk', 'subway'],
    correctIndex: 0
  },
  {
    id: 'travel-q54',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-54',
    type: 'drag',
    prompt: 'You have to pay a ____ to use this bridge.',
    options: ['toll', 'seat belt', 'travel budget', 'confirmation number'],
    correctIndex: 0
  },
  {
    id: 'travel-q55',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-55',
    type: 'drag',
    prompt: 'We got stuck in a ____ near the airport.',
    options: ['traffic jam', 'wake-up call', 'culture shock', 'guesthouse'],
    correctIndex: 0
  },
  {
    id: 'travel-q56',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-56',
    type: 'drag',
    prompt: 'We planned a strict ____ for our trip.',
    options: ['travel budget', 'travel adapter', 'time zone', 'exchange rate'],
    correctIndex: 0
  },
  {
    id: 'travel-q57',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-57',
    type: 'drag',
    prompt: 'He travels with just one ____. ',
    options: ['travel itinerary', 'backpack', 'emergency exit', 'highway'],
    correctIndex: 1
  },
  {
    id: 'travel-q58',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-58',
    type: 'drag',
    prompt: 'Her ____ was too heavy.',
    options: ['suitcase', 'no-show', 'toll', 'ATM'],
    correctIndex: 0
  },
  {
    id: 'travel-q59',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-59',
    type: 'drag',
    prompt: 'We used a ____ to find the hotel.',
    options: ['map', 'seat belt', 'travel adapter', 'platform'],
    correctIndex: 0
  },
  {
    id: 'travel-q60',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-60',
    type: 'drag',
    prompt: 'The ____ helped us find good restaurants.',
    options: ['travel app', 'subway', 'gas station', 'traffic jam'],
    correctIndex: 0
  },

  {
    id: 'travel-q61',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-61',
    type: 'drag',
    prompt: 'Download the map in ____ before you leave.',
    options: ['offline mode', 'travel light', 'jet lag', 'red-eye flight'],
    correctIndex: 0
  },
  {
    id: 'travel-q62',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-62',
    type: 'drag',
    prompt: 'We ____ early to avoid traffic.',
    options: ['set off', 'check out', 'live out of a suitcase', 'get seasick'],
    correctIndex: 0
  },
  {
    id: 'travel-q63',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-63',
    type: 'drag',
    prompt: 'Let’s ____ to the hotel before it gets dark.',
    options: ['head back', 'take off', 'check in', 'travel light'],
    correctIndex: 0
  },
  {
    id: 'travel-q64',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-64',
    type: 'drag',
    prompt: 'We try to ____ at least once a year.',
    options: ['get away', 'hit the road', 'get around', 'see off friends'],
    correctIndex: 0
  },
  {
    id: 'travel-q65',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-65',
    type: 'drag',
    prompt: 'We ____ in Dubai on the way to Thailand.',
    options: ['set off', 'stopped over', 'took off', 'checked out'],
    correctIndex: 1
  },
  
  
  {
    id: 'travel-q69',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-69',
    type: 'drag',
    prompt: 'It’s easy to ____ by bike here.',
    options: ['get around', 'take off', 'check out', 'get seasick'],
    correctIndex: 0
  },
  {
    id: 'travel-q70',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-70',
    type: 'drag',
    prompt: 'Our train ____ at 9 p.m.',
    options: ['gets in', 'takes off', 'checks in', 'hits the road'],
    correctIndex: 0
  },

  {
    id: 'travel-q71',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-71',
    type: 'drag',
    prompt: 'The plane will ____ in a few minutes.',
    options: ['take off', 'check in', 'travel light', 'get around'],
    correctIndex: 0
  },
  {
    id: 'travel-q72',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-72',
    type: 'drag',
    prompt: 'We ____ right on time.',
    options: ['touched down', 'checked in', 'set off', 'got away'],
    correctIndex: 0
  },
  {
    id: 'travel-q73',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-73',
    type: 'drag',
    prompt: 'I like to ____ with only one bag.',
    options: ['travel light', 'hit the road', 'get around', 'get seasick'],
    correctIndex: 0
  },
  {
    id: 'travel-q74',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-74',
    type: 'drag',
    prompt: 'We woke up early and ____ at sunrise.',
    options: ['hit the road', 'lived out of a suitcase', 'stopped over', 'got seasick'],
    correctIndex: 0
  },
  {
    id: 'travel-q75',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-75',
    type: 'drag',
    prompt: 'We found a small village ____. ',
    options: ['off the beaten path', 'in a traffic jam', 'at customs', 'at baggage claim'],
    correctIndex: 0
  },
  {
    id: 'travel-q76',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-76',
    type: 'drag',
    prompt: 'Flight attendants often ____. ',
    options: ['live out of a suitcase', 'travel on a shoestring', 'hit the road', 'get away once a year'],
    correctIndex: 0
  },
  {
    id: 'travel-q77',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-77',
    type: 'drag',
    prompt: 'They managed to ____ across Europe.',
    options: ['travel on a shoestring', 'miss their connection', 'get seasick', 'check out'],
    correctIndex: 0
  },
  {
    id: 'travel-q78',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-78',
    type: 'drag',
    prompt: 'We took the ____ to save time.',
    options: ['red-eye flight', 'direct flight', 'traffic jam', 'bus stop'],
    correctIndex: 0
  },
  {
    id: 'travel-q79',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-79',
    type: 'drag',
    prompt: 'She experienced ____ when she moved abroad.',
    options: ['culture shock', 'jet lag', 'sunburn', 'motion sickness'],
    correctIndex: 0
  },
  {
    id: 'travel-q80',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-80',
    type: 'drag',
    prompt: 'He felt ____ during his first week overseas.',
    options: ['homesick', 'off the beaten path', 'overbooked', 'no-show'],
    correctIndex: 0
  },

  {
    id: 'travel-q81',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-81',
    type: 'drag',
    prompt: 'It’s safer to have a ____ when backpacking.',
    options: ['travel buddy', 'seat belt', 'gas station', 'platform'],
    correctIndex: 0
  },
  {
    id: 'travel-q82',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-82',
    type: 'drag',
    prompt: 'We love trying the ____ when we travel.',
    options: ['local cuisine', 'lost luggage', 'travel itinerary', 'traffic jam'],
    correctIndex: 0
  },
  {
    id: 'travel-q83',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-83',
    type: 'drag',
    prompt: 'You can exchange ____ at the airport.',
    options: ['foreign currency', 'traffic', 'no-shows', 'seat belts'],
    correctIndex: 0
  },
  {
    id: 'travel-q84',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-84',
    type: 'drag',
    prompt: 'The ____ is better in the city than at the airport.',
    options: ['exchange rate', 'highway', 'wake-up call', 'car rental'],
    correctIndex: 0
  },
  {
    id: 'travel-q85',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-85',
    type: 'drag',
    prompt: 'We withdrew cash from an ____ near the station.',
    options: ['ATM', 'emergency exit', 'gas station', 'subway'],
    correctIndex: 0
  },
  {
    id: 'travel-q86',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-86',
    type: 'drag',
    prompt: 'Most hotels accept ____. ',
    options: ['credit cards', 'seat belts', 'jet lag', 'traffic jams'],
    correctIndex: 0
  },
  {
    id: 'travel-q87',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-87',
    type: 'drag',
    prompt: 'Don’t forget a ____ for your charger.',
    options: ['travel adapter', 'travel buddy', 'traffic jam', 'subway ticket'],
    correctIndex: 0
  },
  {
    id: 'travel-q88',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-88',
    type: 'drag',
    prompt: 'I left my phone ____ at the hotel.',
    options: ['charger', 'ticket', 'passport', 'map'],
    correctIndex: 0
  },
  {
    id: 'travel-q89',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-89',
    type: 'drag',
    prompt: 'He got a bad ____ on the beach.',
    options: ['sunburn', 'seat belt', 'toll', 'culture shock'],
    correctIndex: 0
  },
  {
    id: 'travel-q90',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-90',
    type: 'drag',
    prompt: 'She takes pills for ____. ',
    options: ['motion sickness', 'lost luggage', 'no-show', 'exchange rate'],
    correctIndex: 0
  },

  {
    id: 'travel-q91',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-91',
    type: 'drag',
    prompt: 'He felt ____ during the boat trip.',
    options: ['seasick', 'overbooked', 'off the beaten path', 'homesick'],
    correctIndex: 0
  },
  {
    id: 'travel-q92',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-92',
    type: 'drag',
    prompt: 'We received a free room ____. ',
    options: ['upgrade', 'traffic jam', 'travel budget', 'wake-up call'],
    correctIndex: 0
  },
  {
    id: 'travel-q93',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-93',
    type: 'drag',
    prompt: 'The flight was ____, so they offered vouchers.',
    options: ['overbooked', 'off the beaten path', 'offline', 'homesick'],
    correctIndex: 0
  },
  {
    id: 'travel-q94',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-94',
    type: 'drag',
    prompt: 'They charged a fee for being a ____. ',
    options: ['no-show', 'travel buddy', 'seat belt', 'travel adapter'],
    correctIndex: 0
  },
  {
    id: 'travel-q95',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-95',
    type: 'drag',
    prompt: 'Please fasten your ____. ',
    options: ['seat belt', 'travel app', 'jet lag', 'confirmation number'],
    correctIndex: 0
  },
  {
    id: 'travel-q96',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-96',
    type: 'drag',
    prompt: 'Listen carefully to the ____. ',
    options: ['safety instructions', 'travel budget', 'platform number', 'exchange rate'],
    correctIndex: 0
  },
  {
    id: 'travel-q97',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-97',
    type: 'drag',
    prompt: 'Do not block the ____. ',
    options: ['emergency exit', 'bus stop', 'toll', 'front desk'],
    correctIndex: 0
  },
  {
    id: 'travel-q98',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-98',
    type: 'drag',
    prompt: 'We filled out a form for our ____. ',
    options: ['lost luggage', 'travel buddy', 'travel itinerary', 'seat belt'],
    correctIndex: 0
  },
  {
    id: 'travel-q99',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-99',
    type: 'drag',
    prompt: 'A delayed flight caused our ____. ',
    options: ['missed connection', 'off the beaten path', 'travel budget', 'travel adapter'],
    correctIndex: 0
  },
  {
    id: 'travel-q100',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-100',
    type: 'drag',
    prompt: 'Our ____ includes three countries in two weeks.',
    options: ['travel itinerary', 'travel buddy', 'toll road', 'gas station list'],
    correctIndex: 0
  },
  
  {
    id: 'travel-q102',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-102',
    type: 'drag',
    prompt: 'Last month, the government lifted all ____. ',
    options: ['travel restrictions', 'travel tips', 'travel expenses', 'travel warnings'],
    correctIndex: 0
  },
  {
    id: 'travel-q103',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-103',
    type: 'choice',
    prompt: 'At the airport, which area checks passports when entering a country?',
    options: ['border control', 'baggage claim', 'front desk', 'lost and found'],
    correctIndex: 0
  },
  {
    id: 'travel-q104',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-104',
    type: 'drag',
    prompt: 'The country announced a temporary ____. ',
    options: ['travel ban', 'travel voucher', 'travel journal', 'staycation'],
    correctIndex: 0
  },
  {
    id: 'travel-q106',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-106',
    type: 'drag',
    prompt: 'The airline gave us a ____ for the delay.',
    options: ['travel voucher', 'travel blog', 'travel scam', 'travel hotspot'],
    correctIndex: 0
  },
  {
    id: 'travel-q107',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-107',
    type: 'choice',
    prompt: 'Which route is taken mainly for beautiful views, not speed?',
    options: ['scenic route', 'highway', 'direct route', 'off-season route'],
    correctIndex: 0
  },
  {
    id: 'travel-q108',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-108',
    type: 'drag',
    prompt: 'This island is a real ____ this year.',
    options: ['travel hotspot', 'day trip', 'tourist trap', 'travel aisle'],
    correctIndex: 0
  },
  {
    id: 'travel-q109',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-109',
    type: 'choice',
    prompt: 'She bought a small gift from her trip. What is this called?',
    options: ['souvenir', 'voucher', 'ticket', 'passport stamp'],
    correctIndex: 0
  },
  {
    id: 'travel-q110',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-110',
    type: 'drag',
    prompt: 'We visited the ____ for fresh fruit.',
    options: ['local market', 'harbor', 'lost and found', 'travel agency'],
    correctIndex: 0
  },

  {
    id: 'travel-q112',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-112',
    type: 'drag',
    prompt: 'They planned a ____ across the country.',
    options: ['road trip', 'staycation', 'guided tour', 'walking tour'],
    correctIndex: 0
  },
  {
    id: 'travel-q113',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-113',
    type: 'choice',
    prompt: 'What do some agencies charge in addition to ticket prices?',
    options: ['travel agency fee', 'baggage fee', 'resort fee', 'travel tip'],
    correctIndex: 0
  },
  {
    id: 'travel-q114',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-114',
    type: 'drag',
    prompt: 'The ____ welcomed us on board.',
    options: ['flight attendant', 'pilot', 'tour guide', 'concierge'],
    correctIndex: 0
  },
  {
    id: 'travel-q115',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-115',
    type: 'choice',
    prompt: 'Who flies the plane?',
    options: ['pilot', 'flight attendant', 'cabin crew', 'tour guide'],
    correctIndex: 0
  },
  {
    id: 'travel-q116',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-116',
    type: 'drag',
    prompt: 'The flight had light ____. ',
    options: ['turbulence', 'travel delay', 'jet lag', 'motion sickness'],
    correctIndex: 0
  },
  {
    id: 'travel-q118',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-118',
    type: 'drag',
    prompt: 'He studied ____ for a year.',
    options: ['overseas', 'off-season', 'off the grid', 'on a shoestring'],
    correctIndex: 0
  },
  {
    id: 'travel-q119',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-119',
    type: 'choice',
    prompt: 'A city full of tourists and visitors is full of what?',
    options: ['sightseers', 'bellhops', 'jet setters', 'concierges'],
    correctIndex: 0
  },
  {
    id: 'travel-q120',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-120',
    type: 'drag',
    prompt: 'She takes medicine for ____. ',
    options: ['travel sickness', 'culture shock', 'homesickness', 'jet lag'],
    correctIndex: 0
  },

  {
    id: 'travel-q121',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-121',
    type: 'choice',
    prompt: 'At the gate, passengers are usually called by what?',
    options: ['boarding zone', 'seat belt number', 'hotel amenity', 'travel tip'],
    correctIndex: 0
  },
  {
    id: 'travel-q122',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-122',
    type: 'drag',
    prompt: 'The ____ checked our tickets.',
    options: ['train conductor', 'tour guide', 'flight attendant', 'concierge'],
    correctIndex: 0
  },
  {
    id: 'travel-q123',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-123',
    type: 'choice',
    prompt: 'Snowstorms, strikes, or storms often cause what?',
    options: ['travel delays', 'travel brochures', 'travel tips', 'passport stamps'],
    correctIndex: 0
  },
  {
    id: 'travel-q124',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-124',
    type: 'drag',
    prompt: 'The ____ explained the history of the site.',
    options: ['tour guide', 'flight attendant', 'pilot', 'carpool driver'],
    correctIndex: 0
  },
  {
    id: 'travel-q125',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-125',
    type: 'choice',
    prompt: 'Which item do you pick up to see photos and info about trips?',
    options: ['travel brochure', 'travel visa', 'travel ban', 'travel expenses report'],
    correctIndex: 0
  },
  {
    id: 'travel-q126',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-126',
    type: 'drag',
    prompt: 'We took a ____ around the city.',
    options: ['sightseeing bus', 'carpool', 'airport shuttle', 'ferry'],
    correctIndex: 0
  },
  {
    id: 'travel-q127',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-127',
    type: 'choice',
    prompt: 'A trip that includes hiking, rafting, or climbing is often called what?',
    options: ['adventure trip', 'staycation', 'day trip', 'group tour'],
    correctIndex: 0
  },
  {
    id: 'travel-q128',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-128',
    type: 'drag',
    prompt: 'The ____ takes us past several landmarks.',
    options: ['travel route', 'travel scam', 'travel warning', 'travel expenses'],
    correctIndex: 0
  },
  {
    id: 'travel-q129',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-129',
    type: 'choice',
    prompt: 'Some hotels add an extra charge per night. What is this called?',
    options: ['resort fee', 'baggage fee', 'agency fee', 'carry-on allowance'],
    correctIndex: 0
  },
  {
    id: 'travel-q130',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-130',
    type: 'drag',
    prompt: 'We stayed at a ____ by the beach.',
    options: ['vacation rental', 'hostel', 'tourist trap', 'duty-free'],
    correctIndex: 0
  },

  {
    id: 'travel-q131',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-131',
    type: 'choice',
    prompt: 'Which term describes how much cabin luggage you can bring?',
    options: ['carry-on allowance', 'travel checklist', 'travel route', 'visa extension'],
    correctIndex: 0
  },
  {
    id: 'travel-q132',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-132',
    type: 'drag',
    prompt: 'The ____ depends on the weight of your luggage.',
    options: ['baggage fee', 'travel voucher', 'resort fee', 'agency fee'],
    correctIndex: 0
  },
  {
    id: 'travel-q133',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-133',
    type: 'choice',
    prompt: 'What can you make to avoid forgetting anything before a trip?',
    options: ['travel checklist', 'travel scam', 'travel ban', 'travel warning'],
    correctIndex: 0
  },
  {
    id: 'travel-q134',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-134',
    type: 'drag',
    prompt: 'The airline notified us of an ____. ',
    options: ['itinerary change', 'airport shuttle', 'travel brochure', 'walking tour'],
    correctIndex: 0
  },
  {
    id: 'travel-q135',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-135',
    type: 'choice',
    prompt: 'A person from the area who shows you around is called what?',
    options: ['local guide', 'flight attendant', 'jet setter', 'bellhop'],
    correctIndex: 0
  },
  {
    id: 'travel-q136',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-136',
    type: 'drag',
    prompt: 'We joined a ____ through the old town.',
    options: ['walking tour', 'road trip', 'cruise', 'day trip'],
    correctIndex: 0
  },
  {
    id: 'travel-q137',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-137',
    type: 'choice',
    prompt: 'What do you call a notebook where you write about your trips?',
    options: ['travel journal', 'travel voucher', 'travel ban', 'passport stamp book'],
    correctIndex: 0
  },
  {
    id: 'travel-q138',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-138',
    type: 'drag',
    prompt: 'The ____ recommended some great local restaurants.',
    options: ['travel blogger', 'concierge', 'pilot', 'train conductor'],
    correctIndex: 0
  },
  {
    id: 'travel-q139',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-139',
    type: 'choice',
    prompt: 'Someone who travels a lot and often lives a luxury lifestyle is called what?',
    options: ['jet setter', 'sightseer', 'world traveler', 'carpool driver'],
    correctIndex: 0
  },
  {
    id: 'travel-q140',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-140',
    type: 'drag',
    prompt: 'We chose a ____ instead of traveling abroad.',
    options: ['staycation', 'day trip', 'group tour', 'scenic route'],
    correctIndex: 0
  },

  {
    id: 'travel-q141',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-141',
    type: 'choice',
    prompt: 'On a train, what does the phrase “All aboard!” mean?',
    options: ['Everyone should get on now', 'The train is delayed', 'Tickets are sold out', 'The trip is cancelled'],
    correctIndex: 0
  },
  {
    id: 'travel-q142',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-142',
    type: 'drag',
    prompt: 'We really ____ with our hotel upgrade.',
    options: ['hit the jackpot', 'hit the road', 'went off the grid', 'called it a day'],
    correctIndex: 0
  },
  {
    id: 'travel-q143',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-143',
    type: 'choice',
    prompt: 'After hours of walking, what does it mean to “call it a day”?',
    options: ['stop and rest', 'get lost', 'pack up quickly', 'go sightseeing'],
    correctIndex: 0
  },
  {
    id: 'travel-q144',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-144',
    type: 'drag',
    prompt: 'We ____ to confirm the reservation.',
    options: ['called ahead', 'got lost', 'pulled over', 'set sail'],
    correctIndex: 0
  },
  {
    id: 'travel-q145',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-145',
    type: 'choice',
    prompt: 'What does it mean to “touch base” before a trip?',
    options: [
      'check in and talk quickly',
      'pack your bags',
      'buy souvenirs',
      'cancel the trip'
    ],
    correctIndex: 0
  },
  {
    id: 'travel-q146',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-146',
    type: 'drag',
    prompt: 'We decided to ____ during our mountain trip.',
    options: ['go off the grid', 'hit the beach', 'travel on a shoestring', 'go sightseeing'],
    correctIndex: 0
  },
  {
    "id": "travel-q147",
    "categoryId": TRAVEL_CATEGORY_ID,
    "wordId": "travel-147",
    "type": "choice",
    "prompt": "Which phrasal verb means to become unable to find your way?",
    "options": ["get lost", "look around", "run late", "pack up"],
    "correctIndex": 0
  },
  {
    id: 'travel-q148',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-148',
    type: 'drag',
    prompt: 'We had time to ____ the city center.',
    options: ['look around', 'pack lightly', 'go off the grid', 'set sail'],
    correctIndex: 0
  },
  {
    id: 'travel-q149',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-149',
    type: 'choice',
    prompt: 'If you “run late”, what is happening?',
    options: ['You are behind schedule', 'You are very early', 'You are lost', 'You cancelled the trip'],
    correctIndex: 0
  },
  

  {
    id: 'travel-q151',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-151',
    type: 'choice',
    prompt: 'We quickly visited a café for lunch. Which phrasal verb describes this?',
    options: ['stop by', 'set sail', 'go ashore', 'check through'],
    correctIndex: 0
  },
  {
    id: 'travel-q152',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-152',
    type: 'drag',
    prompt: 'We ____ the tank before the long drive.',
    options: ['filled up', 'packed up', 'pulled over', 'ran late'],
    correctIndex: 0
  },
    {
    "id": "travel-q153",
    "categoryId": TRAVEL_CATEGORY_ID,
    "wordId": "travel-153",
    "type": "choice",
    "prompt": "Which phrasal verb means to stop your car at the side of the road?",
    "options": ["pull over", "run late", "look around", "check in"],
    "correctIndex": 0
  },
  {
    id: 'travel-q154',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-154',
    type: 'drag',
    prompt: 'The ship ____ at sunrise.',
    options: ['set sail', 'hit the beach', 'got lost', 'went ashore'],
    correctIndex: 0
  },
  {
    id: 'travel-q155',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-155',
    type: 'choice',
    prompt: 'On vacation, what does it mean to “hit the beach”?',
    options: ['go to the beach', 'leave the beach', 'get lost in town', 'stay in the hotel'],
    correctIndex: 0
  },
  {
    id: 'travel-q156',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-156',
    type: 'drag',
    prompt: 'Try to ____ for short trips.',
    options: ['pack lightly', 'run late', 'go off the grid', 'set sail'],
    correctIndex: 0
  },
  {
    "id": "travel-q157",
    "categoryId": TRAVEL_CATEGORY_ID,
    "wordId": "travel-157",
    "type": "choice",
    "prompt": "Which phrasal verb means to gather your things and prepare your bags?",
    "options": ["pack up", "look around", "pull over", "stop by"],
    "correctIndex": 0
  },
  {
    id: 'travel-q158',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-158',
    type: 'drag',
    prompt: 'Sunscreen is one of my ____. ',
    options: ['travel essentials', 'travel bans', 'travel warnings', 'travel scams'],
    correctIndex: 0
  },
  {
    id: 'travel-q159',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-159',
    type: 'choice',
    prompt: 'A list of special things you want to do before you die is called what?',
    options: ['bucket list', 'travel checklist', 'travel route map', 'passport stamp list'],
    correctIndex: 0
  },
  {
    id: 'travel-q160',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-160',
    type: 'drag',
    prompt: 'He is a ____ with many stories.',
    options: ['world traveler', 'tourist trap', 'travel warning', 'lost and found'],
    correctIndex: 0
  },

  {
    id: 'travel-q161',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-161',
    type: 'choice',
    prompt: 'Which transport goes between the airport and hotel?',
    options: ['airport shuttle', 'harbor ferry', 'sightseeing bus', 'carpool'],
    correctIndex: 0
  },
  {
    id: 'travel-q162',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-162',
    type: 'drag',
    prompt: 'The ____ include a pool and gym.',
    options: ['hotel amenities', 'travel scams', 'group tours', 'travel bans'],
    correctIndex: 0
  },
  {
    id: 'travel-q163',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-163',
    type: 'choice',
    prompt: 'Who carries your luggage to the room in some hotels?',
    options: ['bellhop', 'pilot', 'tour guide', 'car rental agent'],
    correctIndex: 0
  },
  {
    id: 'travel-q164',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-164',
    type: 'drag',
    prompt: 'Ask the ____ for restaurant recommendations.',
    options: ['concierge', 'bellhop', 'train conductor', 'flight attendant'],
    correctIndex: 0
  },
  {
    id: 'travel-q165',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-165',
    type: 'choice',
    prompt: 'A place that recently became very popular with tourists is called what?',
    options: ['travel hotspot', 'tourist trap', 'staycation', 'lost and found'],
    correctIndex: 0
  },
  {
    id: 'travel-q166',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-166',
    type: 'drag',
    prompt: 'A ____ can be more economical than traveling alone.',
    options: ['group tour', 'staycation', 'resort fee', 'travel scam'],
    correctIndex: 0
  },
  {
    id: 'travel-q167',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-167',
    type: 'choice',
    prompt: 'What do you call an excursion that starts and finishes on the same day?',
    options: ['day trip', 'road trip', 'cruise', 'adventure trip'],
    correctIndex: 0
  },
  {
    id: 'travel-q168',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-168',
    type: 'drag',
    prompt: 'Be careful of ____ in crowded areas.',
    options: ['travel scams', 'hotel amenities', 'carry-on allowances', 'group tours'],
    correctIndex: 0
  },
  {
    id: 'travel-q169',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-169',
    type: 'choice',
    prompt: 'When you travel “off-season”, what is usually true?',
    options: ['It is cheaper and less crowded', 'It is the most expensive time', 'Everything is closed for the year', 'You cannot fly'],
    correctIndex: 0
  },
  {
    id: 'travel-q170',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-170',
    type: 'drag',
    prompt: 'Hotels are expensive during ____. ',
    options: ['peak season', 'off-season', 'staycations', 'late checkout'],
    correctIndex: 0
  },

  {
    id: 'travel-q171',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-171',
    type: 'choice',
    prompt: 'Before hiking, what should you check?',
    options: ['weather forecast', 'hotel amenities', 'currency exchange', 'resort fee'],
    correctIndex: 0
  },
  {
    id: 'travel-q172',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-172',
    type: 'drag',
    prompt: 'We requested a ____ at the hotel.',
    options: ['late checkout', 'road trip', 'group tour', 'visa extension'],
    correctIndex: 0
  },
  {
    id: 'travel-q173',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-173',
    type: 'choice',
    prompt: 'Arriving earlier than the normal time at a hotel is called what?',
    options: ['early check-in', 'late checkout', 'off-season booking', 'staycation'],
    correctIndex: 0
  },
  {
    id: 'travel-q174',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-174',
    type: 'drag',
    prompt: 'A ____ was issued for that region.',
    options: ['travel warning', 'travel brochure', 'travel blog', 'travel voucher'],
    correctIndex: 0
  },
  {
    id: 'travel-q175',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-175',
    type: 'choice',
    prompt: 'What do you collect in your passport when you enter countries?',
    options: ['passport stamps', 'boarding passes', 'hotel keys', 'travel brochures'],
    correctIndex: 0
  },
  {
    id: 'travel-q176',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-176',
    type: 'drag',
    prompt: 'He applied for a ____. ',
    options: ['travel visa extension', 'travel voucher', 'travel blog', 'travel route map'],
    correctIndex: 0
  },
  {
    id: 'travel-q177',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-177',
    type: 'choice',
    prompt: 'Where should you check if you lost your bag at the station?',
    options: ['lost and found', 'concierge desk', 'harbor', 'duty-free shop'],
    correctIndex: 0
  },
  {
    id: 'travel-q178',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-178',
    type: 'drag',
    prompt: 'We found a ____ near the station.',
    options: ['currency exchange', 'tourist trap', 'hotel amenity', 'travel blog'],
    correctIndex: 0
  },
  {
    id: 'travel-q179',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-179',
    type: 'choice',
    prompt: 'A region that became very popular with tourists after a festival is what?',
    options: ['travel hotspot', 'lost and found', 'group tour', 'weather forecast'],
    correctIndex: 0
  },
  {
    id: 'travel-q180',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-180',
    type: 'drag',
    prompt: 'The guide gave us a ____. ',
    options: ['travel route map', 'travel blog', 'travel scam warning', 'staycation plan'],
    correctIndex: 0
  },

  {
    id: 'travel-q181',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-181',
    type: 'choice',
    prompt: 'Which bag is more practical than a suitcase for many travelers?',
    options: ['travel backpack', 'briefcase', 'handbag', 'shopping bag'],
    correctIndex: 0
  },
  {
    id: 'travel-q182',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-182',
    type: 'drag',
    prompt: 'We decided to ____ after breakfast.',
    options: ['go sightseeing', 'go off the grid', 'pull over', 'pack up'],
    correctIndex: 0
  },
  {
    id: 'travel-q183',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-183',
    type: 'choice',
    prompt: 'What does it mean if you “look forward to” your trip?',
    options: ['You are excited about it', 'You are cancelling it', 'You are lost', 'You are already back'],
    correctIndex: 0
  },
  {
    id: 'travel-q184',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-184',
    type: 'drag',
    prompt: 'Our bags were ____ to Montreal.',
    options: ['checked through', 'packed lightly', 'held up', 'pulled over'],
    correctIndex: 0
  },
  {
    id: 'travel-q185',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-185',
    type: 'choice',
    prompt: 'On a long drive, what does it mean to “stop for a break”?',
    options: [
      'Take a short rest',
      'Finish the trip',
      'Cancel the journey',
      'Lose your luggage'
    ],
    correctIndex: 0
  },
  {
    id: 'travel-q186',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-186',
    type: 'drag',
    prompt: 'Here’s a ____: carry a reusable bottle.',
    options: ['travel tip', 'travel scam', 'travel ban', 'travel voucher'],
    correctIndex: 0
  },
  {
    id: 'travel-q187',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-187',
    type: 'choice',
    prompt: 'A restaurant that is expensive and only exists for tourists is often called what?',
    options: ['tourist trap', 'travel hotspot', 'staycation spot', 'lost and found'],
    correctIndex: 0
  },
  {
    id: 'travel-q188',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-188',
    type: 'drag',
    prompt: 'We booked a ____ in the desert.',
    options: ['guided excursion', 'day trip', 'travel ban', 'resort fee'],
    correctIndex: 0
  },
  {
    id: 'travel-q189',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-189',
    type: 'choice',
    prompt: 'Which place is used for boats to dock and stay?',
    options: ['harbor', 'highway', 'bus stop', 'airport gate'],
    correctIndex: 0
  },
  {
    id: 'travel-q190',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-190',
    type: 'drag',
    prompt: 'We took a ____ to the island.',
    options: ['ferry', 'carpool', 'road trip', 'walking tour'],
    correctIndex: 0
  },

  {
    id: 'travel-q191',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-191',
    type: 'drag',
    prompt: 'They went on a Caribbean ____. ',
    options: ['cruise', 'road trip', 'staycation', 'day trip'],
    correctIndex: 0
  },
  {
    id: 'travel-q192',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-192',
    type: 'drag',
    prompt: 'The ____ gave safety instructions.',
    options: ['cabin crew', 'bellhop', 'concierge', 'local guide'],
    correctIndex: 0
  },
  {
    id: 'travel-q193',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-193',
    type: 'choice',
    prompt: 'What should you track for reimbursement from your company?',
    options: ['travel expenses', 'travel bans', 'travel warnings', 'travel brochures'],
    correctIndex: 0
  },
  {
    id: 'travel-q194',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-194',
    type: 'drag',
    prompt: 'The app helps organize your ____. ',
    options: ['travel itinerary', 'travel scam', 'travel ban', 'travel warning'],
    correctIndex: 0
  },
  {
    id: 'travel-q195',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-195',
    type: 'choice',
    prompt: 'She writes online about her trips. What does she have?',
    options: ['travel blog', 'travel voucher', 'travel ban', 'passport stamp'],
    correctIndex: 0
  },
  {
    id: 'travel-q196',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-196',
    type: 'drag',
    prompt: 'The hotel balcony had a ____. ',
    options: ['stunning view', 'travel ban', 'group tour', 'late checkout'],
    correctIndex: 0
  },
  {
    id: 'travel-q197',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-197',
    type: 'choice',
    prompt: 'When a ship docks and passengers “go ashore”, what do they do?',
    options: ['They go onto land', 'They go to sleep', 'They go underwater', 'They return home by plane'],
    correctIndex: 0
  },
  {
    id: 'travel-q198',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-198',
    type: 'drag',
    prompt: 'Please keep the ____ clear.',
    options: ['travel aisle', 'travel route map', 'lost and found', 'hotel amenities'],
    correctIndex: 0
  },
  {
    id: 'travel-q199',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-199',
    type: 'choice',
    prompt: 'A region that is a very popular destination is called a what?',
    options: ['travel hotspot region', 'tourist trap', 'staycation zone', 'harbor area'],
    correctIndex: 0
  },
  {
    id: 'travel-q200',
    categoryId: TRAVEL_CATEGORY_ID,
    wordId: 'travel-200',
    type: 'drag',
    prompt: 'This backpack is very ____. ',
    options: ['travel-friendly', 'off-season', 'overbooked', 'late checkout'],
    correctIndex: 0
  },

//   End of Travel category questions

// RELASHIPS_CATEGORY_ID questions would go here
{
    id: 'rel-q1',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-1',
    type: 'choice',
    prompt: 'Which phrasal verb means getting along well with someone?',
    options: ['get along with', 'fit in', 'hang out', 'bond with'],
    correctIndex: 0
  },
  {
    id: 'rel-q2',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-2',
    type: 'drag',
    prompt: 'We usually ____ friends on Fridays.',
    options: ['meet up with', 'get along with', 'fall out with', 'break up with'],
    correctIndex: 0
  },
  {
    id: 'rel-q3',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-3',
    type: 'choice',
    prompt: 'On weekends, teenagers often like to do what together?',
    options: ['hang out', 'break up', 'avoid each other', 'argue'],
    correctIndex: 0
  },
  {
    id: 'rel-q4',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-4',
    type: 'drag',
    prompt: 'I finally ____ an old friend from high school.',
    options: ['caught up with', 'broke up with', 'fell out with', 'moved on from'],
    correctIndex: 0
  },
  {
    id: 'rel-q5',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-5',
    type: 'choice',
    prompt: 'Which expression refers to staying connected with someone?',
    options: ['keep in touch', 'lose touch', 'cut someone off', 'ghost someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q6',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-6',
    type: 'drag',
    prompt: 'We ____ after high school and never spoke again.',
    options: ['lost touch', 'broke up', 'made up', 'got closer'],
    correctIndex: 0
  },
  {
    id: 'rel-q7',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-7',
    type: 'choice',
    prompt: 'During the trip, he started forming strong emotional connections with his teammates. Which verb describes this?',
    options: ['bond with', 'argue with', 'avoid', 'ghost'],
    correctIndex: 0
  },
  {
    id: 'rel-q8',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-8',
    type: 'drag',
    prompt: 'We like to ____ on Sundays and watch movies.',
    options: ['spend time together', 'cut people off', 'spread rumors', 'break up'],
    correctIndex: 0
  },
  {
    id: 'rel-q9',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-9',
    type: 'choice',
    prompt: 'Which expression describes gradually learning about someone?',
    options: ['get to know someone', 'judge someone', 'avoid someone', 'criticize someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q10',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-10',
    type: 'drag',
    prompt: 'We ____ after traveling together.',
    options: ['got closer', 'fell out', 'broke up', 'lost touch'],
    correctIndex: 0
  },

  {
    id: 'rel-q11',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-11',
    type: 'choice',
    prompt: 'Which idiom describes getting along well from the very beginning?',
    options: ['hit it off', 'fall out with', 'move on', 'stand out'],
    correctIndex: 0
  },
  {
    id: 'rel-q12',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-12',
    type: 'drag',
    prompt: 'We have a lot ____: music, movies, and sports.',
    options: ['in common', 'of problems', 'of arguments', 'of rumors'],
    correctIndex: 0
  },
  {
    id: 'rel-q13',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-13',
    type: 'choice',
    prompt: 'When you form new friendships, what do you do?',
    options: ['make friends', 'break the ice', 'cut people off', 'spread rumors'],
    correctIndex: 0
  },
  {
    id: 'rel-q14',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-14',
    type: 'drag',
    prompt: 'She ____ her neighbors and talks to them often.',
    options: ['is friends with', 'ignores', 'avoids', 'cuts off'],
    correctIndex: 0
  },
  {
    id: 'rel-q15',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-15',
    type: 'choice',
    prompt: 'Which idiom describes helping people feel comfortable when they first meet?',
    options: ['break the ice', 'break up', 'break a promise', 'break someone’s trust'],
    correctIndex: 0
  },
  {
    id: 'rel-q16',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-16',
    type: 'drag',
    prompt: 'He ____ with the person next to him at the bus stop.',
    options: ['started a conversation', 'blocked', 'ghosted', 'reported'],
    correctIndex: 0
  },
  {
    id: 'rel-q17',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-17',
    type: 'choice',
    prompt: 'Talking about casual topics with strangers is called what?',
    options: ['making small talk', 'breaking up', 'moving on', 'falling in love'],
    correctIndex: 0
  },
  {
    id: 'rel-q18',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-18',
    type: 'drag',
    prompt: 'She finally decided to ____ about her feelings.',
    options: ['open up', 'ghost someone', 'cut someone off', 'spread rumors'],
    correctIndex: 0
  },
  {
    id: 'rel-q19',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-19',
    type: 'choice',
    prompt: 'Which expression describes choosing to trust someone?',
    options: ['trust someone', 'judge someone', 'avoid someone', 'criticize someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q20',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-20',
    type: 'drag',
    prompt: 'He ____ his best friend about the problem.',
    options: ['confided in', 'broke up with', 'stood out from', 'fell out with'],
    correctIndex: 0
  },

  {
    id: 'rel-q21',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-21',
    type: 'choice',
    prompt: 'When you offer someone guidance, what are you doing?',
    options: ['give someone advice', 'spread rumors', 'argue with someone', 'ignore someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q22',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-22',
    type: 'drag',
    prompt: 'He ____ her during a difficult time.',
    options: ['supported', 'judged', 'ghosted', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'rel-q23',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-23',
    type: 'choice',
    prompt: 'Which idiom describes being available to help someone?',
    options: ['be there for someone', 'be offended', 'be popular', 'be too pushy'],
    correctIndex: 0
  },
  {
    id: 'rel-q24',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-24',
    type: 'drag',
    prompt: 'Don’t worry, I ____ your back.',
    options: ['have', 'judge', 'ignore', 'avoid'],
    correctIndex: 0
  },
  {
    id: 'rel-q25',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-25',
    type: 'choice',
    prompt: 'Which phrasal verb means relying on someone?',
    options: ['count on someone', 'fall out with someone', 'block someone', 'stand out'],
    correctIndex: 0
  },

  {
    id: 'rel-q26',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-26',
    type: 'drag',
    prompt: 'He ____ his sister for help.',
    options: ['depends on', 'argues with', 'avoids', 'ignores'],
    correctIndex: 0
  },
  {
    id: 'rel-q27',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-27',
    type: 'choice',
    prompt: 'Which idiom refers to relying on someone for emotional support?',
    options: ['lean on someone', 'ghost someone', 'block someone', 'cut someone off'],
    correctIndex: 0
  },
  {
    id: 'rel-q28',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-28',
    type: 'drag',
    prompt: 'She ____ her grandparents when they are sick.',
    options: ['takes care of', 'falls out with', 'avoids', 'ignores'],
    correctIndex: 0
  },
  {
    id: 'rel-q29',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-29',
    type: 'choice',
    prompt: 'Which phrasal verb describes taking care of someone?',
    options: ['look after someone', 'look around', 'look forward to', 'look down on'],
    correctIndex: 0
  },
  {
    id: 'rel-q30',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-30',
    type: 'drag',
    prompt: 'I ____ my friend after the accident.',
    options: ['checked on', 'blocked', 'unfriended', 'judged'],
    correctIndex: 0
  },

  {
    id: 'rel-q31',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-31',
    type: 'choice',
    prompt: 'Which expression refers to inviting someone to your home?',
    options: ['invite someone over', 'invite someone out', 'cut someone off', 'report someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q32',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-32',
    type: 'drag',
    prompt: 'We ____ a gathering last night at our place.',
    options: ['hosted', 'ghosted', 'blocked', 'judged'],
    correctIndex: 0
  },
  {
    id: 'rel-q33',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-33',
    type: 'choice',
    prompt: 'Which idiom means organizing a celebration or event?',
    options: ['throw a party', 'break a promise', 'make small talk', 'move on'],
    correctIndex: 0
  },
  {
    id: 'rel-q34',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-34',
    type: 'drag',
    prompt: 'We ____ a charity event last weekend.',
    options: ['attended', 'blocked', 'unfriended', 'ghosted'],
    correctIndex: 0
  },
  {
    id: 'rel-q35',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-35',
    type: 'choice',
    prompt: 'Which phrase means joining a group of people?',
    options: ['join the group', 'leave the group', 'avoid the group', 'argue with the group'],
    correctIndex: 0
  },

  {
    id: 'rel-q36',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-36',
    type: 'drag',
    prompt: 'It took time for him to ____ at work.',
    options: ['fit in', 'stand out', 'fall out', 'move on'],
    correctIndex: 0
  },
  {
    id: 'rel-q37',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-37',
    type: 'choice',
    prompt: 'Which phrasal verb describes blending naturally into a group?',
    options: ['blend in', 'stand out', 'fall out', 'break up'],
    correctIndex: 0
  },
  {
    id: 'rel-q38',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-38',
    type: 'drag',
    prompt: 'He ____ because of his talent.',
    options: ['stood out', 'ghosted someone', 'blocked someone', 'fitted in'],
    correctIndex: 0
  },
  {
    id: 'rel-q39',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-39',
    type: 'choice',
    prompt: 'Which expression refers to being well-liked by many people?',
    options: ['be popular', 'be offended', 'be too clingy', 'be criticized'],
    correctIndex: 0
  },
  {
    id: 'rel-q40',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-40',
    type: 'drag',
    prompt: 'He is very ____ with everyone at school.',
    options: ['friendly', 'offended', 'clingy', 'pushy'],
    correctIndex: 0
  },

  {
    id: 'rel-q41',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-41',
    type: 'choice',
    prompt: 'Which idiom describes creating a positive first impression?',
    options: ['make a good impression', 'make a promise', 'make small talk', 'make up'],
    correctIndex: 0
  },
  {
    id: 'rel-q42',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-42',
    type: 'drag',
    prompt: 'He ____ his promise again.',
    options: ['broke', 'kept', 'accepted', 'trusted'],
    correctIndex: 0
  },
  {
    id: 'rel-q43',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-43',
    type: 'choice',
    prompt: 'Which expression means honoring a commitment?',
    options: ['keep a promise', 'break a promise', 'break up', 'give up'],
    correctIndex: 0
  },
  {
    id: 'rel-q44',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-44',
    type: 'drag',
    prompt: 'They often ____ each other about money.',
    options: ['argue with', 'flirt with', 'support', 'compliment'],
    correctIndex: 0
  },
  {
    id: 'rel-q45',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-45',
    type: 'choice',
    prompt: 'Which expression describes having a disagreement with someone?',
    options: ['have a disagreement', 'have a crush', 'have trust issues', 'have someone’s back'],
    correctIndex: 0
  },

  {
    id: 'rel-q46',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-46',
    type: 'drag',
    prompt: 'He ____ his best friend after the big argument.',
    options: ['fell out with', 'made up with', 'trusted', 'complimented'],
    correctIndex: 0
  },
  {
    id: 'rel-q47',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-47',
    type: 'choice',
    prompt: 'Which phrasal verb refers to reconciling after a conflict?',
    options: ['make up', 'fall out', 'move on', 'block someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q48',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-48',
    type: 'drag',
    prompt: 'He ____ her for being rude.',
    options: ['apologized to', 'reported', 'judged', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'rel-q49',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-49',
    type: 'choice',
    prompt: 'Which verb describes forgiving another person?',
    options: ['forgive someone', 'avoid someone', 'criticize someone', 'block someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q50',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-50',
    type: 'drag',
    prompt: 'We should ____ each other, even when we disagree.',
    options: ['respect', 'ignore', 'ghost', 'judge'],
    correctIndex: 0
  },

  {
    id: 'rel-q51',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-51',
    type: 'choice',
    prompt: 'If someone is criticized for their behavior, what happened?',
    options: ['He got criticized', 'He got promoted', 'He got invited', 'He got trusted'],
    correctIndex: 0
  },
  {
    id: 'rel-q52',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-52',
    type: 'drag',
    prompt: 'It’s wrong to ____ people too quickly.',
    options: ['judge', 'hug', 'compliment', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'rel-q53',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-53',
    type: 'choice',
    prompt: 'Which verb describes giving someone a compliment?',
    options: ['compliment someone', 'judge someone', 'block someone', 'report someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q54',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-54',
    type: 'drag',
    prompt: 'Don’t ____ it the wrong way, I’m just helping.',
    options: ['take', 'say', 'avoid', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q55',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-55',
    type: 'choice',
    prompt: 'Which expression refers to feeling upset or offended?',
    options: ['take offense', 'take a break', 'take a chance', 'take it easy'],
    correctIndex: 0
  },

  {
    id: 'rel-q56',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-56',
    type: 'drag',
    prompt: 'She was ____ by what he said.',
    options: ['offended', 'popular', 'friendly', 'clingy'],
    correctIndex: 0
  },
  {
    id: 'rel-q57',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-57',
    type: 'choice',
    prompt: 'Which phrase means being truthful with someone?',
    options: ['be honest with', 'be offended by', 'be too clingy with', 'be popular with'],
    correctIndex: 0
  },
  {
    id: 'rel-q58',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-58',
    type: 'drag',
    prompt: 'She finally decided to ____ the truth.',
    options: ['tell', 'spread', 'ignore', 'avoid'],
    correctIndex: 0
  },
  {
    id: 'rel-q59',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-59',
    type: 'choice',
    prompt: 'Which expression means saying something that is not true?',
    options: ['tell a lie', 'tell the truth', 'tell a joke', 'tell a story only once'],
    correctIndex: 0
  },
  {
    id: 'rel-q60',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-60',
    type: 'drag',
    prompt: 'They ____ rumors about him at school.',
    options: ['spread', 'blocked', 'hugged', 'followed'],
    correctIndex: 0
  },

  {
    id: 'rel-q61',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-61',
    type: 'choice',
    prompt: 'Which expression refers to having difficulty trusting others?',
    options: ['trust issues', 'trust limits', 'trust access', 'trust account'],
    correctIndex: 0
  },
  {
    id: 'rel-q62',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-62',
    type: 'drag',
    prompt: 'He ____ my trust too many times.',
    options: ['broke', 'earned', 'ignored', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'rel-q63',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-63',
    type: 'choice',
    prompt: 'Which expression means building someone’s confidence in you?',
    options: ['earn someone’s trust', 'break someone’s trust', 'judge someone', 'block someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q64',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-64',
    type: 'drag',
    prompt: 'Please ____ him a chance to explain.',
    options: ['give', 'take', 'block', 'avoid'],
    correctIndex: 0
  },
  {
    id: 'rel-q65',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-65',
    type: 'choice',
    prompt: 'Which idiom refers to assuming the best in someone when you’re unsure?',
    options: [
      'give someone the benefit of the doubt',
      'give someone advice',
      'give someone space',
      'give someone a hug'
    ],
    correctIndex: 0
  },

  {
    id: 'rel-q66',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-66',
    type: 'drag',
    prompt: 'They ____ each other and got upset.',
    options: ['misunderstood', 'supported', 'invited', 'complimented'],
    correctIndex: 0
  },
  {
    id: 'rel-q67',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-67',
    type: 'choice',
    prompt: 'Which phrasal verb describes making a situation clearer?',
    options: ['clear things up', 'cut someone off', 'move on', 'fall out'],
    correctIndex: 0
  },
  {
    id: 'rel-q68',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-68',
    type: 'drag',
    prompt: 'He tried to ____ himself after the mistake.',
    options: ['explain', 'avoid', 'judge', 'ghost'],
    correctIndex: 0
  },
  {
    id: 'rel-q69',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-69',
    type: 'choice',
    prompt: 'Which idiom refers to discussing a problem to find a solution?',
    options: ['talk things out', 'talk behind backs', 'break the ice', 'spread rumors'],
    correctIndex: 0
  },
  {
    id: 'rel-q70',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-70',
    type: 'drag',
    prompt: 'We decided to ____ to disagree.',
    options: ['agree', 'try', 'refuse', 'argue'],
    correctIndex: 0
  },

  {
    id: 'rel-q71',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-71',
    type: 'choice',
    prompt: 'Which idiom refers to allowing someone privacy or distance?',
    options: ['give someone space', 'give someone a hug', 'give someone a ride', 'give someone up'],
    correctIndex: 0
  },
  {
    id: 'rel-q72',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-72',
    type: 'drag',
    prompt: 'It’s important to ____ boundaries in any relationship.',
    options: ['respect', 'cross', 'ignore', 'push'],
    correctIndex: 0
  },
  {
    id: 'rel-q73',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-73',
    type: 'choice',
    prompt: 'Which idiom refers to overstepping limits?',
    options: ['cross the line', 'hit it off', 'fit in', 'clear things up'],
    correctIndex: 0
  },
  {
    id: 'rel-q74',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-74',
    type: 'drag',
    prompt: 'Don’t ____ too pushy with people.',
    options: ['be', 'have', 'get', 'go'],
    correctIndex: 0
  },
  {
    id: 'rel-q75',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-75',
    type: 'choice',
    prompt: 'Which expression refers to being overly attached to someone?',
    options: ['be too clingy', 'be too busy', 'be too honest', 'be too friendly'],
    correctIndex: 0
  },

  {
    id: 'rel-q76',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-76',
    type: 'drag',
    prompt: 'He ____ her a nice compliment.',
    options: ['gave', 'reported', 'blocked', 'ignored'],
    correctIndex: 0
  },
  {
    id: 'rel-q77',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-77',
    type: 'choice',
    prompt: 'Which expression means accepting a compliment politely?',
    options: ['accept a compliment', 'spread a compliment', 'break a compliment', 'block a compliment'],
    correctIndex: 0
  },
  {
    id: 'rel-q78',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-78',
    type: 'drag',
    prompt: 'He likes to ____ with her at the bar.',
    options: ['flirt', 'argue', 'avoid', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q79',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-79',
    type: 'choice',
    prompt: 'Which idiom describes having romantic feelings for someone?',
    options: ['have a crush on', 'have trust issues with', 'have a fight with', 'have a date with'],
    correctIndex: 0
  },
  {
    id: 'rel-q80',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-80',
    type: 'drag',
    prompt: 'He finally ____ her out last week.',
    options: ['asked', 'blocked', 'reported', 'ignored'],
    correctIndex: 0
  },

  {
    id: 'rel-q81',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-81',
    type: 'choice',
    prompt: 'Which expression refers to going on a romantic outing?',
    options: ['go on a date', 'go on a break', 'go on a trip', 'go on a walk'],
    correctIndex: 0
  },
  {
    id: 'rel-q82',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-82',
    type: 'drag',
    prompt: 'They have been ____ a relationship for two years.',
    options: ['in', 'at', 'on', 'under'],
    correctIndex: 0
  },
  {
    id: 'rel-q83',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-83',
    type: 'choice',
    prompt: 'Which idiom describes developing romantic feelings?',
    options: ['fall in love', 'fall apart', 'fall behind', 'fall asleep'],
    correctIndex: 0
  },
  {
    id: 'rel-q84',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-84',
    type: 'drag',
    prompt: 'She ____ up with him last month.',
    options: ['broke', 'stood', 'hung', 'laughed'],
    correctIndex: 0
  },
  {
    id: 'rel-q85',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-85',
    type: 'choice',
    prompt: 'Which phrasal verb refers to getting back together after a breakup?',
    options: ['get back together', 'get along with', 'get over', 'get away'],
    correctIndex: 0
  },

  {
    id: 'rel-q86',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-86',
    type: 'drag',
    prompt: 'She decided to ____ on after the breakup.',
    options: ['move', 'fall', 'fit', 'stand'],
    correctIndex: 0
  },
  {
    id: 'rel-q87',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-87',
    type: 'choice',
    prompt: 'Which idiom refers to instantly falling in love?',
    options: ['love at first sight', 'love in the long run', 'fall out of love', 'talk things out'],
    correctIndex: 0
  },
  {
    id: 'rel-q88',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-88',
    type: 'drag',
    prompt: 'She ____ her friend a big hug.',
    options: ['gave', 'broke', 'blocked', 'spread'],
    correctIndex: 0
  },
  {
    id: 'rel-q89',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-89',
    type: 'choice',
    prompt: 'Which expression describes greeting someone by shaking hands?',
    options: ['shake hands', 'give hands', 'lose hands', 'make hands'],
    correctIndex: 0
  },
  {
    id: 'rel-q90',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-90',
    type: 'drag',
    prompt: 'She ____ at her neighbor from the window.',
    options: ['waved', 'ignored', 'blocked', 'reported'],
    correctIndex: 0
  },

  {
    id: 'rel-q91',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-91',
    type: 'choice',
    prompt: 'Which expression describes smiling in someone’s direction?',
    options: ['smile at someone', 'judge someone', 'report someone', 'block someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q92',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-92',
    type: 'drag',
    prompt: 'She ____ his messages for a week.',
    options: ['ignored', 'hosted', 'supported', 'complimented'],
    correctIndex: 0
  },
  {
    id: 'rel-q93',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-93',
    type: 'choice',
    prompt: 'Which verb describes avoiding someone?',
    options: ['avoid someone', 'hug someone', 'praise someone', 'invite someone over'],
    correctIndex: 0
  },
  {
    id: 'rel-q94',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-94',
    type: 'drag',
    prompt: 'After the fight, she completely ____ him off.',
    options: ['cut', 'hugged', 'invited', 'followed'],
    correctIndex: 0
  },
  {
    id: 'rel-q95',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-95',
    type: 'choice',
    prompt: 'On social media, which slang verb means to stop replying to someone?',
    options: ['ghost someone', 'hug someone', 'host someone', 'compliment someone'],
    correctIndex: 0
  },

  {
    id: 'rel-q96',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-96',
    type: 'drag',
    prompt: 'She ____ him on social media after the argument.',
    options: ['blocked', 'trusted', 'hugged', 'complimented'],
    correctIndex: 0
  },
  {
    id: 'rel-q97',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-97',
    type: 'choice',
    prompt: 'Which verb refers to reporting someone for inappropriate behavior?',
    options: ['report someone', 'respect someone', 'flirt with someone', 'invite someone over'],
    correctIndex: 0
  },
  {
    id: 'rel-q98',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-98',
    type: 'drag',
    prompt: 'He ____ several people after the drama online.',
    options: ['unfriended', 'hugged', 'invited', 'complimented'],
    correctIndex: 0
  },
  {
    id: 'rel-q100',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-100',
    type: 'drag',
    prompt: 'He ____ her after seeing her story.',
    options: ['DM’d', 'blocked', 'ignored', 'reported'],
    correctIndex: 0
  },
  
  {
    id: 'rel-q102',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-102',
    type: 'drag',
    prompt: 'I like to ____ with my parents every Sunday.',
    options: ['check in', 'fall out', 'move on', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q103',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-103',
    type: 'choice',
    prompt: 'Social media helps us do what with friends far away?',
    options: ['stay connected', 'grow apart', 'drift apart', 'fall out'],
    correctIndex: 0
  },
  {
    id: 'rel-q104',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-104',
    type: 'drag',
    prompt: 'We decided to ____ a group chat for the project.',
    options: ['start', 'break', 'ignore', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q106',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-106',
    type: 'drag',
    prompt: 'He ____ me on read for three days.',
    options: ['left', 'hugged', 'invited', 'followed'],
    correctIndex: 0
  },
  {
    id: 'rel-q107',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-107',
    type: 'choice',
    prompt: 'On social media, many people did what to her post?',
    options: ['reacted', 'blocked', 'ignored', 'reported'],
    correctIndex: 0
  },
  {
    id: 'rel-q108',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-108',
    type: 'drag',
    prompt: 'He ____ a story about his trip.',
    options: ['shared', 'deleted', 'hid', 'ignored'],
    correctIndex: 0
  },
  {
    id: 'rel-q109',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-109',
    type: 'choice',
    prompt: 'On social media, which expression means showing that you like a post?',
    options: ['like a post', 'judge a post', 'block a post', 'ghost a post'],
    correctIndex: 0
  },
  {
    id: 'rel-q110',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-110',
    type: 'drag',
    prompt: 'She ____ me in the photo on Instagram.',
    options: ['tagged', 'blocked', 'reported', 'unfriended'],
    correctIndex: 0
  },

  {
    id: 'rel-q111',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-111',
    type: 'choice',
    prompt: 'Which expression means finding a middle solution in a disagreement?',
    options: ['reach a compromise', 'reach a limit', 'reach a decision alone', 'reach for help'],
    correctIndex: 0
  },
  {
    id: 'rel-q112',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-112',
    type: 'drag',
    prompt: 'It’s important to ____ actively in conversations.',
    options: ['listen', 'interrupt', 'shout', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'rel-q113',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-113',
    type: 'choice',
    prompt: 'What should you avoid doing to the person who is speaking?',
    options: ['interrupt the speaker', 'show interest', 'make eye contact', 'listen actively'],
    correctIndex: 0
  },
  {
    id: 'rel-q114',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-114',
    type: 'drag',
    prompt: 'He decided to ____ the subject when things got tense.',
    options: ['change', 'escalate', 'repeat', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'rel-q115',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-115',
    type: 'choice',
    prompt: 'Which idiom means thinking the same way about something?',
    options: ['be on the same page', 'be on bad terms', 'be left out', 'be shy around strangers'],
    correctIndex: 0
  },
  {
    id: 'rel-q116',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-116',
    type: 'drag',
    prompt: 'They don’t always ____ eye to eye.',
    options: ['see', 'look', 'go', 'fall'],
    correctIndex: 0
  },
  {
    id: 'rel-q117',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-117',
    type: 'choice',
    prompt: 'In a meeting, if someone supports another person, what do they do?',
    options: ['back someone up', 'cut someone off', 'ghost someone', 'look down on someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q118',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-118',
    type: 'drag',
    prompt: 'He ____ up for his friend when others were rude.',
    options: ['stood', 'fell', 'broke', 'ran'],
    correctIndex: 0
  },

  {
    id: 'rel-q120',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-120',
    type: 'drag',
    prompt: 'He often ____ back his feelings.',
    options: ['holds', 'shares', 'praises', 'spreads'],
    correctIndex: 0
  },

  {
    id: 'rel-q121',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-121',
    type: 'choice',
    prompt: 'Which expression means expressing what you think?',
    options: ['share your opinion', 'keep a secret', 'avoid the topic', 'change the subject'],
    correctIndex: 0
  },
  {
    id: 'rel-q122',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-122',
    type: 'drag',
    prompt: 'We should ____ each other’s opinions.',
    options: ['respect', 'ignore', 'judge', 'mock'],
    correctIndex: 0
  },
  {
    id: 'rel-q123',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-123',
    type: 'choice',
    prompt: 'Which expression means speaking one at a time?',
    options: ['take turns speaking', 'talk over everyone', 'shout together', 'speak nonstop'],
    correctIndex: 0
  },
  {
    id: 'rel-q124',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-124',
    type: 'drag',
    prompt: 'Please ____ your turn to talk.',
    options: ['wait', 'take', 'change', 'push'],
    correctIndex: 0
  },
  {
    id: 'rel-q125',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-125',
    type: 'choice',
    prompt: 'Which expression means interrupting someone in a polite way?',
    options: ['interrupt politely', 'interrupt rudely', 'change your tone', 'stay silent'],
    correctIndex: 0
  },
  {
    id: 'rel-q126',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-126',
    type: 'drag',
    prompt: 'Nodding your head ____ interest.',
    options: ['shows', 'hides', 'blocks', 'ignores'],
    correctIndex: 0
  },
  {
    id: 'rel-q127',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-127',
    type: 'choice',
    prompt: 'Which expression means looking someone in the eyes?',
    options: ['make eye contact', 'make small talk', 'make peace', 'make excuses'],
    correctIndex: 0
  },
  {
    id: 'rel-q128',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-128',
    type: 'drag',
    prompt: 'She can ____ body language very well.',
    options: ['read', 'break', 'hide', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q129',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-129',
    type: 'choice',
    prompt: 'Which expression means giving someone your full attention?',
    options: [
      'give someone your full attention',
      'give someone a hard time',
      'give someone space',
      'give someone up'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q130',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-130',
    type: 'drag',
    prompt: 'He ____ his tone when he got angry.',
    options: ['changed', 'ignored', 'deleted', 'blocked'],
    correctIndex: 0
  },

  {
    id: 'rel-q131',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-131',
    type: 'choice',
    prompt: 'Which phrasal verb means making a situation less tense?',
    options: ['calm things down', 'escalate the situation', 'drift apart', 'move on'],
    correctIndex: 0
  },
  {
    id: 'rel-q132',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-132',
    type: 'drag',
    prompt: 'Shouting only ____ the situation.',
    options: ['escalated', 'calmed', 'ignored', 'healed'],
    correctIndex: 0
  },

  {
    id: 'rel-q134',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-134',
    type: 'drag',
    prompt: 'Sometimes you need to ____ a step back.',
    options: ['take', 'give', 'lose', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q135',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-135',
    type: 'choice',
    prompt: 'Which idiom means trying to see the other side of a situation?',
    options: ['see the other side', 'be on bad terms', 'break into a conversation', 'take turns speaking'],
    correctIndex: 0
  },
  {
    id: 'rel-q136',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-136',
    type: 'drag',
    prompt: 'Try to ____ yourself in her shoes before judging.',
    options: ['put', 'push', 'hide', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q137',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-137',
    type: 'choice',
    prompt: 'Which expression means showing empathy?',
    options: ['show empathy', 'show off', 'show fear', 'show distance'],
    correctIndex: 0
  },
  {
    id: 'rel-q138',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-138',
    type: 'drag',
    prompt: 'She was very ____ about the delay.',
    options: ['understanding', 'offended', 'pushy', 'clingy'],
    correctIndex: 0
  },
  {
    id: 'rel-q139',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-139',
    type: 'choice',
    prompt: 'Which expression means being patient with someone?',
    options: ['be patient with someone', 'be shy around someone', 'be offended by someone', 'be on bad terms'],
    correctIndex: 0
  },
  {
    id: 'rel-q140',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-140',
    type: 'drag',
    prompt: 'He ____ appreciation for their help.',
    options: ['showed', 'blocked', 'ignored', 'hid'],
    correctIndex: 0
  },

  {
    id: 'rel-q141',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-141',
    type: 'choice',
    prompt: 'Which expression means saying thank you?',
    options: ['say thank you', 'say nothing', 'say goodbye only', 'say rumors'],
    correctIndex: 0
  },
  {
    id: 'rel-q142',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-142',
    type: 'drag',
    prompt: 'She ____ gratitude for the support.',
    options: ['showed', 'ignored', 'blocked', 'hid'],
    correctIndex: 0
  },
  {
    id: 'rel-q143',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-143',
    type: 'choice',
    prompt: 'Which idiom means not appreciating someone because you assume they will always be there?',
    options: [
      'take someone for granted',
      'take someone out',
      'take someone in',
      'take someone home'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q144',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-144',
    type: 'drag',
    prompt: 'We need to ____ respect to everyone.',
    options: ['show', 'block', 'spread', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'rel-q145',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-145',
    type: 'choice',
    prompt: 'Which expression means going past someone’s personal limits?',
    options: [
      'cross someone’s boundaries',
      'keep a professional distance',
      'show empathy',
      'make peace with someone'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q146',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-146',
    type: 'drag',
    prompt: 'Can you ____ a secret?',
    options: ['keep', 'break', 'spread', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'rel-q147',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-147',
    type: 'choice',
    prompt: 'Which expression means telling someone a secret?',
    options: ['share a secret', 'hide a secret', 'break a secret', 'delete a secret'],
    correctIndex: 0
  },
  {
    id: 'rel-q148',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-148',
    type: 'drag',
    prompt: 'He ____ her heart when he left.',
    options: ['broke', 'kept', 'hugged', 'healed'],
    correctIndex: 0
  },
  {
    id: 'rel-q149',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-149',
    type: 'choice',
    prompt: 'Which expression means hurting someone emotionally?',
    options: [
      'hurt someone’s feelings',
      'share someone’s feelings',
      'hide someone’s feelings',
      'praise someone’s feelings'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q150',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-150',
    type: 'drag',
    prompt: 'They ____ him on during the race.',
    options: ['cheered', 'blocked', 'ignored', 'reported'],
    correctIndex: 0
  },

  {
    id: 'rel-q151',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-151',
    type: 'choice',
    prompt: 'Which expression means telling people who you are?',
    options: ['introduce yourself', 'introduce someone', 'exclude someone', 'avoid someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q152',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-152',
    type: 'drag',
    prompt: 'Let me ____ you to my colleague.',
    options: ['introduce', 'block', 'ignore', 'report'],
    correctIndex: 0
  },
  {
    id: 'rel-q153',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-153',
    type: 'choice',
    prompt: 'After the workshop, what did they do with their contact details?',
    options: [
      'exchanged contact information',
      'kept secrets',
      'spread rumors',
      'blocked contacts'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q154',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-154',
    type: 'drag',
    prompt: 'She likes to ____ with people at events.',
    options: ['network', 'bully', 'exclude', 'ghost'],
    correctIndex: 0
  },
  {
    id: 'rel-q155',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-155',
    type: 'choice',
    prompt: 'Which expression means keeping a professional distance?',
    options: [
      'keep a professional distance',
      'keep a secret',
      'keep a promise',
      'keep in touch'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q156',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-156',
    type: 'drag',
    prompt: 'He is good at ____ connections at work.',
    options: ['building', 'breaking', 'blocking', 'ignoring'],
    correctIndex: 0
  },
  {
    id: 'rel-q157',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-157',
    type: 'choice',
    prompt: 'Which expression means asking someone to do something for you?',
    options: ['ask for a favor', 'ask for a fight', 'ask for trouble', 'ask for gossip'],
    correctIndex: 0
  },
  {
    id: 'rel-q158',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-158',
    type: 'drag',
    prompt: 'She ____ me a big favor last week.',
    options: ['did', 'owed', 'blocked', 'ignored'],
    correctIndex: 0
  },
  {
    id: 'rel-q159',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-159',
    type: 'choice',
    prompt: 'Which idiom means returning a favor?',
    options: ['return the favor', 'break the favor', 'lose the favor', 'hide the favor'],
    correctIndex: 0
  },
  {
    id: 'rel-q160',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-160',
    type: 'drag',
    prompt: 'I ____ you a favor for helping me move.',
    options: ['owe', 'avoid', 'block', 'ignore'],
    correctIndex: 0
  },

  {
    id: 'rel-q161',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-161',
    type: 'choice',
    prompt: 'Which expression means feeling like you are not included?',
    options: ['feel left out', 'feel connected', 'feel in touch', 'feel appreciated'],
    correctIndex: 0
  },
  {
    id: 'rel-q162',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-162',
    type: 'drag',
    prompt: 'She tries to ____ everyone in the conversation.',
    options: ['include', 'ignore', 'bully', 'exclude'],
    correctIndex: 0
  },
  {
    id: 'rel-q163',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-163',
    type: 'choice',
    prompt: 'Which verb means leaving someone out on purpose?',
    options: ['exclude someone', 'include someone', 'cheer someone on', 'praise someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q164',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-164',
    type: 'drag',
    prompt: 'It is never okay to ____ someone at school.',
    options: ['bully', 'support', 'include', 'praise'],
    correctIndex: 0
  },
  {
    id: 'rel-q165',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-165',
    type: 'choice',
    prompt: 'Which idiom means standing up to a bully?',
    options: [
      'stand up to a bully',
      'look up to a bully',
      'look down on a bully',
      'stay in touch with a bully'
    ],
    correctIndex: 0
  },
  {
    id: 'rel-q166',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-166',
    type: 'drag',
    prompt: 'She ____ her friend in front of the class.',
    options: ['defended', 'ghosted', 'blocked', 'excluded'],
    correctIndex: 0
  },
  {
    id: 'rel-q167',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-167',
    type: 'choice',
    prompt: 'Which phrasal verb means looking down on someone?',
    options: ['look down on someone', 'look after someone', 'look for someone', 'look up to someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q168',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-168',
    type: 'drag',
    prompt: 'Many people ____ up to their parents.',
    options: ['look', 'grow', 'run', 'fall'],
    correctIndex: 0
  },
  {
    id: 'rel-q169',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-169',
    type: 'choice',
    prompt: 'Which expression means being someone others want to copy?',
    options: ['be a role model', 'be a bully', 'be left out', 'be shy around strangers'],
    correctIndex: 0
  },
  {
    id: 'rel-q170',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-170',
    type: 'drag',
    prompt: 'Parents should ____ a good example.',
    options: ['set', 'break', 'delete', 'block'],
    correctIndex: 0
  },

  {
    id: 'rel-q171',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-171',
    type: 'choice',
    prompt: 'Which expression means having a close relationship with someone?',
    options: ['be close to someone', 'be shy around someone', 'be on bad terms', 'be left out'],
    correctIndex: 0
  },
  {
    id: 'rel-q172',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-172',
    type: 'drag',
    prompt: 'We were close, but we ____ apart over time.',
    options: ['grew', 'broke', 'fell', 'blocked'],
    correctIndex: 0
  },
  {
    id: 'rel-q173',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-173',
    type: 'choice',
    prompt: 'Which phrasal verb also means slowly growing apart from someone?',
    options: ['drift apart', 'move on', 'stand up', 'break into'],
    correctIndex: 0
  },
  {
    id: 'rel-q174',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-174',
    type: 'drag',
    prompt: 'We promised to ____ in touch.',
    options: ['stay', 'leave', 'fall', 'block'],
    correctIndex: 0
  },
  {
    id: 'rel-q175',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-175',
    type: 'choice',
    prompt: 'Which idiom means losing contact with someone?',
    options: ['fall out of touch', 'set a good example', 'stand up to a bully', 'take turns speaking'],
    correctIndex: 0
  },
  {
    id: 'rel-q176',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-176',
    type: 'drag',
    prompt: 'I ____ reconnected with an old friend online.',
    options: ['recently', 'rarely', 'never', 'hardly'],
    correctIndex: 0
  },
  {
    id: 'rel-q177',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-177',
    type: 'choice',
    prompt: 'Which expression means liking the same activities or topics?',
    options: ['share interests', 'share secrets', 'share rumors', 'share problems only'],
    correctIndex: 0
  },
  {
    id: 'rel-q178',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-178',
    type: 'drag',
    prompt: 'They ____ very different values.',
    options: ['have', 'set', 'block', 'owe'],
    correctIndex: 0
  },
  {
    id: 'rel-q179',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-179',
    type: 'choice',
    prompt: 'Which expression means having similar backgrounds?',
    options: ['have similar backgrounds', 'have trust issues', 'have a crush', 'have a disagreement'],
    correctIndex: 0
  },
  {
    id: 'rel-q180',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-180',
    type: 'drag',
    prompt: 'They ____ the same goals for the future.',
    options: ['share', 'avoid', 'block', 'hide'],
    correctIndex: 0
  },

  {
    id: 'rel-q181',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-181',
    type: 'choice',
    prompt: 'Which idiom means having a good relationship with someone?',
    options: ['be on good terms', 'be left out', 'be shy around strangers', 'be a bully'],
    correctIndex: 0
  },
  {
    id: 'rel-q182',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-182',
    type: 'drag',
    prompt: 'They have been ____ bad terms for years.',
    options: ['on', 'in', 'at', 'under'],
    correctIndex: 0
  },
  {
    id: 'rel-q183',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-183',
    type: 'choice',
    prompt: 'Which idiom means making peace with someone?',
    options: ['make peace with someone', 'make fun of someone', 'make rumors about someone', 'make distance with someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q184',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-184',
    type: 'drag',
    prompt: 'She tends to ____ a grudge for a long time.',
    options: ['hold', 'hide', 'lose', 'break'],
    correctIndex: 0
  },
  {
    id: 'rel-q185',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-185',
    type: 'choice',
    prompt: 'Which idiom means letting go of the past?',
    options: ['let go of the past', 'fall out of touch', 'set a good example', 'break into a conversation'],
    correctIndex: 0
  },
  {
    id: 'rel-q186',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-186',
    type: 'drag',
    prompt: 'They decided to ____ past their old conflicts.',
    options: ['move', 'fall', 'block', 'hide'],
    correctIndex: 0
  },
  {
    id: 'rel-q187',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-187',
    type: 'choice',
    prompt: 'Which expression means apologizing in a sincere way?',
    options: ['apologize sincerely', 'apologize quickly', 'hold a grudge', 'take offense'],
    correctIndex: 0
  },
  {
    id: 'rel-q188',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-188',
    type: 'drag',
    prompt: 'She ____ his apology.',
    options: ['accepted', 'blocked', 'ignored', 'deleted'],
    correctIndex: 0
  },
  {
    id: 'rel-q189',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-189',
    type: 'choice',
    prompt: 'Which expression means fixing a damaged relationship?',
    options: ['heal a relationship', 'break a relationship', 'ignore a relationship', 'block a relationship'],
    correctIndex: 0
  },
  {
    id: 'rel-q190',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-190',
    type: 'drag',
    prompt: 'They are trying to ____ trust again.',
    options: ['build', 'hide', 'block', 'delete'],
    correctIndex: 0
  },

  {
    id: 'rel-q191',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-191',
    type: 'choice',
    prompt: 'Which expression means being comfortable around people?',
    options: ['be good with people', 'be shy around strangers', 'feel left out', 'hold a grudge'],
    correctIndex: 0
  },
  {
    id: 'rel-q192',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-192',
    type: 'drag',
    prompt: 'He is ____ around strangers.',
    options: ['shy', 'pushy', 'loud', 'bullying'],
    correctIndex: 0
  },
  {
    id: 'rel-q193',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-193',
    type: 'choice',
    prompt: 'Which phrasal verb means joining a conversation?',
    options: ['break into a conversation', 'break up with someone', 'break the ice', 'break someone’s heart'],
    correctIndex: 0
  },
  {
    id: 'rel-q194',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-194',
    type: 'drag',
    prompt: 'Feel free to ____ the conversation.',
    options: ['join', 'block', 'avoid', 'delete'],
    correctIndex: 0
  },
  {
    id: 'rel-q195',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-195',
    type: 'choice',
    prompt: 'Which expression also means switching to a different topic?',
    options: ['change the topic', 'hold a grudge', 'set a good example', 'take turns speaking'],
    correctIndex: 0
  },
  {
    id: 'rel-q196',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-196',
    type: 'drag',
    prompt: 'She ____ his work in front of the team.',
    options: ['complimented', 'ignored', 'blocked', 'reported'],
    correctIndex: 0
  },
  {
    id: 'rel-q197',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-197',
    type: 'choice',
    prompt: 'Which verb means speaking very positively about someone?',
    options: ['praise someone', 'bully someone', 'exclude someone', 'block someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q198',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-198',
    type: 'drag',
    prompt: 'It’s better to ____ in private.',
    options: ['criticize', 'praise', 'hug', 'follow'],
    correctIndex: 0
  },
  {
    id: 'rel-q199',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-199',
    type: 'choice',
    prompt: 'Which verb means giving someone support and motivation?',
    options: ['encourage someone', 'judge someone', 'ghost someone', 'exclude someone'],
    correctIndex: 0
  },
  {
    id: 'rel-q200',
    categoryId: REL_CATEGORY_ID,
    wordId: 'rel-200',
    type: 'drag',
    prompt: 'To be a good friend, you must be a good ____.',
    options: ['listener', 'rumor', 'bully', 'secret'],
    correctIndex: 0
  },
//   END RELATIONSHIPS QUESTIONS

// FOOD QUESTIONS
{
    id: 'food-q1',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-1',
    type: 'drag',
    prompt: 'Breakfast is my favorite ____.',
    options: ['meal', 'dish', 'ingredient', 'dessert'],
    correctIndex: 0
  },
  {
    id: 'food-q2',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-2',
    type: 'drag',
    prompt: 'This is my favorite ____.',
    options: ['dish', 'meal', 'cutlery', 'napkin'],
    correctIndex: 0
  },

  {
    id: 'food-q4',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-4',
    type: 'drag',
    prompt: 'Do you have the ____ for this soup?',
    options: ['recipe', 'meal', 'plate', 'bill'],
    correctIndex: 0
  },
  {
    id: 'food-q5',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-5',
    type: 'choice',
    prompt: 'What do you call going to the store to buy food?',
    options: ['grocery shopping', 'takeout', 'eating out', 'food poisoning'],
    correctIndex: 0
  },
  {
    id: 'food-q6',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-6',
    type: 'drag',
    prompt: 'We ordered Chinese ____.',
    options: ['takeout', 'leftovers', 'beverages', 'cutlery'],
    correctIndex: 0
  },
  {
    id: 'food-q7',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-7',
    type: 'choice',
    prompt: 'What do you call the food that remains after a meal?',
    options: ['leftovers', 'ingredients', 'seasoning', 'kitchenware'],
    correctIndex: 0
  },
  {
    id: 'food-q8',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-8',
    type: 'drag',
    prompt: 'The ____ is in the top drawer.',
    options: ['cutlery', 'dessert', 'menu', 'appetizer'],
    correctIndex: 0
  },
  {
    id: 'food-q9',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-9',
    type: 'choice',
    prompt: 'Use a ____ to wipe your hands.',
    options: ['napkin', 'bowl', 'fork', 'cup'],
    correctIndex: 0
  },
  {
    id: 'food-q10',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-10',
    type: 'drag',
    prompt: 'We ordered an ____ to share.',
    options: ['appetizer', 'dessert', 'main course', 'side dish'],
    correctIndex: 0
  },

  {
    id: 'food-q11',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-11',
    type: 'choice',
    prompt: 'In a restaurant, which expression refers to the main dish?',
    options: ['main course', 'side dish', 'appetizer', 'dessert'],
    correctIndex: 0
  },
  {
    id: 'food-q12',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-12',
    type: 'drag',
    prompt: 'What would you like for ____?',
    options: ['dessert', 'cutlery', 'seasoning', 'kitchenware'],
    correctIndex: 0
  },
  {
    id: 'food-q13',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-13',
    type: 'drag',
    prompt: 'Vegetables served with a main course are often called a ____.',
    options: ['side dish', 'meal', 'beverage', 'takeout'],
    correctIndex: 0
  },
  {
    id: 'food-q14',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-14',
    type: 'drag',
    prompt: 'What ____ do you want with your meal?',
    options: ['beverage', 'plate', 'knife', 'bowl'],
    correctIndex: 0
  },
  {
    id: 'food-q15',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-15',
    type: 'choice',
    prompt: 'Which drink has bubbles in it?',
    options: ['sparkling water', 'still water', 'juice', 'soda'],
    correctIndex: 0
  },
  {
    id: 'food-q16',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-16',
    type: 'drag',
    prompt: 'She ordered ____ water.',
    options: ['still', 'sparkling', 'salty', 'spicy'],
    correctIndex: 0
  },
  {
    id: 'food-q17',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-17',
    type: 'choice',
    prompt: 'What do you call the mix of spices you add to food for flavor?',
    options: ['seasoning', 'ingredient', 'sauce', 'side dish'],
    correctIndex: 0
  },
  {
    id: 'food-q18',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-18',
    type: 'drag',
    prompt: 'Cinnamon is my favorite ____.',
    options: ['spice', 'herb', 'plate', 'bowl'],
    correctIndex: 0
  },
  {
    id: 'food-q19',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-19',
    type: 'drag',
    prompt: 'Fresh ____ add flavor to a dish.',
    options: ['herbs', 'plates', 'cups', 'napkins'],
    correctIndex: 0
  },
  {
    id: 'food-q20',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-20',
    type: 'drag',
    prompt: '____ the chicken overnight for better flavor.',
    options: ['Marinate', 'Burn', 'Boil', 'Spill'],
    correctIndex: 0
  },

  {
    id: 'food-q21',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-21',
    type: 'choice',
    prompt: 'What do you call the action of cutting food into small pieces?',
    options: ['chop', 'bake', 'boil', 'whisk'],
    correctIndex: 0
  },
  {
    id: 'food-q22',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-22',
    type: 'drag',
    prompt: 'Please ____ the tomatoes.',
    options: ['dice', 'pour', 'burn', 'spill'],
    correctIndex: 0
  },
  {
    id: 'food-q23',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-23',
    type: 'choice',
    prompt: 'What verb means cutting bread into slices?',
    options: ['slice', 'whisk', 'stir', 'steam'],
    correctIndex: 0
  },
  {
    id: 'food-q24',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-24',
    type: 'drag',
    prompt: 'We ____ the vegetables on the barbecue.',
    options: ['grilled', 'boiled', 'burnt', 'spoiled'],
    correctIndex: 0
  },
  {
    id: 'food-q25',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-25',
    type: 'choice',
    prompt: 'Which verb means cooking food in an oven?',
    options: ['bake', 'fry', 'boil', 'stir-fry'],
    correctIndex: 0
  },
  {
    id: 'food-q26',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-26',
    type: 'drag',
    prompt: '____ the pasta for 10 minutes.',
    options: ['Boil', 'Burn', 'Spill', 'Freeze'],
    correctIndex: 0
  },
  {
    id: 'food-q27',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-27',
    type: 'choice',
    prompt: 'Which verb means cooking food in hot oil?',
    options: ['fry', 'steam', 'whisk', 'slice'],
    correctIndex: 0
  },
  {
    id: 'food-q28',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-28',
    type: 'drag',
    prompt: '____ the broccoli until soft.',
    options: ['Steam', 'Burn', 'Spill', 'Freeze'],
    correctIndex: 0
  },
  {
    id: 'food-q29',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-29',
    type: 'choice',
    prompt: 'Which verb means moving soup or sauce around with a spoon?',
    options: ['stir', 'freeze', 'slice', 'burn'],
    correctIndex: 0
  },
  {
    id: 'food-q30',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-30',
    type: 'drag',
    prompt: '____-fry the vegetables quickly.',
    options: ['Stir', 'Deep', 'Over', 'Half'],
    correctIndex: 0
  },

  {
    id: 'food-q31',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-31',
    type: 'choice',
    prompt: 'Which verb means beating eggs quickly with a whisk or fork?',
    options: ['whisk', 'bake', 'boil', 'fry'],
    correctIndex: 0
  },
  {
    id: 'food-q32',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-32',
    type: 'drag',
    prompt: '____ to taste with salt and pepper.',
    options: ['Season', 'Spill', 'Freeze', 'Burn'],
    correctIndex: 0
  },
  {
    id: 'food-q33',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-33',
    type: 'choice',
    prompt: 'What do you call a small event where people try food and give their opinion?',
    options: ['taste test', 'taste break', 'taste menu', 'taste limit'],
    correctIndex: 0
  },
  {
    id: 'food-q34',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-34',
    type: 'drag',
    prompt: 'The mango is ____ and ready to eat.',
    options: ['ripe', 'burnt', 'frozen', 'stale'],
    correctIndex: 0
  },
  {
    id: 'food-q35',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-35',
    type: 'choice',
    prompt: 'Which word describes fruit that is not ready to eat yet?',
    options: ['unripe', 'ripe', 'stale', 'overcooked'],
    correctIndex: 0
  },
  {
    id: 'food-q36',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-36',
    type: 'drag',
    prompt: 'The bread is still ____.',
    options: ['fresh', 'burnt', 'stale', 'spoiled'],
    correctIndex: 0
  },
  {
    id: 'food-q37',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-37',
    type: 'drag',
    prompt: 'Bread that is no longer fresh is called ____ bread.',
    options: ['stale', 'fresh', 'juicy', 'creamy'],
    correctIndex: 0
  },
  {
    id: 'food-q38',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-38',
    type: 'drag',
    prompt: 'I prefer ____ snacks like cookies.',
    options: ['sweet', 'burnt', 'sour', 'bitter'],
    correctIndex: 0
  },
  {
    id: 'food-q39',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-39',
    type: 'choice',
    prompt: 'Which word describes salty or non-sweet foods?',
    options: ['savory', 'sweet', 'bitter', 'bland'],
    correctIndex: 0
  },
  {
    id: 'food-q40',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-40',
    type: 'drag',
    prompt: 'This curry is too ____ for me.',
    options: ['spicy', 'bland', 'stale', 'creamy'],
    correctIndex: 0
  },

  {
    id: 'food-q42',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-42',
    type: 'drag',
    prompt: 'The tea is too ____ for me.',
    options: ['bitter', 'juicy', 'creamy', 'crunchy'],
    correctIndex: 0
  },
  {
    id: 'food-q43',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-43',
    type: 'choice',
    prompt: 'Which word describes a sharp taste like a lemon?',
    options: ['sour', 'sweet', 'creamy', 'stale'],
    correctIndex: 0
  },
  {
    id: 'food-q44',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-44',
    type: 'drag',
    prompt: 'I love ____ fries.',
    options: ['crunchy', 'burnt', 'unripe', 'bland'],
    correctIndex: 0
  },
  {
    id: 'food-q45',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-45',
    type: 'choice',
    prompt: 'Which word describes food with a smooth, rich texture?',
    options: ['creamy', 'crunchy', 'juicy', 'burnt'],
    correctIndex: 0
  },
  {
    id: 'food-q46',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-46',
    type: 'drag',
    prompt: 'The steak is very ____.',
    options: ['juicy', 'stale', 'unripe', 'sour'],
    correctIndex: 0
  },
  {
    id: 'food-q47',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-47',
    type: 'drag',
    prompt: 'Soft meat that is easy to cut is called ____.',
    options: ['tender', 'burnt', 'stale', 'hard'],
    correctIndex: 0
  },
  {
    id: 'food-q48',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-48',
    type: 'drag',
    prompt: 'The toast is ____.',
    options: ['burnt', 'fresh', 'juicy', 'creamy'],
    correctIndex: 0
  },
  {
    id: 'food-q49',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-49',
    type: 'drag',
    prompt: 'If something is cooked for too long, it is ____.',
    options: ['overcooked', 'undercooked', 'raw', 'fresh'],
    correctIndex: 0
  },
  {
    id: 'food-q50',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-50',
    type: 'drag',
    prompt: 'The chicken is ____ and not safe to eat.',
    options: ['undercooked', 'balanced', 'organic', 'whole'],
    correctIndex: 0
  },

  {
    id: 'food-q51',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-51',
    type: 'choice',
    prompt: 'Which word refers to kitchen tools in general?',
    options: ['kitchenware', 'cutlery', 'leftovers', 'beverages'],
    correctIndex: 0
  },
  {
    id: 'food-q52',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-52',
    type: 'drag',
    prompt: 'Heat the ____ first before frying.',
    options: ['pan', 'bowl', 'cup', 'napkin'],
    correctIndex: 0
  },
  {
    id: 'food-q53',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-53',
    type: 'choice',
    prompt: 'Which item is used for cooking soups or stews?',
    options: ['pot', 'plate', 'fork', 'knife'],
    correctIndex: 0
  },
  {
    id: 'food-q54',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-54',
    type: 'drag',
    prompt: 'Use a ____ to flip the pancakes.',
    options: ['spatula', 'spoon', 'bowl', 'cup'],
    correctIndex: 0
  },
  {
    id: 'food-q55',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-55',
    type: 'choice',
    prompt: 'Which utensil do you use to stab food and lift it to your mouth?',
    options: ['fork', 'spoon', 'knife', 'cup'],
    correctIndex: 0
  },
  {
    id: 'food-q56',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-56',
    type: 'drag',
    prompt: 'Use a ____ for the soup.',
    options: ['spoon', 'fork', 'knife', 'spatula'],
    correctIndex: 0
  },
  {
    id: 'food-q57',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-57',
    type: 'choice',
    prompt: 'Which utensil do you use to cut food?',
    options: ['knife', 'fork', 'spoon', 'plate'],
    correctIndex: 0
  },
  {
    id: 'food-q58',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-58',
    type: 'drag',
    prompt: 'He broke a ____ while washing dishes.',
    options: ['plate', 'pan', 'cup', 'bowl'],
    correctIndex: 0
  },
  {
    id: 'food-q59',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-59',
    type: 'drag',
    prompt: 'You pour cereal into a ____.',
    options: ['bowl', 'plate', 'pan', 'pot'],
    correctIndex: 0
  },
  {
    id: 'food-q60',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-60',
    type: 'drag',
    prompt: 'I need a ____ of coffee.',
    options: ['cup', 'knife', 'fork', 'spoon'],
    correctIndex: 0
  },

  {
    id: 'food-q61',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-61',
    type: 'choice',
    prompt: 'Which item is a box used for taking food home from a restaurant?',
    options: ['to-go box', 'shopping cart', 'bowl', 'plate'],
    correctIndex: 0
  },
  {
    id: 'food-q62',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-62',
    type: 'drag',
    prompt: 'Can we get the ____ please?',
    options: ['check', 'menu', 'fork', 'cup'],
    correctIndex: 0
  },
  {
    id: 'food-q63',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-63',
    type: 'drag',
    prompt: 'He left a generous ____ for the waiter.',
    options: ['tip', 'napkin', 'plate', 'order'],
    correctIndex: 0
  },
  {
    id: 'food-q64',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-64',
    type: 'drag',
    prompt: 'Do you have a ____ for tonight?',
    options: ['reservation', 'recipe', 'leftover', 'pan'],
    correctIndex: 0
  },
  {
    id: 'food-q65',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-65',
    type: 'drag',
    prompt: 'The person who shows you to your table is the ____.',
    options: ['host / hostess', 'chef', 'waiter', 'customer'],
    correctIndex: 0
  },
  {
    id: 'food-q66',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-66',
    type: 'drag',
    prompt: 'The ____ took our order.',
    options: ['waiter', 'hostess', 'chef', 'driver'],
    correctIndex: 0
  },
  {
    id: 'food-q67',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-67',
    type: 'choice',
    prompt: 'Which person prepares the dishes in a restaurant?',
    options: ['chef', 'waiter', 'hostess', 'customer'],
    correctIndex: 0
  },
  {
    id: 'food-q68',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-68',
    type: 'drag',
    prompt: 'Can I see the ____?',
    options: ['menu', 'plate', 'tip', 'bowl'],
    correctIndex: 0
  },
  {
    id: 'food-q69',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-69',
    type: 'choice',
    prompt: 'Which verb means asking for food or drinks in a restaurant?',
    options: ['order', 'stir', 'whisk', 'spoil'],
    correctIndex: 0
  },
  {
    id: 'food-q70',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-70',
    type: 'drag',
    prompt: 'The ____ of the day is grilled salmon.',
    options: ['special', 'bill', 'cart', 'cup'],
    correctIndex: 0
  },

  {
    id: 'food-q71',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-71',
    type: 'choice',
    prompt: 'Which phrasal verb means eating at a restaurant instead of at home?',
    options: ['eat out', 'take out', 'go bad', 'pig out'],
    correctIndex: 0
  },
  {
    id: 'food-q72',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-72',
    type: 'drag',
    prompt: 'Let’s ____ a bite after work.',
    options: ['grab', 'pour', 'boil', 'spoil'],
    correctIndex: 0
  },
  {
    id: 'food-q73',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-73',
    type: 'choice',
    prompt: 'Which phrasal verb means eating food very quickly?',
    options: ['wolf down', 'pick at', 'go bad', 'eat out'],
    correctIndex: 0
  },
  {
    id: 'food-q74',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-74',
    type: 'drag',
    prompt: 'She only ____ at her food.',
    options: ['picked', 'boiled', 'fried', 'whisked'],
    correctIndex: 0
  },
  {
    id: 'food-q75',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-75',
    type: 'choice',
    prompt: 'Which phrasal verb means eating a lot of food, more than you need?',
    options: ['pig out', 'eat out', 'go bad', 'go shopping'],
    correctIndex: 0
  },
  {
    id: 'food-q76',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-76',
    type: 'drag',
    prompt: 'I’m ____, I can’t eat anymore.',
    options: ['stuffed', 'starving', 'burnt', 'sour'],
    correctIndex: 0
  },
  {
    id: 'food-q77',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-77',
    type: 'choice',
    prompt: 'Which word means extremely hungry?',
    options: ['starving', 'stuffed', 'juicy', 'fresh'],
    correctIndex: 0
  },
  {
    id: 'food-q78',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-78',
    type: 'drag',
    prompt: 'I’m ____ chocolate.',
    options: ['craving', 'boiling', 'spoiling', 'grilling'],
    correctIndex: 0
  },
  {
    id: 'food-q79',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-79',
    type: 'drag',
    prompt: 'If milk “went bad”, it ____.',
    options: ['spoiled', 'froze', 'boiled', 'baked'],
    correctIndex: 0
  },
  {
    id: 'food-q80',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-80',
    type: 'drag',
    prompt: 'He got ____ after eating sushi.',
    options: ['food poisoning', 'grocery shopping', 'reservation', 'balanced diet'],
    correctIndex: 0
  },

  {
    id: 'food-q81',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-81',
    type: 'choice',
    prompt: 'Which expression means a bad physical reaction to something you eat or drink?',
    options: ['allergic reaction', 'food poisoning', 'balanced diet', 'craving'],
    correctIndex: 0
  },
  {
    id: 'food-q82',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-82',
    type: 'drag',
    prompt: 'They ordered a ____-free pizza.',
    options: ['gluten', 'dairy', 'sugar', 'salt'],
    correctIndex: 0
  },
  {
    id: 'food-q83',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-83',
    type: 'choice',
    prompt: 'Which label means that a product does not contain dairy products?',
    options: ['dairy-free', 'gluten-free', 'organic', 'vegan'],
    correctIndex: 0
  },
  {
    id: 'food-q84',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-84',
    type: 'drag',
    prompt: 'She eats a ____ diet (no animal products).',
    options: ['vegan', 'stale', 'spicy', 'bland'],
    correctIndex: 0
  },
  {
    id: 'food-q85',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-85',
    type: 'choice',
    prompt: 'Which word describes a person who does not eat meat?',
    options: ['vegetarian', 'vegan', 'organic', 'processed'],
    correctIndex: 0
  },
  {
    id: 'food-q86',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-86',
    type: 'drag',
    prompt: 'We prefer ____ vegetables from local farms.',
    options: ['organic', 'burnt', 'stale', 'overcooked'],
    correctIndex: 0
  },
  {
    id: 'food-q87',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-87',
    type: 'choice',
    prompt: 'Which term describes food made in a factory with many added ingredients?',
    options: ['processed food', 'whole foods', 'homemade food', 'fresh food'],
    correctIndex: 0
  },
  {
    id: 'food-q88',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-88',
    type: 'drag',
    prompt: '____ foods are more nutritious.',
    options: ['Whole', 'Burnt', 'Stuffed', 'Stale'],
    correctIndex: 0
  },
  {
    id: 'food-q89',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-89',
    type: 'choice',
    prompt: 'Which expression means a way of eating with the right amount of different foods?',
    options: ['balanced diet', 'gluten-free diet', 'frozen food', 'takeout meal'],
    correctIndex: 0
  },
  {
    id: 'food-q90',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-90',
    type: 'drag',
    prompt: 'Watch your ____ sizes to eat healthier.',
    options: ['portion', 'plate', 'knife', 'cart'],
    correctIndex: 0
  },

  {
    id: 'food-q91',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-91',
    type: 'choice',
    prompt: 'In a store, which term refers to a section where food items are displayed?',
    options: ['food shelf', 'bulk section', 'checkout counter', 'kitchenware'],
    correctIndex: 0
  },
  {
    id: 'food-q92',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-92',
    type: 'drag',
    prompt: 'The pasta ____ is on the left.',
    options: ['aisle', 'cart', 'bill', 'plate'],
    correctIndex: 0
  },
  {
    id: 'food-q93',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-93',
    type: 'drag',
    prompt: 'You pay for your groceries at the ____.',
    options: ['checkout counter', 'food shelf', 'bulk section', 'kitchenware aisle'],
    correctIndex: 0
  },
  {
    id: 'food-q94',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-94',
    type: 'drag',
    prompt: 'Nuts are cheaper in the ____ section.',
    options: ['bulk', 'frozen', 'dessert', 'balanced'],
    correctIndex: 0
  },

  {
    id: 'food-q96',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-96',
    type: 'drag',
    prompt: 'The meat ____ quickly in the heat.',
    options: ['spoiled', 'boiled', 'baked', 'whisked'],
    correctIndex: 0
  },
  {
    id: 'food-q97',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-97',
    type: 'choice',
    prompt: 'Which expression means the last date when food is safe to eat?',
    options: ['expiration date', 'reservation time', 'portion size', 'balanced date'],
    correctIndex: 0
  },
  {
    id: 'food-q98',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-98',
    type: 'drag',
    prompt: 'She made ____ cookies.',
    options: ['homemade', 'stale', 'burnt', 'processed'],
    correctIndex: 0
  },
  {
    id: 'food-q99',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-99',
    type: 'choice',
    prompt: 'Which idiom means being extremely hungry?',
    options: ['be starving', 'be stuffed', 'spill the beans', 'pig out'],
    correctIndex: 0
  },
  {
    id: 'food-q100',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-100',
    type: 'drag',
    prompt: 'He finally ____ the beans about the surprise.',
    options: ['spilled', 'boiled', 'baked', 'burnt'],
    correctIndex: 0
  },
  {
    id: 'food-q101',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-101',
    type: 'choice',
    prompt: 'What do you call the first meal of the day, usually eaten in the morning?',
    options: ['breakfast', 'brunch', 'lunch', 'dinner'],
    correctIndex: 0
  },
  {
    id: 'food-q102',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-102',
    type: 'drag',
    prompt: 'We had ____ on Sunday.',
    options: ['brunch', 'breakfast', 'snack', 'dinner'],
    correctIndex: 0
  },
  
  {
    id: 'food-q104',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-104',
    type: 'drag',
    prompt: 'We had pasta for ____.',
    options: ['dinner', 'breakfast', 'lunch', 'brunch'],
    correctIndex: 0
  },
  
  {
    id: 'food-q106',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-106',
    type: 'drag',
    prompt: 'We try not to eat too much ____.',
    options: ['fast food', 'street food', 'junk food', 'frozen food'],
    correctIndex: 0
  },
  
  {
    id: 'food-q108',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-108',
    type: 'drag',
    prompt: 'Mac and cheese is my ____.',
    options: ['comfort food', 'fast food', 'junk food', 'snack'],
    correctIndex: 0
  },
  {
    id: 'food-q109',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-109',
    type: 'choice',
    prompt: 'Which expression describes a meal prepared at home?',
    options: ['home-cooked meal', 'ready-made meal', 'frozen food', 'fast food'],
    correctIndex: 0
  },
  {
    id: 'food-q110',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-110',
    type: 'drag',
    prompt: 'He is trying to cut down on ____.',
    options: ['junk food', 'whole grains', 'lean protein', 'vegetables'],
    correctIndex: 0
  },

   {
    id: 'food-q111',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-111',
    type: 'choice',
    prompt: 'Which expression describes food that is good for your health?',
    options: ['healthy food', 'junk food', 'comfort food', 'street food'],
    correctIndex: 0
  },
  {
    id: 'food-q112',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-112',
    type: 'drag',
    prompt: '____ are good for your health.',
    options: ['Whole grains', 'Junk foods', 'Sugary drinks', 'Fast foods'],
    correctIndex: 0
  },
  {
    id: 'food-q113',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-113',
    type: 'choice',
    prompt: 'Chicken breast is an example of what?',
    options: ['lean protein', 'junk food', 'fast food', 'comfort food'],
    correctIndex: 0
  },
  {
    id: 'food-q114',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-114',
    type: 'drag',
    prompt: 'Some people try to cut ____ from their diet.',
    options: ['carbs', 'plates', 'condiments', 'utensils'],
    correctIndex: 0
  },
  {
    id: 'food-q115',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-115',
    type: 'choice',
    prompt: 'Which expression describes food that contains a lot of fat?',
    options: ['fatty food', 'healthy food', 'whole grains', 'low-fat food'],
    correctIndex: 0
  },
  {
    id: 'food-q116',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-116',
    type: 'drag',
    prompt: '____ have a lot of calories.',
    options: ['Sugary drinks', 'Whole grains', 'Lean proteins', 'Vegetables'],
    correctIndex: 0
  },
  {
    id: 'food-q117',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-117',
    type: 'choice',
    prompt: 'Which expression means “snack salé”?',
    options: ['salty snack', 'sweet snack', 'healthy snack', 'junk snack'],
    correctIndex: 0
  },
  {
    id: 'food-q118',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-118',
    type: 'drag',
    prompt: 'She buys ____-fat yogurt.',
    options: ['low', 'whole', 'extra', 'double'],
    correctIndex: 0
  },
  {
    id: 'food-q117',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-117',
    type: 'choice',
    prompt: 'Which expression describes a snack that tastes salty?',
    options: ['salty snack', 'sweet snack', 'healthy snack', 'junk snack'],
    correctIndex: 0
  },
  {
    id: 'food-q120',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-120',
    type: 'drag',
    prompt: 'Beans are ____ in fiber.',
    options: ['high', 'low', 'sugar-free', 'salty'],
    correctIndex: 0
  },

  {
    id: 'food-q121',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-121',
    type: 'choice',
    prompt: 'Which verb means removing the skin of a fruit or vegetable?',
    options: ['peel', 'grate', 'mash', 'knead'],
    correctIndex: 0
  },
  {
    id: 'food-q122',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-122',
    type: 'drag',
    prompt: '____ some cheese for the pasta.',
    options: ['Grate', 'Boil', 'Fry', 'Peel'],
    correctIndex: 0
  },
  {
    id: 'food-q123',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-123',
    type: 'choice',
    prompt: 'Which verb means crushing potatoes until they are soft and smooth?',
    options: ['mash', 'slice', 'chop', 'roast'],
    correctIndex: 0
  },
  {
    id: 'food-q124',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-124',
    type: 'drag',
    prompt: '____ the dough for five minutes.',
    options: ['Knead', 'Pour', 'Taste', 'Boil'],
    correctIndex: 0
  },
  {
    id: 'food-q125',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-125',
    type: 'choice',
    prompt: 'Which verb means cooking a sauce slowly over low heat?',
    options: ['simmer', 'fry', 'bake', 'grill'],
    correctIndex: 0
  },
  {
    id: 'food-q126',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-126',
    type: 'drag',
    prompt: 'We ____ the chicken with potatoes.',
    options: ['roasted', 'spoiled', 'frozen', 'burnt'],
    correctIndex: 0
  },
  {
    id: 'food-q127',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-127',
    type: 'choice',
    prompt: 'Which cooking method means cooking food close to the top heat in an oven?',
    options: ['broil', 'boil', 'steam', 'mash'],
    correctIndex: 0
  },
  {
    id: 'food-q128',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-128',
    type: 'drag',
    prompt: '____ olive oil over the salad.',
    options: ['Drizzle', 'Burn', 'Freeze', 'Slice'],
    correctIndex: 0
  },
  {
    id: 'food-q129',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-129',
    type: 'choice',
    prompt: 'Which verb means lightly scattering something like salt or sugar over food?',
    options: ['sprinkle', 'boil', 'knead', 'roast'],
    correctIndex: 0
  },
  {
    id: 'food-q130',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-130',
    type: 'drag',
    prompt: '____ butter on the toast.',
    options: ['Spread', 'Spoil', 'Boil', 'Freeze'],
    correctIndex: 0
  },

  {
    id: 'food-q131',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-131',
    type: 'choice',
    prompt: 'Which verb means combining ingredients together?',
    options: ['mix', 'peel', 'roast', 'knead'],
    correctIndex: 0
  },
  {
    id: 'food-q132',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-132',
    type: 'drag',
    prompt: '____ the fruits to make a smoothie.',
    options: ['Blend', 'Grate', 'Slice', 'Boil'],
    correctIndex: 0
  },
  {
    id: 'food-q133',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-133',
    type: 'choice',
    prompt: 'Which verb means letting a liquid flow from one container to another?',
    options: ['pour', 'mash', 'whip', 'stir'],
    correctIndex: 0
  },
  {
    id: 'food-q134',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-134',
    type: 'drag',
    prompt: '____ the soup and add salt if needed.',
    options: ['Taste', 'Slice', 'Boil', 'Freeze'],
    correctIndex: 0
  },
  {
    id: 'food-q136',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-136',
    type: 'drag',
    prompt: 'It’s not healthy to ____ meals.',
    options: ['skip', 'spread', 'drizzle', 'boil'],
    correctIndex: 0
  },
 {
    id: 'food-q137',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-137',
    type: 'choice',
    prompt: 'Which phrasal verb means eating in a very healthy way?',
    options: ['eat clean', 'pig out', 'wolf down', 'eat like a horse'],
    correctIndex: 0
  },
  {
    id: 'food-q138',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-138',
    type: 'drag',
    prompt: 'I’m cutting ____ on sugar.',
    options: ['down', 'over', 'off', 'back'],
    correctIndex: 0
  },
  {
    id: 'food-q139',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-139',
    type: 'choice',
    prompt: 'Which phrasal verb means removing something completely from your diet?',
    options: ['cut out', 'cut back on', 'snack on', 'eat up'],
    correctIndex: 0
  },
  {
    id: 'food-q140',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-140',
    type: 'drag',
    prompt: 'I like to ____ on nuts.',
    options: ['snack', 'boil', 'grill', 'whisk'],
    correctIndex: 0
  },

  {
    id: 'food-q141',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-141',
    type: 'choice',
    prompt: 'Which expression means strong desires for certain foods?',
    options: ['food cravings', 'food waste', 'meal plan', 'ready-made meals'],
    correctIndex: 0
  },
  {
    id: 'food-q142',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-142',
    type: 'drag',
    prompt: 'He always has a ____ snack.',
    options: ['midnight', 'junk', 'whole', 'frozen'],
    correctIndex: 0
  },
  {
    id: 'food-q143',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-143',
    type: 'choice',
    prompt: 'Which expression means eating to feel better emotionally?',
    options: ['comfort eating', 'eat clean', 'meal prep', 'fine dining'],
    correctIndex: 0
  },
  {
    id: 'food-q144',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-144',
    type: 'drag',
    prompt: 'I tend to ____ at parties.',
    options: ['overeat', 'skip', 'snack on', 'eat clean'],
    correctIndex: 0
  },
  {
    id: 'food-q145',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-145',
    type: 'choice',
    prompt: 'Which phrasal verb means eating at home instead of going to a restaurant?',
    options: ['eat in', 'eat out', 'order in', 'go for seconds'],
    correctIndex: 0
  },
  {
    id: 'food-q146',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-146',
    type: 'drag',
    prompt: 'We ____ in sushi.',
    options: ['ordered', 'spread', 'boiled', 'grilled'],
    correctIndex: 0
  },
  {
    id: 'food-q147',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-147',
    type: 'choice',
    prompt: 'Which expression means having food brought to your home?',
    options: ['food delivery', 'meal prep', 'ready-made meal', 'frozen food'],
    correctIndex: 0
  },
  {
    id: 'food-q148',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-148',
    type: 'drag',
    prompt: 'I do ____ prep on Sundays.',
    options: ['meal', 'food', 'plate', 'cart'],
    correctIndex: 0
  },
  {
    id: 'food-q149',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-149',
    type: 'choice',
    prompt: 'Which expression describes a meal that is already prepared and just needs heating?',
    options: ['ready-made meal', 'home-cooked meal', 'comfort food', 'street food'],
    correctIndex: 0
  },
  {
    id: 'food-q150',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-150',
    type: 'drag',
    prompt: 'They keep ____ food for busy days.',
    options: ['frozen', 'junk', 'whole', 'street'],
    correctIndex: 0
  },

  {
    id: 'food-q151',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-151',
    type: 'choice',
    prompt: 'Which expression means food that is thrown away instead of eaten?',
    options: ['food waste', 'food cravings', 'food delivery', 'meal prep'],
    correctIndex: 0
  },
  {
    id: 'food-q152',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-152',
    type: 'drag',
    prompt: 'Friday is ____ night at our house.',
    options: ['leftover', 'fast-food', 'frozen', 'delivery'],
    correctIndex: 0
  },
  {
    id: 'food-q153',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-153',
    type: 'choice',
    prompt: 'Which expression means a schedule of what you will eat over several days?',
    options: ['meal plan', 'food budget', 'meal prep', 'buffet'],
    correctIndex: 0
  },
  {
    id: 'food-q154',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-154',
    type: 'drag',
    prompt: 'Our ____ budget is tight this month.',
    options: ['food', 'house', 'car', 'travel'],
    correctIndex: 0
  },
  {
    id: 'food-q155',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-155',
    type: 'choice',
    prompt: 'Which verb means providing food for an event?',
    options: ['cater', 'cook', 'serve', 'deliver'],
    correctIndex: 0
  },
  {
    id: 'food-q156',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-156',
    type: 'drag',
    prompt: 'We hired a ____ service for the wedding.',
    options: ['catering', 'delivery', 'cleaning', 'painting'],
    correctIndex: 0
  },
  {
    id: 'food-q157',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-157',
    type: 'choice',
    prompt: 'At the hotel, breakfast is served as a what?',
    options: ['buffet', 'cart', 'crate', 'shelf'],
    correctIndex: 0
  },
  {
    id: 'food-q158',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-158',
    type: 'drag',
    prompt: 'We went to an ____-you-can-eat restaurant.',
    options: ['all', 'just', 'only', 'few'],
    correctIndex: 0
  },
  {
    id: 'food-q159',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-159',
    type: 'choice',
    prompt: 'Which expression describes dishes placed on the table for everyone to share?',
    options: ['family-style', 'buffet', 'fine dining', 'fast food'],
    correctIndex: 0
  },
  {
    id: 'food-q160',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-160',
    type: 'drag',
    prompt: 'They enjoy ____ dining once a year.',
    options: ['fine', 'fast', 'street', 'ready-made'],
    correctIndex: 0
  },

  {
    id: 'food-q161',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-161',
    type: 'choice',
    prompt: 'Which expression means being very selective about what you eat?',
    options: ['be picky about food', 'eat like a bird', 'eat clean', 'be full'],
    correctIndex: 0
  },
  {
    id: 'food-q162',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-162',
    type: 'drag',
    prompt: 'Their child is a ____ eater.',
    options: ['picky', 'clean', 'fast', 'whole'],
    correctIndex: 0
  },
  {
    id: 'food-q163',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-163',
    type: 'choice',
    prompt: 'A person who loves food and trying new dishes is called what?',
    options: ['foodie', 'picky eater', 'chef', 'waiter'],
    correctIndex: 0
  },
  {
    id: 'food-q164',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-164',
    type: 'drag',
    prompt: 'We tried a new ____ for the first time.',
    options: ['cuisine', 'plate', 'cart', 'budget'],
    correctIndex: 0
  },
  {
    id: 'food-q165',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-165',
    type: 'choice',
    prompt: 'Which expression means that you have eaten enough and cannot eat more?',
    options: ['be full', 'be starving', 'go for seconds', 'snack on'],
    correctIndex: 0
  },
  {
    id: 'food-q166',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-166',
    type: 'drag',
    prompt: 'The food was so good I went for ____.',
    options: ['seconds', 'thirds', 'snacks', 'dessert'],
    correctIndex: 0
  },
  {
    id: 'food-q167',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-167',
    type: 'choice',
    prompt: 'Which idiom means eating everything on your plate?',
    options: ['lick your plate clean', 'eat like a bird', 'piece of cake', 'have a sweet tooth'],
    correctIndex: 0
  },
  {
    id: 'food-q168',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-168',
    type: 'drag',
    prompt: 'She ____ like a bird.',
    options: ['eats', 'drinks', 'cooks', 'sleeps'],
    correctIndex: 0
  },
  {
    id: 'food-q169',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-169',
    type: 'choice',
    prompt: 'Which idiom means eating a lot of food?',
    options: ['eat like a horse', 'eat like a bird', 'bread and butter', 'big cheese'],
    correctIndex: 0
  },
  {
    id: 'food-q170',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-170',
    type: 'drag',
    prompt: 'I have a ____ tooth, especially for cake.',
    options: ['sweet', 'salty', 'sour', 'bitter'],
    correctIndex: 0
  },

  {
    id: 'food-q171',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-171',
    type: 'choice',
    prompt: 'Which phrasal verb means cutting food into pieces?',
    options: ['chop up', 'heat up', 'cool down', 'eat up'],
    correctIndex: 0
  },
  {
    id: 'food-q172',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-172',
    type: 'drag',
    prompt: '____ up the leftovers in the microwave.',
    options: ['Heat', 'Cool', 'Peel', 'Grate'],
    correctIndex: 0
  },
  {
    id: 'food-q173',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-173',
    type: 'choice',
    prompt: 'Which phrasal verb means letting something become less hot?',
    options: ['cool down', 'heat up', 'boil over', 'eat up'],
    correctIndex: 0
  },,
  {
    id: 'food-q174',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-174',
    type: 'drag',
    prompt: 'Watch the pot or it will ____ over.',
    options: ['boil', 'cool', 'freeze', 'whip'],
    correctIndex: 0
  },
  {
    id: 'food-q175',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-175',
    type: 'choice',
    prompt: 'Which phrasal verb means finishing all the food on your plate?',
    options: ['eat up', 'eat out', 'go off', 'snack on'],
    correctIndex: 0
  },
  {
    id: 'food-q176',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-176',
    type: 'drag',
    prompt: 'They ____ up a big breakfast.',
    options: ['served', 'boiled', 'froze', 'spoiled'],
    correctIndex: 0
  },
  {
    id: 'food-q177',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-177',
    type: 'choice',
    prompt: 'Which phrasal verb means preparing a dish quickly?',
    options: ['whip up', 'boil over', 'cut out', 'live on'],
    correctIndex: 0
  },
  {
    id: 'food-q178',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-178',
    type: 'drag',
    prompt: 'The milk has ____ off.',
    options: ['gone', 'boiled', 'burnt', 'frozen'],
    correctIndex: 0
  },
  {
    id: 'food-q179',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-179',
    type: 'choice',
    prompt: 'Which phrasal verb means mainly surviving on one type of food?',
    options: ['live on', 'eat out', 'snack on', 'cut back on'],
    correctIndex: 0
  },
  {
    id: 'food-q180',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-180',
    type: 'drag',
    prompt: 'She’s cutting ____ on fried food.',
    options: ['back', 'over', 'across', 'through'],
    correctIndex: 0
  },

  {
    id: 'food-q181',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-181',
    type: 'choice',
    prompt: 'Which idiom means that having too many people working on something can ruin it?',
    options: [
      'too many cooks spoil the broth',
      'piece of cake',
      'sell like hotcakes',
      'bread and butter'
    ],
    correctIndex: 0
  },
  {
    id: 'food-q182',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-182',
    type: 'drag',
    prompt: 'He ____ off more than he could chew with this project.',
    options: ['bit', 'ate', 'drank', 'cooked'],
    correctIndex: 0
  },
  {
    id: 'food-q183',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-183',
    type: 'choice',
    prompt: 'Which idiom means wanting to keep everything and still get more?',
    options: [
      'have your cake and eat it too',
      'bring home the bacon',
      'big cheese',
      'piece of cake'
    ],
    correctIndex: 0
  },
  {
    id: 'food-q184',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-184',
    type: 'drag',
    prompt: 'This recipe is a ____ of cake.',
    options: ['piece', 'slice', 'bite', 'crumb'],
    correctIndex: 0
  },
  {
    id: 'food-q185',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-185',
    type: 'choice',
    prompt: 'Which idiom means selling very quickly and in large amounts?',
    options: ['sell like hotcakes', 'bring home the bacon', 'big cheese', 'bread and butter'],
    correctIndex: 0
  },
  {
    id: 'food-q186',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-186',
    type: 'drag',
    prompt: 'He is the big ____ in the kitchen.',
    options: ['cheese', 'bread', 'cake', 'plate'],
    correctIndex: 0
  },
  {
    id: 'food-q187',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-187',
    type: 'choice',
    prompt: 'Which idiom means the main way someone earns money?',
    options: ['bread and butter', 'piece of cake', 'big cheese', 'sell like hotcakes'],
    correctIndex: 0
  },
  {
    id: 'food-q188',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-188',
    type: 'drag',
    prompt: 'She works hard to bring home the ____.',
    options: ['bacon', 'cake', 'cheese', 'bread'],
    correctIndex: 0
  },
  
  {
    id: 'food-q190',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-190',
    type: 'drag',
    prompt: 'We tried a new recipe to ____ things up.',
    options: ['spice', 'boil', 'freeze', 'blend'],
    correctIndex: 0
  },

  {
    id: 'food-q191',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-191',
    type: 'choice',
    prompt: 'Which item do you use to shake salt onto your food?',
    options: ['salt shaker', 'pepper grinder', 'condiment', 'spread'],
    correctIndex: 0
  },
  {
    id: 'food-q192',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-192',
    type: 'drag',
    prompt: 'We bought a new ____ grinder.',
    options: ['pepper', 'salt', 'sugar', 'coffee'],
    correctIndex: 0
  },
  {
    id: 'food-q193',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-193',
    type: 'choice',
    prompt: 'Ketchup and mustard are examples of what?',
    options: ['condiments', 'baked goods', 'whole grains', 'frozen food'],
    correctIndex: 0
  },
  {
    id: 'food-q194',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-194',
    type: 'drag',
    prompt: 'Peanut butter is a popular ____.',
    options: ['spread', 'buffet', 'cart', 'craving'],
    correctIndex: 0
  },
  {
    id: 'food-q195',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-195',
    type: 'choice',
    prompt: 'Which word means a sweet baked item like a croissant or tart?',
    options: ['pastry', 'batter', 'broth', 'dough'],
    correctIndex: 0
  },
  {
    id: 'food-q196',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-196',
    type: 'drag',
    prompt: 'The bakery sells fresh baked ____.',
    options: ['goods', 'plates', 'bowls', 'pans'],
    correctIndex: 0
  },
  {
    id: 'food-q197',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-197',
    type: 'choice',
    prompt: 'Which word means a thick mixture of flour and liquid used to make bread or pizza?',
    options: ['dough', 'batter', 'broth', 'spread'],
    correctIndex: 0
  },
  {
    id: 'food-q198',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-198',
    type: 'drag',
    prompt: 'Pour the ____ into the pan.',
    options: ['batter', 'broth', 'dough', 'spread'],
    correctIndex: 0
  },
  {
    id: 'food-q199',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-199',
    type: 'choice',
    prompt: 'Which word means a thin liquid made by boiling meat or vegetables, used in soups?',
    options: ['broth', 'batter', 'dough', 'spread'],
    correctIndex: 0
  }
  ,
  {
    id: 'food-q200',
    categoryId: FOOD_CATEGORY_ID,
    wordId: 'food-200',
    type: 'drag',
    prompt: 'The argument left a bad ____ in my mouth.',
    options: ['taste', 'meal', 'plate', 'snack'],
    correctIndex: 0
  },
  // END FOOD QUESTIONS

  // EDUCATION QUESTIONS START HERE
  {
    id: 'educ-q1',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-1',
    type: 'choice',
    prompt: 'What do you call the room where students have their lessons?',
    options: ['classroom', 'campus', 'office', 'library'],
    correctIndex: 0
  },
  {
    id: 'educ-q2',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-2',
    type: 'drag',
    prompt: 'The ____ explained the lesson clearly.',
    options: ['teacher', 'student', 'principal', 'tutor'],
    correctIndex: 0
  },

  {
    id: 'educ-q4',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-4',
    type: 'drag',
    prompt: 'Today’s ____ is about history.',
    options: ['lesson', 'exam', 'campus', 'degree'],
    correctIndex: 0
  },
  {
    id: 'educ-q5',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-5',
    type: 'choice',
    prompt: 'Which word means school work that students do at home?',
    options: ['homework', 'exam', 'quiz', 'lecture'],
    correctIndex: 0
  },
  {
    id: 'educ-q6',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-6',
    type: 'drag',
    prompt: 'The ____ is due on Friday.',
    options: ['assignment', 'textbook', 'notebook', 'bus'],
    correctIndex: 0
  },
  {
    id: 'educ-q7',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-7',
    type: 'choice',
    prompt: 'Which expression means the last day something can be handed in?',
    options: ['due date', 'exam date', 'start date', 'holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q8',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-8',
    type: 'drag',
    prompt: 'Please ____ your work before midnight.',
    options: ['submit', 'forget', 'lose', 'erase'],
    correctIndex: 0
  },
  {
    id: 'educ-q9',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-9',
    type: 'choice',
    prompt: 'What is the English word for a score or mark on a test?',
    options: ['grade', 'class', 'course', 'page'],
    correctIndex: 0
  },
  {
    id: 'educ-q10',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-10',
    type: 'drag',
    prompt: 'He ____ the test with 90%.',
    options: ['passed', 'failed', 'dropped', 'cheated'],
    correctIndex: 0
  },

  {
    id: 'educ-q11',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-11',
    type: 'choice',
    prompt: 'Which expression means getting a bad result on a test so you do not pass?',
    options: ['fail a test', 'pass a test', 'take attendance', 'drop a class'],
    correctIndex: 0
  },
  {
    id: 'educ-q12',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-12',
    type: 'drag',
    prompt: 'He ____ out of high school at 17.',
    options: ['dropped', 'signed', 'passed', 'memorized'],
    correctIndex: 0
  },

  {
    id: 'educ-q14',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-14',
    type: 'drag',
    prompt: 'She ____ two hours every night.',
    options: ['studies', 'fails', 'drops', 'cheats'],
    correctIndex: 0
  },
  {
    id: 'educ-q15',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-15',
    type: 'choice',
    prompt: 'Which verb means to go over something again to prepare for a test?',
    options: ['review', 'graduate', 'drop out', 'sign up'],
    correctIndex: 0
  },
  {
    id: 'educ-q16',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-16',
    type: 'drag',
    prompt: 'Try to ____ the formulas.',
    options: ['memorize', 'drop', 'skip', 'erase'],
    correctIndex: 0
  },
  {
    id: 'educ-q17',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-17',
    type: 'choice',
    prompt: 'Which expression means writing down important information during a lesson?',
    options: ['take notes', 'pay attention', 'drop a class', 'hand in'],
    correctIndex: 0
  },
  {
    id: 'educ-q18',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-18',
    type: 'drag',
    prompt: 'We formed a ____ group for the exam.',
    options: ['study', 'sports', 'music', 'family'],
    correctIndex: 0
  },

  {
    id: 'educ-q20',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-20',
    type: 'drag',
    prompt: 'The final ____ is next month.',
    options: ['exam', 'bus', 'cafeteria', 'binder'],
    correctIndex: 0
  },

  {
    id: 'educ-q21',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-21',
    type: 'choice',
    prompt: 'Which expression means a short, surprise test?',
    options: ['pop quiz', 'final exam', 'midterms', 'group project'],
    correctIndex: 0
  },
  {
    id: 'educ-q22',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-22',
    type: 'drag',
    prompt: '____ week is always stressful.',
    options: ['Finals', 'Homework', 'Recess', 'Uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q23',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-23',
    type: 'choice',
    prompt: 'Which word means exams given in the middle of a course?',
    options: ['midterms', 'finals', 'pop quiz', 'syllabus'],
    correctIndex: 0
  },
  {
    id: 'educ-q24',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-24',
    type: 'drag',
    prompt: 'The ____ includes science and math.',
    options: ['curriculum', 'campus', 'bus', 'notebook'],
    correctIndex: 0
  },
  {
    id: 'educ-q25',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-25',
    type: 'choice',
    prompt: 'Which word means a document that describes the content and rules of a course?',
    options: ['syllabus', 'assignment', 'lecture', 'degree'],
    correctIndex: 0
  },
  {
    id: 'educ-q26',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-26',
    type: 'drag',
    prompt: 'The ____ lasted two hours.',
    options: ['lecture', 'recess', 'bus ride', 'snack'],
    correctIndex: 0
  },
  {
    id: 'educ-q27',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-27',
    type: 'choice',
    prompt: 'Which word means a special room where experiments are done?',
    options: ['lab', 'campus', 'dorm', 'cafeteria'],
    correctIndex: 0
  },
  {
    id: 'educ-q28',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-28',
    type: 'drag',
    prompt: 'I hired a ____ for math.',
    options: ['tutor', 'principal', 'classmate', 'chef'],
    correctIndex: 0
  },
  {
    id: 'educ-q29',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-29',
    type: 'choice',
    prompt: 'Which word means money given to a student to help pay for studies?',
    options: ['scholarship', 'tuition fees', 'degree', 'loan'],
    correctIndex: 0
  },
  {
    id: 'educ-q30',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-30',
    type: 'drag',
    prompt: '____ fees increase every year.',
    options: ['Tuition', 'Homework', 'Recess', 'Uniform'],
    correctIndex: 0
  },

  {
    id: 'educ-q31',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-31',
    type: 'choice',
    prompt: 'Which expression means things like pens, notebooks, and rulers used for school?',
    options: ['school supplies', 'school bus', 'school uniform', 'school trip'],
    correctIndex: 0
  },
  {
    id: 'educ-q32',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-32',
    type: 'drag',
    prompt: '____ are expensive.',
    options: ['Textbooks', 'Dorms', 'Buses', 'Uniforms'],
    correctIndex: 0
  },
  {
    id: 'educ-q33',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-33',
    type: 'choice',
    prompt: 'Which word means a small book with blank pages for writing notes?',
    options: ['notebook', 'textbook', 'binder', 'whiteboard'],
    correctIndex: 0
  },
  {
    id: 'educ-q34',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-34',
    type: 'drag',
    prompt: 'Use a ____ for important points.',
    options: ['highlighter', 'bus', 'locker', 'desk'],
    correctIndex: 0
  },
  {
    id: 'educ-q35',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-35',
    type: 'choice',
    prompt: 'Which word means a folder with rings used to hold loose papers?',
    options: ['binder', 'backpack', 'notebook', 'shelf'],
    correctIndex: 0
  },
  {
    id: 'educ-q36',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-36',
    type: 'drag',
    prompt: 'My ____ is very heavy.',
    options: ['backpack', 'desk', 'grade', 'degree'],
    correctIndex: 0
  },
  {
    id: 'educ-q37',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-37',
    type: 'choice',
    prompt: 'Which word means a board you can write on with special markers?',
    options: ['whiteboard', 'blackboard', 'screen', 'wall'],
    correctIndex: 0
  },
  {
    id: 'educ-q38',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-38',
    type: 'drag',
    prompt: '____ is mandatory.',
    options: ['Attendance', 'Homework', 'Recess', 'Uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q39',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-39',
    type: 'choice',
    prompt: 'Which word describes a student who is not in class?',
    options: ['absent', 'present', 'late', 'early'],
    correctIndex: 0
  },
  {
    id: 'educ-q40',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-40',
    type: 'drag',
    prompt: 'All students are ____ today.',
    options: ['present', 'asleep', 'expelled', 'abroad'],
    correctIndex: 0
  },

  {
    id: 'educ-q41',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-41',
    type: 'choice',
    prompt: 'Which expression means lifting your arm to show you want to speak?',
    options: ['raise your hand', 'take attendance', 'drop a class', 'hit the books'],
    correctIndex: 0
  },
  {
    id: 'educ-q42',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-42',
    type: 'drag',
    prompt: 'Feel free to ____ a question.',
    options: ['ask', 'drop', 'grade', 'expel'],
    correctIndex: 0
  },
  {
    id: 'educ-q43',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-43',
    type: 'choice',
    prompt: 'Which expression means checking which students are present in class?',
    options: ['take attendance', 'pay attention', 'hand in', 'drop out'],
    correctIndex: 0
  },
  {
    id: 'educ-q44',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-44',
    type: 'drag',
    prompt: 'The class is ____ late today.',
    options: ['running', 'studying', 'graduating', 'cheating'],
    correctIndex: 0
  },
  {
    id: 'educ-q45',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-45',
    type: 'choice',
    prompt: 'Which phrasal verb means to reach the same level after being behind?',
    options: ['catch up', 'drop out', 'hand in', 'look over'],
    correctIndex: 0
  },
  {
    id: 'educ-q46',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-46',
    type: 'drag',
    prompt: 'Please ____ in your essays.',
    options: ['hand', 'fall', 'drop', 'cheat'],
    correctIndex: 0
  },

  {
    id: 'educ-q48',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-48',
    type: 'drag',
    prompt: 'She decided to ____ the class.',
    options: ['drop', 'memorize', 'grade', 'submit'],
    correctIndex: 0
  },
  {
    id: 'educ-q49',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-49',
    type: 'choice',
    prompt: 'Which phrasal verb means to register for a class or activity?',
    options: ['sign up for', 'drop out of', 'catch up on', 'look over'],
    correctIndex: 0
  },
  {
    id: 'educ-q50',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-50',
    type: 'drag',
    prompt: 'I need to ____ on studying.',
    options: ['focus', 'drop', 'skip', 'cheat'],
    correctIndex: 0
  },

  {
    id: 'educ-q51',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-51',
    type: 'choice',
    prompt: 'Which expression means using dishonest ways to get answers in a test?',
    options: ['cheat on a test', 'drop a class', 'hit the books', 'pay attention'],
    correctIndex: 0
  },
  {
    id: 'educ-q52',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-52',
    type: 'drag',
    prompt: 'He was ____ from school.',
    options: ['expelled', 'present', 'graded', 'tutored'],
    correctIndex: 0
  },
  {
    id: 'educ-q53',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-53',
    type: 'choice',
    prompt: 'Which word means staying after school as a punishment?',
    options: ['detention', 'recess', 'lecture', 'degree'],
    correctIndex: 0
  },
  {
    id: 'educ-q54',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-54',
    type: 'drag',
    prompt: 'The ____ spoke to the parents.',
    options: ['principal', 'student', 'chef', 'driver'],
    correctIndex: 0
  },
  {
    id: 'educ-q55',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-55',
    type: 'choice',
    prompt: 'Which expression means a person who helps students choose studies or careers?',
    options: ['guidance counselor', 'school bus driver', 'tutor', 'principal'],
    correctIndex: 0
  },
  {
    id: 'educ-q56',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-56',
    type: 'drag',
    prompt: 'He sits next to his ____.',
    options: ['classmate', 'principal', 'mentor', 'parent'],
    correctIndex: 0
  },
  {
    id: 'educ-q57',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-57',
    type: 'choice',
    prompt: 'Which expression means a task that classmates must do together?',
    options: ['group project', 'group exam', 'group bus', 'group uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q58',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-58',
    type: 'drag',
    prompt: 'Our ____ is tomorrow.',
    options: ['presentation', 'recess', 'bus ride', 'snack'],
    correctIndex: 0
  },
  {
    id: 'educ-q59',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-59',
    type: 'choice',
    prompt: 'Which expression means a long written assignment based on academic reading?',
    options: ['research paper', 'homework sheet', 'cheat sheet', 'attendance sheet'],
    correctIndex: 0
  },
  {
    id: 'educ-q60',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-60',
    type: 'drag',
    prompt: 'She wants to ____ abroad in France.',
    options: ['study', 'drive', 'cook', 'camp'],
    correctIndex: 0
  },

  {
    id: 'educ-q61',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-61',
    type: 'choice',
    prompt: 'Which word means the area of land and buildings of a university?',
    options: ['campus', 'classroom', 'cafeteria', 'dorm'],
    correctIndex: 0
  },
  {
    id: 'educ-q62',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-62',
    type: 'drag',
    prompt: 'He lives in a ____.',
    options: ['dorm', 'bus', 'library', 'cafeteria'],
    correctIndex: 0
  },
  {
    id: 'educ-q63',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-63',
    type: 'choice',
    prompt: 'Which word means a place in a school or university where you can buy food?',
    options: ['cafeteria', 'library', 'campus', 'classroom'],
    correctIndex: 0
  },
  {
    id: 'educ-q64',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-64',
    type: 'drag',
    prompt: 'The ____ closes at 10 p.m.',
    options: ['library', 'bus', 'dorm', 'recess'],
    correctIndex: 0
  },
  {
    id: 'educ-q65',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-65',
    type: 'choice',
    prompt: 'Which expression means a room where students sit and study quietly?',
    options: ['study hall', 'lecture hall', 'gym', 'lab'],
    correctIndex: 0
  },
  {
    id: 'educ-q66',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-66',
    type: 'drag',
    prompt: 'He is doing ____ on psychology.',
    options: ['research', 'recess', 'detention', 'catering'],
    correctIndex: 0
  },
  {
    id: 'educ-q67',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-67',
    type: 'choice',
    prompt: 'Which word means an official qualification you receive after finishing a program?',
    options: ['degree', 'campus', 'dorm', 'syllabus'],
    correctIndex: 0
  },
  {
    id: 'educ-q68',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-68',
    type: 'drag',
    prompt: 'He ____ in economics.',
    options: ['majored', 'presented', 'cheated', 'dropped'],
    correctIndex: 0
  },
  {
    id: 'educ-q69',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-69',
    type: 'choice',
    prompt: 'Which word means a secondary subject that you study in addition to your main subject?',
    options: ['minor', 'major', 'degree', 'diploma'],
    correctIndex: 0
  },
  {
    id: 'educ-q70',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-70',
    type: 'drag',
    prompt: 'She will ____ next year.',
    options: ['graduate', 'cheat', 'drop out', 'expel'],
    correctIndex: 0
  },
  {
    id: 'educ-q72',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-72',
    type: 'drag',
    prompt: 'She is completing her ____ in chemistry.',
    options: ['PhD', 'recess', 'bus pass', 'cheat sheet'],
    correctIndex: 0
  },
  {
    id: 'educ-q73',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-73',
    type: 'choice',
    prompt: 'What do you call a training period in a company?',
    options: ['internship', 'recess', 'detention', 'lecture'],
    correctIndex: 0
  },
  {
    id: 'educ-q74',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-74',
    type: 'drag',
    prompt: 'A ____ helps guide your career.',
    options: ['mentor', 'principal', 'bus driver', 'janitor'],
    correctIndex: 0
  },
  {
    id: 'educ-q76',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-76',
    type: 'drag',
    prompt: 'The ____ bus arrives at 8 a.m.',
    options: ['school', 'campus', 'research', 'library'],
    correctIndex: 0
  },
  {
    id: 'educ-q77',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-77',
    type: 'choice',
    prompt: 'What do you call a break between classes at school?',
    options: ['recess', 'research', 'lecture', 'detention'],
    correctIndex: 0
  },
  {
    id: 'educ-q78',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-78',
    type: 'drag',
    prompt: 'She won first place at the ____ fair.',
    options: ['science', 'food', 'music', 'sports'],
    correctIndex: 0
  },
  {
    id: 'educ-q79',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-79',
    type: 'choice',
    prompt: 'Who helps students with academic or personal guidance at school?',
    options: ['school counselor', 'principal', 'tutor', 'mentor'],
    correctIndex: 0
  },
  {
    id: 'educ-q80',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-80',
    type: 'drag',
    prompt: 'The ____-teacher meeting is on Monday.',
    options: ['parent', 'student', 'bus', 'library'],
    correctIndex: 0
  },
  {
    id: 'educ-q82',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-82',
    type: 'drag',
    prompt: 'We went on a ____ trip to the museum.',
    options: ['field', 'food', 'bus', 'home'],
    correctIndex: 0
  },
  {
    id: 'educ-q83',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-83',
    type: 'choice',
    prompt: 'What do students sign to confirm they were present?',
    options: ['attendance sheet', 'cheat sheet', 'homework sheet', 'menu'],
    correctIndex: 0
  },
  {
    id: 'educ-q84',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-84',
    type: 'drag',
    prompt: 'Students must wear the school ____. ',
    options: ['uniform', 'bus', 'library', 'binder'],
    correctIndex: 0
  },
  {
    id: 'educ-q85',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-85',
    type: 'choice',
    prompt: 'What do you call a school where students live on campus?',
    options: ['boarding school', 'public school', 'private school', 'high school diploma'],
    correctIndex: 0
  },
  {
    id: 'educ-q86',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-86',
    type: 'drag',
    prompt: 'They enrolled their son in a ____ school.',
    options: ['private', 'recess', 'library', 'detention'],
    correctIndex: 0
  },

  {
    id: 'educ-q88',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-88',
    type: 'drag',
    prompt: 'He received his high school ____. ',
    options: ['diploma', 'bus', 'desk', 'locker'],
    correctIndex: 0
  },
  {
    id: 'educ-q89',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-89',
    type: 'choice',
    prompt: 'What do you call the list of students with outstanding grades?',
    options: ['honor roll', 'whiteboard', 'grade sheet', 'syllabus'],
    correctIndex: 0
  },
  {
    id: 'educ-q90',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-90',
    type: 'drag',
    prompt: 'He hid a ____ sheet in his sleeve.',
    options: ['cheat', 'honor', 'grade', 'exam'],
    correctIndex: 0
  },
  {
    id: 'educ-q92',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-92',
    type: 'drag',
    prompt: 'I need quiet to ____. ',
    options: ['focus', 'graduate', 'drop out', 'cheat'],
    correctIndex: 0
  },
  {
    id: 'educ-q93',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-93',
    type: 'choice',
    prompt: 'What phrasal verb means to not keep up with the expected progress?',
    options: ['fall behind', 'catch up', 'stay on track', 'hit the books'],
    correctIndex: 0
  },
  {
    id: 'educ-q94',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-94',
    type: 'drag',
    prompt: 'She stayed on ____ with her study schedule.',
    options: ['track', 'bus', 'campus', 'recess'],
    correctIndex: 0
  },
  {
    id: 'educ-q96',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-96',
    type: 'drag',
    prompt: 'Let’s ____ ideas for the project.',
    options: ['brainstorm', 'graduate', 'cheat', 'drop out'],
    correctIndex: 0
  },
  {
    id: 'educ-q98',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-98',
    type: 'drag',
    prompt: 'He ____ all night before the exam.',
    options: ['crammed', 'graduated', 'skipped', 'dropped'],
    correctIndex: 0
  },

  {
    id: 'educ-q100',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-100',
    type: 'drag',
    prompt: 'He learned the ____ way to study earlier.',
    options: ['hard', 'easy', 'short', 'fun'],
    correctIndex: 0
  },
  {
    id: 'educ-q102',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-102',
    type: 'drag',
    prompt: '____ learning has become more common.',
    options: ['Distance', 'Hybrid', 'Online', 'Campus'],
    correctIndex: 0
  },
  
  {
    id: 'educ-q104',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-104',
    type: 'drag',
    prompt: 'This class is worth three ____. ',
    options: ['credits', 'grades', 'semesters', 'lectures'],
    correctIndex: 0
  },
  {
    id: 'educ-q105',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-105',
    type: 'choice',
    prompt: 'Which expression means a student who studies full time?',
    options: ['full-time student', 'part-time student', 'gifted student', 'exchange student'],
    correctIndex: 0
  },
  {
    id: 'educ-q106',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-106',
    type: 'drag',
    prompt: 'He is a ____-time student and works at night.',
    options: ['part', 'full', 'extra', 'gifted'],
    correctIndex: 0
  },
  {
    id: 'educ-q107',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-107',
    type: 'choice',
    prompt: 'Which term means taking a year off between studies to work or travel?',
    options: ['gap year', 'school year', 'semester', 'trimester'],
    correctIndex: 0
  },
  {
    id: 'educ-q108',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-108',
    type: 'drag',
    prompt: 'The ____ ends in December.',
    options: ['semester', 'campus', 'assignment', 'rubric'],
    correctIndex: 0
  },
  {
    id: 'educ-q109',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-109',
    type: 'choice',
    prompt: 'Which word means a three-month school term?',
    options: ['trimester', 'semester', 'school year', 'grade level'],
    correctIndex: 0
  },
  {
    id: 'educ-q110',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-110',
    type: 'drag',
    prompt: 'The ____ year starts in September.',
    options: ['school', 'gap', 'campus', 'research'],
    correctIndex: 0
  },

  {
    id: 'educ-q112',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-112',
    type: 'drag',
    prompt: 'She teaches in an ____ school.',
    options: ['elementary', 'middle', 'high', 'vocational'],
    correctIndex: 0
  },
  {
    id: 'educ-q113',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-113',
    type: 'choice',
    prompt: 'Which term means the first level of secondary school?',
    options: ['middle school', 'elementary school', 'high school', 'boarding school'],
    correctIndex: 0
  },
  {
    id: 'educ-q114',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-114',
    type: 'drag',
    prompt: 'They met in ____ school.',
    options: ['high', 'middle', 'elementary', 'boarding'],
    correctIndex: 0
  },

  {
    id: 'educ-q116',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-116',
    type: 'drag',
    prompt: 'He graduated from a large ____. ',
    options: ['university', 'classroom', 'library', 'dorm'],
    correctIndex: 0
  },
  {
    id: 'educ-q117',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-117',
    type: 'choice',
    prompt: 'Which term means a school that prepares students for specific trades or jobs?',
    options: ['vocational school', 'public school', 'boarding school', 'private school'],
    correctIndex: 0
  },
  {
    id: 'educ-q118',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-118',
    type: 'drag',
    prompt: 'She received a tuition ____. ',
    options: ['waiver', 'loan', 'grade', 'schedule'],
    correctIndex: 0
  },
  {
    id: 'educ-q119',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-119',
    type: 'choice',
    prompt: 'Which expression means a loan taken to pay for your studies?',
    options: ['student loan', 'scholarship', 'financial aid', 'extra credit'],
    correctIndex: 0
  },
  {
    id: 'educ-q120',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-120',
    type: 'drag',
    prompt: 'She applied for ____ aid.',
    options: ['financial', 'school', 'exam', 'language'],
    correctIndex: 0
  },

  {
    id: 'educ-q121',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-121',
    type: 'choice',
    prompt: 'Which term means a test that decides your level or group?',
    options: ['placement test', 'entrance exam', 'final exam', 'pop quiz'],
    correctIndex: 0
  },
  {
    id: 'educ-q122',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-122',
    type: 'drag',
    prompt: 'The ____ exam is very competitive.',
    options: ['entrance', 'written', 'oral', 'midterm'],
    correctIndex: 0
  },
  {
    id: 'educ-q123',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-123',
    type: 'choice',
    prompt: 'Which term means an exam where you answer by speaking?',
    options: ['oral exam', 'written exam', 'entrance exam', 'placement test'],
    correctIndex: 0
  },
  {
    id: 'educ-q124',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-124',
    type: 'drag',
    prompt: 'The ____ exam lasts three hours.',
    options: ['written', 'oral', 'pop', 'final'],
    correctIndex: 0
  },

  {
    id: 'educ-q126',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-126',
    type: 'drag',
    prompt: 'The last part is an ____ question.',
    options: ['essay', 'oral', 'multiple-choice', 'placement'],
    correctIndex: 0
  },
  {
    id: 'educ-q127',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-127',
    type: 'choice',
    prompt: 'Which term means your overall average grade, often written as GPA?',
    options: ['grade point average (GPA)', 'grade level', 'degree', 'credit'],
    correctIndex: 0
  },

  {
    id: 'educ-q130',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-130',
    type: 'drag',
    prompt: 'The teacher ____ up my essay with comments.',
    options: ['marked', 'wrote', 'copied', 'lost'],
    correctIndex: 0
  },

  {
    id: 'educ-q131',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-131',
    type: 'choice',
    prompt: 'Which expression means the first week of class when you go over the course plan?',
    options: ['syllabus week', 'finals week', 'reading week', 'exam week'],
    correctIndex: 0
  },
  {
    id: 'educ-q132',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-132',
    type: 'drag',
    prompt: 'Class ____ counts for 20%.',
    options: ['participation', 'library', 'bus', 'uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q133',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-133',
    type: 'choice',
    prompt: 'Which expression means the rules about being present in class?',
    options: ['attendance policy', 'grading scale', 'learning objectives', 'campus rules'],
    correctIndex: 0
  },
  {
    id: 'educ-q134',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-134',
    type: 'drag',
    prompt: 'The learning ____ are listed on the first page.',
    options: ['objectives', 'buses', 'credits', 'books'],
    correctIndex: 0
  },
  {
    id: 'educ-q135',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-135',
    type: 'choice',
    prompt: 'Which word means a document that explains how work will be graded?',
    options: ['rubric', 'syllabus', 'essay', 'lecture'],
    correctIndex: 0
  },
  {
    id: 'educ-q136',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-136',
    type: 'drag',
    prompt: 'The ____ scale goes from A to F.',
    options: ['grading', 'attendance', 'campus', 'bus'],
    correctIndex: 0
  },
  {
    id: 'educ-q137',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-137',
    type: 'choice',
    prompt: 'Which expression means the hours when you can meet the teacher in their office?',
    options: ['office hours', 'class hours', 'break time', 'recess'],
    correctIndex: 0
  },
  {
    id: 'educ-q138',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-138',
    type: 'drag',
    prompt: 'The teacher offered ____ credit for a project.',
    options: ['extra', 'student', 'campus', 'final'],
    correctIndex: 0
  },
  {
    id: 'educ-q139',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-139',
    type: 'choice',
    prompt: 'Which word means extra time given to finish work?',
    options: ['extension', 'expulsion', 'exception', 'exam'],
    correctIndex: 0
  },
  {
    id: 'educ-q140',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-140',
    type: 'drag',
    prompt: '____ is a serious academic offense.',
    options: ['Plagiarism', 'Attendance', 'Recess', 'Group work'],
    correctIndex: 0
  },

  {
    id: 'educ-q141',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-141',
    type: 'choice',
    prompt: 'Which verb means to copy someone else’s work and pretend it is yours?',
    options: ['plagiarize', 'memorize', 'summarize', 'analyze'],
    correctIndex: 0
  },
  {
    id: 'educ-q142',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-142',
    type: 'drag',
    prompt: 'You cannot just ____ and paste from a website.',
    options: ['copy', 'talk', 'sleep', 'draw'],
    correctIndex: 0
  },
  {
    id: 'educ-q144',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-144',
    type: 'drag',
    prompt: 'Include a ____ list at the end.',
    options: ['reference', 'bus', 'campus', 'snack'],
    correctIndex: 0
  },
  {
    id: 'educ-q145',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-145',
    type: 'choice',
    prompt: 'Which word means a place where information comes from?',
    options: ['source', 'subject', 'student', 'schedule'],
    correctIndex: 0
  },
  {
    id: 'educ-q146',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-146',
    type: 'drag',
    prompt: 'The article went through ____ review.',
    options: ['peer', 'teacher', 'student', 'family'],
    correctIndex: 0
  },
  {
    id: 'educ-q147',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-147',
    type: 'choice',
    prompt: 'Which expression means the way a person prefers to learn?',
    options: ['learning style', 'learning goal', 'study schedule', 'campus life'],
    correctIndex: 0
  },
  {
    id: 'educ-q148',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-148',
    type: 'drag',
    prompt: 'I am more of a ____ learner.',
    options: ['visual', 'campus', 'busy', 'social'],
    correctIndex: 0
  },
  {
    id: 'educ-q149',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-149',
    type: 'choice',
    prompt: 'Which expression means an activity where students learn by doing something?',
    options: ['hands-on activity', 'final exam', 'online course', 'group project'],
    correctIndex: 0
  },
  {
    id: 'educ-q150',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-150',
    type: 'drag',
    prompt: 'The teacher prepared an ____ lesson.',
    options: ['interactive', 'sleepy', 'silent', 'short'],
    correctIndex: 0
  },

  {
    id: 'educ-q151',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-151',
    type: 'choice',
    prompt: 'Which expression means a conversation where several students talk together?',
    options: ['group discussion', 'group test', 'group bus', 'group uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q152',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-152',
    type: 'drag',
    prompt: 'We worked in ____ rooms during the online class.',
    options: ['breakout', 'sleep', 'exam', 'storage'],
    correctIndex: 0
  },
  {
    id: 'educ-q153',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-153',
    type: 'choice',
    prompt: 'Which expression means to mention an idea so people can discuss it?',
    options: ['raise a point', 'drop a point', 'skip the point', 'erase the point'],
    correctIndex: 0
  },
  {
    id: 'educ-q154',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-154',
    type: 'drag',
    prompt: 'Please take ____ speaking.',
    options: ['turns', 'books', 'notes', 'buses'],
    correctIndex: 0
  },

  {
    id: 'educ-q156',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-156',
    type: 'drag',
    prompt: 'Can you ____ up the main ideas?',
    options: ['sum', 'drop', 'cheat', 'fall'],
    correctIndex: 0
  },
  {
    id: 'educ-q157',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-157',
    type: 'choice',
    prompt: 'Which phrasal verb means to speak more loudly so others can hear you?',
    options: ['speak up', 'fall behind', 'drop out', 'hit the books'],
    correctIndex: 0
  },
  {
    id: 'educ-q158',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-158',
    type: 'drag',
    prompt: 'Feel free to ____ in with your thoughts.',
    options: ['chime', 'sleep', 'drop', 'skip'],
    correctIndex: 0
  },
  {
    id: 'educ-q159',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-159',
    type: 'choice',
    prompt: 'Which phrasal verb means to explore a topic in more detail?',
    options: ['dig deeper', 'fall behind', 'drop in', 'look over'],
    correctIndex: 0
  },
  {
    id: 'educ-q160',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-160',
    type: 'drag',
    prompt: 'The teacher ____ on this topic yesterday.',
    options: ['touched', 'slept', 'skipped', 'copied'],
    correctIndex: 0
  },

  {
    id: 'educ-q161',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-161',
    type: 'choice',
    prompt: 'Which idiom means to open a book in order to study?',
    options: ['crack a book', 'hit a wall', 'pull an all-nighter', 'hit the road'],
    correctIndex: 0
  },
  {
    id: 'educ-q162',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-162',
    type: 'drag',
    prompt: 'She is a real ____. ',
    options: ['bookworm', 'bus driver', 'footballer', 'singer'],
    correctIndex: 0
  },
  {
    id: 'educ-q163',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-163',
    type: 'choice',
    prompt: 'Which idiom means to do extremely well on a test?',
    options: ['ace a test', 'hit a wall', 'fall behind', 'crack a book'],
    correctIndex: 0
  },
  {
    id: 'educ-q164',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-164',
    type: 'drag',
    prompt: 'She pulled an ____-nighter before the exam.',
    options: ['all', 'early', 'easy', 'quick'],
    correctIndex: 0
  },
  {
    id: 'educ-q165',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-165',
    type: 'choice',
    prompt: 'Which idiom means feeling like your brain cannot take in more information?',
    options: ['brain freeze', 'lightbulb moment', 'back to square one', 'bookworm'],
    correctIndex: 0
  },
  {
    id: 'educ-q166',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-166',
    type: 'drag',
    prompt: 'He feels in over his ____ in this advanced class.',
    options: ['head', 'hands', 'feet', 'desk'],
    correctIndex: 0
  },
  {
    id: 'educ-q167',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-167',
    type: 'choice',
    prompt: 'Which idiom means to suddenly be unable to make progress?',
    options: ['hit a wall', 'hit the books', 'sell like hotcakes', 'be full'],
    correctIndex: 0
  },
  {
    id: 'educ-q168',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-168',
    type: 'drag',
    prompt: 'I had a ____ moment in math class.',
    options: ['lightbulb', 'dark', 'empty', 'sleepy'],
    correctIndex: 0
  },
  {
    id: 'educ-q169',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-169',
    type: 'choice',
    prompt: 'Which idiom means having to start again from the beginning?',
    options: ['back to square one', 'piece of cake', 'big cheese', 'on the back burner'],
    correctIndex: 0
  },
  {
    id: 'educ-q170',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-170',
    type: 'drag',
    prompt: 'You need to learn these verbs by ____. ',
    options: ['heart', 'hand', 'book', 'desk'],
    correctIndex: 0
  },

  {
    id: 'educ-q171',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-171',
    type: 'choice',
    prompt: 'Which expression means to sign in to the online platform?',
    options: [
      'log in to the platform',
      'copy and paste the platform',
      'drop out of the platform',
      'grade the platform'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q172',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-172',
    type: 'drag',
    prompt: 'Don’t forget to ____ your assignment.',
    options: ['upload', 'erase', 'sleep on', 'burn'],
    correctIndex: 0
  },
  {
    id: 'educ-q173',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-173',
    type: 'choice',
    prompt: 'Which expression means to save course files from the internet onto your device?',
    options: [
      'download course materials',
      'upload course materials',
      'mark up course materials',
      'drop course materials'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q174',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-174',
    type: 'drag',
    prompt: 'Please ____ your microphone during the lecture.',
    options: ['mute', 'break', 'sell', 'cook'],
    correctIndex: 0
  },
  {
    id: 'educ-q175',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-175',
    type: 'choice',
    prompt: 'Which expression means to show your computer screen to others online?',
    options: ['share your screen', 'share your homework', 'share your grade', 'share your bus'],
    correctIndex: 0
  },
  {
    id: 'educ-q176',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-176',
    type: 'drag',
    prompt: 'We started a ____ session for group work.',
    options: ['breakout', 'sleep', 'lunch', 'exam'],
    correctIndex: 0
  },
  {
    id: 'educ-q177',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-177',
    type: 'choice',
    prompt: 'Which expression means a website used for taking and managing courses?',
    options: ['learning platform', 'learning bus', 'learning book', 'learning uniform'],
    correctIndex: 0
  },
  {
    id: 'educ-q178',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-178',
    type: 'drag',
    prompt: 'Students completed an ____ quiz online.',
    options: ['interactive', 'silent', 'boring', 'paper'],
    correctIndex: 0
  },
  {
    id: 'educ-q179',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-179',
    type: 'choice',
    prompt: 'Which expression means a website space where people post and reply to messages?',
    options: ['online forum', 'online bus', 'online campus', 'online break'],
    correctIndex: 0
  },
  {
    id: 'educ-q180',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-180',
    type: 'drag',
    prompt: 'The teacher posted an ____ this morning.',
    options: ['announcement', 'exam', 'bus', 'cheat sheet'],
    correctIndex: 0
  },

  {
    id: 'educ-q181',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-181',
    type: 'choice',
    prompt: 'Which expression means to get back on track with your reading?',
    options: [
      'catch up on reading',
      'fall behind on reading',
      'copy and paste reading',
      'skip reading forever'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q182',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-182',
    type: 'drag',
    prompt: 'It’s hard to keep ____ with the class.',
    options: ['up', 'down', 'away', 'off'],
    correctIndex: 0
  },
  {
    id: 'educ-q183',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-183',
    type: 'choice',
    prompt: 'Which expression means to not keep up with homework?',
    options: [
      'fall behind on homework',
      'catch up on homework',
      'hand in homework',
      'double-check homework'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q184',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-184',
    type: 'drag',
    prompt: 'First, ____ the text to get the main idea.',
    options: ['skim', 'sleep', 'burn', 'hide'],
    correctIndex: 0
  },
  {
    id: 'educ-q185',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-185',
    type: 'choice',
    prompt: 'Which expression means to draw a line under the most important ideas?',
    options: [
      'underline key points',
      'delete key points',
      'guess key points',
      'ignore key points'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q186',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-186',
    type: 'drag',
    prompt: '____ the article in your own words.',
    options: ['Summarize', 'Copy', 'Forget', 'Hide'],
    correctIndex: 0
  },
  {
    id: 'educ-q187',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-187',
    type: 'choice',
    prompt: 'Which expression means to complete the exercises your teacher gives you?',
    options: ['do your homework', 'copy your homework', 'skip your homework', 'hide your homework'],
    correctIndex: 0
  },
  {
    id: 'educ-q188',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-188',
    type: 'drag',
    prompt: 'She ____ in her assignment late.',
    options: ['turned', 'slept', 'burned', 'hid'],
    correctIndex: 0
  },
  {
    id: 'educ-q190',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-190',
    type: 'drag',
    prompt: 'Always ____-check your answers before handing in.',
    options: ['double', 'half', 'triple', 'quick'],
    correctIndex: 0
  },

  {
    id: 'educ-q191',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-191',
    type: 'choice',
    prompt: 'Which expression means a student with very high natural ability?',
    options: ['gifted student', 'lazy student', 'late student', 'bad student'],
    correctIndex: 0
  },
  {
    id: 'educ-q192',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-192',
    type: 'drag',
    prompt: 'He has a learning ____ in reading.',
    options: ['disability', 'bus', 'campus', 'desk'],
    correctIndex: 0
  },
  {
    id: 'educ-q193',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-193',
    type: 'choice',
    prompt: 'Which expression means support that is specially adapted to one student?',
    options: [
      'individualized support',
      'group support only',
      'online uniform',
      'campus security'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q194',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-194',
    type: 'drag',
    prompt: 'They try to create an ____ classroom.',
    options: ['inclusive', 'sleepy', 'quiet-only', 'empty'],
    correctIndex: 0
  },
  {
    id: 'educ-q195',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-195',
    type: 'choice',
    prompt: 'Which term means education designed for students with special needs?',
    options: ['special education', 'public education', 'distance education', 'adult education'],
    correctIndex: 0
  },
  {
    id: 'educ-q196',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-196',
    type: 'drag',
    prompt: 'She attends a ____ class for reading.',
    options: ['remedial', 'final', 'bus', 'campus'],
    correctIndex: 0
  },
  {
    id: 'educ-q197',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-197',
    type: 'choice',
    prompt: 'Which expression means a person who helps students choose classes and plan their studies?',
    options: ['academic advisor', 'school bus driver', 'campus guard', 'librarian'],
    correctIndex: 0
  },
  {
    id: 'educ-q198',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-198',
    type: 'drag',
    prompt: 'Set clear learning ____ for the semester.',
    options: ['goals', 'buses', 'cafés', 'uniforms'],
    correctIndex: 0
  },
  {
    id: 'educ-q199',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-199',
    type: 'choice',
    prompt: 'Which expression means a planned timetable for when you will study?',
    options: ['study schedule', 'study bus', 'study wall', 'study lunch'],
    correctIndex: 0
  },
  {
    id: 'educ-q200',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-200',
    type: 'drag',
    prompt: 'She believes in ____ learning.',
    options: ['lifelong', 'short', 'weekend-only', 'sleep'],
    correctIndex: 0
  },
  
  {
    id: 'educ-q302',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-302',
    type: 'drag',
    prompt: 'You must pass the basic class before taking the ____ course.',
    options: ['advanced', 'entry-level', 'elective', 'core'],
    correctIndex: 0
  },
  {
    id: 'educ-q303',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-303',
    type: 'choice',
    prompt: 'Which term means “cours obligatoire”?',
    options: ['core course', 'elective', 'entry-level course', 'online course'],
    correctIndex: 0
  },
  {
    id: 'educ-q304',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-304',
    type: 'drag',
    prompt: 'I chose psychology as an ____. ',
    options: ['elective', 'core course', 'entry-level', 'exam'],
    correctIndex: 0
  },
  {
    id: 'educ-q305',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-305',
    type: 'choice',
    prompt: 'Which expression means “charge de cours”?',
    options: ['course load', 'learning unit', 'reading list', 'study log'],
    correctIndex: 0
  },
  {
    id: 'educ-q306',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-306',
    type: 'drag',
    prompt: 'The course ____ is available online.',
    options: ['outline', 'holiday', 'bus', 'corner'],
    correctIndex: 0
  },
  {
    id: 'educ-q307',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-307',
    type: 'choice',
    prompt: 'Which word means “module”?',
    options: ['module', 'packet', 'booth', 'load'],
    correctIndex: 0
  },
  {
    id: 'educ-q308',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-308',
    type: 'drag',
    prompt: 'Each learning ____ has a quiz.',
    options: ['unit', 'bus', 'corner', 'holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q309',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-309',
    type: 'choice',
    prompt: 'Which term means “exigence du cours”?',
    options: ['course requirement', 'learning outcome', 'course packet', 'study habit'],
    correctIndex: 0
  },
  {
    id: 'educ-q310',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-310',
    type: 'drag',
    prompt: 'This class has a statistics ____. ',
    options: ['prerequisite', 'holiday', 'packet', 'corner'],
    correctIndex: 0
  },

  
  {
    id: 'educ-q312',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-312',
    type: 'drag',
    prompt: 'He is in an ____ program in nursing.',
    options: ['undergraduate', 'graduate', 'vocational', 'remedial'],
    correctIndex: 0
  },
  {
    id: 'educ-q313',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-313',
    type: 'choice',
    prompt: 'Which expression means “relevé de notes”?',
    options: ['academic transcript', 'academic calendar', 'reading list', 'course packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q314',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-314',
    type: 'drag',
    prompt: '____ increased this year.',
    options: ['Enrollment', 'Holidays', 'Bookstore', 'Breaks'],
    correctIndex: 0
  },
  {
    id: 'educ-q315',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-315',
    type: 'choice',
    prompt: 'Which word means “admission”?',
    options: ['admission', 'acceptance letter', 'enrollment', 'probation'],
    correctIndex: 0
  },
  {
    id: 'educ-q316',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-316',
    type: 'drag',
    prompt: 'Medicine is a highly ____ program.',
    options: ['selective', 'quiet', 'late', 'free'],
    correctIndex: 0
  },
  {
    id: 'educ-q317',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-317',
    type: 'choice',
    prompt: 'Which expression means “lettre d’acceptation”?',
    options: ['acceptance letter', 'academic transcript', 'answer key', 'handout'],
    correctIndex: 0
  },
  {
    id: 'educ-q318',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-318',
    type: 'drag',
    prompt: 'He was placed on the ____. ',
    options: ['waitlist', 'holiday list', 'reading list', 'cheat sheet'],
    correctIndex: 0
  },
  {
    id: 'educ-q319',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-319',
    type: 'choice',
    prompt: 'Which term means “probation académique”?',
    options: ['academic probation', 'academic success', 'academic calendar', 'learning contract'],
    correctIndex: 0
  },
  {
    id: 'educ-q320',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-320',
    type: 'drag',
    prompt: 'The ____ sent an email to all students.',
    options: ['dean', 'bus driver', 'bookstore', 'lab'],
    correctIndex: 0
  },

  
  {
    id: 'educ-q322',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-322',
    type: 'drag',
    prompt: 'She works in the biology ____. ',
    options: ['department', 'calendar', 'booth', 'holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q323',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-323',
    type: 'choice',
    prompt: 'Which expression means “rencontre avec le conseiller académique”?',
    options: [
      'academic advisor meeting',
      'group project meeting',
      'parent-teacher meeting',
      'office hour appointment'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q324',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-324',
    type: 'drag',
    prompt: 'We signed a learning ____ for the internship.',
    options: ['contract', 'corner', 'packet', 'holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q325',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-325',
    type: 'choice',
    prompt: 'Which expression means “superviseur de stage”?',
    options: ['internship supervisor', 'dean', 'faculty member', 'tutor'],
    correctIndex: 0
  },
  {
    id: 'educ-q326',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-326',
    type: 'drag',
    prompt: 'The program includes a field ____ in a clinic.',
    options: ['placement', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q327',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-327',
    type: 'choice',
    prompt: 'Which expression means “liste des objectifs d’apprentissage”?',
    options: [
      'learning objectives checklist',
      'reading list',
      'attendance sheet',
      'answer key'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q328',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-328',
    type: 'drag',
    prompt: 'Her academic ____ is very intense.',
    options: ['workload', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q329',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-329',
    type: 'choice',
    prompt: 'Which expression means “critères de correction”?',
    options: ['marking criteria', 'grading scale', 'learning style', 'course load'],
    correctIndex: 0
  },
  {
    id: 'educ-q330',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-330',
    type: 'drag',
    prompt: 'The school conducts a learning outcomes ____ each year.',
    options: ['assessment', 'holiday', 'packet', 'corner'],
    correctIndex: 0
  },

  {
    id: 'educ-q331',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-331',
    type: 'choice',
    prompt: 'Which expression means “bureau des études à l’étranger”?',
    options: [
      'study abroad office',
      'study corner',
      'study booth',
      'study log office'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q332',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-332',
    type: 'drag',
    prompt: 'We practiced pronunciation in the language ____. ',
    options: ['lab', 'corner', 'booth', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q333',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-333',
    type: 'choice',
    prompt: 'Which expression means “liste de lecture”?',
    options: ['reading list', 'answer key', 'attendance list', 'FAQ section'],
    correctIndex: 0
  },
  {
    id: 'educ-q334',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-334',
    type: 'drag',
    prompt: 'The teacher gave us a ____ with key terms.',
    options: ['handout', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
 
  {
    id: 'educ-q336',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-336',
    type: 'drag',
    prompt: 'The campus ____ was crowded.',
    options: ['bookstore', 'corner', 'holiday', 'booth'],
    correctIndex: 0
  },
    {
    "id": "educ-q337",
    "categoryId": EDUCATION_CATEGORY_ID,
    "wordId": "educ-337",
    "type": "choice",
    "prompt": "Which term refers to a small enclosed space used for studying?",
    "options": ["study booth", "study bus", "study fair", "study holiday"],
    "correctIndex": 0
  },
  {
    id: 'educ-q338',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-338',
    type: 'drag',
    prompt: 'The second floor is a ____ zone.',
    options: ['quiet', 'holiday', 'busy', 'noisy'],
    correctIndex: 0
  },
  {
    id: 'educ-q339',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-339',
    type: 'choice',
    prompt: 'Which term means “laboratoire informatique”?',
    options: ['computer lab', 'language lab', 'online lab', 'quiet lab'],
    correctIndex: 0
  },
  {
    id: 'educ-q340',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-340',
    type: 'drag',
    prompt: 'I ran out of printer ____. ',
    options: ['credits', 'holidays', 'corners', 'packets'],
    correctIndex: 0
  },

  {
    id: 'educ-q341',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-341',
    type: 'choice',
    prompt: 'Which expression means “enregistrer la présence”?',
    options: ['log attendance', 'take the bus', 'take a break', 'log off'],
    correctIndex: 0
  },
  {
    id: 'educ-q342',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-342',
    type: 'drag',
    prompt: 'She was marked ____ because she arrived late.',
    options: ['absent', 'holiday', 'early', 'gifted'],
    correctIndex: 0
  },
  {
    id: 'educ-q343',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-343',
    type: 'choice',
    prompt: 'Which expression means “signer la feuille de présence”?',
    options: [
      'sign the attendance sheet',
      'sign the reading list',
      'sign the answer key',
      'sign the course packet'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q344',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-344',
    type: 'drag',
    prompt: 'Check the academic ____ for holidays.',
    options: ['calendar', 'corner', 'packet', 'booth'],
    correctIndex: 0
  },
  {
    id: 'educ-q345',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-345',
    type: 'choice',
    prompt: 'Which expression means “jour férié scolaire”?',
    options: ['school holiday', 'school term', 'school climate', 'school year schedule'],
    correctIndex: 0
  },
  {
    id: 'educ-q346',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-346',
    type: 'drag',
    prompt: 'I’m taking an extra class in the ____ term.',
    options: ['summer', 'winter', 'spring', 'night'],
    correctIndex: 0
  },
  {
    id: 'educ-q347',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-347',
    type: 'choice',
    prompt: 'Which expression means “congé d’hiver”?',
    options: ['winter break', 'spring break', 'summer term', 'school holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q348',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-348',
    type: 'drag',
    prompt: 'They travel during ____ break.',
    options: ['spring', 'winter', 'fall', 'night'],
    correctIndex: 0
  },
  
  {
    id: 'educ-q350',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-350',
    type: 'drag',
    prompt: 'Parents received the school year ____ by email.',
    options: ['schedule', 'holiday', 'term', 'corner'],
    correctIndex: 0
  },

  {
    id: 'educ-q351',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-351',
    type: 'choice',
    prompt: 'Which expression means “apprendre de ses erreurs”?',
    options: [
      'learn from mistakes',
      'learn by heart',
      'learn the hard way only',
      'learn by copying'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q352',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-352',
    type: 'drag',
    prompt: 'Math learning often involves trial and ____. ',
    options: ['error', 'holiday', 'reading', 'booths'],
    correctIndex: 0
  },
  {
    id: 'educ-q353',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-353',
    type: 'choice',
    prompt: 'Which idiom means “faire des liens”?',
    options: ['connect the dots', 'fall behind', 'hit a wall', 'crack a book'],
    correctIndex: 0
  },
  {
    id: 'educ-q354',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-354',
    type: 'drag',
    prompt: 'We tried to ____ things together from our notes.',
    options: ['piece', 'burn', 'skip', 'hide'],
    correctIndex: 0
  },
  
  {
    id: 'educ-q356',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-356',
    type: 'drag',
    prompt: 'The teacher checked that we were all on the same ____. ',
    options: ['page', 'bus', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q357',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-357',
    type: 'choice',
    prompt: 'Which idiom means “mettre trop de détails”?',
    options: [
      'go overboard with details',
      'go off with details',
      'go home with details',
      'go out with details'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q358',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-358',
    type: 'drag',
    prompt: 'The tutor went back to ____ in math.',
    options: ['basics', 'holidays', 'labs', 'booths'],
    correctIndex: 0
  },
  {
    id: 'educ-q359',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-359',
    type: 'choice',
    prompt: 'Which idiom means “prendre de l’avance”?',
    options: ['get ahead', 'fall behind', 'drift off', 'hit a wall'],
    correctIndex: 0
  },
  {
    id: 'educ-q360',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-360',
    type: 'drag',
    prompt: 'The class fell behind ____. ',
    options: ['schedule', 'holiday', 'calendar', 'corner'],
    correctIndex: 0
  },

  {
    id: 'educ-q361',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-361',
    type: 'choice',
    prompt: 'Which expression means “prendre des notes à la main”?',
    options: [
      'take notes by hand',
      'take notes by phone only',
      'take notes by camera',
      'take notes by guessing'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q362',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-362',
    type: 'drag',
    prompt: '____ key ideas in the text.',
    options: ['Highlight', 'Hide', 'Skip', 'Erase'],
    correctIndex: 0
  },
  {
    id: 'educ-q363',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-363',
    type: 'choice',
    prompt: 'Which expression means “faire un plan d’un chapitre”?',
    options: ['outline a chapter', 'skip a chapter', 'burn a chapter', 'copy a chapter'],
    correctIndex: 0
  },
  {
    id: 'educ-q364',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-364',
    type: 'drag',
    prompt: 'She joined a ____ group for chemistry.',
    options: ['study', 'holiday', 'noise', 'reading'],
    correctIndex: 0
  },
  {
    id: 'educ-q365',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-365',
    type: 'choice',
    prompt: 'Which expression means “réexpliquer à quelqu’un pour vérifier la compréhension”?',
    options: ['teach back', 'fall behind', 'copy and paste', 'drift off'],
    correctIndex: 0
  },
  {
    id: 'educ-q366',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-366',
    type: 'drag',
    prompt: 'We worked on ____-taking skills today.',
    options: ['note', 'bus', 'holiday', 'noise'],
    correctIndex: 0
  },
  {
    id: 'educ-q367',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-367',
    type: 'choice',
    prompt: 'Which expression means “coin d’étude”?',
    options: ['study corner', 'study booth', 'study bus', 'study exam'],
    correctIndex: 0
  },
  {
    id: 'educ-q368',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-368',
    type: 'drag',
    prompt: 'I use ____-cancelling headphones to study.',
    options: ['noise', 'holiday', 'book', 'corner'],
    correctIndex: 0
  },
  {
    id: 'educ-q369',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-369',
    type: 'choice',
    prompt: 'Which term means “minuteur Pomodoro”?',
    options: ['pomodoro timer', 'study timer', 'exam timer', 'holiday timer'],
    correctIndex: 0
  },
  {
    id: 'educ-q370',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-370',
    type: 'drag',
    prompt: 'I set a study ____ on my phone.',
    options: ['reminder', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },

  {
    id: 'educ-q371',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-371',
    type: 'choice',
    prompt: 'Which expression means “s’inscrire au tutorat”?',
    options: [
      'sign up for tutoring',
      'sign up for holidays',
      'sign up for cheating',
      'sign up for buses'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q372',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-372',
    type: 'drag',
    prompt: 'I booked an office hour ____. ',
    options: ['appointment', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q373',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-373',
    type: 'choice',
    prompt: 'Which expression means “clarifier ses doutes”?',
    options: [
      'clarify your doubts',
      'copy your doubts',
      'hide your doubts',
      'skip your doubts'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q374',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-374',
    type: 'drag',
    prompt: 'I ____ed the professor about the assignment.',
    options: ['email', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q375',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-375',
    type: 'choice',
    prompt: 'Which expression means “annonce du cours”?',
    options: ['course announcement', 'course packet', 'course outline', 'course load'],
    correctIndex: 0
  },
  {
    id: 'educ-q376',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-376',
    type: 'drag',
    prompt: 'Post your questions on the discussion ____. ',
    options: ['board', 'bus', 'booth', 'holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q377',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-377',
    type: 'choice',
    prompt: 'Which expression means “section FAQ”?',
    options: ['FAQ section', 'help desk', 'reading list', 'handout'],
    correctIndex: 0
  },
  {
    id: 'educ-q378',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-378',
    type: 'drag',
    prompt: 'Don’t miss the online quiz ____. ',
    options: ['deadline', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q379',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-379',
    type: 'choice',
    prompt: 'Which expression means “quiz corrigé automatiquement”?',
    options: ['auto-graded quiz', 'online quiz deadline', 'manual grading', 'pop quiz'],
    correctIndex: 0
  },
  {
    id: 'educ-q380',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-380',
    type: 'drag',
    prompt: 'Essays require ____ grading.',
    options: ['manual', 'auto', 'holiday', 'corner'],
    correctIndex: 0
  },

  {
    id: 'educ-q381',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-381',
    type: 'choice',
    prompt: 'Which expression means “habitude d’étude”?',
    options: ['study habit', 'study bus', 'study booth', 'study holiday'],
    correctIndex: 0
  },
  {
    id: 'educ-q382',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-382',
    type: 'drag',
    prompt: 'He tends to ____ on big projects.',
    options: ['procrastinate', 'highlight', 'outline', 'log'],
    correctIndex: 0
  },
  {
    id: 'educ-q383',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-383',
    type: 'choice',
    prompt: 'Which phrasal verb means “remettre à plus tard”?',
    options: ['put something off', 'fall behind', 'catch up', 'turn in'],
    correctIndex: 0
  },
  {
    id: 'educ-q384',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-384',
    type: 'drag',
    prompt: 'It’s easier to study if you stick to a ____. ',
    options: ['schedule', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q385',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-385',
    type: 'choice',
    prompt: 'Which expression means “rester sur la tâche”?',
    options: ['be on task', 'drift off', 'fall behind', 'put it off'],
    correctIndex: 0
  },
  {
    id: 'educ-q386',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-386',
    type: 'drag',
    prompt: 'I ____ed off during the long lecture.',
    options: ['drift', 'hit', 'crack', 'piece'],
    correctIndex: 0
  },
  {
    id: 'educ-q387',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-387',
    type: 'choice',
    prompt: 'Which expression means “diviser son temps d’étude”?',
    options: [
      'split your study time',
      'skip your study time',
      'burn your study time',
      'hide your study time'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q388',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-388',
    type: 'drag',
    prompt: 'Having a study ____ keeps you motivated.',
    options: ['buddy', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q389',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-389',
    type: 'choice',
    prompt: 'Which expression means “journal d’étude”?',
    options: ['study log', 'study booth', 'study bus', 'study packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q390',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-390',
    type: 'drag',
    prompt: 'We had a review ____ before the exam.',
    options: ['session', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },

  {
    id: 'educ-q391',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-391',
    type: 'choice',
    prompt: 'Which expression means “projet de fin de session”?',
    options: [
      'end-of-term project',
      'final paper',
      'capstone project',
      'study project'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q392',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-392',
    type: 'drag',
    prompt: 'The final ____ is due next week.',
    options: ['paper', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q393',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-393',
    type: 'choice',
    prompt: 'Which term means “projet de fin d’études”?',
    options: ['capstone project', 'group project', 'end-of-term project', 'field placement'],
    correctIndex: 0
  },
  {
    id: 'educ-q394',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-394',
    type: 'drag',
    prompt: 'They practiced oral ____ skills.',
    options: ['presentation', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q395',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-395',
    type: 'choice',
    prompt: 'Which term means “dynamique de groupe”?',
    options: ['group dynamics', 'group project', 'group bus', 'group reading'],
    correctIndex: 0
  },
  {
    id: 'educ-q396',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-396',
    type: 'drag',
    prompt: 'Peer ____ can influence students’ choices.',
    options: ['pressure', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q397',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-397',
    type: 'choice',
    prompt: 'Which term means “climat scolaire”?',
    options: ['school climate', 'school term', 'school holiday', 'school bus'],
    correctIndex: 0
  },
  {
    id: 'educ-q398',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-398',
    type: 'drag',
    prompt: 'Students must follow the code of ____. ',
    options: ['conduct', 'holiday', 'corner', 'packet'],
    correctIndex: 0
  },
  {
    id: 'educ-q399',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-399',
    type: 'choice',
    prompt: 'Which expression means “politique contre l’intimidation”?',
    options: [
      'anti-bullying policy',
      'attendance policy',
      'grading policy',
      'holiday policy'
    ],
    correctIndex: 0
  },
  {
    id: 'educ-q400',
    categoryId: EDUCATION_CATEGORY_ID,
    wordId: 'educ-400',
    type: 'drag',
    prompt: 'Good study habits support academic ____. ',
    options: ['success', 'holiday', 'failure', 'corner'],
    correctIndex: 0
  },
  // End of Education category questions

  //Sports category questions can be added here
{
    "id": "sport-q1",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-1",
    "type": "drag",
    "prompt": "He goes to the gym every morning to ____ and stay healthy.",
    "options": ["warm up", "cool down", "work out", "stretch"],
    "correctIndex": 2
  },
  {
    "id": "sport-q2",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-2",
    "type": "drag",
    "prompt": "Before the game, all players gather to ____ their muscles.",
    "options": ["warm up", "sprint", "stretch", "kick off"],
    "correctIndex": 0
  },
  {
    "id": "sport-q3",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-3",
    "type": "drag",
    "prompt": "After the match, the team walked slowly to ____ and recover.",
    "options": ["cool down", "warm up", "dribble", "pace"],
    "correctIndex": 0
  },
  {
    "id": "sport-q4",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-4",
    "type": "drag",
    "prompt": "It’s important to ____ after every workout to avoid injury.",
    "options": ["stretch", "kick off", "pass the ball", "defense"],
    "correctIndex": 0
  },
  {
    "id": "sport-q5",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-5",
    "type": "drag",
    "prompt": "He does 20 minutes of ____ every morning to improve endurance.",
    "options": ["cardio", "teamwork", "match", "serve"],
    "correctIndex": 0
  },

  {
    "id": "sport-q6",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-6",
    "type": "drag",
    "prompt": "Lifting heavy weights is part of ____ to build muscle.",
    "options": ["strength training", "game plan", "huddle", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q7",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-7",
    "type": "drag",
    "prompt": "She practices ____ to gain power and improve performance.",
    "options": ["weightlifting", "sprint", "corner kick", "drills"],
    "correctIndex": 0
  },
  {
    "id": "sport-q8",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-8",
    "type": "drag",
    "prompt": "He trains every day because he is a professional ____.",
    "options": ["athlete", "referee", "spectator", "coach"],
    "correctIndex": 0
  },
  {
    "id": "sport-q9",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-9",
    "type": "drag",
    "prompt": "The ____ encouraged the team after the loss.",
    "options": ["coach", "goalkeeper", "underdog", "bench"],
    "correctIndex": 0
  },
  {
    "id": "sport-q10",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-10",
    "type": "drag",
    "prompt": "Good ____ is essential for success in team sports.",
    "options": ["teamwork", "speed", "hydration", "offense"],
    "correctIndex": 0
  },

  {
    "id": "sport-q11",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-11",
    "type": "drag",
    "prompt": "The ____ starts at 7 p.m. tonight.",
    "options": ["match", "drill", "pace", "shoot"],
    "correctIndex": 0
  },
  {
    "id": "sport-q12",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-12",
    "type": "drag",
    "prompt": "Before the match, the coach explained the ____ to the players.",
    "options": ["game plan", "time-out", "locker room", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q13",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-13",
    "type": "drag",
    "prompt": "He kicked the ball and managed to ____ the winning goal.",
    "options": ["score", "serve", "sprint", "dribble"],
    "correctIndex": 0
  },
  {
    "id": "sport-q14",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-14",
    "type": "drag",
    "prompt": "The ____ stopped the game after a dangerous play.",
    "options": ["referee", "team captain", "spectator", "coach"],
    "correctIndex": 0
  },
  {
    "id": "sport-q15",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-15",
    "type": "drag",
    "prompt": "Their ____ was very strong and blocked every attempt.",
    "options": ["defense", "pace", "volley", "underdog"],
    "correctIndex": 0
  },

  {
    "id": "sport-q16",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-16",
    "type": "drag",
    "prompt": "Their ____ has been powerful this season, scoring many goals.",
    "options": ["offense", "bench", "serve", "stretch"],
    "correctIndex": 0
  },
  {
    "id": "sport-q17",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-17",
    "type": "drag",
    "prompt": "The defender attempted to ____ his opponent.",
    "options": ["tackle", "warm up", "dribble", "hydrate"],
    "correctIndex": 0
  },
  {
    "id": "sport-q18",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-18",
    "type": "drag",
    "prompt": "The game will ____ in just a few minutes.",
    "options": ["kick off", "cool down", "stretch", "pass the ball"],
    "correctIndex": 0
  },
  {
    "id": "sport-q19",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-19",
    "type": "drag",
    "prompt": "The coach called a ____ to reorganize the team.",
    "options": ["time-out", "assist", "corner kick", "sprint"],
    "correctIndex": 0
  },
  {
    "id": "sport-q20",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-20",
    "type": "drag",
    "prompt": "At ____, the score was tied 1-1.",
    "options": ["half-time", "pace", "field", "warm up"],
    "correctIndex": 0
  },

  {
    "id": "sport-q21",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-21",
    "type": "drag",
    "prompt": "A ____ replaced the injured player.",
    "options": ["substitute", "spectator", "team captain", "referee"],
    "correctIndex": 0
  },
  {
    "id": "sport-q22",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-22",
    "type": "drag",
    "prompt": "He stayed on the ____ for the entire match.",
    "options": ["bench", "track", "goalkeeper", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q23",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-23",
    "type": "drag",
    "prompt": "The ____ cheered loudly when their team scored.",
    "options": ["spectator", "offense", "pace", "sprint"],
    "correctIndex": 0
  },
  {
    "id": "sport-q24",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-24",
    "type": "drag",
    "prompt": "The ____ was packed with fans for the big game.",
    "options": ["stadium", "court", "bench", "sprain"],
    "correctIndex": 0
  },
  {
    "id": "sport-q25",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-25",
    "type": "drag",
    "prompt": "He ran four laps around the ____.",
    "options": ["track", "field", "court", "gym"],
    "correctIndex": 0
  },

  {
    "id": "sport-q26",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-26",
    "type": "drag",
    "prompt": "The soccer match was played on a very wet ____ after the rain.",
    "options": ["field", "court", "track", "bench"],
    "correctIndex": 0
  },
  {
    "id": "sport-q27",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-27",
    "type": "drag",
    "prompt": "They played the tennis match on a clay ____.",
    "options": ["court", "stadium", "track", "locker room"],
    "correctIndex": 0
  },
  {
    "id": "sport-q28",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-28",
    "type": "drag",
    "prompt": "He goes to the ____ every morning before work.",
    "options": ["gym", "stadium", "bench", "court"],
    "correctIndex": 0
  },
  {
    "id": "sport-q29",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-29",
    "type": "drag",
    "prompt": "The team went to the ____ to change after the game.",
    "options": ["locker room", "stadium", "bench", "track"],
    "correctIndex": 0
  },
  {
    "id": "sport-q30",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-30",
    "type": "drag",
    "prompt": "We have basketball ____ right after school.",
    "options": ["practice", "corner kick", "serve", "offense"],
    "correctIndex": 0
  },

  {
    "id": "sport-q31",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-31",
    "type": "drag",
    "prompt": "Today, the coach made us do several passing ____.",
    "options": ["drills", "laps", "kicks", "serves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q32",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-32",
    "type": "drag",
    "prompt": "Running long distances helps build ____.",
    "options": ["endurance", "corner kick", "referee", "spectator"],
    "correctIndex": 0
  },
  {
    "id": "sport-q33",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-33",
    "type": "drag",
    "prompt": "Cycling uphill requires a lot of ____.",
    "options": ["stamina", "time-out", "bench", "serve"],
    "correctIndex": 0
  },
  {
    "id": "sport-q34",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-34",
    "type": "drag",
    "prompt": "Good ____ helps players move quickly and change direction.",
    "options": ["agility", "goalkeeper", "track", "hydration"],
    "correctIndex": 0
  },
  {
    "id": "sport-q35",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-35",
    "type": "drag",
    "prompt": "He increased his ____ by lifting heavier weights.",
    "options": ["strength", "speed", "warm up", "kick off"],
    "correctIndex": 0
  },

  {
    "id": "sport-q36",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-36",
    "type": "drag",
    "prompt": "Sprinters need a lot of ____ to win short races.",
    "options": ["speed", "hydration", "huddle", "time-out"],
    "correctIndex": 0
  },
  {
    "id": "sport-q37",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-37",
    "type": "drag",
    "prompt": "She kept a steady ____ during the marathon.",
    "options": ["pace", "shoot", "offside", "match"],
    "correctIndex": 0
  },
  {
    "id": "sport-q38",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-38",
    "type": "drag",
    "prompt": "He trained hard to ____ a new world record.",
    "options": ["set a record", "fall behind", "keep up", "pass the ball"],
    "correctIndex": 0
  },
  {
    "id": "sport-q39",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-39",
    "type": "drag",
    "prompt": "The workout was so easy he didn’t even ____.",
    "options": ["break a sweat", "give up", "sprint", "dribble"],
    "correctIndex": 0
  },
  {
    "id": "sport-q40",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-40",
    "type": "drag",
    "prompt": "During the final match, he decided to ____ and push his limits.",
    "options": ["give it his all", "warm up", "kick the ball", "bench"],
    "correctIndex": 0
  },

  {
    "id": "sport-q41",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-41",
    "type": "drag",
    "prompt": "To improve, you must ____ and try harder every day.",
    "options": ["push yourself", "hit your stride", "kick off", "cool down"],
    "correctIndex": 0
  },
  {
    "id": "sport-q42",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-42",
    "type": "drag",
    "prompt": "The team decided to ____ in the last quarter and try everything.",
    "options": ["go all out", "defense", "free kick", "stretch"],
    "correctIndex": 0
  },
  {
    "id": "sport-q43",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-43",
    "type": "drag",
    "prompt": "Even when tired, she refused to ____ and kept running.",
    "options": ["give up", "cool down", "pass the ball", "time-out"],
    "correctIndex": 0
  },
  {
    "id": "sport-q44",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-44",
    "type": "drag",
    "prompt": "Try to ____ with the group during the long run.",
    "options": ["keep up", "kick off", "serve", "huddle"],
    "correctIndex": 0
  },
  {
    "id": "sport-q45",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-45",
    "type": "drag",
    "prompt": "He started strong but began to ____ in the final lap.",
    "options": ["fall behind", "catch up", "bench", "warm up"],
    "correctIndex": 0
  },

  {
    "id": "sport-q46",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-46",
    "type": "drag",
    "prompt": "She sprinted hard at the end to ____ to the leader.",
    "options": ["catch up", "kick the ball", "referee", "cool down"],
    "correctIndex": 0
  },
  {
    "id": "sport-q47",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-47",
    "type": "drag",
    "prompt": "He changed his training routine to ____ and improve faster.",
    "options": ["level up", "fall behind", "tie", "hydration"],
    "correctIndex": 0
  },
  {
    "id": "sport-q48",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-48",
    "type": "drag",
    "prompt": "The team must ____ their performance to win the championship.",
    "options": ["step up your game", "tie", "kick off", "serve"],
    "correctIndex": 0
  },
  {
    "id": "sport-q49",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-49",
    "type": "drag",
    "prompt": "He said he would ____ after work to stay in shape.",
    "options": ["hit the gym", "corner kick", "warm up", "lose your breath"],
    "correctIndex": 0
  },
  {
    "id": "sport-q50",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-50",
    "type": "drag",
    "prompt": "She is in ____ this season and performing better than ever.",
    "options": ["peak performance", "stamina", "half-time", "offside"],
    "correctIndex": 0
  },

  {
    "id": "sport-q51",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-51",
    "type": "drag",
    "prompt": "He felt a sharp pain in his knee and knew it was an ____.",
    "options": ["injury", "sprain", "cramp", "fracture"],
    "correctIndex": 0
  },
  {
    "id": "sport-q52",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-52",
    "type": "drag",
    "prompt": "She twisted her ankle and suffered a painful ____.",
    "options": ["sprain", "injury", "corner kick", "pace"],
    "correctIndex": 0
  },
  {
    "id": "sport-q53",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-53",
    "type": "drag",
    "prompt": "The X-ray showed he had a small ____ in his wrist.",
    "options": ["fracture", "cramp", "offside", "sprint"],
    "correctIndex": 0
  },
  {
    "id": "sport-q54",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-54",
    "type": "drag",
    "prompt": "I got a painful ____ in my leg while running.",
    "options": ["cramp", "dribble", "stadium", "endurance"],
    "correctIndex": 0
  },
  {
    "id": "sport-q55",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-55",
    "type": "drag",
    "prompt": "Proper ____ is essential during long workouts.",
    "options": ["hydration", "warm up", "spectator", "huddle"],
    "correctIndex": 0
  },

  {
    "id": "sport-q56",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-56",
    "type": "drag",
    "prompt": "Using ____ helps prevent injuries during weight training.",
    "options": ["proper form", "kick the ball", "pace", "serve"],
    "correctIndex": 0
  },
  {
    "id": "sport-q57",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-57",
    "type": "drag",
    "prompt": "We had a long ____ today that focused on speed drills.",
    "options": ["training session", "warm up", "locker room", "defense"],
    "correctIndex": 0
  },
  {
    "id": "sport-q58",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-58",
    "type": "drag",
    "prompt": "His ____ is to run a full marathon next year.",
    "options": ["fitness goal", "time-out", "serve", "shoot"],
    "correctIndex": 0
  },
  {
    "id": "sport-q59",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-59",
    "type": "drag",
    "prompt": "She achieved a new ____ during her race today.",
    "options": ["personal best", "sprain", "teamwork", "kick off"],
    "correctIndex": 0
  },
  {
    "id": "sport-q60",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-60",
    "type": "drag",
    "prompt": "Feeling ____ after lifting weights is completely normal.",
    "options": ["muscle soreness", "hydration", "corner kick", "referee"],
    "correctIndex": 0
  },

  {
    "id": "sport-q61",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-61",
    "type": "drag",
    "prompt": "He runs every day to ____ and stay healthy.",
    "options": ["stay in shape", "level up", "kick the ball", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q62",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-62",
    "type": "drag",
    "prompt": "She wants to ____ before summer arrives.",
    "options": ["get in shape", "cool down", "assist", "catch up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q63",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-63",
    "type": "drag",
    "prompt": "He started running too fast and began to ____.",
    "options": ["lose your breath", "keep up", "dribble", "kick off"],
    "correctIndex": 0
  },
  {
    "id": "sport-q64",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-64",
    "type": "drag",
    "prompt": "Stop for a moment so you can ____ before continuing.",
    "options": ["catch your breath", "shoot", "warm up", "drill"],
    "correctIndex": 0
  },
  {
    "id": "sport-q65",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-65",
    "type": "drag",
    "prompt": "The game ended in a huge ____ with a score of 8–0.",
    "options": ["blowout", "comeback", "tie", "overtime"],
    "correctIndex": 0
  },

  {
    "id": "sport-q66",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-66",
    "type": "drag",
    "prompt": "The team made an unbelievable ____ and won the game.",
    "options": ["comeback", "corner kick", "warm up", "assist"],
    "correctIndex": 0
  },
  {
    "id": "sport-q67",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-67",
    "type": "drag",
    "prompt": "The ____ surprised everyone by winning the match.",
    "options": ["underdog", "referee", "spectator", "sprain"],
    "correctIndex": 0
  },
  {
    "id": "sport-q68",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-68",
    "type": "drag",
    "prompt": "The game ended in a ____ after neither team scored.",
    "options": ["tie", "overtime", "foul", "offside"],
    "correctIndex": 0
  },
  {
    "id": "sport-q69",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-69",
    "type": "drag",
    "prompt": "The match went into ____ because the score was still equal.",
    "options": ["overtime", "half-time", "field", "corner kick"],
    "correctIndex": 0
  },
  {
    "id": "sport-q70",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-70",
    "type": "drag",
    "prompt": "The final goal was scored in ____, ending the game instantly.",
    "options": ["sudden death", "penalty", "serve", "shoot"],
    "correctIndex": 0
  },

  {
    "id": "sport-q71",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-71",
    "type": "drag",
    "prompt": "Stay focused and ____ during the entire play.",
    "options": ["keep your eye on the ball", "warm up", "cool down", "dribble"],
    "correctIndex": 0
  },
  {
    "id": "sport-q72",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-72",
    "type": "drag",
    "prompt": "He finally began to ____ in the second half and play smoothly.",
    "options": ["hit your stride", "kick off", "shoot", "fall behind"],
    "correctIndex": 0
  },
  {
    "id": "sport-q73",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-73",
    "type": "drag",
    "prompt": "The team confidently stepped together to ____ before the match.",
    "options": ["step onto the field", "corner kick", "warm up", "catch up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q74",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-74",
    "type": "drag",
    "prompt": "He tried to ____ but hit the ball too high.",
    "options": ["kick the ball", "serve", "shoot", "dribble"],
    "correctIndex": 0
  },
  {
    "id": "sport-q75",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-75",
    "type": "drag",
    "prompt": "During the play, he decided to ____ to his open teammate.",
    "options": ["pass the ball", "warm up", "pace", "cool down"],
    "correctIndex": 0
  },

  {
    "id": "sport-q76",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-76",
    "type": "drag",
    "prompt": "He tried to ____ from the three-point line but missed.",
    "options": ["shoot", "serve", "dribble", "sprint"],
    "correctIndex": 0
  },
  {
    "id": "sport-q77",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-77",
    "type": "drag",
    "prompt": "She managed to ____ past the defender with ease.",
    "options": ["dribble", "warm up", "offside", "pace"],
    "correctIndex": 0
  },
  {
    "id": "sport-q78",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-78",
    "type": "drag",
    "prompt": "His tennis ____ is extremely powerful.",
    "options": ["serve", "shoot", "kick the ball", "time-out"],
    "correctIndex": 0
  },
  {
    "id": "sport-q79",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-79",
    "type": "drag",
    "prompt": "He hit a perfect ____ during the rally.",
    "options": ["volley", "warm up", "tie", "hydration"],
    "correctIndex": 0
  },
  {
    "id": "sport-q80",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-80",
    "type": "drag",
    "prompt": "They ____ to the finish line with everything they had left.",
    "options": ["sprinted", "served", "cooled down", "paced"],
    "correctIndex": 0
  },

  {
    "id": "sport-q81",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-81",
    "type": "drag",
    "prompt": "They completed a long ____ this morning to improve endurance.",
    "options": ["endurance run", "drill", "warm up", "corner kick"],
    "correctIndex": 0
  },
  {
    "id": "sport-q82",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-82",
    "type": "drag",
    "prompt": "She trained for months before running the full ____.",
    "options": ["marathon", "lap", "serve", "kick off"],
    "correctIndex": 0
  },
  {
    "id": "sport-q83",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-83",
    "type": "drag",
    "prompt": "They ran five ____ around the track today.",
    "options": ["laps", "drills", "time-outs", "comebacks"],
    "correctIndex": 0
  },
  {
    "id": "sport-q84",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-84",
    "type": "drag",
    "prompt": "The ____ made an incredible save and prevented a goal.",
    "options": ["goalkeeper", "referee", "underdog", "sprain"],
    "correctIndex": 0
  },
  {
    "id": "sport-q85",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-85",
    "type": "drag",
    "prompt": "The referee awarded a ____ after the foul.",
    "options": ["penalty", "free kick", "overtime", "kick the ball"],
    "correctIndex": 0
  },

  {
    "id": "sport-q86",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-86",
    "type": "drag",
    "prompt": "He committed a ____ early in the game.",
    "options": ["foul", "assist", "sprain", "defense"],
    "correctIndex": 0
  },
  {
    "id": "sport-q87",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-87",
    "type": "drag",
    "prompt": "They scored from a perfectly executed ____.",
    "options": ["free kick", "sprint", "hit your stride", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q88",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-88",
    "type": "drag",
    "prompt": "The ____ led to a dangerous chance near the goal.",
    "options": ["corner kick", "sudden death", "tie", "pace"],
    "correctIndex": 0
  },
  {
    "id": "sport-q89",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-89",
    "type": "drag",
    "prompt": "The goal was canceled because the player was in ____.",
    "options": ["offside", "overtime", "half-time", "fitness goal"],
    "correctIndex": 0
  },
  {
    "id": "sport-q90",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-90",
    "type": "drag",
    "prompt": "He made a brilliant ____ by passing the ball to his teammate.",
    "options": ["assist", "defense", "sprain", "cool down"],
    "correctIndex": 0
  },

  {
    "id": "sport-q91",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-91",
    "type": "drag",
    "prompt": "The ____ motivated the players before the match started.",
    "options": ["team captain", "spectator", "referee", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q92",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-92",
    "type": "drag",
    "prompt": "The team formed a ____ to discuss strategy before the game.",
    "options": ["huddle", "dribble", "warm up", "overtime"],
    "correctIndex": 0
  },
  {
    "id": "sport-q93",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-93",
    "type": "drag",
    "prompt": "The crowd began to ____ loudly after the goal.",
    "options": ["cheer", "pace", "serve", "free kick"],
    "correctIndex": 0
  },
  {
    "id": "sport-q94",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-94",
    "type": "drag",
    "prompt": "Good ____ is important for fair and respectful competition.",
    "options": ["sportsmanship", "hydration", "offense", "tie"],
    "correctIndex": 0
  },
  {
    "id": "sport-q95",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-95",
    "type": "drag",
    "prompt": "They reached the ____ game after winning the semifinals.",
    "options": ["championship", "match", "time-out", "track"],
    "correctIndex": 0
  },

  {
    "id": "sport-q96",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-96",
    "type": "drag",
    "prompt": "The ____ will last three days and include many teams.",
    "options": ["tournament", "corner kick", "huddle", "warm up"],
    "correctIndex": 0
  },
  {
    "id": "sport-q97",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-97",
    "type": "drag",
    "prompt": "They faced ____ in the quarter-finals but managed to survive.",
    "options": ["elimination", "assist", "sprain", "free kick"],
    "correctIndex": 0
  },
  {
    "id": "sport-q98",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-98",
    "type": "drag",
    "prompt": "The team worked hard all season to ____ for the finals.",
    "options": ["qualify", "cool down", "warm up", "kick the ball"],
    "correctIndex": 0
  },
  {
    "id": "sport-q99",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-99",
    "type": "drag",
    "prompt": "The team is on a five-game ____ and hopes to extend it.",
    "options": ["win streak", "serve", "overtime", "sprain"],
    "correctIndex": 0
  },
  {
    id: 'sport-q100',
    categoryId: SPORT_CATEGORY_ID,
    wordId: 'sport-100',
    type: 'drag',
    prompt: 'Playing at home helped the team because they had ____.',
    options: ["home advantage", "sudden death", "corner kick", "tie"],
    correctIndex: 0
  },
  {
  "id": "sport-q131",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-131",
  "type": "drag",
  "prompt": "He loves doing a ____ because training with others keeps him motivated.",
  "options": ["group workout", "rest day", "foam roller", "meal prep"],
  "correctIndex": 0
},
{
  "id": "sport-q132",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-132",
  "type": "drag",
  "prompt": "Don’t forget to bring your ____ to class.",
  "options": ["yoga mat", "treadmill", "jump rope", "gym bag"],
  "correctIndex": 0
},
{
  "id": "sport-q133",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-133",
  "type": "drag",
  "prompt": "That ____ is very difficult for beginners to learn.",
  "options": ["yoga pose", "warm up", "cooldown walk", "serve"],
  "correctIndex": 0
},
{
  "id": "sport-q134",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-134",
  "type": "drag",
  "prompt": "____ helps strengthen your core and improve stability.",
  "options": ["Pilates", "tournament", "interval training", "leg day"],
  "correctIndex": 0
},
{
  "id": "sport-q135",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-135",
  "type": "drag",
  "prompt": "Never skip your ____ after a workout.",
  "options": ["cool-down stretch", "free kick", "corner kick", "time-out"],
  "correctIndex": 0
},
{
  "id": "sport-q136",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-136",
  "type": "drag",
  "prompt": "A ____ helps loosen tight muscles after training.",
  "options": ["foam roller", "barbell", "jump rope", "stadium"],
  "correctIndex": 0
},
{
  "id": "sport-q137",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-137",
  "type": "drag",
  "prompt": "Doing regular ____ can prevent injuries and improve flexibility.",
  "options": ["mobility work", "rest day", "pace", "serve"],
  "correctIndex": 0
},
{
  "id": "sport-q138",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-138",
  "type": "drag",
  "prompt": "Athletes often start practice with ____ to warm up properly.",
  "options": ["dynamic stretching", "static stretching", "cool-down stretch", "sudden death"],
  "correctIndex": 0
},
{
  "id": "sport-q139",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-139",
  "type": "drag",
  "prompt": "After training, ____ helps the muscles relax.",
  "options": ["static stretching", "interval training", "pace work", "hit your stride"],
  "correctIndex": 0
},
{
  "id": "sport-q140",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-140",
  "type": "drag",
  "prompt": "We tested our ____ with a short timed run.",
  "options": ["fitness level", "heart rate", "step count", "running shoes"],
  "correctIndex": 0
},

{
  "id": "sport-q141",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-141",
  "type": "drag",
  "prompt": "____ uses only your own body weight for resistance.",
  "options": ["Calisthenics", "Pilates", "yoga mat", "treadmill"],
  "correctIndex": 0
},
{
  "id": "sport-q142",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-142",
  "type": "drag",
  "prompt": "____ is great cardio and can be done anywhere.",
  "options": ["Jump rope", "rowing machine", "foam roller", "rest day"],
  "correctIndex": 0
},
{
  "id": "sport-q143",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-143",
  "type": "drag",
  "prompt": "____ are very intense full-body exercises.",
  "options": ["Burpees", "squats", "pull-ups", "laps"],
  "correctIndex": 0
},
{
  "id": "sport-q144",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-144",
  "type": "drag",
  "prompt": "Walking ____ work your legs and glutes.",
  "options": ["lunges", "push-ups", "reps (repetitions)", "tie"],
  "correctIndex": 0
},
{
  "id": "sport-q145",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-145",
  "type": "drag",
  "prompt": "____ help build strong legs and increase power.",
  "options": ["Squats", "push-ups", "yoga poses", "cooldown walks"],
  "correctIndex": 0
},
{
  "id": "sport-q146",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-146",
  "type": "drag",
  "prompt": "____ are great for strengthening the upper body.",
  "options": ["Push-ups", "dribbles", "corner kicks", "reps"],
  "correctIndex": 0
},
{
  "id": "sport-q147",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-147",
  "type": "drag",
  "prompt": "____ can be very challenging, especially for beginners.",
  "options": ["Pull-ups", "laps", "static stretches", "cool-down stretches"],
  "correctIndex": 0
},
{
  "id": "sport-q148",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-148",
  "type": "drag",
  "prompt": "Hold the ____ for 30 seconds without letting your hips drop.",
  "options": ["plank", "yoga mat", "bench", "serve"],
  "correctIndex": 0
},
{
  "id": "sport-q149",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-149",
  "type": "drag",
  "prompt": "____ are great for cardio and core strength.",
  "options": ["Mountain climbers", "treadmills", "jump ropes", "foam rollers"],
  "correctIndex": 0
},
{
  "id": "sport-q150",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-150",
  "type": "drag",
  "prompt": "We started the warm-up with ____ to raise our heart rate.",
  "options": ["jumping jacks", "interval sets", "free kicks", "cooldown walks"],
  "correctIndex": 0
},

{
  "id": "sport-q151",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-151",
  "type": "drag",
  "prompt": "Running helps you ____ and lose weight.",
  "options": ["burn calories", "break a sweat", "cool off", "hit your stride"],
  "correctIndex": 0
},
{
  "id": "sport-q152",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-152",
  "type": "drag",
  "prompt": "If you train too hard without resting, you might ____.",
  "options": ["burn out", "warm up", "mix it up", "kick off"],
  "correctIndex": 0
},
{
  "id": "sport-q153",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-153",
  "type": "drag",
  "prompt": "He is trying to ____ and gain muscle for the season.",
  "options": ["bulk up", "lean down", "rest day", "catch your breath"],
  "correctIndex": 0
},
{
  "id": "sport-q154",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-154",
  "type": "drag",
  "prompt": "She wants to ____ before summer arrives.",
  "options": ["lean down", "bulk up", "take a breather", "drop out"],
  "correctIndex": 0
},
{
  "id": "sport-q155",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-155",
  "type": "drag",
  "prompt": "Always ____ to avoid dizziness during exercise.",
  "options": ["stay hydrated", "burn out", "kick the ball", "set a record"],
  "correctIndex": 0
},
{
  "id": "sport-q156",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-156",
  "type": "drag",
  "prompt": "He drank a ____ after his workout.",
  "options": ["sports drink", "protein shake", "meal prep", "water bottle"],
  "correctIndex": 0
},
{
  "id": "sport-q157",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-157",
  "type": "drag",
  "prompt": "She made a ____ after the gym to help with recovery.",
  "options": ["protein shake", "sports drink", "rest day", "cooldown routine"],
  "correctIndex": 0
},
{
  "id": "sport-q158",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-158",
  "type": "drag",
  "prompt": "____ helps support your fitness goals throughout the week.",
  "options": ["Meal prep", "foam rolling", "burning out", "warm ups"],
  "correctIndex": 0
},
{
  "id": "sport-q159",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-159",
  "type": "drag",
  "prompt": "Good ____ keeps you focused and progressing toward your goals.",
  "options": ["fitness goal setting", "overtime", "match strategy", "cool-down stretch"],
  "correctIndex": 0
},
{
  "id": "sport-q160",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-160",
  "type": "drag",
  "prompt": "Use an app to ____ and stay motivated.",
  "options": ["track your progress", "kick off", "cool off", "rest day"],
  "correctIndex": 0
},

{
  "id": "sport-q161",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-161",
  "type": "drag",
  "prompt": "The key to results is to ____ with your routine.",
  "options": ["stay consistent", "warm up", "bulk up", "go hard"],
  "correctIndex": 0
},
{
  "id": "sport-q162",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-162",
  "type": "drag",
  "prompt": "If you're sore, it's best to ____ today.",
  "options": ["take it easy", "push through", "go hard", "bulk up"],
  "correctIndex": 0
},
{
  "id": "sport-q163",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-163",
  "type": "drag",
  "prompt": "Always ____ to avoid injury during training.",
  "options": ["listen to your body", "hit your stride", "kick the ball", "cheer"],
  "correctIndex": 0
},
{
  "id": "sport-q164",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-164",
  "type": "drag",
  "prompt": "He likes to ____ at the gym and push his limits.",
  "options": ["go hard", "take it easy", "mix it up", "cool down"],
  "correctIndex": 0
},
{
  "id": "sport-q165",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-165",
  "type": "drag",
  "prompt": "He always says ____ when training gets tough.",
  "options": ["no pain, no gain", "kick off", "time-out", "cooldown stretch"],
  "correctIndex": 0
},
{
  "id": "sport-q166",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-166",
  "type": "drag",
  "prompt": "She changed her routine after she ____.",
  "options": ["hit a plateau", "cooled off", "caught her breath", "went all out"],
  "correctIndex": 0
},
{
  "id": "sport-q167",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-167",
  "type": "drag",
  "prompt": "To avoid boredom, it's good to ____ your workouts.",
  "options": ["mix it up", "warm up", "rest day", "kick off"],
  "correctIndex": 0
},
{
  "id": "sport-q168",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-168",
  "type": "drag",
  "prompt": "He decided to ____ swimming last year.",
  "options": ["take up", "drop out of", "burn out", "cool off"],
  "correctIndex": 0
},
{
  "id": "sport-q169",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-169",
  "type": "drag",
  "prompt": "She will ____ the volleyball team next week.",
  "options": ["try out for", "take up", "fall behind", "mix it up"],
  "correctIndex": 0
},
{
  "id": "sport-q170",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-170",
  "type": "drag",
  "prompt": "He had to ____ the race because of an injury.",
  "options": ["drop out of", "catch your breath", "kick off", "stay hydrated"],
  "correctIndex": 0
},

{
  "id": "sport-q171",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-171",
  "type": "drag",
  "prompt": "End your run with a slow ____.",
  "options": ["cooldown walk", "cool-down stretch", "warm up", "rest day"],
  "correctIndex": 0
},
{
  "id": "sport-q172",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-172",
  "type": "drag",
  "prompt": "His ____ helps him focus before important matches.",
  "options": ["pre-game routine", "form check", "team huddle", "pace training"],
  "correctIndex": 0
},
{
  "id": "sport-q173",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-173",
  "type": "drag",
  "prompt": "Good ____ is essential before a big game to reduce anxiety.",
  "options": ["mental preparation", "warm up", "fitness level", "cooldown routine"],
  "correctIndex": 0
},
{
  "id": "sport-q174",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-174",
  "type": "drag",
  "prompt": "Many athletes ____ before competing to boost confidence.",
  "options": ["visualize success", "mix it up", "bulk up", "stretch it out"],
  "correctIndex": 0
},
{
  "id": "sport-q175",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-175",
  "type": "drag",
  "prompt": "____ helps athletes improve performance and mindset.",
  "options": ["Sports psychology", "cardio training", "static stretching", "spotting"],
  "correctIndex": 0
},
{
  "id": "sport-q176",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-176",
  "type": "drag",
  "prompt": "Some people drink ____ before going to the gym.",
  "options": ["pre-workout", "protein shake", "sports drink", "meal prep"],
  "correctIndex": 0
},
{
  "id": "sport-q177",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-177",
  "type": "drag",
  "prompt": "A good ____ helps your muscles relax after training.",
  "options": ["cooldown routine", "warm up", "fitness tracker", "interval run"],
  "correctIndex": 0
},
{
  "id": "sport-q178",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-178",
  "type": "drag",
  "prompt": "Walking or light cycling on rest days is good ____.",
  "options": ["active recovery", "static stretching", "bulking up", "cooling off"],
  "correctIndex": 0
},
{
  "id": "sport-q179",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-179",
  "type": "drag",
  "prompt": "Sleep is essential for proper ____.",
  "options": ["muscle recovery", "fitness level", "cooldown walk", "cardio training"],
  "correctIndex": 0
},
{
  "id": "sport-q180",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-180",
  "type": "drag",
  "prompt": "I use an app to ____ and stay consistent at the gym.",
  "options": ["track my workouts", "take a breather", "mix it up", "bulk up"],
  "correctIndex": 0
},

{
  "id": "sport-q181",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-181",
  "type": "drag",
  "prompt": "Comfortable ____ makes it easier to exercise.",
  "options": ["sportswear", "compression socks", "team jerseys", "foam rollers"],
  "correctIndex": 0
},
{
  "id": "sport-q182",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-182",
  "type": "drag",
  "prompt": "Good ____ help prevent running injuries.",
  "options": ["running shoes", "compression socks", "sportswear", "fitness trackers"],
  "correctIndex": 0
},
{
  "id": "sport-q183",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-183",
  "type": "drag",
  "prompt": "I always keep my ____ ready with everything I need for the gym.",
  "options": ["gym bag", "yoga mat", "treadmill", "cooldown routine"],
  "correctIndex": 0
},
{
  "id": "sport-q184",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-184",
  "type": "drag",
  "prompt": "A good ____ is important for comfort during workouts.",
  "options": ["sports bra", "compression socks", "team jersey", "yoga pose"],
  "correctIndex": 0
},
{
  "id": "sport-q185",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-185",
  "type": "drag",
  "prompt": "____ help improve circulation during exercise or running.",
  "options": ["compression socks", "running shoes", "foam rollers", "sports drinks"],
  "correctIndex": 0
},
{
  "id": "sport-q186",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-186",
  "type": "drag",
  "prompt": "Wiping machines after use is part of good ____.",
  "options": ["gym etiquette", "sportsmanship", "warm up routine", "cooldown routine"],
  "correctIndex": 0
},
{
  "id": "sport-q187",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-187",
  "type": "drag",
  "prompt": "Please ____ the equipment after using it.",
  "options": ["wipe down", "cool off", "bulk up", "stretch it out"],
  "correctIndex": 0
},
{
  "id": "sport-q188",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-188",
  "type": "drag",
  "prompt": "At busy gyms, you must ____ for your turn.",
  "options": ["wait your turn", "go hard", "catch your breath", "mix it up"],
  "correctIndex": 0
},
{
  "id": "sport-q189",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-189",
  "type": "drag",
  "prompt": "Everyone needs to ____ in crowded workout areas.",
  "options": ["share the space", "level up", "warm up", "drop out"],
  "correctIndex": 0
},
{
  "id": "sport-q190",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-190",
  "type": "drag",
  "prompt": "Can you ____ me on this bench press?",
  "options": ["spot", "kick off", "cool off", "mix it up"],
  "correctIndex": 0
},

{
  "id": "sport-q191",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-191",
  "type": "drag",
  "prompt": "I like to ____ in the park every morning.",
  "options": ["go for a run", "take a spin class", "cool off", "bulk up"],
  "correctIndex": 0
},
{
  "id": "sport-q192",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-192",
  "type": "drag",
  "prompt": "We decided to ____ on Saturday and it was intense!",
  "options": ["take a spin class", "go for a run", "warm up", "mix it up"],
  "correctIndex": 0
},
{
  "id": "sport-q193",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-193",
  "type": "drag",
  "prompt": "After lifting weights, don’t forget to ____.",
  "options": ["stretch it out", "cool down", "go hard", "hit your stride"],
  "correctIndex": 0
},
{
  "id": "sport-q194",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-194",
  "type": "drag",
  "prompt": "She is trying to ____ for squats and avoid injuries.",
  "options": ["work on her form", "bulk up", "kick off", "cool off"],
  "correctIndex": 0
},
{
  "id": "sport-q195",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-195",
  "type": "drag",
  "prompt": "Remember to ____ and you will see progress over time.",
  "options": ["stick to the plan", "mix it up", "take it easy", "drop out"],
  "correctIndex": 0
},
{
  "id": "sport-q196",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-196",
  "type": "drag",
  "prompt": "Sometimes you just have to ____ the last set.",
  "options": ["push through", "take it easy", "cool down", "burn out"],
  "correctIndex": 0
},
{
  "id": "sport-q197",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-197",
  "type": "drag",
  "prompt": "If something hurts, you should ____ a bit.",
  "options": ["back off", "go hard", "mix it up", "work on your form"],
  "correctIndex": 0
},
{
  "id": "sport-q198",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-198",
  "type": "drag",
  "prompt": "Let’s ____ between rounds so we can continue strong.",
  "options": ["take a breather", "fall behind", "kick off", "mix it up"],
  "correctIndex": 0
},
{
  "id": "sport-q199",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-199",
  "type": "drag",
  "prompt": "Walk slowly to ____ after a long run.",
  "options": ["cool off", "warm up", "hit your stride", "take it easy"],
  "correctIndex": 0
},
{
  "id": "sport-q200",
  "categoryId": SPORT_CATEGORY_ID,
  "wordId": "sport-200",
  "type": "drag",
  "prompt": "I really ____ my workout today and feel great.",
  "options": ["crushed", "paced", "cooled off", "dropped out"],
  "correctIndex": 0
},
{
    "id": "sport-q101",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-101",
    "type": "drag",
    "prompt": "He started going to the gym because he wants to improve his ____.",
    "options": ["fitness", "rest day", "foam roller", "sports drink"],
    "correctIndex": 0
  },
  {
    "id": "sport-q102",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-102",
    "type": "drag",
    "prompt": "She just bought a new ____ so she can use the gym every day.",
    "options": ["gym membership", "yoga mat", "treadmill", "rowing machine"],
    "correctIndex": 0
  },
  {
    "id": "sport-q103",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-103",
    "type": "drag",
    "prompt": "Her ____ created a custom training plan for her goals.",
    "options": ["personal trainer", "team captain", "spectator", "coach"],
    "correctIndex": 0
  },
  {
    "id": "sport-q104",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-104",
    "type": "drag",
    "prompt": "His ____ counts his steps and tracks his sleep.",
    "options": ["fitness tracker", "foam roller", "yoga mat", "cardio machine"],
    "correctIndex": 0
  },
  {
    "id": "sport-q105",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-105",
    "type": "drag",
    "prompt": "Her daily ____ goal is 10,000.",
    "options": ["step count", "heart rate", "reps (repetitions)", "set (of exercises)"],
    "correctIndex": 0
  },

  {
    "id": "sport-q106",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-106",
    "type": "drag",
    "prompt": "High-intensity exercise raises your ____ very quickly.",
    "options": ["heart rate", "fitness level", "step count", "cooldown walk"],
    "correctIndex": 0
  },
  {
    "id": "sport-q107",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-107",
    "type": "drag",
    "prompt": "You should always include at least one ____ in your training week.",
    "options": ["rest day", "leg day", "group workout", "spin class"],
    "correctIndex": 0
  },
  {
    "id": "sport-q108",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-108",
    "type": "drag",
    "prompt": "Today we are training the ____ with push-ups and pull-ups.",
    "options": ["upper body", "lower body", "core muscles", "calves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q109",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-109",
    "type": "drag",
    "prompt": "Squats are great for building strength in the ____.",
    "options": ["lower body", "upper body", "core muscles", "shoulders"],
    "correctIndex": 0
  },
  {
    "id": "sport-q110",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-110",
    "type": "drag",
    "prompt": "Planks and mountain climbers help strengthen your ____.",
    "options": ["core muscles", "running shoes", "group workout", "foam roller"],
    "correctIndex": 0
  },

  {
    "id": "sport-q111",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-111",
    "type": "drag",
    "prompt": "She did a short ____ this morning to work on her abs.",
    "options": ["ab workout", "cool-down stretch", "cooldown walk", "meal prep"],
    "correctIndex": 0
  },
  {
    "id": "sport-q112",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-112",
    "type": "drag",
    "prompt": "He always complains that ____ is the hardest training day.",
    "options": ["leg day", "rest day", "pre-game routine", "fitness class"],
    "correctIndex": 0
  },
  {
    "id": "sport-q113",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-113",
    "type": "drag",
    "prompt": "She follows a ____ three times a week to train her whole body.",
    "options": ["full-body workout", "cooldown routine", "group workout", "yoga class"],
    "correctIndex": 0
  },
  {
    "id": "sport-q114",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-114",
    "type": "drag",
    "prompt": "____ burns a lot of calories in a short time.",
    "options": ["High-intensity interval training", "static stretching", "cooldown walk", "rest day"],
    "correctIndex": 0
  },
  {
    "id": "sport-q115",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-115",
    "type": "drag",
    "prompt": "Walking is a good example of a ____ that is gentle on the joints.",
    "options": ["low-impact exercise", "bodyweight exercise", "dynamic stretching", "calisthenics"],
    "correctIndex": 0
  },

  {
    "id": "sport-q116",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-116",
    "type": "drag",
    "prompt": "You can train almost anywhere with a simple ____.",
    "options": ["resistance band", "barbell", "treadmill", "foam roller"],
    "correctIndex": 0
  },
  {
    "id": "sport-q117",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-117",
    "type": "drag",
    "prompt": "He lifted two heavy ____ during his strength workout.",
    "options": ["dumbbells", "compression socks", "sports drinks", "jump ropes"],
    "correctIndex": 0
  },
  {
    "id": "sport-q118",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-118",
    "type": "drag",
    "prompt": "The ____ on the rack was too heavy for her to lift.",
    "options": ["barbell", "resistance band", "stationary bike", "foam roller"],
    "correctIndex": 0
  },
  {
    "id": "sport-q119",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-119",
    "type": "drag",
    "prompt": "Push-ups are a classic ____ that use only your own body.",
    "options": ["bodyweight exercise", "high-impact exercise", "cardio machine", "cooldown stretch"],
    "correctIndex": 0
  },
  {
    "id": "sport-q120",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-120",
    "type": "drag",
    "prompt": "The trainer told him to do three sets of twelve ____.",
    "options": ["reps (repetitions)", "heart rate", "step count", "cooldown walks"],
    "correctIndex": 0
  },

  {
    "id": "sport-q121",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-121",
    "type": "drag",
    "prompt": "I completed four ____ of squats at the gym.",
    "options": ["sets (of exercises)", "laps", "matches", "cooldowns"],
    "correctIndex": 0
  },
  {
    "id": "sport-q122",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-122",
    "type": "drag",
    "prompt": "Always have a ____ for heavy lifts to keep you safe.",
    "options": ["spotter", "referee", "coach", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q123",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-123",
    "type": "drag",
    "prompt": "____ can help you lift more safely during strength training.",
    "options": ["Proper breathing", "sportswear", "gym etiquette", "cooldown walk"],
    "correctIndex": 0
  },
  {
    "id": "sport-q124",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-124",
    "type": "drag",
    "prompt": "Ask your trainer for a ____ to be sure you are moving correctly.",
    "options": ["form check", "rest day", "fitness tracker", "cool-off break"],
    "correctIndex": 0
  },
  {
    "id": "sport-q125",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-125",
    "type": "drag",
    "prompt": "The gym has many different ____ for running and cycling.",
    "options": ["cardio machines", "foam rollers", "yoga mats", "dumbbells"],
    "correctIndex": 0
  },

  {
    "id": "sport-q126",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-126",
    "type": "drag",
    "prompt": "He ran five kilometers on the ____.",
    "options": ["treadmill", "elliptical", "rowing machine", "stationary bike"],
    "correctIndex": 0
  },
  {
    "id": "sport-q127",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-127",
    "type": "drag",
    "prompt": "She does 30 minutes on the ____ while watching TV.",
    "options": ["stationary bike", "yoga mat", "foam roller", "bench"],
    "correctIndex": 0
  },
  {
    "id": "sport-q128",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-128",
    "type": "drag",
    "prompt": "The ____ is easier on the joints than running on the road.",
    "options": ["elliptical", "burpees", "jump rope", "treadmill"],
    "correctIndex": 0
  },
  {
    "id": "sport-q129",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-129",
    "type": "drag",
    "prompt": "The ____ works your legs, back, and arms all at once.",
    "options": ["rowing machine", "stationary bike", "jump rope", "foam roller"],
    "correctIndex": 0
  },
  {
    "id": "sport-q130",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-130",
    "type": "drag",
    "prompt": "I joined a group ____ to stay motivated with others.",
    "options": ["fitness class", "rest day", "match", "tournament"],
    "correctIndex": 0
  },
  {
    "id": "sport-q201",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-201",
    "type": "drag",
    "prompt": "Sleep has a big impact on your ____.",
    "options": ["athletic performance", "gym floor", "fitness tracker", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q202",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-202",
    "type": "drag",
    "prompt": "The coach added extra ____ sessions twice a week.",
    "options": ["conditioning", "cool-down stretches", "photo finish", "gym etiquette"],
    "correctIndex": 0
  },
  {
    "id": "sport-q203",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-203",
    "type": "drag",
    "prompt": "The team is training hard during ____ to get ready for the season.",
    "options": ["preseason", "playoffs", "off-season", "finals"],
    "correctIndex": 0
  },
  {
    "id": "sport-q204",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-204",
    "type": "drag",
    "prompt": "He trains differently during the ____, focusing more on recovery.",
    "options": ["off-season", "regular season", "playoffs", "season opener"],
    "correctIndex": 0
  },
  {
    "id": "sport-q205",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-205",
    "type": "drag",
    "prompt": "The ____ is always exciting because it starts the new year.",
    "options": ["season opener", "finals", "shutout", "relay race"],
    "correctIndex": 0
  },
  {
    "id": "sport-q206",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-206",
    "type": "drag",
    "prompt": "They finished the ____ in first place.",
    "options": ["regular season", "playoffs", "preseason", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q207",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-207",
    "type": "drag",
    "prompt": "The team qualified for the ____ after a strong year.",
    "options": ["playoffs", "off-season", "relay race", "photo finish"],
    "correctIndex": 0
  },
  {
    "id": "sport-q208",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-208",
    "type": "drag",
    "prompt": "The ____ will be played next weekend.",
    "options": ["finals", "relay race", "overtime win", "scrimmage"],
    "correctIndex": 0
  },
  {
    "id": "sport-q209",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-209",
    "type": "drag",
    "prompt": "They fought all season for the ____.",
    "options": ["championship title", "sportsmanship award", "home crowd", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q210",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-210",
    "type": "drag",
    "prompt": "He joined a local ____ to play every weekend.",
    "options": ["sports league", "varsity team", "relay race", "gym class"],
    "correctIndex": 0
  },

  {
    "id": "sport-q211",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-211",
    "type": "drag",
    "prompt": "They had a ____ to practice strategies before the real match.",
    "options": ["scrimmage", "finals", "swim meet", "relay race"],
    "correctIndex": 0
  },
  {
    "id": "sport-q212",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-212",
    "type": "drag",
    "prompt": "The coach changed the starting ____ before the game.",
    "options": ["lineup", "locker", "bench press", "floor routine"],
    "correctIndex": 0
  },
  {
    "id": "sport-q213",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-213",
    "type": "drag",
    "prompt": "He is a ____ this season and plays at the beginning of every game.",
    "options": ["starting player", "bench warmer", "assistant coach", "lifeguard"],
    "correctIndex": 0
  },
  {
    "id": "sport-q214",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-214",
    "type": "drag",
    "prompt": "Last year he was mostly a ____ and didn’t play much.",
    "options": ["bench warmer", "MVP", "striker", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q215",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-215",
    "type": "drag",
    "prompt": "She played so well that she won the ____ award.",
    "options": ["MVP (Most Valuable Player)", "sportsmanship", "relay race", "tight game"],
    "correctIndex": 0
  },
  {
    "id": "sport-q216",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-216",
    "type": "drag",
    "prompt": "Many universities offer ____ that students can join.",
    "options": ["club sports", "track spikes", "gymnastics mats", "swim strokes"],
    "correctIndex": 0
  },
  {
    "id": "sport-q217",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-217",
    "type": "drag",
    "prompt": "He trained hard all year and made the ____.",
    "options": ["varsity team", "home crowd", "relay race", "scrimmage"],
    "correctIndex": 0
  },
  {
    "id": "sport-q218",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-218",
    "type": "drag",
    "prompt": "The ____ leads some drills and helps the main coach.",
    "options": ["assistant coach", "lifeguard", "sparring partner", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q219",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-219",
    "type": "drag",
    "prompt": "The ____ on the team was amazing this season.",
    "options": ["team spirit", "fitness level", "gym etiquette", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q220",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-220",
    "type": "drag",
    "prompt": "She received a ____ for her fair and respectful behavior.",
    "options": ["sportsmanship award", "MVP trophy", "relay medal", "club sports prize"],
    "correctIndex": 0
  },

  {
    "id": "sport-q221",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-221",
    "type": "drag",
    "prompt": "Put your bag in the ____ before practice.",
    "options": ["locker", "gym bag", "weight rack", "starting block"],
    "correctIndex": 0
  },
  {
    "id": "sport-q222",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-222",
    "type": "drag",
    "prompt": "The ____ was slippery, so they cleaned it before the game.",
    "options": ["gym floor", "swimming pool", "boxing ring", "track"],
    "correctIndex": 0
  },
  {
    "id": "sport-q223",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-223",
    "type": "drag",
    "prompt": "He lifted ____ instead of using machines.",
    "options": ["free weights", "track spikes", "swim strokes", "boxing gloves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q224",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-224",
    "type": "drag",
    "prompt": "Please return your dumbbells to the ____.",
    "options": ["weight rack", "locker", "starting block", "balance beam"],
    "correctIndex": 0
  },
  {
    "id": "sport-q225",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-225",
    "type": "drag",
    "prompt": "The ____ is a popular exercise for building chest muscles.",
    "options": ["bench press", "deadlift", "high jump", "cartwheel"],
    "correctIndex": 0
  },
  {
    "id": "sport-q226",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-226",
    "type": "drag",
    "prompt": "He set a new personal best in the ____.",
    "options": ["deadlift", "relay race", "swim meet", "jump shot"],
    "correctIndex": 0
  },
  {
    "id": "sport-q227",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-227",
    "type": "drag",
    "prompt": "I waited for the ____ to be free before squatting.",
    "options": ["squat rack", "boxing ring", "swimming lane", "starting block"],
    "correctIndex": 0
  },
  {
    "id": "sport-q228",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-228",
    "type": "drag",
    "prompt": "Add two more ____ on each side of the bar.",
    "options": ["weight plates", "track spikes", "relay batons", "boxing gloves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q229",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-229",
    "type": "drag",
    "prompt": "The ____ is one of the Olympic weightlifting movements.",
    "options": ["clean and jerk", "layup", "fast break", "photo finish"],
    "correctIndex": 0
  },
  {
    "id": "sport-q230",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-230",
    "type": "drag",
    "prompt": "The ____ requires both speed and good technique.",
    "options": ["snatch", "relay race", "free throw", "flip turn"],
    "correctIndex": 0
  },

  {
    "id": "sport-q231",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-231",
    "type": "drag",
    "prompt": "He bought new ____ before his first boxing class.",
    "options": ["boxing gloves", "running shoes", "compression socks", "soccer cleats"],
    "correctIndex": 0
  },
  {
    "id": "sport-q232",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-232",
    "type": "drag",
    "prompt": "She trained with the ____ to practice powerful punches.",
    "options": ["punching bag", "swimming pool", "balance beam", "basketball hoop"],
    "correctIndex": 0
  },
  {
    "id": "sport-q233",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-233",
    "type": "drag",
    "prompt": "____ helps improve your boxing technique without a partner.",
    "options": ["Shadow boxing", "relay racing", "high jump", "backstroke"],
    "correctIndex": 0
  },
  {
    "id": "sport-q234",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-234",
    "type": "drag",
    "prompt": "He practiced with his ____ before the big fight.",
    "options": ["sparring partner", "assistant coach", "lifeguard", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q235",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-235",
    "type": "drag",
    "prompt": "Throw a quick ____ to keep your opponent back.",
    "options": ["jab", "layup", "header", "free throw"],
    "correctIndex": 0
  },
  {
    "id": "sport-q236",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-236",
    "type": "drag",
    "prompt": "The ____ landed cleanly and surprised the opponent.",
    "options": ["uppercut", "jump shot", "high jump", "breaststroke"],
    "correctIndex": 0
  },
  {
    "id": "sport-q237",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-237",
    "type": "drag",
    "prompt": "He practiced left ____ in front of the mirror.",
    "options": ["hooks", "headers", "jump shots", "flip turns"],
    "correctIndex": 0
  },
  {
    "id": "sport-q238",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-238",
    "type": "drag",
    "prompt": "Good ____ is essential in boxing to move and dodge attacks.",
    "options": ["footwork", "sportsmanship", "gym etiquette", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q239",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-239",
    "type": "drag",
    "prompt": "They stepped into the ____ to begin the fight.",
    "options": ["boxing ring", "swimming pool", "basketball court", "relay lane"],
    "correctIndex": 0
  },
  {
    "id": "sport-q240",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-240",
    "type": "drag",
    "prompt": "The fight lasted twelve ____.",
    "options": ["rounds", "laps", "sets", "reps"],
    "correctIndex": 0
  },

  {
    "id": "sport-q241",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-241",
    "type": "drag",
    "prompt": "The ____ opens early for morning swimmers.",
    "options": ["swimming pool", "gym floor", "boxing ring", "track"],
    "correctIndex": 0
  },
  {
    "id": "sport-q242",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-242",
    "type": "drag",
    "prompt": "Freestyle is the fastest ____.",
    "options": ["swim stroke", "relay race", "jump shot", "high jump"],
    "correctIndex": 0
  },
  {
    "id": "sport-q243",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-243",
    "type": "drag",
    "prompt": "The ____ is very demanding and uses a lot of energy.",
    "options": ["butterfly stroke", "bench press", "triple jump", "fast break"],
    "correctIndex": 0
  },
  {
    "id": "sport-q244",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-244",
    "type": "drag",
    "prompt": "She prefers ____ because it feels more relaxed.",
    "options": ["breaststroke", "deadlift", "layup", "cartwheel"],
    "correctIndex": 0
  },
  {
    "id": "sport-q245",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-245",
    "type": "drag",
    "prompt": "He is very fast at ____.",
    "options": ["backstroke", "bench press", "high jump", "shadow boxing"],
    "correctIndex": 0
  },
  {
    "id": "sport-q246",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-246",
    "type": "drag",
    "prompt": "Stay in your ____ while swimming.",
    "options": ["lane", "locker", "relay race", "overtime win"],
    "correctIndex": 0
  },
  {
    "id": "sport-q247",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-247",
    "type": "drag",
    "prompt": "The ____ watched the swimmers carefully.",
    "options": ["lifeguard", "referee", "assistant coach", "goalkeeper"],
    "correctIndex": 0
  },
  {
    "id": "sport-q248",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-248",
    "type": "drag",
    "prompt": "He got ready to ____ at the start of the race.",
    "options": ["dive in", "drop out", "cool off", "bounce back"],
    "correctIndex": 0
  },
  {
    "id": "sport-q249",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-249",
    "type": "drag",
    "prompt": "Competitive swimmers use a ____ at the wall to turn quickly.",
    "options": ["flip turn", "jump shot", "header", "high jump"],
    "correctIndex": 0
  },
  {
    "id": "sport-q250",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-250",
    "type": "drag",
    "prompt": "The ____ lasted all afternoon.",
    "options": ["swim meet", "relay race", "scrimmage", "basketball game"],
    "correctIndex": 0
  },

  {
    "id": "sport-q251",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-251",
    "type": "drag",
    "prompt": "He bought new ____ before the soccer season.",
    "options": ["soccer cleats", "running shoes", "track spikes", "boxing gloves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q252",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-252",
    "type": "drag",
    "prompt": "She plays as a ____ and helps control the game.",
    "options": ["midfielder", "striker", "defender", "lifeguard"],
    "correctIndex": 0
  },
  {
    "id": "sport-q253",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-253",
    "type": "drag",
    "prompt": "The ____ scored twice in the first half.",
    "options": ["striker", "goalkeeper", "midfielder", "assistant coach"],
    "correctIndex": 0
  },
  {
    "id": "sport-q254",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-254",
    "type": "drag",
    "prompt": "The ____ blocked the shot at the last second.",
    "options": ["defender", "midfielder", "striker", "lifeguard"],
    "correctIndex": 0
  },
  {
    "id": "sport-q255",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-255",
    "type": "drag",
    "prompt": "He scored with a ____ after a perfect cross.",
    "options": ["header", "layup", "jump shot", "jab"],
    "correctIndex": 0
  },
  {
    "id": "sport-q256",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-256",
    "type": "drag",
    "prompt": "The ball hit the ____ and the crowd cheered.",
    "options": ["goal net", "basketball hoop", "boxing ring", "starting block"],
    "correctIndex": 0
  },
  {
    "id": "sport-q257",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-257",
    "type": "drag",
    "prompt": "The game ended in a ____ after extra time.",
    "options": ["penalty shootout", "relay race", "photo finish", "scrimmage"],
    "correctIndex": 0
  },
  {
    "id": "sport-q258",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-258",
    "type": "drag",
    "prompt": "The referee gave him a ____ for a dangerous tackle.",
    "options": ["yellow card", "red card", "sportsmanship award", "match highlight"],
    "correctIndex": 0
  },
  {
    "id": "sport-q259",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-259",
    "type": "drag",
    "prompt": "A ____ means the player must leave the game immediately.",
    "options": ["red card", "yellow card", "shutout", "overtime win"],
    "correctIndex": 0
  },
  {
    "id": "sport-q260",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-260",
    "type": "drag",
    "prompt": "The coach decided to ____ him in the second half.",
    "options": ["sub out", "go hard", "bounce back", "cool off"],
    "correctIndex": 0
  },

  {
    "id": "sport-q261",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-261",
    "type": "drag",
    "prompt": "The ____ was too high for the younger players.",
    "options": ["basketball hoop", "goal net", "starting block", "punching bag"],
    "correctIndex": 0
  },
  {
    "id": "sport-q262",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-262",
    "type": "drag",
    "prompt": "He missed the ____ after being fouled.",
    "options": ["free throw", "jump shot", "header", "high jump"],
    "correctIndex": 0
  },
  {
    "id": "sport-q263",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-263",
    "type": "drag",
    "prompt": "She scored a ____ from far behind the line.",
    "options": ["three-pointer", "layup", "free throw", "jab"],
    "correctIndex": 0
  },
  {
    "id": "sport-q264",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-264",
    "type": "drag",
    "prompt": "They scored on a ____ after stealing the ball.",
    "options": ["fast break", "full-court press", "relay race", "photo finish"],
    "correctIndex": 0
  },
  {
    "id": "sport-q265",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-265",
    "type": "drag",
    "prompt": "He made ten ____ by passing to teammates who scored.",
    "options": ["assists", "headers", "blocks", "laps"],
    "correctIndex": 0
  },
  {
    "id": "sport-q266",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-266",
    "type": "drag",
    "prompt": "He jumped and managed to ____ the shot perfectly.",
    "options": ["block", "hook", "jab", "flip turn"],
    "correctIndex": 0
  },
  {
    "id": "sport-q267",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-267",
    "type": "drag",
    "prompt": "He managed to ____ the defender and get to the basket.",
    "options": ["dribble past", "drop out of", "jump over", "bounce back from a loss"],
    "correctIndex": 0
  },
  {
    "id": "sport-q268",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-268",
    "type": "drag",
    "prompt": "He practiced his ____ from the corner of the court.",
    "options": ["jump shot", "layup", "high jump", "snatch"],
    "correctIndex": 0
  },
  {
    "id": "sport-q269",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-269",
    "type": "drag",
    "prompt": "She scored with a smooth ____ right under the basket.",
    "options": ["layup", "header", "photo finish", "flip turn"],
    "correctIndex": 0
  },
  {
    "id": "sport-q270",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-270",
    "type": "drag",
    "prompt": "They used a ____ to pressure the other team across the whole court.",
    "options": ["full-court press", "fast break", "relay race", "scrimmage"],
    "correctIndex": 0
  },

  {
    "id": "sport-q271",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-271",
    "type": "drag",
    "prompt": "The coach made us ____ for an hour at practice.",
    "options": ["run drills", "cool down", "go hard", "drop out"],
    "correctIndex": 0
  },
  {
    "id": "sport-q272",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-272",
    "type": "drag",
    "prompt": "She managed to ____ during the whole race without slowing.",
    "options": ["keep the pace", "bounce back from a loss", "cool off", "sub out"],
    "correctIndex": 0
  },
  {
    "id": "sport-q273",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-273",
    "type": "drag",
    "prompt": "It was ____ until the very end of the match.",
    "options": ["a tight game", "a tough loss", "a shutout", "a scrimmage"],
    "correctIndex": 0
  },
  {
    "id": "sport-q274",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-274",
    "type": "drag",
    "prompt": "The team suffered ____ but stayed positive.",
    "options": ["a tough loss", "a shutout", "a tight game", "an overtime win"],
    "correctIndex": 0
  },
  {
    "id": "sport-q275",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-275",
    "type": "drag",
    "prompt": "They managed to ____ and win the next game.",
    "options": ["bounce back from a loss", "drop out of the race", "cool off", "run drills"],
    "correctIndex": 0
  },
  {
    "id": "sport-q276",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-276",
    "type": "drag",
    "prompt": "The ____ was very loud and supported the team.",
    "options": ["home crowd", "away game", "relay team", "scrimmage"],
    "correctIndex": 0
  },
  {
    "id": "sport-q277",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-277",
    "type": "drag",
    "prompt": "They won the ____ even though they were far from home.",
    "options": ["away game", "home crowd", "swim meet", "relay race"],
    "correctIndex": 0
  },
  {
    "id": "sport-q278",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-278",
    "type": "drag",
    "prompt": "They got an ____ after scoring in extra time.",
    "options": ["overtime win", "away game", "photo finish", "shutout"],
    "correctIndex": 0
  },
  {
    "id": "sport-q279",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-279",
    "type": "drag",
    "prompt": "The goalie recorded a ____ and allowed no goals.",
    "options": ["shutout", "tough loss", "tight game", "relay race"],
    "correctIndex": 0
  },
  {
    "id": "sport-q280",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-280",
    "type": "drag",
    "prompt": "The ____ were shown on TV after the match.",
    "options": ["match highlights", "regular season", "home crowd", "relay races"],
    "correctIndex": 0
  },

  {
    "id": "sport-q281",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-281",
    "type": "drag",
    "prompt": "The team participated in the ____ at the track meet.",
    "options": ["relay race", "high jump", "bench press", "layup drill"],
    "correctIndex": 0
  },
  {
    "id": "sport-q282",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-282",
    "type": "drag",
    "prompt": "Sprinters use a ____ to push off at the start.",
    "options": ["starting block", "starting gun", "track spike", "lane"],
    "correctIndex": 0
  },
  {
    "id": "sport-q283",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-283",
    "type": "drag",
    "prompt": "It was such a close race that they needed a ____.",
    "options": ["photo finish", "shutout", "overtime win", "fast break"],
    "correctIndex": 0
  },
  {
    "id": "sport-q284",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-284",
    "type": "drag",
    "prompt": "He trained for the 110-meter ____ event.",
    "options": ["hurdles", "relay", "butterfly stroke", "triple jump"],
    "correctIndex": 0
  },
  {
    "id": "sport-q285",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-285",
    "type": "drag",
    "prompt": "In this race, you must ____ each hurdle cleanly.",
    "options": ["jump over", "dribble past", "cool off", "dive in"],
    "correctIndex": 0
  },
  {
    "id": "sport-q286",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-286",
    "type": "drag",
    "prompt": "She won the ____ event by clearing the highest bar.",
    "options": ["high jump", "long jump", "snatch", "bench press"],
    "correctIndex": 0
  },
  {
    "id": "sport-q287",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-287",
    "type": "drag",
    "prompt": "His ____ was excellent and he jumped very far.",
    "options": ["long jump", "high jump", "photo finish", "flip turn"],
    "correctIndex": 0
  },
  {
    "id": "sport-q288",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-288",
    "type": "drag",
    "prompt": "He practices the ____, which includes several jumps in a row.",
    "options": ["triple jump", "relay race", "cartwheel", "backstroke"],
    "correctIndex": 0
  },
  {
    "id": "sport-q289",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-289",
    "type": "drag",
    "prompt": "____ help with speed and grip on the track.",
    "options": ["Track spikes", "running shoes", "compression socks", "boxing gloves"],
    "correctIndex": 0
  },
  {
    "id": "sport-q290",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-290",
    "type": "drag",
    "prompt": "The race began with the sound of the ____.",
    "options": ["starting gun", "starting block", "relay baton", "swim stroke"],
    "correctIndex": 0
  },

  {
    "id": "sport-q291",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-291",
    "type": "drag",
    "prompt": "In gym class, we had to ____ as part of the test.",
    "options": ["climb the rope", "run drills", "jump over hurdles", "dive in"],
    "correctIndex": 0
  },
  {
    "id": "sport-q292",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-292",
    "type": "drag",
    "prompt": "____ helps prevent injuries by improving stability.",
    "options": ["Balance training", "conditioning", "shadow boxing", "overtime wins"],
    "correctIndex": 0
  },
  {
    "id": "sport-q293",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-293",
    "type": "drag",
    "prompt": "She practiced cartwheels on the ____.",
    "options": ["gymnastics mat", "gym floor", "balance beam", "parallel bars"],
    "correctIndex": 0
  },
  {
    "id": "sport-q294",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-294",
    "type": "drag",
    "prompt": "He trained to hold a ____ against the wall.",
    "options": ["handstand", "cartwheel", "split", "layup"],
    "correctIndex": 0
  },
  {
    "id": "sport-q295",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-295",
    "type": "drag",
    "prompt": "She did a perfect ____ in the middle of the floor.",
    "options": ["cartwheel", "high jump", "photo finish", "flip turn"],
    "correctIndex": 0
  },
  {
    "id": "sport-q296",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-296",
    "type": "drag",
    "prompt": "She practiced her ____ every day to improve flexibility.",
    "options": ["splits", "headers", "layups", "jab combinations"],
    "correctIndex": 0
  },
  {
    "id": "sport-q297",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-297",
    "type": "drag",
    "prompt": "The gymnast trained on the ____ and tried not to fall.",
    "options": ["balance beam", "parallel bars", "starting block", "boxing ring"],
    "correctIndex": 0
  },
  {
    "id": "sport-q298",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-298",
    "type": "drag",
    "prompt": "The athlete practiced on the ____ during his gymnastics session.",
    "options": ["parallel bars", "balance beam", "goal net", "basketball hoop"],
    "correctIndex": 0
  },
  {
    "id": "sport-q299",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-299",
    "type": "drag",
    "prompt": "She prepared her ____ for the upcoming competition.",
    "options": ["floor routine", "relay race", "swim stroke", "jump shot"],
    "correctIndex": 0
  },
  {
    "id": "sport-q300",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-300",
    "type": "drag",
    "prompt": "Make sure your ____ fits properly before you train.",
    "options": ["athletic gear", "soccer cleats", "boxing ring", "gym floor"],
    "correctIndex": 0
  },

  {
    "id": "sport-q301",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-301",
    "type": "choice",
    "prompt": "Skiing, snowboarding, and ice skating are examples of what?",
    "options": [
      "team sports",
      "indoor games",
      "winter sports",
      "water sports"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q302",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-302",
    "type": "choice",
    "prompt": "If you want to go figure skating, you must find a place with a smooth, frozen surface. What is this place called?",
    "options": [
      "pool deck",
      "ice rink",
      "ski slope",
      "running track"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q303",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-303",
    "type": "choice",
    "prompt": "What specialized footwear with a blade attached is required to glide across the ice?",
    "options": [
      "running shoes",
      "snowshoes",
      "ice skates",
      "hiking boots"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q304",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-304",
    "type": "choice",
    "prompt": "Which sport involves athletes performing complex routines of jumps, spins, and choreography while gliding on ice?",
    "options": [
      "Ice hockey",
      "Figure skating",
      "Speed skating",
      "Bobsledding"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q305",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-305",
    "type": "choice",
    "prompt": "Which type of ice sport is a competitive race where athletes try to complete a certain number of laps on a track in the shortest time?",
    "options": [
      "Luge",
      "Figure skating",
      "Curling",
      "Speed skating"
    ],
    "correctIndex": 3
  },
  {
    "id": "sport-q306",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-306",
    "type": "choice",
    "prompt": "What high-contact team sport is played on an ice surface, with players using sticks to shoot a puck into a net?",
    "options": [
      "Bandy",
      "Ice hockey",
      "Field hockey",
      "Polo"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q307",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-307",
    "type": "choice",
    "prompt": "In ice hockey, what piece of equipment is used by a player to hit the puck and pass it to teammates?",
    "options": [
      "Goalpost",
      "Helmet",
      "Hockey stick",
      "Ice skate"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q308",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-308",
    "type": "choice",
    "prompt": "What is the small, vulcanized rubber disk that players try to hit into the goal in ice hockey?",
    "options": [
      "Ball",
      "Shuttlecock",
      "Puck",
      "Frisbee"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q309",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-309",
    "type": "choice",
    "prompt": "In ice hockey, what is the act of using one's hip or shoulder to legally separate an opponent from the puck?",
    "options": [
      "Stick handle",
      "Body check",
      "Slap shot",
      "Face-off"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q310",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-310",
    "type": "choice",
    "prompt": "What term describes the temporary advantage an ice hockey team gains when one or more opposing players are in the penalty box?",
    "options": [
      "Penalty kill",
      "Power play",
      "Overtime",
      "Shootout"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q311",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-311",
    "type": "choice",
    "prompt": "Where do people go for a weekend vacation dedicated to activities like skiing and snowboarding?",
    "options": [
      "Spa retreat",
      "Cruise ship",
      "Ski resort",
      "Amusement park"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q312",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-312",
    "type": "choice",
    "prompt": "What is the fast-paced sport of skiing that involves descending a mountain slope on long, wide skis?",
    "options": [
      "Water skiing",
      "Downhill skiing",
      "Cross-country skiing",
      "Ski jumping"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q313",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-313",
    "type": "choice",
    "prompt": "Which type of skiing is a more endurance-focused activity where athletes propel themselves across relatively flat or rolling terrain?",
    "options": [
      "Slalom",
      "Downhill skiing",
      "Cross-country skiing",
      "Snowboarding"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q314",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-314",
    "type": "choice",
    "prompt": "What piece of equipment is a single board that a person stands on to slide down snowy slopes?",
    "options": [
      "Sled",
      "Snowboard",
      "Toboggan",
      "Ski pole"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q315",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-315",
    "type": "choice",
    "prompt": "What machine transports skiers and snowboarders from the bottom of the mountain back up to the top?",
    "options": [
      "Gondola car",
      "Ski lift",
      "Snow plow",
      "Chair car"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q316",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-316",
    "type": "choice",
    "prompt": "What is the common term for the marked, graded tracks or trails on a mountain used for skiing and snowboarding?",
    "options": [
      "Creeks",
      "Slopes",
      "Ridges",
      "Valleys"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q317",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-317",
    "type": "choice",
    "prompt": "On a ski mountain, what marking indicates the most difficult and steepest ski trail, reserved for expert skiers?",
    "options": [
      "Green circle run",
      "Blue square run",
      "Black diamond run",
      "Orange oval run"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q318",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-318",
    "type": "choice",
    "prompt": "What piece of protective gear must be worn to prevent head injuries while skiing or snowboarding?",
    "options": [
      "Scarf",
      "Goggles",
      "Helmet",
      "Balaclava"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q319",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-319",
    "type": "choice",
    "prompt": "What eye protection should a skier wear to shield their eyes from glare, wind, and snow?",
    "options": [
      "Sunglasses",
      "Goggles",
      "Binoculars",
      "Visor"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q320",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-320",
    "type": "choice",
    "prompt": "What handheld equipment is used by skiers to maintain balance, turn, and help propel themselves on flat snow?",
    "options": [
      "Ski poles",
      "Canes",
      "Trekking sticks",
      "Ice axes"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q321",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-321",
    "type": "choice",
    "prompt": "If you go running in the park or do yoga on the beach, you are participating in what kind of exercise?",
    "options": [
      "Weight training",
      "Outdoor workout",
      "Indoor cycling",
      "Machine exercise"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q322",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-322",
    "type": "choice",
    "prompt": "What running activity involves navigating over uneven ground, rocks, and natural paths, often in the mountains?",
    "options": [
      "Sprint race",
      "Treadmill running",
      "Trail running",
      "Marathon"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q323",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-323",
    "type": "choice",
    "prompt": "What is the activity of taking a long, vigorous walk in the countryside or mountains for pleasure?",
    "options": [
      "Jogging",
      "Biking",
      "Hiking",
      "Strolling"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q324",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-324",
    "type": "choice",
    "prompt": "What type of sturdy, ankle-supporting footwear is necessary for walking on rough, rocky terrain?",
    "options": [
      "Sandals",
      "Hiking boots",
      "Running shoes",
      "Dress shoes"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q325",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-325",
    "type": "choice",
    "prompt": "Before starting a long trek, what document should you consult to see the route, distance, and points of interest?",
    "options": [
      "Trail map",
      "GPS tracker",
      "Compass",
      "Logbook"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q326",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-326",
    "type": "choice",
    "prompt": "In hiking, what term refers to the total accumulated vertical distance climbed from the lowest point to the highest point?",
    "options": [
      "Distance covered",
      "Elevation gain",
      "Trail length",
      "Descent rate"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q327",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-327",
    "type": "choice",
    "prompt": "What type of competition is popular in offices where people try to achieve the highest number of recorded paces during the month?",
    "options": [
      "Weight loss contest",
      "Step count challenge",
      "Diet plan",
      "Running relay"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q328",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-328",
    "type": "choice",
    "prompt": "What is a short-term program designed to motivate people to exercise regularly and improve their health, such as a '30-day abs' program?",
    "options": [
      "Dietary supplement",
      "Fitness challenge",
      "Spa treatment",
      "Medical check-up"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q329",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-329",
    "type": "choice",
    "prompt": "What do you call a series of games or matches played by many teams or individuals to determine a final winner?",
    "options": [
      "Training session",
      "Exhibition match",
      "Sports tournament",
      "Practice drill"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q330",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-330",
    "type": "choice",
    "prompt": "What is the formal event where gold, silver, and bronze prizes are awarded to the winners of an athletic competition?",
    "options": [
      "Opening ceremony",
      "Closing banquet",
      "Press conference",
      "Medal ceremony"
    ],
    "correctIndex": 3
  },
  {
    "id": "sport-q331",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-331",
    "type": "choice",
    "prompt": "Where would a runner likely go to receive specialized treatment and diagnosis for a strained hamstring?",
    "options": [
      "Dental office",
      "Sports injury clinic",
      "Eye doctor",
      "General pharmacy"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q332",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-332",
    "type": "choice",
    "prompt": "Which healthcare professional uses massage, heat, and exercise to treat injuries and help patients recover physical mobility?",
    "options": [
      "Surgeon",
      "Pharmacist",
      "Physiotherapist",
      "Nutritionist"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q333",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-333",
    "type": "choice",
    "prompt": "What type of movements are prescribed by a doctor or therapist to help an athlete restore function and strength to an injured body part?",
    "options": [
      "Warm-up stretches",
      "Rehab exercises",
      "Stunt maneuvers",
      "Cardio drills"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q334",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-334",
    "type": "choice",
    "prompt": "What supportive device is often worn around the foot and lower leg to protect a weak or sprained joint?",
    "options": [
      "Wrist guard",
      "Knee brace",
      "Ankle brace",
      "Shoulder sling"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q335",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-335",
    "type": "choice",
    "prompt": "After a ligament injury, a basketball player might need to wear what supportive device around their upper leg joint?",
    "options": [
      "Elbow pad",
      "Knee brace",
      "Back support",
      "Neck collar"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q336",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-336",
    "type": "choice",
    "prompt": "What cold item is recommended to reduce swelling and pain immediately after a minor sprain?",
    "options": [
      "Heating pad",
      "Bandage roll",
      "Ice pack",
      "Muscle cream"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q337",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-337",
    "type": "choice",
    "prompt": "What treatment is a type of deep-tissue manipulation designed to alleviate pain and accelerate muscle recovery after intense physical activity?",
    "options": [
      "Sports massage",
      "Hot tub soak",
      "Acupuncture",
      "Sauna session"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q338",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-338",
    "type": "choice",
    "prompt": "What is a regular sequence of movements done to improve muscle elasticity and prevent injury?",
    "options": [
      "Diet plan",
      "Weight lifting",
      "Stretching routine",
      "Yoga class"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q339",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-339",
    "type": "choice",
    "prompt": "What kind of injury develops gradually from repetitive stress without enough time for the body to heal, such as runner's knee?",
    "options": [
      "Acute fracture",
      "Traumatic tear",
      "Sudden sprain",
      "Overuse injury"
    ],
    "correctIndex": 3
  },
  {
    "id": "sport-q340",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-340",
    "type": "choice",
    "prompt": "What phrase is used when a doctor gives an athlete permission to resume competing after an injury?",
    "options": [
      "Final discharge",
      "Return to play",
      "Medical leave",
      "Full retirement"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q341",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-341",
    "type": "choice",
    "prompt": "What field of science studies the type and quantity of food and fluids an athlete should consume for optimal performance?",
    "options": [
      "Culinary arts",
      "Sports therapy",
      "Sports nutrition",
      "Biochemistry"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q342",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-342",
    "type": "choice",
    "prompt": "What high-carbohydrate eating strategy is sometimes used by endurance athletes days before a major event to maximize energy stores?",
    "options": [
      "Fasting",
      "Carb loading",
      "Protein stacking",
      "Keto diet"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q343",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-343",
    "type": "choice",
    "prompt": "What is the term for the food an athlete eats a few hours before a competition begins?",
    "options": [
      "Post-workout snack",
      "Late lunch",
      "Pre-game meal",
      "Victory dinner"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q344",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-344",
    "type": "choice",
    "prompt": "What small portion of food is typically consumed immediately following exercise to kickstart muscle recovery and replenish energy?",
    "options": [
      "Main dinner",
      "Post-workout snack",
      "Breakfast buffet",
      "Energy bar"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q345",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-345",
    "type": "choice",
    "prompt": "What idiom means that long-distance athletes must consistently consume food and drinks to maintain their energy levels throughout the race?",
    "options": [
      "Run wild",
      "Stay fueled",
      "Eat clean",
      "Live life"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q346",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-346",
    "type": "choice",
    "prompt": "What concentrated, easy-to-digest carbohydrate supplement is often consumed by marathon runners during a race?",
    "options": [
      "Protein shake",
      "Energy gel",
      "Fiber bar",
      "Vitamin pill"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q347",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-347",
    "type": "choice",
    "prompt": "What are the essential minerals, like sodium and potassium, lost through sweat that need to be replaced by drinking sports drinks?",
    "options": [
      "Electrolytes",
      "Enzymes",
      "Vitamins",
      "Amino acids"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q348",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-348",
    "type": "choice",
    "prompt": "Which phrasal verb means to intentionally and rapidly lose body weight just before a competition to qualify for a specific category?",
    "options": [
      "Bulk up",
      "Cut weight",
      "Clean up",
      "Measure out"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q349",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-349",
    "type": "choice",
    "prompt": "Which idiom means that a combat athlete has successfully weighed in at or below the maximum limit for their competition class?",
    "options": [
      "Gain ground",
      "Make weight",
      "Break even",
      "Hit the road"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q350",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-350",
    "type": "choice",
    "prompt": "What formal document or schedule details an athlete's recommended daily intake of calories, protein, and other nutrients?",
    "options": [
      "Workout log",
      "Training schedule",
      "Nutrition plan",
      "Meal prep list"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q351",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-351",
    "type": "choice",
    "prompt": "What idiom means a team achieved a victory with a huge, undeniable difference in the final score?",
    "options": [
      "Win by a hair",
      "Win by a landslide",
      "Win by default",
      "Win by a technicality"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q352",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-352",
    "type": "choice",
    "prompt": "What idiom means a team won a very close game by the smallest possible margin, often in the very last moments?",
    "options": [
      "Blow out a win",
      "Edge out a win",
      "Coast to a win",
      "Lose by a mile"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q353",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-353",
    "type": "choice",
    "prompt": "What term describes an athlete who consistently excels under pressure when the game is on the line?",
    "options": [
      "Bench warmer",
      "Average performer",
      "Clutch player",
      "Team captain"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q354",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-354",
    "type": "choice",
    "prompt": "What idiom describes a player who increases their skill and effort when the pressure is highest?",
    "options": [
      "Stay behind the curve",
      "Give up easily",
      "Step up in big moments",
      "Play it safe"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q355",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-355",
    "type": "choice",
    "prompt": "What advice tells players to remain focused, concentrate, and avoid distractions during the match?",
    "options": [
      "Take a break",
      "Keep your head in the game",
      "Look at the crowd",
      "Stop trying hard"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q356",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-356",
    "type": "choice",
    "prompt": "What idiom means to enter a state of deep, effortless focus where a player performs at their absolute peak?",
    "options": [
      "Get lost in thought",
      "Take a timeout",
      "Get in the zone",
      "Feel the pain"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q357",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-357",
    "type": "choice",
    "prompt": "What phrase means that an athlete became distracted or unable to concentrate during the competition?",
    "options": [
      "Stay sharp",
      "Keep eyes open",
      "Lose focus",
      "Pay attention"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q358",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-358",
    "type": "choice",
    "prompt": "What phrase means that a team, after playing poorly, managed to re-establish their dominance and composure in the game?",
    "options": [
      "Give up the ball",
      "Regain control",
      "Let them score",
      "Fall apart"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q359",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-359",
    "type": "choice",
    "prompt": "What verb means to call teammates together and motivate them, especially when they are losing?",
    "options": [
      "Dismiss the team",
      "Question the coach",
      "Rally the team",
      "Ignore the score"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q360",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-360",
    "type": "choice",
    "prompt": "What is the formal discussion or debriefing that a coach gives to the players immediately after a game has ended?",
    "options": [
      "Pre-game warm-up",
      "Half-time huddle",
      "Post-game talk",
      "Practice drill"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q361",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-361",
    "type": "choice",
    "prompt": "What is the action of becoming a member of a local organization dedicated to a specific athletic activity?",
    "options": [
      "Quit a team",
      "Leave a league",
      "Join a sports club",
      "Cancel training"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q362",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-362",
    "type": "choice",
    "prompt": "What phrase describes the action of formally registering and paying the fee to participate in an organized marathon?",
    "options": [
      "Watch a race",
      "Skip training",
      "Sign up for a race",
      "Forget the date"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q363",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-363",
    "type": "choice",
    "prompt": "What term describes an informal, spontaneous game of basketball or soccer played casually with whoever shows up?",
    "options": [
      "Championship final",
      "Pick-up game",
      "Official match",
      "Scheduled practice"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q364",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-364",
    "type": "choice",
    "prompt": "What is a casual game, usually for practice, that is not part of a league's official standings?",
    "options": [
      "Rivalry game",
      "Championship game",
      "Friendly match",
      "Playoff series"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q365",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-365",
    "type": "choice",
    "prompt": "What action is required for a professional athlete to finalize their legal agreement with a team?",
    "options": [
      "Quit the league",
      "Sign a contract",
      "Cancel the meeting",
      "Ignore the paperwork"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q366",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-366",
    "type": "choice",
    "prompt": "What action means a professional player leaves one club and begins playing for a different club, often mid-season?",
    "options": [
      "Renew a contract",
      "Retire from sports",
      "Transfer to another team",
      "Become a free agent"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q367",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-367",
    "type": "choice",
    "prompt": "What phrase means an athlete is unable to participate in games or training because they have been hurt?",
    "options": [
      "Be in the game",
      "Be out with an injury",
      "Be on the roster",
      "Be at the gym"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q368",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-368",
    "type": "choice",
    "prompt": "Which phrasal verb means a reserve player is substituting for a starter and entering the playing field?",
    "options": [
      "Stay on the field",
      "Come off the bench",
      "Sit in the stands",
      "Leave the game"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q369",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-369",
    "type": "choice",
    "prompt": "What strategy involves a coach regularly changing the starting lineup to keep key athletes rested and reserves engaged?",
    "options": [
      "Keep the same 5 players",
      "Rotate players",
      "Sign new players",
      "Change the rules"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q370",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-370",
    "type": "choice",
    "prompt": "What phrase describes the action of showing loyalty, cheering, and encouraging your favorite athletic club?",
    "options": [
      "Ignore your team",
      "Support your team",
      "Criticize the coach",
      "Bet against them"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q371",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-371",
    "type": "choice",
    "prompt": "What type of non-fiction film tells a real story about an athlete, team, or historical event in the athletic world?",
    "options": [
      "Cartoon series",
      "Comedy show",
      "Sports documentary",
      "Sci-fi movie"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q372",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-372",
    "type": "choice",
    "prompt": "What is the short, edited video that collects the most spectacular goals, passes, and plays from a game?",
    "options": [
      "Full match replay",
      "Sports blooper clip",
      "Sports highlight reel",
      "Player interview"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q373",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-373",
    "type": "choice",
    "prompt": "What is the person who provides a live description and analysis of a game while it is being broadcast on television?",
    "options": [
      "Team doctor",
      "Sports commentator",
      "Camera operator",
      "Referee"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q374",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-374",
    "type": "choice",
    "prompt": "What term describes a game or event that is transmitted on TV or the Internet at the exact moment it is happening?",
    "options": [
      "Recorded episode",
      "Re-run show",
      "Live broadcast",
      "Archived footage"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q375",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-375",
    "type": "choice",
    "prompt": "What do you call a person who is very enthusiastic and supportive of a particular sport or team?",
    "options": [
      "Medical staff",
      "Sports fan",
      "Groundskeeper",
      "Statistician"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q376",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-376",
    "type": "choice",
    "prompt": "What term refers to the entire collective group of loyal supporters of a sports club or athlete?",
    "options": [
      "Rival team",
      "Management group",
      "Sponsor list",
      "Fan base"
    ],
    "correctIndex": 3
  },
  {
    "id": "sport-q377",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-377",
    "type": "choice",
    "prompt": "What is the official shirt worn by players during a game that features the team's colors and logo?",
    "options": [
      "Official suit",
      "Team jersey",
      "Casual jacket",
      "Training gear"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q378",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-378",
    "type": "choice",
    "prompt": "What type of ticket purchase grants a fan access to every home game for an entire year?",
    "options": [
      "One-time pass",
      "Single-game tickets",
      "Season tickets",
      "VIP access card"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q379",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-379",
    "type": "choice",
    "prompt": "What is a large, often circular, indoor venue used for staging athletic events, concerts, and other large gatherings?",
    "options": [
      "Small studio",
      "Sports arena",
      "Community hall",
      "Local library"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q380",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-380",
    "type": "choice",
    "prompt": "What huge, elevated lamps are turned on to illuminate the field for games played after sunset?",
    "options": [
      "Flashlights",
      "Stadium lights",
      "Desk lamps",
      "Car headlights"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q381",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-381",
    "type": "choice",
    "prompt": "What idiom means you should train or exercise at a speed and intensity that is comfortable and sustainable for you?",
    "options": [
      "At the coach's speed",
      "At your own pace",
      "At maximum speed",
      "At the group's speed"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q382",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-382",
    "type": "choice",
    "prompt": "What idiom is a casual way to tell someone to start physical activity or exercise?",
    "options": [
      "Stay still",
      "Get moving",
      "Stop breathing",
      "Go home"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q383",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-383",
    "type": "choice",
    "prompt": "What idiom means to be excluded from playing the game and instead watching it from the edge of the field?",
    "options": [
      "Be the star player",
      "Sit on the sidelines",
      "Join the huddle",
      "Take the lead"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q384",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-384",
    "type": "choice",
    "prompt": "What idiom means eating the correct type of food to give your body the energy required for exercise?",
    "options": [
      "Fuel your workout",
      "Avoid eating",
      "Drink water only",
      "Eat junk food"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q385",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-385",
    "type": "choice",
    "prompt": "What phrase means a sports team has been promoted to a higher league or category due to good performance?",
    "options": [
      "Drop a division",
      "Move up a division",
      "Stay in the division",
      "Disband the team"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q386",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-386",
    "type": "choice",
    "prompt": "What phrase means a sports team has been demoted to a lower league or category due to poor performance?",
    "options": [
      "Win the league",
      "Drop a division",
      "Sign a contract",
      "Start a new team"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q387",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-387",
    "type": "choice",
    "prompt": "What phrase means making small, specific, and detailed improvements to the way you perform a skill?",
    "options": [
      "Forget your technique",
      "Fine-tune your technique",
      "Change the rules",
      "Master the basics"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q388",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-388",
    "type": "choice",
    "prompt": "What phrase describes the process of creating a regular, consistent schedule for physical exercise?",
    "options": [
      "Stop exercising",
      "Cancel the schedule",
      "Build a routine",
      "Change the plan daily"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q389",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-389",
    "type": "choice",
    "prompt": "What is the action of monitoring the number of times your heart beats per minute during training?",
    "options": [
      "Ignore your pulse",
      "Track your heart rate",
      "Watch the clock",
      "Count your steps"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q390",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-390",
    "type": "choice",
    "prompt": "What idiom means successfully achieving the predetermined daily target number of steps recorded on a fitness tracker?",
    "options": [
      "Miss your target",
      "Hit your step goal",
      "Count your calories",
      "Wear your best shoes"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q391",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-391",
    "type": "choice",
    "prompt": "What action is taken when you invite a person to compete against you in a test of skill, like a running race?",
    "options": [
      "Ignore a friend",
      "Challenge a friend",
      "Ask for a favor",
      "Compliment a friend"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q392",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-392",
    "type": "choice",
    "prompt": "What action involves signing up for a competition or group goal organized through a health and exercise software application?",
    "options": [
      "Delete the app",
      "Join a fitness app challenge",
      "Write a new book",
      "Start a business"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q393",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-393",
    "type": "choice",
    "prompt": "What phrase means continuing to be physically energetic and avoiding long periods of sitting or rest?",
    "options": [
      "Stay active",
      "Stay inactive",
      "Stay quiet",
      "Stay indoors"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q394",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-394",
    "type": "choice",
    "prompt": "What term describes a way of life that intentionally includes regular physical exercise and movement?",
    "options": [
      "Sedentary job",
      "Lazy hobby",
      "Active lifestyle",
      "Simple life"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q395",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-395",
    "type": "choice",
    "prompt": "What term refers to a person's history, experience, and past achievements in athletics?",
    "options": [
      "Family history",
      "Sports background",
      "Career plan",
      "Educational record"
    ],
    "correctIndex": 1
  },
  {
    "id": "sport-q396",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-396",
    "type": "choice",
    "prompt": "What phrasal verb means to start doing a new athletic activity or hobby?",
    "options": [
      "Give up a sport",
      "Watch a sport",
      "Take up a new sport",
      "End the season"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q397",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-397",
    "type": "choice",
    "prompt": "What phrasal verb means to stop doing an unhealthy or unwanted routine, like eating fast food?",
    "options": [
      "Pick up a habit",
      "Improve a habit",
      "Drop a bad habit",
      "Keep a tradition"
    ],
    "correctIndex": 2
  },
  {
    "id": "sport-q398",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-398",
    "type": "choice",
    "prompt": "What idiom means to remain focused, consistent, and correctly following a fitness or training plan?",
    "options": [
      "Stay on track",
      "Go off course",
      "Change your mind",
      "Start over"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q399",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-399",
    "type": "choice",
    "prompt": "What idiom means to stop following a training schedule or plan, often due to a lack of motivation?",
    "options": [
      "Fall off track",
      "Stay focused",
      "Be prepared",
      "Make progress"
    ],
    "correctIndex": 0
  },
  {
    "id": "sport-q400",
    "categoryId": SPORT_CATEGORY_ID,
    "wordId": "sport-400",
    "type": "choice",
    "prompt": "What idiom means to resume a planned schedule or return to consistency after a period of poor adherence?",
    "options": [
      "Give up entirely",
      "Start a new plan",
      "Get back on track",
      "Wait until next year"
    ],
    "correctIndex": 2
  },
  // End of SPORT_CATEGORY_ID questions

  //art category questions could go here
  {
    id: 'art-q1',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-1',
    type: 'drag',
    prompt: 'On weekends, I like to ____ in my sketchbook.',
    options: ['draw', 'dance', 'sing', 'act'],
    correctIndex: 0
  },
  {
    id: 'art-q2',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-2',
    type: 'drag',
    prompt: 'When an artist makes a quick simple drawing, we say they ____ the scene.',
    options: ['carve', 'sketch', 'shuffle', 'memorize'],
    correctIndex: 1
  },
  {
    id: 'art-q3',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-3',
    type: 'drag',
    prompt: 'His ____ of the sunset won first prize in the contest.',
    options: ['painting', 'playlist', 'script', 'outfit'],
    correctIndex: 0
  },
  {
    id: 'art-q4',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-4',
    type: 'drag',
    prompt: 'She painted a beautiful ____ of her grandmother.',
    options: ['portrait', 'dance routine', 'movie trailer', 'board game'],
    correctIndex: 0
  },
  {
    id: 'art-q5',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-5',
    type: 'drag',
    prompt: 'For art class, he created a detailed ____. It shows his own face.',
    options: ['self-portrait', 'soundtrack', 'set design', 'script'],
    correctIndex: 0
  },
  {
    id: 'art-q6',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-6',
    type: 'drag',
    prompt: 'The artist prepared a new ____ before starting to paint.',
    options: ['canvas', 'controller', 'dance floor', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q7',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-7',
    type: 'drag',
    prompt: 'We visited an art ____ downtown to see new works.',
    options: ['gallery', 'festival', 'studio', 'runway show'],
    correctIndex: 0
  },
  {
    id: 'art-q8',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-8',
    type: 'drag',
    prompt: 'The new ____ at the museum features modern paintings.',
    options: ['exhibition', 'playlist', 'game night', 'fashion show backstage'],
    correctIndex: 0
  },
  {
    id: 'art-q9',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-9',
    type: 'drag',
    prompt: 'This sculpture is considered a ____. Many people think it is perfect.',
    options: ['masterpiece', 'trend', 'card deck', 'script'],
    correctIndex: 0
  },
  {
    id: 'art-q10',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-10',
    type: 'drag',
    prompt: 'In ____, shapes and colors can be interpreted in many ways.',
    options: ['abstract art', 'realistic drawing', 'landscape photography', 'ballet'],
    correctIndex: 0
  },
  {
    id: 'art-q11',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-11',
    type: 'drag',
    prompt: 'Her drawing looks very ____. It almost looks like a photo.',
    options: ['realistic', 'viral', 'stylish', 'backstage'],
    correctIndex: 0
  },
  {
    id: 'art-q12',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-12',
    type: 'drag',
    prompt: 'He painted a soft landscape using ____. It gives a light, airy effect.',
    options: ['watercolor', 'oil paint', 'clay', 'beat'],
    correctIndex: 0
  },
  {
    id: 'art-q13',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-13',
    type: 'drag',
    prompt: '____ takes a long time to dry, which helps blend colors smoothly.',
    options: ['Oil paint', 'Pottery', 'Soundtrack', 'Choreography'],
    correctIndex: 0
  },
  {
    id: 'art-q14',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-14',
    type: 'drag',
    prompt: 'The museum added a new ____ to its modern art section.',
    options: ['sculpture', 'level-up', 'dance floor', 'controller'],
    correctIndex: 0
  },
  {
    id: 'art-q15',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-15',
    type: 'drag',
    prompt: 'She ____ a detailed figure out of wood during class.',
    options: ['carved', 'danced', 'memorized', 'edited'],
    correctIndex: 0
  },
  {
    id: 'art-q16',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-16',
    type: 'drag',
    prompt: 'The pottery class uses soft ____ to shape bowls and cups.',
    options: ['clay', 'canvas', 'lyrics', 'runway'],
    correctIndex: 0
  },
  {
    id: 'art-q17',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-17',
    type: 'drag',
    prompt: 'He learned ____ during summer camp and made several bowls.',
    options: ['pottery', 'freestyle dance', 'stage acting', 'fashion design'],
    correctIndex: 0
  },
  {
    id: 'art-q18',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-18',
    type: 'drag',
    prompt: 'We made colorful ____ for the school fair.',
    options: ['crafts', 'scripts', 'photo edits', 'dance battles'],
    correctIndex: 0
  },
  {
    id: 'art-q19',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-19',
    type: 'drag',
    prompt: 'She sells ____ jewelry that she makes herself.',
    options: ['handmade', 'viral', 'multiplayer', 'realistic'],
    correctIndex: 0
  },
  {
    id: 'art-q20',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-20',
    type: 'drag',
    prompt: '____ requires patience and precision to fold paper into shapes.',
    options: ['Origami', 'Ballet', 'Landscape photography', 'Game night'],
    correctIndex: 0
  },
  {
    id: 'art-q21',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-21',
    type: 'drag',
    prompt: 'Her brother is a talented ____. He plays several instruments.',
    options: ['musician', 'designer', 'actor', 'photographer'],
    correctIndex: 0
  },
  {
    id: 'art-q22',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-22',
    type: 'drag',
    prompt: 'The ____ wrote a new symphony for the orchestra.',
    options: ['composer', 'model', 'gamer', 'director'],
    correctIndex: 0
  },
  {
    id: 'art-q23',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-23',
    type: 'drag',
    prompt: 'The ____ of this song are very meaningful.',
    options: ['lyrics', 'melody', 'canvas', 'scene'],
    correctIndex: 0
  },
  {
    id: 'art-q24',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-24',
    type: 'drag',
    prompt: 'The ____ of the song is beautiful and easy to remember.',
    options: ['melody', 'director', 'trend', 'studio'],
    correctIndex: 0
  },
  {
    id: 'art-q25',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-25',
    type: 'drag',
    prompt: 'The ____ is the part of the song that repeats.',
    options: ['chorus', 'script', 'outfit', 'exhibition'],
    correctIndex: 0
  },
  {
    id: 'art-q26',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-26',
    type: 'drag',
    prompt: 'The ____ of the song is energetic and makes people dance.',
    options: ['beat', 'gallery', 'lighting', 'genre'],
    correctIndex: 0
  },
  {
    id: 'art-q27',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-27',
    type: 'drag',
    prompt: 'I can’t get this ____ out of my head.',
    options: ['tune', 'stage', 'clay', 'pattern'],
    correctIndex: 0
  },
  {
    id: 'art-q28',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-28',
    type: 'drag',
    prompt: 'Hip-hop is my favorite ____.',
    options: ['music genre', 'scene', 'script', 'backstage'],
    correctIndex: 0
  },
  {
    id: 'art-q29',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-29',
    type: 'drag',
    prompt: 'I made a new ____ for my workouts.',
    options: ['playlist', 'canvas', 'dance routine', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q30',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-30',
    type: 'drag',
    prompt: 'We went to a ____ last night and the singer was amazing.',
    options: ['live performance', 'board game', 'fashion trend', 'preview'],
    correctIndex: 0
  },{
    id: 'art-q31',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-31',
    type: 'drag',
    prompt: 'We bought tickets for the ____ next month.',
    options: ['concert', 'cinematography', 'origami', 'set design'],
    correctIndex: 0
  },
  {
    id: 'art-q32',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-32',
    type: 'drag',
    prompt: 'The music ____ lasts all weekend and features many artists.',
    options: ['festival', 'canvas', 'ballet', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q33',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-33',
    type: 'drag',
    prompt: 'The band walked onto the ____ ready to perform.',
    options: ['stage', 'trend', 'script', 'gallery'],
    correctIndex: 0
  },
  {
    id: 'art-q34',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-34',
    type: 'drag',
    prompt: 'The ____ applauded loudly after the final song.',
    options: ['audience', 'melody', 'carving', 'studio'],
    correctIndex: 0
  },
  {
    id: 'art-q35',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-35',
    type: 'drag',
    prompt: 'The show ended with thunderous ____. Everyone loved it.',
    options: ['applause', 'beat', 'special effects', 'dance routine'],
    correctIndex: 0
  },
  {
    id: 'art-q36',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-36',
    type: 'drag',
    prompt: 'The band returned to the stage for an ____. The crowd wanted more.',
    options: ['encore', 'playlist', 'painter', 'fashion show'],
    correctIndex: 0
  },
  {
    id: 'art-q37',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-37',
    type: 'drag',
    prompt: 'The movie’s ____ is beautiful and sets the mood perfectly.',
    options: ['soundtrack', 'genre', 'prop', 'photo editing'],
    correctIndex: 0
  },
  {
    id: 'art-q38',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-38',
    type: 'drag',
    prompt: 'The band recorded the album at a famous ____.',
    options: ['recording studio', 'festival tent', 'stage light', 'dance floor'],
    correctIndex: 0
  },
  {
    id: 'art-q39',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-39',
    type: 'drag',
    prompt: 'This became a worldwide ____. Everyone is listening to it.',
    options: ['hit song', 'abstract piece', 'script', 'trendsetter'],
    correctIndex: 0
  },
  {
    id: 'art-q40',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-40',
    type: 'drag',
    prompt: 'The music video ____ overnight and got millions of views.',
    options: ['went viral', 'played a melody', 'took a shot', 'memorized lines'],
    correctIndex: 0
  },
  {
    id: 'art-q41',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-41',
    type: 'drag',
    prompt: 'We watched a ____ last night and really enjoyed it.',
    options: ['movie', 'ballet', 'gallery', 'craft'],
    correctIndex: 0
  },
  {
    id: 'art-q42',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-42',
    type: 'drag',
    prompt: 'The film ____ won several international awards.',
    options: ['director', 'actor', 'fashion designer', 'musician'],
    correctIndex: 0
  },
  {
    id: 'art-q43',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-43',
    type: 'drag',
    prompt: 'He is a famous ____. Everyone knows his movies.',
    options: ['actor', 'model', 'dancer', 'composer'],
    correctIndex: 0
  },
  {
    id: 'art-q44',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-44',
    type: 'drag',
    prompt: 'The ____ played her role perfectly in the film.',
    options: ['actress', 'photographer', 'designer', 'painter'],
    correctIndex: 0
  },
  {
    id: 'art-q45',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-45',
    type: 'drag',
    prompt: 'That ____ in the movie was very emotional.',
    options: ['scene', 'soundtrack', 'plot twist', 'stage'],
    correctIndex: 0
  },
  {
    id: 'art-q46',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-46',
    type: 'drag',
    prompt: 'The film ____ became extremely popular after the release.',
    options: ['soundtrack', 'playlist', 'dance routine', 'script'],
    correctIndex: 0
  },
  {
    id: 'art-q47',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-47',
    type: 'drag',
    prompt: 'The ____ looks promising and made me want to watch the movie.',
    options: ['movie trailer', 'live performance', 'canvas', 'fashion trend'],
    correctIndex: 0
  },
  {
    id: 'art-q48',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-48',
    type: 'drag',
    prompt: 'The ____ in the film were impressive and looked realistic.',
    options: ['special effects', 'stages', 'outfits', 'scripts'],
    correctIndex: 0
  },
  {
    id: 'art-q49',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-49',
    type: 'drag',
    prompt: 'The movie was praised for its beautiful ____. Every shot looked perfect.',
    options: ['cinematography', 'dance battle', 'pottery', 'beat'],
    correctIndex: 0
  },
  {
    id: 'art-q50',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-50',
    type: 'drag',
    prompt: 'The movie had an unexpected ____ that surprised everyone.',
    options: ['plot twist', 'shoe trend', 'level up', 'music genre'],
    correctIndex: 0
  },
  {
    id: 'art-q51',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-51',
    type: 'drag',
    prompt: 'We saw a ____ last weekend and the actors were incredible.',
    options: ['theater play', 'playlist', 'outfit', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q52',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-52',
    type: 'drag',
    prompt: 'She is a talented ____ who performs on stage.',
    options: ['stage actor', 'designer', 'director', 'pianist'],
    correctIndex: 0
  },
  {
    id: 'art-q53',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-53',
    type: 'drag',
    prompt: 'The ____ of the play was detailed and beautifully crafted.',
    options: ['set design', 'soundtrack', 'melody', 'script'],
    correctIndex: 0
  },
  {
    id: 'art-q54',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-54',
    type: 'drag',
    prompt: 'The ____ followed the main actor across the stage.',
    options: ['spotlight', 'outfit', 'beat', 'camera lens'],
    correctIndex: 0
  },
  {
    id: 'art-q55',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-55',
    type: 'drag',
    prompt: 'The ____ went smoothly and everyone was prepared.',
    options: ['dress rehearsal', 'dance battle', 'festival', 'gallery opening'],
    correctIndex: 0
  },
  {
    id: 'art-q56',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-56',
    type: 'drag',
    prompt: 'The performance ended with a ____ from the entire crowd.',
    options: ['standing ovation', 'fashion trend', 'level up', 'dance floor'],
    correctIndex: 0
  },
  {
    id: 'art-q57',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-57',
    type: 'drag',
    prompt: 'He had ____ before stepping onto the stage for the first time.',
    options: ['stage fright', 'beat', 'soundtrack', 'choreography'],
    correctIndex: 0
  },
  {
    id: 'art-q58',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-58',
    type: 'drag',
    prompt: '____ was completely sold out and full of excitement.',
    options: ['Opening night', 'Rehearsal', 'Photo editing', 'Origami class'],
    correctIndex: 0
  },
  {
    id: 'art-q59',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-59',
    type: 'drag',
    prompt: 'The actors said the ____ needed some edits.',
    options: ['script', 'canvas', 'outfit', 'gallery'],
    correctIndex: 0
  },
  {
    id: 'art-q60',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-60',
    type: 'drag',
    prompt: 'The actors had to ____ their lines before the show.',
    options: ['memorize', 'carve', 'shuffle', 'record'],
    correctIndex: 0
  },

  // 61–70 (Dance)
  {
    id: 'art-q61',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-61',
    type: 'drag',
    prompt: 'They love to ____ salsa every weekend.',
    options: ['dance', 'paint', 'shuffle', 'level up'],
    correctIndex: 0
  },
  {
    id: 'art-q62',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-62',
    type: 'drag',
    prompt: 'The ____ was complex and required many hours of practice.',
    options: ['choreography', 'script', 'photo editing', 'canvas work'],
    correctIndex: 0
  },
  {
    id: 'art-q63',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-63',
    type: 'drag',
    prompt: 'The ____ opens at 9 a.m. and offers several classes.',
    options: ['dance studio', 'gallery', 'recording booth', 'cinema'],
    correctIndex: 0
  },
  {
    id: 'art-q64',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-64',
    type: 'drag',
    prompt: 'They practiced their ____ for hours before the performance.',
    options: ['dance routine', 'portrait', 'script', 'playlist'],
    correctIndex: 0
  },
  {
    id: 'art-q65',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-65',
    type: 'drag',
    prompt: 'Her daughter takes ____ lessons every Thursday.',
    options: ['ballet', 'pottery', 'photography', 'fashion design'],
    correctIndex: 0
  },
  {
    id: 'art-q66',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-66',
    type: 'drag',
    prompt: '____ dance is very energetic and expressive.',
    options: ['Hip-hop', 'Classical', 'Origami', 'Studio'],
    correctIndex: 0
  },
  {
    id: 'art-q67',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-67',
    type: 'drag',
    prompt: 'They enjoy ____ dance battles during events.',
    options: ['freestyle', 'choreographed', 'edited', 'painted'],
    correctIndex: 0
  },
  {
    id: 'art-q68',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-68',
    type: 'drag',
    prompt: 'The ____ was intense and full of amazing moves.',
    options: ['dance battle', 'stage light', 'festival', 'script reading'],
    correctIndex: 0
  },
  {
    id: 'art-q69',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-69',
    type: 'drag',
    prompt: 'Everyone ran to the ____ when the music started.',
    options: ['dance floor', 'canvas', 'gallery wall', 'photo booth'],
    correctIndex: 0
  },
  {
    id: 'art-q70',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-70',
    type: 'drag',
    prompt: 'She loves to ____ to the beat during her favorite songs.',
    options: ['move', 'carve', 'shuffle', 'direct'],
    correctIndex: 0
  },

  // 71–80 (Photography)
  {
    id: 'art-q71',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-71',
    type: 'drag',
    prompt: 'He studies ____ and wants to become a professional photographer.',
    options: ['photography', 'fashion', 'pottery', 'acting'],
    correctIndex: 0
  },
  {
    id: 'art-q72',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-72',
    type: 'drag',
    prompt: 'He bought a new ____ to take clearer photos.',
    options: ['camera lens', 'soundtrack', 'playlist', 'canvas brush'],
    correctIndex: 0
  },
  {
    id: 'art-q73',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-73',
    type: 'drag',
    prompt: 'She ____ a shot of the mountains during sunrise.',
    options: ['took', 'memorized', 'designed', 'acted'],
    correctIndex: 0
  },
  {
    id: 'art-q74',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-74',
    type: 'drag',
    prompt: 'He managed to ____ the moment perfectly with his camera.',
    options: ['capture', 'direct', 'dance', 'shuffle'],
    correctIndex: 0
  },
  {
    id: 'art-q75',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-75',
    type: 'drag',
    prompt: 'He specializes in ____ photography and travels to scenic places.',
    options: ['landscape', 'ballet', 'scriptwriting', 'studio'],
    correctIndex: 0
  },
  {
    id: 'art-q76',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-76',
    type: 'drag',
    prompt: '____ photography requires good lighting and attention to detail.',
    options: ['Portrait', 'Origami', 'Runway', 'Festival'],
    correctIndex: 0
  },
  {
    id: 'art-q77',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-77',
    type: 'drag',
    prompt: 'She made a digital ____ to store all her travel photos.',
    options: ['photo album', 'soundtrack', 'script', 'canvas'],
    correctIndex: 0
  },
  {
    id: 'art-q78',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-78',
    type: 'drag',
    prompt: '____ can enhance colors and improve image quality.',
    options: ['Photo editing', 'Dance rehearsal', 'Set design', 'Pottery glazing'],
    correctIndex: 0
  },
  {
    id: 'art-q79',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-79',
    type: 'drag',
    prompt: 'He prefers using a ____ camera for an old-school look.',
    options: ['film', 'digital', 'fashion', 'dance'],
    correctIndex: 0
  },
  {
    id: 'art-q80',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-80',
    type: 'drag',
    prompt: 'The photo is in ____ resolution, making every detail clear.',
    options: ['high', 'low', 'flat', 'blurry'],
    correctIndex: 0
  },

  // 81–90 (Fashion)
  {
    id: 'art-q81',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-81',
    type: 'drag',
    prompt: 'She is studying ____ design and hopes to start her own brand.',
    options: ['fashion', 'photo', 'stage', 'dance'],
    correctIndex: 0
  },
  {
    id: 'art-q82',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-82',
    type: 'drag',
    prompt: 'The ____ show featured models from all over the world.',
    options: ['runway', 'gallery', 'pottery', 'dance'],
    correctIndex: 0
  },
  {
    id: 'art-q83',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-83',
    type: 'drag',
    prompt: 'She is a well-known fashion ____. Her designs are unique.',
    options: ['designer', 'actor', 'director', 'composer'],
    correctIndex: 0
  },
  {
    id: 'art-q84',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-84',
    type: 'drag',
    prompt: 'The ____ wore a stunning dress on the runway.',
    options: ['model', 'musician', 'photographer', 'gamer'],
    correctIndex: 0
  },
  {
    id: 'art-q85',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-85',
    type: 'drag',
    prompt: 'He always looks ____. His clothes match perfectly.',
    options: ['stylish', 'viral', 'abstract', 'scripted'],
    correctIndex: 0
  },
  {
    id: 'art-q86',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-86',
    type: 'drag',
    prompt: 'This is the latest fashion ____. Everyone is wearing it.',
    options: ['trend', 'canvas', 'chorus', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q87',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-87',
    type: 'drag',
    prompt: 'Her ____ was amazing and very colorful.',
    options: ['outfit', 'soundtrack', 'dance floor', 'melody'],
    correctIndex: 0
  },
  {
    id: 'art-q88',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-88',
    type: 'drag',
    prompt: 'We had to ____ up for the formal event.',
    options: ['dress', 'mix', 'memorize', 'dance'],
    correctIndex: 0
  },
  {
    id: 'art-q89',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-89',
    type: 'drag',
    prompt: 'She loves to ____ and match her clothes.',
    options: ['mix', 'sketch', 'level up', 'record'],
    correctIndex: 0
  },
  {
    id: 'art-q90',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-90',
    type: 'drag',
    prompt: 'Backstage was very busy before the ____. Everyone was preparing.',
    options: ['fashion show', 'movie trailer', 'theater play', 'dance battle'],
    correctIndex: 0
  },

  // 91–100 (Games)
  {
    id: 'art-q91',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-91',
    type: 'drag',
    prompt: 'We played a ____ game with friends last night.',
    options: ['board', 'dance', 'photo', 'fashion'],
    correctIndex: 0
  },
  {
    id: 'art-q92',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-92',
    type: 'drag',
    prompt: 'He bought a new ____ game and can’t stop playing it.',
    options: ['video', 'canvas', 'dance', 'fashion'],
    correctIndex: 0
  },
  {
    id: 'art-q93',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-93',
    type: 'drag',
    prompt: 'I need a new ____ for my console.',
    options: ['controller', 'camera lens', 'canvas', 'costume'],
    correctIndex: 0
  },
  {
    id: 'art-q94',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-94',
    type: 'drag',
    prompt: 'You can ____ up by completing missions in the game.',
    options: ['level', 'paint', 'mix', 'capture'],
    correctIndex: 0
  },
  {
    id: 'art-q95',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-95',
    type: 'drag',
    prompt: 'We prefer ____ games because we can all play together.',
    options: ['multiplayer', 'abstract', 'fashion', 'portrait'],
    correctIndex: 0
  },
  {
    id: 'art-q96',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-96',
    type: 'drag',
    prompt: 'We used ____ chat to communicate during the game.',
    options: ['voice', 'studio', 'stage', 'gallery'],
    correctIndex: 0
  },
  {
    id: 'art-q97',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-97',
    type: 'drag',
    prompt: 'We organize a ____ night every Friday with friends.',
    options: ['game', 'festival', 'dance', 'fashion'],
    correctIndex: 0
  },
  {
    id: 'art-q98',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-98',
    type: 'drag',
    prompt: 'They love tabletop ____-playing games.',
    options: ['role', 'dance', 'photo', 'fashion'],
    correctIndex: 0
  },
  {
    id: 'art-q99',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-99',
    type: 'drag',
    prompt: 'Shuffle the ____ deck before we start.',
    options: ['card', 'stage', 'dance', 'photo'],
    correctIndex: 0
  },
  {
    id: 'art-q100',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-100',
    type: 'drag',
    prompt: 'He ____ the cards quickly so we could begin the game.',
    options: ['shuffled', 'painted', 'edited', 'mixed'],
    correctIndex: 0
  },
  {
    "id": "art-q101",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-101",
    "type": "choice",
    "prompt": "What public building is dedicated to preserving and displaying historical or artistic artifacts?",
    "options": [
      "Department store",
      "Factory",
      "Museum",
      "Library"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q102",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-102",
    "type": "choice",
    "prompt": "What specific type of venue focuses on exhibiting paintings, sculptures, and drawings?",
    "options": [
      "Science lab",
      "Art museum",
      "Sports stadium",
      "Concert hall"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q103",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-103",
    "type": "choice",
    "prompt": "What service allows visitors to explore an exhibition with an expert who provides commentary and context?",
    "options": [
      "Self-guided walk",
      "Guided tour",
      "Private viewing",
      "Virtual reality experience"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q104",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-104",
    "type": "choice",
    "prompt": "What device, often a headphone and small player, provides pre-recorded narration about the artworks as you walk through a gallery?",
    "options": [
      "Telescope",
      "Audio guide",
      "Map scanner",
      "Flashlight"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q105",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-105",
    "type": "choice",
    "prompt": "What do you call the core collection of artwork that a museum owns and displays continuously?",
    "options": [
      "Loan collection",
      "Rented display",
      "Permanent collection",
      "Traveling show"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q106",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-106",
    "type": "choice",
    "prompt": "What type of exhibition is displayed for only a limited period, often a few months, before being removed?",
    "options": [
      "Library section",
      "Main hall",
      "Temporary exhibit",
      "Storage room"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q107",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-107",
    "type": "choice",
    "prompt": "Where do visitors go to purchase admission slips or passes at the entrance of a venue?",
    "options": [
      "Gift shop",
      "Restroom",
      "Ticket booth",
      "Cafe"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q108",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-108",
    "type": "choice",
    "prompt": "What schedule indicates the specific days and times a public facility is accessible to visitors?",
    "options": [
      "Lunch menu",
      "Closing date",
      "Opening hours",
      "Weather forecast"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q109",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-109",
    "type": "choice",
    "prompt": "What is a person who has a deep appreciation and enjoyment for fine arts called?",
    "options": [
      "Art seller",
      "Art student",
      "Art collector",
      "Art lover"
    ],
    "correctIndex": 3
  },
  {
    "id": "art-q110",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-110",
    "type": "choice",
    "prompt": "What academic field involves the study of paintings, sculptures, and architecture across different time periods?",
    "options": [
      "Geometry",
      "Art history",
      "Physics",
      "Sociology"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q111",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-111",
    "type": "choice",
    "prompt": "What printed publication tells a story through sequential panels of drawings and text bubbles, often featuring superheroes or humorous characters?",
    "options": [
      "Magazine",
      "Newspaper",
      "Comic book",
      "Novel"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q112",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-112",
    "type": "choice",
    "prompt": "What format is essentially a long-form comic book, often with more complex themes and binding, intended for a mature audience?",
    "options": [
      "Short story",
      "Poetry book",
      "Graphic novel",
      "Cookbook"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q113",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-113",
    "type": "choice",
    "prompt": "What type of simple drawing, often humorous or satirical, is typically found in newspapers or short animated features for children?",
    "options": [
      "Portrait",
      "Sculpture",
      "Cartoon",
      "Blueprint"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q114",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-114",
    "type": "choice",
    "prompt": "What technique creates the illusion of movement by displaying a sequence of drawings or computer-generated images rapidly?",
    "options": [
      "Staging",
      "Editing",
      "Animation",
      "Photography"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q115",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-115",
    "type": "choice",
    "prompt": "What professional supplies the spoken dialogue for animated characters, video game personas, or dubbed foreign films?",
    "options": [
      "Set designer",
      "Voice actor",
      "Musician",
      "Stunt double"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q116",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-116",
    "type": "choice",
    "prompt": "What is the sequence of drawings, similar to a comic strip, used to pre-visualize a movie, animation, or commercial?",
    "options": [
      "Script",
      "Storyboard",
      "Budget sheet",
      "Cast list"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q117",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-117",
    "type": "choice",
    "prompt": "What is the artistic process of creating the visual appearance, personality, and aesthetic of a figure in a fictional world?",
    "options": [
      "Character acting",
      "Character design",
      "Script writing",
      "Set building"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q118",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-118",
    "type": "choice",
    "prompt": "What is a series of drawings arranged horizontally, typically appearing daily in a newspaper, featuring brief narrative jokes or situations?",
    "options": [
      "Novel chapter",
      "Lyric sheet",
      "Comic strip",
      "Poem"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q119",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-119",
    "type": "choice",
    "prompt": "What rounded graphic element in a comic panel contains the dialogue spoken by a character?",
    "options": [
      "Thought cloud",
      "Speech bubble",
      "Caption box",
      "Sound effect"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q120",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-120",
    "type": "choice",
    "prompt": "What is the distinct, self-contained frame or box in a comic book or graphic novel that depicts a single moment of action?",
    "options": [
      "Gutter",
      "Panel (comic)",
      "Book spine",
      "Cover"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q121",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-121",
    "type": "choice",
    "prompt": "What is the art of decorative handwriting or stylish script, often using specialized pens or brushes?",
    "options": [
      "Typing",
      "Calligraphy",
      "Sculpting",
      "Embroidery"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q122",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-122",
    "type": "choice",
    "prompt": "What term refers to the artistic practice of drawing or illustrating letters and words, rather than using a font?",
    "options": [
      "Painting",
      "Hand lettering",
      "Wood carving",
      "Pottery"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q123",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-123",
    "type": "choice",
    "prompt": "What verb describes making spontaneous, rough drawings while one's attention is elsewhere?",
    "options": [
      "Memorize",
      "Calculate",
      "Doodle",
      "Assemble"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q124",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-124",
    "type": "choice",
    "prompt": "What is the general term for materials such as paint, brushes, paper, and clay used to create visual works?",
    "options": [
      "Office furniture",
      "Art supplies",
      "Kitchen utensils",
      "Construction tools"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q125",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-125",
    "type": "choice",
    "prompt": "What type of book is specifically designed with blank pages for an artist to make preliminary drawings or quick sketches?",
    "options": [
      "Dictionary",
      "Sketchbook",
      "Calendar",
      "Novel"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q126",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-126",
    "type": "choice",
    "prompt": "What set of wooden utensils contains cores of pigment used for drawing and adding color to illustrations?",
    "options": [
      "Felt-tip markers",
      "Colored pencils",
      "Crayons",
      "Charcoal sticks"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q127",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-127",
    "type": "choice",
    "prompt": "What tool, consisting of a bundle of hairs or bristles attached to a handle, is used to apply paint to a surface?",
    "options": [
      "Spatula",
      "Paintbrush",
      "Hammer",
      "Trowel"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q128",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-128",
    "type": "choice",
    "prompt": "What wooden stand is used to support an artist's canvas or panel while they are painting?",
    "options": [
      "Tripod",
      "Shelf",
      "Table",
      "Easel"
    ],
    "correctIndex": 3
  },
  {
    "id": "art-q129",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-129",
    "type": "choice",
    "prompt": "What is the thin board or slab on which a painter arranges and mixes colors of paint?",
    "options": [
      "Canvas",
      "Palette",
      "Stretcher",
      "Brush holder"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q130",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-130",
    "type": "choice",
    "prompt": "What action involves using light and shadow effects to give a two-dimensional drawing a sense of three-dimensional form and depth?",
    "options": [
      "Sign a drawing",
      "Shade a drawing",
      "Outline a drawing",
      "Erase a drawing"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q131",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-131",
    "type": "choice",
    "prompt": "What term describes a leisure activity focused on artistic expression, like painting, knitting, or writing?",
    "options": [
      "Professional career",
      "Creative hobby",
      "Academic study",
      "Daily chore"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q132",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-132",
    "type": "choice",
    "prompt": "What is another word for a hobby or activity done regularly in one's free time for enjoyment?",
    "options": [
      "Job",
      "Pastime",
      "Requirement",
      "Duty"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q133",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-133",
    "type": "choice",
    "prompt": "What phrasal verb means to spend time relaxing casually or socializing informally with friends?",
    "options": [
      "Clean up",
      "Work hard",
      "Hang out",
      "Go to bed"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q134",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-134",
    "type": "choice",
    "prompt": "What phrase means to enjoy oneself and participate in enjoyable activities?",
    "options": [
      "Stay serious",
      "Have fun",
      "Be silent",
      "Work overtime"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q135",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-135",
    "type": "choice",
    "prompt": "What informal verb means to relax and take it easy, often by staying home or avoiding stressful activity?",
    "options": [
      "Stress",
      "Chill",
      "Rush",
      "Compete"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q136",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-136",
    "type": "choice",
    "prompt": "What entertainment venue is filled with coin-operated machines offering video games, pinball, and other competitive activities?",
    "options": [
      "Bank vault",
      "Game arcade",
      "Train station",
      "Lecture hall"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q137",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-137",
    "type": "choice",
    "prompt": "What social event involves people singing along to recorded music, often using a machine that displays the lyrics?",
    "options": [
      "Silent film viewing",
      "Karaoke night",
      "Opera recital",
      "Book club meeting"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q138",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-138",
    "type": "choice",
    "prompt": "What term describes an evening spent socializing, typically outside the home, involving activities like dining or visiting bars?",
    "options": [
      "Morning jog",
      "Night out",
      "Afternoon tea",
      "Day shift"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q139",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-139",
    "type": "choice",
    "prompt": "What type of performance event allows audience members to spontaneously take the stage to perform music, poetry, or comedy?",
    "options": [
      "Private concert",
      "Formal address",
      "Open mic",
      "Theater audition"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q140",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-140",
    "type": "choice",
    "prompt": "What comedic performance involves a single comedian addressing the audience directly with jokes and stories?",
    "options": [
      "Circus acrobatics",
      "Ballet recital",
      "Stand-up comedy",
      "Magic show"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q141",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-141",
    "type": "choice",
    "prompt": "What phrase means to speak a short, humorous story or remark designed to make others laugh?",
    "options": [
      "Write a novel",
      "Tell a joke",
      "Give a speech",
      "Read a newspaper"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q142",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-142",
    "type": "choice",
    "prompt": "What idiom means to suddenly start laughing very loudly and uncontrollably?",
    "options": [
      "Whisper softly",
      "Burst out laughing",
      "Sigh deeply",
      "Mutter quietly"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q143",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-143",
    "type": "choice",
    "prompt": "What type of joke is only understood by people who share a common experience or background?",
    "options": [
      "Universal humor",
      "Practical joke",
      "Inside joke",
      "Classic riddle"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q144",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-144",
    "type": "choice",
    "prompt": "What adjective describes something cheerful, carefree, and not intended to be taken too seriously?",
    "options": [
      "Serious",
      "Heavy",
      "Light-hearted",
      "Intense"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q145",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-145",
    "type": "choice",
    "prompt": "What is a simple, enjoyable game played with a group of people, often during a social gathering?",
    "options": [
      "Professional sport",
      "Party game",
      "Solo challenge",
      "Chess tournament"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q146",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-146",
    "type": "choice",
    "prompt": "What action involves taking a photograph of oneself, typically with a smartphone or camera held at arm's length?",
    "options": [
      "Develop film",
      "Take a selfie",
      "Print a photo",
      "Draw a picture"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q147",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-147",
    "type": "choice",
    "prompt": "What small enclosure, often found at parties or fairs, allows people to take quick, comical, and sequential portraits?",
    "options": [
      "Telephone box",
      "Photo booth",
      "Dressing room",
      "Security checkpoint"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q148",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-148",
    "type": "choice",
    "prompt": "What phrasal verb means to arrange your body in a certain way, often smiling, so that a photograph can be taken?",
    "options": [
      "Run away",
      "Pose for a picture",
      "Close your eyes",
      "Hide your face"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q149",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-149",
    "type": "choice",
    "prompt": "What phrasal verb means to place a printed picture inside a decorative border and protective glass for display?",
    "options": [
      "Fold a photo",
      "Burn a photo",
      "Frame a photo",
      "Enlarge a photo"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q150",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-150",
    "type": "choice",
    "prompt": "What is a book with blank pages where photos, ticket stubs, and other mementos are organized and creatively displayed?",
    "options": [
      "Receipt ledger",
      "Scrapbook",
      "Notebook",
      "Textbook"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q151",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-151",
    "type": "choice",
    "prompt": "What is the educational setting where students learn drawing, painting, and sculpting techniques?",
    "options": [
      "Math seminar",
      "Art class",
      "Gymnasium",
      "Science lab"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q152",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-152",
    "type": "choice",
    "prompt": "What is the dedicated workspace where an artist creates their work, often filled with materials and supplies?",
    "options": [
      "Art studio",
      "Office cubicle",
      "Retail store",
      "Kitchen pantry"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q153",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-153",
    "type": "choice",
    "prompt": "What term describes the series of steps an artist takes from initial idea conception to the completion of a finished piece?",
    "options": [
      "Administrative work",
      "Creative process",
      "Manufacturing line",
      "Scientific method"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q154",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-154",
    "type": "choice",
    "prompt": "What phrasal verb means to discover the motivation or stimulating ideas needed to begin or advance an artwork?",
    "options": [
      "Ignore feelings",
      "Find inspiration",
      "Lose motivation",
      "Stop dreaming"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q155",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-155",
    "type": "choice",
    "prompt": "What is the distinctive manner or technique that characterizes an artist's body of work?",
    "options": [
      "Artistic style",
      "Scientific theory",
      "Legal document",
      "Financial report"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q156",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-156",
    "type": "choice",
    "prompt": "What professional assesses, interprets, and publishes reviews of art exhibitions or individual works?",
    "options": [
      "Art dealer",
      "Art gallery owner",
      "Art critic",
      "Art collector"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q157",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-157",
    "type": "choice",
    "prompt": "What event brings together multiple artists and galleries to showcase and market their pieces to the public?",
    "options": [
      "Art fair",
      "Sports game",
      "Political rally",
      "Tech convention"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q158",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-158",
    "type": "choice",
    "prompt": "What phrasal verb means to market and trade the original works you created to buyers?",
    "options": [
      "Store your artwork",
      "Sell your artwork",
      "Destroy your artwork",
      "Borrow artwork"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q159",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-159",
    "type": "choice",
    "prompt": "What is the curated collection of an artist's best work used to demonstrate their skills for potential clients or schools?",
    "options": [
      "Art portfolio",
      "Address book",
      "Checkbook",
      "Shopping list"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q160",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-160",
    "type": "choice",
    "prompt": "What term describes a three-dimensional work of art, often site-specific and large-scale, designed to transform a space?",
    "options": [
      "Small painting",
      "Art installation",
      "Personal sketch",
      "Book cover"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q161",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-161",
    "type": "choice",
    "prompt": "What type of artistic expression is created in public locations, such as painting walls, sidewalks, or other accessible surfaces?",
    "options": [
      "Studio portrait",
      "Street art",
      "Museum exhibit",
      "Indoor sculpture"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q162",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-162",
    "type": "choice",
    "prompt": "What large painting is applied directly to a wall or ceiling, often depicting a complex scene or narrative?",
    "options": [
      "Small canvas",
      "Mural",
      "Photograph",
      "Drawing"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q163",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-163",
    "type": "choice",
    "prompt": "What unauthorized writing or drawings are scratched, scribbled, or painted on a wall or public surface?",
    "options": [
      "Blueprint",
      "Poster",
      "Graffiti",
      "Sign"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q164",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-164",
    "type": "choice",
    "prompt": "What type of art is created in collaboration with the community and displayed in public spaces, such as parks or plazas?",
    "options": [
      "Private collection",
      "Public art",
      "Personal sketch",
      "Commercial advertising"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q165",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-165",
    "type": "choice",
    "prompt": "What annual or periodic celebration showcases visual arts, music, and performances, often involving large gatherings?",
    "options": [
      "Art festival",
      "Science fair",
      "Financial summit",
      "Sporting competition"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q166",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-166",
    "type": "choice",
    "prompt": "What term refers to a person who performs music or other entertainment in the street for voluntary donations?",
    "options": [
      "Ticket agent",
      "Busker",
      "Police officer",
      "Street vendor"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q167",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-167",
    "type": "choice",
    "prompt": "What is an individual who performs in public places, usually outdoors, to entertain passersby?",
    "options": [
      "Museum guard",
      "Street performer",
      "Librarian",
      "Waitress"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q168",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-168",
    "type": "choice",
    "prompt": "What illusion, performed by a magician, seems to violate natural laws to surprise or entertain an audience?",
    "options": [
      "Magic trick",
      "Scientific experiment",
      "Mathematical problem",
      "Historical lecture"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q169",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-169",
    "type": "choice",
    "prompt": "What theatrical event features acrobats, clowns, and animal acts performing under a big top tent or in an arena?",
    "options": [
      "Political debate",
      "Circus show",
      "Wedding reception",
      "Board meeting"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q170",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-170",
    "type": "choice",
    "prompt": "What pyrotechnic display involves explosions of colored light and sound, often used during celebrations?",
    "options": [
      "Water sprinklers",
      "Fireworks",
      "Street lamps",
      "Campfires"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q171",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-171",
    "type": "choice",
    "prompt": "What phrase means to use your imagination and original ideas to create something?",
    "options": [
      "Be destructive",
      "Be passive",
      "Be creative",
      "Be silent"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q172",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-172",
    "type": "choice",
    "prompt": "What idiom means to approach a problem in an unconventional, new, or imaginative way?",
    "options": [
      "Follow the crowd",
      "Think outside the box",
      "Do the usual",
      "Stick to the rules"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q173",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-173",
    "type": "choice",
    "prompt": "What phrase means to communicate your feelings, thoughts, or ideas through words or actions?",
    "options": [
      "Keep silent",
      "Express yourself",
      "Hide your thoughts",
      "Be reserved"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q174",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-174",
    "type": "choice",
    "prompt": "What phrasal verb means to draw ideas or motivation from an external source, such as nature or another person's work?",
    "options": [
      "Get inspired by",
      "Stay isolated from",
      "Forget everything about",
      "Copy without thought"
    ],
    "correctIndex": 0
  },
  {
    "id": "art-q175",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-175",
    "type": "choice",
    "prompt": "What idiom means to activate or stimulate your ability to form new ideas and mental images?",
    "options": [
      "Dull your senses",
      "Spark your imagination",
      "Limit your thought",
      "Be realistic"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q176",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-176",
    "type": "choice",
    "prompt": "What idiom means to feel like engaging in fun, lighthearted, and non-serious activities?",
    "options": [
      "Be in a serious mood",
      "Be in a stressful mood",
      "Be in a playful mood",
      "Be in a sad mood"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q177",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-177",
    "type": "choice",
    "prompt": "What idiom encourages one to relax and allow original ideas and artistic expression to emerge naturally without inhibition?",
    "options": [
      "Block your mind",
      "Let your creativity flow",
      "Follow strict rules",
      "Stop thinking"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q178",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-178",
    "type": "choice",
    "prompt": "What idiom means an actor is deeply immersing themselves in the role, taking on the personality and emotions of the character?",
    "options": [
      "Forget the lines",
      "Get into character",
      "Watch the audience",
      "Stay distracted"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q179",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-179",
    "type": "choice",
    "prompt": "What idiom means a performer outshines all others and receives the most attention and praise?",
    "options": [
      "Blend into the background",
      "Steal the show",
      "Miss a cue",
      "Be ignored"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q180",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-180",
    "type": "choice",
    "prompt": "What idiom means a performance was so successful and well-received that the audience cheered loudly and enthusiastically?",
    "options": [
      "Be silent",
      "Close the curtains early",
      "Bring the house down",
      "Receive no applause"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q181",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-181",
    "type": "choice",
    "prompt": "What phrasal verb means to watch a film or television show over the internet, rather than downloading or buying a physical copy?",
    "options": [
      "Download a virus",
      "Stream a movie",
      "Write a review",
      "Sell a ticket"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q182",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-182",
    "type": "choice",
    "prompt": "What phrasal verb means to watch many episodes of a television program or series in rapid succession?",
    "options": [
      "Skip a season",
      "Watch a single episode",
      "Binge-watch a series",
      "Read a book slowly"
    ],
    "correctIndex": 2
  },
  {
    "id": "art-q183",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-183",
    "type": "choice",
    "prompt": "What is the term for a specific segment of a television series that a viewer likes more than any other?",
    "options": [
      "Worst scene",
      "Favorite episode",
      "Opening credits",
      "Technical fault"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q184",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-184",
    "type": "choice",
    "prompt": "What social gathering is dedicated to watching films, often at home with snacks and friends?",
    "options": [
      "Job interview",
      "Movie night",
      "Sports practice",
      "School assembly"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q185",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-185",
    "type": "choice",
    "prompt": "What is a piece of information that reveals the ending or a crucial part of a story, potentially ruining the viewing experience for others?",
    "options": [
      "Trailer",
      "Spoiler",
      "Review",
      "Prequel"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q186",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-186",
    "type": "choice",
    "prompt": "What is a brief overview or synopsis of the sequence of events and central conflict in a narrative?",
    "options": [
      "Full script",
      "Plot summary",
      "Character list",
      "Director's biography"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q187",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-187",
    "type": "choice",
    "prompt": "What is the figure in a story, movie, or book that a reader or viewer finds most appealing or interesting?",
    "options": [
      "Least important person",
      "Favorite character",
      "Main villain",
      "Background actor"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q188",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-188",
    "type": "choice",
    "prompt": "What term describes the fidelity and clarity of the audio output during a movie or music playback?",
    "options": [
      "Image resolution",
      "Sound quality",
      "Color grading",
      "Lighting design"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q189",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-189",
    "type": "choice",
    "prompt": "What phrasal verb means to increase the loudness of music or dialogue coming from speakers?",
    "options": [
      "Turn off the screen",
      "Turn up the volume",
      "Mute the sound",
      "Lower the tone"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q190",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-190",
    "type": "choice",
    "prompt": "What phrasal verb means to decrease the loudness of music or dialogue coming from speakers?",
    "options": [
      "Turn up the volume",
      "Turn down the volume",
      "Change the channel",
      "Press pause"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q191",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-191",
    "type": "choice",
    "prompt": "What phrase means to visit a nightclub or social venue specifically to engage in rhythmic movement to music?",
    "options": [
      "Go grocery shopping",
      "Go out dancing",
      "Go to sleep early",
      "Go to work"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q192",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-192",
    "type": "choice",
    "prompt": "What phrase means to organize and be the main organizer and provider of a social gathering or celebration?",
    "options": [
      "Attend a meeting",
      "Host a party",
      "Watch TV alone",
      "Do homework"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q193",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-193",
    "type": "choice",
    "prompt": "What phrasal verb means to adorn or embellish an indoor space with items like balloons, streamers, or lights for a special event?",
    "options": [
      "Empty the trash",
      "Decorate the room",
      "Sweep the floor",
      "Paint the ceiling"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q194",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-194",
    "type": "choice",
    "prompt": "What is the specific ordered list of songs selected to be played during a social celebration or gathering?",
    "options": [
      "Background noise",
      "Playlist for the party",
      "News report",
      "Lecture notes"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q195",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-195",
    "type": "choice",
    "prompt": "What type of social event requires guests to wear unusual or thematic outfits?",
    "options": [
      "Business meeting",
      "Costume party",
      "Formal dinner",
      "Job fair"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q196",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-196",
    "type": "choice",
    "prompt": "What phrasal verb means to put on special clothes and make-up to look like a particular character or figure?",
    "options": [
      "Dress normally",
      "Dress up as",
      "Take off clothes",
      "Wash dishes"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q197",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-197",
    "type": "choice",
    "prompt": "What type of party is planned around a specific subject, historical era, or fictional universe that dictates decorations and costumes?",
    "options": [
      "Unexpected gathering",
      "Theme party",
      "Silent retreat",
      "Quiet book reading"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q198",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-198",
    "type": "choice",
    "prompt": "What area is dedicated to the organized display of multiple pictures on a vertical surface, often for decoration or memory?",
    "options": [
      "Empty space",
      "Photo wall",
      "Storage shelf",
      "Floor rug"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q199",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-199",
    "type": "choice",
    "prompt": "What idiom means to successfully take pictures or videos of enjoyable moments during an event?",
    "options": [
      "Delete the memories",
      "Capture the fun",
      "Ignore the party",
      "Waste the film"
    ],
    "correctIndex": 1
  },
  {
    "id": "art-q200",
    "categoryId": ART_CATEGORY_ID,
    "wordId": "art-200",
    "type": "choice",
    "prompt": "What term informally refers to a positive, pleasant, and uplifting atmosphere or feeling at an event?",
    "options": [
      "Bad energy",
      "Negative influence",
      "Good vibes",
      "Serious tone"
    ],
    "correctIndex": 2
  },
  {
    id: 'art-q201',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-201',
    type: 'drag',
    prompt: 'On Saturday, we went to an ____ to learn new painting techniques.',
    options: ['art workshop', 'art competition', 'film festival', 'jam session'],
    correctIndex: 0
  },
  {
    id: 'art-q202',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-202',
    type: 'drag',
    prompt: 'The ____ showed the students how to mix colors.',
    options: ['art teacher', 'scriptwriter', 'camera operator', 'fashion model'],
    correctIndex: 0
  },
  {
    id: 'art-q203',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-203',
    type: 'drag',
    prompt: 'They are working on an ____ together for school.',
    options: ['art project', 'board game', 'jam session', 'photo shoot'],
    correctIndex: 0
  },
  {
    id: 'art-q204',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-204',
    type: 'drag',
    prompt: 'She won second place in an ____. Her painting was impressive.',
    options: ['art competition', 'art workshop', 'dance battle', 'game night'],
    correctIndex: 0
  },
  {
    id: 'art-q205',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-205',
    type: 'drag',
    prompt: 'The artist received an important ____ for his lifetime of work.',
    options: ['art award', 'movie ticket', 'game strategy', 'DIY project'],
    correctIndex: 0
  },
  {
    id: 'art-q206',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-206',
    type: 'drag',
    prompt: 'The ____ prepared the exhibition and chose which pieces to show.',
    options: ['art curator', 'scriptwriter', 'sound engineer', 'fashion model'],
    correctIndex: 0
  },
  {
    id: 'art-q207',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-207',
    type: 'drag',
    prompt: 'The ____ for the exhibit is 12 dollars for adults.',
    options: ['ticket price', 'game rules', 'museum pass', 'meet and greet'],
    correctIndex: 0
  },
  {
    id: 'art-q208',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-208',
    type: 'drag',
    prompt: 'The museum ____ sells postcards and small prints.',
    options: ['gift shop', 'stage', 'craft store', 'studio'],
    correctIndex: 0
  },
  {
    id: 'art-q209',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-209',
    type: 'drag',
    prompt: 'We bought a ____ so we can visit all year.',
    options: ['museum pass', 'movie ticket', 'festival badge', 'theater ticket'],
    correctIndex: 0
  },
  {
    id: 'art-q210',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-210',
    type: 'drag',
    prompt: '____ requires a lot of skill and patience to repair old paintings.',
    options: ['Art restoration', 'Photo editing', 'Cosplay', 'Game testing'],
    correctIndex: 0
  },

  {
    id: 'art-q211',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-211',
    type: 'drag',
    prompt: 'The artist used a warm ____ to make the painting feel cozy.',
    options: ['color palette', 'soundtrack', 'game strategy', 'fabric'],
    correctIndex: 0
  },
  {
    id: 'art-q212',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-212',
    type: 'drag',
    prompt: 'You should ____ colors smoothly to create soft shadows.',
    options: ['blend', 'shuffle', 'knit', 'zoom'],
    correctIndex: 0
  },
  {
    id: 'art-q213',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-213',
    type: 'drag',
    prompt: 'Be careful not to ____ the charcoal drawing with your hand.',
    options: ['smudge', 'fold', 'deal', 'record'],
    correctIndex: 0
  },
  {
    id: 'art-q214',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-214',
    type: 'drag',
    prompt: 'The painting includes very ____. You can see every tiny line.',
    options: ['fine details', 'deleted scenes', 'game rules', 'high notes'],
    correctIndex: 0
  },
  {
    id: 'art-q215',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-215',
    type: 'drag',
    prompt: 'First, draw a light ____ before adding color and shading.',
    options: ['outline', 'subtitle', 'beat', 'fabric'],
    correctIndex: 0
  },
  {
    id: 'art-q216',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-216',
    type: 'drag',
    prompt: 'She painted a blue sky in the ____ of the picture.',
    options: ['background', 'foreground', 'gallery', 'dance floor'],
    correctIndex: 0
  },
  {
    id: 'art-q217',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-217',
    type: 'drag',
    prompt: 'The flowers are placed in the ____, close to the viewer.',
    options: ['foreground', 'background', 'intermission', 'gift shop'],
    correctIndex: 0
  },
  {
    id: 'art-q218',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-218',
    type: 'drag',
    prompt: 'The painting has strong ____ that makes the image very dynamic.',
    options: ['color contrast', 'game rules', 'jam session', 'voice-over'],
    correctIndex: 0
  },
  {
    id: 'art-q219',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-219',
    type: 'drag',
    prompt: '____ is important so that no part of the image feels too heavy.',
    options: ['Visual balance', 'Fan theory', 'Game strategy', 'Stage fright'],
    correctIndex: 0
  },
  {
    id: 'art-q220',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-220',
    type: 'drag',
    prompt: 'Students participated in an ____ session to discuss each other’s work.',
    options: ['art critique', 'jam session', 'meet and greet', 'DIY night'],
    correctIndex: 0
  },

  {
    id: 'art-q221',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-221',
    type: 'drag',
    prompt: 'He decided to ____ a photo of the sunset.',
    options: ['take', 'mix', 'deal', 'knit'],
    correctIndex: 0
  },
  {
    id: 'art-q222',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-222',
    type: 'drag',
    prompt: '____ in to capture more detail on the subject’s face.',
    options: ['Zoom', 'Roll', 'Blend', 'Paint'],
    correctIndex: 0
  },
  {
    id: 'art-q223',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-223',
    type: 'drag',
    prompt: '____ out to include more of the landscape in the frame.',
    options: ['Zoom', 'Roll', 'Knit', 'Carve'],
    correctIndex: 0
  },
  {
    id: 'art-q224',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-224',
    type: 'drag',
    prompt: 'They organized a ____ in the park with several models.',
    options: ['photo shoot', 'jam session', 'fashion show', 'DIY workshop'],
    correctIndex: 0
  },
  {
    id: 'art-q225',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-225',
    type: 'drag',
    prompt: 'This place is very ____. Every picture looks amazing here.',
    options: ['photogenic', 'knitted', 'dubbed', 'underexposed'],
    correctIndex: 0
  },
  {
    id: 'art-q226',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-226',
    type: 'drag',
    prompt: 'The ____ changed during the scene to show another character.',
    options: ['camera angle', 'game rules', 'board game', 'theater ticket'],
    correctIndex: 0
  },
  {
    id: 'art-q227',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-227',
    type: 'drag',
    prompt: 'Good ____ is essential to make photos and videos look professional.',
    options: ['lighting', 'fabric', 'subtitles', 'trading cards'],
    correctIndex: 0
  },
  {
    id: 'art-q228',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-228',
    type: 'drag',
    prompt: 'The photo is ____, so many areas look too bright.',
    options: ['overexposed', 'knitted', 'dubbed', 'embossed'],
    correctIndex: 0
  },
  {
    id: 'art-q229',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-229',
    type: 'drag',
    prompt: 'The picture is ____, so you can’t see much in the shadows.',
    options: ['underexposed', 'photogenic', 'limited edition', 'overexposed'],
    correctIndex: 0
  },
  {
    id: 'art-q230',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-230',
    type: 'drag',
    prompt: '____ the camera on the face so it appears sharp in the photo.',
    options: ['Focus', 'Shuffle', 'Knit', 'Deal'],
    correctIndex: 0
  },

  {
    id: 'art-q231',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-231',
    type: 'drag',
    prompt: 'She plays three ____ and loves performing on stage.',
    options: ['musical instruments', 'trading cards', 'board games', 'cosplays'],
    correctIndex: 0
  },
  {
    id: 'art-q232',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-232',
    type: 'drag',
    prompt: 'The ____ felt smooth as she practiced a new song.',
    options: ['piano keys', 'camera lenses', 'fabric pieces', 'photo albums'],
    correctIndex: 0
  },
  {
    id: 'art-q233',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-233',
    type: 'drag',
    prompt: 'He likes to ____ the guitar softly while singing.',
    options: ['strum', 'zoom', 'knit', 'shuffle'],
    correctIndex: 0
  },
  {
    id: 'art-q234',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-234',
    type: 'drag',
    prompt: 'During practice, he ____ the drums loudly.',
    options: ['hit', 'rolled', 'mixed', 'dealt'],
    correctIndex: 0
  },
  {
    id: 'art-q235',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-235',
    type: 'drag',
    prompt: 'She reached the ____ easily, even in very difficult songs.',
    options: ['high notes', 'game rules', 'fine details', 'subtitles'],
    correctIndex: 0
  },
  {
    id: 'art-q236',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-236',
    type: 'drag',
    prompt: 'The song begins with ____, giving it a deep sound.',
    options: ['low notes', 'fan art', 'jam sessions', 'dance routines'],
    correctIndex: 0
  },
  {
    id: 'art-q237',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-237',
    type: 'drag',
    prompt: 'We had a ____ at the studio and improvised for an hour.',
    options: ['jam session', 'photo shoot', 'theater rehearsal', 'game night'],
    correctIndex: 0
  },
  {
    id: 'art-q238',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-238',
    type: 'drag',
    prompt: 'He can ____ by ear without using sheet music.',
    options: ['play', 'paint', 'edit', 'knit'],
    correctIndex: 0
  },
  {
    id: 'art-q239',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-239',
    type: 'drag',
    prompt: 'They went to the studio to ____ a song together.',
    options: ['record', 'deal', 'knit', 'paint'],
    correctIndex: 0
  },
  {
    id: 'art-q240',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-240',
    type: 'drag',
    prompt: 'The producer had to ____ the audio to balance all the tracks.',
    options: ['mix', 'roll', 'zoom', 'shuffle'],
    correctIndex: 0
  },

  {
    id: 'art-q241',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-241',
    type: 'drag',
    prompt: 'The actors attended the ____ of the film and walked the red carpet.',
    options: ['movie premiere', 'game night', 'art workshop', 'jam session'],
    correctIndex: 0
  },
  {
    id: 'art-q242',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-242',
    type: 'drag',
    prompt: 'The ____ praised the film for its strong acting.',
    options: ['movie critic', 'scriptwriter', 'fashion model', 'fan artist'],
    correctIndex: 0
  },
  {
    id: 'art-q243',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-243',
    type: 'drag',
    prompt: 'It became a ____ and made a lot of money worldwide.',
    options: ['blockbuster movie', 'DIY project', 'limited edition', 'deleted scene'],
    correctIndex: 0
  },
  {
    id: 'art-q244',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-244',
    type: 'drag',
    prompt: 'It’s the fifth film in the ____. Fans love the story.',
    options: ['movie franchise', 'game strategy', 'photo album', 'comic convention'],
    correctIndex: 0
  },
  {
    id: 'art-q245',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-245',
    type: 'drag',
    prompt: 'The documentary uses a ____ to explain what is happening.',
    options: ['voice-over', 'fabric pattern', 'spotlight effect', 'subtitle'],
    correctIndex: 0
  },
  {
    id: 'art-q246',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-246',
    type: 'drag',
    prompt: 'We watched a ____ video showing how the movie was made.',
    options: ['behind-the-scenes', 'knitting tutorial', 'photo editing', 'game rules'],
    correctIndex: 0
  },
  {
    id: 'art-q247',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-247',
    type: 'drag',
    prompt: 'The ____ scenes are included as bonus content on the DVD.',
    options: ['deleted', 'painted', 'crocheted', 'mixed'],
    correctIndex: 0
  },
  {
    id: 'art-q248',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-248',
    type: 'drag',
    prompt: 'The ____ attracts big crowds and many famous directors.',
    options: ['film festival', 'craft store', 'comic convention', 'fashion show'],
    correctIndex: 0
  },
  {
    id: 'art-q249',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-249',
    type: 'drag',
    prompt: 'I prefer watching movies with ____, so I can read the dialogue.',
    options: ['subtitles', 'costumes', 'knitting', 'lighting effects'],
    correctIndex: 0
  },
  {
    id: 'art-q250',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-250',
    type: 'drag',
    prompt: 'They watched the ____ in French instead of the original language.',
    options: ['dubbed version', 'photo album', 'DIY project', 'silent film'],
    correctIndex: 0
  },

  {
    id: 'art-q251',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-251',
    type: 'drag',
    prompt: 'They met many artists at the ____ and bought comics.',
    options: ['comic convention', 'film festival', 'art critique', 'jam session'],
    correctIndex: 0
  },
  {
    id: 'art-q252',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-252',
    type: 'drag',
    prompt: 'She spent weeks making her ____ costume for the event.',
    options: ['cosplay', 'subtitled', 'crochet', 'voice-over'],
    correctIndex: 0
  },
  {
    id: 'art-q253',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-253',
    type: 'drag',
    prompt: 'He bought a ____ figure of his favorite character.',
    options: ['collectible', 'limited', 'deleted', 'dubbed'],
    correctIndex: 0
  },
  {
    id: 'art-q254',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-254',
    type: 'drag',
    prompt: '____ cards are popular among fans who like to swap them.',
    options: ['Trading', 'Subtitled', 'Dubbed', 'Painted'],
    correctIndex: 0
  },
  {
    id: 'art-q255',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-255',
    type: 'drag',
    prompt: 'She created ____ of her favorite character and posted it online.',
    options: ['fan art', 'game rules', 'fabric', 'photo album'],
    correctIndex: 0
  },
  {
    id: 'art-q256',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-256',
    type: 'drag',
    prompt: 'The band has a huge ____. They follow every album release.',
    options: ['fan base', 'script', 'DIY project', 'photo shoot'],
    correctIndex: 0
  },
  {
    id: 'art-q257',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-257',
    type: 'drag',
    prompt: 'There are many ____ about the ending of the series.',
    options: ['fan theories', 'photo edits', 'dress rehearsals', 'board games'],
    correctIndex: 0
  },
  {
    id: 'art-q258',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-258',
    type: 'drag',
    prompt: 'He bought the ____ edition of the game with extra artwork.',
    options: ['limited', 'overexposed', 'crocheted', 'fan'],
    correctIndex: 0
  },
  {
    id: 'art-q259',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-259',
    type: 'drag',
    prompt: 'She asked the actor for an ____ on her poster.',
    options: ['autograph', 'outline', 'subtitle', 'fabric'],
    correctIndex: 0
  },
  {
    id: 'art-q260',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-260',
    type: 'drag',
    prompt: 'We attended a ____ with the cast after the show.',
    options: ['meet and greet', 'jam session', 'photo shoot', 'DIY workshop'],
    correctIndex: 0
  },

  {
    id: 'art-q261',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-261',
    type: 'drag',
    prompt: 'She started a ____ project using recycled materials.',
    options: ['DIY', 'film', 'dubbed', 'subtitled'],
    correctIndex: 0
  },
  {
    id: 'art-q262',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-262',
    type: 'drag',
    prompt: 'We bought yarn and glue at the ____. ',
    options: ['craft store', 'comic convention', 'film festival', 'game night'],
    correctIndex: 0
  },
  {
    id: 'art-q263',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-263',
    type: 'drag',
    prompt: '____ is a traditional form of art made by hand.',
    options: ['Handicraft', 'Voice-over', 'Subtitles', 'Crochet'],
    correctIndex: 0
  },
  {
    id: 'art-q264',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-264',
    type: 'drag',
    prompt: 'She used a ____ to make the costume quickly.',
    options: ['sewing machine', 'camera lens', 'board game', 'drum set'],
    correctIndex: 0
  },
  {
    id: 'art-q265',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-265',
    type: 'drag',
    prompt: 'He fixed his shirt with ____ and thread.',
    options: ['needle', 'fabric', 'subtitle', 'controller'],
    correctIndex: 0
  },
  {
    id: 'art-q266',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-266',
    type: 'drag',
    prompt: 'The ____ feels soft and is perfect for a dress.',
    options: ['fabric', 'script', 'photo', 'board'],
    correctIndex: 0
  },
  {
    id: 'art-q267',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-267',
    type: 'drag',
    prompt: '____ helps her relax, especially in the evening.',
    options: ['Knitting', 'Zooming', 'Rolling dice', 'Mixing audio'],
    correctIndex: 0
  },
  {
    id: 'art-q268',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-268',
    type: 'drag',
    prompt: 'She learned how to ____ from her grandmother.',
    options: ['crochet', 'dub', 'subtitle', 'deal cards'],
    correctIndex: 0
  },
  {
    id: 'art-q269',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-269',
    type: 'drag',
    prompt: '____ requires patience and attention to detail.',
    options: ['Embroidery', 'Zooming', 'Shuffling', 'Cosplay'],
    correctIndex: 0
  },
  {
    id: 'art-q270',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-270',
    type: 'drag',
    prompt: 'They decided to ____ a mural for the community center wall.',
    options: ['paint', 'knit', 'record', 'roll'],
    correctIndex: 0
  },

  {
    id: 'art-q271',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-271',
    type: 'drag',
    prompt: 'He lost the game but was ____ and congratulated the winner.',
    options: ['a good sport', 'photogenic', 'overexposed', 'limited edition'],
    correctIndex: 0
  },
  {
    id: 'art-q272',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-272',
    type: 'drag',
    prompt: 'We played cards to ____ time while we waited.',
    options: ['kill', 'mix', 'focus', 'zoom'],
    correctIndex: 0
  },
  {
    id: 'art-q273',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-273',
    type: 'drag',
    prompt: 'Drawing helps me ____ the time in a relaxing way.',
    options: ['pass', 'paint', 'restart', 'mix'],
    correctIndex: 0
  },
  {
    id: 'art-q274',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-274',
    type: 'drag',
    prompt: 'We ____ at the music festival. It was so much fun.',
    options: ['had a blast', 'knit quietly', 'rolled the dice', 'zoomed out'],
    correctIndex: 0
  },
  {
    id: 'art-q275',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-275',
    type: 'drag',
    prompt: 'He used to be a ____ in college and went to every party.',
    options: ['party animal', 'scriptwriter', 'fan critic', 'craft teacher'],
    correctIndex: 0
  },
  {
    id: 'art-q276',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-276',
    type: 'drag',
    prompt: 'The final song was a real ____. The crowd loved it.',
    options: ['crowd pleaser', 'fan theory', 'limited edition', 'deleted scene'],
    correctIndex: 0
  },
  {
    id: 'art-q277',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-277',
    type: 'drag',
    prompt: 'She has a ____ sense of humor and makes everyone laugh.',
    options: ['good', 'limited', 'overexposed', 'subtitled'],
    correctIndex: 0
  },
  {
    id: 'art-q278',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-278',
    type: 'drag',
    prompt: 'The class was ____ with creativity during the workshop.',
    options: ['bursting', 'dubbed', 'rolling', 'knitting'],
    correctIndex: 0
  },
  {
    id: 'art-q279',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-279',
    type: 'drag',
    prompt: 'She can ____ herself in music when she dances.',
    options: ['lose', 'deal', 'zoom', 'knit'],
    correctIndex: 0
  },
  {
    id: 'art-q280',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-280',
    type: 'drag',
    prompt: 'Soft lighting helped ____ the mood for the show.',
    options: ['set', 'roll', 'restart', 'shuffle'],
    correctIndex: 0
  },

  {
    id: 'art-q281',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-281',
    type: 'drag',
    prompt: 'After dinner, we decided to ____ a board game.',
    options: ['play', 'record', 'paint', 'dub'],
    correctIndex: 0
  },
  {
    id: 'art-q282',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-282',
    type: 'drag',
    prompt: 'He had to ____ the deck before dealing the cards.',
    options: ['shuffle', 'focus', 'zoom', 'paint'],
    correctIndex: 0
  },
  {
    id: 'art-q283',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-283',
    type: 'drag',
    prompt: 'She ____ the cards quickly so the game could begin.',
    options: ['dealt', 'recorded', 'knitted', 'zoomed'],
    correctIndex: 0
  },
  {
    id: 'art-q284',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-284',
    type: 'drag',
    prompt: 'We took ____ rolling the dice during the board game.',
    options: ['turns', 'the deck', 'the fabric', 'the script'],
    correctIndex: 0
  },
  {
    id: 'art-q285',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-285',
    type: 'drag',
    prompt: 'It’s your turn to ____ the dice.',
    options: ['roll', 'zoom', 'paint', 'mix'],
    correctIndex: 0
  },
  {
    id: 'art-q286',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-286',
    type: 'drag',
    prompt: 'The ____ rules are simple, so everyone can learn quickly.',
    options: ['game', 'lighting', 'fabric', 'camera'],
    correctIndex: 0
  },
  {
    id: 'art-q287',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-287',
    type: 'drag',
    prompt: 'He managed to ____ the round easily.',
    options: ['win', 'paint', 'dub', 'knit'],
    correctIndex: 0
  },
  {
    id: 'art-q288',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-288',
    type: 'drag',
    prompt: 'On your turn, you need to ____ a card from the deck.',
    options: ['draw', 'zoom', 'sew', 'record'],
    correctIndex: 0
  },
  {
    id: 'art-q289',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-289',
    type: 'drag',
    prompt: 'You need a good ____ strategy if you want to win.',
    options: ['game', 'fabric', 'lighting', 'subtitled'],
    correctIndex: 0
  },
  {
    id: 'art-q290',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-290',
    type: 'drag',
    prompt: 'We had to ____ the game after a glitch on the console.',
    options: ['restart', 'paint', 'dub', 'knit'],
    correctIndex: 0
  },

  {
    id: 'art-q291',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-291',
    type: 'drag',
    prompt: 'She was chosen to ____ the main role in the play.',
    options: ['play', 'knit', 'zoom', 'record'],
    correctIndex: 0
  },
  {
    id: 'art-q292',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-292',
    type: 'drag',
    prompt: 'He got a ____ role in the new movie.',
    options: ['supporting', 'crocheted', 'subtitled', 'dubbed'],
    correctIndex: 0
  },
  {
    id: 'art-q293',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-293',
    type: 'drag',
    prompt: 'The ____ rewrote the ending to make it more surprising.',
    options: ['scriptwriter', 'fashion model', 'camera operator', 'fan artist'],
    correctIndex: 0
  },
  {
    id: 'art-q294',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-294',
    type: 'drag',
    prompt: 'The ____ organized rehearsals and guided the actors.',
    options: ['theater director', 'DIY creator', 'photo editor', 'game designer'],
    correctIndex: 0
  },
  {
    id: 'art-q295',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-295',
    type: 'drag',
    prompt: 'We bought ____ tickets for Friday night.',
    options: ['theater', 'game', 'subtitled', 'voice-over'],
    correctIndex: 0
  },
  {
    id: 'art-q296',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-296',
    type: 'drag',
    prompt: 'The ____ lasted fifteen minutes, giving everyone a break.',
    options: ['intermission', 'fan theory', 'jam session', 'photo shoot'],
    correctIndex: 0
  },
  {
    id: 'art-q297',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-297',
    type: 'drag',
    prompt: 'The ____ effect made the stage bright and focused on one actor.',
    options: ['spotlight', 'fan', 'fabric', 'subtitle'],
    correctIndex: 0
  },
  {
    id: 'art-q298',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-298',
    type: 'drag',
    prompt: 'The ____ designer created amazing outfits for each character.',
    options: ['costume', 'game', 'craft', 'lighting'],
    correctIndex: 0
  },
  {
    id: 'art-q299',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-299',
    type: 'drag',
    prompt: 'The ____ rehearsal was perfect and ready for the audience.',
    options: ['dress', 'fan', 'board', 'film'],
    correctIndex: 0
  },
  {
    id: 'art-q300',
    categoryId: ART_CATEGORY_ID,
    wordId: 'art-300',
    type: 'drag',
    prompt: 'Everyone was nervous before the ____. It was their last show.',
    options: ['final performance', 'photo shoot', 'game night', 'comic convention'],
    correctIndex: 0
  },
  // end art category questions

  // politics category questions can go here
   
{
    id: 'poli-q1',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-1',
    type: 'drag',
    prompt: 'The next ____ will be held in two years.',
    options: ['election', 'constitution', 'treaty', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q2',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-2',
    type: 'drag',
    prompt: 'Every citizen has the right to ____. ',
    options: ['vote', 'resign', 'ban', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q3',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-3',
    type: 'drag',
    prompt: 'Many ____ went to the polls early.',
    options: ['voters', 'treaties', 'sanctions', 'rallies'],
    correctIndex: 0
  },
  {
    id: 'poli-q4',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-4',
    type: 'drag',
    prompt: 'You must sign your ____ before putting it in the box.',
    options: ['ballot', 'border', 'platform', 'agenda'],
    correctIndex: 0
  },
  {
    id: 'poli-q5',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-5',
    type: 'drag',
    prompt: 'The ____ station opens at 8 a.m.',
    options: ['polling', 'march', 'refugee', 'mayor'],
    correctIndex: 0
  },
  {
    id: 'poli-q6',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-6',
    type: 'drag',
    prompt: 'The election ____ lasted for six weeks.',
    options: ['campaign', 'ban', 'treaty', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q7',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-7',
    type: 'drag',
    prompt: 'She is running as an independent ____. ',
    options: ['candidate', 'mayor', 'ambassador', 'refugee'],
    correctIndex: 0
  },
  {
    id: 'poli-q8',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-8',
    type: 'drag',
    prompt: 'He decided to ____ for office in his hometown.',
    options: ['run', 'sign', 'ban', 'resign'],
    correctIndex: 0
  },
  {
    id: 'poli-q9',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-9',
    type: 'drag',
    prompt: 'Each ____ elects one representative.',
    options: ['constituency', 'protest', 'platform', 'board'],
    correctIndex: 0
  },
  {
    id: 'poli-q10',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-10',
    type: 'drag',
    prompt: 'Voter ____ was higher than expected.',
    options: ['turnout', 'asylum', 'border', 'agenda'],
    correctIndex: 0
  },

  {
    id: 'poli-q11',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-11',
    type: 'drag',
    prompt: 'In a ____, power comes from the people.',
    options: ['democracy', 'treaty', 'sanction', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q12',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-12',
    type: 'drag',
    prompt: 'The country became a ____ after the revolution.',
    options: ['republic', 'border', 'welfare system', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q13',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-13',
    type: 'drag',
    prompt: 'The ____ protects basic rights and freedoms.',
    options: ['constitution', 'ban', 'march', 'platform'],
    correctIndex: 0
  },
  {
    id: 'poli-q14',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-14',
    type: 'drag',
    prompt: 'The ____ of rights lists fundamental freedoms.',
    options: ['bill', 'treaty', 'ban', 'agenda'],
    correctIndex: 0
  },
  {
    id: 'poli-q15',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-15',
    type: 'drag',
    prompt: 'The ____ of powers helps limit government abuse.',
    options: ['separation', 'strike down', 'run', 'serve'],
    correctIndex: 0
  },
  {
    id: 'poli-q16',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-16',
    type: 'drag',
    prompt: 'Checks and ____ keep institutions accountable.',
    options: ['balances', 'borders', 'petitions', 'platforms'],
    correctIndex: 0
  },
  {
    id: 'poli-q17',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-17',
    type: 'drag',
    prompt: 'The ____ of law means everyone is equal before the law.',
    options: ['rule', 'march', 'slogan', 'agenda'],
    correctIndex: 0
  },
  {
    id: 'poli-q18',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-18',
    type: 'drag',
    prompt: '____ rights must be respected in all policies.',
    options: ['Human', 'Tax', 'Border', 'Domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q19',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-19',
    type: 'drag',
    prompt: 'Freedom of speech is a key ____ liberty.',
    options: ['civil', 'foreign', 'economic', 'domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q20',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-20',
    type: 'drag',
    prompt: '____ of speech allows people to criticize the government.',
    options: ['Freedom', 'Ban', 'Border', 'Sanction'],
    correctIndex: 0
  },

  {
    id: 'poli-q21',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-21',
    type: 'drag',
    prompt: '____ debated the new bill for several hours.',
    options: ['Parliament', 'Border', 'Petition', 'Refugees'],
    correctIndex: 0
  },
  {
    id: 'poli-q22',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-22',
    type: 'drag',
    prompt: 'She was elected as a member of ____. ',
    options: ['parliament', 'march', 'welfare system', 'treaty'],
    correctIndex: 0
  },
  {
    id: 'poli-q23',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-23',
    type: 'drag',
    prompt: 'The bill must pass both houses of ____. ',
    options: ['congress', 'petition', 'border', 'lobby'],
    correctIndex: 0
  },
  {
    id: 'poli-q24',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-24',
    type: 'drag',
    prompt: 'The ____ amended parts of the proposal.',
    options: ['senate', 'march', 'treaty', 'protest'],
    correctIndex: 0
  },
  {
    id: 'poli-q25',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-25',
    type: 'drag',
    prompt: 'The lower ____ voted in favor of the reform.',
    options: ['chamber', 'border', 'petition', 'slogan'],
    correctIndex: 0
  },
  {
    id: 'poli-q26',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-26',
    type: 'drag',
    prompt: 'The health ____ announced new measures.',
    options: ['minister', 'refugee', 'ambassador', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q27',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-27',
    type: 'drag',
    prompt: 'The ____ minister answered questions in parliament.',
    options: ['prime', 'foreign', 'economic', 'domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q28',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-28',
    type: 'drag',
    prompt: 'The ____ addressed the nation on TV.',
    options: ['president', 'refugee', 'petition', 'border guard'],
    correctIndex: 0
  },
  {
    id: 'poli-q29',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-29',
    type: 'drag',
    prompt: 'The ____ of state visited the disaster area.',
    options: ['head', 'march', 'ban', 'treaty'],
    correctIndex: 0
  },
  {
    id: 'poli-q30',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-30',
    type: 'drag',
    prompt: 'The ____ spoke at the town hall meeting.',
    options: ['mayor', 'border', 'refugee', 'petition'],
    correctIndex: 0
  },

  {
    id: 'poli-q31',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-31',
    type: 'drag',
    prompt: 'Many ____ promised change during the campaign.',
    options: ['politicians', 'borders', 'sanctions', 'treaties'],
    correctIndex: 0
  },
  {
    id: 'poli-q32',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-32',
    type: 'drag',
    prompt: 'Each ____ party has its own platform.',
    options: ['political', 'economic', 'foreign', 'domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q33',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-33',
    type: 'drag',
    prompt: 'The ____ leader gave a long speech.',
    options: ['party', 'border', 'ban', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q34',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-34',
    type: 'drag',
    prompt: 'The ____ criticized the new law.',
    options: ['opposition', 'petition', 'asylum', 'refugees'],
    correctIndex: 0
  },
  {
    id: 'poli-q35',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-35',
    type: 'drag',
    prompt: 'Two parties formed a ____ government.',
    options: ['coalition', 'border', 'march', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q36',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-36',
    type: 'drag',
    prompt: 'A ____ government can pass laws more easily.',
    options: ['majority', 'refugee', 'domestic', 'foreign'],
    correctIndex: 0
  },
  {
    id: 'poli-q37',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-37',
    type: 'drag',
    prompt: 'A ____ government must negotiate with other parties.',
    options: ['minority', 'border', 'petition', 'mayor'],
    correctIndex: 0
  },
  {
    id: 'poli-q38',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-38',
    type: 'drag',
    prompt: 'Some voters prefer ____-wing policies.',
    options: ['left', 'border', 'ban', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q39',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-39',
    type: 'drag',
    prompt: 'Others support ____-wing positions.',
    options: ['right', 'public', 'foreign', 'social'],
    correctIndex: 0
  },
  {
    id: 'poli-q40',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-40',
    type: 'drag',
    prompt: '____ parties try to balance both sides.',
    options: ['Centrist', 'Border', 'Refugee', 'Petition'],
    correctIndex: 0
  },

  {
    id: 'poli-q41',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-41',
    type: 'drag',
    prompt: 'The new ____ focuses on education.',
    options: ['policy', 'border', 'petition', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q42',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-42',
    type: 'drag',
    prompt: '____ policy affects everyone in society.',
    options: ['Public', 'Foreign', 'Domestic', 'Border'],
    correctIndex: 0
  },
  {
    id: 'poli-q43',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-43',
    type: 'drag',
    prompt: '____ policy deals with issues inside the country.',
    options: ['Domestic', 'Foreign', 'Border', 'Asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q44',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-44',
    type: 'drag',
    prompt: '____ policy covers relations with other countries.',
    options: ['Foreign', 'Social', 'Economic', 'Tax'],
    correctIndex: 0
  },
  {
    id: 'poli-q45',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-45',
    type: 'drag',
    prompt: '____ policy includes health and welfare programs.',
    options: ['Social', 'Foreign', 'Border', 'Tax'],
    correctIndex: 0
  },
  {
    id: 'poli-q46',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-46',
    type: 'drag',
    prompt: '____ policy tries to reduce unemployment.',
    options: ['Economic', 'Domestic', 'Public', 'Border'],
    correctIndex: 0
  },
  {
    id: 'poli-q47',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-47',
    type: 'drag',
    prompt: '____ policy focuses on climate change.',
    options: ['Environmental', 'Tax', 'Foreign', 'Social'],
    correctIndex: 0
  },
  {
    id: 'poli-q48',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-48',
    type: 'drag',
    prompt: '____ policy is a central issue in the debate.',
    options: ['Tax', 'Border', 'Refugee', 'March'],
    correctIndex: 0
  },
  {
    id: 'poli-q49',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-49',
    type: 'drag',
    prompt: 'The government funds ____ services like schools and hospitals.',
    options: ['public', 'border', 'domestic', 'foreign'],
    correctIndex: 0
  },
  {
    id: 'poli-q50',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-50',
    type: 'drag',
    prompt: 'The ____ system supports people in need.',
    options: ['welfare', 'border', 'tax', 'treaty'],
    correctIndex: 0
  },

  {
    id: 'poli-q51',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-51',
    type: 'drag',
    prompt: 'The candidates took part in a televised ____. ',
    options: ['debate', 'petition', 'ban', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q52',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-52',
    type: 'drag',
    prompt: 'There is a ____ debate about immigration.',
    options: ['public', 'border', 'refugee', 'welfare'],
    correctIndex: 0
  },
  {
    id: 'poli-q53',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-53',
    type: 'drag',
    prompt: 'Healthcare is a major ____ issue.',
    options: ['political', 'border', 'foreign', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q54',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-54',
    type: 'drag',
    prompt: 'Young people are taking a ____ on climate change.',
    options: ['stand', 'vote', 'ban', 'border'],
    correctIndex: 0
  },
  {
    id: 'poli-q55',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-55',
    type: 'drag',
    prompt: '____ opinion can influence decision-makers.',
    options: ['Public', 'Border', 'Tax', 'Foreign'],
    correctIndex: 0
  },
  {
    id: 'poli-q56',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-56',
    type: 'drag',
    prompt: 'The latest ____ shows a close race.',
    options: ['poll', 'march', 'border', 'ban'],
    correctIndex: 0
  },
  {
    id: 'poli-q57',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-57',
    type: 'drag',
    prompt: 'The leader’s ____ rating has dropped.',
    options: ['approval', 'border', 'asylum', 'treaty'],
    correctIndex: 0
  },
  {
    id: 'poli-q58',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-58',
    type: 'drag',
    prompt: 'Education is high on the government’s ____. ',
    options: ['agenda', 'border', 'petition', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q59',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-59',
    type: 'drag',
    prompt: 'The party ____ promises more support for families.',
    options: ['platform', 'border', 'ban', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q60',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-60',
    type: 'drag',
    prompt: 'The campaign ____ was easy to remember.',
    options: ['slogan', 'refugee', 'border', 'treaty'],
    correctIndex: 0
  },

  {
    id: 'poli-q61',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-61',
    type: 'drag',
    prompt: 'Parliament passed a new ____ on privacy.',
    options: ['law', 'border', 'march', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q62',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-62',
    type: 'drag',
    prompt: 'The ____ is still being studied in committee.',
    options: ['bill', 'border', 'ban', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q63',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-63',
    type: 'drag',
    prompt: 'Several ____ were added to the bill.',
    options: ['amendments', 'borders', 'marches', 'treaties'],
    correctIndex: 0
  },
  {
    id: 'poli-q64',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-64',
    type: 'drag',
    prompt: 'The government ____ed a law on road safety.',
    options: ['pass', 'ban', 'resign', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q65',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-65',
    type: 'drag',
    prompt: 'The court ____ down the law as unconstitutional.',
    options: ['struck', 'marched', 'voted', 'signed'],
    correctIndex: 0
  },
  {
    id: 'poli-q66',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-66',
    type: 'drag',
    prompt: 'New ____ protect online privacy.',
    options: ['regulations', 'borders', 'petitions', 'marches'],
    correctIndex: 0
  },
  {
    id: 'poli-q67',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-67',
    type: 'drag',
    prompt: 'There is a ____ on certain dangerous products.',
    options: ['ban', 'border', 'petition', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q68',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-68',
    type: 'drag',
    prompt: 'Many citizens are asking for policy ____. ',
    options: ['reform', 'border', 'march', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q69',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-69',
    type: 'drag',
    prompt: '____ scandals can damage public trust.',
    options: ['Corruption', 'Border', 'Asylum', 'Refugee'],
    correctIndex: 0
  },
  {
    id: 'poli-q70',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-70',
    type: 'drag',
    prompt: '____ is essential in public office.',
    options: ['Accountability', 'Border', 'Asylum', 'Refugee'],
    correctIndex: 0
  },

  {
    id: 'poli-q71',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-71',
    type: 'drag',
    prompt: 'Thousands of people joined the ____. ',
    options: ['protest', 'treaty', 'border', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q72',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-72',
    type: 'drag',
    prompt: 'The ____ remained peaceful.',
    options: ['demonstration', 'border', 'sanction', 'treaty'],
    correctIndex: 0
  },
  {
    id: 'poli-q73',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-73',
    type: 'drag',
    prompt: 'They organized a ____ for climate action.',
    options: ['march', 'ban', 'border', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q74',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-74',
    type: 'drag',
    prompt: 'Supporters gathered at a large political ____. ',
    options: ['rally', 'border', 'petition', 'ban'],
    correctIndex: 0
  },
  {
    id: 'poli-q75',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-75',
    type: 'drag',
    prompt: 'More than ten thousand people signed the ____. ',
    options: ['petition', 'border', 'ban', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q76',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-76',
    type: 'drag',
    prompt: 'She is an ____ for human rights.',
    options: ['activist', 'ambassador', 'mayor', 'refugee'],
    correctIndex: 0
  },
  {
    id: 'poli-q77',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-77',
    type: 'drag',
    prompt: 'The reform started as a ____ movement.',
    options: ['grassroots', 'border', 'foreign', 'domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q78',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-78',
    type: 'drag',
    prompt: 'Environmental groups ____ the government for change.',
    options: ['lobby', 'ban', 'march', 'border'],
    correctIndex: 0
  },
  {
    id: 'poli-q79',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-79',
    type: 'drag',
    prompt: 'Citizens took to the ____ to demand justice.',
    options: ['streets', 'borders', 'polls', 'treaties'],
    correctIndex: 0
  },
  {
    id: 'poli-q80',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-80',
    type: 'drag',
    prompt: 'Voting is one way to make your ____ heard.',
    options: ['voice', 'border', 'ban', 'petition'],
    correctIndex: 0
  },

  {
    id: 'poli-q81',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-81',
    type: 'drag',
    prompt: 'Citizens have both ____ and duties.',
    options: ['rights', 'borders', 'treaties', 'marches'],
    correctIndex: 0
  },
  {
    id: 'poli-q82',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-82',
    type: 'drag',
    prompt: '____ comes with responsibilities.',
    options: ['Citizenship', 'Petition', 'Border', 'Asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q83',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-83',
    type: 'drag',
    prompt: '____ engagement includes voting and volunteering.',
    options: ['Civic', 'Foreign', 'Social', 'Tax'],
    correctIndex: 0
  },
  {
    id: 'poli-q84',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-84',
    type: 'drag',
    prompt: '____ servants work in government offices.',
    options: ['Public', 'Border', 'Foreign', 'Social'],
    correctIndex: 0
  },
  {
    id: 'poli-q85',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-85',
    type: 'drag',
    prompt: 'Good ____ helps reduce inequality.',
    options: ['governance', 'petition', 'border', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q86',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-86',
    type: 'drag',
    prompt: 'People want a more ____ government.',
    options: ['transparent', 'border', 'sanctioned', 'refugee'],
    correctIndex: 0
  },
  {
    id: 'poli-q87',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-87',
    type: 'drag',
    prompt: 'Scandals can weaken ____ trust.',
    options: ['public', 'border', 'treaty', 'asylum'],
    correctIndex: 0
  },
  {
    id: 'poli-q88',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-88',
    type: 'drag',
    prompt: 'The ____ led to several resignations.',
    options: ['scandal', 'border', 'ban', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q89',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-89',
    type: 'drag',
    prompt: 'The minister decided to ____ from office after the report.',
    options: ['resign', 'vote', 'march', 'ban'],
    correctIndex: 0
  },
  {
    id: 'poli-q90',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-90',
    type: 'drag',
    prompt: 'The president ____d two terms in office.',
    options: ['serve', 'ban', 'march', 'treaty'],
    correctIndex: 0
  },

  {
    id: 'poli-q91',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-91',
    type: 'drag',
    prompt: '____ relations shape global politics.',
    options: ['International', 'Domestic', 'Social', 'Tax'],
    correctIndex: 0
  },
  {
    id: 'poli-q92',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-92',
    type: 'drag',
    prompt: '____ can prevent conflicts between countries.',
    options: ['Diplomacy', 'Protest', 'Petition', 'Marching'],
    correctIndex: 0
  },
  {
    id: 'poli-q93',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-93',
    type: 'drag',
    prompt: 'The ____ met with foreign leaders.',
    options: ['ambassador', 'mayor', 'refugee', 'voter'],
    correctIndex: 0
  },
  {
    id: 'poli-q94',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-94',
    type: 'drag',
    prompt: 'The countries signed a trade ____. ',
    options: ['treaty', 'march', 'ban', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q95',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-95',
    type: 'drag',
    prompt: 'Economic ____ were imposed on the regime.',
    options: ['sanctions', 'borders', 'marches', 'petitions'],
    correctIndex: 0
  },
  {
    id: 'poli-q96',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-96',
    type: 'drag',
    prompt: 'International organizations try to resolve ____. ',
    options: ['conflicts', 'elections', 'slogans', 'polls'],
    correctIndex: 0
  },
  {
    id: 'poli-q97',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-97',
    type: 'drag',
    prompt: 'The ____ agreement ended years of war.',
    options: ['peace', 'tax', 'social', 'domestic'],
    correctIndex: 0
  },
  {
    id: 'poli-q98',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-98',
    type: 'drag',
    prompt: 'The two countries share a long ____. ',
    options: ['border', 'petition', 'election', 'agenda'],
    correctIndex: 0
  },
  {
    id: 'poli-q99',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-99',
    type: 'drag',
    prompt: '____ fled the conflict and sought safety.',
    options: ['Refugees', 'Mayors', 'Ambassadors', 'Petitions'],
    correctIndex: 0
  },
  {
    id: 'poli-q100',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-100',
    type: 'drag',
    prompt: 'They applied for ____ in a neighboring country.',
    options: ['asylum', 'border', 'sanction', 'petition'],
    correctIndex: 0
  },
  {
    "id": "poli-q101",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-101",
    "type": "choice",
    "prompt": "What is the system by which a state or community is controlled?",
    "options": [
      "Company",
      "Government",
      "School",
      "Library"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q102",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-102",
    "type": "choice",
    "prompt": "What verb means to exercise authority over an area or people?",
    "options": [
      "Wait",
      "Govern",
      "Sleep",
      "Eat"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q103",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-103",
    "type": "choice",
    "prompt": "What is the title of the head of a state, province, or major institution?",
    "options": [
      "Student",
      "Waiter",
      "Governor",
      "Driver"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q104",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-104",
    "type": "choice",
    "prompt": "What economic sector involves the provision of government goods and services?",
    "options": [
      "Public sector",
      "Farming sector",
      "Private sector",
      "Charity sector"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q105",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-105",
    "type": "choice",
    "prompt": "What part of the economy is run by private individuals and companies, not the government?",
    "options": [
      "Public sector",
      "Private sector",
      "Military",
      "Education"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q106",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-106",
    "type": "choice",
    "prompt": "What is the position of authority that involves responsibility for public affairs?",
    "options": [
      "Private job",
      "Public office",
      "Military duty",
      "School attendance"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q107",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-107",
    "type": "choice",
    "prompt": "What term refers to the implementation of government policy and the management of state affairs?",
    "options": [
      "Personal finances",
      "Public administration",
      "Art exhibition",
      "Factory production"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q108",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-108",
    "type": "choice",
    "prompt": "What financial resources come from the state, typically taxes, and are used for public services?",
    "options": [
      "Private savings",
      "Public funds",
      "Investment returns",
      "Personal loans"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q109",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-109",
    "type": "choice",
    "prompt": "What is a person who pays taxes to the state called?",
    "options": [
      "Consumer",
      "Taxpayer",
      "Student",
      "Tourist"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q110",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-110",
    "type": "choice",
    "prompt": "What is the mandated rise in the amount of money citizens must pay to the government?",
    "options": [
      "Price decrease",
      "Salary bonus",
      "Tax increase",
      "Service cut"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q111",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-111",
    "type": "choice",
    "prompt": "What is the estimated spending plan for a specific period, often for a government or organization?",
    "options": [
      "Diary",
      "Novel",
      "Budget",
      "Map"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q112",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-112",
    "type": "choice",
    "prompt": "What term describes when expenditures exceed revenues over a fiscal period?",
    "options": [
      "Profit",
      "Surplus",
      "Deficit",
      "Balance"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q113",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-113",
    "type": "choice",
    "prompt": "What financial state occurs when income is greater than spending?",
    "options": [
      "Debt",
      "Loss",
      "Surplus",
      "Shortage"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q114",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-114",
    "type": "choice",
    "prompt": "What is money provided, especially by an organization or government, for a specific purpose?",
    "options": [
      "Gossip",
      "Funding",
      "Weather",
      "Noise"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q115",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-115",
    "type": "choice",
    "prompt": "What is a sum of money given by an organization for a particular purpose, typically for research or charity?",
    "options": [
      "Bill",
      "Loan",
      "Grant",
      "Fine"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q116",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-116",
    "type": "choice",
    "prompt": "What phrase means to distribute available assets for various purposes?",
    "options": [
      "Waste money",
      "Hide resources",
      "Allocate resources",
      "Ignore budget"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q117",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-117",
    "type": "choice",
    "prompt": "What refers to the money spent by the government on public services and debt repayment?",
    "options": [
      "Private investment",
      "Public spending",
      "Personal debt",
      "Corporate profit"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q118",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-118",
    "type": "choice",
    "prompt": "What is a reduction in the amount of tax a person or company has to pay?",
    "options": [
      "Tax break",
      "Tax duty",
      "Tax audit",
      "Tax form"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q119",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-119",
    "type": "choice",
    "prompt": "What is the general increase in prices and fall in the purchasing value of money?",
    "options": [
      "Deflation",
      "Inflation",
      "Stability",
      "Recession"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q120",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-120",
    "type": "choice",
    "prompt": "What is the state of being without a job but actively seeking one?",
    "options": [
      "Employment",
      "Retirement",
      "Unemployment",
      "Vacation"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q121",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-121",
    "type": "choice",
    "prompt": "What is the sealed container into which voters put their completed papers during an election?",
    "options": [
      "Mail slot",
      "Ballot box",
      "Trash can",
      "Filing cabinet"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q122",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-122",
    "type": "choice",
    "prompt": "What is a ballot submitted by a voter who will be unable to attend the polls on election day?",
    "options": [
      "Final result",
      "Absentee ballot",
      "Protest note",
      "New law"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q123",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-123",
    "type": "choice",
    "prompt": "What is the process by which voters can cast their votes days or weeks before the official election day?",
    "options": [
      "Late voting",
      "Early voting",
      "Re-voting",
      "Virtual voting"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q124",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-124",
    "type": "choice",
    "prompt": "What is a large public meeting held to support a political candidate or party?",
    "options": [
      "Private dinner",
      "Campaign rally",
      "Quiet library time",
      "Solo hike"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q125",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-125",
    "type": "choice",
    "prompt": "What is a pledge made by a candidate during an election to achieve a goal if elected?",
    "options": [
      "Past event",
      "Campaign promise",
      "Secret plan",
      "Existing law"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q126",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-126",
    "type": "choice",
    "prompt": "What is a formal address delivered by a politician on a matter of public policy or opinion?",
    "options": [
      "Cooking recipe",
      "Political speech",
      "Personal letter",
      "Math formula"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q127",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-127",
    "type": "choice",
    "prompt": "What is a formal meeting where a political figure makes a statement and answers questions from journalists?",
    "options": [
      "Private meeting",
      "Press conference",
      "Concert",
      "Art class"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q128",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-128",
    "type": "choice",
    "prompt": "What refers to the amount of attention and reporting a subject receives in newspapers, TV, and online news sources?",
    "options": [
      "Hidden truth",
      "Media coverage",
      "Private journal",
      "Secret code"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q129",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-129",
    "type": "choice",
    "prompt": "What is the process of verifying the accuracy of statements, often political, before publication?",
    "options": [
      "Ignore details",
      "Fact-check",
      "Make assumptions",
      "Publish rumours"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q130",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-130",
    "type": "choice",
    "prompt": "What type of advertisement focuses on criticizing or discrediting an opposing candidate?",
    "options": [
      "Product ad",
      "Attack ad",
      "Travel ad",
      "Recipe ad"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q131",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-131",
    "type": "choice",
    "prompt": "What document, sometimes required in the US, proves a person's identity and eligibility to cast a ballot?",
    "options": [
      "Voter ID",
      "Credit card",
      "Library card",
      "Restaurant receipt"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q132",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-132",
    "type": "choice",
    "prompt": "What is the process of officially signing up to be able to vote in an election?",
    "options": [
      "Voter registration",
      "Unsubscribe",
      "Cancel account",
      "Leave the country"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q133",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-133",
    "type": "choice",
    "prompt": "What phrasal verb means to change the number of representatives assigned to each area based on population shifts?",
    "options": [
      "Keep the same",
      "Redistribute seats",
      "Add new furniture",
      "Ignore population"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q134",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-134",
    "type": "choice",
    "prompt": "What is the manipulative process of drawing electoral district boundaries to give one party an unfair advantage?",
    "options": [
      "Gerrymandering",
      "Straight line map",
      "Fair election",
      "Random drawing"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q135",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-135",
    "type": "choice",
    "prompt": "What term refers to a US state where the two major political parties have similar levels of support, making the election outcome uncertain?",
    "options": [
      "Safe state",
      "Swing state",
      "Fixed state",
      "Small town"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q136",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-136",
    "type": "choice",
    "prompt": "What idiom describes an election result where one candidate or party wins by a massive margin?",
    "options": [
      "Minor win",
      "Landslide victory",
      "Tie vote",
      "Close call"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q137",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-137",
    "type": "choice",
    "prompt": "What term describes an election contest where the difference in votes between the leading candidates is small?",
    "options": [
      "Close race",
      "One-sided defeat",
      "Guaranteed win",
      "Unimportant contest"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q138",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-138",
    "type": "choice",
    "prompt": "What is a survey of voters taken immediately after they have exited the voting booth to predict the result?",
    "options": [
      "Pre-election survey",
      "Exit poll",
      "Official count",
      "Census"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q139",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-139",
    "type": "choice",
    "prompt": "What is the process of counting all the votes again after an initial count, typically due to a close result or dispute?",
    "options": [
      "First count",
      "Vote recount",
      "Polling station",
      "Ballot design"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q140",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-140",
    "type": "choice",
    "prompt": "What illegal interference with the process of an election, such as tampering with ballots or voter suppression, is called?",
    "options": [
      "Fair procedure",
      "Electoral fraud",
      "Accurate count",
      "Standard voting"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q141",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-141",
    "type": "choice",
    "prompt": "What set of rules governs relations and interactions between different sovereign states?",
    "options": [
      "Local customs",
      "International law",
      "Regional rules",
      "Personal code"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q142",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-142",
    "type": "choice",
    "prompt": "What contract outlines the terms of commerce, tariffs, and duties between two or more nations?",
    "options": [
      "Personal promise",
      "Trade agreement",
      "War declaration",
      "Recipe book"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q143",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-143",
    "type": "choice",
    "prompt": "What is a disagreement between two or more states over the exact line separating their territories?",
    "options": [
      "Garden fence",
      "Border dispute",
      "Friendship pact",
      "Internal policy"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q144",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-144",
    "type": "choice",
    "prompt": "What is the act of maintaining peace between hostile groups, often done by international military forces?",
    "options": [
      "Starting conflict",
      "Peacekeeping",
      "Ignoring violence",
      "Arming factions"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q145",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-145",
    "type": "choice",
    "prompt": "What is the global business of manufacturing, buying, and selling weapons?",
    "options": [
      "Arms trade",
      "Food market",
      "Flower industry",
      "Toy store"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q146",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-146",
    "type": "choice",
    "prompt": "What term describes the interference by one state in the internal affairs of another?",
    "options": [
      "Diplomatic aid",
      "Foreign interference",
      "Neutrality",
      "Domestic policy"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q147",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-147",
    "type": "choice",
    "prompt": "What is a potential danger or vulnerability to computer systems or networks?",
    "options": [
      "Safety lock",
      "Cybersecurity threat",
      "Physical barrier",
      "Old book"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q148",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-148",
    "type": "choice",
    "prompt": "What is the study of the effects of geography (human and physical) on international politics and relations?",
    "options": [
      "Local history",
      "Geopolitics",
      "Botany",
      "Mathematics"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q149",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-149",
    "type": "choice",
    "prompt": "What is a meeting between heads of government to discuss matters of mutual concern?",
    "options": [
      "Summit meeting",
      "Private phone call",
      "School play",
      "Art gallery visit"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q150",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-150",
    "type": "choice",
    "prompt": "What phrasal verb means to remove military forces from an area of conflict?",
    "options": [
      "Send in forces",
      "Deploy troops",
      "Withdraw troops",
      "Train soldiers"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q151",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-151",
    "type": "choice",
    "prompt": "What is the set of laws and regulations relating to the entry and stay of foreign people in a country?",
    "options": [
      "Domestic finance",
      "Immigration policy",
      "Agricultural plan",
      "Sports rules"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q152",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-152",
    "type": "choice",
    "prompt": "What is the term for measures taken by a country to regulate or restrict movement across its frontiers?",
    "options": [
      "Open door",
      "Border control",
      "Free travel",
      "Unrestricted trade"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q153",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-153",
    "type": "choice",
    "prompt": "What is the official removal of an undesirable alien from a country?",
    "options": [
      "Deportation",
      "Naturalization",
      "Immigration",
      "Entry permit"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q154",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-154",
    "type": "choice",
    "prompt": "What official document grants a non-citizen the right to live in a country for an extended period?",
    "options": [
      "Travel map",
      "Residency permit",
      "Student essay",
      "Shopping receipt"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q155",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-155",
    "type": "choice",
    "prompt": "What is an examination taken by an applicant to prove knowledge of a country's language, history, and government?",
    "options": [
      "Cooking quiz",
      "Driving test",
      "Citizenship test",
      "Art competition"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q156",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-156",
    "type": "choice",
    "prompt": "What is the status of being a legal citizen of two countries simultaneously?",
    "options": [
      "Single nationality",
      "Dual citizenship",
      "Lack of status",
      "Tourist visa"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q157",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-157",
    "type": "choice",
    "prompt": "What is an official rule that dictates who must obtain authorization to enter a foreign country?",
    "options": [
      "Free entry",
      "Visa requirement",
      "Local recipe",
      "Open invitation"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q158",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-158",
    "type": "choice",
    "prompt": "What temporary settlement provides shelter and aid for people who have fled their homes due to war or persecution?",
    "options": [
      "Refugee camp",
      "Luxury hotel",
      "Sports arena",
      "University dormitory"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q159",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-159",
    "type": "choice",
    "prompt": "What is a situation involving the difficult or dangerous movement of large groups of people across borders?",
    "options": [
      "Local traffic",
      "Migration crisis",
      "Holiday travel",
      "Daily commute"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q160",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-160",
    "type": "choice",
    "prompt": "What phrasal verb means to offer safety and protection to a person fleeing persecution in their home country?",
    "options": [
      "Ignore request",
      "Grant asylum",
      "Send back",
      "Offer a job"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q161",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-161",
    "type": "choice",
    "prompt": "What is the formal determination made by a judicial body on a legal case?",
    "options": [
      "Personal opinion",
      "Court ruling",
      "Newspaper article",
      "Informal chat"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q162",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-162",
    "type": "choice",
    "prompt": "What phrasal verb means to ask a higher court to reverse the decision of a lower court?",
    "options": [
      "Accept immediately",
      "Appeal a decision",
      "Ignore the verdict",
      "Congratulate the winner"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q163",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-163",
    "type": "choice",
    "prompt": "What is the title of a public official appointed to decide cases in a court of law?",
    "options": [
      "Chef",
      "Judge",
      "Librarian",
      "Gardener"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q164",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-164",
    "type": "choice",
    "prompt": "What is a body of people (typically 12) sworn to give a verdict in a legal case based on evidence?",
    "options": [
      "Audience",
      "Jury",
      "Choir",
      "Team"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q165",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-165",
    "type": "choice",
    "prompt": "What is a legal case brought by a person or group against another in a court of law?",
    "options": [
      "Lawsuit",
      "Friendly debate",
      "Birthday party",
      "Science experiment"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q166",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-166",
    "type": "choice",
    "prompt": "What is the collection of courts, judges, and laws that operate within a jurisdiction?",
    "options": [
      "Weather system",
      "Legal system",
      "Solar system",
      "Heating system"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q167",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-167",
    "type": "choice",
    "prompt": "What is the condition of being in accordance with an established constitution?",
    "options": [
      "Illegality",
      "Constitutionality",
      "Complexity",
      "Novelty"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q168",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-168",
    "type": "choice",
    "prompt": "What phrasal verb means to support and maintain a rule or statute as valid and enforceable?",
    "options": [
      "Break the rules",
      "Ignore the statute",
      "Uphold the law",
      "Change the meaning"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q169",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-169",
    "type": "choice",
    "prompt": "What legal principle ensures that all persons are entitled to a fair hearing and established legal procedures?",
    "options": [
      "Random outcome",
      "Due process",
      "Secret trial",
      "Quick judgment"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q170",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-170",
    "type": "choice",
    "prompt": "What is the term for the fundamental principles, statutes, and regulations that form the basis of a legal system?",
    "options": [
      "Legal framework",
      "Personal diary",
      "Cooking recipe",
      "Art sketch"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q171",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-171",
    "type": "choice",
    "prompt": "What phrasal verb means to formally introduce a suggestion for a new law to a legislative body?",
    "options": [
      "Hide a plan",
      "Propose a bill",
      "Ignore legislation",
      "Cancel a treaty"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q172",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-172",
    "type": "choice",
    "prompt": "What phrasal verb means to write the preliminary version of a new law or set of regulations?",
    "options": [
      "Draft legislation",
      "Sing a song",
      "Paint a picture",
      "Plant a tree"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q173",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-173",
    "type": "choice",
    "prompt": "What is the term for an individual responsible for formulating government strategy and laws?",
    "options": [
      "Policy maker",
      "Delivery driver",
      "Retail clerk",
      "Factory worker"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q174",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-174",
    "type": "choice",
    "prompt": "What is a member of a legislative body who helps make laws?",
    "options": [
      "Lawmaker",
      "Judge",
      "Police officer",
      "Citizen"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q175",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-175",
    "type": "choice",
    "prompt": "What is the process of seeking input and opinions from the general populace on a proposed change or new policy?",
    "options": [
      "Secret discussion",
      "Public consultation",
      "Private meeting",
      "One-person decision"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q176",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-176",
    "type": "choice",
    "prompt": "What is an institute, organization, or group that conducts research and engages in advocacy in areas such as social policy, politics, or economics?",
    "options": [
      "Think tank",
      "Sport team",
      "Art gallery",
      "Local cafe"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q177",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-177",
    "type": "choice",
    "prompt": "What is the systematic evaluation of the design, implementation, and outcomes of government strategies?",
    "options": [
      "Policy analysis",
      "Random guessing",
      "Private thought",
      "Unrelated study"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q178",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-178",
    "type": "choice",
    "prompt": "What phrasal verb means to publicly support or recommend a particular cause or policy?",
    "options": [
      "Ignore",
      "Criticize",
      "Advocate for",
      "Oppose"
    ],
    "correctIndex": 2
  },
  {
    "id": "poli-q179",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-179",
    "type": "choice",
    "prompt": "What phrasal verb means to actively work to eliminate dishonest or illegal behavior by those in power?",
    "options": [
      "Promote graft",
      "Fight corruption",
      "Ignore crime",
      "Accept bribes"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q180",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-180",
    "type": "choice",
    "prompt": "What phrasal verb means to make a democratic political system more resilient and effective?",
    "options": [
      "Weaken the state",
      "Strengthen democracy",
      "Dissolve the government",
      "Promote dictatorship"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q181",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-181",
    "type": "choice",
    "prompt": "What is a meeting or session open to the public where evidence or arguments are presented on a specific issue?",
    "options": [
      "Public hearing",
      "Private lunch",
      "Secret trial",
      "Closed door meeting"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q182",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-182",
    "type": "choice",
    "prompt": "What is an informal public meeting where politicians or officials meet with constituents to discuss local issues?",
    "options": [
      "Town hall meeting",
      "Concert hall",
      "Museum exhibit",
      "Private concert"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q183",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-183",
    "type": "choice",
    "prompt": "What is the responsibility of a citizen to participate in public life, such as voting or serving on a jury?",
    "options": [
      "Personal hobby",
      "Civic duty",
      "Financial debt",
      "Random chore"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q184",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-184",
    "type": "choice",
    "prompt": "What political philosophy concept describes an implicit agreement among members of a society to cooperate for social benefits?",
    "options": [
      "Social contract",
      "Personal diary",
      "Trade route",
      "Military treaty"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q185",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-185",
    "type": "choice",
    "prompt": "What is the influence exerted by the general population on political leaders or policy decisions?",
    "options": [
      "Government mandate",
      "Public pressure",
      "Private decision",
      "Secret plan"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q186",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-186",
    "type": "choice",
    "prompt": "What is a period of instability or deadlock in a government or country's political affairs?",
    "options": [
      "Economic boom",
      "Political crisis",
      "Stable environment",
      "Quiet afternoon"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q187",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-187",
    "type": "choice",
    "prompt": "What is a conflict between two or more people or groups vying for control or authority?",
    "options": [
      "Cooperation",
      "Power struggle",
      "Agreement",
      "Teamwork"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q188",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-188",
    "type": "choice",
    "prompt": "What phrasal verb means to be inaugurated or officially begin a term in a public position?",
    "options": [
      "Leave the job",
      "Take office",
      "Retire early",
      "Take a break"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q189",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-189",
    "type": "choice",
    "prompt": "What phrasal verb means to conduct a direct vote in which the entire electorate is asked to either accept or reject a particular proposal?",
    "options": [
      "Hold a referendum",
      "Elect a leader",
      "Issue a decree",
      "Write a letter"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q190",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-190",
    "type": "choice",
    "prompt": "What phrasal verb means to officially establish a new administration, usually after an election?",
    "options": [
      "Dissolve parliament",
      "Form a government",
      "Close the borders",
      "Declare a holiday"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q191",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-191",
    "type": "choice",
    "prompt": "What are penalties, such as trade restrictions, imposed by one or more countries on another country to punish or influence its policy?",
    "options": [
      "Economic aid",
      "Economic sanctions",
      "Trade bonuses",
      "Diplomatic gifts"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q192",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-192",
    "type": "choice",
    "prompt": "What are discussions among hostile parties to seek a resolution to a conflict or war?",
    "options": [
      "Peace talks",
      "War declarations",
      "Military exercises",
      "Public insults"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q193",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-193",
    "type": "choice",
    "prompt": "What is an official prohibition on the sale or supply of weapons to a particular country or group?",
    "options": [
      "Arms trade",
      "Arms ban",
      "Weapons donation",
      "Open market"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q194",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-194",
    "type": "choice",
    "prompt": "What is an agreement between countries to cooperate, usually in military or economic matters, for mutual long-term benefit?",
    "options": [
      "Random meeting",
      "Strategic alliance",
      "Minor disagreement",
      "Temporary trade"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q195",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-195",
    "type": "choice",
    "prompt": "What is a secure facility used by a country's armed forces for training, storing equipment, or deploying operations?",
    "options": [
      "Shopping mall",
      "Military base",
      "Public park",
      "Amusement park"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q196",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-196",
    "type": "choice",
    "prompt": "What phrasal verb means to send military forces to an operational area for strategic purposes?",
    "options": [
      "Recall troops",
      "Deploy troops",
      "Ignore conflict",
      "Disarm soldiers"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q197",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-197",
    "type": "choice",
    "prompt": "What refers to the safety and stability of a nation-state, encompassing protection from threats like terrorism or foreign espionage?",
    "options": [
      "Personal privacy",
      "National security",
      "Local weather",
      "Internet access"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q198",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-198",
    "type": "choice",
    "prompt": "What is a government organization responsible for collecting and analyzing information vital for national defense and foreign policy?",
    "options": [
      "Intelligence agency",
      "Post office",
      "Tax collector",
      "Public library"
    ],
    "correctIndex": 0
  },
  {
    "id": "poli-q199",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-199",
    "type": "choice",
    "prompt": "What is a formal visit by a head of state to a foreign country, usually involving ceremonies and high-level meetings?",
    "options": [
      "Personal vacation",
      "State visit",
      "Business trip",
      "Quick stopover"
    ],
    "correctIndex": 1
  },
  {
    "id": "poli-q200",
    "categoryId": POLITICS_CATEGORY_ID,
    "wordId": "poli-200",
    "type": "choice",
    "prompt": "What is the process of countries working together to achieve mutual goals or solve international problems?",
    "options": [
      "Isolationism",
      "International cooperation",
      "Unilateral action",
      "Global competition"
    ],
    "correctIndex": 1
  },
  {
    id: 'poli-q201',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-201',
    type: 'drag',
    prompt: 'Political ____ shapes how people see society.',
    options: ['ideology', 'petition', 'border', 'budget'],
    correctIndex: 0
  },
  {
    id: 'poli-q202',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-202',
    type: 'drag',
    prompt: 'She supports ____ economic reforms.',
    options: ['leftist', 'municipal', 'authoritarian', 'local'],
    correctIndex: 0
  },
  {
    id: 'poli-q203',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-203',
    type: 'drag',
    prompt: 'He has ____-leaning views on taxes.',
    options: ['right', 'green', 'centrist', 'local'],
    correctIndex: 0
  },
  {
    id: 'poli-q204',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-204',
    type: 'drag',
    prompt: '____ often claims to defend ordinary people.',
    options: ['Populism', 'Censorship', 'Dictatorship', 'Neutrality'],
    correctIndex: 0
  },
  {
    id: 'poli-q205',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-205',
    type: 'drag',
    prompt: '____ can unite or divide a country.',
    options: ['Nationalism', 'Bylaw', 'Climate', 'Housing'],
    correctIndex: 0
  },
  {
    id: 'poli-q206',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-206',
    type: 'drag',
    prompt: '____ emphasizes international cooperation.',
    options: ['Globalism', 'Localism', 'Censorship', 'Boycott'],
    correctIndex: 0
  },
  {
    id: 'poli-q207',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-207',
    type: 'drag',
    prompt: '____ parties focus on individual freedoms.',
    options: ['Liberal', 'Authoritarian', 'Military', 'One-party'],
    correctIndex: 0
  },
  {
    id: 'poli-q208',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-208',
    type: 'drag',
    prompt: '____ voters often prefer gradual change.',
    options: ['Conservative', 'Progressive', 'Green', 'Radical'],
    correctIndex: 0
  },
  {
    id: 'poli-q209',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-209',
    type: 'drag',
    prompt: '____ movements push for social reforms.',
    options: ['Progressive', 'Neutral', 'Authoritarian', 'Global'],
    correctIndex: 0
  },
  {
    id: 'poli-q210',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-210',
    type: 'drag',
    prompt: '____ groups often reject democratic rules.',
    options: ['Extremist', 'Centrist', 'Local', 'Union'],
    correctIndex: 0
  },

  {
    id: 'poli-q211',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-211',
    type: 'drag',
    prompt: '____ participation is vital for democracy.',
    options: ['Citizen', 'Military', 'Corporate', 'Media'],
    correctIndex: 0
  },
  {
    id: 'poli-q212',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-212',
    type: 'drag',
    prompt: '____ organizing starts in local communities.',
    options: ['Grassroots', 'Authoritarian', 'Judicial', 'Diplomatic'],
    correctIndex: 0
  },
  {
    id: 'poli-q213',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-213',
    type: 'drag',
    prompt: 'Volunteers worked hard to ____ voters.',
    options: ['mobilize', 'censor', 'tax', 'silence'],
    correctIndex: 0
  },
  {
    id: 'poli-q214',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-214',
    type: 'drag',
    prompt: 'The campaign aims to ____ awareness about corruption.',
    options: ['raise', 'suppress', 'hide', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'poli-q215',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-215',
    type: 'drag',
    prompt: 'You can ____ up for the local voter registry online.',
    options: ['sign', 'march', 'strike', 'censor'],
    correctIndex: 0
  },
  {
    id: 'poli-q216',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-216',
    type: 'drag',
    prompt: 'Many students decided to ____ out against the new policy.',
    options: ['speak', 'step', 'phase', 'scale'],
    correctIndex: 0
  },
  {
    id: 'poli-q217',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-217',
    type: 'drag',
    prompt: 'Citizens must ____ up for their rights.',
    options: ['stand', 'step', 'sit', 'roll'],
    correctIndex: 0
  },
  {
    id: 'poli-q218',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-218',
    type: 'drag',
    prompt: 'The movement decided to ____ for change in the justice system.',
    options: ['call', 'ban', 'vote', 'strike'],
    correctIndex: 0
  },
  {
    id: 'poli-q219',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-219',
    type: 'drag',
    prompt: 'Activists keep ____ing for reform.',
    options: ['push', 'hide', 'ignore', 'silence'],
    correctIndex: 0
  },
  {
    id: 'poli-q220',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-220',
    type: 'drag',
    prompt: 'They decided to ____ a campaign focused on climate justice.',
    options: ['run', 'block', 'censor', 'scrap'],
    correctIndex: 0
  },

  {
    id: 'poli-q221',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-221',
    type: 'drag',
    prompt: 'The ____ landscape changed after the crisis.',
    options: ['political', 'media', 'housing', 'judicial'],
    correctIndex: 0
  },
  {
    id: 'poli-q222',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-222',
    type: 'drag',
    prompt: 'The ____ climate is tense this year.',
    options: ['political', 'meteorological', 'academic', 'cultural'],
    correctIndex: 0
  },
  {
    id: 'poli-q223',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-223',
    type: 'drag',
    prompt: 'Parties are spread across the ____ spectrum.',
    options: ['political', 'climate', 'media', 'housing'],
    correctIndex: 0
  },
  {
    id: 'poli-q224',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-224',
    type: 'drag',
    prompt: '____ makes compromise more difficult.',
    options: ['Polarization', 'Consultation', 'Budgeting', 'Recycling'],
    correctIndex: 0
  },
  {
    id: 'poli-q225',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-225',
    type: 'drag',
    prompt: 'There is growing ____ tension in the region.',
    options: ['political', 'musical', 'sporting', 'personal'],
    correctIndex: 0
  },
  {
    id: 'poli-q226',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-226',
    type: 'drag',
    prompt: 'The reform created deep ____ in society.',
    options: ['divisions', 'ballots', 'budgets', 'borders'],
    correctIndex: 0
  },
  {
    id: 'poli-q227',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-227',
    type: 'drag',
    prompt: 'Leaders tried to ____ consensus across parties.',
    options: ['build', 'ban', 'censor', 'delay'],
    correctIndex: 0
  },
  {
    id: 'poli-q228',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-228',
    type: 'drag',
    prompt: 'Some politicians are ready to reach across the ____. ',
    options: ['aisle', 'border', 'budget', 'ballot'],
    correctIndex: 0
  },
  {
    id: 'poli-q229',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-229',
    type: 'drag',
    prompt: 'They want to ____ the gap between rich and poor.',
    options: ['bridge', 'open', 'widen', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'poli-q230',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-230',
    type: 'drag',
    prompt: 'The two sides finally found ____ ground.',
    options: ['common', 'private', 'foreign', 'upper'],
    correctIndex: 0
  },

  {
    id: 'poli-q231',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-231',
    type: 'drag',
    prompt: '____ sector unions negotiated better working conditions.',
    options: ['Public', 'Green', 'Housing', 'Climate'],
    correctIndex: 0
  },
  {
    id: 'poli-q232',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-232',
    type: 'drag',
    prompt: 'The government and unions ____d a deal.',
    options: ['negotiate', 'censor', 'tax', 'scrap'],
    correctIndex: 0
  },
  {
    id: 'poli-q233',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-233',
    type: 'drag',
    prompt: '____ bargaining is protected by law.',
    options: ['Collective', 'Climate', 'Judicial', 'Media'],
    correctIndex: 0
  },
  {
    id: 'poli-q234',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-234',
    type: 'drag',
    prompt: '____ action disrupted public transport.',
    options: ['Strike', 'Budget', 'Voting', 'Census'],
    correctIndex: 0
  },
  {
    id: 'poli-q235',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-235',
    type: 'drag',
    prompt: 'Workers staged a ____ over low pay.',
    options: ['walkout', 'treaty', 'petition', 'bylaw'],
    correctIndex: 0
  },
  {
    id: 'poli-q236',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-236',
    type: 'drag',
    prompt: 'Students organized a ____ at the university.',
    options: ['sit-in', 'budget', 'census', 'hearing'],
    correctIndex: 0
  },
  {
    id: 'poli-q237',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-237',
    type: 'drag',
    prompt: 'They called for a ____ of certain products.',
    options: ['boycott', 'ballot', 'broadcast', 'bylaw'],
    correctIndex: 0
  },
  {
    id: 'poli-q238',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-238',
    type: 'drag',
    prompt: '____ disobedience has a long history in social movements.',
    options: ['Civil', 'Armed', 'Judicial', 'Sporting'],
    correctIndex: 0
  },
  {
    id: 'poli-q239',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-239',
    type: 'drag',
    prompt: 'The group promotes ____-violent protest.',
    options: ['non', 'extra', 'hyper', 'semi'],
    correctIndex: 0
  },
  {
    id: 'poli-q240',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-240',
    type: 'drag',
    prompt: 'Authorities decided to ____ down on illegal funding.',
    options: ['clamp', 'vote', 'walk', 'phase'],
    correctIndex: 0
  },

  {
    id: 'poli-q241',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-241',
    type: 'drag',
    prompt: '____ news can influence elections.',
    options: ['Fake', 'Local', 'Daily', 'Printed'],
    correctIndex: 0
  },
  {
    id: 'poli-q242',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-242',
    type: 'drag',
    prompt: '____ spreads quickly online.',
    options: ['Misinformation', 'Infrastructure', 'Housing', 'Weather'],
    correctIndex: 0
  },
  {
    id: 'poli-q243',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-243',
    type: 'drag',
    prompt: 'Authoritarian regimes often use ____. ',
    options: ['propaganda', 'ballots', 'boycotts', 'bylaws'],
    correctIndex: 0
  },
  {
    id: 'poli-q244',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-244',
    type: 'drag',
    prompt: '____ limits freedom of expression.',
    options: ['Censorship', 'Consultation', 'Competition', 'Coalition'],
    correctIndex: 0
  },
  {
    id: 'poli-q245',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-245',
    type: 'drag',
    prompt: '____ media help hold power to account.',
    options: ['Independent', 'Private', 'Sensational', 'Commercial'],
    correctIndex: 0
  },
  {
    id: 'poli-q246',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-246',
    type: 'drag',
    prompt: 'Freedom of the ____ is a cornerstone of democracy.',
    options: ['press', 'border', 'budget', 'ballot'],
    correctIndex: 0
  },
  {
    id: 'poli-q247',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-247',
    type: 'drag',
    prompt: 'The ____ broadcaster must remain neutral.',
    options: ['public', 'climate', 'housing', 'military'],
    correctIndex: 0
  },
  {
    id: 'poli-q248',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-248',
    type: 'drag',
    prompt: 'Some people worry about media ____. ',
    options: ['bias', 'budget', 'border', 'ballot'],
    correctIndex: 0
  },
  {
    id: 'poli-q249',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-249',
    type: 'drag',
    prompt: 'Press officers tried to ____ the story positively.',
    options: ['spin', 'vote', 'march', 'boycott'],
    correctIndex: 0
  },
  {
    id: 'poli-q250',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-250',
    type: 'drag',
    prompt: 'The minister’s speech ____ viral on social media.',
    options: ['went', 'passed', 'turned', 'voted'],
    correctIndex: 0
  },

  {
    id: 'poli-q251',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-251',
    type: 'drag',
    prompt: '____ inequality is a key political topic.',
    options: ['Income', 'Weather', 'School', 'Traffic'],
    correctIndex: 0
  },
  {
    id: 'poli-q252',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-252',
    type: 'drag',
    prompt: 'Many activists fight for ____ justice.',
    options: ['social', 'parking', 'technical', 'digital'],
    correctIndex: 0
  },
  {
    id: 'poli-q253',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-253',
    type: 'drag',
    prompt: 'The march focused on ____ justice.',
    options: ['racial', 'weather', 'tourism', 'transport'],
    correctIndex: 0
  },
  {
    id: 'poli-q254',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-254',
    type: 'drag',
    prompt: '____ equality policies aim to close the pay gap.',
    options: ['Gender', 'Climate', 'Border', 'Media'],
    correctIndex: 0
  },
  {
    id: 'poli-q255',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-255',
    type: 'drag',
    prompt: '____ action remains controversial.',
    options: ['Affirmative', 'Collective', 'Judicial', 'Electoral'],
    correctIndex: 0
  },
  {
    id: 'poli-q256',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-256',
    type: 'drag',
    prompt: 'The wage ____ is still significant in many sectors.',
    options: ['gap', 'treaty', 'ballot', 'budget'],
    correctIndex: 0
  },
  {
    id: 'poli-q257',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-257',
    type: 'drag',
    prompt: 'Raising the ____ wage is a political debate.',
    options: ['minimum', 'weekly', 'average', 'classic'],
    correctIndex: 0
  },
  {
    id: 'poli-q258',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-258',
    type: 'drag',
    prompt: 'A strong social safety ____ reduces poverty.',
    options: ['net', 'wall', 'line', 'border'],
    correctIndex: 0
  },
  {
    id: 'poli-q259',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-259',
    type: 'drag',
    prompt: '____ housing programs help low-income families.',
    options: ['Public', 'Private', 'Luxury', 'Seasonal'],
    correctIndex: 0
  },
  {
    id: 'poli-q260',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-260',
    type: 'drag',
    prompt: 'Healthcare ____ is a central issue in elections.',
    options: ['coverage', 'bridge', 'border', 'broadcast'],
    correctIndex: 0
  },

  {
    id: 'poli-q261',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-261',
    type: 'drag',
    prompt: '____ policy aims to cut emissions.',
    options: ['Climate', 'Housing', 'Transport', 'Tourism'],
    correctIndex: 0
  },
  {
    id: 'poli-q262',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-262',
    type: 'drag',
    prompt: 'A ____ tax can encourage cleaner energy.',
    options: ['carbon', 'wealth', 'sales', 'import'],
    correctIndex: 0
  },
  {
    id: 'poli-q263',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-263',
    type: 'drag',
    prompt: 'The green ____ requires large investments.',
    options: ['transition', 'treaty', 'petition', 'broadcast'],
    correctIndex: 0
  },
  {
    id: 'poli-q264',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-264',
    type: 'drag',
    prompt: '____ energy is part of national strategy.',
    options: ['Renewable', 'Nuclear-only', 'Random', 'Seasonal'],
    correctIndex: 0
  },
  {
    id: 'poli-q265',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-265',
    type: 'drag',
    prompt: '____ justice focuses on vulnerable communities.',
    options: ['Environmental', 'Parking', 'Procedural', 'Cultural'],
    correctIndex: 0
  },
  {
    id: 'poli-q266',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-266',
    type: 'drag',
    prompt: '____ development is discussed at the UN.',
    options: ['Sustainable', 'Seasonal', 'Rapid', 'Luxury'],
    correctIndex: 0
  },
  {
    id: 'poli-q267',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-267',
    type: 'drag',
    prompt: 'The ____ party gained more seats.',
    options: ['green', 'local', 'media', 'judicial'],
    correctIndex: 0
  },
  {
    id: 'poli-q268',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-268',
    type: 'drag',
    prompt: '____ activists organized a march.',
    options: ['Environmental', 'Judicial', 'Tourist', 'Sport'],
    correctIndex: 0
  },
  {
    id: 'poli-q269',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-269',
    type: 'drag',
    prompt: 'Students decided to go on ____ for the climate.',
    options: ['strike', 'holiday', 'tour', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q270',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-270',
    type: 'drag',
    prompt: 'The country plans to ____ out coal by 2030.',
    options: ['phase', 'vote', 'march', 'spin'],
    correctIndex: 0
  },

  {
    id: 'poli-q271',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-271',
    type: 'drag',
    prompt: 'Elections are often controlled in ____ regimes.',
    options: ['authoritarian', 'local', 'unionized', 'tourist'],
    correctIndex: 0
  },
  {
    id: 'poli-q272',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-272',
    type: 'drag',
    prompt: 'People live in fear under a ____. ',
    options: ['dictatorship', 'consultation', 'coalition', 'bylaw'],
    correctIndex: 0
  },
  {
    id: 'poli-q273',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-273',
    type: 'drag',
    prompt: 'In a ____-party state, opposition is banned.',
    options: ['one', 'two', 'multi', 'no'],
    correctIndex: 0
  },
  {
    id: 'poli-q274',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-274',
    type: 'drag',
    prompt: 'The army led a coup d’____.',
    options: ['État', 'urgence', 'hiver', 'honneur'],
    correctIndex: 0
  },
  {
    id: 'poli-q275',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-275',
    type: 'drag',
    prompt: 'A military ____ took power after the coup.',
    options: ['junta', 'budget', 'petition', 'hearing'],
    correctIndex: 0
  },
  {
    id: 'poli-q276',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-276',
    type: 'drag',
    prompt: 'Human rights groups defend ____ prisoners.',
    options: ['political', 'tourist', 'sports', 'traffic'],
    correctIndex: 0
  },
  {
    id: 'poli-q277',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-277',
    type: 'drag',
    prompt: 'There was a harsh ____ on protesters.',
    options: ['crackdown', 'consultation', 'treaty', 'budget'],
    correctIndex: 0
  },
  {
    id: 'poli-q278',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-278',
    type: 'drag',
    prompt: 'The regime tried to ____ all dissent.',
    options: ['suppress', 'publish', 'elect', 'fund'],
    correctIndex: 0
  },
  {
    id: 'poli-q279',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-279',
    type: 'drag',
    prompt: 'Authorities ____ened control over social media.',
    options: ['tight', 'light', 'short', 'soft'],
    correctIndex: 0
  },
  {
    id: 'poli-q280',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-280',
    type: 'drag',
    prompt: 'Citizens demanded to ____ democracy.',
    options: ['restore', 'delay', 'avoid', 'privatize'],
    correctIndex: 0
  },

  {
    id: 'poli-q281',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-281',
    type: 'drag',
    prompt: 'The ____ council manages city services.',
    options: ['local', 'climate', 'union', 'school'],
    correctIndex: 0
  },
  {
    id: 'poli-q282',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-282',
    type: 'drag',
    prompt: 'A city ____ proposed the new bylaw.',
    options: ['councilor', 'refugee', 'ambassador', 'minister'],
    correctIndex: 0
  },
  {
    id: 'poli-q283',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-283',
    type: 'drag',
    prompt: 'The ____ limits noise at night.',
    options: ['bylaw', 'treaty', 'petition', 'budget'],
    correctIndex: 0
  },
  {
    id: 'poli-q284',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-284',
    type: 'drag',
    prompt: 'Turnout was low in the ____ election.',
    options: ['municipal', 'presidential', 'school', 'union'],
    correctIndex: 0
  },
  {
    id: 'poli-q285',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-285',
    type: 'drag',
    prompt: 'Residents were invited to a public ____ meeting.',
    options: ['consultation', 'scandal', 'boycott', 'walkout'],
    correctIndex: 0
  },
  {
    id: 'poli-q286',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-286',
    type: 'drag',
    prompt: 'The neighborhood ____ discussed safety issues.',
    options: ['committee', 'border', 'treaty', 'petition'],
    correctIndex: 0
  },
  {
    id: 'poli-q287',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-287',
    type: 'drag',
    prompt: '____ rules regulate land use.',
    options: ['Zoning', 'Board', 'Voting', 'Import'],
    correctIndex: 0
  },
  {
    id: 'poli-q288',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-288',
    type: 'drag',
    prompt: 'There was a public ____ on urban development.',
    options: ['hearing', 'holiday', 'strike', 'banner'],
    correctIndex: 0
  },
  {
    id: 'poli-q289',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-289',
    type: 'drag',
    prompt: 'The city ____ funds parks and libraries.',
    options: ['budget', 'border', 'petition', 'march'],
    correctIndex: 0
  },
  {
    id: 'poli-q290',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-290',
    type: 'drag',
    prompt: 'She was proud to hold ____ office.',
    options: ['local', 'union', 'media', 'military'],
    correctIndex: 0
  },

  {
    id: 'poli-q291',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-291',
    type: 'drag',
    prompt: 'Experts helped ____ up a new policy.',
    options: ['draw', 'strike', 'phase', 'vote'],
    correctIndex: 0
  },
  {
    id: 'poli-q292',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-292',
    type: 'drag',
    prompt: 'The ministry ____ed a program for youth employment.',
    options: ['implement', 'censor', 'scrap', 'spin'],
    correctIndex: 0
  },
  {
    id: 'poli-q293',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-293',
    type: 'drag',
    prompt: 'The government ____ed out a pension reform.',
    options: ['roll', 'walk', 'vote', 'sit'],
    correctIndex: 0
  },
  {
    id: 'poli-q294',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-294',
    type: 'drag',
    prompt: 'New rules were ____d in over two years.',
    options: ['phase', 'voted', 'marched', 'spun'],
    correctIndex: 0
  },
  {
    id: 'poli-q295',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-295',
    type: 'drag',
    prompt: 'Due to budget cuts, they ____d back the program.',
    options: ['scale', 'spin', 'censor', 'boycott'],
    correctIndex: 0
  },
  {
    id: 'poli-q296',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-296',
    type: 'drag',
    prompt: 'They decided to ____ a project after public criticism.',
    options: ['scrap', 'fund', 'expand', 'elect'],
    correctIndex: 0
  },
  {
    id: 'poli-q297',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-297',
    type: 'drag',
    prompt: 'The minister agreed to ____ down after the scandal.',
    options: ['step', 'scale', 'spin', 'strike'],
    correctIndex: 0
  },
  {
    id: 'poli-q298',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-298',
    type: 'drag',
    prompt: 'Citizens want to hold leaders ____. ',
    options: ['accountable', 'invisible', 'secret', 'foreign'],
    correctIndex: 0
  },
  {
    id: 'poli-q299',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-299',
    type: 'drag',
    prompt: '____ of power damages democracy.',
    options: ['Abuse', 'Use', 'Sharing', 'Transfer'],
    correctIndex: 0
  },
  {
    id: 'poli-q300',
    categoryId: POLITICS_CATEGORY_ID,
    wordId: 'poli-300',
    type: 'drag',
    prompt: 'Reforms are needed to ____ public trust.',
    options: ['restore', 'hide', 'ignore', 'delay'],
    correctIndex: 0
  },

  // end of politics questions

  //enveronment questions can go here
  {
  id: 'env-q1',
  categoryId: ENV_CATEGORY_ID,
  wordId: 'env-1',
  type: 'drag',
  prompt: 'Human activity has a major impact on the ______.',
  options: ['environment', 'ecosystem', 'pollution', 'habitat'],
  correctIndex: 0
},
  {
    id: 'env-q2',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-2',
    type: 'drag',
    prompt: 'A community of living things and their surroundings is called ____. ',
    options: ['ecosystem', 'landfill', 'recycling', 'biodiversity'],
    correctIndex: 0
  },
  {
    id: 'env-q3',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-3',
    type: 'drag',
    prompt: 'The word that means “the variety of plant and animal life in an area” is ____. ',
    options: ['biodiversity', 'pollution', 'compost', 'hydropower'],
    correctIndex: 0
  },
  {
    id: 'env-q4',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-4',
    type: 'drag',
    prompt: 'The natural home of a plant or animal is called ____. ',
    options: ['habitat', 'forest fire', 'landslide', 'recycling'],
    correctIndex: 0
  },
  {
    id: 'env-q5',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-5',
    type: 'drag',
    prompt: 'Animals or plants that may soon disappear forever are called ____. ',
    options: ['endangered species', 'renewable resources', 'wildlife', 'eco-habits'],
    correctIndex: 0
  },
  {
    id: 'env-q6',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-6',
    type: 'drag',
    prompt: 'Animals living in nature, not on farms or in homes, are called ____. ',
    options: ['wildlife', 'compost', 'landfill', 'ozone layer'],
    correctIndex: 0
  },
  {
    id: 'env-q7',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-7',
    type: 'drag',
    prompt: 'The permanent disappearance of a species is called ____. ',
    options: ['extinction', 'pollution', 'urban sprawl', 'upcycle'],
    correctIndex: 0
  },
  {
    id: 'env-q8',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-8',
    type: 'drag',
    prompt: 'Things like water, wood and minerals that come from nature are called ____. ',
    options: ['natural resources', 'plastic waste', 'light pollution', 'compost'],
    correctIndex: 0
  },
  {
    id: 'env-q9',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-9',
    type: 'drag',
    prompt: 'Solar and wind energy are examples of ____. ',
    options: ['renewable resources', 'non-renewable resources', 'toxic waste', 'industrial waste'],
    correctIndex: 0
  },
  {
    id: 'env-q10',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-10',
    type: 'drag',
    prompt: 'Oil and coal are examples of ____. ',
    options: ['non-renewable resources', 'renewable resources', 'biodegradable', 'eco-friendly'],
    correctIndex: 0
  },

  {
    id: 'env-q11',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-11',
    type: 'drag',
    prompt: 'Long-term changes in temperature and weather are called ____. ',
    options: ['climate change', 'forest fire', 'heatwave', 'landslide'],
    correctIndex: 0
  },
  {
    id: 'env-q12',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-12',
    type: 'drag',
    prompt: 'The expression for “the planet getting hotter over time” is ____. ',
    options: ['global warming', 'air pollution', 'drought', 'eco-system collapse'],
    correctIndex: 0
  },
  {
    id: 'env-q13',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-13',
    type: 'drag',
    prompt: 'The release of carbon dioxide into the air is called ____. ',
    options: ['carbon emissions', 'compost', 'upcycle', 'ocean acidification'],
    correctIndex: 0
  },
  {
    id: 'env-q14',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-14',
    type: 'drag',
    prompt: 'The total amount of carbon you produce is your ____. ',
    options: ['carbon footprint', 'green energy', 'waste reduction', 'air quality'],
    correctIndex: 0
  },
  {
    id: 'env-q15',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-15',
    type: 'drag',
    prompt: 'Gases that trap heat in the atmosphere are called ____. ',
    options: ['greenhouse gases', 'airborne pollutants', 'light pollution', 'industrial waste'],
    correctIndex: 0
  },
  {
    id: 'env-q16',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-16',
    type: 'drag',
    prompt: 'Coal, oil and gas are types of ____. ',
    options: ['fossil fuels', 'green fuels', 'renewable fuels', 'light fuels'],
    correctIndex: 0
  },
  {
    id: 'env-q17',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-17',
    type: 'drag',
    prompt: 'Wind, sun and water can all provide ____. ',
    options: ['renewable energy', 'toxic energy', 'fossil energy', 'waste energy'],
    correctIndex: 0
  },
  {
    id: 'env-q18',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-18',
    type: 'drag',
    prompt: 'Energy that comes from the sun is called ____. ',
    options: ['solar power', 'hydropower', 'wind turbine', 'compost'],
    correctIndex: 0
  },
  {
    id: 'env-q19',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-19',
    type: 'drag',
    prompt: 'Tall machines that use wind to make electricity are called ____. ',
    options: ['wind turbines', 'landfills', 'water tanks', 'solar bags'],
    correctIndex: 0
  },
  {
    id: 'env-q20',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-20',
    type: 'drag',
    prompt: 'Electricity made from moving water is called ____. ',
    options: ['hydropower', 'air pollution', 'soil erosion', 'urban sprawl'],
    correctIndex: 0
  },

  {
    id: 'env-q21',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-21',
    type: 'drag',
    prompt: 'The general word for dirtying the air, water or land is ____. ',
    options: ['pollution', 'compost', 'recycling', 'upcycle'],
    correctIndex: 0
  },
  {
    id: 'env-q22',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-22',
    type: 'drag',
    prompt: 'Smog in big cities is a form of ____. ',
    options: ['air pollution', 'landfill', 'compost', 'ocean acidification'],
    correctIndex: 0
  },
  {
    id: 'env-q23',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-23',
    type: 'drag',
    prompt: 'Chemical spills in rivers are an example of ____. ',
    options: ['water pollution', 'air pollution', 'light pollution', 'noise control'],
    correctIndex: 0
  },
  {
    id: 'env-q24',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-24',
    type: 'drag',
    prompt: 'Bottles and bags thrown in the sea are _____. ',
    options: ['plastic waste', 'toxic waste', 'industrial waste', 'compost'],
    correctIndex: 0
  },
  {
    id: 'env-q25',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-25',
    type: 'drag',
    prompt: 'Dangerous chemical waste is called ____. ',
    options: ['toxic waste', 'compost', 'recycling', 'solar power'],
    correctIndex: 0
  },
  {
    id: 'env-q26',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-26',
    type: 'drag',
    prompt: 'Cutting down large areas of forest is called ____. ',
    options: ['deforestation', 'landslide', 'urban sprawl', 'upcycle'],
    correctIndex: 0
  },
  {
    id: 'env-q27',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-27',
    type: 'drag',
    prompt: 'Catching too many fish in the ocean is called ____. ',
    options: ['overfishing', 'recycling', 'composting', 'upcycling'],
    correctIndex: 0
  },
  {
    id: 'env-q28',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-28',
    type: 'drag',
    prompt: 'Garbage buried under the ground is stored in a ____. ',
    options: ['landfill', 'ecosystem', 'ocean', 'forest'],
    correctIndex: 0
  },
  {
    id: 'env-q29',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-29',
    type: 'drag',
    prompt: 'The process of turning used materials into new products is called ____. ',
    options: ['recycling', 'polluting', 'burning', 'melting ice caps'],
    correctIndex: 0
  },
  {
    id: 'env-q30',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-30',
    type: 'drag',
    prompt: 'Food scraps and yard waste can be turned into ____. ',
    options: ['compost', 'landfill gas', 'plastic waste', 'toxic waste'],
    correctIndex: 0
  },

  {
    id: 'env-q31',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-31',
    type: 'drag',
    prompt: 'An adjective that describes something that can last a long time without harm is ____. ',
    options: ['sustainable', 'toxic', 'disposable', 'brittle'],
    correctIndex: 0
  },
  {
    id: 'env-q32',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-32',
    type: 'drag',
    prompt: 'The ability to keep going without damage to the planet is called ____. ',
    options: ['sustainability', 'pollution', 'melting', 'overconsumption'],
    correctIndex: 0
  },
  {
    id: 'env-q33',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-33',
    type: 'drag',
    prompt: 'Products that are good for the environment are described as ____. ',
    options: ['eco-friendly', 'non-renewable', 'toxic', 'wasteful'],
    correctIndex: 0
  },
  {
    id: 'env-q34',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-34',
    type: 'drag',
    prompt: 'Energy that is clean and good for nature is called ____. ',
    options: ['green energy', 'fossil energy', 'waste energy', 'heatwave'],
    correctIndex: 0
  },
  {
    id: 'env-q35',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-35',
    type: 'drag',
    prompt: 'A lifestyle that tries to produce almost no trash is called ____. ',
    options: ['zero-waste', 'urban sprawl', 'eco-tourism', 'farm to table'],
    correctIndex: 0
  },
  {
    id: 'env-q36',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-36',
    type: 'drag',
    prompt: 'Producing no net carbon emissions is described as being ____. ',
    options: ['carbon-neutral', 'reusable', 'organic', 'airborne'],
    correctIndex: 0
  },
  {
    id: 'env-q37',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-37',
    type: 'drag',
    prompt: 'People who think carefully about the environment are ____. ',
    options: ['eco-conscious', 'wasteful', 'indifferent', 'urban'],
    correctIndex: 0
  },
  {
    id: 'env-q38',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-38',
    type: 'drag',
    prompt: 'Materials that break down naturally in the environment are ____. ',
    options: ['biodegradable', 'non-renewable', 'plastic', 'metallic'],
    correctIndex: 0
  },
  {
    id: 'env-q39',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-39',
    type: 'drag',
    prompt: 'Turning old objects into something new and useful is called ____. ',
    options: ['upcycle', 'landfill', 'deforestation', 'overfishing'],
    correctIndex: 0
  },
  {
    id: 'env-q40',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-40',
    type: 'drag',
    prompt: 'The expression that means “reduce the amount of trash you create” is ____. ',
    options: ['cut down on waste', 'throw away more', 'run out of resources', 'break down naturally'],
    correctIndex: 0
  },

  {
    id: 'env-q41',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-41',
    type: 'drag',
    prompt: 'A large fire that burns in a forest is called ____. ',
    options: ['forest fire', 'drought', 'landslide', 'tsunami'],
    correctIndex: 0
  },
  {
    id: 'env-q42',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-42',
    type: 'drag',
    prompt: 'A big, uncontrolled fire in nature is called ____. ',
    options: ['wildfire', 'heatwave', 'earthquake', 'flood'],
    correctIndex: 0
  },
  {
    id: 'env-q43',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-43',
    type: 'drag',
    prompt: 'A long period with very little rain is called ____. ',
    options: ['drought', 'hurricane', 'tsunami', 'melting ice caps'],
    correctIndex: 0
  },
  {
    id: 'env-q44',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-44',
    type: 'drag',
    prompt: 'When water covers normally dry land, it is called a ____. ',
    options: ['flood', 'landslide', 'earthquake', 'light pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q45',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-45',
    type: 'drag',
    prompt: 'A powerful storm called an “ouragan” in French is a ____. ',
    options: ['hurricane', 'drought', 'heatwave', 'landslide'],
    correctIndex: 0
  },
  {
    id: 'env-q46',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-46',
    type: 'drag',
    prompt: 'A sudden shaking of the ground is called an ____. ',
    options: ['earthquake', 'wildfire', 'flood', 'tsunami'],
    correctIndex: 0
  },
  {
    id: 'env-q47',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-47',
    type: 'drag',
    prompt: 'A huge sea wave often caused by an earthquake is called a ____. ',
    options: ['tsunami', 'heatwave', 'hurricane', 'forest fire'],
    correctIndex: 0
  },
  {
    id: 'env-q48',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-48',
    type: 'drag',
    prompt: 'A mass of earth and rocks sliding down a slope is called a ____. ',
    options: ['landslide', 'flood', 'drought', 'earthquake'],
    correctIndex: 0
  },
  {
    id: 'env-q49',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-49',
    type: 'drag',
    prompt: 'A long period of extremely hot weather is called a ____. ',
    options: ['heatwave', 'wildfire', 'hurricane', 'landslide'],
    correctIndex: 0
  },
  {
    id: 'env-q50',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-50',
    type: 'drag',
    prompt: 'Earthquakes, floods and hurricanes are all examples of ____. ',
    options: ['natural disasters', 'renewable resources', 'eco-habits', 'light pollution'],
    correctIndex: 0
  },

  {
    id: 'env-q51',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-51',
    type: 'drag',
    prompt: 'Protecting animals living in nature is called ____. ',
    options: ['wildlife conservation', 'light pollution', 'urban sprawl', 'greenwashing'],
    correctIndex: 0
  },
  {
    id: 'env-q52',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-52',
    type: 'drag',
    prompt: 'Protecting forests is called ____. ',
    options: ['forest preservation', 'ocean acidification', 'overfishing', 'airborne pollutants'],
    correctIndex: 0
  },
  {
    id: 'env-q53',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-53',
    type: 'drag',
    prompt: 'Protecting seas and oceans is called ____. ',
    options: ['marine conservation', 'soil erosion', 'landfill control', 'urban farming'],
    correctIndex: 0
  },
  {
    id: 'env-q54',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-54',
    type: 'drag',
    prompt: 'Actions taken to fight climate change are called ____. ',
    options: ['climate action', 'eco-system collapse', 'overconsumption', 'light pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q55',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-55',
    type: 'drag',
    prompt: 'Energy that does not pollute very much is called ____. ',
    options: ['clean energy', 'toxic energy', 'waste energy', 'plastic energy'],
    correctIndex: 0
  },
  {
    id: 'env-q56',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-56',
    type: 'drag',
    prompt: 'Appliances that use little electricity are ____. ',
    options: ['energy-efficient', 'wasteful', 'disposable', 'non-renewable'],
    correctIndex: 0
  },
  {
    id: 'env-q57',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-57',
    type: 'drag',
    prompt: 'Saving water and not using too much is called ____. ',
    options: ['water conservation', 'overfishing', 'air pollution', 'urban sprawl'],
    correctIndex: 0
  },
  {
    id: 'env-q58',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-58',
    type: 'drag',
    prompt: 'New ideas that help protect the environment are called ____. ',
    options: ['green innovation', 'light pollution', 'eco-system collapse', 'industrial waste'],
    correctIndex: 0
  },
  {
    id: 'env-q59',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-59',
    type: 'drag',
    prompt: 'Rules and plans made by governments for nature are called ____. ',
    options: ['environmental policy', 'organic farming', 'eco-labeling', 'farm to table'],
    correctIndex: 0
  },
  {
    id: 'env-q60',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-60',
    type: 'drag',
    prompt: 'A person who actively fights for nature is an ____. ',
    options: ['eco-activist', 'tourist', 'farmer', 'architect'],
    correctIndex: 0
  },

  {
    id: 'env-q61',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-61',
    type: 'drag',
    prompt: 'The idiom that means “to become more ecological” is ____. ',
    options: ['go green', 'throw away', 'run out of resources', 'heat up'],
    correctIndex: 0
  },
  {
    id: 'env-q62',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-62',
    type: 'drag',
    prompt: 'The expression that means “start using solar energy” is ____. ',
    options: ['go solar', 'go green', 'go fishing', 'go offline'],
    correctIndex: 0
  },
  {
    id: 'env-q63',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-63',
    type: 'drag',
    prompt: 'Volunteers who remove trash from a beach help to ____. ',
    options: ['clean up', 'run out', 'throw away', 'melt down'],
    correctIndex: 0
  },
  {
    id: 'env-q64',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-64',
    type: 'drag',
    prompt: 'The expression that means “use less electricity or gas” is ____. ',
    options: ['cut back on energy', 'throw away energy', 'run on clean energy', 'make a difference'],
    correctIndex: 0
  },
  {
    id: 'env-q65',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-65',
    type: 'drag',
    prompt: 'Biodegradable materials eventually ____. ',
    options: ['break down naturally', 'run out of air', 'heat up cities', 'spill over landfills'],
    correctIndex: 0
  },
  {
    id: 'env-q66',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-66',
    type: 'drag',
    prompt: 'The expression that means “stop using plastic little by little” is ____. ',
    options: ['phase out plastic', 'throw away plastic', 'burn plastic quickly', 'go greenwashing'],
    correctIndex: 0
  },
  {
    id: 'env-q67',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-67',
    type: 'drag',
    prompt: 'The idiom that means “protect the Earth from damage” is ____. ',
    options: ['save the planet', 'shake the planet', 'heat the planet', 'sell the planet'],
    correctIndex: 0
  },
  {
    id: 'env-q68',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-68',
    type: 'drag',
    prompt: 'The idiom that means “lower your environmental impact” is ____. ',
    options: ['reduce your footprint', 'throw away your footprint', 'hide your footprint', 'grow your footprint'],
    correctIndex: 0
  },
  {
    id: 'env-q69',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-69',
    type: 'drag',
    prompt: 'The phrasal verb that means “put something in the trash” is ____. ',
    options: ['throw away', 'run out', 'cut back', 'break down'],
    correctIndex: 0
  },
  {
    id: 'env-q70',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-70',
    type: 'drag',
    prompt: 'The expression that means “have no more of a resource left” is ____. ',
    options: ['run out of resources', 'go green', 'cut back on energy', 'clean up the area'],
    correctIndex: 0
  },

  {
    id: 'env-q71',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-71',
    type: 'drag',
    prompt: 'A possible total breakdown of an ecosystem is called ____. ',
    options: ['eco-system collapse', 'urban sprawl', 'light pollution', 'farm to table'],
    correctIndex: 0
  },
  {
    id: 'env-q72',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-72',
    type: 'drag',
    prompt: 'The expression for “the oceans becoming more acidic” is ____. ',
    options: ['ocean acidification', 'soil erosion', 'water scarcity', 'air pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q73',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-73',
    type: 'drag',
    prompt: 'Ice at the poles turning into water is called ____. ',
    options: ['melting ice caps', 'forest fire', 'light pollution', 'urban sprawl'],
    correctIndex: 0
  },
  {
    id: 'env-q74',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-74',
    type: 'drag',
    prompt: 'Cities spreading into the countryside is called ____. ',
    options: ['urban sprawl', 'water scarcity', 'soil erosion', 'eco-tourism'],
    correctIndex: 0
  },
  {
    id: 'env-q75',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-75',
    type: 'drag',
    prompt: 'How clean or dirty the air is can be described as ____. ',
    options: ['air quality', 'light pollution', 'waste reduction', 'eco-label'],
    correctIndex: 0
  },
  {
    id: 'env-q76',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-76',
    type: 'drag',
    prompt: 'Not having enough water available is called ____. ',
    options: ['water scarcity', 'ocean acidification', 'heatwave', 'eco-tourism'],
    correctIndex: 0
  },
  {
    id: 'env-q77',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-77',
    type: 'drag',
    prompt: 'The wearing away of soil by wind or water is called ____. ',
    options: ['soil erosion', 'eco-system collapse', 'airborne pollutants', 'light pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q78',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-78',
    type: 'drag',
    prompt: 'Buying and using too many products is called ____. ',
    options: ['overconsumption', 'waste reduction', 'organic farming', 'recycling'],
    correctIndex: 0
  },
  {
    id: 'env-q79',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-79',
    type: 'drag',
    prompt: 'Factories can create ____. ',
    options: ['industrial waste', 'compost', 'reusable bags', 'eco-labels'],
    correctIndex: 0
  },
  {
    id: 'env-q80',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-80',
    type: 'drag',
    prompt: 'Too much artificial light in cities is called ____. ',
    options: ['light pollution', 'water pollution', 'ocean acidification', 'urban sprawl'],
    correctIndex: 0
  },

  {
    id: 'env-q81',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-81',
    type: 'drag',
    prompt: 'The effect something has on nature is its ____. ',
    options: ['environmental impact', 'recycling rate', 'city budget', 'soil type'],
    correctIndex: 0
  },
  {
    id: 'env-q82',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-82',
    type: 'drag',
    prompt: 'When governments say climate change is an urgent crisis, they declare a ____. ',
    options: ['climate emergency', 'light pollution', 'ecosystem', 'urban sprawl'],
    correctIndex: 0
  },
  {
    id: 'env-q83',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-83',
    type: 'drag',
    prompt: 'Solar panels and wind turbines are part of ____. ',
    options: ['green technology', 'toxic technology', 'old technology', 'paper technology'],
    correctIndex: 0
  },
  {
    id: 'env-q84',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-84',
    type: 'drag',
    prompt: 'A label showing that a product is sustainable is called an ____. ',
    options: ['eco-label', 'landfill tag', 'plastic code', 'carbon ticket'],
    correctIndex: 0
  },
  {
    id: 'env-q85',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-85',
    type: 'drag',
    prompt: 'Paying to balance out your emissions is called a ____. ',
    options: ['carbon offset', 'greenwashing', 'overconsumption', 'eco-tourism'],
    correctIndex: 0
  },
  {
    id: 'env-q86',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-86',
    type: 'drag',
    prompt: 'Pretending to be green only for marketing is called ____. ',
    options: ['greenwashing', 'eco-labeling', 'climate action', 'upcycling'],
    correctIndex: 0
  },
  {
    id: 'env-q87',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-87',
    type: 'drag',
    prompt: 'Travel that respects nature and local people is called ____. ',
    options: ['eco-tourism', 'mass tourism', 'overfishing', 'urban sprawl'],
    correctIndex: 0
  },
  {
    id: 'env-q88',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-88',
    type: 'drag',
    prompt: 'Restaurants that use local ingredients follow the concept of ____. ',
    options: ['farm to table', 'fast food', 'light pollution', 'climate emergency'],
    correctIndex: 0
  },
  {
    id: 'env-q89',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-89',
    type: 'drag',
    prompt: 'Farming that avoids chemical pesticides is called ____. ',
    options: ['organic farming', 'industrial farming', 'overfishing', 'urban farming'],
    correctIndex: 0
  },
  {
    id: 'env-q90',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-90',
    type: 'drag',
    prompt: 'Improving soil health again is called ____. ',
    options: ['regenerate the soil', 'pollute the soil', 'burn the soil', 'freeze the soil'],
    correctIndex: 0
  },

  {
    id: 'env-q91',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-91',
    type: 'drag',
    prompt: 'A bag that replaces single-use plastic bags is a ____. ',
    options: ['reusable bag', 'toxic bag', 'fossil bag', 'ocean bag'],
    correctIndex: 0
  },
  {
    id: 'env-q92',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-92',
    type: 'drag',
    prompt: 'The amount of energy we use is our ____. ',
    options: ['energy consumption', 'water scarcity', 'soil erosion', 'air quality'],
    correctIndex: 0
  },
  {
    id: 'env-q93',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-93',
    type: 'drag',
    prompt: 'Recycling, turning off lights and using bikes are examples of ____. ',
    options: ['eco-habits', 'landfills', 'toxic waste', 'urban sprawl'],
    correctIndex: 0
  },
  {
    id: 'env-q94',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-94',
    type: 'drag',
    prompt: 'Taking responsibility for protecting the environment is called ____. ',
    options: ['eco-responsibility', 'overconsumption', 'greenwashing', 'light pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q95',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-95',
    type: 'drag',
    prompt: 'Doing things that create less trash is called ____. ',
    options: ['waste reduction', 'waste increase', 'water scarcity', 'soil erosion'],
    correctIndex: 0
  },
  {
    id: 'env-q96',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-96',
    type: 'drag',
    prompt: 'Harmful substances floating in the air are called ____. ',
    options: ['airborne pollutants', 'eco-labels', 'reusable bags', 'organic farms'],
    correctIndex: 0
  },
  {
    id: 'env-q97',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-97',
    type: 'drag',
    prompt: 'The layer that protects us from harmful rays from the sun is the ____. ',
    options: ['ozone layer', 'light pollution', 'landfill cover', 'urban trees'],
    correctIndex: 0
  },
  {
    id: 'env-q98',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-98',
    type: 'drag',
    prompt: 'Choosing reusable bottles is an example of an ____. ',
    options: ['eco-friendly choice', 'overconsumption', 'greenwashing', 'light pollution'],
    correctIndex: 0
  },
  {
    id: 'env-q99',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-99',
    type: 'drag',
    prompt: 'A building that functions using only renewable sources ____ on clean energy.',
    options: ['runs', 'throws', 'wastes', 'blocks'],
    correctIndex: 0
  },
  {
    id: 'env-q100',
    categoryId: ENV_CATEGORY_ID,
    wordId: 'env-100',
    type: 'drag',
    prompt: 'The idiom that means “have a positive impact on the world” is ____. ',
    options: ['make a difference', 'throw away the planet', 'run out of ideas', 'go on strike'],
    correctIndex: 0
  },
  {
    "id": "env-q101",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-101",
    "type": "choice",
    "prompt": "What term describes a way of living that attempts to conserve resources and reduce environmental impact?",
    "options": [
      "Expensive vacation",
      "Green lifestyle",
      "Fast food habit",
      "Competitive sport"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q102",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-102",
    "type": "choice",
    "prompt": "What kind of packaging is easily recyclable, biodegradable, or made from sustainable materials?",
    "options": [
      "Plastic-heavy container",
      "Eco-friendly packaging",
      "Non-recyclable material",
      "Toxic coating"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q103",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-103",
    "type": "choice",
    "prompt": "What is an item designed to be used many times, replacing disposable products?",
    "options": [
      "Disposable wrapper",
      "Single-use cup",
      "Reusable container",
      "Broken box"
    ],
    "correctIndex": 2
  },
  {
    "id": "env-q104",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-104",
    "type": "choice",
    "prompt": "What type of plastic is intended to be used only once before being discarded?",
    "options": [
      "Permanent plastic",
      "Single-use plastic",
      "Industrial plastic",
      "Medical device"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q105",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-105",
    "type": "choice",
    "prompt": "What adjective describes a product or area completely devoid of synthetic polymer material?",
    "options": [
      "High-density",
      "Plastic-free",
      "Heavy-duty",
      "Cheaply made"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q106",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-106",
    "type": "choice",
    "prompt": "What is a product (especially food) grown without the use of artificial chemicals, fertilizers, or pesticides?",
    "options": [
      "Synthetic fabric",
      "Processed snack",
      "Organic product",
      "Electronic device"
    ],
    "correctIndex": 2
  },
  {
    "id": "env-q107",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-107",
    "type": "choice",
    "prompt": "What food is produced or harvested in the local region, minimizing transportation needs?",
    "options": [
      "Imported goods",
      "Locally grown",
      "Frozen meal",
      "Factory-made"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q108",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-108",
    "type": "choice",
    "prompt": "What term describes food items that are naturally ready for harvest and consumption during a specific time of the year?",
    "options": [
      "Frozen dinner",
      "Processed food",
      "Seasonal food",
      "Canned items"
    ],
    "correctIndex": 2
  },
  {
    "id": "env-q109",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-109",
    "type": "choice",
    "prompt": "What eating habit excludes meat and dairy and focuses on vegetables, fruits, nuts, and grains?",
    "options": [
      "High-meat diet",
      "Plant-based diet",
      "Junk food habit",
      "Sugar-only regime"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q110",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-110",
    "type": "choice",
    "prompt": "What refers to the amount of animal flesh eaten by individuals or populations?",
    "options": [
      "Water conservation",
      "Meat consumption",
      "Vegetable gardening",
      "Energy saving"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q111",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-111",
    "type": "choice",
    "prompt": "What are shared transportation systems like buses, trains, and subways?",
    "options": [
      "Private jet",
      "Public transport",
      "Sports car",
      "Bicycle rental"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q112",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-112",
    "type": "choice",
    "prompt": "What verb means to share a ride to a common destination in one vehicle?",
    "options": [
      "Walk alone",
      "Drive fast",
      "Carpool",
      "Fly solo"
    ],
    "correctIndex": 2
  },
  {
    "id": "env-q113",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-113",
    "type": "choice",
    "prompt": "What vehicle runs on battery power rather than relying on an internal combustion engine?",
    "options": [
      "Diesel truck",
      "Electric car",
      "Gas-guzzler",
      "Motorbike"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q114",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-114",
    "type": "choice",
    "prompt": "What part of a road is specially marked for use by cyclists?",
    "options": [
      "Car wash",
      "Bike lane",
      "Parking spot",
      "Pedestrian path"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q115",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-115",
    "type": "choice",
    "prompt": "What facility is used to replenish the battery of an electric vehicle?",
    "options": [
      "Gas pump",
      "Charging station",
      "Repair shop",
      "Car wash"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q116",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-116",
    "type": "choice",
    "prompt": "What kind of car uses less gasoline per mile than others?",
    "options": [
      "Fuel-efficient car",
      "Oversized SUV",
      "Luxury sedan",
      "Antique vehicle"
    ],
    "correctIndex": 0
  },
  {
    "id": "env-q117",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-117",
    "type": "choice",
    "prompt": "What pollutants are released into the air by road vehicles?",
    "options": [
      "Pure oxygen",
      "Traffic emissions",
      "Clean water vapor",
      "Fresh mountain air"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q118",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-118",
    "type": "choice",
    "prompt": "What phrasal verb means to travel to and from work using a bicycle?",
    "options": [
      "Drive a car",
      "Commute by bike",
      "Take a helicopter",
      "Stay home"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q119",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-119",
    "type": "choice",
    "prompt": "What phrasal verb means to intentionally lessen the frequency or distance of using a private vehicle?",
    "options": [
      "Increase speed",
      "Cut back on driving",
      "Buy more cars",
      "Drive everywhere"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q120",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-120",
    "type": "choice",
    "prompt": "What phrasal verb means to start using shared transportation methods instead of a private car?",
    "options": [
      "Buy a private jet",
      "Switch to public transit",
      "Avoid buses",
      "Never leave home"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q121",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-121",
    "type": "choice",
    "prompt": "What light source uses significantly less electricity than a traditional incandescent bulb?",
    "options": [
      "Very old filament",
      "Energy-saving light bulb",
      "High-power lamp",
      "Candle"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q122",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-122",
    "type": "choice",
    "prompt": "What material is installed in walls, roofs, or floors to prevent heat loss or gain?",
    "options": [
      "Open window",
      "Insulation",
      "Thin fabric",
      "Bare concrete"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q123",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-123",
    "type": "choice",
    "prompt": "What device regulates the temperature of a heating or cooling system?",
    "options": [
      "Clock",
      "Thermostat",
      "Alarm bell",
      "Doorbell"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q124",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-124",
    "type": "choice",
    "prompt": "What is the small amount of electricity consumed by electronic devices when they are switched off but still plugged in?",
    "options": [
      "Full operation",
      "Standby power",
      "Total darkness",
      "Unplugged state"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q125",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-125",
    "type": "choice",
    "prompt": "What phrasal verb means to physically remove a plug from an electrical socket to save power?",
    "options": [
      "Leave plugged in",
      "Unplug devices",
      "Charge batteries",
      "Switch on fully"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q126",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-126",
    "type": "choice",
    "prompt": "What phrasal verb means to switch off the lighting in a room?",
    "options": [
      "Turn on the radio",
      "Turn off the lights",
      "Open the window",
      "Start the car"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q127",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-127",
    "type": "choice",
    "prompt": "What phrasal verb means to reduce the amount of H₂O used, for example, by fixing leaks?",
    "options": [
      "Waste water",
      "Save water",
      "Open all taps",
      "Forget the rain"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q128",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-128",
    "type": "choice",
    "prompt": "What phrasal verb describes spending less time bathing under running water to conserve resources?",
    "options": [
      "Take longer baths",
      "Take shorter showers",
      "Ignore water bill",
      "Wash clothes daily"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q129",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-129",
    "type": "choice",
    "prompt": "What is the process of separating rubbish into different categories (e.g., glass, plastic, paper)?",
    "options": [
      "Mixing everything",
      "Waste sorting",
      "Burning trash",
      "Leaving it outside"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q130",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-130",
    "type": "choice",
    "prompt": "What phrasal verb means to put materials that can be processed and reused into a specific container?",
    "options": [
      "Mix trash together",
      "Separate recyclables",
      "Ignore labels",
      "Buy new items"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q131",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-131",
    "type": "choice",
    "prompt": "What is an area of vegetation, such as a park or garden, found in an urban area?",
    "options": [
      "Concrete lot",
      "Green space",
      "Industrial factory",
      "Highway ramp"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q132",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-132",
    "type": "choice",
    "prompt": "What term describes a small plot of land within a city used for growing food or plants?",
    "options": [
      "Large desert",
      "Urban garden",
      "Deep ocean",
      "High mountain"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q133",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-133",
    "type": "choice",
    "prompt": "What shared plot of land is gardened by a group of people from a local neighborhood?",
    "options": [
      "Private pool",
      "Community garden",
      "Single house",
      "Isolated farm"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q134",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-134",
    "type": "choice",
    "prompt": "What is the act of putting young trees into the ground to create a new forest or replenish an old one?",
    "options": [
      "Cutting down trees",
      "Tree planting",
      "Ignoring nature",
      "Paving concrete"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q135",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-135",
    "type": "choice",
    "prompt": "What is the process of replanting an area, often for environmental restoration, that has been cleared of trees?",
    "options": [
      "Deforestation",
      "Reforestation",
      "Urban sprawl",
      "Desertification"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q136",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-136",
    "type": "choice",
    "prompt": "What is the collection of trees and other vegetation within a city or urban area?",
    "options": [
      "Urban forest",
      "Concrete canyon",
      "Oil field",
      "Factory zone"
    ],
    "correctIndex": 0
  },
  {
    "id": "env-q137",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-137",
    "type": "choice",
    "prompt": "What type of roof is partially or completely covered with vegetation and a growing medium, planted over a waterproof membrane?",
    "options": [
      "Metal roof",
      "Green roof",
      "Glass dome",
      "Shingle roof"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q138",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-138",
    "type": "choice",
    "prompt": "What is a strip of natural habitat connecting otherwise separated populations of wildlife, often within an urban area?",
    "options": [
      "Concrete wall",
      "Green corridor",
      "Industrial belt",
      "Highway barrier"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q139",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-139",
    "type": "choice",
    "prompt": "What phrasal verb means to put a sapling or seed in the ground to grow into a mature piece of vegetation?",
    "options": [
      "Cut down a branch",
      "Plant a tree",
      "Build a tower",
      "Lay pavement"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q140",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-140",
    "type": "choice",
    "prompt": "What phrasal verb means to actively conserve and safeguard parks, gardens, and other natural areas in cities?",
    "options": [
      "Pave the land",
      "Protect green spaces",
      "Ignore biodiversity",
      "Cut all grass"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q141",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-141",
    "type": "choice",
    "prompt": "What is anxiety caused by fears about the current and future state of the environment?",
    "options": [
      "Financial comfort",
      "Eco-anxiety",
      "Technological optimism",
      "Social excitement"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q142",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-142",
    "type": "choice",
    "prompt": "What term describes the fair distribution of the burdens of climate change and the benefits of climate action?",
    "options": [
      "Climate denial",
      "Climate justice",
      "Weather forecast",
      "Economic growth only"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q143",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-143",
    "type": "choice",
    "prompt": "What movement addresses the fact that minority and low-income communities are often disproportionately affected by pollution and environmental hazards?",
    "options": [
      "Wealth creation",
      "Environmental justice",
      "Technological advance",
      "Military strategy"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q144",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-144",
    "type": "choice",
    "prompt": "What is the disproportionate impact of environmental hazards on people of color?",
    "options": [
      "Economic equality",
      "Environmental racism",
      "Fair housing",
      "Equal healthcare"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q145",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-145",
    "type": "choice",
    "prompt": "What term describes a person forced to leave their home region due to sudden or gradual environmental changes (e.g., sea level rise)?",
    "options": [
      "Tourist traveler",
      "Climate refugee",
      "Business executive",
      "Digital nomad"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q146",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-146",
    "type": "choice",
    "prompt": "What field of study is focused on teaching about natural environments and ways to live sustainably?",
    "options": [
      "Pure mathematics",
      "Environmental education",
      "Military training",
      "Fashion design"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q147",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-147",
    "type": "choice",
    "prompt": "What phrasal verb means to increase public understanding of ecological issues and solutions?",
    "options": [
      "Ignore nature",
      "Raise awareness about the environment",
      "Lower interest rates",
      "Close the discussion"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q148",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-148",
    "type": "choice",
    "prompt": "What is a person who campaigns to protect the natural world from pollution and destruction?",
    "options": [
      "Financial advisor",
      "Environmental activist",
      "Real estate agent",
      "Car mechanic"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q149",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-149",
    "type": "choice",
    "prompt": "What is a protest movement where young people skip school or work to demand action on global warming?",
    "options": [
      "Birthday party",
      "Youth climate strike",
      "School sports day",
      "Religious festival"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q150",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-150",
    "type": "choice",
    "prompt": "What idiom emphasizes that many small contributions can collectively make a significant difference?",
    "options": [
      "The end is near",
      "Small steps add up",
      "One big action is enough",
      "Wait for others"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q151",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-151",
    "type": "choice",
    "prompt": "What term describes large-scale agriculture dependent on machinery, synthetic chemicals, and monocultures?",
    "options": [
      "Small-scale gardening",
      "Industrial farming",
      "Permaculture",
      "Organic smallholding"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q152",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-152",
    "type": "choice",
    "prompt": "What term refers to the application of chemicals designed to kill insects or weeds in crop fields?",
    "options": [
      "Pesticide use",
      "Water recycling",
      "Natural weeding",
      "Seed saving"
    ],
    "correctIndex": 0
  },
  {
    "id": "env-q153",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-153",
    "type": "choice",
    "prompt": "What is the flow of excess nutrients from farm fields into nearby water bodies, leading to pollution?",
    "options": [
      "Clean irrigation",
      "Fertilizer runoff",
      "Pure rainfall",
      "Water conservation"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q154",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-154",
    "type": "choice",
    "prompt": "What farming practice involves growing only one crop variety in a large area, year after year?",
    "options": [
      "Crop diversity",
      "Monoculture",
      "Forest management",
      "Natural pasture"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q155",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-155",
    "type": "choice",
    "prompt": "What is the systematic process of growing different types of crops in the same area in sequenced seasons to improve soil health?",
    "options": [
      "Continuous growth",
      "Crop rotation",
      "Single planting",
      "Chemical dosing"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q156",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-156",
    "type": "choice",
    "prompt": "What holistic farming method focuses on improving soil health, carbon sequestration, and the water cycle?",
    "options": [
      "Destructive tillage",
      "Regenerative agriculture",
      "Industrial chemicals",
      "High-density monoculture"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q157",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-157",
    "type": "choice",
    "prompt": "What are the greenhouse gases (methane, nitrous oxide) produced by farm animals, especially ruminants?",
    "options": [
      "Plant nutrients",
      "Livestock emissions",
      "Ocean currents",
      "Wind energy"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q158",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-158",
    "type": "choice",
    "prompt": "What is the distance food travels from where it is produced to where it is consumed?",
    "options": [
      "Local distance",
      "Food miles",
      "Energy usage",
      "Water footprint"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q159",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-159",
    "type": "choice",
    "prompt": "What is the discarding of food that is still safe and nutritious for human consumption?",
    "options": [
      "Food security",
      "Food waste",
      "Meal preparation",
      "Recycling plastics"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q160",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-160",
    "type": "choice",
    "prompt": "What phrasal verb means to decrease the amount of edible material that is thrown away?",
    "options": [
      "Buy excessive amounts",
      "Cut food waste",
      "Throw out leftovers",
      "Ignore expiration dates"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q161",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-161",
    "type": "choice",
    "prompt": "What type of water is safe for humans to ingest?",
    "options": [
      "Toxic chemicals",
      "Drinking water",
      "Salt water",
      "Dirty puddle"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q162",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-162",
    "type": "choice",
    "prompt": "What facility cleans wastewater before it is returned to the environment or reused?",
    "options": [
      "Water park",
      "Water treatment plant",
      "Swimming pool",
      "Coffee shop"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q163",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-163",
    "type": "choice",
    "prompt": "What type of water contains harmful substances like bacteria or heavy metals?",
    "options": [
      "Bottled water",
      "Contaminated water",
      "Purified water",
      "Spring water"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q164",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-164",
    "type": "choice",
    "prompt": "What is water held underground in the soil or in pores and crevices in rock?",
    "options": [
      "Rain clouds",
      "Groundwater",
      "Ocean waves",
      "Water vapor"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q165",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-165",
    "type": "choice",
    "prompt": "What are areas of land saturated with water, such as marshes and swamps, which are vital for water filtering and flood control?",
    "options": [
      "Deserts",
      "Wetlands",
      "Mountain peaks",
      "Paved roads"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q166",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-166",
    "type": "choice",
    "prompt": "What is the land alongside a river or stream?",
    "options": [
      "Ocean floor",
      "River bank",
      "Building roof",
      "Desert oasis"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q167",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-167",
    "type": "choice",
    "prompt": "What is the wearing away of land along the sea due to wave action and weather?",
    "options": [
      "Tree growth",
      "Coastal erosion",
      "Mountain building",
      "Snowfall"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q168",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-168",
    "type": "choice",
    "prompt": "What is the increase in the average height of the ocean's surface, primarily due to global warming?",
    "options": [
      "Sea level drop",
      "Sea level rise",
      "Desert expansion",
      "Forest growth"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q169",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-169",
    "type": "choice",
    "prompt": "What is a major underwater structure built by small marine animals, providing habitat for many species?",
    "options": [
      "Coral reef",
      "Empty cave",
      "Sandy desert",
      "Glacier"
    ],
    "correctIndex": 0
  },
  {
    "id": "env-q170",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-170",
    "type": "choice",
    "prompt": "What is an area of the ocean set aside and protected by law to conserve biodiversity?",
    "options": [
      "Marine dumping zone",
      "Marine protected area",
      "High-traffic shipping lane",
      "Oil drilling site"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q171",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-171",
    "type": "choice",
    "prompt": "What is the container used exclusively for materials that will be recycled?",
    "options": [
      "Compost heap",
      "Recycling bin",
      "Landfill pile",
      "Trash compactor"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q172",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-172",
    "type": "choice",
    "prompt": "What container is used for separating biodegradable waste (like food scraps) that will be turned into compost?",
    "options": [
      "Hazardous material box",
      "Organic waste bin",
      "Metal scraps pile",
      "Glass container"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q173",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-173",
    "type": "choice",
    "prompt": "What phrasal verb means to divide refuse into separate categories for proper disposal or reprocessing?",
    "options": [
      "Mix all garbage",
      "Sort your trash",
      "Burn everything",
      "Bury waste"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q174",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-174",
    "type": "choice",
    "prompt": "What phrasal verb means to physically collect garbage that has been improperly discarded in public spaces?",
    "options": [
      "Leave trash behind",
      "Pick up litter",
      "Add more garbage",
      "Ignore pollution"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q175",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-175",
    "type": "choice",
    "prompt": "What is the act of dropping waste in a public area instead of putting it in a trash bin?",
    "options": [
      "Recycling",
      "Composting",
      "Littering",
      "Waste sorting"
    ],
    "correctIndex": 2
  },
  {
    "id": "env-q176",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-176",
    "type": "choice",
    "prompt": "What is the illegal disposal of waste, often hazardous, in an unauthorized location?",
    "options": [
      "Recycling program",
      "Dumping",
      "Waste reduction",
      "Compost pile"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q177",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-177",
    "type": "choice",
    "prompt": "What is the service that gathers solid waste from homes and businesses for disposal or processing?",
    "options": [
      "Mail delivery",
      "Waste collection",
      "Food service",
      "Electric power"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q178",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-178",
    "type": "choice",
    "prompt": "What is the process of dealing with solid waste, including collection, transport, treatment, and disposal?",
    "options": [
      "Financial planning",
      "Waste management",
      "Software development",
      "Traffic control"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q179",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-179",
    "type": "choice",
    "prompt": "What is a place where trash is buried underground, typically the final destination for municipal solid waste?",
    "options": [
      "Landfill site",
      "National park",
      "Water reservoir",
      "Shopping center"
    ],
    "correctIndex": 0
  },
  {
    "id": "env-q180",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-180",
    "type": "choice",
    "prompt": "What industrial facility burns waste materials to dispose of them and sometimes generate energy?",
    "options": [
      "Recycling depot",
      "Incineration plant",
      "Composting facility",
      "Water bottling factory"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q181",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-181",
    "type": "choice",
    "prompt": "What is a small, refundable fee added to the price of a beverage container, recovered when the container is returned?",
    "options": [
      "Sales tax",
      "Bottle deposit",
      "Shipping cost",
      "Product price"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q182",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-182",
    "type": "choice",
    "prompt": "What phrasal verb means to carry a personal flask or tumbler to avoid using a disposable one?",
    "options": [
      "Throw away a bottle",
      "Bring your own bottle",
      "Buy a new drink",
      "Order delivery"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q183",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-183",
    "type": "choice",
    "prompt": "What personal item is intended to be refilled with water repeatedly, reducing reliance on single-use plastic bottles?",
    "options": [
      "Disposable cup",
      "Reusable water bottle",
      "Old shoe",
      "Paper plate"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q184",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-184",
    "type": "choice",
    "prompt": "What piece of plastic or material is placed on top of a hot drink container to prevent spills?",
    "options": [
      "Cup handle",
      "Coffee cup lid",
      "Tea bag",
      "Sleeve"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q185",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-185",
    "type": "choice",
    "prompt": "What thin tube for drinking is made from pulped wood material instead of plastic?",
    "options": [
      "Plastic pipe",
      "Paper straw",
      "Metal fork",
      "Glass bottle"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q186",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-186",
    "type": "choice",
    "prompt": "What bag is made from woven material, like cotton or canvas, and is typically used repeatedly for shopping?",
    "options": [
      "Single-use plastic bag",
      "Cloth bag",
      "Disposable wrapper",
      "Empty box"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q187",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-187",
    "type": "choice",
    "prompt": "What container is used to carry a meal from home to school or work, reducing the need for packaged food?",
    "options": [
      "Large suitcase",
      "Lunch box",
      "Filing cabinet",
      "Empty bucket"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q188",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-188",
    "type": "choice",
    "prompt": "What are routines or regular practices that help protect the environment?",
    "options": [
      "Wasteful practices",
      "Eco-friendly habits",
      "Ignoring recycling",
      "Using excess energy"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q189",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-189",
    "type": "choice",
    "prompt": "What decision favors sustainability and minimizes environmental damage?",
    "options": [
      "Polluting act",
      "Green choice",
      "Expensive failure",
      "Non-essential item"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q190",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-190",
    "type": "choice",
    "prompt": "What idiom means that even minor actions towards a positive goal are valuable and contribute to the total effort?",
    "options": [
      "Ignore small efforts",
      "Every little bit helps",
      "Only massive changes count",
      "Let someone else do it"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q191",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-191",
    "type": "choice",
    "prompt": "What phrasal verb means to safeguard animals and plants in their natural habitats?",
    "options": [
      "Destroy forests",
      "Protect wildlife",
      "Hunt illegally",
      "Ignore species"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q192",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-192",
    "type": "choice",
    "prompt": "What phrasal verb means to treat the natural world with care and reverence?",
    "options": [
      "Damage plants",
      "Respect nature",
      "Waste resources",
      "Pollute the air"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q193",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-193",
    "type": "choice",
    "prompt": "What idiom encourages visitors to remove all garbage and evidence of their presence from a natural area?",
    "options": [
      "Make a big mess",
      "Leave no trace",
      "Build a fire pit",
      "Take everything"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q194",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-194",
    "type": "choice",
    "prompt": "What idiom describes existing sustainably without causing damage to the ecological balance?",
    "options": [
      "Exploit resources",
      "Live in harmony with nature",
      "Dominate the environment",
      "Fight the climate"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q195",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-195",
    "type": "choice",
    "prompt": "What phrasal verb means to consider the Earth and its ecological limits in one's actions?",
    "options": [
      "Ignore global warming",
      "Respect the planet",
      "Waste fossil fuels",
      "Cut down all trees"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q196",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-196",
    "type": "choice",
    "prompt": "What phrasal verb means to take care of and protect the surroundings and ecological systems?",
    "options": [
      "Neglect the garden",
      "Look after the environment",
      "Make trash piles",
      "Damage resources"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q197",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-197",
    "type": "choice",
    "prompt": "What phrasal verb means to cause damage or degradation to the natural world?",
    "options": [
      "Protect the air",
      "Harm the environment",
      "Plant new forests",
      "Clean the oceans"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q198",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-198",
    "type": "choice",
    "prompt": "What idiom encourages an individual to contribute their expected effort to a shared goal (e.g., environmental protection)?",
    "options": [
      "Do nothing at all",
      "Do your part",
      "Watch others work",
      "Take a long rest"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q199",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-199",
    "type": "choice",
    "prompt": "What idiom suggests considering global issues while focusing efforts on local, achievable actions?",
    "options": [
      "Ignore local problems",
      "Think globally, act locally",
      "Act worldwide, ignore home",
      "Don't consider the future"
    ],
    "correctIndex": 1
  },
  {
    "id": "env-q200",
    "categoryId": ENV_CATEGORY_ID,
    "wordId": "env-200",
    "type": "choice",
    "prompt": "What idiom means to ensure that the planet and society are in a better condition for future generations?",
    "options": [
      "Take everything now",
      "Leave a better world behind",
      "Focus on the past",
      "Ignore the children"
    ],
    "correctIndex": 1
  },
  // end of ENV_CATEGORY_ID questions

  // finance category questions can go here

{
    id: 'finance-q1',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-1',
    type: 'drag',
    prompt: 'Her new job offers a higher ____. ',
    options: ['salary', 'wage', 'bonus', 'income'],
    correctIndex: 0
  },
  {
    id: 'finance-q2',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-2',
    type: 'drag',
    prompt: 'The minimum ____ increased this year.',
    options: ['wage', 'salary', 'bonus', 'commission'],
    correctIndex: 0
  },
  {
    id: 'finance-q3',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-3',
    type: 'drag',
    prompt: 'His main source of ____ is his full-time job.',
    options: ['income', 'savings', 'debt', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q4',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-4',
    type: 'drag',
    prompt: '____ is your pay before taxes are taken out.',
    options: ['gross income', 'net income', 'salary', 'wage'],
    correctIndex: 0
  },
  {
    id: 'finance-q5',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-5',
    type: 'drag',
    prompt: '____ is what you actually receive in your bank account.',
    options: ['net income', 'gross income', 'bonus', 'commission'],
    correctIndex: 0
  },
  {
    id: 'finance-q6',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-6',
    type: 'drag',
    prompt: 'She worked ____ to earn extra money.',
    options: ['overtime', 'bonus', 'commission', 'savings'],
    correctIndex: 0
  },
  {
    id: 'finance-q7',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-7',
    type: 'drag',
    prompt: 'Employees receive a performance ____ in December.',
    options: ['bonus', 'wage', 'loan', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q8',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-8',
    type: 'drag',
    prompt: 'Salespeople earn ____ on every sale.',
    options: ['commission', 'salary', 'refund', 'interest rate'],
    correctIndex: 0
  },
  {
    id: 'finance-q9',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-9',
    type: 'drag',
    prompt: 'He asked his boss for a ____. ',
    options: ['raise', 'loan', 'bill', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q10',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-10',
    type: 'drag',
    prompt: 'My ____ arrives every two weeks.',
    options: ['paycheck', 'invoice', 'loan', 'bond'],
    correctIndex: 0
  },

  {
    id: 'finance-q11',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-11',
    type: 'drag',
    prompt: 'We made a monthly ____ to track our spending.',
    options: ['budget', 'loan', 'invoice', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q12',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-12',
    type: 'drag',
    prompt: 'Rent is one of their biggest ____. ',
    options: ['living expenses', 'savings goals', 'dividends', 'premiums'],
    correctIndex: 0
  },
  {
    id: 'finance-q13',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-13',
    type: 'drag',
    prompt: 'The ____ is high in big cities.',
    options: ['cost of living', 'loan balance', 'stock price', 'wage'],
    correctIndex: 0
  },
  {
    id: 'finance-q14',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-14',
    type: 'drag',
    prompt: 'Rent and insurance are ____. ',
    options: ['fixed expenses', 'variable expenses', 'savings', 'debts'],
    correctIndex: 0
  },
  {
    id: 'finance-q15',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-15',
    type: 'drag',
    prompt: 'Groceries and entertainment are ____. ',
    options: ['variable expenses', 'fixed expenses', 'loans', 'fees'],
    correctIndex: 0
  },
  {
    id: 'finance-q16',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-16',
    type: 'drag',
    prompt: 'She keeps her ____ in a separate account.',
    options: ['savings', 'debts', 'bills', 'loans'],
    correctIndex: 0
  },
  {
    id: 'finance-q17',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-17',
    type: 'drag',
    prompt: 'They built an ____ for unexpected bills.',
    options: ['emergency fund', 'invoice file', 'stock portfolio', 'retirement plan'],
    correctIndex: 0
  },
  {
    id: 'finance-q18',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-18',
    type: 'drag',
    prompt: 'They saved a ____ for retirement.',
    options: ['nest egg', 'loan', 'invoice', 'utility bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q19',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-19',
    type: 'drag',
    prompt: '____ on credit cards can lead to debt.',
    options: ['overspending', 'budgeting', 'saving', 'investing'],
    correctIndex: 0
  },
  {
    id: 'finance-q20',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-20',
    type: 'drag',
    prompt: 'It’s important to ____, not to borrow too much.',
    options: ['live within your means', 'go bankrupt', 'max out a card', 'overspend'],
    correctIndex: 0
  },

  {
    id: 'finance-q21',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-21',
    type: 'drag',
    prompt: 'She opened her first ____ at 18.',
    options: ['bank account', 'insurance claim', 'stock', 'bond'],
    correctIndex: 0
  },
  {
    id: 'finance-q22',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-22',
    type: 'drag',
    prompt: 'He pays his bills from his ____. ',
    options: ['checking account', 'loan', 'mortgage', 'retirement plan'],
    correctIndex: 0
  },
  {
    id: 'finance-q23',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-23',
    type: 'drag',
    prompt: 'A ____ usually pays interest.',
    options: ['savings account', 'utility bill', 'invoice', 'wage'],
    correctIndex: 0
  },
  {
    id: 'finance-q24',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-24',
    type: 'drag',
    prompt: 'The ____ on this loan is very high.',
    options: ['interest rate', 'credit score', 'salary', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q25',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-25',
    type: 'drag',
    prompt: 'Check your ____ before making a big purchase.',
    options: ['balance', 'bill', 'invoice', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q26',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-26',
    type: 'drag',
    prompt: 'I made a ____ of 500 dollars this morning.',
    options: ['deposit', 'withdrawal', 'bill', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q27',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-27',
    type: 'drag',
    prompt: 'There is a fee for each ATM ____. ',
    options: ['withdrawal', 'deposit', 'invoice', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q28',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-28',
    type: 'drag',
    prompt: 'He paid a fee because of an ____ on his account.',
    options: ['overdraft', 'refund', 'invoice', 'savings goal'],
    correctIndex: 0
  },
  {
    id: 'finance-q29',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-29',
    type: 'drag',
    prompt: '____ can add up quickly if you’re not careful.',
    options: ['bank fees', 'dividends', 'bonds', 'pensions'],
    correctIndex: 0
  },
  {
    id: 'finance-q30',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-30',
    type: 'drag',
    prompt: 'You can ____ online between accounts.',
    options: ['transfer money', 'go bankrupt', 'split the bill', 'file a claim'],
    correctIndex: 0
  },

  {
    id: 'finance-q31',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-31',
    type: 'drag',
    prompt: 'She used a ____ to pay for the flight.',
    options: ['credit card', 'bond', 'invoice', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q32',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-32',
    type: 'drag',
    prompt: 'I prefer to use my ____ for daily purchases.',
    options: ['debit card', 'loan', 'mortgage', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q33',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-33',
    type: 'drag',
    prompt: 'He reached his ____ this month.',
    options: ['credit limit', 'credit score', 'salary', 'budget'],
    correctIndex: 0
  },
  {
    id: 'finance-q34',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-34',
    type: 'drag',
    prompt: 'A good ____ makes it easier to get a loan.',
    options: ['credit score', 'utility bill', 'bonus', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q35',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-35',
    type: 'drag',
    prompt: 'Only making the ____ can be costly over time.',
    options: ['minimum payment', 'salary', 'deposit', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q36',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-36',
    type: 'drag',
    prompt: 'Try to ____ your credit card bill every month.',
    options: ['pay in full', 'overspend on', 'default on', 'ignore'],
    correctIndex: 0
  },
  {
    id: 'finance-q37',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-37',
    type: 'drag',
    prompt: 'If you ____, you pay more interest.',
    options: ['carry a balance', 'pay in full', 'split the bill', 'go debt-free'],
    correctIndex: 0
  },
  {
    id: 'finance-q38',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-38',
    type: 'drag',
    prompt: 'He ____ his card on holiday shopping.',
    options: ['maxed out', 'paid off', 'closed', 'invested'],
    correctIndex: 0
  },
  {
    id: 'finance-q39',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-39',
    type: 'drag',
    prompt: 'A ____ on a credit card has high fees.',
    options: ['cash advance', 'bank fee', 'paycheck', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q40',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-40',
    type: 'drag',
    prompt: 'The statement shows the monthly ____. ',
    options: ['interest charge', 'salary slip', 'invoice', 'refund'],
    correctIndex: 0
  },

  {
    id: 'finance-q41',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-41',
    type: 'drag',
    prompt: 'They applied for a ____ to buy a car.',
    options: ['loan', 'bill', 'refund', 'pension'],
    correctIndex: 0
  },
  {
    id: 'finance-q42',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-42',
    type: 'drag',
    prompt: 'A ____ can be used for many purposes.',
    options: ['personal loan', 'utility bill', 'credit card fee', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q43',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-43',
    type: 'drag',
    prompt: 'She is still paying off her ____. ',
    options: ['student loans', 'insurance premiums', 'stock shares', 'refunds'],
    correctIndex: 0
  },
  {
    id: 'finance-q44',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-44',
    type: 'drag',
    prompt: 'They got a ____ to buy their first house.',
    options: ['mortgage', 'cash advance', 'invoice', 'budget'],
    correctIndex: 0
  },
  {
    id: 'finance-q45',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-45',
    type: 'drag',
    prompt: 'You need a ____ to purchase a home.',
    options: ['down payment', 'bonus', 'refund', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q46',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-46',
    type: 'drag',
    prompt: 'The ____ is due on the 1st.',
    options: ['monthly installment', 'utility bill', 'paycheck', 'credit limit'],
    correctIndex: 0
  },
  {
    id: 'finance-q47',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-47',
    type: 'drag',
    prompt: 'If you ____, your credit score drops.',
    options: ['default on a loan', 'pay off a loan', 'save up', 'split the bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q48',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-48',
    type: 'drag',
    prompt: 'They hope to ____ the loan in five years.',
    options: ['pay off', 'default on', 'ignore', 'refuse'],
    correctIndex: 0
  },
  {
    id: 'finance-q49',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-49',
    type: 'drag',
    prompt: 'An ____ does not reduce the principal.',
    options: ['interest-only payment', 'invoice', 'refund', 'utility bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q50',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-50',
    type: 'drag',
    prompt: 'Each payment reduces the ____ you still owe.',
    options: ['principal', 'bonus', 'invoice', 'credit limit'],
    correctIndex: 0
  },

  {
    id: 'finance-q51',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-51',
    type: 'drag',
    prompt: 'Too much ____ can be stressful.',
    options: ['debt', 'savings', 'salary', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q52',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-52',
    type: 'drag',
    prompt: 'He is working hard to ____ his debt.',
    options: ['pay off', 'increase', 'ignore', 'sell'],
    correctIndex: 0
  },
  {
    id: 'finance-q53',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-53',
    type: 'drag',
    prompt: 'People can ____ quickly with credit cards.',
    options: ['get into debt', 'go debt-free', 'invest', 'save up'],
    correctIndex: 0
  },
  {
    id: 'finance-q54',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-54',
    type: 'drag',
    prompt: 'Her goal is to be ____ by 40.',
    options: ['debt-free', 'bankrupt', 'overdrawn', 'insolvent'],
    correctIndex: 0
  },
  {
    id: 'finance-q55',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-55',
    type: 'drag',
    prompt: '____ charge extremely high interest rates.',
    options: ['loan sharks', 'banks', 'employers', 'landlords'],
    correctIndex: 0
  },
  {
    id: 'finance-q56',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-56',
    type: 'drag',
    prompt: 'I still ____ to the bank.',
    options: ['owe money', 'pay a salary', 'send a refund', 'file a claim'],
    correctIndex: 0
  },
  {
    id: 'finance-q57',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-57',
    type: 'drag',
    prompt: 'He ____ on his car payments.',
    options: ['fell behind', 'paid in full', 'refused', 'invested'],
    correctIndex: 0
  },
  {
    id: 'finance-q58',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-58',
    type: 'drag',
    prompt: 'They charged a ____ on my bill.',
    options: ['late fee', 'dividend', 'salary', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q59',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-59',
    type: 'drag',
    prompt: 'The company ____ last year.',
    options: ['went bankrupt', 'saved up', 'diversified investments', 'paid off all loans'],
    correctIndex: 0
  },
  {
    id: 'finance-q60',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-60',
    type: 'drag',
    prompt: 'He was declared ____ by the court.',
    options: ['insolvent', 'profitable', 'insured', 'debt-free'],
    correctIndex: 0
  },

  {
    id: 'finance-q61',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-61',
    type: 'drag',
    prompt: 'The ____ is due in 30 days.',
    options: ['invoice', 'wage', 'loan', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q62',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-62',
    type: 'drag',
    prompt: 'I pay my phone ____ online.',
    options: ['bill', 'bonus', 'wage', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q63',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-63',
    type: 'drag',
    prompt: 'Our electricity ____ was very high.',
    options: ['utility bill', 'loan', 'refund', 'stock'],
    correctIndex: 0
  },
  {
    id: 'finance-q64',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-64',
    type: 'drag',
    prompt: 'Don’t forget the ____ of your rent.',
    options: ['due date', 'deposit', 'bonus', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q65',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-65',
    type: 'drag',
    prompt: 'Pay your bills ____ to avoid fees.',
    options: ['on time', 'in stocks', 'with loans', 'in dividends'],
    correctIndex: 0
  },
  {
    id: 'finance-q66',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-66',
    type: 'drag',
    prompt: 'Let’s ____ for dinner.',
    options: ['split the bill', 'save up', 'pay in full', 'file a claim'],
    correctIndex: 0
  },
  {
    id: 'finance-q67',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-67',
    type: 'drag',
    prompt: '____ the receipt in case you need to return it.',
    options: ['Keep', 'Throw away', 'Ignore', 'Share'],
    correctIndex: 0
  },
  {
    id: 'finance-q68',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-68',
    type: 'drag',
    prompt: 'The store offered a full ____. ',
    options: ['refund', 'loan', 'bonus', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q69',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-69',
    type: 'drag',
    prompt: 'You can set up a ____ for large purchases.',
    options: ['payment plan', 'retirement plan', 'loan shark', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q70',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-70',
    type: 'drag',
    prompt: 'They decided to ____ for the new TV.',
    options: ['pay in installments', 'pay in full with cash', 'go bankrupt', 'split the loan'],
    correctIndex: 0
  },

  {
    id: 'finance-q71',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-71',
    type: 'drag',
    prompt: 'Their ____ is a down payment on a house.',
    options: ['savings goal', 'credit score', 'salary', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q72',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-72',
    type: 'drag',
    prompt: 'She set up an ____ to her savings.',
    options: ['automatic transfer', 'insurance claim', 'cash advance', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q73',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-73',
    type: 'drag',
    prompt: 'We ____ each month for vacations.',
    options: ['set money aside', 'get into debt', 'go bankrupt', 'split the bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q74',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-74',
    type: 'drag',
    prompt: 'He is ____ a new laptop.',
    options: ['saving up for', 'defaulting on', 'splitting the bill for', 'refunding'],
    correctIndex: 0
  },
  {
    id: 'finance-q75',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-75',
    type: 'drag',
    prompt: '____ can cover small emergencies.',
    options: ['short-term savings', 'loan sharks', 'late fees', 'dividends'],
    correctIndex: 0
  },
  {
    id: 'finance-q76',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-76',
    type: 'drag',
    prompt: 'Retirement is a ____ goal.',
    options: ['long-term savings', 'short-term savings', 'utility bill', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q77',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-77',
    type: 'drag',
    prompt: '____ makes your savings grow faster.',
    options: ['compound interest', 'overspending', 'late fees', 'loan sharks'],
    correctIndex: 0
  },
  {
    id: 'finance-q78',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-78',
    type: 'drag',
    prompt: 'Experts recommend three months of ____. ',
    options: ['emergency savings', 'credit card debt', 'utility bills', 'dividends'],
    correctIndex: 0
  },
  {
    id: 'finance-q79',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-79',
    type: 'drag',
    prompt: 'They keep a ____ for surprise expenses.',
    options: ['rainy day fund', 'mortgage', 'stock', 'loan shark'],
    correctIndex: 0
  },
  {
    id: 'finance-q80',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-80',
    type: 'drag',
    prompt: 'It is wise to ____ for a rainy day.',
    options: ['save', 'borrow', 'overspend', 'ignore bills'],
    correctIndex: 0
  },

  {
    id: 'finance-q81',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-81',
    type: 'drag',
    prompt: 'Buying a home can be a good ____. ',
    options: ['investment', 'refund', 'invoice', 'late fee'],
    correctIndex: 0
  },
  {
    id: 'finance-q82',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-82',
    type: 'drag',
    prompt: 'He decided to ____ in index funds.',
    options: ['invest', 'refund', 'invoice', 'split the bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q83',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-83',
    type: 'drag',
    prompt: 'The ____ was volatile this week.',
    options: ['stock market', 'utility bill', 'salary', 'invoice'],
    correctIndex: 0
  },
  {
    id: 'finance-q84',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-84',
    type: 'drag',
    prompt: 'She bought shares of a technology ____. ',
    options: ['stock', 'loan', 'invoice', 'bond'],
    correctIndex: 0
  },
  {
    id: 'finance-q85',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-85',
    type: 'drag',
    prompt: 'Each ____ represents a small part of the company.',
    options: ['share', 'bill', 'refund', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q86',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-86',
    type: 'drag',
    prompt: 'Government ____ are often considered safer.',
    options: ['bonds', 'bills', 'wages', 'deposits'],
    correctIndex: 0
  },
  {
    id: 'finance-q87',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-87',
    type: 'drag',
    prompt: 'The company pays a yearly ____ to investors.',
    options: ['dividend', 'invoice', 'refund', 'premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q88',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-88',
    type: 'drag',
    prompt: 'They expect a high ____. ',
    options: ['return on investment', 'utility bill', 'loan shark fee', 'overdraft'],
    correctIndex: 0
  },
  {
    id: 'finance-q89',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-89',
    type: 'drag',
    prompt: 'Higher returns usually come with higher ____. ',
    options: ['risk', 'salary', 'bonus', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q90',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-90',
    type: 'drag',
    prompt: 'It is safer to ____. ',
    options: ['diversify your investments', 'max out your cards', 'default on loans', 'ignore your savings'],
    correctIndex: 0
  },

  {
    id: 'finance-q91',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-91',
    type: 'drag',
    prompt: 'Health ____ helps pay medical bills.',
    options: ['insurance', 'investment', 'bonus', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q92',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-92',
    type: 'drag',
    prompt: 'Their monthly insurance ____ is affordable.',
    options: ['premium', 'bill', 'salary', 'dividend'],
    correctIndex: 0
  },
  {
    id: 'finance-q93',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-93',
    type: 'drag',
    prompt: 'You pay the ____ before insurance covers the rest.',
    options: ['deductible', 'refund', 'invoice', 'bonus'],
    correctIndex: 0
  },
  {
    id: 'finance-q94',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-94',
    type: 'drag',
    prompt: 'The policy has limited ____ for dental care.',
    options: ['coverage', 'salary', 'bonus', 'bill'],
    correctIndex: 0
  },
  {
    id: 'finance-q95',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-95',
    type: 'drag',
    prompt: 'They filed a ____ after the accident.',
    options: ['claim', 'loan', 'dividend', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q96',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-96',
    type: 'drag',
    prompt: 'You must ____ within 30 days.',
    options: ['file a claim', 'split the bill', 'save for a rainy day', 'max out a card'],
    correctIndex: 0
  },
  {
    id: 'finance-q97',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-97',
    type: 'drag',
    prompt: 'He receives a small ____ from his old job.',
    options: ['pension', 'bonus', 'invoice', 'refund'],
    correctIndex: 0
  },
  {
    id: 'finance-q98',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-98',
    type: 'drag',
    prompt: 'Her employer offers a good ____. ',
    options: ['retirement plan', 'utility bill', 'cash advance', 'loan shark'],
    correctIndex: 0
  },
  {
    id: 'finance-q99',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-99',
    type: 'drag',
    prompt: 'Students often have to ____. ',
    options: ['live on a budget', 'go bankrupt', 'max out cards', 'ignore bills'],
    correctIndex: 0
  },
  {
    id: 'finance-q100',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-100',
    type: 'drag',
    prompt: 'With rising prices, it’s hard to ____. ',
    options: ['make ends meet', 'save nothing', 'avoid a budget', 'refuse payments'],
    correctIndex: 0
  },
{
    "id": "finance-q101",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-101",
    "type": "choice",
    "prompt": "What is a compulsory financial charge imposed by a government to fund public services?",
    "options": [
      "Gift",
      "Tax",
      "Salary",
      "Loan"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-q102",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-102",
    "type": "choice",
    "prompt": "What is the specific tax levied on personal or corporate earnings?",
    "options": [
      "Property bill",
      "Income tax",
      "Utility payment",
      "Rent fee"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-103",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-103",
    "type": "choice",
    "prompt": "What is the money returned to a taxpayer when they have paid more than they owe?",
    "options": [
      "Tax refund",
      "Extra fee",
      "Debt payment",
      "Utility deposit"
    ],
    "correctIndex": 0
  },
  {
    "id": "finance-104",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-104",
    "type": "choice",
    "prompt": "What form is submitted to the government to declare your earnings and calculate tax liability?",
    "options": [
      "Job application",
      "Tax return",
      "Grocery receipt",
      "Travel ticket"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-105",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-105",
    "type": "choice",
    "prompt": "What is a range of income levels subject to a specific percentage of taxation?",
    "options": [
      "Savings account",
      "Tax bracket",
      "Credit score",
      "Market volatility"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-106",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-106",
    "type": "choice",
    "prompt": "What phrasal verb means to claim an expense as a deduction against taxable income?",
    "options": [
      "Save up",
      "Write off",
      "Pay back",
      "Spend lavishly"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-107",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-107",
    "type": "choice",
    "prompt": "What adjective describes an expense that can be subtracted from gross income before calculating taxes?",
    "options": [
      "Non-essential",
      "Tax-deductible",
      "Fully taxable",
      "Unpaid"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-108",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-108",
    "type": "choice",
    "prompt": "What tax is paid by property owners based on the value of their real estate?",
    "options": [
      "Sales tax",
      "Property tax",
      "Income tax",
      "Fuel tax"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-109",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-109",
    "type": "choice",
    "prompt": "What tax is imposed on the purchase of goods and services?",
    "options": [
      "Sales tax",
      "Gift tax",
      "Estate tax",
      "Capital gains tax"
    ],
    "correctIndex": 0
  },
  {
    "id": "finance-110",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-110",
    "type": "choice",
    "prompt": "What is the condition where an entity is freed from the obligation to pay a certain tax?",
    "options": [
      "Mandatory fee",
      "Tax exemption",
      "Higher rate",
      "Debt collection"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-111",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-111",
    "type": "choice",
    "prompt": "What term refers to the total amount of money received by a company from its activities in a specific period?",
    "options": [
      "Expense",
      "Revenue",
      "Liability",
      "Loss"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-112",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-112",
    "type": "choice",
    "prompt": "What is the financial benefit achieved when the amount of revenue gained from a business activity exceeds the expenses?",
    "options": [
      "Profit",
      "Cost",
      "Rent",
      "Bill"
    ],
    "correctIndex": 0
  },
  {
    "id": "finance-113",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-113",
    "type": "choice",
    "prompt": "What is the result when a business's expenses exceed its revenues?",
    "options": [
      "Gain",
      "Loss",
      "Revenue",
      "Asset"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-114",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-114",
    "type": "choice",
    "prompt": "What is the ratio of profit to revenue, often expressed as a percentage?",
    "options": [
      "Debt ratio",
      "Profit margin",
      "Turnover rate",
      "Liquidity"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-115",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-115",
    "type": "choice",
    "prompt": "What are the costs associated with the daily running of a business, excluding production costs?",
    "options": [
      "Investment capital",
      "Operating cost",
      "Sales revenue",
      "Tax refunds"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-116",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-116",
    "type": "choice",
    "prompt": "What phrasal verb means to reach a point where revenues exactly equal expenses?",
    "options": [
      "Go bankrupt",
      "Break even",
      "Make huge profit",
      "Increase debt"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-117",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-117",
    "type": "choice",
    "prompt": "What term refers to the total amount of money being transferred into and out of a business?",
    "options": [
      "Static fund",
      "Cash flow",
      "Inventory",
      "Fixed asset"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-118",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-118",
    "type": "choice",
    "prompt": "What is the profit a company makes after deducting the costs associated with making and selling its products or services, but before operating expenses?",
    "options": [
      "Net loss",
      "Gross profit",
      "Total debt",
      "Revenue only"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-119",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-119",
    "type": "choice",
    "prompt": "What is the remaining profit after all operating expenses, interest, and taxes have been deducted from revenue?",
    "options": [
      "Gross income",
      "Net profit",
      "Total expense",
      "Initial investment"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-120",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-120",
    "type": "choice",
    "prompt": "What phrasal verb means to create or produce income for a business?",
    "options": [
      "Waste money",
      "Generate revenue",
      "Increase spending",
      "Reduce sales"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-121",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-121",
    "type": "choice",
    "prompt": "What unique identifier is assigned to a bill of sale or request for payment?",
    "options": [
      "Bank account name",
      "Invoice number",
      "Customer address",
      "Product description"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-122",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-122",
    "type": "choice",
    "prompt": "What term refers to the amount of money currently owed and overdue on an account?",
    "options": [
      "Prepaid amount",
      "Outstanding balance",
      "Credit limit",
      "Initial deposit"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-123",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-123",
    "type": "choice",
    "prompt": "What is the fixed period (e.g., monthly) between regular payments for goods or services?",
    "options": [
      "Delivery time",
      "Billing cycle",
      "Warranty period",
      "Working hours"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-124",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-124",
    "type": "choice",
    "prompt": "What official communication informs a customer that their payment is past due?",
    "options": [
      "New product announcement",
      "Late payment notice",
      "Subscription renewal",
      "Thank you letter"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-125",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-125",
    "type": "choice",
    "prompt": "What phrasal verb means to fully pay the amount due on an invoice or account?",
    "options": [
      "Ignore a bill",
      "Settle a bill",
      "Dispute a charge",
      "Ask for a discount"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-126",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-126",
    "type": "choice",
    "prompt": "What is a message sent to a customer to notify them that a payment due date is approaching or has passed?",
    "options": [
      "Job offer",
      "Payment reminder",
      "Weather report",
      "Recipe card"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-127",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-127",
    "type": "choice",
    "prompt": "What monthly document summarizes all transactions (deposits, withdrawals, fees) for a specific account?",
    "options": [
      "Recipe book",
      "Bank statement",
      "Photo album",
      "Text message"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-128",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-128",
    "type": "choice",
    "prompt": "What is the chronological record of all debit and credit movements in a financial account?",
    "options": [
      "Shopping list",
      "Transaction history",
      "Movie reviews",
      "Travel itinerary"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-129",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-129",
    "type": "choice",
    "prompt": "What is the electronic transfer of money from one bank account to another, typically used for payroll?",
    "options": [
      "Cash delivery",
      "Direct deposit",
      "Paper check",
      "Coin exchange"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-130",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-130",
    "type": "choice",
    "prompt": "What is the process of moving funds electronically from one bank account to another?",
    "options": [
      "Manual counting",
      "Bank transfer",
      "Mail delivery",
      "Physical withdrawal"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-131",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-131",
    "type": "choice",
    "prompt": "What term refers to wrongful or criminal deception intended to result in financial or personal gain?",
    "options": [
      "Charity",
      "Fraud",
      "Honesty",
      "Lending"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-132",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-132",
    "type": "choice",
    "prompt": "What is the act of illegally obtaining and using someone's personal financial data, usually for economic benefit?",
    "options": [
      "Identity protection",
      "Identity theft",
      "Name change",
      "Credit check"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-133",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-133",
    "type": "choice",
    "prompt": "What warning is placed on a credit report to signal potential unauthorized activity?",
    "options": [
      "Weather warning",
      "Fraud alert",
      "Sales notification",
      "Price change"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-134",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-134",
    "type": "choice",
    "prompt": "What phrasal verb means to temporarily suspend all activity or transactions on a bank account?",
    "options": [
      "Deposit money",
      "Freeze an account",
      "Open a new line",
      "Withdraw funds"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-135",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-135",
    "type": "choice",
    "prompt": "What transaction method guarantees the protection of the user's data from theft and unauthorized access?",
    "options": [
      "Insecure transfer",
      "Secure payment",
      "Public transaction",
      "Paper receipt"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-136",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-136",
    "type": "choice",
    "prompt": "What is a transaction on a financial statement that the account holder did not authorize?",
    "options": [
      "Legitimate bill",
      "Fraudulent charge",
      "Approved expense",
      "Tax deduction"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-137",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-137",
    "type": "choice",
    "prompt": "What verb means to charge someone too much money for an item or service?",
    "options": [
      "Underpay",
      "Overcharge",
      "Discount",
      "Reimburse"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-138",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-138",
    "type": "choice",
    "prompt": "What phrasal verb means to formally register a disagreement or objection to a charge or billing error?",
    "options": [
      "Accept all fees",
      "File a dispute",
      "Pay immediately",
      "Ignore the error"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-139",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-139",
    "type": "choice",
    "prompt": "What phrasal verb means to terminate the use and validity of a debit or credit card?",
    "options": [
      "Activate a card",
      "Cancel a card",
      "Use constantly",
      "Check the balance"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-140",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-140",
    "type": "choice",
    "prompt": "What is a transfer of money that occurred without the permission of the account owner?",
    "options": [
      "Authorized purchase",
      "Unauthorized transaction",
      "Investment fund",
      "Salary payment"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-141",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-141",
    "type": "choice",
    "prompt": "What occurs when the amount of money planned for expenses exceeds the actual income or available funds?",
    "options": [
      "Budget surplus",
      "Budget shortfall",
      "Large profit",
      "Savings account"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-142",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-142",
    "type": "choice",
    "prompt": "What phrasal verb means to exceed the planned expenditure limit?",
    "options": [
      "Stay under budget",
      "Overshoot the budget",
      "Invest wisely",
      "Save money"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-143",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-143",
    "type": "choice",
    "prompt": "What describes a situation where money available for spending is severely restricted?",
    "options": [
      "Unlimited funds",
      "Tight budget",
      "High income",
      "Financial surplus"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-144",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-144",
    "type": "choice",
    "prompt": "What phrasal verb means to intentionally reduce the amount of money spent?",
    "options": [
      "Increase debts",
      "Cut expenses",
      "Spend recklessly",
      "Buy everything"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-145",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-145",
    "type": "choice",
    "prompt": "What verb means to spend more money than one can afford or more than was planned?",
    "options": [
      "Save",
      "Overspend",
      "Invest",
      "Budget"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-146",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-146",
    "type": "choice",
    "prompt": "What is the process of recording where money is being spent?",
    "options": [
      "Ignoring bills",
      "Tracking expenses",
      "Creating debt",
      "Spending spree"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-147",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-147",
    "type": "choice",
    "prompt": "What is the ability to understand and effectively use various financial skills, including budgeting and investing?",
    "options": [
      "Financial blindness",
      "Financial literacy",
      "Physical strength",
      "Creative writing"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-148",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-148",
    "type": "choice",
    "prompt": "What professional helps individuals manage their money and plan for future goals?",
    "options": [
      "Chef",
      "Financial advisor",
      "Dentist",
      "Bus driver"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-149",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-149",
    "type": "choice",
    "prompt": "What phrasal verb means to take control of one's income, spending, and savings?",
    "options": [
      "Waste resources",
      "Manage your money",
      "Delegate all decisions",
      "Ignore debts"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-150",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-150",
    "type": "choice",
    "prompt": "What phrasal verb means to reduce the overall amount of money you are currently spending?",
    "options": [
      "Increase purchases",
      "Cut back on spending",
      "Spend without limit",
      "Buy luxury items"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-151",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-151",
    "type": "choice",
    "prompt": "What is a digital currency in which transactions are verified and records maintained by a decentralized system?",
    "options": [
      "Paper dollar",
      "Cryptocurrency",
      "Gold bar",
      "Bank note"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-152",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-152",
    "type": "choice",
    "prompt": "What is a decentralized, distributed, and often public digital ledger used to record transactions across many computers?",
    "options": [
      "Single spreadsheet",
      "Blockchain",
      "Central bank",
      "Physical vault"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-153",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-153",
    "type": "choice",
    "prompt": "What digital storage unit holds the public and private keys needed to access and use cryptocurrencies?",
    "options": [
      "Physical pocket",
      "Wallet (crypto)",
      "Mailbox",
      "Toolbox"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-154",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-154",
    "type": "choice",
    "prompt": "What is an online marketplace where users can trade cryptocurrencies for other assets?",
    "options": [
      "Local store",
      "Exchange platform",
      "Tourist agency",
      "Coffee shop"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-155",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-155",
    "type": "choice",
    "prompt": "What economic environment is subject to sudden and unpredictable price swings and changes?",
    "options": [
      "Stable economy",
      "Volatile market",
      "Fixed prices",
      "Steady growth"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-156",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-156",
    "type": "choice",
    "prompt": "What phrasal verb means to convert a digital asset (like crypto) into fiat currency (like dollars) for withdrawal?",
    "options": [
      "Invest more",
      "Cash out",
      "Reinvest everything",
      "Hold indefinitely"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-157",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-157",
    "type": "choice",
    "prompt": "What term describes a non-physical item of value or ownership, such as a cryptocurrency or NFT?",
    "options": [
      "Physical tool",
      "Digital asset",
      "Printed photo",
      "Wooden desk"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-158",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-158",
    "type": "choice",
    "prompt": "What is a sudden, significant drop in the price or value of a security or cryptocurrency?",
    "options": [
      "Market peak",
      "Market dip",
      "Steady climb",
      "High stability"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-159",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-159",
    "type": "choice",
    "prompt": "What phrasal verb means to retain possession of an asset rather than selling it immediately?",
    "options": [
      "Sell quickly",
      "Hold onto",
      "Trade frequently",
      "Buy in bulk"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-160",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-160",
    "type": "choice",
    "prompt": "What phrasal verb means that the price or market worth of something has increased?",
    "options": [
      "Decrease in worth",
      "Go up in value",
      "Stay the same",
      "Become worthless"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-161",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-161",
    "type": "choice",
    "prompt": "What are funds set aside to be drawn upon when an individual stops working permanently?",
    "options": [
      "Daily expenses",
      "Retirement savings",
      "Emergency debt",
      "Car payment"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-162",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-162",
    "type": "choice",
    "prompt": "What is an employer-sponsored arrangement for providing employees with income after they retire?",
    "options": [
      "Salary bonus",
      "Pension plan",
      "Sick leave",
      "Health insurance only"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-163",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-163",
    "type": "choice",
    "prompt": "What is a dedicated savings vehicle designed to encourage and facilitate saving for life after work, often with tax benefits?",
    "options": [
      "Checking account",
      "Retirement account",
      "Credit card",
      "Investment debt"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-164",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-164",
    "type": "choice",
    "prompt": "What phrasal verb describes leaving one's job before the typical age of 65?",
    "options": [
      "Work until 90",
      "Retire early",
      "Start a new job",
      "Save nothing"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-165",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-165",
    "type": "choice",
    "prompt": "What phrasal verb means to regularly deposit money into an investment pool?",
    "options": [
      "Withdraw money",
      "Contribute to a fund",
      "Spend everything",
      "Ignore investments"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-166",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-166",
    "type": "choice",
    "prompt": "What phrasal verb means to take out money saved for retirement before the scheduled time?",
    "options": [
      "Deposit savings",
      "Withdraw retirement savings",
      "Delay retirement",
      "Increase contributions"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-167",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-167",
    "type": "choice",
    "prompt": "What is the state of having sufficient wealth to live without having to work actively for money?",
    "options": [
      "Total debt",
      "Financial independence",
      "High tax bracket",
      "Job reliance"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-168",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-168",
    "type": "choice",
    "prompt": "What term describes the act of ceasing one's career and starting retirement before the standard age?",
    "options": [
      "Long career",
      "Early retirement",
      "Temporary leave",
      "Career change"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-169",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-169",
    "type": "choice",
    "prompt": "What term refers to the money received by a person after they have retired, typically from pensions or savings?",
    "options": [
      "Working salary",
      "Retirement income",
      "Student loan",
      "Business revenue"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-170",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-170",
    "type": "choice",
    "prompt": "What phrasal verb means to make preparations, such as saving and investing, for life after one stops working?",
    "options": [
      "Forget the future",
      "Plan for retirement",
      "Avoid financial discussions",
      "Spend everything now"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-171",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-171",
    "type": "choice",
    "prompt": "What phrasal verb means to keep money for future use instead of spending it immediately?",
    "options": [
      "Waste funds",
      "Save money",
      "Increase debt",
      "Buy impulsively"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-172",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-172",
    "type": "choice",
    "prompt": "What phrasal verb means to make careful and thought-out spending decisions?",
    "options": [
      "Gamble funds",
      "Spend wisely",
      "Waste carelessly",
      "Ignore prices"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-173",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-173",
    "type": "choice",
    "prompt": "What phrasal verb means to lessen or eliminate business or household expenditures?",
    "options": [
      "Increase budget",
      "Cut costs",
      "Overspend",
      "Ignore prices"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-174",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-174",
    "type": "choice",
    "prompt": "What phrasal verb means to spend more money than the predetermined spending limit?",
    "options": [
      "Stay strictly within limits",
      "Overshoot a budget",
      "Save diligently",
      "Reduce spending"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-175",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-175",
    "type": "choice",
    "prompt": "What idiom describes a person who uses all of their earnings for immediate expenses and has no reserve funds?",
    "options": [
      "Be wealthy",
      "Live paycheck to paycheck",
      "Save often",
      "Invest daily"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-176",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-176",
    "type": "choice",
    "prompt": "What idiom means to spend less money than usual because of financial difficulty?",
    "options": [
      "Spend freely",
      "Tighten your belt",
      "Get a big raise",
      "Ignore the cost"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-177",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-177",
    "type": "choice",
    "prompt": "What idiom is used to teach someone, especially a child, that money must be earned and is not freely available?",
    "options": [
      "Money is everywhere",
      "Money doesn’t grow on trees",
      "Be wasteful",
      "Spend lavishly"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-178",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-178",
    "type": "choice",
    "prompt": "What idiom means to be experiencing a financial loss or negative balance?",
    "options": [
      "In the green",
      "In the red",
      "Making huge profit",
      "Financially stable"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-179",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-179",
    "type": "choice",
    "prompt": "What idiom means to be making a profit or operating with a positive balance?",
    "options": [
      "In debt",
      "In the black",
      "Breaking even",
      "Losing money"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-180",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-180",
    "type": "choice",
    "prompt": "What idiom means managing finances with a very small amount of money?",
    "options": [
      "With endless funds",
      "On a shoestring budget",
      "Using a large inheritance",
      "Without caring about cost"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-181",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-181",
    "type": "choice",
    "prompt": "What is the increase in the production of goods and services in an economy?",
    "options": [
      "Economic recession",
      "Economic growth",
      "Deflation",
      "Price decrease"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-182",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-182",
    "type": "choice",
    "prompt": "What is the general increase in prices and fall in the purchasing value of money?",
    "options": [
      "Deflation",
      "Inflation",
      "Economic stability",
      "Price reduction"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-183",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-183",
    "type": "choice",
    "prompt": "What is the general decrease in prices and increase in the purchasing value of money?",
    "options": [
      "Hyperinflation",
      "Deflation",
      "Rapid growth",
      "Stable prices"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-184",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-184",
    "type": "choice",
    "prompt": "What is a period of temporary economic decline, during which trade and industrial activity are reduced, identified by a fall in GDP?",
    "options": [
      "Boom",
      "Recession",
      "Expansion",
      "High employment"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-185",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-185",
    "type": "choice",
    "prompt": "What term describes a decline in economic activity, often leading to a recession?",
    "options": [
      "Economic upturn",
      "Economic downturn",
      "Peak performance",
      "High demand"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-186",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-186",
    "type": "choice",
    "prompt": "What is a period of sudden, rapid economic growth and prosperity?",
    "options": [
      "Economic slump",
      "Economic boom",
      "Financial crisis",
      "Stagnation"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-187",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-187",
    "type": "choice",
    "prompt": "What is a sudden, sharp fall in the value of stocks and other assets in the market?",
    "options": [
      "Steady gain",
      "Market crash",
      "Slow growth",
      "Investment safety"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-188",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-188",
    "type": "choice",
    "prompt": "What government policy relates to taxation and spending in order to influence the economy?",
    "options": [
      "Monetary policy",
      "Fiscal policy",
      "Foreign policy",
      "Health policy"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-189",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-189",
    "type": "choice",
    "prompt": "What central bank actions determine the size and rate of growth of the money supply, often controlling interest rates?",
    "options": [
      "Foreign trade",
      "Monetary policy",
      "Agricultural laws",
      "Educational reforms"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-190",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-190",
    "type": "choice",
    "prompt": "What phrasal verb means to encourage growth and increased activity in the national financial system?",
    "options": [
      "Slow down spending",
      "Stimulate the economy",
      "Raise all taxes",
      "Reduce investments"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-191",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-191",
    "type": "choice",
    "prompt": "What term describes an abundance of valuable possessions or money?",
    "options": [
      "Poverty",
      "Wealth",
      "Expense",
      "Debt"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-192",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-192",
    "type": "choice",
    "prompt": "What term refers to resources owned by an individual or company that have economic value?",
    "options": [
      "Debts",
      "Assets",
      "Expenses",
      "Liabilities"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-193",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-193",
    "type": "choice",
    "prompt": "What term refers to an individual's or company's financial obligations or debts?",
    "options": [
      "Savings",
      "Liabilities",
      "Assets",
      "Income"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-194",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-194",
    "type": "choice",
    "prompt": "What is the total value of assets minus the total value of liabilities?",
    "options": [
      "Total income",
      "Net worth",
      "Monthly expense",
      "Annual tax"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-195",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-195",
    "type": "choice",
    "prompt": "What phrasal verb means to increase one's total financial value through saving and smart investments?",
    "options": [
      "Increase debt",
      "Build wealth",
      "Decrease income",
      "Lose money"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-196",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-196",
    "type": "choice",
    "prompt": "What is an ongoing source from which money comes to an individual or company?",
    "options": [
      "Single expense",
      "Income stream",
      "Fixed payment",
      "One-time cost"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-197",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-197",
    "type": "choice",
    "prompt": "What is income that is generated automatically with minimal effort from the recipient (e.g., rental or investment dividends)?",
    "options": [
      "Active salary",
      "Passive income",
      "Loan repayment",
      "Utility bill"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-198",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-198",
    "type": "choice",
    "prompt": "What phrase describes receiving money from several different jobs, investments, or businesses simultaneously?",
    "options": [
      "Single job",
      "Multiple income streams",
      "One single asset",
      "Zero investments"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-199",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-199",
    "type": "choice",
    "prompt": "What phrasal verb means to actively produce a large amount of money or valuable assets?",
    "options": [
      "Waste capital",
      "Generate wealth",
      "Stop working",
      "Pay off debts only"
    ],
    "correctIndex": 1
  },
  {
    "id": "finance-200",
    "categoryId": FINANCE_CATEGORY_ID,
    "wordId": "finance-200",
    "type": "choice",
    "prompt": "What is a state where a person's financial needs are met, and they are protected from financial risks?",
    "options": [
      "Huge debt",
      "Financial stability",
      "Constant spending",
      "High volatility"
    ],
    "correctIndex": 1
  },
  {
    id: 'finance-q201',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-201',
    type: 'drag',
    prompt: 'They reviewed their ____ at the end of the month.',
    options: ['household budget', 'retirement plan', 'loan term', 'gross pay'],
    correctIndex: 0
  },
  {
    id: 'finance-q202',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-202',
    type: 'drag',
    prompt: '____ can be challenging with children.',
    options: ['Living on one income', 'Living below your means', 'Shopping spree', 'Side hustle'],
    correctIndex: 0
  },
  {
    id: 'finance-q203',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-203',
    type: 'drag',
    prompt: '____ help low-income families.',
    options: ['Social benefits', 'Overdrafts', 'Price tags', 'Loan sharks'],
    correctIndex: 0
  },
  {
    id: 'finance-q204',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-204',
    type: 'drag',
    prompt: 'They receive a monthly ____. ',
    options: ['child benefit', 'side hustle', 'service charge', 'wire transfer'],
    correctIndex: 0
  },
  {
    id: 'finance-q205',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-205',
    type: 'drag',
    prompt: 'He applied for ____ after losing his job.',
    options: ['unemployment benefits', 'overdraft protection', 'joint account', 'budget app'],
    correctIndex: 0
  },
  {
    id: 'finance-q206',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-206',
    type: 'drag',
    prompt: 'Some people qualify for ____. ',
    options: ['income support', 'shopping sprees', 'loan sharks', 'discount codes'],
    correctIndex: 0
  },
  {
    id: 'finance-q207',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-207',
    type: 'drag',
    prompt: 'The company started a ____ program.',
    options: ['cost-cutting', 'digital wallet', 'side hustle', 'price-tagging'],
    correctIndex: 0
  },
  {
    id: 'finance-q208',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-208',
    type: 'drag',
    prompt: '____ has risen in recent years.',
    options: ['Household debt', 'Household budget', 'Discount codes', 'Joint accounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q209',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-209',
    type: 'drag',
    prompt: 'Rising prices create ____ on families.',
    options: ['financial pressure', 'shopping sprees', 'wire transfers', 'side hustles'],
    correctIndex: 0
  },
  {
    id: 'finance-q210',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-210',
    type: 'drag',
    prompt: 'Discounts help them ____. ',
    options: ['stretch their budget', 'go into debt', 'miss payments', 'cancel income'],
    correctIndex: 0
  },

  {
    id: 'finance-q211',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-211',
    type: 'drag',
    prompt: '____ is due on the first of every month.',
    options: ['Rent', 'Bonus', 'Dividend', 'Premium'],
    correctIndex: 0
  },
  {
    id: 'finance-q212',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-212',
    type: 'drag',
    prompt: 'The ____ raised the rent this year.',
    options: ['landlord', 'tenant', 'co-signer', 'loan officer'],
    correctIndex: 0
  },
  {
    id: 'finance-q213',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-213',
    type: 'drag',
    prompt: '____ must pay rent on time.',
    options: ['Tenants', 'Loan officers', 'Account holders', 'Investors'],
    correctIndex: 0
  },
  {
    id: 'finance-q214',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-214',
    type: 'drag',
    prompt: 'They signed a one-year ____. ',
    options: ['lease agreement', 'loan term', 'joint account', 'fee schedule'],
    correctIndex: 0
  },
  {
    id: 'finance-q215',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-215',
    type: 'drag',
    prompt: 'The landlord kept part of the ____. ',
    options: ['security deposit', 'gross pay', 'budget app', 'service charge'],
    correctIndex: 0
  },
  {
    id: 'finance-q216',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-216',
    type: 'drag',
    prompt: 'They received a notice of a ____. ',
    options: ['rent increase', 'loan approval', 'pay cut', 'shopping spree'],
    correctIndex: 0
  },
  {
    id: 'finance-q217',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-217',
    type: 'drag',
    prompt: 'They ____ between three roommates.',
    options: ['split the rent', 'split the stocks', 'split the loans', 'split the dividends'],
    correctIndex: 0
  },
  {
    id: 'finance-q218',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-218',
    type: 'drag',
    prompt: 'The ____ went smoothly.',
    options: ['move-out inspection', 'wire transfer', 'loan application', 'credit check'],
    correctIndex: 0
  },
  {
    id: 'finance-q219',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-219',
    type: 'drag',
    prompt: 'Their ____ is 1,200 dollars.',
    options: ['monthly rent', 'monthly dividend', 'monthly fee schedule', 'monthly overdraft'],
    correctIndex: 0
  },
  {
    id: 'finance-q220',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-220',
    type: 'drag',
    prompt: 'He ____ after losing his job.',
    options: ['fell behind on the rent', 'fell behind on investing', 'went on a shopping spree', 'opened a joint account'],
    correctIndex: 0
  },

  {
    id: 'finance-q221',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-221',
    type: 'drag',
    prompt: 'She started a ____ to earn extra money.',
    options: ['side hustle', 'joint account', 'loan term', 'shopping spree'],
    correctIndex: 0
  },
  {
    id: 'finance-q222',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-222',
    type: 'drag',
    prompt: 'Tutoring gives him ____. ',
    options: ['extra income', 'overdraft protection', 'loan sharks', 'service charges'],
    correctIndex: 0
  },
  {
    id: 'finance-q223',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-223',
    type: 'drag',
    prompt: 'He works as a ____ in graphic design.',
    options: ['freelancer', 'tenant', 'co-signer', 'account holder'],
    correctIndex: 0
  },
  {
    id: 'finance-q224',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-224',
    type: 'drag',
    prompt: 'Being ____ means handling your own taxes.',
    options: ['self-employed', 'joint account', 'pre-approved', 'under the table'],
    correctIndex: 0
  },
  {
    id: 'finance-q225',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-225',
    type: 'drag',
    prompt: 'She increased her ____ this year.',
    options: ['hourly rate', 'rent', 'overdraft', 'budget app'],
    correctIndex: 0
  },
  {
    id: 'finance-q226',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-226',
    type: 'drag',
    prompt: 'Freelancers must ____ clients for their work.',
    options: ['invoice', 'refund', 'insure', 'co-sign'],
    correctIndex: 0
  },
  {
    id: 'finance-q227',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-227',
    type: 'drag',
    prompt: 'He ____ a higher rate for the project.',
    options: ['negotiated', 'defaulted', 'missed', 'refunded'],
    correctIndex: 0
  },
  {
    id: 'finance-q228',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-228',
    type: 'drag',
    prompt: 'Being paid ____ is not legal.',
    options: ['under the table', 'in bulk', 'on sale', 'on credit'],
    correctIndex: 0
  },
  {
    id: 'finance-q229',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-229',
    type: 'drag',
    prompt: 'They asked for an ____ before starting.',
    options: ['upfront payment', 'overdraft', 'loan term', 'wire transfer fee'],
    correctIndex: 0
  },
  {
    id: 'finance-q230',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-230',
    type: 'drag',
    prompt: 'The service requires ____. ',
    options: ['payment in advance', 'loan approval', 'joint accounts', 'shopping sprees'],
    correctIndex: 0
  },

  {
    id: 'finance-q231',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-231',
    type: 'drag',
    prompt: 'A ____ helps them reach their goals.',
    options: ['financial plan', 'shopping spree', 'wire transfer', 'joint account'],
    correctIndex: 0
  },
  {
    id: 'finance-q232',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-232',
    type: 'drag',
    prompt: 'Paying off a small loan is a ____. ',
    options: ['short-term goal', 'joint account', 'service charge', 'side hustle'],
    correctIndex: 0
  },
  {
    id: 'finance-q233',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-233',
    type: 'drag',
    prompt: 'Buying a house is a ____. ',
    options: ['long-term goal', 'budget app', 'service charge', 'shopping spree'],
    correctIndex: 0
  },
  {
    id: 'finance-q234',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-234',
    type: 'drag',
    prompt: 'Their ____ is paying off debt.',
    options: ['financial priority', 'overdraft protection', 'side hustle', 'wire transfer'],
    correctIndex: 0
  },
  {
    id: 'finance-q235',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-235',
    type: 'drag',
    prompt: 'Use a spreadsheet to ____ your financial progress.',
    options: ['track', 'ignore', 'hide', 'spend'],
    correctIndex: 0
  },
  {
    id: 'finance-q236',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-236',
    type: 'drag',
    prompt: 'They ____ for the next five years.',
    options: ['set financial goals', 'cancel subscriptions', 'split the rent', 'log into accounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q237',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-237',
    type: 'drag',
    prompt: 'It is hard to ____ during holidays.',
    options: ['stick to the plan', 'go bankrupt', 'miss payments', 'live on less'],
    correctIndex: 0
  },
  {
    id: 'finance-q238',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-238',
    type: 'drag',
    prompt: 'They had to ____ after a rent increase.',
    options: ['adjust the budget', 'cancel income', 'lose benefits', 'split the stock'],
    correctIndex: 0
  },
  {
    id: 'finance-q239',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-239',
    type: 'drag',
    prompt: 'They ____ once a month.',
    options: ['review their finances', 'go on a shopping spree', 'miss payments', 'default on loans'],
    correctIndex: 0
  },
  {
    id: 'finance-q240',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-240',
    type: 'drag',
    prompt: 'Budget apps help you ____. ',
    options: ['stay on track', 'overspend freely', 'ignore bills', 'miss due dates'],
    correctIndex: 0
  },

  {
    id: 'finance-q241',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-241',
    type: 'drag',
    prompt: 'He went on a ____ after payday.',
    options: ['shopping spree', 'loan term', 'wire transfer', 'budget meeting'],
    correctIndex: 0
  },
  {
    id: 'finance-q242',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-242',
    type: 'drag',
    prompt: '____ can destroy your budget.',
    options: ['Impulse buying', 'Online banking', 'Joint accounts', 'Loan approvals'],
    correctIndex: 0
  },
  {
    id: 'finance-q243',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-243',
    type: 'drag',
    prompt: 'She was shocked by the ____. ',
    options: ['price tag', 'loan officer', 'digital wallet', 'budget app'],
    correctIndex: 0
  },
  {
    id: 'finance-q244',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-244',
    type: 'drag',
    prompt: 'The jacket is ____ this weekend.',
    options: ['on sale', 'on loan', 'on overdraft', 'on subscription'],
    correctIndex: 0
  },
  {
    id: 'finance-q245',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-245',
    type: 'drag',
    prompt: 'Use this ____ to save 10%.',
    options: ['discount code', 'service charge', 'loan term', 'salary slip'],
    correctIndex: 0
  },
  {
    id: 'finance-q246',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-246',
    type: 'drag',
    prompt: 'They ____ to reduce costs.',
    options: ['buy in bulk', 'go bankrupt', 'default on loans', 'split stocks'],
    correctIndex: 0
  },
  {
    id: 'finance-q247',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-247',
    type: 'drag',
    prompt: '____ helps you find the best deal.',
    options: ['Comparison shopping', 'Impulse buying', 'Loan refinancing', 'Standing orders'],
    correctIndex: 0
  },
  {
    id: 'finance-q248',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-248',
    type: 'drag',
    prompt: 'That second-hand bike was a real ____. ',
    options: ['bargain', 'overdraft', 'subscription', 'service charge'],
    correctIndex: 0
  },
  {
    id: 'finance-q249',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-249',
    type: 'drag',
    prompt: 'She always ____ before buying.',
    options: ['looks for deals', 'misses payments', 'defaults on loans', 'logs out'],
    correctIndex: 0
  },
  {
    id: 'finance-q250',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-250',
    type: 'drag',
    prompt: 'We are a bit ____ this month.',
    options: ['tight on money', 'rich in stocks', 'overloaded with discounts', 'free of expenses'],
    correctIndex: 0
  },

  {
    id: 'finance-q251',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-251',
    type: 'drag',
    prompt: '____ can prevent declined payments.',
    options: ['Overdraft protection', 'Shopping sprees', 'Side hustles', 'Joint accounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q252',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-252',
    type: 'drag',
    prompt: 'She rarely uses her ____now.',
    options: ['checkbook', 'digital wallet', 'budget app', 'loan term'],
    correctIndex: 0
  },
  {
    id: 'finance-q253',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-253',
    type: 'drag',
    prompt: 'They sent a ____ to another country.',
    options: ['wire transfer', 'shopping spree', 'loan officer', 'budget app'],
    correctIndex: 0
  },
  {
    id: 'finance-q254',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-254',
    type: 'drag',
    prompt: 'The rent is paid by ____. ',
    options: ['standing order', 'side hustle', 'discount code', 'cash advance'],
    correctIndex: 0
  },
  {
    id: 'finance-q255',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-255',
    type: 'drag',
    prompt: 'Streaming services use ____. ',
    options: ['recurring payments', 'wire transfers', 'loan officers', 'joint accounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q256',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-256',
    type: 'drag',
    prompt: 'He decided to ____ to save money.',
    options: ['cancel a subscription', 'increase rent', 'miss payments', 'take a loan shark'],
    correctIndex: 0
  },
  {
    id: 'finance-q257',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-257',
    type: 'drag',
    prompt: 'Always read the ____ at your bank.',
    options: ['fee schedule', 'price tag', 'digital wallet', 'side hustle'],
    correctIndex: 0
  },
  {
    id: 'finance-q258',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-258',
    type: 'drag',
    prompt: 'There is a ____ on each transfer.',
    options: ['service charge', 'loan term', 'dividend', 'joint account'],
    correctIndex: 0
  },
  {
    id: 'finance-q259',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-259',
    type: 'drag',
    prompt: 'Only the ____ can make changes.',
    options: ['account holder', 'tenant', 'co-signer', 'shopper'],
    correctIndex: 0
  },
  {
    id: 'finance-q260',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-260',
    type: 'drag',
    prompt: 'They opened a ____ after getting married.',
    options: ['joint account', 'wire transfer', 'loan term', 'standing order'],
    correctIndex: 0
  },

  {
    id: 'finance-q261',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-261',
    type: 'drag',
    prompt: 'A ____ can help you track expenses.',
    options: ['budget app', 'shopping spree', 'loan shark', 'chequebook'],
    correctIndex: 0
  },
  {
    id: 'finance-q262',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-262',
    type: 'drag',
    prompt: '____ makes it easy to pay bills.',
    options: ['Online banking', 'Impulse buying', 'Overdraft fees', 'Wire transfers only'],
    correctIndex: 0
  },
  {
    id: 'finance-q263',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-263',
    type: 'drag',
    prompt: '____ is popular in many countries.',
    options: ['Mobile payment', 'Standing orders', 'Loan sharks', 'Cheque writing'],
    correctIndex: 0
  },
  {
    id: 'finance-q264',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-264',
    type: 'drag',
    prompt: 'She added her card to a ____. ',
    options: ['digital wallet', 'joint account', 'chequebook', 'loan term'],
    correctIndex: 0
  },
  {
    id: 'finance-q265',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-265',
    type: 'drag',
    prompt: '____ prevent late fees.',
    options: ['Automatic bill payments', 'Shopping sprees', 'Missed payments', 'Loan shark visits'],
    correctIndex: 0
  },
  {
    id: 'finance-q266',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-266',
    type: 'drag',
    prompt: '____ to see your balance.',
    options: ['Log into your account', 'Split the rent', 'Cancel a subscription', 'Sleep on a purchase'],
    correctIndex: 0
  },
  {
    id: 'finance-q267',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-267',
    type: 'drag',
    prompt: 'You can ____ online.',
    options: ['update your details', 'go on a shopping spree', 'split a paycheck', 'refinance a friend'],
    correctIndex: 0
  },
  {
    id: 'finance-q268',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-268',
    type: 'drag',
    prompt: 'He ____ for low balance.',
    options: ['set up alerts', 'missed payments', 'canceled benefits', 'raised rent'],
    correctIndex: 0
  },
  {
    id: 'finance-q269',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-269',
    type: 'drag',
    prompt: '____ is quick and convenient.',
    options: ['Contactless payment', 'Chequebook writing', 'Loan sharking', 'Wire-transfer paperwork'],
    correctIndex: 0
  },
  {
    id: 'finance-q270',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-270',
    type: 'drag',
    prompt: '____ adds security to your account.',
    options: ['Two-factor authentication', 'Impulse buying', 'Shopping sprees', 'Overdrafts'],
    correctIndex: 0
  },

  {
    id: 'finance-q271',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-271',
    type: 'drag',
    prompt: 'Their ____ was approved.',
    options: ['loan application', 'price tag', 'shopping spree', 'paycheck stub'],
    correctIndex: 0
  },
  {
    id: 'finance-q272',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-272',
    type: 'drag',
    prompt: 'A ____ is required before renting an apartment.',
    options: ['credit check', 'shopping spree', 'wire transfer', 'discount code'],
    correctIndex: 0
  },
  {
    id: 'finance-q273',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-273',
    type: 'drag',
    prompt: 'He needed a ____ for the car loan.',
    options: ['co-signer', 'tenant', 'landlord', 'account holder'],
    correctIndex: 0
  },
  {
    id: 'finance-q274',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-274',
    type: 'drag',
    prompt: 'The ____ is 10 years.',
    options: ['loan term', 'shopping spree', 'wire fee', 'overdraft limit'],
    correctIndex: 0
  },
  {
    id: 'finance-q275',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-275',
    type: 'drag',
    prompt: 'They decided to ____ to get a lower rate.',
    options: ['refinance a loan', 'go on a shopping spree', 'cancel all accounts', 'sleep on a purchase'],
    correctIndex: 0
  },
  {
    id: 'finance-q276',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-276',
    type: 'drag',
    prompt: 'She received a ____ credit offer.',
    options: ['pre-approved', 'overdrawn', 'bankrupt', 'expired'],
    correctIndex: 0
  },
  {
    id: 'finance-q277',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-277',
    type: 'drag',
    prompt: 'The ____ explained the conditions.',
    options: ['loan officer', 'tenant', 'landlord', 'cashier'],
    correctIndex: 0
  },
  {
    id: 'finance-q278',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-278',
    type: 'drag',
    prompt: 'A long ____ can be helpful.',
    options: ['credit history', 'shopping list', 'fee schedule', 'lease agreement'],
    correctIndex: 0
  },
  {
    id: 'finance-q279',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-279',
    type: 'drag',
    prompt: '____ can hurt your credit score.',
    options: ['Missing a payment', 'Using a budget app', 'Saving for a rainy day', 'Living below your means'],
    correctIndex: 0
  },
  {
    id: 'finance-q280',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-280',
    type: 'drag',
    prompt: 'They celebrated their ____. ',
    options: ['loan approval', 'shopping spree', 'overdraft fee', 'standing order'],
    correctIndex: 0
  },

  {
    id: 'finance-q281',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-281',
    type: 'drag',
    prompt: 'An emergency fund gives you a ____. ',
    options: ['financial cushion', 'loan shark', 'shopping spree', 'price tag'],
    correctIndex: 0
  },
  {
    id: 'finance-q282',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-282',
    type: 'drag',
    prompt: 'Keep your ____ for your records.',
    options: ['paycheck stubs', 'price tags', 'loan officers', 'discount codes'],
    correctIndex: 0
  },
  {
    id: 'finance-q283',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-283',
    type: 'drag',
    prompt: '____ appears at the top of the stub.',
    options: ['Gross pay', 'Net pay', 'Dividend', 'Service charge'],
    correctIndex: 0
  },
  {
    id: 'finance-q284',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-284',
    type: 'drag',
    prompt: '____ is what hits your bank account.',
    options: ['Net pay', 'Gross pay', 'Standing order', 'Overdraft limit'],
    correctIndex: 0
  },
  {
    id: 'finance-q285',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-285',
    type: 'drag',
    prompt: 'Taxes and benefits are listed as ____. ',
    options: ['deductions', 'dividends', 'overdrafts', 'discounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q286',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-286',
    type: 'drag',
    prompt: 'They calculated their ____ to plan a budget.',
    options: ['take-home pay', 'stock dividends', 'wire fees', 'shopping list'],
    correctIndex: 0
  },
  {
    id: 'finance-q287',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-287',
    type: 'drag',
    prompt: 'She is very ____ for her age.',
    options: ['money-savvy', 'overdrawn', 'insolvent', 'rent-free'],
    correctIndex: 0
  },
  {
    id: 'finance-q288',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-288',
    type: 'drag',
    prompt: 'They learned to ____ after having a baby.',
    options: ['live on less', 'spend without limits', 'ignore bills', 'go on sprees'],
    correctIndex: 0
  },
  {
    id: 'finance-q289',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-289',
    type: 'drag',
    prompt: 'He tries to ____. ',
    options: ['spend on what matters', 'spend on everything', 'avoid saving', 'ignore his budget'],
    correctIndex: 0
  },
  {
    id: 'finance-q290',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-290',
    type: 'drag',
    prompt: 'When you are saving, ____. ',
    options: ['every dollar counts', 'debt is fun', 'bills don’t matter', 'overdrafts are good'],
    correctIndex: 0
  },

  {
    id: 'finance-q291',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-291',
    type: 'drag',
    prompt: '____ can affect mental health.',
    options: ['Financial stress', 'Shopping sprees', 'Discount codes', 'Joint accounts'],
    correctIndex: 0
  },
  {
    id: 'finance-q292',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-292',
    type: 'drag',
    prompt: '____ kept him awake at night.',
    options: ['Money worries', 'Loan approvals', 'Shopping lists', 'Discount codes'],
    correctIndex: 0
  },
  {
    id: 'finance-q293',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-293',
    type: 'drag',
    prompt: 'They don’t need luxury, just enough to ____. ',
    options: ['live comfortably', 'go into debt', 'show off', 'miss payments'],
    correctIndex: 0
  },
  {
    id: 'finance-q294',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-294',
    type: 'drag',
    prompt: 'An emergency fund gives her ____. ',
    options: ['financial peace of mind', 'extra shopping time', 'more overdrafts', 'higher rent'],
    correctIndex: 0
  },
  {
    id: 'finance-q295',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-295',
    type: 'drag',
    prompt: 'Good ____ start with tracking expenses.',
    options: ['money habits', 'loan terms', 'wire transfers', 'shopping sprees'],
    correctIndex: 0
  },
  {
    id: 'finance-q296',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-296',
    type: 'drag',
    prompt: 'Changing your ____ can change your future.',
    options: ['money mindset', 'lease agreement', 'wire fee', 'discount code'],
    correctIndex: 0
  },
  {
    id: 'finance-q297',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-297',
    type: 'drag',
    prompt: 'They try to ____ to save more.',
    options: ['live below their means', 'live above their means', 'ignore their budget', 'miss payments'],
    correctIndex: 0
  },
  {
    id: 'finance-q298',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-298',
    type: 'drag',
    prompt: 'The basic rule is to ____. ',
    options: ['spend less than you earn', 'spend more than you earn', 'avoid saving', 'ignore bills'],
    correctIndex: 0
  },
  {
    id: 'finance-q299',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-299',
    type: 'drag',
    prompt: 'He likes to ____ before buying anything big.',
    options: ['sleep on a purchase', 'go on a spree', 'ignore the price', 'take a loan shark'],
    correctIndex: 0
  },
  {
    id: 'finance-q300',
    categoryId: FINANCE_CATEGORY_ID,
    wordId: 'finance-300',
    type: 'drag',
    prompt: 'Smart money decisions help you ____. ',
    options: ['build a better future', 'stay in debt forever', 'avoid all savings', 'lose your budget'],
    correctIndex: 0
  }

]
;

// Get all questions for a category
export function getQuestionsForCategory(categoryId: string): QuizQuestion[] {
  return QUIZ_QUESTIONS.filter((q) => q.categoryId === categoryId);
}

// Helper to sanity check that the category id exists in CATEGORIES
export function categoryExists(categoryId: string): boolean {
  return CATEGORIES.some((c) => c.id === categoryId);
}
