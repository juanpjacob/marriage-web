function Question({ question, onSelectAnswer }) {
  return (
    <div className="question">
      <p className="questionText">
        {question.number}. {question.text}
      </p>
      {question.options.map((option) => (
        <button
          className="option"
          key={option.value}
          onClick={() => onSelectAnswer(question.number, option.value)}
        >
          <span className="value">{option.value}</span>
          <span className="option">{option.text}</span>
        </button>
      ))}
    </div>
  );
}

export default Question;
