import React from "react";

type Props = {
  question: string;
  answers: string[]; // Changed to plural to match the map function
  callback: (e: React.MouseEvent<HTMLButtonElement>, answer: string) => void; // Updated type to handle the callback correctly
  userAnswer: any; // Allows null to indicate no answer selected
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} /> {/* Closed p tag */}
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button
            disabled={!!userAnswer} // Disable if user has selected an answer
            onClick={(e) => callback(e, answer)} // Pass the answer to the callback
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
