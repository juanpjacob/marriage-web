import { useState } from 'react';

function useQuestionsState(questions) {
  const [answers, setAnswers] = useState(
    questions ? questions.map(() => '') : []
  );

  function setAnswer(number, option) {
    setAnswers([
      ...answers.slice(0, number),
      option,
      ...answers.slice(number + 1),
    ]);
  }

  return { setAnswer, answers };
}

export default useQuestionsState;
