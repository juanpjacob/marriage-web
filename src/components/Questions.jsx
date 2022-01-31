import supabase from '../lib/supabase';
import useFetchQuestions from '../hooks/useFetchQuestions';
import Question from './Question';

function Questions() {
  const { questions, loading, answers, setAnswer } = useFetchQuestions();

  function mapAnswers() {
    return answers.reduce((insertObject, answer, i) => {
      const key = `question_${i + 1}`;
      return { ...insertObject, [key]: answer };
    }, {});
  }

  async function sendAnswers() {
    console.log({ answers });
    const { data, error } = await supabase
      .from('answers')
      .insert([mapAnswers()]);
    console.log({ data });
    console.log({ error });
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.number}
          question={question}
          onSelectAnswer={setAnswer}
        />
      ))}
      <button className="submit" onClick={sendAnswers}>
        Enviar
      </button>
    </>
  );
}

export default Questions;
