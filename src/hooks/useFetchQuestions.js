import { useState, useEffect } from 'react';

function useFetchQuestions() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (questions) {
      setLoading(false);
      setAnswers(questions.map(() => ''));
    }
  }, [questions]);

  useEffect(() => {
    fetch('/questions.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function setAnswer(questionNumber, selectedOption) {
    setAnswers([
      ...answers.slice(0, questionNumber - 1),
      selectedOption,
      ...answers.slice(questionNumber),
    ]);
  }

  return { questions, loading, answers, setAnswer };
}

export default useFetchQuestions;
