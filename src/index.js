import { question } from 'readline-sync';

const roundsCount = 3;

const playGame = (description = '', generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n\n`);
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('\n');
  for (let i = 0; i < roundsCount; i += 1) {
    const [questionOfRound, rightAnswer] = generateQuestionAndAnswer();
    console.log(`Question: ${questionOfRound}`);
    const playerAnswer = question('Your answer: ').toLowerCase();

    if (playerAnswer === rightAnswer) {
      console.log('Correct');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
