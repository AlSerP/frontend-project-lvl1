import getRandomNum from '../modules/getRandomNum';
import playGame from '..';

const length = 10;
const description = 'What numder is missing in the progresion?';
const generateQuestion = (beginningP, stepP, unknownElement, lengthP) => {
  let questionText = '';
  for (let i = 0; i < lengthP; i += 1) {
    if (i === unknownElement) questionText = `${questionText} ... `;
    else questionText = `${questionText} ${beginningP + stepP * i} `;
  }

  return questionText.slice(0, -1);
};

const generateQuestionAndAnswer = () => {
  const beginning = getRandomNum(0, 50);
  const step = getRandomNum(1, 10);
  const unknownElementIndex = getRandomNum(0, length - 1);

  const question = generateQuestion(beginning, step, unknownElementIndex, length);
  const answer = String(beginning + (unknownElementIndex * step));

  return [question, answer];
};

const startGame = () => playGame(description, generateQuestionAndAnswer);

export default startGame;
