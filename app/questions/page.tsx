import questions from '../../data/questions.json';
import QuestionCard from '../../components/QuestionCard';

interface Question {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function QuestionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">HR Interview Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {questions.questions.map((q: Question) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}