interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

interface QuestionCardProps {
  question: Question;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-primary mb-2">
        {question.question}
      </h2>
      <p className="text-gray-600">{question.answer}</p>
    </div>
  );
}
