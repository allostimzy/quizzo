import questionsJson from "../../questions.json";

export default function QuestionTab({ questionIndex, showAnswer }) {
  return (
    <div className="text-justify">
      {questionIndex === null ? (
        <p className="text-[40px]">No Active Question! Please select a question</p>
      ) : (
        <>
          <div className="mb-8">
            <h3 className="font-bold text-[40px] mb-4">
              Question {questionIndex}:
            </h3>
            <p className="text-gray-800">
              {questionsJson[questionIndex - 1].question}
            </p>
          </div>

          {showAnswer && (
            <div className="pl-6 text-green-600">
              <h3 className="font-semibold text-[40px] mb-2.5">Answer:</h3>
              <p className="text-gray-700s">
                {questionsJson[questionIndex - 1].answer}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
