export default function QuestionCard({ question: any }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-primary mb-2">
        {question.question}
      </h2>
      <p className="text-gray-600">{question.answer}</p>
    </div>
  );
}
