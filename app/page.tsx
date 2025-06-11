import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to HR Interview Prep</h1>
      <p className="text-lg mb-6">Prepare for your front-end HR interviews with our curated questions.</p>
      <Link href="/questions">
        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
          View Questions
        </button>
      </Link>
    </div>
  );
}